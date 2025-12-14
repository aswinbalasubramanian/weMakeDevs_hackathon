import { useState } from "react";
import { Input, Button } from "antd";
import { askAI } from "../services/aiService";

export default function CodeReviewer() {
  const [code, setCode] = useState("");
  const [review, setReview] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


  const reviewCode = async () => {
    if (!code.trim()) return;

    setLoading(true);
        setError("");

    try {
      const res = await askAI(`Review this code:\n${code}`);
      setReview(res);
    } catch (e) {
        setError(e.message);
    } finally {
        setLoading(false);
    }
  };

  return (
    <div>
      <Input.TextArea
        rows={5}
        placeholder="Paste your code..."
        value={code}
        onChange={(e) => setCode(e.target.value)}
      />

      <Button type="primary" onClick={reviewCode} style={{ marginTop: 10 }}>
        Review
      </Button>

      {review && (
        <pre style={{ marginTop: 10, background: "#f0f0f0", padding: 10 }}>
          {review}
        </pre>
      )}
    </div>
  );
}
