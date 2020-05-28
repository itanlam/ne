import React, { useState } from "react"
import InputLabel from "@material-ui/core/InputLabel"
import MenuItem from "@material-ui/core/MenuItem"
import FormControl from "@material-ui/core/FormControl"
import Select from "@material-ui/core/Select"
import { EditComponentProps } from "material-table"
import { Type } from "../../types"
import { useStyles } from "./styles"
import rxDb from "@/utils/database/rxConnect"
import { Collection } from "@/core/menu/collections"

interface ParentSelectProps extends EditComponentProps<Type> {}

export default function ParentSelect({ rowData, onChange }: ParentSelectProps) {
  const classes = useStyles()
  const [option, setOption] = React.useState(rowData.parent)
  const [data, setData]: [Type[], (data: any) => void] = useState([])

  React.useEffect(() => {
    ;(async () => {
      const db = await rxDb()

      const query = db[Collection.name]
        .find()
        .where("name")
        .ne(rowData.name)
        .where("parent") // limiting 2 level of the menu
        .eq("")
        .sort({ name: "asc" })
      const data = await query.exec()
      setData(data)
    })()
  }, [])

  const inputLabel = React.useRef<HTMLLabelElement>(null)
  const [labelWidth, setLabelWidth] = React.useState(0)
  React.useEffect(() => {
    setLabelWidth(inputLabel.current!.offsetWidth)
  }, [])

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setOption(event.target.value as string)
    onChange(event.target.value)
  }

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel ref={inputLabel} id="common-simple-select-outlined-label">
        Parent Name
      </InputLabel>
      <Select
        labelId="common-simple-select-outlined-label"
        id="common-simple-select-outlined"
        value={option}
        onChange={handleChange}
        labelWidth={labelWidth}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        {data.length > 0 &&
          data.map(item => (
            <MenuItem key={item.name} value={item.name}>
              {item.name}
            </MenuItem>
          ))}
      </Select>
    </FormControl>
  )
}
