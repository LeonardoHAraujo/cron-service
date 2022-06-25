import { Cron } from '@/domain/contracts'

export class StartEmailCronDecorator implements Cron {
  constructor (
    private readonly cron: Cron
  ) {}

  async execute(): Promise<Cron.Result> {
    return this.cron.execute()
  }
}