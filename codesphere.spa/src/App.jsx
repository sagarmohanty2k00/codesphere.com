import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import OnlineCompiler from './pages/OnlineCompiler/OnlineCompiler';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Routes>
                    <Route path="/online-compiler/:language" element={<OnlineCompiler />} />
                    <Route path="*" element={<Navigate to="/online-compiler/python" />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
