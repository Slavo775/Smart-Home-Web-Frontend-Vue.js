<template>
    <div id="app">
        <div id="nav">
            <div class="title">
                <router-link to="/" class="text">Smart Home</router-link>
            </div>
            <div class="sidebar-wrapper">
                <ul class="menu">
                    <li class="menu-item">
                        <router-link to="/" class="active">
                            <font-awesome-icon icon='home' class="nav-icon"></font-awesome-icon>
                            <p>Domov</p></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/ovladace">
                            <font-awesome-icon icon='tv' class="nav-icon"></font-awesome-icon>
                            <p>Ovladace</p></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/status">
                            <font-awesome-icon icon='info' class="nav-icon"></font-awesome-icon>
                            Status
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/zariadenia">
                            <font-awesome-icon icon='laptop' class="nav-icon"></font-awesome-icon>
                            Zariadenia
                        </router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/svetlo">
                            <font-awesome-icon icon='lightbulb' class="nav-icon"></font-awesome-icon>
                            Svetlo
                        </router-link>
                    </li>
                    <li class="menu-item" v-on:click="toggle('ranking')"><a href="javascript:">
                        <font-awesome-icon icon='plus' class="nav-icon"></font-awesome-icon>
                        <p>Pridaj</p></a></li>
                    <li class="menu-item">
                        <router-link to="/pridaj-zariadenie" v-if="dropDownMenu">
                            <font-awesome-icon icon='laptop-medical' class="nav-icon"></font-awesome-icon>
                            <p>Pridaj Zariadenie</p></router-link>
                    </li>
                    <li class="menu-item">
                        <router-link to="/pridaj-pouzivatela" v-if="dropDownMenu">
                            <font-awesome-icon icon='users' class="nav-icon"></font-awesome-icon>
                            <p>Pridaj Používateľa</p></router-link>
                    </li>
                </ul>
            </div>
        </div>
        <div id="nav-mobile">
            <div class="mobile-title">
                <router-link to="/" class="mobile-text">Smart Home</router-link>
            </div>
            <font-awesome-icon icon='bars' class="mobile-nav-icon" v-on:click="toggleMobile"></font-awesome-icon>
            <div class="menu-container" v-if="dropDownMenuMobile">
                <ul class="menu">
                    <li class="title">
                        <div v-on:click="dropDownMenuMobile = false" class="close-button">
                            <font-awesome-icon icon='times' class="nav-icon"></font-awesome-icon>
                        </div>
                        <router-link to="/" class="text">Smart Home</router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/" class="active">
                            <font-awesome-icon icon='home' class="nav-icon"></font-awesome-icon>
                            <p>Domov</p></router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/ovladace">
                            <font-awesome-icon icon='tv' class="nav-icon"></font-awesome-icon>
                            <p>Ovladace</p></router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/status">
                            <font-awesome-icon icon='info' class="nav-icon"></font-awesome-icon>
                            Status
                        </router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/zariadenia">
                            <font-awesome-icon icon='laptop' class="nav-icon"></font-awesome-icon>
                            Zariadenia
                        </router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/svetlo">
                            <font-awesome-icon icon='lightbulb' class="nav-icon"></font-awesome-icon>
                            Svetlo
                        </router-link>
                    </li>
                    <li class="menu-item" v-on:click="toggle('ranking')"><a href="javascript:">
                        <font-awesome-icon icon='plus' class="nav-icon"></font-awesome-icon>
                        <p>Pridaj</p></a></li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/pridaj-zariadenie" v-if="dropDownMenu">
                            <font-awesome-icon icon='laptop-medical' class="nav-icon"></font-awesome-icon>
                            <p>Pridaj Zariadenie</p></router-link>
                    </li>
                    <li class="menu-item" v-on:click="dropDownMenuMobile = !dropDownMenuMobile">
                        <router-link to="/pridaj-pouzivatela" v-if="dropDownMenu">
                            <font-awesome-icon icon='users' class="nav-icon"></font-awesome-icon>
                            <p>Pridaj Používateľa</p></router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view/>
    </div>
</template>

<style lang="less">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    ul {
        list-style: none;
    }

    body {
        margin: 0 !important;
        background-color: #eee;
    }

    #nav {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        width: 260px;
        background: #fff;
        box-shadow: 0 16px 38px -12px rgba(0, 0, 0, .56), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2);
        display: block;

        .title {
            padding: 15px 0;
            margin: 0;
            display: block;
            position: relative;
            z-index: 4;

            ::after {
                content: "";
                position: absolute;
                bottom: 0;
                right: 15px;
                height: 1px;
                width: calc(100% - 30px);
                background-color: hsla(0, 0%, 71%, .3)
            }

            .text {
                text-decoration: none;
                text-transform: uppercase;
                padding: 5px 0;
                display: inline-block;
                font-size: 18px;
                color: #3c4858;
                white-space: nowrap;
                font-weight: 400;
                line-height: 30px;
                overflow: hidden;
                text-align: center;
            }
        }

        .sidebar-wrapper {
            position: relative;
            height: calc(100vh - 75px);
            overflow: auto;
            width: 260px;
            z-index: 4;
            padding-bottom: 30px;

            .menu {
                flex-wrap: wrap;
                padding-left: 0;
                margin-bottom: 0;
                list-style: none;

                li {
                    a {
                        margin: 10px 15px 0;
                        border-radius: 3px;
                        color: #3c4858;
                        padding-left: 10px;
                        padding-right: 10px;
                        text-transform: capitalize;
                        font-size: 13px;
                        padding: 10px 15px;
                        display: flex;
                        margin-right: 1rem;
                        text-decoration: none;

                        &.router-link-exact-active {
                            background-color: #9c27b0;
                            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176);
                            color: #fff !important;

                            .nav-icon {
                                color: #fff !important;
                            }

                            &:hover {
                                background-color: #9c27b0;
                                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176);
                                color: #fff !important;
                            }
                        }

                        p {
                            margin: 0;
                            line-height: 30px;
                            font-size: 14px;
                            position: relative;
                            display: block;
                            height: auto;
                            white-space: nowrap;
                        }

                        .nav-icon {
                            font-size: 24px;
                            float: left;
                            margin-right: 15px;
                            line-height: 30px;
                            width: 30px;
                            text-align: center;
                            color: #a9afbb;
                        }
                    }

                    a:hover {
                        background: #EEEFF1;
                    }
                }
            }
        }
    }

    ul {
        margin-top: 0;
    }

    #nav-mobile {
        display: none;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        padding-right: 15px;
        padding-left: 15px;
        margin-right: auto;
        margin-left: auto;

        .mobile-title {
            padding: 15px 0;
            margin: 0;
            display: block;
            position: relative;
            z-index: 4;
            text-decoration: none;

            .mobile-text {
                text-transform: uppercase;
                padding: 5px 0;
                display: inline-block;
                font-size: 18px;
                color: #3c4858;
                white-space: nowrap;
                font-weight: 400;
                line-height: 30px;
                overflow: hidden;
                text-align: center;
                text-decoration: none;
            }
        }

        .close-button {
            position: absolute;
            top: 15px;
            left: 15px;
            font-size: 24px;
            float: left;
            margin-right: 15px;
            line-height: 30px;
            width: 30px;
            text-align: center;
            color: #a9afbb;
        }

        .mobile-nav-icon {
            padding: .25rem .75rem;
            line-height: 1;
            background-color: transparent;
            border: 1px solid transparent;
            border-radius: .25rem;
            font: 400 1.25rem system-ui;
        }

        .menu-container {
            z-index: 10;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background: rgba(0, 0, 0, .35);
            display: flex;

            .menu {
                width: 80%;
                flex-wrap: wrap;
                padding-left: 0;
                margin-bottom: 0;
                list-style: none;
                background: #fff;
                position: fixed;
                top: 0;
                right: 0;
                height: 100%;

                .title {
                    padding: 15px 0;
                    margin: 0;
                    display: block;
                    position: relative;
                    z-index: 4;

                    ::after {
                        content: "";
                        position: absolute;
                        bottom: 0;
                        right: 15px;
                        height: 1px;
                        width: calc(100% - 30px);
                        background-color: hsla(0, 0%, 71%, .3)
                    }

                    .text {
                        text-transform: uppercase;
                        padding: 5px 0;
                        display: inline-block;
                        font-size: 18px;
                        color: #3c4858;
                        white-space: nowrap;
                        font-weight: 400;
                        line-height: 30px;
                        overflow: hidden;
                        text-align: center;
                    }
                }

                li {
                    a {
                        margin: 10px 15px 0;
                        border-radius: 3px;
                        color: #3c4858;
                        padding-left: 10px;
                        padding-right: 10px;
                        text-transform: capitalize;
                        font-size: 13px;
                        padding: 10px 15px;
                        display: flex;
                        margin-right: 1rem;
                        text-decoration: none;

                        &.router-link-exact-active {
                            background-color: #9c27b0;
                            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176);
                            color: #fff !important;

                            .nav-icon {
                                color: #fff !important;
                            }

                            &:hover {
                                background-color: #9c27b0;
                                box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176);
                                color: #fff !important;
                            }
                        }

                        p {
                            margin: 0;
                            line-height: 30px;
                            font-size: 14px;
                            position: relative;
                            display: block;
                            height: auto;
                            white-space: nowrap;
                        }

                        .nav-icon {
                            font-size: 24px;
                            float: left;
                            margin-right: 15px;
                            line-height: 30px;
                            width: 30px;
                            text-align: center;
                            color: #a9afbb;
                        }
                    }

                    a:hover {
                        background: #EEEFF1;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 600px) {
        #nav {
            display: none !important;
        }

        #nav-mobile {
            display: flex;
        }

    }
</style>
<script>
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faBars} from '@fortawesome/free-solid-svg-icons';
    import {faHome} from '@fortawesome/free-solid-svg-icons';
    import {faTv} from '@fortawesome/free-solid-svg-icons';
    import {faPlus} from '@fortawesome/free-solid-svg-icons';
    import {faLaptopMedical} from '@fortawesome/free-solid-svg-icons';
    import {faDoorClosed} from '@fortawesome/free-solid-svg-icons';
    import {faLightbulb} from '@fortawesome/free-solid-svg-icons';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';
    import {faInfo} from '@fortawesome/free-solid-svg-icons';
    import {faLaptop} from '@fortawesome/free-solid-svg-icons';
    import {faUsers} from '@fortawesome/free-solid-svg-icons';

    library.add(faInfo);
    library.add(faBars);
    library.add(faHome);
    library.add(faTv);
    library.add(faPlus);
    library.add(faLaptopMedical);
    library.add(faLightbulb);
    library.add(faDoorClosed);
    library.add(faTimes);
    library.add(faLaptop);
    library.add(faUsers);

    export default {
        components: {FontAwesomeIcon},
        ready() {
            const self = this;
            window.addEventListener('click', (e) => {
                if (!e.target.parentNode.classList.contains('menu__link--toggle')) {
                    self.close();
                }
            }, false);
        },
        data() {
            return {
                dropDowns: {
                    ranking: {
                        open: false,
                    },
                },
                dropDownMenu: false,
                dropDownMenuMobile: false,
                dropDownsMobile: {
                    rankingMobile: {
                        openMobile: false,
                    },
                },
            };
        },

        methods: {
            toggle() {
                this.dropDownMenu = !this.dropDownMenu;
            },
            toggleMobile() {
                this.dropDownMenuMobile = !this.dropDownMenuMobile;
            },
        },
    };
</script>
