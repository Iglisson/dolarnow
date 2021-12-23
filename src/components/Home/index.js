import React, { useState } from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import Dolar from "../../services/Dolar.js";
import styles from "./style.js";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {

    const [dolar, setDolar] = useState("");
    Dolar.getValue().then(v => setDolar(v.bid));

    const reloadValue = () => {
        Dolar.getValue().then(v => setDolar(v.bid))
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.titleBox}>
            <Text style={styles.title}>Dolar Hoje</Text>
            </View>

            <View style={styles.resultBox}>
                <Text style={styles.result}> $ 1.00 = R$ {dolar}</Text>

                <TouchableOpacity style={styles.iconReload} onPress={reloadValue}>
                    <Ionicons name="reload-circle" size={80} color="#262626"/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}