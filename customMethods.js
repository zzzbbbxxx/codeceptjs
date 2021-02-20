const { I, loginPage } = inject()

module.exports = {

  async readCookie () {
    const fs = require('fs').promises
    const cookiesString = await fs.readFile('cookies.json', 'utf8', function (err, data) {
      if (err) throw err
      console.log(data.toString())
    })
    const cookies = await JSON.parse(cookiesString)
    return cookies.value
  },

  async saveCookie (cookieName) {
    I.seeCookie(cookieName)
    const cookies = await I.grabCookie(cookieName)
    const fs = require('fs').promises
    await fs.writeFile('./cookies.json', JSON.stringify(cookies, null, 2))
  },

  resetBrowser () {
    I.clearCookie()
    loginPage.openPage()
  },

  async setCookie (cookieName) {
    I.setCookie(
      { name: cookieName, domain: 'gitlab.com', value: await this.readCookie() })
  },

  refreshPage () {
    loginPage.refreshPage()
  }

}
