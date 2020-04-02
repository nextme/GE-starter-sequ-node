const order = require('../models').Order;
module.exports = {
    create(req, res) {
        return order
            .create({
                clientId:req.body.clientId
                type:req.body.type
                date:req.body.date
            })
            .then(order => res.status(201).json(
                order,
                "Order Created Successfully",
                201,
                "success"
            ))
            .catch(error => res.status(400).json(
                error,
                "Error Creating Orders",
                "error"
            ))
    },
    list(req, res) {
        return order
            .findAll()
            .then(orders => res.status(200).json(
                orders,
                "Order Information Retrieved successfully",
                200,
                "success"
            ))
            .catch(error => res.status(400).send(
                error,
                "Error Reterieving Orders List",
                400,
                "error"
            ));
    },
    details(req, res) {
        return order
            .findOne({ where: { id: req.params.orderId } })
            .then(order => res.status(200).json(
                order,
                "Order Information Retrieved successfully",
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
        return order
            .findOne({ where: { id: req.params.orderId } })
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                        
                            {},
                            "Order not found",
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
                            "Order Update successfully",
                            200,
                            "success"
                        
                    ))
                    .catch((error) => res.status(500).json(
                       
                            {},
                            "Error Updating Order",
                            500,
                            "error"
                        
                    ));
            });
    },
    destroy(req, res) {
        return order
            .findOne({ where: { id: req.params.orderId}})
            .then(usr => {
                if (!usr) {
                    return res.status(404).json(
                      
                            {},
                            "Order Not Found",
                            404,
                            "error"
                        
                    );
                }

                return usr
                    .destroy()
                    .then(() => res.status(200).json(
                       
                            {},
                            "Order Deleted Successfully",
                            200,
                            "success"
                        
                    ))
                    .catch(error => res.status(500).json(
                        
                            error,
                            "Error deleting the order",
                            500,
                            "error"
                        
                    ));
            });
    }
}