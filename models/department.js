const BaseModel = require("./baseModel");

class DepartmentModel extends BaseModel{
    constructor(){
        super();
    }

    async getAll(){
        const query  = `Select * from departments`;
        return new Promise((resolve,rejects) => {
            this.sql.query(query,(err,employee)=>{
                if(err) rejects(err)
                else resolve(employee)
            });
        })
    }

    async createDepartment(name){
        const createQuery = `Insert into departments set ?`;
        return new Promise((resolve,reject)=>{
            this.sql.query(createQuery,{name},(err,result) => {
                if(err) reject(err);
                else resolve(result);
            })
        })
    }

    async updateDepartment(id,name){
        
    }
}


module.exports = DepartmentModel;