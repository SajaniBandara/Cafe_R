import axios from "axios";

//get all from backend
export const getAll = async () => {
    const { data } = await axios.get("/api/foods");
    return data;
};

//search function
export const search = async searchTerm => {

    const { data } = await axios.get('/api/foods/search/' + searchTerm);
    return data;
}


export const getAllTags = async () => {
    const { data } = await axios.get('/api/foods/tags');
    return data;
};

export const getAllByTags = async tag => {
    if (tag === 'All') return getAll();
    const { data } = await axios.get('/api/foods/tag/' + tag);
    return data;
};

export const getById = async foodId => {
    const { data } = await axios.get('/api/foods/' + foodId);
    return data;
}