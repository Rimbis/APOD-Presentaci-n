import { StyleSheet, Text, View } from "react-native";
import type { Apod } from "../hooks/useApod";
import HistorialItem from "./HistorialItem";

export default function HistorialLista({
    historial, 
    onSelect,
}: {
    historial: Apod[]; //el array que voy a destructurar más abajo
    onSelect: (item: Apod) => void; //recibo la pendejada del APOD 
}) {
    return (
        <View style={styles.containerdos}>
            <Text style={styles.subtitulo}>Registro de los últimos 5 días</Text>
            {historial.map((item, index) => ( //divido los datos del array y se lo paso a HistorialItem
                <HistorialItem
                    key={item.date}
                    item={item} // Recibe "item" (los datos del día)
                    index={index} //"index" (su posición en la lista, usado para el color de fondo)
                    onPress={() => onSelect(item)} //"onPress" (qué hacer si lo tocan).
                // el onselect es como el setData.
                //luego de mapear el mapa de history lo envia al wachin de hirtorialitem
                />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    containerdos: {
        backgroundColor: "white",
        borderRadius: 20
    },
    subtitulo: {
        fontSize: 14,
        textTransform: "capitalize",
        marginBottom: 4
    },
});