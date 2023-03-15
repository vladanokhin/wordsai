import store from "@src/store/index.js";

export const authMixin = {
    methods: {
        async logIn() {
            store.dispatch('auth/LogIn', this.form).then(() => {
                this.$router.push({name: 'user.dashboard'});
            });
        },
        async logOut() {
            store.dispatch('auth/LogOut').then(() => {
                this.$router.push({name: 'user.auth.login'})
            });
        },
        async signUp() {
            store.dispatch('auth/SignUp', this.form).then(async () => {
                await this.logIn()
                this.$router.push({name: 'user.dashboard'})
            });
        },
    }
}
