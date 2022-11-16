import { createServer } from 'http'
import { readFile } from 'fs'
// const { response } = require('express');
let content_in_home = ''
let content_in_file = ''
let register = ''
readFile('home.html',
  (err, home) => {
    if (err) {
      throw err
    }
    content_in_home = home
  })

readFile('project.html',
  (err, files) => {
    if (err) {
      throw err
    }
    content_in_file = files
  })

readFile('registration.html',
  (err, regfs) => {
    if (err) {
      throw err
    }
    register = regfs
  })
const args = require('minimist')(process.argv.slice(2))
createServer((request, response) => {
  const url = request.url
  response.writeHead(200, { 'Content-type': 'text/html' })
  switch (url) {
    case '/project':
      response.write(content_in_file)
      response.end()
      break
    case '/registration':
      response.write(register)
      response.end()
      break
    default:
      response.write(content_in_home)
      response.end()
      break
  }
}).listen(args.port)
