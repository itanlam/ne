import React from "react"

import { Column } from "material-table"
import { Type } from "./types"
import EditColumns from "./components/EditColumns"

export const Columns = ({ t }: any): Column<Type>[] => [
  { title: t("Id"), field: "id", editable: "onAdd", grouping: false },
  { title: t("Team"), field: "team", defaultGroupOrder: 0 },
  { title: t("Group"), field: "group", defaultGroupOrder: 1 },
  { title: t("Name"), field: "name", grouping: false },
  { title: t("Label"), field: "label", grouping: false },
  {
    title: t("Customized"),
    field: "customized",
    lookup: { true: "True", false: "False" }
  },
  {
    title: t("Created At"),
    field: "created_at",
    editable: "never",
    grouping: false,
    render: r => <>{r && new Date(r.created_at).toLocaleString()}</>
  },
  {
    title: t("Updated At"),
    field: "updated_at",
    editable: "never",
    grouping: false,
    render: r => <>{r ? new Date(r.updated_at).toLocaleString() : ""}</>
  },
  {
    title: t("Columns"),
    field: "columns",
    grouping: false,
    editComponent: props => <EditColumns {...props} />,
    render: r => <>{r && r.columns ? "..." : "EMPTY"}</>
  }
]
