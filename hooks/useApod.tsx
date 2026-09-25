import { useEffect, useState } from "react";

const API_KEY = process.env.EXPO_PUBLIC_NASA_API_KEY;

export type Apod = { //exporto los datos y les asigno un tipo
  date: string;
  title: string;
  url: string;
  explanation: string;
  media_type: 'image' | 'video';
};

export function useApod() { 
  const [data, setData] = useState<Apod | null>(null); //todos los datos que traigo de la api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchApod() {
      try {
        const res = await fetch(
          `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}` 
        );
        if (!res.ok) throw new Error(`Error al obtener APOD: ${res.status}`);
        const json: Apod = await res.json();
        setData(json);
      } catch (err) {
        setError(err instanceof Error ? err.message : "Error desconocido");
      } finally {
        setLoading(false);
      }
    }
    fetchApod();
  }, []);

  return { data, setData, loading, error };
}

export function useHistorial(dias: number) {
  const [historial, setHistorial] = useState<Apod[]>([]);

  useEffect(() => {
    async function fetchHistorial() {
      const hoy = new Date(); //dato de la imagen/video actual
      const ayer = new Date(); 
      ayer.setDate(hoy.getDate() -1) //esto hace que no cuente el dia actual
      const haceNdias = new Date();
      haceNdias.setDate(hoy.getDate() - dias);

      const startDate = haceNdias.toISOString().split("T")[0];
      const endDate = ayer.toISOString().split("T")[0]; 
      //hace 2 días, hace 3, hace 4 y hace 5

      const res = await fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&start_date=${startDate}&end_date=${endDate}`
      );
      const json: Apod[] = await res.json();
      setHistorial(json.reverse());
    }
    fetchHistorial();
  }, [dias]);

  return historial;
}