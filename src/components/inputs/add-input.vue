<template>
    <label :for="input_id" class="inp">
        <input type="text" id="inp" placeholder="&nbsp;" v-on:input="$emit('input', $event.target.value)" :focus="hide">
        <span class="label">{{label_text}}</span>
        <span class="border"></span>
    </label>
</template>

<script>
    export default {
        name: 'add-input',
        props: [
            'input_id',
            'label_text',
            'hide',
        ],
    };
</script>

<style lang="scss">
    @import "~@/Shared";
.inp{
    display: grid;
    font-family: Avenir;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    position: relative;
    margin: auto;
    width: 100%;
    max-width: 280px;
    .label{
        position: absolute;
        top: 16px;
        left: 0;
        font-size: 16px;
        color: #9098A9;
        font-weight: 500;
        transform-origin: 0 0;
        transition: all .2s ease;
    }
    .border{
        position: absolute;
        bottom: 0;
        left: 0;
        height: 2px;
        width: 100%;
        background: $main;
        transform: scaleX(0);
        transform-origin: 0 0;
        transition: all .15s ease;
        z-index: 1;
    }
    input{
        -webkit-appearance: none;
        width: 100%;
        border: 0;
        font-family: inherit;
        height: 48px;
        font-size: 16px;
        font-weight: 500;
        border-bottom: 2px solid #C8CCD4;
        background: none;
        border-radius: 0;
        color: #223254;
        transition: all .15s ease;
        z-index: 1;
        &::placeholder{
            display: none;
        }
        &:hover{
            background: rgba(#223254,.03);
        }
        &:not(:placeholder-shown){
            +span{
                color: #5A667F;
                transform: translateY(-26px) scale(.75);
            }
        }

        &:focus {
            background: none;
            outline: none;

            + span {
                color: $main;
                transform: translateY(-26px) scale(.75);
                +.border{
                    transform: scaleX(1)
                }
            }
        }

    }
}
::-webkit-input-placeholder { /* Chrome/Opera/Safari */
    color: transparent;
}

</style>
