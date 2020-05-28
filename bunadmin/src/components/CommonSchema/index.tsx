import React, { useEffect, useState } from "react"
import { useRouter } from "next/router"
import rxDb from "@/utils/database/rxConnect"
import { Collection } from "@/core/schema/collections"
import CommonTable, { CommonTableHead } from "../CommonTable"
import { Column } from "material-table"
import { editableController } from "./controllers/editableController"
import { CommonTableDefaultProps as DefaultProps } from "../CommonTable/models/defaultProps"
import tableIcons from "../CommonTable/models/tableIcons"
import { Type } from "@/core/schema/types"
import { useTheme } from "@material-ui/core/styles"
import Plugins from "../Plugins"
import CommonError from "../CommonError"
import { LocalDataRoute } from "@/utils/routes"
import dataController from "@/components/CommonSchema/controllers/dataController"
import columnsController from "@/components/CommonSchema/controllers/columnsController"
import TableSkeleton from "@/components/CommonTable/components/TableSkeleton"
import { useTranslation } from "react-i18next"

interface Interface {
  group: string
  name: string
}

interface StateSchemaType {
  schema: Type
  data: Type
  notFound: boolean
}

interface Props {
  isAuthPath?: boolean
}

export default function CommonSchema({ isAuthPath }: Props) {
  const { t } = useTranslation("table")
  const theme = useTheme()
  const router = useRouter()
  const { group, name } = (router.query as unknown) as Interface
  const [ready, setReady] = useState(false)
  const [state, setState] = useState({})
  const { schema, data, notFound } = state as StateSchemaType
  const Schema = Collection.name

  useEffect(() => {
    if (!group || !name) return
    ;(async () => {
      const db = await rxDb()
      db[Schema].find()
        .exec()
        .then((schemas: any) => {
          // local_database schemas not existed
          if (!schemas) return setState({ notFound: true })
          const current = schemas.filter(
            (item: Interface) => item.group === group && item.name === name
          )

          // current schema not existed
          if (!current[0]) return setState({ notFound: true })

          // loop handing columns
          let columns = JSON.parse(current[0].columns as string)
          columns = columnsController({ t, columns })
          const schema = { ...current[0], columns }

          setState({ schema, data: current[0] })
          setReady(true)
        })
    })()
  }, [name])

  if (notFound)
    return (
      <div style={{ display: "flex" }}>
        <CommonError
          statusCode={404}
          hasLayout={false}
          message={
            "The schema does not existed, you can add it using Schema Manager."
          }
          redirect={LocalDataRoute.schema}
        />
      </div>
    )

  // handle auth path START
  if (!ready && isAuthPath) return null

  if (ready && isAuthPath) {
    // When the auth path does not exist in the plugin, a blank page will be rendered
    return (
      <Plugins
        team={data.team}
        group={data.group}
        name={data.name}
        hideLoading={true}
      />
    )
  }
  // handle user path END

  if (!ready) return <TableSkeleton />

  // Check customized
  if (data.customized) {
    return <Plugins team={data.team} group={data.group} name={data.name} />
  }

  const title = (data.label && t(data.label)) || t(name)

  return (
    <>
      <CommonTableHead title={title} />
      <CommonTable
        title={title}
        columns={(schema.columns as unknown) as Column<any>[]}
        editable={editableController()}
        // style
        style={DefaultProps.style}
        // icons
        icons={tableIcons({ theme })}
        // options
        options={{ ...DefaultProps.options, filtering: true }}
        // data
        data={query => dataController({ query, name: data.name })}
      />
    </>
  )
}
