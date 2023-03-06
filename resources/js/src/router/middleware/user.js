import store from '@src/store'

export default async function auth ({ next }) {
    console.log(store.getters["auth/isAuthenticated"])
    console.log(!store.getters["auth/user"])
    if (store.getters["auth/isAuthenticated"] && !store.getters["auth/user"]) {
        await store.dispatch('auth/CurrentUser')
    }
}
