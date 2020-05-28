/**
 * Remote data controller
 */
import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"

export default async function filtersQuery({
  SchemaName,
  filters
}: {
  SchemaName: string
  filters?: any
}) {
  const token = await storedToken()

  const params = {
    ...filters,
    _sort: "created_at:DESC",
    _limit: 30,
    _start: 0
  }

  return await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}`,
    {
      params,
      prefix: ENV.AUTH_URL,
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )
}
