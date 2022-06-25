import 'dotenv/config'

interface Env {
  server: Server
  database: Database
}

type Server = {
  environment: string
}

type Database = {
  mongoUri: string
}

const requiredEnvs = [
  'ENVIRONMENT',
  'MONGO_URI',
]

export const validateEnv = (): void => {
  requiredEnvs.forEach(e => {
    if (!process.env[e]) throw new Error(`missing env ${e}`)
  })
}

export const env: Env = {
  server: {
    environment: process.env.ENVIRONMENT ?? 'stg',
  },
  database: {
    mongoUri: process.env.MONGO_URI ?? ''
  }
}
