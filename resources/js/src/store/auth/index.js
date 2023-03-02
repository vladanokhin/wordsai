import axios from "axios";
import _ from "lodash";

const state = {
    user: null
};

const getters = {
    isUserAuthenticated: (state) => !!state.user,
    getUserData: (state) => (field, def) => (state.user ? state.user[field] : (def ? def : '')),
};

const actions = {
    async LogIn({commit}, form) {
        await axios.post("login", form)
            .then(response => commit("setUser", response.data));
    },

    async RestorePassword({commit}, form) {
        await axios.post("forgot-password", form);
    },

    async ResetPassword({commit}, form) {
        await axios.post("reset-password", form);
    },

    async CurrentUser({commit}, user) {
        await axios.post("user", user)
            .then(response => commit("setUser", response.data));
    },

    async ChangeProfile({commit}, user) {
        await axios.post("account-settings/update-general", user)
            .then(response => commit("setUser", response.data));
    },

    async UpdatePassword({commit}, form) {
        await axios.post("account-settings/update-password", form);
    },

    async LogOut({ commit }) {
        await axios.post("logout")
            .then(response => commit("setUser", null));
    },

    setUser({commit}, user) {
        commit("setUser", user)
    },
};

const mutations = {
    setUser(state, user) {
        state.user = _.isEmpty(user) ? null : user;
    },
};

export default {
    state,
    getters,
    actions,
    mutations,
};
