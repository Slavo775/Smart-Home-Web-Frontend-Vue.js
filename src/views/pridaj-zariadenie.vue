<template>
    <div class="about">
        <div class="add-device-container">
            <h1 class="header">Pridaj zariadenie</h1>
            <div class="input-div">
                <label for="meno-zariadenia"></label>
                <input type="text"
                       name="meno-zariadenia"
                       id="meno-zariadenia"
                       class="input"
                       placeholder="Meno zariadenia"
                       v-model="name"
                       v-bind:class="{ 'input-error' : !nameValidation }">
                <span class="input-span"></span>
            </div>
            <div class="input-div">
                <label for="typ-zariadenia"></label>
                <input type="text"
                       name="typ-zariadenia"
                       id="typ-zariadenia"
                       class="input"
                       placeholder="Typ zariadenia"
                       v-model="type"
                       v-bind:class="{ 'input-error' : !typeValidation }">
            </div>
            <div class="input-div">
                <label for="uloha-zariadenia"></label>
                <input type="text"
                       name="uloha-zariadenia"
                       id="uloha-zariadenia"
                       class="input"
                       placeholder="Uloha zariadenia"
                       v-model="role"
                       v-bind:class="{ 'input-error' : !roleValidation }">
            </div>
            <div class="input-div">
                <label for="pozicia-zariadenia"></label>
                <input type="text"
                       name="pozicia-zariadenia"
                       id="pozicia-zariadenia"
                       class="input"
                       placeholder="Pozicia zariadenia"
                       v-model="location"
                       v-bind:class="{ 'input-error' : !locationValidation }">
            </div>
            <div class="input-div">
                <label for="ip-zariadenia"></label>
                <input type="text"
                       v-model="IP"
                       name="ip-zariadenia"
                       id="ip-zariadenia"
                       class="input"
                       placeholder="IP adresa"
                       v-bind:class="{ 'input-error' : !ipValidation }">
            </div>
            <div class="input-div">
                <label for="description"></label>
                <textarea id="description"
                          v-model="description"
                          name="description"
                          class="input"
                          placeholder="Popis zariadenia"
                          v-bind:class="{ 'input-error' : !descriptionValidation }"></textarea>
            </div>

            <div class="buttons">
                <button class="button-add"
                        v-on:click="submit">
                    Pridaj
                </button>
                <button class="button-add">Test</button>
                <div class="message"
                     v-bind:class="{ 'error-message' : errorMessage , 'success-message': successMessage }"
                >{{this.message}}
                </div>
            </div>
        </div>
        <layout-footer></layout-footer>
    </div>
</template>

<script>
    import LayoutFooter from '../components/layout-footer';
    import axios from 'axios';

    export default {
        components: {LayoutFooter},
        data() {
            return {
                IP: '',
                location: '',
                role: '',
                type: '',
                name: '',
                message: '',
                description: '',
                errorMessage: false,
                successMessage: false,
                ipValidation: true,
                nameValidation: true,
                typeValidation: true,
                roleValidation: true,
                locationValidation: true,
                descriptionValidation: true,
            };
        },
        methods: {
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
                if (!this.name) {
                    this.nameValidation = false;
                    validation = false;
                }
                if (!this.type) {
                    this.typeValidation = false;
                    validation = false;
                }
                if (!this.role) {
                    this.roleValidation = false;
                    validation = false;
                }
                if (!this.location) {
                    this.locationValidation = false;
                    validation = false;
                }
                if (!this.IP) {
                    this.ipValidation = false;
                    validation = false;
                }
                if (!this.description) {
                    this.descriptionValidation = false;
                    validation = false;
                }

                return validation;

            },

            sendRequestForAddDevice() {
                axios({
                    method: 'post',
                    url: 'http://localhost:8888/add-device',
                    data: {
                        name: this.name,
                        type: this.type,
                        role: this.role,
                        location: this.location,
                        IP: this.IP,
                        description: this.description,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).then(function(response) {
                    const status = 'status';
                    if (response.data[status]) {
                        this.successMessage = true;
                        this.message = 'OK!';
                    } else {
                        this.errorMessage = true;
                        this.message = 'Niečo sa pokazilo!';
                    }
                }).catch(function() {
                    this.errorMessage = true;
                    this.message = 'Niečo sa pokazilo!';
                });
            },

            /**
             * function is run when button is clicked
             */
            submit() {
                this.nameValidation = true;
                this.typeValidation = true;
                this.roleValidation = true;
                this.locationValidation = true;
                this.ipValidation = true;
                this.descriptionValidation = true;

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
        },
    };
</script>

<style lang="less">
    .about {
        background: url("../assets/wp2163554.png") no-repeat center center fixed;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        height: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }

    .header {
        display: block;
        font-family: Montserrat-ExtraBold;
        font-size: 24px;
        color: #333333;
        line-height: 1.2;
        justify-content: center;
        text-align: center;
        width: 100%;
    }

    .add-device-container {
        width: 37rem;
        background: #fff;
        border-radius: 10px;
        overflow: hidden;
        display: -webkit-box;
        display: -webkit-flex;
        display: -moz-box;
        display: -ms-flexbox;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 70px 70px 70px 60px;
        margin-top: 4rem;
        margin-bottom: 4rem;

        .input-div {
            width: 100%;
            z-index: 1;
            margin-bottom: 20px;

            .input {
                display: block;
                width: 100%;
                background: #e6e6e6;
                font-family: Montserrat-Bold;
                font-size: 15px;
                line-height: 1.5;
                color: #666666;
                border-radius: 25px;
                border: none;
                padding: 1rem;
            }
        }
    }

    .buttons {
        display: flex;

        .button-add {
            margin-right: 1rem;
            min-width: 193px;
            height: 50px;
            border-radius: 25px;
            background: #18A0A3;
            font-family: Montserrat-Bold;
            font-size: 15px;
            line-height: 1.5;
            color: #fff;
            display: -webkit-box;
            display: -webkit-flex;
            display: -moz-box;
            display: -ms-flexbox;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 25px;
            -webkit-transition: all 0.4s;
            -o-transition: all 0.4s;
            -moz-transition: all 0.4s;
            transition: all 0.4s;
        }

        .message {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .error-message {
            color: #D8000C;
            background-color: #FFBABA;
            padding: 0.5rem;
        }

        .success-message {
            margin: 10px 0;
            padding: 10px;
            border-radius: 3px 3px 3px 3px;
            color: #270;
            background-color: #DFF2BF;
        }
    }

    .input-error {
        border-style: solid !important;
        border-color: red !important;
        border-width: 1px !important;
    }

    @font-face {
        font-family: Montserrat-Regular;
        src: url('../assets/fonts/montserrat/Montserrat-Regular.ttf');
    }

    @font-face {
        font-family: Montserrat-Bold;
        src: url('../assets/fonts/montserrat/Montserrat-Bold.ttf');
    }

    @font-face {
        font-family: Montserrat-ExtraBold;
        src: url('../assets/fonts/montserrat/Montserrat-ExtraBold.ttf');
    }

    @font-face {
        font-family: Montserrat-Medium;
        src: url('../assets/fonts/montserrat/Montserrat-Medium.ttf');
    }


</style>

