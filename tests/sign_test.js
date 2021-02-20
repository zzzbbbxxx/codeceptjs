Feature('signin.js')
const { loginPage, I, signinPage, _constants } = inject()

Before(() => { // or Background
  loginPage.openPage()
})

After(() => { // or Background
  I.clearCookie()
})

Scenario('sign with correct login/password', () => {
  loginPage.sendForm(_constants.LOGIN, _constants.PASSWORD)
  signinPage.pageIsOpen()
})

Scenario('sign with correct email/password', () => {
  loginPage.sendForm(_constants.EMAIL, _constants.PASSWORD)
  signinPage.pageIsOpen()
})

Scenario('logout', () => {
  loginPage.sendForm(_constants.EMAIL, _constants.PASSWORD)
  signinPage.pageIsOpen()
  signinPage.logOut()
})

Scenario('sign with correct upcase login', () => {
  loginPage.sendForm(_constants.UPCASE_LOGIN, _constants.PASSWORD)
  signinPage.pageIsOpen()
})

Scenario('sign with correct camelCase email', () => {
  loginPage.sendForm(_constants.CAMELCASE_LOGIN, _constants.PASSWORD)
  signinPage.pageIsOpen()
})

Scenario('sign with incorrect password with login', () => {
  loginPage.sendForm(_constants.LOGIN, _constants.WRONG_STRING)
  loginPage.loginIsIncorrect()
})

Scenario('sign with incorrect password with email', () => {
  loginPage.sendForm(_constants.EMAIL, _constants.WRONG_STRING)
  loginPage.loginIsIncorrect()
})

Scenario('sign with incorrect login', () => {
  loginPage.sendForm(_constants.WRONG_LOGIN, _constants.WRONG_STRING)
  loginPage.loginIsIncorrect()
})

Scenario('sign with incorrect email', () => {
  loginPage.sendForm(_constants.WRONG_EMAIL, _constants.WRONG_STRING)
  loginPage.loginIsIncorrect()
})
