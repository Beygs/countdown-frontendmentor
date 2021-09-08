import React from "react";

const Count = ({unit, num}) => {
    return (
        <div className="container count">
            <div className="card">
                <div className="card-bg card-up"></div>
                <div className="card-bg card-up"></div>
                <div className="number">{num}</div>
            </div>
            <div className="unit">{unit}</div>
        </div>
    )
}

export default Count;