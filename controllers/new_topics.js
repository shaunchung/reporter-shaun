const moment = require('moment');

const New_topics = require('../models/new_topics');
/* READ *****************************/
exports.getProduct = async (req, res, next) => {

    let length1;
    let new_topics;


    const findlength = await New_topics.fetchAll()
        .then(([rows]) => {
            length1 = rows.length

        })
        .catch(err => console.log(err));


    const findPostById = await New_topics.findById(req.query.Page)
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('YYYY-MM-DD');
            //     console.log('p.date: ', p.date);
            // }
            new_topics = rows;
            //console.log('post[0].date: ', post[0].date);
            //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    // console.log('post: ', JSON.stringify(post[0].date));
    console.log(length1);
    res.render('new_topics', {
        data: new_topics,
        title: 'new_topics Post',
        length: length1,
        // categories: categories
    });

};

exports.getEditProduct = async (req, res, next) => {

    let categories;
    let new_topics;

    // const getCategories = await Category.fetchAll()
    //     .then(([rows]) => {
    //         categories = rows;
    //         //console.log('findCategories(): ', JSON.stringify(rows));
    //     })

    const findPostById = await New_topics.findById(req.query.id)
        .then(([rows]) => {
            // for (let p of rows) {
            //     p.date = moment(p.date).format('YYYY-MM-DD');
            //     console.log('p.date: ', p.date);
            // }
            new_topics = rows;
            //console.log('post[0].date: ', post[0].date);
            //console.log('findPostById(): ', JSON.stringify(rows));
        })
        .catch(err => console.log(err));

    // console.log('post: ', JSON.stringify(post[0].date));

    res.render('details', {
        data: new_topics,
        title: 'Edit Post',
        // categories: categories
    });

};

exports.postAddProduct = (req, res, next) => {

    New_topics.add(req, res)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch(err => console.log(err));
};

exports.postUpdateProduct = (req, res, next) => {
    console.log(req)
    New_topics.updateById(req, res)
        .then(([rows]) => {
            res.redirect('/new_topics/?Page='+req.body.id);
        })
        .catch(err => console.log(err));
};

exports.getDeleteProduct = (req, res, next) => {
    New_topics.deleteById(req.query.id)
        .then(([rows]) => {
            res.redirect('/');
        })
        .catch();
}

// exports.getSearchProduct = async(req, res, next) => {
//     let new_topics;
//     let length1;
//     const SearchProduct = await New_topics.findById(req.query.id)
//         .then(([rows]) => {
            
//             new_topics = rows;
//         })
//         .catch(err => console.log(err));
//     const findlength = await New_topics.fetchAll()
//         .then(([rows]) => {
//             length1 = rows.length

//         })
//         .catch(err => console.log(err));
//     res.render('new_topics', {
//         data: new_topics,
//         title: 'new_topics Post',
//         length: length1
//     });
// }