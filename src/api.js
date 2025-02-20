import axios from "axios";
import useSWR from "swr";

const api = axios.create({
    baseURL: "https://botw-compendium.herokuapp.com/api/v3/compendium",
});

const fetcher = ({ path, method, params }) =>
    api.request(path, { method, params }).then(({ data }) => data.data);

export const useApiRequest = (path, { method = "get", params = {} } = {}) =>
    useSWR({ path, method, params }, fetcher);

export const useCategory = (category) => {
    const { data, error, isLoading } = useApiRequest(`/category/${category}`);
    return { entries: data, error, isLoading };
};

export const useEntry = (id) => {
    const { data, error, isLoading } = useApiRequest(`/entry/${id}`);
    return { entry: data, error, isLoading };
};
