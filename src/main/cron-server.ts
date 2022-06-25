import 'module-alias/register'

import { env, validateEnv } from '@/main/config/env'
import { makeStartEmailCron } from '@/main/factories'
import { MongoHelper } from '@/infra/db/mongodb'

validateEnv()

const mongoUri = env.database.mongoUri

const main = async (): Promise<void> => {
  console.log('Running jobs...')

  makeStartEmailCron().execute()
}

MongoHelper.connect(mongoUri).then(async () => main()).catch(console.log)