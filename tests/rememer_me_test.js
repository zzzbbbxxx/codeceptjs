Feature('signin.js')
const { loginPage, _constants, signinPage, cookieMethods } = inject()

Scenario('rememberme test', async () => {
  loginPage.openPage()
  loginPage.clickRememberMe()
  loginPage.sendForm(_constants.LOGIN, _constants.PASSWORD)
  await cookieMethods.saveCookie('remember_user_token')
  cookieMethods.resetBrowser()
  cookieMethods.setCookie('remember_user_token')
  loginPage.refreshPage()
  signinPage.signedIn()
})
