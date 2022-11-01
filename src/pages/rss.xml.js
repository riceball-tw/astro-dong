import rss from "@astrojs/rss";
import { SITE_BRAND, SITE_DESCRIPTION } from "@config";
import { queryFetch } from "@utils/queryFetch";
const posts = await queryFetch(`{
  posts {
    data {
      attributes {
        themeColor
        slug
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
        date
        titletc
        excerpt
        content
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
      }
    }
  }
}
`).then((result) => result.data.posts.data);

export const get = () =>
  rss({
    title: SITE_BRAND,
    description: SITE_DESCRIPTION,
    site: import.meta.env.SITE,
    items: posts.map(post => (
      {
        link: `${import.meta.env.SITE}posts/${post.attributes.slug}`,
        title: post.attributes.titletc,
        pubDate: post.attributes.publishedAt
      }
    ))
  });
