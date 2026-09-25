import { View, Image, Text, StyleSheet } from "react-native";

export default function ApodCabecera({ titulo }: { titulo: string }) {
    return (
        <View style={styles.btitulo}>
            <Image
                source={require("../src/app/img/banner-wise-mosaic-of-cassiopeia-pia12865.jpg")}
                //busque imagenes de la Nasa para poner un banner, ni tan piola quedo. Pero es mio.
                style={styles.banner}
            />
            <Image source={require("../src/app/img/logo-nasa.png")} style={styles.logo}
            //Le afane la idea a Neri de poner un Logo y bue, dos horas buscando.
            />

            <Text style={styles.titulo}>{titulo}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    btitulo: {
        position: "relative",
        width: "100%",
        marginTop: 30
    },
    banner: {
        width: "100%",
        height: 150,
        borderRadius: 8,
        marginBottom: 8
    },
    logo: {
        width: 80,
        height: 80,
        resizeMode: "contain",
        marginBottom: 8,
        position: "absolute",
        justifyContent: "center",
        bottom: 70,
        left: "50%", marginLeft: -40,
    },
    titulo: {
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 4,
        position: "absolute",
        bottom: 20,
        left: 10,
        right: 10,
        color: "white",
    },
});