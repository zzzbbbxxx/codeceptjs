
const { I, _constants } = inject()

module.exports = {

  registerPageIsOpen () {
    I.waitForElement(this.userFirstNameLabel, _constants.WAITTIME)
    I.waitForElement(this.userFirstNameInput, _constants.WAITTIME)

    I.waitForElement(this.userLastNameLabel, _constants.WAITTIME)
    I.waitForElement(this.userLastNameInput, _constants.WAITTIME)

    I.waitForElement(this.userNameLabel, _constants.WAITTIME)
    I.waitForElement(this.userNameInput, _constants.WAITTIME)

    I.waitForElement(this.userEmailLabel, _constants.WAITTIME)
    I.waitForElement(this.userEmailInput, _constants.WAITTIME)

    I.waitForElement(this.userPasswordLabel, _constants.WAITTIME)
    I.waitForElement(this.userPasswordInput, _constants.WAITTIME)

    I.waitForElement(this.registerButton, _constants.WAITTIME)
  },

  userFirstNameLabel: { xpath: "//*[@for='new_user_first_name']" },
  userFirstNameInput: { xpath: "//*[@id='new_user_first_name']" },

  userLastNameLabel: { xpath: "//*[@for='new_user_last_name']" },
  userLastNameInput: { xpath: "//*[@id='new_user_last_name']" },

  userNameLabel: { xpath: "//*[@for='new_user_username']" },
  userNameInput: { xpath: "//*[@id='new_user_username']" },

  userEmailLabel: { xpath: "//*[@for='new_user_email']" },
  userEmailInput: { xpath: "//*[@id='new_user_email']" },

  userPasswordLabel: { xpath: "//*[@for='new_user_password']" },
  userPasswordInput: { xpath: "//*[@id='new_user_password']" },

  registerButton: { xpath: "//input[@value='Register']" }

  // insert your locators and methods here
}
