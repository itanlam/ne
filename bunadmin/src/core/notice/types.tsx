export type SeverityType = "success" | "info" | "warning" | "error"

export interface Type {
  id: string
  created_at: number
  title: string
  severity: SeverityType
  content?: string
}
