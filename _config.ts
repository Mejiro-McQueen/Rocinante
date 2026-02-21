import lume from "lume/mod.ts";

const site = lume();
site.add([".jpg", ".gif", ".png"]);
site.add([".css"])


export default site;
