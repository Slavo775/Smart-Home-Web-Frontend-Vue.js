<template>
    <div>
        <div class="group-card">
            <div v-on:click="isOpen = !isOpen" class="group-content"><img :src="imageSource" width="100" height="75"
                                                                          alt="device image">
                <div class="group-information">
                    <div class="group-item">ID: {{id_group}}</div>
                    <div class="group-item">Name: {{name}}</div>
                </div>
                <div v-if="!reachable" class="not-reachable">
                    <font-awesome-icon icon='exclamation-triangle'></font-awesome-icon>
                </div>
            </div>
            <div class="group-additional-information">
                <div class="group-item">Active:</div>
                <main-checkbox v-bind:checked="on"
                               v-bind:id_device="id_from_bridge"
                               v-bind:change-method="checkboxChange"
                               v-bind:is-checked="isChecked"
                ></main-checkbox>
            </div>
            <vue-slider style="padding: 0"
                        v-model="bri"
                        v-on:drag-end="onChangeSlider(bri, isChecked, id_from_bridge)"
                        v-bind:min="0"
                        v-bind:max="254"
                        v-on:change="onChangeBrightness"
            ></vue-slider>
        </div>
        <light-tab v-if="isOpen"
                   v-for="light in this.lightsInGroup"
                   v-bind:key="light.id_device + ' group'"
                   v-bind:name="light.name"
                   v-bind:id_device="light.id_device"
                   v-bind:bri="light.bri"
                   v-bind:ip="light.ip"
                   v-bind:image-source="getImageSourceForLight(light.type)"
                   v-bind:on="light.on"
                   v-bind:reachable="light.reachable"
        ></light-tab>
    </div>
</template>

<script>
    import LightTab from './light-tab';
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/default.css'
    import MainCheckbox from '../inputs/main-checkbox';
    import axios from 'axios';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

    library.add(faExclamationTriangle);


    export default {
        name: 'group-tab',
        components: {MainCheckbox, LightTab, VueSlider, FontAwesomeIcon},
        data() {
            return {
                isOpen: false,
                bri: this.brightness,
                checked: this.on,
                isChecked: this.on,
                lightsInGroup: this.lights,
                reachable: false,
            }
        },
        created() {
            this.reachable = this.isReachable();
        },
        props: [
            'imageSource',
            'id_group',
            'name',
            'id_from_bridge',
            'brightness',
            'on',
            'lights'
        ],
        methods: {
            checkboxChange() {
                this.isChecked = !this.isChecked;
                this.setGroupStatus();
            },
            onChangeSlider(brightness, isChecked, id_from_bridge) {
                if (isChecked) {
                    this.setGroupBrightness(brightness, id_from_bridge);
                }
            },
            isReachable() {
                let reachable = true;
                Object.keys(this.lightsInGroup).forEach(key => {
                    if(!this.lightsInGroup[key].reachable){
                        reachable = false
                    }
                });
                return reachable;
            },
            setGroupBrightness: (brightness, id_from_bridge) => {
                axios({
                    method: 'put',
                    url: 'http://192.168.31.36/api/AH7Or1g7rXJhJbOwv1VEDA-kPLra6O-JAu3waKqk/groups/' + id_from_bridge + '/action',
                    data: {
                        bri: brightness,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                })
            },
            setGroupStatus() {
                axios({
                    method: 'put',
                    url: 'http://192.168.31.36/api/AH7Or1g7rXJhJbOwv1VEDA-kPLra6O-JAu3waKqk/groups/' + this.id_from_bridge + '/action',
                    data: {
                        on: this.isChecked,
                        sat: 254,
                        bri: this.bri,
                        hue: 10000,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).then((response) => {
                    this.changeLightsState();
                });
            },
            changeLightsState() {
                Object.keys(this.lightsInGroup).forEach(key => {
                    this.lightsInGroup[key].on = this.isChecked;
                    this.lightsInGroup[key].bri = this.bri;
                })
            },
            onChangeBrightness() {
                Object.keys(this.lightsInGroup).forEach(key => {
                    this.lightsInGroup[key].bri = this.bri;
                })
            },
            getImageSourceForLight(value) {
                switch (value) {
                    case 'Hue white lamp' :
                        return '/img/devices/HueIconPack2019/bulbsClassic.svg';
                    case 'Hue white spot' :
                        return '/img/devices/HueIconPack2019/bulbsSpot.svg';
                    case 'Group' :
                        return '/img/devices/HueIconPack2019/bulbGeneralGroup.svg';
                    default:
                        return '/img/devices/unknownDevice.png';
                }
            },
        },
    };
</script>

<style lang="scss">
    @import "~@/Shared.scss";

    $themeColor: $mainLight;
    @import '~vue-slider-component/lib/theme/default.scss';

    .group-card {
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: #333;
        background: #fff;
        width: 100%;

        .group-content {
            display: flex;
            text-align: left;
            border-bottom: 1px solid #eee;
            margin: 1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;

            .group-information {
                margin-left: 1rem;
                width: 100%;

                .group-item {
                    text-transform: capitalize;
                    font-size: 13px;
                }
            }
            .not-reachable{
                font-size: 4.5rem;
                color: red;
            }
        }

        .group-additional-information {
            display: flex;
            justify-content: flex-end;
            padding-right: 3rem;
            padding-bottom: 1rem;

            .group-item {
                text-transform: capitalize;
                font-size: 13px;
                padding-right: 1rem;
            }
        }
    }


</style>
