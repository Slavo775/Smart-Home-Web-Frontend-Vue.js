<template>
    <div class="footer">
        <div>slv.sedlak@gmail.com</div>
        <div>© Slavomir Sedlak</div>
        <div>
             <font-awesome-icon class="social-networks" :icon="{ prefix: 'fab', iconName: 'facebook' }"></font-awesome-icon>
             <font-awesome-icon class="social-networks" :icon="{ prefix: 'fab', iconName: 'instagram' }"></font-awesome-icon>
        </div>

    </div>
</template>

<script>
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faFacebook } from '@fortawesome/free-brands-svg-icons';
    import {faInstagram} from '@fortawesome/free-brands-svg-icons';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

    library.add(faFacebook);
    library.add(faInstagram);

    export default {
        name: 'layout-footer',
        components: {FontAwesomeIcon},
    };
</script>

<style scoped>
    .footer{
        display: flex;
        justify-content: space-between;
        background-color: #292c2f;
        box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.12);
        box-sizing: border-box;
        width: 100%;
        text-align: center;
        font: normal 18px sans-serif;
        padding: 45px;
        color: white;
    }

    .social-networks{
        margin-right: 1rem;
        font-size: 2rem;
    }
</style>
