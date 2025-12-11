export async function askAI(prompt) {
  // mock response for now
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`AI Response for: ${prompt}`);
    }, 600);
  });
}