import rss from "@astrojs/rss";
import { SITE_BRAND, SITE_DESCRIPTION } from "@config";
import { queryFetch } from "@utils/queryFetch";
const posts = await queryFetch(`{
  posts {
    data {
      attributes {
        titletc
        publishedAt
        excerpt
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
        link: `${import.meta.env.SITE}post/${post.attributes.slug}`,
        title: post.attributes.titletc,
        pubDate: post.attributes.publishedAt,
        description: post.attributes.excerpt
      }
    ))
  });
