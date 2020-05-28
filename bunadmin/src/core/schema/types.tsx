export interface Type {
  id: string
  created_at: number
  updated_at: number
  team: string
  group: string
  name: string
  label?: string
  customized?: boolean
  columns: string // Column<any>[] (JsonStr)
}
