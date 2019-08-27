<template>
    <div>
        <input type="checkbox" :id="id_device" style="display:none" :checked="checked" v-on:change="changeMethod"/>
        <label :for="id_device" class = "toggle" :class="[isChecked ? 'toggle-checked' : 'toggle-nonchecked' ]"><span
                class = "device-span"
                :class="[isChecked ? 'device-span-checked' : 'device-span-nonchecked']"></span></label>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "main-checkbox",
        props: [
            'checked',
            'id_device',
            'changeMethod',
            'isChecked'
        ],
    }
</script>

<style lang="scss">
    @import "~@/Shared.scss";
    .toggle {
        position: relative;
        display: block;
        width: 40px;
        height: 20px;
        cursor: pointer;
        -webkit-tap-highlight-color: transparent;
        transform: translate3d(0, 0, 0);
        &:before {
            content: "";
            position: relative;
            top: 3px;
            left: 3px;
            width: 34px;
            height: 14px;
            display: block;
            border-radius: 8px;
            transition: background .2s ease;
        }
    }

    .toggle-checked{
        &:before{
            background: $mainLight;
        }
    }

    .toggle-nonchecked{
        &:before {
            background: #9A9999;
        }
    }
    .device-span-checked{
        background: $main;
        transform: translateX(20px);
        transition: all .2s cubic-bezier(.8,.4,.3,1.25), background .15s ease;
        box-shadow: 0 3px 8px rgba($main,.2);
        &:before{
            transform: scale(1);
            opacity: 0;
            transition: all .4s ease;
        }
    }
    .device-span-nonchecked{
        background: white;
    }
    .device-span {
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        display: block;
        border-radius: 10px;
        box-shadow: 0 3px 8px rgba(#9A9999, .5);
        transition: all .2s ease;
        &:before {
            content: "";
            position: absolute;
            display: block;
            margin: -18px;
            width: 56px;
            height: 56px;
            background: rgba(#4F2EDC, .5);
            border-radius: 50%;
            transform: scale(0);
            opacity: 1;
            pointer-events: none;
        }
    }
</style>
