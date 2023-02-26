import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';



const instance =  axios.create({
    baseURL: 'http://a0cf-2402-800-629c-fdb4-7c86-27dc-7c51-2a43.ngrok.io'
});

instance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (err) => {
        return Promise.reject(err);
    }
);

export default instance;