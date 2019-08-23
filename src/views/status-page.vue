<template>
    <div class = 'home'>
        <div class='status-header' v-if = requestData.errors>errors</div>
        <home-status-tab
                v-if="requestData.errors"
                v-for="error in requestData.errors"
                v-bind:class-status='classError'
                v-bind:type = 1
                v-bind:content = error.status_code
                v-bind:ip =  error.ip
                v-bind:name = error.name
                v-bind:date = error.status_time
        ></home-status-tab>
        <div class='status-header' v-if="requestData.warnings">warnings</div>
        <home-status-tab
                v-if="requestData.warnings"
                v-for="warning in requestData.warnings"
                v-bind:class-status='classWarning'
                v-bind:type = 2
                v-bind:content= warning.status_code
                v-bind:ip =warning.ip
                v-bind:name = warning.name
                v-bind:date= warning.status_time
        ></home-status-tab>
        <div class='status-header' v-if="requestData.infos" >info</div>
        <home-status-tab
                v-if="requestData.infos"
                v-for="info in requestData.infos"
                v-bind:class-status='classInfo'
                v-bind:type = 3
                v-bind:content= info.status_code
                v-bind:ip= info.ip
                v-bind:name=   info.name
                v-bind:date= info.status_time
        ></home-status-tab>
    </div>
</template>

<script>
    import HomeStatusTab from '../components/home-status-tab';
    import axios from 'axios';
    import {requestData} from '../env.js';
    export default {
        name: 'Home',
        components: {HomeStatusTab},
        created () {
            axios({
                method: 'get',
                url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/status/all-unresolved',
                headers: {
                    'Content-Type': 'json/plain;charset=utf-8',
                    'Accept': 'application/json',
                },
            }).then((response) => {
                this.requestData = response.data.data;
                console.log(response.data.data.warnings);
                return response;
            }).catch(() => {
                console.log('catch');
                return false;
            });
            return false;
        },
        watch: {
            '$route': 'getAllStatus'
        },
        data() {
            return{
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
                requestData: requestData,
                responseData: [],
            };
        },
        methods: {
            getAllStatus: () => {
                axios({
                    method: 'get',
                    url: 'http://' + this.requestData.API + ':' + this.requestData.API_port + '/status/all-unresolved',
                    headers: {
                        'Content-Type': 'json/plain;charset=utf-8',
                        'Accept': 'application/json',
                    },
                }).then((response) => {
                    console.log(response);
                    return response;
                }).catch(() => {
                    console.log('catch');
                    return false;
                });
                return false;
            },
        },
    };
</script>

<style lang='scss'>
    .home {
        padding-left: 260px;
        margin-left: 1rem;
        margin-right: 1rem;
        text-align: center;
        .status-header{
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
</style>
