const PLANET_SIZE = 100;

const getOrbitsParams = (count: number) => {
    const params = [];
    for (let i = 1; i <= count; i++ ) {
        params.push({
            size: PLANET_SIZE + (i*10)
        })
    }
    return params;
}

type PlanetProps = {
    planetInfo: {
        id: number
        title: string
    }
    orbitCount: number
}

export const Planet = ({planetInfo, orbitCount}: PlanetProps) => {

    const orbits = getOrbitsParams(orbitCount);

    return (
        <div className="planet-wrapper">
            <div className="planet">
                <h4>{planetInfo.title} {!!orbitCount && orbitCount}</h4>
            </div>
            {orbits.map(o => ( 
                <div 
                    key={planetInfo.title + o.size}
                    className="orbit"
                    style={{
                        height: o.size,
                        width: o.size,
                    }}>
                </div>
            ))}
        </div>
    )
}