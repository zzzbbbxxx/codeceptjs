Feature('register.js')
const { loginPage, I } = inject()

After(() => {
  I.clearCookie()
})

Scenario('jump to register page', () => {
  loginPage.openPage()
  loginPage.clickRegisterButton()
})
