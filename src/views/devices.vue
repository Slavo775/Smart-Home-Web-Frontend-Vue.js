<template>
    <div class="device-container">
        <home-deivce-tab
                v-if="responseData.active"
                v-for="active in responseData.active"
                v-bind:key = "active.id_device + ' device'"
                v-bind:checked="true"
                v-bind:name="active.name"
                v-bind:description="active.description"
                v-bind:id_device="active.id_device "
                v-bind:type="active.type"
                v-bind:mac="active.mac"
                v-bind:i-p="active.ip"
                v-bind:i-d="active.id_device + ' device'"
                v-bind:image-source="setImageToCart(active.type)"
                v-bind:id_for_activating="active.id_device + ' device'"
        >
        </home-deivce-tab>
        <home-deivce-tab
                v-if="responseData.activeGroup"
                v-for="activeGroup in responseData.activeGroup"
                v-bind:key = "activeGroup.id_device  + ' group'"
                v-bind:checked="true"
                v-bind:name="activeGroup.name"
                v-bind:description="activeGroup.description"
                v-bind:id_device="activeGroup.id_device"
                v-bind:type="activeGroup.type"
                v-bind:mac="activeGroup.mac"
                v-bind:i-p="activeGroup.ip"
                v-bind:i-d="activeGroup.id_device + ' group'"
                v-bind:image-source="setImageToCart(activeGroup.type)"
                v-bind:id_for_activating="activeGroup.id_device + ' group'"
        >
        </home-deivce-tab>
        <home-deivce-tab
                v-if="responseData.nonactive"
                v-for="nonactive in responseData.nonactive"
                v-bind:key = "nonactive.id_device  + ' device'"
                v-bind:checked="false"
                v-bind:name="nonactive.name"
                v-bind:description="nonactive.description"
                v-bind:id_device="nonactive.id_device"
                v-bind:type="nonactive.type"
                v-bind:mac="nonactive.mac"
                v-bind:i-p="nonactive.ip"
                v-bind:i-d="nonactive.id_device"
                v-bind:image-source="setImageToCart(nonactive.type)"
                v-bind:id_for_activating="nonactive.id_device + ' device'"
        >
        </home-deivce-tab>

        <home-deivce-tab
                v-if="responseData.nonactiveGroup"
                v-for="nonactiveGroup in responseData.nonactiveGroup"
                v-bind:key = "nonactiveGroup.id_device  + ' group'"
                v-bind:checked="false"
                v-bind:name="nonactiveGroup.name"
                v-bind:description="nonactiveGroup.description"
                v-bind:id_device="nonactiveGroup.id_device"
                v-bind:type="nonactiveGroup.type"
                v-bind:mac="nonactiveGroup.mac"
                v-bind:i-p="nonactiveGroup.ip"
                v-bind:i-d="nonactiveGroup.id_device + ' group'"
                v-bind:image-source="setImageToCart(nonactiveGroup.type)"
                v-bind:id_for_activating="nonactiveGroup.id_device + ' group'"
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
                    case 'Hue white lamp' : return this.imageSource = '/img/devices/HueIconPack2019/bulbsClassic.svg';
                    case 'Hue white spot' : return this.imageSource = '/img/devices/HueIconPack2019/bulbsSpot.svg';
                    case 'Group' : return this.imageSource = '/img/devices/HueIconPack2019/bulbGeneralGroup.svg';
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
