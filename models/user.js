const BaseModel = require("./baseModel");
const bcrypt = require("bcrypt");

class UserModel extends BaseModel{
    constructor(){
        super();
    }

    signIn(username,password){
        // if(username == "padc" && password == "123456"){
        //     return{userId:1,name: "padc"}
        // }
        return new Promise((resolve,reject)=>{
            this.sql.query("select * from users where name = ?",username,(err,data)=>{
                if(err) reject(err)
                else{
                    data.forEach(item => {
                        console.log(item);
                        bcrypt.compare(password,item.password,(err,result) =>{
                            if(result){
                                resolve(item)
                            }
                            else{
                                reject(err);
                            }
                        })
                    });
                    console.log(data);
                    
                }
            })
        })        
    }

    async register(name,email,password){
        return new Promise((resolve,reject)=>{
            bcrypt.hash(password,10,(err,hashedPassword) => {
                if(err) reject(err)
                else{
                    const password = hashedPassword;
                    this.sql.query('insert into users set ?',{name,email,password},(err,data)=>{
                        if(err) reject(err);
                        else resolve(data);
                    })
                }
            })
        })
    }
}


module.exports = UserModel;