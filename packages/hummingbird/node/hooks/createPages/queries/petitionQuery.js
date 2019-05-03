module.exports = `
{
  wings {
    petitions {
      edges {
        node {
          id
          title
          slug
          image {
            id
            name
            url
          }
          meta {
            key
            value
          }
          data {
            key
            data
          }
          signatureCount
          intro
          description
          image {
            id
            name
            caption
            alt
            url
          }
          menu {
            id
            name
            items {
              text
              url
              items {
                text
                url
              }
            }
          }
          platforms {
            all {
              title
              description
              imageUrl
            }
            facebook {
              title
              description
              imageUrl
            }
            twitter {
              title
              description
              imageUrl
            }
            whatsapp {
              text
            }
          }
        }
      }
    }
  }
}`;
