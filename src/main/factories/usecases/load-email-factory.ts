import { LoadEmail } from '@/domain/usecases'
import { EmailMongoRepository } from '@/infra/db'
import { DbLoadEmail } from '@/data/usecases'

export const makeDbLoadEmail = (): LoadEmail => {
  const emailMongoRepository = new EmailMongoRepository()

  return new DbLoadEmail(emailMongoRepository)
}