

graphql playground

query Links($id: ID!) {
  link(id: $id) {
    id
    url
    description
  }
}

{
  "id": "link-3"
}

mutation UpdateLink($id: ID! $url: String $description: String) {
  updateLink(id: $id, description: $description, url: $url ) {
    id
    description
    url
  }
}

{
  "id": "link-0",
  "url": "google.com",
  "description":"testtest"
}

mutation DeleteLink ($id: ID!) {
  deleteLink(id: $id) {
    id
  }
}

{
  "id": "link-0"
}




mutation {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

mutation {
  post(
    url: "www.graphqlconf.org"
    description: "An awesome GraphQL conference"
  ) {
    id
  }
}

HTTP HEADERS - bearer is th token from signup

{
  "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJjanZmajA2NHU0cXFlMGIzMnJjemFmcThuIiwiaWF0IjoxNTU3MzM4MjgzfQ.rTnemnF4XWkAf4we5tlw-EGU_aWkPg_8Fw1cG_FO7x4"
}


mutation {
  login(
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}


subscription {
  newLink {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
  }
}


subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}


mutation {
  vote(linkId: "cjvmpvt7y2sqw0b99u7d9xkk4") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}


query {
  feed(filter:"QL") {
    id
  	description
    url
    postedBy {
      id
      name
    }
  }
}

query {
  feed(
    first: 1
    skip: 1
  ) {
    id
    description
    url
  }
}

https://www.howtographql.com/graphql-js/4-adding-a-database/

yarn global add prisma

prisma deploy

prisma generate

yarn add prisma-client-lib

yarn add jsonwebtoken bcryptjs
