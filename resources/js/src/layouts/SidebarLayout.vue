<template>
    <div class="app-sidebar sidebar-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button type="button"
                            class="hamburger close-sidebar-btn123 hamburger--elastic"
                            data-class="closed-sidebar"
                    >
                            <span class="hamburger-box">
                                <span class="hamburger-inner"></span>
                            </span>
                    </button>
                </div>
            </div>
        </div>
        <div class="app-header__mobile-menu">
            <div>
                <button type="button" class="hamburger hamburger--elastic mobile-toggle-nav">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
                    <span>
                        <button type="button" class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span class="btn-icon-wrapper">
                                <i class="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                        </button>
                    </span>
        </div>
        <div class="scrollbar-sidebar">
            <div class="app-sidebar__inner">
            <ul class="vertical-nav-menu">
                <li class="app-sidebar__heading">Menu</li>
                <li>
                    <router-link :active-class="'mm-active'" :to="{ name: 'user.dashboard' }">
                        <i class="metismenu-icon pe-7s-rocket"></i>
                        Dashboard
                    </router-link>
                </li>
                <li>
                    <router-link :active-class="'mm-active'" :to="{name: 'user.lists'}">
                        <i class="metismenu-icon pe-7s-news-paper">
                        </i>List of words
                    </router-link>
                </li>
                <li class="app-sidebar__heading">Accounts</li>
                <li>
                    <a href="#">
                        <i class="metismenu-icon pe-7s-config">
                        </i>Settings
                    </a>
                </li>
                <li>
                    <a href="#" @click="logOut">
                        <i class="metismenu-icon pe-7s-door-lock">
                        </i>Logout
                    </a>
                </li>
            </ul>
        </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery";
import 'metismenu';
import {authMixin} from '@src/mixins/authMixin'

export default {
    name: "SidebarLayout",
    mixins: [authMixin],
    mounted() {
        setTimeout(function () {
            $(".vertical-nav-menu").metisMenu();
        }, 100);
    },
}
</script>

<style scoped>

</style>
