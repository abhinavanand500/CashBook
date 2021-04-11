import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";
import useResults from "../hooks/useResult";
const Home = ({ navigation }) => {
    const [term, setTerm] = useState("");
    const [searchApi, results] = useResults();
    return (
        <View>
            <SearchBar
                term={term}
                onTermChange={setTerm}
                onTermSubmit={() => searchApi(term)}
            />
            <ResultList results={results} title='' navigation={navigation} />
        </View>
    );
};
export default Home;
