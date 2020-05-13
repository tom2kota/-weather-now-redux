// get API keys: https://home.openweathermap.org/api_keys
//         api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=d67d5d5ea0a50132e71d327a5dc2f765
// https://api.openweathermap.org/data/2.5/weather?q=congo&units=metric&appid=39abfd6ed55b4e52a6de04ae6c0b1296
// https://api.openweathermap.org/data/2.5/weather?q=LONDON&units=metric&appid=d67d5d5ea0a50132e71d327a5dc2f765
// TODO: Detect The Location of Your Website’s Visitors (city list: http://bulk.openweathermap.org/sample/)

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/'
});

instance.interceptors.request.use(config => {
    config.params = {
        q: 'кингстон',
        units: 'metric',
        appid: '8fdcf23c538fc42ab60bbfda80143bb3',
        ...config.params
    }
    return config
});

export default instance;

