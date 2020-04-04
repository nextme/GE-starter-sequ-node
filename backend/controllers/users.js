const user = require('../models').User;
module.exports = {
    create(req, res) {
        return user
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                RoleId: req.body.roleId
                
            })
            .then(user => res.status(201).json(
                user,
                "User Created Successfully",
                201,
                "success"
            ))
            .catch(error => res.status(400).json(
                error,
                "Error Creating Users",
                "error"
            ))
    },
    list(req, res) {
        return user
            .findAll()
            .then(users => res.status(200).json(
                users,
                "User Information Retrieved successfully",
                200,
                "success"
            ))
            .catch(error => res.status(400).send(
                error,
                "Error Reterieving Users List",
                400,
                "error"
            ));
    },
    details(req, res) {
        return user
            .findOne({ where: { id: req.params.userId } })
            .then(user => res.status(200).json(
                user,
                "User Information Retrieved successfully",
                200,
                "success"
            ))
            .catch(error => res.status(400).send(
                error,
                "Error Reterieving Details",
                400,
                "error"
            ));
    },
    update(req, res) {
        return user
            .findOne({ where: { id: req.params.userId } })
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                        
                            {},
                            "User not found",
                            404,
                            "error"
                        
                    );
                }

                return usr
                    .update({
                        firstName: req.body.firstName || usr.firstName,
                        lastName: req.body.lastName || usr.lastName,
                        email: req.body.email || usr.email
                    })
                    .then(() => res.status(200).json(
                        
                            usr,
                            "User Update successfully",
                            200,
                            "success"
                        
                    ))
                    .catch((error) => res.status(500).json(
                       
                            {},
                            "Error Updating User",
                            500,
                            "error"
                        
                    ));
            });
    },
    destroy(req, res) {
        return user
            .findOne({ where: { id: req.params.userId}})
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                      
                            {},
                            "User Not Found",
                            404,
                            "error"
                        
                    );
                }

                return usr
                    .destroy()
                    .then(() => res.status(200).json(
                       
                            {},
                            "User Deleted Successfully",
                            200,
                            "success"
                        
                    ))
                    .catch(error => res.status(500).json(
                        
                            error,
                            "Error deleting the user",
                            500,
                            "error"
                        
                    ));
            });
    }
}