<template>
    <div class="lights-container">
        <group-tab
                v-if="responseData && status"
                v-for="group in responseData"
                v-bind:key="group.id_group + ' group'"
                v-bind:id_group="group.id_group"
                v-bind:id_from_bridge="group.id_from_bridge"
                v-bind:name="group.name"
                v-bind:brightness="group.bri"
                v-bind:on="group.on"
                v-bind:image-source="getImage(group.name)"
                v-bind:lights="group.lights"
        ></group-tab>
        <error-page v-if="!status"
                    v-bind:error-code="errorCode"
                    v-bind:error-message="errorMessage"></error-page>
        <loader v-if="loader"></loader>
    </div>
</template>

<script>
    import GroupTab from '../components/lights-components/group-tab';
    import {requestData} from '../env.js';
    import axios from 'axios';
    import Loader from '../components/loader';
    import ErrorPage from '../components/error-page';

    export default {
        name: 'hue_lights',
        components: {ErrorPage, Loader, GroupTab},
        created() {
            axios({
                method: 'get',
                url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/hue/all-active',
            }).then((response) => {
                this.loader = false;
                if (response.data.status) {
                    this.responseData = response.data.result;
                    this.errorCode = response.data.code;
                    this.errorMessage = response.data.message;
                    this.status = true;
                } else {
                    this.status = false;
                    this.errorCode = response.data.code;
                    this.errorMessage = response.data.message;
                }
            }).catch(() => {
                return false;
            });
            return false;
        },
        data() {
            return {
                requestData,
                responseData: [],
                status: true,
                loader: true,
                errorCode: 0,
                errorMessage: '',
            };
        },
        methods: {
            getImage(name) {
                switch (name) {
                    case 'Bedroom':
                        return this.imageSource = '/img/devices/HueIconPack2019/roomsBedroom.svg';
                    case 'Hall' :
                        return this.imageSource = '/img/devices/HueIconPack2019/roomsOther.svg';
                    case 'Table' :
                        return this.imageSource = '/img/devices/HueIconPack2019/roomsOffice.svg';
                    default:
                        return this.imageSource = '/img/devices/HueIconPack2019/bulbGeneralGroup.svg';
                }
            },
        },
    };
</script>

<style lang="scss">

    .lights-container {
        padding-left: 260px;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
    }

    @media only screen and (max-width: 600px) {
        .lights-container {
            padding-left: 0;
        }
    }

</style>
