<template>
    <div class="app-container">
        <div class="h-100">
            <div class="h-100 no-gutters row">
                <div class="d-none d-lg-block col-lg-4">
                    <div class="slider-light">
                        <div class="slick-slider">
                            <div v-for="element in sliderElements">
                                <div :class="['position-relative', 'h-100', 'd-flex', 'justify-content-center', 'align-items-center', element.style]" tabindex="-1">
                                    <div class="slide-img-bg" :style="{ backgroundImage: `url(${element.imageUrl})` }"></div>
                                    <div class="slider-content"><h3>{{ element.title }}</h3>
                                        <p>{{ element.text }}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
                    <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
                        <div class="app-logo"></div>
                        <h4 class="mb-0">
                            <span class="d-block">Welcome back,</span>
                            <span>Please sign in to your account.</span></h4>
                        <h6 class="mt-3">No account? <a href="javascript:void(0);" class="text-primary">Sign up now</a></h6>
                        <div class="divider row"></div>
                        <div>
                            <form @submit.prevent="submit">
                                <div class="form-row">
                                    <div class="col-md-6">
                                        <div class="position-relative form-group">
                                            <label for="email" class="">Email</label>
                                            <input name="email"
                                                   id="email" placeholder="Email here..."
                                                   type="email" class="form-control"
                                                   v-model="form.email"
                                            >
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="position-relative form-group">
                                            <label for="password" class="">Password</label>
                                            <input name="password"
                                                   id="password" placeholder="Password here..."
                                                   type="password" class="form-control"
                                                   v-model="form.password"
                                            >
                                        </div>
                                    </div>
                                </div>
                                <div class="position-relative form-check">
                                    <input name="remember"
                                           id="remember"
                                           type="checkbox"
                                           class="form-check-input"
                                           v-model="form.remember"
                                    >
                                    <label for="remember" class="form-check-label">Keep me logged in</label>
                                </div>
                                <div class="divider row"></div>
                                <div class="d-flex align-items-center">
                                    <div class="ml-auto"><a href="javascript:void(0);" class="btn-lg btn btn-link">Recover Password</a>
                                        <button class="btn btn-primary btn-lg">Login</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from "vuex";
import store from "@src/store/index.js";

export default {
    name: "LoginView",
    data() {
        return {
            form: {
                email: null,
                password: null,
                remember: false,
            },
            sliderElements: [
                {
                    id: 1, style: 'bg-plum-plate', imageUrl: 'assets/images/originals/city.jpg',
                    title: 'Perfect Balance', text: 'ArchitectUI is like a dream. Some think it\'s too good to be true! Extensive collection of unified React Boostrap Components and Elements.'
                },
                {
                    id: 2, style: 'bg-premium-dark', imageUrl: 'assets/images/originals/citynights.jpg',
                    title: 'Scalable, Modular, Consistent', text: 'Easily exclude the components you don\'t require. Lightweight, consistent Bootstrap based styles across all elements and components.'
                },
                {
                    id: 1, style: 'bg-plum-plate', imageUrl: 'assets/images/originals/citydark.jpg',
                    title: 'Complex, but lightweight', text: 'We\'ve included a lot of components that cover almost all use cases for any type of application.'
                },
            ]
        }
    },
    methods: {
        async submit() {
            await store.dispatch('LogIn', this.form);
            return this.$router.push({name: 'user.cabinet'});
        },
    }
}
</script>

<style scoped>

</style>
