Feature('login.js')

const { loginPage, _constants, I } = inject()

Before(() => { // or Background
  loginPage.openPage()
})

After(() => {
  I.clearCookie()
})

Scenario('login field is required', () => {
  loginPage.sendForm(_constants.EMPTY_STRING, _constants.WRONG_STRING)
  loginPage.loginFieldIsRequired()
})

Scenario('password field is required', () => {
  loginPage.sendForm(_constants.WRONG_STRING, _constants.EMPTY_STRING)
  loginPage.passwordFieldIsRequired()
})

Scenario('both field s are required', () => {
  loginPage.sendForm(_constants.EMPTY_STRING, _constants.EMPTY_STRING)
  loginPage.loginFieldIsRequired()
  loginPage.passwordFieldIsRequired()
})

Scenario('required mark (login) cleared after sending text', () => {
  loginPage.sendForm(_constants.EMPTY_STRING, _constants.WRONG_STRING)
  loginPage.loginFieldIsRequired()
  loginPage.sendLogin(_constants.WRONG_STRING)
  loginPage.loginRequiredMarkIsClear()
})

Scenario('required mark (password) cleared after sending text', () => {
  loginPage.sendForm(_constants.WRONG_STRING, _constants.EMPTY_STRING)
  loginPage.passwordFieldIsRequired()
  loginPage.sendPassword(_constants.WRONG_STRING)
  loginPage.passwordRequiredMarkIsClear()
})
