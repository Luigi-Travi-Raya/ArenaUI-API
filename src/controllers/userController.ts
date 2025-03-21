import { Request, Response} from "express";
import registerNewUser from "../services/user/newUser"

async function handleNewUser(req: Request, res: Response){
    // req.body:{
    //     name: "",
    //     email: "",
    //     phone: "",
    //     documentNumber: ""
    // }
    
    const {name, email, phone, documentNumber} = req.body

    const result = await registerNewUser(name, email, phone, documentNumber)
    if (result.status == "sucess"){
        res.json("sucess")
    }
    else{
        res.json("error" + result.msg)
    }
}
export default handleNewUser