const books =[
    
    {
        ISBN:  "12345ONE",
        title: "Getting started with MERN",
        authors:  [1,2],
        language: "en" ,
        pubDate: "2021-07-07",
        numofpage: 225,
        category: ["fiction", "programming","tech","web dev"],
        publication: 1,
    } ,
    {
        ISBN:  "12345NEW",
        title: "Getting started with HTML",
        authors:  [1,2],
        language: "en" ,
        pubDate: "2021-07-07",
        numofpage: 225,
        category: ["fiction", "programming","tech","web dev"],
        publication: 1,
    } ,
    {
        ISBN:  "12345TWO",
        title: "Getting started with Python",
        authors:  [1,2],
        language: "en",
        pubDate: "2021-07-07",
        numofpage: 225,
        category: ["fiction", "programming","tech","web dev"],
        publication: 1,  
    }
];    


const authors = [
    {
      id: 1,
      name:"navya",
      books: ["12345ONE","12345TWO"],
    },
    {
        id: 2,
        name:"Kavya",
        books: ["12345ONE"],   
    },
];
const publications =[
    {
        id:1,
        name:"Chakra",
        books:["12345ONE"],

    }, 
];       
module.exports = { books,authors,publications };

//HTTP client ->  helper






