import { Text, Image, StyleSheet } from "react-native";
import { VideoView } from "expo-video";
import type { Apod } from "../hooks/useApod";

export default function ApodPrincipal({ data, player }: { data: Apod; player: any }) {
    // "data" es el APOD a mostrar (hoy, o el que se haya tocado del historial).
    // "player" es el reproductor de video
    return (
        // Fragment (<>): agrupa todo sin agregar una View extra
        <>
            <Text style={styles.subtitulo}>{data.media_type} of the day</Text>
            <Text style={styles.fecha}>{data.date}</Text>

            {data.media_type === "image" ? (
                <Image source={{ uri: data.url }} alt={data.title} style={styles.image} />
            ) : (
                <VideoView player={player} style={styles.image} nativeControls />
            )}

            <Text style={styles.explicacion}>{data.explanation}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: 300,
        borderRadius: 8,
        marginVertical: 10
    },
    subtitulo: {
        fontSize: 14,
        textTransform: "capitalize",
        marginBottom: 4
    },
    fecha: {
        fontSize: 12,
        marginBottom: 4
    },
    explicacion: {
        fontSize: 14,
        textAlign: "justify",
        marginTop: 10
    },
});