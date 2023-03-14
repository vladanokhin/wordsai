import _ from 'lodash';
import axios from 'axios';
import store from "@src/store/";
import router from "@src/router/";
import toastr from "toastr";


const onFulfilled = response => response
const onRejected = error => {
    if (error.response.status === 401) {
        store.commit("auth/SET_USER", null)
        router.push({name: "user.auth.login"})
    }
    else if (error.response.status === 403) {
        toastr.warning(error.response.data?.message);

    } else if ([500, 422].includes(error.response.status)) {
        toastr.error(error.response.data?.message);

    }
    return Promise.reject(error)
}

window.axios = axios;
window.axios.defaults.withCredentials = true
window.axios.defaults.baseURL = '/api';
window.axios.defaults.headers.common['Accept'] = 'application/json';
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.axios.interceptors.response.use(onFulfilled, onRejected)
window._ = _;
