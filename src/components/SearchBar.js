import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather name='search' size={30} style={styles.styleIcons} />
            <TextInput
                style={styles.inputStyle}
                autoCapitalize='none'
                autoCorrect={false}
                placeholder='Search'
                value={term}
                onChangeText={(newTerm) => onTermChange(newTerm)}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: "#F0EEEE",
        marginTop: 15,
        height: 50,
        borderRadius: 5,
        marginHorizontal: 15,
        flexDirection: "row",
        marginBottom: 10,
    },
    inputStyle: {
        flex: 1,
        fontSize: 18,
    },
    styleIcons: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 15,
    },
});
export default SearchBar;
