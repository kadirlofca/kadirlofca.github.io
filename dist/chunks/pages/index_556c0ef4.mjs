/* empty css                           */import { c as createAstro, b as createComponent, r as renderTemplate, j as renderComponent, m as maybeRenderHead, e as addAttribute, F as Fragment, u as unescapeHTML } from '../astro_83a6f33d.mjs';
import 'clsx';
import { g as getCollection, p as presentation, $ as $$Link, a as $$Layout, f as formatDate } from './_slug__b4598a0f.mjs';
import '@astrojs/internal-helpers/path';
import { $ as $$Image } from './README_a569ad41.mjs';

const $$Astro$3 = createAstro("https://www.kadirlofca.com");
const $$ProjectCard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { name, description, slug } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${renderTemplate`${maybeRenderHead()}<a class="group flex w-full cursor-pointer flex-col justify-between gap-itemwide rounded-md border border-kroger-neutral p-4 transition-all duration-200 hover:border-kroger-highlight hover:px-6 md:flex-row md:items-center"${addAttribute(`/projects/${slug}`, "href")} rel="noreferrer"><div class="flex flex-col gap-itemwide md:flex-row md:items-center"><p class="text-kroger-highlight">${name}</p><p>${description}</p></div><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-200"><path d="M5.25 12.75L12.75 5.25" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></svg></a>`}` })}`;
}, "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/components/ProjectCard.astro", void 0);

const theme = {
  colors: {
    primary: "orange",
    blur: {
      top: "orange",
      bottom: "violet"
    }
  }
};

const MAP_COLOR_VARIANT_TO_TEXT = {
  orange: "text-orange-500",
  violet: "text-violet-500",
  red: "text-red-500",
  amber: "text-amber-500",
  yellow: "text-yellow-500",
  lime: "text-lime-500",
  green: "text-green-500",
  emerald: "text-emerald-500",
  teal: "text-violet-500",
  cyan: "text-cyan-500",
  blue: "text-blue-500",
  indigo: "text-indigo-500",
  purple: "text-purple-500",
  fushia: "text-fushia-500",
  pink: "text-pink-500",
  rose: "text-rose-500"
};

function convertAsteriskToStrongTag(str) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<strong class="font-normal ${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.primary]}">$1</strong>`
  );
}

const $$Astro$2 = createAstro("https://www.kadirlofca.com");
const $$Index$2 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$2;
  (await getCollection("posts")).sort(function(first, second) {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
  const projects = (await getCollection("projects")).filter(
    (project) => project.data.isPublished && project.data.isSelected
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-sectionwide"><article class="flex flex-col gap-itemwide md:flex-row-reverse md:justify-end">${renderTemplate`${renderComponent($$result2, "Image", $$Image, { "src": presentation.profile, "class": "w-1/2 max-w-md self-center rounded-full md:ml-auto md:w-1/3", "alt": "Kadir Lofca's profile picture.", "width": "100", "height": "100" })}`}<div class="flex flex-col gap-itemwide"><div class="my-auto"><h1 class="mb-2 text-center text-4xl text-kroger-highlight md:text-left md:text-6xl">${presentation.title}</h1><h2 class="w-auto max-w-[50ch] text-center leading-6 md:text-left">${unescapeHTML(convertAsteriskToStrongTag(presentation.description))}</h2></div></div></article><article class="flex flex-col gap-itemwide"><header class="flex w-full flex-row justify-between gap-itemwide"><h3 class="text-3xl text-kroger-highlight">Selected Projects</h3>${renderComponent($$result2, "Link", $$Link, { "href": "/projects", "label": "More", "target": "_self" })}</header>${projects.length === 0 && renderTemplate`<p>There's supposed to be stuff here 😶</p>`}<section class="flex flex-col gap-itemwide">${projects.length !== 0 && projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "name": project.data.name, "description": project.data.description, "slug": project.slug })}`)}</section></article><!-- <article class="flex flex-col gap-itemwide">
      <header class="flex w-full flex-row justify-between gap-itemwide">
        <h3 class="text-3xl text-kroger-highlight">Latest Posts</h3>
        <Link href="/posts" label="More" target="_self" />
      </header>
      {posts.length === 0 && <p>Soon, stay connected 👀...</p>}

      <section class="flex flex-col gap-itemwide md:flex-row md:flex-wrap">
        {
          posts.length !== 0 &&
            posts
              .slice(0, 2)
              .map(
                (post) =>
                  post.data.isPublished && (
                    <PostCard
                      publishedAt={post.data.publishedAt}
                      title={post.data.title}
                      description={post.data.description}
                      slug={post.slug}
                    />
                  )
              )
        }
      </section>
    </article> --></main>` })}`;
}, "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/index.astro", void 0);

const $$file$2 = "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/index.astro";
const $$url$2 = "";

const index$2 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$2,
  file: $$file$2,
  url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://www.kadirlofca.com");
const $$Index$1 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index$1;
  const projects = (await getCollection("projects")).filter(
    (project) => project.data.isPublished
  );
  const formatTech = (values) => values.replaceAll(",", " \u2022 ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kadir's Projects" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-itemwide"><h1 class="text-5xl leading-relaxed text-kroger-highlight">Projects 🗂️</h1>${projects.length === 0 && renderTemplate`<p>There's supposed to be stuff here 😶</p>`}<article class="flex flex-col gap-itemwide">${projects.map((project) => renderTemplate`<a class="group flex flex-col gap-itemwide border-t border-kroger-highlight py-4 transition-all hover:px-2"${addAttribute(`/projects/${project.slug}`, "href")}><div class="flex w-full items-center justify-between"><h1 class="text-3xl text-kroger-highlight">${project.data.name}</h1><div class="flex flex-row items-center gap-itemwide"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-200 group-hover:-translate-x-2"><path d="M5.25 12.75L12.75 5.25" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><p>${project.data.description}</p><p>${formatTech(project.data.tech)}</p></a>`)}</article></main>` })}`;
}, "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/projects/index.astro", void 0);

const $$file$1 = "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/projects/index.astro";
const $$url$1 = "/projects";

const index$1 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index$1,
  file: $$file$1,
  url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro = createAstro("https://www.kadirlofca.com");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const posts = (await getCollection("posts")).sort(function(first, second) {
    return second.data.publishedAt.getTime() - first.data.publishedAt.getTime();
  });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Kadir's Posts" }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="flex flex-col gap-itemwide"><h1 class="text-5xl leading-relaxed text-kroger-highlight">Posts 📰</h1><article class="flex flex-col gap-itemwide">${posts.map((post) => renderTemplate`<a class="group flex flex-col gap-itemwide border-t border-kroger-highlight py-4 transition-all hover:px-2"${addAttribute(`/posts/${post.slug}`, "href")}><div class="flex w-full items-center justify-between"><h2 class="text-3xl text-kroger-highlight">${post.data.title}</h2><div class="flex flex-row items-center gap-itemwide"><p>${formatDate(post.data.publishedAt)}</p><svg width="18" height="18" viewBox="0 0 18 18" fill="none" class="transition-all duration-200"><path d="M5.25 12.75L12.75 5.25" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.25 5.25H12.75V12.75" stroke="#000000" stroke-linecap="round" stroke-linejoin="round"></path></svg></div></div><p>${post.data.description}</p></a>`)}</article></main>` })}`;
}, "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/posts/index.astro", void 0);

const $$file = "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/pages/posts/index.astro";
const $$url = "/posts";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { index$1 as a, index as b, index$2 as i };
