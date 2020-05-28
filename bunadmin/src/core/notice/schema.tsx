export const Primary = "id"

export const Schema = {
  title: "Local Notice",
  description: "local notices",
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
    title: {
      type: "string"
    },
    severity: {
      type: "string",
      enum: ["success", "info", "warning", "error"]
    },
    content: {
      type: "string"
    }
  },
  required: ["title", "severity"]
}
