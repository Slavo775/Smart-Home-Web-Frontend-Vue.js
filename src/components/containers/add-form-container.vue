<template>
    <div class="add-container">
        <div class="add-container__header"><h1 class="add-container__header--style">{{boxTitle}}</h1></div>
        <div class="add-container__content">
            <add-input
                    v-for="input in inputs"
                    :key="input.id"
                    v-bind:input_id="input.id"
                    v-bind:label_text="input.labelText"
                    v-model="inputData[input.model]"
                    v-on:hide="hideMessages"
            ></add-input>
            <main-button
                    :button-text=buttonText
                    @clickOnButton="makeRequest"
            ></main-button>
        </div>

    </div>
</template>

<script>
    import AddInput from "../inputs/add-input";
    import MainButton from "../inputs/main-button";
    import axios from 'axios';
    import {requestData} from '../../env.js';

    export default {
        name: "add-form-container",
        components: {MainButton, AddInput},
        props: {
            inputs: {
                type: Object,
            },
            boxTitle: {
                type: String,
            },
            buttonText: {
                type: String,
            }
        },
        created() {
            this.createModelArray();
        },
        data() {
            return {
                errorMessage: false,
                successMessage: false,
                inputData: [],
                requestData,
            }
        },
        methods: {
            createModelArray() {
                Object.keys(this.inputs).forEach((key) => {
                    this.inputData[this.inputs[key].model] = '';
                });
            },
            /**
             * This function hide error and success message
             */
            hideMessages() {
                this.errorMessage = false;
                this.successMessage = false;
            },
            /**
             * Functon for send request if button is clicked
             */
            makeRequest() {
                axios({
                    method: 'post',
                    url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/user/register',
                    data: Object.assign({}, this.inputData),
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    console.log(response);
                }).catch((error) => {
                    console.log(error)
                });
            },
        }
    }
</script>

<style lang="scss">

    .add-container {
        border: 0;
        margin-bottom: 30px;
        margin-top: 10%;
        border-radius: 6px;
        color: #333;
        background: #fff;
        position: relative;
        display: flex;
        flex-direction: column;
        min-width: 0;
        word-wrap: break-word;
        font-size: .875rem;
        padding: 15px;
        width: 50%;
        &__content{
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        &__header {
            border-radius: 3px;
            margin-top: -40px;
            padding: 15px;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(156, 39, 176, .4);
            background: linear-gradient(60deg, #ab47bc, #8e24aa);

            &--style {
                font-size: 1.125rem;
                font-weight: 300;
                line-height: 1.4em;
                font-family: Roboto, Helvetica, Arial, sans-serif;
                color: #ffffff;
            }
        }
    }

</style>
