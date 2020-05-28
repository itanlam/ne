import { RxDatabase } from "rxdb/dist/typings/types"

interface Props {
  db: RxDatabase<any>
  collection: string
  docsData: any
}

export default async function initDocsData({
  db,
  collection,
  docsData
}: Props) {
  await db[collection].bulkInsert(docsData)
}
