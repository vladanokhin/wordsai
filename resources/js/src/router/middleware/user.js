import store from '@src/store'

export default async function user ({ next }) {
    if (store.getters["auth/isAuthenticated"] && !store.getters["auth/user"]) {
        await store.dispatch('auth/CurrentUser')
    }
}
