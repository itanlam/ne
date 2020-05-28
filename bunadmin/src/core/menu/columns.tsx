import React from "react"
import { Column } from "material-table"
import { Type } from "./types"
import ParentSelect from "./components/ParentSelect"
import { Button, Tooltip } from "@material-ui/core"

export const Columns = ({ t }: any): Column<Type>[] => [
  { title: t("Id"), field: "id", editable: "onAdd" },
  { title: t("Name"), field: "name" },
  { title: t("Label"), field: "label" },
  { title: t("Slug"), field: "slug" },
  {
    title: t("Icon"),
    field: "icon",
    render: r =>
      r && r.icon ? (
        <Tooltip title={r.icon} placement="top" arrow>
          <Button>{r.icon.substr(0, 5)}...</Button>
        </Tooltip>
      ) : null
  },
  {
    title: t("Icon Type"),
    field: "icon_type",
    lookup: { eva: "Eva Icon", material: "Material Icon", url: "Url Address" }
  },
  {
    title: t("Parent"),
    field: "parent",
    initialEditValue: "",
    defaultGroupOrder: 0,
    editComponent: props => <ParentSelect {...props} />
  },
  {
    title: t("Parent"),
    field: "parent",
    initialEditValue: "",
    editComponent: props => <ParentSelect {...props} />
  },
  { title: t("Rank"), field: "rank", type: "numeric", initialEditValue: "0" }
]
