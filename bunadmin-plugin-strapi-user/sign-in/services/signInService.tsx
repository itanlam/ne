import { ENV } from "@/utils/config"
import request from "@/utils/scripts/request"

export interface SignInParamsType {
  identifier: string
  password: string
}

async function userSignInService(params: SignInParamsType) {
  return request("/auth/local", {
    prefix: ENV.AUTH_URL,
    method: "POST",
    data: params
  })
}

export default userSignInService
