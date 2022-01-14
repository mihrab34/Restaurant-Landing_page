const Orders = require('../model/Order');
const Menus = require('../model/Menu')




exports.createOrders = async (req, res) => {
    const menu = await Menus.findById(req.params.menu_id)
    res.render('order/add', {title: 'Place Order', menu})
};

exports.saveOrders = async (req, res) => {
  // let id = req.params.menu_id
  // const menu = findMenuById(id)
  const order = new Orders ({
    customer : req.body.customer,
    menu : req.params.menu_id,
    order_date : Date.now(),
    cost : req.body.cost,
    paid : 1,
    status : req.body.status,
  })

  await order.save()
  res.render('order/feedback', { title: "Order Feedback"})
}

exports.index = async (req, res) => {
  const orders = await Orders.find()
  res.render("index", { title: "Orders", orders });
};