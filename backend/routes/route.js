
const express = require('express'); 
const router = express. Router(); 
const { Department, InfoEmployee } = require('../models/schema');

// Endpoint pour créer un département
router.post('/departments', async (req, res) => {
  try {
    const { name } = req.body;
    const newDepartment = new Department({ name });
    await newDepartment.save();
    res.status(201).json(newDepartment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du département.' });
  }
});

// Endpoint pour récupérer tous les départements
router.get('/departments', async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des départements.' });
  }
});

// Endpoint pour créer un employé
router.post('/employees', async (req, res) => {
  try {
    const { firstName, lastName, departmentId } = req.body;
    const newEmployee = new InfoEmployee({ firstName, lastName, department: departmentId });
    await newEmployee.save();
    res.status(201).json(newEmployee);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'employé.' });
  }
});

// Endpoint pour récupérer tous les employés
router.get('/employees', async (req, res) => {
  try {
    const employees = await InfoEmployee.find().populate('department');
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des employés.' });
  }
});

module.exports = router;
