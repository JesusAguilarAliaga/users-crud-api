const catchError = require('../utils/catchError');
const User = require('../models/User');

//get all users
const getAllUsers = catchError(async (req, res) => {
    const results = await User.findAll();
    return res.json(results);
})

//create new user
const createUser = catchError(async (req, res) => {
    const { firstName, lastName, email, password, birthday } = req.body;

    const newBody = {
        firstName,
        lastName,
        email,
        password,
        birthday
    }

    const userCreated = await User.create(newBody);

    return res.status(201).json(userCreated);
})

//get one user
const getOneUser = catchError(async (req, res) => {
    const { id } = req.params;
    const user = await User.findByPk(id);

    if(!user) return res.sendStatus(404);

    return res.json(user);
})

//delete user
const deleteUser = catchError(async (req, res) => {
    const {id} = req.params;
    const userDeleted = await User.destroy({where: {id}})

    if(!userDeleted) return res.sendStatus(404);

    return res.send("Usuario eliminado").status(204);
})

//Update user
const updateUser = catchError(async (req, res) => {
    const {id} = req.params;
    const { firstName, lastName, password, birthday } = req.body;
    
    const newBody = {
        firstName,
        lastName,
        password,
        birthday
    }

    const user = await User.findByPk(id);
    if(!user) return res.sendStatus(404);

    const userUpdated = await User.update(newBody, {
        where: {id}, returning: true
    })

    return res.json(userUpdated[1][0]);
})

//Export
module.exports = {
    getAllUsers,
    createUser,
    getOneUser,
    deleteUser,
    updateUser
}