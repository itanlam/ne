export const Primary = "name"

export const Schema = {
  title: "Bunadmin Setting",
  description: "Manage your Bunadmin Settings",
  version: 0,
  type: "object",
  properties: {
    [Primary]: {
      type: "string",
      primary: true
    },
    updated_at: {
      type: "number",
      index: true
    },
    value: {
      type: "string"
    }
  },
  required: []
}
