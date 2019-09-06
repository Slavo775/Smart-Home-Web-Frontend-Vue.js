<template>

</template>

<script>
    import axios from 'axios';
    import {hue_params} from '../../hue-params.js';
    const TYPE_LIGHT = 'lights';
    const TYPE_GROUP = 'groups';
    export default {
        name: 'hue_base',
        data() {
          return{
              hue_params,
          };
        },
        methods: {
            setAction(type) {
                let action;
                switch (type) {
                    case 'lights':
                        action = 'state';
                        break;
                    case 'groups':
                        action = 'action';
                        break;
                    default:
                        return false;
                }
                return action;
            },
            onLight(type, ip, bri) {
                const action = this.setAction(type);
                if (action) {
                    axios({
                        method: 'put',
                        url: 'http://' + hue_params.BRIDGE_IP + '/api/' + hue_params.APPLICATION_HASH + '/' + type + '/'
                            + ip + '/' + action,
                        data: {
                            on: true,
                            bri,
                        },
                        headers: {
                            'Content-Type': 'json/plain;charset=utf-8',
                        },
                    }).then(() => {
                        if (type === 'lights') {
                            this.$emit('light', true, ip);
                        }
                    });
                }
            },
            offLight(type, ip) {
                const action = this.setAction(type);
                if (action) {
                    axios({
                        method: 'put',
                        url: 'http://' + hue_params.BRIDGE_IP + '/api/' + hue_params.APPLICATION_HASH + '/' + type + '/'
                             + ip + '/' + action,
                        data: {
                            on: false,
                        },
                        headers: {
                            'Content-Type': 'json/plain;charset=utf-8',
                        },
                    }).then(() => {
                        if (type === 'lights') {
                            this.$emit('light', false, ip);
                        }
                    });
                }
            },
            changeBrightness(type, ip, bri) {
                const action = this.setAction(type);
                axios({
                    method: 'put',
                    url: 'http://' + hue_params.BRIDGE_IP + '/api/' + hue_params.APPLICATION_HASH + '/' + type + '/'
                         + ip + '/' + action,
                    data: {
                        bri,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                });
            },
        },
    };
</script>

<style scoped>

</style>
