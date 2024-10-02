import { expect, driver } from '@wdio/globals'
import homePage from '../pageobjects/home.page.js'
import cadastroPage from '../pageobjects/cadastro.page.js'
import ebacstorePage from '../pageobjects/ebacstore.page.js'

describe('Cadastro de usuário', () => {
    it('Deve cadastrar um novo usuário com sucesso', async () => {
        await homePage.openMenu('profile')
        await homePage.clickSignUp()
        await cadastroPage.cadastro(
            'Joyce',
            'Morito',
            '11959755552',
            'ebactarefa@gmail.com',
            'ebactarefa@123',
            'ebactarefa@123'
        )
        expect((await ebacstorePage.ebacStore('EBAC Store')).isDisplayed()).toBeTruthy
        await driver.pause(10000)
        
    })
})

