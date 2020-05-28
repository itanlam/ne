import { EditableDataType } from "@/components/CommonTable/models/editable"
import { CoreGroupName } from "@/utils/routes"
import { notice } from "@/core"

export function editableController(): EditableDataType<any> {
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

        resolve()
      }),
    onRowUpdate: newData =>
      new Promise(async resolve => {
        // check group
        if (await checkGroup(newData.group)) {
          return resolve()
        }

        resolve()
      }),
    onRowDelete: () =>
      new Promise(async resolve => {
        resolve()
      })
  }
}
