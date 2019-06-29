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
    export default {
        name: "add-room-form",
        data (){
            return{
                name: '',
                description: '',
                nameValidation: true,
                descriptionValidation: true,
            }
        },
        methods: {
            validationField() {
                let validation = true;
                if(!this.name){
                    this.nameValidation = false;
                    validation = false;
                }
                if(!this.description){
                    this.descriptionValidation = false;
                    validation = false;
                }
                return validation;
            },
            submit(){
                this.nameValidation = true;
                this.descriptionValidation = true;
                if (!this.validationField()) {
                    this.message = 'Vyplnte vsetky polia!';
                    this.errorMessage = true;
                    return;
                }
            }
        }
    }
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
