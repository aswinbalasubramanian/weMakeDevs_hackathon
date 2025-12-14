// interactive-ai-test.js
const fetch = global.fetch || require("node-fetch");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

async function askAI(prompt) {
  try {
    const response = await fetch("http://localhost:3000/api/openai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });
    const data = await response.json();
    console.log("\nAI Response:\n", data.text, "\n");
  } catch (err) {
    console.error("Error:", err);
  }
}

function promptUser() {
  rl.question("Enter prompt (or 'exit' to quit): ", async (input) => {
    if (input.toLowerCase() === 'exit') {
      rl.close();
      return;
    }
    await askAI(input);
    promptUser();
  });
}

console.log("Interactive AI Test. Type your prompt below:");
promptUser();
