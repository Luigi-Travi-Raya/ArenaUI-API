import User from "../../models/users"
import Enterprise from "../../models/enterprises";
import bcrypt from "bcrypt"

const saltRounds = 10;

async function registerNewUser(name: string, email: string, phone: string, documentNumber: string) {
    try {
        const queryResult = await User.findAll({ where: { name: name } })

        if (queryResult.length != 0) {
            throw new Error("user already registered");
        }

        
        bcrypt.hash(generatePassword(15), saltRounds, function (err, hash) {
            User.create({
                name: name,
                email: email,
                phone: phone,
                documentNumber: documentNumber,
                password: hash,
                isOwner: false, 
                enterpriseId: 2

            })
        });
        return {msg: "success", status: "success"}
    } catch (error) {
        console.log("Erro em registerNewUser: " + error)
        return {msg: error, status: "error"}
    }

}

function generatePassword(length: number): string {
    const char =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=";
    let password = "";
    for (let i = 0; i < length; i++) {
        const ind = Math.floor(Math.random() * char.length);
        password += char[ind];
    }
    return password;
}


export default registerNewUser