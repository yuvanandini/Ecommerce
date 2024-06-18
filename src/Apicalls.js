import axios from "axios";

// PROD
export const base_url = 'http://3.110.178.177:3009/api/';
export const post_url = 'http://3.110.178.177:3009/'

// LOCAL
// export const base_url = 'http://localhost:3009/api/';
// export const post_url = 'http://localhost:3009/'

export default {

    get(url, params = {}, extraConfigs = {}) {
        return axios({
            method: "get",
            url: base_url + url,
            params,
            ...extraConfigs,
        })
    },

    post(path, data = {}) {
        return axios({
            method: "post",
            url: base_url + path,
            data,
        })
    },

    postFormData(path, data) {
        var requestOptions = {
            method: 'POST',
            'Content-Type': 'multipart/form-data',
            headers: {
            },
            body: data,
        }

        return fetch(`${base_url}/${path}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                return data;
            })
    },

    put(path, data) {
        return axios({
            method: "put",
            url: base_url + path,
            data,
        })
    },

    putFormData(path, data) {
        var requestOptions = {
            method: 'PUT',
            'Content-Type': 'multipart/form-data',
            headers: {
            },
            body: data,
        }

        return fetch(`${base_url}/${path}`, requestOptions)
            .then(res => res.json())
            .then(data => {
                return data;
            })
    },

    delete(path, data = {}) {
        return axios({
            method: "delete",
            url: base_url + path,
            data,
        })
    }
}
