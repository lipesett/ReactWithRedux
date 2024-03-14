import React from "react";

export default function WithParams(props) {
    const status = props.note >= 7 ? "APPROVED" : "REPROVED"
    return (
        <div>
            <h1>{props.title}</h1>
            <p>
                <strong>{props.student} </strong>
                has a grade of
                <strong> {props.note}</strong>
                and he was
                <strong> {status}!</strong>
            </p>
        </div>
    );
}