"use client";

import { FormEvent, useState } from "react";
import { chatHost } from "@/lib/content";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hej! Maja här från Brunnsgatan 41. Kul att du hör av dig. Vill du boka bord, eller undrar du något om menyn, vinet eller hur kvällen funkar?",
    },
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || busy) return;
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: nextMessages.map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = (await res.json()) as { reply?: string };
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data.reply ||
            "Oj, jag tappade dig där en sekund. Kan du skriva igen, eller mejla info@brunnsgatan41.com så tar vi det där?",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Oj, något strulade just nu. Mejla gärna info@brunnsgatan41.com så hjälper jag dig därifrån.",
        },
      ]);
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 z-[100] grid h-14 w-14 place-items-center rounded-full border border-forest/30 bg-terracotta text-linen shadow-[0_16px_40px_rgba(0,0,0,0.45)] transition hover:bg-terracotta-deep md:right-5"
        aria-label={open ? "Stäng chatt" : `Chatta med ${chatHost.name}`}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
          <path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4 8.4 8.4 0 0 1-4-1L3 20l1.2-4.5a8.4 8.4 0 1 1 16.8-4Z" />
        </svg>
      </button>
      {open ? (
        <div
          className="fixed inset-x-3 bottom-[calc(4.5rem+env(safe-area-inset-bottom))] z-[100] flex h-[min(70dvh,560px)] w-auto flex-col overflow-hidden rounded-2xl border border-gold-hairline/50 bg-linen shadow-[0_30px_80px_rgba(0,0,0,0.55)] sm:inset-x-auto sm:right-5 sm:bottom-24 sm:h-[min(560px,calc(100dvh-150px))] sm:w-[min(380px,calc(100vw-2rem))]"
          role="dialog"
          aria-label={`Chatta med ${chatHost.name} på Brunnsgatan 41`}
        >
          <div className="flex items-center justify-between border-b border-gold-hairline/40 bg-linen px-4 py-3.5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="grid h-10 w-10 place-items-center rounded-full bg-forest text-sm font-semibold text-linen"
                  aria-hidden="true"
                >
                  {chatHost.name.slice(0, 1)}
                </div>
                <span
                  className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-linen bg-[#3FA86B]"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="font-display text-base leading-tight text-ink">{chatHost.name}</p>
                <p className="mt-0.5 flex items-center gap-1.5 text-[0.7rem] text-forest">
                  <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#3FA86B]" aria-hidden="true" />
                  Live · {chatHost.role}
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-2xl leading-none text-ink/70"
              aria-label="Stäng chatt"
            >
              ×
            </button>
          </div>
          <div className="flex flex-1 flex-col gap-3 overflow-y-auto bg-linen p-4">
            {messages.map((msg, i) => (
              <div
                key={`${msg.role}-${i}`}
                className={`flex max-w-[90%] gap-2 ${
                  msg.role === "user" ? "ml-auto flex-row-reverse" : "items-end"
                }`}
              >
                {msg.role === "assistant" ? (
                  <div
                    className="mb-0.5 grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest text-[0.65rem] font-semibold text-linen"
                    aria-hidden="true"
                  >
                    {chatHost.name.slice(0, 1)}
                  </div>
                ) : null}
                <div
                  className={`rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "rounded-br-sm bg-terracotta text-linen"
                      : "rounded-bl-sm border border-gold-hairline/40 bg-clay text-ink"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}
            {busy ? (
              <div className="flex items-end gap-2">
                <div
                  className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-forest text-[0.65rem] font-semibold text-linen"
                  aria-hidden="true"
                >
                  {chatHost.name.slice(0, 1)}
                </div>
                <div className="rounded-2xl rounded-bl-sm border border-gold-hairline/40 bg-clay px-4 py-3 text-sm text-ink/70">
                  {chatHost.name} skriver...
                </div>
              </div>
            ) : null}
          </div>
          <form
            onSubmit={onSubmit}
            className="flex gap-2 border-t border-gold-hairline/40 bg-forest-deep p-3"
          >
            <label htmlFor="chatInput" className="sr-only">
              Skriv till {chatHost.name}
            </label>
            <input
              id="chatInput"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={`Skriv till ${chatHost.name}...`}
              autoComplete="off"
              className="flex-1 rounded-full border border-gold-hairline/40 bg-linen px-4 py-2.5 text-sm text-ink outline-none focus:border-clay"
            />
            <button
              type="submit"
              disabled={busy}
              className="grid h-10 w-10 place-items-center rounded-full bg-terracotta text-linen disabled:opacity-50"
              aria-label="Skicka"
            >
              →
            </button>
          </form>
        </div>
      ) : null}
    </>
  );
}
