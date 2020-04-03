const restr = require('../models').Restaurant;
module.exports = {
    create(req, res) {
        return restr
            .create({
                phone: req.body.phone,
                title: req.body.title,
                email: req.body.email,
                website: req.body.website,
                rating: req.body.rating
            })
            .then(restr => res.status(201).json(
                restr,
                "Restr Created Successfully",
                201,
                "success"
            ))
            .catch(error => res.status(400).json(
                error,
                "Error Creating Restrs",
                "error"
            ))
    },
    list(req, res) {
        return restr
            .findAll()
            .then(restrs => res.status(200).json(
                restrs,
                "Restr Information Retrieved successfully",
                200,
                "success"
            ))
            .catch(error => res.status(400).send(
                error,
                "Error Reterieving Restrs List",
                400,
                "error"
            ));
    },
    details(req, res) {
        return restr
            .findOne({ where: { id: req.params.restrId } })
            .then(restr => res.status(200).json(
                restr,
                "Restr Information Retrieved successfully",
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
        return restr
            .findOne({ where: { id: req.params.restrId } })
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                        
                            {},
                            "Restr not found",
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
                            "Restr Update successfully",
                            200,
                            "success"
                        
                    ))
                    .catch((error) => res.status(500).json(
                       
                            {},
                            "Error Updating Restr",
                            500,
                            "error"
                        
                    ));
            });
    },
    destroy(req, res) {
        return restr
            .findOne({ where: { id: req.params.restrId}})
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                      
                            {},
                            "Restr Not Found",
                            404,
                            "error"
                        
                    );
                }

                return usr
                    .destroy()
                    .then(() => res.status(200).json(
                       
                            {},
                            "Restr Deleted Successfully",
                            200,
                            "success"
                        
                    ))
                    .catch(error => res.status(500).json(
                        
                            error,
                            "Error deleting the restr",
                            500,
                            "error"
                        
                    ));
            });
    }
}