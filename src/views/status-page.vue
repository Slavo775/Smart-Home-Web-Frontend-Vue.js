<template>
    <div class='home'>
        <div v-if="Errors">
            <div class='status-header'>errors</div>
            <home-status-tab
                    v-for="error in responseData.errors"
                    v-bind:key=error.id_status
                    v-bind:class-status='classError'
                    v-bind:type=1
                    v-bind:content=error.status_code
                    v-bind:ip=error.ip
                    v-bind:name=error.name
                    v-bind:date=error.status_time
                    v-bind:status-id=error.id_status
                    v-bind:status-type="error.status_type"
            ></home-status-tab>
        </div>
        <div v-if="Warnings">
            <div class='status-header'>warnings</div>
            <home-status-tab
                    v-for="warning in responseData.warnings"
                    v-bind:key=warning.id_status
                    v-bind:class-status='classWarning'
                    v-bind:type=2
                    v-bind:content=warning.status_code
                    v-bind:ip=warning.ip
                    v-bind:name=warning.name
                    v-bind:date=warning.status_time
                    v-bind:status-id=warning.id_status
                    v-bind:status-type="warning.status_type"
            ></home-status-tab>
        </div>
        <div v-if="Infos">
            <div class='status-header'>info {{Infos}}</div>
            <home-status-tab
                    v-for="info in responseData.infos"
                    v-bind:key=info.id_status
                    v-bind:class-status='classInfo'
                    v-bind:type=3
                    v-bind:content=info.status_code
                    v-bind:ip=info.ip
                    v-bind:name=info.name
                    v-bind:date=info.status_time
                    v-bind:status-id=info.id_status
            ></home-status-tab>
        </div>
        <div v-if="emptyStatus" >
            <img src="/img/juchu.png" alt="juchu" class="image">
            No errors found
        </div>

        <loader v-if="loaderStatus"></loader>
    </div>
</template>

<script>
    import HomeStatusTab from '../components/home-status-tab';
    import axios from 'axios';
    import {requestData} from '../env.js';
    import Loader from '../components/loader';

    export default {
        name: 'Home',
        components: {Loader, HomeStatusTab},
        created() {
            axios({
                method: 'get',
                url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/status/all-unresolved',
                headers: {
                    'Content-Type': 'json/plain;charset=utf-8',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                this.loaderStatus = false;
                if (response.data.status) {
                    this.responseData = response.data.data;
                    if (this.responseData.errors !== undefined) {
                        this.Errors = true;
                    }
                    if (this.responseData.warnings !== undefined) {
                        this.Warnings = true;
                    }
                    if (this.responseData.infos !== undefined) {
                        this.Infos = true;
                    }
                    if (response.data.code === 201) {
                        this.emptyStatus = true;
                    }
                    this.status = true;
                    this.error = false;
                    this.message = response.data.message;
                    this.code = response.data.code;
                } else {
                    this.emptyStatus = false;
                    this.status = false;
                    this.error = true;
                    this.message = response.data.message;
                    this.code = response.data.code;
                }
            }).catch(() => {
                return false;
            });
            return false;
        },
        data() {
            return {
                classError: 'card-header-error',
                classWarning: 'card-header-warning',
                classInfo: 'card-header-info',
                contentError: 'This is error message!',
                contentWarning: 'This is warning message!',
                contentInfo: 'This is content error!',
                ip: '192.168.31.14',
                name: 'Arduino',
                date: '18. 02. 1994 18:25:34',
                statusData: [],
                requestData,
                responseData: [],
                error: false,
                status: false,
                message: '',
                code: 0,
                loaderStatus: true,
                emptyStatus: false,
                Errors: false,
                Warnings: false,
                Infos: false,
            };
        },
        methods: {
            getAllStatus() {
                axios({
                    method: 'get',
                    url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/status/all-unresolved',
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    return response;
                }).catch(() => {
                    return false;
                });
                return false;
            },
        },
        checkStatusAfterClickOnResolved(statusId, statusType) {
            let status = false;
            if (statusType === 1) {
                this.changeUnresolvedErrorStatus(statusId);
                if (this.checkUnresolvedStatus(this.responseData.errors)) {
                    status = false;
                    this.Errors = true;
                } else {
                    status = true;
                    this.Errors = false;
                }
            }
            if (statusType === 2) {
                this.changeUnresolvedWarningsStatus();
                if (this.checkUnresolvedStatus(this.responseData.warnings)) {
                    status = false;
                    this.Warnings = true;
                } else {
                    status = true;
                    this.Warnings = false;
                }
            }
            status ? this.emptyStatus = true : this.emptyStatus = false;
        },
        /**
         * if return true one or more errors is unresolved
         * @param statusId
         * @returns {boolean}
         */
        checkUnresolvedStatus(responseData) {
            let status = false;
            Object.keys(responseData).forEach((key) => {
                if (responseData[key].resolved) {
                    status = true;
                }
            });
            return status;
        },

        changeUnresolvedErrorStatus(statusId) {
            Object.keys(this.responseData.errors).forEach((key) => {
                if (this.responseData.errors[key].id_status === statusId) {
                    this.responseData.errors[key].resolved = 1;
                }
            });
        },
        changeUnresolvedWarningsStatus(statusId) {
            Object.keys(this.responseData.warnings).forEach((key) => {
                if (this.responseData.warnings[key].id_status === statusId) {
                    this.responseData.warnings[key].resolved = 1;
                }
            });
        },
    };
</script>

<style lang='scss'>
    .home {
        padding-left: 260px;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;

        .status-header {
            text-transform: uppercase;
            padding: 5px 0;
            display: inline-block;
            font-size: 18px;
            color: #3c4858;
            white-space: nowrap;
            font-weight: 400;
            line-height: 30px;
            overflow: hidden;
            text-align: center;
            width: -webkit-fill-available;
        }
    }

    @media only screen and (max-width: 600px) {
        .home {
            padding-left: 0;

            .no-errors {
                display: flex;
                flex-wrap: wrap;
            }

            .image {
                width: -webkit-fill-available;
            }
        }
    }
</style>
