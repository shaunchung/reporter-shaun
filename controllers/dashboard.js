const moment = require('moment');

const New_topics = require('../models/new_topics');
const Photography = require('../models/photography');

// exports.getTopics = (req, res, next) => {
//   let cname;
//   let new_topics;
//   New_topics.fetchAll()
//       .then(([rows]) => {
//           console.log(JSON.stringify(rows, ["id", "title", "content", "url"]));
//           // res.send(JSON.stringify(rows));
//           new_topics = rows;
//           res.render('new_topics', {
//               data: rows,
//               title: 'list',
//           });
//       })
//       .catch(err => console.log(err));
  
// };


exports.getDashboard = async (req, res, next) => {

  let cname;
  let new_topics;
  let photography;
  let new_topicsCount;
  let photographyCount;

  try {
    const getTopics = await New_topics.fetchAll()
      .then(([rows]) => {
        //res.send(JSON.stringify(rows));
        new_topics = rows;
        // console.log('topic: ', new_topics);
      })
    const getPhotography = await Photography.fetchAll()
      .then(([rows]) => {
        //res.send(JSON.stringify(rows));
        photography = rows;
        // console.log('photography: ', photography);
      })
    const getTopicCount = await New_topics.getCount()
      .then(([rows]) => {
        new_topicsCount = rows[0].count;
      })
    const getPhotoCount = await Photography.getCount()
      .then(([rows]) => {
        photographyCount = rows[0].count;
      })

    let data = {
      topic: new_topics,
      photography: photography,
      new_topicsCount: new_topicsCount,
      photographyCount: photographyCount
    }

    //console.log(JSON.stringify(data));
    //res.send(JSON.stringify(data));

    res.render('dashboard', {
      title: 'Dashboard',
      color: 'btn-primary',
      icon: 'fa-cog',
    
      topic: new_topics,
      photography: photography,
      new_topicsCount: new_topicsCount,
      photographyCount:photographyCount

    });

  } catch (err) {
    console.log(err);
  };

};