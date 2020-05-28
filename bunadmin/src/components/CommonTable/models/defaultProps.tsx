import { MaterialTableProps } from "material-table"
import EvaIcon from "react-eva-icons"
import React from "react"

export const CommonTableDefaultProps: MaterialTableProps<any> = {
  // default placeholder
  columns: [],
  data: [],
  // style
  style: { boxShadow: "none" },
  // localization
  localization: {
    pagination: {
      labelDisplayedRows: "{from}-{to} of {count}"
    },
    toolbar: {
      nRowsSelected: "{0} row(s) selected"
    },
    header: {
      actions: "Actions"
    },
    body: {
      emptyDataSourceMessage: "No records to display",
      filterRow: {
        filterTooltip: "Filter"
      }
    }
  },
  // options
  options: {
    addRowPosition: "first",
    draggable: false,
    selection: true
  },
  // actions
  actions: [
    {
      tooltip: "Remove All Selected Users",
      icon: () => <EvaIcon name="trash-2-outline" size="large" fill="gray" />,
      onClick: (_evt, _data) => alert("Bulk delete rows not supported yet.")
    }
  ]
}
