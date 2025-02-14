import axios from "axios";

const api = axios.create({
    baseURL: "https://botw-compendium.herokuapp.com/api/v3/compendium",
});

export const getCategory = async (category) => {
    const { data } = await api.get(`/category/${category}`);
    return data.data.sort((a, b) => a.id - b.id);
};

export const getEntry = async (id) => {
    const { data } = await api.get(`/entry/${id}`);
    return data.data;
};
