import { useState, useEffect } from "react";
import gitHub from "../apis/gitHub";
export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState("");

    const searchProfile = async (searchTerm) => {
        try {
            // console.log(searchTerm);
            const response = await gitHub.get(`/users/${searchTerm}`);
            // console.log(response.data);
            setResults(response.data);
        } catch (err) {
            setErrMessage("Something went wrong");
        }
    };

    return [searchProfile, results];
};
