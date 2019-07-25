<template>
    <button class="icon icon-expand" v-on:click="sendGetRequest()" :id=iconName aria-label="Button">
        <font-awesome-icon v-if="iconShow" class="ii" :icon=iconName></font-awesome-icon>
        <span v-if="textShow" class="ii">{{textContent}}</span></button>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import {faPowerOff} from '@fortawesome/free-solid-svg-icons';
    import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';
    import {faVolumeUp} from '@fortawesome/free-solid-svg-icons';
    import {faVolumeDown} from '@fortawesome/free-solid-svg-icons';
    import {faVolumeMute} from '@fortawesome/free-solid-svg-icons';
    import {faAngleUp} from '@fortawesome/free-solid-svg-icons';
    import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
    import {faFutbol} from '@fortawesome/free-solid-svg-icons';
    import {faHome} from '@fortawesome/free-solid-svg-icons';
    import {faCaretUp} from '@fortawesome/free-solid-svg-icons';
    import {faCaretRight} from '@fortawesome/free-solid-svg-icons';
    import {faCaretDown} from '@fortawesome/free-solid-svg-icons';
    import {faCaretLeft} from '@fortawesome/free-solid-svg-icons';
    import {faSignInAlt} from '@fortawesome/free-solid-svg-icons';
    import {faUndo} from '@fortawesome/free-solid-svg-icons';
    import {faDoorOpen} from '@fortawesome/free-solid-svg-icons';
    import {faForward} from '@fortawesome/free-solid-svg-icons';
    import {faBackward} from '@fortawesome/free-solid-svg-icons';
    import {faCircle} from '@fortawesome/free-solid-svg-icons';
    import {faFastForward} from '@fortawesome/free-solid-svg-icons';
    import {faFastBackward} from '@fortawesome/free-solid-svg-icons';
    import {faPlay} from '@fortawesome/free-solid-svg-icons';
    import {faPause} from '@fortawesome/free-solid-svg-icons';
    import {faStop} from '@fortawesome/free-solid-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import axios from 'axios';

    library.add(faPowerOff);
    library.add(faEllipsisH);
    library.add(faVolumeUp);
    library.add(faVolumeDown);
    library.add(faVolumeMute);
    library.add(faAngleUp);
    library.add(faAngleDown);
    library.add(faFutbol);
    library.add(faHome);
    library.add(faCaretDown);
    library.add(faCaretLeft);
    library.add(faCaretUp);
    library.add(faCaretRight);
    library.add(faSignInAlt);
    library.add(faUndo);
    library.add(faDoorOpen);
    library.add(faForward);
    library.add(faBackward);
    library.add(faCircle);
    library.add(faFastForward);
    library.add(faFastBackward);
    library.add(faPlay);
    library.add(faPause);
    library.add(faStop);
    export default {
        name: 'remote-button',
        components: {FontAwesomeIcon},
        props: [
            'actionUrl',
            'iconName',
            'iconShow',
            'textShow',
            'textContent',

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

    .icon-expand{
        &::before{
            background: $red;
            box-shadow: inset 0 0 0 $icon-size $background;
        }
        &:hover::before{
            box-shadow: inset 0 0 0 1px $background;
        }
    }

</style>
