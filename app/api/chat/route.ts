import { NextResponse } from "next/server";
import { chatSystemPrompt } from "@/lib/content";

type IncomingMessage = {
  role: "user" | "assistant";
  content: string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { messages?: IncomingMessage[] };
    const messages = body.messages ?? [];
    const apiKey = process.env.ANTHROPIC_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        {
          reply:
            "Hej! Chatten är lite ur funktion just nu. Mejla info@brunnsgatan41.com så hjälper jag dig boka därifrån.",
        },
        { status: 200 },
      );
    }

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-sonnet-4-6",
        max_tokens: 1000,
        system: chatSystemPrompt,
        messages: messages.map((m) => ({
          role: m.role === "assistant" ? "assistant" : "user",
          content: m.content,
        })),
      }),
    });

    const data = (await response.json()) as {
      content?: Array<{ type: string; text?: string }>;
      error?: { message?: string };
    };

    if (!response.ok) {
      console.error("Anthropic error", data);
      return NextResponse.json(
        {
          reply:
            "Oj, jag tappade dig där. Mejla gärna info@brunnsgatan41.com så tar vi det direkt.",
        },
        { status: 200 },
      );
    }

    const reply =
      (data.content || [])
        .filter((item) => item.type === "text")
        .map((item) => item.text || "")
        .join("\n")
        .trim() || "Ursäkta, kan du säga det där igen?";

    return NextResponse.json({ reply });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        reply:
          "Oj, något strulade just nu. Mejla gärna info@brunnsgatan41.com så tar vi det därifrån.",
      },
      { status: 200 },
    );
  }
}
