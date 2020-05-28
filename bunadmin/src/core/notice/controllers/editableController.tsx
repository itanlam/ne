import rxDb from "@/utils/database/rxConnect"
import { EditableDataType } from "@/components/CommonTable/models/editable"
import { Type } from "../types"
import { Collection } from "../collections"
import { Primary } from "../schema"

export function editableController(): EditableDataType<Type> {
  const collection = Collection.name
  const primary = Primary

  // const nanoId = require("nanoid")(10)
  // const created_at = { created_at: Date.now() }

  return {
    // isEditable: rowData => rowData.not_editable === true, // only name(a) rows would be editable
    // isDeletable: rowData => rowData.not_deletable === true, // only name(a) rows would be deletable
    // onRowAdd: newData =>
    //   new Promise(async resolve => {
    //     try {
    //       const db = await rxDb()
    //
    //       const severity = newData.severity
    //         ? { severity: newData.severity }
    //         : { severity: "success" }
    //
    //       await db[collection].insert({
    //         ...newData,
    //         [primary]: nanoId,
    //         ...created_at,
    //         ...severity
    //       })
    //     } catch (e) {
    //       console.error(e)
    //     }
    //
    //     resolve()
    //   }),
    // onRowUpdate: newData =>
    //   new Promise(async resolve => {
    //     try {
    //       const db = await rxDb()
    //
    //       const query = db[collection]
    //         .findOne()
    //         .where(primary)
    //         .eq(newData[primary])
    //
    //       await query.update({
    //         $set: newData
    //       })
    //     } catch (e) {
    //       console.error(e)
    //     }
    //
    //     resolve()
    //   }),
    onRowDelete: oldData =>
      new Promise(async resolve => {
        try {
          const db = await rxDb()

          const query = db[collection]
            .findOne()
            .where(primary)
            .eq(oldData[primary])

          await query.remove()
        } catch (e) {
          console.error(e)
        }

        resolve()
      })
  }
}
