import rxDb from "./rxConnect"

interface RxSubscribeProps {
  collection: string
  sort?: any
  where?: any
  callback: (data: any) => void
}

export default async function rxSubscribe({
  collection,
  where,
  sort,
  callback
}: RxSubscribeProps) {
  const db = await rxDb()
  db[collection]
    .find()
    .where(where || {})
    .sort(sort || {})
    .$.subscribe((data: any) => {
      if (!data) return
      callback(data)
    })
}
