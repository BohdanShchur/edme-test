import React from "react";
import clsx from "clsx";

import { IMoon } from "../types";

type MoonProps = {
    data: IMoon
    addOrbitCount: () => void
    decreaseOrbitCount: () => void
}

export const Moon = ({data, addOrbitCount, decreaseOrbitCount}: MoonProps) => {
    const [active, setActives] = React.useState(false);

    const selectMoon = React.useCallback(() => {
        setActives(prev => !prev);
        active ? decreaseOrbitCount() : addOrbitCount();
    }, [active, addOrbitCount, decreaseOrbitCount])

    return (
        <div 
            className={clsx("moon", active && "active")}
            onClick={selectMoon}
        >
            <h5>{data.title}</h5>
        </div>
    )
}