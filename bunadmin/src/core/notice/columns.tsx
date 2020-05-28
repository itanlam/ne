import { Column } from "material-table"
import { Type } from "./types"

export const Columns = ({ t }: any): Column<Type>[] => [
  { title: t("Id"), field: "id", editable: "never" },
  { title: t("Title"), field: "title" },
  {
    title: t("Severity"),
    field: "severity",
    editable: "never",
    lookup: {
      success: t("Success"),
      error: t("Error"),
      info: t("Info"),
      warning: t("Warning")
    }
  },
  { title: t("Content"), field: "content", hidden: true },
  {
    title: t("Created At"),
    field: "created_at",
    editable: "never",
    render: r => <>{r && new Date(r.created_at).toLocaleString()}</>
  }
]
