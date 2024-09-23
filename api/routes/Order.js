const express = require('express');
const orderRoute = express.Router();
const protect = require('../middleware/Auth');
const AsyncHandler = require('express-async-handler');

// Créer une commande
orderRoute.post(
  '/',
  protect,
  AsyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAdress, 
      paymentMethod,
      shippingPrice,
      taxPrice,
      totalPrice,
      price,
    } = req.body;

    if (!orderItems || orderItems.length === 0) {
      res.status(400);
      throw new Error('Aucun article de commande trouvé!');
    } else {
      const order = new Order({
        orderItems,
        shippingAdress,
        paymentMethod,
        shippingPrice,
        taxPrice,
        totalPrice,
        price,
        user: req.user._id,
      });

      const createdOrder = await order.save();
      res.status(201).json(createdOrder);
    }
  })
);

// Obtenir toutes les commandes d'un utilisateur
orderRoute.get(
  '/',
  protect,
  AsyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).sort({ _id: -1 });

    if (orders) {
      res.status(200).json(orders);
    } else {
      res.status(404);
      throw new Error('Commandes non trouvées!');
    }
  })
);

// Obtenir une seule commande par ID
orderRoute.get(
  '/:id',
  protect,
  AsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate('user', 'email');

    if (order) {
      res.status(200).json(order);
    } else {
      res.status(404);
      throw new Error('Commande non trouvée!');
    }
  })
);

// Mettre à jour une commande (par exemple, la mise à jour du paiement)
orderRoute.put(
  '/:id/payment',
  protect,
  AsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        updated_time: req.body.updated_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Commande non trouvée!');
    }
  })
);

// Mettre à jour une commande (exemple: modification des informations de livraison)
orderRoute.put(
  '/:id',
  protect,
  AsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.shippingAdress = req.body.shippingAdress || order.shippingAdress;
      order.paymentMethod = req.body.paymentMethod || order.paymentMethod;
      order.shippingPrice = req.body.shippingPrice || order.shippingPrice;
      order.taxPrice = req.body.taxPrice || order.taxPrice;
      order.totalPrice = req.body.totalPrice || order.totalPrice;

      const updatedOrder = await order.save();
      res.status(200).json(updatedOrder);
    } else {
      res.status(404);
      throw new Error('Commande non trouvée!');
    }
  })
);

// Supprimer une commande par ID
orderRoute.delete(
  '/:id',
  protect,
  AsyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      await order.remove();
      res.status(200).json({ message: 'Commande supprimée avec succès!' });
    } else {
      res.status(404);
      throw new Error('Commande non trouvée!');
    }
  })
);

module.exports = orderRoute;