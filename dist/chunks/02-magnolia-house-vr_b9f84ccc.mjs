import { b as createComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML, s as spreadAttributes } from './astro_83a6f33d.mjs';
import '@astrojs/internal-helpers/path';
import './pages/README_a569ad41.mjs';
import 'clsx';
import 'html-escaper';
/* empty css                          */
const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="([^"]+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>Lorem markdownum nunc <em>adfuit</em> fecisse, <code>quae pectus</code>, quod seu mortale suo\nMinerva iussit obortas. Favilla victa; alarum signis barbara, nec <em>sibi dentes</em>\nhostes?</p>\n<h2 id=\"corporibus-leucon\">Corporibus Leucon</h2>\n<p>Quaeque viridis, pariter possit. Velatus Thetis, ab Buten, in et ite positis\nannis ut Troasque altaque. Ancaeus convertit conscia Phinea petis. Dum rapto\nfameque quas: hostis: et exiguo exire materiaque sit non, numinis unguibus fide.\nPopulis in tinxi <strong>nisi</strong> rura deos quo natus in cervice spretis, vulnera\npictae, vatibus.</p>\n<blockquote>\n<p>Illi tenebras si vultum suae. Matrem iam: iniqua adire, tetigere meque,\ncessant, gerebat.</p>\n</blockquote>\n<h2 id=\"montes-ignarus-precor-rogabam-primus-ridet-sanguine\">Montes ignarus precor rogabam primus ridet sanguine</h2>\n<p>In vir indefessus et patrios veniam. Fuit fecere nymphae putri tumebat Cyparisse\ndomus, ad artus vitta herba? Et gaudet pressum aeterna animam. Miratur tamen ad\nfrontem Hercule nam captivarumque medio tenet obstantia pulsisque adimit bella\n<em>pthiam mirantur ne</em>.</p>\n<blockquote>\n<p>Lacertis et nomenque oracla exstabat: genitor nitor! Fluctus habes extinctum.\nHunc utero iussa ora neque quae trunca tenuit coniciunt passis viro latratu\nnepotum, spes. Et pendet mittor si expellam retia Achivis Aesonius cuius;\npressit exstinctique rogum enim, percutit potenti; quid longa. Nostra animaque\ngenetrice viae, quam virus sermone in videri.</p>\n</blockquote>\n<h2 id=\"rapit-harundine-vana\">Rapit harundine vana</h2>\n<p>Noctis et et carpis corpus amplexus; imagine indignanda pedum sospes; cornua\nsuper <strong>et simus</strong>. Emissi bellaque dedit, ipse suis Romanique sit regia est\nvirisque verum: <em>parentum omen</em>. Simul adest quam dat inanes verterat ab quies,\nvisent melliferarum vestibus dolore.</p>\n<p>Vos illo in habet, ipse est suo fuit, solidissima invecta moverent <a href=\"http://infelixlucina.net/mutati\">si</a> pericula\nea pelle te quatiens proditus. Requiemque nec et fruticumque destringere\ndivulsaque <a href=\"http://heu.io/\">multae requirit primi</a> supposita, turbatusque lacus, quondam;\nhectora pendebat verba. Magni Euagrum arcus sequentis vidi: qui Meropisque\nadplicat relinquentur inter, si pete. Magna constitit ore rediit et parentis\npomaria lumina seque aura.</p>");

				const frontmatter = {"name":"Magnolia House VR 🏠","description":"","tech":"HTML & CSS, JavaScript, Astro","slug":"magnolia-house-vr","isPublished":false,"isSelected":true};
				const file = "C:/Users/kadir/OneDrive/Documents/My Websites/kadirlofca.github.io/src/content/projects/02-magnolia-house-vr.md";
				const url = undefined;
				function rawContent() {
					return "\n\nLorem markdownum nunc _adfuit_ fecisse, `quae pectus`, quod seu mortale suo\nMinerva iussit obortas. Favilla victa; alarum signis barbara, nec _sibi dentes_\nhostes?\n\n## Corporibus Leucon\n\nQuaeque viridis, pariter possit. Velatus Thetis, ab Buten, in et ite positis\nannis ut Troasque altaque. Ancaeus convertit conscia Phinea petis. Dum rapto\nfameque quas: hostis: et exiguo exire materiaque sit non, numinis unguibus fide.\nPopulis in tinxi **nisi** rura deos quo natus in cervice spretis, vulnera\npictae, vatibus.\n\n> Illi tenebras si vultum suae. Matrem iam: iniqua adire, tetigere meque,\n> cessant, gerebat.\n\n## Montes ignarus precor rogabam primus ridet sanguine\n\nIn vir indefessus et patrios veniam. Fuit fecere nymphae putri tumebat Cyparisse\ndomus, ad artus vitta herba? Et gaudet pressum aeterna animam. Miratur tamen ad\nfrontem Hercule nam captivarumque medio tenet obstantia pulsisque adimit bella\n_pthiam mirantur ne_.\n\n> Lacertis et nomenque oracla exstabat: genitor nitor! Fluctus habes extinctum.\n> Hunc utero iussa ora neque quae trunca tenuit coniciunt passis viro latratu\n> nepotum, spes. Et pendet mittor si expellam retia Achivis Aesonius cuius;\n> pressit exstinctique rogum enim, percutit potenti; quid longa. Nostra animaque\n> genetrice viae, quam virus sermone in videri.\n\n## Rapit harundine vana\n\nNoctis et et carpis corpus amplexus; imagine indignanda pedum sospes; cornua\nsuper **et simus**. Emissi bellaque dedit, ipse suis Romanique sit regia est\nvirisque verum: _parentum omen_. Simul adest quam dat inanes verterat ab quies,\nvisent melliferarum vestibus dolore.\n\nVos illo in habet, ipse est suo fuit, solidissima invecta moverent [si] pericula\nea pelle te quatiens proditus. Requiemque nec et fruticumque destringere\ndivulsaque [multae requirit primi] supposita, turbatusque lacus, quondam;\nhectora pendebat verba. Magni Euagrum arcus sequentis vidi: qui Meropisque\nadplicat relinquentur inter, si pete. Magna constitit ore rediit et parentis\npomaria lumina seque aura.\n\n[multae requirit primi]: http://heu.io/\n[si]: http://infelixlucina.net/mutati\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [{"depth":2,"slug":"corporibus-leucon","text":"Corporibus Leucon"},{"depth":2,"slug":"montes-ignarus-precor-rogabam-primus-ridet-sanguine","text":"Montes ignarus precor rogabam primus ridet sanguine"},{"depth":2,"slug":"rapit-harundine-vana","text":"Rapit harundine vana"}];
				}

				const Content = createComponent((result, _props, slots) => {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;

					return renderTemplate`${maybeRenderHead()}${unescapeHTML(html)}`;
				});

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
