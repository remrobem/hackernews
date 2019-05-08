

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