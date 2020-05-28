export const Primary = "id"

export const Schema = {
  title: "Schema Manager",
  description: "Manage schemas with dynamic routes",
  version: 0,
  type: "object",
  properties: {
    [Primary]: {
      type: "string",
      primary: true
    },
    created_at: {
      type: "number",
      index: true
    },
    updated_at: {
      type: "number",
      index: true
    },
    team: {
      type: "string"
    },
    group: {
      type: "string"
    },
    name: {
      type: "string"
    },
    label: {
      type: "string"
    },
    customized: {
      type: "boolean"
    },
    columns: {
      type: "string"
    }
  },
  required: ["team", "group", "name", "columns"]
}
