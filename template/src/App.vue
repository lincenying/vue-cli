<template>
<div class="g-doc">
    <router-view class="router" transition="fade" transition-mode="out-in"></router-view>
    <Toaster></Toaster>
</div>
</template>
<script lang="babel">
    import '../node_modules/vue-toastr/dist/vue-toastr.min.css'
    import '../node_modules/nprogress/nprogress.css'
    import store from './store'
    import NProgress from 'nprogress'
    import Toaster from './components/app/toaster.vue'
    export default {
        store,
        vuex: {
            getters: {
                global: ({ global }) => global
            }
        },
        components: {
            Toaster
        },
        computed: {

        },
        methods: {

        },
        watch: {
            'global.progress'(val) {
                if (val != 100) {
                    NProgress.start()
                } else {
                    NProgress.done()
                }
            }
        }
    }
</script>
<style>
    .router.app-transition,
    .fade-transition {
        transition: all 0.3s ease;
    }
    .router.app-enter,
    .router.app-leave {
        opacity: 0;
    }
    .fade-enter {
        opacity: 1;
        transform: translate3d(0, 100px, 0);
    }
    .fade-leave {
        opacity: 0;
        transform: translate3d(100px, 0, 0);
    }
</style>
