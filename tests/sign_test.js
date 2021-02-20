Feature('signin.js')
const { loginPage, I, signinPage, _constants, signSteps } = inject()

Before(() => { // or Background
  loginPage.openPage()
})

After(() => { // or Background
  I.clearCookie()
})

Scenario('sign with correct login/password', () => {
  signSteps.signInWith(_constants.LOGIN, _constants.PASSWORD)
})

Scenario('sign with correct email/password', () => {
  signSteps.signInWith(_constants.EMAIL, _constants.PASSWORD)
})

Scenario('logout', () => {
  signSteps.signInWith(_constants.EMAIL, _constants.PASSWORD)
  signinPage.logOut()
})

Scenario('sign with correct upcase login', () => {
  signSteps.signInWith(_constants.UPCASE_LOGIN, _constants.PASSWORD)
})

Scenario('sign with correct camelCase email', () => {
  signSteps.signInWith(_constants.CAMELCASE_LOGIN, _constants.PASSWORD)
})

Scenario('sign with incorrect password with login', () => {
  signSteps.notLoggedInWith(_constants.LOGIN, _constants.WRONG_STRING)
})

Scenario('sign with incorrect password with email', () => {
  signSteps.notLoggedInWith(_constants.EMAIL, _constants.WRONG_STRING)
})

Scenario('sign with incorrect login', () => {
  signSteps.notLoggedInWith(_constants.WRONG_LOGIN, _constants.WRONG_STRING)
})

Scenario('sign with incorrect email', () => {
  signSteps.notLoggedInWith(_constants.WRONG_EMAIL, _constants.WRONG_STRING)
})
