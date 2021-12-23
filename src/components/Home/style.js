import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    titleBox: {
        marginVertical: 100
    },
    title: {
        fontSize: 70,
        fontWeight: "bold",
        color: "#262626"
    },
    resultBox: {
        backgroundColor: "#BFBFBF",
        alignItems: "center",
        justifyContent: "center",
        borderBottomRightRadius: 70,
        borderTopRightRadius: 120,
        borderBottomLeftRadius: 120,
        borderTopLeftRadius: 70,
        width: "90%",
        height: 400,
        flexDirection: "column"
    },
    result: {
        fontSize: 40,
        fontWeight: "500",
        color: "#262626",
        margin: 10
    },
    dateConsult: {
        fontSize: 20,
        fontWeight: "500",
        color: "#262626"
    },
    iconReload: {
        position: "absolute",
        bottom: 10
    }
});

export default styles;