import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Bns from "./components/bns";
import Advisor from "./components/advisor";
import JudgmentAnalyzer from "./components/judgment";

const App = () => {
    return (
        <Router>
            <div style={{ padding: "20px" }}>
                <h1>Legal Assistance System</h1>
                <nav>
                    <Link to="/" style={{ marginRight: "20px" }}>Home</Link>
                    <Link to="/bns-advisor" style={{ marginRight: "20px" }}>BNS Advisor</Link>
                    <Link to="/legal-advisor" style={{ marginRight: "20px" }}>Legal Advisor</Link>
                    <Link to="/judgment-analyzer">Judgment Analyzer</Link>
                </nav>

                <hr />

                <Routes>
                    <Route path="/" element={<h2>Welcome to Legal Assistance System</h2>} />
                    <Route path="/bns-advisor" element={<Bns />} />
                    <Route path="/legal-advisor" element={<Advisor />} />
                    <Route path="/judgment-analyzer" element={<JudgmentAnalyzer />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
