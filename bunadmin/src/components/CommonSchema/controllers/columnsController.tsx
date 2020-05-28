import { Column } from "material-table"

/**
 * Loop handling columns
 * @param t i18n
 * @param columns {Column<any>[]}
 */
export default function columnsController({
  t,
  columns
}: {
  t: any
  columns: Column<any>[]
}): Column<any>[] {
  columns.map(column => {
    // bigint (*id field) to string
    if (typeof column.field === "string" && column.field.indexOf("id") > -1) {
      column.render = r => r.id && r.id.toString()
    }
    // translate i18n
    column.title = t(column.title)

    return column
  })

  return columns
}
