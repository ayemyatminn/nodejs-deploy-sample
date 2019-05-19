const DepartmentModel = require("../models/department");
const EmployeeModel = require("../models/employee");

const departmentModel = new DepartmentModel();
const employeeModel = new EmployeeModel();

class DepartmentController{
    getAll(req,res){

        departmentModel.getAll()
            .then(departments => {
                const ids = departments.map(d => d.id);
                employeeModel.getByMultipleIds(ids)
                    .then(employee =>{
                        departments.forEach(d => {
                            d.employee = employee.filter(item => item.department_id == d.id);
                        });
                        res.status(200).send(departments);
                    })
            })
            .catch(error => {
                throw error;
            });
    }

    createNewDepartment(req,res){
        departmentModel.createDepartment(req.body.name)
        .then(departments => {
            res.status(200).send('Create Success');
        })
        .catch(error => {
            throw error;
        });
    }

    updateDepartment(req,res){
        
    }

}


module.exports = DepartmentController;