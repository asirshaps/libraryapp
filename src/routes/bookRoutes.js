const express = require('express');
const booksRouter = express.Router();
function router(nav){
    var books = [
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Fantasy Fiction',
            img: "alc.jpg"
    
        },
        {
            title: 'The God of Small Things',
            author: 'Arundhati Roy',
            genre: 'Novel',
            img: "God.jpg"
    
        },
        {
            title: 'Becoming',
            author: 'Michelle Obama',
            genre: 'Memoir',
            img: "bec.jpg"
    
        }
    ]
    booksRouter.get('/',function(req,res){
    res.render("books",
    {
    nav,
    title:'Library',
    books
    });
    });
    booksRouter.get('/:id',function(req,res){
    const id = req.params.id
    res.render('book',
    {
    nav,
    title:'Library',
    book: books[id]
    })
    })
    return booksRouter;
}

module.exports = router;