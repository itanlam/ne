import rxDb from "./rxConnect"

interface RxSubscribeProps {
  collection: string
  sort?: any
  callback: (data: any) => void
}

export default async function rxQuery({
  collection,
  sort,
  callback
}: RxSubscribeProps) {
  const db = await rxDb()

  const query = db[collection].find().sort(sort || {})
  const results = await query.exec()

  callback(results)
}
