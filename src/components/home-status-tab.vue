<template>
    <div class="card">
        <div class="card-header card-box-shadow" :class="classStatus">
            <font-awesome-icon v-if="type === 1" icon='times' class="card-icon"></font-awesome-icon>
            <font-awesome-icon v-if="type === 2" icon='exclamation-triangle' class="card-icon"></font-awesome-icon>
            <font-awesome-icon v-if="type === 3" icon='info' class="card-icon" ></font-awesome-icon>
        </div>
        <div class="card-header-text"><span>{{ip}}</span><span>{{name}}</span><span>{{date}}</span></div>
        <div class="content">{{content}}</div>
        <div class="button-container"><button v-if="type === 1" class="btn">Hide</button><button v-if="type === 1" class="btn">Test</button></div>
    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import {faTimes} from '@fortawesome/free-solid-svg-icons';
    import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';
    import {faInfo} from '@fortawesome/free-solid-svg-icons';

    library.add(faTimes);
    library.add(faExclamationTriangle);
    library.add(faInfo);
    export default {
        components: { FontAwesomeIcon},
        name: 'home-status-tab',
        props: [
            'type',
            'classStatus',
            'content',
            'ip',
            'name',
            'date',
        ],
    };
</script>

<style lang="scss">

    .card{
        border: 0;
        margin-bottom: 30px;
        margin-top: 30px;
        border-radius: 6px;
        color: #333;
        background: #fff;
        width: 100%;
        box-shadow: 0 1px 4px 0 rgba(0,0,0,.14);

        .card-header{
            border-radius: 3px;

            padding: 15px;
            margin-top: -20px;
            float: left;
        }
        .card-header-error{
            background-color: #E73E3A;
        }
        .card-header-warning{
            background-color: #FC930B;
        }
        .card-header-info{
            background-color: #4AA64F;
        }
        .card-box-shadow{
            box-shadow: 0 4px 20px 0 rgba(0,0,0,.14), 0 7px 10px -5px rgba(255,152,0.4);
        }
        .card-icon{
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
        .card-header-text{
            justify-content: space-between;
            display: flex;
            line-height: 30px;
            font-size: 14px;
            margin-right: 1rem;
            margin-left: 6rem;
            padding-bottom: 1rem;
            color: #999;
        }
        .content-header{
            text-align: left;
        }
        .content{
            text-align: left;
            padding-top: 1rem;
            margin-left: 3rem;
            margin-right: 3rem;
            padding-bottom: 1rem;
            border-bottom: 1px solid #eee;
            padding-left: 4rem;
        }
        .button-container{
            display: flex;
            justify-content: flex-end;
            padding-right: 3rem;

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
