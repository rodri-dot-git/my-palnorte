const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/callback', (req, res) => {
  res.sendFile(__dirname + '/public/download.html')
})

app.get('/login', (req, res) => {
  res.redirect('https://accounts.spotify.com/en/authorize?response_type=code&client_id=66098351d90847cb967ed4105909344e&scope=user-read-private%20user-read-email%20user-top-read%20user-follow-read&redirect_uri=https%3A%2F%2Fmy-palnorte.herokuapp.com%2Fcallback&state=sSD1FoXaEZZYxRwd')
})

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening on port ${port}`)
})