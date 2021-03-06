import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.timeout = 10000; // 10s
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers={'Access-Control-Allow-Origin': '*'}

const request = (type, path, body) =>
  axios
    .request({ url: path, method: type, data: body })
    .then(response => response.data)
    .catch(error => Promise.reject(error.response.data));

const api ={
    getMovies:()=> request('get', '/movies'), 
    searchMovie:(title)=>request('get','/movies/search/'+title)
}

export default api;