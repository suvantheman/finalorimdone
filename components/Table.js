import React from "react";

export default function Table({ data }) {
    return (
        <table>
            <thead>
                <tr>
                    {data.headers.map(header => (
                        <th key={header}>{header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((col, colIndex) => (
                            <td key={colIndex}>{col}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
};