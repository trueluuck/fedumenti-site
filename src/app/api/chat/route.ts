import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

const ASSISTANT_ID = process.env.OPENAI_ASSISTANT_ID!;

export async function POST(req: Request) {
  const { message, threadId: existingThreadId } = await req.json();

  if (!message) {
    return Response.json({ error: "Mensagem vazia." }, { status: 400 });
  }

  // Create or reuse thread
  const threadId =
    existingThreadId ?? (await openai.beta.threads.create({})).id;

  // Add user message
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: message,
  });

  // Run and poll until complete
  const run = await openai.beta.threads.runs.createAndPoll(threadId, {
    assistant_id: ASSISTANT_ID,
  });

  if (run.status !== "completed") {
    return Response.json(
      { error: `Run status: ${run.status}`, threadId },
      { status: 500 }
    );
  }

  // Retrieve the last assistant message
  const messages = await openai.beta.threads.messages.list(threadId, {
    order: "desc",
    limit: 1,
  });

  const lastMsg = messages.data[0];
  const text =
    lastMsg?.role === "assistant" &&
    lastMsg.content?.[0]?.type === "text"
      ? lastMsg.content[0].text.value
      : "Não foi possível obter resposta.";

  return Response.json({ reply: text, threadId });
}
