import Router from "express"

const UserRoutes = Router()

UserRoutes.get("/test", ()=>{ console.log("hello world")})

export default UserRoutes