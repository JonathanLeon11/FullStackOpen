import React from "react";
import StatisticLine from "./StatisticLine";

const Statistics = ({good, neutral, bad}) => {
    const total = good + neutral + bad;
    const average = total > 0 ? ((good * 1 + bad * (-1)) / total).toFixed(1) : 0;
    const comentPositive = total > 0 ? ((good / total) * 100).toFixed(1) : 0;

    if (total === 0) {
        return (
            <>
                <div>
                    <p>Aun no hay comentarios</p>
                </div>
            </>
        )
    }
    return (
        <>
            <div>
                <h1>statistics</h1>
                <table>
                    <tbody>
                        <StatisticLine text="Good" value={good} />
                        <StatisticLine text="Neutral" value={neutral} />
                        <StatisticLine text="Bad" value={bad} />
                        <StatisticLine text="All" value={total} />
                        <StatisticLine text="Average" value={average} />
                        <StatisticLine text="Positive" value={`${comentPositive} %`} />
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Statistics