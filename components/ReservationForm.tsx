"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  date: string;
  time: string;
  guests: string;
  contact: string;
  note: string;
};

const times = [
  "17:00",
  "17:30",
  "18:00",
  "18:30",
  "19:00",
  "19:30",
  "20:00",
  "20:30",
  "21:00",
  "21:30",
];

const fieldClass =
  "w-full rounded-lg border border-gold-hairline/40 bg-linen px-3.5 py-3 text-[0.95rem] text-ink outline-none focus:border-forest";

export default function ReservationForm() {
  const today = useMemo(() => new Date().toISOString().split("T")[0], []);
  const [form, setForm] = useState<FormState>({
    name: "",
    date: "",
    time: "",
    guests: "",
    contact: "",
    note: "",
  });
  const [busy, setBusy] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError("");
    try {
      const res = await fetch("/api/reserve", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("fail");
      setDone(true);
    } catch {
      setError("Något gick fel. Mejla info@brunnsgatan41.com så hjälper vi dig.");
    } finally {
      setBusy(false);
    }
  }

  if (done) {
    return (
      <div className="border border-gold-hairline/40 bg-clay/30 p-8 text-center">
        <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-full bg-terracotta text-2xl text-linen">
          ✓
        </div>
        <h3 className="font-display text-2xl text-ink">Din förfrågan är mottagen</h3>
        <p className="mt-3 text-ink/70">Vi hör av oss inom kort för att bekräfta bordet.</p>
        <dl className="mt-6 space-y-1 border border-gold-hairline/40 bg-linen px-4 py-4 text-left text-sm text-ink/70">
          <div>Namn: {form.name}</div>
          <div>Datum: {form.date}</div>
          <div>Tid: {form.time}</div>
          <div>Antal gäster: {form.guests}</div>
          <div>Kontakt: {form.contact}</div>
          {form.note ? <div>Önskemål: {form.note}</div> : null}
        </dl>
        <button
          type="button"
          className="mt-6 w-full rounded-full border border-gold-hairline/40 px-4 py-3 text-sm font-semibold text-ink"
          onClick={() => {
            setDone(false);
            setForm({ name: "", date: "", time: "", guests: "", contact: "", note: "" });
          }}
        >
          Boka ett till bord
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="border border-gold-hairline/40 bg-clay/30 p-6 sm:p-8">
      <h3 className="font-display text-2xl text-ink">Boka bord</h3>
      <p className="mt-2 text-sm text-ink/70">Vi bekräftar alltid personligen innan kvällen.</p>
      <div className="mt-6 space-y-4">
        <Field label="Namn">
          <input
            required
            autoComplete="name"
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className={fieldClass}
          />
        </Field>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Datum">
            <input
              required
              type="date"
              min={today}
              value={form.date}
              onChange={(e) => update("date", e.target.value)}
              className={fieldClass}
            />
          </Field>
          <Field label="Tid">
            <select
              required
              value={form.time}
              onChange={(e) => update("time", e.target.value)}
              className={fieldClass}
            >
              <option value="">Välj tid</option>
              {times.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </Field>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Antal gäster">
            <select
              required
              value={form.guests}
              onChange={(e) => update("guests", e.target.value)}
              className={fieldClass}
            >
              <option value="">Välj antal</option>
              {["1", "2", "3", "4", "5", "6", "7+"].map((g) => (
                <option key={g} value={g}>
                  {g}
                </option>
              ))}
            </select>
          </Field>
          <Field label="Telefon eller e-post">
            <input
              required
              value={form.contact}
              onChange={(e) => update("contact", e.target.value)}
              className={fieldClass}
            />
          </Field>
        </div>
        <Field label="Önskemål (valfritt)">
          <textarea
            rows={2}
            value={form.note}
            onChange={(e) => update("note", e.target.value)}
            placeholder="Allergier, firande, önskat bord..."
            className={fieldClass}
          />
        </Field>
      </div>
      {error ? <p className="mt-3 text-sm text-terracotta">{error}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="mt-6 w-full rounded-full bg-terracotta px-4 py-3.5 text-sm font-semibold tracking-wide text-linen transition hover:bg-terracotta-deep disabled:opacity-60"
      >
        {busy ? "Skickar..." : "Skicka bokningsförfrågan"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-ink/70">
        {label}
      </span>
      {children}
    </label>
  );
}
