
const { I, loginPage, _constants } = inject()

module.exports = {

  openResetPage () {
    I.amOnPage('https://gitlab.com/users/password/new')
    this.resetPageIsOpen()
  },

  resetPageIsOpen () {
    I.waitForElement(this.userEmailLabel, _constants.WAITTIME)
    I.waitForElement(this.userEmailInput, _constants.WAITTIME)
    I.waitForElement(this.resetPasswordButton, _constants.WAITTIME)
  },

  openLoginPage () {
    I.click(this.signInButton)
    loginPage.loginPageIsOpen()
  },

  userEmailLabel: { xpath: "//*[@for='user_email']" },
  userEmailInput: { xpath: "//*[@id='user_email']" },
  resetPasswordButton: { xpath: "//input[@type='submit' and @value='Reset password']" },
  signInButton: { xpath: "//*[contains(text(),'Sign in')]" }
  // insert your locators and methods here
}
