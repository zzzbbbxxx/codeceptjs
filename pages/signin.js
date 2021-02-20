const { I, _constants, loginPage } = inject()
//
module.exports = {

  signedIn () {
    I.waitForElement(this.navigationBar, _constants.WAITTIME)
  },

  logOut () {
    this.openUserMenu()
    I.click(this.signOutButton)
    loginPage.loginPageIsOpen()
  },

  openUserMenu () {
    I.waitForElement(this.avatar)
    I.click(this.avatar)
    I.waitForElement(this.signOutButton, _constants.WAITTIME)
  },

  signOutButton: { xpath: "//*[contains(text(),'Sign out')]" },
  avatar: { xpath: "//*[contains(@class,'header-user-avatar')]" },
  navigationBar: { xpath: "//*[@data-qa-selector='navbar']" }

}
