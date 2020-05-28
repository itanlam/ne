import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"
import { notice } from "@/core"
import { EditableCtrl } from "../types"

interface Props<RowData> extends EditableCtrl {
  oldData: RowData
}

export default async function deleteSer({ oldData, SchemaName }: Props<any>) {
  const token = await storedToken()

  const res = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}/${oldData.id}`,
    {
      prefix: ENV.MAIN_URL,
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  )

  if (res.error) {
    await notice({
      title: "Sorry, you can't delete this item",
      severity: "warning",
      content: JSON.stringify(oldData)
    })
  } else {
    await notice({
      title: "Successful",
      severity: "success"
    })
  }
}
