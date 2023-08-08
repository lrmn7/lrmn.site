// blog/.vuepress/config.ts
import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";
var isProd = process.env.NODE_ENV === "production";
var config_default = defineUserConfig({
  title: "L RMN",
  description: "L RMN - Gagah itu bukan dari merk/brand tetapi dari attitude dan cara anda menghargai jerih payah orang lain.",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16x16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32x32.png`
      }
    ],
    ["meta", { name: "application-name", content: "L RMN" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "L RMN" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    [
      "link",
      { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }
    ],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],
  bundler: viteBundler(),
  theme: gungnirTheme({
    repo: "lrmn7/lrmn.site",
    docsDir: "blog",
    docsBranch: "main",
    personalInfo: {
      name: "L RMN",
      avatar: "/img/avatar.jpg",
      description: "\u3044\u3064\u304B\u3001\u79C1\u304C\u30D2\u30C8\u3058\u3083\u306A\u304F\u306A\u3063\u3066\u3082",
      sns: {
        github: "lrmn7",
        // twitter: "romanromannya",
        email: "lrmn.dev@gmail.com",
        rss: "/rss.xml"
      }
    },
    homeHeaderImages: [
      {
        path: "/img/home-bg/hzd.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/tlou1.jpg",
        mask: "rgba(196, 176, 131, .1)"
      },
      {
        path: "/img/home-bg/tlou2.png",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/got.png",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/sm.png",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/gow.png",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/ride4.png",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/thecrew2.png",
        mask: "rgba(19, 75, 50, .2)"
      },
      {
        path: "/img/home-bg/ac.png"
      }
    ],
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle: "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },
    themePlugins: {
      git: isProd,
      katex: true,
      giscus: {
        repo: "This-is-an-Apple/blog-giscus-comments",
        repoId: "R_kgDOJyHyGw",
        category: "Announcements",
        categoryId: "DIC_kwDOJyHyG84CXXHd",
        darkTheme: "/styles/giscus-dark.css"
      },
      mdPlus: {
        all: true
      },
      ga: "G-NMRL9RCVH9",
      rss: {
        siteURL: "https://lrmn.is-a.fun",
        copyright: "L RMN 2018-2022"
      }
    },
    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "/links/",
        icon: "fa-satellite-dish"
      },
      {
        text: "Gallery",
        link: "https://lrmn-vp.is-a.fun",
        icon: "fa-paw"
      },
      {
        text: "Docs",
        link: "https://lrmn.is-a.dev/daily-dev",
        icon: "fa-book"
      },
      {
        text: "Profile",
        link: "https://lrmn.is-a.dev/",
        icon: "oi-rocket"
      }
    ],
    footer: `
      &copy; <a href="https://lrmn.is-a.dev" target="_blank">L RMN</a> 2023
      <br>
      Made with \u2665 inBOGOR
    `
  }),
  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiYmxvZy8udnVlcHJlc3MvY29uZmlnLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQgeyB2aXRlQnVuZGxlciB9IGZyb20gXCJAdnVlcHJlc3MvYnVuZGxlci12aXRlXCI7XHJcbmltcG9ydCB7IGRlZmluZVVzZXJDb25maWcgfSBmcm9tIFwidnVlcHJlc3NcIjtcclxuaW1wb3J0IHsgZ3VuZ25pclRoZW1lIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWd1bmduaXJcIjtcclxuXHJcbmNvbnN0IGlzUHJvZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xyXG4gIHRpdGxlOiBcIkwgUk1OXCIsXHJcbiAgZGVzY3JpcHRpb246IFwiTCBSTU4gLSBHYWdhaCBpdHUgYnVrYW4gZGFyaSBtZXJrL2JyYW5kIHRldGFwaSBkYXJpIGF0dGl0dWRlIGRhbiBjYXJhIGFuZGEgbWVuZ2hhcmdhaSBqZXJpaCBwYXlhaCBvcmFuZyBsYWluLlwiLFxyXG5cclxuICBoZWFkOiBbXHJcbiAgICBbXHJcbiAgICAgIFwibGlua1wiLFxyXG4gICAgICB7XHJcbiAgICAgICAgcmVsOiBcImljb25cIixcclxuICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgIHNpemVzOiBcIjE2eDE2XCIsXHJcbiAgICAgICAgaHJlZjogYC9pbWcvbG9nby9mYXZpY29uLTE2eDE2LnBuZ2BcclxuICAgICAgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJsaW5rXCIsXHJcbiAgICAgIHtcclxuICAgICAgICByZWw6IFwiaWNvblwiLFxyXG4gICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXHJcbiAgICAgICAgc2l6ZXM6IFwiMzJ4MzJcIixcclxuICAgICAgICBocmVmOiBgL2ltZy9sb2dvL2Zhdmljb24tMzJ4MzIucG5nYFxyXG4gICAgICB9XHJcbiAgICBdLFxyXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwiYXBwbGljYXRpb24tbmFtZVwiLCBjb250ZW50OiBcIkwgUk1OXCIgfV0sXHJcbiAgICBbXCJtZXRhXCIsIHsgbmFtZTogXCJhcHBsZS1tb2JpbGUtd2ViLWFwcC10aXRsZVwiLCBjb250ZW50OiBcIkwgUk1OXCIgfV0sXHJcbiAgICBbXHJcbiAgICAgIFwibWV0YVwiLFxyXG4gICAgICB7IG5hbWU6IFwiYXBwbGUtbW9iaWxlLXdlYi1hcHAtc3RhdHVzLWJhci1zdHlsZVwiLCBjb250ZW50OiBcImJsYWNrXCIgfVxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgXCJsaW5rXCIsXHJcbiAgICAgIHsgcmVsOiBcImFwcGxlLXRvdWNoLWljb25cIiwgaHJlZjogYC9pbWcvbG9nby9hcHBsZS10b3VjaC1pY29uLnBuZ2AgfVxyXG4gICAgXSxcclxuICAgIFtcIm1ldGFcIiwgeyBuYW1lOiBcInRoZW1lLWNvbG9yXCIsIGNvbnRlbnQ6IFwiIzM3N2JiNVwiIH1dLFxyXG4gICAgW1wibWV0YVwiLCB7IG5hbWU6IFwibXNhcHBsaWNhdGlvbi1UaWxlQ29sb3JcIiwgY29udGVudDogXCIjMzc3YmI1XCIgfV1cclxuICBdLFxyXG5cclxuICBidW5kbGVyOiB2aXRlQnVuZGxlcigpLFxyXG5cclxuICB0aGVtZTogZ3VuZ25pclRoZW1lKHtcclxuICAgIHJlcG86IFwibHJtbjcvZGFpbHktZGV2XCIsXHJcbiAgICBkb2NzRGlyOiBcImJsb2dcIixcclxuICAgIGRvY3NCcmFuY2g6IFwibWFpblwiLFxyXG5cclxuICAgIC8vIGhpdG9rb3RvOiBcImh0dHBzOi8vdjEuaGl0b2tvdG8uY24/Yz1pXCIsIC8vIGVuYWJsZSBoaXRva290byAoXHU0RTAwXHU4QTAwKSBvciBub3Q/XHJcblxyXG4gICAgLy8gcGVyc29uYWwgaW5mb3JtYXRpb25cclxuICAgIHBlcnNvbmFsSW5mbzoge1xyXG4gICAgICBuYW1lOiBcIkwgUk1OXCIsXHJcbiAgICAgIGF2YXRhcjogXCIvaW1nL2F2YXRhci5qcGdcIixcclxuICAgICAgZGVzY3JpcHRpb246IFwiXHUzMDQ0XHUzMDY0XHUzMDRCXHUzMDAxXHU3OUMxXHUzMDRDXHUzMEQyXHUzMEM4XHUzMDU4XHUzMDgzXHUzMDZBXHUzMDRGXHUzMDZBXHUzMDYzXHUzMDY2XHUzMDgyXCIsXHJcbiAgICAgIHNuczoge1xyXG4gICAgICAgIGdpdGh1YjogXCJscm1uN1wiLFxyXG4gICAgICAgIC8vIGZhY2Vib29rOiBcImxybW5cIixcclxuICAgICAgICB0d2l0dGVyOiBcInJvbWFucm9tYW5ueWFcIixcclxuICAgICAgICBlbWFpbDogXCJscm1uLmRldkBnbWFpbC5jb21cIixcclxuICAgICAgICByc3M6IFwiL3Jzcy54bWxcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGhlYWRlciBpbWFnZXMgb24gaG9tZSBwYWdlXHJcbiAgICBob21lSGVhZGVySW1hZ2VzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9pbWcvaG9tZS1iZy9oemQuanBnXCIsXHJcbiAgICAgICAgbWFzazogXCJyZ2JhKDQwLCA1NywgMTAxLCAuNClcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvaW1nL2hvbWUtYmcvdGxvdTEuanBnXCIsXHJcbiAgICAgICAgbWFzazogXCJyZ2JhKDE5NiwgMTc2LCAxMzEsIC4xKVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9pbWcvaG9tZS1iZy90bG91Mi5wbmdcIixcclxuICAgICAgICBtYXNrOiBcInJnYmEoNjgsIDc0LCA4MywgLjEpXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2ltZy9ob21lLWJnL2dvdC5wbmdcIixcclxuICAgICAgICBtYXNrOiBcInJnYmEoMTksIDc1LCA1MCwgLjIpXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2ltZy9ob21lLWJnL3NtLnBuZ1wiLFxyXG4gICAgICAgIG1hc2s6IFwicmdiYSgxOSwgNzUsIDUwLCAuMilcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvaW1nL2hvbWUtYmcvZ293LnBuZ1wiLFxyXG4gICAgICAgIG1hc2s6IFwicmdiYSgxOSwgNzUsIDUwLCAuMilcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogXCIvaW1nL2hvbWUtYmcvcmlkZTQucG5nXCIsXHJcbiAgICAgICAgbWFzazogXCJyZ2JhKDE5LCA3NSwgNTAsIC4yKVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiBcIi9pbWcvaG9tZS1iZy90aGVjcmV3Mi5wbmdcIixcclxuICAgICAgICBtYXNrOiBcInJnYmEoMTksIDc1LCA1MCwgLjIpXCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6IFwiL2ltZy9ob21lLWJnL2FjLnBuZ1wiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgLy8gb3RoZXIgcGFnZXNcclxuICAgIHBhZ2VzOiB7XHJcbiAgICAgIHRhZ3M6IHtcclxuICAgICAgICBzdWJ0aXRsZTogXCJCbGFjayBTaGVlcCBXYWxsXCIsXHJcbiAgICAgICAgYmdJbWFnZToge1xyXG4gICAgICAgICAgcGF0aDogXCIvaW1nL3BhZ2VzL3RhZ3MuanBnXCIsXHJcbiAgICAgICAgICBtYXNrOiBcInJnYmEoMjExLCAxMzYsIDM3LCAuNSlcIlxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbGlua3M6IHtcclxuICAgICAgICBzdWJ0aXRsZTpcclxuICAgICAgICAgIFwiV2hlbiB5b3UgYXJlIGxvb2tpbmcgYXQgdGhlIHN0YXJzLCBwbGVhc2UgcHV0IHRoZSBicmlnaHRlc3Qgc3RhciBzaGluaW5nIG5pZ2h0IHNreSBhcyBteSBzb3VsLlwiLFxyXG4gICAgICAgIGJnSW1hZ2U6IHtcclxuICAgICAgICAgIHBhdGg6IFwiL2ltZy9wYWdlcy9saW5rcy5qcGdcIixcclxuICAgICAgICAgIG1hc2s6IFwicmdiYSg2NCwgMTE4LCAxOTAsIDAuNSlcIlxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICB0aGVtZVBsdWdpbnM6IHtcclxuICAgICAgLy8gb25seSBlbmFibGUgZ2l0IHBsdWdpbiBpbiBwcm9kdWN0aW9uIG1vZGVcclxuICAgICAgZ2l0OiBpc1Byb2QsXHJcbiAgICAgIGthdGV4OiB0cnVlLFxyXG4gICAgICBnaXNjdXM6IHtcclxuICAgICAgICByZXBvOiBcIlRoaXMtaXMtYW4tQXBwbGUvYmxvZy1naXNjdXMtY29tbWVudHNcIixcclxuICAgICAgICByZXBvSWQ6IFwiUl9rZ0RPSnlIeUd3XCIsXHJcbiAgICAgICAgY2F0ZWdvcnk6IFwiQW5ub3VuY2VtZW50c1wiLFxyXG4gICAgICAgIGNhdGVnb3J5SWQ6IFwiRElDX2t3RE9KeUh5Rzg0Q1hYSGRcIixcclxuICAgICAgICBkYXJrVGhlbWU6IFwiL3N0eWxlcy9naXNjdXMtZGFyay5jc3NcIlxyXG5cclxuICAgICAgfSxcclxuICAgICAgbWRQbHVzOiB7XHJcbiAgICAgICAgYWxsOiB0cnVlXHJcbiAgICAgIH0sXHJcbiAgICAgIGdhOiBcIkctTk1STDlSQ1ZIOVwiLFxyXG4gICAgICByc3M6IHtcclxuICAgICAgICBzaXRlVVJMOiBcImh0dHBzOi8vbHJtbi5pcy1hLmZ1blwiLFxyXG4gICAgICAgIGNvcHlyaWdodDogXCJMIFJNTiAyMDE4LTIwMjJcIlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIG5hdmJhcjogW1xyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJIb21lXCIsXHJcbiAgICAgICAgbGluazogXCIvXCIsXHJcbiAgICAgICAgaWNvbjogXCJmYS1mb3J0LWF3ZXNvbWVcIlxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgdGV4dDogXCJUYWdzXCIsXHJcbiAgICAgICAgbGluazogXCIvdGFncy9cIixcclxuICAgICAgICBpY29uOiBcImZhLXRhZ1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkxpbmtzXCIsXHJcbiAgICAgICAgbGluazogXCIvbGlua3MvXCIsXHJcbiAgICAgICAgaWNvbjogXCJmYS1zYXRlbGxpdGUtZGlzaFwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIkdhbGxlcnlcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbHJtbi12cC5pcy1hLmZ1blwiLFxyXG4gICAgICAgIGljb246IFwiZmEtcGF3XCJcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHRleHQ6IFwiRG9jc1wiLFxyXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9scm1uLmlzLWEuZGV2L2RhaWx5LWRldlwiLFxyXG4gICAgICAgIGljb246IFwiZmEtYm9va1wiXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICB0ZXh0OiBcIlByb2ZpbGVcIixcclxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vbHJtbi5pcy1hLmRldi9cIixcclxuICAgICAgICBpY29uOiBcIm9pLXJvY2tldFwiXHJcbiAgICAgIH1cclxuICAgIF0sXHJcblxyXG4gICAgZm9vdGVyOiBgXHJcbiAgICAgICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9scm1uLmlzLWEuZGV2XCIgdGFyZ2V0PVwiX2JsYW5rXCI+TCBSTU48L2E+IDIwMjNcclxuICAgICAgPGJyPlxyXG4gICAgICBNYWRlIHdpdGggXHUyNjY1IGluQk9HT1JcclxuICAgIGBcclxuICB9KSxcclxuXHJcbiAgbWFya2Rvd246IHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgbGV2ZWw6IFsyLCAzLCA0LCA1XVxyXG4gICAgfSxcclxuICAgIGNvZGU6IHtcclxuICAgICAgbGluZU51bWJlcnM6IGZhbHNlXHJcbiAgICB9XHJcbiAgfVxyXG59KTtc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
