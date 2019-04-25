const graphql = require('graphql');
const _ = require('lodash'); // Package allows easy way to change or find data


const { 
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLInt
} = graphql;

//Dummie Data
var books = [
    {name:"The Great Panda", genre:"Fantasy",id:"1",authorId:"1"},
    {name:"No Sleep", genre:"Fantasy",id:"2",authorId:"2"},
    {name:"Dev Mountain", genre:"Fantasy",id:"3",authorId:"3"},
    {name:"Great Tails", genre:"Biography",id:"4",authorId:"4"}
];

var authors = [
    {name:"Keaton", age:21,id:"1"},
    {name:"Siri", age:30,id:"2"},
    {name:"Cameron", age:31,id:"3"},
    {name:"Tom", age:28,id:"4"}
];

const BookType = new GraphQLObjectType({ // Object Type
    name: 'Book',
    fields: () => ({
        id: { type:GraphQLID },
        name: { type:GraphQLString },
        genre: { type:GraphQLString },
        author: {
            type:AuthorType,
            resolve(parent,args){
                return _.find(authors, {id: parent.authorId});
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({ // Object Type
    name: 'Author',
    fields: () => ({
        id: { type:GraphQLID },
        name: { type:GraphQLString },
        age: { type:GraphQLInt }

    })
})

const RootQuery = new GraphQLObjectType({ // Root query are the access points to graphQL
    name:'RootQueryType',
    fields: {
        book:{
            type: BookType, //Endpoint
            args: {id: { type:GraphQLID } }, // What query is expecting from frontend Req
            resolve(parent,args){ //response .then
                // Code to get data from DB or other source
                return _.find(books, { id: args.id})
            }
        },
        author:{
            type: AuthorType, //Endpoint
            args: {id: { type:GraphQLID } }, // What query is expecting from frontend Req
            resolve(parent,args){ //response .then
                // Code to get data from DB or other source
                return _.find(authors, { id: args.id})
            }
        },
    }
})

module.exports = new GraphQLSchema({ // Defining Schema
    query: RootQuery 
})