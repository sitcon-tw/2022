// Server
let time = new Date();
const serve = require('koa-static')
const Koa = require('koa');
const app = new Koa();

app.use(serve('./src'));
app.use(serve('../../public'));
app.listen(2929);

console.log('Server on http://localhost:2929');
// Chrome
const sessions = require('../../src/assets/session.json');
const { remote } = require('webdriverio');
; (async () => {
  const browser = await remote({
    capabilities: {
      browserName: 'chrome',
      'goog:chromeOptions': {
        args: ['--headless', '--disable-gpu', '--disable-dev-shm-usage'],
      },
    },
    logLevel: 'warn',
  })
  // download latset version of sessions.json
  // await browser.url('https://sitcon.org/2022/json/session.json')
  // let sessions = await browser.$('pre').getText()
  // sessions = JSON.parse(sessions)

  browser.setWindowSize(1600, 800)

  await browser.url(`http://localhost:2929/index.html`)
  for (let item of sessions.sessions) {
    if (item.zh.description == "") continue
    let data = {
      title: item.zh.title,
      speakers: item.speakers.map(x => sessions.speakers.find(y => y.id === x)),
      type: sessions.session_types.find(x => x.id === item.type).zh.name,
    }
    await browser.execute((data) => {
      document.querySelector('.title').innerHTML = data.title
      document.querySelector('.type').innerHTML = data.type
      document.querySelector('.speakers').innerHTML = data.speakers.map(speaker => {
        speaker.avatar = speaker.avatar.replace('https://sitcon.org/2022/', 'http://localhost:2929/')
        return `<div class="speaker"><img class="img" src="${speaker.avatar}" alt=""><div class="name">${speaker.zh.name}</div></div>`
      }).join('')
      textFit(document.querySelector('.title'), { multiLine: true, maxFontSize: 300 })
      setTimeout(() => {
        updateCatPosition()
      }, 0)
    }, data)
    // wait until the page is loaded
    await browser.execute(() => {
      return new Promise(resolve => {
        // imgs are loaded asyncronously
        let imgs = document.querySelectorAll('.img')
        let count = imgs.length
        imgs.forEach(img => {
          img.addEventListener('load', () => {
            count--
            if (count === 0) resolve()
          })
          if (img.complete) {
            count--
            if (count === 0) resolve()
          }
        })
        setTimeout(() => {
          resolve()
        }, 1000 * 10)
      })
    })
    await browser.saveScreenshot(`../../public/imgs/sessions/${item.id}.png`)

    console.log(`genetated: ${item.id} ${data.title}`)
  }
  await browser.deleteSession()
  console.log(`🐈 time: ${new Date() - time}ms`)
  // stop koa
  process.exit()
})()