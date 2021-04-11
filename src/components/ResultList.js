import React from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    TouchableOpacity,
} from "react-native";
import ResultDetails from "./ResultDetails";
import { withNavigation } from "react-navigation";
const ResultList = ({ title, results, navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <FlatList
                horizontal={false}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={(result) => result.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate("Profile", {
                                    id: item.login,
                                });
                            }}>
                            <ResultDetails
                                result={item}
                                navigation={navigation}
                            />
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    title: {
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 18,
        marginBottom: 5,
    },
    container: {
        marginBottom: 10,
    },
});

export default withNavigation(ResultList);
