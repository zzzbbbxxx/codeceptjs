const { I, _constants } = inject()
//

async function readCookie () {
  const fs = require('fs').promises
  const cookiesString = await fs.readFile('cookies.json', 'utf8', function (err, data) {
    if (err) throw err
    console.log(data.toString())
  })
  const cookies = await JSON.parse(cookiesString)
  return cookies.value
}

module.exports = {

  async openPage () {
    I.amOnPage()
    const cookieValue = await readCookie()
    I.setCookie({ name: '_gitlab_session', domain: 'gitlab.com', value: cookieValue })
    I.amOnPage('https://gitlab.com/temp_login/tmp_project/-/wikis/home')
    I.waitForElement({ xpath: "//*[@title='Create your first page']" }, _constants.WAITTIME)
  }

}
