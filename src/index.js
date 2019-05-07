const { GraphQLServer } = require('graphql-yoga')

// 1 - schema

let links = [{
    id: 'link-0',
    url: 'www.howtographql.com',
    description: 'Fullstack tutorial for GraphQL'
  },
  {
    id: 'link-1',
    url: 'www.howtographql.com',
    description: 'message 2'
  },
]
// 2 - implementation of graphql schema. 
//     structure is identical to the structure of the type definition inside typeDefs: Query.info.
let idCount = links.length;
const resolvers = {
    Query: {
        info: () => 'This is the API of Hackernews Clone',
        feed: () => links,
        link: (_, args) => { 
            let link = links.filter(link => { return link.id == args.id });
            return link[0];   
        }
    },
    // graphql infers what Link resolver looks like
    // Link: {
    //     id: (parent) => parent.id,
    //     description: (parent) => parent.description,
    //     url: (parent) => parent.url,
    // },
    Mutation: {
        addLink: (parent, args) => {
            const link = {
                id: `link-${idCount++}`,
                description: args.description,
                url: args.url,
            }
            console.log(`new link: ${JSON.stringify(link)}`)
            links.push(link);
            return link;
        },
    },
}

// 3 - schema and resolvers are bundled and passed to the GraphQLServer which is imported from graphql-yoga
//     tells the server what API operations are accepted and how they should be resolved.
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
})

server.start( () => console.log(`server is running on http://localhost:4000`))