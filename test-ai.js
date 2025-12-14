// test-ai.js
const fetch = global.fetch || require("node-fetch");

async function testAI() {
  try {
    const response = await fetch("http://localhost:3000/api/openai", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt: "Write a commit message for fixing login bug"
      }),
    });

    const data = await response.json();
    console.log("AI Response:", data.text);
  } catch (err) {
    console.error("Error:", err);
  }
}

testAI();
