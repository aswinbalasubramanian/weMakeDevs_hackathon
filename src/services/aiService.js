export async function askAI(prompt) {
  
  prompt = prompt?.trim();
  if (!prompt) return "";
  
  const resp = await fetch("/api/openai", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!resp.ok) {
    const err = await resp.json().catch(() => null);
    throw new Error(err?.error ?? `Request failed: ${resp.status}`);
  }

  const { text } = await resp.json();
  return text ?? "";
}
