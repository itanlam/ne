import React, { useState } from "react"
import TextField from "@material-ui/core/TextField"
import Autocomplete from "@material-ui/lab/Autocomplete"
import CircularProgress from "@material-ui/core/CircularProgress"
import { EditComponentProps, Query, rxMtUpdateField } from "material-table"
import { notice } from "@/core"

interface OptionType {
  id: string
  name: string
}

interface ListSelectProps extends EditComponentProps<any> {
  width?: number | string
  label?: string
  shortName: string
  schemaName: string
  querySer: (query: Query<any>) => Promise<any>
  customKey?: string
}

export default function ListSelector({
  columnDef,
  rowData,
  onChange,
  width,
  label,
  shortName,
  schemaName,
  querySer,
  customKey
}: ListSelectProps) {
  const [open, setOpen] = React.useState(false)
  const [options, setOptions] = React.useState<OptionType[]>([])
  const [name, setName] = React.useState("")
  const [selected, setSelected] = useState(rowData[shortName])
  const loading = open && options.length === 0

  React.useEffect(() => {
    if (!loading) {
      return undefined
    }

    ;(async () => {
      await dataCtrl()
    })()
  }, [loading])

  React.useEffect(() => {
    if (!open) {
      setOptions([])
    }
  }, [open])

  async function dataCtrl() {
    const { data: res, errors } = await querySer({
      search: name,
      page: 0,
      pageSize: 30
    } as Query<any>)

    if (errors) {
      return await notice({
        title: "Fetch error",
        severity: "error",
        content: JSON.stringify(errors)
      })
    }

    const resList: any[] = res && res[schemaName]

    const options: OptionType[] = []
    resList.map(item => {
      const nameObj = customKey
        ? { [customKey]: item[customKey] }
        : { name: item.name }
      options.push({ id: item.id, name: "", ...nameObj })
    })
    setOptions(options)
  }

  async function handleChange(e: {
    target: { value: React.SetStateAction<string> }
  }) {
    setName(e.target.value)
    await dataCtrl()
  }

  async function handleSelect(_e: React.ChangeEvent<{}>, value: any) {
    onChange(value ? value.id : null)
    setSelected(value)
    await rxMtUpdateField({
      name: columnDef.field,
      value: value ? value.id : null
    })
  }

  return (
    <Autocomplete
      id={`list-selector-${shortName}`}
      style={{ width: width ? width : 135 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
      }}
      onChange={handleSelect}
      getOptionSelected={option => option.id === (selected && selected.id)}
      getOptionLabel={option => (customKey ? option[customKey] : option.name)}
      value={selected}
      options={options}
      loading={loading}
      renderInput={params => (
        <TextField
          {...params}
          label={label || undefined}
          variant="outlined"
          onChange={handleChange}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            )
          }}
        />
      )}
    />
  )
}
