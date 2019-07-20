<template>
    <button class="icon icon-fill-green" v-on:click="sendGetRequest()"><font-awesome-icon class="ii" :icon=iconName></font-awesome-icon></button>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
    import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import axios from 'axios';

    library.add(faPowerOff);
    library.add(faEllipsisH);
    export default {
        name: 'remote-button',
        components: {FontAwesomeIcon},
        props: [
            'actionUrl',
            'iconName',
        ],
        methods: {
            sendGetRequest() {
                axios({
                    method: 'get',
                    url: this.actionUrl,
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                });
            },
        },
    };
</script>

<style lang="scss">
    @import "~@/Shared";
    .button-style {
        display: block;
        border-radius: 100%;
        border: none;
        outline: none;
        margin: 32px;
        padding: 32px;
        background-color: #03a9f4;
        box-shadow: 3px 3px 7px #333;

    &:active {
         box-shadow: none;
     }
    }
    .icon-container{
        margin-top: 30px;
        width: 100%;
        height: $icon-size;
    }

    .icon{
        background: #2c3e50;
        cursor: pointer;
        position: relative;
        display: inline-block;
        width: $icon-size;
        height: $icon-size;
        margin-left: $icon-size/5;
        margin-right: $icon-size/5;
        border-radius: $icon-size*$border-radius;
        overflow: hidden;
        &::before, &::after{
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            transition: all 0.25s ease;
            border-radius: $icon-size*$border-radius;
        }
        .ii{
            position: relative;
            color: $white;
            font-size: $icon-size/2;
            transition: all 0.25s ease;
        }
    }

    .icon-fill-red{
        &:hover::before{
            box-shadow: inset 0 0 0 $icon-size $red;
        }
    }

    .icon-fill-green{
        &:hover::before{
            box-shadow: inset 0 0 0 $icon-size $green;
        }
    }
</style>
