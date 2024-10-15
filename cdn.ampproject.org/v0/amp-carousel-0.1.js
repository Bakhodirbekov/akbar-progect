(self.AMP = self.AMP || []).push({
  m: 0,
  v: "2409271652000",
  n: "amp-carousel",
  ev: "0.1",
  l: !0,
  f: function (t, i) {
    !(function () {
      function i(t, n) {
        return (i =
          Object.setPrototypeOf ||
          function (t, i) {
            return (t.__proto__ = i), t;
          })(t, n);
      }
      function n(t, n) {
        if ("function" != typeof n && null !== n)
          throw new TypeError(
            "Super expression must either be null or a function"
          );
        (t.prototype = Object.create(n && n.prototype, {
          constructor: { value: t, writable: !0, configurable: !0 },
        })),
          n && i(t, n);
      }
      function r(t) {
        return (r = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function (t) {
              return t.__proto__ || Object.getPrototypeOf(t);
            })(t);
      }
      function e(t) {
        return (e =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (t) {
                return typeof t;
              }
            : function (t) {
                return t &&
                  "function" == typeof Symbol &&
                  t.constructor === Symbol &&
                  t !== Symbol.prototype
                  ? "symbol"
                  : typeof t;
              })(t);
      }
      function o(t) {
        if (void 0 === t)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return t;
      }
      function s(t, i) {
        if (i && ("object" === e(i) || "function" == typeof i)) return i;
        if (void 0 !== i)
          throw new TypeError(
            "Derived constructors may only return object or undefined"
          );
        return o(t);
      }
      function a(t) {
        var i = (function () {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return (
              Boolean.prototype.valueOf.call(
                Reflect.construct(Boolean, [], function () {})
              ),
              !0
            );
          } catch (t) {
            return !1;
          }
        })();
        return function () {
          var n,
            e = r(t);
          if (i) {
            var o = r(this).constructor;
            n = Reflect.construct(e, arguments, o);
          } else n = e.apply(this, arguments);
          return s(this, n);
        };
      }
      function u(t, i, n) {
        return (
          i in t
            ? Object.defineProperty(t, i, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (t[i] = n),
          t
        );
      }
      function h(t, i) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          i &&
            (r = r.filter(function (i) {
              return Object.getOwnPropertyDescriptor(t, i).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function l(t) {
        for (var i = 1; i < arguments.length; i++) {
          var n = null != arguments[i] ? arguments[i] : {};
          i % 2
            ? h(Object(n), !0).forEach(function (i) {
                u(t, i, n[i]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : h(Object(n)).forEach(function (i) {
                Object.defineProperty(
                  t,
                  i,
                  Object.getOwnPropertyDescriptor(n, i)
                );
              });
        }
        return t;
      }
      var c = Array.isArray;
      function f(t) {
        return "string" == typeof t;
      }
      function v(t, i) {
        (null == i || i > t.length) && (i = t.length);
        for (var n = 0, r = new Array(i); n < i; n++) r[n] = t[n];
        return r;
      }
      function p(t, i) {
        var n =
          ("undefined" != typeof Symbol && t[Symbol.iterator]) ||
          t["@@iterator"];
        if (n) return (n = n.call(t)).next.bind(n);
        if (
          Array.isArray(t) ||
          (n = (function (t, i) {
            if (t) {
              if ("string" == typeof t) return v(t, i);
              var n = Object.prototype.toString.call(t).slice(8, -1);
              return (
                "Object" === n && t.constructor && (n = t.constructor.name),
                "Map" === n || "Set" === n
                  ? Array.from(t)
                  : "Arguments" === n ||
                    /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                  ? v(t, i)
                  : void 0
              );
            }
          })(t)) ||
          (i && t && "number" == typeof t.length)
        ) {
          n && (t = n);
          var r = 0;
          return function () {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
          };
        }
        throw new TypeError(
          "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      }
      var m = Object.prototype;
      function d(t) {
        var i = Object.create(null);
        return t && Object.assign(i, t), i;
      }
      function b(t) {
        return "number" == typeof t && isFinite(t);
      }
      function g(t, i, n, r, e, o, s, a, u, h, l) {
        return t;
      }
      function x(t) {
        return (t.ownerDocument || t).defaultView;
      }
      m.hasOwnProperty, m.toString;
      var y =
        /(\0)|^(-)$|([\x01-\x1f\x7f]|^-?[0-9])|([\x80-\uffff0-9a-zA-Z_-]+)|[^]/g;
      function w(t, i, n, r, e) {
        return (
          e ||
          (i
            ? "�"
            : r
            ? t.slice(0, -1) +
              "\\" +
              t.slice(-1).charCodeAt(0).toString(16) +
              " "
            : "\\" + t)
        );
      }
      function S(t) {
        return String(t).replace(y, w);
      }
      function k(t) {
        return (function (t, i) {
          for (var n = [], r = t.firstElementChild; r; r = r.nextElementSibling)
            void 0,
              (s = void 0),
              (a = void 0),
              f((o = e = r))
                ? (s = o)
                : 1 == (null == (a = o) ? void 0 : a.nodeType) &&
                  (s = o.tagName),
              !(
                (s && s.toLowerCase().startsWith("i-")) ||
                (e.nodeType === Node.ELEMENT_NODE &&
                  (e.hasAttribute("placeholder") ||
                    e.hasAttribute("fallback") ||
                    e.hasAttribute("overflow")))
              ) && n.push(r);
          var e, o, s, a;
          return n;
        })(t);
      }
      var j = { bubbles: !0, cancelable: !0 };
      function E(t) {
        return t.parent && t.parent != t;
      }
      function O(t, i, n) {
        var r = t.hasAttribute(i),
          e = void 0 !== n ? n : !r;
        return e !== r && (e ? t.setAttribute(i, "") : t.removeAttribute(i)), e;
      }
      function M(t, i, n, r) {
        var e = n || {};
        g(t.ownerDocument);
        var o = r || j,
          s = o.bubbles,
          a = o.cancelable,
          u = new MessageEvent(i, { data: e, bubbles: s, cancelable: a });
        t.dispatchEvent(u);
      }
      function A(t) {
        return t.hasAttribute("i-amphtml-ssr");
      }
      var z,
        I = "amp-carousel-button-prev",
        T = "amp-carousel-button-next",
        N = "i-amphtml-carousel-has-controls",
        R = "amp-carousel-slide",
        P = "i-amphtml-slide-item",
        _ = "i-amphtml-slides-container",
        B = "i-amphtml-slidescroll-no-snap",
        C = "i-amphtml-slide-item-show",
        L = "i-amphtml-scrollable-carousel-container";
      function W() {
        for (var t = 0; t < arguments.length; t++)
          if (!arguments[t]) throw new Error("Invalid server render");
      }
      function F(t, i) {
        var n = i.className,
          r = i.enabled,
          e = i.title,
          o = Z(t) ? "presentation" : "button",
          s = t.ownerDocument.createElement("div");
        return (
          s.setAttribute("tabindex", "0"),
          s.classList.add("amp-carousel-button", n),
          s.setAttribute("role", o),
          s.setAttribute("title", e),
          U(s, r),
          t.appendChild(s),
          s
        );
      }
      function U(t, i) {
        t.classList.toggle("amp-disabled", !i),
          t.setAttribute("aria-disabled", String(!i)),
          t.setAttribute("tabindex", String(i ? 0 : -1));
      }
      function D(t) {
        var i = k(t).length,
          n = Z(t)
            ? (function (t) {
                if (A(t))
                  return (function (t) {
                    var i = t.querySelector(".".concat(S(L))),
                      n = Array.from(t.querySelectorAll(".".concat(S(R))));
                    return W(i, n), { container: i, cells: n };
                  })(t);
                var i = t.ownerDocument,
                  n = k(t),
                  r = i.createElement("div");
                return (
                  r.classList.add(L),
                  r.setAttribute("tabindex", "-1"),
                  t.appendChild(r),
                  n.forEach(function (t) {
                    t.classList.add(R, "amp-scrollable-carousel-slide"),
                      r.appendChild(t);
                  }),
                  { cells: n, container: r }
                );
              })(t)
            : (function (t) {
                var i;
                if (A(t))
                  return (function (t) {
                    var i = t.querySelector(".".concat(S(_))),
                      n = Array.from(t.querySelectorAll(".".concat(S(P)))),
                      r = Array.from(t.querySelectorAll(".".concat(S(R))));
                    return (
                      W(i, n, r),
                      { slides: r, slidesContainer: i, slideWrappers: n }
                    );
                  })(t);
                var n = t.ownerDocument,
                  r = k(t);
                t.classList.add("i-amphtml-slidescroll");
                var e = n.createElement("div");
                e.setAttribute("tabindex", "-1"),
                  e.classList.add(_, B),
                  e.setAttribute("aria-live", "polite"),
                  t.appendChild(e);
                var o = [];
                return (
                  r.forEach(function (t) {
                    t.classList.add(R);
                    var i = n.createElement("div");
                    i.classList.add(P),
                      i.appendChild(t),
                      e.appendChild(i),
                      o.push(i);
                  }),
                  null === (i = o[0]) || void 0 === i || i.classList.add(C),
                  { slidesContainer: e, slides: r, slideWrappers: o }
                );
              })(t);
        return l(
          l(
            {},
            (function (t, i) {
              if (A(t))
                return (function (t) {
                  var i = t.querySelector(".".concat(S(I))),
                    n = t.querySelector(".".concat(S(T)));
                  return W(i, n), { prevButton: i, nextButton: n };
                })(t);
              var n, r;
              (n = t.ownerDocument),
                (r = n.documentElement),
                (["⚡4email", "amp4email"].some(function (t) {
                  return r.hasAttribute(t);
                }) ||
                  t.hasAttribute("controls")) &&
                  t.classList.add(N);
              var e = t.hasAttribute("loop"),
                o = i > 1 ? 2 : e ? 0 : 1;
              return {
                prevButton: F(t, {
                  className: I,
                  title: G(t, { index: String(e ? i : 0), total: String(i) }),
                  enabled: t.hasAttribute("loop"),
                }),
                nextButton: F(t, {
                  className: T,
                  title: H(t, { index: String(o), total: String(i) }),
                  enabled: i > 1,
                }),
              };
            })(t, i)
          ),
          n
        );
      }
      function H(t, i) {
        var n =
          t.getAttribute("data-next-button-aria-label") ||
          "Next item in carousel";
        return X(t, { prefix: n, index: i.index, total: i.total });
      }
      function G(t, i) {
        var n =
          t.getAttribute("data-prev-button-aria-label") ||
          "Previous item in carousel";
        return X(t, { prefix: n, index: i.index, total: i.total });
      }
      function X(t, i) {
        var n = i.index,
          r = i.prefix,
          e = i.total;
        if (Z(t)) return r;
        var o = (t.getAttribute("data-button-count-format") || "(%s of %s)")
          .replace("%s", n)
          .replace("%s", e);
        return "".concat(r, " ").concat(o);
      }
      function Z(t) {
        return "slides" !== t.getAttribute("type");
      }
      function $() {
        return z || (z = Promise.resolve(void 0));
      }
      var J = function () {
          var t = this;
          this.promise = new Promise(function (i, n) {
            (t.resolve = i), (t.reject = n);
          });
        },
        V = "ArrowLeft",
        Y = "ArrowRight",
        q = "fixed",
        K = "fixed-height";
      function Q(t, i) {
        var n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
          r = n.needsRootBounds,
          e = n.rootMargin,
          o = n.threshold,
          s = E(i) && (r || e) ? i.document : void 0;
        return new i.IntersectionObserver(t, {
          threshold: o,
          root: s,
          rootMargin: e,
        });
      }
      var tt,
        it = new WeakMap(),
        nt = new WeakMap();
      function rt(t, i, n) {
        var r = x(t);
        if (n) {
          var e = Q(
            function (t) {
              i(t[t.length - 1]);
            },
            r,
            n
          );
          return (
            e.observe(t),
            function () {
              e.unobserve(t);
            }
          );
        }
        var o = it.get(r);
        o || it.set(r, (o = Q(et, r)));
        var s = nt.get(t);
        return (
          s || ((s = []), nt.set(t, s)),
          s.push(i),
          o.observe(t),
          function () {
            !(function (t, i) {
              var n,
                r,
                e,
                o = nt.get(t);
              if (
                o &&
                ((r = i),
                -1 != (e = (n = o).indexOf(r)) &&
                  (n.splice(e, 1), 1) &&
                  !o.length)
              ) {
                var s = x(t),
                  a = it.get(s);
                null == a || a.unobserve(t), nt.delete(t);
              }
            })(t, i);
          }
        );
      }
      function et(t) {
        for (var i = new Set(), n = t.length - 1; n >= 0; n--) {
          var r = t[n],
            e = r.target;
          if (!i.has(e)) {
            i.add(e);
            var o = nt.get(e);
            if (o) for (var s = 0; s < o.length; s++) (0, o[s])(r);
          }
        }
      }
      function ot(t) {
        var i = Object.getOwnPropertyDescriptor(t, "message");
        if (null != i && i.writable) return t;
        var n = t.message,
          r = t.stack,
          e = new Error(n);
        for (var o in t) e[o] = t[o];
        return (e.stack = r), e;
      }
      function st(t) {
        for (var i, n = null, r = "", e = p(arguments, !0); !(i = e()).done; ) {
          var o = i.value;
          o instanceof Error && !n ? (n = ot(o)) : (r && (r += " "), (r += o));
        }
        return (
          n ? r && (n.message = r + ": " + n.message) : (n = new Error(r)), n
        );
      }
      function at(t) {
        var i, n;
        null === (i = (n = self).__AMP_REPORT_ERROR) ||
          void 0 === i ||
          i.call(n, t);
      }
      function ut(t) {
        var i = st.apply(null, arguments);
        setTimeout(function () {
          throw (at(i), i);
        });
      }
      function ht(t) {
        try {
          for (
            var i = arguments.length, n = new Array(i > 1 ? i - 1 : 0), r = 1;
            r < i;
            r++
          )
            n[r - 1] = arguments[r];
          return t.apply(null, n);
        } catch (t) {
          ut(t);
        }
      }
      var lt = ["Webkit", "webkit", "Moz", "moz", "ms", "O", "o"],
        ct = {
          getPropertyPriority: function () {
            return "";
          },
          getPropertyValue: function () {
            return "";
          },
        };
      function ft(t, i, n) {
        if (pt(i)) return i;
        tt || (tt = d());
        var r = tt[i];
        if (!r || n) {
          if (((r = i), void 0 === t[i])) {
            var e = (function (t) {
                return t.charAt(0).toUpperCase() + t.slice(1);
              })(i),
              o = (function (t, i) {
                for (var n = 0; n < lt.length; n++) {
                  var r = lt[n] + i;
                  if (void 0 !== t[r]) return r;
                }
                return "";
              })(t, e);
            void 0 !== t[o] && (r = o);
          }
          n || (tt[i] = r);
        }
        return r;
      }
      function vt(t, i, n, r, e) {
        var o = ft(t.style, i, e);
        if (o) {
          var s,
            a = r ? n + r : n;
          t.style.setProperty(
            ((s = o.replace(/[A-Z]/g, function (t) {
              return "-" + t.toLowerCase();
            })),
            lt.some(function (t) {
              return s.startsWith(t + "-");
            })
              ? "-".concat(s)
              : s),
            a
          );
        }
      }
      function pt(t) {
        return t.startsWith("--");
      }
      function mt(t, i) {
        return function (n) {
          return t + (i - t) * n;
        };
      }
      var dt = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;
      function bt(t) {
        var i =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        try {
          return decodeURIComponent(t);
        } catch (t) {
          return i;
        }
      }
      self.__AMP_LOG = self.__AMP_LOG || {
        user: null,
        dev: null,
        userForEmbed: null,
      };
      var gt = self.__AMP_LOG;
      function xt(t, i) {
        throw new Error("failed to call initLogConstructor");
      }
      function yt(t) {
        return (
          gt.user || (gt.user = wt()),
          (function (t, i) {
            return i && i.ownerDocument.defaultView != t;
          })(gt.user.win, t)
            ? gt.userForEmbed || (gt.userForEmbed = wt())
            : gt.user
        );
      }
      function wt(t) {
        return xt();
      }
      function St() {
        return gt.dev || (gt.dev = xt());
      }
      function kt(t, i, n, r, e, o, s, a, u, h, l) {
        return t;
      }
      function jt(t, i) {
        return zt(
          (t = (function (t) {
            return t.__AMP_TOP || (t.__AMP_TOP = t);
          })(t)),
          i
        );
      }
      function Et(t, i) {
        return zt(At(Mt(t)), i);
      }
      function Ot(t, i) {
        return It(At(t), i);
      }
      function Mt(t) {
        return t.nodeType ? ((i = x(t)), jt(i, "ampdoc")).getAmpDoc(t) : t;
        var i;
      }
      function At(t) {
        var i = Mt(t);
        return i.isSingleDoc() ? i.win : i;
      }
      function zt(t, i) {
        kt(Nt(t, i));
        var n = Tt(t)[i];
        return (
          n.obj ||
            (kt(n.ctor),
            kt(n.context),
            (n.obj = new n.ctor(n.context)),
            kt(n.obj),
            (n.context = null),
            n.resolve && n.resolve(n.obj)),
          n.obj
        );
      }
      function It(t, i) {
        var n = Tt(t)[i];
        return n
          ? n.promise
            ? n.promise
            : (zt(t, i), (n.promise = Promise.resolve(n.obj)))
          : null;
      }
      function Tt(t) {
        var i = t.__AMP_SERVICES;
        return i || (i = t.__AMP_SERVICES = {}), i;
      }
      function Nt(t, i) {
        var n = t.__AMP_SERVICES && t.__AMP_SERVICES[i];
        return !(!n || !n.ctor);
      }
      var Rt = function (t) {
          return (i = "action"), Nt((n = At(Mt(t))), i) ? zt(n, i) : null;
          var i, n;
        },
        Pt = function (t) {
          return (function (t, i, n, r) {
            var e = Ot(t, i);
            if (e) return e;
            var o = Mt(t);
            return o
              .whenExtensionsKnown()
              .then(function () {
                var t = o.getExtensionVersion(n);
                return t
                  ? jt(o.win, "extensions").waitForExtension(n, t)
                  : null;
              })
              .then(function (n) {
                return n
                  ? (function (t, i) {
                      return (function (t, i) {
                        var n = It(t, i);
                        if (n) return n;
                        var r,
                          e,
                          o,
                          s,
                          a = Tt(t);
                        return (
                          (a[i] =
                            ((e = (r = new J()).promise),
                            (o = r.reject),
                            (s = r.resolve),
                            e.catch(function () {}),
                            {
                              obj: null,
                              promise: e,
                              resolve: s,
                              reject: o,
                              context: null,
                              ctor: null,
                            })),
                          a[i].promise
                        );
                      })(At(t), i);
                    })(t, i)
                  : null;
              });
          })(t, "amp-analytics-instrumentation", "amp-analytics");
        },
        _t = function (t) {
          return Et(t, "owners");
        },
        Bt = function (t) {
          return jt(t, "platform");
        },
        Ct = function (t) {
          return zt(t, "timer");
        },
        Lt = function (t) {
          return jt(t, "vsync");
        };
      function Wt(t, i, n, r) {
        return function (e) {
          return Ft.solveYValueFromXValue(e, 0, 0, t, i, n, r, 1, 1);
        };
      }
      var Ft = (function () {
          function t() {}
          return (
            (t.solveYValueFromXValue = function (i, n, r, e, o, s, a, u, h) {
              return t.lc(t.vc(i, n, e, s, u), r, o, a, h);
            }),
            (t.vc = function (i, n, r, e, o) {
              var s = 1e-6,
                a = (i - n) / (o - n);
              if (a <= 0) return 0;
              if (a >= 1) return 1;
              for (var u = 0, h = 1, l = 0, c = 0; c < 8; c++) {
                l = t.dc(a, n, r, e, o);
                var f = (t.dc(a + s, n, r, e, o) - l) / s;
                if (Math.abs(l - i) < s) return a;
                if (Math.abs(f) < s) break;
                l < i ? (u = a) : (h = a), (a -= (l - i) / f);
              }
              for (var v = 0; Math.abs(l - i) > s && v < 8; v++)
                l < i
                  ? ((u = a), (a = (a + h) / 2))
                  : ((h = a), (a = (a + u) / 2)),
                  (l = t.dc(a, n, r, e, o));
              return a;
            }),
            (t.dc = function (i, n, r, e, o) {
              if (0 == i) return n;
              if (1 == i) return o;
              var s = t.mc(n, r, i),
                a = t.mc(r, e, i),
                u = t.mc(e, o, i);
              return (s = t.mc(s, a, i)), (a = t.mc(a, u, i)), t.mc(s, a, i);
            }),
            (t.lc = function (i, n, r, e, o) {
              if (0 == i) return n;
              if (1 == i) return o;
              var s = t.mc(n, r, i),
                a = t.mc(r, e, i),
                u = t.mc(e, o, i);
              return (s = t.mc(s, a, i)), (a = t.mc(a, u, i)), t.mc(s, a, i);
            }),
            (t.mc = function (t, i, n) {
              return t + n * (i - t);
            }),
            t
          );
        })(),
        Ut = {
          LINEAR: function (t) {
            return t;
          },
          EASE: function (t) {
            return Ft.solveYValueFromXValue(t, 0, 0, 0.25, 0.1, 0.25, 1, 1, 1);
          },
          EASE_IN: function (t) {
            return Ft.solveYValueFromXValue(t, 0, 0, 0.42, 0, 1, 1, 1, 1);
          },
          EASE_OUT: function (t) {
            return Ft.solveYValueFromXValue(t, 0, 0, 0, 0, 0.58, 1, 1, 1);
          },
          EASE_IN_OUT: function (t) {
            return Ft.solveYValueFromXValue(t, 0, 0, 0.42, 0, 0.58, 1, 1, 1);
          },
        },
        Dt = {
          linear: Ut.LINEAR,
          ease: Ut.EASE,
          "ease-in": Ut.EASE_IN,
          "ease-out": Ut.EASE_OUT,
          "ease-in-out": Ut.EASE_IN_OUT,
        };
      function Ht(t) {
        if (!t) return null;
        if (f(t)) {
          if (-1 != t.indexOf("cubic-bezier")) {
            var i = t.match(/cubic-bezier\((.+)\)/);
            if (i) {
              var n = i[1].split(",").map(parseFloat);
              if (4 == n.length) {
                for (var r = 0; r < 4; r++) if (isNaN(n[r])) return null;
                return Wt(n[0], n[1], n[2], n[3]);
              }
            }
            return null;
          }
          return Dt[t];
        }
        return t;
      }
      var Gt,
        Xt = "Animation",
        Zt = function () {},
        $t = (function () {
          function t(t, i) {
            (this.bc = t),
              (this.To = i || Lt(self)),
              (this.gc = null),
              (this.yc = []);
          }
          t.animate = function (i, n, r, e) {
            return new t(i).setCurve(e).add(0, n, 1).start(r);
          };
          var i = t.prototype;
          return (
            (i.setCurve = function (t) {
              return t && (this.gc = Ht(t)), this;
            }),
            (i.add = function (t, i, n, r) {
              return (
                this.yc.push({ delay: t, func: i, duration: n, curve: Ht(r) }),
                this
              );
            }),
            (i.start = function (t) {
              return new Jt(this.To, this.bc, this.yc, this.gc, t);
            }),
            t
          );
        })(),
        Jt = (function () {
          function t(t, i, n, r, e) {
            (this.To = t), (this.bc = i), (this.yc = []);
            for (var o = 0; o < n.length; o++) {
              var s = n[o];
              this.yc.push({
                delay: s.delay,
                func: s.func,
                duration: s.duration,
                curve: s.curve || r,
                started: !1,
                completed: !1,
              });
            }
            (this.wc = e),
              (this.sa = Date.now()),
              (this.Ce = !0),
              (this.Ii = {});
            var a = new J();
            (this.Ac = a.promise),
              (this.Ai = a.resolve),
              (this.xc = a.reject),
              (this.Ec = this.To.createAnimTask(this.bc, {
                mutate: this.Oc.bind(this),
              })),
              this.To.canAnimate(this.bc)
                ? this.Ec(this.Ii)
                : (St().warn(Xt, "cannot animate"), this.Tc(!1, 0));
          }
          var i = t.prototype;
          return (
            (i.then = function (t, i) {
              return t || i ? this.Ac.then(t, i) : this.Ac;
            }),
            (i.thenAlways = function (t) {
              var i = t || Zt;
              return this.then(i, i);
            }),
            (i.halt = function (t) {
              this.Tc(!1, t || 0);
            }),
            (i.Tc = function (t, i) {
              if (this.Ce) {
                if (((this.Ce = !1), 0 != i)) {
                  this.yc.length > 1 &&
                    this.yc.sort(function (t, i) {
                      return t.delay + t.duration - (i.delay + i.duration);
                    });
                  try {
                    if (i > 0)
                      for (var n = 0; n < this.yc.length; n++)
                        this.yc[n].func(1, !0);
                    else
                      for (var r = this.yc.length - 1; r >= 0; r--)
                        this.yc[r].func(0, !1);
                  } catch (i) {
                    St().error(Xt, "completion failed: " + i, i), (t = !1);
                  }
                }
                t ? this.Ai() : this.xc();
              }
            }),
            (i.Oc = function (t) {
              if (this.Ce) {
                for (
                  var i = Date.now(),
                    n = Math.min((i - this.sa) / this.wc, 1),
                    r = 0;
                  r < this.yc.length;
                  r++
                ) {
                  var e = this.yc[r];
                  !e.started && n >= e.delay && (e.started = !0);
                }
                for (var o = 0; o < this.yc.length; o++) {
                  var s = this.yc[o];
                  s.started && !s.completed && this.Pc(s, n);
                }
                1 == n
                  ? this.Tc(!0, 0)
                  : this.To.canAnimate(this.bc)
                  ? this.Ec(this.Ii)
                  : (St().warn(Xt, "cancel animation"), this.Tc(!1, 0));
              }
            }),
            (i.Pc = function (t, i) {
              var n, r;
              if (t.duration > 0) {
                if (
                  ((r = n = Math.min((i - t.delay) / t.duration, 1)),
                  t.curve && 1 != r)
                )
                  try {
                    r = t.curve(n);
                  } catch (t) {
                    return (
                      St().error(Xt, "step curve failed: " + t, t),
                      void this.Tc(!1, 0)
                    );
                  }
              } else (n = 1), (r = 1);
              1 == n && (t.completed = !0);
              try {
                t.func(r, t.completed);
              } catch (t) {
                return (
                  St().error(Xt, "step mutate failed: " + t, t),
                  void this.Tc(!1, 0)
                );
              }
            }),
            t
          );
        })();
      function Vt(t, i, n, r) {
        var e = { detail: n };
        if ((Object.assign(e, r), "function" == typeof t.CustomEvent))
          return new t.CustomEvent(i, e);
        var o = t.document.createEvent("CustomEvent");
        return o.initCustomEvent(i, !!e.bubbles, !!e.cancelable, n), o;
      }
      function Yt(t, i, n, r) {
        return (function (t, i, n, r) {
          var e = t,
            o = n,
            s = function (t) {
              try {
                return o(t);
              } catch (t) {
                var i, n;
                throw (
                  (null === (i = (n = self).__AMP_REPORT_ERROR) ||
                    void 0 === i ||
                    i.call(n, t),
                  t)
                );
              }
            },
            a = (function () {
              if (void 0 !== Gt) return Gt;
              Gt = !1;
              try {
                var t = {
                  get capture() {
                    return (Gt = !0), !1;
                  },
                };
                self.addEventListener("test-options", null, t),
                  self.removeEventListener("test-options", null, t);
              } catch (t) {}
              return Gt;
            })(),
            u = !(null == r || !r.capture);
          return (
            e.addEventListener(i, s, a ? r : u),
            function () {
              null == e || e.removeEventListener(i, s, a ? r : u),
                (o = null),
                (e = null),
                (s = null);
            }
          );
        })(t, i, n, r);
      }
      var qt = (function () {
          function t(t) {
            var i = t.element,
              n = t.go,
              r = t.nextButton,
              e = t.prevButton;
            (this.el = i),
              (this.kot = n),
              (this.t = x(i)),
              (this.hp = e),
              (this.up = r),
              (this.N9 = !1),
              this.Mot();
          }
          var i = t.prototype;
          return (
            (i.Mot = function () {
              var t,
                i = this;
              this.setupButtonInteraction(this.hp, function () {
                return i.handlePrev();
              }),
                this.setupButtonInteraction(this.up, function () {
                  return i.handleNext();
                }),
                this.el.hasAttribute("controls")
                  ? (this.N9 = !0)
                  : ((t = this.t), jt(t, "input")).onMouseDetected(function (
                      t
                    ) {
                      t &&
                        ((i.N9 = !0),
                        O(i.el, "i-amphtml-carousel-hide-buttons", !i.N9),
                        i.el.classList.add(N));
                    },
                    !0);
            }),
            (i.setupButtonInteraction = function (t, i) {
              t.addEventListener("click", i),
                t.addEventListener("keydown", function (t) {
                  t.defaultPrevented ||
                    ("Enter" != t.key && " " != t.key) ||
                    (t.preventDefault(), i());
                });
            }),
            (i.setControlsState = function (t) {
              var i = t.next,
                n = t.prev;
              U(this.hp, n), U(this.up, i);
            }),
            (i.hintControls = function () {
              var t = this;
              this.N9 ||
                Lt(this.t).mutate(function () {
                  var i = "i-amphtml-carousel-button-start-hint";
                  t.el.classList.add(i),
                    Ct(t.t).delay(function () {
                      var n;
                      ((n = t.el), Et(n, "mutator")).measureMutateElement(
                        t.el,
                        null,
                        function () {
                          t.el.classList.remove(i),
                            O(t.el, "i-amphtml-carousel-hide-buttons", !t.N9);
                        }
                      );
                    }, 4e3);
                });
            }),
            (i.updateButtonTitles = function (t, i) {
              (this.hp.title = t), (this.up.title = i);
            }),
            (i.handlePrev = function () {
              !this.hp.classList.contains("amp-disabled") &&
                this.kot(-1, !0, !1);
            }),
            (i.handleNext = function () {
              !this.up.classList.contains("amp-disabled") &&
                this.kot(1, !0, !1);
            }),
            t
          );
        })(),
        Kt = "amp-scrollable-carousel",
        Qt = (function (t) {
          n(r, t);
          var i = a(r);
          function r(t) {
            var n;
            return (
              ((n = i.call(this, t)).L7 = 0),
              (n.Iot = 0),
              (n.Tot = null),
              (n.bO = null),
              (n._7 = null),
              (n.ag = null),
              (n.qd = null),
              n
            );
          }
          var e = r.prototype;
          return (
            (e.isLayoutSupported = function (t) {
              return (function (t) {
                return t == q || t == K;
              })(t);
            }),
            (e.isRelayoutNeeded = function () {
              return !0;
            }),
            (e.Not = function () {
              var t = this;
              this.Rot(),
                this.bO.addEventListener("scroll", this.Fl.bind(this)),
                this.bO.addEventListener("keydown", this.s3.bind(this)),
                this.Tot.forEach(function (i) {
                  _t(t.element).setOwner(i, t.element);
                }),
                this.registerAction(
                  "goToSlide",
                  function (i) {
                    var n = i.args;
                    if (n) {
                      var r = parseInt(n.index, 10);
                      t.goToSlide(r);
                    }
                  },
                  1
                ),
                Rt(this.element).addToAllowlist("amp-carousel", "goToSlide", [
                  "email",
                ]);
            }),
            (e.buildCallback = function () {
              var t = D(this.element),
                i = t.cells,
                n = t.container,
                r = t.nextButton,
                e = t.prevButton;
              (this.bO = n),
                (this.Tot = i),
                (this.qd = new qt({
                  element: this.element,
                  prevButton: e,
                  nextButton: r,
                  go: this.go.bind(this),
                })),
                this.Not();
            }),
            (e.layoutCallback = function () {
              var t = this;
              return (
                (this.ag = rt(this.element, function (i) {
                  var n = i.isIntersecting;
                  return t.viewportCallback(n);
                })),
                this.Pot(this.L7),
                this._ot(this.L7, 1),
                this.qd.setControlsState({
                  prev: this.Bot(),
                  next: this.Cot(),
                }),
                $()
              );
            }),
            (e.unlayoutCallback = function () {
              var t;
              return (
                null === (t = this.ag) || void 0 === t || t.call(this),
                (this.ag = null),
                !0
              );
            }),
            (e.viewportCallback = function (t) {
              this.Lot(this.L7, this.L7), t && this.qd.hintControls();
            }),
            (e.go = function (t, i) {
              var n = this,
                r = this.Wot(this.L7, t),
                e = this.L7;
              if (r != e)
                if (i) {
                  var o = mt(e, r);
                  $t.animate(
                    this.element,
                    function (t) {
                      n.bO.scrollLeft = o(t);
                    },
                    200,
                    "ease-in-out"
                  ).thenAlways(function () {
                    n.Fot(r);
                  });
                } else this.Fot(r), (this.bO.scrollLeft = r);
            }),
            (e.goToSlide = function (t) {
              var i = this,
                n = this.Tot.length;
              if (!isFinite(t) || t < 0 || t >= n)
                return (
                  this.user().error(Kt, "Invalid [slide] value: %s", t), $()
                );
              var r = this.L7,
                e = r;
              this.measureMutateElement(
                function () {
                  e = i.Dot(t);
                },
                function () {
                  if (e != r) {
                    var t = mt(r, e);
                    $t.animate(
                      i.element,
                      function (n) {
                        i.bO.scrollLeft = t(n);
                      },
                      200,
                      "ease-in-out"
                    ).thenAlways(function () {
                      i.Fot(e);
                    });
                  }
                }
              );
            }),
            (e.Dot = function (t) {
              var i = this.element.offsetWidth;
              return this.Tot[t].offsetLeft - (i - this.Tot[t].offsetWidth) / 2;
            }),
            (e.Fl = function () {
              var t = this.bO.scrollLeft;
              (this.L7 = t), null === this._7 && this.ctt(t);
            }),
            (e.s3 = function (t) {
              var i = t.key;
              (i != V && i != Y) || t.stopPropagation();
            }),
            (e.ctt = function (t) {
              var i = this;
              this._7 = Ct(this.win).delay(function () {
                Math.abs(t - i.L7) < 30
                  ? (St().fine(Kt, "slow scrolling: %s - %s", t, i.L7),
                    (i._7 = null),
                    i.Fot(i.L7))
                  : (St().fine(Kt, "fast scrolling: %s - %s", t, i.L7),
                    i.ctt(i.L7));
              }, 100);
            }),
            (e.Fot = function (t) {
              this.Lot(t, this.Iot),
                this.Pot(t),
                this._ot(t, Math.sign(t - this.Iot)),
                (this.Iot = t),
                (this.L7 = t),
                this.qd.setControlsState({
                  prev: this.Bot(),
                  next: this.Cot(),
                });
            }),
            (e.Wot = function (t, i) {
              var n = this.element.offsetWidth,
                r = this.bO.scrollWidth,
                e = t + i * n;
              return e < 0 ? 0 : r >= n && e > r - n ? r - n : e;
            }),
            (e.Hot = function (t, i) {
              for (
                var n = this.element.offsetWidth, r = 0;
                r < this.Tot.length;
                r++
              ) {
                var e = this.Tot[r];
                e.offsetLeft + e.offsetWidth >= t &&
                  e.offsetLeft <= t + n &&
                  i(e);
              }
            }),
            (e.Pot = function (t) {
              var i = this;
              this.Hot(t, function (t) {
                _t(i.element).scheduleLayout(i.element, t);
              });
            }),
            (e._ot = function (t, i) {
              var n = this,
                r = this.Wot(t, i);
              r != t &&
                this.Hot(r, function (t) {
                  _t(n.element).schedulePreload(n.element, t);
                });
            }),
            (e.Lot = function (t, i) {
              var n = this,
                r = [];
              this.Hot(t, function (t) {
                r.push(t);
              }),
                i != t &&
                  this.Hot(i, function (t) {
                    r.includes(t) || _t(n.element).schedulePause(n.element, t);
                  });
            }),
            (e.Bot = function () {
              return 0 != this.L7;
            }),
            (e.Cot = function () {
              var t = this.element.offsetWidth,
                i = this.bO.scrollWidth,
                n = Math.max(i - t, 0);
              return this.L7 != n;
            }),
            (e.interactionNext = function () {
              this.qd.handleNext();
            }),
            (e.interactionPrev = function () {
              this.qd.handlePrev();
            }),
            (e.goCallback = function (t, i) {
              this.go(t, i);
            }),
            (e.Rot = function () {
              Yt(
                this.element,
                "touchmove",
                function (t) {
                  return t.stopPropagation();
                },
                { passive: !0 }
              );
            }),
            r
          );
        })(t.BaseElement),
        ti = /vertical/,
        ii = new WeakMap(),
        ni = new WeakMap(),
        ri = new WeakMap();
      function ei(t) {
        var i = ii.get(t);
        return i || ((i = new t.ResizeObserver(oi)), ii.set(t, i)), i;
      }
      function oi(t) {
        for (var i = new Set(), n = t.length - 1; n >= 0; n--) {
          var r = t[n],
            e = r.target;
          if (!i.has(e)) {
            i.add(e);
            var o = ni.get(e);
            if (o) {
              ri.set(e, r);
              for (var s = 0; s < o.length; s++) {
                var a = o[s],
                  u = a.callback;
                si(a.type, u, r);
              }
            }
          }
        }
      }
      function si(t, i, n) {
        if (0 == t) {
          var r = n.contentRect,
            e = r.height;
          ht(i, { width: r.width, height: e });
        } else if (1 == t) {
          var o,
            s = n.borderBoxSize;
          if (s) o = s.length > 0 ? s[0] : { inlineSize: 0, blockSize: 0 };
          else {
            var a,
              u,
              h = n.target,
              l = x(h),
              c = ti.test(
                (function (t, i) {
                  return t.getComputedStyle(i) || ct;
                })(l, h).writingMode
              ),
              f = h,
              v = f.offsetHeight,
              p = f.offsetWidth;
            c ? ((u = p), (a = v)) : ((a = p), (u = v)),
              (o = { inlineSize: a, blockSize: u });
          }
          ht(i, o);
        }
      }
      var ai = "__AMP__EXPERIMENT_TOGGLES",
        ui = "AMP-CAROUSEL",
        hi = (function (t) {
          n(r, t);
          var i = a(r);
          function r(t) {
            var n;
            ((n = i.call(this, t)).To = null),
              (n.Got = !1),
              (n.O4 = []),
              (n.Xot = 0),
              (n.W6 = null),
              (n.Zot = []),
              (n.$ot = !1),
              (n.Jot = null),
              (n.Vot = !1),
              (n.Yot = null),
              (n.qot = !1),
              (n.Kot = !1),
              (n.qj = !1),
              (n.tst = 5e3),
              (n.ist = null),
              (n.nst = 0),
              (n.rst = !1),
              (n.est = !1),
              (n.ost = 0),
              (n.sst = null),
              (n.ast = 0),
              (n.ust = 0),
              (n.hst = 0),
              (n.lst = []);
            var r,
              e = Bt(n.win);
            return (
              (n.t5 = e.isIos()),
              (n.jk = e.isSafari()),
              (n.Fe = null),
              (n.cst =
                !!Bt(n.win).getIosVersionString().startsWith("10.3") ||
                (!n.t5 &&
                  ("amp-carousel-chrome-scroll-snap",
                  (r = (function (t) {
                    var i, n, r, e, o;
                    if (t[ai]) return t[ai];
                    t[ai] = d();
                    var s = t[ai];
                    g(s);
                    var a,
                      u = l(
                        l(
                          {},
                          null !== (i = t.AMP_CONFIG) && void 0 !== i ? i : {}
                        ),
                        null !== (n = t.AMP_EXP) && void 0 !== n
                          ? n
                          : ((a =
                              (null === (r = t.__AMP_EXP) || void 0 === r
                                ? void 0
                                : r.textContent) || "{}"),
                            JSON.parse(a))
                      );
                    for (var h in u) {
                      var f = u[h];
                      "number" == typeof f &&
                        f >= 0 &&
                        f <= 1 &&
                        (s[h] = Math.random() < f);
                    }
                    var v =
                      null === (e = t.AMP_CONFIG) || void 0 === e
                        ? void 0
                        : e["allow-doc-opt-in"];
                    if (c(v) && v.length) {
                      var m = t.document.head.querySelector(
                        'meta[name="amp-experiments-opt-in"]'
                      );
                      if (m)
                        for (
                          var b,
                            x,
                            y = p(
                              (null === (b = m.getAttribute("content")) ||
                              void 0 === b
                                ? void 0
                                : b.split(",")) || [],
                              !0
                            );
                          !(x = y()).done;

                        ) {
                          var w = x.value;
                          v.includes(w) && (s[w] = !0);
                        }
                    }
                    Object.assign(
                      s,
                      (function (t) {
                        var i,
                          n = "";
                        try {
                          var r;
                          "localStorage" in t &&
                            (n =
                              null !==
                                (r = t.localStorage.getItem(
                                  "amp-experiment-toggles"
                                )) && void 0 !== r
                                ? r
                                : "");
                        } catch (t) {
                          St().warn(
                            "EXPERIMENTS",
                            "Failed to retrieve experiments from localStorage."
                          );
                        }
                        for (
                          var e,
                            o =
                              (null === (i = n) || void 0 === i
                                ? void 0
                                : i.split(/\s*,\s*/g)) || [],
                            s = d(),
                            a = p(o, !0);
                          !(e = a()).done;

                        ) {
                          var u = e.value;
                          u &&
                            ("-" == u[0] ? (s[u.substr(1)] = !1) : (s[u] = !0));
                        }
                        return s;
                      })(t)
                    );
                    var S =
                      null === (o = t.AMP_CONFIG) || void 0 === o
                        ? void 0
                        : o["allow-url-opt-in"];
                    if (c(S) && S.length)
                      for (
                        var k,
                          j = (function (t) {
                            var i,
                              n = d();
                            if (!t) return n;
                            for (; (i = dt.exec(t)); ) {
                              var r = bt(i[1], i[1]),
                                e = i[2]
                                  ? bt(i[2].replace(/\+/g, " "), i[2])
                                  : "";
                              n[r] = e;
                            }
                            return n;
                          })(t.location.originalHash || t.location.hash),
                          E = p(S, !0);
                        !(k = E()).done;

                      ) {
                        var O = k.value,
                          M = j["e-".concat(O)];
                        "1" == M && (s[O] = !0), "0" == M && (s[O] = !1);
                      }
                    return s;
                  })(n.win)),
                  !r["amp-carousel-chrome-scroll-snap"]))),
              (n.fst = !1),
              (n.ug = n.ug.bind(o(n))),
              (n.ag = null),
              (n.qd = null),
              n
            );
          }
          var e = r.prototype;
          return (
            (e.isLayoutSupported = function (t) {
              return (function (t) {
                return (
                  t == q ||
                  t == K ||
                  "responsive" == t ||
                  "fill" == t ||
                  "flex-item" == t ||
                  "fluid" == t ||
                  "intrinsic" == t
                );
              })(t);
            }),
            (e.isRelayoutNeeded = function () {
              return !0;
            }),
            (e.Not = function () {
              var t,
                i = this,
                n = this.element.getAttribute("autoplay");
              n &&
                ((this.ist = parseInt(n, 10)),
                (t = b(this.ist)),
                yt().assert(
                  t,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined,
                  undefined
                )),
                this.est && 0 != this.ist && this.vst(),
                this.registerAction(
                  "toggleAutoplay",
                  function (t) {
                    var n = t.args;
                    n && void 0 !== n.toggleOn ? i._9(n.toggleOn) : i._9(!i.qj);
                  },
                  1
                );
            }),
            (e.pst = function () {
              var t = this;
              if (
                ((this.To = this.getVsync()),
                (this.Fe = Rt(this.element)),
                this.Fe.addToAllowlist(ui, "goToSlide", ["email"]),
                (this.Got =
                  null !=
                  (function (t, i, n) {
                    var r = ft(t.style, "scrollSnapType", void 0);
                    if (r)
                      return pt(r) ? t.style.getPropertyValue(r) : t.style[r];
                  })(this.element)),
                this.cst && (this.Got = !1),
                this.W6.classList.toggle(B, this.cst),
                this.Got)
              ) {
                var i = this.win.document.createElement("div");
                i.classList.add("i-amphtml-carousel-start-marker"),
                  this.W6.appendChild(i);
                var n = this.win.document.createElement("div");
                n.classList.add("i-amphtml-carousel-end-marker"),
                  this.W6.appendChild(n);
              }
              this.O4.forEach(function (i, n) {
                var r = i.getAttribute("data-slide-id") || n.toString();
                t.lst.push(r), _t(t.element).setOwner(i, t.element);
              }),
                this.Rot(),
                this.W6.addEventListener("scroll", this.Fl.bind(this)),
                this.W6.addEventListener("keydown", this.s3.bind(this)),
                Yt(this.W6, "touchmove", this.mst.bind(this), { passive: !0 }),
                Yt(this.W6, "touchend", this.dst.bind(this), { passive: !0 }),
                this.registerAction(
                  "goToSlide",
                  function (i) {
                    var n = i.args;
                    n && t.goToSlide(n.index, 3);
                  },
                  1
                );
            }),
            (e.attachedCallback = function () {
              (function (t, i, n) {
                var r = t.ownerDocument.defaultView;
                if (r) {
                  var e = ni.get(t);
                  if (
                    (e || ((e = []), ni.set(t, e), ei(r).observe(t)),
                    !e.some(function (t) {
                      return t.callback === n && 0 === t.type;
                    }))
                  ) {
                    e.push({ type: 0, callback: n });
                    var o = ri.get(t);
                    o &&
                      setTimeout(function () {
                        return si(0, n, o);
                      });
                  }
                }
              })(this.element, 0, this.ug);
            }),
            (e.detachedCallback = function () {
              (function (t, i, n) {
                var r = ni.get(t);
                if (
                  r &&
                  ((function (t, i) {
                    for (var r = [], e = 0, o = 0; o < t.length; o++) {
                      var s = t[o];
                      (a = s).callback === n && 0 === a.type
                        ? r.push(s)
                        : (e < o && (t[e] = s), e++);
                    }
                    var a;
                    e < t.length && (t.length = e);
                  })(r),
                  0 == r.length)
                ) {
                  ni.delete(t), ri.delete(t);
                  var e = t.ownerDocument.defaultView;
                  e && ei(e).unobserve(t);
                }
              })(this.element, 0, this.ug);
            }),
            (e.isLoopingEligible = function () {
              return this.Xot > 1;
            }),
            (e.mutatedAttributesCallback = function (t) {
              var i = t.slide;
              void 0 !== i && this.goToSlide(i, 3);
            }),
            (e.mst = function () {
              this.bst(), (this.Vot = !0);
            }),
            (e.viewportCallback = function (t) {
              var i;
              t
                ? (this.gj(),
                  null === (i = this.qd) || void 0 === i || i.hintControls())
                : this.bst();
            }),
            (e.interactionNext = function () {
              this.qd.handleNext();
            }),
            (e.interactionPrev = function () {
              this.qd.handlePrev();
            }),
            (e.goCallback = function (t, i, n) {
              this.go(t, i, n);
            }),
            (e.go = function (t, i, n) {
              var r = n ? 1 : 3;
              this.moveSlide(t, i, r), n ? this.gj() : this.bst();
            }),
            (e.gst = function (t) {
              var i = this;
              this.Jot && Ct(this.win).cancel(this.Jot),
                (this.Jot = Ct(this.win).delay(function () {
                  if (((i.Jot = null), !i.$ot && !i.Vot)) {
                    var t = i.W6.scrollLeft;
                    i.Got ? i.xst(t, 1) : i.yst(t, void 0, 3);
                  }
                }, t));
            }),
            (e.dst = function () {
              var t = this.cst ? 45 : 100;
              (this.Vot = !1), this.gst(t);
            }),
            (e.ug = function (t) {
              (this.ust = t.width), (this.fst = !0);
            }),
            (e.buildCallback = function () {
              var t = D(this.element),
                i = t.nextButton,
                n = t.prevButton,
                r = t.slideWrappers,
                e = t.slides,
                o = t.slidesContainer;
              (this.O4 = e),
                (this.W6 = o),
                (this.Zot = r),
                (this.Xot = this.O4.length),
                (this.qot = this.element.hasAttribute("loop")),
                (this.qj = this.element.hasAttribute("autoplay")),
                (this.rst = this.qot && this.isLoopingEligible()),
                (this.est = this.qj && this.isLoopingEligible()),
                (this.qd = new qt({
                  element: this.element,
                  go: this.go.bind(this),
                  nextButton: i,
                  prevButton: n,
                })),
                this.qd.updateButtonTitles(
                  this.getPrevButtonTitle(),
                  this.getNextButtonTitle()
                ),
                this.Not(),
                this.pst();
            }),
            (e.layoutCallback = function () {
              var t,
                i = this;
              if (
                ((this.ag = rt(this.element, function (t) {
                  var n = t.isIntersecting;
                  return i.viewportCallback(n);
                })),
                "[i-amphtml-scale-animation]",
                (t = this.element).closest
                  ? t.closest("[i-amphtml-scale-animation]")
                  : (function (t, i, n) {
                      var r;
                      for (r = t; r && void 0 !== r; r = r.parentElement)
                        if (i(r)) return r;
                      return null;
                    })(t, function (t) {
                      return (function (t, i) {
                        var n =
                          t.matches ||
                          t.webkitMatchesSelector ||
                          t.mozMatchesSelector ||
                          t.msMatchesSelector ||
                          t.oMatchesSelector;
                        return !!n && n.call(t, "[i-amphtml-scale-animation]");
                      })(t);
                    }))
              )
                return $();
              if (
                (this.fst || (this.ust = this.W6.clientWidth),
                null === this.sst)
              )
                this.wst(this.ast);
              else {
                var n = yt().assertNumber(this.sst, "E#19457 this.slideIndex_"),
                  r = this.Sst(n);
                _t(this.element).scheduleLayout(this.element, this.O4[n]),
                  (this.W6.scrollLeft = r),
                  (this.hst = r);
              }
              return $();
            }),
            (e.unlayoutCallback = function () {
              var t;
              return (
                null === (t = this.ag) || void 0 === t || t.call(this),
                (this.ag = null),
                (this.sst = null),
                !0
              );
            }),
            (e.Bot = function () {
              return this.rst || this.sst > 0;
            }),
            (e.Cot = function () {
              return this.rst || this.sst < this.O4.length - 1;
            }),
            (e.moveSlide = function (t, i, n) {
              if (null !== this.sst) {
                var r = this.Cot(),
                  e = this.Bot();
                if ((1 == t && r) || (-1 == t && e)) {
                  var o = this.sst + t;
                  if (
                    (-1 == o ? (o = this.Xot - 1) : o >= this.Xot && (o = 0), i)
                  ) {
                    var s = 1 != t || e ? this.ust : 0;
                    this.yst(s, t, n);
                  } else this.kst(o, n);
                }
              }
            }),
            (e.Fl = function (t) {
              var i = this.W6.scrollLeft;
              this.t5 || this.jk || this.jst(i);
              var n = this.Got ? 200 : this.t5 ? 45 : 100;
              this.gst(n), (this.hst = i);
            }),
            (e.s3 = function (t) {
              var i = t.key;
              (i != V && i != Y) || t.stopPropagation();
            }),
            (e.jst = function (t) {
              var i = this,
                n = this.W6.scrollWidth;
              (-1 == this.ost && t >= this.hst) ||
              (1 == this.ost && t <= this.hst)
                ? this.yst(t).then(function () {
                    i.ost = 0;
                  })
                : t < 0
                ? (this.ost = -1)
                : t + this.ust > n
                ? (this.ost = 1)
                : (this.ost = 0);
            }),
            (e.yst = function (t, i, n) {
              var r = this;
              this.$ot = !0;
              var e = this.Est(t) - this.sst,
                o = this.Bot(),
                s = o ? this.ust : 0;
              return (
                0 != e || (1 != i && -1 != i) || (e = i),
                1 == e || (-1 != e && e == -1 * (this.Xot - 1))
                  ? (s = o ? 2 * this.ust : this.ust)
                  : (-1 != e && e != this.Xot - 1) || (s = 0),
                this.Ost(t, s).then(function () {
                  r.xst(s, n);
                })
              );
            }),
            (e.Est = function (t) {
              if (!t && !this.ust) return 0;
              var i = Math.round(t / this.ust),
                n = 0,
                r = this.Bot(),
                e = this.Cot();
              r && e ? (n = i - 1) : e ? (n = i) : r && (n = i - 1);
              var o = this.sst + n;
              return this.rst
                ? o < 0
                  ? this.Xot - 1
                  : o >= this.Xot
                  ? 0
                  : o
                : o < 0
                ? 0
                : o >= this.Xot
                ? this.Xot - 1
                : o;
            }),
            (e.getPrevButtonTitle = function () {
              var t = this.W9(this.sst),
                i = (null == t ? 0 : t) + 1;
              return G(this.element, {
                index: String(i),
                total: String(this.Xot),
              });
            }),
            (e.getNextButtonTitle = function () {
              var t = this.V9(this.sst),
                i = (null == t ? this.Xot - 1 : t) + 1;
              return H(this.element, {
                index: String(i),
                total: String(this.Xot),
              });
            }),
            (e.xst = function (t, i) {
              var n = this;
              if (b(t) && null !== this.sst) {
                this.$ot = !0;
                var r = this.Est(t);
                this.To.mutate(function () {
                  n.kst(r, i),
                    n.To.mutate(function () {
                      n.$ot = !1;
                    });
                });
              }
            }),
            (e.goToSlide = function (t, i) {
              var n = parseInt(t, 10);
              !isFinite(n) || n < 0 || n >= this.Xot
                ? this.user().error(ui, "Invalid [slide] value: ", t)
                : null !== this.sst
                ? this.kst(n, i)
                : (this.ast = n);
            }),
            (e.W9 = function (t) {
              return t - 1 >= 0 ? t - 1 : this.rst ? this.Xot - 1 : null;
            }),
            (e.V9 = function (t) {
              return t + 1 < this.Xot ? t + 1 : this.rst ? 0 : null;
            }),
            (e.wst = function (t) {
              var i,
                n,
                r = this,
                e = this.Xot;
              if (t < 0 || t >= e || this.sst == t) return !1;
              var o = this.W9(t),
                s = this.V9(t),
                a = [];
              return (
                null != o && a.push(o),
                a.push(t),
                null != s && s !== o && a.push(s),
                void 0 === this.O4[t]
                  ? (St().error(
                      ui,
                      "Attempting to access a non-existant slide %s / %s",
                      t,
                      e
                    ),
                    !1)
                  : (a.forEach(function (i, n) {
                      r.rst && vt(r.Zot[i], "order", n + 1),
                        r.Zot[i].classList.add(C);
                      var e = _t(r.element);
                      i == t
                        ? (e.scheduleLayout(r.element, r.O4[i]),
                          e.scheduleResume(r.element, r.O4[i]),
                          r.O4[i].setAttribute("aria-hidden", "false"))
                        : (e.schedulePreload(r.element, r.O4[i]),
                          r.O4[i].setAttribute("aria-hidden", "true"));
                    }),
                    (this.W6.scrollLeft = this.Sst(t)),
                    this.Y9(t),
                    (this.sst = t),
                    this.ist &&
                      this.sst === this.Xot - 1 &&
                      (this.nst++, this.nst == this.ist && this.Mst()),
                    this.Ast(a),
                    null === (i = this.qd) ||
                      void 0 === i ||
                      i.setControlsState({
                        prev: this.Bot(),
                        next: this.Cot(),
                      }),
                    null === (n = this.qd) ||
                      void 0 === n ||
                      n.updateButtonTitles(
                        this.getPrevButtonTitle(),
                        this.getNextButtonTitle()
                      ),
                    !0)
              );
            }),
            (e.kst = function (t) {
              var i =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : 1,
                n = this.wst(t);
              if (n) {
                var r = "slideChange",
                  e = Vt(this.win, "slidescroll.".concat(r), { index: t });
                this.Fe.trigger(this.element, r, e, i),
                  M(this.element, r, { index: t, actionTrust: i });
              }
            }),
            (e.Sst = function (t) {
              var i = this.ust;
              return (
                ((!this.rst && 0 == t) || this.O4.length <= 1) && (i = 0), i
              );
            }),
            (e.Ast = function (t) {
              for (var i = this.Xot, n = 0; n < i; n++)
                this.Zot[n].classList.contains(C) &&
                  (t.includes(n) ||
                    (this.rst && vt(this.Zot[n], "order", ""),
                    this.Zot[n].classList.remove(C),
                    this.O4[n].removeAttribute("aria-hidden")),
                  this.sst != n &&
                    _t(this.element).schedulePause(this.element, this.O4[n]));
            }),
            (e.Ost = function (t, i) {
              var n = this;
              if (t == i) return $();
              var r = mt(t, i),
                e = Wt(0.8, 0, 0.6, 1),
                o = this.W6;
              return $t
                .animate(
                  o,
                  function (t) {
                    n.W6.scrollLeft = r(t);
                  },
                  80,
                  e
                )
                .thenAlways();
            }),
            (e.Rot = function () {
              Yt(
                this.element,
                "touchmove",
                function (t) {
                  return t.stopPropagation();
                },
                { passive: !0 }
              );
            }),
            (e.Y9 = function (t) {
              var i = t - this.sst;
              if (0 != i) {
                1 !== Math.abs(i) &&
                  ((i = i < 0 ? 1 : -1), null === this.sst && (i = 1));
                var n = {
                  fromSlide: null === this.sst ? "null" : this.lst[this.sst],
                  toSlide: this.lst[t],
                };
                this.V1("amp-carousel-change", n),
                  1 == i
                    ? this.V1("amp-carousel-next", n)
                    : this.V1("amp-carousel-prev", n);
              }
            }),
            (e.V1 = function (t, i) {
              !(function (t, i) {
                var n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : {},
                  r =
                    !(arguments.length > 3 && void 0 !== arguments[3]) ||
                    arguments[3];
                Pt(t).then(function (e) {
                  e && e.triggerEventForTarget(t, i, n, r);
                });
              })(this.element, t, i);
            }),
            (e.vst = function () {
              var t = Number(this.element.getAttribute("delay"));
              t > 0 && (this.tst = Math.max(1e3, t)),
                this.qot ||
                  (this.element.setAttribute("loop", ""),
                  (this.Kot = !0),
                  (this.qot = !0),
                  (this.rst = !0));
            }),
            (e.gj = function () {
              this.est &&
                0 != this.ist &&
                (this.bst(),
                (this.Yot = Ct(this.win).delay(
                  this.go.bind(this, 1, !0, !0),
                  this.tst
                )));
            }),
            (e._9 = function (t) {
              if (t != this.est) {
                var i = this.est;
                (this.qj = t),
                  (this.est = this.qj && this.isLoopingEligible()),
                  !i && this.est && this.vst(),
                  this.est ? this.gj() : this.bst();
              }
            }),
            (e.bst = function () {
              null !== this.Yot &&
                (Ct(this.win).cancel(this.Yot), (this.Yot = null));
            }),
            (e.Mst = function () {
              this.bst(),
                this.Kot &&
                  (this.element.removeAttribute("loop"),
                  (this.Kot = !1),
                  (this.qot = !1),
                  (this.rst = !1)),
                (this.qj = !1),
                (this.est = this.qj && this.isLoopingEligible());
            }),
            r
          );
        })(t.BaseElement),
        li = (function (t) {
          n(r, t);
          var i = a(r);
          function r() {
            return i.apply(this, arguments);
          }
          return (
            (r.prototype.upgradeCallback = function () {
              return Z(this.element)
                ? new Qt(this.element)
                : new hi(this.element);
            }),
            r
          );
        })(t.BaseElement);
      t.registerElement(
        "amp-carousel",
        li,
        '.amp-carousel-slide>.i-amphtml-replaced-content{-o-object-fit:contain;object-fit:contain}.amp-carousel-button{position:absolute;box-sizing:border-box;top:50%;height:34px;width:34px;border-radius:2px;opacity:0;pointer-events:all;background-color:rgba(0,0,0,.5);background-position:50% 50%;background-repeat:no-repeat;transform:translateY(-50%);visibility:hidden;z-index:10}.amp-carousel-button:focus{border:1px solid #000;outline:1px solid #fff}.amp-mode-mouse .amp-carousel-button,amp-carousel.i-amphtml-carousel-has-controls .amp-carousel-button,amp-carousel[controls] .amp-carousel-button{opacity:1;visibility:visible}.amp-carousel-button-prev{left:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M15 8.25H5.87l4.19-4.19L9 3 3 9l6 6 1.06-1.06-4.19-4.19H15z"/></svg>\');background-size:18px 18px}.amp-carousel-button-next{right:16px;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="%23fff"><path d="M9 3 7.94 4.06l4.19 4.19H3v1.5h9.13l-4.19 4.19L9 15l6-6z"/></svg>\');background-size:18px 18px}.i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:i-amphtml-carousel-hint 1s ease-in 3s 1 normal both}.amp-mode-mouse .i-amphtml-carousel-button-start-hint .amp-carousel-button:not(.amp-disabled){animation:none}@keyframes i-amphtml-carousel-hint{0%{opacity:1;visibility:visible}to{opacity:0;visibility:hidden}}amp-carousel .amp-carousel-button.amp-disabled{animation:none;clip:rect(0 0 0 0);clip-path:inset(50%);height:1px;overflow:hidden;position:absolute;white-space:nowrap;width:1px}amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-next,amp-carousel[i-amphtml-carousel-hide-buttons] .amp-carousel-button-prev{opacity:0;pointer-events:none;visibility:visible!important}.i-amphtml-slides-container{display:-ms-flexbox!important;display:flex!important;-ms-flex-wrap:nowrap;flex-wrap:nowrap;height:100%!important;left:0;overflow-x:auto!important;overflow-y:hidden!important;position:absolute!important;top:0;width:100%!important;scroll-snap-type:x mandatory!important;scrollbar-width:none;padding-bottom:20px!important;box-sizing:content-box!important;-webkit-overflow-scrolling:touch!important}.i-amphtml-slides-container::-webkit-scrollbar{display:none!important}.i-amphtml-slides-container.i-amphtml-no-scroll{overflow-x:hidden!important}.i-amphtml-slide-item{-ms-flex-align:center!important;align-items:center!important;display:none!important;-ms-flex:0 0 100%!important;flex:0 0 100%!important;height:100%!important;-ms-flex-pack:center!important;justify-content:center!important;position:relative!important;scroll-snap-align:start!important;width:100%!important}.i-amphtml-slide-item>*{height:100%;width:100%;overflow:hidden!important}.i-amphtml-slide-item-show{display:-ms-flexbox!important;display:flex!important}.i-amphtml-carousel-end-marker,.i-amphtml-carousel-start-marker{background-color:transparent!important;display:block!important;-ms-flex:0 0 1px!important;flex:0 0 1px!important;height:100%!important;position:relative!important;scroll-snap-align:start!important;width:1px!important}.i-amphtml-carousel-start-marker{-ms-flex-order:-1!important;order:-1!important;margin-left:-1px!important}.i-amphtml-carousel-end-marker{-ms-flex-order:100000000!important;order:100000000!important;margin-right:-1px!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container{scroll-snap-type:none!important}.i-amphtml-slidescroll-no-snap .i-amphtml-slide-item{scroll-snap-align:none!important}.i-amphtml-slidescroll-no-snap.i-amphtml-slides-container.i-amphtml-no-scroll{-webkit-overflow-scrolling:auto!important}.amp-scrollable-carousel-slide{display:inline-block!important;margin-left:8px}.amp-scrollable-carousel-slide:first-child{margin-left:0px}.i-amphtml-scrollable-carousel-container{white-space:nowrap!important;overflow-x:auto!important;overflow-y:hidden!important;-webkit-overflow-scrolling:touch!important}\n/*# sourceURL=/extensions/amp-carousel/0.1/amp-carousel.css*/'
      );
    })();
    /*! https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
  },
});
//# sourceMappingURL=amp-carousel-0.1.js.map
