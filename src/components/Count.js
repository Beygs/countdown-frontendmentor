import React from "react";

const Count = ({unit, num}) => {
    return (
        <div className="container count">
            <div className="card">
                <div className="digit-top">
                    <div className="front">{num}</div>
                    <div className="back">{num}</div>
                </div>
                <div className="digit-bottom">
                    <div className="front">{num}</div>
                </div>
            </div>
            <div className="unit">{unit}</div>
        </div>
    )
}

export default Count;