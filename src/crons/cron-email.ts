import { Cron } from '@/domain/contracts'
import { LoadEmail } from '@/domain/usecases'

export class CronEmail implements Cron {
  constructor(
    private readonly scheduleJob: any,
    private readonly loadEmail: LoadEmail
  ) {}

  async execute(): Promise<Cron.Result> {
    this.scheduleJob('*/30 * * * * *', async (): Promise<void> => {
      const email = await this.loadEmail.loadByIsSent()

      if (email)
        console.log(`Send email to ${email.message.to} ...`)
    })
  }
}