// export async function askAI(prompt) {
//   const resp = await fetch("/api/openai", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ prompt }),
//   });

//   if (!resp.ok) {
//     const err = await resp.json().catch(() => null);
//     throw new Error(err?.error ?? `Request failed: ${resp.status}`);
//   }

//   const { text } = await resp.json();
//   return text ?? "";
// }

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
  method: "POST",
  headers: {
    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    model: "openai/gpt-3.5-turbo",
    messages: [{ role: "user", content: prompt }],
  }),
});