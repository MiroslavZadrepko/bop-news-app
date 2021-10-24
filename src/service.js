import axios from "axios";

// extra: Add option to sort articles by date of publish (DESC / ASC)

export const getTechnologyEngKeywords = (keyword) => axios.get(`http://api.mediastack.com/v1/news?access_key=3e5276388338d058faa3c8c37c31230d&categories=technology&languages=en&keywords=${keyword}`);

export const getSportEngKeywords = (keyword) => axios.get(`http://api.mediastack.com/v1/news?access_key=3e5276388338d058faa3c8c37c31230d&categories=sports&languages=en&keywords=${keyword}`);

export const getTechnologyEng = () => axios.get(`http://api.mediastack.com/v1/news?access_key=3e5276388338d058faa3c8c37c31230d&categories=technology&languages=en`);

export const getSportEng = () => axios.get(`http://api.mediastack.com/v1/news?access_key=3e5276388338d058faa3c8c37c31230d&categories=sports&languages=en`);