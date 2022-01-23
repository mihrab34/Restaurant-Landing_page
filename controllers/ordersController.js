const Orders = require('../model/Order');
const Menus = require('../model/Menu')


exports.index = async (req, res) => {
  // const menu = Menus.find()
  const orders = await Orders.find({}).populate('menu')
  console.log(orders);
  res.render('order/index', {title: "Orders", orders})
}

exports.createOrders = async (req, res) => {
    const menu = await Menus.findById(req.params.menu_id)
    res.render('order/add', {title: 'Place Order', menu})
};

exports.saveOrders = async (req, res) => {
  const order = new Orders ({
    customer : req.body.customer,
    menu : req.params.menu_id,
    order_date : Date.now(),
    cost : req.body.cost,
    paid : 1,
    status : req.body.status,
  })

  await order.save()
  res.redirect(302, '/menus');
}
