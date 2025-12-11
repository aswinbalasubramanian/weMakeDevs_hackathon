import { useState } from 'react'
import { Input, Button } from '@ant-design/icons'
import { askAI } from '../services/aiService';

export default function CommitMessageGenerator(){
    const [text, setText] = useState("");
    const [output, setOutput] = useState(""); 

    const generate = async () =>{
        if(!text.trim()) return;
        const res = await askAI(`Write a commit message for: ${text}`);
        setOutput(res);
    }

    return(
        <div>
            <Input.TextArea
                rows={3}
                placeholder="Describe your change.."
                value={text}
                onChange={(e)=> setText(e.target.value)}
            >
            </Input.TextArea>

            <Button type="primary" onClick={generate} style={{marginTop:10}}>Generate</Button>

            {output && (
                <pre style={{ marginTop: 10, background: "#f5f5f5", padding: 10 }}>
                    {output}
                </pre>
            )}
        </div>
    )
}