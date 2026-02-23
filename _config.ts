import lume from "lume/mod.ts";
import brotli from "lume/plugins/brotli.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import nav from "lume/plugins/nav.ts";

const site = lume();
site.add([".jpg", ".gif", ".png", ".svg"]);
site.add([".css"])
site.add([".ts"])

site.use(brotli());
site.use(minifyHTML(/* Options */));
site.use(nav());

export default site;
