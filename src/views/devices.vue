<template>
    <div class="device-container">
        <home-deivce-tab
                v-if="responseData.active"
                v-for="active in responseData.active"
                v-bind:key = active.id_device
                v-bind:checked="true"
                v-bind:name="active.name"
                v-bind:description="active.description"
                v-bind:id_device="active.id_device"
                v-bind:type="active.type"
                v-bind:mac="active.mac"
                v-bind:i-p="active.ip"
                v-bind:i-d="active.id_device"
                v-bind:image-source="setImageToCart(active.type)"
        >
        </home-deivce-tab>
        <home-deivce-tab
                v-if="responseData.nonactive"
                v-for="nonactive in responseData.nonactive"
                v-bind:key = nonactive.id_device
                v-bind:checked="false"
                v-bind:name="nonactive.name"
                v-bind:description="nonactive.description"
                v-bind:id_device="nonactive.id_device"
                v-bind:type="nonactive.type"
                v-bind:mac="nonactive.mac"
                v-bind:i-p="nonactive.ip"
                v-bind:i-d="nonactive.id_device"
                v-bind:image-source="setImageToCart(nonactive.type)"
        >
        </home-deivce-tab>
    </div>
</template>

<script>
    import HomeDeivceTab from '../components/home-deivce-tab';
    import axios from 'axios';
    import {requestData} from '../env.js';
    export default {
        name: 'devices',
        components: {HomeDeivceTab},
        created() {
            axios({
                method: 'get',
                url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/device/all-device',
            }).then((response) => {
                this.responseData = response.data.data;
            }).catch(() => {
                return false;
            });
            return false;
        },
        data() {
            return {
                responseData: [],
                requestData,
                imageSource: '',
            };
        },
        methods: {
            setImageToCart(type) {
                switch (type) {
                    case 'nodeMCU': return this.imageSource = '/img/devices/nodeMCU.png';
                    default: return this.imageSource = '/img/devices/unknownDevice.png';
                }
            },
        },
    };
</script>

<style lang="scss">
    .device-container {
        padding-left: 260px;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        .device-container {
            padding-left: 0;
        }
    }
</style>
