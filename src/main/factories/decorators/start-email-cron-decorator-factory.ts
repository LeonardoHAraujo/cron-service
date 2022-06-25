import { Cron } from '@/domain/contracts'
import { StartEmailCronDecorator } from '@/main/decorators'

export const makeStartEmailCronDecorator = (cron: Cron): Cron => {
  return new StartEmailCronDecorator(cron)
}