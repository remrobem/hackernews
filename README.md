

graphql playground

query($id: ID!) {
  link(id: $id) {
    id
    url
    description
  }
}

{
  "id": "link-3"
}