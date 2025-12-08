import { useEffect, useState } from 'react';
import { type OpenMeteoResponse } from '../types/DashboardTypes';

export interface proceDatita{
    data: OpenMeteoResponse | null,
    isLoading: boolean,
    error: string | null

}

export default function useFetchData(): proceDatita  {

    const  URL = 'https://api.open-meteo.com/v1/forecast?latitude=-0.2298&longitude=-78.525&hourly=temperature_2m,wind_speed_10m&current=temperature_2m,relative_humidity_2m,apparent_temperature,wind_speed_10m';

    const [data, setData] = useState<OpenMeteoResponse | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const[error, setError] = useState<string | null>(null);


    useEffect(() => { 
        const fetchData = async() => {
            try{
                setIsLoading(true);
                setError(null);
                const response = await fetch(URL);
                if(!response.ok){
                    throw new Error(`Error: ${response.statusText}`);
                }
                const result = await response.json();
                setData(result);
            } catch(err){
                setError(err instanceof Error ? err.message: 'Error');
            } finally{
                setIsLoading(false);
            }
        };
        fetchData();
        
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez después del primer renderizado

    return { data, isLoading, error};

}