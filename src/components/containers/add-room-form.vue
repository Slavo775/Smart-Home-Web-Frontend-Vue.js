<template>
    <div class="content">
        <div class="add-device-container">
            <h1 class="header">Pridaj Izbu</h1>
            <div class="input-div">
                <label for="room-name"></label>
                <input type="text"
                       name="room-name"
                       id="room-name"
                       class="input"
                       placeholder="Meno izby"
                       v-model="name"
                       v-bind:class="{ 'input-error' : !nameValidation }">
                <span class="input-span"></span>
            </div>
            <div class="input-div">
                <label for="description"></label>
                <textarea
                        name="description"
                        id="description"
                        class="input"
                        placeholder="Popis"
                        v-model="description"
                        v-bind:class="{ 'input-error' : !descriptionValidation }"></textarea>
            </div>
            <div class="buttons">
                <button class="button-add"
                        v-on:click="submit">
                    Pridaj
                </button>
            </div>
            <div class="message"
                 v-bind:class="{ 'error-message' : errorMessage , 'success-message': successMessage }"
            >{{this.message}}
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'add-room-form',
        data() {
            return{
                name: '',
                description: '',
                message: '',
                nameValidation: true,
                descriptionValidation: true,
                errorMessage: false,
                successMessage: false,
            };
        },
        methods: {
            validationField() {
                let validation = true;
                if (!this.name) {
                    this.nameValidation = false;
                    validation = false;
                }
                if (!this.description) {
                    this.descriptionValidation = false;
                    validation = false;
                }
                return validation;
            },
            sendRequest() {
                axios({
                    method: 'post',
                    url: 'http://localhost:8888/add-room',
                    data: {
                        name: this.name,
                        description: this.description,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                    },
                }).then((response) => {
                    const status = 'status';
                    if (response.data[status]) {
                        this.successMessage = true;
                        this.message = 'OK!';
                        return true;
                    } else {
                        this.errorMessage = true;
                        this.message = 'Niečo sa pokazilo!';
                        return false;
                    }
                }).catch(() => {
                    this.errorMessage = true;
                    this.message = 'Niečo sa pokazilo!';
                    return false;
                });
            },
            submit() {
                this.nameValidation = true;
                this.descriptionValidation = true;
                if (!this.validationField()) {
                    this.errorMessage = true;
                    this.message = 'Vyplnte vsetky polia!';
                    return;
                }
                if (this.sendRequest()) {
                    this.name = '';
                    this.description = '';
                }
            },
        },
    };
</script>

<style>
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
</style>
