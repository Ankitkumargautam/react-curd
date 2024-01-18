const Employee = require('../models/empModel');

const saveEmployee = async (req, res) => {
  const { name, email } = req.body;

  const emp = await Employee.create({ name, email });

  if (emp) {
    res.status(201).json(emp);
  }
};

const getEmployees = async (req, res) => {
  const emp = await Employee.find();

  if (emp) {
    res.status(200).json(emp);
  }
};

const updateEmployee = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const emp = await Employee.findByIdAndUpdate(
    id,
    { name, email },
    { new: true }
  );

  if (emp) {
    res.status(200).json(emp);
  }
};

const deleteEmp = async (req, res) => {
  const { id } = req.params;

  const emp = await Employee.findByIdAndDelete(id);

  if (emp) {
    res.status(200).json(emp);
  }
};

module.exports = { saveEmployee, getEmployees, updateEmployee, deleteEmp };
