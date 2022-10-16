import { queryFetch } from "@utils/queryFetch";

const posts = await queryFetch(`{
  posts(pagination: { start:0, limit: 3}) {
    data {
      attributes {
        featuredIcon {
          data {
            attributes {
              url
              width
              height
              alternativeText
            }
          }
        }
        slug
        date
        titletc
        excerpt
        tags{
          data{
            attributes{
              name
              slug
            }
          }
        }
        category{
          data{
            attributes{
              name
              slug
            }
          }
        }
        content
      }
    }
  }
}
`).then((result) => result.data.posts.data);

export default posts