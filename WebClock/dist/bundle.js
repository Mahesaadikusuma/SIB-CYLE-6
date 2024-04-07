/*! For license information please see bundle.js.LICENSE.txt */
(() => {
  var e = {
      8106: (e, t, n) => {
        "use strict";
        n.d(t, { A: () => r });
        var a = n(6314),
          s = n.n(a)()(function (e) {
            return e[1];
          });
        s.push([
          e.id,
          ".clock {\n  width: 400px;\n  padding: 30px;\n  background-color: black;\n\n  color: white;\n  font-family: sans-serif;\n\n  display: flex;\n  flex-direction: column;\n}\n\n.clock .time {\n  margin: 0 auto;\n  font-size: 64px;\n}\n\n.clock .date {\n  margin: 0 auto;\n  font-size: 24px;\n}\n",
          "",
        ]);
        const r = s;
      },
      6314: (e) => {
        "use strict";
        e.exports = function (e) {
          var t = [];
          return (
            (t.toString = function () {
              return this.map(function (t) {
                var n = e(t);
                return t[2] ? "@media ".concat(t[2], " {").concat(n, "}") : n;
              }).join("");
            }),
            (t.i = function (e, n, a) {
              "string" == typeof e && (e = [[null, e, ""]]);
              var s = {};
              if (a)
                for (var r = 0; r < this.length; r++) {
                  var i = this[r][0];
                  null != i && (s[i] = !0);
                }
              for (var o = 0; o < e.length; o++) {
                var d = [].concat(e[o]);
                (a && s[d[0]]) ||
                  (n &&
                    (d[2]
                      ? (d[2] = "".concat(n, " and ").concat(d[2]))
                      : (d[2] = n)),
                  t.push(d));
              }
            }),
            t
          );
        };
      },
      4692: function (e, t) {
        var n;
        !(function (t, n) {
          "use strict";
          "object" == typeof e.exports
            ? (e.exports = t.document
                ? n(t, !0)
                : function (e) {
                    if (!e.document)
                      throw new Error(
                        "jQuery requires a window with a document"
                      );
                    return n(e);
                  })
            : n(t);
        })("undefined" != typeof window ? window : this, function (a, s) {
          "use strict";
          var r = [],
            i = Object.getPrototypeOf,
            o = r.slice,
            d = r.flat
              ? function (e) {
                  return r.flat.call(e);
                }
              : function (e) {
                  return r.concat.apply([], e);
                },
            u = r.push,
            _ = r.indexOf,
            l = {},
            m = l.toString,
            c = l.hasOwnProperty,
            h = c.toString,
            f = h.call(Object),
            M = {},
            p = function (e) {
              return (
                "function" == typeof e &&
                "number" != typeof e.nodeType &&
                "function" != typeof e.item
              );
            },
            y = function (e) {
              return null != e && e === e.window;
            },
            L = a.document,
            Y = { type: !0, src: !0, nonce: !0, noModule: !0 };
          function g(e, t, n) {
            var a,
              s,
              r = (n = n || L).createElement("script");
            if (((r.text = e), t))
              for (a in Y)
                (s = t[a] || (t.getAttribute && t.getAttribute(a))) &&
                  r.setAttribute(a, s);
            n.head.appendChild(r).parentNode.removeChild(r);
          }
          function k(e) {
            return null == e
              ? e + ""
              : "object" == typeof e || "function" == typeof e
              ? l[m.call(e)] || "object"
              : typeof e;
          }
          var D = "3.7.1",
            v = /HTML$/i,
            T = function (e, t) {
              return new T.fn.init(e, t);
            };
          function w(e) {
            var t = !!e && "length" in e && e.length,
              n = k(e);
            return (
              !p(e) &&
              !y(e) &&
              ("array" === n ||
                0 === t ||
                ("number" == typeof t && t > 0 && t - 1 in e))
            );
          }
          function b(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
          }
          (T.fn = T.prototype =
            {
              jquery: D,
              constructor: T,
              length: 0,
              toArray: function () {
                return o.call(this);
              },
              get: function (e) {
                return null == e
                  ? o.call(this)
                  : e < 0
                  ? this[e + this.length]
                  : this[e];
              },
              pushStack: function (e) {
                var t = T.merge(this.constructor(), e);
                return (t.prevObject = this), t;
              },
              each: function (e) {
                return T.each(this, e);
              },
              map: function (e) {
                return this.pushStack(
                  T.map(this, function (t, n) {
                    return e.call(t, n, t);
                  })
                );
              },
              slice: function () {
                return this.pushStack(o.apply(this, arguments));
              },
              first: function () {
                return this.eq(0);
              },
              last: function () {
                return this.eq(-1);
              },
              even: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return (t + 1) % 2;
                  })
                );
              },
              odd: function () {
                return this.pushStack(
                  T.grep(this, function (e, t) {
                    return t % 2;
                  })
                );
              },
              eq: function (e) {
                var t = this.length,
                  n = +e + (e < 0 ? t : 0);
                return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
              },
              end: function () {
                return this.prevObject || this.constructor();
              },
              push: u,
              sort: r.sort,
              splice: r.splice,
            }),
            (T.extend = T.fn.extend =
              function () {
                var e,
                  t,
                  n,
                  a,
                  s,
                  r,
                  i = arguments[0] || {},
                  o = 1,
                  d = arguments.length,
                  u = !1;
                for (
                  "boolean" == typeof i &&
                    ((u = i), (i = arguments[o] || {}), o++),
                    "object" == typeof i || p(i) || (i = {}),
                    o === d && ((i = this), o--);
                  o < d;
                  o++
                )
                  if (null != (e = arguments[o]))
                    for (t in e)
                      (a = e[t]),
                        "__proto__" !== t &&
                          i !== a &&
                          (u &&
                          a &&
                          (T.isPlainObject(a) || (s = Array.isArray(a)))
                            ? ((n = i[t]),
                              (r =
                                s && !Array.isArray(n)
                                  ? []
                                  : s || T.isPlainObject(n)
                                  ? n
                                  : {}),
                              (s = !1),
                              (i[t] = T.extend(u, r, a)))
                            : void 0 !== a && (i[t] = a));
                return i;
              }),
            T.extend({
              expando: "jQuery" + (D + Math.random()).replace(/\D/g, ""),
              isReady: !0,
              error: function (e) {
                throw new Error(e);
              },
              noop: function () {},
              isPlainObject: function (e) {
                var t, n;
                return !(
                  !e ||
                  "[object Object]" !== m.call(e) ||
                  ((t = i(e)) &&
                    ("function" !=
                      typeof (n = c.call(t, "constructor") && t.constructor) ||
                      h.call(n) !== f))
                );
              },
              isEmptyObject: function (e) {
                var t;
                for (t in e) return !1;
                return !0;
              },
              globalEval: function (e, t, n) {
                g(e, { nonce: t && t.nonce }, n);
              },
              each: function (e, t) {
                var n,
                  a = 0;
                if (w(e))
                  for (
                    n = e.length;
                    a < n && !1 !== t.call(e[a], a, e[a]);
                    a++
                  );
                else for (a in e) if (!1 === t.call(e[a], a, e[a])) break;
                return e;
              },
              text: function (e) {
                var t,
                  n = "",
                  a = 0,
                  s = e.nodeType;
                if (!s) for (; (t = e[a++]); ) n += T.text(t);
                return 1 === s || 11 === s
                  ? e.textContent
                  : 9 === s
                  ? e.documentElement.textContent
                  : 3 === s || 4 === s
                  ? e.nodeValue
                  : n;
              },
              makeArray: function (e, t) {
                var n = t || [];
                return (
                  null != e &&
                    (w(Object(e))
                      ? T.merge(n, "string" == typeof e ? [e] : e)
                      : u.call(n, e)),
                  n
                );
              },
              inArray: function (e, t, n) {
                return null == t ? -1 : _.call(t, e, n);
              },
              isXMLDoc: function (e) {
                var t = e && e.namespaceURI,
                  n = e && (e.ownerDocument || e).documentElement;
                return !v.test(t || (n && n.nodeName) || "HTML");
              },
              merge: function (e, t) {
                for (var n = +t.length, a = 0, s = e.length; a < n; a++)
                  e[s++] = t[a];
                return (e.length = s), e;
              },
              grep: function (e, t, n) {
                for (var a = [], s = 0, r = e.length, i = !n; s < r; s++)
                  !t(e[s], s) !== i && a.push(e[s]);
                return a;
              },
              map: function (e, t, n) {
                var a,
                  s,
                  r = 0,
                  i = [];
                if (w(e))
                  for (a = e.length; r < a; r++)
                    null != (s = t(e[r], r, n)) && i.push(s);
                else for (r in e) null != (s = t(e[r], r, n)) && i.push(s);
                return d(i);
              },
              guid: 1,
              support: M,
            }),
            "function" == typeof Symbol &&
              (T.fn[Symbol.iterator] = r[Symbol.iterator]),
            T.each(
              "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
                " "
              ),
              function (e, t) {
                l["[object " + t + "]"] = t.toLowerCase();
              }
            );
          var S = r.pop,
            H = r.sort,
            x = r.splice,
            j = "[\\x20\\t\\r\\n\\f]",
            O = new RegExp(
              "^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$",
              "g"
            );
          T.contains = function (e, t) {
            var n = t && t.parentNode;
            return (
              e === n ||
              !(
                !n ||
                1 !== n.nodeType ||
                !(e.contains
                  ? e.contains(n)
                  : e.compareDocumentPosition &&
                    16 & e.compareDocumentPosition(n))
              )
            );
          };
          var P = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
          function W(e, t) {
            return t
              ? "\0" === e
                ? "�"
                : e.slice(0, -1) +
                  "\\" +
                  e.charCodeAt(e.length - 1).toString(16) +
                  " "
              : "\\" + e;
          }
          T.escapeSelector = function (e) {
            return (e + "").replace(P, W);
          };
          var E = L,
            A = u;
          !(function () {
            var e,
              t,
              n,
              s,
              i,
              d,
              u,
              l,
              m,
              h,
              f = A,
              p = T.expando,
              y = 0,
              L = 0,
              Y = ee(),
              g = ee(),
              k = ee(),
              D = ee(),
              v = function (e, t) {
                return e === t && (i = !0), 0;
              },
              w =
                "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
              P =
                "(?:\\\\[\\da-fA-F]{1,6}" +
                j +
                "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
              W =
                "\\[" +
                j +
                "*(" +
                P +
                ")(?:" +
                j +
                "*([*^$|!~]?=)" +
                j +
                "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
                P +
                "))|)" +
                j +
                "*\\]",
              F =
                ":(" +
                P +
                ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
                W +
                ")*)|.*)\\)|)",
              N = new RegExp(j + "+", "g"),
              C = new RegExp("^" + j + "*," + j + "*"),
              z = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
              R = new RegExp(j + "|>"),
              J = new RegExp(F),
              I = new RegExp("^" + P + "$"),
              q = {
                ID: new RegExp("^#(" + P + ")"),
                CLASS: new RegExp("^\\.(" + P + ")"),
                TAG: new RegExp("^(" + P + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp(
                  "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
                    j +
                    "*(even|odd|(([+-]|)(\\d*)n|)" +
                    j +
                    "*(?:([+-]|)" +
                    j +
                    "*(\\d+)|))" +
                    j +
                    "*\\)|)",
                  "i"
                ),
                bool: new RegExp("^(?:" + w + ")$", "i"),
                needsContext: new RegExp(
                  "^" +
                    j +
                    "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
                    j +
                    "*((?:-\\d)?\\d*)" +
                    j +
                    "*\\)|)(?=[^-]|$)",
                  "i"
                ),
              },
              U = /^(?:input|select|textarea|button)$/i,
              G = /^h\d$/i,
              B = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
              V = /[+~]/,
              $ = new RegExp(
                "\\\\[\\da-fA-F]{1,6}" + j + "?|\\\\([^\\r\\n\\f])",
                "g"
              ),
              K = function (e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return (
                  t ||
                  (n < 0
                    ? String.fromCharCode(n + 65536)
                    : String.fromCharCode(
                        (n >> 10) | 55296,
                        (1023 & n) | 56320
                      ))
                );
              },
              Z = function () {
                de();
              },
              X = me(
                function (e) {
                  return !0 === e.disabled && b(e, "fieldset");
                },
                { dir: "parentNode", next: "legend" }
              );
            try {
              f.apply((r = o.call(E.childNodes)), E.childNodes),
                r[E.childNodes.length].nodeType;
            } catch (e) {
              f = {
                apply: function (e, t) {
                  A.apply(e, o.call(t));
                },
                call: function (e) {
                  A.apply(e, o.call(arguments, 1));
                },
              };
            }
            function Q(e, t, n, a) {
              var s,
                r,
                i,
                o,
                u,
                _,
                c,
                h = t && t.ownerDocument,
                y = t ? t.nodeType : 9;
              if (
                ((n = n || []),
                "string" != typeof e || !e || (1 !== y && 9 !== y && 11 !== y))
              )
                return n;
              if (!a && (de(t), (t = t || d), l)) {
                if (11 !== y && (u = B.exec(e)))
                  if ((s = u[1])) {
                    if (9 === y) {
                      if (!(i = t.getElementById(s))) return n;
                      if (i.id === s) return f.call(n, i), n;
                    } else if (
                      h &&
                      (i = h.getElementById(s)) &&
                      Q.contains(t, i) &&
                      i.id === s
                    )
                      return f.call(n, i), n;
                  } else {
                    if (u[2]) return f.apply(n, t.getElementsByTagName(e)), n;
                    if ((s = u[3]) && t.getElementsByClassName)
                      return f.apply(n, t.getElementsByClassName(s)), n;
                  }
                if (!(D[e + " "] || (m && m.test(e)))) {
                  if (((c = e), (h = t), 1 === y && (R.test(e) || z.test(e)))) {
                    for (
                      ((h = (V.test(e) && oe(t.parentNode)) || t) == t &&
                        M.scope) ||
                        ((o = t.getAttribute("id"))
                          ? (o = T.escapeSelector(o))
                          : t.setAttribute("id", (o = p))),
                        r = (_ = _e(e)).length;
                      r--;

                    )
                      _[r] = (o ? "#" + o : ":scope") + " " + le(_[r]);
                    c = _.join(",");
                  }
                  try {
                    return f.apply(n, h.querySelectorAll(c)), n;
                  } catch (t) {
                    D(e, !0);
                  } finally {
                    o === p && t.removeAttribute("id");
                  }
                }
              }
              return ye(e.replace(O, "$1"), t, n, a);
            }
            function ee() {
              var e = [];
              return function n(a, s) {
                return (
                  e.push(a + " ") > t.cacheLength && delete n[e.shift()],
                  (n[a + " "] = s)
                );
              };
            }
            function te(e) {
              return (e[p] = !0), e;
            }
            function ne(e) {
              var t = d.createElement("fieldset");
              try {
                return !!e(t);
              } catch (e) {
                return !1;
              } finally {
                t.parentNode && t.parentNode.removeChild(t), (t = null);
              }
            }
            function ae(e) {
              return function (t) {
                return b(t, "input") && t.type === e;
              };
            }
            function se(e) {
              return function (t) {
                return (b(t, "input") || b(t, "button")) && t.type === e;
              };
            }
            function re(e) {
              return function (t) {
                return "form" in t
                  ? t.parentNode && !1 === t.disabled
                    ? "label" in t
                      ? "label" in t.parentNode
                        ? t.parentNode.disabled === e
                        : t.disabled === e
                      : t.isDisabled === e ||
                        (t.isDisabled !== !e && X(t) === e)
                    : t.disabled === e
                  : "label" in t && t.disabled === e;
              };
            }
            function ie(e) {
              return te(function (t) {
                return (
                  (t = +t),
                  te(function (n, a) {
                    for (var s, r = e([], n.length, t), i = r.length; i--; )
                      n[(s = r[i])] && (n[s] = !(a[s] = n[s]));
                  })
                );
              });
            }
            function oe(e) {
              return e && void 0 !== e.getElementsByTagName && e;
            }
            function de(e) {
              var n,
                a = e ? e.ownerDocument || e : E;
              return a != d && 9 === a.nodeType && a.documentElement
                ? ((u = (d = a).documentElement),
                  (l = !T.isXMLDoc(d)),
                  (h =
                    u.matches ||
                    u.webkitMatchesSelector ||
                    u.msMatchesSelector),
                  u.msMatchesSelector &&
                    E != d &&
                    (n = d.defaultView) &&
                    n.top !== n &&
                    n.addEventListener("unload", Z),
                  (M.getById = ne(function (e) {
                    return (
                      (u.appendChild(e).id = T.expando),
                      !d.getElementsByName ||
                        !d.getElementsByName(T.expando).length
                    );
                  })),
                  (M.disconnectedMatch = ne(function (e) {
                    return h.call(e, "*");
                  })),
                  (M.scope = ne(function () {
                    return d.querySelectorAll(":scope");
                  })),
                  (M.cssHas = ne(function () {
                    try {
                      return d.querySelector(":has(*,:jqfake)"), !1;
                    } catch (e) {
                      return !0;
                    }
                  })),
                  M.getById
                    ? ((t.filter.ID = function (e) {
                        var t = e.replace($, K);
                        return function (e) {
                          return e.getAttribute("id") === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && l) {
                          var n = t.getElementById(e);
                          return n ? [n] : [];
                        }
                      }))
                    : ((t.filter.ID = function (e) {
                        var t = e.replace($, K);
                        return function (e) {
                          var n =
                            void 0 !== e.getAttributeNode &&
                            e.getAttributeNode("id");
                          return n && n.value === t;
                        };
                      }),
                      (t.find.ID = function (e, t) {
                        if (void 0 !== t.getElementById && l) {
                          var n,
                            a,
                            s,
                            r = t.getElementById(e);
                          if (r) {
                            if ((n = r.getAttributeNode("id")) && n.value === e)
                              return [r];
                            for (
                              s = t.getElementsByName(e), a = 0;
                              (r = s[a++]);

                            )
                              if (
                                (n = r.getAttributeNode("id")) &&
                                n.value === e
                              )
                                return [r];
                          }
                          return [];
                        }
                      })),
                  (t.find.TAG = function (e, t) {
                    return void 0 !== t.getElementsByTagName
                      ? t.getElementsByTagName(e)
                      : t.querySelectorAll(e);
                  }),
                  (t.find.CLASS = function (e, t) {
                    if (void 0 !== t.getElementsByClassName && l)
                      return t.getElementsByClassName(e);
                  }),
                  (m = []),
                  ne(function (e) {
                    var t;
                    (u.appendChild(e).innerHTML =
                      "<a id='" +
                      p +
                      "' href='' disabled='disabled'></a><select id='" +
                      p +
                      "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                      e.querySelectorAll("[selected]").length ||
                        m.push("\\[" + j + "*(?:value|" + w + ")"),
                      e.querySelectorAll("[id~=" + p + "-]").length ||
                        m.push("~="),
                      e.querySelectorAll("a#" + p + "+*").length ||
                        m.push(".#.+[+~]"),
                      e.querySelectorAll(":checked").length ||
                        m.push(":checked"),
                      (t = d.createElement("input")).setAttribute(
                        "type",
                        "hidden"
                      ),
                      e.appendChild(t).setAttribute("name", "D"),
                      (u.appendChild(e).disabled = !0),
                      2 !== e.querySelectorAll(":disabled").length &&
                        m.push(":enabled", ":disabled"),
                      (t = d.createElement("input")).setAttribute("name", ""),
                      e.appendChild(t),
                      e.querySelectorAll("[name='']").length ||
                        m.push(
                          "\\[" + j + "*name" + j + "*=" + j + "*(?:''|\"\")"
                        );
                  }),
                  M.cssHas || m.push(":has"),
                  (m = m.length && new RegExp(m.join("|"))),
                  (v = function (e, t) {
                    if (e === t) return (i = !0), 0;
                    var n =
                      !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return (
                      n ||
                      (1 &
                        (n =
                          (e.ownerDocument || e) == (t.ownerDocument || t)
                            ? e.compareDocumentPosition(t)
                            : 1) ||
                      (!M.sortDetached && t.compareDocumentPosition(e) === n)
                        ? e === d || (e.ownerDocument == E && Q.contains(E, e))
                          ? -1
                          : t === d ||
                            (t.ownerDocument == E && Q.contains(E, t))
                          ? 1
                          : s
                          ? _.call(s, e) - _.call(s, t)
                          : 0
                        : 4 & n
                        ? -1
                        : 1)
                    );
                  }),
                  d)
                : d;
            }
            for (e in ((Q.matches = function (e, t) {
              return Q(e, null, null, t);
            }),
            (Q.matchesSelector = function (e, t) {
              if ((de(e), l && !D[t + " "] && (!m || !m.test(t))))
                try {
                  var n = h.call(e, t);
                  if (
                    n ||
                    M.disconnectedMatch ||
                    (e.document && 11 !== e.document.nodeType)
                  )
                    return n;
                } catch (e) {
                  D(t, !0);
                }
              return Q(t, d, null, [e]).length > 0;
            }),
            (Q.contains = function (e, t) {
              return (e.ownerDocument || e) != d && de(e), T.contains(e, t);
            }),
            (Q.attr = function (e, n) {
              (e.ownerDocument || e) != d && de(e);
              var a = t.attrHandle[n.toLowerCase()],
                s =
                  a && c.call(t.attrHandle, n.toLowerCase())
                    ? a(e, n, !l)
                    : void 0;
              return void 0 !== s ? s : e.getAttribute(n);
            }),
            (Q.error = function (e) {
              throw new Error("Syntax error, unrecognized expression: " + e);
            }),
            (T.uniqueSort = function (e) {
              var t,
                n = [],
                a = 0,
                r = 0;
              if (
                ((i = !M.sortStable),
                (s = !M.sortStable && o.call(e, 0)),
                H.call(e, v),
                i)
              ) {
                for (; (t = e[r++]); ) t === e[r] && (a = n.push(r));
                for (; a--; ) x.call(e, n[a], 1);
              }
              return (s = null), e;
            }),
            (T.fn.uniqueSort = function () {
              return this.pushStack(T.uniqueSort(o.apply(this)));
            }),
            (t = T.expr =
              {
                cacheLength: 50,
                createPseudo: te,
                match: q,
                attrHandle: {},
                find: {},
                relative: {
                  ">": { dir: "parentNode", first: !0 },
                  " ": { dir: "parentNode" },
                  "+": { dir: "previousSibling", first: !0 },
                  "~": { dir: "previousSibling" },
                },
                preFilter: {
                  ATTR: function (e) {
                    return (
                      (e[1] = e[1].replace($, K)),
                      (e[3] = (e[3] || e[4] || e[5] || "").replace($, K)),
                      "~=" === e[2] && (e[3] = " " + e[3] + " "),
                      e.slice(0, 4)
                    );
                  },
                  CHILD: function (e) {
                    return (
                      (e[1] = e[1].toLowerCase()),
                      "nth" === e[1].slice(0, 3)
                        ? (e[3] || Q.error(e[0]),
                          (e[4] = +(e[4]
                            ? e[5] + (e[6] || 1)
                            : 2 * ("even" === e[3] || "odd" === e[3]))),
                          (e[5] = +(e[7] + e[8] || "odd" === e[3])))
                        : e[3] && Q.error(e[0]),
                      e
                    );
                  },
                  PSEUDO: function (e) {
                    var t,
                      n = !e[6] && e[2];
                    return q.CHILD.test(e[0])
                      ? null
                      : (e[3]
                          ? (e[2] = e[4] || e[5] || "")
                          : n &&
                            J.test(n) &&
                            (t = _e(n, !0)) &&
                            (t = n.indexOf(")", n.length - t) - n.length) &&
                            ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                        e.slice(0, 3));
                  },
                },
                filter: {
                  TAG: function (e) {
                    var t = e.replace($, K).toLowerCase();
                    return "*" === e
                      ? function () {
                          return !0;
                        }
                      : function (e) {
                          return b(e, t);
                        };
                  },
                  CLASS: function (e) {
                    var t = Y[e + " "];
                    return (
                      t ||
                      ((t = new RegExp(
                        "(^|" + j + ")" + e + "(" + j + "|$)"
                      )) &&
                        Y(e, function (e) {
                          return t.test(
                            ("string" == typeof e.className && e.className) ||
                              (void 0 !== e.getAttribute &&
                                e.getAttribute("class")) ||
                              ""
                          );
                        }))
                    );
                  },
                  ATTR: function (e, t, n) {
                    return function (a) {
                      var s = Q.attr(a, e);
                      return null == s
                        ? "!=" === t
                        : !t ||
                            ((s += ""),
                            "=" === t
                              ? s === n
                              : "!=" === t
                              ? s !== n
                              : "^=" === t
                              ? n && 0 === s.indexOf(n)
                              : "*=" === t
                              ? n && s.indexOf(n) > -1
                              : "$=" === t
                              ? n && s.slice(-n.length) === n
                              : "~=" === t
                              ? (" " + s.replace(N, " ") + " ").indexOf(n) > -1
                              : "|=" === t &&
                                (s === n ||
                                  s.slice(0, n.length + 1) === n + "-"));
                    };
                  },
                  CHILD: function (e, t, n, a, s) {
                    var r = "nth" !== e.slice(0, 3),
                      i = "last" !== e.slice(-4),
                      o = "of-type" === t;
                    return 1 === a && 0 === s
                      ? function (e) {
                          return !!e.parentNode;
                        }
                      : function (t, n, d) {
                          var u,
                            _,
                            l,
                            m,
                            c,
                            h = r !== i ? "nextSibling" : "previousSibling",
                            f = t.parentNode,
                            M = o && t.nodeName.toLowerCase(),
                            L = !d && !o,
                            Y = !1;
                          if (f) {
                            if (r) {
                              for (; h; ) {
                                for (l = t; (l = l[h]); )
                                  if (o ? b(l, M) : 1 === l.nodeType) return !1;
                                c = h = "only" === e && !c && "nextSibling";
                              }
                              return !0;
                            }
                            if (
                              ((c = [i ? f.firstChild : f.lastChild]), i && L)
                            ) {
                              for (
                                Y =
                                  (m =
                                    (u =
                                      (_ = f[p] || (f[p] = {}))[e] || [])[0] ===
                                      y && u[1]) && u[2],
                                  l = m && f.childNodes[m];
                                (l =
                                  (++m && l && l[h]) || (Y = m = 0) || c.pop());

                              )
                                if (1 === l.nodeType && ++Y && l === t) {
                                  _[e] = [y, m, Y];
                                  break;
                                }
                            } else if (
                              (L &&
                                (Y = m =
                                  (u =
                                    (_ = t[p] || (t[p] = {}))[e] || [])[0] ===
                                    y && u[1]),
                              !1 === Y)
                            )
                              for (
                                ;
                                (l =
                                  (++m && l && l[h]) ||
                                  (Y = m = 0) ||
                                  c.pop()) &&
                                (!(o ? b(l, M) : 1 === l.nodeType) ||
                                  !++Y ||
                                  (L && ((_ = l[p] || (l[p] = {}))[e] = [y, Y]),
                                  l !== t));

                              );
                            return (Y -= s) === a || (Y % a == 0 && Y / a >= 0);
                          }
                        };
                  },
                  PSEUDO: function (e, n) {
                    var a,
                      s =
                        t.pseudos[e] ||
                        t.setFilters[e.toLowerCase()] ||
                        Q.error("unsupported pseudo: " + e);
                    return s[p]
                      ? s(n)
                      : s.length > 1
                      ? ((a = [e, e, "", n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var a, r = s(e, n), i = r.length; i--; )
                                e[(a = _.call(e, r[i]))] = !(t[a] = r[i]);
                            })
                          : function (e) {
                              return s(e, 0, a);
                            })
                      : s;
                  },
                },
                pseudos: {
                  not: te(function (e) {
                    var t = [],
                      n = [],
                      a = pe(e.replace(O, "$1"));
                    return a[p]
                      ? te(function (e, t, n, s) {
                          for (
                            var r, i = a(e, null, s, []), o = e.length;
                            o--;

                          )
                            (r = i[o]) && (e[o] = !(t[o] = r));
                        })
                      : function (e, s, r) {
                          return (
                            (t[0] = e),
                            a(t, null, r, n),
                            (t[0] = null),
                            !n.pop()
                          );
                        };
                  }),
                  has: te(function (e) {
                    return function (t) {
                      return Q(e, t).length > 0;
                    };
                  }),
                  contains: te(function (e) {
                    return (
                      (e = e.replace($, K)),
                      function (t) {
                        return (t.textContent || T.text(t)).indexOf(e) > -1;
                      }
                    );
                  }),
                  lang: te(function (e) {
                    return (
                      I.test(e || "") || Q.error("unsupported lang: " + e),
                      (e = e.replace($, K).toLowerCase()),
                      function (t) {
                        var n;
                        do {
                          if (
                            (n = l
                              ? t.lang
                              : t.getAttribute("xml:lang") ||
                                t.getAttribute("lang"))
                          )
                            return (
                              (n = n.toLowerCase()) === e ||
                              0 === n.indexOf(e + "-")
                            );
                        } while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1;
                      }
                    );
                  }),
                  target: function (e) {
                    var t = a.location && a.location.hash;
                    return t && t.slice(1) === e.id;
                  },
                  root: function (e) {
                    return e === u;
                  },
                  focus: function (e) {
                    return (
                      e ===
                        (function () {
                          try {
                            return d.activeElement;
                          } catch (e) {}
                        })() &&
                      d.hasFocus() &&
                      !!(e.type || e.href || ~e.tabIndex)
                    );
                  },
                  enabled: re(!1),
                  disabled: re(!0),
                  checked: function (e) {
                    return (
                      (b(e, "input") && !!e.checked) ||
                      (b(e, "option") && !!e.selected)
                    );
                  },
                  selected: function (e) {
                    return (
                      e.parentNode && e.parentNode.selectedIndex,
                      !0 === e.selected
                    );
                  },
                  empty: function (e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                      if (e.nodeType < 6) return !1;
                    return !0;
                  },
                  parent: function (e) {
                    return !t.pseudos.empty(e);
                  },
                  header: function (e) {
                    return G.test(e.nodeName);
                  },
                  input: function (e) {
                    return U.test(e.nodeName);
                  },
                  button: function (e) {
                    return (
                      (b(e, "input") && "button" === e.type) || b(e, "button")
                    );
                  },
                  text: function (e) {
                    var t;
                    return (
                      b(e, "input") &&
                      "text" === e.type &&
                      (null == (t = e.getAttribute("type")) ||
                        "text" === t.toLowerCase())
                    );
                  },
                  first: ie(function () {
                    return [0];
                  }),
                  last: ie(function (e, t) {
                    return [t - 1];
                  }),
                  eq: ie(function (e, t, n) {
                    return [n < 0 ? n + t : n];
                  }),
                  even: ie(function (e, t) {
                    for (var n = 0; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  odd: ie(function (e, t) {
                    for (var n = 1; n < t; n += 2) e.push(n);
                    return e;
                  }),
                  lt: ie(function (e, t, n) {
                    var a;
                    for (a = n < 0 ? n + t : n > t ? t : n; --a >= 0; )
                      e.push(a);
                    return e;
                  }),
                  gt: ie(function (e, t, n) {
                    for (var a = n < 0 ? n + t : n; ++a < t; ) e.push(a);
                    return e;
                  }),
                },
              }),
            (t.pseudos.nth = t.pseudos.eq),
            { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
              t.pseudos[e] = ae(e);
            for (e in { submit: !0, reset: !0 }) t.pseudos[e] = se(e);
            function ue() {}
            function _e(e, n) {
              var a,
                s,
                r,
                i,
                o,
                d,
                u,
                _ = g[e + " "];
              if (_) return n ? 0 : _.slice(0);
              for (o = e, d = [], u = t.preFilter; o; ) {
                for (i in ((a && !(s = C.exec(o))) ||
                  (s && (o = o.slice(s[0].length) || o), d.push((r = []))),
                (a = !1),
                (s = z.exec(o)) &&
                  ((a = s.shift()),
                  r.push({ value: a, type: s[0].replace(O, " ") }),
                  (o = o.slice(a.length))),
                t.filter))
                  !(s = q[i].exec(o)) ||
                    (u[i] && !(s = u[i](s))) ||
                    ((a = s.shift()),
                    r.push({ value: a, type: i, matches: s }),
                    (o = o.slice(a.length)));
                if (!a) break;
              }
              return n ? o.length : o ? Q.error(e) : g(e, d).slice(0);
            }
            function le(e) {
              for (var t = 0, n = e.length, a = ""; t < n; t++) a += e[t].value;
              return a;
            }
            function me(e, t, n) {
              var a = t.dir,
                s = t.next,
                r = s || a,
                i = n && "parentNode" === r,
                o = L++;
              return t.first
                ? function (t, n, s) {
                    for (; (t = t[a]); )
                      if (1 === t.nodeType || i) return e(t, n, s);
                    return !1;
                  }
                : function (t, n, d) {
                    var u,
                      _,
                      l = [y, o];
                    if (d) {
                      for (; (t = t[a]); )
                        if ((1 === t.nodeType || i) && e(t, n, d)) return !0;
                    } else
                      for (; (t = t[a]); )
                        if (1 === t.nodeType || i)
                          if (((_ = t[p] || (t[p] = {})), s && b(t, s)))
                            t = t[a] || t;
                          else {
                            if ((u = _[r]) && u[0] === y && u[1] === o)
                              return (l[2] = u[2]);
                            if (((_[r] = l), (l[2] = e(t, n, d)))) return !0;
                          }
                    return !1;
                  };
            }
            function ce(e) {
              return e.length > 1
                ? function (t, n, a) {
                    for (var s = e.length; s--; ) if (!e[s](t, n, a)) return !1;
                    return !0;
                  }
                : e[0];
            }
            function he(e, t, n, a, s) {
              for (
                var r, i = [], o = 0, d = e.length, u = null != t;
                o < d;
                o++
              )
                (r = e[o]) &&
                  ((n && !n(r, a, s)) || (i.push(r), u && t.push(o)));
              return i;
            }
            function fe(e, t, n, a, s, r) {
              return (
                a && !a[p] && (a = fe(a)),
                s && !s[p] && (s = fe(s, r)),
                te(function (r, i, o, d) {
                  var u,
                    l,
                    m,
                    c,
                    h = [],
                    M = [],
                    p = i.length,
                    y =
                      r ||
                      (function (e, t, n) {
                        for (var a = 0, s = t.length; a < s; a++) Q(e, t[a], n);
                        return n;
                      })(t || "*", o.nodeType ? [o] : o, []),
                    L = !e || (!r && t) ? y : he(y, h, e, o, d);
                  if (
                    (n
                      ? n(L, (c = s || (r ? e : p || a) ? [] : i), o, d)
                      : (c = L),
                    a)
                  )
                    for (u = he(c, M), a(u, [], o, d), l = u.length; l--; )
                      (m = u[l]) && (c[M[l]] = !(L[M[l]] = m));
                  if (r) {
                    if (s || e) {
                      if (s) {
                        for (u = [], l = c.length; l--; )
                          (m = c[l]) && u.push((L[l] = m));
                        s(null, (c = []), u, d);
                      }
                      for (l = c.length; l--; )
                        (m = c[l]) &&
                          (u = s ? _.call(r, m) : h[l]) > -1 &&
                          (r[u] = !(i[u] = m));
                    }
                  } else (c = he(c === i ? c.splice(p, c.length) : c)), s ? s(null, i, c, d) : f.apply(i, c);
                })
              );
            }
            function Me(e) {
              for (
                var a,
                  s,
                  r,
                  i = e.length,
                  o = t.relative[e[0].type],
                  d = o || t.relative[" "],
                  u = o ? 1 : 0,
                  l = me(
                    function (e) {
                      return e === a;
                    },
                    d,
                    !0
                  ),
                  m = me(
                    function (e) {
                      return _.call(a, e) > -1;
                    },
                    d,
                    !0
                  ),
                  c = [
                    function (e, t, s) {
                      var r =
                        (!o && (s || t != n)) ||
                        ((a = t).nodeType ? l(e, t, s) : m(e, t, s));
                      return (a = null), r;
                    },
                  ];
                u < i;
                u++
              )
                if ((s = t.relative[e[u].type])) c = [me(ce(c), s)];
                else {
                  if ((s = t.filter[e[u].type].apply(null, e[u].matches))[p]) {
                    for (r = ++u; r < i && !t.relative[e[r].type]; r++);
                    return fe(
                      u > 1 && ce(c),
                      u > 1 &&
                        le(
                          e
                            .slice(0, u - 1)
                            .concat({ value: " " === e[u - 2].type ? "*" : "" })
                        ).replace(O, "$1"),
                      s,
                      u < r && Me(e.slice(u, r)),
                      r < i && Me((e = e.slice(r))),
                      r < i && le(e)
                    );
                  }
                  c.push(s);
                }
              return ce(c);
            }
            function pe(e, a) {
              var s,
                r = [],
                i = [],
                o = k[e + " "];
              if (!o) {
                for (a || (a = _e(e)), s = a.length; s--; )
                  (o = Me(a[s]))[p] ? r.push(o) : i.push(o);
                (o = k(
                  e,
                  (function (e, a) {
                    var s = a.length > 0,
                      r = e.length > 0,
                      i = function (i, o, u, _, m) {
                        var c,
                          h,
                          M,
                          p = 0,
                          L = "0",
                          Y = i && [],
                          g = [],
                          k = n,
                          D = i || (r && t.find.TAG("*", m)),
                          v = (y += null == k ? 1 : Math.random() || 0.1),
                          w = D.length;
                        for (
                          m && (n = o == d || o || m);
                          L !== w && null != (c = D[L]);
                          L++
                        ) {
                          if (r && c) {
                            for (
                              h = 0,
                                o || c.ownerDocument == d || (de(c), (u = !l));
                              (M = e[h++]);

                            )
                              if (M(c, o || d, u)) {
                                f.call(_, c);
                                break;
                              }
                            m && (y = v);
                          }
                          s && ((c = !M && c) && p--, i && Y.push(c));
                        }
                        if (((p += L), s && L !== p)) {
                          for (h = 0; (M = a[h++]); ) M(Y, g, o, u);
                          if (i) {
                            if (p > 0)
                              for (; L--; ) Y[L] || g[L] || (g[L] = S.call(_));
                            g = he(g);
                          }
                          f.apply(_, g),
                            m &&
                              !i &&
                              g.length > 0 &&
                              p + a.length > 1 &&
                              T.uniqueSort(_);
                        }
                        return m && ((y = v), (n = k)), Y;
                      };
                    return s ? te(i) : i;
                  })(i, r)
                )),
                  (o.selector = e);
              }
              return o;
            }
            function ye(e, n, a, s) {
              var r,
                i,
                o,
                d,
                u,
                _ = "function" == typeof e && e,
                m = !s && _e((e = _.selector || e));
              if (((a = a || []), 1 === m.length)) {
                if (
                  (i = m[0] = m[0].slice(0)).length > 2 &&
                  "ID" === (o = i[0]).type &&
                  9 === n.nodeType &&
                  l &&
                  t.relative[i[1].type]
                ) {
                  if (
                    !(n = (t.find.ID(o.matches[0].replace($, K), n) || [])[0])
                  )
                    return a;
                  _ && (n = n.parentNode),
                    (e = e.slice(i.shift().value.length));
                }
                for (
                  r = q.needsContext.test(e) ? 0 : i.length;
                  r-- && ((o = i[r]), !t.relative[(d = o.type)]);

                )
                  if (
                    (u = t.find[d]) &&
                    (s = u(
                      o.matches[0].replace($, K),
                      (V.test(i[0].type) && oe(n.parentNode)) || n
                    ))
                  ) {
                    if ((i.splice(r, 1), !(e = s.length && le(i))))
                      return f.apply(a, s), a;
                    break;
                  }
              }
              return (
                (_ || pe(e, m))(
                  s,
                  n,
                  !l,
                  a,
                  !n || (V.test(e) && oe(n.parentNode)) || n
                ),
                a
              );
            }
            (ue.prototype = t.filters = t.pseudos),
              (t.setFilters = new ue()),
              (M.sortStable = p.split("").sort(v).join("") === p),
              de(),
              (M.sortDetached = ne(function (e) {
                return (
                  1 & e.compareDocumentPosition(d.createElement("fieldset"))
                );
              })),
              (T.find = Q),
              (T.expr[":"] = T.expr.pseudos),
              (T.unique = T.uniqueSort),
              (Q.compile = pe),
              (Q.select = ye),
              (Q.setDocument = de),
              (Q.tokenize = _e),
              (Q.escape = T.escapeSelector),
              (Q.getText = T.text),
              (Q.isXML = T.isXMLDoc),
              (Q.selectors = T.expr),
              (Q.support = T.support),
              (Q.uniqueSort = T.uniqueSort);
          })();
          var F = function (e, t, n) {
              for (
                var a = [], s = void 0 !== n;
                (e = e[t]) && 9 !== e.nodeType;

              )
                if (1 === e.nodeType) {
                  if (s && T(e).is(n)) break;
                  a.push(e);
                }
              return a;
            },
            N = function (e, t) {
              for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
              return n;
            },
            C = T.expr.match.needsContext,
            z =
              /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
          function R(e, t, n) {
            return p(t)
              ? T.grep(e, function (e, a) {
                  return !!t.call(e, a, e) !== n;
                })
              : t.nodeType
              ? T.grep(e, function (e) {
                  return (e === t) !== n;
                })
              : "string" != typeof t
              ? T.grep(e, function (e) {
                  return _.call(t, e) > -1 !== n;
                })
              : T.filter(t, e, n);
          }
          (T.filter = function (e, t, n) {
            var a = t[0];
            return (
              n && (e = ":not(" + e + ")"),
              1 === t.length && 1 === a.nodeType
                ? T.find.matchesSelector(a, e)
                  ? [a]
                  : []
                : T.find.matches(
                    e,
                    T.grep(t, function (e) {
                      return 1 === e.nodeType;
                    })
                  )
            );
          }),
            T.fn.extend({
              find: function (e) {
                var t,
                  n,
                  a = this.length,
                  s = this;
                if ("string" != typeof e)
                  return this.pushStack(
                    T(e).filter(function () {
                      for (t = 0; t < a; t++)
                        if (T.contains(s[t], this)) return !0;
                    })
                  );
                for (n = this.pushStack([]), t = 0; t < a; t++)
                  T.find(e, s[t], n);
                return a > 1 ? T.uniqueSort(n) : n;
              },
              filter: function (e) {
                return this.pushStack(R(this, e || [], !1));
              },
              not: function (e) {
                return this.pushStack(R(this, e || [], !0));
              },
              is: function (e) {
                return !!R(
                  this,
                  "string" == typeof e && C.test(e) ? T(e) : e || [],
                  !1
                ).length;
              },
            });
          var J,
            I = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
          ((T.fn.init = function (e, t, n) {
            var a, s;
            if (!e) return this;
            if (((n = n || J), "string" == typeof e)) {
              if (
                !(a =
                  "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3
                    ? [null, e, null]
                    : I.exec(e)) ||
                (!a[1] && t)
              )
                return !t || t.jquery
                  ? (t || n).find(e)
                  : this.constructor(t).find(e);
              if (a[1]) {
                if (
                  ((t = t instanceof T ? t[0] : t),
                  T.merge(
                    this,
                    T.parseHTML(
                      a[1],
                      t && t.nodeType ? t.ownerDocument || t : L,
                      !0
                    )
                  ),
                  z.test(a[1]) && T.isPlainObject(t))
                )
                  for (a in t) p(this[a]) ? this[a](t[a]) : this.attr(a, t[a]);
                return this;
              }
              return (
                (s = L.getElementById(a[2])) &&
                  ((this[0] = s), (this.length = 1)),
                this
              );
            }
            return e.nodeType
              ? ((this[0] = e), (this.length = 1), this)
              : p(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(T)
              : T.makeArray(e, this);
          }).prototype = T.fn),
            (J = T(L));
          var q = /^(?:parents|prev(?:Until|All))/,
            U = { children: !0, contents: !0, next: !0, prev: !0 };
          function G(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; );
            return e;
          }
          T.fn.extend({
            has: function (e) {
              var t = T(e, this),
                n = t.length;
              return this.filter(function () {
                for (var e = 0; e < n; e++)
                  if (T.contains(this, t[e])) return !0;
              });
            },
            closest: function (e, t) {
              var n,
                a = 0,
                s = this.length,
                r = [],
                i = "string" != typeof e && T(e);
              if (!C.test(e))
                for (; a < s; a++)
                  for (n = this[a]; n && n !== t; n = n.parentNode)
                    if (
                      n.nodeType < 11 &&
                      (i
                        ? i.index(n) > -1
                        : 1 === n.nodeType && T.find.matchesSelector(n, e))
                    ) {
                      r.push(n);
                      break;
                    }
              return this.pushStack(r.length > 1 ? T.uniqueSort(r) : r);
            },
            index: function (e) {
              return e
                ? "string" == typeof e
                  ? _.call(T(e), this[0])
                  : _.call(this, e.jquery ? e[0] : e)
                : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1;
            },
            add: function (e, t) {
              return this.pushStack(T.uniqueSort(T.merge(this.get(), T(e, t))));
            },
            addBack: function (e) {
              return this.add(
                null == e ? this.prevObject : this.prevObject.filter(e)
              );
            },
          }),
            T.each(
              {
                parent: function (e) {
                  var t = e.parentNode;
                  return t && 11 !== t.nodeType ? t : null;
                },
                parents: function (e) {
                  return F(e, "parentNode");
                },
                parentsUntil: function (e, t, n) {
                  return F(e, "parentNode", n);
                },
                next: function (e) {
                  return G(e, "nextSibling");
                },
                prev: function (e) {
                  return G(e, "previousSibling");
                },
                nextAll: function (e) {
                  return F(e, "nextSibling");
                },
                prevAll: function (e) {
                  return F(e, "previousSibling");
                },
                nextUntil: function (e, t, n) {
                  return F(e, "nextSibling", n);
                },
                prevUntil: function (e, t, n) {
                  return F(e, "previousSibling", n);
                },
                siblings: function (e) {
                  return N((e.parentNode || {}).firstChild, e);
                },
                children: function (e) {
                  return N(e.firstChild);
                },
                contents: function (e) {
                  return null != e.contentDocument && i(e.contentDocument)
                    ? e.contentDocument
                    : (b(e, "template") && (e = e.content || e),
                      T.merge([], e.childNodes));
                },
              },
              function (e, t) {
                T.fn[e] = function (n, a) {
                  var s = T.map(this, t, n);
                  return (
                    "Until" !== e.slice(-5) && (a = n),
                    a && "string" == typeof a && (s = T.filter(a, s)),
                    this.length > 1 &&
                      (U[e] || T.uniqueSort(s), q.test(e) && s.reverse()),
                    this.pushStack(s)
                  );
                };
              }
            );
          var B = /[^\x20\t\r\n\f]+/g;
          function V(e) {
            return e;
          }
          function $(e) {
            throw e;
          }
          function K(e, t, n, a) {
            var s;
            try {
              e && p((s = e.promise))
                ? s.call(e).done(t).fail(n)
                : e && p((s = e.then))
                ? s.call(e, t, n)
                : t.apply(void 0, [e].slice(a));
            } catch (e) {
              n.apply(void 0, [e]);
            }
          }
          (T.Callbacks = function (e) {
            e =
              "string" == typeof e
                ? (function (e) {
                    var t = {};
                    return (
                      T.each(e.match(B) || [], function (e, n) {
                        t[n] = !0;
                      }),
                      t
                    );
                  })(e)
                : T.extend({}, e);
            var t,
              n,
              a,
              s,
              r = [],
              i = [],
              o = -1,
              d = function () {
                for (s = s || e.once, a = t = !0; i.length; o = -1)
                  for (n = i.shift(); ++o < r.length; )
                    !1 === r[o].apply(n[0], n[1]) &&
                      e.stopOnFalse &&
                      ((o = r.length), (n = !1));
                e.memory || (n = !1), (t = !1), s && (r = n ? [] : "");
              },
              u = {
                add: function () {
                  return (
                    r &&
                      (n && !t && ((o = r.length - 1), i.push(n)),
                      (function t(n) {
                        T.each(n, function (n, a) {
                          p(a)
                            ? (e.unique && u.has(a)) || r.push(a)
                            : a && a.length && "string" !== k(a) && t(a);
                        });
                      })(arguments),
                      n && !t && d()),
                    this
                  );
                },
                remove: function () {
                  return (
                    T.each(arguments, function (e, t) {
                      for (var n; (n = T.inArray(t, r, n)) > -1; )
                        r.splice(n, 1), n <= o && o--;
                    }),
                    this
                  );
                },
                has: function (e) {
                  return e ? T.inArray(e, r) > -1 : r.length > 0;
                },
                empty: function () {
                  return r && (r = []), this;
                },
                disable: function () {
                  return (s = i = []), (r = n = ""), this;
                },
                disabled: function () {
                  return !r;
                },
                lock: function () {
                  return (s = i = []), n || t || (r = n = ""), this;
                },
                locked: function () {
                  return !!s;
                },
                fireWith: function (e, n) {
                  return (
                    s ||
                      ((n = [e, (n = n || []).slice ? n.slice() : n]),
                      i.push(n),
                      t || d()),
                    this
                  );
                },
                fire: function () {
                  return u.fireWith(this, arguments), this;
                },
                fired: function () {
                  return !!a;
                },
              };
            return u;
          }),
            T.extend({
              Deferred: function (e) {
                var t = [
                    [
                      "notify",
                      "progress",
                      T.Callbacks("memory"),
                      T.Callbacks("memory"),
                      2,
                    ],
                    [
                      "resolve",
                      "done",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      0,
                      "resolved",
                    ],
                    [
                      "reject",
                      "fail",
                      T.Callbacks("once memory"),
                      T.Callbacks("once memory"),
                      1,
                      "rejected",
                    ],
                  ],
                  n = "pending",
                  s = {
                    state: function () {
                      return n;
                    },
                    always: function () {
                      return r.done(arguments).fail(arguments), this;
                    },
                    catch: function (e) {
                      return s.then(null, e);
                    },
                    pipe: function () {
                      var e = arguments;
                      return T.Deferred(function (n) {
                        T.each(t, function (t, a) {
                          var s = p(e[a[4]]) && e[a[4]];
                          r[a[1]](function () {
                            var e = s && s.apply(this, arguments);
                            e && p(e.promise)
                              ? e
                                  .promise()
                                  .progress(n.notify)
                                  .done(n.resolve)
                                  .fail(n.reject)
                              : n[a[0] + "With"](this, s ? [e] : arguments);
                          });
                        }),
                          (e = null);
                      }).promise();
                    },
                    then: function (e, n, s) {
                      var r = 0;
                      function i(e, t, n, s) {
                        return function () {
                          var o = this,
                            d = arguments,
                            u = function () {
                              var a, u;
                              if (!(e < r)) {
                                if ((a = n.apply(o, d)) === t.promise())
                                  throw new TypeError(
                                    "Thenable self-resolution"
                                  );
                                (u =
                                  a &&
                                  ("object" == typeof a ||
                                    "function" == typeof a) &&
                                  a.then),
                                  p(u)
                                    ? s
                                      ? u.call(a, i(r, t, V, s), i(r, t, $, s))
                                      : (r++,
                                        u.call(
                                          a,
                                          i(r, t, V, s),
                                          i(r, t, $, s),
                                          i(r, t, V, t.notifyWith)
                                        ))
                                    : (n !== V && ((o = void 0), (d = [a])),
                                      (s || t.resolveWith)(o, d));
                              }
                            },
                            _ = s
                              ? u
                              : function () {
                                  try {
                                    u();
                                  } catch (a) {
                                    T.Deferred.exceptionHook &&
                                      T.Deferred.exceptionHook(a, _.error),
                                      e + 1 >= r &&
                                        (n !== $ && ((o = void 0), (d = [a])),
                                        t.rejectWith(o, d));
                                  }
                                };
                          e
                            ? _()
                            : (T.Deferred.getErrorHook
                                ? (_.error = T.Deferred.getErrorHook())
                                : T.Deferred.getStackHook &&
                                  (_.error = T.Deferred.getStackHook()),
                              a.setTimeout(_));
                        };
                      }
                      return T.Deferred(function (a) {
                        t[0][3].add(i(0, a, p(s) ? s : V, a.notifyWith)),
                          t[1][3].add(i(0, a, p(e) ? e : V)),
                          t[2][3].add(i(0, a, p(n) ? n : $));
                      }).promise();
                    },
                    promise: function (e) {
                      return null != e ? T.extend(e, s) : s;
                    },
                  },
                  r = {};
                return (
                  T.each(t, function (e, a) {
                    var i = a[2],
                      o = a[5];
                    (s[a[1]] = i.add),
                      o &&
                        i.add(
                          function () {
                            n = o;
                          },
                          t[3 - e][2].disable,
                          t[3 - e][3].disable,
                          t[0][2].lock,
                          t[0][3].lock
                        ),
                      i.add(a[3].fire),
                      (r[a[0]] = function () {
                        return (
                          r[a[0] + "With"](
                            this === r ? void 0 : this,
                            arguments
                          ),
                          this
                        );
                      }),
                      (r[a[0] + "With"] = i.fireWith);
                  }),
                  s.promise(r),
                  e && e.call(r, r),
                  r
                );
              },
              when: function (e) {
                var t = arguments.length,
                  n = t,
                  a = Array(n),
                  s = o.call(arguments),
                  r = T.Deferred(),
                  i = function (e) {
                    return function (n) {
                      (a[e] = this),
                        (s[e] = arguments.length > 1 ? o.call(arguments) : n),
                        --t || r.resolveWith(a, s);
                    };
                  };
                if (
                  t <= 1 &&
                  (K(e, r.done(i(n)).resolve, r.reject, !t),
                  "pending" === r.state() || p(s[n] && s[n].then))
                )
                  return r.then();
                for (; n--; ) K(s[n], i(n), r.reject);
                return r.promise();
              },
            });
          var Z = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
          (T.Deferred.exceptionHook = function (e, t) {
            a.console &&
              a.console.warn &&
              e &&
              Z.test(e.name) &&
              a.console.warn(
                "jQuery.Deferred exception: " + e.message,
                e.stack,
                t
              );
          }),
            (T.readyException = function (e) {
              a.setTimeout(function () {
                throw e;
              });
            });
          var X = T.Deferred();
          function Q() {
            L.removeEventListener("DOMContentLoaded", Q),
              a.removeEventListener("load", Q),
              T.ready();
          }
          (T.fn.ready = function (e) {
            return (
              X.then(e).catch(function (e) {
                T.readyException(e);
              }),
              this
            );
          }),
            T.extend({
              isReady: !1,
              readyWait: 1,
              ready: function (e) {
                (!0 === e ? --T.readyWait : T.isReady) ||
                  ((T.isReady = !0),
                  (!0 !== e && --T.readyWait > 0) || X.resolveWith(L, [T]));
              },
            }),
            (T.ready.then = X.then),
            "complete" === L.readyState ||
            ("loading" !== L.readyState && !L.documentElement.doScroll)
              ? a.setTimeout(T.ready)
              : (L.addEventListener("DOMContentLoaded", Q),
                a.addEventListener("load", Q));
          var ee = function (e, t, n, a, s, r, i) {
              var o = 0,
                d = e.length,
                u = null == n;
              if ("object" === k(n))
                for (o in ((s = !0), n)) ee(e, t, o, n[o], !0, r, i);
              else if (
                void 0 !== a &&
                ((s = !0),
                p(a) || (i = !0),
                u &&
                  (i
                    ? (t.call(e, a), (t = null))
                    : ((u = t),
                      (t = function (e, t, n) {
                        return u.call(T(e), n);
                      }))),
                t)
              )
                for (; o < d; o++)
                  t(e[o], n, i ? a : a.call(e[o], o, t(e[o], n)));
              return s ? e : u ? t.call(e) : d ? t(e[0], n) : r;
            },
            te = /^-ms-/,
            ne = /-([a-z])/g;
          function ae(e, t) {
            return t.toUpperCase();
          }
          function se(e) {
            return e.replace(te, "ms-").replace(ne, ae);
          }
          var re = function (e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
          };
          function ie() {
            this.expando = T.expando + ie.uid++;
          }
          (ie.uid = 1),
            (ie.prototype = {
              cache: function (e) {
                var t = e[this.expando];
                return (
                  t ||
                    ((t = {}),
                    re(e) &&
                      (e.nodeType
                        ? (e[this.expando] = t)
                        : Object.defineProperty(e, this.expando, {
                            value: t,
                            configurable: !0,
                          }))),
                  t
                );
              },
              set: function (e, t, n) {
                var a,
                  s = this.cache(e);
                if ("string" == typeof t) s[se(t)] = n;
                else for (a in t) s[se(a)] = t[a];
                return s;
              },
              get: function (e, t) {
                return void 0 === t
                  ? this.cache(e)
                  : e[this.expando] && e[this.expando][se(t)];
              },
              access: function (e, t, n) {
                return void 0 === t ||
                  (t && "string" == typeof t && void 0 === n)
                  ? this.get(e, t)
                  : (this.set(e, t, n), void 0 !== n ? n : t);
              },
              remove: function (e, t) {
                var n,
                  a = e[this.expando];
                if (void 0 !== a) {
                  if (void 0 !== t) {
                    n = (t = Array.isArray(t)
                      ? t.map(se)
                      : (t = se(t)) in a
                      ? [t]
                      : t.match(B) || []).length;
                    for (; n--; ) delete a[t[n]];
                  }
                  (void 0 === t || T.isEmptyObject(a)) &&
                    (e.nodeType
                      ? (e[this.expando] = void 0)
                      : delete e[this.expando]);
                }
              },
              hasData: function (e) {
                var t = e[this.expando];
                return void 0 !== t && !T.isEmptyObject(t);
              },
            });
          var oe = new ie(),
            de = new ie(),
            ue = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
            _e = /[A-Z]/g;
          function le(e, t, n) {
            var a;
            if (void 0 === n && 1 === e.nodeType)
              if (
                ((a = "data-" + t.replace(_e, "-$&").toLowerCase()),
                "string" == typeof (n = e.getAttribute(a)))
              ) {
                try {
                  n = (function (e) {
                    return (
                      "true" === e ||
                      ("false" !== e &&
                        ("null" === e
                          ? null
                          : e === +e + ""
                          ? +e
                          : ue.test(e)
                          ? JSON.parse(e)
                          : e))
                    );
                  })(n);
                } catch (e) {}
                de.set(e, t, n);
              } else n = void 0;
            return n;
          }
          T.extend({
            hasData: function (e) {
              return de.hasData(e) || oe.hasData(e);
            },
            data: function (e, t, n) {
              return de.access(e, t, n);
            },
            removeData: function (e, t) {
              de.remove(e, t);
            },
            _data: function (e, t, n) {
              return oe.access(e, t, n);
            },
            _removeData: function (e, t) {
              oe.remove(e, t);
            },
          }),
            T.fn.extend({
              data: function (e, t) {
                var n,
                  a,
                  s,
                  r = this[0],
                  i = r && r.attributes;
                if (void 0 === e) {
                  if (
                    this.length &&
                    ((s = de.get(r)),
                    1 === r.nodeType && !oe.get(r, "hasDataAttrs"))
                  ) {
                    for (n = i.length; n--; )
                      i[n] &&
                        0 === (a = i[n].name).indexOf("data-") &&
                        ((a = se(a.slice(5))), le(r, a, s[a]));
                    oe.set(r, "hasDataAttrs", !0);
                  }
                  return s;
                }
                return "object" == typeof e
                  ? this.each(function () {
                      de.set(this, e);
                    })
                  : ee(
                      this,
                      function (t) {
                        var n;
                        if (r && void 0 === t)
                          return void 0 !== (n = de.get(r, e)) ||
                            void 0 !== (n = le(r, e))
                            ? n
                            : void 0;
                        this.each(function () {
                          de.set(this, e, t);
                        });
                      },
                      null,
                      t,
                      arguments.length > 1,
                      null,
                      !0
                    );
              },
              removeData: function (e) {
                return this.each(function () {
                  de.remove(this, e);
                });
              },
            }),
            T.extend({
              queue: function (e, t, n) {
                var a;
                if (e)
                  return (
                    (t = (t || "fx") + "queue"),
                    (a = oe.get(e, t)),
                    n &&
                      (!a || Array.isArray(n)
                        ? (a = oe.access(e, t, T.makeArray(n)))
                        : a.push(n)),
                    a || []
                  );
              },
              dequeue: function (e, t) {
                t = t || "fx";
                var n = T.queue(e, t),
                  a = n.length,
                  s = n.shift(),
                  r = T._queueHooks(e, t);
                "inprogress" === s && ((s = n.shift()), a--),
                  s &&
                    ("fx" === t && n.unshift("inprogress"),
                    delete r.stop,
                    s.call(
                      e,
                      function () {
                        T.dequeue(e, t);
                      },
                      r
                    )),
                  !a && r && r.empty.fire();
              },
              _queueHooks: function (e, t) {
                var n = t + "queueHooks";
                return (
                  oe.get(e, n) ||
                  oe.access(e, n, {
                    empty: T.Callbacks("once memory").add(function () {
                      oe.remove(e, [t + "queue", n]);
                    }),
                  })
                );
              },
            }),
            T.fn.extend({
              queue: function (e, t) {
                var n = 2;
                return (
                  "string" != typeof e && ((t = e), (e = "fx"), n--),
                  arguments.length < n
                    ? T.queue(this[0], e)
                    : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = T.queue(this, e, t);
                        T._queueHooks(this, e),
                          "fx" === e &&
                            "inprogress" !== n[0] &&
                            T.dequeue(this, e);
                      })
                );
              },
              dequeue: function (e) {
                return this.each(function () {
                  T.dequeue(this, e);
                });
              },
              clearQueue: function (e) {
                return this.queue(e || "fx", []);
              },
              promise: function (e, t) {
                var n,
                  a = 1,
                  s = T.Deferred(),
                  r = this,
                  i = this.length,
                  o = function () {
                    --a || s.resolveWith(r, [r]);
                  };
                for (
                  "string" != typeof e && ((t = e), (e = void 0)),
                    e = e || "fx";
                  i--;

                )
                  (n = oe.get(r[i], e + "queueHooks")) &&
                    n.empty &&
                    (a++, n.empty.add(o));
                return o(), s.promise(t);
              },
            });
          var me = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            ce = new RegExp("^(?:([+-])=|)(" + me + ")([a-z%]*)$", "i"),
            he = ["Top", "Right", "Bottom", "Left"],
            fe = L.documentElement,
            Me = function (e) {
              return T.contains(e.ownerDocument, e);
            },
            pe = { composed: !0 };
          fe.getRootNode &&
            (Me = function (e) {
              return (
                T.contains(e.ownerDocument, e) ||
                e.getRootNode(pe) === e.ownerDocument
              );
            });
          var ye = function (e, t) {
            return (
              "none" === (e = t || e).style.display ||
              ("" === e.style.display &&
                Me(e) &&
                "none" === T.css(e, "display"))
            );
          };
          function Le(e, t, n, a) {
            var s,
              r,
              i = 20,
              o = a
                ? function () {
                    return a.cur();
                  }
                : function () {
                    return T.css(e, t, "");
                  },
              d = o(),
              u = (n && n[3]) || (T.cssNumber[t] ? "" : "px"),
              _ =
                e.nodeType &&
                (T.cssNumber[t] || ("px" !== u && +d)) &&
                ce.exec(T.css(e, t));
            if (_ && _[3] !== u) {
              for (d /= 2, u = u || _[3], _ = +d || 1; i--; )
                T.style(e, t, _ + u),
                  (1 - r) * (1 - (r = o() / d || 0.5)) <= 0 && (i = 0),
                  (_ /= r);
              (_ *= 2), T.style(e, t, _ + u), (n = n || []);
            }
            return (
              n &&
                ((_ = +_ || +d || 0),
                (s = n[1] ? _ + (n[1] + 1) * n[2] : +n[2]),
                a && ((a.unit = u), (a.start = _), (a.end = s))),
              s
            );
          }
          var Ye = {};
          function ge(e) {
            var t,
              n = e.ownerDocument,
              a = e.nodeName,
              s = Ye[a];
            return (
              s ||
              ((t = n.body.appendChild(n.createElement(a))),
              (s = T.css(t, "display")),
              t.parentNode.removeChild(t),
              "none" === s && (s = "block"),
              (Ye[a] = s),
              s)
            );
          }
          function ke(e, t) {
            for (var n, a, s = [], r = 0, i = e.length; r < i; r++)
              (a = e[r]).style &&
                ((n = a.style.display),
                t
                  ? ("none" === n &&
                      ((s[r] = oe.get(a, "display") || null),
                      s[r] || (a.style.display = "")),
                    "" === a.style.display && ye(a) && (s[r] = ge(a)))
                  : "none" !== n && ((s[r] = "none"), oe.set(a, "display", n)));
            for (r = 0; r < i; r++) null != s[r] && (e[r].style.display = s[r]);
            return e;
          }
          T.fn.extend({
            show: function () {
              return ke(this, !0);
            },
            hide: function () {
              return ke(this);
            },
            toggle: function (e) {
              return "boolean" == typeof e
                ? e
                  ? this.show()
                  : this.hide()
                : this.each(function () {
                    ye(this) ? T(this).show() : T(this).hide();
                  });
            },
          });
          var De,
            ve,
            Te = /^(?:checkbox|radio)$/i,
            we = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
            be = /^$|^module$|\/(?:java|ecma)script/i;
          (De = L.createDocumentFragment().appendChild(L.createElement("div"))),
            (ve = L.createElement("input")).setAttribute("type", "radio"),
            ve.setAttribute("checked", "checked"),
            ve.setAttribute("name", "t"),
            De.appendChild(ve),
            (M.checkClone = De.cloneNode(!0).cloneNode(!0).lastChild.checked),
            (De.innerHTML = "<textarea>x</textarea>"),
            (M.noCloneChecked = !!De.cloneNode(!0).lastChild.defaultValue),
            (De.innerHTML = "<option></option>"),
            (M.option = !!De.lastChild);
          var Se = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""],
          };
          function He(e, t) {
            var n;
            return (
              (n =
                void 0 !== e.getElementsByTagName
                  ? e.getElementsByTagName(t || "*")
                  : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || "*")
                  : []),
              void 0 === t || (t && b(e, t)) ? T.merge([e], n) : n
            );
          }
          function xe(e, t) {
            for (var n = 0, a = e.length; n < a; n++)
              oe.set(e[n], "globalEval", !t || oe.get(t[n], "globalEval"));
          }
          (Se.tbody = Se.tfoot = Se.colgroup = Se.caption = Se.thead),
            (Se.th = Se.td),
            M.option ||
              (Se.optgroup = Se.option =
                [1, "<select multiple='multiple'>", "</select>"]);
          var je = /<|&#?\w+;/;
          function Oe(e, t, n, a, s) {
            for (
              var r,
                i,
                o,
                d,
                u,
                _,
                l = t.createDocumentFragment(),
                m = [],
                c = 0,
                h = e.length;
              c < h;
              c++
            )
              if ((r = e[c]) || 0 === r)
                if ("object" === k(r)) T.merge(m, r.nodeType ? [r] : r);
                else if (je.test(r)) {
                  for (
                    i = i || l.appendChild(t.createElement("div")),
                      o = (we.exec(r) || ["", ""])[1].toLowerCase(),
                      d = Se[o] || Se._default,
                      i.innerHTML = d[1] + T.htmlPrefilter(r) + d[2],
                      _ = d[0];
                    _--;

                  )
                    i = i.lastChild;
                  T.merge(m, i.childNodes),
                    ((i = l.firstChild).textContent = "");
                } else m.push(t.createTextNode(r));
            for (l.textContent = "", c = 0; (r = m[c++]); )
              if (a && T.inArray(r, a) > -1) s && s.push(r);
              else if (
                ((u = Me(r)),
                (i = He(l.appendChild(r), "script")),
                u && xe(i),
                n)
              )
                for (_ = 0; (r = i[_++]); ) be.test(r.type || "") && n.push(r);
            return l;
          }
          var Pe = /^([^.]*)(?:\.(.+)|)/;
          function We() {
            return !0;
          }
          function Ee() {
            return !1;
          }
          function Ae(e, t, n, a, s, r) {
            var i, o;
            if ("object" == typeof t) {
              for (o in ("string" != typeof n && ((a = a || n), (n = void 0)),
              t))
                Ae(e, o, n, a, t[o], r);
              return e;
            }
            if (
              (null == a && null == s
                ? ((s = n), (a = n = void 0))
                : null == s &&
                  ("string" == typeof n
                    ? ((s = a), (a = void 0))
                    : ((s = a), (a = n), (n = void 0))),
              !1 === s)
            )
              s = Ee;
            else if (!s) return e;
            return (
              1 === r &&
                ((i = s),
                (s = function (e) {
                  return T().off(e), i.apply(this, arguments);
                }),
                (s.guid = i.guid || (i.guid = T.guid++))),
              e.each(function () {
                T.event.add(this, t, s, a, n);
              })
            );
          }
          function Fe(e, t, n) {
            n
              ? (oe.set(e, t, !1),
                T.event.add(e, t, {
                  namespace: !1,
                  handler: function (e) {
                    var n,
                      a = oe.get(this, t);
                    if (1 & e.isTrigger && this[t]) {
                      if (a)
                        (T.event.special[t] || {}).delegateType &&
                          e.stopPropagation();
                      else if (
                        ((a = o.call(arguments)),
                        oe.set(this, t, a),
                        this[t](),
                        (n = oe.get(this, t)),
                        oe.set(this, t, !1),
                        a !== n)
                      )
                        return (
                          e.stopImmediatePropagation(), e.preventDefault(), n
                        );
                    } else
                      a &&
                        (oe.set(
                          this,
                          t,
                          T.event.trigger(a[0], a.slice(1), this)
                        ),
                        e.stopPropagation(),
                        (e.isImmediatePropagationStopped = We));
                  },
                }))
              : void 0 === oe.get(e, t) && T.event.add(e, t, We);
          }
          (T.event = {
            global: {},
            add: function (e, t, n, a, s) {
              var r,
                i,
                o,
                d,
                u,
                _,
                l,
                m,
                c,
                h,
                f,
                M = oe.get(e);
              if (re(e))
                for (
                  n.handler && ((n = (r = n).handler), (s = r.selector)),
                    s && T.find.matchesSelector(fe, s),
                    n.guid || (n.guid = T.guid++),
                    (d = M.events) || (d = M.events = Object.create(null)),
                    (i = M.handle) ||
                      (i = M.handle =
                        function (t) {
                          return void 0 !== T && T.event.triggered !== t.type
                            ? T.event.dispatch.apply(e, arguments)
                            : void 0;
                        }),
                    u = (t = (t || "").match(B) || [""]).length;
                  u--;

                )
                  (c = f = (o = Pe.exec(t[u]) || [])[1]),
                    (h = (o[2] || "").split(".").sort()),
                    c &&
                      ((l = T.event.special[c] || {}),
                      (c = (s ? l.delegateType : l.bindType) || c),
                      (l = T.event.special[c] || {}),
                      (_ = T.extend(
                        {
                          type: c,
                          origType: f,
                          data: a,
                          handler: n,
                          guid: n.guid,
                          selector: s,
                          needsContext: s && T.expr.match.needsContext.test(s),
                          namespace: h.join("."),
                        },
                        r
                      )),
                      (m = d[c]) ||
                        (((m = d[c] = []).delegateCount = 0),
                        (l.setup && !1 !== l.setup.call(e, a, h, i)) ||
                          (e.addEventListener && e.addEventListener(c, i))),
                      l.add &&
                        (l.add.call(e, _),
                        _.handler.guid || (_.handler.guid = n.guid)),
                      s ? m.splice(m.delegateCount++, 0, _) : m.push(_),
                      (T.event.global[c] = !0));
            },
            remove: function (e, t, n, a, s) {
              var r,
                i,
                o,
                d,
                u,
                _,
                l,
                m,
                c,
                h,
                f,
                M = oe.hasData(e) && oe.get(e);
              if (M && (d = M.events)) {
                for (u = (t = (t || "").match(B) || [""]).length; u--; )
                  if (
                    ((c = f = (o = Pe.exec(t[u]) || [])[1]),
                    (h = (o[2] || "").split(".").sort()),
                    c)
                  ) {
                    for (
                      l = T.event.special[c] || {},
                        m =
                          d[(c = (a ? l.delegateType : l.bindType) || c)] || [],
                        o =
                          o[2] &&
                          new RegExp(
                            "(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"
                          ),
                        i = r = m.length;
                      r--;

                    )
                      (_ = m[r]),
                        (!s && f !== _.origType) ||
                          (n && n.guid !== _.guid) ||
                          (o && !o.test(_.namespace)) ||
                          (a &&
                            a !== _.selector &&
                            ("**" !== a || !_.selector)) ||
                          (m.splice(r, 1),
                          _.selector && m.delegateCount--,
                          l.remove && l.remove.call(e, _));
                    i &&
                      !m.length &&
                      ((l.teardown && !1 !== l.teardown.call(e, h, M.handle)) ||
                        T.removeEvent(e, c, M.handle),
                      delete d[c]);
                  } else for (c in d) T.event.remove(e, c + t[u], n, a, !0);
                T.isEmptyObject(d) && oe.remove(e, "handle events");
              }
            },
            dispatch: function (e) {
              var t,
                n,
                a,
                s,
                r,
                i,
                o = new Array(arguments.length),
                d = T.event.fix(e),
                u =
                  (oe.get(this, "events") || Object.create(null))[d.type] || [],
                _ = T.event.special[d.type] || {};
              for (o[0] = d, t = 1; t < arguments.length; t++)
                o[t] = arguments[t];
              if (
                ((d.delegateTarget = this),
                !_.preDispatch || !1 !== _.preDispatch.call(this, d))
              ) {
                for (
                  i = T.event.handlers.call(this, d, u), t = 0;
                  (s = i[t++]) && !d.isPropagationStopped();

                )
                  for (
                    d.currentTarget = s.elem, n = 0;
                    (r = s.handlers[n++]) && !d.isImmediatePropagationStopped();

                  )
                    (d.rnamespace &&
                      !1 !== r.namespace &&
                      !d.rnamespace.test(r.namespace)) ||
                      ((d.handleObj = r),
                      (d.data = r.data),
                      void 0 !==
                        (a = (
                          (T.event.special[r.origType] || {}).handle ||
                          r.handler
                        ).apply(s.elem, o)) &&
                        !1 === (d.result = a) &&
                        (d.preventDefault(), d.stopPropagation()));
                return _.postDispatch && _.postDispatch.call(this, d), d.result;
              }
            },
            handlers: function (e, t) {
              var n,
                a,
                s,
                r,
                i,
                o = [],
                d = t.delegateCount,
                u = e.target;
              if (d && u.nodeType && !("click" === e.type && e.button >= 1))
                for (; u !== this; u = u.parentNode || this)
                  if (
                    1 === u.nodeType &&
                    ("click" !== e.type || !0 !== u.disabled)
                  ) {
                    for (r = [], i = {}, n = 0; n < d; n++)
                      void 0 === i[(s = (a = t[n]).selector + " ")] &&
                        (i[s] = a.needsContext
                          ? T(s, this).index(u) > -1
                          : T.find(s, this, null, [u]).length),
                        i[s] && r.push(a);
                    r.length && o.push({ elem: u, handlers: r });
                  }
              return (
                (u = this),
                d < t.length && o.push({ elem: u, handlers: t.slice(d) }),
                o
              );
            },
            addProp: function (e, t) {
              Object.defineProperty(T.Event.prototype, e, {
                enumerable: !0,
                configurable: !0,
                get: p(t)
                  ? function () {
                      if (this.originalEvent) return t(this.originalEvent);
                    }
                  : function () {
                      if (this.originalEvent) return this.originalEvent[e];
                    },
                set: function (t) {
                  Object.defineProperty(this, e, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: t,
                  });
                },
              });
            },
            fix: function (e) {
              return e[T.expando] ? e : new T.Event(e);
            },
            special: {
              load: { noBubble: !0 },
              click: {
                setup: function (e) {
                  var t = this || e;
                  return (
                    Te.test(t.type) &&
                      t.click &&
                      b(t, "input") &&
                      Fe(t, "click", !0),
                    !1
                  );
                },
                trigger: function (e) {
                  var t = this || e;
                  return (
                    Te.test(t.type) &&
                      t.click &&
                      b(t, "input") &&
                      Fe(t, "click"),
                    !0
                  );
                },
                _default: function (e) {
                  var t = e.target;
                  return (
                    (Te.test(t.type) &&
                      t.click &&
                      b(t, "input") &&
                      oe.get(t, "click")) ||
                    b(t, "a")
                  );
                },
              },
              beforeunload: {
                postDispatch: function (e) {
                  void 0 !== e.result &&
                    e.originalEvent &&
                    (e.originalEvent.returnValue = e.result);
                },
              },
            },
          }),
            (T.removeEvent = function (e, t, n) {
              e.removeEventListener && e.removeEventListener(t, n);
            }),
            (T.Event = function (e, t) {
              if (!(this instanceof T.Event)) return new T.Event(e, t);
              e && e.type
                ? ((this.originalEvent = e),
                  (this.type = e.type),
                  (this.isDefaultPrevented =
                    e.defaultPrevented ||
                    (void 0 === e.defaultPrevented && !1 === e.returnValue)
                      ? We
                      : Ee),
                  (this.target =
                    e.target && 3 === e.target.nodeType
                      ? e.target.parentNode
                      : e.target),
                  (this.currentTarget = e.currentTarget),
                  (this.relatedTarget = e.relatedTarget))
                : (this.type = e),
                t && T.extend(this, t),
                (this.timeStamp = (e && e.timeStamp) || Date.now()),
                (this[T.expando] = !0);
            }),
            (T.Event.prototype = {
              constructor: T.Event,
              isDefaultPrevented: Ee,
              isPropagationStopped: Ee,
              isImmediatePropagationStopped: Ee,
              isSimulated: !1,
              preventDefault: function () {
                var e = this.originalEvent;
                (this.isDefaultPrevented = We),
                  e && !this.isSimulated && e.preventDefault();
              },
              stopPropagation: function () {
                var e = this.originalEvent;
                (this.isPropagationStopped = We),
                  e && !this.isSimulated && e.stopPropagation();
              },
              stopImmediatePropagation: function () {
                var e = this.originalEvent;
                (this.isImmediatePropagationStopped = We),
                  e && !this.isSimulated && e.stopImmediatePropagation(),
                  this.stopPropagation();
              },
            }),
            T.each(
              {
                altKey: !0,
                bubbles: !0,
                cancelable: !0,
                changedTouches: !0,
                ctrlKey: !0,
                detail: !0,
                eventPhase: !0,
                metaKey: !0,
                pageX: !0,
                pageY: !0,
                shiftKey: !0,
                view: !0,
                char: !0,
                code: !0,
                charCode: !0,
                key: !0,
                keyCode: !0,
                button: !0,
                buttons: !0,
                clientX: !0,
                clientY: !0,
                offsetX: !0,
                offsetY: !0,
                pointerId: !0,
                pointerType: !0,
                screenX: !0,
                screenY: !0,
                targetTouches: !0,
                toElement: !0,
                touches: !0,
                which: !0,
              },
              T.event.addProp
            ),
            T.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
              function n(e) {
                if (L.documentMode) {
                  var n = oe.get(this, "handle"),
                    a = T.event.fix(e);
                  (a.type = "focusin" === e.type ? "focus" : "blur"),
                    (a.isSimulated = !0),
                    n(e),
                    a.target === a.currentTarget && n(a);
                } else T.event.simulate(t, e.target, T.event.fix(e));
              }
              (T.event.special[e] = {
                setup: function () {
                  var a;
                  if ((Fe(this, e, !0), !L.documentMode)) return !1;
                  (a = oe.get(this, t)) || this.addEventListener(t, n),
                    oe.set(this, t, (a || 0) + 1);
                },
                trigger: function () {
                  return Fe(this, e), !0;
                },
                teardown: function () {
                  var e;
                  if (!L.documentMode) return !1;
                  (e = oe.get(this, t) - 1)
                    ? oe.set(this, t, e)
                    : (this.removeEventListener(t, n), oe.remove(this, t));
                },
                _default: function (t) {
                  return oe.get(t.target, e);
                },
                delegateType: t,
              }),
                (T.event.special[t] = {
                  setup: function () {
                    var a = this.ownerDocument || this.document || this,
                      s = L.documentMode ? this : a,
                      r = oe.get(s, t);
                    r ||
                      (L.documentMode
                        ? this.addEventListener(t, n)
                        : a.addEventListener(e, n, !0)),
                      oe.set(s, t, (r || 0) + 1);
                  },
                  teardown: function () {
                    var a = this.ownerDocument || this.document || this,
                      s = L.documentMode ? this : a,
                      r = oe.get(s, t) - 1;
                    r
                      ? oe.set(s, t, r)
                      : (L.documentMode
                          ? this.removeEventListener(t, n)
                          : a.removeEventListener(e, n, !0),
                        oe.remove(s, t));
                  },
                });
            }),
            T.each(
              {
                mouseenter: "mouseover",
                mouseleave: "mouseout",
                pointerenter: "pointerover",
                pointerleave: "pointerout",
              },
              function (e, t) {
                T.event.special[e] = {
                  delegateType: t,
                  bindType: t,
                  handle: function (e) {
                    var n,
                      a = e.relatedTarget,
                      s = e.handleObj;
                    return (
                      (a && (a === this || T.contains(this, a))) ||
                        ((e.type = s.origType),
                        (n = s.handler.apply(this, arguments)),
                        (e.type = t)),
                      n
                    );
                  },
                };
              }
            ),
            T.fn.extend({
              on: function (e, t, n, a) {
                return Ae(this, e, t, n, a);
              },
              one: function (e, t, n, a) {
                return Ae(this, e, t, n, a, 1);
              },
              off: function (e, t, n) {
                var a, s;
                if (e && e.preventDefault && e.handleObj)
                  return (
                    (a = e.handleObj),
                    T(e.delegateTarget).off(
                      a.namespace ? a.origType + "." + a.namespace : a.origType,
                      a.selector,
                      a.handler
                    ),
                    this
                  );
                if ("object" == typeof e) {
                  for (s in e) this.off(s, t, e[s]);
                  return this;
                }
                return (
                  (!1 !== t && "function" != typeof t) ||
                    ((n = t), (t = void 0)),
                  !1 === n && (n = Ee),
                  this.each(function () {
                    T.event.remove(this, e, n, t);
                  })
                );
              },
            });
          var Ne = /<script|<style|<link/i,
            Ce = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ze = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
          function Re(e, t) {
            return (
              (b(e, "table") &&
                b(11 !== t.nodeType ? t : t.firstChild, "tr") &&
                T(e).children("tbody")[0]) ||
              e
            );
          }
          function Je(e) {
            return (
              (e.type = (null !== e.getAttribute("type")) + "/" + e.type), e
            );
          }
          function Ie(e) {
            return (
              "true/" === (e.type || "").slice(0, 5)
                ? (e.type = e.type.slice(5))
                : e.removeAttribute("type"),
              e
            );
          }
          function qe(e, t) {
            var n, a, s, r, i, o;
            if (1 === t.nodeType) {
              if (oe.hasData(e) && (o = oe.get(e).events))
                for (s in (oe.remove(t, "handle events"), o))
                  for (n = 0, a = o[s].length; n < a; n++)
                    T.event.add(t, s, o[s][n]);
              de.hasData(e) &&
                ((r = de.access(e)), (i = T.extend({}, r)), de.set(t, i));
            }
          }
          function Ue(e, t) {
            var n = t.nodeName.toLowerCase();
            "input" === n && Te.test(e.type)
              ? (t.checked = e.checked)
              : ("input" !== n && "textarea" !== n) ||
                (t.defaultValue = e.defaultValue);
          }
          function Ge(e, t, n, a) {
            t = d(t);
            var s,
              r,
              i,
              o,
              u,
              _,
              l = 0,
              m = e.length,
              c = m - 1,
              h = t[0],
              f = p(h);
            if (
              f ||
              (m > 1 && "string" == typeof h && !M.checkClone && Ce.test(h))
            )
              return e.each(function (s) {
                var r = e.eq(s);
                f && (t[0] = h.call(this, s, r.html())), Ge(r, t, n, a);
              });
            if (
              m &&
              ((r = (s = Oe(t, e[0].ownerDocument, !1, e, a)).firstChild),
              1 === s.childNodes.length && (s = r),
              r || a)
            ) {
              for (o = (i = T.map(He(s, "script"), Je)).length; l < m; l++)
                (u = s),
                  l !== c &&
                    ((u = T.clone(u, !0, !0)),
                    o && T.merge(i, He(u, "script"))),
                  n.call(e[l], u, l);
              if (o)
                for (
                  _ = i[i.length - 1].ownerDocument, T.map(i, Ie), l = 0;
                  l < o;
                  l++
                )
                  (u = i[l]),
                    be.test(u.type || "") &&
                      !oe.access(u, "globalEval") &&
                      T.contains(_, u) &&
                      (u.src && "module" !== (u.type || "").toLowerCase()
                        ? T._evalUrl &&
                          !u.noModule &&
                          T._evalUrl(
                            u.src,
                            { nonce: u.nonce || u.getAttribute("nonce") },
                            _
                          )
                        : g(u.textContent.replace(ze, ""), u, _));
            }
            return e;
          }
          function Be(e, t, n) {
            for (
              var a, s = t ? T.filter(t, e) : e, r = 0;
              null != (a = s[r]);
              r++
            )
              n || 1 !== a.nodeType || T.cleanData(He(a)),
                a.parentNode &&
                  (n && Me(a) && xe(He(a, "script")),
                  a.parentNode.removeChild(a));
            return e;
          }
          T.extend({
            htmlPrefilter: function (e) {
              return e;
            },
            clone: function (e, t, n) {
              var a,
                s,
                r,
                i,
                o = e.cloneNode(!0),
                d = Me(e);
              if (
                !(
                  M.noCloneChecked ||
                  (1 !== e.nodeType && 11 !== e.nodeType) ||
                  T.isXMLDoc(e)
                )
              )
                for (i = He(o), a = 0, s = (r = He(e)).length; a < s; a++)
                  Ue(r[a], i[a]);
              if (t)
                if (n)
                  for (
                    r = r || He(e), i = i || He(o), a = 0, s = r.length;
                    a < s;
                    a++
                  )
                    qe(r[a], i[a]);
                else qe(e, o);
              return (
                (i = He(o, "script")).length > 0 &&
                  xe(i, !d && He(e, "script")),
                o
              );
            },
            cleanData: function (e) {
              for (
                var t, n, a, s = T.event.special, r = 0;
                void 0 !== (n = e[r]);
                r++
              )
                if (re(n)) {
                  if ((t = n[oe.expando])) {
                    if (t.events)
                      for (a in t.events)
                        s[a]
                          ? T.event.remove(n, a)
                          : T.removeEvent(n, a, t.handle);
                    n[oe.expando] = void 0;
                  }
                  n[de.expando] && (n[de.expando] = void 0);
                }
            },
          }),
            T.fn.extend({
              detach: function (e) {
                return Be(this, e, !0);
              },
              remove: function (e) {
                return Be(this, e);
              },
              text: function (e) {
                return ee(
                  this,
                  function (e) {
                    return void 0 === e
                      ? T.text(this)
                      : this.empty().each(function () {
                          (1 !== this.nodeType &&
                            11 !== this.nodeType &&
                            9 !== this.nodeType) ||
                            (this.textContent = e);
                        });
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              append: function () {
                return Ge(this, arguments, function (e) {
                  (1 !== this.nodeType &&
                    11 !== this.nodeType &&
                    9 !== this.nodeType) ||
                    Re(this, e).appendChild(e);
                });
              },
              prepend: function () {
                return Ge(this, arguments, function (e) {
                  if (
                    1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType
                  ) {
                    var t = Re(this, e);
                    t.insertBefore(e, t.firstChild);
                  }
                });
              },
              before: function () {
                return Ge(this, arguments, function (e) {
                  this.parentNode && this.parentNode.insertBefore(e, this);
                });
              },
              after: function () {
                return Ge(this, arguments, function (e) {
                  this.parentNode &&
                    this.parentNode.insertBefore(e, this.nextSibling);
                });
              },
              empty: function () {
                for (var e, t = 0; null != (e = this[t]); t++)
                  1 === e.nodeType &&
                    (T.cleanData(He(e, !1)), (e.textContent = ""));
                return this;
              },
              clone: function (e, t) {
                return (
                  (e = null != e && e),
                  (t = null == t ? e : t),
                  this.map(function () {
                    return T.clone(this, e, t);
                  })
                );
              },
              html: function (e) {
                return ee(
                  this,
                  function (e) {
                    var t = this[0] || {},
                      n = 0,
                      a = this.length;
                    if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
                    if (
                      "string" == typeof e &&
                      !Ne.test(e) &&
                      !Se[(we.exec(e) || ["", ""])[1].toLowerCase()]
                    ) {
                      e = T.htmlPrefilter(e);
                      try {
                        for (; n < a; n++)
                          1 === (t = this[n] || {}).nodeType &&
                            (T.cleanData(He(t, !1)), (t.innerHTML = e));
                        t = 0;
                      } catch (e) {}
                    }
                    t && this.empty().append(e);
                  },
                  null,
                  e,
                  arguments.length
                );
              },
              replaceWith: function () {
                var e = [];
                return Ge(
                  this,
                  arguments,
                  function (t) {
                    var n = this.parentNode;
                    T.inArray(this, e) < 0 &&
                      (T.cleanData(He(this)), n && n.replaceChild(t, this));
                  },
                  e
                );
              },
            }),
            T.each(
              {
                appendTo: "append",
                prependTo: "prepend",
                insertBefore: "before",
                insertAfter: "after",
                replaceAll: "replaceWith",
              },
              function (e, t) {
                T.fn[e] = function (e) {
                  for (
                    var n, a = [], s = T(e), r = s.length - 1, i = 0;
                    i <= r;
                    i++
                  )
                    (n = i === r ? this : this.clone(!0)),
                      T(s[i])[t](n),
                      u.apply(a, n.get());
                  return this.pushStack(a);
                };
              }
            );
          var Ve = new RegExp("^(" + me + ")(?!px)[a-z%]+$", "i"),
            $e = /^--/,
            Ke = function (e) {
              var t = e.ownerDocument.defaultView;
              return (t && t.opener) || (t = a), t.getComputedStyle(e);
            },
            Ze = function (e, t, n) {
              var a,
                s,
                r = {};
              for (s in t) (r[s] = e.style[s]), (e.style[s] = t[s]);
              for (s in ((a = n.call(e)), t)) e.style[s] = r[s];
              return a;
            },
            Xe = new RegExp(he.join("|"), "i");
          function Qe(e, t, n) {
            var a,
              s,
              r,
              i,
              o = $e.test(t),
              d = e.style;
            return (
              (n = n || Ke(e)) &&
                ((i = n.getPropertyValue(t) || n[t]),
                o && i && (i = i.replace(O, "$1") || void 0),
                "" !== i || Me(e) || (i = T.style(e, t)),
                !M.pixelBoxStyles() &&
                  Ve.test(i) &&
                  Xe.test(t) &&
                  ((a = d.width),
                  (s = d.minWidth),
                  (r = d.maxWidth),
                  (d.minWidth = d.maxWidth = d.width = i),
                  (i = n.width),
                  (d.width = a),
                  (d.minWidth = s),
                  (d.maxWidth = r))),
              void 0 !== i ? i + "" : i
            );
          }
          function et(e, t) {
            return {
              get: function () {
                if (!e()) return (this.get = t).apply(this, arguments);
                delete this.get;
              },
            };
          }
          !(function () {
            function e() {
              if (_) {
                (u.style.cssText =
                  "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
                  (_.style.cssText =
                    "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
                  fe.appendChild(u).appendChild(_);
                var e = a.getComputedStyle(_);
                (n = "1%" !== e.top),
                  (d = 12 === t(e.marginLeft)),
                  (_.style.right = "60%"),
                  (i = 36 === t(e.right)),
                  (s = 36 === t(e.width)),
                  (_.style.position = "absolute"),
                  (r = 12 === t(_.offsetWidth / 3)),
                  fe.removeChild(u),
                  (_ = null);
              }
            }
            function t(e) {
              return Math.round(parseFloat(e));
            }
            var n,
              s,
              r,
              i,
              o,
              d,
              u = L.createElement("div"),
              _ = L.createElement("div");
            _.style &&
              ((_.style.backgroundClip = "content-box"),
              (_.cloneNode(!0).style.backgroundClip = ""),
              (M.clearCloneStyle = "content-box" === _.style.backgroundClip),
              T.extend(M, {
                boxSizingReliable: function () {
                  return e(), s;
                },
                pixelBoxStyles: function () {
                  return e(), i;
                },
                pixelPosition: function () {
                  return e(), n;
                },
                reliableMarginLeft: function () {
                  return e(), d;
                },
                scrollboxSize: function () {
                  return e(), r;
                },
                reliableTrDimensions: function () {
                  var e, t, n, s;
                  return (
                    null == o &&
                      ((e = L.createElement("table")),
                      (t = L.createElement("tr")),
                      (n = L.createElement("div")),
                      (e.style.cssText =
                        "position:absolute;left:-11111px;border-collapse:separate"),
                      (t.style.cssText =
                        "box-sizing:content-box;border:1px solid"),
                      (t.style.height = "1px"),
                      (n.style.height = "9px"),
                      (n.style.display = "block"),
                      fe.appendChild(e).appendChild(t).appendChild(n),
                      (s = a.getComputedStyle(t)),
                      (o =
                        parseInt(s.height, 10) +
                          parseInt(s.borderTopWidth, 10) +
                          parseInt(s.borderBottomWidth, 10) ===
                        t.offsetHeight),
                      fe.removeChild(e)),
                    o
                  );
                },
              }));
          })();
          var tt = ["Webkit", "Moz", "ms"],
            nt = L.createElement("div").style,
            at = {};
          function st(e) {
            return (
              T.cssProps[e] ||
              at[e] ||
              (e in nt
                ? e
                : (at[e] =
                    (function (e) {
                      for (
                        var t = e[0].toUpperCase() + e.slice(1), n = tt.length;
                        n--;

                      )
                        if ((e = tt[n] + t) in nt) return e;
                    })(e) || e))
            );
          }
          var rt = /^(none|table(?!-c[ea]).+)/,
            it = {
              position: "absolute",
              visibility: "hidden",
              display: "block",
            },
            ot = { letterSpacing: "0", fontWeight: "400" };
          function dt(e, t, n) {
            var a = ce.exec(t);
            return a ? Math.max(0, a[2] - (n || 0)) + (a[3] || "px") : t;
          }
          function ut(e, t, n, a, s, r) {
            var i = "width" === t ? 1 : 0,
              o = 0,
              d = 0,
              u = 0;
            if (n === (a ? "border" : "content")) return 0;
            for (; i < 4; i += 2)
              "margin" === n && (u += T.css(e, n + he[i], !0, s)),
                a
                  ? ("content" === n &&
                      (d -= T.css(e, "padding" + he[i], !0, s)),
                    "margin" !== n &&
                      (d -= T.css(e, "border" + he[i] + "Width", !0, s)))
                  : ((d += T.css(e, "padding" + he[i], !0, s)),
                    "padding" !== n
                      ? (d += T.css(e, "border" + he[i] + "Width", !0, s))
                      : (o += T.css(e, "border" + he[i] + "Width", !0, s)));
            return (
              !a &&
                r >= 0 &&
                (d +=
                  Math.max(
                    0,
                    Math.ceil(
                      e["offset" + t[0].toUpperCase() + t.slice(1)] -
                        r -
                        d -
                        o -
                        0.5
                    )
                  ) || 0),
              d + u
            );
          }
          function _t(e, t, n) {
            var a = Ke(e),
              s =
                (!M.boxSizingReliable() || n) &&
                "border-box" === T.css(e, "boxSizing", !1, a),
              r = s,
              i = Qe(e, t, a),
              o = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Ve.test(i)) {
              if (!n) return i;
              i = "auto";
            }
            return (
              ((!M.boxSizingReliable() && s) ||
                (!M.reliableTrDimensions() && b(e, "tr")) ||
                "auto" === i ||
                (!parseFloat(i) && "inline" === T.css(e, "display", !1, a))) &&
                e.getClientRects().length &&
                ((s = "border-box" === T.css(e, "boxSizing", !1, a)),
                (r = o in e) && (i = e[o])),
              (i = parseFloat(i) || 0) +
                ut(e, t, n || (s ? "border" : "content"), r, a, i) +
                "px"
            );
          }
          function lt(e, t, n, a, s) {
            return new lt.prototype.init(e, t, n, a, s);
          }
          T.extend({
            cssHooks: {
              opacity: {
                get: function (e, t) {
                  if (t) {
                    var n = Qe(e, "opacity");
                    return "" === n ? "1" : n;
                  }
                },
              },
            },
            cssNumber: {
              animationIterationCount: !0,
              aspectRatio: !0,
              borderImageSlice: !0,
              columnCount: !0,
              flexGrow: !0,
              flexShrink: !0,
              fontWeight: !0,
              gridArea: !0,
              gridColumn: !0,
              gridColumnEnd: !0,
              gridColumnStart: !0,
              gridRow: !0,
              gridRowEnd: !0,
              gridRowStart: !0,
              lineHeight: !0,
              opacity: !0,
              order: !0,
              orphans: !0,
              scale: !0,
              widows: !0,
              zIndex: !0,
              zoom: !0,
              fillOpacity: !0,
              floodOpacity: !0,
              stopOpacity: !0,
              strokeMiterlimit: !0,
              strokeOpacity: !0,
            },
            cssProps: {},
            style: function (e, t, n, a) {
              if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var s,
                  r,
                  i,
                  o = se(t),
                  d = $e.test(t),
                  u = e.style;
                if (
                  (d || (t = st(o)),
                  (i = T.cssHooks[t] || T.cssHooks[o]),
                  void 0 === n)
                )
                  return i && "get" in i && void 0 !== (s = i.get(e, !1, a))
                    ? s
                    : u[t];
                "string" == (r = typeof n) &&
                  (s = ce.exec(n)) &&
                  s[1] &&
                  ((n = Le(e, t, s)), (r = "number")),
                  null != n &&
                    n == n &&
                    ("number" !== r ||
                      d ||
                      (n += (s && s[3]) || (T.cssNumber[o] ? "" : "px")),
                    M.clearCloneStyle ||
                      "" !== n ||
                      0 !== t.indexOf("background") ||
                      (u[t] = "inherit"),
                    (i && "set" in i && void 0 === (n = i.set(e, n, a))) ||
                      (d ? u.setProperty(t, n) : (u[t] = n)));
              }
            },
            css: function (e, t, n, a) {
              var s,
                r,
                i,
                o = se(t);
              return (
                $e.test(t) || (t = st(o)),
                (i = T.cssHooks[t] || T.cssHooks[o]) &&
                  "get" in i &&
                  (s = i.get(e, !0, n)),
                void 0 === s && (s = Qe(e, t, a)),
                "normal" === s && t in ot && (s = ot[t]),
                "" === n || n
                  ? ((r = parseFloat(s)), !0 === n || isFinite(r) ? r || 0 : s)
                  : s
              );
            },
          }),
            T.each(["height", "width"], function (e, t) {
              T.cssHooks[t] = {
                get: function (e, n, a) {
                  if (n)
                    return !rt.test(T.css(e, "display")) ||
                      (e.getClientRects().length &&
                        e.getBoundingClientRect().width)
                      ? _t(e, t, a)
                      : Ze(e, it, function () {
                          return _t(e, t, a);
                        });
                },
                set: function (e, n, a) {
                  var s,
                    r = Ke(e),
                    i = !M.scrollboxSize() && "absolute" === r.position,
                    o =
                      (i || a) && "border-box" === T.css(e, "boxSizing", !1, r),
                    d = a ? ut(e, t, a, o, r) : 0;
                  return (
                    o &&
                      i &&
                      (d -= Math.ceil(
                        e["offset" + t[0].toUpperCase() + t.slice(1)] -
                          parseFloat(r[t]) -
                          ut(e, t, "border", !1, r) -
                          0.5
                      )),
                    d &&
                      (s = ce.exec(n)) &&
                      "px" !== (s[3] || "px") &&
                      ((e.style[t] = n), (n = T.css(e, t))),
                    dt(0, n, d)
                  );
                },
              };
            }),
            (T.cssHooks.marginLeft = et(M.reliableMarginLeft, function (e, t) {
              if (t)
                return (
                  (parseFloat(Qe(e, "marginLeft")) ||
                    e.getBoundingClientRect().left -
                      Ze(e, { marginLeft: 0 }, function () {
                        return e.getBoundingClientRect().left;
                      })) + "px"
                );
            })),
            T.each(
              { margin: "", padding: "", border: "Width" },
              function (e, t) {
                (T.cssHooks[e + t] = {
                  expand: function (n) {
                    for (
                      var a = 0,
                        s = {},
                        r = "string" == typeof n ? n.split(" ") : [n];
                      a < 4;
                      a++
                    )
                      s[e + he[a] + t] = r[a] || r[a - 2] || r[0];
                    return s;
                  },
                }),
                  "margin" !== e && (T.cssHooks[e + t].set = dt);
              }
            ),
            T.fn.extend({
              css: function (e, t) {
                return ee(
                  this,
                  function (e, t, n) {
                    var a,
                      s,
                      r = {},
                      i = 0;
                    if (Array.isArray(t)) {
                      for (a = Ke(e), s = t.length; i < s; i++)
                        r[t[i]] = T.css(e, t[i], !1, a);
                      return r;
                    }
                    return void 0 !== n ? T.style(e, t, n) : T.css(e, t);
                  },
                  e,
                  t,
                  arguments.length > 1
                );
              },
            }),
            (T.Tween = lt),
            (lt.prototype = {
              constructor: lt,
              init: function (e, t, n, a, s, r) {
                (this.elem = e),
                  (this.prop = n),
                  (this.easing = s || T.easing._default),
                  (this.options = t),
                  (this.start = this.now = this.cur()),
                  (this.end = a),
                  (this.unit = r || (T.cssNumber[n] ? "" : "px"));
              },
              cur: function () {
                var e = lt.propHooks[this.prop];
                return e && e.get
                  ? e.get(this)
                  : lt.propHooks._default.get(this);
              },
              run: function (e) {
                var t,
                  n = lt.propHooks[this.prop];
                return (
                  this.options.duration
                    ? (this.pos = t =
                        T.easing[this.easing](
                          e,
                          this.options.duration * e,
                          0,
                          1,
                          this.options.duration
                        ))
                    : (this.pos = t = e),
                  (this.now = (this.end - this.start) * t + this.start),
                  this.options.step &&
                    this.options.step.call(this.elem, this.now, this),
                  n && n.set ? n.set(this) : lt.propHooks._default.set(this),
                  this
                );
              },
            }),
            (lt.prototype.init.prototype = lt.prototype),
            (lt.propHooks = {
              _default: {
                get: function (e) {
                  var t;
                  return 1 !== e.elem.nodeType ||
                    (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                    ? e.elem[e.prop]
                    : (t = T.css(e.elem, e.prop, "")) && "auto" !== t
                    ? t
                    : 0;
                },
                set: function (e) {
                  T.fx.step[e.prop]
                    ? T.fx.step[e.prop](e)
                    : 1 !== e.elem.nodeType ||
                      (!T.cssHooks[e.prop] && null == e.elem.style[st(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : T.style(e.elem, e.prop, e.now + e.unit);
                },
              },
            }),
            (lt.propHooks.scrollTop = lt.propHooks.scrollLeft =
              {
                set: function (e) {
                  e.elem.nodeType &&
                    e.elem.parentNode &&
                    (e.elem[e.prop] = e.now);
                },
              }),
            (T.easing = {
              linear: function (e) {
                return e;
              },
              swing: function (e) {
                return 0.5 - Math.cos(e * Math.PI) / 2;
              },
              _default: "swing",
            }),
            (T.fx = lt.prototype.init),
            (T.fx.step = {});
          var mt,
            ct,
            ht = /^(?:toggle|show|hide)$/,
            ft = /queueHooks$/;
          function Mt() {
            ct &&
              (!1 === L.hidden && a.requestAnimationFrame
                ? a.requestAnimationFrame(Mt)
                : a.setTimeout(Mt, T.fx.interval),
              T.fx.tick());
          }
          function pt() {
            return (
              a.setTimeout(function () {
                mt = void 0;
              }),
              (mt = Date.now())
            );
          }
          function yt(e, t) {
            var n,
              a = 0,
              s = { height: e };
            for (t = t ? 1 : 0; a < 4; a += 2 - t)
              s["margin" + (n = he[a])] = s["padding" + n] = e;
            return t && (s.opacity = s.width = e), s;
          }
          function Lt(e, t, n) {
            for (
              var a,
                s = (Yt.tweeners[t] || []).concat(Yt.tweeners["*"]),
                r = 0,
                i = s.length;
              r < i;
              r++
            )
              if ((a = s[r].call(n, t, e))) return a;
          }
          function Yt(e, t, n) {
            var a,
              s,
              r = 0,
              i = Yt.prefilters.length,
              o = T.Deferred().always(function () {
                delete d.elem;
              }),
              d = function () {
                if (s) return !1;
                for (
                  var t = mt || pt(),
                    n = Math.max(0, u.startTime + u.duration - t),
                    a = 1 - (n / u.duration || 0),
                    r = 0,
                    i = u.tweens.length;
                  r < i;
                  r++
                )
                  u.tweens[r].run(a);
                return (
                  o.notifyWith(e, [u, a, n]),
                  a < 1 && i
                    ? n
                    : (i || o.notifyWith(e, [u, 1, 0]),
                      o.resolveWith(e, [u]),
                      !1)
                );
              },
              u = o.promise({
                elem: e,
                props: T.extend({}, t),
                opts: T.extend(
                  !0,
                  { specialEasing: {}, easing: T.easing._default },
                  n
                ),
                originalProperties: t,
                originalOptions: n,
                startTime: mt || pt(),
                duration: n.duration,
                tweens: [],
                createTween: function (t, n) {
                  var a = T.Tween(
                    e,
                    u.opts,
                    t,
                    n,
                    u.opts.specialEasing[t] || u.opts.easing
                  );
                  return u.tweens.push(a), a;
                },
                stop: function (t) {
                  var n = 0,
                    a = t ? u.tweens.length : 0;
                  if (s) return this;
                  for (s = !0; n < a; n++) u.tweens[n].run(1);
                  return (
                    t
                      ? (o.notifyWith(e, [u, 1, 0]), o.resolveWith(e, [u, t]))
                      : o.rejectWith(e, [u, t]),
                    this
                  );
                },
              }),
              _ = u.props;
            for (
              (function (e, t) {
                var n, a, s, r, i;
                for (n in e)
                  if (
                    ((s = t[(a = se(n))]),
                    (r = e[n]),
                    Array.isArray(r) && ((s = r[1]), (r = e[n] = r[0])),
                    n !== a && ((e[a] = r), delete e[n]),
                    (i = T.cssHooks[a]) && ("expand" in i))
                  )
                    for (n in ((r = i.expand(r)), delete e[a], r))
                      (n in e) || ((e[n] = r[n]), (t[n] = s));
                  else t[a] = s;
              })(_, u.opts.specialEasing);
              r < i;
              r++
            )
              if ((a = Yt.prefilters[r].call(u, e, _, u.opts)))
                return (
                  p(a.stop) &&
                    (T._queueHooks(u.elem, u.opts.queue).stop = a.stop.bind(a)),
                  a
                );
            return (
              T.map(_, Lt, u),
              p(u.opts.start) && u.opts.start.call(e, u),
              u
                .progress(u.opts.progress)
                .done(u.opts.done, u.opts.complete)
                .fail(u.opts.fail)
                .always(u.opts.always),
              T.fx.timer(
                T.extend(d, { elem: e, anim: u, queue: u.opts.queue })
              ),
              u
            );
          }
          (T.Animation = T.extend(Yt, {
            tweeners: {
              "*": [
                function (e, t) {
                  var n = this.createTween(e, t);
                  return Le(n.elem, e, ce.exec(t), n), n;
                },
              ],
            },
            tweener: function (e, t) {
              p(e) ? ((t = e), (e = ["*"])) : (e = e.match(B));
              for (var n, a = 0, s = e.length; a < s; a++)
                (n = e[a]),
                  (Yt.tweeners[n] = Yt.tweeners[n] || []),
                  Yt.tweeners[n].unshift(t);
            },
            prefilters: [
              function (e, t, n) {
                var a,
                  s,
                  r,
                  i,
                  o,
                  d,
                  u,
                  _,
                  l = "width" in t || "height" in t,
                  m = this,
                  c = {},
                  h = e.style,
                  f = e.nodeType && ye(e),
                  M = oe.get(e, "fxshow");
                for (a in (n.queue ||
                  (null == (i = T._queueHooks(e, "fx")).unqueued &&
                    ((i.unqueued = 0),
                    (o = i.empty.fire),
                    (i.empty.fire = function () {
                      i.unqueued || o();
                    })),
                  i.unqueued++,
                  m.always(function () {
                    m.always(function () {
                      i.unqueued--, T.queue(e, "fx").length || i.empty.fire();
                    });
                  })),
                t))
                  if (((s = t[a]), ht.test(s))) {
                    if (
                      (delete t[a],
                      (r = r || "toggle" === s),
                      s === (f ? "hide" : "show"))
                    ) {
                      if ("show" !== s || !M || void 0 === M[a]) continue;
                      f = !0;
                    }
                    c[a] = (M && M[a]) || T.style(e, a);
                  }
                if ((d = !T.isEmptyObject(t)) || !T.isEmptyObject(c))
                  for (a in (l &&
                    1 === e.nodeType &&
                    ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                    null == (u = M && M.display) && (u = oe.get(e, "display")),
                    "none" === (_ = T.css(e, "display")) &&
                      (u
                        ? (_ = u)
                        : (ke([e], !0),
                          (u = e.style.display || u),
                          (_ = T.css(e, "display")),
                          ke([e]))),
                    ("inline" === _ || ("inline-block" === _ && null != u)) &&
                      "none" === T.css(e, "float") &&
                      (d ||
                        (m.done(function () {
                          h.display = u;
                        }),
                        null == u &&
                          ((_ = h.display), (u = "none" === _ ? "" : _))),
                      (h.display = "inline-block"))),
                  n.overflow &&
                    ((h.overflow = "hidden"),
                    m.always(function () {
                      (h.overflow = n.overflow[0]),
                        (h.overflowX = n.overflow[1]),
                        (h.overflowY = n.overflow[2]);
                    })),
                  (d = !1),
                  c))
                    d ||
                      (M
                        ? "hidden" in M && (f = M.hidden)
                        : (M = oe.access(e, "fxshow", { display: u })),
                      r && (M.hidden = !f),
                      f && ke([e], !0),
                      m.done(function () {
                        for (a in (f || ke([e]), oe.remove(e, "fxshow"), c))
                          T.style(e, a, c[a]);
                      })),
                      (d = Lt(f ? M[a] : 0, a, m)),
                      a in M ||
                        ((M[a] = d.start),
                        f && ((d.end = d.start), (d.start = 0)));
              },
            ],
            prefilter: function (e, t) {
              t ? Yt.prefilters.unshift(e) : Yt.prefilters.push(e);
            },
          })),
            (T.speed = function (e, t, n) {
              var a =
                e && "object" == typeof e
                  ? T.extend({}, e)
                  : {
                      complete: n || (!n && t) || (p(e) && e),
                      duration: e,
                      easing: (n && t) || (t && !p(t) && t),
                    };
              return (
                T.fx.off
                  ? (a.duration = 0)
                  : "number" != typeof a.duration &&
                    (a.duration in T.fx.speeds
                      ? (a.duration = T.fx.speeds[a.duration])
                      : (a.duration = T.fx.speeds._default)),
                (null != a.queue && !0 !== a.queue) || (a.queue = "fx"),
                (a.old = a.complete),
                (a.complete = function () {
                  p(a.old) && a.old.call(this),
                    a.queue && T.dequeue(this, a.queue);
                }),
                a
              );
            }),
            T.fn.extend({
              fadeTo: function (e, t, n, a) {
                return this.filter(ye)
                  .css("opacity", 0)
                  .show()
                  .end()
                  .animate({ opacity: t }, e, n, a);
              },
              animate: function (e, t, n, a) {
                var s = T.isEmptyObject(e),
                  r = T.speed(t, n, a),
                  i = function () {
                    var t = Yt(this, T.extend({}, e), r);
                    (s || oe.get(this, "finish")) && t.stop(!0);
                  };
                return (
                  (i.finish = i),
                  s || !1 === r.queue ? this.each(i) : this.queue(r.queue, i)
                );
              },
              stop: function (e, t, n) {
                var a = function (e) {
                  var t = e.stop;
                  delete e.stop, t(n);
                };
                return (
                  "string" != typeof e && ((n = t), (t = e), (e = void 0)),
                  t && this.queue(e || "fx", []),
                  this.each(function () {
                    var t = !0,
                      s = null != e && e + "queueHooks",
                      r = T.timers,
                      i = oe.get(this);
                    if (s) i[s] && i[s].stop && a(i[s]);
                    else
                      for (s in i) i[s] && i[s].stop && ft.test(s) && a(i[s]);
                    for (s = r.length; s--; )
                      r[s].elem !== this ||
                        (null != e && r[s].queue !== e) ||
                        (r[s].anim.stop(n), (t = !1), r.splice(s, 1));
                    (!t && n) || T.dequeue(this, e);
                  })
                );
              },
              finish: function (e) {
                return (
                  !1 !== e && (e = e || "fx"),
                  this.each(function () {
                    var t,
                      n = oe.get(this),
                      a = n[e + "queue"],
                      s = n[e + "queueHooks"],
                      r = T.timers,
                      i = a ? a.length : 0;
                    for (
                      n.finish = !0,
                        T.queue(this, e, []),
                        s && s.stop && s.stop.call(this, !0),
                        t = r.length;
                      t--;

                    )
                      r[t].elem === this &&
                        r[t].queue === e &&
                        (r[t].anim.stop(!0), r.splice(t, 1));
                    for (t = 0; t < i; t++)
                      a[t] && a[t].finish && a[t].finish.call(this);
                    delete n.finish;
                  })
                );
              },
            }),
            T.each(["toggle", "show", "hide"], function (e, t) {
              var n = T.fn[t];
              T.fn[t] = function (e, a, s) {
                return null == e || "boolean" == typeof e
                  ? n.apply(this, arguments)
                  : this.animate(yt(t, !0), e, a, s);
              };
            }),
            T.each(
              {
                slideDown: yt("show"),
                slideUp: yt("hide"),
                slideToggle: yt("toggle"),
                fadeIn: { opacity: "show" },
                fadeOut: { opacity: "hide" },
                fadeToggle: { opacity: "toggle" },
              },
              function (e, t) {
                T.fn[e] = function (e, n, a) {
                  return this.animate(t, e, n, a);
                };
              }
            ),
            (T.timers = []),
            (T.fx.tick = function () {
              var e,
                t = 0,
                n = T.timers;
              for (mt = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
              n.length || T.fx.stop(), (mt = void 0);
            }),
            (T.fx.timer = function (e) {
              T.timers.push(e), T.fx.start();
            }),
            (T.fx.interval = 13),
            (T.fx.start = function () {
              ct || ((ct = !0), Mt());
            }),
            (T.fx.stop = function () {
              ct = null;
            }),
            (T.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
            (T.fn.delay = function (e, t) {
              return (
                (e = (T.fx && T.fx.speeds[e]) || e),
                (t = t || "fx"),
                this.queue(t, function (t, n) {
                  var s = a.setTimeout(t, e);
                  n.stop = function () {
                    a.clearTimeout(s);
                  };
                })
              );
            }),
            (function () {
              var e = L.createElement("input"),
                t = L.createElement("select").appendChild(
                  L.createElement("option")
                );
              (e.type = "checkbox"),
                (M.checkOn = "" !== e.value),
                (M.optSelected = t.selected),
                ((e = L.createElement("input")).value = "t"),
                (e.type = "radio"),
                (M.radioValue = "t" === e.value);
            })();
          var gt,
            kt = T.expr.attrHandle;
          T.fn.extend({
            attr: function (e, t) {
              return ee(this, T.attr, e, t, arguments.length > 1);
            },
            removeAttr: function (e) {
              return this.each(function () {
                T.removeAttr(this, e);
              });
            },
          }),
            T.extend({
              attr: function (e, t, n) {
                var a,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return void 0 === e.getAttribute
                    ? T.prop(e, t, n)
                    : ((1 === r && T.isXMLDoc(e)) ||
                        (s =
                          T.attrHooks[t.toLowerCase()] ||
                          (T.expr.match.bool.test(t) ? gt : void 0)),
                      void 0 !== n
                        ? null === n
                          ? void T.removeAttr(e, t)
                          : s && "set" in s && void 0 !== (a = s.set(e, n, t))
                          ? a
                          : (e.setAttribute(t, n + ""), n)
                        : s && "get" in s && null !== (a = s.get(e, t))
                        ? a
                        : null == (a = T.find.attr(e, t))
                        ? void 0
                        : a);
              },
              attrHooks: {
                type: {
                  set: function (e, t) {
                    if (!M.radioValue && "radio" === t && b(e, "input")) {
                      var n = e.value;
                      return e.setAttribute("type", t), n && (e.value = n), t;
                    }
                  },
                },
              },
              removeAttr: function (e, t) {
                var n,
                  a = 0,
                  s = t && t.match(B);
                if (s && 1 === e.nodeType)
                  for (; (n = s[a++]); ) e.removeAttribute(n);
              },
            }),
            (gt = {
              set: function (e, t, n) {
                return !1 === t ? T.removeAttr(e, n) : e.setAttribute(n, n), n;
              },
            }),
            T.each(T.expr.match.bool.source.match(/\w+/g), function (e, t) {
              var n = kt[t] || T.find.attr;
              kt[t] = function (e, t, a) {
                var s,
                  r,
                  i = t.toLowerCase();
                return (
                  a ||
                    ((r = kt[i]),
                    (kt[i] = s),
                    (s = null != n(e, t, a) ? i : null),
                    (kt[i] = r)),
                  s
                );
              };
            });
          var Dt = /^(?:input|select|textarea|button)$/i,
            vt = /^(?:a|area)$/i;
          function Tt(e) {
            return (e.match(B) || []).join(" ");
          }
          function wt(e) {
            return (e.getAttribute && e.getAttribute("class")) || "";
          }
          function bt(e) {
            return Array.isArray(e)
              ? e
              : ("string" == typeof e && e.match(B)) || [];
          }
          T.fn.extend({
            prop: function (e, t) {
              return ee(this, T.prop, e, t, arguments.length > 1);
            },
            removeProp: function (e) {
              return this.each(function () {
                delete this[T.propFix[e] || e];
              });
            },
          }),
            T.extend({
              prop: function (e, t, n) {
                var a,
                  s,
                  r = e.nodeType;
                if (3 !== r && 8 !== r && 2 !== r)
                  return (
                    (1 === r && T.isXMLDoc(e)) ||
                      ((t = T.propFix[t] || t), (s = T.propHooks[t])),
                    void 0 !== n
                      ? s && "set" in s && void 0 !== (a = s.set(e, n, t))
                        ? a
                        : (e[t] = n)
                      : s && "get" in s && null !== (a = s.get(e, t))
                      ? a
                      : e[t]
                  );
              },
              propHooks: {
                tabIndex: {
                  get: function (e) {
                    var t = T.find.attr(e, "tabindex");
                    return t
                      ? parseInt(t, 10)
                      : Dt.test(e.nodeName) || (vt.test(e.nodeName) && e.href)
                      ? 0
                      : -1;
                  },
                },
              },
              propFix: { for: "htmlFor", class: "className" },
            }),
            M.optSelected ||
              (T.propHooks.selected = {
                get: function (e) {
                  var t = e.parentNode;
                  return t && t.parentNode && t.parentNode.selectedIndex, null;
                },
                set: function (e) {
                  var t = e.parentNode;
                  t &&
                    (t.selectedIndex,
                    t.parentNode && t.parentNode.selectedIndex);
                },
              }),
            T.each(
              [
                "tabIndex",
                "readOnly",
                "maxLength",
                "cellSpacing",
                "cellPadding",
                "rowSpan",
                "colSpan",
                "useMap",
                "frameBorder",
                "contentEditable",
              ],
              function () {
                T.propFix[this.toLowerCase()] = this;
              }
            ),
            T.fn.extend({
              addClass: function (e) {
                var t, n, a, s, r, i;
                return p(e)
                  ? this.each(function (t) {
                      T(this).addClass(e.call(this, t, wt(this)));
                    })
                  : (t = bt(e)).length
                  ? this.each(function () {
                      if (
                        ((a = wt(this)),
                        (n = 1 === this.nodeType && " " + Tt(a) + " "))
                      ) {
                        for (r = 0; r < t.length; r++)
                          (s = t[r]),
                            n.indexOf(" " + s + " ") < 0 && (n += s + " ");
                        (i = Tt(n)), a !== i && this.setAttribute("class", i);
                      }
                    })
                  : this;
              },
              removeClass: function (e) {
                var t, n, a, s, r, i;
                return p(e)
                  ? this.each(function (t) {
                      T(this).removeClass(e.call(this, t, wt(this)));
                    })
                  : arguments.length
                  ? (t = bt(e)).length
                    ? this.each(function () {
                        if (
                          ((a = wt(this)),
                          (n = 1 === this.nodeType && " " + Tt(a) + " "))
                        ) {
                          for (r = 0; r < t.length; r++)
                            for (s = t[r]; n.indexOf(" " + s + " ") > -1; )
                              n = n.replace(" " + s + " ", " ");
                          (i = Tt(n)), a !== i && this.setAttribute("class", i);
                        }
                      })
                    : this
                  : this.attr("class", "");
              },
              toggleClass: function (e, t) {
                var n,
                  a,
                  s,
                  r,
                  i = typeof e,
                  o = "string" === i || Array.isArray(e);
                return p(e)
                  ? this.each(function (n) {
                      T(this).toggleClass(e.call(this, n, wt(this), t), t);
                    })
                  : "boolean" == typeof t && o
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = bt(e)),
                    this.each(function () {
                      if (o)
                        for (r = T(this), s = 0; s < n.length; s++)
                          (a = n[s]),
                            r.hasClass(a) ? r.removeClass(a) : r.addClass(a);
                      else
                        (void 0 !== e && "boolean" !== i) ||
                          ((a = wt(this)) && oe.set(this, "__className__", a),
                          this.setAttribute &&
                            this.setAttribute(
                              "class",
                              a || !1 === e
                                ? ""
                                : oe.get(this, "__className__") || ""
                            ));
                    }));
              },
              hasClass: function (e) {
                var t,
                  n,
                  a = 0;
                for (t = " " + e + " "; (n = this[a++]); )
                  if (
                    1 === n.nodeType &&
                    (" " + Tt(wt(n)) + " ").indexOf(t) > -1
                  )
                    return !0;
                return !1;
              },
            });
          var St = /\r/g;
          T.fn.extend({
            val: function (e) {
              var t,
                n,
                a,
                s = this[0];
              return arguments.length
                ? ((a = p(e)),
                  this.each(function (n) {
                    var s;
                    1 === this.nodeType &&
                      (null == (s = a ? e.call(this, n, T(this).val()) : e)
                        ? (s = "")
                        : "number" == typeof s
                        ? (s += "")
                        : Array.isArray(s) &&
                          (s = T.map(s, function (e) {
                            return null == e ? "" : e + "";
                          })),
                      ((t =
                        T.valHooks[this.type] ||
                        T.valHooks[this.nodeName.toLowerCase()]) &&
                        "set" in t &&
                        void 0 !== t.set(this, s, "value")) ||
                        (this.value = s));
                  }))
                : s
                ? (t =
                    T.valHooks[s.type] ||
                    T.valHooks[s.nodeName.toLowerCase()]) &&
                  "get" in t &&
                  void 0 !== (n = t.get(s, "value"))
                  ? n
                  : "string" == typeof (n = s.value)
                  ? n.replace(St, "")
                  : null == n
                  ? ""
                  : n
                : void 0;
            },
          }),
            T.extend({
              valHooks: {
                option: {
                  get: function (e) {
                    var t = T.find.attr(e, "value");
                    return null != t ? t : Tt(T.text(e));
                  },
                },
                select: {
                  get: function (e) {
                    var t,
                      n,
                      a,
                      s = e.options,
                      r = e.selectedIndex,
                      i = "select-one" === e.type,
                      o = i ? null : [],
                      d = i ? r + 1 : s.length;
                    for (a = r < 0 ? d : i ? r : 0; a < d; a++)
                      if (
                        ((n = s[a]).selected || a === r) &&
                        !n.disabled &&
                        (!n.parentNode.disabled || !b(n.parentNode, "optgroup"))
                      ) {
                        if (((t = T(n).val()), i)) return t;
                        o.push(t);
                      }
                    return o;
                  },
                  set: function (e, t) {
                    for (
                      var n, a, s = e.options, r = T.makeArray(t), i = s.length;
                      i--;

                    )
                      ((a = s[i]).selected =
                        T.inArray(T.valHooks.option.get(a), r) > -1) &&
                        (n = !0);
                    return n || (e.selectedIndex = -1), r;
                  },
                },
              },
            }),
            T.each(["radio", "checkbox"], function () {
              (T.valHooks[this] = {
                set: function (e, t) {
                  if (Array.isArray(t))
                    return (e.checked = T.inArray(T(e).val(), t) > -1);
                },
              }),
                M.checkOn ||
                  (T.valHooks[this].get = function (e) {
                    return null === e.getAttribute("value") ? "on" : e.value;
                  });
            });
          var Ht = a.location,
            xt = { guid: Date.now() },
            jt = /\?/;
          T.parseXML = function (e) {
            var t, n;
            if (!e || "string" != typeof e) return null;
            try {
              t = new a.DOMParser().parseFromString(e, "text/xml");
            } catch (e) {}
            return (
              (n = t && t.getElementsByTagName("parsererror")[0]),
              (t && !n) ||
                T.error(
                  "Invalid XML: " +
                    (n
                      ? T.map(n.childNodes, function (e) {
                          return e.textContent;
                        }).join("\n")
                      : e)
                ),
              t
            );
          };
          var Ot = /^(?:focusinfocus|focusoutblur)$/,
            Pt = function (e) {
              e.stopPropagation();
            };
          T.extend(T.event, {
            trigger: function (e, t, n, s) {
              var r,
                i,
                o,
                d,
                u,
                _,
                l,
                m,
                h = [n || L],
                f = c.call(e, "type") ? e.type : e,
                M = c.call(e, "namespace") ? e.namespace.split(".") : [];
              if (
                ((i = m = o = n = n || L),
                3 !== n.nodeType &&
                  8 !== n.nodeType &&
                  !Ot.test(f + T.event.triggered) &&
                  (f.indexOf(".") > -1 &&
                    ((M = f.split(".")), (f = M.shift()), M.sort()),
                  (u = f.indexOf(":") < 0 && "on" + f),
                  ((e = e[T.expando]
                    ? e
                    : new T.Event(f, "object" == typeof e && e)).isTrigger = s
                    ? 2
                    : 3),
                  (e.namespace = M.join(".")),
                  (e.rnamespace = e.namespace
                    ? new RegExp(
                        "(^|\\.)" + M.join("\\.(?:.*\\.|)") + "(\\.|$)"
                      )
                    : null),
                  (e.result = void 0),
                  e.target || (e.target = n),
                  (t = null == t ? [e] : T.makeArray(t, [e])),
                  (l = T.event.special[f] || {}),
                  s || !l.trigger || !1 !== l.trigger.apply(n, t)))
              ) {
                if (!s && !l.noBubble && !y(n)) {
                  for (
                    d = l.delegateType || f,
                      Ot.test(d + f) || (i = i.parentNode);
                    i;
                    i = i.parentNode
                  )
                    h.push(i), (o = i);
                  o === (n.ownerDocument || L) &&
                    h.push(o.defaultView || o.parentWindow || a);
                }
                for (r = 0; (i = h[r++]) && !e.isPropagationStopped(); )
                  (m = i),
                    (e.type = r > 1 ? d : l.bindType || f),
                    (_ =
                      (oe.get(i, "events") || Object.create(null))[e.type] &&
                      oe.get(i, "handle")) && _.apply(i, t),
                    (_ = u && i[u]) &&
                      _.apply &&
                      re(i) &&
                      ((e.result = _.apply(i, t)),
                      !1 === e.result && e.preventDefault());
                return (
                  (e.type = f),
                  s ||
                    e.isDefaultPrevented() ||
                    (l._default && !1 !== l._default.apply(h.pop(), t)) ||
                    !re(n) ||
                    (u &&
                      p(n[f]) &&
                      !y(n) &&
                      ((o = n[u]) && (n[u] = null),
                      (T.event.triggered = f),
                      e.isPropagationStopped() && m.addEventListener(f, Pt),
                      n[f](),
                      e.isPropagationStopped() && m.removeEventListener(f, Pt),
                      (T.event.triggered = void 0),
                      o && (n[u] = o))),
                  e.result
                );
              }
            },
            simulate: function (e, t, n) {
              var a = T.extend(new T.Event(), n, { type: e, isSimulated: !0 });
              T.event.trigger(a, null, t);
            },
          }),
            T.fn.extend({
              trigger: function (e, t) {
                return this.each(function () {
                  T.event.trigger(e, t, this);
                });
              },
              triggerHandler: function (e, t) {
                var n = this[0];
                if (n) return T.event.trigger(e, t, n, !0);
              },
            });
          var Wt = /\[\]$/,
            Et = /\r?\n/g,
            At = /^(?:submit|button|image|reset|file)$/i,
            Ft = /^(?:input|select|textarea|keygen)/i;
          function Nt(e, t, n, a) {
            var s;
            if (Array.isArray(t))
              T.each(t, function (t, s) {
                n || Wt.test(e)
                  ? a(e, s)
                  : Nt(
                      e +
                        "[" +
                        ("object" == typeof s && null != s ? t : "") +
                        "]",
                      s,
                      n,
                      a
                    );
              });
            else if (n || "object" !== k(t)) a(e, t);
            else for (s in t) Nt(e + "[" + s + "]", t[s], n, a);
          }
          (T.param = function (e, t) {
            var n,
              a = [],
              s = function (e, t) {
                var n = p(t) ? t() : t;
                a[a.length] =
                  encodeURIComponent(e) +
                  "=" +
                  encodeURIComponent(null == n ? "" : n);
              };
            if (null == e) return "";
            if (Array.isArray(e) || (e.jquery && !T.isPlainObject(e)))
              T.each(e, function () {
                s(this.name, this.value);
              });
            else for (n in e) Nt(n, e[n], t, s);
            return a.join("&");
          }),
            T.fn.extend({
              serialize: function () {
                return T.param(this.serializeArray());
              },
              serializeArray: function () {
                return this.map(function () {
                  var e = T.prop(this, "elements");
                  return e ? T.makeArray(e) : this;
                })
                  .filter(function () {
                    var e = this.type;
                    return (
                      this.name &&
                      !T(this).is(":disabled") &&
                      Ft.test(this.nodeName) &&
                      !At.test(e) &&
                      (this.checked || !Te.test(e))
                    );
                  })
                  .map(function (e, t) {
                    var n = T(this).val();
                    return null == n
                      ? null
                      : Array.isArray(n)
                      ? T.map(n, function (e) {
                          return { name: t.name, value: e.replace(Et, "\r\n") };
                        })
                      : { name: t.name, value: n.replace(Et, "\r\n") };
                  })
                  .get();
              },
            });
          var Ct = /%20/g,
            zt = /#.*$/,
            Rt = /([?&])_=[^&]*/,
            Jt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
            It = /^(?:GET|HEAD)$/,
            qt = /^\/\//,
            Ut = {},
            Gt = {},
            Bt = "*/".concat("*"),
            Vt = L.createElement("a");
          function $t(e) {
            return function (t, n) {
              "string" != typeof t && ((n = t), (t = "*"));
              var a,
                s = 0,
                r = t.toLowerCase().match(B) || [];
              if (p(n))
                for (; (a = r[s++]); )
                  "+" === a[0]
                    ? ((a = a.slice(1) || "*"), (e[a] = e[a] || []).unshift(n))
                    : (e[a] = e[a] || []).push(n);
            };
          }
          function Kt(e, t, n, a) {
            var s = {},
              r = e === Gt;
            function i(o) {
              var d;
              return (
                (s[o] = !0),
                T.each(e[o] || [], function (e, o) {
                  var u = o(t, n, a);
                  return "string" != typeof u || r || s[u]
                    ? r
                      ? !(d = u)
                      : void 0
                    : (t.dataTypes.unshift(u), i(u), !1);
                }),
                d
              );
            }
            return i(t.dataTypes[0]) || (!s["*"] && i("*"));
          }
          function Zt(e, t) {
            var n,
              a,
              s = T.ajaxSettings.flatOptions || {};
            for (n in t)
              void 0 !== t[n] && ((s[n] ? e : a || (a = {}))[n] = t[n]);
            return a && T.extend(!0, e, a), e;
          }
          (Vt.href = Ht.href),
            T.extend({
              active: 0,
              lastModified: {},
              etag: {},
              ajaxSettings: {
                url: Ht.href,
                type: "GET",
                isLocal:
                  /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                    Ht.protocol
                  ),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                  "*": Bt,
                  text: "text/plain",
                  html: "text/html",
                  xml: "application/xml, text/xml",
                  json: "application/json, text/javascript",
                },
                contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
                responseFields: {
                  xml: "responseXML",
                  text: "responseText",
                  json: "responseJSON",
                },
                converters: {
                  "* text": String,
                  "text html": !0,
                  "text json": JSON.parse,
                  "text xml": T.parseXML,
                },
                flatOptions: { url: !0, context: !0 },
              },
              ajaxSetup: function (e, t) {
                return t ? Zt(Zt(e, T.ajaxSettings), t) : Zt(T.ajaxSettings, e);
              },
              ajaxPrefilter: $t(Ut),
              ajaxTransport: $t(Gt),
              ajax: function (e, t) {
                "object" == typeof e && ((t = e), (e = void 0)), (t = t || {});
                var n,
                  s,
                  r,
                  i,
                  o,
                  d,
                  u,
                  _,
                  l,
                  m,
                  c = T.ajaxSetup({}, t),
                  h = c.context || c,
                  f = c.context && (h.nodeType || h.jquery) ? T(h) : T.event,
                  M = T.Deferred(),
                  p = T.Callbacks("once memory"),
                  y = c.statusCode || {},
                  Y = {},
                  g = {},
                  k = "canceled",
                  D = {
                    readyState: 0,
                    getResponseHeader: function (e) {
                      var t;
                      if (u) {
                        if (!i)
                          for (i = {}; (t = Jt.exec(r)); )
                            i[t[1].toLowerCase() + " "] = (
                              i[t[1].toLowerCase() + " "] || []
                            ).concat(t[2]);
                        t = i[e.toLowerCase() + " "];
                      }
                      return null == t ? null : t.join(", ");
                    },
                    getAllResponseHeaders: function () {
                      return u ? r : null;
                    },
                    setRequestHeader: function (e, t) {
                      return (
                        null == u &&
                          ((e = g[e.toLowerCase()] = g[e.toLowerCase()] || e),
                          (Y[e] = t)),
                        this
                      );
                    },
                    overrideMimeType: function (e) {
                      return null == u && (c.mimeType = e), this;
                    },
                    statusCode: function (e) {
                      var t;
                      if (e)
                        if (u) D.always(e[D.status]);
                        else for (t in e) y[t] = [y[t], e[t]];
                      return this;
                    },
                    abort: function (e) {
                      var t = e || k;
                      return n && n.abort(t), v(0, t), this;
                    },
                  };
                if (
                  (M.promise(D),
                  (c.url = ((e || c.url || Ht.href) + "").replace(
                    qt,
                    Ht.protocol + "//"
                  )),
                  (c.type = t.method || t.type || c.method || c.type),
                  (c.dataTypes = (c.dataType || "*").toLowerCase().match(B) || [
                    "",
                  ]),
                  null == c.crossDomain)
                ) {
                  d = L.createElement("a");
                  try {
                    (d.href = c.url),
                      (d.href = d.href),
                      (c.crossDomain =
                        Vt.protocol + "//" + Vt.host !=
                        d.protocol + "//" + d.host);
                  } catch (e) {
                    c.crossDomain = !0;
                  }
                }
                if (
                  (c.data &&
                    c.processData &&
                    "string" != typeof c.data &&
                    (c.data = T.param(c.data, c.traditional)),
                  Kt(Ut, c, t, D),
                  u)
                )
                  return D;
                for (l in ((_ = T.event && c.global) &&
                  0 == T.active++ &&
                  T.event.trigger("ajaxStart"),
                (c.type = c.type.toUpperCase()),
                (c.hasContent = !It.test(c.type)),
                (s = c.url.replace(zt, "")),
                c.hasContent
                  ? c.data &&
                    c.processData &&
                    0 ===
                      (c.contentType || "").indexOf(
                        "application/x-www-form-urlencoded"
                      ) &&
                    (c.data = c.data.replace(Ct, "+"))
                  : ((m = c.url.slice(s.length)),
                    c.data &&
                      (c.processData || "string" == typeof c.data) &&
                      ((s += (jt.test(s) ? "&" : "?") + c.data), delete c.data),
                    !1 === c.cache &&
                      ((s = s.replace(Rt, "$1")),
                      (m = (jt.test(s) ? "&" : "?") + "_=" + xt.guid++ + m)),
                    (c.url = s + m)),
                c.ifModified &&
                  (T.lastModified[s] &&
                    D.setRequestHeader("If-Modified-Since", T.lastModified[s]),
                  T.etag[s] && D.setRequestHeader("If-None-Match", T.etag[s])),
                ((c.data && c.hasContent && !1 !== c.contentType) ||
                  t.contentType) &&
                  D.setRequestHeader("Content-Type", c.contentType),
                D.setRequestHeader(
                  "Accept",
                  c.dataTypes[0] && c.accepts[c.dataTypes[0]]
                    ? c.accepts[c.dataTypes[0]] +
                        ("*" !== c.dataTypes[0] ? ", " + Bt + "; q=0.01" : "")
                    : c.accepts["*"]
                ),
                c.headers))
                  D.setRequestHeader(l, c.headers[l]);
                if (c.beforeSend && (!1 === c.beforeSend.call(h, D, c) || u))
                  return D.abort();
                if (
                  ((k = "abort"),
                  p.add(c.complete),
                  D.done(c.success),
                  D.fail(c.error),
                  (n = Kt(Gt, c, t, D)))
                ) {
                  if (
                    ((D.readyState = 1), _ && f.trigger("ajaxSend", [D, c]), u)
                  )
                    return D;
                  c.async &&
                    c.timeout > 0 &&
                    (o = a.setTimeout(function () {
                      D.abort("timeout");
                    }, c.timeout));
                  try {
                    (u = !1), n.send(Y, v);
                  } catch (e) {
                    if (u) throw e;
                    v(-1, e);
                  }
                } else v(-1, "No Transport");
                function v(e, t, i, d) {
                  var l,
                    m,
                    L,
                    Y,
                    g,
                    k = t;
                  u ||
                    ((u = !0),
                    o && a.clearTimeout(o),
                    (n = void 0),
                    (r = d || ""),
                    (D.readyState = e > 0 ? 4 : 0),
                    (l = (e >= 200 && e < 300) || 304 === e),
                    i &&
                      (Y = (function (e, t, n) {
                        for (
                          var a, s, r, i, o = e.contents, d = e.dataTypes;
                          "*" === d[0];

                        )
                          d.shift(),
                            void 0 === a &&
                              (a =
                                e.mimeType ||
                                t.getResponseHeader("Content-Type"));
                        if (a)
                          for (s in o)
                            if (o[s] && o[s].test(a)) {
                              d.unshift(s);
                              break;
                            }
                        if (d[0] in n) r = d[0];
                        else {
                          for (s in n) {
                            if (!d[0] || e.converters[s + " " + d[0]]) {
                              r = s;
                              break;
                            }
                            i || (i = s);
                          }
                          r = r || i;
                        }
                        if (r) return r !== d[0] && d.unshift(r), n[r];
                      })(c, D, i)),
                    !l &&
                      T.inArray("script", c.dataTypes) > -1 &&
                      T.inArray("json", c.dataTypes) < 0 &&
                      (c.converters["text script"] = function () {}),
                    (Y = (function (e, t, n, a) {
                      var s,
                        r,
                        i,
                        o,
                        d,
                        u = {},
                        _ = e.dataTypes.slice();
                      if (_[1])
                        for (i in e.converters)
                          u[i.toLowerCase()] = e.converters[i];
                      for (r = _.shift(); r; )
                        if (
                          (e.responseFields[r] && (n[e.responseFields[r]] = t),
                          !d &&
                            a &&
                            e.dataFilter &&
                            (t = e.dataFilter(t, e.dataType)),
                          (d = r),
                          (r = _.shift()))
                        )
                          if ("*" === r) r = d;
                          else if ("*" !== d && d !== r) {
                            if (!(i = u[d + " " + r] || u["* " + r]))
                              for (s in u)
                                if (
                                  (o = s.split(" "))[1] === r &&
                                  (i = u[d + " " + o[0]] || u["* " + o[0]])
                                ) {
                                  !0 === i
                                    ? (i = u[s])
                                    : !0 !== u[s] &&
                                      ((r = o[0]), _.unshift(o[1]));
                                  break;
                                }
                            if (!0 !== i)
                              if (i && e.throws) t = i(t);
                              else
                                try {
                                  t = i(t);
                                } catch (e) {
                                  return {
                                    state: "parsererror",
                                    error: i
                                      ? e
                                      : "No conversion from " + d + " to " + r,
                                  };
                                }
                          }
                      return { state: "success", data: t };
                    })(c, Y, D, l)),
                    l
                      ? (c.ifModified &&
                          ((g = D.getResponseHeader("Last-Modified")) &&
                            (T.lastModified[s] = g),
                          (g = D.getResponseHeader("etag")) && (T.etag[s] = g)),
                        204 === e || "HEAD" === c.type
                          ? (k = "nocontent")
                          : 304 === e
                          ? (k = "notmodified")
                          : ((k = Y.state), (m = Y.data), (l = !(L = Y.error))))
                      : ((L = k),
                        (!e && k) || ((k = "error"), e < 0 && (e = 0))),
                    (D.status = e),
                    (D.statusText = (t || k) + ""),
                    l
                      ? M.resolveWith(h, [m, k, D])
                      : M.rejectWith(h, [D, k, L]),
                    D.statusCode(y),
                    (y = void 0),
                    _ &&
                      f.trigger(l ? "ajaxSuccess" : "ajaxError", [
                        D,
                        c,
                        l ? m : L,
                      ]),
                    p.fireWith(h, [D, k]),
                    _ &&
                      (f.trigger("ajaxComplete", [D, c]),
                      --T.active || T.event.trigger("ajaxStop")));
                }
                return D;
              },
              getJSON: function (e, t, n) {
                return T.get(e, t, n, "json");
              },
              getScript: function (e, t) {
                return T.get(e, void 0, t, "script");
              },
            }),
            T.each(["get", "post"], function (e, t) {
              T[t] = function (e, n, a, s) {
                return (
                  p(n) && ((s = s || a), (a = n), (n = void 0)),
                  T.ajax(
                    T.extend(
                      { url: e, type: t, dataType: s, data: n, success: a },
                      T.isPlainObject(e) && e
                    )
                  )
                );
              };
            }),
            T.ajaxPrefilter(function (e) {
              var t;
              for (t in e.headers)
                "content-type" === t.toLowerCase() &&
                  (e.contentType = e.headers[t] || "");
            }),
            (T._evalUrl = function (e, t, n) {
              return T.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: { "text script": function () {} },
                dataFilter: function (e) {
                  T.globalEval(e, t, n);
                },
              });
            }),
            T.fn.extend({
              wrapAll: function (e) {
                var t;
                return (
                  this[0] &&
                    (p(e) && (e = e.call(this[0])),
                    (t = T(e, this[0].ownerDocument).eq(0).clone(!0)),
                    this[0].parentNode && t.insertBefore(this[0]),
                    t
                      .map(function () {
                        for (var e = this; e.firstElementChild; )
                          e = e.firstElementChild;
                        return e;
                      })
                      .append(this)),
                  this
                );
              },
              wrapInner: function (e) {
                return p(e)
                  ? this.each(function (t) {
                      T(this).wrapInner(e.call(this, t));
                    })
                  : this.each(function () {
                      var t = T(this),
                        n = t.contents();
                      n.length ? n.wrapAll(e) : t.append(e);
                    });
              },
              wrap: function (e) {
                var t = p(e);
                return this.each(function (n) {
                  T(this).wrapAll(t ? e.call(this, n) : e);
                });
              },
              unwrap: function (e) {
                return (
                  this.parent(e)
                    .not("body")
                    .each(function () {
                      T(this).replaceWith(this.childNodes);
                    }),
                  this
                );
              },
            }),
            (T.expr.pseudos.hidden = function (e) {
              return !T.expr.pseudos.visible(e);
            }),
            (T.expr.pseudos.visible = function (e) {
              return !!(
                e.offsetWidth ||
                e.offsetHeight ||
                e.getClientRects().length
              );
            }),
            (T.ajaxSettings.xhr = function () {
              try {
                return new a.XMLHttpRequest();
              } catch (e) {}
            });
          var Xt = { 0: 200, 1223: 204 },
            Qt = T.ajaxSettings.xhr();
          (M.cors = !!Qt && "withCredentials" in Qt),
            (M.ajax = Qt = !!Qt),
            T.ajaxTransport(function (e) {
              var t, n;
              if (M.cors || (Qt && !e.crossDomain))
                return {
                  send: function (s, r) {
                    var i,
                      o = e.xhr();
                    if (
                      (o.open(e.type, e.url, e.async, e.username, e.password),
                      e.xhrFields)
                    )
                      for (i in e.xhrFields) o[i] = e.xhrFields[i];
                    for (i in (e.mimeType &&
                      o.overrideMimeType &&
                      o.overrideMimeType(e.mimeType),
                    e.crossDomain ||
                      s["X-Requested-With"] ||
                      (s["X-Requested-With"] = "XMLHttpRequest"),
                    s))
                      o.setRequestHeader(i, s[i]);
                    (t = function (e) {
                      return function () {
                        t &&
                          ((t =
                            n =
                            o.onload =
                            o.onerror =
                            o.onabort =
                            o.ontimeout =
                            o.onreadystatechange =
                              null),
                          "abort" === e
                            ? o.abort()
                            : "error" === e
                            ? "number" != typeof o.status
                              ? r(0, "error")
                              : r(o.status, o.statusText)
                            : r(
                                Xt[o.status] || o.status,
                                o.statusText,
                                "text" !== (o.responseType || "text") ||
                                  "string" != typeof o.responseText
                                  ? { binary: o.response }
                                  : { text: o.responseText },
                                o.getAllResponseHeaders()
                              ));
                      };
                    }),
                      (o.onload = t()),
                      (n = o.onerror = o.ontimeout = t("error")),
                      void 0 !== o.onabort
                        ? (o.onabort = n)
                        : (o.onreadystatechange = function () {
                            4 === o.readyState &&
                              a.setTimeout(function () {
                                t && n();
                              });
                          }),
                      (t = t("abort"));
                    try {
                      o.send((e.hasContent && e.data) || null);
                    } catch (e) {
                      if (t) throw e;
                    }
                  },
                  abort: function () {
                    t && t();
                  },
                };
            }),
            T.ajaxPrefilter(function (e) {
              e.crossDomain && (e.contents.script = !1);
            }),
            T.ajaxSetup({
              accepts: {
                script:
                  "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
              },
              contents: { script: /\b(?:java|ecma)script\b/ },
              converters: {
                "text script": function (e) {
                  return T.globalEval(e), e;
                },
              },
            }),
            T.ajaxPrefilter("script", function (e) {
              void 0 === e.cache && (e.cache = !1),
                e.crossDomain && (e.type = "GET");
            }),
            T.ajaxTransport("script", function (e) {
              var t, n;
              if (e.crossDomain || e.scriptAttrs)
                return {
                  send: function (a, s) {
                    (t = T("<script>")
                      .attr(e.scriptAttrs || {})
                      .prop({ charset: e.scriptCharset, src: e.url })
                      .on(
                        "load error",
                        (n = function (e) {
                          t.remove(),
                            (n = null),
                            e && s("error" === e.type ? 404 : 200, e.type);
                        })
                      )),
                      L.head.appendChild(t[0]);
                  },
                  abort: function () {
                    n && n();
                  },
                };
            });
          var en,
            tn = [],
            nn = /(=)\?(?=&|$)|\?\?/;
          T.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function () {
              var e = tn.pop() || T.expando + "_" + xt.guid++;
              return (this[e] = !0), e;
            },
          }),
            T.ajaxPrefilter("json jsonp", function (e, t, n) {
              var s,
                r,
                i,
                o =
                  !1 !== e.jsonp &&
                  (nn.test(e.url)
                    ? "url"
                    : "string" == typeof e.data &&
                      0 ===
                        (e.contentType || "").indexOf(
                          "application/x-www-form-urlencoded"
                        ) &&
                      nn.test(e.data) &&
                      "data");
              if (o || "jsonp" === e.dataTypes[0])
                return (
                  (s = e.jsonpCallback =
                    p(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                  o
                    ? (e[o] = e[o].replace(nn, "$1" + s))
                    : !1 !== e.jsonp &&
                      (e.url +=
                        (jt.test(e.url) ? "&" : "?") + e.jsonp + "=" + s),
                  (e.converters["script json"] = function () {
                    return i || T.error(s + " was not called"), i[0];
                  }),
                  (e.dataTypes[0] = "json"),
                  (r = a[s]),
                  (a[s] = function () {
                    i = arguments;
                  }),
                  n.always(function () {
                    void 0 === r ? T(a).removeProp(s) : (a[s] = r),
                      e[s] && ((e.jsonpCallback = t.jsonpCallback), tn.push(s)),
                      i && p(r) && r(i[0]),
                      (i = r = void 0);
                  }),
                  "script"
                );
            }),
            (M.createHTMLDocument =
              (((en = L.implementation.createHTMLDocument("").body).innerHTML =
                "<form></form><form></form>"),
              2 === en.childNodes.length)),
            (T.parseHTML = function (e, t, n) {
              return "string" != typeof e
                ? []
                : ("boolean" == typeof t && ((n = t), (t = !1)),
                  t ||
                    (M.createHTMLDocument
                      ? (((a = (t =
                          L.implementation.createHTMLDocument(
                            ""
                          )).createElement("base")).href = L.location.href),
                        t.head.appendChild(a))
                      : (t = L)),
                  (r = !n && []),
                  (s = z.exec(e))
                    ? [t.createElement(s[1])]
                    : ((s = Oe([e], t, r)),
                      r && r.length && T(r).remove(),
                      T.merge([], s.childNodes)));
              var a, s, r;
            }),
            (T.fn.load = function (e, t, n) {
              var a,
                s,
                r,
                i = this,
                o = e.indexOf(" ");
              return (
                o > -1 && ((a = Tt(e.slice(o))), (e = e.slice(0, o))),
                p(t)
                  ? ((n = t), (t = void 0))
                  : t && "object" == typeof t && (s = "POST"),
                i.length > 0 &&
                  T.ajax({
                    url: e,
                    type: s || "GET",
                    dataType: "html",
                    data: t,
                  })
                    .done(function (e) {
                      (r = arguments),
                        i.html(
                          a ? T("<div>").append(T.parseHTML(e)).find(a) : e
                        );
                    })
                    .always(
                      n &&
                        function (e, t) {
                          i.each(function () {
                            n.apply(this, r || [e.responseText, t, e]);
                          });
                        }
                    ),
                this
              );
            }),
            (T.expr.pseudos.animated = function (e) {
              return T.grep(T.timers, function (t) {
                return e === t.elem;
              }).length;
            }),
            (T.offset = {
              setOffset: function (e, t, n) {
                var a,
                  s,
                  r,
                  i,
                  o,
                  d,
                  u = T.css(e, "position"),
                  _ = T(e),
                  l = {};
                "static" === u && (e.style.position = "relative"),
                  (o = _.offset()),
                  (r = T.css(e, "top")),
                  (d = T.css(e, "left")),
                  ("absolute" === u || "fixed" === u) &&
                  (r + d).indexOf("auto") > -1
                    ? ((i = (a = _.position()).top), (s = a.left))
                    : ((i = parseFloat(r) || 0), (s = parseFloat(d) || 0)),
                  p(t) && (t = t.call(e, n, T.extend({}, o))),
                  null != t.top && (l.top = t.top - o.top + i),
                  null != t.left && (l.left = t.left - o.left + s),
                  "using" in t ? t.using.call(e, l) : _.css(l);
              },
            }),
            T.fn.extend({
              offset: function (e) {
                if (arguments.length)
                  return void 0 === e
                    ? this
                    : this.each(function (t) {
                        T.offset.setOffset(this, e, t);
                      });
                var t,
                  n,
                  a = this[0];
                return a
                  ? a.getClientRects().length
                    ? ((t = a.getBoundingClientRect()),
                      (n = a.ownerDocument.defaultView),
                      {
                        top: t.top + n.pageYOffset,
                        left: t.left + n.pageXOffset,
                      })
                    : { top: 0, left: 0 }
                  : void 0;
              },
              position: function () {
                if (this[0]) {
                  var e,
                    t,
                    n,
                    a = this[0],
                    s = { top: 0, left: 0 };
                  if ("fixed" === T.css(a, "position"))
                    t = a.getBoundingClientRect();
                  else {
                    for (
                      t = this.offset(),
                        n = a.ownerDocument,
                        e = a.offsetParent || n.documentElement;
                      e &&
                      (e === n.body || e === n.documentElement) &&
                      "static" === T.css(e, "position");

                    )
                      e = e.parentNode;
                    e &&
                      e !== a &&
                      1 === e.nodeType &&
                      (((s = T(e).offset()).top += T.css(
                        e,
                        "borderTopWidth",
                        !0
                      )),
                      (s.left += T.css(e, "borderLeftWidth", !0)));
                  }
                  return {
                    top: t.top - s.top - T.css(a, "marginTop", !0),
                    left: t.left - s.left - T.css(a, "marginLeft", !0),
                  };
                }
              },
              offsetParent: function () {
                return this.map(function () {
                  for (
                    var e = this.offsetParent;
                    e && "static" === T.css(e, "position");

                  )
                    e = e.offsetParent;
                  return e || fe;
                });
              },
            }),
            T.each(
              { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
              function (e, t) {
                var n = "pageYOffset" === t;
                T.fn[e] = function (a) {
                  return ee(
                    this,
                    function (e, a, s) {
                      var r;
                      if (
                        (y(e)
                          ? (r = e)
                          : 9 === e.nodeType && (r = e.defaultView),
                        void 0 === s)
                      )
                        return r ? r[t] : e[a];
                      r
                        ? r.scrollTo(
                            n ? r.pageXOffset : s,
                            n ? s : r.pageYOffset
                          )
                        : (e[a] = s);
                    },
                    e,
                    a,
                    arguments.length
                  );
                };
              }
            ),
            T.each(["top", "left"], function (e, t) {
              T.cssHooks[t] = et(M.pixelPosition, function (e, n) {
                if (n)
                  return (
                    (n = Qe(e, t)), Ve.test(n) ? T(e).position()[t] + "px" : n
                  );
              });
            }),
            T.each({ Height: "height", Width: "width" }, function (e, t) {
              T.each(
                { padding: "inner" + e, content: t, "": "outer" + e },
                function (n, a) {
                  T.fn[a] = function (s, r) {
                    var i = arguments.length && (n || "boolean" != typeof s),
                      o = n || (!0 === s || !0 === r ? "margin" : "border");
                    return ee(
                      this,
                      function (t, n, s) {
                        var r;
                        return y(t)
                          ? 0 === a.indexOf("outer")
                            ? t["inner" + e]
                            : t.document.documentElement["client" + e]
                          : 9 === t.nodeType
                          ? ((r = t.documentElement),
                            Math.max(
                              t.body["scroll" + e],
                              r["scroll" + e],
                              t.body["offset" + e],
                              r["offset" + e],
                              r["client" + e]
                            ))
                          : void 0 === s
                          ? T.css(t, n, o)
                          : T.style(t, n, s, o);
                      },
                      t,
                      i ? s : void 0,
                      i
                    );
                  };
                }
              );
            }),
            T.each(
              [
                "ajaxStart",
                "ajaxStop",
                "ajaxComplete",
                "ajaxError",
                "ajaxSuccess",
                "ajaxSend",
              ],
              function (e, t) {
                T.fn[t] = function (e) {
                  return this.on(t, e);
                };
              }
            ),
            T.fn.extend({
              bind: function (e, t, n) {
                return this.on(e, null, t, n);
              },
              unbind: function (e, t) {
                return this.off(e, null, t);
              },
              delegate: function (e, t, n, a) {
                return this.on(t, e, n, a);
              },
              undelegate: function (e, t, n) {
                return 1 === arguments.length
                  ? this.off(e, "**")
                  : this.off(t, e || "**", n);
              },
              hover: function (e, t) {
                return this.on("mouseenter", e).on("mouseleave", t || e);
              },
            }),
            T.each(
              "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
                " "
              ),
              function (e, t) {
                T.fn[t] = function (e, n) {
                  return arguments.length > 0
                    ? this.on(t, null, e, n)
                    : this.trigger(t);
                };
              }
            );
          var an = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
          (T.proxy = function (e, t) {
            var n, a, s;
            if (("string" == typeof t && ((n = e[t]), (t = e), (e = n)), p(e)))
              return (
                (a = o.call(arguments, 2)),
                (s = function () {
                  return e.apply(t || this, a.concat(o.call(arguments)));
                }),
                (s.guid = e.guid = e.guid || T.guid++),
                s
              );
          }),
            (T.holdReady = function (e) {
              e ? T.readyWait++ : T.ready(!0);
            }),
            (T.isArray = Array.isArray),
            (T.parseJSON = JSON.parse),
            (T.nodeName = b),
            (T.isFunction = p),
            (T.isWindow = y),
            (T.camelCase = se),
            (T.type = k),
            (T.now = Date.now),
            (T.isNumeric = function (e) {
              var t = T.type(e);
              return (
                ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
              );
            }),
            (T.trim = function (e) {
              return null == e ? "" : (e + "").replace(an, "$1");
            }),
            void 0 ===
              (n = function () {
                return T;
              }.apply(t, [])) || (e.exports = n);
          var sn = a.jQuery,
            rn = a.$;
          return (
            (T.noConflict = function (e) {
              return (
                a.$ === T && (a.$ = rn),
                e && a.jQuery === T && (a.jQuery = sn),
                T
              );
            }),
            void 0 === s && (a.jQuery = a.$ = T),
            T
          );
        });
      },
      5177: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("af", {
            months:
              "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
            weekdays:
              "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split(
                "_"
              ),
            weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
            weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
            meridiemParse: /vm|nm/i,
            isPM: function (e) {
              return /^nm$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "vm" : "VM") : n ? "nm" : "NM";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Vandag om] LT",
              nextDay: "[Môre om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[Gister om] LT",
              lastWeek: "[Laas] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "oor %s",
              past: "%s gelede",
              s: "'n paar sekondes",
              ss: "%d sekondes",
              m: "'n minuut",
              mm: "%d minute",
              h: "'n uur",
              hh: "%d ure",
              d: "'n dag",
              dd: "%d dae",
              M: "'n maand",
              MM: "%d maande",
              y: "'n jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1488: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            n = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            a = function (e) {
              return function (a, s, r, i) {
                var o = t(a),
                  d = n[e][t(a)];
                return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, a);
              };
            },
            s = [
              "جانفي",
              "فيفري",
              "مارس",
              "أفريل",
              "ماي",
              "جوان",
              "جويلية",
              "أوت",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar-dz", {
            months: s,
            monthsShort: s,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: a("s"),
              ss: a("s"),
              m: a("m"),
              mm: a("m"),
              h: a("h"),
              hh: a("h"),
              d: a("d"),
              dd: a("d"),
              M: a("M"),
              MM: a("M"),
              y: a("y"),
              yy: a("y"),
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 0, doy: 4 },
          });
        })(n(5093));
      },
      8676: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-kw", {
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 0, doy: 12 },
          });
        })(n(5093));
      },
      2353: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
              9: "9",
              0: "0",
            },
            n = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            a = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            s = function (e) {
              return function (t, s, r, i) {
                var o = n(t),
                  d = a[e][n(t)];
                return 2 === o && (d = d[s ? 0 : 1]), d.replace(/%d/i, t);
              };
            },
            r = [
              "يناير",
              "فبراير",
              "مارس",
              "أبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar-ly", {
            months: r,
            monthsShort: r,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: s("s"),
              ss: s("s"),
              m: s("m"),
              mm: s("m"),
              h: s("h"),
              hh: s("h"),
              d: s("d"),
              dd: s("d"),
              M: s("M"),
              MM: s("M"),
              y: s("y"),
              yy: s("y"),
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      4496: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-ma", {
            months:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6947: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            };
          e.defineLocale("ar-ps", {
            months:
              "كانون الثاني_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_تشري الأوّل_تشرين الثاني_كانون الأوّل".split(
                "_"
              ),
            monthsShort:
              "ك٢_شباط_آذار_نيسان_أيّار_حزيران_تمّوز_آب_أيلول_ت١_ت٢_ك١".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            preparse: function (e) {
              return e
                .replace(/[٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .split("")
                .reverse()
                .join("")
                .replace(/[١٢](?![\u062a\u0643])/g, function (e) {
                  return n[e];
                })
                .split("")
                .reverse()
                .join("")
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      2682: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            };
          e.defineLocale("ar-sa", {
            months:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            monthsShort:
              "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      9756: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ar-tn", {
            months:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            monthsShort:
              "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split(
                "_"
              ),
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[اليوم على الساعة] LT",
              nextDay: "[غدا على الساعة] LT",
              nextWeek: "dddd [على الساعة] LT",
              lastDay: "[أمس على الساعة] LT",
              lastWeek: "dddd [على الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "في %s",
              past: "منذ %s",
              s: "ثوان",
              ss: "%d ثانية",
              m: "دقيقة",
              mm: "%d دقائق",
              h: "ساعة",
              hh: "%d ساعات",
              d: "يوم",
              dd: "%d أيام",
              M: "شهر",
              MM: "%d أشهر",
              y: "سنة",
              yy: "%d سنوات",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1509: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            },
            a = function (e) {
              return 0 === e
                ? 0
                : 1 === e
                ? 1
                : 2 === e
                ? 2
                : e % 100 >= 3 && e % 100 <= 10
                ? 3
                : e % 100 >= 11
                ? 4
                : 5;
            },
            s = {
              s: [
                "أقل من ثانية",
                "ثانية واحدة",
                ["ثانيتان", "ثانيتين"],
                "%d ثوان",
                "%d ثانية",
                "%d ثانية",
              ],
              m: [
                "أقل من دقيقة",
                "دقيقة واحدة",
                ["دقيقتان", "دقيقتين"],
                "%d دقائق",
                "%d دقيقة",
                "%d دقيقة",
              ],
              h: [
                "أقل من ساعة",
                "ساعة واحدة",
                ["ساعتان", "ساعتين"],
                "%d ساعات",
                "%d ساعة",
                "%d ساعة",
              ],
              d: [
                "أقل من يوم",
                "يوم واحد",
                ["يومان", "يومين"],
                "%d أيام",
                "%d يومًا",
                "%d يوم",
              ],
              M: [
                "أقل من شهر",
                "شهر واحد",
                ["شهران", "شهرين"],
                "%d أشهر",
                "%d شهرا",
                "%d شهر",
              ],
              y: [
                "أقل من عام",
                "عام واحد",
                ["عامان", "عامين"],
                "%d أعوام",
                "%d عامًا",
                "%d عام",
              ],
            },
            r = function (e) {
              return function (t, n, r, i) {
                var o = a(t),
                  d = s[e][a(t)];
                return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t);
              };
            },
            i = [
              "يناير",
              "فبراير",
              "مارس",
              "أبريل",
              "مايو",
              "يونيو",
              "يوليو",
              "أغسطس",
              "سبتمبر",
              "أكتوبر",
              "نوفمبر",
              "ديسمبر",
            ];
          e.defineLocale("ar", {
            months: i,
            monthsShort: i,
            weekdays:
              "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
            weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
            weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/‏M/‏YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ص|م/,
            isPM: function (e) {
              return "م" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ص" : "م";
            },
            calendar: {
              sameDay: "[اليوم عند الساعة] LT",
              nextDay: "[غدًا عند الساعة] LT",
              nextWeek: "dddd [عند الساعة] LT",
              lastDay: "[أمس عند الساعة] LT",
              lastWeek: "dddd [عند الساعة] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "بعد %s",
              past: "منذ %s",
              s: r("s"),
              ss: r("s"),
              m: r("m"),
              mm: r("m"),
              h: r("h"),
              hh: r("h"),
              d: r("d"),
              dd: r("d"),
              M: r("M"),
              MM: r("M"),
              y: r("y"),
              yy: r("y"),
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      5533: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "-inci",
            5: "-inci",
            8: "-inci",
            70: "-inci",
            80: "-inci",
            2: "-nci",
            7: "-nci",
            20: "-nci",
            50: "-nci",
            3: "-üncü",
            4: "-üncü",
            100: "-üncü",
            6: "-ncı",
            9: "-uncu",
            10: "-uncu",
            30: "-uncu",
            60: "-ıncı",
            90: "-ıncı",
          };
          e.defineLocale("az", {
            months:
              "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split(
                "_"
              ),
            monthsShort:
              "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
            weekdays:
              "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split(
                "_"
              ),
            weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
            weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[sabah saat] LT",
              nextWeek: "[gələn həftə] dddd [saat] LT",
              lastDay: "[dünən] LT",
              lastWeek: "[keçən həftə] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s əvvəl",
              s: "bir neçə saniyə",
              ss: "%d saniyə",
              m: "bir dəqiqə",
              mm: "%d dəqiqə",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir ay",
              MM: "%d ay",
              y: "bir il",
              yy: "%d il",
            },
            meridiemParse: /gecə|səhər|gündüz|axşam/,
            isPM: function (e) {
              return /^(gündüz|axşam)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "gecə"
                : e < 12
                ? "səhər"
                : e < 17
                ? "gündüz"
                : "axşam";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
            ordinal: function (e) {
              if (0 === e) return e + "-ıncı";
              var n = e % 10;
              return e + (t[n] || t[(e % 100) - n] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      8959: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return "m" === n
              ? t
                ? "хвіліна"
                : "хвіліну"
              : "h" === n
              ? t
                ? "гадзіна"
                : "гадзіну"
              : e +
                " " +
                ((a = +e),
                (s = {
                  ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                  mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                  hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                  dd: "дзень_дні_дзён",
                  MM: "месяц_месяцы_месяцаў",
                  yy: "год_гады_гадоў",
                }[n].split("_")),
                a % 10 == 1 && a % 100 != 11
                  ? s[0]
                  : a % 10 >= 2 &&
                    a % 10 <= 4 &&
                    (a % 100 < 10 || a % 100 >= 20)
                  ? s[1]
                  : s[2]);
            var a, s;
          }
          e.defineLocale("be", {
            months: {
              format:
                "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split(
                  "_"
                ),
              standalone:
                "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split(
                  "_"
                ),
            },
            monthsShort:
              "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split(
                "_"
              ),
            weekdays: {
              format:
                "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split(
                  "_"
                ),
              standalone:
                "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split(
                  "_"
                ),
              isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/,
            },
            weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., HH:mm",
              LLLL: "dddd, D MMMM YYYY г., HH:mm",
            },
            calendar: {
              sameDay: "[Сёння ў] LT",
              nextDay: "[Заўтра ў] LT",
              lastDay: "[Учора ў] LT",
              nextWeek: function () {
                return "[У] dddd [ў] LT";
              },
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return "[У мінулую] dddd [ў] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[У мінулы] dddd [ў] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "праз %s",
              past: "%s таму",
              s: "некалькі секунд",
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "дзень",
              dd: t,
              M: "месяц",
              MM: t,
              y: "год",
              yy: t,
            },
            meridiemParse: /ночы|раніцы|дня|вечара/,
            isPM: function (e) {
              return /^(дня|вечара)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночы"
                : e < 12
                ? "раніцы"
                : e < 17
                ? "дня"
                : "вечара";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return (e % 10 != 2 && e % 10 != 3) ||
                    e % 100 == 12 ||
                    e % 100 == 13
                    ? e + "-ы"
                    : e + "-і";
                case "D":
                  return e + "-га";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      7777: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("bg", {
            months:
              "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort:
              "яну_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
            weekdays:
              "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split(
                "_"
              ),
            weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Днес в] LT",
              nextDay: "[Утре в] LT",
              nextWeek: "dddd [в] LT",
              lastDay: "[Вчера в] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Миналата] dddd [в] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Миналия] dddd [в] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "след %s",
              past: "преди %s",
              s: "няколко секунди",
              ss: "%d секунди",
              m: "минута",
              mm: "%d минути",
              h: "час",
              hh: "%d часа",
              d: "ден",
              dd: "%d дена",
              w: "седмица",
              ww: "%d седмици",
              M: "месец",
              MM: "%d месеца",
              y: "година",
              yy: "%d години",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      4903: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("bm", {
            months:
              "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split(
                "_"
              ),
            monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split(
              "_"
            ),
            weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"),
            weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"),
            weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "MMMM [tile] D [san] YYYY",
              LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
              LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm",
            },
            calendar: {
              sameDay: "[Bi lɛrɛ] LT",
              nextDay: "[Sini lɛrɛ] LT",
              nextWeek: "dddd [don lɛrɛ] LT",
              lastDay: "[Kunu lɛrɛ] LT",
              lastWeek: "dddd [tɛmɛnen lɛrɛ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s kɔnɔ",
              past: "a bɛ %s bɔ",
              s: "sanga dama dama",
              ss: "sekondi %d",
              m: "miniti kelen",
              mm: "miniti %d",
              h: "lɛrɛ kelen",
              hh: "lɛrɛ %d",
              d: "tile kelen",
              dd: "tile %d",
              M: "kalo kelen",
              MM: "kalo %d",
              y: "san kelen",
              yy: "san %d",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7357: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "১",
              2: "২",
              3: "৩",
              4: "৪",
              5: "৫",
              6: "৬",
              7: "৭",
              8: "৮",
              9: "৯",
              0: "০",
            },
            n = {
              "১": "1",
              "২": "2",
              "৩": "3",
              "৪": "4",
              "৫": "5",
              "৬": "6",
              "৭": "7",
              "৮": "8",
              "৯": "9",
              "০": "0",
            };
          e.defineLocale("bn-bd", {
            months:
              "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
                "_"
              ),
            monthsShort:
              "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
                "_"
              ),
            weekdays:
              "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
                "_"
              ),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              ss: "%d সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর",
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /রাত|ভোর|সকাল|দুপুর|বিকাল|সন্ধ্যা|রাত/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "রাত" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ভোর" === t || "সকাল" === t
                  ? e
                  : "দুপুর" === t
                  ? e >= 3
                    ? e
                    : e + 12
                  : "বিকাল" === t || "সন্ধ্যা" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "রাত"
                : e < 6
                ? "ভোর"
                : e < 12
                ? "সকাল"
                : e < 15
                ? "দুপুর"
                : e < 18
                ? "বিকাল"
                : e < 20
                ? "সন্ধ্যা"
                : "রাত";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      1290: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "১",
              2: "২",
              3: "৩",
              4: "৪",
              5: "৫",
              6: "৬",
              7: "৭",
              8: "৮",
              9: "৯",
              0: "০",
            },
            n = {
              "১": "1",
              "২": "2",
              "৩": "3",
              "৪": "4",
              "৫": "5",
              "৬": "6",
              "৭": "7",
              "৮": "8",
              "৯": "9",
              "০": "0",
            };
          e.defineLocale("bn", {
            months:
              "জানুয়ারি_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split(
                "_"
              ),
            monthsShort:
              "জানু_ফেব্রু_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্ট_অক্টো_নভে_ডিসে".split(
                "_"
              ),
            weekdays:
              "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split(
                "_"
              ),
            weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
            weekdaysMin: "রবি_সোম_মঙ্গল_বুধ_বৃহ_শুক্র_শনি".split("_"),
            longDateFormat: {
              LT: "A h:mm সময়",
              LTS: "A h:mm:ss সময়",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm সময়",
              LLLL: "dddd, D MMMM YYYY, A h:mm সময়",
            },
            calendar: {
              sameDay: "[আজ] LT",
              nextDay: "[আগামীকাল] LT",
              nextWeek: "dddd, LT",
              lastDay: "[গতকাল] LT",
              lastWeek: "[গত] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s পরে",
              past: "%s আগে",
              s: "কয়েক সেকেন্ড",
              ss: "%d সেকেন্ড",
              m: "এক মিনিট",
              mm: "%d মিনিট",
              h: "এক ঘন্টা",
              hh: "%d ঘন্টা",
              d: "এক দিন",
              dd: "%d দিন",
              M: "এক মাস",
              MM: "%d মাস",
              y: "এক বছর",
              yy: "%d বছর",
            },
            preparse: function (e) {
              return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("রাত" === t && e >= 4) ||
                ("দুপুর" === t && e < 5) ||
                "বিকাল" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "রাত"
                : e < 10
                ? "সকাল"
                : e < 17
                ? "দুপুর"
                : e < 20
                ? "বিকাল"
                : "রাত";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      1545: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "༡",
              2: "༢",
              3: "༣",
              4: "༤",
              5: "༥",
              6: "༦",
              7: "༧",
              8: "༨",
              9: "༩",
              0: "༠",
            },
            n = {
              "༡": "1",
              "༢": "2",
              "༣": "3",
              "༤": "4",
              "༥": "5",
              "༦": "6",
              "༧": "7",
              "༨": "8",
              "༩": "9",
              "༠": "0",
            };
          e.defineLocale("bo", {
            months:
              "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split(
                "_"
              ),
            monthsShort:
              "ཟླ་1_ཟླ་2_ཟླ་3_ཟླ་4_ཟླ་5_ཟླ་6_ཟླ་7_ཟླ་8_ཟླ་9_ཟླ་10_ཟླ་11_ཟླ་12".split(
                "_"
              ),
            monthsShortRegex: /^(ཟླ་\d{1,2})/,
            monthsParseExact: !0,
            weekdays:
              "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split(
                "_"
              ),
            weekdaysShort:
              "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
            weekdaysMin: "ཉི_ཟླ_མིག_ལྷག_ཕུར_སངས_སྤེན".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[དི་རིང] LT",
              nextDay: "[སང་ཉིན] LT",
              nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
              lastDay: "[ཁ་སང] LT",
              lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ལ་",
              past: "%s སྔན་ལ",
              s: "ལམ་སང",
              ss: "%d སྐར་ཆ།",
              m: "སྐར་མ་གཅིག",
              mm: "%d སྐར་མ",
              h: "ཆུ་ཚོད་གཅིག",
              hh: "%d ཆུ་ཚོད",
              d: "ཉིན་གཅིག",
              dd: "%d ཉིན་",
              M: "ཟླ་བ་གཅིག",
              MM: "%d ཟླ་བ",
              y: "ལོ་གཅིག",
              yy: "%d ལོ",
            },
            preparse: function (e) {
              return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("མཚན་མོ" === t && e >= 4) ||
                ("ཉིན་གུང" === t && e < 5) ||
                "དགོང་དག" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "མཚན་མོ"
                : e < 10
                ? "ཞོགས་ཀས"
                : e < 17
                ? "ཉིན་གུང"
                : e < 20
                ? "དགོང་དག"
                : "མཚན་མོ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      1470: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return (
              e +
              " " +
              (function (e, t) {
                return 2 === t
                  ? (function (e) {
                      var t = { m: "v", b: "v", d: "z" };
                      return void 0 === t[e.charAt(0)]
                        ? e
                        : t[e.charAt(0)] + e.substring(1);
                    })(e)
                  : e;
              })({ mm: "munutenn", MM: "miz", dd: "devezh" }[n], e)
            );
          }
          function n(e) {
            return e > 9 ? n(e % 10) : e;
          }
          var a = [
              /^gen/i,
              /^c[ʼ\']hwe/i,
              /^meu/i,
              /^ebr/i,
              /^mae/i,
              /^(mez|eve)/i,
              /^gou/i,
              /^eos/i,
              /^gwe/i,
              /^her/i,
              /^du/i,
              /^ker/i,
            ],
            s =
              /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu|gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            r = [
              /^Su/i,
              /^Lu/i,
              /^Me([^r]|$)/i,
              /^Mer/i,
              /^Ya/i,
              /^Gw/i,
              /^Sa/i,
            ];
          e.defineLocale("br", {
            months:
              "Genver_Cʼhwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split(
                "_"
              ),
            monthsShort:
              "Gen_Cʼhwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
            weekdays: "Sul_Lun_Meurzh_Mercʼher_Yaou_Gwener_Sadorn".split("_"),
            weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
            weekdaysParse: r,
            fullWeekdaysParse: [
              /^sul/i,
              /^lun/i,
              /^meurzh/i,
              /^merc[ʼ\']her/i,
              /^yaou/i,
              /^gwener/i,
              /^sadorn/i,
            ],
            shortWeekdaysParse: [
              /^Sul/i,
              /^Lun/i,
              /^Meu/i,
              /^Mer/i,
              /^Yao/i,
              /^Gwe/i,
              /^Sad/i,
            ],
            minWeekdaysParse: r,
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(genver|c[ʼ\']hwevrer|meurzh|ebrel|mae|mezheven|gouere|eost|gwengolo|here|du|kerzu)/i,
            monthsShortStrictRegex:
              /^(gen|c[ʼ\']hwe|meu|ebr|mae|eve|gou|eos|gwe|her|du|ker)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [a viz] MMMM YYYY",
              LLL: "D [a viz] MMMM YYYY HH:mm",
              LLLL: "dddd, D [a viz] MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hiziv da] LT",
              nextDay: "[Warcʼhoazh da] LT",
              nextWeek: "dddd [da] LT",
              lastDay: "[Decʼh da] LT",
              lastWeek: "dddd [paset da] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "a-benn %s",
              past: "%s ʼzo",
              s: "un nebeud segondennoù",
              ss: "%d eilenn",
              m: "ur vunutenn",
              mm: t,
              h: "un eur",
              hh: "%d eur",
              d: "un devezh",
              dd: t,
              M: "ur miz",
              MM: t,
              y: "ur bloaz",
              yy: function (e) {
                switch (n(e)) {
                  case 1:
                  case 3:
                  case 4:
                  case 5:
                  case 9:
                    return e + " bloaz";
                  default:
                    return e + " vloaz";
                }
              },
            },
            dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
            ordinal: function (e) {
              return e + (1 === e ? "añ" : "vet");
            },
            week: { dow: 1, doy: 4 },
            meridiemParse: /a.m.|g.m./,
            isPM: function (e) {
              return "g.m." === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "a.m." : "g.m.";
            },
          });
        })(n(5093));
      },
      4429: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return (
                  a +
                  (1 === e
                    ? "sekunda"
                    : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi")
                );
              case "mm":
                return (
                  a +
                  (1 === e
                    ? "minuta"
                    : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta")
                );
              case "h":
                return "jedan sat";
              case "hh":
                return (
                  a +
                  (1 === e
                    ? "sat"
                    : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati")
                );
              case "dd":
                return a + (1 === e ? "dan" : "dana");
              case "MM":
                return (
                  a +
                  (1 === e
                    ? "mjesec"
                    : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci")
                );
              case "yy":
                return (
                  a +
                  (1 === e
                    ? "godina"
                    : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina")
                );
            }
          }
          e.defineLocale("bs", {
            months:
              "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                    return "[prošlu] dddd [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              ss: t,
              m: function (e, t, n, a) {
                if ("m" === n)
                  return t
                    ? "jedna minuta"
                    : a
                    ? "jednu minutu"
                    : "jedne minute";
              },
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      7306: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ca", {
            months: {
              standalone:
                "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split(
                  "_"
                ),
              format:
                "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split(
                  "_"
                ),
              isFormat: /D[oD]?(\s)+MMMM/,
            },
            monthsShort:
              "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split(
                "_"
              ),
            weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              ll: "D MMM YYYY",
              LLL: "D MMMM [de] YYYY [a les] H:mm",
              lll: "D MMM YYYY, H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a les] H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            calendar: {
              sameDay: function () {
                return (
                  "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              nextDay: function () {
                return (
                  "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              nextWeek: function () {
                return (
                  "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              lastDay: function () {
                return (
                  "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                );
              },
              lastWeek: function () {
                return (
                  "[el] dddd [passat a " +
                  (1 !== this.hours() ? "les" : "la") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "uns segons",
              ss: "%d segons",
              m: "un minut",
              mm: "%d minuts",
              h: "una hora",
              hh: "%d hores",
              d: "un dia",
              dd: "%d dies",
              M: "un mes",
              MM: "%d mesos",
              y: "un any",
              yy: "%d anys",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n =
                1 === e
                  ? "r"
                  : 2 === e
                  ? "n"
                  : 3 === e
                  ? "r"
                  : 4 === e
                  ? "t"
                  : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6464: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              standalone:
                "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split(
                  "_"
                ),
              format:
                "ledna_února_března_dubna_května_června_července_srpna_září_října_listopadu_prosince".split(
                  "_"
                ),
              isFormat: /DD?[o.]?(\[[^\[\]]*\]|\s)+MMMM/,
            },
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            a = [
              /^led/i,
              /^úno/i,
              /^bře/i,
              /^dub/i,
              /^kvě/i,
              /^(čvn|červen$|června)/i,
              /^(čvc|červenec|července)/i,
              /^srp/i,
              /^zář/i,
              /^říj/i,
              /^lis/i,
              /^pro/i,
            ],
            s =
              /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;
          function r(e) {
            return e > 1 && e < 5 && 1 != ~~(e / 10);
          }
          function i(e, t, n, a) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || a ? "pár sekund" : "pár sekundami";
              case "ss":
                return t || a
                  ? s + (r(e) ? "sekundy" : "sekund")
                  : s + "sekundami";
              case "m":
                return t ? "minuta" : a ? "minutu" : "minutou";
              case "mm":
                return t || a
                  ? s + (r(e) ? "minuty" : "minut")
                  : s + "minutami";
              case "h":
                return t ? "hodina" : a ? "hodinu" : "hodinou";
              case "hh":
                return t || a
                  ? s + (r(e) ? "hodiny" : "hodin")
                  : s + "hodinami";
              case "d":
                return t || a ? "den" : "dnem";
              case "dd":
                return t || a ? s + (r(e) ? "dny" : "dní") : s + "dny";
              case "M":
                return t || a ? "měsíc" : "měsícem";
              case "MM":
                return t || a ? s + (r(e) ? "měsíce" : "měsíců") : s + "měsíci";
              case "y":
                return t || a ? "rok" : "rokem";
              case "yy":
                return t || a ? s + (r(e) ? "roky" : "let") : s + "lety";
            }
          }
          e.defineLocale("cs", {
            months: t,
            monthsShort: n,
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i,
            monthsShortStrictRegex:
              /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split(
              "_"
            ),
            weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
            weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm",
              l: "D. M. YYYY",
            },
            calendar: {
              sameDay: "[dnes v] LT",
              nextDay: "[zítra v] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v neděli v] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [v] LT";
                  case 3:
                    return "[ve středu v] LT";
                  case 4:
                    return "[ve čtvrtek v] LT";
                  case 5:
                    return "[v pátek v] LT";
                  case 6:
                    return "[v sobotu v] LT";
                }
              },
              lastDay: "[včera v] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulou neděli v] LT";
                  case 1:
                  case 2:
                    return "[minulé] dddd [v] LT";
                  case 3:
                    return "[minulou středu v] LT";
                  case 4:
                  case 5:
                    return "[minulý] dddd [v] LT";
                  case 6:
                    return "[minulou sobotu v] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "před %s",
              s: i,
              ss: i,
              m: i,
              mm: i,
              h: i,
              hh: i,
              d: i,
              dd: i,
              M: i,
              MM: i,
              y: i,
              yy: i,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3635: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cv", {
            months:
              "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split(
                "_"
              ),
            monthsShort:
              "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
            weekdays:
              "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split(
                "_"
              ),
            weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
            weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
              LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
              LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
            },
            calendar: {
              sameDay: "[Паян] LT [сехетре]",
              nextDay: "[Ыран] LT [сехетре]",
              lastDay: "[Ӗнер] LT [сехетре]",
              nextWeek: "[Ҫитес] dddd LT [сехетре]",
              lastWeek: "[Иртнӗ] dddd LT [сехетре]",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return (
                  e +
                  (/сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран")
                );
              },
              past: "%s каялла",
              s: "пӗр-ик ҫеккунт",
              ss: "%d ҫеккунт",
              m: "пӗр минут",
              mm: "%d минут",
              h: "пӗр сехет",
              hh: "%d сехет",
              d: "пӗр кун",
              dd: "%d кун",
              M: "пӗр уйӑх",
              MM: "%d уйӑх",
              y: "пӗр ҫул",
              yy: "%d ҫул",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
            ordinal: "%d-мӗш",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      4226: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("cy", {
            months:
              "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split(
                "_"
              ),
            monthsShort:
              "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
            weekdays:
              "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split(
                "_"
              ),
            weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
            weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Heddiw am] LT",
              nextDay: "[Yfory am] LT",
              nextWeek: "dddd [am] LT",
              lastDay: "[Ddoe am] LT",
              lastWeek: "dddd [diwethaf am] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "mewn %s",
              past: "%s yn ôl",
              s: "ychydig eiliadau",
              ss: "%d eiliad",
              m: "munud",
              mm: "%d munud",
              h: "awr",
              hh: "%d awr",
              d: "diwrnod",
              dd: "%d diwrnod",
              M: "mis",
              MM: "%d mis",
              y: "blwyddyn",
              yy: "%d flynedd",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
            ordinal: function (e) {
              var t = "";
              return (
                e > 20
                  ? (t =
                      40 === e || 50 === e || 60 === e || 80 === e || 100 === e
                        ? "fed"
                        : "ain")
                  : e > 0 &&
                    (t = [
                      "",
                      "af",
                      "il",
                      "ydd",
                      "ydd",
                      "ed",
                      "ed",
                      "ed",
                      "fed",
                      "fed",
                      "fed",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "eg",
                      "fed",
                      "eg",
                      "fed",
                    ][e]),
                e + t
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3601: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("da", {
            months:
              "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "på dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[i] dddd[s kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "få sekunder",
              ss: "%d sekunder",
              m: "et minut",
              mm: "%d minutter",
              h: "en time",
              hh: "%d timer",
              d: "en dag",
              dd: "%d dage",
              M: "en måned",
              MM: "%d måneder",
              y: "et år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6111: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de-at", {
            months:
              "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      4697: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de-ch", {
            months:
              "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7853: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eine Minute", "einer Minute"],
              h: ["eine Stunde", "einer Stunde"],
              d: ["ein Tag", "einem Tag"],
              dd: [e + " Tage", e + " Tagen"],
              w: ["eine Woche", "einer Woche"],
              M: ["ein Monat", "einem Monat"],
              MM: [e + " Monate", e + " Monaten"],
              y: ["ein Jahr", "einem Jahr"],
              yy: [e + " Jahre", e + " Jahren"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("de", {
            months:
              "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split(
                "_"
              ),
            weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY HH:mm",
              LLLL: "dddd, D. MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[heute um] LT [Uhr]",
              sameElse: "L",
              nextDay: "[morgen um] LT [Uhr]",
              nextWeek: "dddd [um] LT [Uhr]",
              lastDay: "[gestern um] LT [Uhr]",
              lastWeek: "[letzten] dddd [um] LT [Uhr]",
            },
            relativeTime: {
              future: "in %s",
              past: "vor %s",
              s: "ein paar Sekunden",
              ss: "%d Sekunden",
              m: t,
              mm: "%d Minuten",
              h: t,
              hh: "%d Stunden",
              d: t,
              dd: t,
              w: t,
              ww: "%d Wochen",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      708: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "ޖެނުއަރީ",
              "ފެބްރުއަރީ",
              "މާރިޗު",
              "އޭޕްރީލު",
              "މޭ",
              "ޖޫން",
              "ޖުލައި",
              "އޯގަސްޓު",
              "ސެޕްޓެމްބަރު",
              "އޮކްޓޯބަރު",
              "ނޮވެމްބަރު",
              "ޑިސެމްބަރު",
            ],
            n = [
              "އާދިއްތަ",
              "ހޯމަ",
              "އަންގާރަ",
              "ބުދަ",
              "ބުރާސްފަތި",
              "ހުކުރު",
              "ހޮނިހިރު",
            ];
          e.defineLocale("dv", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "D/M/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /މކ|މފ/,
            isPM: function (e) {
              return "މފ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "މކ" : "މފ";
            },
            calendar: {
              sameDay: "[މިއަދު] LT",
              nextDay: "[މާދަމާ] LT",
              nextWeek: "dddd LT",
              lastDay: "[އިއްޔެ] LT",
              lastWeek: "[ފާއިތުވި] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ތެރޭގައި %s",
              past: "ކުރިން %s",
              s: "ސިކުންތުކޮޅެއް",
              ss: "d% ސިކުންތު",
              m: "މިނިޓެއް",
              mm: "މިނިޓު %d",
              h: "ގަޑިއިރެއް",
              hh: "ގަޑިއިރު %d",
              d: "ދުވަހެއް",
              dd: "ދުވަސް %d",
              M: "މަހެއް",
              MM: "މަސް %d",
              y: "އަހަރެއް",
              yy: "އަހަރު %d",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 7, doy: 12 },
          });
        })(n(5093));
      },
      4691: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("el", {
            monthsNominativeEl:
              "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split(
                "_"
              ),
            monthsGenitiveEl:
              "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split(
                "_"
              ),
            months: function (e, t) {
              return e
                ? "string" == typeof t &&
                  /D/.test(t.substring(0, t.indexOf("MMMM")))
                  ? this._monthsGenitiveEl[e.month()]
                  : this._monthsNominativeEl[e.month()]
                : this._monthsNominativeEl;
            },
            monthsShort:
              "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
            weekdays:
              "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split(
                "_"
              ),
            weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
            weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "μμ" : "ΜΜ") : n ? "πμ" : "ΠΜ";
            },
            isPM: function (e) {
              return "μ" === (e + "").toLowerCase()[0];
            },
            meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendarEl: {
              sameDay: "[Σήμερα {}] LT",
              nextDay: "[Αύριο {}] LT",
              nextWeek: "dddd [{}] LT",
              lastDay: "[Χθες {}] LT",
              lastWeek: function () {
                return 6 === this.day()
                  ? "[το προηγούμενο] dddd [{}] LT"
                  : "[την προηγούμενη] dddd [{}] LT";
              },
              sameElse: "L",
            },
            calendar: function (e, t) {
              var n,
                a = this._calendarEl[e],
                s = t && t.hours();
              return (
                (n = a),
                (("undefined" != typeof Function && n instanceof Function) ||
                  "[object Function]" === Object.prototype.toString.call(n)) &&
                  (a = a.apply(t)),
                a.replace("{}", s % 12 == 1 ? "στη" : "στις")
              );
            },
            relativeTime: {
              future: "σε %s",
              past: "%s πριν",
              s: "λίγα δευτερόλεπτα",
              ss: "%d δευτερόλεπτα",
              m: "ένα λεπτό",
              mm: "%d λεπτά",
              h: "μία ώρα",
              hh: "%d ώρες",
              d: "μία μέρα",
              dd: "%d μέρες",
              M: "ένας μήνας",
              MM: "%d μήνες",
              y: "ένας χρόνος",
              yy: "%d χρόνια",
            },
            dayOfMonthOrdinalParse: /\d{1,2}η/,
            ordinal: "%dη",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3872: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-au", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 0, doy: 4 },
          });
        })(n(5093));
      },
      8298: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ca", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "YYYY-MM-DD",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY h:mm A",
              LLLL: "dddd, MMMM D, YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          });
        })(n(5093));
      },
      6195: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-gb", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6584: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-ie", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      5543: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-il", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
          });
        })(n(5093));
      },
      9033: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-in", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      9402: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-nz", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3004: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("en-sg", {
            months:
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            weekdays:
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Today at] LT",
              nextDay: "[Tomorrow at] LT",
              nextWeek: "dddd [at] LT",
              lastDay: "[Yesterday at] LT",
              lastWeek: "[Last] dddd [at] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "in %s",
              past: "%s ago",
              s: "a few seconds",
              ss: "%d seconds",
              m: "a minute",
              mm: "%d minutes",
              h: "an hour",
              hh: "%d hours",
              d: "a day",
              dd: "%d days",
              M: "a month",
              MM: "%d months",
              y: "a year",
              yy: "%d years",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2934: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eo", {
            months:
              "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mart_apr_maj_jun_jul_aŭg_sept_okt_nov_dec".split("_"),
            weekdays:
              "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
            weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
            weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "[la] D[-an de] MMMM, YYYY",
              LLL: "[la] D[-an de] MMMM, YYYY HH:mm",
              LLLL: "dddd[n], [la] D[-an de] MMMM, YYYY HH:mm",
              llll: "ddd, [la] D[-an de] MMM, YYYY HH:mm",
            },
            meridiemParse: /[ap]\.t\.m/i,
            isPM: function (e) {
              return "p" === e.charAt(0).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11
                ? n
                  ? "p.t.m."
                  : "P.T.M."
                : n
                ? "a.t.m."
                : "A.T.M.";
            },
            calendar: {
              sameDay: "[Hodiaŭ je] LT",
              nextDay: "[Morgaŭ je] LT",
              nextWeek: "dddd[n je] LT",
              lastDay: "[Hieraŭ je] LT",
              lastWeek: "[pasintan] dddd[n je] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "post %s",
              past: "antaŭ %s",
              s: "kelkaj sekundoj",
              ss: "%d sekundoj",
              m: "unu minuto",
              mm: "%d minutoj",
              h: "unu horo",
              hh: "%d horoj",
              d: "unu tago",
              dd: "%d tagoj",
              M: "unu monato",
              MM: "%d monatoj",
              y: "unu jaro",
              yy: "%d jaroj",
            },
            dayOfMonthOrdinalParse: /\d{1,2}a/,
            ordinal: "%da",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      838: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-do", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7730: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-mx", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 0, doy: 4 },
            invalidDate: "Fecha inválida",
          });
        })(n(5093));
      },
      6575: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es-us", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "MM/DD/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY h:mm A",
              LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      7650: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split(
                "_"
              ),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            a = [
              /^ene/i,
              /^feb/i,
              /^mar/i,
              /^abr/i,
              /^may/i,
              /^jun/i,
              /^jul/i,
              /^ago/i,
              /^sep/i,
              /^oct/i,
              /^nov/i,
              /^dic/i,
            ],
            s =
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
          e.defineLocale("es", {
            months:
              "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i,
            monthsShortStrictRegex:
              /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
            weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              nextDay: function () {
                return (
                  "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                );
              },
              nextWeek: function () {
                return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastDay: function () {
                return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[el] dddd [pasado a la" +
                  (1 !== this.hours() ? "s" : "") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "en %s",
              past: "hace %s",
              s: "unos segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "una hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              w: "una semana",
              ww: "%d semanas",
              M: "un mes",
              MM: "%d meses",
              y: "un año",
              yy: "%d años",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
            invalidDate: "Fecha inválida",
          });
        })(n(5093));
      },
      3035: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
              ss: [e + "sekundi", e + "sekundit"],
              m: ["ühe minuti", "üks minut"],
              mm: [e + " minuti", e + " minutit"],
              h: ["ühe tunni", "tund aega", "üks tund"],
              hh: [e + " tunni", e + " tundi"],
              d: ["ühe päeva", "üks päev"],
              M: ["kuu aja", "kuu aega", "üks kuu"],
              MM: [e + " kuu", e + " kuud"],
              y: ["ühe aasta", "aasta", "üks aasta"],
              yy: [e + " aasta", e + " aastat"],
            };
            return t ? (s[n][2] ? s[n][2] : s[n][1]) : a ? s[n][0] : s[n][1];
          }
          e.defineLocale("et", {
            months:
              "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split(
                "_"
              ),
            monthsShort:
              "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split(
                "_"
              ),
            weekdays:
              "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split(
                "_"
              ),
            weekdaysShort: "P_E_T_K_N_R_L".split("_"),
            weekdaysMin: "P_E_T_K_N_R_L".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Täna,] LT",
              nextDay: "[Homme,] LT",
              nextWeek: "[Järgmine] dddd LT",
              lastDay: "[Eile,] LT",
              lastWeek: "[Eelmine] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s pärast",
              past: "%s tagasi",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: "%d päeva",
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3508: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("eu", {
            months:
              "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split(
                "_"
              ),
            monthsShort:
              "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split(
                "_"
              ),
            weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
            weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY[ko] MMMM[ren] D[a]",
              LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
              LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
              l: "YYYY-M-D",
              ll: "YYYY[ko] MMM D[a]",
              lll: "YYYY[ko] MMM D[a] HH:mm",
              llll: "ddd, YYYY[ko] MMM D[a] HH:mm",
            },
            calendar: {
              sameDay: "[gaur] LT[etan]",
              nextDay: "[bihar] LT[etan]",
              nextWeek: "dddd LT[etan]",
              lastDay: "[atzo] LT[etan]",
              lastWeek: "[aurreko] dddd LT[etan]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s barru",
              past: "duela %s",
              s: "segundo batzuk",
              ss: "%d segundo",
              m: "minutu bat",
              mm: "%d minutu",
              h: "ordu bat",
              hh: "%d ordu",
              d: "egun bat",
              dd: "%d egun",
              M: "hilabete bat",
              MM: "%d hilabete",
              y: "urte bat",
              yy: "%d urte",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      119: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "۱",
              2: "۲",
              3: "۳",
              4: "۴",
              5: "۵",
              6: "۶",
              7: "۷",
              8: "۸",
              9: "۹",
              0: "۰",
            },
            n = {
              "۱": "1",
              "۲": "2",
              "۳": "3",
              "۴": "4",
              "۵": "5",
              "۶": "6",
              "۷": "7",
              "۸": "8",
              "۹": "9",
              "۰": "0",
            };
          e.defineLocale("fa", {
            months:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            monthsShort:
              "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split(
                "_"
              ),
            weekdays:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysShort:
              "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
            weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /قبل از ظهر|بعد از ظهر/,
            isPM: function (e) {
              return /بعد از ظهر/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "قبل از ظهر" : "بعد از ظهر";
            },
            calendar: {
              sameDay: "[امروز ساعت] LT",
              nextDay: "[فردا ساعت] LT",
              nextWeek: "dddd [ساعت] LT",
              lastDay: "[دیروز ساعت] LT",
              lastWeek: "dddd [پیش] [ساعت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "در %s",
              past: "%s پیش",
              s: "چند ثانیه",
              ss: "%d ثانیه",
              m: "یک دقیقه",
              mm: "%d دقیقه",
              h: "یک ساعت",
              hh: "%d ساعت",
              d: "یک روز",
              dd: "%d روز",
              M: "یک ماه",
              MM: "%d ماه",
              y: "یک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e
                .replace(/[۰-۹]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            dayOfMonthOrdinalParse: /\d{1,2}م/,
            ordinal: "%dم",
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      527: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(
                " "
              ),
            n = [
              "nolla",
              "yhden",
              "kahden",
              "kolmen",
              "neljän",
              "viiden",
              "kuuden",
              t[7],
              t[8],
              t[9],
            ];
          function a(e, a, s, r) {
            var i = "";
            switch (s) {
              case "s":
                return r ? "muutaman sekunnin" : "muutama sekunti";
              case "ss":
                i = r ? "sekunnin" : "sekuntia";
                break;
              case "m":
                return r ? "minuutin" : "minuutti";
              case "mm":
                i = r ? "minuutin" : "minuuttia";
                break;
              case "h":
                return r ? "tunnin" : "tunti";
              case "hh":
                i = r ? "tunnin" : "tuntia";
                break;
              case "d":
                return r ? "päivän" : "päivä";
              case "dd":
                i = r ? "päivän" : "päivää";
                break;
              case "M":
                return r ? "kuukauden" : "kuukausi";
              case "MM":
                i = r ? "kuukauden" : "kuukautta";
                break;
              case "y":
                return r ? "vuoden" : "vuosi";
              case "yy":
                i = r ? "vuoden" : "vuotta";
            }
            return (
              (function (e, a) {
                return e < 10 ? (a ? n[e] : t[e]) : e;
              })(e, r) +
              " " +
              i
            );
          }
          e.defineLocale("fi", {
            months:
              "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split(
                "_"
              ),
            monthsShort:
              "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split(
                "_"
              ),
            weekdays:
              "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split(
                "_"
              ),
            weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
            weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[ta] YYYY",
              LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
              LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
              l: "D.M.YYYY",
              ll: "Do MMM YYYY",
              lll: "Do MMM YYYY, [klo] HH.mm",
              llll: "ddd, Do MMM YYYY, [klo] HH.mm",
            },
            calendar: {
              sameDay: "[tänään] [klo] LT",
              nextDay: "[huomenna] [klo] LT",
              nextWeek: "dddd [klo] LT",
              lastDay: "[eilen] [klo] LT",
              lastWeek: "[viime] dddd[na] [klo] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s päästä",
              past: "%s sitten",
              s: a,
              ss: a,
              m: a,
              mm: a,
              h: a,
              hh: a,
              d: a,
              dd: a,
              M: a,
              MM: a,
              y: a,
              yy: a,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      5995: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fil", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort:
              "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
                "_"
              ),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2477: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fo", {
            months:
              "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
            weekdays:
              "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
            weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D. MMMM, YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Í dag kl.] LT",
              nextDay: "[Í morgin kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[Í gjár kl.] LT",
              lastWeek: "[síðstu] dddd [kl] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "um %s",
              past: "%s síðani",
              s: "fá sekund",
              ss: "%d sekundir",
              m: "ein minuttur",
              mm: "%d minuttir",
              h: "ein tími",
              hh: "%d tímar",
              d: "ein dagur",
              dd: "%d dagar",
              M: "ein mánaður",
              MM: "%d mánaðir",
              y: "eitt ár",
              yy: "%d ár",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6435: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ca", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
          });
        })(n(5093));
      },
      7892: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("fr-ch", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
            ordinal: function (e, t) {
              switch (t) {
                default:
                case "M":
                case "Q":
                case "D":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      5498: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?|janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            n = [
              /^janv/i,
              /^févr/i,
              /^mars/i,
              /^avr/i,
              /^mai/i,
              /^juin/i,
              /^juil/i,
              /^août/i,
              /^sept/i,
              /^oct/i,
              /^nov/i,
              /^déc/i,
            ];
          e.defineLocale("fr", {
            months:
              "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split(
                "_"
              ),
            monthsShort:
              "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split(
                "_"
              ),
            monthsRegex: t,
            monthsShortRegex: t,
            monthsStrictRegex:
              /^(janvier|février|mars|avril|mai|juin|juillet|août|septembre|octobre|novembre|décembre)/i,
            monthsShortStrictRegex:
              /(janv\.?|févr\.?|mars|avr\.?|mai|juin|juil\.?|août|sept\.?|oct\.?|nov\.?|déc\.?)/i,
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            weekdays:
              "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
            weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
            weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Aujourd’hui à] LT",
              nextDay: "[Demain à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[Hier à] LT",
              lastWeek: "dddd [dernier à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dans %s",
              past: "il y a %s",
              s: "quelques secondes",
              ss: "%d secondes",
              m: "une minute",
              mm: "%d minutes",
              h: "une heure",
              hh: "%d heures",
              d: "un jour",
              dd: "%d jours",
              w: "une semaine",
              ww: "%d semaines",
              M: "un mois",
              MM: "%d mois",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
            ordinal: function (e, t) {
              switch (t) {
                case "D":
                  return e + (1 === e ? "er" : "");
                default:
                case "M":
                case "Q":
                case "DDD":
                case "d":
                  return e + (1 === e ? "er" : "e");
                case "w":
                case "W":
                  return e + (1 === e ? "re" : "e");
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7071: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
          e.defineLocale("fy", {
            months:
              "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsParseExact: !0,
            weekdays:
              "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split(
                "_"
              ),
            weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
            weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[hjoed om] LT",
              nextDay: "[moarn om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[juster om] LT",
              lastWeek: "[ôfrûne] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "oer %s",
              past: "%s lyn",
              s: "in pear sekonden",
              ss: "%d sekonden",
              m: "ien minút",
              mm: "%d minuten",
              h: "ien oere",
              hh: "%d oeren",
              d: "ien dei",
              dd: "%d dagen",
              M: "ien moanne",
              MM: "%d moannen",
              y: "ien jier",
              yy: "%d jierren",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1734: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ga", {
            months: [
              "Eanáir",
              "Feabhra",
              "Márta",
              "Aibreán",
              "Bealtaine",
              "Meitheamh",
              "Iúil",
              "Lúnasa",
              "Meán Fómhair",
              "Deireadh Fómhair",
              "Samhain",
              "Nollaig",
            ],
            monthsShort: [
              "Ean",
              "Feabh",
              "Márt",
              "Aib",
              "Beal",
              "Meith",
              "Iúil",
              "Lún",
              "M.F.",
              "D.F.",
              "Samh",
              "Noll",
            ],
            monthsParseExact: !0,
            weekdays: [
              "Dé Domhnaigh",
              "Dé Luain",
              "Dé Máirt",
              "Dé Céadaoin",
              "Déardaoin",
              "Dé hAoine",
              "Dé Sathairn",
            ],
            weekdaysShort: [
              "Domh",
              "Luan",
              "Máirt",
              "Céad",
              "Déar",
              "Aoine",
              "Sath",
            ],
            weekdaysMin: ["Do", "Lu", "Má", "Cé", "Dé", "A", "Sa"],
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Inniu ag] LT",
              nextDay: "[Amárach ag] LT",
              nextWeek: "dddd [ag] LT",
              lastDay: "[Inné ag] LT",
              lastWeek: "dddd [seo caite] [ag] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i %s",
              past: "%s ó shin",
              s: "cúpla soicind",
              ss: "%d soicind",
              m: "nóiméad",
              mm: "%d nóiméad",
              h: "uair an chloig",
              hh: "%d uair an chloig",
              d: "lá",
              dd: "%d lá",
              M: "mí",
              MM: "%d míonna",
              y: "bliain",
              yy: "%d bliain",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      217: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("gd", {
            months: [
              "Am Faoilleach",
              "An Gearran",
              "Am Màrt",
              "An Giblean",
              "An Cèitean",
              "An t-Ògmhios",
              "An t-Iuchar",
              "An Lùnastal",
              "An t-Sultain",
              "An Dàmhair",
              "An t-Samhain",
              "An Dùbhlachd",
            ],
            monthsShort: [
              "Faoi",
              "Gear",
              "Màrt",
              "Gibl",
              "Cèit",
              "Ògmh",
              "Iuch",
              "Lùn",
              "Sult",
              "Dàmh",
              "Samh",
              "Dùbh",
            ],
            monthsParseExact: !0,
            weekdays: [
              "Didòmhnaich",
              "Diluain",
              "Dimàirt",
              "Diciadain",
              "Diardaoin",
              "Dihaoine",
              "Disathairne",
            ],
            weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
            weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"],
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[An-diugh aig] LT",
              nextDay: "[A-màireach aig] LT",
              nextWeek: "dddd [aig] LT",
              lastDay: "[An-dè aig] LT",
              lastWeek: "dddd [seo chaidh] [aig] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ann an %s",
              past: "bho chionn %s",
              s: "beagan diogan",
              ss: "%d diogan",
              m: "mionaid",
              mm: "%d mionaidean",
              h: "uair",
              hh: "%d uairean",
              d: "latha",
              dd: "%d latha",
              M: "mìos",
              MM: "%d mìosan",
              y: "bliadhna",
              yy: "%d bliadhna",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
            ordinal: function (e) {
              return e + (1 === e ? "d" : e % 10 == 2 ? "na" : "mh");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7329: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("gl", {
            months:
              "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split(
                "_"
              ),
            monthsShort:
              "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split(
              "_"
            ),
            weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
            weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY H:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
            },
            calendar: {
              sameDay: function () {
                return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextDay: function () {
                return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT";
              },
              nextWeek: function () {
                return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT";
              },
              lastDay: function () {
                return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT";
              },
              lastWeek: function () {
                return (
                  "[o] dddd [pasado " +
                  (1 !== this.hours() ? "ás" : "a") +
                  "] LT"
                );
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return 0 === e.indexOf("un") ? "n" + e : "en " + e;
              },
              past: "hai %s",
              s: "uns segundos",
              ss: "%d segundos",
              m: "un minuto",
              mm: "%d minutos",
              h: "unha hora",
              hh: "%d horas",
              d: "un día",
              dd: "%d días",
              M: "un mes",
              MM: "%d meses",
              y: "un ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2124: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["थोडया सॅकंडांनी", "थोडे सॅकंड"],
              ss: [e + " सॅकंडांनी", e + " सॅकंड"],
              m: ["एका मिणटान", "एक मिनूट"],
              mm: [e + " मिणटांनी", e + " मिणटां"],
              h: ["एका वरान", "एक वर"],
              hh: [e + " वरांनी", e + " वरां"],
              d: ["एका दिसान", "एक दीस"],
              dd: [e + " दिसांनी", e + " दीस"],
              M: ["एका म्हयन्यान", "एक म्हयनो"],
              MM: [e + " म्हयन्यानी", e + " म्हयने"],
              y: ["एका वर्सान", "एक वर्स"],
              yy: [e + " वर्सांनी", e + " वर्सां"],
            };
            return a ? s[n][0] : s[n][1];
          }
          e.defineLocale("gom-deva", {
            months: {
              standalone:
                "जानेवारी_फेब्रुवारी_मार्च_एप्रील_मे_जून_जुलय_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                  "_"
                ),
              format:
                "जानेवारीच्या_फेब्रुवारीच्या_मार्चाच्या_एप्रीलाच्या_मेयाच्या_जूनाच्या_जुलयाच्या_ऑगस्टाच्या_सप्टेंबराच्या_ऑक्टोबराच्या_नोव्हेंबराच्या_डिसेंबराच्या".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "जाने._फेब्रु._मार्च_एप्री._मे_जून_जुल._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "आयतार_सोमार_मंगळार_बुधवार_बिरेस्तार_सुक्रार_शेनवार".split("_"),
            weekdaysShort: "आयत._सोम._मंगळ._बुध._ब्रेस्त._सुक्र._शेन.".split(
              "_"
            ),
            weekdaysMin: "आ_सो_मं_बु_ब्रे_सु_शे".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [वाजतां]",
              LTS: "A h:mm:ss [वाजतां]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [वाजतां]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [वाजतां]",
              llll: "ddd, D MMM YYYY, A h:mm [वाजतां]",
            },
            calendar: {
              sameDay: "[आयज] LT",
              nextDay: "[फाल्यां] LT",
              nextWeek: "[फुडलो] dddd[,] LT",
              lastDay: "[काल] LT",
              lastWeek: "[फाटलो] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s आदीं",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(वेर)/,
            ordinal: function (e, t) {
              return "D" === t ? e + "वेर" : e;
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /राती|सकाळीं|दनपारां|सांजे/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राती" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सकाळीं" === t
                  ? e
                  : "दनपारां" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "सांजे" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "राती"
                : e < 12
                ? "सकाळीं"
                : e < 16
                ? "दनपारां"
                : e < 20
                ? "सांजे"
                : "राती";
            },
          });
        })(n(5093));
      },
      3383: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["thoddea sekondamni", "thodde sekond"],
              ss: [e + " sekondamni", e + " sekond"],
              m: ["eka mintan", "ek minut"],
              mm: [e + " mintamni", e + " mintam"],
              h: ["eka voran", "ek vor"],
              hh: [e + " voramni", e + " voram"],
              d: ["eka disan", "ek dis"],
              dd: [e + " disamni", e + " dis"],
              M: ["eka mhoinean", "ek mhoino"],
              MM: [e + " mhoineamni", e + " mhoine"],
              y: ["eka vorsan", "ek voros"],
              yy: [e + " vorsamni", e + " vorsam"],
            };
            return a ? s[n][0] : s[n][1];
          }
          e.defineLocale("gom-latn", {
            months: {
              standalone:
                "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split(
                  "_"
                ),
              format:
                "Janerachea_Febrerachea_Marsachea_Abrilachea_Maiachea_Junachea_Julaiachea_Agostachea_Setembrachea_Otubrachea_Novembrachea_Dezembrachea".split(
                  "_"
                ),
              isFormat: /MMMM(\s)+D[oD]?/,
            },
            monthsShort:
              "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Aitar_Somar_Mongllar_Budhvar_Birestar_Sukrar_Son'var".split("_"),
            weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
            weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "A h:mm [vazta]",
              LTS: "A h:mm:ss [vazta]",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY A h:mm [vazta]",
              LLLL: "dddd, MMMM Do, YYYY, A h:mm [vazta]",
              llll: "ddd, D MMM YYYY, A h:mm [vazta]",
            },
            calendar: {
              sameDay: "[Aiz] LT",
              nextDay: "[Faleam] LT",
              nextWeek: "[Fuddlo] dddd[,] LT",
              lastDay: "[Kal] LT",
              lastWeek: "[Fattlo] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s",
              past: "%s adim",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(er)/,
            ordinal: function (e, t) {
              return "D" === t ? e + "er" : e;
            },
            week: { dow: 0, doy: 3 },
            meridiemParse: /rati|sokallim|donparam|sanje/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "rati" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "sokallim" === t
                  ? e
                  : "donparam" === t
                  ? e > 12
                    ? e
                    : e + 12
                  : "sanje" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "rati"
                : e < 12
                ? "sokallim"
                : e < 16
                ? "donparam"
                : e < 20
                ? "sanje"
                : "rati";
            },
          });
        })(n(5093));
      },
      5050: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "૧",
              2: "૨",
              3: "૩",
              4: "૪",
              5: "૫",
              6: "૬",
              7: "૭",
              8: "૮",
              9: "૯",
              0: "૦",
            },
            n = {
              "૧": "1",
              "૨": "2",
              "૩": "3",
              "૪": "4",
              "૫": "5",
              "૬": "6",
              "૭": "7",
              "૮": "8",
              "૯": "9",
              "૦": "0",
            };
          e.defineLocale("gu", {
            months:
              "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split(
                "_"
              ),
            monthsShort:
              "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split(
                "_"
              ),
            weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"),
            weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"),
            longDateFormat: {
              LT: "A h:mm વાગ્યે",
              LTS: "A h:mm:ss વાગ્યે",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm વાગ્યે",
              LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે",
            },
            calendar: {
              sameDay: "[આજ] LT",
              nextDay: "[કાલે] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ગઇકાલે] LT",
              lastWeek: "[પાછલા] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s મા",
              past: "%s પહેલા",
              s: "અમુક પળો",
              ss: "%d સેકંડ",
              m: "એક મિનિટ",
              mm: "%d મિનિટ",
              h: "એક કલાક",
              hh: "%d કલાક",
              d: "એક દિવસ",
              dd: "%d દિવસ",
              M: "એક મહિનો",
              MM: "%d મહિનો",
              y: "એક વર્ષ",
              yy: "%d વર્ષ",
            },
            preparse: function (e) {
              return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /રાત|બપોર|સવાર|સાંજ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "રાત" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "સવાર" === t
                  ? e
                  : "બપોર" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "સાંજ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "રાત"
                : e < 10
                ? "સવાર"
                : e < 17
                ? "બપોર"
                : e < 20
                ? "સાંજ"
                : "રાત";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      1713: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("he", {
            months:
              "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split(
                "_"
              ),
            monthsShort:
              "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split(
                "_"
              ),
            weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
            weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
            weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [ב]MMMM YYYY",
              LLL: "D [ב]MMMM YYYY HH:mm",
              LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
              l: "D/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[היום ב־]LT",
              nextDay: "[מחר ב־]LT",
              nextWeek: "dddd [בשעה] LT",
              lastDay: "[אתמול ב־]LT",
              lastWeek: "[ביום] dddd [האחרון בשעה] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "בעוד %s",
              past: "לפני %s",
              s: "מספר שניות",
              ss: "%d שניות",
              m: "דקה",
              mm: "%d דקות",
              h: "שעה",
              hh: function (e) {
                return 2 === e ? "שעתיים" : e + " שעות";
              },
              d: "יום",
              dd: function (e) {
                return 2 === e ? "יומיים" : e + " ימים";
              },
              M: "חודש",
              MM: function (e) {
                return 2 === e ? "חודשיים" : e + " חודשים";
              },
              y: "שנה",
              yy: function (e) {
                return 2 === e
                  ? "שנתיים"
                  : e % 10 == 0 && 10 !== e
                  ? e + " שנה"
                  : e + " שנים";
              },
            },
            meridiemParse:
              /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
            isPM: function (e) {
              return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 5
                ? "לפנות בוקר"
                : e < 10
                ? "בבוקר"
                : e < 12
                ? n
                  ? 'לפנה"צ'
                  : "לפני הצהריים"
                : e < 18
                ? n
                  ? 'אחה"צ'
                  : "אחרי הצהריים"
                : "בערב";
            },
          });
        })(n(5093));
      },
      3861: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            },
            a = [
              /^जन/i,
              /^फ़र|फर/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सितं|सित/i,
              /^अक्टू/i,
              /^नव|नवं/i,
              /^दिसं|दिस/i,
            ];
          e.defineLocale("hi", {
            months: {
              format:
                "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split(
                  "_"
                ),
              standalone:
                "जनवरी_फरवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितंबर_अक्टूबर_नवंबर_दिसंबर".split(
                  "_"
                ),
            },
            monthsShort:
              "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split(
                "_"
              ),
            weekdays:
              "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm बजे",
              LTS: "A h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, A h:mm बजे",
            },
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: [
              /^जन/i,
              /^फ़र/i,
              /^मार्च/i,
              /^अप्रै/i,
              /^मई/i,
              /^जून/i,
              /^जुल/i,
              /^अग/i,
              /^सित/i,
              /^अक्टू/i,
              /^नव/i,
              /^दिस/i,
            ],
            monthsRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsShortRegex:
              /^(जनवरी|जन\.?|फ़रवरी|फरवरी|फ़र\.?|मार्च?|अप्रैल|अप्रै\.?|मई?|जून?|जुलाई|जुल\.?|अगस्त|अग\.?|सितम्बर|सितंबर|सित\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर|नव\.?|दिसम्बर|दिसंबर|दिस\.?)/i,
            monthsStrictRegex:
              /^(जनवरी?|फ़रवरी|फरवरी?|मार्च?|अप्रैल?|मई?|जून?|जुलाई?|अगस्त?|सितम्बर|सितंबर|सित?\.?|अक्टूबर|अक्टू\.?|नवम्बर|नवंबर?|दिसम्बर|दिसंबर?)/i,
            monthsShortStrictRegex:
              /^(जन\.?|फ़र\.?|मार्च?|अप्रै\.?|मई?|जून?|जुल\.?|अग\.?|सित\.?|अक्टू\.?|नव\.?|दिस\.?)/i,
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[कल] LT",
              nextWeek: "dddd, LT",
              lastDay: "[कल] LT",
              lastWeek: "[पिछले] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s में",
              past: "%s पहले",
              s: "कुछ ही क्षण",
              ss: "%d सेकंड",
              m: "एक मिनट",
              mm: "%d मिनट",
              h: "एक घंटा",
              hh: "%d घंटे",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महीने",
              MM: "%d महीने",
              y: "एक वर्ष",
              yy: "%d वर्ष",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /रात|सुबह|दोपहर|शाम/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "रात" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "सुबह" === t
                  ? e
                  : "दोपहर" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "शाम" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "रात"
                : e < 10
                ? "सुबह"
                : e < 17
                ? "दोपहर"
                : e < 20
                ? "शाम"
                : "रात";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      6308: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return (
                  a +
                  (1 === e
                    ? "sekunda"
                    : 2 === e || 3 === e || 4 === e
                    ? "sekunde"
                    : "sekundi")
                );
              case "m":
                return t ? "jedna minuta" : "jedne minute";
              case "mm":
                return (
                  a +
                  (1 === e
                    ? "minuta"
                    : 2 === e || 3 === e || 4 === e
                    ? "minute"
                    : "minuta")
                );
              case "h":
                return t ? "jedan sat" : "jednog sata";
              case "hh":
                return (
                  a +
                  (1 === e
                    ? "sat"
                    : 2 === e || 3 === e || 4 === e
                    ? "sata"
                    : "sati")
                );
              case "dd":
                return a + (1 === e ? "dan" : "dana");
              case "MM":
                return (
                  a +
                  (1 === e
                    ? "mjesec"
                    : 2 === e || 3 === e || 4 === e
                    ? "mjeseca"
                    : "mjeseci")
                );
              case "yy":
                return (
                  a +
                  (1 === e
                    ? "godina"
                    : 2 === e || 3 === e || 4 === e
                    ? "godine"
                    : "godina")
                );
            }
          }
          e.defineLocale("hr", {
            months: {
              format:
                "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split(
                  "_"
                ),
              standalone:
                "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split(
                  "_"
                ),
            },
            monthsShort:
              "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM YYYY",
              LLL: "Do MMMM YYYY H:mm",
              LLLL: "dddd, Do MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[jučer u] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prošlu] [nedjelju] [u] LT";
                  case 3:
                    return "[prošlu] [srijedu] [u] LT";
                  case 6:
                    return "[prošle] [subote] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prošli] dddd [u] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "par sekundi",
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: "dan",
              dd: t,
              M: "mjesec",
              MM: t,
              y: "godinu",
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      609: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
            "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(
              " "
            );
          function n(e, t, n, a) {
            var s = e;
            switch (n) {
              case "s":
                return a || t ? "néhány másodperc" : "néhány másodperce";
              case "ss":
                return s + (a || t) ? " másodperc" : " másodperce";
              case "m":
                return "egy" + (a || t ? " perc" : " perce");
              case "mm":
                return s + (a || t ? " perc" : " perce");
              case "h":
                return "egy" + (a || t ? " óra" : " órája");
              case "hh":
                return s + (a || t ? " óra" : " órája");
              case "d":
                return "egy" + (a || t ? " nap" : " napja");
              case "dd":
                return s + (a || t ? " nap" : " napja");
              case "M":
                return "egy" + (a || t ? " hónap" : " hónapja");
              case "MM":
                return s + (a || t ? " hónap" : " hónapja");
              case "y":
                return "egy" + (a || t ? " év" : " éve");
              case "yy":
                return s + (a || t ? " év" : " éve");
            }
            return "";
          }
          function a(e) {
            return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]";
          }
          e.defineLocale("hu", {
            months:
              "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._márc._ápr._máj._jún._júl._aug._szept._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
            weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
            weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY. MMMM D.",
              LLL: "YYYY. MMMM D. H:mm",
              LLLL: "YYYY. MMMM D., dddd H:mm",
            },
            meridiemParse: /de|du/i,
            isPM: function (e) {
              return "u" === e.charAt(1).toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (!0 === n ? "de" : "DE") : !0 === n ? "du" : "DU";
            },
            calendar: {
              sameDay: "[ma] LT[-kor]",
              nextDay: "[holnap] LT[-kor]",
              nextWeek: function () {
                return a.call(this, !0);
              },
              lastDay: "[tegnap] LT[-kor]",
              lastWeek: function () {
                return a.call(this, !1);
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s múlva",
              past: "%s",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: n,
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7160: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("hy-am", {
            months: {
              format:
                "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split(
                  "_"
                ),
              standalone:
                "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split(
                  "_"
                ),
            },
            monthsShort:
              "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
            weekdays:
              "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split(
                "_"
              ),
            weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY թ.",
              LLL: "D MMMM YYYY թ., HH:mm",
              LLLL: "dddd, D MMMM YYYY թ., HH:mm",
            },
            calendar: {
              sameDay: "[այսօր] LT",
              nextDay: "[վաղը] LT",
              lastDay: "[երեկ] LT",
              nextWeek: function () {
                return "dddd [օրը ժամը] LT";
              },
              lastWeek: function () {
                return "[անցած] dddd [օրը ժամը] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "%s հետո",
              past: "%s առաջ",
              s: "մի քանի վայրկյան",
              ss: "%d վայրկյան",
              m: "րոպե",
              mm: "%d րոպե",
              h: "ժամ",
              hh: "%d ժամ",
              d: "օր",
              dd: "%d օր",
              M: "ամիս",
              MM: "%d ամիս",
              y: "տարի",
              yy: "%d տարի",
            },
            meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
            isPM: function (e) {
              return /^(ցերեկվա|երեկոյան)$/.test(e);
            },
            meridiem: function (e) {
              return e < 4
                ? "գիշերվա"
                : e < 12
                ? "առավոտվա"
                : e < 17
                ? "ցերեկվա"
                : "երեկոյան";
            },
            dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
            ordinal: function (e, t) {
              switch (t) {
                case "DDD":
                case "w":
                case "W":
                case "DDDo":
                  return 1 === e ? e + "-ին" : e + "-րդ";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      4063: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("id", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
            weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|siang|sore|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "siang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sore" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "siang"
                : e < 19
                ? "sore"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Besok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kemarin pukul] LT",
              lastWeek: "dddd [lalu pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lalu",
              s: "beberapa detik",
              ss: "%d detik",
              m: "semenit",
              mm: "%d menit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      9374: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e) {
            return e % 100 == 11 || e % 10 != 1;
          }
          function n(e, n, a, s) {
            var r = e + " ";
            switch (a) {
              case "s":
                return n || s ? "nokkrar sekúndur" : "nokkrum sekúndum";
              case "ss":
                return t(e)
                  ? r + (n || s ? "sekúndur" : "sekúndum")
                  : r + "sekúnda";
              case "m":
                return n ? "mínúta" : "mínútu";
              case "mm":
                return t(e)
                  ? r + (n || s ? "mínútur" : "mínútum")
                  : n
                  ? r + "mínúta"
                  : r + "mínútu";
              case "hh":
                return t(e)
                  ? r + (n || s ? "klukkustundir" : "klukkustundum")
                  : r + "klukkustund";
              case "d":
                return n ? "dagur" : s ? "dag" : "degi";
              case "dd":
                return t(e)
                  ? n
                    ? r + "dagar"
                    : r + (s ? "daga" : "dögum")
                  : n
                  ? r + "dagur"
                  : r + (s ? "dag" : "degi");
              case "M":
                return n ? "mánuður" : s ? "mánuð" : "mánuði";
              case "MM":
                return t(e)
                  ? n
                    ? r + "mánuðir"
                    : r + (s ? "mánuði" : "mánuðum")
                  : n
                  ? r + "mánuður"
                  : r + (s ? "mánuð" : "mánuði");
              case "y":
                return n || s ? "ár" : "ári";
              case "yy":
                return t(e)
                  ? r + (n || s ? "ár" : "árum")
                  : r + (n || s ? "ár" : "ári");
            }
          }
          e.defineLocale("is", {
            months:
              "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
            weekdays:
              "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split(
                "_"
              ),
            weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
            weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd, D. MMMM YYYY [kl.] H:mm",
            },
            calendar: {
              sameDay: "[í dag kl.] LT",
              nextDay: "[á morgun kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[í gær kl.] LT",
              lastWeek: "[síðasta] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "eftir %s",
              past: "fyrir %s síðan",
              s: n,
              ss: n,
              m: n,
              mm: n,
              h: "klukkustund",
              hh: n,
              d: n,
              dd: n,
              M: n,
              MM: n,
              y: n,
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1827: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("it-ch", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Oggi alle] LT",
              nextDay: "[Domani alle] LT",
              nextWeek: "dddd [alle] LT",
              lastDay: "[Ieri alle] LT",
              lastWeek: function () {
                return 0 === this.day()
                  ? "[la scorsa] dddd [alle] LT"
                  : "[lo scorso] dddd [alle] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e;
              },
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      8383: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("it", {
            months:
              "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split(
                "_"
              ),
            monthsShort:
              "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
            weekdays:
              "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split(
                "_"
              ),
            weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
            weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: function () {
                return (
                  "[Oggi a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              nextDay: function () {
                return (
                  "[Domani a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              nextWeek: function () {
                return (
                  "dddd [a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              lastDay: function () {
                return (
                  "[Ieri a" +
                  (this.hours() > 1
                    ? "lle "
                    : 0 === this.hours()
                    ? " "
                    : "ll'") +
                  "]LT"
                );
              },
              lastWeek: function () {
                return 0 === this.day()
                  ? "[La scorsa] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT"
                  : "[Lo scorso] dddd [a" +
                      (this.hours() > 1
                        ? "lle "
                        : 0 === this.hours()
                        ? " "
                        : "ll'") +
                      "]LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "tra %s",
              past: "%s fa",
              s: "alcuni secondi",
              ss: "%d secondi",
              m: "un minuto",
              mm: "%d minuti",
              h: "un'ora",
              hh: "%d ore",
              d: "un giorno",
              dd: "%d giorni",
              w: "una settimana",
              ww: "%d settimane",
              M: "un mese",
              MM: "%d mesi",
              y: "un anno",
              yy: "%d anni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3827: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ja", {
            eras: [
              {
                since: "2019-05-01",
                offset: 1,
                name: "令和",
                narrow: "㋿",
                abbr: "R",
              },
              {
                since: "1989-01-08",
                until: "2019-04-30",
                offset: 1,
                name: "平成",
                narrow: "㍻",
                abbr: "H",
              },
              {
                since: "1926-12-25",
                until: "1989-01-07",
                offset: 1,
                name: "昭和",
                narrow: "㍼",
                abbr: "S",
              },
              {
                since: "1912-07-30",
                until: "1926-12-24",
                offset: 1,
                name: "大正",
                narrow: "㍽",
                abbr: "T",
              },
              {
                since: "1873-01-01",
                until: "1912-07-29",
                offset: 6,
                name: "明治",
                narrow: "㍾",
                abbr: "M",
              },
              {
                since: "0001-01-01",
                until: "1873-12-31",
                offset: 1,
                name: "西暦",
                narrow: "AD",
                abbr: "AD",
              },
              {
                since: "0000-12-31",
                until: -1 / 0,
                offset: 1,
                name: "紀元前",
                narrow: "BC",
                abbr: "BC",
              },
            ],
            eraYearOrdinalRegex: /(元|\d+)年/,
            eraYearOrdinalParse: function (e, t) {
              return "元" === t[1] ? 1 : parseInt(t[1] || e, 10);
            },
            months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split(
              "_"
            ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split(
              "_"
            ),
            weekdaysShort: "日_月_火_水_木_金_土".split("_"),
            weekdaysMin: "日_月_火_水_木_金_土".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日 dddd HH:mm",
              l: "YYYY/MM/DD",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日(ddd) HH:mm",
            },
            meridiemParse: /午前|午後/i,
            isPM: function (e) {
              return "午後" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "午前" : "午後";
            },
            calendar: {
              sameDay: "[今日] LT",
              nextDay: "[明日] LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[来週]dddd LT" : "dddd LT";
              },
              lastDay: "[昨日] LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[先週]dddd LT" : "dddd LT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}日/,
            ordinal: function (e, t) {
              switch (t) {
                case "y":
                  return 1 === e ? "元年" : e + "年";
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "数秒",
              ss: "%d秒",
              m: "1分",
              mm: "%d分",
              h: "1時間",
              hh: "%d時間",
              d: "1日",
              dd: "%d日",
              M: "1ヶ月",
              MM: "%dヶ月",
              y: "1年",
              yy: "%d年",
            },
          });
        })(n(5093));
      },
      9722: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("jv", {
            months:
              "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
            weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
            weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
            weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /enjing|siyang|sonten|ndalu/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "enjing" === t
                  ? e
                  : "siyang" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "sonten" === t || "ndalu" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "enjing"
                : e < 15
                ? "siyang"
                : e < 19
                ? "sonten"
                : "ndalu";
            },
            calendar: {
              sameDay: "[Dinten puniko pukul] LT",
              nextDay: "[Mbenjang pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kala wingi pukul] LT",
              lastWeek: "dddd [kepengker pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "wonten ing %s",
              past: "%s ingkang kepengker",
              s: "sawetawis detik",
              ss: "%d detik",
              m: "setunggal menit",
              mm: "%d menit",
              h: "setunggal jam",
              hh: "%d jam",
              d: "sedinten",
              dd: "%d dinten",
              M: "sewulan",
              MM: "%d wulan",
              y: "setaun",
              yy: "%d taun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      1794: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ka", {
            months:
              "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split(
                "_"
              ),
            monthsShort:
              "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
            weekdays: {
              standalone:
                "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split(
                  "_"
                ),
              format:
                "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split(
                  "_"
                ),
              isFormat: /(წინა|შემდეგ)/,
            },
            weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
            weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[დღეს] LT[-ზე]",
              nextDay: "[ხვალ] LT[-ზე]",
              lastDay: "[გუშინ] LT[-ზე]",
              nextWeek: "[შემდეგ] dddd LT[-ზე]",
              lastWeek: "[წინა] dddd LT-ზე",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                return e.replace(
                  /(წამ|წუთ|საათ|წელ|დღ|თვ)(ი|ე)/,
                  function (e, t, n) {
                    return "ი" === n ? t + "ში" : t + n + "ში";
                  }
                );
              },
              past: function (e) {
                return /(წამი|წუთი|საათი|დღე|თვე)/.test(e)
                  ? e.replace(/(ი|ე)$/, "ის წინ")
                  : /წელი/.test(e)
                  ? e.replace(/წელი$/, "წლის წინ")
                  : e;
              },
              s: "რამდენიმე წამი",
              ss: "%d წამი",
              m: "წუთი",
              mm: "%d წუთი",
              h: "საათი",
              hh: "%d საათი",
              d: "დღე",
              dd: "%d დღე",
              M: "თვე",
              MM: "%d თვე",
              y: "წელი",
              yy: "%d წელი",
            },
            dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
            ordinal: function (e) {
              return 0 === e
                ? e
                : 1 === e
                ? e + "-ლი"
                : e < 20 || (e <= 100 && e % 20 == 0) || e % 100 == 0
                ? "მე-" + e
                : e + "-ე";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      7088: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-ші",
            1: "-ші",
            2: "-ші",
            3: "-ші",
            4: "-ші",
            5: "-ші",
            6: "-шы",
            7: "-ші",
            8: "-ші",
            9: "-шы",
            10: "-шы",
            20: "-шы",
            30: "-шы",
            40: "-шы",
            50: "-ші",
            60: "-шы",
            70: "-ші",
            80: "-ші",
            90: "-шы",
            100: "-ші",
          };
          e.defineLocale("kk", {
            months:
              "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split(
                "_"
              ),
            monthsShort:
              "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
            weekdays:
              "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split(
                "_"
              ),
            weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
            weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгін сағат] LT",
              nextDay: "[Ертең сағат] LT",
              nextWeek: "dddd [сағат] LT",
              lastDay: "[Кеше сағат] LT",
              lastWeek: "[Өткен аптаның] dddd [сағат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ішінде",
              past: "%s бұрын",
              s: "бірнеше секунд",
              ss: "%d секунд",
              m: "бір минут",
              mm: "%d минут",
              h: "бір сағат",
              hh: "%d сағат",
              d: "бір күн",
              dd: "%d күн",
              M: "бір ай",
              MM: "%d ай",
              y: "бір жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      6870: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "១",
              2: "២",
              3: "៣",
              4: "៤",
              5: "៥",
              6: "៦",
              7: "៧",
              8: "៨",
              9: "៩",
              0: "០",
            },
            n = {
              "១": "1",
              "២": "2",
              "៣": "3",
              "៤": "4",
              "៥": "5",
              "៦": "6",
              "៧": "7",
              "៨": "8",
              "៩": "9",
              "០": "0",
            };
          e.defineLocale("km", {
            months:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            monthsShort:
              "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split(
                "_"
              ),
            weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split(
              "_"
            ),
            weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ព្រឹក|ល្ងាច/,
            isPM: function (e) {
              return "ល្ងាច" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ព្រឹក" : "ល្ងាច";
            },
            calendar: {
              sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
              nextDay: "[ស្អែក ម៉ោង] LT",
              nextWeek: "dddd [ម៉ោង] LT",
              lastDay: "[ម្សិលមិញ ម៉ោង] LT",
              lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sទៀត",
              past: "%sមុន",
              s: "ប៉ុន្មានវិនាទី",
              ss: "%d វិនាទី",
              m: "មួយនាទី",
              mm: "%d នាទី",
              h: "មួយម៉ោង",
              hh: "%d ម៉ោង",
              d: "មួយថ្ងៃ",
              dd: "%d ថ្ងៃ",
              M: "មួយខែ",
              MM: "%d ខែ",
              y: "មួយឆ្នាំ",
              yy: "%d ឆ្នាំ",
            },
            dayOfMonthOrdinalParse: /ទី\d{1,2}/,
            ordinal: "ទី%d",
            preparse: function (e) {
              return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      4451: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "೧",
              2: "೨",
              3: "೩",
              4: "೪",
              5: "೫",
              6: "೬",
              7: "೭",
              8: "೮",
              9: "೯",
              0: "೦",
            },
            n = {
              "೧": "1",
              "೨": "2",
              "೩": "3",
              "೪": "4",
              "೫": "5",
              "೬": "6",
              "೭": "7",
              "೮": "8",
              "೯": "9",
              "೦": "0",
            };
          e.defineLocale("kn", {
            months:
              "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split(
                "_"
              ),
            monthsShort:
              "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split(
                "_"
              ),
            weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
            weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[ಇಂದು] LT",
              nextDay: "[ನಾಳೆ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ನಿನ್ನೆ] LT",
              lastWeek: "[ಕೊನೆಯ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ನಂತರ",
              past: "%s ಹಿಂದೆ",
              s: "ಕೆಲವು ಕ್ಷಣಗಳು",
              ss: "%d ಸೆಕೆಂಡುಗಳು",
              m: "ಒಂದು ನಿಮಿಷ",
              mm: "%d ನಿಮಿಷ",
              h: "ಒಂದು ಗಂಟೆ",
              hh: "%d ಗಂಟೆ",
              d: "ಒಂದು ದಿನ",
              dd: "%d ದಿನ",
              M: "ಒಂದು ತಿಂಗಳು",
              MM: "%d ತಿಂಗಳು",
              y: "ಒಂದು ವರ್ಷ",
              yy: "%d ವರ್ಷ",
            },
            preparse: function (e) {
              return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ರಾತ್ರಿ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ಬೆಳಿಗ್ಗೆ" === t
                  ? e
                  : "ಮಧ್ಯಾಹ್ನ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ಸಂಜೆ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ರಾತ್ರಿ"
                : e < 10
                ? "ಬೆಳಿಗ್ಗೆ"
                : e < 17
                ? "ಮಧ್ಯಾಹ್ನ"
                : e < 20
                ? "ಸಂಜೆ"
                : "ರಾತ್ರಿ";
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
            ordinal: function (e) {
              return e + "ನೇ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      3164: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ko", {
            months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split(
              "_"
            ),
            monthsShort:
              "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
            weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split(
              "_"
            ),
            weekdaysShort: "일_월_화_수_목_금_토".split("_"),
            weekdaysMin: "일_월_화_수_목_금_토".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "YYYY.MM.DD.",
              LL: "YYYY년 MMMM D일",
              LLL: "YYYY년 MMMM D일 A h:mm",
              LLLL: "YYYY년 MMMM D일 dddd A h:mm",
              l: "YYYY.MM.DD.",
              ll: "YYYY년 MMMM D일",
              lll: "YYYY년 MMMM D일 A h:mm",
              llll: "YYYY년 MMMM D일 dddd A h:mm",
            },
            calendar: {
              sameDay: "오늘 LT",
              nextDay: "내일 LT",
              nextWeek: "dddd LT",
              lastDay: "어제 LT",
              lastWeek: "지난주 dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s 후",
              past: "%s 전",
              s: "몇 초",
              ss: "%d초",
              m: "1분",
              mm: "%d분",
              h: "한 시간",
              hh: "%d시간",
              d: "하루",
              dd: "%d일",
              M: "한 달",
              MM: "%d달",
              y: "일 년",
              yy: "%d년",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "일";
                case "M":
                  return e + "월";
                case "w":
                case "W":
                  return e + "주";
                default:
                  return e;
              }
            },
            meridiemParse: /오전|오후/,
            isPM: function (e) {
              return "오후" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "오전" : "오후";
            },
          });
        })(n(5093));
      },
      6181: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["çend sanîye", "çend sanîyeyan"],
              ss: [e + " sanîye", e + " sanîyeyan"],
              m: ["deqîqeyek", "deqîqeyekê"],
              mm: [e + " deqîqe", e + " deqîqeyan"],
              h: ["saetek", "saetekê"],
              hh: [e + " saet", e + " saetan"],
              d: ["rojek", "rojekê"],
              dd: [e + " roj", e + " rojan"],
              w: ["hefteyek", "hefteyekê"],
              ww: [e + " hefte", e + " hefteyan"],
              M: ["mehek", "mehekê"],
              MM: [e + " meh", e + " mehan"],
              y: ["salek", "salekê"],
              yy: [e + " sal", e + " salan"],
            };
            return t ? s[n][0] : s[n][1];
          }
          e.defineLocale("ku-kmr", {
            months:
              "Rêbendan_Sibat_Adar_Nîsan_Gulan_Hezîran_Tîrmeh_Tebax_Îlon_Cotmeh_Mijdar_Berfanbar".split(
                "_"
              ),
            monthsShort:
              "Rêb_Sib_Ada_Nîs_Gul_Hez_Tîr_Teb_Îlo_Cot_Mij_Ber".split("_"),
            monthsParseExact: !0,
            weekdays: "Yekşem_Duşem_Sêşem_Çarşem_Pêncşem_În_Şemî".split("_"),
            weekdaysShort: "Yek_Du_Sê_Çar_Pên_În_Şem".split("_"),
            weekdaysMin: "Ye_Du_Sê_Ça_Pê_În_Şe".split("_"),
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "bn" : "BN") : n ? "pn" : "PN";
            },
            meridiemParse: /bn|BN|pn|PN/,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "Do MMMM[a] YYYY[an]",
              LLL: "Do MMMM[a] YYYY[an] HH:mm",
              LLLL: "dddd, Do MMMM[a] YYYY[an] HH:mm",
              ll: "Do MMM[.] YYYY[an]",
              lll: "Do MMM[.] YYYY[an] HH:mm",
              llll: "ddd[.], Do MMM[.] YYYY[an] HH:mm",
            },
            calendar: {
              sameDay: "[Îro di saet] LT [de]",
              nextDay: "[Sibê di saet] LT [de]",
              nextWeek: "dddd [di saet] LT [de]",
              lastDay: "[Duh di saet] LT [de]",
              lastWeek: "dddd[a borî di saet] LT [de]",
              sameElse: "L",
            },
            relativeTime: {
              future: "di %s de",
              past: "berî %s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              w: t,
              ww: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}(?:yê|ê|\.)/,
            ordinal: function (e, t) {
              var n = t.toLowerCase();
              return n.includes("w") || n.includes("m")
                ? e + "."
                : e +
                    (function (e) {
                      var t = (e = "" + e).substring(e.length - 1),
                        n = e.length > 1 ? e.substring(e.length - 2) : "";
                      return 12 == n ||
                        13 == n ||
                        ("2" != t &&
                          "3" != t &&
                          "50" != n &&
                          "70" != t &&
                          "80" != t)
                        ? "ê"
                        : "yê";
                    })(e);
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      8174: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "١",
              2: "٢",
              3: "٣",
              4: "٤",
              5: "٥",
              6: "٦",
              7: "٧",
              8: "٨",
              9: "٩",
              0: "٠",
            },
            n = {
              "١": "1",
              "٢": "2",
              "٣": "3",
              "٤": "4",
              "٥": "5",
              "٦": "6",
              "٧": "7",
              "٨": "8",
              "٩": "9",
              "٠": "0",
            },
            a = [
              "کانونی دووەم",
              "شوبات",
              "ئازار",
              "نیسان",
              "ئایار",
              "حوزەیران",
              "تەمموز",
              "ئاب",
              "ئەیلوول",
              "تشرینی یەكەم",
              "تشرینی دووەم",
              "كانونی یەکەم",
            ];
          e.defineLocale("ku", {
            months: a,
            monthsShort: a,
            weekdays:
              "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            weekdaysShort:
              "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split(
                "_"
              ),
            weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            meridiemParse: /ئێواره‌|به‌یانی/,
            isPM: function (e) {
              return /ئێواره‌/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "به‌یانی" : "ئێواره‌";
            },
            calendar: {
              sameDay: "[ئه‌مرۆ كاتژمێر] LT",
              nextDay: "[به‌یانی كاتژمێر] LT",
              nextWeek: "dddd [كاتژمێر] LT",
              lastDay: "[دوێنێ كاتژمێر] LT",
              lastWeek: "dddd [كاتژمێر] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "له‌ %s",
              past: "%s",
              s: "چه‌ند چركه‌یه‌ك",
              ss: "چركه‌ %d",
              m: "یه‌ك خوله‌ك",
              mm: "%d خوله‌ك",
              h: "یه‌ك كاتژمێر",
              hh: "%d كاتژمێر",
              d: "یه‌ك ڕۆژ",
              dd: "%d ڕۆژ",
              M: "یه‌ك مانگ",
              MM: "%d مانگ",
              y: "یه‌ك ساڵ",
              yy: "%d ساڵ",
            },
            preparse: function (e) {
              return e
                .replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (e) {
                  return n[e];
                })
                .replace(/،/g, ",");
            },
            postformat: function (e) {
              return e
                .replace(/\d/g, function (e) {
                  return t[e];
                })
                .replace(/,/g, "،");
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      8474: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-чү",
            1: "-чи",
            2: "-чи",
            3: "-чү",
            4: "-чү",
            5: "-чи",
            6: "-чы",
            7: "-чи",
            8: "-чи",
            9: "-чу",
            10: "-чу",
            20: "-чы",
            30: "-чу",
            40: "-чы",
            50: "-чү",
            60: "-чы",
            70: "-чи",
            80: "-чи",
            90: "-чу",
            100: "-чү",
          };
          e.defineLocale("ky", {
            months:
              "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                "_"
              ),
            monthsShort:
              "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split(
                "_"
              ),
            weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
            weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Бүгүн саат] LT",
              nextDay: "[Эртең саат] LT",
              nextWeek: "dddd [саат] LT",
              lastDay: "[Кечээ саат] LT",
              lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ичинде",
              past: "%s мурун",
              s: "бирнече секунд",
              ss: "%d секунд",
              m: "бир мүнөт",
              mm: "%d мүнөт",
              h: "бир саат",
              hh: "%d саат",
              d: "бир күн",
              dd: "%d күн",
              M: "бир ай",
              MM: "%d ай",
              y: "бир жыл",
              yy: "%d жыл",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      9680: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              m: ["eng Minutt", "enger Minutt"],
              h: ["eng Stonn", "enger Stonn"],
              d: ["een Dag", "engem Dag"],
              M: ["ee Mount", "engem Mount"],
              y: ["ee Joer", "engem Joer"],
            };
            return t ? s[n][0] : s[n][1];
          }
          function n(e) {
            if (((e = parseInt(e, 10)), isNaN(e))) return !1;
            if (e < 0) return !0;
            if (e < 10) return 4 <= e && e <= 7;
            if (e < 100) {
              var t = e % 10;
              return n(0 === t ? e / 10 : t);
            }
            if (e < 1e4) {
              for (; e >= 10; ) e /= 10;
              return n(e);
            }
            return n((e /= 1e3));
          }
          e.defineLocale("lb", {
            months:
              "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split(
                "_"
              ),
            monthsShort:
              "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split(
                "_"
              ),
            weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
            weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm [Auer]",
              LTS: "H:mm:ss [Auer]",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm [Auer]",
              LLLL: "dddd, D. MMMM YYYY H:mm [Auer]",
            },
            calendar: {
              sameDay: "[Haut um] LT",
              sameElse: "L",
              nextDay: "[Muer um] LT",
              nextWeek: "dddd [um] LT",
              lastDay: "[Gëschter um] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 2:
                  case 4:
                    return "[Leschten] dddd [um] LT";
                  default:
                    return "[Leschte] dddd [um] LT";
                }
              },
            },
            relativeTime: {
              future: function (e) {
                return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e;
              },
              past: function (e) {
                return n(e.substr(0, e.indexOf(" ")))
                  ? "viru " + e
                  : "virun " + e;
              },
              s: "e puer Sekonnen",
              ss: "%d Sekonnen",
              m: t,
              mm: "%d Minutten",
              h: t,
              hh: "%d Stonnen",
              d: t,
              dd: "%d Deeg",
              M: t,
              MM: "%d Méint",
              y: t,
              yy: "%d Joer",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      5867: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("lo", {
            months:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            monthsShort:
              "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split(
                "_"
              ),
            weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
            weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "ວັນdddd D MMMM YYYY HH:mm",
            },
            meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
            isPM: function (e) {
              return "ຕອນແລງ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ";
            },
            calendar: {
              sameDay: "[ມື້ນີ້ເວລາ] LT",
              nextDay: "[ມື້ອື່ນເວລາ] LT",
              nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
              lastDay: "[ມື້ວານນີ້ເວລາ] LT",
              lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ອີກ %s",
              past: "%sຜ່ານມາ",
              s: "ບໍ່ເທົ່າໃດວິນາທີ",
              ss: "%d ວິນາທີ",
              m: "1 ນາທີ",
              mm: "%d ນາທີ",
              h: "1 ຊົ່ວໂມງ",
              hh: "%d ຊົ່ວໂມງ",
              d: "1 ມື້",
              dd: "%d ມື້",
              M: "1 ເດືອນ",
              MM: "%d ເດືອນ",
              y: "1 ປີ",
              yy: "%d ປີ",
            },
            dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
            ordinal: function (e) {
              return "ທີ່" + e;
            },
          });
        })(n(5093));
      },
      5766: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            ss: "sekundė_sekundžių_sekundes",
            m: "minutė_minutės_minutę",
            mm: "minutės_minučių_minutes",
            h: "valanda_valandos_valandą",
            hh: "valandos_valandų_valandas",
            d: "diena_dienos_dieną",
            dd: "dienos_dienų_dienas",
            M: "mėnuo_mėnesio_mėnesį",
            MM: "mėnesiai_mėnesių_mėnesius",
            y: "metai_metų_metus",
            yy: "metai_metų_metus",
          };
          function n(e, t, n, a) {
            return t ? s(n)[0] : a ? s(n)[1] : s(n)[2];
          }
          function a(e) {
            return e % 10 == 0 || (e > 10 && e < 20);
          }
          function s(e) {
            return t[e].split("_");
          }
          function r(e, t, r, i) {
            var o = e + " ";
            return 1 === e
              ? o + n(0, t, r[0], i)
              : t
              ? o + (a(e) ? s(r)[1] : s(r)[0])
              : i
              ? o + s(r)[1]
              : o + (a(e) ? s(r)[1] : s(r)[2]);
          }
          e.defineLocale("lt", {
            months: {
              format:
                "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split(
                  "_"
                ),
              standalone:
                "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split(
                  "_"
                ),
              isFormat:
                /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
            },
            monthsShort:
              "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
            weekdays: {
              format:
                "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split(
                  "_"
                ),
              standalone:
                "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split(
                  "_"
                ),
              isFormat: /dddd HH:mm/,
            },
            weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
            weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY [m.] MMMM D [d.]",
              LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
              l: "YYYY-MM-DD",
              ll: "YYYY [m.] MMMM D [d.]",
              lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
              llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
            },
            calendar: {
              sameDay: "[Šiandien] LT",
              nextDay: "[Rytoj] LT",
              nextWeek: "dddd LT",
              lastDay: "[Vakar] LT",
              lastWeek: "[Praėjusį] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "po %s",
              past: "prieš %s",
              s: function (e, t, n, a) {
                return t
                  ? "kelios sekundės"
                  : a
                  ? "kelių sekundžių"
                  : "kelias sekundes";
              },
              ss: r,
              m: n,
              mm: r,
              h: n,
              hh: r,
              d: n,
              dd: r,
              M: n,
              MM: r,
              y: n,
              yy: r,
            },
            dayOfMonthOrdinalParse: /\d{1,2}-oji/,
            ordinal: function (e) {
              return e + "-oji";
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      9532: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            ss: "sekundes_sekundēm_sekunde_sekundes".split("_"),
            m: "minūtes_minūtēm_minūte_minūtes".split("_"),
            mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
            h: "stundas_stundām_stunda_stundas".split("_"),
            hh: "stundas_stundām_stunda_stundas".split("_"),
            d: "dienas_dienām_diena_dienas".split("_"),
            dd: "dienas_dienām_diena_dienas".split("_"),
            M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
            y: "gada_gadiem_gads_gadi".split("_"),
            yy: "gada_gadiem_gads_gadi".split("_"),
          };
          function n(e, t, n) {
            return n
              ? t % 10 == 1 && t % 100 != 11
                ? e[2]
                : e[3]
              : t % 10 == 1 && t % 100 != 11
              ? e[0]
              : e[1];
          }
          function a(e, a, s) {
            return e + " " + n(t[s], e, a);
          }
          function s(e, a, s) {
            return n(t[s], e, a);
          }
          e.defineLocale("lv", {
            months:
              "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
            weekdays:
              "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split(
                "_"
              ),
            weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY.",
              LL: "YYYY. [gada] D. MMMM",
              LLL: "YYYY. [gada] D. MMMM, HH:mm",
              LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
            },
            calendar: {
              sameDay: "[Šodien pulksten] LT",
              nextDay: "[Rīt pulksten] LT",
              nextWeek: "dddd [pulksten] LT",
              lastDay: "[Vakar pulksten] LT",
              lastWeek: "[Pagājušā] dddd [pulksten] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "pēc %s",
              past: "pirms %s",
              s: function (e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm";
              },
              ss: a,
              m: s,
              mm: a,
              h: s,
              hh: a,
              d: s,
              dd: a,
              M: s,
              MM: a,
              y: s,
              yy: a,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      8076: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekund", "sekunda", "sekundi"],
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              dd: ["dan", "dana", "dana"],
              MM: ["mjesec", "mjeseca", "mjeseci"],
              yy: ["godina", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2];
            },
            translate: function (e, n, a) {
              var s = t.words[a];
              return 1 === a.length
                ? n
                  ? s[0]
                  : s[1]
                : e + " " + t.correctGrammaticalCase(e, s);
            },
          };
          e.defineLocale("me", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sjutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedjelju] [u] LT";
                  case 3:
                    return "[u] [srijedu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedjelje] [u] LT",
                  "[prošlog] [ponedjeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srijede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "prije %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: "dan",
              dd: t.translate,
              M: "mjesec",
              MM: t.translate,
              y: "godinu",
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      1848: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mi", {
            months:
              "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split(
                "_"
              ),
            monthsShort:
              "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split(
                "_"
              ),
            monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
            monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
            weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split(
              "_"
            ),
            weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [i] HH:mm",
              LLLL: "dddd, D MMMM YYYY [i] HH:mm",
            },
            calendar: {
              sameDay: "[i teie mahana, i] LT",
              nextDay: "[apopo i] LT",
              nextWeek: "dddd [i] LT",
              lastDay: "[inanahi i] LT",
              lastWeek: "dddd [whakamutunga i] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "i roto i %s",
              past: "%s i mua",
              s: "te hēkona ruarua",
              ss: "%d hēkona",
              m: "he meneti",
              mm: "%d meneti",
              h: "te haora",
              hh: "%d haora",
              d: "he ra",
              dd: "%d ra",
              M: "he marama",
              MM: "%d marama",
              y: "he tau",
              yy: "%d tau",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      306: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mk", {
            months:
              "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split(
                "_"
              ),
            monthsShort:
              "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
            weekdays:
              "недела_понеделник_вторник_среда_четврток_петок_сабота".split(
                "_"
              ),
            weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
            weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[Денес во] LT",
              nextDay: "[Утре во] LT",
              nextWeek: "[Во] dddd [во] LT",
              lastDay: "[Вчера во] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 6:
                    return "[Изминатата] dddd [во] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[Изминатиот] dddd [во] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пред %s",
              s: "неколку секунди",
              ss: "%d секунди",
              m: "една минута",
              mm: "%d минути",
              h: "еден час",
              hh: "%d часа",
              d: "еден ден",
              dd: "%d дена",
              M: "еден месец",
              MM: "%d месеци",
              y: "една година",
              yy: "%d години",
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
            ordinal: function (e) {
              var t = e % 10,
                n = e % 100;
              return 0 === e
                ? e + "-ев"
                : 0 === n
                ? e + "-ен"
                : n > 10 && n < 20
                ? e + "-ти"
                : 1 === t
                ? e + "-ви"
                : 2 === t
                ? e + "-ри"
                : 7 === t || 8 === t
                ? e + "-ми"
                : e + "-ти";
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      3739: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ml", {
            months:
              "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split(
                "_"
              ),
            monthsShort:
              "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split(
                "_"
              ),
            weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split(
              "_"
            ),
            weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
            longDateFormat: {
              LT: "A h:mm -നു",
              LTS: "A h:mm:ss -നു",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm -നു",
              LLLL: "dddd, D MMMM YYYY, A h:mm -നു",
            },
            calendar: {
              sameDay: "[ഇന്ന്] LT",
              nextDay: "[നാളെ] LT",
              nextWeek: "dddd, LT",
              lastDay: "[ഇന്നലെ] LT",
              lastWeek: "[കഴിഞ്ഞ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s കഴിഞ്ഞ്",
              past: "%s മുൻപ്",
              s: "അൽപ നിമിഷങ്ങൾ",
              ss: "%d സെക്കൻഡ്",
              m: "ഒരു മിനിറ്റ്",
              mm: "%d മിനിറ്റ്",
              h: "ഒരു മണിക്കൂർ",
              hh: "%d മണിക്കൂർ",
              d: "ഒരു ദിവസം",
              dd: "%d ദിവസം",
              M: "ഒരു മാസം",
              MM: "%d മാസം",
              y: "ഒരു വർഷം",
              yy: "%d വർഷം",
            },
            meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                ("രാത്രി" === t && e >= 4) ||
                "ഉച്ച കഴിഞ്ഞ്" === t ||
                "വൈകുന്നേരം" === t
                  ? e + 12
                  : e
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "രാത്രി"
                : e < 12
                ? "രാവിലെ"
                : e < 17
                ? "ഉച്ച കഴിഞ്ഞ്"
                : e < 20
                ? "വൈകുന്നേരം"
                : "രാത്രി";
            },
          });
        })(n(5093));
      },
      9053: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            switch (n) {
              case "s":
                return t ? "хэдхэн секунд" : "хэдхэн секундын";
              case "ss":
                return e + (t ? " секунд" : " секундын");
              case "m":
              case "mm":
                return e + (t ? " минут" : " минутын");
              case "h":
              case "hh":
                return e + (t ? " цаг" : " цагийн");
              case "d":
              case "dd":
                return e + (t ? " өдөр" : " өдрийн");
              case "M":
              case "MM":
                return e + (t ? " сар" : " сарын");
              case "y":
              case "yy":
                return e + (t ? " жил" : " жилийн");
              default:
                return e;
            }
          }
          e.defineLocale("mn", {
            months:
              "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split(
                "_"
              ),
            monthsShort:
              "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"),
            weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"),
            weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY оны MMMMын D",
              LLL: "YYYY оны MMMMын D HH:mm",
              LLLL: "dddd, YYYY оны MMMMын D HH:mm",
            },
            meridiemParse: /ҮӨ|ҮХ/i,
            isPM: function (e) {
              return "ҮХ" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ҮӨ" : "ҮХ";
            },
            calendar: {
              sameDay: "[Өнөөдөр] LT",
              nextDay: "[Маргааш] LT",
              nextWeek: "[Ирэх] dddd LT",
              lastDay: "[Өчигдөр] LT",
              lastWeek: "[Өнгөрсөн] dddd LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s дараа",
              past: "%s өмнө",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2} өдөр/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + " өдөр";
                default:
                  return e;
              }
            },
          });
        })(n(5093));
      },
      6169: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          function a(e, t, n, a) {
            var s = "";
            if (t)
              switch (n) {
                case "s":
                  s = "काही सेकंद";
                  break;
                case "ss":
                  s = "%d सेकंद";
                  break;
                case "m":
                  s = "एक मिनिट";
                  break;
                case "mm":
                  s = "%d मिनिटे";
                  break;
                case "h":
                  s = "एक तास";
                  break;
                case "hh":
                  s = "%d तास";
                  break;
                case "d":
                  s = "एक दिवस";
                  break;
                case "dd":
                  s = "%d दिवस";
                  break;
                case "M":
                  s = "एक महिना";
                  break;
                case "MM":
                  s = "%d महिने";
                  break;
                case "y":
                  s = "एक वर्ष";
                  break;
                case "yy":
                  s = "%d वर्षे";
              }
            else
              switch (n) {
                case "s":
                  s = "काही सेकंदां";
                  break;
                case "ss":
                  s = "%d सेकंदां";
                  break;
                case "m":
                  s = "एका मिनिटा";
                  break;
                case "mm":
                  s = "%d मिनिटां";
                  break;
                case "h":
                  s = "एका तासा";
                  break;
                case "hh":
                  s = "%d तासां";
                  break;
                case "d":
                  s = "एका दिवसा";
                  break;
                case "dd":
                  s = "%d दिवसां";
                  break;
                case "M":
                  s = "एका महिन्या";
                  break;
                case "MM":
                  s = "%d महिन्यां";
                  break;
                case "y":
                  s = "एका वर्षा";
                  break;
                case "yy":
                  s = "%d वर्षां";
              }
            return s.replace(/%d/i, e);
          }
          e.defineLocale("mr", {
            months:
              "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split(
                "_"
              ),
            monthsShort:
              "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
            weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
            weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
            longDateFormat: {
              LT: "A h:mm वाजता",
              LTS: "A h:mm:ss वाजता",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm वाजता",
              LLLL: "dddd, D MMMM YYYY, A h:mm वाजता",
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[उद्या] LT",
              nextWeek: "dddd, LT",
              lastDay: "[काल] LT",
              lastWeek: "[मागील] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमध्ये",
              past: "%sपूर्वी",
              s: a,
              ss: a,
              m: a,
              mm: a,
              h: a,
              hh: a,
              d: a,
              dd: a,
              M: a,
              MM: a,
              y: a,
              yy: a,
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /पहाटे|सकाळी|दुपारी|सायंकाळी|रात्री/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "पहाटे" === t || "सकाळी" === t
                  ? e
                  : "दुपारी" === t || "सायंकाळी" === t || "रात्री" === t
                  ? e >= 12
                    ? e
                    : e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e >= 0 && e < 6
                ? "पहाटे"
                : e < 12
                ? "सकाळी"
                : e < 17
                ? "दुपारी"
                : e < 20
                ? "सायंकाळी"
                : "रात्री";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      2297: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms-my", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      3386: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ms", {
            months:
              "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
            weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
            weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
            weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [pukul] HH.mm",
              LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
            },
            meridiemParse: /pagi|tengahari|petang|malam/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "pagi" === t
                  ? e
                  : "tengahari" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "petang" === t || "malam" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 11
                ? "pagi"
                : e < 15
                ? "tengahari"
                : e < 19
                ? "petang"
                : "malam";
            },
            calendar: {
              sameDay: "[Hari ini pukul] LT",
              nextDay: "[Esok pukul] LT",
              nextWeek: "dddd [pukul] LT",
              lastDay: "[Kelmarin pukul] LT",
              lastWeek: "dddd [lepas pukul] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dalam %s",
              past: "%s yang lepas",
              s: "beberapa saat",
              ss: "%d saat",
              m: "seminit",
              mm: "%d minit",
              h: "sejam",
              hh: "%d jam",
              d: "sehari",
              dd: "%d hari",
              M: "sebulan",
              MM: "%d bulan",
              y: "setahun",
              yy: "%d tahun",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      7075: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("mt", {
            months:
              "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split(
                "_"
              ),
            monthsShort:
              "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"),
            weekdays:
              "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split(
                "_"
              ),
            weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"),
            weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Illum fil-]LT",
              nextDay: "[Għada fil-]LT",
              nextWeek: "dddd [fil-]LT",
              lastDay: "[Il-bieraħ fil-]LT",
              lastWeek: "dddd [li għadda] [fil-]LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "f’ %s",
              past: "%s ilu",
              s: "ftit sekondi",
              ss: "%d sekondi",
              m: "minuta",
              mm: "%d minuti",
              h: "siegħa",
              hh: "%d siegħat",
              d: "ġurnata",
              dd: "%d ġranet",
              M: "xahar",
              MM: "%d xhur",
              y: "sena",
              yy: "%d sni",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2264: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "၁",
              2: "၂",
              3: "၃",
              4: "၄",
              5: "၅",
              6: "၆",
              7: "၇",
              8: "၈",
              9: "၉",
              0: "၀",
            },
            n = {
              "၁": "1",
              "၂": "2",
              "၃": "3",
              "၄": "4",
              "၅": "5",
              "၆": "6",
              "၇": "7",
              "၈": "8",
              "၉": "9",
              "၀": "0",
            };
          e.defineLocale("my", {
            months:
              "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split(
                "_"
              ),
            monthsShort:
              "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
            weekdays:
              "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split(
                "_"
              ),
            weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ယနေ.] LT [မှာ]",
              nextDay: "[မနက်ဖြန်] LT [မှာ]",
              nextWeek: "dddd LT [မှာ]",
              lastDay: "[မနေ.က] LT [မှာ]",
              lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
              sameElse: "L",
            },
            relativeTime: {
              future: "လာမည့် %s မှာ",
              past: "လွန်ခဲ့သော %s က",
              s: "စက္ကန်.အနည်းငယ်",
              ss: "%d စက္ကန့်",
              m: "တစ်မိနစ်",
              mm: "%d မိနစ်",
              h: "တစ်နာရီ",
              hh: "%d နာရီ",
              d: "တစ်ရက်",
              dd: "%d ရက်",
              M: "တစ်လ",
              MM: "%d လ",
              y: "တစ်နှစ်",
              yy: "%d နှစ်",
            },
            preparse: function (e) {
              return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2274: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nb", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
            weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
            weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[i dag kl.] LT",
              nextDay: "[i morgen kl.] LT",
              nextWeek: "dddd [kl.] LT",
              lastDay: "[i går kl.] LT",
              lastWeek: "[forrige] dddd [kl.] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s siden",
              s: "noen sekunder",
              ss: "%d sekunder",
              m: "ett minutt",
              mm: "%d minutter",
              h: "én time",
              hh: "%d timer",
              d: "én dag",
              dd: "%d dager",
              w: "én uke",
              ww: "%d uker",
              M: "én måned",
              MM: "%d måneder",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      8235: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "१",
              2: "२",
              3: "३",
              4: "४",
              5: "५",
              6: "६",
              7: "७",
              8: "८",
              9: "९",
              0: "०",
            },
            n = {
              "१": "1",
              "२": "2",
              "३": "3",
              "४": "4",
              "५": "5",
              "६": "6",
              "७": "7",
              "८": "8",
              "९": "9",
              "०": "0",
            };
          e.defineLocale("ne", {
            months:
              "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split(
                "_"
              ),
            monthsShort:
              "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split(
                "_"
              ),
            weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
            weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "Aको h:mm बजे",
              LTS: "Aको h:mm:ss बजे",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, Aको h:mm बजे",
              LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे",
            },
            preparse: function (e) {
              return e.replace(/[१२३४५६७८९०]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "राति" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "बिहान" === t
                  ? e
                  : "दिउँसो" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "साँझ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 3
                ? "राति"
                : e < 12
                ? "बिहान"
                : e < 16
                ? "दिउँसो"
                : e < 20
                ? "साँझ"
                : "राति";
            },
            calendar: {
              sameDay: "[आज] LT",
              nextDay: "[भोलि] LT",
              nextWeek: "[आउँदो] dddd[,] LT",
              lastDay: "[हिजो] LT",
              lastWeek: "[गएको] dddd[,] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sमा",
              past: "%s अगाडि",
              s: "केही क्षण",
              ss: "%d सेकेण्ड",
              m: "एक मिनेट",
              mm: "%d मिनेट",
              h: "एक घण्टा",
              hh: "%d घण्टा",
              d: "एक दिन",
              dd: "%d दिन",
              M: "एक महिना",
              MM: "%d महिना",
              y: "एक बर्ष",
              yy: "%d बर्ष",
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      3784: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [
              /^jan/i,
              /^feb/i,
              /^(maart|mrt\.?)$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            s =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl-be", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2572: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split(
                "_"
              ),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            a = [
              /^jan/i,
              /^feb/i,
              /^(maart|mrt\.?)$/i,
              /^apr/i,
              /^mei$/i,
              /^jun[i.]?$/i,
              /^jul[i.]?$/i,
              /^aug/i,
              /^sep/i,
              /^okt/i,
              /^nov/i,
              /^dec/i,
            ],
            s =
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
          e.defineLocale("nl", {
            months:
              "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split(
                "_"
              ),
            monthsShort: function (e, a) {
              return e ? (/-MMM-/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsRegex: s,
            monthsShortRegex: s,
            monthsStrictRegex:
              /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i,
            monthsShortStrictRegex:
              /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split(
                "_"
              ),
            weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
            weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD-MM-YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[vandaag om] LT",
              nextDay: "[morgen om] LT",
              nextWeek: "dddd [om] LT",
              lastDay: "[gisteren om] LT",
              lastWeek: "[afgelopen] dddd [om] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "over %s",
              past: "%s geleden",
              s: "een paar seconden",
              ss: "%d seconden",
              m: "één minuut",
              mm: "%d minuten",
              h: "één uur",
              hh: "%d uur",
              d: "één dag",
              dd: "%d dagen",
              w: "één week",
              ww: "%d weken",
              M: "één maand",
              MM: "%d maanden",
              y: "één jaar",
              yy: "%d jaar",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
            ordinal: function (e) {
              return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      4566: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("nn", {
            months:
              "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mars_apr._mai_juni_juli_aug._sep._okt._nov._des.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
            weekdaysShort: "su._må._ty._on._to._fr._lau.".split("_"),
            weekdaysMin: "su_må_ty_on_to_fr_la".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY [kl.] H:mm",
              LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
            },
            calendar: {
              sameDay: "[I dag klokka] LT",
              nextDay: "[I morgon klokka] LT",
              nextWeek: "dddd [klokka] LT",
              lastDay: "[I går klokka] LT",
              lastWeek: "[Føregåande] dddd [klokka] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "%s sidan",
              s: "nokre sekund",
              ss: "%d sekund",
              m: "eit minutt",
              mm: "%d minutt",
              h: "ein time",
              hh: "%d timar",
              d: "ein dag",
              dd: "%d dagar",
              w: "ei veke",
              ww: "%d veker",
              M: "ein månad",
              MM: "%d månader",
              y: "eit år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      9330: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("oc-lnc", {
            months: {
              standalone:
                "genièr_febrièr_març_abril_mai_junh_julhet_agost_setembre_octòbre_novembre_decembre".split(
                  "_"
                ),
              format:
                "de genièr_de febrièr_de març_d'abril_de mai_de junh_de julhet_d'agost_de setembre_d'octòbre_de novembre_de decembre".split(
                  "_"
                ),
              isFormat: /D[oD]?(\s)+MMMM/,
            },
            monthsShort:
              "gen._febr._març_abr._mai_junh_julh._ago._set._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "dimenge_diluns_dimars_dimècres_dijòus_divendres_dissabte".split(
                "_"
              ),
            weekdaysShort: "dg._dl._dm._dc._dj._dv._ds.".split("_"),
            weekdaysMin: "dg_dl_dm_dc_dj_dv_ds".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [de] YYYY",
              ll: "D MMM YYYY",
              LLL: "D MMMM [de] YYYY [a] H:mm",
              lll: "D MMM YYYY, H:mm",
              LLLL: "dddd D MMMM [de] YYYY [a] H:mm",
              llll: "ddd D MMM YYYY, H:mm",
            },
            calendar: {
              sameDay: "[uèi a] LT",
              nextDay: "[deman a] LT",
              nextWeek: "dddd [a] LT",
              lastDay: "[ièr a] LT",
              lastWeek: "dddd [passat a] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "d'aquí %s",
              past: "fa %s",
              s: "unas segondas",
              ss: "%d segondas",
              m: "una minuta",
              mm: "%d minutas",
              h: "una ora",
              hh: "%d oras",
              d: "un jorn",
              dd: "%d jorns",
              M: "un mes",
              MM: "%d meses",
              y: "un an",
              yy: "%d ans",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
            ordinal: function (e, t) {
              var n =
                1 === e
                  ? "r"
                  : 2 === e
                  ? "n"
                  : 3 === e
                  ? "r"
                  : 4 === e
                  ? "t"
                  : "è";
              return ("w" !== t && "W" !== t) || (n = "a"), e + n;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      9849: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "੧",
              2: "੨",
              3: "੩",
              4: "੪",
              5: "੫",
              6: "੬",
              7: "੭",
              8: "੮",
              9: "੯",
              0: "੦",
            },
            n = {
              "੧": "1",
              "੨": "2",
              "੩": "3",
              "੪": "4",
              "੫": "5",
              "੬": "6",
              "੭": "7",
              "੮": "8",
              "੯": "9",
              "੦": "0",
            };
          e.defineLocale("pa-in", {
            months:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            monthsShort:
              "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split(
                "_"
              ),
            weekdays:
              "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split(
                "_"
              ),
            weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
            longDateFormat: {
              LT: "A h:mm ਵਜੇ",
              LTS: "A h:mm:ss ਵਜੇ",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
              LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ",
            },
            calendar: {
              sameDay: "[ਅਜ] LT",
              nextDay: "[ਕਲ] LT",
              nextWeek: "[ਅਗਲਾ] dddd, LT",
              lastDay: "[ਕਲ] LT",
              lastWeek: "[ਪਿਛਲੇ] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s ਵਿੱਚ",
              past: "%s ਪਿਛਲੇ",
              s: "ਕੁਝ ਸਕਿੰਟ",
              ss: "%d ਸਕਿੰਟ",
              m: "ਇਕ ਮਿੰਟ",
              mm: "%d ਮਿੰਟ",
              h: "ਇੱਕ ਘੰਟਾ",
              hh: "%d ਘੰਟੇ",
              d: "ਇੱਕ ਦਿਨ",
              dd: "%d ਦਿਨ",
              M: "ਇੱਕ ਮਹੀਨਾ",
              MM: "%d ਮਹੀਨੇ",
              y: "ਇੱਕ ਸਾਲ",
              yy: "%d ਸਾਲ",
            },
            preparse: function (e) {
              return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ਰਾਤ" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ਸਵੇਰ" === t
                  ? e
                  : "ਦੁਪਹਿਰ" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "ਸ਼ਾਮ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ਰਾਤ"
                : e < 10
                ? "ਸਵੇਰ"
                : e < 17
                ? "ਦੁਪਹਿਰ"
                : e < 20
                ? "ਸ਼ਾਮ"
                : "ਰਾਤ";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      4418: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split(
                "_"
              ),
            n =
              "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split(
                "_"
              ),
            a = [
              /^sty/i,
              /^lut/i,
              /^mar/i,
              /^kwi/i,
              /^maj/i,
              /^cze/i,
              /^lip/i,
              /^sie/i,
              /^wrz/i,
              /^paź/i,
              /^lis/i,
              /^gru/i,
            ];
          function s(e) {
            return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
          }
          function r(e, t, n) {
            var a = e + " ";
            switch (n) {
              case "ss":
                return a + (s(e) ? "sekundy" : "sekund");
              case "m":
                return t ? "minuta" : "minutę";
              case "mm":
                return a + (s(e) ? "minuty" : "minut");
              case "h":
                return t ? "godzina" : "godzinę";
              case "hh":
                return a + (s(e) ? "godziny" : "godzin");
              case "ww":
                return a + (s(e) ? "tygodnie" : "tygodni");
              case "MM":
                return a + (s(e) ? "miesiące" : "miesięcy");
              case "yy":
                return a + (s(e) ? "lata" : "lat");
            }
          }
          e.defineLocale("pl", {
            months: function (e, a) {
              return e ? (/D MMMM/.test(a) ? n[e.month()] : t[e.month()]) : t;
            },
            monthsShort:
              "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
            monthsParse: a,
            longMonthsParse: a,
            shortMonthsParse: a,
            weekdays:
              "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split(
                "_"
              ),
            weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
            weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Dziś o] LT",
              nextDay: "[Jutro o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W niedzielę o] LT";
                  case 2:
                    return "[We wtorek o] LT";
                  case 3:
                    return "[W środę o] LT";
                  case 6:
                    return "[W sobotę o] LT";
                  default:
                    return "[W] dddd [o] LT";
                }
              },
              lastDay: "[Wczoraj o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[W zeszłą niedzielę o] LT";
                  case 3:
                    return "[W zeszłą środę o] LT";
                  case 6:
                    return "[W zeszłą sobotę o] LT";
                  default:
                    return "[W zeszły] dddd [o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "%s temu",
              s: "kilka sekund",
              ss: r,
              m: r,
              mm: r,
              h: r,
              hh: r,
              d: "1 dzień",
              dd: "%d dni",
              w: "tydzień",
              ww: r,
              M: "miesiąc",
              MM: r,
              y: "rok",
              yy: r,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      8303: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt-br", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort:
              "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays:
              "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split(
                "_"
              ),
            weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"),
            weekdaysMin: "do_2ª_3ª_4ª_5ª_6ª_sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "poucos segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            invalidDate: "Data inválida",
          });
        })(n(5093));
      },
      9834: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("pt", {
            months:
              "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split(
                "_"
              ),
            monthsShort:
              "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
            weekdays:
              "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split(
                "_"
              ),
            weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
            weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D [de] MMMM [de] YYYY",
              LLL: "D [de] MMMM [de] YYYY HH:mm",
              LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hoje às] LT",
              nextDay: "[Amanhã às] LT",
              nextWeek: "dddd [às] LT",
              lastDay: "[Ontem às] LT",
              lastWeek: function () {
                return 0 === this.day() || 6 === this.day()
                  ? "[Último] dddd [às] LT"
                  : "[Última] dddd [às] LT";
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "em %s",
              past: "há %s",
              s: "segundos",
              ss: "%d segundos",
              m: "um minuto",
              mm: "%d minutos",
              h: "uma hora",
              hh: "%d horas",
              d: "um dia",
              dd: "%d dias",
              w: "uma semana",
              ww: "%d semanas",
              M: "um mês",
              MM: "%d meses",
              y: "um ano",
              yy: "%d anos",
            },
            dayOfMonthOrdinalParse: /\d{1,2}º/,
            ordinal: "%dº",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      4457: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            var a = " ";
            return (
              (e % 100 >= 20 || (e >= 100 && e % 100 == 0)) && (a = " de "),
              e +
                a +
                {
                  ss: "secunde",
                  mm: "minute",
                  hh: "ore",
                  dd: "zile",
                  ww: "săptămâni",
                  MM: "luni",
                  yy: "ani",
                }[n]
            );
          }
          e.defineLocale("ro", {
            months:
              "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split(
                "_"
              ),
            monthsShort:
              "ian._feb._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split(
              "_"
            ),
            weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
            weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY H:mm",
              LLLL: "dddd, D MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[azi la] LT",
              nextDay: "[mâine la] LT",
              nextWeek: "dddd [la] LT",
              lastDay: "[ieri la] LT",
              lastWeek: "[fosta] dddd [la] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "peste %s",
              past: "%s în urmă",
              s: "câteva secunde",
              ss: t,
              m: "un minut",
              mm: t,
              h: "o oră",
              hh: t,
              d: "o zi",
              dd: t,
              w: "o săptămână",
              ww: t,
              M: "o lună",
              MM: t,
              y: "un an",
              yy: t,
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      2271: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return "m" === n
              ? t
                ? "минута"
                : "минуту"
              : e +
                  " " +
                  ((a = +e),
                  (s = {
                    ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд",
                    mm: t ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    ww: "неделя_недели_недель",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет",
                  }[n].split("_")),
                  a % 10 == 1 && a % 100 != 11
                    ? s[0]
                    : a % 10 >= 2 &&
                      a % 10 <= 4 &&
                      (a % 100 < 10 || a % 100 >= 20)
                    ? s[1]
                    : s[2]);
            var a, s;
          }
          var n = [
            /^янв/i,
            /^фев/i,
            /^мар/i,
            /^апр/i,
            /^ма[йя]/i,
            /^июн/i,
            /^июл/i,
            /^авг/i,
            /^сен/i,
            /^окт/i,
            /^ноя/i,
            /^дек/i,
          ];
          e.defineLocale("ru", {
            months: {
              format:
                "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split(
                  "_"
                ),
              standalone:
                "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split(
                  "_"
                ),
            },
            monthsShort: {
              format:
                "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
              standalone:
                "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split(
                  "_"
                ),
            },
            weekdays: {
              standalone:
                "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split(
                  "_"
                ),
              format:
                "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split(
                  "_"
                ),
              isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?] ?dddd/,
            },
            weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
            monthsParse: n,
            longMonthsParse: n,
            shortMonthsParse: n,
            monthsRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsShortRegex:
              /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
            monthsStrictRegex:
              /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
            monthsShortStrictRegex:
              /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY г.",
              LLL: "D MMMM YYYY г., H:mm",
              LLLL: "dddd, D MMMM YYYY г., H:mm",
            },
            calendar: {
              sameDay: "[Сегодня, в] LT",
              nextDay: "[Завтра, в] LT",
              lastDay: "[Вчера, в] LT",
              nextWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В следующее] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В следующий] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В следующую] dddd, [в] LT";
                }
              },
              lastWeek: function (e) {
                if (e.week() === this.week())
                  return 2 === this.day()
                    ? "[Во] dddd, [в] LT"
                    : "[В] dddd, [в] LT";
                switch (this.day()) {
                  case 0:
                    return "[В прошлое] dddd, [в] LT";
                  case 1:
                  case 2:
                  case 4:
                    return "[В прошлый] dddd, [в] LT";
                  case 3:
                  case 5:
                  case 6:
                    return "[В прошлую] dddd, [в] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "через %s",
              past: "%s назад",
              s: "несколько секунд",
              ss: t,
              m: t,
              mm: t,
              h: "час",
              hh: t,
              d: "день",
              dd: t,
              w: "неделя",
              ww: t,
              M: "месяц",
              MM: t,
              y: "год",
              yy: t,
            },
            meridiemParse: /ночи|утра|дня|вечера/i,
            isPM: function (e) {
              return /^(дня|вечера)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночи"
                : e < 12
                ? "утра"
                : e < 17
                ? "дня"
                : "вечера";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                  return e + "-й";
                case "D":
                  return e + "-го";
                case "w":
                case "W":
                  return e + "-я";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1221: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "جنوري",
              "فيبروري",
              "مارچ",
              "اپريل",
              "مئي",
              "جون",
              "جولاءِ",
              "آگسٽ",
              "سيپٽمبر",
              "آڪٽوبر",
              "نومبر",
              "ڊسمبر",
            ],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
          e.defineLocale("sd", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[اڄ] LT",
              nextDay: "[سڀاڻي] LT",
              nextWeek: "dddd [اڳين هفتي تي] LT",
              lastDay: "[ڪالهه] LT",
              lastWeek: "[گزريل هفتي] dddd [تي] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s پوء",
              past: "%s اڳ",
              s: "چند سيڪنڊ",
              ss: "%d سيڪنڊ",
              m: "هڪ منٽ",
              mm: "%d منٽ",
              h: "هڪ ڪلاڪ",
              hh: "%d ڪلاڪ",
              d: "هڪ ڏينهن",
              dd: "%d ڏينهن",
              M: "هڪ مهينو",
              MM: "%d مهينا",
              y: "هڪ سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3478: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("se", {
            months:
              "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split(
                "_"
              ),
            monthsShort:
              "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split(
                "_"
              ),
            weekdays:
              "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split(
                "_"
              ),
            weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
            weekdaysMin: "s_v_m_g_d_b_L".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "MMMM D. [b.] YYYY",
              LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
              LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm",
            },
            calendar: {
              sameDay: "[otne ti] LT",
              nextDay: "[ihttin ti] LT",
              nextWeek: "dddd [ti] LT",
              lastDay: "[ikte ti] LT",
              lastWeek: "[ovddit] dddd [ti] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s geažes",
              past: "maŋit %s",
              s: "moadde sekunddat",
              ss: "%d sekunddat",
              m: "okta minuhta",
              mm: "%d minuhtat",
              h: "okta diimmu",
              hh: "%d diimmut",
              d: "okta beaivi",
              dd: "%d beaivvit",
              M: "okta mánnu",
              MM: "%d mánut",
              y: "okta jahki",
              yy: "%d jagit",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7538: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("si", {
            months:
              "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split(
                "_"
              ),
            monthsShort:
              "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split(
                "_"
              ),
            weekdays:
              "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split(
                "_"
              ),
            weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
            weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "a h:mm",
              LTS: "a h:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY MMMM D",
              LLL: "YYYY MMMM D, a h:mm",
              LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss",
            },
            calendar: {
              sameDay: "[අද] LT[ට]",
              nextDay: "[හෙට] LT[ට]",
              nextWeek: "dddd LT[ට]",
              lastDay: "[ඊයේ] LT[ට]",
              lastWeek: "[පසුගිය] dddd LT[ට]",
              sameElse: "L",
            },
            relativeTime: {
              future: "%sකින්",
              past: "%sකට පෙර",
              s: "තත්පර කිහිපය",
              ss: "තත්පර %d",
              m: "මිනිත්තුව",
              mm: "මිනිත්තු %d",
              h: "පැය",
              hh: "පැය %d",
              d: "දිනය",
              dd: "දින %d",
              M: "මාසය",
              MM: "මාස %d",
              y: "වසර",
              yy: "වසර %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
            ordinal: function (e) {
              return e + " වැනි";
            },
            meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
            isPM: function (e) {
              return "ප.ව." === e || "පස් වරු" === e;
            },
            meridiem: function (e, t, n) {
              return e > 11
                ? n
                  ? "ප.ව."
                  : "පස් වරු"
                : n
                ? "පෙ.ව."
                : "පෙර වරු";
            },
          });
        })(n(5093));
      },
      5784: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t =
              "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split(
                "_"
              ),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");
          function a(e) {
            return e > 1 && e < 5;
          }
          function s(e, t, n, s) {
            var r = e + " ";
            switch (n) {
              case "s":
                return t || s ? "pár sekúnd" : "pár sekundami";
              case "ss":
                return t || s
                  ? r + (a(e) ? "sekundy" : "sekúnd")
                  : r + "sekundami";
              case "m":
                return t ? "minúta" : s ? "minútu" : "minútou";
              case "mm":
                return t || s
                  ? r + (a(e) ? "minúty" : "minút")
                  : r + "minútami";
              case "h":
                return t ? "hodina" : s ? "hodinu" : "hodinou";
              case "hh":
                return t || s
                  ? r + (a(e) ? "hodiny" : "hodín")
                  : r + "hodinami";
              case "d":
                return t || s ? "deň" : "dňom";
              case "dd":
                return t || s ? r + (a(e) ? "dni" : "dní") : r + "dňami";
              case "M":
                return t || s ? "mesiac" : "mesiacom";
              case "MM":
                return t || s
                  ? r + (a(e) ? "mesiace" : "mesiacov")
                  : r + "mesiacmi";
              case "y":
                return t || s ? "rok" : "rokom";
              case "yy":
                return t || s ? r + (a(e) ? "roky" : "rokov") : r + "rokmi";
            }
          }
          e.defineLocale("sk", {
            months: t,
            monthsShort: n,
            weekdays:
              "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
            weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
            weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[dnes o] LT",
              nextDay: "[zajtra o] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v nedeľu o] LT";
                  case 1:
                  case 2:
                    return "[v] dddd [o] LT";
                  case 3:
                    return "[v stredu o] LT";
                  case 4:
                    return "[vo štvrtok o] LT";
                  case 5:
                    return "[v piatok o] LT";
                  case 6:
                    return "[v sobotu o] LT";
                }
              },
              lastDay: "[včera o] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[minulú nedeľu o] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[minulý] dddd [o] LT";
                  case 3:
                    return "[minulú stredu o] LT";
                  case 6:
                    return "[minulú sobotu o] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pred %s",
              s,
              ss: s,
              m: s,
              mm: s,
              h: s,
              hh: s,
              d: s,
              dd: s,
              M: s,
              MM: s,
              y: s,
              yy: s,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6637: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = e + " ";
            switch (n) {
              case "s":
                return t || a ? "nekaj sekund" : "nekaj sekundami";
              case "ss":
                return (
                  s +
                  (1 === e
                    ? t
                      ? "sekundo"
                      : "sekundi"
                    : 2 === e
                    ? t || a
                      ? "sekundi"
                      : "sekundah"
                    : e < 5
                    ? t || a
                      ? "sekunde"
                      : "sekundah"
                    : "sekund")
                );
              case "m":
                return t ? "ena minuta" : "eno minuto";
              case "mm":
                return (
                  s +
                  (1 === e
                    ? t
                      ? "minuta"
                      : "minuto"
                    : 2 === e
                    ? t || a
                      ? "minuti"
                      : "minutama"
                    : e < 5
                    ? t || a
                      ? "minute"
                      : "minutami"
                    : t || a
                    ? "minut"
                    : "minutami")
                );
              case "h":
                return t ? "ena ura" : "eno uro";
              case "hh":
                return (
                  s +
                  (1 === e
                    ? t
                      ? "ura"
                      : "uro"
                    : 2 === e
                    ? t || a
                      ? "uri"
                      : "urama"
                    : e < 5
                    ? t || a
                      ? "ure"
                      : "urami"
                    : t || a
                    ? "ur"
                    : "urami")
                );
              case "d":
                return t || a ? "en dan" : "enim dnem";
              case "dd":
                return (
                  s +
                  (1 === e
                    ? t || a
                      ? "dan"
                      : "dnem"
                    : 2 === e
                    ? t || a
                      ? "dni"
                      : "dnevoma"
                    : t || a
                    ? "dni"
                    : "dnevi")
                );
              case "M":
                return t || a ? "en mesec" : "enim mesecem";
              case "MM":
                return (
                  s +
                  (1 === e
                    ? t || a
                      ? "mesec"
                      : "mesecem"
                    : 2 === e
                    ? t || a
                      ? "meseca"
                      : "mesecema"
                    : e < 5
                    ? t || a
                      ? "mesece"
                      : "meseci"
                    : t || a
                    ? "mesecev"
                    : "meseci")
                );
              case "y":
                return t || a ? "eno leto" : "enim letom";
              case "yy":
                return (
                  s +
                  (1 === e
                    ? t || a
                      ? "leto"
                      : "letom"
                    : 2 === e
                    ? t || a
                      ? "leti"
                      : "letoma"
                    : e < 5
                    ? t || a
                      ? "leta"
                      : "leti"
                    : t || a
                    ? "let"
                    : "leti")
                );
            }
          }
          e.defineLocale("sl", {
            months:
              "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
            weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
            weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD. MM. YYYY",
              LL: "D. MMMM YYYY",
              LLL: "D. MMMM YYYY H:mm",
              LLLL: "dddd, D. MMMM YYYY H:mm",
            },
            calendar: {
              sameDay: "[danes ob] LT",
              nextDay: "[jutri ob] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[v] [nedeljo] [ob] LT";
                  case 3:
                    return "[v] [sredo] [ob] LT";
                  case 6:
                    return "[v] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[v] dddd [ob] LT";
                }
              },
              lastDay: "[včeraj ob] LT",
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[prejšnjo] [nedeljo] [ob] LT";
                  case 3:
                    return "[prejšnjo] [sredo] [ob] LT";
                  case 6:
                    return "[prejšnjo] [soboto] [ob] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[prejšnji] dddd [ob] LT";
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "čez %s",
              past: "pred %s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      6794: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sq", {
            months:
              "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split(
                "_"
              ),
            monthsShort:
              "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
            weekdays:
              "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split(
                "_"
              ),
            weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
            weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /PD|MD/,
            isPM: function (e) {
              return "M" === e.charAt(0);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "PD" : "MD";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Sot në] LT",
              nextDay: "[Nesër në] LT",
              nextWeek: "dddd [në] LT",
              lastDay: "[Dje në] LT",
              lastWeek: "dddd [e kaluar në] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "në %s",
              past: "%s më parë",
              s: "disa sekonda",
              ss: "%d sekonda",
              m: "një minutë",
              mm: "%d minuta",
              h: "një orë",
              hh: "%d orë",
              d: "një ditë",
              dd: "%d ditë",
              M: "një muaj",
              MM: "%d muaj",
              y: "një vit",
              yy: "%d vite",
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      3322: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["секунда", "секунде", "секунди"],
              m: ["један минут", "једног минута"],
              mm: ["минут", "минута", "минута"],
              h: ["један сат", "једног сата"],
              hh: ["сат", "сата", "сати"],
              d: ["један дан", "једног дана"],
              dd: ["дан", "дана", "дана"],
              M: ["један месец", "једног месеца"],
              MM: ["месец", "месеца", "месеци"],
              y: ["једну годину", "једне године"],
              yy: ["годину", "године", "година"],
            },
            correctGrammaticalCase: function (e, t) {
              return e % 10 >= 1 &&
                e % 10 <= 4 &&
                (e % 100 < 10 || e % 100 >= 20)
                ? e % 10 == 1
                  ? t[0]
                  : t[1]
                : t[2];
            },
            translate: function (e, n, a, s) {
              var r,
                i = t.words[a];
              return 1 === a.length
                ? "y" === a && n
                  ? "једна година"
                  : s || n
                  ? i[0]
                  : i[1]
                : ((r = t.correctGrammaticalCase(e, i)),
                  "yy" === a && n && "годину" === r
                    ? e + " година"
                    : e + " " + r);
            },
          };
          e.defineLocale("sr-cyrl", {
            months:
              "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split(
                "_"
              ),
            monthsShort:
              "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
            weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
            weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[данас у] LT",
              nextDay: "[сутра у] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[у] [недељу] [у] LT";
                  case 3:
                    return "[у] [среду] [у] LT";
                  case 6:
                    return "[у] [суботу] [у] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[у] dddd [у] LT";
                }
              },
              lastDay: "[јуче у] LT",
              lastWeek: function () {
                return [
                  "[прошле] [недеље] [у] LT",
                  "[прошлог] [понедељка] [у] LT",
                  "[прошлог] [уторка] [у] LT",
                  "[прошле] [среде] [у] LT",
                  "[прошлог] [четвртка] [у] LT",
                  "[прошлог] [петка] [у] LT",
                  "[прошле] [суботе] [у] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "пре %s",
              s: "неколико секунди",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: t.translate,
              dd: t.translate,
              M: t.translate,
              MM: t.translate,
              y: t.translate,
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      5719: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            words: {
              ss: ["sekunda", "sekunde", "sekundi"],
              m: ["jedan minut", "jednog minuta"],
              mm: ["minut", "minuta", "minuta"],
              h: ["jedan sat", "jednog sata"],
              hh: ["sat", "sata", "sati"],
              d: ["jedan dan", "jednog dana"],
              dd: ["dan", "dana", "dana"],
              M: ["jedan mesec", "jednog meseca"],
              MM: ["mesec", "meseca", "meseci"],
              y: ["jednu godinu", "jedne godine"],
              yy: ["godinu", "godine", "godina"],
            },
            correctGrammaticalCase: function (e, t) {
              return e % 10 >= 1 &&
                e % 10 <= 4 &&
                (e % 100 < 10 || e % 100 >= 20)
                ? e % 10 == 1
                  ? t[0]
                  : t[1]
                : t[2];
            },
            translate: function (e, n, a, s) {
              var r,
                i = t.words[a];
              return 1 === a.length
                ? "y" === a && n
                  ? "jedna godina"
                  : s || n
                  ? i[0]
                  : i[1]
                : ((r = t.correctGrammaticalCase(e, i)),
                  "yy" === a && n && "godinu" === r
                    ? e + " godina"
                    : e + " " + r);
            },
          };
          e.defineLocale("sr", {
            months:
              "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split(
                "_"
              ),
            monthsShort:
              "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split(
                "_"
              ),
            weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
            weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "D. M. YYYY.",
              LL: "D. MMMM YYYY.",
              LLL: "D. MMMM YYYY. H:mm",
              LLLL: "dddd, D. MMMM YYYY. H:mm",
            },
            calendar: {
              sameDay: "[danas u] LT",
              nextDay: "[sutra u] LT",
              nextWeek: function () {
                switch (this.day()) {
                  case 0:
                    return "[u] [nedelju] [u] LT";
                  case 3:
                    return "[u] [sredu] [u] LT";
                  case 6:
                    return "[u] [subotu] [u] LT";
                  case 1:
                  case 2:
                  case 4:
                  case 5:
                    return "[u] dddd [u] LT";
                }
              },
              lastDay: "[juče u] LT",
              lastWeek: function () {
                return [
                  "[prošle] [nedelje] [u] LT",
                  "[prošlog] [ponedeljka] [u] LT",
                  "[prošlog] [utorka] [u] LT",
                  "[prošle] [srede] [u] LT",
                  "[prošlog] [četvrtka] [u] LT",
                  "[prošlog] [petka] [u] LT",
                  "[prošle] [subote] [u] LT",
                ][this.day()];
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "za %s",
              past: "pre %s",
              s: "nekoliko sekundi",
              ss: t.translate,
              m: t.translate,
              mm: t.translate,
              h: t.translate,
              hh: t.translate,
              d: t.translate,
              dd: t.translate,
              M: t.translate,
              MM: t.translate,
              y: t.translate,
              yy: t.translate,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      6e3: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ss", {
            months:
              "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split(
                "_"
              ),
            monthsShort:
              "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
            weekdays:
              "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split(
                "_"
              ),
            weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
            weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Namuhla nga] LT",
              nextDay: "[Kusasa nga] LT",
              nextWeek: "dddd [nga] LT",
              lastDay: "[Itolo nga] LT",
              lastWeek: "dddd [leliphelile] [nga] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "nga %s",
              past: "wenteka nga %s",
              s: "emizuzwana lomcane",
              ss: "%d mzuzwana",
              m: "umzuzu",
              mm: "%d emizuzu",
              h: "lihora",
              hh: "%d emahora",
              d: "lilanga",
              dd: "%d emalanga",
              M: "inyanga",
              MM: "%d tinyanga",
              y: "umnyaka",
              yy: "%d iminyaka",
            },
            meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
            meridiem: function (e, t, n) {
              return e < 11
                ? "ekuseni"
                : e < 15
                ? "emini"
                : e < 19
                ? "entsambama"
                : "ebusuku";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "ekuseni" === t
                  ? e
                  : "emini" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "entsambama" === t || "ebusuku" === t
                  ? 0 === e
                    ? 0
                    : e + 12
                  : void 0
              );
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: "%d",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1011: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sv", {
            months:
              "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split(
                "_"
              ),
            monthsShort:
              "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
            weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split(
              "_"
            ),
            weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
            weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY [kl.] HH:mm",
              LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Idag] LT",
              nextDay: "[Imorgon] LT",
              lastDay: "[Igår] LT",
              nextWeek: "[På] dddd LT",
              lastWeek: "[I] dddd[s] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "om %s",
              past: "för %s sedan",
              s: "några sekunder",
              ss: "%d sekunder",
              m: "en minut",
              mm: "%d minuter",
              h: "en timme",
              hh: "%d timmar",
              d: "en dag",
              dd: "%d dagar",
              M: "en månad",
              MM: "%d månader",
              y: "ett år",
              yy: "%d år",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(\:e|\:a)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? ":e"
                  : 1 === t || 2 === t
                  ? ":a"
                  : ":e")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      748: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("sw", {
            months:
              "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split(
                "_"
              ),
            monthsShort:
              "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
            weekdays:
              "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split(
                "_"
              ),
            weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
            weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "hh:mm A",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[leo saa] LT",
              nextDay: "[kesho saa] LT",
              nextWeek: "[wiki ijayo] dddd [saat] LT",
              lastDay: "[jana] LT",
              lastWeek: "[wiki iliyopita] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s baadaye",
              past: "tokea %s",
              s: "hivi punde",
              ss: "sekunde %d",
              m: "dakika moja",
              mm: "dakika %d",
              h: "saa limoja",
              hh: "masaa %d",
              d: "siku moja",
              dd: "siku %d",
              M: "mwezi mmoja",
              MM: "miezi %d",
              y: "mwaka mmoja",
              yy: "miaka %d",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      1025: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
              1: "௧",
              2: "௨",
              3: "௩",
              4: "௪",
              5: "௫",
              6: "௬",
              7: "௭",
              8: "௮",
              9: "௯",
              0: "௦",
            },
            n = {
              "௧": "1",
              "௨": "2",
              "௩": "3",
              "௪": "4",
              "௫": "5",
              "௬": "6",
              "௭": "7",
              "௮": "8",
              "௯": "9",
              "௦": "0",
            };
          e.defineLocale("ta", {
            months:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            monthsShort:
              "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split(
                "_"
              ),
            weekdays:
              "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split(
                "_"
              ),
            weekdaysShort:
              "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
            weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, HH:mm",
              LLLL: "dddd, D MMMM YYYY, HH:mm",
            },
            calendar: {
              sameDay: "[இன்று] LT",
              nextDay: "[நாளை] LT",
              nextWeek: "dddd, LT",
              lastDay: "[நேற்று] LT",
              lastWeek: "[கடந்த வாரம்] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s இல்",
              past: "%s முன்",
              s: "ஒரு சில விநாடிகள்",
              ss: "%d விநாடிகள்",
              m: "ஒரு நிமிடம்",
              mm: "%d நிமிடங்கள்",
              h: "ஒரு மணி நேரம்",
              hh: "%d மணி நேரம்",
              d: "ஒரு நாள்",
              dd: "%d நாட்கள்",
              M: "ஒரு மாதம்",
              MM: "%d மாதங்கள்",
              y: "ஒரு வருடம்",
              yy: "%d ஆண்டுகள்",
            },
            dayOfMonthOrdinalParse: /\d{1,2}வது/,
            ordinal: function (e) {
              return e + "வது";
            },
            preparse: function (e) {
              return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function (e) {
                return n[e];
              });
            },
            postformat: function (e) {
              return e.replace(/\d/g, function (e) {
                return t[e];
              });
            },
            meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
            meridiem: function (e, t, n) {
              return e < 2
                ? " யாமம்"
                : e < 6
                ? " வைகறை"
                : e < 10
                ? " காலை"
                : e < 14
                ? " நண்பகல்"
                : e < 18
                ? " எற்பாடு"
                : e < 22
                ? " மாலை"
                : " யாமம்";
            },
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "யாமம்" === t
                  ? e < 2
                    ? e
                    : e + 12
                  : "வைகறை" === t ||
                    "காலை" === t ||
                    ("நண்பகல்" === t && e >= 10)
                  ? e
                  : e + 12
              );
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      1885: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("te", {
            months:
              "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split(
                "_"
              ),
            monthsShort:
              "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split(
                "_"
              ),
            weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
            weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
            longDateFormat: {
              LT: "A h:mm",
              LTS: "A h:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY, A h:mm",
              LLLL: "dddd, D MMMM YYYY, A h:mm",
            },
            calendar: {
              sameDay: "[నేడు] LT",
              nextDay: "[రేపు] LT",
              nextWeek: "dddd, LT",
              lastDay: "[నిన్న] LT",
              lastWeek: "[గత] dddd, LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s లో",
              past: "%s క్రితం",
              s: "కొన్ని క్షణాలు",
              ss: "%d సెకన్లు",
              m: "ఒక నిమిషం",
              mm: "%d నిమిషాలు",
              h: "ఒక గంట",
              hh: "%d గంటలు",
              d: "ఒక రోజు",
              dd: "%d రోజులు",
              M: "ఒక నెల",
              MM: "%d నెలలు",
              y: "ఒక సంవత్సరం",
              yy: "%d సంవత్సరాలు",
            },
            dayOfMonthOrdinalParse: /\d{1,2}వ/,
            ordinal: "%dవ",
            meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "రాత్రి" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "ఉదయం" === t
                  ? e
                  : "మధ్యాహ్నం" === t
                  ? e >= 10
                    ? e
                    : e + 12
                  : "సాయంత్రం" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "రాత్రి"
                : e < 10
                ? "ఉదయం"
                : e < 17
                ? "మధ్యాహ్నం"
                : e < 20
                ? "సాయంత్రం"
                : "రాత్రి";
            },
            week: { dow: 0, doy: 6 },
          });
        })(n(5093));
      },
      8861: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tet", {
            months:
              "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
            weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split(
              "_"
            ),
            weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"),
            weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Ohin iha] LT",
              nextDay: "[Aban iha] LT",
              nextWeek: "dddd [iha] LT",
              lastDay: "[Horiseik iha] LT",
              lastWeek: "dddd [semana kotuk] [iha] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "iha %s",
              past: "%s liuba",
              s: "segundu balun",
              ss: "segundu %d",
              m: "minutu ida",
              mm: "minutu %d",
              h: "oras ida",
              hh: "oras %d",
              d: "loron ida",
              dd: "loron %d",
              M: "fulan ida",
              MM: "fulan %d",
              y: "tinan ida",
              yy: "tinan %d",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      6571: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            0: "-ум",
            1: "-ум",
            2: "-юм",
            3: "-юм",
            4: "-ум",
            5: "-ум",
            6: "-ум",
            7: "-ум",
            8: "-ум",
            9: "-ум",
            10: "-ум",
            12: "-ум",
            13: "-ум",
            20: "-ум",
            30: "-юм",
            40: "-ум",
            50: "-ум",
            60: "-ум",
            70: "-ум",
            80: "-ум",
            90: "-ум",
            100: "-ум",
          };
          e.defineLocale("tg", {
            months: {
              format:
                "январи_феврали_марти_апрели_майи_июни_июли_августи_сентябри_октябри_ноябри_декабри".split(
                  "_"
                ),
              standalone:
                "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                  "_"
                ),
            },
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split(
                "_"
              ),
            weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"),
            weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Имрӯз соати] LT",
              nextDay: "[Фардо соати] LT",
              lastDay: "[Дирӯз соати] LT",
              nextWeek: "dddd[и] [ҳафтаи оянда соати] LT",
              lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "баъди %s",
              past: "%s пеш",
              s: "якчанд сония",
              m: "як дақиқа",
              mm: "%d дақиқа",
              h: "як соат",
              hh: "%d соат",
              d: "як рӯз",
              dd: "%d рӯз",
              M: "як моҳ",
              MM: "%d моҳ",
              y: "як сол",
              yy: "%d сол",
            },
            meridiemParse: /шаб|субҳ|рӯз|бегоҳ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "шаб" === t
                  ? e < 4
                    ? e
                    : e + 12
                  : "субҳ" === t
                  ? e
                  : "рӯз" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "бегоҳ" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "шаб"
                : e < 11
                ? "субҳ"
                : e < 16
                ? "рӯз"
                : e < 19
                ? "бегоҳ"
                : "шаб";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/,
            ordinal: function (e) {
              return e + (t[e] || t[e % 10] || t[e >= 100 ? 100 : null]);
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      5802: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("th", {
            months:
              "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split(
                "_"
              ),
            monthsShort:
              "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split(
              "_"
            ),
            weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "H:mm",
              LTS: "H:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY เวลา H:mm",
              LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm",
            },
            meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
            isPM: function (e) {
              return "หลังเที่ยง" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง";
            },
            calendar: {
              sameDay: "[วันนี้ เวลา] LT",
              nextDay: "[พรุ่งนี้ เวลา] LT",
              nextWeek: "dddd[หน้า เวลา] LT",
              lastDay: "[เมื่อวานนี้ เวลา] LT",
              lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "อีก %s",
              past: "%sที่แล้ว",
              s: "ไม่กี่วินาที",
              ss: "%d วินาที",
              m: "1 นาที",
              mm: "%d นาที",
              h: "1 ชั่วโมง",
              hh: "%d ชั่วโมง",
              d: "1 วัน",
              dd: "%d วัน",
              w: "1 สัปดาห์",
              ww: "%d สัปดาห์",
              M: "1 เดือน",
              MM: "%d เดือน",
              y: "1 ปี",
              yy: "%d ปี",
            },
          });
        })(n(5093));
      },
      9527: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "'inji",
            5: "'inji",
            8: "'inji",
            70: "'inji",
            80: "'inji",
            2: "'nji",
            7: "'nji",
            20: "'nji",
            50: "'nji",
            3: "'ünji",
            4: "'ünji",
            100: "'ünji",
            6: "'njy",
            9: "'unjy",
            10: "'unjy",
            30: "'unjy",
            60: "'ynjy",
            90: "'ynjy",
          };
          e.defineLocale("tk", {
            months:
              "Ýanwar_Fewral_Mart_Aprel_Maý_Iýun_Iýul_Awgust_Sentýabr_Oktýabr_Noýabr_Dekabr".split(
                "_"
              ),
            monthsShort:
              "Ýan_Few_Mar_Apr_Maý_Iýn_Iýl_Awg_Sen_Okt_Noý_Dek".split("_"),
            weekdays:
              "Ýekşenbe_Duşenbe_Sişenbe_Çarşenbe_Penşenbe_Anna_Şenbe".split(
                "_"
              ),
            weekdaysShort: "Ýek_Duş_Siş_Çar_Pen_Ann_Şen".split("_"),
            weekdaysMin: "Ýk_Dş_Sş_Çr_Pn_An_Şn".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün sagat] LT",
              nextDay: "[ertir sagat] LT",
              nextWeek: "[indiki] dddd [sagat] LT",
              lastDay: "[düýn] LT",
              lastWeek: "[geçen] dddd [sagat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s soň",
              past: "%s öň",
              s: "birnäçe sekunt",
              m: "bir minut",
              mm: "%d minut",
              h: "bir sagat",
              hh: "%d sagat",
              d: "bir gün",
              dd: "%d gün",
              M: "bir aý",
              MM: "%d aý",
              y: "bir ýyl",
              yy: "%d ýyl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'unjy";
                  var a = e % 10;
                  return (
                    e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null])
                  );
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      9231: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tl-ph", {
            months:
              "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split(
                "_"
              ),
            monthsShort:
              "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
            weekdays:
              "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split(
                "_"
              ),
            weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
            weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "MM/D/YYYY",
              LL: "MMMM D, YYYY",
              LLL: "MMMM D, YYYY HH:mm",
              LLLL: "dddd, MMMM DD, YYYY HH:mm",
            },
            calendar: {
              sameDay: "LT [ngayong araw]",
              nextDay: "[Bukas ng] LT",
              nextWeek: "LT [sa susunod na] dddd",
              lastDay: "LT [kahapon]",
              lastWeek: "LT [noong nakaraang] dddd",
              sameElse: "L",
            },
            relativeTime: {
              future: "sa loob ng %s",
              past: "%s ang nakalipas",
              s: "ilang segundo",
              ss: "%d segundo",
              m: "isang minuto",
              mm: "%d minuto",
              h: "isang oras",
              hh: "%d oras",
              d: "isang araw",
              dd: "%d araw",
              M: "isang buwan",
              MM: "%d buwan",
              y: "isang taon",
              yy: "%d taon",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1052: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");
          function n(e, n, a, s) {
            var r = (function (e) {
              var n = Math.floor((e % 1e3) / 100),
                a = Math.floor((e % 100) / 10),
                s = e % 10,
                r = "";
              return (
                n > 0 && (r += t[n] + "vatlh"),
                a > 0 && (r += ("" !== r ? " " : "") + t[a] + "maH"),
                s > 0 && (r += ("" !== r ? " " : "") + t[s]),
                "" === r ? "pagh" : r
              );
            })(e);
            switch (a) {
              case "ss":
                return r + " lup";
              case "mm":
                return r + " tup";
              case "hh":
                return r + " rep";
              case "dd":
                return r + " jaj";
              case "MM":
                return r + " jar";
              case "yy":
                return r + " DIS";
            }
          }
          e.defineLocale("tlh", {
            months:
              "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split(
                "_"
              ),
            monthsShort:
              "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            weekdaysShort:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            weekdaysMin:
              "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split(
                "_"
              ),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[DaHjaj] LT",
              nextDay: "[wa’leS] LT",
              nextWeek: "LLL",
              lastDay: "[wa’Hu’] LT",
              lastWeek: "LLL",
              sameElse: "L",
            },
            relativeTime: {
              future: function (e) {
                var t = e;
                return -1 !== e.indexOf("jaj")
                  ? t.slice(0, -3) + "leS"
                  : -1 !== e.indexOf("jar")
                  ? t.slice(0, -3) + "waQ"
                  : -1 !== e.indexOf("DIS")
                  ? t.slice(0, -3) + "nem"
                  : t + " pIq";
              },
              past: function (e) {
                var t = e;
                return -1 !== e.indexOf("jaj")
                  ? t.slice(0, -3) + "Hu’"
                  : -1 !== e.indexOf("jar")
                  ? t.slice(0, -3) + "wen"
                  : -1 !== e.indexOf("DIS")
                  ? t.slice(0, -3) + "ben"
                  : t + " ret";
              },
              s: "puS lup",
              ss: n,
              m: "wa’ tup",
              mm: n,
              h: "wa’ rep",
              hh: n,
              d: "wa’ jaj",
              dd: n,
              M: "wa’ jar",
              MM: n,
              y: "wa’ DIS",
              yy: n,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      5096: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = {
            1: "'inci",
            5: "'inci",
            8: "'inci",
            70: "'inci",
            80: "'inci",
            2: "'nci",
            7: "'nci",
            20: "'nci",
            50: "'nci",
            3: "'üncü",
            4: "'üncü",
            100: "'üncü",
            6: "'ncı",
            9: "'uncu",
            10: "'uncu",
            30: "'uncu",
            60: "'ıncı",
            90: "'ıncı",
          };
          e.defineLocale("tr", {
            months:
              "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split(
                "_"
              ),
            monthsShort:
              "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
            weekdays:
              "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split(
                "_"
              ),
            weekdaysShort: "Paz_Pzt_Sal_Çar_Per_Cum_Cmt".split("_"),
            weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "öö" : "ÖÖ") : n ? "ös" : "ÖS";
            },
            meridiemParse: /öö|ÖÖ|ös|ÖS/,
            isPM: function (e) {
              return "ös" === e || "ÖS" === e;
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[bugün saat] LT",
              nextDay: "[yarın saat] LT",
              nextWeek: "[gelecek] dddd [saat] LT",
              lastDay: "[dün] LT",
              lastWeek: "[geçen] dddd [saat] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s sonra",
              past: "%s önce",
              s: "birkaç saniye",
              ss: "%d saniye",
              m: "bir dakika",
              mm: "%d dakika",
              h: "bir saat",
              hh: "%d saat",
              d: "bir gün",
              dd: "%d gün",
              w: "bir hafta",
              ww: "%d hafta",
              M: "bir ay",
              MM: "%d ay",
              y: "bir yıl",
              yy: "%d yıl",
            },
            ordinal: function (e, n) {
              switch (n) {
                case "d":
                case "D":
                case "Do":
                case "DD":
                  return e;
                default:
                  if (0 === e) return e + "'ıncı";
                  var a = e % 10;
                  return (
                    e + (t[a] || t[(e % 100) - a] || t[e >= 100 ? 100 : null])
                  );
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      9846: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n, a) {
            var s = {
              s: ["viensas secunds", "'iensas secunds"],
              ss: [e + " secunds", e + " secunds"],
              m: ["'n míut", "'iens míut"],
              mm: [e + " míuts", e + " míuts"],
              h: ["'n þora", "'iensa þora"],
              hh: [e + " þoras", e + " þoras"],
              d: ["'n ziua", "'iensa ziua"],
              dd: [e + " ziuas", e + " ziuas"],
              M: ["'n mes", "'iens mes"],
              MM: [e + " mesen", e + " mesen"],
              y: ["'n ar", "'iens ar"],
              yy: [e + " ars", e + " ars"],
            };
            return a || t ? s[n][0] : s[n][1];
          }
          e.defineLocale("tzl", {
            months:
              "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split(
                "_"
              ),
            monthsShort:
              "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
            weekdays:
              "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
            weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
            weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
            longDateFormat: {
              LT: "HH.mm",
              LTS: "HH.mm.ss",
              L: "DD.MM.YYYY",
              LL: "D. MMMM [dallas] YYYY",
              LLL: "D. MMMM [dallas] YYYY HH.mm",
              LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm",
            },
            meridiemParse: /d\'o|d\'a/i,
            isPM: function (e) {
              return "d'o" === e.toLowerCase();
            },
            meridiem: function (e, t, n) {
              return e > 11 ? (n ? "d'o" : "D'O") : n ? "d'a" : "D'A";
            },
            calendar: {
              sameDay: "[oxhi à] LT",
              nextDay: "[demà à] LT",
              nextWeek: "dddd [à] LT",
              lastDay: "[ieiri à] LT",
              lastWeek: "[sür el] dddd [lasteu à] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "osprei %s",
              past: "ja%s",
              s: t,
              ss: t,
              m: t,
              mm: t,
              h: t,
              hh: t,
              d: t,
              dd: t,
              M: t,
              MM: t,
              y: t,
              yy: t,
            },
            dayOfMonthOrdinalParse: /\d{1,2}\./,
            ordinal: "%d.",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      7711: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm-latn", {
            months:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            monthsShort:
              "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split(
                "_"
              ),
            weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split(
              "_"
            ),
            weekdaysShort:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            weekdaysMin:
              "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[asdkh g] LT",
              nextDay: "[aska g] LT",
              nextWeek: "dddd [g] LT",
              lastDay: "[assant g] LT",
              lastWeek: "dddd [g] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "dadkh s yan %s",
              past: "yan %s",
              s: "imik",
              ss: "%d imik",
              m: "minuḍ",
              mm: "%d minuḍ",
              h: "saɛa",
              hh: "%d tassaɛin",
              d: "ass",
              dd: "%d ossan",
              M: "ayowr",
              MM: "%d iyyirn",
              y: "asgas",
              yy: "%d isgasn",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      1765: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("tzm", {
            months:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            monthsShort:
              "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split(
                "_"
              ),
            weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split(
              "_"
            ),
            weekdaysShort:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            weekdaysMin:
              "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
              nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
              nextWeek: "dddd [ⴴ] LT",
              lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
              lastWeek: "dddd [ⴴ] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
              past: "ⵢⴰⵏ %s",
              s: "ⵉⵎⵉⴽ",
              ss: "%d ⵉⵎⵉⴽ",
              m: "ⵎⵉⵏⵓⴺ",
              mm: "%d ⵎⵉⵏⵓⴺ",
              h: "ⵙⴰⵄⴰ",
              hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
              d: "ⴰⵙⵙ",
              dd: "%d oⵙⵙⴰⵏ",
              M: "ⴰⵢoⵓⵔ",
              MM: "%d ⵉⵢⵢⵉⵔⵏ",
              y: "ⴰⵙⴳⴰⵙ",
              yy: "%d ⵉⵙⴳⴰⵙⵏ",
            },
            week: { dow: 6, doy: 12 },
          });
        })(n(5093));
      },
      8414: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("ug-cn", {
            months:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            monthsShort:
              "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split(
                "_"
              ),
            weekdays:
              "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split(
                "_"
              ),
            weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY-MM-DD",
              LL: "YYYY-يىلىM-ئاينىڭD-كۈنى",
              LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
              LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm",
            },
            meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t
                  ? e
                  : "چۈشتىن كېيىن" === t || "كەچ" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "يېرىم كېچە"
                : a < 900
                ? "سەھەر"
                : a < 1130
                ? "چۈشتىن بۇرۇن"
                : a < 1230
                ? "چۈش"
                : a < 1800
                ? "چۈشتىن كېيىن"
                : "كەچ";
            },
            calendar: {
              sameDay: "[بۈگۈن سائەت] LT",
              nextDay: "[ئەتە سائەت] LT",
              nextWeek: "[كېلەركى] dddd [سائەت] LT",
              lastDay: "[تۆنۈگۈن] LT",
              lastWeek: "[ئالدىنقى] dddd [سائەت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s كېيىن",
              past: "%s بۇرۇن",
              s: "نەچچە سېكونت",
              ss: "%d سېكونت",
              m: "بىر مىنۇت",
              mm: "%d مىنۇت",
              h: "بىر سائەت",
              hh: "%d سائەت",
              d: "بىر كۈن",
              dd: "%d كۈن",
              M: "بىر ئاي",
              MM: "%d ئاي",
              y: "بىر يىل",
              yy: "%d يىل",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "-كۈنى";
                case "w":
                case "W":
                  return e + "-ھەپتە";
                default:
                  return e;
              }
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      6618: function (e, t, n) {
        !(function (e) {
          "use strict";
          function t(e, t, n) {
            return "m" === n
              ? t
                ? "хвилина"
                : "хвилину"
              : "h" === n
              ? t
                ? "година"
                : "годину"
              : e +
                " " +
                ((a = +e),
                (s = {
                  ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд",
                  mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                  hh: t ? "година_години_годин" : "годину_години_годин",
                  dd: "день_дні_днів",
                  MM: "місяць_місяці_місяців",
                  yy: "рік_роки_років",
                }[n].split("_")),
                a % 10 == 1 && a % 100 != 11
                  ? s[0]
                  : a % 10 >= 2 &&
                    a % 10 <= 4 &&
                    (a % 100 < 10 || a % 100 >= 20)
                  ? s[1]
                  : s[2]);
            var a, s;
          }
          function n(e) {
            return function () {
              return e + "о" + (11 === this.hours() ? "б" : "") + "] LT";
            };
          }
          e.defineLocale("uk", {
            months: {
              format:
                "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split(
                  "_"
                ),
              standalone:
                "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split(
                  "_"
                ),
            },
            monthsShort:
              "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split(
                "_"
              ),
            weekdays: function (e, t) {
              var n = {
                nominative:
                  "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split(
                    "_"
                  ),
                accusative:
                  "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split(
                    "_"
                  ),
                genitive:
                  "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split(
                    "_"
                  ),
              };
              return !0 === e
                ? n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1))
                : e
                ? n[
                    /(\[[ВвУу]\]) ?dddd/.test(t)
                      ? "accusative"
                      : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t)
                      ? "genitive"
                      : "nominative"
                  ][e.day()]
                : n.nominative;
            },
            weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD.MM.YYYY",
              LL: "D MMMM YYYY р.",
              LLL: "D MMMM YYYY р., HH:mm",
              LLLL: "dddd, D MMMM YYYY р., HH:mm",
            },
            calendar: {
              sameDay: n("[Сьогодні "),
              nextDay: n("[Завтра "),
              lastDay: n("[Вчора "),
              nextWeek: n("[У] dddd ["),
              lastWeek: function () {
                switch (this.day()) {
                  case 0:
                  case 3:
                  case 5:
                  case 6:
                    return n("[Минулої] dddd [").call(this);
                  case 1:
                  case 2:
                  case 4:
                    return n("[Минулого] dddd [").call(this);
                }
              },
              sameElse: "L",
            },
            relativeTime: {
              future: "за %s",
              past: "%s тому",
              s: "декілька секунд",
              ss: t,
              m: t,
              mm: t,
              h: "годину",
              hh: t,
              d: "день",
              dd: t,
              M: "місяць",
              MM: t,
              y: "рік",
              yy: t,
            },
            meridiemParse: /ночі|ранку|дня|вечора/,
            isPM: function (e) {
              return /^(дня|вечора)$/.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 4
                ? "ночі"
                : e < 12
                ? "ранку"
                : e < 17
                ? "дня"
                : "вечора";
            },
            dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
            ordinal: function (e, t) {
              switch (t) {
                case "M":
                case "d":
                case "DDD":
                case "w":
                case "W":
                  return e + "-й";
                case "D":
                  return e + "-го";
                default:
                  return e;
              }
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      158: function (e, t, n) {
        !(function (e) {
          "use strict";
          var t = [
              "جنوری",
              "فروری",
              "مارچ",
              "اپریل",
              "مئی",
              "جون",
              "جولائی",
              "اگست",
              "ستمبر",
              "اکتوبر",
              "نومبر",
              "دسمبر",
            ],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
          e.defineLocale("ur", {
            months: t,
            monthsShort: t,
            weekdays: n,
            weekdaysShort: n,
            weekdaysMin: n,
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd، D MMMM YYYY HH:mm",
            },
            meridiemParse: /صبح|شام/,
            isPM: function (e) {
              return "شام" === e;
            },
            meridiem: function (e, t, n) {
              return e < 12 ? "صبح" : "شام";
            },
            calendar: {
              sameDay: "[آج بوقت] LT",
              nextDay: "[کل بوقت] LT",
              nextWeek: "dddd [بوقت] LT",
              lastDay: "[گذشتہ روز بوقت] LT",
              lastWeek: "[گذشتہ] dddd [بوقت] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s بعد",
              past: "%s قبل",
              s: "چند سیکنڈ",
              ss: "%d سیکنڈ",
              m: "ایک منٹ",
              mm: "%d منٹ",
              h: "ایک گھنٹہ",
              hh: "%d گھنٹے",
              d: "ایک دن",
              dd: "%d دن",
              M: "ایک ماہ",
              MM: "%d ماہ",
              y: "ایک سال",
              yy: "%d سال",
            },
            preparse: function (e) {
              return e.replace(/،/g, ",");
            },
            postformat: function (e) {
              return e.replace(/,/g, "،");
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2475: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("uz-latn", {
            months:
              "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split(
                "_"
              ),
            monthsShort:
              "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
            weekdays:
              "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split(
                "_"
              ),
            weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
            weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Bugun soat] LT [da]",
              nextDay: "[Ertaga] LT [da]",
              nextWeek: "dddd [kuni soat] LT [da]",
              lastDay: "[Kecha soat] LT [da]",
              lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Yaqin %s ichida",
              past: "Bir necha %s oldin",
              s: "soniya",
              ss: "%d soniya",
              m: "bir daqiqa",
              mm: "%d daqiqa",
              h: "bir soat",
              hh: "%d soat",
              d: "bir kun",
              dd: "%d kun",
              M: "bir oy",
              MM: "%d oy",
              y: "bir yil",
              yy: "%d yil",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      7609: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("uz", {
            months:
              "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split(
                "_"
              ),
            monthsShort:
              "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
            weekdays:
              "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
            weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
            weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "D MMMM YYYY, dddd HH:mm",
            },
            calendar: {
              sameDay: "[Бугун соат] LT [да]",
              nextDay: "[Эртага] LT [да]",
              nextWeek: "dddd [куни соат] LT [да]",
              lastDay: "[Кеча соат] LT [да]",
              lastWeek: "[Утган] dddd [куни соат] LT [да]",
              sameElse: "L",
            },
            relativeTime: {
              future: "Якин %s ичида",
              past: "Бир неча %s олдин",
              s: "фурсат",
              ss: "%d фурсат",
              m: "бир дакика",
              mm: "%d дакика",
              h: "бир соат",
              hh: "%d соат",
              d: "бир кун",
              dd: "%d кун",
              M: "бир ой",
              MM: "%d ой",
              y: "бир йил",
              yy: "%d йил",
            },
            week: { dow: 1, doy: 7 },
          });
        })(n(5093));
      },
      1135: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("vi", {
            months:
              "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split(
                "_"
              ),
            monthsShort:
              "Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split(
                "_"
              ),
            weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
            weekdaysParseExact: !0,
            meridiemParse: /sa|ch/i,
            isPM: function (e) {
              return /^ch$/i.test(e);
            },
            meridiem: function (e, t, n) {
              return e < 12 ? (n ? "sa" : "SA") : n ? "ch" : "CH";
            },
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "D MMMM [năm] YYYY",
              LLL: "D MMMM [năm] YYYY HH:mm",
              LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
              l: "DD/M/YYYY",
              ll: "D MMM YYYY",
              lll: "D MMM YYYY HH:mm",
              llll: "ddd, D MMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[Hôm nay lúc] LT",
              nextDay: "[Ngày mai lúc] LT",
              nextWeek: "dddd [tuần tới lúc] LT",
              lastDay: "[Hôm qua lúc] LT",
              lastWeek: "dddd [tuần trước lúc] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "%s tới",
              past: "%s trước",
              s: "vài giây",
              ss: "%d giây",
              m: "một phút",
              mm: "%d phút",
              h: "một giờ",
              hh: "%d giờ",
              d: "một ngày",
              dd: "%d ngày",
              w: "một tuần",
              ww: "%d tuần",
              M: "một tháng",
              MM: "%d tháng",
              y: "một năm",
              yy: "%d năm",
            },
            dayOfMonthOrdinalParse: /\d{1,2}/,
            ordinal: function (e) {
              return e;
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      4051: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("x-pseudo", {
            months:
              "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split(
                "_"
              ),
            monthsShort:
              "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split(
                "_"
              ),
            monthsParseExact: !0,
            weekdays:
              "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split(
                "_"
              ),
            weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
            weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
            weekdaysParseExact: !0,
            longDateFormat: {
              LT: "HH:mm",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY HH:mm",
              LLLL: "dddd, D MMMM YYYY HH:mm",
            },
            calendar: {
              sameDay: "[T~ódá~ý át] LT",
              nextDay: "[T~ómó~rró~w át] LT",
              nextWeek: "dddd [át] LT",
              lastDay: "[Ý~ést~érdá~ý át] LT",
              lastWeek: "[L~ást] dddd [át] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "í~ñ %s",
              past: "%s á~gó",
              s: "á ~féw ~sécó~ñds",
              ss: "%d s~écóñ~ds",
              m: "á ~míñ~úté",
              mm: "%d m~íñú~tés",
              h: "á~ñ hó~úr",
              hh: "%d h~óúrs",
              d: "á ~dáý",
              dd: "%d d~áýs",
              M: "á ~móñ~th",
              MM: "%d m~óñt~hs",
              y: "á ~ýéár",
              yy: "%d ý~éárs",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var t = e % 10;
              return (
                e +
                (1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th")
              );
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2218: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("yo", {
            months:
              "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split(
                "_"
              ),
            monthsShort:
              "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
            weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
            weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
            weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
            longDateFormat: {
              LT: "h:mm A",
              LTS: "h:mm:ss A",
              L: "DD/MM/YYYY",
              LL: "D MMMM YYYY",
              LLL: "D MMMM YYYY h:mm A",
              LLLL: "dddd, D MMMM YYYY h:mm A",
            },
            calendar: {
              sameDay: "[Ònì ni] LT",
              nextDay: "[Ọ̀la ni] LT",
              nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
              lastDay: "[Àna ni] LT",
              lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
              sameElse: "L",
            },
            relativeTime: {
              future: "ní %s",
              past: "%s kọjá",
              s: "ìsẹjú aayá die",
              ss: "aayá %d",
              m: "ìsẹjú kan",
              mm: "ìsẹjú %d",
              h: "wákati kan",
              hh: "wákati %d",
              d: "ọjọ́ kan",
              dd: "ọjọ́ %d",
              M: "osù kan",
              MM: "osù %d",
              y: "ọdún kan",
              yy: "ọdún %d",
            },
            dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
            ordinal: "ọjọ́ %d",
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      2648: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-cn", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日Ah点mm分",
              LLLL: "YYYY年M月D日ddddAh点mm分",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : e >= 11
                  ? e
                  : e + 12
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: function (e) {
                return e.week() !== this.week() ? "[下]dddLT" : "[本]dddLT";
              },
              lastDay: "[昨天]LT",
              lastWeek: function (e) {
                return this.week() !== e.week() ? "[上]dddLT" : "[本]dddLT";
              },
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "周";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s后",
              past: "%s前",
              s: "几秒",
              ss: "%d 秒",
              m: "1 分钟",
              mm: "%d 分钟",
              h: "1 小时",
              hh: "%d 小时",
              d: "1 天",
              dd: "%d 天",
              w: "1 周",
              ww: "%d 周",
              M: "1 个月",
              MM: "%d 个月",
              y: "1 年",
              yy: "%d 年",
            },
            week: { dow: 1, doy: 4 },
          });
        })(n(5093));
      },
      1632: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-hk", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1200
                ? "上午"
                : 1200 === a
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天]LT",
              nextDay: "[明天]LT",
              nextWeek: "[下]ddddLT",
              lastDay: "[昨天]LT",
              lastWeek: "[上]ddddLT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(5093));
      },
      1541: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-mo", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "DD/MM/YYYY",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "D/M/YYYY",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s內",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(5093));
      },
      304: function (e, t, n) {
        !(function (e) {
          "use strict";
          e.defineLocale("zh-tw", {
            months:
              "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split(
                "_"
              ),
            monthsShort:
              "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
            weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split(
              "_"
            ),
            weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
            weekdaysMin: "日_一_二_三_四_五_六".split("_"),
            longDateFormat: {
              LT: "HH:mm",
              LTS: "HH:mm:ss",
              L: "YYYY/MM/DD",
              LL: "YYYY年M月D日",
              LLL: "YYYY年M月D日 HH:mm",
              LLLL: "YYYY年M月D日dddd HH:mm",
              l: "YYYY/M/D",
              ll: "YYYY年M月D日",
              lll: "YYYY年M月D日 HH:mm",
              llll: "YYYY年M月D日dddd HH:mm",
            },
            meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
            meridiemHour: function (e, t) {
              return (
                12 === e && (e = 0),
                "凌晨" === t || "早上" === t || "上午" === t
                  ? e
                  : "中午" === t
                  ? e >= 11
                    ? e
                    : e + 12
                  : "下午" === t || "晚上" === t
                  ? e + 12
                  : void 0
              );
            },
            meridiem: function (e, t, n) {
              var a = 100 * e + t;
              return a < 600
                ? "凌晨"
                : a < 900
                ? "早上"
                : a < 1130
                ? "上午"
                : a < 1230
                ? "中午"
                : a < 1800
                ? "下午"
                : "晚上";
            },
            calendar: {
              sameDay: "[今天] LT",
              nextDay: "[明天] LT",
              nextWeek: "[下]dddd LT",
              lastDay: "[昨天] LT",
              lastWeek: "[上]dddd LT",
              sameElse: "L",
            },
            dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
            ordinal: function (e, t) {
              switch (t) {
                case "d":
                case "D":
                case "DDD":
                  return e + "日";
                case "M":
                  return e + "月";
                case "w":
                case "W":
                  return e + "週";
                default:
                  return e;
              }
            },
            relativeTime: {
              future: "%s後",
              past: "%s前",
              s: "幾秒",
              ss: "%d 秒",
              m: "1 分鐘",
              mm: "%d 分鐘",
              h: "1 小時",
              hh: "%d 小時",
              d: "1 天",
              dd: "%d 天",
              M: "1 個月",
              MM: "%d 個月",
              y: "1 年",
              yy: "%d 年",
            },
          });
        })(n(5093));
      },
      5358: (e, t, n) => {
        var a = {
          "./af": 5177,
          "./af.js": 5177,
          "./ar": 1509,
          "./ar-dz": 1488,
          "./ar-dz.js": 1488,
          "./ar-kw": 8676,
          "./ar-kw.js": 8676,
          "./ar-ly": 2353,
          "./ar-ly.js": 2353,
          "./ar-ma": 4496,
          "./ar-ma.js": 4496,
          "./ar-ps": 6947,
          "./ar-ps.js": 6947,
          "./ar-sa": 2682,
          "./ar-sa.js": 2682,
          "./ar-tn": 9756,
          "./ar-tn.js": 9756,
          "./ar.js": 1509,
          "./az": 5533,
          "./az.js": 5533,
          "./be": 8959,
          "./be.js": 8959,
          "./bg": 7777,
          "./bg.js": 7777,
          "./bm": 4903,
          "./bm.js": 4903,
          "./bn": 1290,
          "./bn-bd": 7357,
          "./bn-bd.js": 7357,
          "./bn.js": 1290,
          "./bo": 1545,
          "./bo.js": 1545,
          "./br": 1470,
          "./br.js": 1470,
          "./bs": 4429,
          "./bs.js": 4429,
          "./ca": 7306,
          "./ca.js": 7306,
          "./cs": 6464,
          "./cs.js": 6464,
          "./cv": 3635,
          "./cv.js": 3635,
          "./cy": 4226,
          "./cy.js": 4226,
          "./da": 3601,
          "./da.js": 3601,
          "./de": 7853,
          "./de-at": 6111,
          "./de-at.js": 6111,
          "./de-ch": 4697,
          "./de-ch.js": 4697,
          "./de.js": 7853,
          "./dv": 708,
          "./dv.js": 708,
          "./el": 4691,
          "./el.js": 4691,
          "./en-au": 3872,
          "./en-au.js": 3872,
          "./en-ca": 8298,
          "./en-ca.js": 8298,
          "./en-gb": 6195,
          "./en-gb.js": 6195,
          "./en-ie": 6584,
          "./en-ie.js": 6584,
          "./en-il": 5543,
          "./en-il.js": 5543,
          "./en-in": 9033,
          "./en-in.js": 9033,
          "./en-nz": 9402,
          "./en-nz.js": 9402,
          "./en-sg": 3004,
          "./en-sg.js": 3004,
          "./eo": 2934,
          "./eo.js": 2934,
          "./es": 7650,
          "./es-do": 838,
          "./es-do.js": 838,
          "./es-mx": 7730,
          "./es-mx.js": 7730,
          "./es-us": 6575,
          "./es-us.js": 6575,
          "./es.js": 7650,
          "./et": 3035,
          "./et.js": 3035,
          "./eu": 3508,
          "./eu.js": 3508,
          "./fa": 119,
          "./fa.js": 119,
          "./fi": 527,
          "./fi.js": 527,
          "./fil": 5995,
          "./fil.js": 5995,
          "./fo": 2477,
          "./fo.js": 2477,
          "./fr": 5498,
          "./fr-ca": 6435,
          "./fr-ca.js": 6435,
          "./fr-ch": 7892,
          "./fr-ch.js": 7892,
          "./fr.js": 5498,
          "./fy": 7071,
          "./fy.js": 7071,
          "./ga": 1734,
          "./ga.js": 1734,
          "./gd": 217,
          "./gd.js": 217,
          "./gl": 7329,
          "./gl.js": 7329,
          "./gom-deva": 2124,
          "./gom-deva.js": 2124,
          "./gom-latn": 3383,
          "./gom-latn.js": 3383,
          "./gu": 5050,
          "./gu.js": 5050,
          "./he": 1713,
          "./he.js": 1713,
          "./hi": 3861,
          "./hi.js": 3861,
          "./hr": 6308,
          "./hr.js": 6308,
          "./hu": 609,
          "./hu.js": 609,
          "./hy-am": 7160,
          "./hy-am.js": 7160,
          "./id": 4063,
          "./id.js": 4063,
          "./is": 9374,
          "./is.js": 9374,
          "./it": 8383,
          "./it-ch": 1827,
          "./it-ch.js": 1827,
          "./it.js": 8383,
          "./ja": 3827,
          "./ja.js": 3827,
          "./jv": 9722,
          "./jv.js": 9722,
          "./ka": 1794,
          "./ka.js": 1794,
          "./kk": 7088,
          "./kk.js": 7088,
          "./km": 6870,
          "./km.js": 6870,
          "./kn": 4451,
          "./kn.js": 4451,
          "./ko": 3164,
          "./ko.js": 3164,
          "./ku": 8174,
          "./ku-kmr": 6181,
          "./ku-kmr.js": 6181,
          "./ku.js": 8174,
          "./ky": 8474,
          "./ky.js": 8474,
          "./lb": 9680,
          "./lb.js": 9680,
          "./lo": 5867,
          "./lo.js": 5867,
          "./lt": 5766,
          "./lt.js": 5766,
          "./lv": 9532,
          "./lv.js": 9532,
          "./me": 8076,
          "./me.js": 8076,
          "./mi": 1848,
          "./mi.js": 1848,
          "./mk": 306,
          "./mk.js": 306,
          "./ml": 3739,
          "./ml.js": 3739,
          "./mn": 9053,
          "./mn.js": 9053,
          "./mr": 6169,
          "./mr.js": 6169,
          "./ms": 3386,
          "./ms-my": 2297,
          "./ms-my.js": 2297,
          "./ms.js": 3386,
          "./mt": 7075,
          "./mt.js": 7075,
          "./my": 2264,
          "./my.js": 2264,
          "./nb": 2274,
          "./nb.js": 2274,
          "./ne": 8235,
          "./ne.js": 8235,
          "./nl": 2572,
          "./nl-be": 3784,
          "./nl-be.js": 3784,
          "./nl.js": 2572,
          "./nn": 4566,
          "./nn.js": 4566,
          "./oc-lnc": 9330,
          "./oc-lnc.js": 9330,
          "./pa-in": 9849,
          "./pa-in.js": 9849,
          "./pl": 4418,
          "./pl.js": 4418,
          "./pt": 9834,
          "./pt-br": 8303,
          "./pt-br.js": 8303,
          "./pt.js": 9834,
          "./ro": 4457,
          "./ro.js": 4457,
          "./ru": 2271,
          "./ru.js": 2271,
          "./sd": 1221,
          "./sd.js": 1221,
          "./se": 3478,
          "./se.js": 3478,
          "./si": 7538,
          "./si.js": 7538,
          "./sk": 5784,
          "./sk.js": 5784,
          "./sl": 6637,
          "./sl.js": 6637,
          "./sq": 6794,
          "./sq.js": 6794,
          "./sr": 5719,
          "./sr-cyrl": 3322,
          "./sr-cyrl.js": 3322,
          "./sr.js": 5719,
          "./ss": 6e3,
          "./ss.js": 6e3,
          "./sv": 1011,
          "./sv.js": 1011,
          "./sw": 748,
          "./sw.js": 748,
          "./ta": 1025,
          "./ta.js": 1025,
          "./te": 1885,
          "./te.js": 1885,
          "./tet": 8861,
          "./tet.js": 8861,
          "./tg": 6571,
          "./tg.js": 6571,
          "./th": 5802,
          "./th.js": 5802,
          "./tk": 9527,
          "./tk.js": 9527,
          "./tl-ph": 9231,
          "./tl-ph.js": 9231,
          "./tlh": 1052,
          "./tlh.js": 1052,
          "./tr": 5096,
          "./tr.js": 5096,
          "./tzl": 9846,
          "./tzl.js": 9846,
          "./tzm": 1765,
          "./tzm-latn": 7711,
          "./tzm-latn.js": 7711,
          "./tzm.js": 1765,
          "./ug-cn": 8414,
          "./ug-cn.js": 8414,
          "./uk": 6618,
          "./uk.js": 6618,
          "./ur": 158,
          "./ur.js": 158,
          "./uz": 7609,
          "./uz-latn": 2475,
          "./uz-latn.js": 2475,
          "./uz.js": 7609,
          "./vi": 1135,
          "./vi.js": 1135,
          "./x-pseudo": 4051,
          "./x-pseudo.js": 4051,
          "./yo": 2218,
          "./yo.js": 2218,
          "./zh-cn": 2648,
          "./zh-cn.js": 2648,
          "./zh-hk": 1632,
          "./zh-hk.js": 1632,
          "./zh-mo": 1541,
          "./zh-mo.js": 1541,
          "./zh-tw": 304,
          "./zh-tw.js": 304,
        };
        function s(e) {
          var t = r(e);
          return n(t);
        }
        function r(e) {
          if (!n.o(a, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return a[e];
        }
        (s.keys = function () {
          return Object.keys(a);
        }),
          (s.resolve = r),
          (e.exports = s),
          (s.id = 5358);
      },
      5093: function (e, t, n) {
        (e = n.nmd(e)).exports = (function () {
          "use strict";
          var t, a;
          function s() {
            return t.apply(null, arguments);
          }
          function r(e) {
            return (
              e instanceof Array ||
              "[object Array]" === Object.prototype.toString.call(e)
            );
          }
          function i(e) {
            return (
              null != e &&
              "[object Object]" === Object.prototype.toString.call(e)
            );
          }
          function o(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
          }
          function d(e) {
            if (Object.getOwnPropertyNames)
              return 0 === Object.getOwnPropertyNames(e).length;
            var t;
            for (t in e) if (o(e, t)) return !1;
            return !0;
          }
          function u(e) {
            return void 0 === e;
          }
          function _(e) {
            return (
              "number" == typeof e ||
              "[object Number]" === Object.prototype.toString.call(e)
            );
          }
          function l(e) {
            return (
              e instanceof Date ||
              "[object Date]" === Object.prototype.toString.call(e)
            );
          }
          function m(e, t) {
            var n,
              a = [],
              s = e.length;
            for (n = 0; n < s; ++n) a.push(t(e[n], n));
            return a;
          }
          function c(e, t) {
            for (var n in t) o(t, n) && (e[n] = t[n]);
            return (
              o(t, "toString") && (e.toString = t.toString),
              o(t, "valueOf") && (e.valueOf = t.valueOf),
              e
            );
          }
          function h(e, t, n, a) {
            return Wt(e, t, n, a, !0).utc();
          }
          function f(e) {
            return (
              null == e._pf &&
                (e._pf = {
                  empty: !1,
                  unusedTokens: [],
                  unusedInput: [],
                  overflow: -2,
                  charsLeftOver: 0,
                  nullInput: !1,
                  invalidEra: null,
                  invalidMonth: null,
                  invalidFormat: !1,
                  userInvalidated: !1,
                  iso: !1,
                  parsedDateParts: [],
                  era: null,
                  meridiem: null,
                  rfc2822: !1,
                  weekdayMismatch: !1,
                }),
              e._pf
            );
          }
          function M(e) {
            var t = null,
              n = !1,
              s = e._d && !isNaN(e._d.getTime());
            return (
              s &&
                ((t = f(e)),
                (n = a.call(t.parsedDateParts, function (e) {
                  return null != e;
                })),
                (s =
                  t.overflow < 0 &&
                  !t.empty &&
                  !t.invalidEra &&
                  !t.invalidMonth &&
                  !t.invalidWeekday &&
                  !t.weekdayMismatch &&
                  !t.nullInput &&
                  !t.invalidFormat &&
                  !t.userInvalidated &&
                  (!t.meridiem || (t.meridiem && n))),
                e._strict &&
                  (s =
                    s &&
                    0 === t.charsLeftOver &&
                    0 === t.unusedTokens.length &&
                    void 0 === t.bigHour)),
              null != Object.isFrozen && Object.isFrozen(e)
                ? s
                : ((e._isValid = s), e._isValid)
            );
          }
          function p(e) {
            var t = h(NaN);
            return null != e ? c(f(t), e) : (f(t).userInvalidated = !0), t;
          }
          a = Array.prototype.some
            ? Array.prototype.some
            : function (e) {
                var t,
                  n = Object(this),
                  a = n.length >>> 0;
                for (t = 0; t < a; t++)
                  if (t in n && e.call(this, n[t], t, n)) return !0;
                return !1;
              };
          var y = (s.momentProperties = []),
            L = !1;
          function Y(e, t) {
            var n,
              a,
              s,
              r = y.length;
            if (
              (u(t._isAMomentObject) ||
                (e._isAMomentObject = t._isAMomentObject),
              u(t._i) || (e._i = t._i),
              u(t._f) || (e._f = t._f),
              u(t._l) || (e._l = t._l),
              u(t._strict) || (e._strict = t._strict),
              u(t._tzm) || (e._tzm = t._tzm),
              u(t._isUTC) || (e._isUTC = t._isUTC),
              u(t._offset) || (e._offset = t._offset),
              u(t._pf) || (e._pf = f(t)),
              u(t._locale) || (e._locale = t._locale),
              r > 0)
            )
              for (n = 0; n < r; n++) u((s = t[(a = y[n])])) || (e[a] = s);
            return e;
          }
          function g(e) {
            Y(this, e),
              (this._d = new Date(null != e._d ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              !1 === L && ((L = !0), s.updateOffset(this), (L = !1));
          }
          function k(e) {
            return e instanceof g || (null != e && null != e._isAMomentObject);
          }
          function D(e) {
            !1 === s.suppressDeprecationWarnings &&
              "undefined" != typeof console &&
              console.warn &&
              console.warn("Deprecation warning: " + e);
          }
          function v(e, t) {
            var n = !0;
            return c(function () {
              if (
                (null != s.deprecationHandler && s.deprecationHandler(null, e),
                n)
              ) {
                var a,
                  r,
                  i,
                  d = [],
                  u = arguments.length;
                for (r = 0; r < u; r++) {
                  if (((a = ""), "object" == typeof arguments[r])) {
                    for (i in ((a += "\n[" + r + "] "), arguments[0]))
                      o(arguments[0], i) &&
                        (a += i + ": " + arguments[0][i] + ", ");
                    a = a.slice(0, -2);
                  } else a = arguments[r];
                  d.push(a);
                }
                D(
                  e +
                    "\nArguments: " +
                    Array.prototype.slice.call(d).join("") +
                    "\n" +
                    new Error().stack
                ),
                  (n = !1);
              }
              return t.apply(this, arguments);
            }, t);
          }
          var T,
            w = {};
          function b(e, t) {
            null != s.deprecationHandler && s.deprecationHandler(e, t),
              w[e] || (D(t), (w[e] = !0));
          }
          function S(e) {
            return (
              ("undefined" != typeof Function && e instanceof Function) ||
              "[object Function]" === Object.prototype.toString.call(e)
            );
          }
          function H(e, t) {
            var n,
              a = c({}, e);
            for (n in t)
              o(t, n) &&
                (i(e[n]) && i(t[n])
                  ? ((a[n] = {}), c(a[n], e[n]), c(a[n], t[n]))
                  : null != t[n]
                  ? (a[n] = t[n])
                  : delete a[n]);
            for (n in e) o(e, n) && !o(t, n) && i(e[n]) && (a[n] = c({}, a[n]));
            return a;
          }
          function x(e) {
            null != e && this.set(e);
          }
          (s.suppressDeprecationWarnings = !1),
            (s.deprecationHandler = null),
            (T = Object.keys
              ? Object.keys
              : function (e) {
                  var t,
                    n = [];
                  for (t in e) o(e, t) && n.push(t);
                  return n;
                });
          function j(e, t, n) {
            var a = "" + Math.abs(e),
              s = t - a.length;
            return (
              (e >= 0 ? (n ? "+" : "") : "-") +
              Math.pow(10, Math.max(0, s)).toString().substr(1) +
              a
            );
          }
          var O =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            P = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            W = {},
            E = {};
          function A(e, t, n, a) {
            var s = a;
            "string" == typeof a &&
              (s = function () {
                return this[a]();
              }),
              e && (E[e] = s),
              t &&
                (E[t[0]] = function () {
                  return j(s.apply(this, arguments), t[1], t[2]);
                }),
              n &&
                (E[n] = function () {
                  return this.localeData().ordinal(s.apply(this, arguments), e);
                });
          }
          function F(e, t) {
            return e.isValid()
              ? ((t = N(t, e.localeData())),
                (W[t] =
                  W[t] ||
                  (function (e) {
                    var t,
                      n,
                      a,
                      s = e.match(O);
                    for (t = 0, n = s.length; t < n; t++)
                      E[s[t]]
                        ? (s[t] = E[s[t]])
                        : (s[t] = (a = s[t]).match(/\[[\s\S]/)
                            ? a.replace(/^\[|\]$/g, "")
                            : a.replace(/\\/g, ""));
                    return function (t) {
                      var a,
                        r = "";
                      for (a = 0; a < n; a++)
                        r += S(s[a]) ? s[a].call(t, e) : s[a];
                      return r;
                    };
                  })(t)),
                W[t](e))
              : e.localeData().invalidDate();
          }
          function N(e, t) {
            var n = 5;
            function a(e) {
              return t.longDateFormat(e) || e;
            }
            for (P.lastIndex = 0; n >= 0 && P.test(e); )
              (e = e.replace(P, a)), (P.lastIndex = 0), (n -= 1);
            return e;
          }
          var C = {
            D: "date",
            dates: "date",
            date: "date",
            d: "day",
            days: "day",
            day: "day",
            e: "weekday",
            weekdays: "weekday",
            weekday: "weekday",
            E: "isoWeekday",
            isoweekdays: "isoWeekday",
            isoweekday: "isoWeekday",
            DDD: "dayOfYear",
            dayofyears: "dayOfYear",
            dayofyear: "dayOfYear",
            h: "hour",
            hours: "hour",
            hour: "hour",
            ms: "millisecond",
            milliseconds: "millisecond",
            millisecond: "millisecond",
            m: "minute",
            minutes: "minute",
            minute: "minute",
            M: "month",
            months: "month",
            month: "month",
            Q: "quarter",
            quarters: "quarter",
            quarter: "quarter",
            s: "second",
            seconds: "second",
            second: "second",
            gg: "weekYear",
            weekyears: "weekYear",
            weekyear: "weekYear",
            GG: "isoWeekYear",
            isoweekyears: "isoWeekYear",
            isoweekyear: "isoWeekYear",
            w: "week",
            weeks: "week",
            week: "week",
            W: "isoWeek",
            isoweeks: "isoWeek",
            isoweek: "isoWeek",
            y: "year",
            years: "year",
            year: "year",
          };
          function z(e) {
            return "string" == typeof e ? C[e] || C[e.toLowerCase()] : void 0;
          }
          function R(e) {
            var t,
              n,
              a = {};
            for (n in e) o(e, n) && (t = z(n)) && (a[t] = e[n]);
            return a;
          }
          var J = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1,
          };
          var I,
            q = /\d/,
            U = /\d\d/,
            G = /\d{3}/,
            B = /\d{4}/,
            V = /[+-]?\d{6}/,
            $ = /\d\d?/,
            K = /\d\d\d\d?/,
            Z = /\d\d\d\d\d\d?/,
            X = /\d{1,3}/,
            Q = /\d{1,4}/,
            ee = /[+-]?\d{1,6}/,
            te = /\d+/,
            ne = /[+-]?\d+/,
            ae = /Z|[+-]\d\d:?\d\d/gi,
            se = /Z|[+-]\d\d(?::?\d\d)?/gi,
            re =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            ie = /^[1-9]\d?/,
            oe = /^([1-9]\d|\d)/;
          function de(e, t, n) {
            I[e] = S(t)
              ? t
              : function (e, a) {
                  return e && n ? n : t;
                };
          }
          function ue(e, t) {
            return o(I, e)
              ? I[e](t._strict, t._locale)
              : new RegExp(
                  _e(
                    e
                      .replace("\\", "")
                      .replace(
                        /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                        function (e, t, n, a, s) {
                          return t || n || a || s;
                        }
                      )
                  )
                );
          }
          function _e(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
          }
          function le(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e);
          }
          function me(e) {
            var t = +e,
              n = 0;
            return 0 !== t && isFinite(t) && (n = le(t)), n;
          }
          I = {};
          var ce = {};
          function he(e, t) {
            var n,
              a,
              s = t;
            for (
              "string" == typeof e && (e = [e]),
                _(t) &&
                  (s = function (e, n) {
                    n[t] = me(e);
                  }),
                a = e.length,
                n = 0;
              n < a;
              n++
            )
              ce[e[n]] = s;
          }
          function fe(e, t) {
            he(e, function (e, n, a, s) {
              (a._w = a._w || {}), t(e, a._w, a, s);
            });
          }
          function Me(e, t, n) {
            null != t && o(ce, e) && ce[e](t, n._a, n, e);
          }
          function pe(e) {
            return (e % 4 == 0 && e % 100 != 0) || e % 400 == 0;
          }
          var ye = 0,
            Le = 1,
            Ye = 2,
            ge = 3,
            ke = 4,
            De = 5,
            ve = 6,
            Te = 7,
            we = 8;
          function be(e) {
            return pe(e) ? 366 : 365;
          }
          A("Y", 0, 0, function () {
            var e = this.year();
            return e <= 9999 ? j(e, 4) : "+" + e;
          }),
            A(0, ["YY", 2], 0, function () {
              return this.year() % 100;
            }),
            A(0, ["YYYY", 4], 0, "year"),
            A(0, ["YYYYY", 5], 0, "year"),
            A(0, ["YYYYYY", 6, !0], 0, "year"),
            de("Y", ne),
            de("YY", $, U),
            de("YYYY", Q, B),
            de("YYYYY", ee, V),
            de("YYYYYY", ee, V),
            he(["YYYYY", "YYYYYY"], ye),
            he("YYYY", function (e, t) {
              t[ye] = 2 === e.length ? s.parseTwoDigitYear(e) : me(e);
            }),
            he("YY", function (e, t) {
              t[ye] = s.parseTwoDigitYear(e);
            }),
            he("Y", function (e, t) {
              t[ye] = parseInt(e, 10);
            }),
            (s.parseTwoDigitYear = function (e) {
              return me(e) + (me(e) > 68 ? 1900 : 2e3);
            });
          var Se,
            He = xe("FullYear", !0);
          function xe(e, t) {
            return function (n) {
              return null != n
                ? (Oe(this, e, n), s.updateOffset(this, t), this)
                : je(this, e);
            };
          }
          function je(e, t) {
            if (!e.isValid()) return NaN;
            var n = e._d,
              a = e._isUTC;
            switch (t) {
              case "Milliseconds":
                return a ? n.getUTCMilliseconds() : n.getMilliseconds();
              case "Seconds":
                return a ? n.getUTCSeconds() : n.getSeconds();
              case "Minutes":
                return a ? n.getUTCMinutes() : n.getMinutes();
              case "Hours":
                return a ? n.getUTCHours() : n.getHours();
              case "Date":
                return a ? n.getUTCDate() : n.getDate();
              case "Day":
                return a ? n.getUTCDay() : n.getDay();
              case "Month":
                return a ? n.getUTCMonth() : n.getMonth();
              case "FullYear":
                return a ? n.getUTCFullYear() : n.getFullYear();
              default:
                return NaN;
            }
          }
          function Oe(e, t, n) {
            var a, s, r, i, o;
            if (e.isValid() && !isNaN(n)) {
              switch (((a = e._d), (s = e._isUTC), t)) {
                case "Milliseconds":
                  return void (s
                    ? a.setUTCMilliseconds(n)
                    : a.setMilliseconds(n));
                case "Seconds":
                  return void (s ? a.setUTCSeconds(n) : a.setSeconds(n));
                case "Minutes":
                  return void (s ? a.setUTCMinutes(n) : a.setMinutes(n));
                case "Hours":
                  return void (s ? a.setUTCHours(n) : a.setHours(n));
                case "Date":
                  return void (s ? a.setUTCDate(n) : a.setDate(n));
                case "FullYear":
                  break;
                default:
                  return;
              }
              (r = n),
                (i = e.month()),
                (o = 29 !== (o = e.date()) || 1 !== i || pe(r) ? o : 28),
                s ? a.setUTCFullYear(r, i, o) : a.setFullYear(r, i, o);
            }
          }
          function Pe(e, t) {
            if (isNaN(e) || isNaN(t)) return NaN;
            var n,
              a = ((t % (n = 12)) + n) % n;
            return (
              (e += (t - a) / 12),
              1 === a ? (pe(e) ? 29 : 28) : 31 - ((a % 7) % 2)
            );
          }
          (Se = Array.prototype.indexOf
            ? Array.prototype.indexOf
            : function (e) {
                var t;
                for (t = 0; t < this.length; ++t) if (this[t] === e) return t;
                return -1;
              }),
            A("M", ["MM", 2], "Mo", function () {
              return this.month() + 1;
            }),
            A("MMM", 0, 0, function (e) {
              return this.localeData().monthsShort(this, e);
            }),
            A("MMMM", 0, 0, function (e) {
              return this.localeData().months(this, e);
            }),
            de("M", $, ie),
            de("MM", $, U),
            de("MMM", function (e, t) {
              return t.monthsShortRegex(e);
            }),
            de("MMMM", function (e, t) {
              return t.monthsRegex(e);
            }),
            he(["M", "MM"], function (e, t) {
              t[Le] = me(e) - 1;
            }),
            he(["MMM", "MMMM"], function (e, t, n, a) {
              var s = n._locale.monthsParse(e, a, n._strict);
              null != s ? (t[Le] = s) : (f(n).invalidMonth = e);
            });
          var We =
              "January_February_March_April_May_June_July_August_September_October_November_December".split(
                "_"
              ),
            Ee = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
            Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            Fe = re,
            Ne = re;
          function Ce(e, t, n) {
            var a,
              s,
              r,
              i = e.toLocaleLowerCase();
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  a = 0;
                a < 12;
                ++a
              )
                (r = h([2e3, a])),
                  (this._shortMonthsParse[a] = this.monthsShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[a] = this.months(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "MMM" === t
                ? -1 !== (s = Se.call(this._shortMonthsParse, i))
                  ? s
                  : null
                : -1 !== (s = Se.call(this._longMonthsParse, i))
                ? s
                : null
              : "MMM" === t
              ? -1 !== (s = Se.call(this._shortMonthsParse, i)) ||
                -1 !== (s = Se.call(this._longMonthsParse, i))
                ? s
                : null
              : -1 !== (s = Se.call(this._longMonthsParse, i)) ||
                -1 !== (s = Se.call(this._shortMonthsParse, i))
              ? s
              : null;
          }
          function ze(e, t) {
            if (!e.isValid()) return e;
            if ("string" == typeof t)
              if (/^\d+$/.test(t)) t = me(t);
              else if (!_((t = e.localeData().monthsParse(t)))) return e;
            var n = t,
              a = e.date();
            return (
              (a = a < 29 ? a : Math.min(a, Pe(e.year(), n))),
              e._isUTC ? e._d.setUTCMonth(n, a) : e._d.setMonth(n, a),
              e
            );
          }
          function Re(e) {
            return null != e
              ? (ze(this, e), s.updateOffset(this, !0), this)
              : je(this, "Month");
          }
          function Je() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a,
              s,
              r = [],
              i = [],
              o = [];
            for (t = 0; t < 12; t++)
              (n = h([2e3, t])),
                (a = _e(this.monthsShort(n, ""))),
                (s = _e(this.months(n, ""))),
                r.push(a),
                i.push(s),
                o.push(s),
                o.push(a);
            r.sort(e),
              i.sort(e),
              o.sort(e),
              (this._monthsRegex = new RegExp("^(" + o.join("|") + ")", "i")),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              )),
              (this._monthsShortStrictRegex = new RegExp(
                "^(" + r.join("|") + ")",
                "i"
              ));
          }
          function Ie(e, t, n, a, s, r, i) {
            var o;
            return (
              e < 100 && e >= 0
                ? ((o = new Date(e + 400, t, n, a, s, r, i)),
                  isFinite(o.getFullYear()) && o.setFullYear(e))
                : (o = new Date(e, t, n, a, s, r, i)),
              o
            );
          }
          function qe(e) {
            var t, n;
            return (
              e < 100 && e >= 0
                ? (((n = Array.prototype.slice.call(arguments))[0] = e + 400),
                  (t = new Date(Date.UTC.apply(null, n))),
                  isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e))
                : (t = new Date(Date.UTC.apply(null, arguments))),
              t
            );
          }
          function Ue(e, t, n) {
            var a = 7 + t - n;
            return (-(7 + qe(e, 0, a).getUTCDay() - t) % 7) + a - 1;
          }
          function Ge(e, t, n, a, s) {
            var r,
              i,
              o = 1 + 7 * (t - 1) + ((7 + n - a) % 7) + Ue(e, a, s);
            return (
              o <= 0
                ? (i = be((r = e - 1)) + o)
                : o > be(e)
                ? ((r = e + 1), (i = o - be(e)))
                : ((r = e), (i = o)),
              { year: r, dayOfYear: i }
            );
          }
          function Be(e, t, n) {
            var a,
              s,
              r = Ue(e.year(), t, n),
              i = Math.floor((e.dayOfYear() - r - 1) / 7) + 1;
            return (
              i < 1
                ? (a = i + Ve((s = e.year() - 1), t, n))
                : i > Ve(e.year(), t, n)
                ? ((a = i - Ve(e.year(), t, n)), (s = e.year() + 1))
                : ((s = e.year()), (a = i)),
              { week: a, year: s }
            );
          }
          function Ve(e, t, n) {
            var a = Ue(e, t, n),
              s = Ue(e + 1, t, n);
            return (be(e) - a + s) / 7;
          }
          A("w", ["ww", 2], "wo", "week"),
            A("W", ["WW", 2], "Wo", "isoWeek"),
            de("w", $, ie),
            de("ww", $, U),
            de("W", $, ie),
            de("WW", $, U),
            fe(["w", "ww", "W", "WW"], function (e, t, n, a) {
              t[a.substr(0, 1)] = me(e);
            });
          function $e(e, t) {
            return e.slice(t, 7).concat(e.slice(0, t));
          }
          A("d", 0, "do", "day"),
            A("dd", 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e);
            }),
            A("ddd", 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e);
            }),
            A("dddd", 0, 0, function (e) {
              return this.localeData().weekdays(this, e);
            }),
            A("e", 0, 0, "weekday"),
            A("E", 0, 0, "isoWeekday"),
            de("d", $),
            de("e", $),
            de("E", $),
            de("dd", function (e, t) {
              return t.weekdaysMinRegex(e);
            }),
            de("ddd", function (e, t) {
              return t.weekdaysShortRegex(e);
            }),
            de("dddd", function (e, t) {
              return t.weekdaysRegex(e);
            }),
            fe(["dd", "ddd", "dddd"], function (e, t, n, a) {
              var s = n._locale.weekdaysParse(e, a, n._strict);
              null != s ? (t.d = s) : (f(n).invalidWeekday = e);
            }),
            fe(["d", "e", "E"], function (e, t, n, a) {
              t[a] = me(e);
            });
          var Ke =
              "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
                "_"
              ),
            Ze = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
            Xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
            Qe = re,
            et = re,
            tt = re;
          function nt(e, t, n) {
            var a,
              s,
              r,
              i = e.toLocaleLowerCase();
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  a = 0;
                a < 7;
                ++a
              )
                (r = h([2e3, 1]).day(a)),
                  (this._minWeekdaysParse[a] = this.weekdaysMin(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[a] = this.weekdaysShort(
                    r,
                    ""
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[a] = this.weekdays(
                    r,
                    ""
                  ).toLocaleLowerCase());
            return n
              ? "dddd" === t
                ? -1 !== (s = Se.call(this._weekdaysParse, i))
                  ? s
                  : null
                : "ddd" === t
                ? -1 !== (s = Se.call(this._shortWeekdaysParse, i))
                  ? s
                  : null
                : -1 !== (s = Se.call(this._minWeekdaysParse, i))
                ? s
                : null
              : "dddd" === t
              ? -1 !== (s = Se.call(this._weekdaysParse, i)) ||
                -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ||
                -1 !== (s = Se.call(this._minWeekdaysParse, i))
                ? s
                : null
              : "ddd" === t
              ? -1 !== (s = Se.call(this._shortWeekdaysParse, i)) ||
                -1 !== (s = Se.call(this._weekdaysParse, i)) ||
                -1 !== (s = Se.call(this._minWeekdaysParse, i))
                ? s
                : null
              : -1 !== (s = Se.call(this._minWeekdaysParse, i)) ||
                -1 !== (s = Se.call(this._weekdaysParse, i)) ||
                -1 !== (s = Se.call(this._shortWeekdaysParse, i))
              ? s
              : null;
          }
          function at() {
            function e(e, t) {
              return t.length - e.length;
            }
            var t,
              n,
              a,
              s,
              r,
              i = [],
              o = [],
              d = [],
              u = [];
            for (t = 0; t < 7; t++)
              (n = h([2e3, 1]).day(t)),
                (a = _e(this.weekdaysMin(n, ""))),
                (s = _e(this.weekdaysShort(n, ""))),
                (r = _e(this.weekdays(n, ""))),
                i.push(a),
                o.push(s),
                d.push(r),
                u.push(a),
                u.push(s),
                u.push(r);
            i.sort(e),
              o.sort(e),
              d.sort(e),
              u.sort(e),
              (this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")", "i")),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                "^(" + d.join("|") + ")",
                "i"
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                "^(" + i.join("|") + ")",
                "i"
              ));
          }
          function st() {
            return this.hours() % 12 || 12;
          }
          function rt(e, t) {
            A(e, 0, 0, function () {
              return this.localeData().meridiem(
                this.hours(),
                this.minutes(),
                t
              );
            });
          }
          function it(e, t) {
            return t._meridiemParse;
          }
          A("H", ["HH", 2], 0, "hour"),
            A("h", ["hh", 2], 0, st),
            A("k", ["kk", 2], 0, function () {
              return this.hours() || 24;
            }),
            A("hmm", 0, 0, function () {
              return "" + st.apply(this) + j(this.minutes(), 2);
            }),
            A("hmmss", 0, 0, function () {
              return (
                "" +
                st.apply(this) +
                j(this.minutes(), 2) +
                j(this.seconds(), 2)
              );
            }),
            A("Hmm", 0, 0, function () {
              return "" + this.hours() + j(this.minutes(), 2);
            }),
            A("Hmmss", 0, 0, function () {
              return (
                "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
              );
            }),
            rt("a", !0),
            rt("A", !1),
            de("a", it),
            de("A", it),
            de("H", $, oe),
            de("h", $, ie),
            de("k", $, ie),
            de("HH", $, U),
            de("hh", $, U),
            de("kk", $, U),
            de("hmm", K),
            de("hmmss", Z),
            de("Hmm", K),
            de("Hmmss", Z),
            he(["H", "HH"], ge),
            he(["k", "kk"], function (e, t, n) {
              var a = me(e);
              t[ge] = 24 === a ? 0 : a;
            }),
            he(["a", "A"], function (e, t, n) {
              (n._isPm = n._locale.isPM(e)), (n._meridiem = e);
            }),
            he(["h", "hh"], function (e, t, n) {
              (t[ge] = me(e)), (f(n).bigHour = !0);
            }),
            he("hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[ge] = me(e.substr(0, a))),
                (t[ke] = me(e.substr(a))),
                (f(n).bigHour = !0);
            }),
            he("hmmss", function (e, t, n) {
              var a = e.length - 4,
                s = e.length - 2;
              (t[ge] = me(e.substr(0, a))),
                (t[ke] = me(e.substr(a, 2))),
                (t[De] = me(e.substr(s))),
                (f(n).bigHour = !0);
            }),
            he("Hmm", function (e, t, n) {
              var a = e.length - 2;
              (t[ge] = me(e.substr(0, a))), (t[ke] = me(e.substr(a)));
            }),
            he("Hmmss", function (e, t, n) {
              var a = e.length - 4,
                s = e.length - 2;
              (t[ge] = me(e.substr(0, a))),
                (t[ke] = me(e.substr(a, 2))),
                (t[De] = me(e.substr(s)));
            });
          var ot = xe("Hours", !0);
          var dt,
            ut = {
              calendar: {
                sameDay: "[Today at] LT",
                nextDay: "[Tomorrow at] LT",
                nextWeek: "dddd [at] LT",
                lastDay: "[Yesterday at] LT",
                lastWeek: "[Last] dddd [at] LT",
                sameElse: "L",
              },
              longDateFormat: {
                LTS: "h:mm:ss A",
                LT: "h:mm A",
                L: "MM/DD/YYYY",
                LL: "MMMM D, YYYY",
                LLL: "MMMM D, YYYY h:mm A",
                LLLL: "dddd, MMMM D, YYYY h:mm A",
              },
              invalidDate: "Invalid date",
              ordinal: "%d",
              dayOfMonthOrdinalParse: /\d{1,2}/,
              relativeTime: {
                future: "in %s",
                past: "%s ago",
                s: "a few seconds",
                ss: "%d seconds",
                m: "a minute",
                mm: "%d minutes",
                h: "an hour",
                hh: "%d hours",
                d: "a day",
                dd: "%d days",
                w: "a week",
                ww: "%d weeks",
                M: "a month",
                MM: "%d months",
                y: "a year",
                yy: "%d years",
              },
              months: We,
              monthsShort: Ee,
              week: { dow: 0, doy: 6 },
              weekdays: Ke,
              weekdaysMin: Xe,
              weekdaysShort: Ze,
              meridiemParse: /[ap]\.?m?\.?/i,
            },
            _t = {},
            lt = {};
          function mt(e, t) {
            var n,
              a = Math.min(e.length, t.length);
            for (n = 0; n < a; n += 1) if (e[n] !== t[n]) return n;
            return a;
          }
          function ct(e) {
            return e ? e.toLowerCase().replace("_", "-") : e;
          }
          function ht(t) {
            var a = null;
            if (
              void 0 === _t[t] &&
              e &&
              e.exports &&
              (function (e) {
                return !(!e || !e.match("^[^/\\\\]*$"));
              })(t)
            )
              try {
                (a = dt._abbr), n(5358)("./" + t), ft(a);
              } catch (e) {
                _t[t] = null;
              }
            return _t[t];
          }
          function ft(e, t) {
            var n;
            return (
              e &&
                ((n = u(t) ? pt(e) : Mt(e, t))
                  ? (dt = n)
                  : "undefined" != typeof console &&
                    console.warn &&
                    console.warn(
                      "Locale " + e + " not found. Did you forget to load it?"
                    )),
              dt._abbr
            );
          }
          function Mt(e, t) {
            if (null !== t) {
              var n,
                a = ut;
              if (((t.abbr = e), null != _t[e]))
                b(
                  "defineLocaleOverride",
                  "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
                ),
                  (a = _t[e]._config);
              else if (null != t.parentLocale)
                if (null != _t[t.parentLocale]) a = _t[t.parentLocale]._config;
                else {
                  if (null == (n = ht(t.parentLocale)))
                    return (
                      lt[t.parentLocale] || (lt[t.parentLocale] = []),
                      lt[t.parentLocale].push({ name: e, config: t }),
                      null
                    );
                  a = n._config;
                }
              return (
                (_t[e] = new x(H(a, t))),
                lt[e] &&
                  lt[e].forEach(function (e) {
                    Mt(e.name, e.config);
                  }),
                ft(e),
                _t[e]
              );
            }
            return delete _t[e], null;
          }
          function pt(e) {
            var t;
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return dt;
            if (!r(e)) {
              if ((t = ht(e))) return t;
              e = [e];
            }
            return (function (e) {
              for (var t, n, a, s, r = 0; r < e.length; ) {
                for (
                  t = (s = ct(e[r]).split("-")).length,
                    n = (n = ct(e[r + 1])) ? n.split("-") : null;
                  t > 0;

                ) {
                  if ((a = ht(s.slice(0, t).join("-")))) return a;
                  if (n && n.length >= t && mt(s, n) >= t - 1) break;
                  t--;
                }
                r++;
              }
              return dt;
            })(e);
          }
          function yt(e) {
            var t,
              n = e._a;
            return (
              n &&
                -2 === f(e).overflow &&
                ((t =
                  n[Le] < 0 || n[Le] > 11
                    ? Le
                    : n[Ye] < 1 || n[Ye] > Pe(n[ye], n[Le])
                    ? Ye
                    : n[ge] < 0 ||
                      n[ge] > 24 ||
                      (24 === n[ge] &&
                        (0 !== n[ke] || 0 !== n[De] || 0 !== n[ve]))
                    ? ge
                    : n[ke] < 0 || n[ke] > 59
                    ? ke
                    : n[De] < 0 || n[De] > 59
                    ? De
                    : n[ve] < 0 || n[ve] > 999
                    ? ve
                    : -1),
                f(e)._overflowDayOfYear && (t < ye || t > Ye) && (t = Ye),
                f(e)._overflowWeeks && -1 === t && (t = Te),
                f(e)._overflowWeekday && -1 === t && (t = we),
                (f(e).overflow = t)),
              e
            );
          }
          var Lt =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            Yt =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            gt = /Z|[+-]\d\d(?::?\d\d)?/,
            kt = [
              ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
              ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
              ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
              ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
              ["YYYY-DDD", /\d{4}-\d{3}/],
              ["YYYY-MM", /\d{4}-\d\d/, !1],
              ["YYYYYYMMDD", /[+-]\d{10}/],
              ["YYYYMMDD", /\d{8}/],
              ["GGGG[W]WWE", /\d{4}W\d{3}/],
              ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
              ["YYYYDDD", /\d{7}/],
              ["YYYYMM", /\d{6}/, !1],
              ["YYYY", /\d{4}/, !1],
            ],
            Dt = [
              ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
              ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
              ["HH:mm:ss", /\d\d:\d\d:\d\d/],
              ["HH:mm", /\d\d:\d\d/],
              ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
              ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
              ["HHmmss", /\d\d\d\d\d\d/],
              ["HHmm", /\d\d\d\d/],
              ["HH", /\d\d/],
            ],
            vt = /^\/?Date\((-?\d+)/i,
            Tt =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            wt = {
              UT: 0,
              GMT: 0,
              EDT: -240,
              EST: -300,
              CDT: -300,
              CST: -360,
              MDT: -360,
              MST: -420,
              PDT: -420,
              PST: -480,
            };
          function bt(e) {
            var t,
              n,
              a,
              s,
              r,
              i,
              o = e._i,
              d = Lt.exec(o) || Yt.exec(o),
              u = kt.length,
              _ = Dt.length;
            if (d) {
              for (f(e).iso = !0, t = 0, n = u; t < n; t++)
                if (kt[t][1].exec(d[1])) {
                  (s = kt[t][0]), (a = !1 !== kt[t][2]);
                  break;
                }
              if (null == s) return void (e._isValid = !1);
              if (d[3]) {
                for (t = 0, n = _; t < n; t++)
                  if (Dt[t][1].exec(d[3])) {
                    r = (d[2] || " ") + Dt[t][0];
                    break;
                  }
                if (null == r) return void (e._isValid = !1);
              }
              if (!a && null != r) return void (e._isValid = !1);
              if (d[4]) {
                if (!gt.exec(d[4])) return void (e._isValid = !1);
                i = "Z";
              }
              (e._f = s + (r || "") + (i || "")), Ot(e);
            } else e._isValid = !1;
          }
          function St(e) {
            var t = parseInt(e, 10);
            return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t;
          }
          function Ht(e) {
            var t,
              n,
              a,
              s,
              r,
              i,
              o,
              d,
              u = Tt.exec(
                e._i
                  .replace(/\([^()]*\)|[\n\t]/g, " ")
                  .replace(/(\s\s+)/g, " ")
                  .replace(/^\s\s*/, "")
                  .replace(/\s\s*$/, "")
              );
            if (u) {
              if (
                ((n = u[4]),
                (a = u[3]),
                (s = u[2]),
                (r = u[5]),
                (i = u[6]),
                (o = u[7]),
                (d = [
                  St(n),
                  Ee.indexOf(a),
                  parseInt(s, 10),
                  parseInt(r, 10),
                  parseInt(i, 10),
                ]),
                o && d.push(parseInt(o, 10)),
                (t = d),
                !(function (e, t, n) {
                  return (
                    !e ||
                    Ze.indexOf(e) === new Date(t[0], t[1], t[2]).getDay() ||
                    ((f(n).weekdayMismatch = !0), (n._isValid = !1), !1)
                  );
                })(u[1], t, e))
              )
                return;
              (e._a = t),
                (e._tzm = (function (e, t, n) {
                  if (e) return wt[e];
                  if (t) return 0;
                  var a = parseInt(n, 10),
                    s = a % 100;
                  return ((a - s) / 100) * 60 + s;
                })(u[8], u[9], u[10])),
                (e._d = qe.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (f(e).rfc2822 = !0);
            } else e._isValid = !1;
          }
          function xt(e, t, n) {
            return null != e ? e : null != t ? t : n;
          }
          function jt(e) {
            var t,
              n,
              a,
              r,
              i,
              o = [];
            if (!e._d) {
              for (
                a = (function (e) {
                  var t = new Date(s.now());
                  return e._useUTC
                    ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()]
                    : [t.getFullYear(), t.getMonth(), t.getDate()];
                })(e),
                  e._w &&
                    null == e._a[Ye] &&
                    null == e._a[Le] &&
                    (function (e) {
                      var t, n, a, s, r, i, o, d, u;
                      null != (t = e._w).GG || null != t.W || null != t.E
                        ? ((r = 1),
                          (i = 4),
                          (n = xt(t.GG, e._a[ye], Be(Et(), 1, 4).year)),
                          (a = xt(t.W, 1)),
                          ((s = xt(t.E, 1)) < 1 || s > 7) && (d = !0))
                        : ((r = e._locale._week.dow),
                          (i = e._locale._week.doy),
                          (u = Be(Et(), r, i)),
                          (n = xt(t.gg, e._a[ye], u.year)),
                          (a = xt(t.w, u.week)),
                          null != t.d
                            ? ((s = t.d) < 0 || s > 6) && (d = !0)
                            : null != t.e
                            ? ((s = t.e + r), (t.e < 0 || t.e > 6) && (d = !0))
                            : (s = r)),
                        a < 1 || a > Ve(n, r, i)
                          ? (f(e)._overflowWeeks = !0)
                          : null != d
                          ? (f(e)._overflowWeekday = !0)
                          : ((o = Ge(n, a, s, r, i)),
                            (e._a[ye] = o.year),
                            (e._dayOfYear = o.dayOfYear));
                    })(e),
                  null != e._dayOfYear &&
                    ((i = xt(e._a[ye], a[ye])),
                    (e._dayOfYear > be(i) || 0 === e._dayOfYear) &&
                      (f(e)._overflowDayOfYear = !0),
                    (n = qe(i, 0, e._dayOfYear)),
                    (e._a[Le] = n.getUTCMonth()),
                    (e._a[Ye] = n.getUTCDate())),
                  t = 0;
                t < 3 && null == e._a[t];
                ++t
              )
                e._a[t] = o[t] = a[t];
              for (; t < 7; t++)
                e._a[t] = o[t] = null == e._a[t] ? (2 === t ? 1 : 0) : e._a[t];
              24 === e._a[ge] &&
                0 === e._a[ke] &&
                0 === e._a[De] &&
                0 === e._a[ve] &&
                ((e._nextDay = !0), (e._a[ge] = 0)),
                (e._d = (e._useUTC ? qe : Ie).apply(null, o)),
                (r = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                null != e._tzm &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[ge] = 24),
                e._w &&
                  void 0 !== e._w.d &&
                  e._w.d !== r &&
                  (f(e).weekdayMismatch = !0);
            }
          }
          function Ot(e) {
            if (e._f !== s.ISO_8601)
              if (e._f !== s.RFC_2822) {
                (e._a = []), (f(e).empty = !0);
                var t,
                  n,
                  a,
                  r,
                  i,
                  o,
                  d,
                  u = "" + e._i,
                  _ = u.length,
                  l = 0;
                for (
                  d = (a = N(e._f, e._locale).match(O) || []).length, t = 0;
                  t < d;
                  t++
                )
                  (r = a[t]),
                    (n = (u.match(ue(r, e)) || [])[0]) &&
                      ((i = u.substr(0, u.indexOf(n))).length > 0 &&
                        f(e).unusedInput.push(i),
                      (u = u.slice(u.indexOf(n) + n.length)),
                      (l += n.length)),
                    E[r]
                      ? (n ? (f(e).empty = !1) : f(e).unusedTokens.push(r),
                        Me(r, n, e))
                      : e._strict && !n && f(e).unusedTokens.push(r);
                (f(e).charsLeftOver = _ - l),
                  u.length > 0 && f(e).unusedInput.push(u),
                  e._a[ge] <= 12 &&
                    !0 === f(e).bigHour &&
                    e._a[ge] > 0 &&
                    (f(e).bigHour = void 0),
                  (f(e).parsedDateParts = e._a.slice(0)),
                  (f(e).meridiem = e._meridiem),
                  (e._a[ge] = (function (e, t, n) {
                    var a;
                    return null == n
                      ? t
                      : null != e.meridiemHour
                      ? e.meridiemHour(t, n)
                      : null != e.isPM
                      ? ((a = e.isPM(n)) && t < 12 && (t += 12),
                        a || 12 !== t || (t = 0),
                        t)
                      : t;
                  })(e._locale, e._a[ge], e._meridiem)),
                  null !== (o = f(e).era) &&
                    (e._a[ye] = e._locale.erasConvertYear(o, e._a[ye])),
                  jt(e),
                  yt(e);
              } else Ht(e);
            else bt(e);
          }
          function Pt(e) {
            var t = e._i,
              n = e._f;
            return (
              (e._locale = e._locale || pt(e._l)),
              null === t || (void 0 === n && "" === t)
                ? p({ nullInput: !0 })
                : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                  k(t)
                    ? new g(yt(t))
                    : (l(t)
                        ? (e._d = t)
                        : r(n)
                        ? (function (e) {
                            var t,
                              n,
                              a,
                              s,
                              r,
                              i,
                              o = !1,
                              d = e._f.length;
                            if (0 === d)
                              return (
                                (f(e).invalidFormat = !0),
                                void (e._d = new Date(NaN))
                              );
                            for (s = 0; s < d; s++)
                              (r = 0),
                                (i = !1),
                                (t = Y({}, e)),
                                null != e._useUTC && (t._useUTC = e._useUTC),
                                (t._f = e._f[s]),
                                Ot(t),
                                M(t) && (i = !0),
                                (r += f(t).charsLeftOver),
                                (r += 10 * f(t).unusedTokens.length),
                                (f(t).score = r),
                                o
                                  ? r < a && ((a = r), (n = t))
                                  : (null == a || r < a || i) &&
                                    ((a = r), (n = t), i && (o = !0));
                            c(e, n || t);
                          })(e)
                        : n
                        ? Ot(e)
                        : (function (e) {
                            var t = e._i;
                            u(t)
                              ? (e._d = new Date(s.now()))
                              : l(t)
                              ? (e._d = new Date(t.valueOf()))
                              : "string" == typeof t
                              ? (function (e) {
                                  var t = vt.exec(e._i);
                                  null === t
                                    ? (bt(e),
                                      !1 === e._isValid &&
                                        (delete e._isValid,
                                        Ht(e),
                                        !1 === e._isValid &&
                                          (delete e._isValid,
                                          e._strict
                                            ? (e._isValid = !1)
                                            : s.createFromInputFallback(e))))
                                    : (e._d = new Date(+t[1]));
                                })(e)
                              : r(t)
                              ? ((e._a = m(t.slice(0), function (e) {
                                  return parseInt(e, 10);
                                })),
                                jt(e))
                              : i(t)
                              ? (function (e) {
                                  if (!e._d) {
                                    var t = R(e._i),
                                      n = void 0 === t.day ? t.date : t.day;
                                    (e._a = m(
                                      [
                                        t.year,
                                        t.month,
                                        n,
                                        t.hour,
                                        t.minute,
                                        t.second,
                                        t.millisecond,
                                      ],
                                      function (e) {
                                        return e && parseInt(e, 10);
                                      }
                                    )),
                                      jt(e);
                                  }
                                })(e)
                              : _(t)
                              ? (e._d = new Date(t))
                              : s.createFromInputFallback(e);
                          })(e),
                      M(e) || (e._d = null),
                      e))
            );
          }
          function Wt(e, t, n, a, s) {
            var o,
              u = {};
            return (
              (!0 !== t && !1 !== t) || ((a = t), (t = void 0)),
              (!0 !== n && !1 !== n) || ((a = n), (n = void 0)),
              ((i(e) && d(e)) || (r(e) && 0 === e.length)) && (e = void 0),
              (u._isAMomentObject = !0),
              (u._useUTC = u._isUTC = s),
              (u._l = n),
              (u._i = e),
              (u._f = t),
              (u._strict = a),
              (o = new g(yt(Pt(u))))._nextDay &&
                (o.add(1, "d"), (o._nextDay = void 0)),
              o
            );
          }
          function Et(e, t, n, a) {
            return Wt(e, t, n, a, !1);
          }
          (s.createFromInputFallback = v(
            "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? " UTC" : ""));
            }
          )),
            (s.ISO_8601 = function () {}),
            (s.RFC_2822 = function () {});
          var At = v(
              "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Et.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : p();
              }
            ),
            Ft = v(
              "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
              function () {
                var e = Et.apply(null, arguments);
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : p();
              }
            );
          function Nt(e, t) {
            var n, a;
            if ((1 === t.length && r(t[0]) && (t = t[0]), !t.length))
              return Et();
            for (n = t[0], a = 1; a < t.length; ++a)
              (t[a].isValid() && !t[a][e](n)) || (n = t[a]);
            return n;
          }
          var Ct = [
            "year",
            "quarter",
            "month",
            "week",
            "day",
            "hour",
            "minute",
            "second",
            "millisecond",
          ];
          function zt(e) {
            var t = R(e),
              n = t.year || 0,
              a = t.quarter || 0,
              s = t.month || 0,
              r = t.week || t.isoWeek || 0,
              i = t.day || 0,
              d = t.hour || 0,
              u = t.minute || 0,
              _ = t.second || 0,
              l = t.millisecond || 0;
            (this._isValid = (function (e) {
              var t,
                n,
                a = !1,
                s = Ct.length;
              for (t in e)
                if (
                  o(e, t) &&
                  (-1 === Se.call(Ct, t) || (null != e[t] && isNaN(e[t])))
                )
                  return !1;
              for (n = 0; n < s; ++n)
                if (e[Ct[n]]) {
                  if (a) return !1;
                  parseFloat(e[Ct[n]]) !== me(e[Ct[n]]) && (a = !0);
                }
              return !0;
            })(t)),
              (this._milliseconds = +l + 1e3 * _ + 6e4 * u + 1e3 * d * 60 * 60),
              (this._days = +i + 7 * r),
              (this._months = +s + 3 * a + 12 * n),
              (this._data = {}),
              (this._locale = pt()),
              this._bubble();
          }
          function Rt(e) {
            return e instanceof zt;
          }
          function Jt(e) {
            return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e);
          }
          function It(e, t) {
            A(e, 0, 0, function () {
              var e = this.utcOffset(),
                n = "+";
              return (
                e < 0 && ((e = -e), (n = "-")),
                n + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
              );
            });
          }
          It("Z", ":"),
            It("ZZ", ""),
            de("Z", se),
            de("ZZ", se),
            he(["Z", "ZZ"], function (e, t, n) {
              (n._useUTC = !0), (n._tzm = Ut(se, e));
            });
          var qt = /([\+\-]|\d\d)/gi;
          function Ut(e, t) {
            var n,
              a,
              s = (t || "").match(e);
            return null === s
              ? null
              : 0 ===
                (a =
                  60 *
                    (n = ((s[s.length - 1] || []) + "").match(qt) || [
                      "-",
                      0,
                      0,
                    ])[1] +
                  me(n[2]))
              ? 0
              : "+" === n[0]
              ? a
              : -a;
          }
          function Gt(e, t) {
            var n, a;
            return t._isUTC
              ? ((n = t.clone()),
                (a =
                  (k(e) || l(e) ? e.valueOf() : Et(e).valueOf()) - n.valueOf()),
                n._d.setTime(n._d.valueOf() + a),
                s.updateOffset(n, !1),
                n)
              : Et(e).local();
          }
          function Bt(e) {
            return -Math.round(e._d.getTimezoneOffset());
          }
          function Vt() {
            return !!this.isValid() && this._isUTC && 0 === this._offset;
          }
          s.updateOffset = function () {};
          var $t = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Kt =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
          function Zt(e, t) {
            var n,
              a,
              s,
              r,
              i,
              d,
              u = e,
              l = null;
            return (
              Rt(e)
                ? (u = { ms: e._milliseconds, d: e._days, M: e._months })
                : _(e) || !isNaN(+e)
                ? ((u = {}), t ? (u[t] = +e) : (u.milliseconds = +e))
                : (l = $t.exec(e))
                ? ((n = "-" === l[1] ? -1 : 1),
                  (u = {
                    y: 0,
                    d: me(l[Ye]) * n,
                    h: me(l[ge]) * n,
                    m: me(l[ke]) * n,
                    s: me(l[De]) * n,
                    ms: me(Jt(1e3 * l[ve])) * n,
                  }))
                : (l = Kt.exec(e))
                ? ((n = "-" === l[1] ? -1 : 1),
                  (u = {
                    y: Xt(l[2], n),
                    M: Xt(l[3], n),
                    w: Xt(l[4], n),
                    d: Xt(l[5], n),
                    h: Xt(l[6], n),
                    m: Xt(l[7], n),
                    s: Xt(l[8], n),
                  }))
                : null == u
                ? (u = {})
                : "object" == typeof u &&
                  ("from" in u || "to" in u) &&
                  ((r = Et(u.from)),
                  (i = Et(u.to)),
                  (s =
                    r.isValid() && i.isValid()
                      ? ((i = Gt(i, r)),
                        r.isBefore(i)
                          ? (d = Qt(r, i))
                          : (((d = Qt(i, r)).milliseconds = -d.milliseconds),
                            (d.months = -d.months)),
                        d)
                      : { milliseconds: 0, months: 0 }),
                  ((u = {}).ms = s.milliseconds),
                  (u.M = s.months)),
              (a = new zt(u)),
              Rt(e) && o(e, "_locale") && (a._locale = e._locale),
              Rt(e) && o(e, "_isValid") && (a._isValid = e._isValid),
              a
            );
          }
          function Xt(e, t) {
            var n = e && parseFloat(e.replace(",", "."));
            return (isNaN(n) ? 0 : n) * t;
          }
          function Qt(e, t) {
            var n = {};
            return (
              (n.months = t.month() - e.month() + 12 * (t.year() - e.year())),
              e.clone().add(n.months, "M").isAfter(t) && --n.months,
              (n.milliseconds = +t - +e.clone().add(n.months, "M")),
              n
            );
          }
          function en(e, t) {
            return function (n, a) {
              var s;
              return (
                null === a ||
                  isNaN(+a) ||
                  (b(
                    t,
                    "moment()." +
                      t +
                      "(period, number) is deprecated. Please use moment()." +
                      t +
                      "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
                  ),
                  (s = n),
                  (n = a),
                  (a = s)),
                tn(this, Zt(n, a), e),
                this
              );
            };
          }
          function tn(e, t, n, a) {
            var r = t._milliseconds,
              i = Jt(t._days),
              o = Jt(t._months);
            e.isValid() &&
              ((a = null == a || a),
              o && ze(e, je(e, "Month") + o * n),
              i && Oe(e, "Date", je(e, "Date") + i * n),
              r && e._d.setTime(e._d.valueOf() + r * n),
              a && s.updateOffset(e, i || o));
          }
          (Zt.fn = zt.prototype),
            (Zt.invalid = function () {
              return Zt(NaN);
            });
          var nn = en(1, "add"),
            an = en(-1, "subtract");
          function sn(e) {
            return "string" == typeof e || e instanceof String;
          }
          function rn(e) {
            return (
              k(e) ||
              l(e) ||
              sn(e) ||
              _(e) ||
              (function (e) {
                var t = r(e),
                  n = !1;
                return (
                  t &&
                    (n =
                      0 ===
                      e.filter(function (t) {
                        return !_(t) && sn(e);
                      }).length),
                  t && n
                );
              })(e) ||
              (function (e) {
                var t,
                  n,
                  a = i(e) && !d(e),
                  s = !1,
                  r = [
                    "years",
                    "year",
                    "y",
                    "months",
                    "month",
                    "M",
                    "days",
                    "day",
                    "d",
                    "dates",
                    "date",
                    "D",
                    "hours",
                    "hour",
                    "h",
                    "minutes",
                    "minute",
                    "m",
                    "seconds",
                    "second",
                    "s",
                    "milliseconds",
                    "millisecond",
                    "ms",
                  ],
                  u = r.length;
                for (t = 0; t < u; t += 1) (n = r[t]), (s = s || o(e, n));
                return a && s;
              })(e) ||
              null == e
            );
          }
          function on(e, t) {
            if (e.date() < t.date()) return -on(t, e);
            var n = 12 * (t.year() - e.year()) + (t.month() - e.month()),
              a = e.clone().add(n, "months");
            return (
              -(
                n +
                (t - a < 0
                  ? (t - a) / (a - e.clone().add(n - 1, "months"))
                  : (t - a) / (e.clone().add(n + 1, "months") - a))
              ) || 0
            );
          }
          function dn(e) {
            var t;
            return void 0 === e
              ? this._locale._abbr
              : (null != (t = pt(e)) && (this._locale = t), this);
          }
          (s.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
            (s.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
          var un = v(
            "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
            function (e) {
              return void 0 === e ? this.localeData() : this.locale(e);
            }
          );
          function _n() {
            return this._locale;
          }
          var ln = 1e3,
            mn = 6e4,
            cn = 36e5,
            hn = 126227808e5;
          function fn(e, t) {
            return ((e % t) + t) % t;
          }
          function Mn(e, t, n) {
            return e < 100 && e >= 0
              ? new Date(e + 400, t, n) - hn
              : new Date(e, t, n).valueOf();
          }
          function pn(e, t, n) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, t, n) - hn
              : Date.UTC(e, t, n);
          }
          function yn(e, t) {
            return t.erasAbbrRegex(e);
          }
          function Ln() {
            var e,
              t,
              n,
              a,
              s,
              r = [],
              i = [],
              o = [],
              d = [],
              u = this.eras();
            for (e = 0, t = u.length; e < t; ++e)
              (n = _e(u[e].name)),
                (a = _e(u[e].abbr)),
                (s = _e(u[e].narrow)),
                i.push(n),
                r.push(a),
                o.push(s),
                d.push(n),
                d.push(a),
                d.push(s);
            (this._erasRegex = new RegExp("^(" + d.join("|") + ")", "i")),
              (this._erasNameRegex = new RegExp("^(" + i.join("|") + ")", "i")),
              (this._erasAbbrRegex = new RegExp("^(" + r.join("|") + ")", "i")),
              (this._erasNarrowRegex = new RegExp(
                "^(" + o.join("|") + ")",
                "i"
              ));
          }
          function Yn(e, t) {
            A(0, [e, e.length], 0, t);
          }
          function gn(e, t, n, a, s) {
            var r;
            return null == e
              ? Be(this, a, s).year
              : (t > (r = Ve(e, a, s)) && (t = r),
                kn.call(this, e, t, n, a, s));
          }
          function kn(e, t, n, a, s) {
            var r = Ge(e, t, n, a, s),
              i = qe(r.year, 0, r.dayOfYear);
            return (
              this.year(i.getUTCFullYear()),
              this.month(i.getUTCMonth()),
              this.date(i.getUTCDate()),
              this
            );
          }
          A("N", 0, 0, "eraAbbr"),
            A("NN", 0, 0, "eraAbbr"),
            A("NNN", 0, 0, "eraAbbr"),
            A("NNNN", 0, 0, "eraName"),
            A("NNNNN", 0, 0, "eraNarrow"),
            A("y", ["y", 1], "yo", "eraYear"),
            A("y", ["yy", 2], 0, "eraYear"),
            A("y", ["yyy", 3], 0, "eraYear"),
            A("y", ["yyyy", 4], 0, "eraYear"),
            de("N", yn),
            de("NN", yn),
            de("NNN", yn),
            de("NNNN", function (e, t) {
              return t.erasNameRegex(e);
            }),
            de("NNNNN", function (e, t) {
              return t.erasNarrowRegex(e);
            }),
            he(["N", "NN", "NNN", "NNNN", "NNNNN"], function (e, t, n, a) {
              var s = n._locale.erasParse(e, a, n._strict);
              s ? (f(n).era = s) : (f(n).invalidEra = e);
            }),
            de("y", te),
            de("yy", te),
            de("yyy", te),
            de("yyyy", te),
            de("yo", function (e, t) {
              return t._eraYearOrdinalRegex || te;
            }),
            he(["y", "yy", "yyy", "yyyy"], ye),
            he(["yo"], function (e, t, n, a) {
              var s;
              n._locale._eraYearOrdinalRegex &&
                (s = e.match(n._locale._eraYearOrdinalRegex)),
                n._locale.eraYearOrdinalParse
                  ? (t[ye] = n._locale.eraYearOrdinalParse(e, s))
                  : (t[ye] = parseInt(e, 10));
            }),
            A(0, ["gg", 2], 0, function () {
              return this.weekYear() % 100;
            }),
            A(0, ["GG", 2], 0, function () {
              return this.isoWeekYear() % 100;
            }),
            Yn("gggg", "weekYear"),
            Yn("ggggg", "weekYear"),
            Yn("GGGG", "isoWeekYear"),
            Yn("GGGGG", "isoWeekYear"),
            de("G", ne),
            de("g", ne),
            de("GG", $, U),
            de("gg", $, U),
            de("GGGG", Q, B),
            de("gggg", Q, B),
            de("GGGGG", ee, V),
            de("ggggg", ee, V),
            fe(["gggg", "ggggg", "GGGG", "GGGGG"], function (e, t, n, a) {
              t[a.substr(0, 2)] = me(e);
            }),
            fe(["gg", "GG"], function (e, t, n, a) {
              t[a] = s.parseTwoDigitYear(e);
            }),
            A("Q", 0, "Qo", "quarter"),
            de("Q", q),
            he("Q", function (e, t) {
              t[Le] = 3 * (me(e) - 1);
            }),
            A("D", ["DD", 2], "Do", "date"),
            de("D", $, ie),
            de("DD", $, U),
            de("Do", function (e, t) {
              return e
                ? t._dayOfMonthOrdinalParse || t._ordinalParse
                : t._dayOfMonthOrdinalParseLenient;
            }),
            he(["D", "DD"], Ye),
            he("Do", function (e, t) {
              t[Ye] = me(e.match($)[0]);
            });
          var Dn = xe("Date", !0);
          A("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            de("DDD", X),
            de("DDDD", G),
            he(["DDD", "DDDD"], function (e, t, n) {
              n._dayOfYear = me(e);
            }),
            A("m", ["mm", 2], 0, "minute"),
            de("m", $, oe),
            de("mm", $, U),
            he(["m", "mm"], ke);
          var vn = xe("Minutes", !1);
          A("s", ["ss", 2], 0, "second"),
            de("s", $, oe),
            de("ss", $, U),
            he(["s", "ss"], De);
          var Tn,
            wn,
            bn = xe("Seconds", !1);
          for (
            A("S", 0, 0, function () {
              return ~~(this.millisecond() / 100);
            }),
              A(0, ["SS", 2], 0, function () {
                return ~~(this.millisecond() / 10);
              }),
              A(0, ["SSS", 3], 0, "millisecond"),
              A(0, ["SSSS", 4], 0, function () {
                return 10 * this.millisecond();
              }),
              A(0, ["SSSSS", 5], 0, function () {
                return 100 * this.millisecond();
              }),
              A(0, ["SSSSSS", 6], 0, function () {
                return 1e3 * this.millisecond();
              }),
              A(0, ["SSSSSSS", 7], 0, function () {
                return 1e4 * this.millisecond();
              }),
              A(0, ["SSSSSSSS", 8], 0, function () {
                return 1e5 * this.millisecond();
              }),
              A(0, ["SSSSSSSSS", 9], 0, function () {
                return 1e6 * this.millisecond();
              }),
              de("S", X, q),
              de("SS", X, U),
              de("SSS", X, G),
              Tn = "SSSS";
            Tn.length <= 9;
            Tn += "S"
          )
            de(Tn, te);
          function Sn(e, t) {
            t[ve] = me(1e3 * ("0." + e));
          }
          for (Tn = "S"; Tn.length <= 9; Tn += "S") he(Tn, Sn);
          (wn = xe("Milliseconds", !1)),
            A("z", 0, 0, "zoneAbbr"),
            A("zz", 0, 0, "zoneName");
          var Hn = g.prototype;
          function xn(e) {
            return e;
          }
          (Hn.add = nn),
            (Hn.calendar = function (e, t) {
              1 === arguments.length &&
                (arguments[0]
                  ? rn(arguments[0])
                    ? ((e = arguments[0]), (t = void 0))
                    : (function (e) {
                        var t,
                          n = i(e) && !d(e),
                          a = !1,
                          s = [
                            "sameDay",
                            "nextDay",
                            "lastDay",
                            "nextWeek",
                            "lastWeek",
                            "sameElse",
                          ];
                        for (t = 0; t < s.length; t += 1) a = a || o(e, s[t]);
                        return n && a;
                      })(arguments[0]) && ((t = arguments[0]), (e = void 0))
                  : ((e = void 0), (t = void 0)));
              var n = e || Et(),
                a = Gt(n, this).startOf("day"),
                r = s.calendarFormat(this, a) || "sameElse",
                u = t && (S(t[r]) ? t[r].call(this, n) : t[r]);
              return this.format(
                u || this.localeData().calendar(r, this, Et(n))
              );
            }),
            (Hn.clone = function () {
              return new g(this);
            }),
            (Hn.diff = function (e, t, n) {
              var a, s, r;
              if (!this.isValid()) return NaN;
              if (!(a = Gt(e, this)).isValid()) return NaN;
              switch (
                ((s = 6e4 * (a.utcOffset() - this.utcOffset())), (t = z(t)))
              ) {
                case "year":
                  r = on(this, a) / 12;
                  break;
                case "month":
                  r = on(this, a);
                  break;
                case "quarter":
                  r = on(this, a) / 3;
                  break;
                case "second":
                  r = (this - a) / 1e3;
                  break;
                case "minute":
                  r = (this - a) / 6e4;
                  break;
                case "hour":
                  r = (this - a) / 36e5;
                  break;
                case "day":
                  r = (this - a - s) / 864e5;
                  break;
                case "week":
                  r = (this - a - s) / 6048e5;
                  break;
                default:
                  r = this - a;
              }
              return n ? r : le(r);
            }),
            (Hn.endOf = function (e) {
              var t, n;
              if (
                void 0 === (e = z(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              switch (((n = this._isUTC ? pn : Mn), e)) {
                case "year":
                  t = n(this.year() + 1, 0, 1) - 1;
                  break;
                case "quarter":
                  t =
                    n(this.year(), this.month() - (this.month() % 3) + 3, 1) -
                    1;
                  break;
                case "month":
                  t = n(this.year(), this.month() + 1, 1) - 1;
                  break;
                case "week":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - this.weekday() + 7
                    ) - 1;
                  break;
                case "isoWeek":
                  t =
                    n(
                      this.year(),
                      this.month(),
                      this.date() - (this.isoWeekday() - 1) + 7
                    ) - 1;
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date() + 1) - 1;
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t +=
                      cn -
                      fn(t + (this._isUTC ? 0 : this.utcOffset() * mn), cn) -
                      1);
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t += mn - fn(t, mn) - 1);
                  break;
                case "second":
                  (t = this._d.valueOf()), (t += ln - fn(t, ln) - 1);
              }
              return this._d.setTime(t), s.updateOffset(this, !0), this;
            }),
            (Hn.format = function (e) {
              e || (e = this.isUtc() ? s.defaultFormatUtc : s.defaultFormat);
              var t = F(this, e);
              return this.localeData().postformat(t);
            }),
            (Hn.from = function (e, t) {
              return this.isValid() &&
                ((k(e) && e.isValid()) || Et(e).isValid())
                ? Zt({ to: this, from: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Hn.fromNow = function (e) {
              return this.from(Et(), e);
            }),
            (Hn.to = function (e, t) {
              return this.isValid() &&
                ((k(e) && e.isValid()) || Et(e).isValid())
                ? Zt({ from: this, to: e }).locale(this.locale()).humanize(!t)
                : this.localeData().invalidDate();
            }),
            (Hn.toNow = function (e) {
              return this.to(Et(), e);
            }),
            (Hn.get = function (e) {
              return S(this[(e = z(e))]) ? this[e]() : this;
            }),
            (Hn.invalidAt = function () {
              return f(this).overflow;
            }),
            (Hn.isAfter = function (e, t) {
              var n = k(e) ? e : Et(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = z(t) || "millisecond")
                  ? this.valueOf() > n.valueOf()
                  : n.valueOf() < this.clone().startOf(t).valueOf())
              );
            }),
            (Hn.isBefore = function (e, t) {
              var n = k(e) ? e : Et(e);
              return (
                !(!this.isValid() || !n.isValid()) &&
                ("millisecond" === (t = z(t) || "millisecond")
                  ? this.valueOf() < n.valueOf()
                  : this.clone().endOf(t).valueOf() < n.valueOf())
              );
            }),
            (Hn.isBetween = function (e, t, n, a) {
              var s = k(e) ? e : Et(e),
                r = k(t) ? t : Et(t);
              return (
                !!(this.isValid() && s.isValid() && r.isValid()) &&
                ("(" === (a = a || "()")[0]
                  ? this.isAfter(s, n)
                  : !this.isBefore(s, n)) &&
                (")" === a[1] ? this.isBefore(r, n) : !this.isAfter(r, n))
              );
            }),
            (Hn.isSame = function (e, t) {
              var n,
                a = k(e) ? e : Et(e);
              return (
                !(!this.isValid() || !a.isValid()) &&
                ("millisecond" === (t = z(t) || "millisecond")
                  ? this.valueOf() === a.valueOf()
                  : ((n = a.valueOf()),
                    this.clone().startOf(t).valueOf() <= n &&
                      n <= this.clone().endOf(t).valueOf()))
              );
            }),
            (Hn.isSameOrAfter = function (e, t) {
              return this.isSame(e, t) || this.isAfter(e, t);
            }),
            (Hn.isSameOrBefore = function (e, t) {
              return this.isSame(e, t) || this.isBefore(e, t);
            }),
            (Hn.isValid = function () {
              return M(this);
            }),
            (Hn.lang = un),
            (Hn.locale = dn),
            (Hn.localeData = _n),
            (Hn.max = Ft),
            (Hn.min = At),
            (Hn.parsingFlags = function () {
              return c({}, f(this));
            }),
            (Hn.set = function (e, t) {
              if ("object" == typeof e) {
                var n,
                  a = (function (e) {
                    var t,
                      n = [];
                    for (t in e) o(e, t) && n.push({ unit: t, priority: J[t] });
                    return (
                      n.sort(function (e, t) {
                        return e.priority - t.priority;
                      }),
                      n
                    );
                  })((e = R(e))),
                  s = a.length;
                for (n = 0; n < s; n++) this[a[n].unit](e[a[n].unit]);
              } else if (S(this[(e = z(e))])) return this[e](t);
              return this;
            }),
            (Hn.startOf = function (e) {
              var t, n;
              if (
                void 0 === (e = z(e)) ||
                "millisecond" === e ||
                !this.isValid()
              )
                return this;
              switch (((n = this._isUTC ? pn : Mn), e)) {
                case "year":
                  t = n(this.year(), 0, 1);
                  break;
                case "quarter":
                  t = n(this.year(), this.month() - (this.month() % 3), 1);
                  break;
                case "month":
                  t = n(this.year(), this.month(), 1);
                  break;
                case "week":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday()
                  );
                  break;
                case "isoWeek":
                  t = n(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1)
                  );
                  break;
                case "day":
                case "date":
                  t = n(this.year(), this.month(), this.date());
                  break;
                case "hour":
                  (t = this._d.valueOf()),
                    (t -= fn(
                      t + (this._isUTC ? 0 : this.utcOffset() * mn),
                      cn
                    ));
                  break;
                case "minute":
                  (t = this._d.valueOf()), (t -= fn(t, mn));
                  break;
                case "second":
                  (t = this._d.valueOf()), (t -= fn(t, ln));
              }
              return this._d.setTime(t), s.updateOffset(this, !0), this;
            }),
            (Hn.subtract = an),
            (Hn.toArray = function () {
              var e = this;
              return [
                e.year(),
                e.month(),
                e.date(),
                e.hour(),
                e.minute(),
                e.second(),
                e.millisecond(),
              ];
            }),
            (Hn.toObject = function () {
              var e = this;
              return {
                years: e.year(),
                months: e.month(),
                date: e.date(),
                hours: e.hours(),
                minutes: e.minutes(),
                seconds: e.seconds(),
                milliseconds: e.milliseconds(),
              };
            }),
            (Hn.toDate = function () {
              return new Date(this.valueOf());
            }),
            (Hn.toISOString = function (e) {
              if (!this.isValid()) return null;
              var t = !0 !== e,
                n = t ? this.clone().utc() : this;
              return n.year() < 0 || n.year() > 9999
                ? F(
                    n,
                    t
                      ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  )
                : S(Date.prototype.toISOString)
                ? t
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
                      .toISOString()
                      .replace("Z", F(n, "Z"))
                : F(
                    n,
                    t
                      ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
                      : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
                  );
            }),
            (Hn.inspect = function () {
              if (!this.isValid())
                return "moment.invalid(/* " + this._i + " */)";
              var e,
                t,
                n,
                a = "moment",
                s = "";
              return (
                this.isLocal() ||
                  ((a =
                    0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
                  (s = "Z")),
                (e = "[" + a + '("]'),
                (t =
                  0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"),
                "-MM-DD[T]HH:mm:ss.SSS",
                (n = s + '[")]'),
                this.format(e + t + "-MM-DD[T]HH:mm:ss.SSS" + n)
              );
            }),
            "undefined" != typeof Symbol &&
              null != Symbol.for &&
              (Hn[Symbol.for("nodejs.util.inspect.custom")] = function () {
                return "Moment<" + this.format() + ">";
              }),
            (Hn.toJSON = function () {
              return this.isValid() ? this.toISOString() : null;
            }),
            (Hn.toString = function () {
              return this.clone()
                .locale("en")
                .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
            }),
            (Hn.unix = function () {
              return Math.floor(this.valueOf() / 1e3);
            }),
            (Hn.valueOf = function () {
              return this._d.valueOf() - 6e4 * (this._offset || 0);
            }),
            (Hn.creationData = function () {
              return {
                input: this._i,
                format: this._f,
                locale: this._locale,
                isUTC: this._isUTC,
                strict: this._strict,
              };
            }),
            (Hn.eraName = function () {
              var e,
                t,
                n,
                a = this.localeData().eras();
              for (e = 0, t = a.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  a[e].since <= n && n <= a[e].until)
                )
                  return a[e].name;
                if (a[e].until <= n && n <= a[e].since) return a[e].name;
              }
              return "";
            }),
            (Hn.eraNarrow = function () {
              var e,
                t,
                n,
                a = this.localeData().eras();
              for (e = 0, t = a.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  a[e].since <= n && n <= a[e].until)
                )
                  return a[e].narrow;
                if (a[e].until <= n && n <= a[e].since) return a[e].narrow;
              }
              return "";
            }),
            (Hn.eraAbbr = function () {
              var e,
                t,
                n,
                a = this.localeData().eras();
              for (e = 0, t = a.length; e < t; ++e) {
                if (
                  ((n = this.clone().startOf("day").valueOf()),
                  a[e].since <= n && n <= a[e].until)
                )
                  return a[e].abbr;
                if (a[e].until <= n && n <= a[e].since) return a[e].abbr;
              }
              return "";
            }),
            (Hn.eraYear = function () {
              var e,
                t,
                n,
                a,
                r = this.localeData().eras();
              for (e = 0, t = r.length; e < t; ++e)
                if (
                  ((n = r[e].since <= r[e].until ? 1 : -1),
                  (a = this.clone().startOf("day").valueOf()),
                  (r[e].since <= a && a <= r[e].until) ||
                    (r[e].until <= a && a <= r[e].since))
                )
                  return (this.year() - s(r[e].since).year()) * n + r[e].offset;
              return this.year();
            }),
            (Hn.year = He),
            (Hn.isLeapYear = function () {
              return pe(this.year());
            }),
            (Hn.weekYear = function (e) {
              return gn.call(
                this,
                e,
                this.week(),
                this.weekday() + this.localeData()._week.dow,
                this.localeData()._week.dow,
                this.localeData()._week.doy
              );
            }),
            (Hn.isoWeekYear = function (e) {
              return gn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4);
            }),
            (Hn.quarter = Hn.quarters =
              function (e) {
                return null == e
                  ? Math.ceil((this.month() + 1) / 3)
                  : this.month(3 * (e - 1) + (this.month() % 3));
              }),
            (Hn.month = Re),
            (Hn.daysInMonth = function () {
              return Pe(this.year(), this.month());
            }),
            (Hn.week = Hn.weeks =
              function (e) {
                var t = this.localeData().week(this);
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (Hn.isoWeek = Hn.isoWeeks =
              function (e) {
                var t = Be(this, 1, 4).week;
                return null == e ? t : this.add(7 * (e - t), "d");
              }),
            (Hn.weeksInYear = function () {
              var e = this.localeData()._week;
              return Ve(this.year(), e.dow, e.doy);
            }),
            (Hn.weeksInWeekYear = function () {
              var e = this.localeData()._week;
              return Ve(this.weekYear(), e.dow, e.doy);
            }),
            (Hn.isoWeeksInYear = function () {
              return Ve(this.year(), 1, 4);
            }),
            (Hn.isoWeeksInISOWeekYear = function () {
              return Ve(this.isoWeekYear(), 1, 4);
            }),
            (Hn.date = Dn),
            (Hn.day = Hn.days =
              function (e) {
                if (!this.isValid()) return null != e ? this : NaN;
                var t = je(this, "Day");
                return null != e
                  ? ((e = (function (e, t) {
                      return "string" != typeof e
                        ? e
                        : isNaN(e)
                        ? "number" == typeof (e = t.weekdaysParse(e))
                          ? e
                          : null
                        : parseInt(e, 10);
                    })(e, this.localeData())),
                    this.add(e - t, "d"))
                  : t;
              }),
            (Hn.weekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
              return null == e ? t : this.add(e - t, "d");
            }),
            (Hn.isoWeekday = function (e) {
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                var t = (function (e, t) {
                  return "string" == typeof e
                    ? t.weekdaysParse(e) % 7 || 7
                    : isNaN(e)
                    ? null
                    : e;
                })(e, this.localeData());
                return this.day(this.day() % 7 ? t : t - 7);
              }
              return this.day() || 7;
            }),
            (Hn.dayOfYear = function (e) {
              var t =
                Math.round(
                  (this.clone().startOf("day") - this.clone().startOf("year")) /
                    864e5
                ) + 1;
              return null == e ? t : this.add(e - t, "d");
            }),
            (Hn.hour = Hn.hours = ot),
            (Hn.minute = Hn.minutes = vn),
            (Hn.second = Hn.seconds = bn),
            (Hn.millisecond = Hn.milliseconds = wn),
            (Hn.utcOffset = function (e, t, n) {
              var a,
                r = this._offset || 0;
              if (!this.isValid()) return null != e ? this : NaN;
              if (null != e) {
                if ("string" == typeof e) {
                  if (null === (e = Ut(se, e))) return this;
                } else Math.abs(e) < 16 && !n && (e *= 60);
                return (
                  !this._isUTC && t && (a = Bt(this)),
                  (this._offset = e),
                  (this._isUTC = !0),
                  null != a && this.add(a, "m"),
                  r !== e &&
                    (!t || this._changeInProgress
                      ? tn(this, Zt(e - r, "m"), 1, !1)
                      : this._changeInProgress ||
                        ((this._changeInProgress = !0),
                        s.updateOffset(this, !0),
                        (this._changeInProgress = null))),
                  this
                );
              }
              return this._isUTC ? r : Bt(this);
            }),
            (Hn.utc = function (e) {
              return this.utcOffset(0, e);
            }),
            (Hn.local = function (e) {
              return (
                this._isUTC &&
                  (this.utcOffset(0, e),
                  (this._isUTC = !1),
                  e && this.subtract(Bt(this), "m")),
                this
              );
            }),
            (Hn.parseZone = function () {
              if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
              else if ("string" == typeof this._i) {
                var e = Ut(ae, this._i);
                null != e ? this.utcOffset(e) : this.utcOffset(0, !0);
              }
              return this;
            }),
            (Hn.hasAlignedHourOffset = function (e) {
              return (
                !!this.isValid() &&
                ((e = e ? Et(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 == 0)
              );
            }),
            (Hn.isDST = function () {
              return (
                this.utcOffset() > this.clone().month(0).utcOffset() ||
                this.utcOffset() > this.clone().month(5).utcOffset()
              );
            }),
            (Hn.isLocal = function () {
              return !!this.isValid() && !this._isUTC;
            }),
            (Hn.isUtcOffset = function () {
              return !!this.isValid() && this._isUTC;
            }),
            (Hn.isUtc = Vt),
            (Hn.isUTC = Vt),
            (Hn.zoneAbbr = function () {
              return this._isUTC ? "UTC" : "";
            }),
            (Hn.zoneName = function () {
              return this._isUTC ? "Coordinated Universal Time" : "";
            }),
            (Hn.dates = v(
              "dates accessor is deprecated. Use date instead.",
              Dn
            )),
            (Hn.months = v(
              "months accessor is deprecated. Use month instead",
              Re
            )),
            (Hn.years = v(
              "years accessor is deprecated. Use year instead",
              He
            )),
            (Hn.zone = v(
              "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
              function (e, t) {
                return null != e
                  ? ("string" != typeof e && (e = -e),
                    this.utcOffset(e, t),
                    this)
                  : -this.utcOffset();
              }
            )),
            (Hn.isDSTShifted = v(
              "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
              function () {
                if (!u(this._isDSTShifted)) return this._isDSTShifted;
                var e,
                  t = {};
                return (
                  Y(t, this),
                  (t = Pt(t))._a
                    ? ((e = t._isUTC ? h(t._a) : Et(t._a)),
                      (this._isDSTShifted =
                        this.isValid() &&
                        (function (e, t, n) {
                          var a,
                            s = Math.min(e.length, t.length),
                            r = Math.abs(e.length - t.length),
                            i = 0;
                          for (a = 0; a < s; a++)
                            ((n && e[a] !== t[a]) ||
                              (!n && me(e[a]) !== me(t[a]))) &&
                              i++;
                          return i + r;
                        })(t._a, e.toArray()) > 0))
                    : (this._isDSTShifted = !1),
                  this._isDSTShifted
                );
              }
            ));
          var jn = x.prototype;
          function On(e, t, n, a) {
            var s = pt(),
              r = h().set(a, t);
            return s[n](r, e);
          }
          function Pn(e, t, n) {
            if ((_(e) && ((t = e), (e = void 0)), (e = e || ""), null != t))
              return On(e, t, n, "month");
            var a,
              s = [];
            for (a = 0; a < 12; a++) s[a] = On(e, a, n, "month");
            return s;
          }
          function Wn(e, t, n, a) {
            "boolean" == typeof e
              ? (_(t) && ((n = t), (t = void 0)), (t = t || ""))
              : ((n = t = e),
                (e = !1),
                _(t) && ((n = t), (t = void 0)),
                (t = t || ""));
            var s,
              r = pt(),
              i = e ? r._week.dow : 0,
              o = [];
            if (null != n) return On(t, (n + i) % 7, a, "day");
            for (s = 0; s < 7; s++) o[s] = On(t, (s + i) % 7, a, "day");
            return o;
          }
          (jn.calendar = function (e, t, n) {
            var a = this._calendar[e] || this._calendar.sameElse;
            return S(a) ? a.call(t, n) : a;
          }),
            (jn.longDateFormat = function (e) {
              var t = this._longDateFormat[e],
                n = this._longDateFormat[e.toUpperCase()];
              return t || !n
                ? t
                : ((this._longDateFormat[e] = n
                    .match(O)
                    .map(function (e) {
                      return "MMMM" === e ||
                        "MM" === e ||
                        "DD" === e ||
                        "dddd" === e
                        ? e.slice(1)
                        : e;
                    })
                    .join("")),
                  this._longDateFormat[e]);
            }),
            (jn.invalidDate = function () {
              return this._invalidDate;
            }),
            (jn.ordinal = function (e) {
              return this._ordinal.replace("%d", e);
            }),
            (jn.preparse = xn),
            (jn.postformat = xn),
            (jn.relativeTime = function (e, t, n, a) {
              var s = this._relativeTime[n];
              return S(s) ? s(e, t, n, a) : s.replace(/%d/i, e);
            }),
            (jn.pastFuture = function (e, t) {
              var n = this._relativeTime[e > 0 ? "future" : "past"];
              return S(n) ? n(t) : n.replace(/%s/i, t);
            }),
            (jn.set = function (e) {
              var t, n;
              for (n in e)
                o(e, n) &&
                  (S((t = e[n])) ? (this[n] = t) : (this["_" + n] = t));
              (this._config = e),
                (this._dayOfMonthOrdinalParseLenient = new RegExp(
                  (this._dayOfMonthOrdinalParse.source ||
                    this._ordinalParse.source) +
                    "|" +
                    /\d{1,2}/.source
                ));
            }),
            (jn.eras = function (e, t) {
              var n,
                a,
                r,
                i = this._eras || pt("en")._eras;
              for (n = 0, a = i.length; n < a; ++n)
                switch (
                  ("string" == typeof i[n].since &&
                    ((r = s(i[n].since).startOf("day")),
                    (i[n].since = r.valueOf())),
                  typeof i[n].until)
                ) {
                  case "undefined":
                    i[n].until = 1 / 0;
                    break;
                  case "string":
                    (r = s(i[n].until).startOf("day").valueOf()),
                      (i[n].until = r.valueOf());
                }
              return i;
            }),
            (jn.erasParse = function (e, t, n) {
              var a,
                s,
                r,
                i,
                o,
                d = this.eras();
              for (e = e.toUpperCase(), a = 0, s = d.length; a < s; ++a)
                if (
                  ((r = d[a].name.toUpperCase()),
                  (i = d[a].abbr.toUpperCase()),
                  (o = d[a].narrow.toUpperCase()),
                  n)
                )
                  switch (t) {
                    case "N":
                    case "NN":
                    case "NNN":
                      if (i === e) return d[a];
                      break;
                    case "NNNN":
                      if (r === e) return d[a];
                      break;
                    case "NNNNN":
                      if (o === e) return d[a];
                  }
                else if ([r, i, o].indexOf(e) >= 0) return d[a];
            }),
            (jn.erasConvertYear = function (e, t) {
              var n = e.since <= e.until ? 1 : -1;
              return void 0 === t
                ? s(e.since).year()
                : s(e.since).year() + (t - e.offset) * n;
            }),
            (jn.erasAbbrRegex = function (e) {
              return (
                o(this, "_erasAbbrRegex") || Ln.call(this),
                e ? this._erasAbbrRegex : this._erasRegex
              );
            }),
            (jn.erasNameRegex = function (e) {
              return (
                o(this, "_erasNameRegex") || Ln.call(this),
                e ? this._erasNameRegex : this._erasRegex
              );
            }),
            (jn.erasNarrowRegex = function (e) {
              return (
                o(this, "_erasNarrowRegex") || Ln.call(this),
                e ? this._erasNarrowRegex : this._erasRegex
              );
            }),
            (jn.months = function (e, t) {
              return e
                ? r(this._months)
                  ? this._months[e.month()]
                  : this._months[
                      (this._months.isFormat || Ae).test(t)
                        ? "format"
                        : "standalone"
                    ][e.month()]
                : r(this._months)
                ? this._months
                : this._months.standalone;
            }),
            (jn.monthsShort = function (e, t) {
              return e
                ? r(this._monthsShort)
                  ? this._monthsShort[e.month()]
                  : this._monthsShort[Ae.test(t) ? "format" : "standalone"][
                      e.month()
                    ]
                : r(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone;
            }),
            (jn.monthsParse = function (e, t, n) {
              var a, s, r;
              if (this._monthsParseExact) return Ce.call(this, e, t, n);
              for (
                this._monthsParse ||
                  ((this._monthsParse = []),
                  (this._longMonthsParse = []),
                  (this._shortMonthsParse = [])),
                  a = 0;
                a < 12;
                a++
              ) {
                if (
                  ((s = h([2e3, a])),
                  n &&
                    !this._longMonthsParse[a] &&
                    ((this._longMonthsParse[a] = new RegExp(
                      "^" + this.months(s, "").replace(".", "") + "$",
                      "i"
                    )),
                    (this._shortMonthsParse[a] = new RegExp(
                      "^" + this.monthsShort(s, "").replace(".", "") + "$",
                      "i"
                    ))),
                  n ||
                    this._monthsParse[a] ||
                    ((r =
                      "^" +
                      this.months(s, "") +
                      "|^" +
                      this.monthsShort(s, "")),
                    (this._monthsParse[a] = new RegExp(
                      r.replace(".", ""),
                      "i"
                    ))),
                  n && "MMMM" === t && this._longMonthsParse[a].test(e))
                )
                  return a;
                if (n && "MMM" === t && this._shortMonthsParse[a].test(e))
                  return a;
                if (!n && this._monthsParse[a].test(e)) return a;
              }
            }),
            (jn.monthsRegex = function (e) {
              return this._monthsParseExact
                ? (o(this, "_monthsRegex") || Je.call(this),
                  e ? this._monthsStrictRegex : this._monthsRegex)
                : (o(this, "_monthsRegex") || (this._monthsRegex = Ne),
                  this._monthsStrictRegex && e
                    ? this._monthsStrictRegex
                    : this._monthsRegex);
            }),
            (jn.monthsShortRegex = function (e) {
              return this._monthsParseExact
                ? (o(this, "_monthsRegex") || Je.call(this),
                  e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                : (o(this, "_monthsShortRegex") ||
                    (this._monthsShortRegex = Fe),
                  this._monthsShortStrictRegex && e
                    ? this._monthsShortStrictRegex
                    : this._monthsShortRegex);
            }),
            (jn.week = function (e) {
              return Be(e, this._week.dow, this._week.doy).week;
            }),
            (jn.firstDayOfYear = function () {
              return this._week.doy;
            }),
            (jn.firstDayOfWeek = function () {
              return this._week.dow;
            }),
            (jn.weekdays = function (e, t) {
              var n = r(this._weekdays)
                ? this._weekdays
                : this._weekdays[
                    e && !0 !== e && this._weekdays.isFormat.test(t)
                      ? "format"
                      : "standalone"
                  ];
              return !0 === e ? $e(n, this._week.dow) : e ? n[e.day()] : n;
            }),
            (jn.weekdaysMin = function (e) {
              return !0 === e
                ? $e(this._weekdaysMin, this._week.dow)
                : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin;
            }),
            (jn.weekdaysShort = function (e) {
              return !0 === e
                ? $e(this._weekdaysShort, this._week.dow)
                : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort;
            }),
            (jn.weekdaysParse = function (e, t, n) {
              var a, s, r;
              if (this._weekdaysParseExact) return nt.call(this, e, t, n);
              for (
                this._weekdaysParse ||
                  ((this._weekdaysParse = []),
                  (this._minWeekdaysParse = []),
                  (this._shortWeekdaysParse = []),
                  (this._fullWeekdaysParse = [])),
                  a = 0;
                a < 7;
                a++
              ) {
                if (
                  ((s = h([2e3, 1]).day(a)),
                  n &&
                    !this._fullWeekdaysParse[a] &&
                    ((this._fullWeekdaysParse[a] = new RegExp(
                      "^" + this.weekdays(s, "").replace(".", "\\.?") + "$",
                      "i"
                    )),
                    (this._shortWeekdaysParse[a] = new RegExp(
                      "^" +
                        this.weekdaysShort(s, "").replace(".", "\\.?") +
                        "$",
                      "i"
                    )),
                    (this._minWeekdaysParse[a] = new RegExp(
                      "^" + this.weekdaysMin(s, "").replace(".", "\\.?") + "$",
                      "i"
                    ))),
                  this._weekdaysParse[a] ||
                    ((r =
                      "^" +
                      this.weekdays(s, "") +
                      "|^" +
                      this.weekdaysShort(s, "") +
                      "|^" +
                      this.weekdaysMin(s, "")),
                    (this._weekdaysParse[a] = new RegExp(
                      r.replace(".", ""),
                      "i"
                    ))),
                  n && "dddd" === t && this._fullWeekdaysParse[a].test(e))
                )
                  return a;
                if (n && "ddd" === t && this._shortWeekdaysParse[a].test(e))
                  return a;
                if (n && "dd" === t && this._minWeekdaysParse[a].test(e))
                  return a;
                if (!n && this._weekdaysParse[a].test(e)) return a;
              }
            }),
            (jn.weekdaysRegex = function (e) {
              return this._weekdaysParseExact
                ? (o(this, "_weekdaysRegex") || at.call(this),
                  e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                : (o(this, "_weekdaysRegex") || (this._weekdaysRegex = Qe),
                  this._weekdaysStrictRegex && e
                    ? this._weekdaysStrictRegex
                    : this._weekdaysRegex);
            }),
            (jn.weekdaysShortRegex = function (e) {
              return this._weekdaysParseExact
                ? (o(this, "_weekdaysRegex") || at.call(this),
                  e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                : (o(this, "_weekdaysShortRegex") ||
                    (this._weekdaysShortRegex = et),
                  this._weekdaysShortStrictRegex && e
                    ? this._weekdaysShortStrictRegex
                    : this._weekdaysShortRegex);
            }),
            (jn.weekdaysMinRegex = function (e) {
              return this._weekdaysParseExact
                ? (o(this, "_weekdaysRegex") || at.call(this),
                  e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                : (o(this, "_weekdaysMinRegex") ||
                    (this._weekdaysMinRegex = tt),
                  this._weekdaysMinStrictRegex && e
                    ? this._weekdaysMinStrictRegex
                    : this._weekdaysMinRegex);
            }),
            (jn.isPM = function (e) {
              return "p" === (e + "").toLowerCase().charAt(0);
            }),
            (jn.meridiem = function (e, t, n) {
              return e > 11 ? (n ? "pm" : "PM") : n ? "am" : "AM";
            }),
            ft("en", {
              eras: [
                {
                  since: "0001-01-01",
                  until: 1 / 0,
                  offset: 1,
                  name: "Anno Domini",
                  narrow: "AD",
                  abbr: "AD",
                },
                {
                  since: "0000-12-31",
                  until: -1 / 0,
                  offset: 1,
                  name: "Before Christ",
                  narrow: "BC",
                  abbr: "BC",
                },
              ],
              dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
              ordinal: function (e) {
                var t = e % 10;
                return (
                  e +
                  (1 === me((e % 100) / 10)
                    ? "th"
                    : 1 === t
                    ? "st"
                    : 2 === t
                    ? "nd"
                    : 3 === t
                    ? "rd"
                    : "th")
                );
              },
            }),
            (s.lang = v(
              "moment.lang is deprecated. Use moment.locale instead.",
              ft
            )),
            (s.langData = v(
              "moment.langData is deprecated. Use moment.localeData instead.",
              pt
            ));
          var En = Math.abs;
          function An(e, t, n, a) {
            var s = Zt(t, n);
            return (
              (e._milliseconds += a * s._milliseconds),
              (e._days += a * s._days),
              (e._months += a * s._months),
              e._bubble()
            );
          }
          function Fn(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e);
          }
          function Nn(e) {
            return (4800 * e) / 146097;
          }
          function Cn(e) {
            return (146097 * e) / 4800;
          }
          function zn(e) {
            return function () {
              return this.as(e);
            };
          }
          var Rn = zn("ms"),
            Jn = zn("s"),
            In = zn("m"),
            qn = zn("h"),
            Un = zn("d"),
            Gn = zn("w"),
            Bn = zn("M"),
            Vn = zn("Q"),
            $n = zn("y"),
            Kn = Rn;
          function Zn(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN;
            };
          }
          var Xn = Zn("milliseconds"),
            Qn = Zn("seconds"),
            ea = Zn("minutes"),
            ta = Zn("hours"),
            na = Zn("days"),
            aa = Zn("months"),
            sa = Zn("years");
          var ra = Math.round,
            ia = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 };
          function oa(e, t, n, a, s) {
            return s.relativeTime(t || 1, !!n, e, a);
          }
          var da = Math.abs;
          function ua(e) {
            return (e > 0) - (e < 0) || +e;
          }
          function _a() {
            if (!this.isValid()) return this.localeData().invalidDate();
            var e,
              t,
              n,
              a,
              s,
              r,
              i,
              o,
              d = da(this._milliseconds) / 1e3,
              u = da(this._days),
              _ = da(this._months),
              l = this.asSeconds();
            return l
              ? ((e = le(d / 60)),
                (t = le(e / 60)),
                (d %= 60),
                (e %= 60),
                (n = le(_ / 12)),
                (_ %= 12),
                (a = d ? d.toFixed(3).replace(/\.?0+$/, "") : ""),
                (s = l < 0 ? "-" : ""),
                (r = ua(this._months) !== ua(l) ? "-" : ""),
                (i = ua(this._days) !== ua(l) ? "-" : ""),
                (o = ua(this._milliseconds) !== ua(l) ? "-" : ""),
                s +
                  "P" +
                  (n ? r + n + "Y" : "") +
                  (_ ? r + _ + "M" : "") +
                  (u ? i + u + "D" : "") +
                  (t || e || d ? "T" : "") +
                  (t ? o + t + "H" : "") +
                  (e ? o + e + "M" : "") +
                  (d ? o + a + "S" : ""))
              : "P0D";
          }
          var la = zt.prototype;
          return (
            (la.isValid = function () {
              return this._isValid;
            }),
            (la.abs = function () {
              var e = this._data;
              return (
                (this._milliseconds = En(this._milliseconds)),
                (this._days = En(this._days)),
                (this._months = En(this._months)),
                (e.milliseconds = En(e.milliseconds)),
                (e.seconds = En(e.seconds)),
                (e.minutes = En(e.minutes)),
                (e.hours = En(e.hours)),
                (e.months = En(e.months)),
                (e.years = En(e.years)),
                this
              );
            }),
            (la.add = function (e, t) {
              return An(this, e, t, 1);
            }),
            (la.subtract = function (e, t) {
              return An(this, e, t, -1);
            }),
            (la.as = function (e) {
              if (!this.isValid()) return NaN;
              var t,
                n,
                a = this._milliseconds;
              if ("month" === (e = z(e)) || "quarter" === e || "year" === e)
                switch (
                  ((t = this._days + a / 864e5), (n = this._months + Nn(t)), e)
                ) {
                  case "month":
                    return n;
                  case "quarter":
                    return n / 3;
                  case "year":
                    return n / 12;
                }
              else
                switch (((t = this._days + Math.round(Cn(this._months))), e)) {
                  case "week":
                    return t / 7 + a / 6048e5;
                  case "day":
                    return t + a / 864e5;
                  case "hour":
                    return 24 * t + a / 36e5;
                  case "minute":
                    return 1440 * t + a / 6e4;
                  case "second":
                    return 86400 * t + a / 1e3;
                  case "millisecond":
                    return Math.floor(864e5 * t) + a;
                  default:
                    throw new Error("Unknown unit " + e);
                }
            }),
            (la.asMilliseconds = Rn),
            (la.asSeconds = Jn),
            (la.asMinutes = In),
            (la.asHours = qn),
            (la.asDays = Un),
            (la.asWeeks = Gn),
            (la.asMonths = Bn),
            (la.asQuarters = Vn),
            (la.asYears = $n),
            (la.valueOf = Kn),
            (la._bubble = function () {
              var e,
                t,
                n,
                a,
                s,
                r = this._milliseconds,
                i = this._days,
                o = this._months,
                d = this._data;
              return (
                (r >= 0 && i >= 0 && o >= 0) ||
                  (r <= 0 && i <= 0 && o <= 0) ||
                  ((r += 864e5 * Fn(Cn(o) + i)), (i = 0), (o = 0)),
                (d.milliseconds = r % 1e3),
                (e = le(r / 1e3)),
                (d.seconds = e % 60),
                (t = le(e / 60)),
                (d.minutes = t % 60),
                (n = le(t / 60)),
                (d.hours = n % 24),
                (i += le(n / 24)),
                (o += s = le(Nn(i))),
                (i -= Fn(Cn(s))),
                (a = le(o / 12)),
                (o %= 12),
                (d.days = i),
                (d.months = o),
                (d.years = a),
                this
              );
            }),
            (la.clone = function () {
              return Zt(this);
            }),
            (la.get = function (e) {
              return (e = z(e)), this.isValid() ? this[e + "s"]() : NaN;
            }),
            (la.milliseconds = Xn),
            (la.seconds = Qn),
            (la.minutes = ea),
            (la.hours = ta),
            (la.days = na),
            (la.weeks = function () {
              return le(this.days() / 7);
            }),
            (la.months = aa),
            (la.years = sa),
            (la.humanize = function (e, t) {
              if (!this.isValid()) return this.localeData().invalidDate();
              var n,
                a,
                s = !1,
                r = ia;
              return (
                "object" == typeof e && ((t = e), (e = !1)),
                "boolean" == typeof e && (s = e),
                "object" == typeof t &&
                  ((r = Object.assign({}, ia, t)),
                  null != t.s && null == t.ss && (r.ss = t.s - 1)),
                (a = (function (e, t, n, a) {
                  var s = Zt(e).abs(),
                    r = ra(s.as("s")),
                    i = ra(s.as("m")),
                    o = ra(s.as("h")),
                    d = ra(s.as("d")),
                    u = ra(s.as("M")),
                    _ = ra(s.as("w")),
                    l = ra(s.as("y")),
                    m =
                      (r <= n.ss && ["s", r]) ||
                      (r < n.s && ["ss", r]) ||
                      (i <= 1 && ["m"]) ||
                      (i < n.m && ["mm", i]) ||
                      (o <= 1 && ["h"]) ||
                      (o < n.h && ["hh", o]) ||
                      (d <= 1 && ["d"]) ||
                      (d < n.d && ["dd", d]);
                  return (
                    null != n.w &&
                      (m = m || (_ <= 1 && ["w"]) || (_ < n.w && ["ww", _])),
                    ((m = m ||
                      (u <= 1 && ["M"]) ||
                      (u < n.M && ["MM", u]) ||
                      (l <= 1 && ["y"]) || ["yy", l])[2] = t),
                    (m[3] = +e > 0),
                    (m[4] = a),
                    oa.apply(null, m)
                  );
                })(this, !s, r, (n = this.localeData()))),
                s && (a = n.pastFuture(+this, a)),
                n.postformat(a)
              );
            }),
            (la.toISOString = _a),
            (la.toString = _a),
            (la.toJSON = _a),
            (la.locale = dn),
            (la.localeData = _n),
            (la.toIsoString = v(
              "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
              _a
            )),
            (la.lang = un),
            A("X", 0, 0, "unix"),
            A("x", 0, 0, "valueOf"),
            de("x", ne),
            de("X", /[+-]?\d+(\.\d{1,3})?/),
            he("X", function (e, t, n) {
              n._d = new Date(1e3 * parseFloat(e));
            }),
            he("x", function (e, t, n) {
              n._d = new Date(me(e));
            }),
            (s.version = "2.30.1"),
            (t = Et),
            (s.fn = Hn),
            (s.min = function () {
              return Nt("isBefore", [].slice.call(arguments, 0));
            }),
            (s.max = function () {
              return Nt("isAfter", [].slice.call(arguments, 0));
            }),
            (s.now = function () {
              return Date.now ? Date.now() : +new Date();
            }),
            (s.utc = h),
            (s.unix = function (e) {
              return Et(1e3 * e);
            }),
            (s.months = function (e, t) {
              return Pn(e, t, "months");
            }),
            (s.isDate = l),
            (s.locale = ft),
            (s.invalid = p),
            (s.duration = Zt),
            (s.isMoment = k),
            (s.weekdays = function (e, t, n) {
              return Wn(e, t, n, "weekdays");
            }),
            (s.parseZone = function () {
              return Et.apply(null, arguments).parseZone();
            }),
            (s.localeData = pt),
            (s.isDuration = Rt),
            (s.monthsShort = function (e, t) {
              return Pn(e, t, "monthsShort");
            }),
            (s.weekdaysMin = function (e, t, n) {
              return Wn(e, t, n, "weekdaysMin");
            }),
            (s.defineLocale = Mt),
            (s.updateLocale = function (e, t) {
              if (null != t) {
                var n,
                  a,
                  s = ut;
                null != _t[e] && null != _t[e].parentLocale
                  ? _t[e].set(H(_t[e]._config, t))
                  : (null != (a = ht(e)) && (s = a._config),
                    (t = H(s, t)),
                    null == a && (t.abbr = e),
                    ((n = new x(t)).parentLocale = _t[e]),
                    (_t[e] = n)),
                  ft(e);
              } else
                null != _t[e] &&
                  (null != _t[e].parentLocale
                    ? ((_t[e] = _t[e].parentLocale), e === ft() && ft(e))
                    : null != _t[e] && delete _t[e]);
              return _t[e];
            }),
            (s.locales = function () {
              return T(_t);
            }),
            (s.weekdaysShort = function (e, t, n) {
              return Wn(e, t, n, "weekdaysShort");
            }),
            (s.normalizeUnits = z),
            (s.relativeTimeRounding = function (e) {
              return void 0 === e
                ? ra
                : "function" == typeof e && ((ra = e), !0);
            }),
            (s.relativeTimeThreshold = function (e, t) {
              return (
                void 0 !== ia[e] &&
                (void 0 === t
                  ? ia[e]
                  : ((ia[e] = t), "s" === e && (ia.ss = t - 1), !0))
              );
            }),
            (s.calendarFormat = function (e, t) {
              var n = e.diff(t, "days", !0);
              return n < -6
                ? "sameElse"
                : n < -1
                ? "lastWeek"
                : n < 0
                ? "lastDay"
                : n < 1
                ? "sameDay"
                : n < 2
                ? "nextDay"
                : n < 7
                ? "nextWeek"
                : "sameElse";
            }),
            (s.prototype = Hn),
            (s.HTML5_FMT = {
              DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
              DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
              DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
              DATE: "YYYY-MM-DD",
              TIME: "HH:mm",
              TIME_SECONDS: "HH:mm:ss",
              TIME_MS: "HH:mm:ss.SSS",
              WEEK: "GGGG-[W]WW",
              MONTH: "YYYY-MM",
            }),
            s
          );
        })();
      },
      5072: (e, t, n) => {
        "use strict";
        var a,
          s = (function () {
            var e = {};
            return function (t) {
              if (void 0 === e[t]) {
                var n = document.querySelector(t);
                if (
                  window.HTMLIFrameElement &&
                  n instanceof window.HTMLIFrameElement
                )
                  try {
                    n = n.contentDocument.head;
                  } catch (e) {
                    n = null;
                  }
                e[t] = n;
              }
              return e[t];
            };
          })(),
          r = [];
        function i(e) {
          for (var t = -1, n = 0; n < r.length; n++)
            if (r[n].identifier === e) {
              t = n;
              break;
            }
          return t;
        }
        function o(e, t) {
          for (var n = {}, a = [], s = 0; s < e.length; s++) {
            var o = e[s],
              d = t.base ? o[0] + t.base : o[0],
              u = n[d] || 0,
              _ = "".concat(d, " ").concat(u);
            n[d] = u + 1;
            var l = i(_),
              m = { css: o[1], media: o[2], sourceMap: o[3] };
            -1 !== l
              ? (r[l].references++, r[l].updater(m))
              : r.push({ identifier: _, updater: f(m, t), references: 1 }),
              a.push(_);
          }
          return a;
        }
        function d(e) {
          var t = document.createElement("style"),
            a = e.attributes || {};
          if (void 0 === a.nonce) {
            var r = n.nc;
            r && (a.nonce = r);
          }
          if (
            (Object.keys(a).forEach(function (e) {
              t.setAttribute(e, a[e]);
            }),
            "function" == typeof e.insert)
          )
            e.insert(t);
          else {
            var i = s(e.insert || "head");
            if (!i)
              throw new Error(
                "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
              );
            i.appendChild(t);
          }
          return t;
        }
        var u,
          _ =
            ((u = []),
            function (e, t) {
              return (u[e] = t), u.filter(Boolean).join("\n");
            });
        function l(e, t, n, a) {
          var s = n
            ? ""
            : a.media
            ? "@media ".concat(a.media, " {").concat(a.css, "}")
            : a.css;
          if (e.styleSheet) e.styleSheet.cssText = _(t, s);
          else {
            var r = document.createTextNode(s),
              i = e.childNodes;
            i[t] && e.removeChild(i[t]),
              i.length ? e.insertBefore(r, i[t]) : e.appendChild(r);
          }
        }
        function m(e, t, n) {
          var a = n.css,
            s = n.media,
            r = n.sourceMap;
          if (
            (s ? e.setAttribute("media", s) : e.removeAttribute("media"),
            r &&
              "undefined" != typeof btoa &&
              (a +=
                "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                  btoa(unescape(encodeURIComponent(JSON.stringify(r)))),
                  " */"
                )),
            e.styleSheet)
          )
            e.styleSheet.cssText = a;
          else {
            for (; e.firstChild; ) e.removeChild(e.firstChild);
            e.appendChild(document.createTextNode(a));
          }
        }
        var c = null,
          h = 0;
        function f(e, t) {
          var n, a, s;
          if (t.singleton) {
            var r = h++;
            (n = c || (c = d(t))),
              (a = l.bind(null, n, r, !1)),
              (s = l.bind(null, n, r, !0));
          } else
            (n = d(t)),
              (a = m.bind(null, n, t)),
              (s = function () {
                !(function (e) {
                  if (null === e.parentNode) return !1;
                  e.parentNode.removeChild(e);
                })(n);
              });
          return (
            a(e),
            function (t) {
              if (t) {
                if (
                  t.css === e.css &&
                  t.media === e.media &&
                  t.sourceMap === e.sourceMap
                )
                  return;
                a((e = t));
              } else s();
            }
          );
        }
        e.exports = function (e, t) {
          (t = t || {}).singleton ||
            "boolean" == typeof t.singleton ||
            (t.singleton =
              (void 0 === a &&
                (a = Boolean(
                  window && document && document.all && !window.atob
                )),
              a));
          var n = o((e = e || []), t);
          return function (e) {
            if (
              ((e = e || []),
              "[object Array]" === Object.prototype.toString.call(e))
            ) {
              for (var a = 0; a < n.length; a++) {
                var s = i(n[a]);
                r[s].references--;
              }
              for (var d = o(e, t), u = 0; u < n.length; u++) {
                var _ = i(n[u]);
                0 === r[_].references && (r[_].updater(), r.splice(_, 1));
              }
              n = d;
            }
          };
        };
      },
    },
    t = {};
  function n(a) {
    var s = t[a];
    if (void 0 !== s) return s.exports;
    var r = (t[a] = { id: a, loaded: !1, exports: {} });
    return e[a].call(r.exports, r, r.exports, n), (r.loaded = !0), r.exports;
  }
  (n.n = (e) => {
    var t = e && e.__esModule ? () => e.default : () => e;
    return n.d(t, { a: t }), t;
  }),
    (n.d = (e, t) => {
      for (var a in t)
        n.o(t, a) &&
          !n.o(e, a) &&
          Object.defineProperty(e, a, { enumerable: !0, get: t[a] });
    }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.nmd = (e) => ((e.paths = []), e.children || (e.children = []), e)),
    (n.nc = void 0),
    (() => {
      "use strict";
      var e = n(5072),
        t = n.n(e),
        a = n(8106);
      t()(a.A, { insert: "head", singleton: !1 }), a.A.locals;
      var s = n(4692),
        r = n.n(s),
        i = n(5093),
        o = n.n(i);
      !(function e() {
        o().locale("id"),
          r()(".time").text(o()().format("LTS")),
          r()(".date").text(o()().format("LL")),
          setTimeout(e, 1e3);
      })();
    })();
})();
