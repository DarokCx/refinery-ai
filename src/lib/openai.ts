import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_BASE_URL,  
});

export async function rewriteText(prompt: string, action: "rewrite" | "summarize" | "formalize") {
  const actionPrefix = {
    rewrite: "Rewrite the following text to improve its clarity:",
    summarize: "Summarize the following text in a few sentences:",
    formalize: "Rewrite the following text in a formal tone:",
  };

  const completion = await openai.chat.completions.create({
    model: "EVA-UNIT-01/EVA-Qwen2.5-32B-v0.2",
    messages: [
      { role: "system", content: "You are a helpful writing assistant. You will answer in the same language of the supplied text after the first ':'" },
      { role: "user", content: `${actionPrefix[action]} \n\n${prompt}` },
    ],
    temperature: 0.7,
    max_tokens: 500,
  });

  return completion.choices[0].message?.content || "";
}
