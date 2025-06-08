import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { logger } from 'hono/logger'
import type { ApiResponse } from 'shared/dist'

const app = new Hono()

app.use(cors())
app.use(logger())

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/hello', async (c) => {

  const data: ApiResponse = {
    message: "Hello BHVR!",
    success: true
  }

  return c.json(data, { status: 200 })
})

export default {
  port: Number(process.env.PORT) || 3000, // Railway will provide PORT
  hostname: '0.0.0.0',
  fetch: app.fetch,
}
