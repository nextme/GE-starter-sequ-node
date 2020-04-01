const client = require('../models').Client;
module.exports = {
    create(req, res) {
        return client
            .create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phone: req.body.phone,
                city: req.body.city
            })
            .then(client => res.status(201).json(
                client,
                "Client Created Successfully",
                201,
                "success"
            ))
            .catch(error => res.status(400).json(
                error,
                "Error Creating Clients",
                "error"
            ))
    },
    list(req, res) {
        return client
            .findAll()
            .then(clients => res.status(200).json(
                clients,
                "Client Information Retrieved successfully",
                200,
                "success"
            ))
            .catch(error => res.status(400).send(
                error,
                "Error Reterieving Clients List",
                400,
                "error"
            ));
    },
    details(req, res) {
        return client
            .findOne({ where: { id: req.params.clientId } })
            .then(client => res.status(200).json(
                client,
                "Client Information Retrieved successfully",
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
        return client
            .findOne({ where: { id: req.params.clientId } })
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                        
                            {},
                            "Client not found",
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
                            "Client Update successfully",
                            200,
                            "success"
                        
                    ))
                    .catch((error) => res.status(500).json(
                       
                            {},
                            "Error Updating Client",
                            500,
                            "error"
                        
                    ));
            });
    },
    destroy(req, res) {
        return client
            .findOne({ where: { id: req.params.clientId}})
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                      
                            {},
                            "Client Not Found",
                            404,
                            "error"
                        
                    );
                }

                return usr
                    .destroy()
                    .then(() => res.status(200).json(
                       
                            {},
                            "Client Deleted Successfully",
                            200,
                            "success"
                        
                    ))
                    .catch(error => res.status(500).json(
                        
                            error,
                            "Error deleting the client",
                            500,
                            "error"
                        
                    ));
            });
    }
}