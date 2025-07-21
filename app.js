const express = require('express')
const app = express()

// get the port from env variable based on environment
const PORT = process.env.NODE_ENV === 'test'
  ? 8080
  : (process.env.PORT || 5000)
app.use(express.static('dist'))
app.get('/version', (req, res) => {
  res.send('2') // change this string to ensure a new version deployed
})
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  res.send('ok')
})
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
