import Router from "express"
import handleNewUser from "../controllers/userController"

const UserRoutes = Router()

UserRoutes.post("/newUser", handleNewUser)

export default UserRoutes