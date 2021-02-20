#!/usr/bin/env node
const { Workers, event } = require('codeceptjs')
// here will go magic

const splitTests = () => {
  const files = [
    ['./tests/login_required_fields_test.js'],
    ['./tests/signin_test.js']
  ]

  return files
}

const workerConfig = {
  testConfig: 'codecept.conf.js',
  by: splitTests
}

// don't initialize workers in constructor
const customWorkers = new Workers(null, workerConfig)

customWorkers.run()

// You can use event listeners similar to above example.
customWorkers.on(event.all.result, () => {
  workers.printResults()
})
