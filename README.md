# GraphQL-React-Mongo

## Technologies
    1. Node

    2. Express

    3. MongoDb

    4. Mongoose

    5. React

    6. GraphQL

    6. Apollo


# Resources
https://youtu.be/ed8SzALpx1Q

# Root Queries
How we get into the graph the entry points

# Notes
    1. When making a query you must use "", not ''
    
    2. Query example of relationship data
        {
            book(id:2){
                name
                genre
                author{
                    name
                    age
                }
            }
        }
# Mutations
 1. Create
 2. Update
 3. Delete
 4. ex: mutation {addAuthor(name:"some name", age:26){name age}}
