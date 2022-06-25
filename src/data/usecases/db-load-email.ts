import { LoadEmail } from '@/domain/usecases'
import { LoadEmailRepository } from '@/data/protocols'

export class DbLoadEmail implements LoadEmail {
  constructor (
    private readonly loadEmailRepository: LoadEmailRepository
  ) {}

  async loadByIsSent(): Promise<LoadEmailRepository.Result> {
    return this.loadEmailRepository.loadByIsSent()
  }
}
