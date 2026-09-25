import { Text, View, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { useVideoPlayer } from 'expo-video';
import ApodCabecera from "../../components/ApodCabecera";
import ApodPrincipal from "../../components/ApodPrincipal";
import HistorialLista from "../../components/HistorialLista";
import { useApod, useHistorial } from "../../hooks/useApod";

export default function Index() {   // Traigo el APOD de hoy y el historial de los últimos 5 días.
  const { data, setData, loading, error } = useApod();
  const historial = useHistorial(5);

  const player = useVideoPlayer(
    data?.media_type === "video" ? data.url : null,
    (player) => { player.loop = false; }
  );

  if (loading) {
    return (
      <View style={styles.centrado}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.centrado}>
        <Text>Ocurrió un error: {error}</Text>
      </View>
    );
  }

  // Por las dudas de que no haya datos ni error, no renderiza nada.
  //POR SI LAS DUDAS, CUANDO ESTAABA HACIENDO ESTO SE CAYO LA PVTA API
  if (!data) return null;

  return ( //gracias Claude por tu consejo, lol.

    //Si puedo dibujar en cajas partes de mi codigo y ponerle un nombre, eso es un componente.
    //No era tan complicado, viste? y SI LO HAGO BIEN LO PUEDO REUTILIZAR
    //Estaba loca cuando escribi esto

    <ScrollView contentContainerStyle={styles.container}>
      <ApodCabecera titulo={data.title} />
      <ApodPrincipal data={data} player={player} />
      <HistorialLista historial={historial} onSelect={setData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "skyblue",
    alignItems: "center",
    margin: 20,
    borderRadius: 5,
    padding: 10,
  },
  centrado: { flex: 1, alignItems: "center", justifyContent: "center", padding: 20 },
});