import React from 'react';
import { useParams } from 'react-router-dom';
import CodeEditor from '../../components/CodeEditor/CodeEditor';
import './OnlineCompiler.css';

const OnlineCompiler = () => {
    const { language } = useParams();

    return (
        <div className="online-compiler">
            <header className="compiler-header">
                <h1>{language.charAt(0).toUpperCase() + language.slice(1)} Online Compiler</h1>
            </header>
            <CodeEditor language={language} />
        </div>
    );
};

export default OnlineCompiler;