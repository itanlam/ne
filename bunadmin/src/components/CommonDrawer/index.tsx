import React, {
  MutableRefObject,
  useCallback,
  useEffect,
  useRef,
  useState
} from "react"
import { Button, Drawer } from "@material-ui/core"
import CSS from "csstype"
import styles from "./styles"

interface Props {
  width?: number | string
  height?: number | string
  direction?: "left" | "top" | "right" | "bottom"
  buttonTitle: string | JSX.Element
  buttonColor?: "inherit" | "default" | "primary" | "secondary" | undefined
  buttonVariant?: "text" | "outlined" | "contained"
  buttonSize?: "small" | "medium" | "large"
  buttonDisabled?: boolean
  buttonHidden?: boolean
  // switch toggleDrawer
  switchDrawer?: number
  // run func when open drawer
  onOpen?: (p: { contentRef: React.MutableRefObject<any | undefined> }) => void
  // run func when close drawer
  onClose?: (p: { contentRef: React.MutableRefObject<any | undefined> }) => void
  contentClassName?: string
  contentStyles?: CSS.Properties
  children: React.ReactNode
}

export default function CommonDrawer({
  width,
  height,
  direction,
  buttonTitle,
  buttonColor,
  buttonVariant,
  buttonSize,
  buttonDisabled,
  buttonHidden,
  switchDrawer,
  onOpen,
  onClose,
  contentClassName,
  contentStyles,
  children
}: Props) {
  const classes = styles({ width, height })
  const [state, setState] = useState({ open: false })
  const contentRef: MutableRefObject<any | undefined> = useRef()

  useEffect(() => {
    switchDrawer && switchDrawer > 0 && toggleDrawer()
  }, [switchDrawer])

  const toggleDrawer = useCallback(() => {
    // handle function
    if (!state.open) {
      onOpen && setTimeout(() => onOpen({ contentRef }), 200)
    } else {
      onClose && setTimeout(() => onClose({ contentRef }), 200)
    }

    setState({ ...state, open: !state.open })
  }, [state.open])

  return (
    <>
      {!buttonHidden && (
        <Button
          variant={buttonVariant || "text"}
          size={buttonSize || "medium"}
          color={buttonColor || "primary"}
          disabled={buttonDisabled}
          onClick={() => toggleDrawer()}
        >
          {buttonTitle}
        </Button>
      )}
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper
        }}
        anchor={direction || "right"}
        open={state.open}
        onClose={toggleDrawer}
      >
        <div
          ref={contentRef}
          className={contentClassName || classes.drawContent}
          style={{ ...contentStyles }}
        >
          {children}
        </div>
      </Drawer>
    </>
  )
}
