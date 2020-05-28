import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"
import { notice } from "@/core"
import { EditableCtrl } from "../types"

interface Props<RowData> extends EditableCtrl {
  newData: RowData
  oldData: RowData
}

export default async function updateSer({
  newData,
  oldData,
  SchemaName
}: Props<any>) {
  const token = await storedToken()

  const res = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}/${oldData.id}`,
    {
      prefix: ENV.MAIN_URL,
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: newData
    }
  )

  if (res.error) {
    await notice({
      title: "Sorry, you can't update this post",
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
