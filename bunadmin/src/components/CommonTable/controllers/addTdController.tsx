import { RefObject } from "react"

interface Interface {
  tableRef: RefObject<HTMLDivElement>
}

export function addTdController({ tableRef }: Interface) {
  if (tableRef.current) {
    const boxNode = tableRef.current.parentNode

    if (!boxNode) return
    const addNode = boxNode.querySelector(
      "[class^='MTableToolbar-actions'] button[title='Add']"
    )

    if (addNode) {
      addNode.addEventListener("click", () => addClickListener({ tableRef }))
    }
  }
}

function addClickListener({ tableRef }: Interface) {
  // waiting for create <tr mode='add' /> element
  setTimeout(() => {
    if (!tableRef.current) return
    tableRef.current.focus()

    /**
     * set `selection: false` to fix tree data table td missing error
     */

    // const boxNode = tableRef.current.parentNode
    //
    // if (!boxNode) return
    // const tempTrNode = boxNode.querySelector(
    //   "[class^='MuiTableRow-root'][mode='add']"
    // )
    //
    // const tdNode = document.createElement("td")
    // tdNode.classList.add(
    //   "MuiTableCell-root",
    //   "MuiTableCell-body",
    //   "MuiTableCell-paddingNone"
    // )
    //
    // if (!tempTrNode) return
    // tempTrNode.insertBefore(tdNode, tempTrNode.firstChild)
  }, 500)
}
