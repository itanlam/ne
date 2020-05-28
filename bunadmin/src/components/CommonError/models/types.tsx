export interface ErrorProps {
  res: {
    statusCode: string
  }
  err: {
    statusCode: number
  }
}

export type ErrorMsg = {
  title: string
  message: string
}
