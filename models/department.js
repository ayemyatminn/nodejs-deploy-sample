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
}


module.exports = DepartmentModel;