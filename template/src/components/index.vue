<template>
    <div class="g-mn">
        <span>好厉害, 竟然翻到最后一页了...</span>
    </div>
</template>
<script lang="babel">
    import * as vuexAction from "../store/actions"
    export default {
        vuex: {
            getters: {
                article: ({article}) => article
            },
            actions: vuexAction
        },
        components: {

        },
        computed: {

        },
        data () {
            return {
                page: 1
            }
        },
        methods: {

        },
        ready() {
            this.gProgress(100)
        },
        route: {
            canReuse() {
                return false
            }
        }
    }
</script>
