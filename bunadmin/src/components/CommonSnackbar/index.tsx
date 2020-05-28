import React from "react"
import rxSubscribe from "@/utils/database/rxSubscribe"
import { Collection } from "@/core/notice/collections"
import { SnackbarMessage, withSnackbar, WithSnackbarProps } from "notistack"

function CommonSnackbar(props: WithSnackbarProps) {
  React.useEffect(() => {
    ;(async () => {
      await rxSubscribe({
        collection: Collection.name,
        sort: { created_at: "desc" },
        callback: data => {
          const item = data[0]

          if (!item) return console.warn("no notices")
          const lastNoticeMS = Date.now() - item.created_at

          if (lastNoticeMS > 10000) return // 10s
          handleClick({ message: item.title })
        }
      })
    })()
  }, [])

  const handleClick = ({ message }: { message: SnackbarMessage }) => {
    props.enqueueSnackbar(message, {
      variant: "success"
    })
  }

  return null
}

export default withSnackbar(CommonSnackbar)
