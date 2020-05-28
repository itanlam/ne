import RxDB from "rxdb"
import { rxCollections } from "./rxCollections"
import { RxDatabase } from "rxdb/dist/typings/types"

RxDB.plugin(require("pouchdb-adapter-idb"))
RxDB.plugin(require("pouchdb-adapter-http")) //enable syncing over http

let dbPromise = false as boolean | Promise<RxDatabase<any>>

const _create = async () => {
  const db = await RxDB.create({
    name: "bunadmin", // <- name
    adapter: "idb", // <- storage-adapter
    password: "JUUFblX8pY9BeBs9RF68N7n", // <- password (optional)
    multiInstance: true, // <- multiInstance (optional, default: true)
    queryChangeDetection: false, // <- queryChangeDetection (optional, default: false)
    ignoreDuplicate: true
  })
  console.log("DatabaseService: created database")

  // show flash icon in title
  db.waitForLeadership().then(() => {
    console.log("isLeader now")
    document.title = "⚡" + document.title
  })

  // create collections
  await Promise.all(rxCollections.map(collObj => db.collection(collObj)))
  console.log("DatabaseService: create collections")

  return db
}

export default function rxDb() {
  if (!dbPromise) dbPromise = _create()
  return dbPromise
}
