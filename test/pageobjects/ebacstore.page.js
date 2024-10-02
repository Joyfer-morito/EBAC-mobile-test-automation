import { $ } from '@wdio/globals'

class EbacStorePage {
    async ebacStore(Store){
        return await $(`//android.widget.TextView[@text="${Store}"]`)
    }
}
export default new EbacStorePage();
