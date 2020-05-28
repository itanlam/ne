import React from "react"

import { Column } from "material-table"
import { Type } from "./types"

export const Columns = ({ t }: any): Column<Type>[] => [
  { title: t("Username"), field: "username", grouping: false },
  { title: t("Role"), field: "role" },
  { title: t("Token"), field: "token", hidden: true },
  {
    title: t("Details"),
    field: "details",
    grouping: false,
    render: r => <>{r && r.details ? "..." : "EMPTY"}</>
  },
  {
    title: t("Last Signed-in"),
    field: "updated_at",
    editable: "never",
    grouping: false,
    render: r => <>{r ? new Date(r.updated_at).toLocaleString() : ""}</>
  }
]
