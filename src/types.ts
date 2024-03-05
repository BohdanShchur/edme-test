export interface IMoon {
    id: number
    title: string,
    planetId: number
}

export interface IPlanetSystem {
    id: number
    title: string,
    moons: IMoon[]
}