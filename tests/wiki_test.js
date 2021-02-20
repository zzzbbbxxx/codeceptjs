Feature('signin.js')
const { loginPage, I, _constants, signinPage, wikiPage } = inject()

async function saveCookie () {
  const cookies = await I.grabCookie('_gitlab_session')
  const fs = require('fs').promises
  await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2))
}

Before(async () => { // or Background
  loginPage.openPage()
  loginPage.sendForm(_constants.LOGIN, _constants.PASSWORD)
  signinPage.pageIsOpen()
  await saveCookie()
  I.clearCookie()
})

Scenario('open wikipage', async () => {
  wikiPage.openPage()
})
