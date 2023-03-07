import store from "@src/store/index.js";

export const authMixin = {
    methods: {
        async login() {
            store.dispatch('auth/LogIn', this.form)
                .then(() => {
                        this.$router.push({name: 'user.dashboard'});
                    }
                );
        },
        async logout() {
            store.dispatch('auth/LogOut').then(() => {
                this.$router.push({name: 'user.auth.login'})
            });
        }
    }
}
