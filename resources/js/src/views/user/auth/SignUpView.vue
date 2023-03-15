<template>
    <div class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center col-md-12 col-lg-7">
        <div class="mx-auto app-login-box col-sm-12 col-md-10 col-lg-9">
            <div class="app-logo"></div>
            <h4>
                <div>Welcome,</div>
                <span>
                    It only takes a <span class="text-success">few seconds</span> to create your account
                </span>
            </h4>
            <div>
                <form @submit.prevent="signUp">
                    <div class="form-row">
                        <div class="col-md-6">
                            <div class="position-relative form-group">
                                <label for="email">
                                    <span class="text-danger">*</span> Email
                                </label>
                                <input v-model="form.email" name="email" id="email" placeholder="Email here..." type="email" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group">
                                <label for="name">
                                    <span class="text-danger">*</span> Name
                                </label>
                                <input v-model="form.name" name="name" id="name" placeholder="Name here..." type="text" class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group">
                                <label for="password">
                                    <span class="text-danger">*</span> Password
                                </label>
                                <input v-model="form.password" type="password" name="password" id="password" placeholder="Password here..." class="form-control">
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="position-relative form-group">
                                <label for="password_confirmation">
                                    <span class="text-danger">*</span> Repeat Password
                                </label>
                                <input v-model="form.password_confirmation" type="password" name="password_confirmation" id="passwordConfirmation" placeholder="Repeat Password here..." class="form-control">
                            </div>
                        </div>
                    </div>
                    <div class="mt-3 position-relative form-check">
                        <input v-model="form.terms_and_conditions" name="terms_and_conditions" id="terms_and_conditions" type="checkbox" class="form-check-input">
                        <label for="terms_and_conditions" class="form-check-label">Accept our
                            <a href="javascript:void(0);">Terms and Conditions</a>.
                        </label>
                    </div>
                    <div class="mt-4 d-flex align-items-center">
                        <h5 class="mb-0">Already have an account?
                            <router-link :to="{name: 'user.auth.login'}" :class="['text-primary']">
                                Sign in
                            </router-link>
                        </h5>
                        <div class="ml-auto">
                            <button class="btn-wide btn-pill btn-shadow btn-hover-shine btn btn-primary btn-lg">Create Account</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="d-lg-flex d-xs-none col-lg-5">
        <Slider :slider-elements="sliderElements" />
    </div>
</template>

<script>
import Slider from "@src/components/Slider.vue";
import {authMixin} from "@src/mixins/authMixin.js";

export default {
    name: "SignUpView",
    components: {
        Slider,
    },
    mixins: [authMixin],
    data() {
        return {
            form: {
                email: null,
                name: null,
                password: null,
                password_confirmation: null,
                terms_and_conditions: false,
            },
            sliderElements: [{
                    style: 'bg-premium-dark', imageUrl: '/assets/images/originals/citynights.jpg',
                    title: 'Perfect Balance', text: 'ArchitectUI is like a dream. Some think it\'s too good to be true! Extensive collection of unified React Boostrap Components and Elements.'
                },
            ]
        }
    }
}
</script>

<style scoped>

</style>
