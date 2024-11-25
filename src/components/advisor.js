import { useState } from "react";

const Advisor = () => {
    const [caseDescription, setCaseDescription] = useState("");
    const [response, setResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAnalyze = async () => {
        setLoading(true);
        setError(null);
        setResponse(null);

        try {
            const res = await fetch("http://127.0.0.1:5000/api/point-analyze", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ caseDescription }),
            });

            if (!res.ok) {
                throw new Error("Failed to fetch data");
            }

            const data = await res.json();
            setResponse(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Legal Case Analyzer</h1>
            <textarea
                rows={6}
                placeholder="Enter case description..."
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
                style={{ width: "100%", marginBottom: "20px" }}
            />
            <button onClick={handleAnalyze} disabled={loading} style={{ padding: "10px 20px" }}>
                {loading ? "Analyzing..." : "Analyze Case"}
            </button>

            {error && <p style={{ color: "red" }}>Error: {error}</p>}

            {response && (
                <div style={{ marginTop: "20px" }}>
                    <h2>Point-Formatted Analysis</h2>
                    <h3>Flash Analysis</h3>
                    <pre>{response.point_formatted_flash_analysis}</pre>
                    <h3>Pro Analysis</h3>
                    <pre>{response.point_formatted_pro_analysis}</pre>
                </div>
            )}
        </div>
    );
};

export default Advisor;
