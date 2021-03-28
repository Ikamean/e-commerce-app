import axios from 'axios';

export const getUserMarket = async (mail) => {
    const res = await axios.get(`/api/market/${mail}`);

    return res.data;
}