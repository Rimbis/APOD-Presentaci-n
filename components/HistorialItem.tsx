import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import type { Apod } from "../hooks/useApod";

const colores = ["#E0F4FF", "#C2E9FB", "#A6DDF0", "#8AD0E8", "#6FC3E0"];
//son los colores de fondo en el historial de imagenes/videos

export default function HistorialItem({ //una destructuración muy cool
  item,
  index,
  onPress,
}: { //otra vez aclaro la información
  item: Apod;
  index: number;
  onPress: () => void;
}) {
  const colorFondo = colores[index % colores.length];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, { backgroundColor: colorFondo }]}
    >
      {item.media_type === "image" ? (
        <Image source={{ uri: item.url }} style={styles.thumb} />
      ) : (
        <View style={[styles.thumb, styles.placeholder]}>
          <Text>▶</Text>
        </View>
      )}
      <Text style={styles.fecha}>{item.date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    margin: 10,
    padding: 8,
    borderRadius: 8,
    alignItems: "center",
  },
  thumb: {
    width: 350,
    height: 80,
    borderRadius: 8,
  },
  placeholder: {
    backgroundColor: "#ccc",
    justifyContent: "center",
    alignItems: "center",
  },
  fecha: {
    fontSize: 10,
    marginTop: 4,
  },
});