import { useEffect, useState } from "react";
import gitHub from "../apis/gitHub";
export default () => {
    const [results, setResults] = useState([]);
    const [errMessage, setErrMessage] = useState("");

    const searchApi = async (searchTerm) => {
        try {
            if (searchTerm === "") {
                const response = await gitHub.get("/users");
                setResults(response.data);
            } else {
                const response = await gitHub.get("/search/users", {
                    params: {
                        q: searchTerm,
                    },
                });
                // console.log(response.data);
                setResults(response.data.items);
            }
        } catch (err) {
            setErrMessage("Something went wrong");
        }
    };

    useEffect(() => {
        searchApi("");
    }, []);

    return [searchApi, results];
};
