import 'dotenv/config';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;
  if (!prompt) {
    return res.status(400).json({ error: 'Prompt missing' });
  }

  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "http://localhost",
        "X-Title": "dev-productivity-hub",
      },
      body: JSON.stringify({
        model: "openai/gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    // Check for upstream errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      return res.status(response.status).json({ error: errorData?.error ?? response.statusText });
    }

    const data = await response.json();

    return res.status(200).json({
      text: data.choices?.[0]?.message?.content ?? "",
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
