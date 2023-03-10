import store from "@src/store/index";

export default function auth ({ next }) {
    if(!store.getters['auth/isAuthenticated']){
        return next({
            name: 'user.auth.login'
        });
    }
    return next();
}
