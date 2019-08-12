<template>
    <div class="add-device-container">
        <div class="header-box"><h1 class="header">Pridaj zariadenie</h1></div>
        <div class = "add-device-container-content">
            <add-input
                    v-bind:input_id="'ip'"
                    v-bind:label_text="'IP Adresa'"
                    v-model="IP"
                    v-on:hide="hideMessages"
            >

            </add-input>
            <div class="message"
                 v-bind:class="{ 'error-message' : errorMessage , 'success-message': successMessage }"
            >{{this.message}}
            </div>
            <div class="buttons">
                <button class="button-add"
                        v-on:click="submit">
                    Pridaj
                </button>
                <button class="button-add"
                v-on:click="test">Test</button>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import AddInput from "../inputs/add-input";

    export default {
        name: 'add-device-form',
        components: {AddInput},
        data() {
            return {
                IP: '',
                errorMessage: false,
                successMessage: false,
                ipValidation: true,
                message: '',
            };
        },
        methods: {
            /**
             * This function hide error and success message
             */
            hideMessages(){
                this.errorMessage = false;
                this.successMessage = false;
            },
            /**
             * validate IP address using regullar expression
             * @returns {boolean}
             */
            validateIP() {
                const regexIP = new RegExp('^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]' +
                    '|1[0-9]{2}|2[0-4][0-9]|25[0-5])$');
                this.ipValidation = regexIP.test(this.IP);
                return this.ipValidation;
            },
            /**
             * validate all field (field must all fill)
             * @returns {boolean}
             */
            validateField() {
                let validation = true;
                if (!this.IP) {
                    this.ipValidation = false;
                    validation = false;
                }
                return validation;

            },

            sendRequestForAddDevice() {
                this.errorMessage = false;
                this.message = '';
                axios({
                    method: 'post',
                    url: 'http://localhost:8888/add-device-only-ip',
                    data: {
                        IP: this.IP,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).then((response) => {
                    console.log(response);
                    const status = 'status';
                    if (response.data[status] === 'ok') {
                        this.successMessage = true;
                        this.message = 'OK!';
                    } else {
                        this.errorMessage = true;
                        this.message = response.data.message;
                    }
                }).catch(function () {
                    this.errorMessage = true;
                    this.message = 'Niečo sa pokazilo!';
                });
            },

            /**
             * function is run when button is clicked
             */
            submit() {
                this.ipValidation = true;

                if (!this.validateField()) {
                    this.message = 'Vyplnte vsetky polia!';
                    this.errorMessage = true;
                    return;
                }

                if (!this.validateIP()) {
                    this.message = 'IP adresa nie je v správnom tvare!';
                    this.errorMessage = true;
                    return;
                }
                this.sendRequestForAddDevice();
            },

            test() {
                this.errorMessage = false;
                this.message = '';
                axios({
                    method: 'get',
                    url: 'http://'+ this.IP +':8080/deviceStatus',
                    data: {
                        IP: this.IP,
                    },
                }).then((response) => {
                    const status = 'status';
                    if (response.data[status] === 'ok') {
                        this.successMessage = true;
                        this.message = 'OK!';
                    } else {
                        this.errorMessage = true;
                        this.message = 'IP adresa zrejme nie je spravna!';
                    }
                }).catch(() =>{
                    this.errorMessage = true;
                    this.message = 'IP adresa zrejme nie je spravna!';
                });
            }
        },
    };
</script>

<style>
</style>
