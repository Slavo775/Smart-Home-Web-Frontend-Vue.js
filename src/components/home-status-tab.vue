<template>
    <div class="card" v-if="show">
        <div class="card-header card-box-shadow" :class="classStatus">
            <font-awesome-icon v-if="type === 1" icon='times' class="card-icon"></font-awesome-icon>
            <font-awesome-icon v-if="type === 2" icon='exclamation-triangle' class="card-icon"></font-awesome-icon>
            <font-awesome-icon v-if="type === 3" icon='info' class="card-icon"></font-awesome-icon>
        </div>
        <div class="card-header-text"><span>{{ip}}</span><span>{{name}}</span><span>{{date}}</span></div>
        <div class="content">{{content}}</div>
        <div class="button-container">
            <add-input
                    v-bind:input_id="'status'"
                    v-bind:label_text="'Status text'"
                    v-model="status_text"
            >

            </add-input>
            <button v-if="type === 1 || type === 2" class="btn" v-on:click="clickOnResolved">Vyriešené</button>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {requestData} from '../env.js';
    import {library} from '@fortawesome/fontawesome-svg-core';
    import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';
    import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
    import {faInfo} from '@fortawesome/free-solid-svg-icons';
    import AddInput from './inputs/add-input';

    library.add(faTimes);
    library.add(faExclamationTriangle);
    library.add(faInfo);
    export default {
        components: {AddInput, FontAwesomeIcon},
        name: 'home-status-tab',
        props: [
            'type',
            'classStatus',
            'content',
            'ip',
            'name',
            'date',
            'errorCode',
            'statusId',
            'statusType',
        ],
        data() {
            return {
                requestData,
                show: true,
                status_text: '',
            };
        },
        methods: {
            clickOnResolved() {
                axios({
                    method: 'post',
                    url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/status/set-resolved',
                    data: {
                        id_status: this.statusId,
                        status_text: this.status_text,
                    },
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    if (response.data.status) {
                        this.show = false;
                        this.$emit('clickOnResolved', this.statusId, this.statusType);
                    }
                }).catch(() => {
                    return false;
                });
            },
        },
    };
</script>

<style lang="scss">

    .card {
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: #333;
        background: #fff;
        width: 100%;

        .card-header {
            border-radius: 3px;
            padding: 15px;
            margin-top: -20px;
            float: left;
        }

        .card-header-error {
            background-color: #E73E3A;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(244, 67, 54, .4);
        }

        .card-header-warning {
            background-color: #FC930B;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(255, 152, 0, .4);
        }

        .card-header-info {
            background-color: #4AA64F;
            box-shadow: 0 4px 20px 0 rgba(0, 0, 0, .14), 0 7px 10px -5px rgba(76, 175, 80, .4);
        }

        .card-icon {
            font-family: 'Material Icons';
            font-weight: normal;
            font-style: normal;
            font-size: 24px;
            line-height: 1;
            letter-spacing: normal;
            text-transform: none;
            display: inline-block;
            white-space: nowrap;
            word-wrap: normal;
            direction: ltr;
            -webkit-font-feature-settings: 'liga';
            -webkit-font-smoothing: antialiased;
            width: 56px;
            height: 56px;
            text-align: center;
            color: white;
        }

        .card-header-text {
            justify-content: space-between;
            display: flex;
            line-height: 30px;
            font-size: 14px;
            margin-right: 1rem;
            margin-left: 6rem;
            padding-bottom: 1rem;
            color: #999;
            flex-wrap: wrap;
        }

        .content-header {
            text-align: left;
        }

        .content {
            text-align: left;
            padding-top: 1rem;
            margin-left: 3rem;
            margin-right: 3rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
            padding-left: 4rem;
        }

        .button-container {
            display: flex;
            justify-content: flex-end;
            padding-right: 3rem;
            height: 5rem;
            .btn {
                cursor: pointer;
                color: #fff;
                background-color: #9c27b0;
                border-color: #9c27b0;
                box-shadow: 0 2px 2px 0 rgba(156, 39, 176, .14), 0 3px 1px -2px rgba(156, 39, 176, .2), 0 1px 5px 0 rgba(156, 39, 176, .12);
                position: relative;
                padding: 12px 30px;
                margin: 0.5rem 7px;
                font-size: .75rem;
                font-weight: 400;
                line-height: 1.428571;
                text-decoration: none;
                text-transform: uppercase;
                letter-spacing: 0;
                border: 0;
                border-radius: .2rem;
                transition: box-shadow .2s cubic-bezier(.4, 0, 1, 1), background-color .2s cubic-bezier(.4, 0, .2, 1);
                will-change: box-shadow, transform;
                display: inline-block;
                text-align: center;
                white-space: nowrap;
                vertical-align: middle;
                user-select: none;
            }
        }
    }
</style>
