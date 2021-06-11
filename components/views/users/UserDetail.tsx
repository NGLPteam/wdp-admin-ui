import { useGlobalData } from "hooks/useGlobalData";
import React from "react";

export default function UserDetail() {
    const {
        state: { activeId: id },
    } = useGlobalData();

    return (
        <div>
            <h1>User: {id}</h1>
        </div>
    );
}
