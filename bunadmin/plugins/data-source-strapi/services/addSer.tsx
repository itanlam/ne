import request from "@/utils/scripts/request"
import storedToken from "@/utils/scripts/storedToken"
import { ENV } from "@/utils/config"
import { notice } from "@/core"
import { EditableCtrl } from "../types"

interface Props<RowData> extends EditableCtrl {
  newData: RowData
}

export default async function addSer({ newData, SchemaName }: Props<any>) {
  const token = await storedToken()

  const res = await request(
    `/content-manager/explorer/application::${SchemaName}.${SchemaName}`,
    {
      prefix: ENV.MAIN_URL,
      method: "POST",
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
      content: JSON.stringify(newData)
    })
  } else {
    await notice({
      title: "Successful",
      severity: "success"
    })
  }
}
