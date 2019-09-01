<template>
    <div class="light-card">
        <div class="light-content"><img :src="imageSource" width="100" height="75"
                                        alt="device image">
            <div class="light-information">
                <div class="light-item">ID: {{id_device}}</div>
                <div class="light-item">Name: {{name}}</div>
                <div class="light-item">IP: {{ip}}</div>
            </div>
            <div v-if="!reachableLight" class="not-reachable">
                <font-awesome-icon icon='exclamation-triangle'></font-awesome-icon>
            </div>
        </div>
        <div class="light-additional-information">
            <div class="light-item">Active:</div>
            <main-checkbox v-bind:checked="on"
                           v-bind:id_device="id_device"
                           v-bind:change-method="checkboxChangeLight"
                           v-bind:is-checked="isCheckedLight"
            ></main-checkbox>
        </div>
        <vue-slider style="padding: 0"
                    v-model="brightness"
                    v-on:drag-end="onChangeLight"
                    v-bind:min="0"
                    v-bind:max="254"
        ></vue-slider>
    </div>
</template>

<script>
    import VueSlider from 'vue-slider-component';
    import 'vue-slider-component/theme/default.css';
    import MainCheckbox from "../inputs/main-checkbox";
    import axios from 'axios';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

    library.add(faExclamationTriangle);

    export default {
        name: 'light-tab',
        components: {MainCheckbox, VueSlider, FontAwesomeIcon},
        props: [
            'imageSource',
            'id_device',
            'name',
            'ip',
            'bri',
            'on',
            'reachable',
        ],
        watch: {
            bri: function (newBri) {
                this.brightness = newBri;
            },
            on: function (newOn) {
                this.isCheckedLight = newOn;
            },
        },
        data() {
            return {
                brightness: this.bri,
                isCheckedLight: this.on,
                reachableLight: this.reachable,
            };
        },
        methods: {
            onChangeLight() {
                if (this.isCheckedLight) {
                    this.setLightBrightness();
                }
            },
            checkboxChangeLight() {
                this.isCheckedLight = !this.isCheckedLight;
                this.setLightState();
            },
            setLightState() {
                axios({
                    method: 'put',
                    url: 'http://192.168.31.36/api/AH7Or1g7rXJhJbOwv1VEDA-kPLra6O-JAu3waKqk/lights/' + this.ip + '/state',
                    data: {
                        on: this.isCheckedLight,
                        sat: 254,
                        bri: this.brightness,
                        hue: 10000,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).then((response) => {
                    this.$emit('light', this.isCheckedLight);
                });
            },
            setLightBrightness() {
                axios({
                    method: 'put',
                    url: 'http://192.168.31.36/api/AH7Or1g7rXJhJbOwv1VEDA-kPLra6O-JAu3waKqk/lights/' + this.ip + '/state',
                    data: {
                        bri: this.brightness,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                })
            },
        }

    }
</script>

<style lang="scss">
    .light-card {
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: #333;
        background: #fff;
        width: 100%;
        margin-left: 2rem;
        width: -webkit-fill-available;

        .light-content {
            display: flex;
            text-align: left;
            border-bottom: 1px solid #eee;
            margin: 1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;

            .light-information {
                margin-left: 1rem;
                width: 100%;

                .light-item {
                    text-transform: capitalize;
                    font-size: 13px;
                }
            }
            .not-reachable{
                font-size: 4.5rem;
                color: red;
            }
        }

        .light-additional-information {
            display: flex;
            justify-content: flex-end;
            padding-right: 3rem;
            padding-bottom: 1rem;

            .light-item {
                text-transform: capitalize;
                font-size: 13px;
                padding-right: 1rem;
            }
        }
    }


</style>
