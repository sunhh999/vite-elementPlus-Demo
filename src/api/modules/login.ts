import request from "@/utils/request"

/**
 * 登录
 */

interface IResponseType<P = {}> {
	code?: number
	status: number
	msg: string
	data: P
}
interface ILogin {
	token: string
	expires: number
}

interface LoginParams {
	username: string
	password: string
}

// export const login = (params: LoginParams) => {
// 	return request<IResponseType<ILogin>>({
// 		url: "/api/auth/login",
// 		method: "post",
// 		data: {
// 			params
// 		}
// 	})
// }
