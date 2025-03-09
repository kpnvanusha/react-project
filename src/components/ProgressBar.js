import { useState } from "react";

const ProgressBar = () => {
    const [progress,setProgress] = useState(0);
    handleProgressBar = () => {
        setProgress(progress + 1);
    }
    return (
        <>
            <h1>Progress bar</h1>
            <div className="progress-container">
                <div className="progress-bar" style={{width: progress + '%'}}>{progress}%</div>
            </div>
            <button className="increment-btn" onClick={handleProgressBar}>Increment</button>
        </>
    )
}
export default ProgressBar;