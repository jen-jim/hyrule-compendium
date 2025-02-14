import axios from "axios";
import { useEffect, useState } from "react";

const api = axios.create({
    baseURL: "https://botw-compendium.herokuapp.com/api/v3/compendium",
});

export const useApiRequest = (path) => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        api.get(path)
            .then(({ data }) => {
                setData(data.data);
            })
            .catch((error) => {
                setError(error);
            });
    }, [path]);

    const isLoading = data === null && error === null;

    return { data, error, isLoading };
};

export const useCategory = (category) => useApiRequest(`/category/${category}`);

export const useEntry = (id) => useApiRequest(`/entry/${id}`);
