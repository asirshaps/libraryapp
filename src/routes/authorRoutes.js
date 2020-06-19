const express = require('express');
const authorsRouter = express.Router();
function router1(nav){
    var authors = [
        {
            name: 'Paulo Coelho',
            bestseller: 'The Alchemist',
            award: 'Nielsen Gold Book Award, UK, 2004',
            img: "pau.jpg"
    
        },
        {
            name: 'Arundhati Roy',
            bestseller: 'The God of Small Things ',
            award: 'Booker Prize,1997',
            img: "aru.jpg"
    
        },
        {
            name: 'Michelle Obama',
            bestseller: 'Becoming',
            award: 'NAACP Image Award,2019',
            img: "mic.jpg"
    
        }
    ]
    authorsRouter.get('/',function(req,res){
    res.render("authors",
    {
    nav,
    title:'Library',
    authors
    });
    });
    // booksRouter.get('/single',function(req,res){
    //     res.send("Im a book");
    // });
    authorsRouter.get('/:id1',function(req,res){
    const id1 = req.params.id1
    res.render('author',
    {
    nav,
    title:'Library',
    author: authors[id1]
    })
    })
    return authorsRouter;
}

module.exports = router1;