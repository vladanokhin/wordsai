import store from '@src/store'

export default function guest ({ next }) {
    if (store.getters['auth/isAuthenticated']) {
        return next({
            name: 'user.cabinet'
        })
    }
};
