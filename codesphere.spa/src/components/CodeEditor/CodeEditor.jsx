import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = ({ language }) => {
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const handleCodeChange = (e) => {
        setCode(e.target.value);
    };

    const runCode = () => {
        // Replace with actual API call to run the code
        setOutput(`Output of the ${language} code: ${code}`);
    };

    return (
        <div className="code-editor-container">
            <div className="code-editor">
                <div className="editor-header">
                    <div className="file-tab">main.{language === 'python' ? 'py' : 'txt'}</div>
                </div>
                <textarea
                    value={code}
                    onChange={handleCodeChange}
                    placeholder={`Write your ${language} code here...`}
                    className="code-input"
                />
                <div className="editor-footer">
                    <button onClick={runCode} className="run-button">Run</button>
                </div>
            </div>
            <div className="output-area">
                <div className="output-header">Output</div>
                <pre className="output-content">{output}</pre>
            </div>
        </div>
    );
};

export default CodeEditor;
