import React from "react"
import EvaIcon, { EvaSize } from "react-eva-icons"
import { Icons } from "material-table"
import { Icon } from "@material-ui/core"

export default function tableIcons({ theme }: { theme: any }): Icons {
  const color: string = theme.bunadmin.iconColor
  // const disabledColor: string = "#eee"
  const size: EvaSize = "large"

  return {
    Add: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="file-add" size="large" fill={color} />
      </Icon>
    )),

    Edit: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="edit-2-outline" size="large" fill={color} />
      </Icon>
    )),

    Delete: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="trash-2-outline" size="large" fill={color} />
      </Icon>
    )),

    Search: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="search" size="medium" fill={color} />
      </Icon>
    )),

    ResetSearch: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="close" size="medium" fill={color} />
      </Icon>
    )),

    PreviousPage: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="arrow-ios-back" size={size} fill={color} />
      </Icon>
    )),

    NextPage: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="arrow-ios-forward" size={size} fill={color} />
      </Icon>
    )),

    FirstPage: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="arrowhead-left" size={size} fill={color} />
      </Icon>
    )),

    LastPage: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="arrowhead-right" size={size} fill={color} />
      </Icon>
    )),

    SortArrow: React.forwardRef((props, ref) => (
      <Icon {...props} ref={() => ref} component="span">
        <EvaIcon name="arrow-ios-downward-outline" size="medium" fill={color} />
      </Icon>
    ))
  }
}
