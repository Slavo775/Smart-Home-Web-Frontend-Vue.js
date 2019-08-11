<template>
    <div class="content">
        <add-input
                v-bind:label_text="'test label'"
                v-bind:input_id="'test'"
                v-model="modelText"
                >
        </add-input>
        <button v-on:click="clickOnButton">Click me!</button>
    </div>
</template>

<script>
    import axios from 'axios';
    import AddInput from '../inputs/add-input';
    export default {
        name: 'add-room-form',
        components: {AddInput},
        data() {
            return{
                name: '',
                description: '',
                message: '',
                nameValidation: true,
                descriptionValidation: true,
                errorMessage: false,
                successMessage: false,
                modelText: '',
            };
        },
        methods: {
            clickOnButton(){
                console.log(this.modelText)
            },
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
