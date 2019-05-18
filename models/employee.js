const BaseModel = require("./baseModel");

class EmployeeModel extends BaseModel{
    async getByMultipleIds(ids){
        const query = `select * from employee where department_id in (${ids.join(",")})`;
        return new Promise((resolve,reject) => {
            this.sql.query(query,(err,employee)=>{
                if(err) reject(err)
                else resolve(employee)
            });
        });
                
    }
}

module.exports = EmployeeModel;