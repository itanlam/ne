import rxDb from "@/utils/database/rxConnect"
import { EditableDataType } from "@/components/CommonTable/models/editable"
import { Type } from "../types"
import { Collection } from "../collections"
import { Primary } from "../schema"
import { CoreGroupName } from "@/utils/routes"
import { notice } from "@/core"

export function editableController(): EditableDataType<Type> {
  const collection = Collection.name
  const primary = Primary

  const nanoId = require("nanoid")(10)
  const created_at = { created_at: Date.now() }
  const updated_at = { updated_at: Date.now() }

  async function checkGroup(group: string) {
    if (group === CoreGroupName) {
      // show notice
      await notice({
        title: `Created failed`,
        severity: "error",
        content: "Group name can't be `core`"
      })
      return true
    } else {
      return false
    }
  }

  return {
    // isEditable: rowData => rowData.not_editable === true, // only name(a) rows would be editable
    // isDeletable: rowData => rowData.not_deletable === true, // only name(a) rows would be deletable
    onRowAdd: newData =>
      new Promise(async resolve => {
        // check group
        if (await checkGroup(newData.group)) {
          return resolve()
        }

        try {
          const db = await rxDb()

          await db[collection].insert({
            // @ts-ignore
            [primary]: nanoId,
            ...newData,
            customized: ((newData.customized as unknown) as string) === "true",
            ...created_at
          })

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
        // check group
        if (await checkGroup(newData.group)) {
          return resolve()
        }

        try {
          const db = await rxDb()

          const query = db[collection]
            .findOne()
            .where(primary)
            .eq(newData[primary])

          await query.update({
            $set: {
              ...newData,
              customized:
                ((newData.customized as unknown) as string) === "true",
              ...updated_at
            }
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
