export function fixTreeDataTr(tableEl: HTMLElement) {
  setTimeout(() => {
    let activeTr = tableEl.querySelector(
      '[class="MuiTableRow-root"][mode]'
    ) as HTMLElement

    if (!activeTr) return

    const firstChild = activeTr.firstChild as HTMLElement

    if (firstChild.classList.contains("baHolderNode")) return

    const holderNode = firstChild && (firstChild.cloneNode(true) as HTMLElement)
    holderNode && holderNode.classList.add("baHolderNode")
    holderNode && activeTr.insertBefore(holderNode, firstChild)
  }, 0)
}
