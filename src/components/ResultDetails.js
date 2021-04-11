import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
const ResultDetails = ({ result }) => {
    return (
        <View style={styles.listItem}>
            <Image
                source={{ uri: result.avatar_url }}
                style={{ width: 60, height: 60, borderRadius: 30 }}
            />
            <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{result.login}</Text>
                <Text>{result.node_id}</Text>
            </View>
            <TouchableOpacity
                style={{
                    height: 50,
                    width: 50,
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                {/* <Text
                    style={{ color: "green" }}
                    onPress={() => {
                        navigation.navigate("Profile");
                    }}>
                    Check Profile
                </Text> */}
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    image: {
        width: 250,
        height: 120,
        borderRadius: 4,
        marginBottom: 5,
    },
    name: {
        fontWeight: "bold",
    },
    container: {
        marginLeft: 15,
        flex: 1,
        backgroundColor: "#F7F7F7",
        marginTop: 60,
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 5,
    },
});

export default ResultDetails;
