
const { I, _constants, registerPage } = inject()

const url = 'https://gitlab.com/users/sign_in'

module.exports = {

  openPage () {
    I.amOnPage(url)
    this.loginPageIsOpen()
  },

  refreshPage () {
    I.amOnPage(url)
  },

  loginFieldIsOpen () {
    I.waitForElement(this.userLoginLabel, _constants.WAITTIME)
    I.waitForElement(this.userLoginInput, _constants.WAITTIME)
  },

  passwordFieldIsOpen () {
    I.waitForElement(this.userPasswordLabel, _constants.WAITTIME)
    I.waitForElement(this.userPasswordInput, _constants.WAITTIME)
  },

  rememberMeElementIsOpen () {
    I.waitForElement(this.rememberMeCheckbox, _constants.WAITTIME)
  },

  forgetPasswordButtonIsOpen () {
    I.waitForElement(this.forgetPasswordButton, _constants.WAITTIME)
  },

  signInButtonIsOpen () {
    I.waitForElement(this.signInButton, _constants.WAITTIME)
  },

  registerPageButtonIsOpen () {
    I.waitForElement(this.registerButton, _constants.WAITTIME)
  },

  loginPageIsOpen () {
    this.loginFieldIsOpen()
    this.passwordFieldIsOpen()
    this.rememberMeElementIsOpen()
    this.forgetPasswordButtonIsOpen()
    this.signInButtonIsOpen()
    this.registerPageButtonIsOpen()
  },

  loginPageIsNotOpen () {
    I.dontSeeElement(this.userLoginLabel)
    I.dontSeeElement(this.userLoginInput)
    I.dontSeeElement(this.userPasswordLabel)
    I.dontSeeElement(this.userPasswordInput)
    I.dontSeeElement(this.rememberMeCheckbox)
    I.dontSeeElement(this.forgetPasswordButton)
    I.dontSeeElement(this.signInButton)
    I.dontSeeElement(this.registerButton)
  },

  sendLogin (login) {
    I.fillField(this.userLoginInput, login)
  },

  sendPassword (password) {
    I.fillField(this.userPasswordInput, password)
  },

  sendForm (login, password) {
    this.sendLogin(login)
    this.sendPassword(password)
    this.clickSignInButton()
  },

  loginIsIncorrect () {
    I.waitForElement(this.incorrectLoginMark, _constants.WAITTIME)
    this.loginPageIsOpen()
  },

  loginFieldIsRequired () {
    I.waitForElement(this.userLoginRequiredMap, _constants.WAITTIME)
  },

  loginRequiredMarkIsClear () {
    I.waitForElement(this.userLoginClearRequiredMap, _constants.WAITTIME)
  },

  passwordFieldIsRequired () {
    I.waitForElement(this.userPasswordRequiredMap, _constants.WAITTIME)
  },

  passwordRequiredMarkIsClear () {
    I.waitForElement(this.userPasswordClearRequiredMap, _constants.WAITTIME)
  },

  clickForgetPasswordButton () {
    I.click(this.forgetPasswordButton)
  },

  clickRegisterButton () {
    I.click(this.registerButton)
    registerPage.registerPageIsOpen()
  },

  clickSignInButton () {
    I.click(this.signInButton)
  },

  clickRememberMe () {
    I.click(this.rememberMeCheckbox)
  },

  userLoginLabel: { xpath: "//*[@for='user_login']" },
  userLoginInput: { xpath: "//*[@id='user_login']" },

  incorrectLoginMark: { xpath: "//*[contains(text(),'Invalid Login or password.')]" },

  userLoginRequiredMap: { xpath: "//*[@id='user_login']//..//*[@class='gl-field-error']" },
  userLoginClearRequiredMap: {
    xpath: "//*[@class='form-group']" +
            "//*[contains(text(),'Username or email')]" +
            "//..//..//*[@class='gl-field-error hidden']"
  },

  userPasswordLabel: { xpath: "//*[@for='user_password']" },
  userPasswordInput: { xpath: "//*[@id='user_password']" },
  userPasswordRequiredMap: { xpath: "//*[@id='user_password']//..//*[@class='gl-field-error']" },
  userPasswordClearRequiredMap: {
    xpath: "//*[@class='form-group']" +
            "//*[contains(text(),'Password')]" +
            "//..//..//*[@class='gl-field-error hidden']"
  },

  rememberMeCheckbox: { xpath: "//input[@type='checkbox' and @id='user_remember_me']" },

  forgetPasswordButton: { xpath: "//*[contains(@class,'remember-me')]//*[contains(text(),'Forgot your password?')]" },

  signInButton: { xpath: "//*[@class='gl-button btn btn-success']" },

  registerButton: { xpath: "//*[contains(text(),'Register now') and @data-qa-selector='register_link']" }

  // insert your locators and methods here
}
