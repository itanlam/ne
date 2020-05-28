/**
 * Remote data controller
 */
import { Query, QueryResult } from "material-table"
import request from "@/utils/scripts/request"
import { ENV } from "@/utils/config"

interface Props {
  query: Query<any>
  name: string
}

const dataController = ({ query, name }: Props) =>
  new Promise(resolve => {
    request(`/${name}?page=${query.page + 1}&pageSize=${query.pageSize}`, {
      prefix: ENV.AUTH_URL,
      method: "GET",
      responseType: "text"
    })
      .then(result => {
        const JSONBigInt = require("json-bigint")
        result = JSONBigInt.parse(result)

        resolve({
          data: result.data,
          page: result.page - 1,
          totalCount: result.total
        })
      })
      .catch(e => {
        console.error(e)
      })
  }) as Promise<QueryResult<any>>

export default dataController
