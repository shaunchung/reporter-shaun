const moment = require("moment");

const Photography = require("../models/photography");

/* READ *****************************/

exports.getphotography = async (req, res, next) => {
  let length1;
  let photography;
  const findlength = await Photography.fetchAll()
    .then(([rows]) => {
      length1 = rows.length;
    })
    .catch((err) => console.log(err));

  const findPostById = await Photography.findById(req.query.Page)
    .then(([rows]) => {
      for (let p of rows) {
        p.date = moment(p.date).format("MMM D, YYYY");
      }
      photography = rows;
      //console.log(JSON.stringify(rows, ["id", "title", "tag","content","img_url","url","date"]));
      //res.send(JSON.stringify(rows));
    })
    .catch((err) => console.log(err));
  console.log(length1);
  res.render("photography", {
    data: photography,
    title: "list",
    length: length1,
  });
};

exports.getEditphotography = async (req, res, next) => {
  // let categories;
  let photography;

  // const getCategories = await Category.fetchAll()
  //     .then(([rows]) => {
  //         categories = rows;
  //         //console.log('findCategories(): ', JSON.stringify(rows));
  //     })

  const findPostById = await Photography.findById(req.query.id)
    .then(([rows]) => {
      // for (let p of rows) {
      //     p.date = moment(p.date).format('YYYY-MM-DD');
      //     console.log('p.date: ', p.date);
      // }
      photography = rows;
      //console.log('post[0].date: ', post[0].date);
      //console.log('findPostById(): ', JSON.stringify(rows));
    })
    .catch((err) => console.log(err));

  console.log("photography: ", JSON.stringify(photography[0].date));

  res.render("photographyEdit", {
    data: photography,
    title: "Edit photography",
    // categories: categories
  });
};

exports.postAddphotography = (req, res, next) => {
  Photography.add(req, res)
    .then(([rows]) => {
      res.redirect("/");
    })
    .catch((err) => console.log(err));
};

exports.postUpdatephotography = (req, res, next) => {
  console.log(req);
  Photography.updateById(req, res)
    .then(([rows]) => {
      res.redirect("/photography/?Page=" + req.body.id);
    })
    .catch((err) => console.log(err));
};

exports.getDeletephotography = (req, res, next) => {
  Photography.deleteById(req.query.id)
    .then(([rows]) => {
      res.redirect("/");
    })
    .catch();
};
