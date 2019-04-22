<template>
    <div class="main"></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class CommentCard extends Vue {
    @Prop(Number) public commentid!: number;

    private commentInfo!: any;

    private mounted() {}

    private activated() {}

    private beforeDestroy() {}
}
export default CommentCard;
</script>

<style lang='scss' scoped>
</style>