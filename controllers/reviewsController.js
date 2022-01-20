const Reviews = require("../model/Review");

exports.index = (req, res) => {
  Reviews.find({}, (err, comments) => {
    if (err) throw err;
    if (comments) {
      res.render("review/index", { title: "Testimonials", comments });
    }
  });
};

exports.add = (req, res) => {
  res.render("review/add", { title: "Reviews" });
};

exports.save = async (req, res) => {
  const user_details = {
    fullname: req.body.fullname,
    message: req.body.message,
  };

  let user = await new Reviews(user_details);
  user.save((err) => {
    if (err) throw err;
    res.redirect("/review/feedback");
  });
};

exports.feedback = (req, res) => {
  res.render("review/feedback", { title: "Feedback" });
};

exports.edit = (req, res) => {
  let id = req.params._id;
  Reviews.findById(id, (err, comment) => {
    if (err) {
      throw err;
    } else {
      console.log(comment);
      res.render("edit", { title: "edit", comment });
    }
  });
};
