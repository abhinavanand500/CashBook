import React, { useEffect, Component } from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Alert,
    ScrollView,
    FlatList,
    Button,
    Linking,
} from "react-native";
import findProfile from "../hooks/findProfile";
const ProfilePage = ({ navigation }) => {
    const id = navigation.getParam("id");

    const [searchProfile, results] = findProfile();
    useEffect(() => {
        searchProfile(id);
    }, []);
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={{ alignItems: "center", marginHorizontal: 30 }}>
                    <Image
                        style={styles.productImg}
                        source={{
                            uri: results.avatar_url,
                        }}
                    />
                    <Text style={styles.name}>{results.name}</Text>
                    <Text style={styles.price}>{results.location}</Text>
                    <Text
                        style={{ color: "blue" }}
                        onPress={() => Linking.openURL(results.blog)}>
                        Blog of this Profile
                    </Text>
                    <Text style={styles.description}>{results.bio}</Text>

                    <Text style={styles.price}>
                        Followers : {results.followers}
                    </Text>
                    <Text style={styles.price}>
                        Following : {results.following}
                    </Text>
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
    productImg: {
        width: 200,
        height: 200,
    },
    name: {
        fontSize: 28,
        color: "#696969",
        fontWeight: "bold",
    },
    price: {
        marginTop: 10,
        fontSize: 18,
        color: "green",
        fontWeight: "bold",
    },
    description: {
        textAlign: "center",
        marginTop: 10,
        color: "#696969",
    },
    star: {
        width: 40,
        height: 40,
    },
    btnColor: {
        height: 30,
        width: 30,
        borderRadius: 30,
        marginHorizontal: 3,
    },
    btnSize: {
        height: 40,
        width: 40,
        borderRadius: 40,
        borderColor: "#778899",
        borderWidth: 1,
        marginHorizontal: 3,
        backgroundColor: "white",

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    starContainer: {
        justifyContent: "center",
        marginHorizontal: 30,
        flexDirection: "row",
        marginTop: 20,
    },
    contentColors: {
        justifyContent: "center",
        marginHorizontal: 30,
        flexDirection: "row",
        marginTop: 20,
    },
    contentSize: {
        justifyContent: "center",
        marginHorizontal: 30,
        flexDirection: "row",
        marginTop: 20,
    },
    separator: {
        height: 2,
        backgroundColor: "#eeeeee",
        marginTop: 20,
        marginHorizontal: 30,
    },
    shareButton: {
        marginTop: 10,
        height: 45,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 30,
        backgroundColor: "#00BFFF",
    },
    shareButtonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    addToCarContainer: {
        marginHorizontal: 30,
    },
});
export default ProfilePage;
