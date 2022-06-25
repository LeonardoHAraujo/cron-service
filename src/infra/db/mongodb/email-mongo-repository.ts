import { MongoHelper } from '@/infra/db/mongodb'
import { LoadEmailRepository } from '@/data/protocols/db'

import { ObjectId } from 'mongodb'

const collection = 'emails'

export class EmailMongoRepository implements LoadEmailRepository {
  async loadByIsSent(): Promise<LoadEmailRepository.Result> {
    const emailCollection = MongoHelper.getCollection(collection)
    const email = await emailCollection.findOne({ isSent: false })

    return email && MongoHelper.map(email)
  }
}