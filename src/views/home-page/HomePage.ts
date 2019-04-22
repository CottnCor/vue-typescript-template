import { Component, Vue } from 'vue-property-decorator';

import { SketchLayout } from '@/layout';

import { APP_PRAMS } from '@/config';

@Component({
    components: { SketchLayout }
    })
class HomePage extends Vue {
    private appInfo = APP_PRAMS;

    private activated() {}

    private mounted() {}

    private beforeDestroy() {}
}

export default HomePage;
