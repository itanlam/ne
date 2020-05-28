import rxDb from "@/utils/database/rxConnect"
import { EditableDataType } from "@/components/CommonTable/models/editable"
import { Type } from "../types"
import { Collection } from "../collections"
import { Primary } from "../schema"
import { notice } from "@/core"

export function editableController(): EditableDataType<Type> {
  const collection = Collection.name
  const primary = Primary

  return {
    // isEditable: rowData => rowData.not_editable === true, // only name(a) rows would be editable
    // isDeletable: rowData => rowData.not_deletable === true, // only name(a) rows would be deletable
    onRowAdd: newData =>
      new Promise(async resolve => {
        try {
          const db = await rxDb()
          const parent = newData.parent || ""

          await db[collection].insert({ ...newData, parent })

          // show notice
          await notice({ title: `Created successful` })
        } catch (e) {
          console.error(e)
          // console.log(e.parameters.errors.toString())

          // show notice
          await notice({
            title: `Created failed`,
            severity: "error",
            content: e.toString()
          })
        }

        resolve()
      }),
    onRowUpdate: newData =>
      new Promise(async resolve => {
        try {
          const db = await rxDb()

          const query = db[collection]
            .findOne()
            .where(primary)
            .eq(newData[primary])

          await query.update({
            $set: newData
          })

          // show notice
          await notice({ title: `Updated successful` })
        } catch (e) {
          console.error(e)

          // show notice
          await notice({
            title: `Updated failed`,
            severity: "error",
            content: e.toString()
          })
        }

        resolve()
      }),
    onRowDelete: oldData =>
      new Promise(async resolve => {
        try {
          const db = await rxDb()

          const query = db[collection]
            .findOne()
            .where(primary)
            .eq(oldData[primary])

          await query.remove()

          // show notice
          await notice({ title: `Deleted successful` })
        } catch (e) {
          console.error(e)

          // show notice
          await notice({
            title: `Deleted failed`,
            severity: "error",
            content: e.toString()
          })
        }

        resolve()
      })
  }
}
