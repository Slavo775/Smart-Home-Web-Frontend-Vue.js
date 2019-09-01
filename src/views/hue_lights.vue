<template>
    <div class = "lights-container">
    <group-tab
            v-if="responseData"
            v-for="group in responseData"
            v-bind:key = "group.id_group + ' group'"
            v-bind:id_group="group.id_group"
            v-bind:id_from_bridge="group.id_from_bridge"
            v-bind:name="group.name"
            v-bind:brightness="group.bri"
            v-bind:on="group.on"
            v-bind:image-source="getImage(group.name)"
            v-bind:lights="group.lights"
    ></group-tab>
    </div>
</template>

<script>
    import GroupTab from '../components/lights-components/group-tab';
    import {requestData} from '../env.js';
    import axios from 'axios';
    export default {
        name: 'hue_lights',
        components: {GroupTab},
        created() {
            axios({
                method: 'get',
                url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/hue/all-active',
            }).then((response) => {
                this.responseData = response.data.result;
            }).catch(() => {
                return false;
            });
            return false;
        },
        data() {
            return{
              requestData,
                responseData: [],
            };
        },
        methods: {
            getImage(name) {
                switch (name) {
                    case 'Bedroom': return this.imageSource = '/img/devices/HueIconPack2019/roomsBedroom.svg';
                    case 'Hall' : return this.imageSource = '/img/devices/HueIconPack2019/roomsOther.svg';
                    case 'Table' : return this.imageSource = '/img/devices/HueIconPack2019/roomsOffice.svg';
                    default: return this.imageSource = '/img/devices/HueIconPack2019/bulbGeneralGroup.svg';
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
