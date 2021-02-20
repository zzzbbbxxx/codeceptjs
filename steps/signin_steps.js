const { loginPage, signinPage } = inject()
//
module.exports = {

  signInWith (login, password) {
    loginPage.sendForm(login, password)
    signinPage.signedIn()
  },

  notLoggedInWith (login, password) {
    loginPage.sendForm(login, password)
    loginPage.loginIsIncorrect()
  }
}
