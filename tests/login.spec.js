// import { testNameToKey } from 'jest-snapshot/build/utils';
// import axios from 'axios';
const axios = require('axios')
const testNameToKey = require('jest-snapshot/build/utils')

describe('login', () => {
    test('login', async () => {
        const response = await axios.post('http://localhost:4000', {
            query: `
            feed { 
                id, 
                description,
                url
              }
            `
        });

        const { data } = response;

        expect.data.toMatchObject({
            "data": {
                "feed": [
                  {
                    "id": "cjvfgjt9r5umk0b66oja1b5tt",
                    "description": "Prisma replaces traditional ORMs",
                    "url": "www.prisma.io"
                  },
                  {
                    "id": "cjvfhmqyy4ky00b32t3q6kfrb",
                    "description": "Prisma replaces traditional ORMs",
                    "url": "www.prisma.io"
                  },
                  {
                    "id": "cjvfhn5ez60rf0b66ed9mad2v",
                    "description": "Prisma replaces traditional ORMs",
                    "url": "www.prisma.io"
                  },
                  {
                    "id": "cjvfj3jsv4r6f0b32djnqipth",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgw7ynp4a4g0b73reb5j52l",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgw8hlc360f0b514781z1p2",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgw9zrf4ah60b73qqz1sk1f",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgxbpbb4gke0b73ao27v2fv",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com"
                  },
                  {
                    "id": "cjvgxi44q3bby0b51vj838vrm",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com222"
                  },
                  {
                    "id": "cjvgxjh2o4hqc0b730m9qwv7m",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com222"
                  },
                  {
                    "id": "cjvgxkdol3blp0b51aomj9mf2",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com333"
                  },
                  {
                    "id": "cjvgxlbsm4i0b0b73m66oausw",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com444"
                  },
                  {
                    "id": "cjvgxmy5v4ia60b73vb0ynieb",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com444"
                  },
                  {
                    "id": "cjvgxn1po4iap0b73vx69650m",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com444"
                  },
                  {
                    "id": "cjvgxohp43cm80b513pwwr94a",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com444"
                  },
                  {
                    "id": "cjvgxpme14iq40b73n766o0f6",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com5"
                  },
                  {
                    "id": "cjvgxr9fi3cx20b51ei3b0ozr",
                    "description": "Curated GraphQL content coming to your email inbox every Friday",
                    "url": "www.graphqlweekly.com6"
                  },
                  {
                    "id": "cjvgxscq03d030b51jaguehoc",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgxseex3d0d0b513opslt6x",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgxu48h4jig0b7337rgaim9",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org"
                  },
                  {
                    "id": "cjvgxvjw03dco0b51ek6bxvav",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org7"
                  },
                  {
                    "id": "cjvgxvu0g4jtn0b73euxzgfkj",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org8"
                  },
                  {
                    "id": "cjvgxwfr43dhv0b51hbrzyb8k",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org9"
                  },
                  {
                    "id": "cjvgxxjbu3dnr0b51m75iutps",
                    "description": "An awesome GraphQL conference",
                    "url": "www.graphqlconf.org90"
                  }
                ]
              }  
                  
                
              
        })

    })
})