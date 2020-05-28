export type MenuIcon = string | undefined
export type MenuIconType = "eva" | "material" | "url" | undefined

export interface Type {
  id: string
  name: string
  label?: string
  slug?: string
  icon?: MenuIcon
  icon_type?: MenuIconType
  parent: string
  rank: string
}
