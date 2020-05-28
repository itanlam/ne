export const Primary = "name"

export const Schema = {
  title: "Migration",
  description: "Export or import local database",
  version: 0,
  type: "object",
  properties: {
    [Primary]: {
      type: "string",
      primary: true
    },
    columns: {
      type: "string"
    }
  }
}
