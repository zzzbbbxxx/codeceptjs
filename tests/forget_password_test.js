Feature('forget.js')

const { loginPage, I, forgetPage } = inject()

After(() => {
  I.clearCookie()
})

Scenario('jump to forget page from login page', () => {
  loginPage.openPage()
  loginPage.clickForgetPasswordButton()
  forgetPage.resetPageIsOpen()
  loginPage.loginPageIsNotOpen()
})

Scenario('jump to login page from forget page', () => {
  forgetPage.openResetPage()
  forgetPage.openLoginPage()
})
