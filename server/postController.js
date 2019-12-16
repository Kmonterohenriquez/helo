module.exports = {
    newPost: async(req, res, next)=>{
        const {title, img , content } = req.body;
        // const {session} = req;

        const db = req.app.get('db');

        let newPost = await db.create_post({title, img, content});
        res.sendStatus(200);
    },
    getAllPosts:(req, res, next)=>{

    },
    getUserPosts:(req, res, next)=>{

    }
};