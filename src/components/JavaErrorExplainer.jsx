import { useState } from "react";
import { Input, Button } from "antd";
import { askAI } from "../services/aiService";

export default function JavaErrorExplainer() {
  const [err, setErr] = useState("");
  const [explanation, setExplanation] = useState("");

  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

  const explain = async () => {
    if (!err.trim()) return;

    setLoading(true);
        setError("");
    
    try {
      const res = await askAI(`Explain this Java error: ${err}`);
      setExplanation(res);
    } catch (e) {
        setError(e.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <Input.TextArea
        rows={4}
        placeholder="Paste Java error here..."
        value={err}
        onChange={(e) => setErr(e.target.value)}
      />

      <Button type="primary" onClick={explain} style={{ marginTop: 10 }}>
        Explain
      </Button>

      {explanation && (
        <pre style={{ marginTop: 10, background: "#eee", padding: 10 }}>
          {explanation}
        </pre>
      )}
    </div>
  );
}
