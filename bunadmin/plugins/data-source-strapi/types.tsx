import { Query } from "material-table"

export interface DataCtrl extends EditableCtrl {
  query: Query<any>
}

export interface EditableCtrl {
  SchemaName: string
}
