import { viteBundler } from "@vuepress/bundler-vite";
import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
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

    // hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "L RMN",
      avatar: "/img/avatar.jpg",
      description: "いつか、私がヒトじゃなくなっても",
      sns: {
        github: "lrmn7",
        // facebook: "lrmn",
        // twitter: "romanromannya",
        email: "lrmn.dev@gmail.com",
        rss: "/rss.xml"
      }
    },

    // header images on home page
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

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
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
        siteURL: "https://lrmn.site",
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
        link: "https://lrmn-vp.site",
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
      Made with ♥ inBOGOR
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
