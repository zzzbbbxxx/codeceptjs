const { setHeadlessWhen } = require('@codeceptjs/configure')

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS)

exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  multiple: {
    parallel: {
      chunks: 2,
      browsers: ['puppeteer']
    }
  },
  helpers: {
    Puppeteer: {
      url: 'https://gitlab.com/users/sign_in',
      show: true,
      restart: false,
      chrome: {
        args: [
          '--ignore-certificate-errors',
          '--disable-blink-features=AutomationControlled'
        ]
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/login.js',
    forgetPage: './pages/forget.js',
    registerPage: './pages/register.js',
    signinPage: './pages/signin.js',
    wikiPage: './pages/wiki.js',
    _constants: './global_const.js',
    cookieMethods: './cookieMethods.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'codeceptjs',
  plugins: {
    retryFailedStep: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
