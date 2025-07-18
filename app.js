const express = require('express')
const app = express()

// get the port from env variable based on environment
const PORT = process.env.NODE_ENV === 'test'
  ? 5001  // 测试环境使用 5001
  : (process.env.PORT || 5000)  // 生产环境使用 PORT 环境变量或 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
