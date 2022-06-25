export type EmailModel = {
  _id?: string
  isSent: boolean
  message: Message
  createdAt: string
}

type Message = {
  to: string
  subject: string
  body: string
}