const fetch = global.fetch || require("node-fetch");

async function testKey() {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        { role: "user", content: "Say only: key works" }
      ],
    }),
  });

  const data = await res.json();
  console.log(data);
}

testKey();
