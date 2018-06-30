/**
 * Created by hemanthkumar on 09/04/18.
 */
/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */
! function(t) {
    function e(i) {
        if (n[i]) return n[i].exports;
        var r = n[i] = {
            i: i,
            l: !1,
            exports: {}
        };
        return t[i].call(r.exports, r, r.exports, e), r.l = !0, r.exports
    }
    var n = {};
    e.m = t, e.c = n, e.d = function(t, n, i) {
        e.o(t, n) || Object.defineProperty(t, n, {
            configurable: !1,
            enumerable: !0,
            get: i
        })
    }, e.n = function(t) {
        var n = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return e.d(n, "a", n), n
    }, e.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, e.p = "", e(e.s = 4)
}([function(t, e, n) {
    function i(t) {
        u.env() && (m(t.design) && h.on("__wf_design", t.design), m(t.preview) && h.on("__wf_preview", t.preview)), m(t.destroy) && h.on("__wf_destroy", t.destroy), t.ready && m(t.ready) && function(t) {
            if (w) return void t.ready();
            if (v.contains(l, t.ready)) return;
            l.push(t.ready)
        }(t)
    }

    function r(t) {
        m(t.design) && h.off("__wf_design", t.design), m(t.preview) && h.off("__wf_preview", t.preview), m(t.destroy) && h.off("__wf_destroy", t.destroy), t.ready && m(t.ready) && function(t) {
            l = v.filter(l, function(e) {
                return e !== t.ready
            })
        }(t)
    }

    function o(t, e) {
        var n = [],
            i = {};
        return i.up = v.throttle(function(t) {
            v.each(n, function(e) {
                e(t)
            })
        }), t && e && t.on(e, i.up), i.on = function(t) {
            "function" == typeof t && (v.contains(n, t) || n.push(t))
        }, i.off = function(t) {
            n = arguments.length ? v.filter(n, function(e) {
                return e !== t
            }) : []
        }, i
    }

    function a(t) {
        m(t) && t()
    }

    function s() {
        E && (E.reject(), h.off("load", E.resolve)), E = new d.Deferred, h.on("load", E.resolve)
    }
    var u = {},
        c = {},
        l = [],
        f = window.Webflow || [],
        d = window.jQuery,
        h = d(window),
        p = d(document),
        m = d.isFunction,
        v = u._ = n(6),
        g = n(1) && d.tram,
        w = !1,
        b = !1;
    g.config.hideBackface = !1, g.config.keepInherited = !0, u.define = function(t, e, n) {
        c[t] && r(c[t]);
        var o = c[t] = e(d, v, n) || {};
        return i(o), o
    }, u.require = function(t) {
        return c[t]
    }, u.push = function(t) {
        w ? m(t) && t() : f.push(t)
    }, u.env = function(t) {
        var e = window.__wf_design,
            n = void 0 !== e;
        return t ? "design" === t ? n && e : "preview" === t ? n && !e : "slug" === t ? n && window.__wf_slug : "editor" === t ? window.WebflowEditor : "test" === t ? window.__wf_test : "frame" === t ? window !== window.top : void 0 : n
    };
    var y = navigator.userAgent.toLowerCase(),
        x = u.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
        k = u.env.chrome = /chrome/.test(y) && /Google/.test(navigator.vendor) && parseInt(y.match(/chrome\/(\d+)\./)[1], 10),
        _ = u.env.ios = /(ipod|iphone|ipad)/.test(y);
    u.env.safari = /safari/.test(y) && !k && !_;
    var T;
    x && p.on("touchstart mousedown", function(t) {
        T = t.target
    }), u.validClick = x ? function(t) {
        return t === T || d.contains(t, T)
    } : function() {
        return !0
    };
    var O = "resize.webflow orientationchange.webflow load.webflow";
    u.resize = o(h, O), u.scroll = o(h, "scroll.webflow resize.webflow orientationchange.webflow load.webflow"), u.redraw = o(), u.location = function(t) {
        window.location = t
    }, u.env() && (u.location = function() {}), u.ready = function() {
        w = !0, b ? (b = !1, v.each(c, i)) : v.each(l, a), v.each(f, a), u.resize.up()
    };
    var E;
    u.load = function(t) {
        E.then(t)
    }, u.destroy = function(t) {
        t = t || {}, b = !0, h.triggerHandler("__wf_destroy"), null != t.domready && (w = t.domready), v.each(c, r), u.resize.off(), u.scroll.off(), u.redraw.off(), l = [], f = [], "pending" === E.state() && s()
    }, d(u.ready), s(), t.exports = window.Webflow = u
}, function(t, e) {
    var n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
        return typeof t
    } : function(t) {
        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
    };
    window.tram = function(t) {
        function e(t, e) {
            return (new $.Bare).init(t, e)
        }

        function i(t) {
            return t.replace(/[A-Z]/g, function(t) {
                return "-" + t.toLowerCase()
            })
        }

        function r(t) {
            var e = parseInt(t.slice(1), 16);
            return [e >> 16 & 255, e >> 8 & 255, 255 & e]
        }

        function o(t, e, n) {
            return "#" + (1 << 24 | t << 16 | e << 8 | n).toString(16).slice(1)
        }

        function a() {}

        function s(t, e, n) {
            if (void 0 !== e && (n = e), void 0 === t) return n;
            var i = n;
            return G.test(t) || !Q.test(t) ? i = parseInt(t, 10) : Q.test(t) && (i = 1e3 * parseFloat(t)), 0 > i && (i = 0), i == i ? i : n
        }

        function u(t) {
            H.debug && window && window.console.warn(t)
        }
        var c = function(t, e, i) {
                function r(t) {
                    return "object" == (void 0 === t ? "undefined" : n(t))
                }

                function o(t) {
                    return "function" == typeof t
                }

                function a() {}

                function s(n, u) {
                    function c() {
                        var t = new l;
                        return o(t.init) && t.init.apply(t, arguments), t
                    }

                    function l() {}
                    u === i && (u = n, n = Object), c.Bare = l;
                    var f, d = a[t] = n[t],
                        h = l[t] = c[t] = new a;
                    return h.constructor = c, c.mixin = function(e) {
                        return l[t] = c[t] = s(c, e)[t], c
                    }, c.open = function(t) {
                        if (f = {}, o(t) ? f = t.call(c, h, d, c, n) : r(t) && (f = t), r(f))
                            for (var i in f) e.call(f, i) && (h[i] = f[i]);
                        return o(h.init) || (h.init = n), c
                    }, c.open(u)
                }
                return s
            }("prototype", {}.hasOwnProperty),
            l = {
                ease: ["ease", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-2.75 * o * r + 11 * r * r + -15.5 * o + 8 * r + .25 * t)
                }],
                "ease-in": ["ease-in", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (-1 * o * r + 3 * r * r + -3 * o + 2 * r)
                }],
                "ease-out": ["ease-out", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (.3 * o * r + -1.6 * r * r + 2.2 * o + -1.8 * r + 1.9 * t)
                }],
                "ease-in-out": ["ease-in-out", function(t, e, n, i) {
                    var r = (t /= i) * t,
                        o = r * t;
                    return e + n * (2 * o * r + -5 * r * r + 2 * o + 2 * r)
                }],
                linear: ["linear", function(t, e, n, i) {
                    return n * t / i + e
                }],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(t, e, n, i) {
                    return n * (t /= i) * t + e
                }],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(t, e, n, i) {
                    return -n * (t /= i) * (t - 2) + e
                }],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t + e : -n / 2 * (--t * (t - 2) - 1) + e
                }],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(t, e, n, i) {
                    return n * (t /= i) * t * t + e
                }],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t + 1) + e
                }],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t + e : n / 2 * ((t -= 2) * t * t + 2) + e
                }],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(t, e, n, i) {
                    return n * (t /= i) * t * t * t + e
                }],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(t, e, n, i) {
                    return -n * ((t = t / i - 1) * t * t * t - 1) + e
                }],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t + e : -n / 2 * ((t -= 2) * t * t * t - 2) + e
                }],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(t, e, n, i) {
                    return n * (t /= i) * t * t * t * t + e
                }],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(t, e, n, i) {
                    return n * ((t = t / i - 1) * t * t * t * t + 1) + e
                }],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? n / 2 * t * t * t * t * t + e : n / 2 * ((t -= 2) * t * t * t * t + 2) + e
                }],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(t, e, n, i) {
                    return -n * Math.cos(t / i * (Math.PI / 2)) + n + e
                }],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(t, e, n, i) {
                    return n * Math.sin(t / i * (Math.PI / 2)) + e
                }],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(t, e, n, i) {
                    return -n / 2 * (Math.cos(Math.PI * t / i) - 1) + e
                }],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(t, e, n, i) {
                    return 0 === t ? e : n * Math.pow(2, 10 * (t / i - 1)) + e
                }],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(t, e, n, i) {
                    return t === i ? e + n : n * (1 - Math.pow(2, -10 * t / i)) + e
                }],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(t, e, n, i) {
                    return 0 === t ? e : t === i ? e + n : (t /= i / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + e : n / 2 * (2 - Math.pow(2, -10 * --t)) + e
                }],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(t, e, n, i) {
                    return -n * (Math.sqrt(1 - (t /= i) * t) - 1) + e
                }],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(t, e, n, i) {
                    return n * Math.sqrt(1 - (t = t / i - 1) * t) + e
                }],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(t, e, n, i) {
                    return (t /= i / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + e : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + e
                }],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * (t /= i) * t * ((r + 1) * t - r) + e
                }],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), n * ((t = t / i - 1) * t * ((r + 1) * t + r) + 1) + e
                }],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(t, e, n, i, r) {
                    return void 0 === r && (r = 1.70158), (t /= i / 2) < 1 ? n / 2 * t * t * ((1 + (r *= 1.525)) * t - r) + e : n / 2 * ((t -= 2) * t * ((1 + (r *= 1.525)) * t + r) + 2) + e
                }]
            },
            f = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            },
            d = document,
            h = window,
            p = "bkwld-tram",
            m = /[\-\.0-9]/g,
            v = /[A-Z]/,
            g = "number",
            w = /^(rgb|#)/,
            b = /(em|cm|mm|in|pt|pc|px)$/,
            y = /(em|cm|mm|in|pt|pc|px|%)$/,
            x = /(deg|rad|turn)$/,
            k = /(all|none) 0s ease 0s/,
            _ = /^(width|height)$/,
            T = " ",
            O = d.createElement("a"),
            E = ["Webkit", "Moz", "O", "ms"],
            L = ["-webkit-", "-moz-", "-o-", "-ms-"],
            C = function(t) {
                if (t in O.style) return {
                    dom: t,
                    css: t
                };
                var e, n, i = "",
                    r = t.split("-");
                for (e = 0; e < r.length; e++) i += r[e].charAt(0).toUpperCase() + r[e].slice(1);
                for (e = 0; e < E.length; e++)
                    if ((n = E[e] + i) in O.style) return {
                        dom: n,
                        css: L[e] + t
                    }
            },
            z = e.support = {
                bind: Function.prototype.bind,
                transform: C("transform"),
                transition: C("transition"),
                backface: C("backface-visibility"),
                timing: C("transition-timing-function")
            };
        if (z.transition) {
            var j = z.timing.dom;
            if (O.style[j] = l["ease-in-back"][0], !O.style[j])
                for (var A in f) l[A][0] = f[A]
        }
        var M = e.frame = function() {
                var t = h.requestAnimationFrame || h.webkitRequestAnimationFrame || h.mozRequestAnimationFrame || h.oRequestAnimationFrame || h.msRequestAnimationFrame;
                return t && z.bind ? t.bind(h) : function(t) {
                    h.setTimeout(t, 16)
                }
            }(),
            I = e.now = function() {
                var t = h.performance,
                    e = t && (t.now || t.webkitNow || t.msNow || t.mozNow);
                return e && z.bind ? e.bind(t) : Date.now || function() {
                    return +new Date
                }
            }(),
            S = c(function(e) {
                function r(t, e) {
                    var n = function(t) {
                            for (var e = -1, n = t ? t.length : 0, i = []; ++e < n;) {
                                var r = t[e];
                                r && i.push(r)
                            }
                            return i
                        }(("" + t).split(T)),
                        i = n[0];
                    e = e || {};
                    var r = Z[i];
                    if (!r) return u("Unsupported property: " + i);
                    if (!e.weak || !this.props[i]) {
                        var o = r[0],
                            a = this.props[i];
                        return a || (a = this.props[i] = new o.Bare), a.init(this.$el, n, r, e), a
                    }
                }

                function o(t, e, i) {
                    if (t) {
                        var o = void 0 === t ? "undefined" : n(t);
                        if (e || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), "number" == o && e) return this.timer = new B({
                            duration: t,
                            context: this,
                            complete: a
                        }), void(this.active = !0);
                        if ("string" == o && e) {
                            switch (t) {
                                case "hide":
                                    l.call(this);
                                    break;
                                case "stop":
                                    c.call(this);
                                    break;
                                case "redraw":
                                    f.call(this);
                                    break;
                                default:
                                    r.call(this, t, i && i[1])
                            }
                            return a.call(this)
                        }
                        if ("function" == o) return void t.call(this, this);
                        if ("object" == o) {
                            var u = 0;
                            h.call(this, t, function(t, e) {
                                t.span > u && (u = t.span), t.stop(), t.animate(e)
                            }, function(t) {
                                "wait" in t && (u = s(t.wait, 0))
                            }), d.call(this), u > 0 && (this.timer = new B({
                                duration: u,
                                context: this
                            }), this.active = !0, e && (this.timer.complete = a));
                            var p = this,
                                m = !1,
                                v = {};
                            M(function() {
                                h.call(p, t, function(t) {
                                    t.active && (m = !0, v[t.name] = t.nextStyle)
                                }), m && p.$el.css(v)
                            })
                        }
                    }
                }

                function a() {
                    if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
                        var t = this.queue.shift();
                        o.call(this, t.options, !0, t.args)
                    }
                }

                function c(t) {
                    this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
                    var e;
                    "string" == typeof t ? (e = {}, e[t] = 1) : e = "object" == (void 0 === t ? "undefined" : n(t)) && null != t ? t : this.props, h.call(this, e, m), d.call(this)
                }

                function l() {
                    c.call(this), this.el.style.display = "none"
                }

                function f() {
                    this.el.offsetHeight
                }

                function d() {
                    var t, e, n = [];
                    this.upstream && n.push(this.upstream);
                    for (t in this.props)(e = this.props[t]).active && n.push(e.string);
                    n = n.join(","), this.style !== n && (this.style = n, this.el.style[z.transition.dom] = n)
                }

                function h(t, e, n) {
                    var o, a, s, u, c = e !== m,
                        l = {};
                    for (o in t) s = t[o], o in Y ? (l.transform || (l.transform = {}), l.transform[o] = s) : (v.test(o) && (o = i(o)), o in Z ? l[o] = s : (u || (u = {}), u[o] = s));
                    for (o in l) {
                        if (s = l[o], !(a = this.props[o])) {
                            if (!c) continue;
                            a = r.call(this, o)
                        }
                        e.call(this, a, s)
                    }
                    n && u && n.call(this, u)
                }

                function m(t) {
                    t.stop()
                }

                function g(t, e) {
                    t.set(e)
                }

                function w(t) {
                    this.$el.css(t)
                }

                function b(t, n) {
                    e[t] = function() {
                        return this.children ? function(t, e) {
                            var n, i = this.children.length;
                            for (n = 0; i > n; n++) t.apply(this.children[n], e);
                            return this
                        }.call(this, n, arguments) : (this.el && n.apply(this, arguments), this)
                    }
                }
                e.init = function(e) {
                    if (this.$el = t(e), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, H.keepInherited && !H.fallback) {
                        var n = U(this.el, "transition");
                        n && !k.test(n) && (this.upstream = n)
                    }
                    z.backface && H.hideBackface && X(this.el, z.backface.css, "hidden")
                }, b("add", r), b("start", o), b("wait", function(t) {
                    t = s(t, 0), this.active ? this.queue.push({
                        options: t
                    }) : (this.timer = new B({
                        duration: t,
                        context: this,
                        complete: a
                    }), this.active = !0)
                }), b("then", function(t) {
                    return this.active ? (this.queue.push({
                        options: t,
                        args: arguments
                    }), void(this.timer.complete = a)) : u("No active transition timer. Use start() or wait() before then().")
                }), b("next", a), b("stop", c), b("set", function(t) {
                    c.call(this, t), h.call(this, t, g, w)
                }), b("show", function(t) {
                    "string" != typeof t && (t = "block"), this.el.style.display = t
                }), b("hide", l), b("redraw", f), b("destroy", function() {
                    c.call(this), t.removeData(this.el, p), this.$el = this.el = null
                })
            }),
            $ = c(S, function(e) {
                function n(e, n) {
                    var i = t.data(e, p) || t.data(e, p, new S.Bare);
                    return i.el || i.init(e), n ? i.start(n) : i
                }
                e.init = function(e, i) {
                    var r = t(e);
                    if (!r.length) return this;
                    if (1 === r.length) return n(r[0], i);
                    var o = [];
                    return r.each(function(t, e) {
                        o.push(n(e, i))
                    }), this.children = o, this
                }
            }),
            q = c(function(t) {
                function e() {
                    var t = this.get();
                    this.update("auto");
                    var e = this.get();
                    return this.update(t), e
                }
                var i = 500,
                    r = "ease",
                    a = 0;
                t.init = function(t, e, n, o) {
                    this.$el = t, this.el = t[0];
                    var u = e[0];
                    n[2] && (u = n[2]), W[u] && (u = W[u]), this.name = u, this.type = n[1], this.duration = s(e[1], this.duration, i), this.ease = function(t, e, n) {
                        return void 0 !== e && (n = e), t in l ? t : n
                    }(e[2], this.ease, r), this.delay = s(e[3], this.delay, a), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = _.test(this.name), this.unit = o.unit || this.unit || H.defaultUnit, this.angle = o.angle || this.angle || H.defaultAngle, H.fallback || o.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + T + this.duration + "ms" + ("ease" != this.ease ? T + l[this.ease][0] : "") + (this.delay ? T + this.delay + "ms" : ""))
                }, t.set = function(t) {
                    t = this.convert(t, this.type), this.update(t), this.redraw()
                }, t.transition = function(t) {
                    this.active = !0, t = this.convert(t, this.type), this.auto && ("auto" == this.el.style[this.name] && (this.update(this.get()), this.redraw()), "auto" == t && (t = e.call(this))), this.nextStyle = t
                }, t.fallback = function(t) {
                    var n = this.el.style[this.name] || this.convert(this.get(), this.type);
                    t = this.convert(t, this.type), this.auto && ("auto" == n && (n = this.convert(this.get(), this.type)), "auto" == t && (t = e.call(this))), this.tween = new P({
                        from: n,
                        to: t,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.get = function() {
                    return U(this.el, this.name)
                }, t.update = function(t) {
                    X(this.el, this.name, t)
                }, t.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, X(this.el, this.name, this.get()));
                    var t = this.tween;
                    t && t.context && t.destroy()
                }, t.convert = function(t, e) {
                    if ("auto" == t && this.auto) return t;
                    var i, r = "number" == typeof t,
                        a = "string" == typeof t;
                    switch (e) {
                        case g:
                            if (r) return t;
                            if (a && "" === t.replace(m, "")) return +t;
                            i = "number(unitless)";
                            break;
                        case w:
                            if (a) {
                                if ("" === t && this.original) return this.original;
                                if (e.test(t)) return "#" == t.charAt(0) && 7 == t.length ? t : function(t) {
                                    var e = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(t);
                                    return (e ? o(e[1], e[2], e[3]) : t).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                                }(t)
                            }
                            i = "hex or rgb string";
                            break;
                        case b:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit)";
                            break;
                        case y:
                            if (r) return t + this.unit;
                            if (a && e.test(t)) return t;
                            i = "number(px) or string(unit or %)";
                            break;
                        case x:
                            if (r) return t + this.angle;
                            if (a && e.test(t)) return t;
                            i = "number(deg) or string(angle)";
                            break;
                        case "unitless":
                            if (r) return t;
                            if (a && y.test(t)) return t;
                            i = "number(unitless) or string(unit or %)"
                    }
                    return function(t, e) {
                        u("Type warning: Expected: [" + t + "] Got: [" + (void 0 === e ? "undefined" : n(e)) + "] " + e)
                    }(i, t), t
                }, t.redraw = function() {
                    this.el.offsetHeight
                }
            }),
            D = c(q, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), w))
                }
            }),
            R = c(q, function(t, e) {
                t.init = function() {
                    e.init.apply(this, arguments), this.animate = this.fallback
                }, t.get = function() {
                    return this.$el[this.name]()
                }, t.update = function(t) {
                    this.$el[this.name](t)
                }
            }),
            N = c(q, function(t, e) {
                function n(t, e) {
                    var n, i, r, o, a;
                    for (n in t) r = (o = Y[n])[0], i = o[1] || n, a = this.convert(t[n], r), e.call(this, i, a, r)
                }
                t.init = function() {
                    e.init.apply(this, arguments), this.current || (this.current = {}, Y.perspective && H.perspective && (this.current.perspective = H.perspective, X(this.el, this.name, this.style(this.current)), this.redraw()))
                }, t.set = function(t) {
                    n.call(this, t, function(t, e) {
                        this.current[t] = e
                    }), X(this.el, this.name, this.style(this.current)), this.redraw()
                }, t.transition = function(t) {
                    var e = this.values(t);
                    this.tween = new F({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var n, i = {};
                    for (n in this.current) i[n] = n in e ? e[n] : this.current[n];
                    this.active = !0, this.nextStyle = this.style(i)
                }, t.fallback = function(t) {
                    var e = this.values(t);
                    this.tween = new F({
                        current: this.current,
                        values: e,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }, t.update = function() {
                    X(this.el, this.name, this.style(this.current))
                }, t.style = function(t) {
                    var e, n = "";
                    for (e in t) n += e + "(" + t[e] + ") ";
                    return n
                }, t.values = function(t) {
                    var e, i = {};
                    return n.call(this, t, function(t, n, r) {
                        i[t] = n, void 0 === this.current[t] && (e = 0, ~t.indexOf("scale") && (e = 1), this.current[t] = this.convert(e, r))
                    }), i
                }
            }),
            P = c(function(e) {
                function n() {
                    var t, e, i, r = s.length;
                    if (r)
                        for (M(n), e = I(), t = r; t--;)(i = s[t]) && i.render(e)
                }
                var i = {
                    ease: l.ease[1],
                    from: 0,
                    to: 1
                };
                e.init = function(t) {
                    this.duration = t.duration || 0, this.delay = t.delay || 0;
                    var e = t.ease || i.ease;
                    l[e] && (e = l[e][1]), "function" != typeof e && (e = i.ease), this.ease = e, this.update = t.update || a, this.complete = t.complete || a, this.context = t.context || this, this.name = t.name;
                    var n = t.from,
                        r = t.to;
                    void 0 === n && (n = i.from), void 0 === r && (r = i.to), this.unit = t.unit || "", "number" == typeof n && "number" == typeof r ? (this.begin = n, this.change = r - n) : this.format(r, n), this.value = this.begin + this.unit, this.start = I(), !1 !== t.autoplay && this.play()
                }, e.play = function() {
                    this.active || (this.start || (this.start = I()), this.active = !0, function(t) {
                        1 === s.push(t) && M(n)
                    }(this))
                }, e.stop = function() {
                    this.active && (this.active = !1, function(e) {
                        var n, i = t.inArray(e, s);
                        i >= 0 && (n = s.slice(i + 1), s.length = i, n.length && (s = s.concat(n)))
                    }(this))
                }, e.render = function(t) {
                    var e, n = t - this.start;
                    if (this.delay) {
                        if (n <= this.delay) return;
                        n -= this.delay
                    }
                    if (n < this.duration) {
                        var i = this.ease(n, 0, 1, this.duration);
                        return e = this.startRGB ? function(t, e, n) {
                            return o(t[0] + n * (e[0] - t[0]), t[1] + n * (e[1] - t[1]), t[2] + n * (e[2] - t[2]))
                        }(this.startRGB, this.endRGB, i) : function(t) {
                            return Math.round(t * c) / c
                        }(this.begin + i * this.change), this.value = e + this.unit, void this.update.call(this.context, this.value)
                    }
                    e = this.endHex || this.begin + this.change, this.value = e + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
                }, e.format = function(t, e) {
                    if (e += "", "#" == (t += "").charAt(0)) return this.startRGB = r(e), this.endRGB = r(t), this.endHex = t, this.begin = 0, void(this.change = 1);
                    if (!this.unit) {
                        var n = e.replace(m, "");
                        n !== t.replace(m, "") && function(t, e, n) {
                            u("Units do not match [" + t + "]: " + e + ", " + n)
                        }("tween", e, t), this.unit = n
                    }
                    e = parseFloat(e), t = parseFloat(t), this.begin = this.value = e, this.change = t - e
                }, e.destroy = function() {
                    this.stop(), this.context = null, this.ease = this.update = this.complete = a
                };
                var s = [],
                    c = 1e3
            }),
            B = c(P, function(t) {
                t.init = function(t) {
                    this.duration = t.duration || 0, this.complete = t.complete || a, this.context = t.context, this.play()
                }, t.render = function(t) {
                    t - this.start < this.duration || (this.complete.call(this.context), this.destroy())
                }
            }),
            F = c(P, function(t, e) {
                t.init = function(t) {
                    this.context = t.context, this.update = t.update, this.tweens = [], this.current = t.current;
                    var e, n;
                    for (e in t.values) n = t.values[e], this.current[e] !== n && this.tweens.push(new P({
                        name: e,
                        from: this.current[e],
                        to: n,
                        duration: t.duration,
                        delay: t.delay,
                        ease: t.ease,
                        autoplay: !1
                    }));
                    this.play()
                }, t.render = function(t) {
                    var e, n, i = !1;
                    for (e = this.tweens.length; e--;)(n = this.tweens[e]).context && (n.render(t), this.current[n.name] = n.value, i = !0);
                    return i ? void(this.update && this.update.call(this.context)) : this.destroy()
                }, t.destroy = function() {
                    if (e.destroy.call(this), this.tweens) {
                        var t;
                        for (t = this.tweens.length; t--;) this.tweens[t].destroy();
                        this.tweens = null, this.current = null
                    }
                }
            }),
            H = e.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !z.transition,
                agentTests: []
            };
        e.fallback = function(t) {
            if (!z.transition) return H.fallback = !0;
            H.agentTests.push("(" + t + ")");
            var e = new RegExp(H.agentTests.join("|"), "i");
            H.fallback = e.test(navigator.userAgent)
        }, e.fallback("6.0.[2-5] Safari"), e.tween = function(t) {
            return new P(t)
        }, e.delay = function(t, e, n) {
            return new B({
                complete: e,
                duration: t,
                context: n
            })
        }, t.fn.tram = function(t) {
            return e.call(null, this, t)
        };
        var X = t.style,
            U = t.css,
            W = {
                transform: z.transform && z.transform.css
            },
            Z = {
                color: [D, w],
                background: [D, w, "background-color"],
                "outline-color": [D, w],
                "border-color": [D, w],
                "border-top-color": [D, w],
                "border-right-color": [D, w],
                "border-bottom-color": [D, w],
                "border-left-color": [D, w],
                "border-width": [q, b],
                "border-top-width": [q, b],
                "border-right-width": [q, b],
                "border-bottom-width": [q, b],
                "border-left-width": [q, b],
                "border-spacing": [q, b],
                "letter-spacing": [q, b],
                margin: [q, b],
                "margin-top": [q, b],
                "margin-right": [q, b],
                "margin-bottom": [q, b],
                "margin-left": [q, b],
                padding: [q, b],
                "padding-top": [q, b],
                "padding-right": [q, b],
                "padding-bottom": [q, b],
                "padding-left": [q, b],
                "outline-width": [q, b],
                opacity: [q, g],
                top: [q, y],
                right: [q, y],
                bottom: [q, y],
                left: [q, y],
                "font-size": [q, y],
                "text-indent": [q, y],
                "word-spacing": [q, y],
                width: [q, y],
                "min-width": [q, y],
                "max-width": [q, y],
                height: [q, y],
                "min-height": [q, y],
                "max-height": [q, y],
                "line-height": [q, "unitless"],
                "scroll-top": [R, g, "scrollTop"],
                "scroll-left": [R, g, "scrollLeft"]
            },
            Y = {};
        z.transform && (Z.transform = [N], Y = {
            x: [y, "translateX"],
            y: [y, "translateY"],
            rotate: [x],
            rotateX: [x],
            rotateY: [x],
            scale: [g],
            scaleX: [g],
            scaleY: [g],
            skew: [x],
            skewX: [x],
            skewY: [x]
        }), z.transform && z.backface && (Y.z = [y, "translateZ"], Y.rotateZ = [x], Y.scaleZ = [g], Y.perspective = [b]);
        var G = /ms/,
            Q = /s|\./;
        return t.tram = e
    }(window.jQuery)
}, function(t, e, n) {
    "use strict";
    var i = window.jQuery,
        r = {},
        o = [],
        a = {
            reset: function(t, e) {
                e.__wf_intro = null
            },
            intro: function(t, e) {
                e.__wf_intro || (e.__wf_intro = !0, i(e).triggerHandler(r.types.INTRO))
            },
            outro: function(t, e) {
                e.__wf_intro && (e.__wf_intro = null, i(e).triggerHandler(r.types.OUTRO))
            }
        };
    r.triggers = {}, r.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, r.init = function() {
        for (var t = o.length, e = 0; e < t; e++) {
            var n = o[e];
            n[0](0, n[1])
        }
        o = [], i.extend(r.triggers, a)
    }, r.async = function() {
        for (var t in a) {
            var e = a[t];
            a.hasOwnProperty(t) && (r.triggers[t] = function(t, n) {
                o.push([e, n])
            })
        }
    }, r.async(), t.exports = r
}, function(t, e, n) {
    "use strict";

    function i(t, e) {
        var n = document.createEvent("CustomEvent");
        n.initCustomEvent(e, !0, !0, null), t.dispatchEvent(n)
    }
    var r = n(2),
        o = window.jQuery,
        a = {},
        s = {
            reset: function(t, e) {
                r.triggers.reset(t, e)
            },
            intro: function(t, e) {
                r.triggers.intro(t, e), i(e, "COMPONENT_ACTIVE")
            },
            outro: function(t, e) {
                r.triggers.outro(t, e), i(e, "COMPONENT_INACTIVE")
            }
        };
    a.triggers = {}, a.types = {
        INTRO: "w-ix-intro.w-ix",
        OUTRO: "w-ix-outro.w-ix"
    }, o.extend(a.triggers, s), t.exports = a
}, function(t, e, n) {
    n(5), n(7), n(8), n(10), n(11), n(12), n(13), n(14), n(15), n(16), t.exports = n(17)
}, function(t, e, n) {
    var i = n(0);
    i.define("brand", t.exports = function(t) {
        function e() {
            var t = a.children(s),
                e = t.length && t.get(0) === n,
                r = i.env("editor");
            e ? r && t.remove() : (t.length && t.remove(), r || a.append(n))
        }
        var n, r = {},
            o = t("html"),
            a = t("body"),
            s = ".w-webflow-badge",
            u = window.location,
            c = /PhantomJS/i.test(navigator.userAgent);
        return r.ready = function() {
            var i = o.attr("data-wf-status"),
                r = o.attr("data-wf-domain") || "";
            /*/\.webflow\.io$/i.test(r) && u.hostname !== r && (i = !0), i && !c && (n = n || function() {
             var e = t('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs"),
             n = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-icon.60efbf6ec9.svg").css({
             marginRight: "8px",
             width: "16px"
             }),
             i = t("<img>").attr("src", "https://d1otoma47x30pg.cloudfront.net/img/webflow-badge-text.6faa6a38cd.svg");
             return e.append(n, i), e[0]
             }(), e(), setTimeout(e, 500))*/
        }, r
    })
}, function(t, e, n) {
    var i = window.$,
        r = n(1) && i.tram;
    /*!
     * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
     * _.each
     * _.map
     * _.find
     * _.filter
     * _.any
     * _.contains
     * _.delay
     * _.defer
     * _.throttle (webflow)
     * _.debounce
     * _.keys
     * _.has
     * _.now
     *
     * http://underscorejs.org
     * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
     * Underscore may be freely distributed under the MIT license.
     * @license MIT
     */
    t.exports = function() {
        var t = {};
        t.VERSION = "1.6.0-Webflow";
        var e = {},
            n = Array.prototype,
            i = Object.prototype,
            o = Function.prototype,
            a = (n.push, n.slice),
            s = (n.concat, i.toString, i.hasOwnProperty),
            u = n.forEach,
            c = n.map,
            l = (n.reduce, n.reduceRight, n.filter),
            f = (n.every, n.some),
            d = n.indexOf,
            h = (n.lastIndexOf, Array.isArray, Object.keys),
            p = (o.bind, t.each = t.forEach = function(n, i, r) {
                if (null == n) return n;
                if (u && n.forEach === u) n.forEach(i, r);
                else if (n.length === +n.length) {
                    for (var o = 0, a = n.length; o < a; o++)
                        if (i.call(r, n[o], o, n) === e) return
                } else {
                    var s = t.keys(n);
                    for (o = 0, a = s.length; o < a; o++)
                        if (i.call(r, n[s[o]], s[o], n) === e) return
                }
                return n
            });
        t.map = t.collect = function(t, e, n) {
            var i = [];
            return null == t ? i : c && t.map === c ? t.map(e, n) : (p(t, function(t, r, o) {
                i.push(e.call(n, t, r, o))
            }), i)
        }, t.find = t.detect = function(t, e, n) {
            var i;
            return m(t, function(t, r, o) {
                if (e.call(n, t, r, o)) return i = t, !0
            }), i
        }, t.filter = t.select = function(t, e, n) {
            var i = [];
            return null == t ? i : l && t.filter === l ? t.filter(e, n) : (p(t, function(t, r, o) {
                e.call(n, t, r, o) && i.push(t)
            }), i)
        };
        var m = t.some = t.any = function(n, i, r) {
            i || (i = t.identity);
            var o = !1;
            return null == n ? o : f && n.some === f ? n.some(i, r) : (p(n, function(t, n, a) {
                if (o || (o = i.call(r, t, n, a))) return e
            }), !!o)
        };
        t.contains = t.include = function(t, e) {
            return null != t && (d && t.indexOf === d ? -1 != t.indexOf(e) : m(t, function(t) {
                    return t === e
                }))
        }, t.delay = function(t, e) {
            var n = a.call(arguments, 2);
            return setTimeout(function() {
                return t.apply(null, n)
            }, e)
        }, t.defer = function(e) {
            return t.delay.apply(t, [e, 1].concat(a.call(arguments, 1)))
        }, t.throttle = function(t) {
            var e, n, i;
            return function() {
                e || (e = !0, n = arguments, i = this, r.frame(function() {
                    e = !1, t.apply(i, n)
                }))
            }
        }, t.debounce = function(e, n, i) {
            var r, o, a, s, u, c = function c() {
                var l = t.now() - s;
                l < n ? r = setTimeout(c, n - l) : (r = null, i || (u = e.apply(a, o), a = o = null))
            };
            return function() {
                a = this, o = arguments, s = t.now();
                var l = i && !r;
                return r || (r = setTimeout(c, n)), l && (u = e.apply(a, o), a = o = null), u
            }
        }, t.defaults = function(e) {
            if (!t.isObject(e)) return e;
            for (var n = 1, i = arguments.length; n < i; n++) {
                var r = arguments[n];
                for (var o in r) void 0 === e[o] && (e[o] = r[o])
            }
            return e
        }, t.keys = function(e) {
            if (!t.isObject(e)) return [];
            if (h) return h(e);
            var n = [];
            for (var i in e) t.has(e, i) && n.push(i);
            return n
        }, t.has = function(t, e) {
            return s.call(t, e)
        }, t.isObject = function(t) {
            return t === Object(t)
        }, t.now = Date.now || function() {
                return (new Date).getTime()
            }, t.templateSettings = {
            evaluate: /<%([\s\S]+?)%>/g,
            interpolate: /<%=([\s\S]+?)%>/g,
            escape: /<%-([\s\S]+?)%>/g
        };
        var v = /(.)^/,
            g = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            },
            w = /\\|'|\r|\n|\u2028|\u2029/g,
            b = function(t) {
                return "\\" + g[t]
            };
        return t.template = function(e, n, i) {
            !n && i && (n = i), n = t.defaults({}, n, t.templateSettings);
            var r = RegExp([(n.escape || v).source, (n.interpolate || v).source, (n.evaluate || v).source].join("|") + "|$", "g"),
                o = 0,
                a = "__p+='";
            e.replace(r, function(t, n, i, r, s) {
                return a += e.slice(o, s).replace(w, b), o = s + t.length, n ? a += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : i ? a += "'+\n((__t=(" + i + "))==null?'':__t)+\n'" : r && (a += "';\n" + r + "\n__p+='"), t
            }), a += "';\n", n.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n";
            try {
                var s = new Function(n.variable || "obj", "_", a)
            } catch (t) {
                throw t.source = a, t
            }
            var u = function(e) {
                    return s.call(this, e, t)
                },
                c = n.variable || "obj";
            return u.source = "function(" + c + "){\n" + a + "}", u
        }, t
    }()
}, function(t, e, n) {
    var i = n(0);
    i.define("edit", t.exports = function(t, e, n) {
        function r() {
            u || /\?edit/.test(f.hash) && h()
        }

        function o(e) {
            e ? function(e, n) {
                t.ajax({
                    type: "GET",
                    url: e,
                    dataType: "script",
                    cache: !0
                }).then(n, a)
            }(function(t) {
                return t.indexOf("//") >= 0 ? t : s("https://editor-api.webflow.com" + t)
            }(e.scriptPath), function() {
                window.WebflowEditor(e)
            }) : console.error("Could not load editor data")
        }

        function a(t, e, n) {
            throw console.error("Could not load editor script: " + e), n
        }

        function s(t) {
            return t.replace(/([^:])\/\//g, "$1/")
        }
        if (n = n || {}, (i.env("test") || i.env("frame")) && !n.fixture) return {
            exit: 1
        };
        var u, c = t(window),
            l = t(document.documentElement),
            f = document.location,
            d = "hashchange",
            h = n.load || function() {
                    u = !0, window.WebflowEditor = !0, c.off(d, r), t.ajax({
                        url: s("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: l.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: o
                    })
                },
            p = !1;
        try {
            p = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
        } catch (t) {}
        return p ? h() : f.search ? (/[?&](edit)(?:[=&?]|$)/.test(f.search) || /\?edit$/.test(f.href)) && h() : c.on(d, r).triggerHandler(d), {}
    })
}, function(t, e, n) {
    var i = n(0);
    i.define("forms", t.exports = function(t, e) {
        function r(e, n) {
            var i = t(n),
                r = t.data(n, b);
            r || (r = t.data(n, b, {
                form: i
            })), o(r);
            var a = i.closest("div.w-form");
            r.done = a.find("> .w-form-done"), r.fail = a.find("> .w-form-fail");
            var s = r.action = i.attr("action");
            r.handler = null, r.redirect = i.attr("data-redirect"), T.test(s) ? r.handler = c : s || (p ? r.handler = u : O())
        }

        function o(t) {
            var e = t.btn = t.form.find(':input[type="submit"]');
            t.wait = t.btn.attr("data-wait") || null, t.success = !1, e.prop("disabled", !1), t.label && e.val(t.label)
        }

        function a(t) {
            var e = t.btn,
                n = t.wait;
            e.prop("disabled", !0), n && (t.label = e.val(), e.val(n))
        }

        function s(e, n) {
            var i = null;
            return n = n || {}, e.find(':input:not([type="submit"])').each(function(r, o) {
                var a = t(o),
                    s = a.attr("type"),
                    u = a.attr("data-name") || a.attr("name") || "Field " + (r + 1),
                    c = a.val();
                if ("checkbox" === s && (c = a.is(":checked")), "radio" === s) {
                    if (null === n[u] || "string" == typeof n[u]) return;
                    c = e.find('input[name="' + a.attr("name") + '"]:checked').val() || null
                }
                "string" == typeof c && (c = t.trim(c)), n[u] = c, i = i || function(t, e, n, i) {
                        var r = null;
                        "password" === e ? r = "Passwords cannot be submitted." : t.attr("required") && (i ? (y.test(n) || y.test(t.attr("type"))) && (x.test(i) || (r = "Please enter a valid email address for: " + n)) : r = "Please fill out the required field: " + n);
                        return r
                    }(a, s, u, c)
            }), i
        }

        function u(e) {
            o(e);
            var n = e.form,
                r = {
                    name: n.attr("data-name") || n.attr("name") || "Untitled Form",
                    source: g.href,
                    test: i.env(),
                    fields: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(n.html())
                };
            f(e);
            var u = s(n, r.fields);
            if (u) return k(u);
            if (a(e), p) {
                var c = "https://webflow.com/api/v1/form/" + p;
                w && c.indexOf("https://webflow.com") >= 0 && (c = c.replace("https://webflow.com", "http://formdata.webflow.com")), t.ajax({
                    url: c,
                    type: "POST",
                    data: r,
                    dataType: "json",
                    crossDomain: !0
                }).done(function() {
                    e.success = !0, l(e)
                }).fail(function() {
                    l(e)
                })
            } else l(e)
        }

        function c(n) {
            o(n);
            var i = n.form,
                r = {};
            if (!/^https/.test(g.href) || /^https/.test(n.action)) {
                f(n);
                var u = s(i, r);
                if (u) return k(u);
                a(n);
                var c;
                e.each(r, function(t, e) {
                    y.test(e) && (r.EMAIL = t), /^((full[ _-]?)?name)$/i.test(e) && (c = t), /^(first[ _-]?name)$/i.test(e) && (r.FNAME = t), /^(last[ _-]?name)$/i.test(e) && (r.LNAME = t)
                }), c && !r.FNAME && (c = c.split(" "), r.FNAME = c[0], r.LNAME = r.LNAME || c[1]);
                var d = n.action.replace("/post?", "/post-json?") + "&c=?",
                    h = d.indexOf("u=") + 2;
                h = d.substring(h, d.indexOf("&", h));
                var p = d.indexOf("id=") + 3;
                p = d.substring(p, d.indexOf("&", p)), r["b_" + h + "_" + p] = "", t.ajax({
                    url: d,
                    data: r,
                    dataType: "jsonp"
                }).done(function(t) {
                    n.success = "success" === t.result || /already/.test(t.msg), n.success || console.info("MailChimp error: " + t.msg), l(n)
                }).fail(function() {
                    l(n)
                })
            } else i.attr("method", "post")
        }

        function l(t) {
            var e = t.form,
                n = t.redirect,
                r = t.success;
            r && n ? i.location(n) : (t.done.toggle(r), t.fail.toggle(!r), e.toggle(!r), o(t))
        }

        function f(t) {
            t.evt && t.evt.preventDefault(), t.evt = null
        }
        var d = {};
        n(9);
        var h, p, m, v = t(document),
            g = window.location,
            w = window.XDomainRequest && !window.atob,
            b = ".w-form",
            y = /e(-)?mail/i,
            x = /^\S+@\S+$/,
            k = window.alert,
            _ = i.env(),
            T = /list-manage[1-9]?.com/i,
            O = e.debounce(function() {
                //k("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
        return d.ready = d.design = d.preview = function() {
            p = t("html").attr("data-wf-site"), (h = t(b + " form")).length && h.each(r), _ || m || (m = !0, v.on("submit", b + " form", function(e) {
                var n = t.data(this, b);
                n.handler && (n.evt = e, n.handler(n))
            }))
        }, d
    })
}, function(t, e) {
    /*!
     * jQuery-ajaxTransport-XDomainRequest - v1.0.3
     * 2014-12-16 WEBFLOW - Removed UMD wrapper
     * https://github.com/MoonScript/jQuery-ajaxTransport-XDomainRequest
     * Copyright (c) 2014 Jason Moon (@JSONMOON)
     * @license MIT (/blob/master/LICENSE.txt)
     */
    t.exports = function(t) {
        if (!t.support.cors && t.ajaxTransport && window.XDomainRequest) {
            var e = /^https?:\/\//i,
                n = /^get|post$/i,
                i = new RegExp("^" + location.protocol, "i");
            t.ajaxTransport("* text html xml json", function(r, o, a) {
                if (r.crossDomain && r.async && n.test(r.type) && e.test(r.url) && i.test(r.url)) {
                    var s = null;
                    return {
                        send: function(e, n) {
                            var i = "",
                                a = (o.dataType || "").toLowerCase();
                            s = new XDomainRequest, /^\d+$/.test(o.timeout) && (s.timeout = o.timeout), s.ontimeout = function() {
                                n(500, "timeout")
                            }, s.onload = function() {
                                var e = "Content-Length: " + s.responseText.length + "\r\nContent-Type: " + s.contentType,
                                    i = {
                                        code: 200,
                                        message: "success"
                                    },
                                    r = {
                                        text: s.responseText
                                    };
                                try {
                                    if ("html" === a || /text\/html/i.test(s.contentType)) r.html = s.responseText;
                                    else if ("json" === a || "text" !== a && /\/json/i.test(s.contentType)) try {
                                        r.json = t.parseJSON(s.responseText)
                                    } catch (t) {
                                        i.code = 500, i.message = "parseerror"
                                    } else if ("xml" === a || "text" !== a && /\/xml/i.test(s.contentType)) {
                                        var o = new ActiveXObject("Microsoft.XMLDOM");
                                        o.async = !1;
                                        try {
                                            o.loadXML(s.responseText)
                                        } catch (t) {
                                            o = void 0
                                        }
                                        if (!o || !o.documentElement || o.getElementsByTagName("parsererror").length) throw i.code = 500, i.message = "parseerror", "Invalid XML: " + s.responseText;
                                        r.xml = o
                                    }
                                } catch (t) {
                                    throw t
                                } finally {
                                    n(i.code, i.message, r, e)
                                }
                            }, s.onprogress = function() {}, s.onerror = function() {
                                n(500, "error", {
                                    text: s.responseText
                                })
                            }, o.data && (i = "string" === t.type(o.data) ? o.data : t.param(o.data)), s.open(r.type, r.url), s.send(i)
                        },
                        abort: function() {
                            s && s.abort()
                        }
                    }
                }
            })
        }
    }(window.jQuery)
}, function(t, e, n) {
    var i = n(0),
        r = n(2);
    i.define("ix", t.exports = function(t, e) {
        function n(t) {
            t && (O = {}, e.each(t, function(t) {
                O[t.slug] = t.value
            }), o())
        }

        function o() {
            ! function() {
                var e = t("[data-ix]");
                if (!e.length) return;
                e.each(u), e.each(a), E.length && (i.scroll.on(c), setTimeout(c, 1));
                L.length && i.load(l);
                C.length && setTimeout(f, z)
            }(), r.init(), i.redraw.up()
        }

        function a(n, o) {
            var a = t(o),
                u = a.attr("data-ix"),
                c = O[u];
            if (c) {
                var l = c.triggers;
                l && (v.style(a, c.style), e.each(l, function(t) {
                    function e() {
                        d(t, a, {
                            group: "A"
                        })
                    }

                    function n() {
                        d(t, a, {
                            group: "B"
                        })
                    }
                    var o = {},
                        u = t.type,
                        c = t.stepsB && t.stepsB.length;
                    if ("load" !== u) {
                        if ("click" === u) return a.on("click" + w, function(e) {
                            i.validClick(e.currentTarget) && ("#" === a.attr("href") && e.preventDefault(), d(t, a, {
                                group: o.clicked ? "B" : "A"
                            }), c && (o.clicked = !o.clicked))
                        }), void(T = T.add(a));
                        if ("hover" === u) return a.on("mouseenter" + w, e), a.on("mouseleave" + w, n), void(T = T.add(a));
                        if ("scroll" !== u) {
                            var l = j[u];
                            if (l) {
                                var f = a.closest(l);
                                return f.on(r.types.INTRO, e).on(r.types.OUTRO, n), void(T = T.add(f))
                            }
                        } else E.push({
                            el: a,
                            trigger: t,
                            state: {
                                active: !1
                            },
                            offsetTop: s(t.offsetTop),
                            offsetBot: s(t.offsetBot)
                        })
                    } else t.preload && !x ? L.push(e) : C.push(e)
                }))
            }
        }

        function s(t) {
            if (!t) return 0;
            t = String(t);
            var e = parseInt(t, 10);
            return e != e ? 0 : (t.indexOf("%") > 0 && (e /= 100) >= 1 && (e = .999), e)
        }

        function u(e, n) {
            t(n).off(w)
        }

        function c() {
            for (var t = g.scrollTop(), e = g.height(), n = E.length, i = 0; i < n; i++) {
                var r = E[i],
                    o = r.el,
                    a = r.trigger,
                    s = a.stepsB && a.stepsB.length,
                    u = r.state,
                    c = o.offset().top,
                    l = o.outerHeight(),
                    f = r.offsetTop,
                    h = r.offsetBot;
                f < 1 && f > 0 && (f *= e), h < 1 && h > 0 && (h *= e);
                var p = c + l - f >= t && c + h <= t + e;
                p !== u.active && ((!1 !== p || s) && (u.active = p, d(a, o, {
                    group: p ? "A" : "B"
                })))
            }
        }

        function l() {
            for (var t = L.length, e = 0; e < t; e++) L[e]()
        }

        function f() {
            for (var t = C.length, e = 0; e < t; e++) C[e]()
        }

        function d(e, n, r, o) {
            function a() {
                if (l) return d(e, n, r, !0);
                "auto" === g.width && v.set({
                    width: "auto"
                }), "auto" === g.height && v.set({
                    height: "auto"
                }), s && s()
            }
            var s = (r = r || {}).done,
                u = e.preserve3d;
            if (!p || r.force) {
                var c = r.group || "A",
                    l = e["loop" + c],
                    f = e["steps" + c];
                if (f && f.length) {
                    if (f.length < 2 && (l = !1), !o) {
                        var m = e.selector;
                        m && (n = e.descend ? n.find(m) : e.siblings ? n.siblings(m) : t(m), x && n.attr("data-ix-affect", 1)), k && n.addClass("w-ix-emptyfix"), u && n.css("transform-style", "preserve-3d")
                    }
                    for (var v = b(n), g = {
                        omit3d: !u
                    }, w = 0; w < f.length; w++) ! function(t, e, n) {
                        var r = "add",
                            o = "start";
                        n.start && (r = o = "then");
                        var a = e.transition;
                        if (a) {
                            a = a.split(",");
                            for (var s = 0; s < a.length; s++) {
                                var u = a[s];
                                t[r](u)
                            }
                        }
                        var c = h(e, n) || {};
                        null != c.width && (n.width = c.width);
                        null != c.height && (n.height = c.height);
                        if (null == a) {
                            n.start ? t.then(function() {
                                var e = this.queue;
                                this.set(c), c.display && (t.redraw(), i.redraw.up()), this.queue = e, this.next()
                            }) : (t.set(c), c.display && (t.redraw(), i.redraw.up()));
                            var l = c.wait;
                            null != l && (t.wait(l), n.start = !0)
                        } else {
                            if (c.display) {
                                var f = c.display;
                                delete c.display, n.start ? t.then(function() {
                                    var t = this.queue;
                                    this.set({
                                        display: f
                                    }).redraw(), i.redraw.up(), this.queue = t, this.next()
                                }) : (t.set({
                                    display: f
                                }).redraw(), i.redraw.up())
                            }
                            t[o](c), n.start = !0
                        }
                    }(v, f[w], g);
                    g.start ? v.then(a) : a()
                }
            }
        }

        function h(t, e) {
            var n = e && e.omit3d,
                i = {},
                r = !1;
            for (var o in t) "transition" !== o && "keysort" !== o && (!n || "z" !== o && "rotateX" !== o && "rotateY" !== o && "scaleZ" !== o) && (i[o] = t[o], r = !0);
            return r ? i : null
        }
        var p, m, v = {},
            g = t(window),
            w = ".w-ix",
            b = t.tram,
            y = i.env,
            x = y(),
            k = y.chrome && y.chrome < 35,
            _ = "none 0s ease 0s",
            T = t(),
            O = {},
            E = [],
            L = [],
            C = [],
            z = 1,
            j = {
                tabs: ".w-tab-link, .w-tab-pane",
                dropdown: ".w-dropdown",
                slider: ".w-slide",
                navbar: ".w-nav"
            };
        return v.init = function(t) {
            setTimeout(function() {
                n(t)
            }, 1)
        }, v.preview = function() {
            p = !1, z = 100, setTimeout(function() {
                n(window.__wf_ix)
            }, 1)
        }, v.design = function() {
            p = !0, v.destroy()
        }, v.destroy = function() {
            m = !0, T.each(u), i.scroll.off(c), r.async(), E = [], L = [], C = []
        }, v.ready = function() {
            if (x) return y("design") ? v.design() : v.preview();
            O && m && (m = !1, o())
        }, v.run = d, v.style = x ? function(e, n) {
            var i = b(e);
            if (!t.isEmptyObject(n)) {
                e.css("transition", "");
                var r = e.css("transition");
                r === _ && (r = i.upstream = null), i.upstream = _, i.set(h(n)), i.upstream = r
            }
        } : function(t, e) {
            b(t).set(h(e))
        }, v
    })
}, function(t, e, n) {
    function i(t, e, n, i) {
        function r(t, e) {
            return T = x(t) ? t : [t], w || r.build(), T.length > 1 && (w.items = w.empty, T.forEach(function(t) {
                var e = v("thumbnail"),
                    n = v("item").append(e);
                w.items = w.items.add(n), c(t.thumbnailUrl || t.url, function(t) {
                    t.prop("width") > t.prop("height") ? h(t, "wide") : h(t, "tall"), e.append(h(t, "thumbnail-image"))
                })
            }), w.strip.empty().append(w.items), h(w.content, "group")), y(p(w.lightbox, "hide").focus()).add("opacity .3s").start({
                opacity: 1
            }), h(w.html, "noscroll"), r.show(e || 0)
        }

        function o(t) {
            return function(e) {
                this === e.target && (e.stopPropagation(), e.preventDefault(), t())
            }
        }

        function a(t) {
            t.preventDefault()
        }

        function s(t) {
            var e = t.keyCode;
            27 === e ? r.hide() : 37 === e ? r.prev() : 39 === e && r.next()
        }

        function u() {
            w && (w.strip.scrollLeft(0).empty(), p(w.html, "noscroll"), h(w.lightbox, "hide"), w.view && w.view.remove(), p(w.content, "group"), h(w.arrowLeft, "inactive"), h(w.arrowRight, "inactive"), g = w.view = void 0)
        }

        function c(t, e) {
            var n = v("img", "img");
            return n.one("load", function() {
                e(n)
            }), n.attr("src", t), n
        }

        function l(t, e, n) {
            this.$element = t, this.className = e, this.delay = n || 200, this.hide()
        }

        function f(t, e) {
            return t.replace(_, (e ? " ." : " ") + k)
        }

        function d(t) {
            return f(t, !0)
        }

        function h(t, e) {
            return t.addClass(f(e))
        }

        function p(t, e) {
            return t.removeClass(f(e))
        }

        function m(t, e, n) {
            return t.toggleClass(f(e), n)
        }

        function v(t, i) {
            return h(n(e.createElement(i || "div")), t)
        }
        var g, w, b, y = n.tram,
            x = Array.isArray,
            k = "w-lightbox-",
            _ = /(^|\s+)/g,
            T = [];
        r.build = function() {
            return r.destroy(), w = {
                html: n(e.documentElement),
                empty: n()
            }, w.arrowLeft = v("control left inactive"), w.arrowRight = v("control right inactive"), w.close = v("control close"), w.spinner = v("spinner"), w.strip = v("strip"), b = new l(w.spinner, f("hide")), w.content = v("content").append(w.spinner, w.arrowLeft, w.arrowRight, w.close), w.container = v("container").append(w.content, w.strip), w.lightbox = v("backdrop hide").append(w.container), w.strip.on("tap", d("item"), C), w.content.on("swipe", z).on("tap", d("left"), O).on("tap", d("right"), E).on("tap", d("close"), L).on("tap", d("image, caption"), E), w.container.on("tap", d("view"), L).on("dragstart", d("img"), a), w.lightbox.on("keydown", s).on("focusin", j), n(i).append(w.lightbox.prop("tabIndex", 0)), r
        }, r.destroy = function() {
            w && (p(w.html, "noscroll"), w.lightbox.remove(), w = void 0)
        }, r.show = function(t) {
            if (t !== g) {
                var e = T[t];
                if (!e) return r.hide();
                var i = g;
                g = t, b.show();
                return c(e.html && function(t, e) {
                        var n = '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + e + '"/>';
                        return "data:image/svg+xml;charset=utf-8," + encodeURI(n)
                    }(e.width, e.height) || e.url, function(r) {
                    function o() {
                        if (b.hide(), t === g) {
                            if (m(w.arrowLeft, "inactive", t <= 0), m(w.arrowRight, "inactive", t >= T.length - 1), w.view ? (y(w.view).add("opacity .3s").start({
                                    opacity: 0
                                }).then(function(t) {
                                    return function() {
                                        t.remove()
                                    }
                                }(w.view)), y(l).add("opacity .3s").add("transform .3s").set({
                                    x: t > i ? "80px" : "-80px"
                                }).start({
                                    opacity: 1,
                                    x: 0
                                })) : l.css("opacity", 1), w.view = l, w.items) {
                                p(w.items, "active");
                                var e = w.items.eq(t);
                                h(e, "active"),
                                    function(t) {
                                        var e = t.position().left,
                                            n = w.strip.scrollLeft(),
                                            i = w.strip.width();
                                        (e < n || e > i + n) && y(w.strip).add("scroll-left 500ms").start({
                                            "scroll-left": e
                                        })
                                    }(e)
                            }
                        } else l.remove()
                    }
                    if (t === g) {
                        var a, s, u = v("figure", "figure").append(h(r, "image")),
                            c = v("frame").append(u),
                            l = v("view").append(c);
                        e.html && ((s = (a = n(e.html)).is("iframe")) && a.on("load", o), u.append(h(a, "embed"))), e.caption && u.append(v("caption", "figcaption").text(e.caption)), w.spinner.before(l), s || o()
                    }
                }), r
            }
        }, r.hide = function() {
            return y(w.lightbox).add("opacity .3s").start({
                opacity: 0
            }).then(u), r
        }, r.prev = function() {
            g > 0 && r.show(g - 1)
        }, r.next = function() {
            g < T.length - 1 && r.show(g + 1)
        };
        var O = o(r.prev),
            E = o(r.next),
            L = o(r.hide),
            C = function(t) {
                var e = n(this).index();
                t.preventDefault(), r.show(e)
            },
            z = function(t, e) {
                t.preventDefault(), "left" === e.direction ? r.next() : "right" === e.direction && r.prev()
            },
            j = function() {
                this.focus()
            };
        return l.prototype.show = function() {
            var t = this;
            t.timeoutId || (t.timeoutId = setTimeout(function() {
                t.$element.removeClass(t.className), delete t.timeoutId
            }, t.delay))
        }, l.prototype.hide = function() {
            if (this.timeoutId) return clearTimeout(this.timeoutId), void delete this.timeoutId;
            this.$element.addClass(this.className)
        },
            function() {
                function n() {
                    var e = t.innerHeight,
                        n = t.innerWidth,
                        i = ".w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + e + "px}.w-lightbox-view {width:" + n + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .86 * e + "px}.w-lightbox-image {max-width:" + n + "px;max-height:" + e + "px}.w-lightbox-group .w-lightbox-image {max-height:" + .86 * e + "px}.w-lightbox-strip {padding: 0 " + .01 * e + "px}.w-lightbox-item {width:" + .1 * e + "px;padding:" + .02 * e + "px " + .01 * e + "px}.w-lightbox-thumbnail {height:" + .1 * e + "px}@media (min-width: 768px) {.w-lightbox-content, .w-lightbox-view, .w-lightbox-view:before {height:" + .96 * e + "px}.w-lightbox-content {margin-top:" + .02 * e + "px}.w-lightbox-group, .w-lightbox-group .w-lightbox-view, .w-lightbox-group .w-lightbox-view:before {height:" + .84 * e + "px}.w-lightbox-image {max-width:" + .96 * n + "px;max-height:" + .96 * e + "px}.w-lightbox-group .w-lightbox-image {max-width:" + .823 * n + "px;max-height:" + .84 * e + "px}}";
                    o.textContent = i
                }
                var i = t.navigator.userAgent,
                    r = i.match(/(iPhone|iPad|iPod);[^OS]*OS (\d)/);
                if (i.indexOf("Android ") > -1 && -1 === i.indexOf("Chrome") || r && !(r[2] > 7)) {
                    var o = e.createElement("style");
                    e.head.appendChild(o), t.addEventListener("orientationchange", n, !0), n()
                }
            }(), r
    }
    var r = n(0);
    r.define("lightbox", t.exports = function(t) {
        function e(t) {
            var e, n, i = t.el.children(".w-json").html();
            if (i) {
                try {
                    i = JSON.parse(i)
                } catch (t) {
                    console.error("Malformed lightbox JSON configuration.", t)
                }! function(t) {
                    t.images && (t.images.forEach(function(t) {
                        t.type = "image"
                    }), t.items = t.images);
                    t.embed && (t.embed.type = "video", t.items = [t.embed]);
                    t.groupId && (t.group = t.groupId)
                }(i), (e = i.group) ? ((n = o[e]) || (n = o[e] = []), t.items = n, i.items.length && (t.index = n.length, n.push.apply(n, i.items))) : t.items = i.items
            } else t.items = []
        }
        var n, o, a = {},
            s = r.env(),
            u = i(window, document, t, s ? "#lightbox-mountpoint" : "body"),
            c = t(document),
            l = ".w-lightbox";
        return a.ready = a.design = a.preview = function() {
            n = s && r.env("design"), u.destroy(), o = {}, c.find(l).webflowLightBox()
        }, jQuery.fn.extend({
            webflowLightBox: function() {
                t.each(this, function(i, r) {
                    var o = t.data(r, l);
                    o || (o = t.data(r, l, {
                        el: t(r),
                        mode: "images",
                        images: [],
                        embed: ""
                    })), o.el.off(l), e(o), n ? o.el.on("setting" + l, e.bind(null, o)) : o.el.on("tap" + l, function(t) {
                        return function() {
                            t.items.length && u(t.items, t.index || 0)
                        }
                    }(o)).on("click" + l, function(t) {
                        t.preventDefault()
                    })
                })
            }
        }), a
    })
}, function(t, e, n) {
    var i = n(0);
    i.define("links", t.exports = function(t, e) {
        function n() {
            var t = c.scrollTop(),
                n = c.height();
            e.each(a, function(e) {
                var i = e.link,
                    o = e.sec,
                    a = o.offset().top,
                    s = o.outerHeight(),
                    u = .5 * n,
                    c = o.is(":visible") && a + s - u >= t && a + u <= t + n;
                e.active !== c && (e.active = c, r(i, h, c))
            })
        }

        function r(t, e, n) {
            var i = t.hasClass(e);
            n && i || (n || i) && (n ? t.addClass(e) : t.removeClass(e))
        }
        var o, a, s, u = {},
            c = t(window),
            l = i.env(),
            f = window.location,
            d = document.createElement("a"),
            h = "w--current",
            p = /^#[\w:.-]+$/,
            m = /index\.(html|php)$/,
            v = /\/$/;
        return u.ready = u.design = u.preview = function() {
            o = l && i.env("design"), s = i.env("slug") || f.pathname || "", i.scroll.off(n), a = [];
            for (var e = document.links, u = 0; u < e.length; ++u) ! function(e) {
                var n = o && e.getAttribute("href-disabled") || e.getAttribute("href");
                if (d.href = n, !(n.indexOf(":") >= 0)) {
                    var i = t(e);
                    if (0 === n.indexOf("#") && p.test(n)) {
                        var u = t(n);
                        u.length && a.push({
                            link: i,
                            sec: u,
                            active: !1
                        })
                    } else if ("#" !== n && "" !== n) {
                        var c = d.href === f.href || n === s || m.test(n) && v.test(s);
                        r(i, h, c)
                    }
                }
            }(e[u]);
            a.length && (i.scroll.on(n), n())
        }, u
    })
}, function(t, e, n) {
    var i = n(0);
    i.define("maps", t.exports = function(t, e) {
        function n() {
            function e() {
                window._wf_maps_loaded = function() {}, d = window.google, c.each(o), r(), i.resize.on(a), i.redraw.on(a)
            }(c = f.find(h)).length && (null === d ? (t.getScript("https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=_wf_maps_loaded&key=" + p), window._wf_maps_loaded = e) : e())
        }

        function r() {
            i.resize.off(a), i.redraw.off(a)
        }

        function o(e, n) {
            u(n, t(n).data())
        }

        function a() {
            c.each(s)
        }

        function s(t, e) {
            var n = u(e);
            d.maps.event.trigger(n.map, "resize"), n.setMapPosition()
        }

        function u(e, n) {
            var r = t.data(e, m);
            if (r) return r;
            var o = t(e);
            r = t.data(e, m, {
                latLng: "12.9718, 79.1589",
                tooltip: "",
                style: "roadmap",
                zoom: 12,
                marker: new d.maps.Marker({
                    draggable: !1
                }),
                infowindow: new d.maps.InfoWindow({
                    disableAutoPan: !0
                })
            });
            //var a = n.widgetLatlng || r.latLng;
            var a = r.latLng;
            r.latLng = a;
            var s = a.split(","),
                u = new d.maps.LatLng(s[0], s[1]);
            r.latLngObj = u;
            var c = !(i.env.touch && n.disableTouch);
            r.map = new d.maps.Map(e, {
                center: r.latLngObj,
                zoom: r.zoom,
                maxZoom: 18,
                mapTypeControl: !1,
                panControl: !1,
                streetViewControl: !1,
                scrollwheel: !n.disableScroll,
                draggable: c,
                zoomControl: !0,
                zoomControlOptions: {
                    style: d.maps.ZoomControlStyle.SMALL
                },
                mapTypeId: r.style
            }), r.marker.setMap(r.map), r.setMapPosition = function() {
                r.map.setCenter(r.latLngObj);
                var t = 0,
                    e = 0,
                    n = o.css(["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]);
                t -= parseInt(n.paddingLeft, 10), t += parseInt(n.paddingRight, 10), e -= parseInt(n.paddingTop, 10), e += parseInt(n.paddingBottom, 10), (t || e) && r.map.panBy(t, e), o.css("position", "")
            }, d.maps.event.addListener(r.map, "tilesloaded", function() {
                d.maps.event.clearListeners(r.map, "tilesloaded"), r.setMapPosition()
            }), r.setMapPosition(), r.marker.setPosition(r.latLngObj), r.infowindow.setPosition(r.latLngObj);
            var l = n.widgetTooltip;
            l && (r.tooltip = l, r.infowindow.setContent(l), r.infowindowOpen || (r.infowindow.open(r.map, r.marker), r.infowindowOpen = !0));
            var f = n.widgetStyle;
            f && r.map.setMapTypeId(f);
            var h = n.widgetZoom;
            return null != h && (r.zoom = h, r.map.setZoom(Number(h))), d.maps.event.addListener(r.marker, "click", function() {
                window.open("https://maps.google.com/?z=" + r.zoom + "&daddr=" + r.latLng)
            }), r
        }
        var c, l = {},
            f = t(document),
            d = null,
            h = ".w-widget-map",
            p = "AIzaSyBQ4EYEg4aRz9-yiCnerTV7bk8GCWgZOhk";
        l.ready = function() {
            i.env() || n()
        }, l.destroy = r;
        var m = "w-widget-map";
        return l
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(3);
    i.define("navbar", t.exports = function(t, e) {
        function n() {
            i.resize.off(o)
        }

        function o() {
            v.each(f)
        }

        function a(n, r) {
            var o = t(r),
                a = t.data(r, T);
            a || (a = t.data(r, T, {
                open: !1,
                el: o,
                config: {}
            })), a.menu = o.find(".w-nav-menu"), a.links = a.menu.find(".w-nav-link"), a.dropdowns = a.menu.find(".w-dropdown"), a.button = o.find(".w-nav-button"), a.container = o.find(".w-container"), a.outside = function(n) {
                n.outside && x.off("tap" + T, n.outside);
                return e.debounce(function(e) {
                    if (n.open) {
                        var i = t(e.target).closest(".w-nav-menu");
                        n.menu.is(i) || p(n)
                    }
                })
            }(a), a.el.off(T), a.button.off(T), a.menu.off(T), c(a), g ? (u(a), a.el.on("setting" + T, function(t) {
                return function(n, i) {
                    i = i || {};
                    var r = y.width();
                    c(t), !0 === i.open && d(t, !0), !1 === i.open && p(t, !0), t.open && e.defer(function() {
                        r !== y.width() && l(t)
                    })
                }
            }(a))) : (! function(e) {
                if (e.overlay) return;
                e.overlay = t(_).appendTo(e.el), e.parent = e.menu.parent(), p(e, !0)
            }(a), a.button.on("tap" + T, function(t) {
                return e.debounce(function() {
                    t.open ? p(t) : d(t)
                })
            }(a)), a.menu.on("click" + T, "a", function(e) {
                return function(n) {
                    var r = t(this),
                        o = r.attr("href");
                    i.validClick(n.currentTarget) ? o && 0 === o.indexOf("#") && e.open && p(e) : n.preventDefault()
                }
            }(a))), f(n, r)
        }

        function s(e, n) {
            var i = t.data(n, T);
            i && (u(i), t.removeData(n, T))
        }

        function u(t) {
            t.overlay && (p(t, !0), t.overlay.remove(), t.overlay = null)
        }

        function c(t) {
            var n = {},
                i = t.config || {},
                r = n.animation = t.el.attr("data-animation") || "default";
            n.animOver = /^over/.test(r), n.animDirect = /left$/.test(r) ? -1 : 1, i.animation !== r && t.open && e.defer(l, t), n.easing = t.el.attr("data-easing") || "ease", n.easing2 = t.el.attr("data-easing2") || "ease";
            var o = t.el.attr("data-duration");
            n.duration = null != o ? Number(o) : 400, n.docHeight = t.el.attr("data-doc-height"), t.config = n
        }

        function l(t) {
            t.open && (p(t, !0), d(t, !0))
        }

        function f(e, n) {
            var i = t.data(n, T),
                r = i.collapsed = "none" !== i.button.css("display");
            if (!i.open || r || g || p(i, !0), i.container.length) {
                var o = function(e) {
                    var n = e.container.css(j);
                    "none" === n && (n = "");
                    return function(e, i) {
                        (i = t(i)).css(j, ""), "none" === i.css(j) && i.css(j, n)
                    }
                }(i);
                i.links.each(o), i.dropdowns.each(o)
            }
            i.open && h(i)
        }

        function d(t, e) {
            if (!t.open) {
                t.open = !0, t.menu.addClass(E), t.links.addClass(L), t.button.addClass(O);
                var n = t.config;
                "none" !== n.animation && b.support.transform || (e = !0);
                var r = h(t),
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    s = t.el.height(),
                    u = t.el[0];
                if (f(0, u), C.intro(0, u), i.redraw.up(), g || x.on("tap" + T, t.outside), !e) {
                    var c = "transform " + n.duration + "ms " + n.easing;
                    if (t.overlay && (z = t.menu.prev(), t.overlay.show().append(t.menu)), n.animOver) return b(t.menu).add(c).set({
                        x: n.animDirect * a,
                        height: r
                    }).start({
                        x: 0
                    }), void(t.overlay && t.overlay.width(a));
                    var l = s + o;
                    b(t.menu).add(c).set({
                        y: -l
                    }).start({
                        y: 0
                    })
                }
            }
        }

        function h(t) {
            var e = t.config,
                n = e.docHeight ? x.height() : m.height();
            return e.animOver ? t.menu.height(n) : "fixed" !== t.el.css("position") && (n -= t.el.height()), t.overlay && t.overlay.height(n), n
        }

        function p(t, e) {
            function n() {
                t.menu.height(""), b(t.menu).set({
                    x: 0,
                    y: 0
                }), t.menu.removeClass(E), t.links.removeClass(L), t.overlay && t.overlay.children().length && (z.length ? t.menu.insertAfter(z) : t.menu.prependTo(t.parent), t.overlay.attr("style", "").hide()), t.el.triggerHandler("w-close")
            }
            if (t.open) {
                t.open = !1, t.button.removeClass(O);
                var i = t.config;
                if (("none" === i.animation || !b.support.transform || i.duration <= 0) && (e = !0), C.outro(0, t.el[0]), x.off("tap" + T, t.outside), e) return b(t.menu).stop(), void n();
                var r = "transform " + i.duration + "ms " + i.easing2,
                    o = t.menu.outerHeight(!0),
                    a = t.menu.outerWidth(!0),
                    s = t.el.height();
                if (i.animOver) b(t.menu).add(r).start({
                    x: a * i.animDirect
                }).then(n);
                else {
                    var u = s + o;
                    b(t.menu).add(r).start({
                        y: -u
                    }).then(n)
                }
            }
        }
        var m, v, g, w = {},
            b = t.tram,
            y = t(window),
            x = t(document),
            k = i.env(),
            _ = '<div class="w-nav-overlay" data-wf-ignore />',
            T = ".w-nav",
            O = "w--open",
            E = "w--nav-menu-open",
            L = "w--nav-link-open",
            C = r.triggers,
            z = t();
        w.ready = w.design = w.preview = function() {
            g = k && i.env("design"), m = t(document.body), (v = x.find(T)).length && (v.each(a), n(), i.resize.on(o))
        }, w.destroy = function() {
            z = t(), n(), v && v.length && v.each(s)
        };
        var j = "max-width";
        return w
    })
}, function(t, e, n) {
    var i = n(0);
    i.define("scroll", t.exports = function(t) {
        function e(e, n) {
            if (s.test(e)) {
                var u = t("#" + e);
                if (u.length) {
                    if (n && (n.preventDefault(), n.stopPropagation()), o.hash !== e && a && a.pushState && (!i.env.chrome || "file:" !== o.protocol)) {
                        (a.state && a.state.hash) !== e && a.pushState({
                            hash: e
                        }, "", "#" + e)
                    }
                    var c = i.env("editor") ? ".w-editor-body" : "body",
                        l = t("header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])"),
                        f = "fixed" === l.css("position") ? l.outerHeight() : 0;
                    r.setTimeout(function() {
                        ! function(e, n) {
                            var i = t(r).scrollTop(),
                                o = e.offset().top - n;
                            if ("mid" === e.data("scroll")) {
                                var a = t(r).height() - n,
                                    s = e.outerHeight();
                                s < a && (o -= Math.round((a - s) / 2))
                            }
                            var u = 1;
                            t("body").add(e).each(function() {
                                var e = parseFloat(t(this).attr("data-scroll-time"), 10);
                                !isNaN(e) && (0 === e || e > 0) && (u = e)
                            }), Date.now || (Date.now = function() {
                                return (new Date).getTime()
                            });
                            var c = Date.now(),
                                l = r.requestAnimationFrame || r.mozRequestAnimationFrame || r.webkitRequestAnimationFrame || function(t) {
                                        r.setTimeout(t, 15)
                                    },
                                f = (472.143 * Math.log(Math.abs(i - o) + 125) - 2e3) * u;
                            ! function t() {
                                var e = Date.now() - c;
                                r.scroll(0, function(t, e, n, i) {
                                    if (n > i) return e;
                                    return t + (e - t) * function(t) {
                                            return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
                                        }(n / i)
                                }(i, o, e, f)), e <= f && l(t)
                            }()
                        }(u, f)
                    }, n ? 0 : 300)
                }
            }
        }
        var n = t(document),
            r = window,
            o = r.location,
            a = function() {
                try {
                    return Boolean(r.frameElement)
                } catch (t) {
                    return !0
                }
            }() ? null : r.history,
            s = /^[a-zA-Z0-9][\w:.-]*$/;
        return {
            ready: function() {
                o.hash && e(o.hash.substring(1));
                var r = o.href.split("#")[0];
                n.on("click", "a", function(n) {
                    if (!(i.env("design") || window.$.mobile && t(n.currentTarget).hasClass("ui-link")))
                        if ("#" !== this.getAttribute("href")) {
                            var o = this.href.split("#"),
                                a = o[0] === r ? o[1] : null;
                            a && e(a, n)
                        } else n.preventDefault()
                })
            }
        }
    })
}, function(t, e, n) {
    var i = n(0),
        r = n(3);
    i.define("tabs", t.exports = function(t) {
        function e() {
            c = m && i.env("design"), (u = d.find(g)).length && (u.each(a), i.env("preview") && !x && u.each(o), n(), i.redraw.on(l.redraw))
        }

        function n() {
            i.redraw.off(l.redraw)
        }

        function o(e, n) {
            var i = t.data(n, g);
            i && (i.links && i.links.each(y.reset), i.panes && i.panes.each(y.reset))
        }

        function a(e, n) {
            var i = t(n),
                r = t.data(n, g);
            if (r || (r = t.data(n, g, {
                    el: i,
                    config: {}
                })), r.current = null, r.menu = i.children(".w-tab-menu"), r.links = r.menu.children(".w-tab-link"), r.content = i.children(".w-tab-content"), r.panes = r.content.children(".w-tab-pane"), r.el.off(g), r.links.off(g), function(t) {
                    var e = {};
                    e.easing = t.el.attr("data-easing") || "ease";
                    var n = parseInt(t.el.attr("data-duration-in"), 10);
                    n = e.intro = n == n ? n : 0;
                    var i = parseInt(t.el.attr("data-duration-out"), 10);
                    i = e.outro = i == i ? i : 0, e.immediate = !n && !i, t.config = e
                }(r), !c) {
                r.links.on("click" + g, function(t) {
                    return function(e) {
                        var n = e.currentTarget.getAttribute(v);
                        n && s(t, {
                            tab: n
                        })
                    }
                }(r));
                var o = r.links.filter("." + w).attr(v);
                o && s(r, {
                    tab: o,
                    immediate: !0
                })
            }
        }

        function s(e, n) {
            function r() {
                if (d.removeClass(b).css({
                        opacity: "",
                        transition: "",
                        transform: "",
                        width: "",
                        height: ""
                    }), l.addClass(b).each(y.intro), i.redraw.up(), !o.intro) return f(l).set({
                    opacity: 1
                });
                f(l).set({
                    opacity: 0
                }).redraw().add("opacity " + o.intro + "ms " + a, {
                    fallback: p
                }).start({
                    opacity: 1
                })
            }
            n = n || {};
            var o = e.config,
                a = o.easing,
                s = n.tab;
            if (s !== e.current) {
                e.current = s, e.links.each(function(e, n) {
                    var i = t(n);
                    n.getAttribute(v) === s ? i.addClass(w).each(y.intro) : i.hasClass(w) && i.removeClass(w).each(y.outro)
                });
                var u = [],
                    c = [];
                e.panes.each(function(e, n) {
                    var i = t(n);
                    n.getAttribute(v) === s ? u.push(n) : i.hasClass(b) && c.push(n)
                });
                var l = t(u),
                    d = t(c);
                if (n.immediate || o.immediate) return l.addClass(b).each(y.intro), d.removeClass(b), void(x || i.redraw.up());
                d.length && o.outro ? (d.each(y.outro), f(d).add("opacity " + o.outro + "ms " + a, {
                    fallback: p
                }).start({
                    opacity: 0
                }).then(r)) : r()
            }
        }
        var u, c, l = {},
            f = t.tram,
            d = t(document),
            h = i.env,
            p = h.safari,
            m = h(),
            v = "data-w-tab",
            g = ".w-tabs",
            w = "w--current",
            b = "w--tab-active",
            y = r.triggers,
            x = !1;
        return l.ready = l.design = l.preview = e, l.redraw = function() {
            x = !0, e(), x = !1
        }, l.destroy = function() {
            (u = d.find(g)).length && (u.each(o), n())
        }, l
    })
}, function(t, e, n) {
    n(0).define("touch", t.exports = function(t) {
        function e(e, n, i) {
            var r = t.Event(e, {
                originalEvent: n
            });
            t(n.target).trigger(r, i)
        }
        var n = {},
            i = !document.addEventListener,
            r = window.getSelection;
        return i && (t.event.special.tap = {
            bindType: "click",
            delegateType: "click"
        }), n.init = function(n) {
            return i ? null : (n = "string" == typeof n ? t(n).get(0) : n) ? new function(t) {
                function n(t) {
                    var e = t.touches;
                    e && e.length > 1 || (l = !0, f = !1, e ? (d = !0, s = e[0].clientX, u = e[0].clientY) : (s = t.clientX, u = t.clientY), c = s)
                }

                function i(t) {
                    if (l) {
                        if (d && "mousemove" === t.type) return t.preventDefault(), void t.stopPropagation();
                        var n = t.touches,
                            i = n ? n[0].clientX : t.clientX,
                            o = n ? n[0].clientY : t.clientY,
                            p = i - c;
                        c = i, Math.abs(p) > h && r && "" === String(r()) && (e("swipe", t, {
                            direction: p > 0 ? "right" : "left"
                        }), a()), (Math.abs(i - s) > 10 || Math.abs(o - u) > 10) && (f = !0)
                    }
                }

                function o(t) {
                    if (l) {
                        if (l = !1, d && "mouseup" === t.type) return t.preventDefault(), t.stopPropagation(), void(d = !1);
                        f || e("tap", t)
                    }
                }

                function a() {
                    l = !1
                }
                var s, u, c, l = !1,
                    f = !1,
                    d = !1,
                    h = Math.min(Math.round(.04 * window.innerWidth), 40);
                t.addEventListener("touchstart", n, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", o, !1), t.addEventListener("touchcancel", a, !1), t.addEventListener("mousedown", n, !1), t.addEventListener("mousemove", i, !1), t.addEventListener("mouseup", o, !1), t.addEventListener("mouseout", a, !1), this.destroy = function() {
                    t.removeEventListener("touchstart", n, !1), t.removeEventListener("touchmove", i, !1), t.removeEventListener("touchend", o, !1), t.removeEventListener("touchcancel", a, !1), t.removeEventListener("mousedown", n, !1), t.removeEventListener("mousemove", i, !1), t.removeEventListener("mouseup", o, !1), t.removeEventListener("mouseout", a, !1), t = null
                }
            }(n) : null
        }, n.instance = n.init(document), n
    })
}]);
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions: Init
 */
Webflow.require('ix').init([{
    "slug": "-nav-bar-",
    "name": "---- Nav Bar ----",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "scale-logo-on-hover",
    "name": "Scale Logo On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "transition": "transform 300ms ease 0ms",
                "scaleX": 1.05,
                "scaleY": 1.05,
                "scaleZ": 1
            }],
            "stepsB": [{
                "transition": "transform 300ms ease 0ms",
                "scaleX": 1,
                "scaleY": 1,
                "scaleZ": 1
            }]
        }]
    }
}, {
    "slug": "display-none-on-load-fixed-navbar",
    "name": "Display None On Load Fixed Navbar",
    "value": {
        "style": {
            "display": "none"
        },
        "triggers": []
    }
}, {
    "slug": "hover-line-initial-appearance",
    "name": "Hover Line Initial Appearance",
    "value": {
        "style": {
            "title": "Hover Line Initial Appearance",
            "x": "-1300px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "slide-in-hover-line-on-hover",
    "name": "Slide In Hover Line On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".hover-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "x": "-1300px",
                "y": "0px",
                "z": "0px"
            }]
        }]
    }
}, {
    "slug": "nav-link-show-pop-up-on-click",
    "name": "Nav Link Show Pop Up On Click",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".hover-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "x": "-900px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".pop-up",
            "stepsA": [{
                "display": "block",
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".form-container",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }],
            "stepsB": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }]
    }
}, {
    "slug": "overly-initial-appearance",
    "name": "Overly Initial Appearance ",
    "value": {
        "style": {
            "opacity": 0.8
        },
        "triggers": []
    }
}, {
    "slug": "-about-",
    "name": "---- About ---- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "display-none-on-load-go-up-arrow",
    "name": "Display None On Load Go Up Arrow",
    "value": {
        "style": {
            "display": "none"
        },
        "triggers": []
    }
}, {
    "slug": "fade-out-on-hover",
    "name": "Fade Out On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }]
        }]
    }
}, {
    "slug": "-hero-section-",
    "name": "---- Hero Section ---- ",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".scroll-arrow",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 750ms ease 0ms, opacity 750ms ease 0ms",
                "x": "0px",
                "y": "50px",
                "z": "0px"
            }, {
                "x": "0px",
                "y": "-80px",
                "z": "0px"
            }, {
                "opacity": 1,
                "transition": "transform 750ms ease 0ms, opacity 750ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "actions-for-hero-section",
    "name": "Actions For Hero Section",
    "value": {
        "style": {},
        "triggers": [{
            "type": "scroll",
            "selector": ".side-bar-tab",
            "offsetBot": "6%",
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "90deg"
            }, {
                "transition": "transform 300ms ease 0ms",
                "x": "0px",
                "y": "50px",
                "z": "0px"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "90deg"
            }, {
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "scroll",
            "selector": ".fixed-navbar",
            "offsetTop": "20%",
            "offsetBot": "20%",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 300ms ease 0ms, opacity 300ms ease 0ms",
                "x": "0px",
                "y": "-90px",
                "z": "0px"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block",
                "opacity": 1,
                "transition": "transform 300ms ease 0ms, opacity 300ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "scroll",
            "selector": ".go-up-button",
            "offsetTop": "12%",
            "offsetBot": "5%",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "-15px",
                "z": "0px"
            }],
            "stepsB": [{
                "display": "block",
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "load",
            "selector": ".hero-block-1",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".hero-block-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".underline",
            "descend": true,
            "stepsA": [{
                "wait": 900
            }, {
                "opacity": 1,
                "transition": "opacity 2000ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "stepsA": [{
                "wait": 300
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".box-bg",
            "preserve3d": true,
            "stepsA": [{
                "wait": 1200
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".mini-title",
            "stepsA": [{
                "wait": 900
            }, {
                "opacity": 1,
                "transition": "opacity 1000ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".arrow-white",
            "loopA": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "3px",
                "z": "0px"
            }, {
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "-3px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".scroll-arrow",
            "loopA": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "3px",
                "z": "0px"
            }, {
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "-3px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "actions-for-hero-section-2",
    "name": "Actions For Hero Section 2",
    "value": {
        "style": {},
        "triggers": [{
            "type": "scroll",
            "selector": ".side-bar-tab",
            "offsetBot": "6%",
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "90deg"
            }, {
                "transition": "transform 300ms ease 0ms",
                "x": "0px",
                "y": "50px",
                "z": "0px"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "90deg"
            }, {
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "scroll",
            "selector": ".fixed-navbar",
            "offsetTop": "20%",
            "offsetBot": "20%",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 300ms ease 0ms, opacity 300ms ease 0ms",
                "x": "0px",
                "y": "-90px",
                "z": "0px"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block",
                "opacity": 1,
                "transition": "transform 300ms ease 0ms, opacity 300ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "scroll",
            "selector": ".go-up-button",
            "offsetTop": "12%",
            "offsetBot": "5%",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "-15px",
                "z": "0px"
            }],
            "stepsB": [{
                "display": "block",
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }, {
            "type": "load",
            "selector": ".hero-block-1",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".hero-block-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".underline",
            "descend": true,
            "stepsA": [{
                "wait": 900
            }, {
                "opacity": 1,
                "transition": "opacity 2000ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "stepsA": [{
                "wait": 300
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".box-bg",
            "preserve3d": true,
            "stepsA": [{
                "wait": 1200
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".mini-title",
            "stepsA": [{
                "wait": 900
            }, {
                "opacity": 1,
                "transition": "opacity 1000ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "load",
            "selector": ".arrow-white",
            "loopA": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "3px",
                "z": "0px"
            }, {
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "-3px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "hero-block-1-initial-appearance",
    "name": "Hero Block 1 Initial Appearance",
    "value": {
        "style": {
            "opacity": 0,
            "x": "-50px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "hero-block-2-initial-appearance",
    "name": "Hero Block 2 Initial Appearance ",
    "value": {
        "style": {
            "opacity": 0,
            "x": "50px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "underline-initial-appearance",
    "name": "Underline Initial Appearance",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": []
    }
}, {
    "slug": "hero-section-display-none-on-load",
    "name": "Hero Section Display None On Load",
    "value": {
        "style": {
            "display": "none",
            "opacity": 0
        },
        "triggers": [{
            "type": "load",
            "selector": ".scroll-arrow",
            "loopA": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "3px",
                "z": "0px"
            }, {
                "transition": "transform 1000ms ease 0ms",
                "x": "0px",
                "y": "-3px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "show-hero-section",
    "name": "Show Hero Section",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".hero-section-1",
            "stepsA": [{
                "wait": 500
            }, {
                "display": "block"
            }, {
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".hero-section-2",
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "show-hero-section-2",
    "name": "Show Hero Section 2",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".hero-section-1",
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".hero-section-2",
            "stepsA": [{
                "wait": 800
            }, {
                "display": "block"
            }, {
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "box-bg-initial-appearane",
    "name": "Box Bg Initial Appearane",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "50px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "-brochure-",
    "name": "---- Brochure ---- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "show-pop-up-on-click",
    "name": "Show Pop Up On Click",
    "value": {
        "style": {
            //"display": "none"
        },
        "triggers": [{
            "type": "click",
            "selector": ".pop-up",
            "stepsA": [{
                "display": "block",
                "opacity": 0.9,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".form-container",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "show-pop-up-on-click-2",
    "name": "Show Pop Up On Click 2",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".pop-up",
            "stepsA": [{
                "display": "block",
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".form-container",
            "preserve3d": true,
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "pop-up-initial-appearance",
    "name": "Pop Up Initial Appearance",
    "value": {
        "style": {
            "display": "none",
            "opacity": 0
        },
        "triggers": []
    }
}, {
    "slug": "form-container-initial-appearance",
    "name": "Form Container Initial Appearance",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "-50px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "close-form-container-on-click",
    "name": "Close Form Container On Click",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".form-container",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "-50px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".pop-up",
            "stepsA": [{
                "wait": 600
            }, {
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "close-form-container-on-click-2",
    "name": "Close Form Container On Click 2",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".form-container",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "-50px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "click",
            "selector": ".pop-up",
            "stepsA": [{
                "wait": 700
            }, {
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "side-tab-bar-initial-appearance",
    "name": "Side Tab Bar Initial Appearance",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "-body-",
    "name": "---- Body ---",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "full-opacity-on-load",
    "name": "Full Opacity On Load",
    "value": {
        "style": {
            "opacity": 0
        },
        "triggers": [{
            "type": "load",
            "stepsA": [{
                "opacity": 1,
                "transition": "opacity 300ms ease 0ms"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "-go-up-button-",
    "name": "---- Go Up Button --- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "display-none-on-load-arrow-go-up",
    "name": "Display None On Load Arrow Go Up",
    "value": {
        "style": {
            "display": "none"
        },
        "triggers": []
    }
}, {
    "slug": "-speakers-",
    "name": "---- Speakers --- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "fade-out-image-on-hover",
    "name": "Fade Out Image On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }],
            "stepsB": [{
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }]
        }, {
            "type": "hover",
            "selector": ".social-icons",
            "descend": true,
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block"
            }, {
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }]
        }, {
            "type": "hover",
            "stepsA": [{
                "opacity": 0,
                "transition": "opacity 500ms ease 0ms"
            }, {
                "display": "none"
            }],
            "stepsB": [{
                "display": "block"
            }, {
                "opacity": 1,
                "transition": "opacity 500ms ease 0ms"
            }]
        }]
    }
}, {
    "slug": "social-icon-initial-appearance",
    "name": "Social Icon Initial Appearance",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "20px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "show-social-icons-1",
    "name": "Show Social Icons 1",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".speaker-1-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-1-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-1-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "inline-block"
            }],
            "stepsB": [{
                "wait": 1400
            }, {
                "display": "none"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }]
    }
}, {
    "slug": "show-social-icons-2",
    "name": "Show Social Icons 2",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".speaker-2-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-2-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-2-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "block"
            }],
            "stepsB": [{
                "wait": 900
            }, {
                "display": "none"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }]
    }
}, {
    "slug": "show-social-icons-3",
    "name": "Show Social Icons 3",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".speaker-3-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-3-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-3-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "inline-block"
            }],
            "stepsB": [{
                "wait": 900
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "show-social-icons-4",
    "name": "Show Social Icons 4",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-4-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-4-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-4-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "inline-block"
            }],
            "stepsB": [{
                "wait": 900
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "show-social-icons-5",
    "name": "Show Social Icons 5",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-5-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-5-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-5-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "inline-block"
            }],
            "stepsB": [{
                "wait": 900
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "show-social-icons-6",
    "name": "Show Social Icons 6",
    "value": {
        "style": {},
        "triggers": [{
            "type": "click",
            "selector": ".plus-sign-vertical-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-6-social-icon-3",
            "preserve3d": true,
            "stepsA": [{
                "wait": 400
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-6-social-icon-2",
            "preserve3d": true,
            "stepsA": [{
                "wait": 200
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 200
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".plus-sign-horizontal-line",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "135deg"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "rotateX": "0deg",
                "rotateY": "0deg",
                "rotateZ": "0deg"
            }]
        }, {
            "type": "click",
            "selector": ".speaker-6-social-icon-1",
            "preserve3d": true,
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "wait": 400
            }, {
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "20px",
                "z": "0px"
            }]
        }, {
            "type": "click",
            "selector": ".social-icons",
            "stepsA": [{
                "display": "inline-block"
            }],
            "stepsB": [{
                "wait": 900
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "display-none-social-icons",
    "name": "Display None Social Icons",
    "value": {
        "style": {
            "display": "none"
        },
        "triggers": []
    }
}, {
    "slug": "-sections-actions-",
    "name": "---- Sections Actions --- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "slide-up-content-on-hover",
    "name": "Slide Up Content On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "stepsA": [{
                "display": "block"
            }, {
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 800ms ease 0ms",
                "x": "0px",
                "y": "320px",
                "z": "0px"
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "slide-up-section",
    "name": "Slide Up Section",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "30px",
            "z": "0px"
        },
        "triggers": [{
            "type": "scroll",
            "offsetBot": "30%",
            "stepsA": [{
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".column-image-1",
            "offsetBot": "50%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 500
            }, {
                "opacity": 1,
                "transition": "transform 1200ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".column-image-2",
            "offsetBot": "50%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 700
            }, {
                "opacity": 1,
                "transition": "transform 1200ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".column-image-3",
            "offsetBot": "50%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 900
            }, {
                "opacity": 1,
                "transition": "transform 1200ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".column-image-4",
            "offsetBot": "50%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 1100
            }, {
                "opacity": 1,
                "transition": "transform 1200ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".feature",
            "offsetBot": "30%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 300
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".feature-2",
            "offsetBot": "30%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 500
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }, {
            "type": "scroll",
            "selector": ".feature-3",
            "offsetBot": "30%",
            "preserve3d": true,
            "stepsA": [{
                "wait": 700
            }, {
                "opacity": 1,
                "transition": "transform 1000ms ease 0ms, opacity 1000ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": []
        }]
    }
}, {
    "slug": "-introduction-",
    "name": "---- Introduction --- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "column-images-1-initial-appearance",
    "name": "Column Images 1 Initial Appearance",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "-20px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "column-images-2-initial-appearance",
    "name": "Column Images 2 Initial Appearance ",
    "value": {
        "style": {
            "opacity": 0,
            "x": "-20px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "column-images-3-initial-appearance",
    "name": "Column Images 3 Initial Appearance ",
    "value": {
        "style": {
            "opacity": 0,
            "x": "20px",
            "y": "0px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "column-images-4-initial-appearance",
    "name": "Column Images 4 Initial Appearance ",
    "value": {
        "style": {
            "opacity": 0,
            "x": "0px",
            "y": "20px",
            "z": "0px"
        },
        "triggers": []
    }
}, {
    "slug": "-blog-categories-",
    "name": "---- Blog Categories --- ",
    "value": {
        "style": {},
        "triggers": []
    }
}, {
    "slug": "move-arrow-right-on-hover",
    "name": "Move Arrow Right On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".arrows",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "transition": "transform 500ms ease 0ms",
                "x": "5px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "transition": "transform 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }]
        }]
    }
}, {
    "slug": "-picture-gallery-",
    "name": "---- Picture Gallery ---- ",
    "value": {
        "style": {
            "display": "none",
            "opacity": 0
        },
        "triggers": []
    }
}, {
    "slug": "show-see-more-icon-on-hover",
    "name": "Show \"See More Icon\" On Hover",
    "value": {
        "style": {},
        "triggers": [{
            "type": "hover",
            "selector": ".see-more-icon",
            "descend": true,
            "preserve3d": true,
            "stepsA": [{
                "display": "block"
            }, {
                "opacity": 1,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "0px",
                "z": "0px"
            }],
            "stepsB": [{
                "opacity": 0,
                "transition": "transform 500ms ease 0ms, opacity 500ms ease 0ms",
                "x": "0px",
                "y": "10px",
                "z": "0px"
            }, {
                "display": "none"
            }]
        }]
    }
}, {
    "slug": "display-none-on-load-see-more-icon",
    "name": "Display None On Load See More Icon",
    "value": {
        "style": {
            "display": "none",
            "opacity": 0,
            "x": "0px",
            "y": "10px",
            "z": "0px"
        },
        "triggers": []
    }
}]);

//faq
var prevGrpId = [];
$('.faq-head').click(function(){
    var thisGrpId=$(this).parent().attr('id');
    $('#'+thisGrpId).find('.round').find('img').toggleClass('is-active');
    $('#'+thisGrpId).find('.faq-body').slideToggle(500,'swing');
    console.log($('#'+"faq5").find('.faq-body').is(":hidden"));
    console.log(thisGrpId);
});