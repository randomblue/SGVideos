import axios from 'axios';

const KEY = 'AIzaSyC-fLH_1PBUG_6QRQ7yXZ05H0R9nQVYzvw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
});