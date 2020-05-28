import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"

export default async function queryParentSer(
  schemaName: string,
  parentName: string,
  selfId: string | number,
  name?: string,
  limit?: number
) {
  const token = await storedToken()

  const gql = `
    query MyQuery {
      ${schemaName}(where: {id: {_neq: "${selfId ||
    0}"}, name: {_like: "%${name}%"}}, limit: ${limit}, order_by: {created_at: desc}) {
        id
        name
        created_at
        updated_at
        parent_id
        ${parentName} {
          id
          name
        }
      }
    }
  `

  return request("/graphql", {
    prefix: ENV.SITE_URLS[0],
    method: "POST",
    headers: { token },
    data: JSON.stringify({ query: gql })
  })
}
