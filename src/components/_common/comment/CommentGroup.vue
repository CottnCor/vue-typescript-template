<template>
    <div class="main"></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';
import CommentCard from './CommentCard.vue';

@Component({ components: { CommentCard } })
class CommentGroup extends Vue {
    @Prop(Number) public groupid!: number;

    private mounted() {}

    private activated() {}

    private beforeDestroy() {}
}
export default CommentGroup;
</script>

<style lang='scss' scoped>
</style>
