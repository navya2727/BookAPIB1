const express = require("express");

const database = require("./database/index");

const shapeAI = express();

shapeAI.use(express.json());

/*
Route               /
Description         get all books
Access              PUBLIC
parameters          NONE
Method              GET
*/

shapeAI.get("/" ,(req, res) => {
    return res.json({ books: database.books});
});
/*
Route               /is
Description         get specific book based on ISBN
Access              PUBLIC
parameters          isbn
Method              GET
*/


shapeAI.get("/is/:isbn",(req, res) => {
    const getspecificBook = database.books.filter(
        (book) => book.ISBN === req.params.isbn
    );

    if(getspecificBook.length === 0) {
       return res.json({ 
           error:'No book found for the ISBN of ${req.params.isbn}',
       });
    }

     return res.json({ book: getspecificBook });
});     

/*
Route               /category/
Description         get specific  books based on a category
Access              PUBLIC
parameters          category
Method              GET
*/
shapeAI.get("/c/:category",(req, res) => {
    const getspecificBooks = database.books.filter((book) =>
       book.category.includes(req.params.category)
    );

    if(getspecificBooks.length === 0) {
       return res.json({ 
           error:'No book found for the category of ${req.params.category}',
       });
    }

     return res.json({ books: getspecificBooks });
}); 
/*
Route               /author
Description         get all authors
Access              PUBLIC
parameters          NONE
Method              GET
*/
shapeAI.get("/author", (req, res) => {
    return res.json({ authors: database.authors});

});
/*
Route               /author
Description         get a list of authors based on a book's ISBN
Access              PUBLIC
parameters          isbn
Method              GET
*/

shapeAI.get("/author/:isbn",(req, res) => {
    const getspecificAuthors = database.authors.filter((author) =>
    author.books.includes(req.params.isbn)
    );   
    if(getspecificAuthors.length === 0) {
        return res.json({ 
          error:'No author found for the book ${req.params.isbn}',
        });
    }
    return res.json({ authors: getspecificAuthors});
});
/*
Route               /publications
Description         get all publications
Access              PUBLIC
parameters          NONE
Method              GET
*/
shapeAI.get("/publications", (req, res) => {
    return res.json({ publications: database.publications});
}); 
/*
Route               /book/new
Description         add new books
Access              PUBLIC
parameters          NONE
Method              POST
*/
shapeAI.post("/book/new", (req, res) => {
    const {newBook} = req.body;
    database.books.push(newBook);
    return res.json({books: database.books, message:"book was added!"});
});

/*
Route               /author/new
Description         add new author
Access              PUBLIC
parameters          NONE
Method              POST
*/
shapeAI.post("/author/new", (req, res) => {
    const {newAuthor } = req.body;
    database.authors.push(newAuthor);
    return res.json({authors: database.authors, message:"author was added!"});
});

/*
Route               /book/update/:title
Description         update title of a book
Access              PUBLIC
parameters          isbn
Method              PUT
*/
shapeAI.put("/book/update/:isbn", (req, res) => {
    database.books.forEach((book) => {
        if (book.ISBN === req.params.isbn){
            book.title = req.body.bookTitle;
            return;

        }
    });

    return res.json({ books:database.books});
});
/*
Route               /book/author/update
Description         update/add new author
Access              PUBLIC
parameters          isbn
Method              PUT
*/
shapeAI.put("/book/author/update/:isbn", (req, res) => {
    database.books.forEach((book) => {
        if (book.ISBN === req.params.isbn) 
        return book.authors.push(req.body.newAuthor);
            
    });

    database.authors.forEach((author) => {
        if(author.id === req.body.newAuthor)
        return author.books.push(req.params.isbn);
    });
    
    return res.json({
        books:database.books,
        authors:database.authors,
        message:"New author was added",
    });

});
/*
Route               /publicatin/update/book
Description         update/add new book to a publication
Access              PUBLIC
parameters          isbn
Method              PUT
*/
shapeAI.put("/publication/update/book/:isbn", (req, res) => {
    database.publications.forEach((publication) => {
        if(publication.id === req.body.pubId) {
            return database.publications.books.push(req.params.isbn);

        }

    });
        
    });

    


 shapeAI.listen(3000, () => console.log("Server running!!"));






