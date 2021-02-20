Feature('signin.js')
const { loginPage, _constants, wikiPage, cookieMethods } = inject()

Before(async () => { // or Background
  loginPage.openPage()
  loginPage.sendForm(_constants.LOGIN, _constants.PASSWORD)
  await cookieMethods.saveCookie('_gitlab_session')
  cookieMethods.resetBrowser()
})

Scenario('open wikipage', async () => {
  wikiPage.openPage()
})
