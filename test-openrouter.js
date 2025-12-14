const fetch = global.fetch || require("node-fetch");

async function test() {
  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-3.5-turbo",
      messages: [{ role: "user", content: "Say only: OpenRouter works" }],
    }),
  });

  const data = await res.json();
  console.log(data.choices?.[0]?.message?.content || data);
}

test();
