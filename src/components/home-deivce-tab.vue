<template>
    <div class="card">
        <div class="device-content"><img :src="imageSource" width="100" height="75"
                                         alt="device image">
            <div class="device-information">
                <div class="device-item">ID: {{id_device}}</div>
                <div class="device-item">Name: {{name}}</div>
                <div class="device-item">IP: {{IP}}</div>
                <div class="device-item">MAC: {{mac}}</div>
                <div class="device-item">Description: {{description}}</div>
                <div class="device-item">Type: {{type}}</div>
            </div>
        </div>
        <div class="additional-information">
            <div class="device-item">Active:</div>
            <main-checkbox v-bind:checked="checked"
                           v-bind:id_device="id_for_activating"
                           v-bind:change-method="checkboxChange"
                           v-bind:is-checked="isChecked"
            ></main-checkbox>
        </div>
    </div>
</template>

<script>
    import MainCheckbox from './inputs/main-checkbox';
    import axios from 'axios';
    import {requestData} from '../env.js';

    export default {
        name: 'home-deivce-tab',
        components: {MainCheckbox},
        props: [
            'IP',
            'name',
            'mac',
            'checked',
            'type',
            'description',
            'id_device',
            'id_for_activating',
            'imageSource',
        ],
        data() {
            return {
                isChecked: this.checked,
                requestData,
            };
        },
        methods: {
            checkboxChange() {
                this.isChecked = !this.isChecked;
                axios({
                    method: 'post',
                    url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/device/set-status',
                    data: {
                        id_device: this.id_device,
                        active: this.isChecked,
                        type: this.type,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                        'Accept': 'application/json',
                    },
                });
            },
        },
    };
</script>

<style lang="scss">
    @import "~@/Shared.scss";

    .card {
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: #333;
        background: #fff;
        width: 100%;

        .device-content {
            display: flex;
            text-align: left;
            border-bottom: 1px solid #eee;
            margin: 1rem;
            padding-top: 1rem;
            padding-bottom: 1rem;

            .device-information {
                margin-left: 1rem;
                width: 100%;

                .device-item {
                    text-transform: capitalize;
                    font-size: 13px;
                }
            }
        }

        .additional-information {
            display: flex;
            justify-content: flex-end;
            padding-right: 3rem;
            padding-bottom: 1rem;

            .device-item {
                text-transform: capitalize;
                font-size: 13px;
                padding-right: 1rem;
            }
        }
    }
</style>
