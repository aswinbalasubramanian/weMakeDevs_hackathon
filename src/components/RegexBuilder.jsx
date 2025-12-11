import { useState } from "react";
import { Input, Button } from "antd";
import { askAI } from "../services/aiService";

export default function RegexBuilder() {
  const [pattern, setPattern] = useState("");
  const [result, setResult] = useState("");

  const build = async () => {
    if (!pattern.trim()) return;
    const res = await askAI(`Convert this into a regex: ${pattern}`);
    setResult(res);
  };

  return (
    <div>
      <Input
        placeholder="Enter your pattern..."
        value={pattern}
        onChange={(e) => setPattern(e.target.value)}
      />

      <Button type="primary" onClick={build} style={{ marginTop: 10 }}>
        Build Regex
      </Button>

      {result && (
        <pre style={{ marginTop: 10, background: "#fafafa", padding: 10 }}>
          {result}
        </pre>
      )}
    </div>
  );
}
