import React from "react"

export function fsDownload(
  content: object | object[],
  fileName: string,
  contentType: string
) {
  const a = document.createElement("a")
  const file = new Blob([JSON.stringify(content, null, 2)], {
    type: contentType
  })
  a.href = URL.createObjectURL(file)
  a.download = fileName
  a.click()
}
// fsDownload(jsonData, 'json.txt', 'text/plain');

export async function fsUpload(e: React.ChangeEvent<HTMLInputElement>) {
  // File object
  // const fileObj = JSON.parse(e.target.files?.[0])

  const file = e.target.files?.[0]
  const str = await readAsBinaryString(file)

  return JSON.parse(str as string)
}

const readAsBinaryString = (inputFile: File | undefined) => {
  const temporaryFileReader = new FileReader()

  return new Promise((resolve, reject) => {
    temporaryFileReader.onerror = () => {
      temporaryFileReader.abort()
      reject(new DOMException("Problem parsing input file."))
    }

    temporaryFileReader.onload = () => {
      resolve(temporaryFileReader.result)
    }
    // @ts-ignore
    temporaryFileReader.readAsBinaryString(inputFile)
  })
}
