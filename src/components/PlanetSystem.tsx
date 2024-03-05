import React from "react";
import { Planet } from "./Planet";
import { Moon } from "./Moon";

import { IPlanetSystem } from "../types";


export const PlanetSystem = ({moons, ...rest}: IPlanetSystem) => {
    const [orbitCount, setOrbitCount] = React.useState(0);

    const addOrbitCount = React.useCallback(() => {
        setOrbitCount(prev => prev + 1)
    }, []);

    const decreaseOrbitCount = React.useCallback(() => {
        setOrbitCount(prev => prev - 1)
    }, []);

  
    return(
        <section className="planet-system">
            <Planet planetInfo={rest} orbitCount={orbitCount} />
            <div style={{display: "flex"}}>
                {moons.map(m => 
                    <Moon
                        key={m.id}
                        data={m}
                        addOrbitCount={addOrbitCount}
                        decreaseOrbitCount={decreaseOrbitCount}
                    />)  
                }
            </div>
        </section>
    )
}