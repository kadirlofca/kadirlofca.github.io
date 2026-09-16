import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteTitle, siteDescription } from "../data/site.json";

export async function GET(context) {
  const posts = await getCollection("posts", ({ data }) => data.published);
  const sorted = posts.sort((a, b) => b.data.date - a.data.date);
  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: sorted.map((post) => ({
      title: post.data.title,
      pubDate: post.data.date,
      description: post.data.descriptionHead + post.data.descriptionTail,
      link: `/posts/${post.id}/`,
    })),
  });
}
