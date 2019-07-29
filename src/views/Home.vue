<template>
    <div class = 'home'>
    <div class='status-header'>errors</div>
    <home-status-tab
    v-bind:class-status='classError'
    v-bind:type = 1
    v-bind:content='contentError'
    v-bind:ip='ip'
    v-bind:name='name'
    v-bind:date='date'
    ></home-status-tab>
    <div class='status-header'>warnings</div>
    <home-status-tab
            v-bind:class-status='classWarning'
            v-bind:type = 2
            v-bind:content='contentWarning'
            v-bind:ip='ip'
            v-bind:name='name'
            v-bind:date='date'></home-status-tab>
    <div class='status-header'>info</div>
    <home-status-tab
            v-bind:class-status='classInfo'
            v-bind:type = 3
            v-bind:content='contentInfo'
            v-bind:ip='ip'
            v-bind:name='name'
            v-bind:date='date'></home-status-tab>
    </div>
</template>

<script>
    import HomeStatusTab from '../components/home-status-tab';
    export default {
        name: 'Home',
        components: {HomeStatusTab},
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
            };
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
