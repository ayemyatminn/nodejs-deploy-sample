const BaseModel = require("./baseModel");

class UserModel extends BaseModel{
    constructor(){
        super();
    }

    signIn(username,password){
        if(username == "padc" && password == "123456"){
            return{userId:1,name: "padc"}
        }
        return false
    }
}


module.exports = UserModel;