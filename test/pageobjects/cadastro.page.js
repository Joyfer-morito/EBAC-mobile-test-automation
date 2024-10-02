import { $ } from '@wdio/globals'

class CadastroPage {
    get firstName (){
        return $('id:firstName')
    }
    get lastName (){
        return $('android=new UiSelector().text("Last Name")')
    }
    get phoneNumber (){
        return $('id:phone')
    }
    get emailAddress (){
        return $('id:email')
    }
    get password(){
        return $('//android.widget.EditText[@resource-id="password"]')
    }
    get reenterPassword(){
        return $('id:repassword')
    }
    get btnCreate(){
        return $('//android.view.ViewGroup[@content-desc="Create"]')
    }

    async cadastro(firstName, lastName, phoneNumber, emailAddress, password, reenterPassword){
        await this.firstName.setValue(firstName)
        await this.lastName.setValue(lastName)
        await this.phoneNumber.setValue(phoneNumber)
        await this.emailAddress.setValue(emailAddress)
        await this.password.setValue(password)
        await this.reenterPassword.setValue(reenterPassword)
        await this.btnCreate.click

    }
}
export default new CadastroPage();
