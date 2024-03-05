import { useEffect, useState } from "react"
import { getPlanetSystems } from "../api/planetSystem";

import { IPlanetSystem } from "../types";

export const usePlanetSystems = () => {
    const [data, setData] = useState<IPlanetSystem[] | []>([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            getPlanetSystems()
            .then((newData) => setData(newData))
            .finally(() =>  setLoading(false))
        }

        fetchData();
    }, [])  

    return {
        data,
        loading,
    }
}