const Menus = require('../model/Menu');

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

  menu.save()
    .then((result) => {
      res.redirect("/menus/successful");
    })
    .catch((err) => console.log(err));
};

exports.success = async (req, res) => {
    res.render("menu/successful", { title: "Success" });
}

exports.index = async (req, res) => {
  const menus =  await Menus.find({})
    if (menus) {
      res.render("menu/index", { title: "Menu", menus });
    }
};

exports.editMenu = async (req, res) => {
    const id = req.params.id;

    const menu = Menus.findById(id);
    res.render("menu/edit", { title: "Edit Menu", menu });
}