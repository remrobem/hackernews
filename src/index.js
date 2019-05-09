const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');
const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Link = require('./resolvers/Link')
const Subscription = require('./resolvers/Subscription')
// 1 - schema

// let links = [{
//     id: 'link-0',
//     url: 'www.howtographql.com',
//     description: 'Fullstack tutorial for GraphQL'
// },
// {
//     id: 'link-1',
//     url: 'www.howtographql.com',
//     description: 'message 2'
// },
// ]
// 2 - implementation of graphql schema. 
//     structure is identical to the structure of the type definition inside typeDefs: Query.info.
// let idCount = links.length;
// const resolvers = {
//     Query: {
//         info: () => 'This is the API of Hackernews Clone',
//         feed: (root, args, context, info) => {
//             return context.prisma.links()
//         },
//         link: (_, args) => {
//             let link = links.filter(link => { return link.id == args.id });
//             return link[0];
//         }
//     },
//     // graphql infers what Link resolver looks like
//     // Link: {
//     //     id: (parent) => parent.id,
//     //     description: (parent) => parent.description,
//     //     url: (parent) => parent.url,
//     // },
//     Mutation: {
//         post: (root, args, context) => {
//             return context.prisma.createLink({
//                 url: args.url,
//                 description: args.description,
//             })
//         },
//         // addLink: (_, args) => {
//         //     const link = {
//         //         // id: `link-${idCount++}`,
//         //         description: args.description,
//         //         url: args.url,
//         //     }
//         //     console.log(`new link: ${JSON.stringify(link)}`)
//         //     links.push(link);
//         //     return link;
//         // },
//         // deleteLink: (_, args) => {
//         //     let index = links.findIndex(link => link.id === args.id)
//         //     links.splice(index, 1);
//         //     return `${args.id}`
//         // },
//         // updateLink: (_, args) => {
//         //     console.log(JSON.stringify(JSON.stringify(args)));
//         //     let index = links.findIndex(link => link.id === args.id);
//         //     if (index < 0) {throw new Error('invalid id provided')}
//         //     if (args.url) {
//         //         links[index].url = args.url;
//         //     }
//         //     if (args.description) {
//         //         links[index].description = args.description;
//         //     }
//         //     return links[index];

//         // }
//     },
// }
const resolvers = {
    Query,
    Mutation,
    Subscription,
    User,
    Link
  }
// 3 - schema and resolvers are bundled and passed to the GraphQLServer which is imported from graphql-yoga
//     tells the server what API operations are accepted and how they should be resolved.
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
      }
    },
  });

server.start(() => console.log(`server is running on http://localhost:4000`))