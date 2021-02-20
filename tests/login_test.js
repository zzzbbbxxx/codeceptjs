Feature('login.js')

const { loginPage, I } = inject()

After(() => {
  I.clearCookie()
})

Scenario('All elements on the page are loaded', () => {
  loginPage.openPage()
})
