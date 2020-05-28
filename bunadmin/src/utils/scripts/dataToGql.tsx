import { Filter } from "material-table"

/**
 * Material Table Data to Gql string
 */

interface Props {
  data: any
  nulls?: any | { parent_id: true }
  enums?: any | { status: true }
}

export default function dataToGql({ data, nulls, enums }: Props) {
  const fields: string[] = []
  Object.keys(data).map(key => {
    const value = data[key]
    const valueType = typeof value

    // key null for key in nulls
    if (!value && nulls && nulls[key]) {
      fields.push(`${key}: null`)
      return
    }

    if (!value) return

    if (valueType === "object") return

    let keyValue = `${key}: "${value}"`

    if (enums && enums[key]) keyValue = `${key}: ${value}`

    fields.push(keyValue)
  })

  const objects = fields.join(", ")
  return `{${objects}}`
}

// FiltersProps
interface FiltersProps<RowData extends object> {
  filters: Filter<RowData>[]
  search?:
    | any
    | {
        key: "name"
        operator: "_like"
        value: ""
      } // search words
  operators?: any | { name: "_like"; parent_id: "_eq" } // per key's operator
}

export function filtersToWhere({
  filters,
  search,
  operators
}: FiltersProps<any>) {
  const fields: string[] = []

  let searchStr = search
    ? `${search.key}: {${search.operator}: ${search.value}},`
    : ""

  filters.map(item => {
    let value = item.value
    const valueType = typeof value

    if (!value) return

    if (valueType === "object") return

    const key = String(item.column.field)

    // filter contains search key
    if (search && key === search.key) searchStr = ""

    let operator = "_eq" // default
    if (operators && operators[key]) {
      operator = operators[key]
      switch (operator) {
        case "_like":
          value = `"%${value}%"`
          break
      }
    }

    fields.push(`${key}: {${operator}: "${value}"}`)
  })

  const objects = fields.join(", ")

  return `{${searchStr} ${objects}}`
}
