import { useState } from 'react'
import { Input, Button } from 'antd'
import { askAI } from '../services/aiService';

export default function CommitMessageGenerator() {
    const [text, setText] = useState("");
    const [output, setOutput] = useState("");

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const generate = async () => {
        if (!text.trim()) return;

        setLoading(true);
        setError("");

        try {
            const res = await askAI(`Write a commit message for: ${text}`);
            setOutput(res);
        } catch (e) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <Input.TextArea
                rows={3}
                placeholder="Describe your change.."
                value={text}
                onChange={(e) => setText(e.target.value)}
            >
            </Input.TextArea>

            <Button
                type="primary"
                onClick={generate}
                loading={loading}
                disabled={!text.trim()}
            >
                Generate
            </Button>

            {error && <p style={{ color: "red" }}>{error}</p>}
            {output && (
                <pre style={{ marginTop: 10, background: "#f5f5f5", padding: 10 }}>
                    {output}
                </pre>
            )}
        </div>
    )
}