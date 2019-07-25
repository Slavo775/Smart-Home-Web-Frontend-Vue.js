<template>
        <button v-on:click="sendRequestForAddDevice()">{{buttonText}}</button>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'button-for-hue',
        props: [
                'state',
                'buttonText',
                ],
        methods: {
            sendRequestForAddDevice() {
                axios({
                    method: 'put',
                    url: 'http://192.168.1.12/api/AH7Or1g7rXJhJbOwv1VEDA-kPLra6O-JAu3waKqk/lights/1/state',
                    data: {
                        on: this.state,
                        sat: 254,
                        bri: 254,
                        hue: 10000,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).catch(function() {
                    this.errorMessage = true;
                    this.message = 'Niečo sa pokazilo!';
                });
            },
        },
    };
</script>

<style scoped>

</style>
