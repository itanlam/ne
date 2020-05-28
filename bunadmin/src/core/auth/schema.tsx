export const Primary = "username"

export const Schema = {
  title: "Authentication",
  description: "Store signed-in user's information",
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
    role: {
      type: "string"
    },
    token: {
      type: "string"
    },
    details: {
      type: "string"
    }
  },
  required: ["role", "token"]
}
