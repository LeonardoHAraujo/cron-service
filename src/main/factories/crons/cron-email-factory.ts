import { scheduleJob } from 'node-schedule'

import { CronEmail } from '@/crons'
import { Cron } from '@/domain/contracts'
import { makeDbLoadEmail, makeStartEmailCronDecorator } from '@/main/factories'

export const makeStartEmailCron = (): Cron => {
  const cron = new CronEmail(
    scheduleJob,
    makeDbLoadEmail()
  )

  return makeStartEmailCronDecorator(cron)
}