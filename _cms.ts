import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.upload("link_icons", "src:files/link_icons");

cms.document("Homepage", "src:index.md", [
  "layout: hidden",
  "title: text",
  "description: textarea",
  "content: markdown",
]);

cms.collection({
  name: "dashboards",
  description: "To create, edit or delete link dashboards",
  store: "src:pages/dashboards/*.md",
  fields: [
        {
          name: "title",
          label: "Page title",
          type: "text",
        },
	{
          name: "layout",
          label: "layout",
          type: "hidden",
	  value: "layouts/dashboard.vto"
        },	
	  "description: textarea",
  	  "content: markdown",
        {
          name: "link_groups",
          label: "Link Groups",
          type: "object-list",
          fields: [
            {
              name: "name",
              label: "Group name",
              type: "text",
            },
	    {
              name: "description",
              label: "Group Description",
              type: "textarea",
            },
            {
              name: "links",
              label: "Links",
              type: "object-list",
              fields: [
                { name: "title", type: "text" },
                { name: "url", type: "url" },
                { name: "description", type: "text" },
                { name: "icon", type: "file", upload: "link_icons"},
              ],
            },
          ],
        },
      ],
});


export default cms;
