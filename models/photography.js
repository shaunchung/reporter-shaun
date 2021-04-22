const db = require('../util/database');

module.exports = class photography {
  constructor(id, title, tag, content, img_url, url, date ) {
    this.id = id;
    this.title = title;
    this.tag= tag;
    this.content = content;
    this.img_url= img_url;
    this.url = url;
    this.date = date;
  }

  // CREATE 
  static add(req, res) {
    //console.log('add():', req.body.name, req.body.price);
    return db.execute(
      'INSERT INTO photography (title,tag, content, img_url, url, date) VALUES (?, ?, ?, ?, ?, ?)', [req.body.title, req.body.tag, req.body.editor1, req.body.img_url,req.body.url, req.body.date]
    );
  }

  // READ
  static fetchAll() {
    return db.execute('SELECT * FROM photography');
  }

  static findById(id) {
    return db.execute('SELECT * FROM photography where id = ?', [id]);
  }

  // UPDATE
  static updateById(req, res) {
    const id = req.body.id;
    const title = req.body.title;
    const tag = req.body.tag;
    const content = req.body.editor1;
    const img_url=req.body.img_url;
    const url = req.body.url;
    const date = req.body.date;
    //const date = new Date();
    console.log('model:updateById()', id, title, tag, content, img_url, url, date)
    return db.execute(
      'UPDATE photography SET title = ?, tag = ?,  content = ?, img_url = ?, url = ?, date = ? WHERE id = ?', [title,tag, content,img_url, url, date , id]
    );
  }


  // DELETE
  static deleteById(id) {
    return db.execute(
      'DELETE FROM photography WHERE id = ?', [id]
    );
  }


  static getCount() {
    return db.execute('SELECT COUNT(*) as count FROM photography');
  }
};