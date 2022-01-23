const Menus = require("../model/Menu");

exports.index = async (req, res) => {
  const menus = await Menus.find({});
  if (menus) {
    res.render("menu/index", { title: "Menu", menus });
  }
};

exports.createMenu = async (req, res) => {
  res.render("menu/add", { title: "Add Menu" });
};

exports.saveMenu = async (req, res) => {
  const menu = new Menus({
    name: req.body.name,
    price: req.body.price,
    status: req.body.status,
    remarks: req.body.remarks,
  });

  menu
    .save()
    .then((result) => {
      res.redirect("/menus/successful");
    })
    .catch((err) => console.log(err));
};

exports.success = async (req, res) => {
  res.render("menu/successful", { title: "Success" });
};

exports.editMenu = async (req, res) => {
  // const id = req.params.id;
  const menu = await Menus.findById(req.params.id);
  // console.log(menu);
  res.render("menu/edit", { title: "Edit Menu", menu });
};

exports. updateMenu = async (req, res) => {
  let id = req.params.id;
  const new_order_details = {
    name: req.body.name,
    price: req.body.price,
    status: req.body.status,
    remarks: req.body.remarks
  };

  await Menus.updateOne({_id: id}, new_order_details);
  res.redirect("/menus")
}
