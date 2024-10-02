import { $ } from '@wdio/globals'

class HomePage {
    async openMenu(menu) {
      await $(`id:tab-${menu}`).click();
    }
  
    async clickSignUp() {
        await $(`//android.widget.TextView[@text='Sign up' and @class='android.widget.TextView']`).click()
       
    }
}
export default new HomePage();
