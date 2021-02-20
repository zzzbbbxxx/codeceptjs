Feature('signin.js')
const { loginPage, I, _constants, signinPage, cookieMethods } = inject()

Scenario('rememberme test', async () => {
  loginPage.openPage()
  loginPage.clickRememberMe()
  loginPage.sendForm(_constants.LOGIN, _constants.PASSWORD)
  await cookieMethods.saveCookie('remember_user_token')
  I.clearCookie()
  loginPage.openPage()

  const cookieValue = await cookieMethods.readCookie()
  I.setCookie({ name: 'remember_user_token', domain: 'gitlab.com', value: cookieValue })

  loginPage.openPage_()
  signinPage.pageIsOpen()
})
