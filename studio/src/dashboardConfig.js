export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "62aa82f9fbd3a90dd80cd062",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-zi71ccy6",
                  apiId: "83249fc0-9d98-4108-93f4-b4183ec854da",
                },
                {
                  buildHookId: "62aa82fa9d56b50dff3360e8",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-qujuu12c",
                  apiId: "bd235e7f-8297-47ce-80e1-0104d19febdf",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/alishakrany/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-qujuu12c.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
