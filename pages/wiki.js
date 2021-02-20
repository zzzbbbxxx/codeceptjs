const { I, _constants, cookieMethods } = inject()
//
const wikiURL = 'https://gitlab.com/temp_login/tmp_project/-/wikis/home'

module.exports = {

  async openPage () {
    I.setCookie(
      { name: '_gitlab_session', domain: 'gitlab.com', value: await cookieMethods.readCookie() })
    I.amOnPage(wikiURL)
    I.waitForElement(this.createButton, _constants.WAITTIME)
  },

  createButton: { xpath: "//*[@title='Create your first page']" }

}
