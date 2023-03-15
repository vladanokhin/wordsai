<template>
    <div class="d-none d-lg-block col-lg-4">
        <Slider :slider-elements="sliderElements" />
    </div>
    <div class="h-100 d-flex bg-white justify-content-center align-items-center col-md-12 col-lg-8">
        <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
            <div class="app-logo"></div>
            <h4 class="mb-0">
                <span class="d-block">Welcome back,</span>
                <span>Please sign in to your account.</span></h4>
            <h6 class="mt-3">
                No account?
                <router-link :to="{name: 'user.auth.sign-up'}" :class="['text-primary']">
                    Sign up now
                </router-link>
            </h6>
            <div class="divider row"></div>
            <div>
                <form @submit.prevent="logIn">
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
                        <div class="ml-auto">
                            <a href="javascript:void(0);" class="btn-lg btn btn-link">Recover Password</a>
                            <button class="btn btn-primary btn-lg">Login</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import {authMixin} from '@src/mixins/authMixin'
import Slider from "@src/components/Slider.vue";

export default {
    name: "LoginView",
    components: {Slider},
    mixins: [authMixin],
    data() {
        return {
            form: {
                email: null,
                password: null,
                remember: false,
            },
            sliderElements: [
                {
                    style: 'bg-plum-plate', imageUrl: '/assets/images/originals/city.jpg',
                    title: 'Perfect Balance', text: 'ArchitectUI is like a dream. Some think it\'s too good to be true! Extensive collection of unified React Boostrap Components and Elements.'
                },
                {
                    style: 'bg-premium-dark', imageUrl: '/assets/images/originals/citynights.jpg',
                    title: 'Scalable, Modular, Consistent', text: 'Easily exclude the components you don\'t require. Lightweight, consistent Bootstrap based styles across all elements and components.'
                },
                {
                    style: 'bg-plum-plate', imageUrl: '/assets/images/originals/citydark.jpg',
                    title: 'Complex, but lightweight', text: 'We\'ve included a lot of components that cover almost all use cases for any type of application.'
                },
            ]
        }
    },
}
</script>
