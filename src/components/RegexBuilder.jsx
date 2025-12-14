import { useState } from "react";
import { Input, Button } from "antd";
import { askAI } from "../services/aiService";

export default function RegexBuilder() {
  const [pattern, setPattern] = useState("");
  const [result, setResult] = useState("");


  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const build = async () => {
    if (!pattern.trim()) return;

    setLoading(true);
    setError("");
    try {
      const res = await askAI(`Convert this into a regex: ${pattern}`);
      setResult(res);
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Input
        placeholder="Enter your pattern..."
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />

      <Button type="primary" onClick={build} loading={loading} 
      disabled={!pattern.trim()}
      style={{ marginTop: 10 }}>
        Build Regex
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {result && (
        <pre style={{ marginTop: 10, background: "#fafafa", padding: 10 }}>
          {result}
        </pre>
      )}
    </div>
  );
}
