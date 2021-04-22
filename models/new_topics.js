const db = require('../util/database');

module.exports = class new_Topics {
    constructor(id, title, tag, content, url, img_url, date) {
        this.id = id;
        this.tag = tag;
        this.title = title;
        this.content = content;
        this.url = url;
        this.img_url = img_url;
        this.date = date;

    }

    static pythonAdd(results) {
        return db.execute(
            // 'INSERT INTO new_topics (title,tag, content, img_url, url, date) VALUES (?, ?, ?, ?, ?, ?)', [results.title, results.content, results.url]
        );
    }

    // CREATE 
    static add(req, res) {
        //console.log('add():', req.body.name, req.body.price);
        return db.execute(
            'INSERT INTO new_topics (title,tag, content, img_url, url, date) VALUES (?, ?, ?, ?, ?, ?)', [req.body.title, req.body.tag, req.body.editor1, req.body.img_url, req.body.url, req.body.date]
        );
    }

    // READ
    static fetchAll() {
        return db.execute('SELECT * FROM new_topics');
    }

    static findById(id) {
        return db.execute('SELECT * FROM new_topics where id = ?', [id]);
    }

    // UPDATE
    static updateById(req, res) {
        const id = req.body.id;
        const tag = req.body.tag;
        const title = req.body.title;
        const content = req.body.editor1;
        const url = req.body.url;
        const img_url = req.body.img_url;
        const date = req.body.date;
        //const date = new Date();
        console.log('model:updateById()', title, tag, content, img_url, url, date, id)
        return db.execute(
            'UPDATE new_topics SET title=? ,tag=? , content=? , img_url=? , url=? , date=? WHERE id = ?', [title, tag, content, img_url, url, date, id]
        );
    }


    // DELETE
    static deleteById(id) {
        return db.execute(
            'DELETE FROM new_topics WHERE id = ?', [id]
        );
    }

    static getCount() {
        return db.execute('SELECT COUNT(*) as count FROM new_topics');
    }
};