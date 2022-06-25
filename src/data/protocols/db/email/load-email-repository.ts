import { LoadEmail } from '@/domain/usecases'

export interface LoadEmailRepository {
  loadByIsSent: () => Promise<LoadEmailRepository.Result>
}

export namespace LoadEmailRepository {
  export type Result = LoadEmail.Result
}