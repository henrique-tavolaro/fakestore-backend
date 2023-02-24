import { Router } from "express"
import { controllerAdapter } from "../../core/adapters/controller-adapter"
import { makeLoginController } from "../../core/factories/auth/make-login-controller"
import { makeRegisterController } from "../../core/factories/auth/make-register-controller"

export default (router: Router): void => {
    router.post('/login', controllerAdapter(makeLoginController()))
    router.post('/register', controllerAdapter(makeRegisterController()))
}