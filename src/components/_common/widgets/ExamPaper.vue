<template>
    <div class="main"></div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
class ExamPaper extends Vue {
    @Prop(Number) public paperid!: number;

    private paperInfo!: any;

    private mounted() {}

    private activated() {}

    private beforeDestroy() {}
}
export default ExamPaper;
</script>

<style lang='scss' scoped>
</style>