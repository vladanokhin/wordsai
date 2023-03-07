<template>
    <div class="app-header header-shadow">
        <div class="app-header__logo">
            <div class="logo-src"></div>
            <div class="header__pane ml-auto">
                <div>
                    <button @click="desktopToggleSideBar"
                        type="button"
                        class="hamburger close-sidebar-btn hamburger--elastic"
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
                <button @click="mobileToggleSideBar"
                    type="button"
                    class="hamburger hamburger--elastic mobile-toggle-nav"
                >
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
        </div>
        <div class="app-header__menu">
            <span>
                <button @click="mobileToggleNavBar"
                        type="button"
                        class="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                >
                    <span class="btn-icon-wrapper">
                        <i class="icofont-listine-dots"></i>
                    </span>
                </button>
            </span>
        </div>
        <div class="app-header__content">
            <div class="app-header-left">
                <div class="search-wrapper">
                    <div class="input-holder">
                        <input v-model="searchText"
                               type="text"
                               class="search-input"
                               placeholder="Type to search"
                        >
                        <button @click="clickSearchIcon"
                                class="search-icon"
                        >
                            <span></span>
                        </button>
                    </div>
                    <button @click="clickCloseSearch"
                            class="close"
                    >

                    </button>
                </div>
            </div>
        </div>
        <div class="app-header-right">
            <div class="ml-4 pr-0 mr-4">
                <div class="widget-content p-0">
                    <div class="widget-content-wrapper">
                        <div class="widget-content-left">
                            <div class="btn-group">
                                <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" class="p-0 btn">
                                    <img width="42" class="rounded-circle" src="/assets/images/avatars/teacher.png" alt="teacher">
                                    <i class="icofont-rounded-down ml-2 opacity-8"></i>
                                </a>
                                <div tabindex="-1" role="menu" aria-hidden="true" class="rm-pointers dropdown-menu-lg dropdown-menu dropdown-menu-right">
                                    <div class="dropdown-menu-header">
                                        <div class="dropdown-menu-header-inner bg-info">
                                            <div class="menu-header-image opacity-2" style="background-image: url('/assets/images/dropdown-header/city3.jpg');"></div>
                                            <div class="menu-header-content text-left">
                                                <div class="widget-content p-0">
                                                    <div class="widget-content-wrapper">
                                                        <div class="widget-content-left mr-3">
                                                            <img width="42" class="rounded-circle" src="/assets/images/avatars/teacher.png" alt="teacher">
                                                        </div>
                                                        <div class="widget-content-left">
                                                            <div class="widget-heading">
                                                                {{ user.name }}
                                                            </div>
                                                            <div class="widget-subheading opacity-8">
                                                                #T: {{ user.id }}
                                                            </div>
                                                        </div>
                                                        <div class="widget-content-right mr-2">
                                                            <button @click="logout"
                                                                class="btn-pill btn-shadow btn-shine btn btn-focus"
                                                            >
                                                                Logout
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="scroll-area-md" style="height: 175px;">
                                        <div class="scrollbar-container ps">
                                            <ul class="nav flex-column">
                                                <li class="nav-item-header nav-item">Activity
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">View lists
                                                        <div class="ml-auto badge badge-pill badge-info">8</div>
                                                    </a>
                                                </li>
                                                <li class="nav-item-header nav-item">
                                                    My Account
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Settings</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a href="javascript:void(0);" class="nav-link">Recover Password</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="widget-content-left  ml-3 header-user-info">
                            <div class="widget-heading">
                                {{ user.name }}
                            </div>
                            <div class="widget-subheading">
                                #T: {{ user.id }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import $ from "jquery"
import store from "@src/store/";
import {authMixin} from '@src/mixins/authMixin'

export default {
    name: "HeaderLayout",
    mixins: [authMixin],
    data() {
      return {
          searchText: '',
          user: store.getters["auth/user"]
      }
    },
    methods: {
        desktopToggleSideBar(event) {
            const closeBtn = $(event.currentTarget),
                  containerElement = $('.app-container'),
                  classToSwitch = closeBtn.data('class');

            containerElement.toggleClass(classToSwitch);
            closeBtn.toggleClass('is-active');
        },
        mobileToggleSideBar(event) {
            $(event.currentTarget).toggleClass('is-active');
            $('.app-container').toggleClass('sidebar-mobile-open');
        },
        mobileToggleNavBar(event) {
            $(event.currentTarget).toggleClass('active');
            $('.app-header__content').toggleClass('header-mobile-open');
        },
        clickSearchIcon(event) {
            $(event.currentTarget).parent().parent().addClass('active');
        },
        clickCloseSearch(event) {
            $(event.currentTarget).parent().removeClass('active');
            this.searchText = '';
        },
    }
}
</script>
