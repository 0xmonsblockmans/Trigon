(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    5557: function (e, t, a) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return a(7720);
        },
      ]);
    },
    7720: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return qe;
          },
        });
      var i = a(5893),
        s = a(3854),
        n = function (e) {
          var t = e.label,
            a = e.content,
            n = e.id;
          return (0, i.jsxs)("article", {
            className: "accordion",
            children: [
              (0, i.jsx)("input", {
                type: "checkbox",
                id: "toggle-".concat(n),
                className: "accordion__toggle",
              }),
              (0, i.jsxs)("label", {
                htmlFor: "toggle-".concat(n),
                className: "accordion__label",
                children: [
                  (0, i.jsx)("span", { children: t }),
                  (0, i.jsx)(s.MOd, { className: "accordion__chevron" }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "accordion__content",
                children:
                  "[object Array]" === Object.prototype.toString.call(a)
                    ? a.map(function (e, t) {
                        return (0, i.jsx)("p", { children: e }, t);
                      })
                    : (0, i.jsx)("p", { children: a }),
              }),
            ],
          });
        },
        r = function (e) {
          var t = e.children;
          return (0, i.jsx)("main", {
            className: "blur padding-x",
            children: t,
          });
        },
        o = function (e) {
          var t = e.type,
            a = e.h,
            s = e.w,
            n = e.color;
          return (0, i.jsx)("div", {
            className: "divider ".concat(t),
            style: { height: a, width: s, color: n },
          });
        },
        l = a(8642),
        c = a(5675),
        d = a.n(c);
      function h(e, t, a) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: a,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = a),
          e
        );
      }
      function m(e, t) {
        if (null == e) return {};
        var a,
          i,
          s = (function (e, t) {
            if (null == e) return {};
            var a,
              i,
              s = {},
              n = Object.keys(e);
            for (i = 0; i < n.length; i++)
              (a = n[i]), t.indexOf(a) >= 0 || (s[a] = e[a]);
            return s;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          for (i = 0; i < n.length; i++)
            (a = n[i]),
              t.indexOf(a) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, a) &&
                  (s[a] = e[a]));
        }
        return s;
      }
      var u = function (e) {
          var t = e.eclipse,
            a = m(e, ["eclipse"]);
          return (0, i.jsx)(
            l.E.figure,
            (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var a = null != arguments[t] ? arguments[t] : {},
                  i = Object.keys(a);
                "function" === typeof Object.getOwnPropertySymbols &&
                  (i = i.concat(
                    Object.getOwnPropertySymbols(a).filter(function (e) {
                      return Object.getOwnPropertyDescriptor(a, e).enumerable;
                    })
                  )),
                  i.forEach(function (t) {
                    h(e, t, a[t]);
                  });
              }
              return e;
            })({ className: "eclipse" }, a, {
              children: (0, i.jsx)(d(), { src: t, alt: "" }),
            })
          );
        },
        p = a(1664),
        x = a.n(p),
        g = {
          src: "./_next/static/media/optimism.84d43cc1.svg",
          height: 28,
          width: 200,
        },
        f = {
          src: "./_next/static/media/eclipse_small_sky.582a4f3d.svg",
          height: 219,
          width: 219,
        },
        j = {
          src: "./_next/static/media/eclipse_small_green.79cb5038.svg",
          height: 154,
          width: 154,
        },
        b = {
          src: "./_next/static/media/eclipse_medium_pink.0520ad29.svg",
          height: 334,
          width: 334,
        },
        v = {
          src: "./_next/static/media/eclipse_large_purple.4362b5e3.svg",
          height: 397,
          width: 397,
        },
        k = {
          src: "./_next/static/media/eclipse_large_orange.52b3e9f2.svg",
          height: 442,
          width: 442,
        },
        y = {
          src: "./_next/static/media/eclipse_small_dark.f40f79f3.svg",
          height: 326,
          width: 326,
        },
        _ = {
          src: "./_next/static/media/eclipse_medium_dark.cec7b159.svg",
          height: 705,
          width: 705,
        },
        w = {
          src: "./_next/static/media/eclipse_large_dark.456ec69a.svg",
          height: 861,
          width: 861,
        },
        N = {
          src: "./_next/static/media/audit.e2f6d3f8.svg",
          height: 455,
          width: 461,
        },
        A = {
          src: "./_next/static/media/charts.8afeea18.svg",
          height: 436,
          width: 441,
        },
        O = {
          src: "./_next/static/media/coin-TrigonAI.2b66549e.svg",
          height: 411,
          width: 416,
        },
        E = {
          src: "./_next/static/media/coins-TrigonAI.43cb9a94.svg",
          height: 372,
          width: 492,
        },
        K = {
          src: "./_next/static/media/circulating-supply.01772284.svg",
          height: 311,
          width: 311,
        },
        R = {
          src: "./_next/static/media/coins-stash.5797917c.svg",
          height: 379,
          width: 379,
        },
        D = {
          src: "./_next/static/media/gold-lock.41313060.svg",
          height: 292,
          width: 292,
        },
        M = {
          src: "./_next/static/media/Scene_BluePurpleGold_Farming.0116b9e4.svg",
          height: 276,
          width: 276,
        },
        C = {
          src: "./_next/static/media/Scene_BluePurpleGold_Trading.0039d7ec.svg",
          height: 321,
          width: 321,
        },
        P = {
          src: "./_next/static/media/Scene_BluePurpleGold_NoLimits.7773e4e5.svg",
          height: 269,
          width: 269,
        },
        F = {
          src: "./_next/static/media/metamask-logo.d6a1cdb7.svg",
          height: 240,
          width: 256,
        },
        T = {
          src: "./_next/static/media/arbitrum-logo.dcb3ce42.svg",
          height: 24,
          width: 24,
        },
        I = {
          src: "./_next/static/media/optimism-logo.e3397529.svg",
          height: 30,
          width: 30,
        },
        S = {
          src: "./_next/static/media/polygon-logo.10b7e75c.svg",
          height: 60,
          width: 60,
        },
        U = {
          src: "./_next/static/media/logo.ed4bd020.svg",
          height: 53,
          width: 53,
        },
        L = function (e) {
          var t = e.path;
          return (0, i.jsx)(x(), {
            href: t,
            children: (0, i.jsxs)("div", {
              className: "logo",
              children: [
                (0, i.jsx)("figure", {
                  className: "logo__img",
                  children: (0, i.jsx)(d(), { src: U, alt: "" }),
                }),
                (0, i.jsxs)("div", {
                  className: "logo__text",
                  children: [
                    (0, i.jsx)("span", { children: "TrigonAI" }),
                  ],
                }),
              ],
            }),
          });
        },
        X = a(7294),
        $ = a(471),
        G = a(6261),
        Y = a(9583),
        B = [
          {
            href: "https://t.me/",
            icon: (0, i.jsx)(Y.AGi, {}),
          },
          {
            href: "https://twitter.com/",
            icon: (0, i.jsx)(Y.fWC, {}),
          },
        ],
        q = function (e) {
          var t = e.isSlider;
          return (0, i.jsx)("div", {
            className: "socials ".concat(t ? "slider" : ""),
            children: B.map(function (e, t) {
              var a = e.href,
                s = e.icon;
              return (0,
              i.jsx)(x(), { href: a, children: (0, i.jsx)("a", { target: "_blank", rel: "noopener noreferrer", children: s }) }, t);
            }),
          });
        },
        H = [
          { icon: "", label: "Token", to: "section-token", isExternal: !1 },
          {
            icon: "",
            label: "BUIDL Plan",
            to: "section-roadmap",
            isExternal: !1,
          },
          {
            icon: "",
            label: "About",
            to: "section-fundamentals",
            isExternal: !1,
          },
          { icon: "", label: "FAQ", to: "section-faq", isExternal: !1 },
        ],
        V = [
          {
            label: "Launch Dapp",
            to: "https://app.trigonai.vip/",
            isExternal: !0,
            className: "btn btn-solid",
          },
        ],
        z = function () {
          var e = (0, X.useState)(!1),
            t = e[0],
            a = e[1];
          return (0, i.jsxs)("header", {
            className: "padding-x",
            style: { height: "107px", width: "100%" },
            children: [
              (0, i.jsxs)("div", {
                className: "navbar",
                children: [
                  (0, i.jsx)(L, { path: "/" }),
                  (0, i.jsx)(o, { type: "vertical", h: "64.5px" }),
                  (0, i.jsx)("nav", {
                    className: "navbar__nav",
                    children: (0, i.jsx)("ul", {
                      className: "navbar__list",
                      children: H.map(function (e, t) {
                        var a = e.icon,
                          s = e.label,
                          n = e.to;
                        return e.isExternal
                          ? (0, i.jsx)(
                              "li",
                              {
                                className: "navbar__item",
                                children: (0, i.jsx)(x(), {
                                  href: n,
                                  children: (0, i.jsxs)("a", {
                                    href: n,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    children: [a, s],
                                  }),
                                }),
                              },
                              t
                            )
                          : (0, i.jsx)(
                              "li",
                              {
                                className: "navbar__item",
                                children: (0, i.jsxs)(G.rU, {
                                  activeClass: "active",
                                  to: n,
                                  spy: !0,
                                  smooth: !0,
                                  duration: 500,
                                  offset: 50,
                                  children: [a, s],
                                }),
                              },
                              t
                            );
                      }),
                    }),
                  }),
                ],
              }),
              (0, i.jsx)("div", {
                className: "btn-group",
                children: V.map(function (e, t) {
                  var a = e.label,
                    s = e.to,
                    n = e.className;
                  return (0,
                  i.jsx)(x(), { href: s, passHref: !0, children: (0, i.jsx)(l.E.a, { className: n, target: "_blank", rel: "noopener noreferrer", whileHover: { scale: 1.05, transition: { duration: 0.3 } }, whileTap: { scale: 0.9 }, children: a }) }, t);
                }),
              }),
              (0, i.jsx)("div", {
                className: "toggle-menu",
                onClick: function () {
                  return a(!t);
                },
                children: t ? (0, i.jsx)($.Fk5, {}) : (0, i.jsx)($.IlA, {}),
              }),
              t &&
                (0, i.jsxs)("div", {
                  className: "menu",
                  children: [
                    (0, i.jsx)("nav", {
                      className: "navbar__nav",
                      children: (0, i.jsx)("ul", {
                        className: "navbar__list",
                        children: H.map(function (e, t) {
                          var a = e.icon,
                            s = e.label,
                            n = e.to;
                          return e.isExternal
                            ? (0, i.jsx)(
                                "li",
                                {
                                  className: "navbar__item",
                                  children: (0, i.jsx)(x(), {
                                    href: n,
                                    children: (0, i.jsxs)("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: [a, s],
                                    }),
                                  }),
                                },
                                t
                              )
                            : (0, i.jsx)(
                                "li",
                                {
                                  className: "navbar__item",
                                  children: (0, i.jsxs)(G.rU, {
                                    activeClass: "active",
                                    to: n,
                                    spy: !0,
                                    smooth: !0,
                                    duration: 500,
                                    offset: -150,
                                    children: [a, s],
                                  }),
                                },
                                t
                              );
                        }),
                      }),
                    }),
                    (0, i.jsx)("div", {
                      className: "btn-group",
                      children: V.map(function (e, t) {
                        var a = e.label,
                          s = e.to,
                          n = e.className;
                        return (0,
                        i.jsx)(x(), { href: s, children: (0, i.jsx)("a", { className: "".concat(n, " btn-block"), target: "_blank", rel: "noopener noreferrer", children: a }) }, t);
                      }),
                    }),
                    (0, i.jsx)(q, {}),
                  ],
                }),
            ],
          });
        },
        Q = a(9352),
        W = {
          visible: {
            opacity: 1,
            transition: { when: "beforeChildren", staggerChildren: 0.5 },
          },
          hidden: { opacity: 0, transition: { when: "afterChildren" } },
        },
        J = { visible: { opacity: 1 }, hidden: { opacity: 0 } },
        Z = function (e) {
          var t = e.quarter,
            a = t.title,
            s = t.goals,
            n = s.filter(function (e) {
              return !0 === e.status;
            }),
            r = (100 / s.length) * n.length;
          return (0, i.jsxs)("div", {
            className: "quarter",
            children: [
              (0, i.jsx)(ee, { progress: r }),
              (0, i.jsx)("h3", { className: "quarter__title", children: a }),
              (0, i.jsx)(l.E.ul, {
                initial: "hidden",
                animate: "visible",
                variants: W,
                className: "quarter__list",
                children: s.map(function (e, t) {
                  return (0,
                  i.jsxs)(l.E.li, { variants: J, className: "quarter__item", children: [(0, i.jsx)("span", { children: e.status ? (0, i.jsx)(Q.vUq, { className: "goal-done" }) : (0, i.jsx)(Q.o$3, { className: "goal-pending" }) }), (0, i.jsx)("p", { children: e.goal })] }, t);
                }),
              }),
            ],
          });
        },
        ee = function (e) {
          var t = e.progress;
          return (0, i.jsx)("div", {
            className: "status-bar-wrapper",
            children: (0, i.jsx)("div", {
              className: "status-bar",
              style: { width: t + "%" },
            }),
          });
        },
        te = function (e) {
          var t = e.href,
            a = e.logo;
          return (0, i.jsx)(x(), {
            href: t,
            children: (0, i.jsx)("a", {
              className: "tile",
              target: "_blank",
              rel: "noopener noreferrer",
              children: (0, i.jsx)(d(), { src: a, alt: "" }),
            }),
          });
        },
        ae = a(9008),
        ie = a.n(ae);
      function se(e) {
        var t = e.title,
          a = e.description,
          s = e.keywords,
          n = e.author,
          r = e.meta,
          o = [
            { name: "title", content: t },
            { name: "description", content: a },
            { name: "keywords", content: s },
            { name: "robots", content: "index, follow" },
            {
              httpEquiv: "Content-Security-Policy",
              content:
                "default-src * 'self' data: 'unsafe-inline' 'unsafe-eval' *",
            },
            { httpEquiv: "Content-Type", content: "text/html; charset=utf-8" },
            { name: "language", content: "English" },
            { name: "author", content: n },
            { itemProp: "name", content: t },
            { itemProp: "description", content: a },
            { name: "twitter:card", content: "summary" },
            { name: "twitter:title", content: t },
            { name: "twitter:description", content: a },
            { name: "og:title", content: t },
            { name: "og:description", content: a },
            { name: "og:site_name", content: t },
            { name: "og:type", content: "website" },
          ].concat(r);
        return (0, i.jsxs)(ie(), {
          children: [
            (0, i.jsx)("title", { children: t }),
            o.map(function (e, t) {
              return (0,
              i.jsx)("meta", { name: Object.entries(e)[0][1], content: Object.entries(e)[1][1] }, t);
            }),
          ],
        });
      }
      se.defaultProps = {
        title: "TrigonAI Finance | Next Generation DEX Trading",
        description:
          "TrigonAI Finance is the Next Generation DEX Trading, enabling gasless limit trading, liquidity farming",
        keywords:
          "Decentralized Finance, DeFi, DEX, DEX Trading Tools, limit orders, swap, stake, decentralized services, chainlink keepers, gasless limit trading, liquidity farming, uniswap, DAO Governance, blockchain, Ethereum, decentralized applications, Web3 ecosystem, smart contracts, solidity, truffle, hardhat",
        author: "TrigonAI Finance",
        lang: "en",
        meta: [],
      };
      var ne = [
          {
            href: "https://www.dextools.io/app/ether/pair-explorer/0xComingSoon",
            logo: {
              src: "./_next/static/media/dextlogo.742ad871.png",
              height: 50,
              width: 174,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGOU2Hq19cXP38/v2isfUhLiEf/3//8PRgYGNgYGhn8gzCi15XLts19/v9+1U9qrJMwrCVTwAaiAAyjJCsTMAAAbGoB/xc6XAAAAAElFTkSuQmCC",
            },
          },
          {
            href: "https://dexscreener.com/ethereum/0xComingSoon",
            logo: {
              src: "./_next/static/media/dexscreenerlogo.png",
              height: 80,
              width: 313,
              blurDataURL:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAYAAABllJ3tAAAARUlEQVR4nGM8xLDUXLhZTkKrxubzvz9/mZlYmAX+//9/iYGBQQCImRkj678FywsxsNZlcPziZGNkBkpyAyX+APEXIBYGAPGMFJTk3QHUAAAAAElFTkSuQmCC",
            },
          },
          {
            href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xComingSoon&chain=mainnet",
            logo: {
              src: "./_next/static/media/uniswap.baf2cf2e.png",
              height: 240,
              width: 961,
            },
          },
        ],
        ce = function () {
          return (0, i.jsxs)("section", {
            id: "section-brands",
            className: "section-padding",
            children: [
              (0, i.jsxs)("div", {
                className: "brands",
                children: [
                  (0, i.jsx)(l.E.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 1 },
                    children: (0, i.jsx)("h2", {
                      className: "brands__title",
                      children: "As Seen On",
                    }),
                  }),
                  (0, i.jsx)("div", {
                    className: "brands__links",
                    children: ne.map(function (e, t) {
                      var a = e.href,
                        s = e.logo;
                      return (0, i.jsx)(te, { href: a, logo: s }, t);
                    }),
                  }),
                ],
              }),   
            ],
          });
        },
        de = f,
        he = j,
        me = b,
        ue = v,
        pe = k,
        xe = y,
        ge = _,
        fe = w,
        je = function (e) {
          var t = e.children;
          return (0, i.jsxs)("div", {
            className: "background-eclipses",
            children: [
              (0, i.jsx)(u, {
                eclipse: ue,
                animate: { x: [20, 0, 30, 0], y: [30, 0, 20, 0] },
                transition: {
                  x: { yoyo: 1 / 0, duration: 10 },
                  y: { yoyo: 1 / 0, duration: 7, ease: "easeOut" },
                },
              }),
              (0, i.jsx)(u, {
                eclipse: he,
                animate: { scale: 1.3 },
                transition: { duration: 3, yoyo: 1 / 0 },
              }),
              (0, i.jsx)(u, {
                eclipse: pe,
                animate: { rotate: 360 },
                transition: { duration: 5, yoyo: 1 / 0 },
              }),
              (0, i.jsx)(u, {
                eclipse: de,
                animate: { x: [0, 10, 0], y: [0, 10, 0, -10], scale: 1.2 },
                transition: { duration: 5, yoyo: 1 / 0 },
              }),
              (0, i.jsx)(u, {
                eclipse: me,
                animate: { x: [0, 10, 0], y: [0, 10, 0, -10] },
                transition: { duration: 5, yoyo: 1 / 0 },
              }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: fe }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: xe }),
              (0, i.jsx)(u, { eclipse: ge }),
              (0, i.jsx)(u, { eclipse: xe }),
              t,
            ],
          });
        },
        be = [
          {
            label: "What are $TRI tokenomics?",
            content: (0, i.jsxs)(i.Fragment, {
              children: [
                "Initially 100M Trigon tokens were in existence. Liquidity has been deployed to the Uniswap protocol (original Uniswap LP token is\xa0",
                (0, i.jsx)(x(), {
                  href: "https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4",
                  children: (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "burned",
                  }),
                }),
                "), to Arbitrum, Optimism and Polygon to provide layer 2 liquidity. 20M (20%) is added on Gnosis, a multi-signature wallet.",
              ],
            }),
          },
          {
            label: "Is $TRI token a utility token?",
            content: [
              "Yes! $TRI is a utility token as it is used to pay the fee for all Trigon AI limit orders and end-to-end usage of gasless mode (optional feature, coming very soon).",
              "You can also use our swap aggregator, for this you only need to hold ETH in your wallet to cover gasfees. Again use normal or pro-mode to fill out your swap and click swap. Your swap is executed in a heartbeat!",
            ],
          },
          {
            label: "How do I use Trigon AI?",
            content: [
              "Connect your wallet. Depending on whether you wish to use the swap or the limit order feature, you will need $ETH and $TRI in your wallet. The interface is just as straightforward as using Uniswap for example, but with our limit order feature. Use normal or pro-mode to set your limit order and click trade. When the market conditions match your order, Trigon AI will execute the trade automatically.",
            ],
          },
          {
            label:
              "Why and how much $TRI do I have to pay a fee for limit orders?",
            content: (0, i.jsxs)(i.Fragment, {
              children: [
                "The fee is dependent on the current gas fee. The maximum fee is calculated as follows: base fee * gas fee * protocol fee. As you can see, we don\u2019t take the amount that is being traded into consideration. This offers you the opportunity to trade at a very interesting, fixed price. Fixed, as in not depending on your amount traded. We refer to our\xa0",
                (0, i.jsx)(x(), {
                  href: "https://docs.TrigonAI.finance/fundamentals/how-it-works/maximum-service-fee",
                  children: (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "docs",
                  }),
                }),
                "\xa0 for more details on the exact calculation.",
              ],
            }),
          },
          {
            label: "Is the Trigon token code audited?",
            content: [
              "Yes! Trigon token is a non-mintable ERC 20 token audited by OpenZeppelin, MythX and CertiK.",
            ],
          },
          {
            label: "Do I have to own $TRI tokens to use Trigon AI?",
            content: [
              "Yes and no :) If you wish to use only the swap aggregator, you don\u2019t need to own $TRI. However, if you wish to use our limit order feature, you will need $TRI to cover the service fee.",
            ],
          },
          {
            label: "Why do I have to pay a fee for limit orders?",
            content: [
              "TrigonAI requires a fee to cover the cost of the trade processor (ChainLink Keepers). When a trade is processed $TRI is deducted from the protocol user\u2019s balance on the dapp and sent to the trade processor to cover the gas cost. Hence, the $TRI tokens are circulating: DEX Liquidity Pool -> User -> TrigonAI Protocol -> DEX Liquidity Pool.",
            ],
          },
          {
            label: "Is TrigonAI code open-source?",
            content: (0, i.jsxs)(i.Fragment, {
              children: [
                "Yes! TrigonAIs entire codebase is open-sourced and published on\xa0",
                (0, i.jsx)(x(), {
                  href: "https://github.com/TrigonAI-Finance/",
                  children: (0, i.jsx)("a", {
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Github",
                  }),
                }),
                "\xa0 under the MIT and GPL-3.0 license. Anybody can see how it was developed, built and who are the code contributors. Developers are encouraged to submit a PR if they are willing to contribute.",
              ],
            }),
          },
        ],
        ve = function () {
          return (0, i.jsxs)("section", {
            id: "section-faq",
            className: "section-padding",
            children: [
              (0, i.jsx)(l.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 1 },
                children: (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "FAQ",
                }),
              }),
              (0, i.jsx)("div", {
                className: "container faqs",
                children: be.map(function (e, t) {
                  var a = e.label,
                    s = e.content;
                  return (0, i.jsx)(n, { label: a, content: s, id: t }, t);
                }),
              }),
            ],
          });
        },
        ke = function () {
          (0, X.useEffect)(function () {
            var t = setInterval(function () {
              var i,
                s = document.getElementById("badge-button");
              s &&
                (i = s.getBoundingClientRect()).top >= 0 &&
                i.left >= 0 &&
                i.bottom <=
                  (window.innerHeight ||
                    document.documentElement.clientHeight) &&
                i.right <=
                  (window.innerWidth || document.documentElement.clientWidth) &&
                (fetch("".concat(a, "/badge-view"), {
                  method: "POST",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ badge_id: e }),
                }),
                clearInterval(t));
            }, 2e3);
          });
          var e = "d9d9844bd98826d6",
            t = "https://alchemyapi.io/?r=badge:".concat(e),
            a = "https://analytics.alchemyapi.io/analytics";
          return (0, i.jsx)(i.Fragment, {
            children: (0, i.jsx)("a", {
              href: "#",
              children: (0, i.jsx)("img", {
                onClick: function () {
                  return (
                    fetch("".concat(a, "/badge-click"), {
                      method: "POST",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ badge_id: e }),
                    }),
                    void window.open(t, "_blank").focus()
                  );
                },
                id: "badge-button",
                style: { width: "240px", height: "53px" },
                src: "https://static.alchemyapi.io/images/marketing/badge.png",
                alt: "Alchemy Supercharged",
              }),
            }),
          });
        },
        ye = [
          { icon: "", label: "Token", to: "section-token", isExternal: !1 },
          {
            icon: "",
            label: "BUIDL Plan",
            to: "section-roadmap",
            isExternal: !1,
          },
          {
            icon: "",
            label: "About",
            to: "section-fundamentals",
            isExternal: !1,
          },
          { icon: "", label: "FAQ", to: "section-faq", isExternal: !1 },
        ],
        _e = [
        ],
        we = function () {
          var e = new Date().getFullYear();
          return (0, i.jsxs)("footer", {
            className: "footer",
            children: [
              (0, i.jsxs)("div", {
                className: "footer-wide-screen",
                children: [
                  (0, i.jsx)(L, { path: "/" }),
                  (0, i.jsxs)("div", {
                    className: "links",
                    children: [
                      (0, i.jsx)("nav", {
                        className: "navbar__nav",
                        children: (0, i.jsx)("ul", {
                          className: "navbar__list",
                        }),
                      }),
                      (0, i.jsx)(q, {}),
                      (0, i.jsx)("nav", {
                        className: "navbar__nav",
                        children: (0, i.jsx)("ul", {
                          className: "navbar__list",
                          children: _e.map(function (e, t) {
                            var a = e.label,
                              s = e.to;
                            return (0,
                            i.jsx)("li", { className: "navbar__item", children: (0, i.jsx)(x(), { href: s, children: (0, i.jsx)("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: a }) }) }, t);
                          }),
                        }),
                      }),
                    ],
                  }),
                  (0, i.jsx)(o, { type: "horizontal", w: "188px" }),
                  (0, i.jsx)(ke, {}),
                  (0, i.jsxs)("div", {
                    className: "copyright",
                    children: [
                      (0, i.jsxs)("h3", {
                        children: [
                          "Copyright \xa9 ",
                          e,
                          " All rights reserved.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "footer-mobile-screen",
                children: [
                  (0, i.jsx)("nav", {
                    className: "navbar__nav",
                    children: (0, i.jsxs)("ul", {
                      className: "navbar__list",
                      children: [                        
                        _e.map(function (e, t) {
                          var a = e.label,
                            s = e.to;
                          return (0,
                          i.jsx)("li", { className: "navbar__item", children: (0, i.jsx)(x(), { href: s, children: (0, i.jsx)("a", { href: s, target: "_blank", rel: "noopener noreferrer", children: a }) }) }, t);
                        }),
                      ],
                    }),
                  }),
                  (0, i.jsx)(L, { path: "/" }),
                  (0, i.jsx)(q, {}),
                  (0, i.jsx)(o, { type: "horizontal", w: "188px" }),
                  (0, i.jsx)(ke, {}),
                  (0, i.jsxs)("div", {
                    className: "copyright",
                    children: [
                      (0, i.jsxs)("h3", {
                        children: [
                          "Copyright \xa9 ",
                          e,
                          " All rights reserved.",
                        ],
                      }),
                      (0, i.jsxs)("p", {
                        children: [
                          "TrigonAI.Finance is brought to you by",
                          " ",
                          "TrigonAI DAO & Contributors",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Ne = function () {
          return (0, i.jsxs)("section", {
            id: "section-hero",
            className: "hero",
            children: [
              (0, i.jsx)("h1", {
                className: "hero__title",
                children: "Trigon AI",
              }),
              (0, i.jsx)("p", {
                className: "hero__subtitle",
                children:
                  "Makes DEX trading simple, accessible, and affordable on Ethereum L1 and L2\u2019s.",
              }),
              (0, i.jsxs)("div", {
                className: "btn-group",
                children: [
                  (0, i.jsx)(x(), {
                    passHref: !0,
                    href: "https://app.trigonai.vip/",
                    children: (0, i.jsx)(l.E.a, {
                      className: "btn btn-solid",
                      target: "_blank",
                      rel: "noopener noreferrer",
                      whileHover: {
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      },
                      whileTap: { scale: 0.9 },
                      children: "Launch Dapp",
                    }),
                  }),
                  (0, i.jsx)(x(), {
                    passHref: !0,
                    href: "#section-token",
                    children: (0, i.jsx)(l.E.a, {
                      className: "btn btn-outline",
                      whileHover: {
                        scale: 1.05,
                        transition: { duration: 0.3 },
                      },
                      whileTap: { scale: 0.9 },
                      children: "Discover $TRI",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        Ae = M,
        Oe = C,
        Ee = P,
        Ke = function () {
          return (0, i.jsxs)("section", {
            id: "section-fundamentals",
            className: "section-padding",
            children: [
              (0, i.jsx)(l.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 1 },
                children: (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "More On Our Fundamentals",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "cards-wrapper",
                children: [
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: Ae, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Learn about our protocol",
                          }),
                          (0, i.jsx)("span", {
                            className: "card__content",
                            children: (0, i.jsx)("p", {
                              children:
                                "Explore our docs and discover just how TrigonAI works behind the scenes. You will understand how we can get you those juicy deals without slippage, fees or bots! Are you digging for the real deal? Dive into github and check out our open-source code.",
                            }),
                          }),
                          (0, i.jsx)(x(), {
                            href: "https://docs.TrigonAI.finance/",
                            children: (0, i.jsx)("a", {
                              className: "btn btn-solid btn-block",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Let\u2019s go",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: Oe, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Discover the Dapp",
                          }),
                          (0, i.jsx)("span", {
                            className: "card__content",
                            children: (0, i.jsx)("p", {
                              children:
                                "Did you know we have a limit order book and a swap aggregator? Are you curious to see just how beneficial it all is? Launch the dapp and start trading right now!",
                            }),
                          }),
                          (0, i.jsx)(x(), {
                            href: "https://app.TrigonAI.finance/#/limitorder",
                            children: (0, i.jsx)("a", {
                              className: "btn btn-solid btn-block",
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "Let\u2019s go",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: Ee, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Explore our Trigon-E\u2019s",
                          }),
                          (0, i.jsx)("span", {
                            className: "card__content",
                            children: (0, i.jsx)("p", {
                              children:
                                "Apart from the awesome protocol we got running, we also got a wonderful NFT collection that is coming around the corner. Our Trigon-E\u2019s will provide even more benefits to the protocol users and of course have a stunning design. Utility and art, perfectly blended.",
                            }),
                          }),
                          (0, i.jsx)("div", {
                            className: "btn btn-solid btn-block isDisabled",
                            children: "Coming soon",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Re = N,
        De = A,
        Me = O,
        Ce = function () {
          return (0, i.jsxs)("section", {
            id: "section-core-strength",
            className: "section-padding section-core-strength",
            children: [
              (0, i.jsx)(l.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 1 },
                children: (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "Core Strength",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "hero__content",
                children: [
                  (0, i.jsx)("p", {
                    children: "Our innovative dApp brings you:",
                  }),
                  (0, i.jsxs)("ul", {
                    children: [
                      (0, i.jsxs)("li", {
                        children: [
                          (0, i.jsx)("figure", {
                            children: (0, i.jsx)(d(), {
                              src: Me,
                              alt: "",
                              layout: "fixed",
                              width: "32px",
                              height: "32px",
                            }),
                          }),
                          (0, i.jsxs)("p", {
                            children: [
                              "the ",
                              (0, i.jsx)("strong", {
                                children: "best value for your swaps",
                              }),
                              " by comparing multiple Dexs, picking the best rates for you.",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          (0, i.jsx)("figure", {
                            children: (0, i.jsx)(d(), {
                              src: Me,
                              alt: "",
                              layout: "fixed",
                              width: "32px",
                              height: "32px",
                            }),
                          }),
                          (0, i.jsxs)("p", {
                            children: [
                              (0, i.jsx)("strong", {
                                children: "reduced slippage",
                              }),
                              " using multiple pools in our MetaDEX Aggregator, to execute your trade.",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          (0, i.jsx)("figure", {
                            children: (0, i.jsx)(d(), {
                              src: Me,
                              alt: "",
                              layout: "fixed",
                              width: "32px",
                              height: "32px",
                            }),
                          }),
                          (0, i.jsx)("p", {
                            children: (0, i.jsx)("strong", {
                              children:
                                "automatically processed, decentralized limit orders.",
                            }),
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          (0, i.jsx)("figure", {
                            children: (0, i.jsx)(d(), {
                              src: Me,
                              alt: "",
                              layout: "fixed",
                              width: "32px",
                              height: "32px",
                            }),
                          }),
                          (0, i.jsxs)("p", {
                            children: [
                              (0, i.jsx)("strong", {
                                children: "additional LP fees",
                              }),
                              " on your filled limit orders (FELO). Up to 9% depending on volatility of trading pair.",
                            ],
                          }),
                        ],
                      }),
                      (0, i.jsxs)("li", {
                        children: [
                          (0, i.jsx)("figure", {
                            children: (0, i.jsx)(d(), {
                              src: Me,
                              alt: "",
                              layout: "fixed",
                              width: "32px",
                              height: "32px",
                            }),
                          }),
                          (0, i.jsxs)("p", {
                            children: [
                              "Combined, ",
                              (0, i.jsx)("strong", {
                                children:
                                  "TrigonAI\u2019s dApp provides you more",
                              }),
                              ", if not the best value for every trade you make !",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsx)("h3", {
                className: "subtitle",
                children: "These are our core building blocks",
              }),
              (0, i.jsxs)("div", {
                className: "cards-wrapper",
                children: [
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("div", {
                        className: "card__header",
                        children: (0, i.jsx)("figure", {
                          children: (0, i.jsx)(d(), { src: Re, alt: "" }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Secure audited smart contracts",
                          }),
                          (0, i.jsxs)("span", {
                            className: "card__content",
                            children: [
                              "The dapp was audited in multiple iterations in both internal and external testing environments. The external testing was performed by CertiK, Mythx and OpenZeppelin.",
                              (0, i.jsx)("br", {}),
                              (0, i.jsx)("br", {}),
                              "TrigonAI ranked in top 10% on the CertiK leaderboard, with an overall score of 87/100, security scored 88/100 and market & community 82/100.\xa0",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("div", {
                        className: "card__header",
                        children: (0, i.jsx)("figure", {
                          children: (0, i.jsx)(d(), { src: De, alt: "" }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Off-chain keepers at work",
                          }),
                          (0, i.jsxs)("span", {
                            className: "card__content",
                            children: [
                              "The TrigonAI protocol utilizes the Chainlink Keepers to make sure orders are collected as soon as the price target of the limit order is reached. This service is provided off-chain, fully decentralized.",
                              (0, i.jsx)("br", {}),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)("div", {
                    className: "card",
                    children: [
                      (0, i.jsx)("div", {
                        className: "card__header",
                        children: (0, i.jsx)("figure", {
                          children: (0, i.jsx)(d(), { src: Me, alt: "" }),
                        }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__body",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "High utility $TRI token",
                          }),
                          (0, i.jsxs)("span", {
                            className: "card__content",
                            children: [
                              "$TRI is a utility token which is used for paying limit order fees and end-to-end usage of gasless mode (optional feature, coming very soon).",
                              (0, i.jsx)("br", {}),
                              (0, i.jsx)("br", {}),
                              "For every limit order, the TrigonAI protocol user only pays a service fee in $TRI, of the amount traded.",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        Pe = [
          {
            title: "",
            goals: [
              {
                status: !0,
                goal: "Launching the TrigonAI protocol on Ethereum Mainnet, Arbitrum, Optimism, Polygon.",
              },
              { status: !0, goal: "Enabling Gasless limit trading feature." },
              { status: !0, goal: "TrigonAI DAO governance launch" },
              { status: !0, goal: "CEX listing." },
              { status: !0, goal: "Launch perpetual trading." },
              { status: !0, goal: "Launch free gasless swaps on Polygon." },
              {
                status: !1,
                goal: "Deploy TrigonAI v3 - improved UI and new features.",
              },
              { status: !1, goal: "Launch Free Gasless Swaps on Arbitrum." },
            ],
          },
          {
            title: "",
            goals: [
              {
                status: !0,
                goal: "TrigonAI v2 (new features, modern UI).",
              },
              { status: !0, goal: "Create Trigon/OP liquidity pool." },
              { status: !0, goal: "Liquidity mining program for Trigon/OP." },
              {
                status: !0,
                goal: "Adding gasless market swap feature to TrigonAI protocol.",
              },
              { status: !1, goal: "Launch referral program on Optimism." },
              { status: !1, goal: "Gas refund program on Optimism." },
              {
                status: !1,
                goal: "Scale number of TrigonAI`s active contributors.",
              },
              { status: !1, goal: "Integrate Uniswap v4." },
              { status: !1, goal: "Deploy FELO v2." },
            ],
          },
          {
            title: "",
            goals: [
              { status: !1, goal: "Implement fiat on-ramp service." },
              {
                status: !1,
                goal: "Implement cross-chain bridge aggregation solution.",
              },
              { status: !0, goal: "Certik gasless and MetaSwap router audit." },
              { status: !0, goal: "Deploy TrigonAI to Base." },
              {
                status: !1,
                goal: "Deploy gasless to Mainnet, Optimism and Base.",
              },
              { status: !1, goal: "Integrate more swap aggregators." },
              {
                status: !1,
                goal: "Integrate cross-chain swap aggregation solution.",
              },
              { status: !1, goal: "Deploy FELO to BASE." },
              { status: !1, goal: "Deploy $TRI to BASE." },
            ],
          },
        ],
        Fe = function () {
          return (0, i.jsxs)("section", {
            id: "section-roadmap",
            className: "section-padding",
            children: [
              (0, i.jsx)(l.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 1 },
                children: (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "BUIDL Plan",
                }),
              }),
              (0, i.jsxs)("p", {
                className: "buidl-plan",
                children: [
                  "TrigonAI DAO tasks are visible on Dework - the ultimate Web3 project management tool. All tasks can be undertaken by any web3 contributor, and incentivized in $TRI.",
                ],
              }),
              (0, i.jsxs)("div", {
                className: "roadmap container",
                children: [
                  Pe.map(function (e, t) {
                    return (0,
                    i.jsxs)(X.Fragment, { children: [(0, i.jsx)(Z, { quarter: e }), (0, i.jsx)("span", { className: "checkpoint" })] }, t);
                  }),
                  (0, i.jsx)(o, { type: "vertical", h: "58rem", w: "0" }),
                ],
              }),
            ],
          });
        },
        Te = F,
        Ie = T,
        Se = I,
        Ue = S,
        Le = O,
        Xe = E,
        $e = K,
        Ge = R,
        Ye = D,
        Be = function () {
          return (0, i.jsxs)("section", {
            id: "section-token",
            className: "section-padding",
            children: [
              (0, i.jsx)(l.E.div, {
                initial: { opacity: 0 },
                whileInView: { opacity: 1 },
                transition: { duration: 1 },
                children: (0, i.jsx)("h2", {
                  className: "section-title",
                  children: "Protocol Token",
                }),
              }),
              (0, i.jsxs)("div", {
                className: "token",
                children: [
                  (0, i.jsx)(l.E.div, {
                    initial: { x: -100 },
                    whileInView: { x: 0 },
                    transition: { duration: 1 },
                    className: "motion-div",
                    children: (0, i.jsx)("figure", {
                      className: "token__figure",
                      children: (0, i.jsx)(d(), {
                        src: Xe,
                        alt: "Coins",
                        className: "token__img",
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "token__content",
                    children: [
                      (0, i.jsx)("h3", { children: "What is $TRI?" }),
                      (0, i.jsxs)("p", {
                        children: [
                          "$TRI is the utility and governance token of the TrigonAI protocol. It is a non-mintable ERC20 token deployed on Ethereum with a fixed total supply of 100 million tokens. The tokenomic model of $TRI is deflationary by design since the tokens are being burnt.\xa0",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          "$TRI is the token that pays the service fee to unlock the limit order feature of TrigonAI protocol. This means that by using Trigon tokens, you not only get access to cost efficient limit orders on the DEX, but you will also get LP fees on every trade thanks to the innovative approach to providing liquidity.",
                          (0, i.jsx)("br", {}),
                          (0, i.jsx)("br", {}),
                          "$TRI token is also used as a governance token within the TrigonAI DAO.",
                          (0, i.jsx)("br", {}),
                          "TrigonAI DAO has the possibility to add more utilities for the Trigon token through governance proposals.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "cards-wrapper",
                children: [
                  (0, i.jsxs)(l.E.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 1 },
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: $e, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__overlay",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Circulating Supply",
                          }),
                          (0, i.jsxs)("span", {
                            className: "card__content",
                            children: [
                              (0, i.jsx)("p", {
                                children:
                                  "Initially 60 million tokens were fair lauched on Uniswap V3 mainnet. 10 million were fair launched on Arbitrum and another 10 million on Optimism.",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "A buyback from the DAO treasury was performed at the end of Q1 2022, for a total value of 2 million $TRI.",
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "LP ownership token is burned, meaning $TRI is burned with every sell trade.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)(l.E.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 1 },
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: Ge, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__overlay",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Vesting",
                          }),
                          (0, i.jsx)("span", {
                            className: "card__content",
                            children: (0, i.jsx)("p", {
                              children:
                                "12.000.000 $TRI have been locked on Unicrypt, or 12% of the total supply, with an average vesting of 2 years and 3 months. This vesting occurred in March 2022. Half of the vested tokens are allocated to the DAO treasury.",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, i.jsxs)(l.E.div, {
                    initial: { opacity: 0 },
                    whileInView: { opacity: 1 },
                    transition: { duration: 1 },
                    className: "card",
                    children: [
                      (0, i.jsx)("figure", {
                        children: (0, i.jsx)(d(), { src: Ye, alt: "" }),
                      }),
                      (0, i.jsxs)("div", {
                        className: "card__overlay",
                        children: [
                          (0, i.jsx)("span", {
                            className: "card__title",
                            children: "Increased security",
                          }),
                          (0, i.jsxs)("span", {
                            className: "card__content",
                            children: [
                              (0, i.jsxs)("p", {
                                children: [
                                  "The proof of liquidity (position) was burnt, for better security and in order to prevent rug pull hacks. You can consult the transaction \xa0",
                                  (0, i.jsx)(x(), {
                                    href: "https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4",
                                    children: (0, i.jsx)("a", {
                                      target: "_blank",
                                      rel: "noopener noreferrer",
                                      children: "here.",
                                    }),
                                  }),
                                ],
                              }),
                              (0, i.jsx)("p", {
                                children:
                                  "7 million $TRI tokens are kept in the DAO treasury, managed by the TrigonAI DAO.",
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, i.jsxs)("div", {
                className: "token",
                children: [
                  (0, i.jsx)(l.E.div, {
                    initial: { x: -300 },
                    whileInView: {
                      x: 0,
                      scale: [1, 2, 2, 1, 1],
                      rotate: [0, 0, 150, 200, 0],
                      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                    },
                    transition: { duration: 1 },
                    className: "motion-div",
                    children: (0, i.jsx)("figure", {
                      className: "token__figure",
                      children: (0, i.jsx)(d(), {
                        src: Le,
                        alt: "Coins",
                        className: "token__img",
                      }),
                    }),
                  }),
                  (0, i.jsxs)("div", {
                    className: "token__content",
                    children: [
                      (0, i.jsx)("h3", { children: "How to buy $TRI?" }),
                      (0, i.jsxs)("p", {
                        children: [
                          "The easiest way to purchase $TRI, is by using TrigonAI Swap Aggregator: \xa0",
                          (0, i.jsx)(x(), {
                            href: "https://app.TrigonAI.finance/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789",
                            children: (0, i.jsx)("a", {
                              target: "_blank",
                              rel: "noopener noreferrer",
                              children: "launch the dapp",
                            }),
                          }),
                          "\xa0 and connect your wallet. No $TRI is required to use the swap aggregator. The swap aggregator is working on Ethereum mainnet, Optimism, Arbitrum and Polygon.",
                        ],
                      }),
                      (0, i.jsx)(x(), {
                        passHref: !0,
                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0xComingSoon&chain=mainnet",
                        children: (0, i.jsx)(l.E.a, {
                          className: "btn btn-solid",
                          target: "_blank",
                          rel: "noopener noreferrer",
                          whileHover: {
                            scale: 1.05,
                            transition: { duration: 0.3 },
                          },
                          whileTap: { scale: 0.9 },
                          children: "Buy $TRI",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      function qe() {
        return (0, i.jsxs)("div", {
          className: "layout-container",
          children: [
            (0, i.jsx)(se, {}),
            (0, i.jsx)(je, {}),
            (0, i.jsx)(z, {}),
            (0, i.jsxs)(r, {
              children: [
                (0, i.jsx)(Ne, {}),
                (0, i.jsx)(Ce, {}),
                (0, i.jsx)(Be, {}),
                (0, i.jsx)(Fe, {}),
                (0, i.jsx)(Ke, {}),
                (0, i.jsx)(ve, {}),
                (0, i.jsx)(ce, {}),
              ],
            }),
            (0, i.jsx)(we, {}),
            (0, i.jsx)(q, { isSlider: !0 }),
          ],
        });
      }
    },
  },
  function (e) {
    e.O(0, [937, 556, 445, 955, 849, 774, 888, 179], function () {
      return (t = 5557), e((e.s = t));
      var t;
    });
    var t = e.O();
    _N_E = t;
  },
]);
