import { EmailModel } from '@/domain/models'

export interface LoadEmail {
  loadByIsSent: () => Promise<LoadEmail.Result>
}

export namespace LoadEmail {
  export type Result = Omit<EmailModel, '_id'>
}