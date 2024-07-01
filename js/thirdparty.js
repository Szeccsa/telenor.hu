/*!
 * jQuery JavaScript Library v1.6.2
 * http://jquery.com/
 *
 * Copyright 2011, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 * Copyright 2011, The Dojo Foundation
 * Released under the MIT, BSD, and GPL Licenses.
 *
 * Date: Thu Jun 30 14:16:56 2011 -0400
 */
(function (a, b) {
    function cv(a) {
        return f.isWindow(a) ? a : a.nodeType === 9 ? a.defaultView || a.parentWindow : !1
    }
    function cs(a) {
        if (!cg[a]) {
            var b = c.body
                , d = f("<" + a + ">").appendTo(b)
                , e = d.css("display");
            d.remove();
            if (e === "none" || e === "") {
                ch || (ch = c.createElement("iframe"),
                    ch.frameBorder = ch.width = ch.height = 0),
                    b.appendChild(ch);
                if (!ci || !ch.createElement)
                    ci = (ch.contentWindow || ch.contentDocument).document,
                        ci.write((c.compatMode === "CSS1Compat" ? "<!doctype html>" : "") + "<html><body>"),
                        ci.close();
                d = ci.createElement(a),
                    ci.body.appendChild(d),
                    e = f.css(d, "display"),
                    b.removeChild(ch)
            }
            cg[a] = e
        }
        return cg[a]
    }
    function cr(a, b) {
        var c = {};
        f.each(cm.concat.apply([], cm.slice(0, b)), function () {
            c[this] = a
        });
        return c
    }
    function cq() {
        cn = b
    }
    function cp() {
        setTimeout(cq, 0);
        return cn = f.now()
    }
    function cf() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) { }
    }
    function ce() {
        try {
            return new a.XMLHttpRequest
        } catch (b) { }
    }
    function b$(a, c) {
        a.dataFilter && (c = a.dataFilter(c, a.dataType));
        var d = a.dataTypes, e = {}, g, h, i = d.length, j, k = d[0], l, m, n, o, p;
        for (g = 1; g < i; g++) {
            if (g === 1)
                for (h in a.converters)
                    typeof h == "string" && (e[h.toLowerCase()] = a.converters[h]);
            l = k,
                k = d[g];
            if (k === "*")
                k = l;
            else if (l !== "*" && l !== k) {
                m = l + " " + k,
                    n = e[m] || e["* " + k];
                if (!n) {
                    p = b;
                    for (o in e) {
                        j = o.split(" ");
                        if (j[0] === l || j[0] === "*") {
                            p = e[j[1] + " " + k];
                            if (p) {
                                o = e[o],
                                    o === !0 ? n = p : p === !0 && (n = o);
                                break
                            }
                        }
                    }
                }
                !n && !p && f.error("No conversion from " + m.replace(" ", " to ")),
                    n !== !0 && (c = n ? n(c) : p(o(c)))
            }
        }
        return c
    }
    function bZ(a, c, d) {
        var e = a.contents, f = a.dataTypes, g = a.responseFields, h, i, j, k;
        for (i in g)
            i in d && (c[g[i]] = d[i]);
        while (f[0] === "*")
            f.shift(),
                h === b && (h = a.mimeType || c.getResponseHeader("content-type"));
        if (h)
            for (i in e)
                if (e[i] && e[i].test(h)) {
                    f.unshift(i);
                    break
                }
        if (f[0] in d)
            j = f[0];
        else {
            for (i in d) {
                if (!f[0] || a.converters[i + " " + f[0]]) {
                    j = i;
                    break
                }
                k || (k = i)
            }
            j = j || k
        }
        if (j) {
            j !== f[0] && f.unshift(j);
            return d[j]
        }
    }
    function bY(a, b, c, d) {
        if (f.isArray(b))
            f.each(b, function (b, e) {
                c || bC.test(a) ? d(a, e) : bY(a + "[" + (typeof e == "object" || f.isArray(e) ? b : "") + "]", e, c, d)
            });
        else if (!c && b != null && typeof b == "object")
            for (var e in b)
                bY(a + "[" + e + "]", b[e], c, d);
        else
            d(a, b)
    }
    function bX(a, c, d, e, f, g) {
        f = f || c.dataTypes[0],
            g = g || {},
            g[f] = !0;
        var h = a[f], i = 0, j = h ? h.length : 0, k = a === bR, l;
        for (; i < j && (k || !l); i++)
            l = h[i](c, d, e),
                typeof l == "string" && (!k || g[l] ? l = b : (c.dataTypes.unshift(l),
                    l = bX(a, c, d, e, l, g)));
        (k || !l) && !g["*"] && (l = bX(a, c, d, e, "*", g));
        return l
    }
    function bW(a) {
        return function (b, c) {
            typeof b != "string" && (c = b,
                b = "*");
            if (f.isFunction(c)) {
                var d = b.toLowerCase().split(bN), e = 0, g = d.length, h, i, j;
                for (; e < g; e++)
                    h = d[e],
                        j = /^\+/.test(h),
                        j && (h = h.substr(1) || "*"),
                        i = a[h] = a[h] || [],
                        i[j ? "unshift" : "push"](c)
            }
        }
    }
    function bA(a, b, c) {
        var d = b === "width" ? a.offsetWidth : a.offsetHeight
            , e = b === "width" ? bv : bw;
        if (d > 0) {
            c !== "border" && f.each(e, function () {
                c || (d -= parseFloat(f.css(a, "padding" + this)) || 0),
                    c === "margin" ? d += parseFloat(f.css(a, c + this)) || 0 : d -= parseFloat(f.css(a, "border" + this + "Width")) || 0
            });
            return d + "px"
        }
        d = bx(a, b, b);
        if (d < 0 || d == null)
            d = a.style[b] || 0;
        d = parseFloat(d) || 0,
            c && f.each(e, function () {
                d += parseFloat(f.css(a, "padding" + this)) || 0,
                    c !== "padding" && (d += parseFloat(f.css(a, "border" + this + "Width")) || 0),
                    c === "margin" && (d += parseFloat(f.css(a, c + this)) || 0)
            });
        return d + "px"
    }
    function bm(a, b) {
        b.src ? f.ajax({
            url: b.src,
            async: !1,
            dataType: "script"
        }) : f.globalEval((b.text || b.textContent || b.innerHTML || "").replace(be, "/*$0*/")),
            b.parentNode && b.parentNode.removeChild(b)
    }
    function bl(a) {
        f.nodeName(a, "input") ? bk(a) : "getElementsByTagName" in a && f.grep(a.getElementsByTagName("input"), bk)
    }
    function bk(a) {
        if (a.type === "checkbox" || a.type === "radio")
            a.defaultChecked = a.checked
    }
    function bj(a) {
        return "getElementsByTagName" in a ? a.getElementsByTagName("*") : "querySelectorAll" in a ? a.querySelectorAll("*") : []
    }
    function bi(a, b) {
        var c;
        if (b.nodeType === 1) {
            b.clearAttributes && b.clearAttributes(),
                b.mergeAttributes && b.mergeAttributes(a),
                c = b.nodeName.toLowerCase();
            if (c === "object")
                b.outerHTML = a.outerHTML;
            else if (c !== "input" || a.type !== "checkbox" && a.type !== "radio") {
                if (c === "option")
                    b.selected = a.defaultSelected;
                else if (c === "input" || c === "textarea")
                    b.defaultValue = a.defaultValue
            } else
                a.checked && (b.defaultChecked = b.checked = a.checked),
                    b.value !== a.value && (b.value = a.value);
            b.removeAttribute(f.expando)
        }
    }
    function bh(a, b) {
        if (b.nodeType === 1 && !!f.hasData(a)) {
            var c = f.expando
                , d = f.data(a)
                , e = f.data(b, d);
            if (d = d[c]) {
                var g = d.events;
                e = e[c] = f.extend({}, d);
                if (g) {
                    delete e.handle,
                        e.events = {};
                    for (var h in g)
                        for (var i = 0, j = g[h].length; i < j; i++)
                            f.event.add(b, h + (g[h][i].namespace ? "." : "") + g[h][i].namespace, g[h][i], g[h][i].data)
                }
            }
        }
    }
    function bg(a, b) {
        return f.nodeName(a, "table") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }
    function W(a, b, c) {
        b = b || 0;
        if (f.isFunction(b))
            return f.grep(a, function (a, d) {
                var e = !!b.call(a, d, a);
                return e === c
            });
        if (b.nodeType)
            return f.grep(a, function (a, d) {
                return a === b === c
            });
        if (typeof b == "string") {
            var d = f.grep(a, function (a) {
                return a.nodeType === 1
            });
            if (R.test(b))
                return f.filter(b, d, !c);
            b = f.filter(b, d)
        }
        return f.grep(a, function (a, d) {
            return f.inArray(a, b) >= 0 === c
        })
    }
    function V(a) {
        return !a || !a.parentNode || a.parentNode.nodeType === 11
    }
    function N(a, b) {
        return (a && a !== "*" ? a + "." : "") + b.replace(z, "`").replace(A, "&")
    }
    function M(a) {
        var b, c, d, e, g, h, i, j, k, l, m, n, o, p = [], q = [], r = f._data(this, "events");
        if (!(a.liveFired === this || !r || !r.live || a.target.disabled || a.button && a.type === "click")) {
            a.namespace && (n = new RegExp("(^|\\.)" + a.namespace.split(".").join("\\.(?:.*\\.)?") + "(\\.|$)")),
                a.liveFired = this;
            var s = r.live.slice(0);
            for (i = 0; i < s.length; i++)
                g = s[i],
                    g.origType.replace(x, "") === a.type ? q.push(g.selector) : s.splice(i--, 1);
            e = f(a.target).closest(q, a.currentTarget);
            for (j = 0,
                k = e.length; j < k; j++) {
                m = e[j];
                for (i = 0; i < s.length; i++) {
                    g = s[i];
                    if (m.selector === g.selector && (!n || n.test(g.namespace)) && !m.elem.disabled) {
                        h = m.elem,
                            d = null;
                        if (g.preType === "mouseenter" || g.preType === "mouseleave")
                            a.type = g.preType,
                                d = f(a.relatedTarget).closest(g.selector)[0],
                                d && f.contains(h, d) && (d = h);
                        (!d || d !== h) && p.push({
                            elem: h,
                            handleObj: g,
                            level: m.level
                        })
                    }
                }
            }
            for (j = 0,
                k = p.length; j < k; j++) {
                e = p[j];
                if (c && e.level > c)
                    break;
                a.currentTarget = e.elem,
                    a.data = e.handleObj.data,
                    a.handleObj = e.handleObj,
                    o = e.handleObj.origHandler.apply(e.elem, arguments);
                if (o === !1 || a.isPropagationStopped()) {
                    c = e.level,
                        o === !1 && (b = !1);
                    if (a.isImmediatePropagationStopped())
                        break
                }
            }
            return b
        }
    }
    function K(a, c, d) {
        var e = f.extend({}, d[0]);
        e.type = a,
            e.originalEvent = {},
            e.liveFired = b,
            f.event.handle.call(c, e),
            e.isDefaultPrevented() && d[0].preventDefault()
    }
    function E() {
        return !0
    }
    function D() {
        return !1
    }
    function m(a, c, d) {
        var e = c + "defer"
            , g = c + "queue"
            , h = c + "mark"
            , i = f.data(a, e, b, !0);
        i && (d === "queue" || !f.data(a, g, b, !0)) && (d === "mark" || !f.data(a, h, b, !0)) && setTimeout(function () {
            !f.data(a, g, b, !0) && !f.data(a, h, b, !0) && (f.removeData(a, e, !0),
                i.resolve())
        }, 0)
    }
    function l(a) {
        for (var b in a)
            if (b !== "toJSON")
                return !1;
        return !0
    }
    function k(a, c, d) {
        if (d === b && a.nodeType === 1) {
            var e = "data-" + c.replace(j, "$1-$2").toLowerCase();
            d = a.getAttribute(e);
            if (typeof d == "string") {
                try {
                    d = d === "true" ? !0 : d === "false" ? !1 : d === "null" ? null : f.isNaN(d) ? i.test(d) ? f.parseJSON(d) : d : parseFloat(d)
                } catch (g) { }
                f.data(a, c, d)
            } else
                d = b
        }
        return d
    }
    var c = a.document
        , d = a.navigator
        , e = a.location
        , f = function () {
            function J() {
                if (!e.isReady) {
                    try {
                        c.documentElement.doScroll("left")
                    } catch (a) {
                        setTimeout(J, 1);
                        return
                    }
                    e.ready()
                }
            }
            var e = function (a, b) {
                return new e.fn.init(a, b, h)
            }, f = a.jQuery, g = a.$, h, i = /^(?:[^<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/, j = /\S/, k = /^\s+/, l = /\s+$/, m = /\d/, n = /^<(\w+)\s*\/?>(?:<\/\1>)?$/, o = /^[\],:{}\s]*$/, p = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, q = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, r = /(?:^|:|,)(?:\s*\[)+/g, s = /(webkit)[ \/]([\w.]+)/, t = /(opera)(?:.*version)?[ \/]([\w.]+)/, u = /(msie) ([\w.]+)/, v = /(mozilla)(?:.*? rv:([\w.]+))?/, w = /-([a-z])/ig, x = function (a, b) {
                return b.toUpperCase()
            }, y = d.userAgent, z, A, B, C = Object.prototype.toString, D = Object.prototype.hasOwnProperty, E = Array.prototype.push, F = Array.prototype.slice, G = String.prototype.trim, H = Array.prototype.indexOf, I = {};
            e.fn = e.prototype = {
                constructor: e,
                init: function (a, d, f) {
                    var g, h, j, k;
                    if (!a)
                        return this;
                    if (a.nodeType) {
                        this.context = this[0] = a,
                            this.length = 1;
                        return this
                    }
                    if (a === "body" && !d && c.body) {
                        this.context = c,
                            this[0] = c.body,
                            this.selector = a,
                            this.length = 1;
                        return this
                    }
                    if (typeof a == "string") {
                        a.charAt(0) !== "<" || a.charAt(a.length - 1) !== ">" || a.length < 3 ? g = i.exec(a) : g = [null, a, null];
                        if (g && (g[1] || !d)) {
                            if (g[1]) {
                                d = d instanceof e ? d[0] : d,
                                    k = d ? d.ownerDocument || d : c,
                                    j = n.exec(a),
                                    j ? e.isPlainObject(d) ? (a = [c.createElement(j[1])],
                                        e.fn.attr.call(a, d, !0)) : a = [k.createElement(j[1])] : (j = e.buildFragment([g[1]], [k]),
                                            a = (j.cacheable ? e.clone(j.fragment) : j.fragment).childNodes);
                                return e.merge(this, a)
                            }
                            h = c.getElementById(g[2]);
                            if (h && h.parentNode) {
                                if (h.id !== g[2])
                                    return f.find(a);
                                this.length = 1,
                                    this[0] = h
                            }
                            this.context = c,
                                this.selector = a;
                            return this
                        }
                        return !d || d.jquery ? (d || f).find(a) : this.constructor(d).find(a)
                    }
                    if (e.isFunction(a))
                        return f.ready(a);
                    a.selector !== b && (this.selector = a.selector,
                        this.context = a.context);
                    return e.makeArray(a, this)
                },
                selector: "",
                jquery: "1.6.2",
                length: 0,
                size: function () {
                    return this.length
                },
                toArray: function () {
                    return F.call(this, 0)
                },
                get: function (a) {
                    return a == null ? this.toArray() : a < 0 ? this[this.length + a] : this[a]
                },
                pushStack: function (a, b, c) {
                    var d = this.constructor();
                    e.isArray(a) ? E.apply(d, a) : e.merge(d, a),
                        d.prevObject = this,
                        d.context = this.context,
                        b === "find" ? d.selector = this.selector + (this.selector ? " " : "") + c : b && (d.selector = this.selector + "." + b + "(" + c + ")");
                    return d
                },
                each: function (a, b) {
                    return e.each(this, a, b)
                },
                ready: function (a) {
                    e.bindReady(),
                        A.done(a);
                    return this
                },
                eq: function (a) {
                    return a === -1 ? this.slice(a) : this.slice(a, +a + 1)
                },
                first: function () {
                    return this.eq(0)
                },
                last: function () {
                    return this.eq(-1)
                },
                slice: function () {
                    return this.pushStack(F.apply(this, arguments), "slice", F.call(arguments).join(","))
                },
                map: function (a) {
                    return this.pushStack(e.map(this, function (b, c) {
                        return a.call(b, c, b)
                    }))
                },
                end: function () {
                    return this.prevObject || this.constructor(null)
                },
                push: E,
                sort: [].sort,
                splice: [].splice
            },
                e.fn.init.prototype = e.fn,
                e.extend = e.fn.extend = function () {
                    var a, c, d, f, g, h, i = arguments[0] || {}, j = 1, k = arguments.length, l = !1;
                    typeof i == "boolean" && (l = i,
                        i = arguments[1] || {},
                        j = 2),
                        typeof i != "object" && !e.isFunction(i) && (i = {}),
                        k === j && (i = this,
                            --j);
                    for (; j < k; j++)
                        if ((a = arguments[j]) != null)
                            for (c in a) {
                                d = i[c],
                                    f = a[c];
                                if (i === f)
                                    continue;
                                l && f && (e.isPlainObject(f) || (g = e.isArray(f))) ? (g ? (g = !1,
                                    h = d && e.isArray(d) ? d : []) : h = d && e.isPlainObject(d) ? d : {},
                                    i[c] = e.extend(l, h, f)) : f !== b && (i[c] = f)
                            }
                    return i
                }
                ,
                e.extend({
                    noConflict: function (b) {
                        a.$ === e && (a.$ = g),
                            b && a.jQuery === e && (a.jQuery = f);
                        return e
                    },
                    isReady: !1,
                    readyWait: 1,
                    holdReady: function (a) {
                        a ? e.readyWait++ : e.ready(!0)
                    },
                    ready: function (a) {
                        if (a === !0 && !--e.readyWait || a !== !0 && !e.isReady) {
                            if (!c.body)
                                return setTimeout(e.ready, 1);
                            e.isReady = !0;
                            if (a !== !0 && --e.readyWait > 0)
                                return;
                            A.resolveWith(c, [e]),
                                e.fn.trigger && e(c).trigger("ready").unbind("ready")
                        }
                    },
                    bindReady: function () {
                        if (!A) {
                            A = e._Deferred();
                            if (c.readyState === "complete")
                                return setTimeout(e.ready, 1);
                            if (c.addEventListener)
                                c.addEventListener("DOMContentLoaded", B, !1),
                                    a.addEventListener("load", e.ready, !1);
                            else if (c.attachEvent) {
                                c.attachEvent("onreadystatechange", B),
                                    a.attachEvent("onload", e.ready);
                                var b = !1;
                                try {
                                    b = a.frameElement == null
                                } catch (d) { }
                                c.documentElement.doScroll && b && J()
                            }
                        }
                    },
                    isFunction: function (a) {
                        return e.type(a) === "function"
                    },
                    isArray: Array.isArray || function (a) {
                        return e.type(a) === "array"
                    }
                    ,
                    isWindow: function (a) {
                        return a && typeof a == "object" && "setInterval" in a
                    },
                    isNaN: function (a) {
                        return a == null || !m.test(a) || isNaN(a)
                    },
                    type: function (a) {
                        return a == null ? String(a) : I[C.call(a)] || "object"
                    },
                    isPlainObject: function (a) {
                        if (!a || e.type(a) !== "object" || a.nodeType || e.isWindow(a))
                            return !1;
                        if (a.constructor && !D.call(a, "constructor") && !D.call(a.constructor.prototype, "isPrototypeOf"))
                            return !1;
                        var c;
                        for (c in a)
                            ;
                        return c === b || D.call(a, c)
                    },
                    isEmptyObject: function (a) {
                        for (var b in a)
                            return !1;
                        return !0
                    },
                    error: function (a) {
                        throw a
                    },
                    parseJSON: function (b) {
                        if (typeof b != "string" || !b)
                            return null;
                        b = e.trim(b);
                        if (a.JSON && a.JSON.parse)
                            return a.JSON.parse(b);
                        if (o.test(b.replace(p, "@").replace(q, "]").replace(r, "")))
                            return (new Function("return " + b))();
                        e.error("Invalid JSON: " + b)
                    },
                    parseXML: function (b, c, d) {
                        a.DOMParser ? (d = new DOMParser,
                            c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"),
                                c.async = "false",
                                c.loadXML(b)),
                            d = c.documentElement,
                            (!d || !d.nodeName || d.nodeName === "parsererror") && e.error("Invalid XML: " + b);
                        return c
                    },
                    noop: function () { },
                    globalEval: function (b) {
                        b && j.test(b) && (a.execScript || function (b) {
                            a.eval.call(a, b)
                        }
                        )(b)
                    },
                    camelCase: function (a) {
                        return a.replace(w, x)
                    },
                    nodeName: function (a, b) {
                        return a.nodeName && a.nodeName.toUpperCase() === b.toUpperCase()
                    },
                    each: function (a, c, d) {
                        var f, g = 0, h = a.length, i = h === b || e.isFunction(a);
                        if (d) {
                            if (i) {
                                for (f in a)
                                    if (c.apply(a[f], d) === !1)
                                        break
                            } else
                                for (; g < h;)
                                    if (c.apply(a[g++], d) === !1)
                                        break
                        } else if (i) {
                            for (f in a)
                                if (c.call(a[f], f, a[f]) === !1)
                                    break
                        } else
                            for (; g < h;)
                                if (c.call(a[g], g, a[g++]) === !1)
                                    break;
                        return a
                    },
                    trim: G ? function (a) {
                        return a == null ? "" : G.call(a)
                    }
                        : function (a) {
                            return a == null ? "" : (a + "").replace(k, "").replace(l, "")
                        }
                    ,
                    makeArray: function (a, b) {
                        var c = b || [];
                        if (a != null) {
                            var d = e.type(a);
                            a.length == null || d === "string" || d === "function" || d === "regexp" || e.isWindow(a) ? E.call(c, a) : e.merge(c, a)
                        }
                        return c
                    },
                    inArray: function (a, b) {
                        if (H)
                            return H.call(b, a);
                        for (var c = 0, d = b.length; c < d; c++)
                            if (b[c] === a)
                                return c;
                        return -1
                    },
                    merge: function (a, c) {
                        var d = a.length
                            , e = 0;
                        if (typeof c.length == "number")
                            for (var f = c.length; e < f; e++)
                                a[d++] = c[e];
                        else
                            while (c[e] !== b)
                                a[d++] = c[e++];
                        a.length = d;
                        return a
                    },
                    grep: function (a, b, c) {
                        var d = [], e;
                        c = !!c;
                        for (var f = 0, g = a.length; f < g; f++)
                            e = !!b(a[f], f),
                                c !== e && d.push(a[f]);
                        return d
                    },
                    map: function (a, c, d) {
                        var f, g, h = [], i = 0, j = a.length, k = a instanceof e || j !== b && typeof j == "number" && (j > 0 && a[0] && a[j - 1] || j === 0 || e.isArray(a));
                        if (k)
                            for (; i < j; i++)
                                f = c(a[i], i, d),
                                    f != null && (h[h.length] = f);
                        else
                            for (g in a)
                                f = c(a[g], g, d),
                                    f != null && (h[h.length] = f);
                        return h.concat.apply([], h)
                    },
                    guid: 1,
                    proxy: function (a, c) {
                        if (typeof c == "string") {
                            var d = a[c];
                            c = a,
                                a = d
                        }
                        if (!e.isFunction(a))
                            return b;
                        var f = F.call(arguments, 2)
                            , g = function () {
                                return a.apply(c, f.concat(F.call(arguments)))
                            };
                        g.guid = a.guid = a.guid || g.guid || e.guid++;
                        return g
                    },
                    access: function (a, c, d, f, g, h) {
                        var i = a.length;
                        if (typeof c == "object") {
                            for (var j in c)
                                e.access(a, j, c[j], f, g, d);
                            return a
                        }
                        if (d !== b) {
                            f = !h && f && e.isFunction(d);
                            for (var k = 0; k < i; k++)
                                g(a[k], c, f ? d.call(a[k], k, g(a[k], c)) : d, h);
                            return a
                        }
                        return i ? g(a[0], c) : b
                    },
                    now: function () {
                        return (new Date).getTime()
                    },
                    uaMatch: function (a) {
                        a = a.toLowerCase();
                        var b = s.exec(a) || t.exec(a) || u.exec(a) || a.indexOf("compatible") < 0 && v.exec(a) || [];
                        return {
                            browser: b[1] || "",
                            version: b[2] || "0"
                        }
                    },
                    sub: function () {
                        function a(b, c) {
                            return new a.fn.init(b, c)
                        }
                        e.extend(!0, a, this),
                            a.superclass = this,
                            a.fn = a.prototype = this(),
                            a.fn.constructor = a,
                            a.sub = this.sub,
                            a.fn.init = function (d, f) {
                                f && f instanceof e && !(f instanceof a) && (f = a(f));
                                return e.fn.init.call(this, d, f, b)
                            }
                            ,
                            a.fn.init.prototype = a.fn;
                        var b = a(c);
                        return a
                    },
                    browser: {}
                }),
                e.each("Boolean Number String Function Array Date RegExp Object".split(" "), function (a, b) {
                    I["[object " + b + "]"] = b.toLowerCase()
                }),
                z = e.uaMatch(y),
                z.browser && (e.browser[z.browser] = !0,
                    e.browser.version = z.version),
                e.browser.webkit && (e.browser.safari = !0),
                j.test(" ") && (k = /^[\s\xA0]+/,
                    l = /[\s\xA0]+$/),
                h = e(c),
                c.addEventListener ? B = function () {
                    c.removeEventListener("DOMContentLoaded", B, !1),
                        e.ready()
                }
                    : c.attachEvent && (B = function () {
                        c.readyState === "complete" && (c.detachEvent("onreadystatechange", B),
                            e.ready())
                    }
                    );
            return e
        }()
        , g = "done fail isResolved isRejected promise then always pipe".split(" ")
        , h = [].slice;
    f.extend({
        _Deferred: function () {
            var a = [], b, c, d, e = {
                done: function () {
                    if (!d) {
                        var c = arguments, g, h, i, j, k;
                        b && (k = b,
                            b = 0);
                        for (g = 0,
                            h = c.length; g < h; g++)
                            i = c[g],
                                j = f.type(i),
                                j === "array" ? e.done.apply(e, i) : j === "function" && a.push(i);
                        k && e.resolveWith(k[0], k[1])
                    }
                    return this
                },
                resolveWith: function (e, f) {
                    if (!d && !b && !c) {
                        f = f || [],
                            c = 1;
                        try {
                            while (a[0])
                                a.shift().apply(e, f)
                        } finally {
                            b = [e, f],
                                c = 0
                        }
                    }
                    return this
                },
                resolve: function () {
                    e.resolveWith(this, arguments);
                    return this
                },
                isResolved: function () {
                    return !!c || !!b
                },
                cancel: function () {
                    d = 1,
                        a = [];
                    return this
                }
            };
            return e
        },
        Deferred: function (a) {
            var b = f._Deferred(), c = f._Deferred(), d;
            f.extend(b, {
                then: function (a, c) {
                    b.done(a).fail(c);
                    return this
                },
                always: function () {
                    return b.done.apply(b, arguments).fail.apply(this, arguments)
                },
                fail: c.done,
                rejectWith: c.resolveWith,
                reject: c.resolve,
                isRejected: c.isResolved,
                pipe: function (a, c) {
                    return f.Deferred(function (d) {
                        f.each({
                            done: [a, "resolve"],
                            fail: [c, "reject"]
                        }, function (a, c) {
                            var e = c[0], g = c[1], h;
                            f.isFunction(e) ? b[a](function () {
                                h = e.apply(this, arguments),
                                    h && f.isFunction(h.promise) ? h.promise().then(d.resolve, d.reject) : d[g](h)
                            }) : b[a](d[g])
                        })
                    }).promise()
                },
                promise: function (a) {
                    if (a == null) {
                        if (d)
                            return d;
                        d = a = {}
                    }
                    var c = g.length;
                    while (c--)
                        a[g[c]] = b[g[c]];
                    return a
                }
            }),
                b.done(c.cancel).fail(b.cancel),
                delete b.cancel,
                a && a.call(b, b);
            return b
        },
        when: function (a) {
            function i(a) {
                return function (c) {
                    b[a] = arguments.length > 1 ? h.call(arguments, 0) : c,
                        --e || g.resolveWith(g, h.call(b, 0))
                }
            }
            var b = arguments
                , c = 0
                , d = b.length
                , e = d
                , g = d <= 1 && a && f.isFunction(a.promise) ? a : f.Deferred();
            if (d > 1) {
                for (; c < d; c++)
                    b[c] && f.isFunction(b[c].promise) ? b[c].promise().then(i(c), g.reject) : --e;
                e || g.resolveWith(g, b)
            } else
                g !== a && g.resolveWith(g, d ? [a] : []);
            return g.promise()
        }
    }),
        f.support = function () {
            var a = c.createElement("div"), b = c.documentElement, d, e, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u;
            a.setAttribute("className", "t"),
                a.innerHTML = "   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",
                d = a.getElementsByTagName("*"),
                e = a.getElementsByTagName("a")[0];
            if (!d || !d.length || !e)
                return {};
            g = c.createElement("select"),
                h = g.appendChild(c.createElement("option")),
                i = a.getElementsByTagName("input")[0],
                k = {
                    leadingWhitespace: a.firstChild.nodeType === 3,
                    tbody: !a.getElementsByTagName("tbody").length,
                    htmlSerialize: !!a.getElementsByTagName("link").length,
                    style: /top/.test(e.getAttribute("style")),
                    hrefNormalized: e.getAttribute("href") === "/a",
                    opacity: /^0.55$/.test(e.style.opacity),
                    cssFloat: !!e.style.cssFloat,
                    checkOn: i.value === "on",
                    optSelected: h.selected,
                    getSetAttribute: a.className !== "t",
                    submitBubbles: !0,
                    changeBubbles: !0,
                    focusinBubbles: !1,
                    deleteExpando: !0,
                    noCloneEvent: !0,
                    inlineBlockNeedsLayout: !1,
                    shrinkWrapBlocks: !1,
                    reliableMarginRight: !0
                },
                i.checked = !0,
                k.noCloneChecked = i.cloneNode(!0).checked,
                g.disabled = !0,
                k.optDisabled = !h.disabled;
            try {
                delete a.test
            } catch (v) {
                k.deleteExpando = !1
            }
            !a.addEventListener && a.attachEvent && a.fireEvent && (a.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }),
                a.cloneNode(!0).fireEvent("onclick")),
                i = c.createElement("input"),
                i.value = "t",
                i.setAttribute("type", "radio"),
                k.radioValue = i.value === "t",
                i.setAttribute("checked", "checked"),
                a.appendChild(i),
                l = c.createDocumentFragment(),
                l.appendChild(a.firstChild),
                k.checkClone = l.cloneNode(!0).cloneNode(!0).lastChild.checked,
                a.innerHTML = "",
                a.style.width = a.style.paddingLeft = "1px",
                m = c.getElementsByTagName("body")[0],
                o = c.createElement(m ? "div" : "body"),
                p = {
                    visibility: "hidden",
                    width: 0,
                    height: 0,
                    border: 0,
                    margin: 0
                },
                m && f.extend(p, {
                    position: "absolute",
                    left: -1e3,
                    top: -1e3
                });
            for (t in p)
                o.style[t] = p[t];
            o.appendChild(a),
                n = m || b,
                n.insertBefore(o, n.firstChild),
                k.appendChecked = i.checked,
                k.boxModel = a.offsetWidth === 2,
                "zoom" in a.style && (a.style.display = "inline",
                    a.style.zoom = 1,
                    k.inlineBlockNeedsLayout = a.offsetWidth === 2,
                    a.style.display = "",
                    a.innerHTML = "<div style='width:4px;'></div>",
                    k.shrinkWrapBlocks = a.offsetWidth !== 2),
                a.innerHTML = "<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",
                q = a.getElementsByTagName("td"),
                u = q[0].offsetHeight === 0,
                q[0].style.display = "",
                q[1].style.display = "none",
                k.reliableHiddenOffsets = u && q[0].offsetHeight === 0,
                a.innerHTML = "",
                c.defaultView && c.defaultView.getComputedStyle && (j = c.createElement("div"),
                    j.style.width = "0",
                    j.style.marginRight = "0",
                    a.appendChild(j),
                    k.reliableMarginRight = (parseInt((c.defaultView.getComputedStyle(j, null) || {
                        marginRight: 0
                    }).marginRight, 10) || 0) === 0),
                o.innerHTML = "",
                n.removeChild(o);
            if (a.attachEvent)
                for (t in {
                    submit: 1,
                    change: 1,
                    focusin: 1
                })
                    s = "on" + t,
                        u = s in a,
                        u || (a.setAttribute(s, "return;"),
                            u = typeof a[s] == "function"),
                        k[t + "Bubbles"] = u;
            o = l = g = h = m = j = a = i = null;
            return k
        }(),
        f.boxModel = f.support.boxModel;
    var i = /^(?:\{.*\}|\[.*\])$/
        , j = /([a-z])([A-Z])/g;
    f.extend({
        cache: {},
        uuid: 0,
        expando: "jQuery" + (f.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: {
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",
            applet: !0
        },
        hasData: function (a) {
            a = a.nodeType ? f.cache[a[f.expando]] : a[f.expando];
            return !!a && !l(a)
        },
        data: function (a, c, d, e) {
            if (!!f.acceptData(a)) {
                var g = f.expando, h = typeof c == "string", i, j = a.nodeType, k = j ? f.cache : a, l = j ? a[f.expando] : a[f.expando] && f.expando;
                if ((!l || e && l && !k[l][g]) && h && d === b)
                    return;
                l || (j ? a[f.expando] = l = ++f.uuid : l = f.expando),
                    k[l] || (k[l] = {},
                        j || (k[l].toJSON = f.noop));
                if (typeof c == "object" || typeof c == "function")
                    e ? k[l][g] = f.extend(k[l][g], c) : k[l] = f.extend(k[l], c);
                i = k[l],
                    e && (i[g] || (i[g] = {}),
                        i = i[g]),
                    d !== b && (i[f.camelCase(c)] = d);
                if (c === "events" && !i[c])
                    return i[g] && i[g].events;
                return h ? i[f.camelCase(c)] || i[c] : i
            }
        },
        removeData: function (b, c, d) {
            if (!!f.acceptData(b)) {
                var e = f.expando
                    , g = b.nodeType
                    , h = g ? f.cache : b
                    , i = g ? b[f.expando] : f.expando;
                if (!h[i])
                    return;
                if (c) {
                    var j = d ? h[i][e] : h[i];
                    if (j) {
                        delete j[c];
                        if (!l(j))
                            return
                    }
                }
                if (d) {
                    delete h[i][e];
                    if (!l(h[i]))
                        return
                }
                var k = h[i][e];
                f.support.deleteExpando || h != a ? delete h[i] : h[i] = null,
                    k ? (h[i] = {},
                        g || (h[i].toJSON = f.noop),
                        h[i][e] = k) : g && (f.support.deleteExpando ? delete b[f.expando] : b.removeAttribute ? b.removeAttribute(f.expando) : b[f.expando] = null)
            }
        },
        _data: function (a, b, c) {
            return f.data(a, b, c, !0)
        },
        acceptData: function (a) {
            if (a.nodeName) {
                var b = f.noData[a.nodeName.toLowerCase()];
                if (b)
                    return b !== !0 && a.getAttribute("classid") === b
            }
            return !0
        }
    }),
        f.fn.extend({
            data: function (a, c) {
                var d = null;
                if (typeof a == "undefined") {
                    if (this.length) {
                        d = f.data(this[0]);
                        if (this[0].nodeType === 1) {
                            var e = this[0].attributes, g;
                            for (var h = 0, i = e.length; h < i; h++)
                                g = e[h].name,
                                    g.indexOf("data-") === 0 && (g = f.camelCase(g.substring(5)),
                                        k(this[0], g, d[g]))
                        }
                    }
                    return d
                }
                if (typeof a == "object")
                    return this.each(function () {
                        f.data(this, a)
                    });
                var j = a.split(".");
                j[1] = j[1] ? "." + j[1] : "";
                if (c === b) {
                    d = this.triggerHandler("getData" + j[1] + "!", [j[0]]),
                        d === b && this.length && (d = f.data(this[0], a),
                            d = k(this[0], a, d));
                    return d === b && j[1] ? this.data(j[0]) : d
                }
                return this.each(function () {
                    var b = f(this)
                        , d = [j[0], c];
                    b.triggerHandler("setData" + j[1] + "!", d),
                        f.data(this, a, c),
                        b.triggerHandler("changeData" + j[1] + "!", d)
                })
            },
            removeData: function (a) {
                return this.each(function () {
                    f.removeData(this, a)
                })
            }
        }),
        f.extend({
            _mark: function (a, c) {
                a && (c = (c || "fx") + "mark",
                    f.data(a, c, (f.data(a, c, b, !0) || 0) + 1, !0))
            },
            _unmark: function (a, c, d) {
                a !== !0 && (d = c,
                    c = a,
                    a = !1);
                if (c) {
                    d = d || "fx";
                    var e = d + "mark"
                        , g = a ? 0 : (f.data(c, e, b, !0) || 1) - 1;
                    g ? f.data(c, e, g, !0) : (f.removeData(c, e, !0),
                        m(c, d, "mark"))
                }
            },
            queue: function (a, c, d) {
                if (a) {
                    c = (c || "fx") + "queue";
                    var e = f.data(a, c, b, !0);
                    d && (!e || f.isArray(d) ? e = f.data(a, c, f.makeArray(d), !0) : e.push(d));
                    return e || []
                }
            },
            dequeue: function (a, b) {
                b = b || "fx";
                var c = f.queue(a, b), d = c.shift(), e;
                d === "inprogress" && (d = c.shift()),
                    d && (b === "fx" && c.unshift("inprogress"),
                        d.call(a, function () {
                            f.dequeue(a, b)
                        })),
                    c.length || (f.removeData(a, b + "queue", !0),
                        m(a, b, "queue"))
            }
        }),
        f.fn.extend({
            queue: function (a, c) {
                typeof a != "string" && (c = a,
                    a = "fx");
                if (c === b)
                    return f.queue(this[0], a);
                return this.each(function () {
                    var b = f.queue(this, a, c);
                    a === "fx" && b[0] !== "inprogress" && f.dequeue(this, a)
                })
            },
            dequeue: function (a) {
                return this.each(function () {
                    f.dequeue(this, a)
                })
            },
            delay: function (a, b) {
                a = f.fx ? f.fx.speeds[a] || a : a,
                    b = b || "fx";
                return this.queue(b, function () {
                    var c = this;
                    setTimeout(function () {
                        f.dequeue(c, b)
                    }, a)
                })
            },
            clearQueue: function (a) {
                return this.queue(a || "fx", [])
            },
            promise: function (a, c) {
                function m() {
                    --h || d.resolveWith(e, [e])
                }
                typeof a != "string" && (c = a,
                    a = b),
                    a = a || "fx";
                var d = f.Deferred(), e = this, g = e.length, h = 1, i = a + "defer", j = a + "queue", k = a + "mark", l;
                while (g--)
                    if (l = f.data(e[g], i, b, !0) || (f.data(e[g], j, b, !0) || f.data(e[g], k, b, !0)) && f.data(e[g], i, f._Deferred(), !0))
                        h++,
                            l.done(m);
                m();
                return d.promise()
            }
        });
    var n = /[\n\t\r]/g, o = /\s+/, p = /\r/g, q = /^(?:button|input)$/i, r = /^(?:button|input|object|select|textarea)$/i, s = /^a(?:rea)?$/i, t = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, u = /\:|^on/, v, w;
    f.fn.extend({
        attr: function (a, b) {
            return f.access(this, a, b, !0, f.attr)
        },
        removeAttr: function (a) {
            return this.each(function () {
                f.removeAttr(this, a)
            })
        },
        prop: function (a, b) {
            return f.access(this, a, b, !0, f.prop)
        },
        removeProp: function (a) {
            a = f.propFix[a] || a;
            return this.each(function () {
                try {
                    this[a] = b,
                        delete this[a]
                } catch (c) { }
            })
        },
        addClass: function (a) {
            var b, c, d, e, g, h, i;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).addClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string") {
                b = a.split(o);
                for (c = 0,
                    d = this.length; c < d; c++) {
                    e = this[c];
                    if (e.nodeType === 1)
                        if (!e.className && b.length === 1)
                            e.className = a;
                        else {
                            g = " " + e.className + " ";
                            for (h = 0,
                                i = b.length; h < i; h++)
                                ~g.indexOf(" " + b[h] + " ") || (g += b[h] + " ");
                            e.className = f.trim(g)
                        }
                }
            }
            return this
        },
        removeClass: function (a) {
            var c, d, e, g, h, i, j;
            if (f.isFunction(a))
                return this.each(function (b) {
                    f(this).removeClass(a.call(this, b, this.className))
                });
            if (a && typeof a == "string" || a === b) {
                c = (a || "").split(o);
                for (d = 0,
                    e = this.length; d < e; d++) {
                    g = this[d];
                    if (g.nodeType === 1 && g.className)
                        if (a) {
                            h = (" " + g.className + " ").replace(n, " ");
                            for (i = 0,
                                j = c.length; i < j; i++)
                                h = h.replace(" " + c[i] + " ", " ");
                            g.className = f.trim(h)
                        } else
                            g.className = ""
                }
            }
            return this
        },
        toggleClass: function (a, b) {
            var c = typeof a
                , d = typeof b == "boolean";
            if (f.isFunction(a))
                return this.each(function (c) {
                    f(this).toggleClass(a.call(this, c, this.className, b), b)
                });
            return this.each(function () {
                if (c === "string") {
                    var e, g = 0, h = f(this), i = b, j = a.split(o);
                    while (e = j[g++])
                        i = d ? i : !h.hasClass(e),
                            h[i ? "addClass" : "removeClass"](e)
                } else if (c === "undefined" || c === "boolean")
                    this.className && f._data(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : f._data(this, "__className__") || ""
            })
        },
        hasClass: function (a) {
            var b = " " + a + " ";
            for (var c = 0, d = this.length; c < d; c++)
                if ((" " + this[c].className + " ").replace(n, " ").indexOf(b) > -1)
                    return !0;
            return !1
        },
        val: function (a) {
            var c, d, e = this[0];
            if (!arguments.length) {
                if (e) {
                    c = f.valHooks[e.nodeName.toLowerCase()] || f.valHooks[e.type];
                    if (c && "get" in c && (d = c.get(e, "value")) !== b)
                        return d;
                    d = e.value;
                    return typeof d == "string" ? d.replace(p, "") : d == null ? "" : d
                }
                return b
            }
            var g = f.isFunction(a);
            return this.each(function (d) {
                var e = f(this), h;
                if (this.nodeType === 1) {
                    g ? h = a.call(this, d, e.val()) : h = a,
                        h == null ? h = "" : typeof h == "number" ? h += "" : f.isArray(h) && (h = f.map(h, function (a) {
                            return a == null ? "" : a + ""
                        })),
                        c = f.valHooks[this.nodeName.toLowerCase()] || f.valHooks[this.type];
                    if (!c || !("set" in c) || c.set(this, h, "value") === b)
                        this.value = h
                }
            })
        }
    }),
        f.extend({
            valHooks: {
                option: {
                    get: function (a) {
                        var b = a.attributes.value;
                        return !b || b.specified ? a.value : a.text
                    }
                },
                select: {
                    get: function (a) {
                        var b, c = a.selectedIndex, d = [], e = a.options, g = a.type === "select-one";
                        if (c < 0)
                            return null;
                        for (var h = g ? c : 0, i = g ? c + 1 : e.length; h < i; h++) {
                            var j = e[h];
                            if (j.selected && (f.support.optDisabled ? !j.disabled : j.getAttribute("disabled") === null) && (!j.parentNode.disabled || !f.nodeName(j.parentNode, "optgroup"))) {
                                b = f(j).val();
                                if (g)
                                    return b;
                                d.push(b)
                            }
                        }
                        if (g && !d.length && e.length)
                            return f(e[c]).val();
                        return d
                    },
                    set: function (a, b) {
                        var c = f.makeArray(b);
                        f(a).find("option").each(function () {
                            this.selected = f.inArray(f(this).val(), c) >= 0
                        }),
                            c.length || (a.selectedIndex = -1);
                        return c
                    }
                }
            },
            attrFn: {
                val: !0,
                css: !0,
                html: !0,
                text: !0,
                data: !0,
                width: !0,
                height: !0,
                offset: !0
            },
            attrFix: {
                tabindex: "tabIndex"
            },
            attr: function (a, c, d, e) {
                var g = a.nodeType;
                if (!a || g === 3 || g === 8 || g === 2)
                    return b;
                if (e && c in f.attrFn)
                    return f(a)[c](d);
                if (!("getAttribute" in a))
                    return f.prop(a, c, d);
                var h, i, j = g !== 1 || !f.isXMLDoc(a);
                j && (c = f.attrFix[c] || c,
                    i = f.attrHooks[c],
                    i || (t.test(c) ? i = w : v && c !== "className" && (f.nodeName(a, "form") || u.test(c)) && (i = v)));
                if (d !== b) {
                    if (d === null) {
                        f.removeAttr(a, c);
                        return b
                    }
                    if (i && "set" in i && j && (h = i.set(a, d, c)) !== b)
                        return h;
                    a.setAttribute(c, "" + d);
                    return d
                }
                if (i && "get" in i && j && (h = i.get(a, c)) !== null)
                    return h;
                h = a.getAttribute(c);
                return h === null ? b : h
            },
            removeAttr: function (a, b) {
                var c;
                a.nodeType === 1 && (b = f.attrFix[b] || b,
                    f.support.getSetAttribute ? a.removeAttribute(b) : (f.attr(a, b, ""),
                        a.removeAttributeNode(a.getAttributeNode(b))),
                    t.test(b) && (c = f.propFix[b] || b) in a && (a[c] = !1))
            },
            attrHooks: {
                type: {
                    set: function (a, b) {
                        if (q.test(a.nodeName) && a.parentNode)
                            f.error("type property can't be changed");
                        else if (!f.support.radioValue && b === "radio" && f.nodeName(a, "input")) {
                            var c = a.value;
                            a.setAttribute("type", b),
                                c && (a.value = c);
                            return b
                        }
                    }
                },
                tabIndex: {
                    get: function (a) {
                        var c = a.getAttributeNode("tabIndex");
                        return c && c.specified ? parseInt(c.value, 10) : r.test(a.nodeName) || s.test(a.nodeName) && a.href ? 0 : b
                    }
                },
                value: {
                    get: function (a, b) {
                        if (v && f.nodeName(a, "button"))
                            return v.get(a, b);
                        return b in a ? a.value : null
                    },
                    set: function (a, b, c) {
                        if (v && f.nodeName(a, "button"))
                            return v.set(a, b, c);
                        a.value = b
                    }
                }
            },
            propFix: {
                tabindex: "tabIndex",
                readonly: "readOnly",
                "for": "htmlFor",
                "class": "className",
                maxlength: "maxLength",
                cellspacing: "cellSpacing",
                cellpadding: "cellPadding",
                rowspan: "rowSpan",
                colspan: "colSpan",
                usemap: "useMap",
                frameborder: "frameBorder",
                contenteditable: "contentEditable"
            },
            prop: function (a, c, d) {
                var e = a.nodeType;
                if (!a || e === 3 || e === 8 || e === 2)
                    return b;
                var g, h, i = e !== 1 || !f.isXMLDoc(a);
                i && (c = f.propFix[c] || c,
                    h = f.propHooks[c]);
                return d !== b ? h && "set" in h && (g = h.set(a, d, c)) !== b ? g : a[c] = d : h && "get" in h && (g = h.get(a, c)) !== b ? g : a[c]
            },
            propHooks: {}
        }),
        w = {
            get: function (a, c) {
                return f.prop(a, c) ? c.toLowerCase() : b
            },
            set: function (a, b, c) {
                var d;
                b === !1 ? f.removeAttr(a, c) : (d = f.propFix[c] || c,
                    d in a && (a[d] = !0),
                    a.setAttribute(c, c.toLowerCase()));
                return c
            }
        },
        f.support.getSetAttribute || (f.attrFix = f.propFix,
            v = f.attrHooks.name = f.attrHooks.title = f.valHooks.button = {
                get: function (a, c) {
                    var d;
                    d = a.getAttributeNode(c);
                    return d && d.nodeValue !== "" ? d.nodeValue : b
                },
                set: function (a, b, c) {
                    var d = a.getAttributeNode(c);
                    if (d) {
                        d.nodeValue = b;
                        return b
                    }
                }
            },
            f.each(["width", "height"], function (a, b) {
                f.attrHooks[b] = f.extend(f.attrHooks[b], {
                    set: function (a, c) {
                        if (c === "") {
                            a.setAttribute(b, "auto");
                            return c
                        }
                    }
                })
            })),
        f.support.hrefNormalized || f.each(["href", "src", "width", "height"], function (a, c) {
            f.attrHooks[c] = f.extend(f.attrHooks[c], {
                get: function (a) {
                    var d = a.getAttribute(c, 2);
                    return d === null ? b : d
                }
            })
        }),
        f.support.style || (f.attrHooks.style = {
            get: function (a) {
                return a.style.cssText.toLowerCase() || b
            },
            set: function (a, b) {
                return a.style.cssText = "" + b
            }
        }),
        f.support.optSelected || (f.propHooks.selected = f.extend(f.propHooks.selected, {
            get: function (a) {
                var b = a.parentNode;
                b && (b.selectedIndex,
                    b.parentNode && b.parentNode.selectedIndex)
            }
        })),
        f.support.checkOn || f.each(["radio", "checkbox"], function () {
            f.valHooks[this] = {
                get: function (a) {
                    return a.getAttribute("value") === null ? "on" : a.value
                }
            }
        }),
        f.each(["radio", "checkbox"], function () {
            f.valHooks[this] = f.extend(f.valHooks[this], {
                set: function (a, b) {
                    if (f.isArray(b))
                        return a.checked = f.inArray(f(a).val(), b) >= 0
                }
            })
        });
    var x = /\.(.*)$/
        , y = /^(?:textarea|input|select)$/i
        , z = /\./g
        , A = / /g
        , B = /[^\w\s.|`]/g
        , C = function (a) {
            return a.replace(B, "\\$&")
        };
    f.event = {
        add: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                if (d === !1)
                    d = D;
                else if (!d)
                    return;
                var g, h;
                d.handler && (g = d,
                    d = g.handler),
                    d.guid || (d.guid = f.guid++);
                var i = f._data(a);
                if (!i)
                    return;
                var j = i.events
                    , k = i.handle;
                j || (i.events = j = {}),
                    k || (i.handle = k = function (a) {
                        return typeof f != "undefined" && (!a || f.event.triggered !== a.type) ? f.event.handle.apply(k.elem, arguments) : b
                    }
                    ),
                    k.elem = a,
                    c = c.split(" ");
                var l, m = 0, n;
                while (l = c[m++]) {
                    h = g ? f.extend({}, g) : {
                        handler: d,
                        data: e
                    },
                        l.indexOf(".") > -1 ? (n = l.split("."),
                            l = n.shift(),
                            h.namespace = n.slice(0).sort().join(".")) : (n = [],
                                h.namespace = ""),
                        h.type = l,
                        h.guid || (h.guid = d.guid);
                    var o = j[l]
                        , p = f.event.special[l] || {};
                    if (!o) {
                        o = j[l] = [];
                        if (!p.setup || p.setup.call(a, e, n, k) === !1)
                            a.addEventListener ? a.addEventListener(l, k, !1) : a.attachEvent && a.attachEvent("on" + l, k)
                    }
                    p.add && (p.add.call(a, h),
                        h.handler.guid || (h.handler.guid = d.guid)),
                        o.push(h),
                        f.event.global[l] = !0
                }
                a = null
            }
        },
        global: {},
        remove: function (a, c, d, e) {
            if (a.nodeType !== 3 && a.nodeType !== 8) {
                d === !1 && (d = D);
                var g, h, i, j, k = 0, l, m, n, o, p, q, r, s = f.hasData(a) && f._data(a), t = s && s.events;
                if (!s || !t)
                    return;
                c && c.type && (d = c.handler,
                    c = c.type);
                if (!c || typeof c == "string" && c.charAt(0) === ".") {
                    c = c || "";
                    for (h in t)
                        f.event.remove(a, h + c);
                    return
                }
                c = c.split(" ");
                while (h = c[k++]) {
                    r = h,
                        q = null,
                        l = h.indexOf(".") < 0,
                        m = [],
                        l || (m = h.split("."),
                            h = m.shift(),
                            n = new RegExp("(^|\\.)" + f.map(m.slice(0).sort(), C).join("\\.(?:.*\\.)?") + "(\\.|$)")),
                        p = t[h];
                    if (!p)
                        continue;
                    if (!d) {
                        for (j = 0; j < p.length; j++) {
                            q = p[j];
                            if (l || n.test(q.namespace))
                                f.event.remove(a, r, q.handler, j),
                                    p.splice(j--, 1)
                        }
                        continue
                    }
                    o = f.event.special[h] || {};
                    for (j = e || 0; j < p.length; j++) {
                        q = p[j];
                        if (d.guid === q.guid) {
                            if (l || n.test(q.namespace))
                                e == null && p.splice(j--, 1),
                                    o.remove && o.remove.call(a, q);
                            if (e != null)
                                break
                        }
                    }
                    if (p.length === 0 || e != null && p.length === 1)
                        (!o.teardown || o.teardown.call(a, m) === !1) && f.removeEvent(a, h, s.handle),
                            g = null,
                            delete t[h]
                }
                if (f.isEmptyObject(t)) {
                    var u = s.handle;
                    u && (u.elem = null),
                        delete s.events,
                        delete s.handle,
                        f.isEmptyObject(s) && f.removeData(a, b, !0)
                }
            }
        },
        customEvent: {
            getData: !0,
            setData: !0,
            changeData: !0
        },
        trigger: function (c, d, e, g) {
            var h = c.type || c, i = [], j;
            h.indexOf("!") >= 0 && (h = h.slice(0, -1),
                j = !0),
                h.indexOf(".") >= 0 && (i = h.split("."),
                    h = i.shift(),
                    i.sort());
            if (!!e && !f.event.customEvent[h] || !!f.event.global[h]) {
                c = typeof c == "object" ? c[f.expando] ? c : new f.Event(h, c) : new f.Event(h),
                    c.type = h,
                    c.exclusive = j,
                    c.namespace = i.join("."),
                    c.namespace_re = new RegExp("(^|\\.)" + i.join("\\.(?:.*\\.)?") + "(\\.|$)");
                if (g || !e)
                    c.preventDefault(),
                        c.stopPropagation();
                if (!e) {
                    f.each(f.cache, function () {
                        var a = f.expando
                            , b = this[a];
                        b && b.events && b.events[h] && f.event.trigger(c, d, b.handle.elem)
                    });
                    return
                }
                if (e.nodeType === 3 || e.nodeType === 8)
                    return;
                c.result = b,
                    c.target = e,
                    d = d != null ? f.makeArray(d) : [],
                    d.unshift(c);
                var k = e
                    , l = h.indexOf(":") < 0 ? "on" + h : "";
                do {
                    var m = f._data(k, "handle");
                    c.currentTarget = k,
                        m && m.apply(k, d),
                        l && f.acceptData(k) && k[l] && k[l].apply(k, d) === !1 && (c.result = !1,
                            c.preventDefault()),
                        k = k.parentNode || k.ownerDocument || k === c.target.ownerDocument && a
                } while (k && !c.isPropagationStopped());
                if (!c.isDefaultPrevented()) {
                    var n, o = f.event.special[h] || {};
                    if ((!o._default || o._default.call(e.ownerDocument, c) === !1) && (h !== "click" || !f.nodeName(e, "a")) && f.acceptData(e)) {
                        try {
                            l && e[h] && (n = e[l],
                                n && (e[l] = null),
                                f.event.triggered = h,
                                e[h]())
                        } catch (p) { }
                        n && (e[l] = n),
                            f.event.triggered = b
                    }
                }
                return c.result
            }
        },
        handle: function (c) {
            c = f.event.fix(c || a.event);
            var d = ((f._data(this, "events") || {})[c.type] || []).slice(0)
                , e = !c.exclusive && !c.namespace
                , g = Array.prototype.slice.call(arguments, 0);
            g[0] = c,
                c.currentTarget = this;
            for (var h = 0, i = d.length; h < i; h++) {
                var j = d[h];
                if (e || c.namespace_re.test(j.namespace)) {
                    c.handler = j.handler,
                        c.data = j.data,
                        c.handleObj = j;
                    var k = j.handler.apply(this, g);
                    k !== b && (c.result = k,
                        k === !1 && (c.preventDefault(),
                            c.stopPropagation()));
                    if (c.isImmediatePropagationStopped())
                        break
                }
            }
            return c.result
        },
        props: "altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode layerX layerY metaKey newValue offsetX offsetY pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),
        fix: function (a) {
            if (a[f.expando])
                return a;
            var d = a;
            a = f.Event(d);
            for (var e = this.props.length, g; e;)
                g = this.props[--e],
                    a[g] = d[g];
            a.target || (a.target = a.srcElement || c),
                a.target.nodeType === 3 && (a.target = a.target.parentNode),
                !a.relatedTarget && a.fromElement && (a.relatedTarget = a.fromElement === a.target ? a.toElement : a.fromElement);
            if (a.pageX == null && a.clientX != null) {
                var h = a.target.ownerDocument || c
                    , i = h.documentElement
                    , j = h.body;
                a.pageX = a.clientX + (i && i.scrollLeft || j && j.scrollLeft || 0) - (i && i.clientLeft || j && j.clientLeft || 0),
                    a.pageY = a.clientY + (i && i.scrollTop || j && j.scrollTop || 0) - (i && i.clientTop || j && j.clientTop || 0)
            }
            a.which == null && (a.charCode != null || a.keyCode != null) && (a.which = a.charCode != null ? a.charCode : a.keyCode),
                !a.metaKey && a.ctrlKey && (a.metaKey = a.ctrlKey),
                !a.which && a.button !== b && (a.which = a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0);
            return a
        },
        guid: 1e8,
        proxy: f.proxy,
        special: {
            ready: {
                setup: f.bindReady,
                teardown: f.noop
            },
            live: {
                add: function (a) {
                    f.event.add(this, N(a.origType, a.selector), f.extend({}, a, {
                        handler: M,
                        guid: a.handler.guid
                    }))
                },
                remove: function (a) {
                    f.event.remove(this, N(a.origType, a.selector), a)
                }
            },
            beforeunload: {
                setup: function (a, b, c) {
                    f.isWindow(this) && (this.onbeforeunload = c)
                },
                teardown: function (a, b) {
                    this.onbeforeunload === b && (this.onbeforeunload = null)
                }
            }
        }
    },
        f.removeEvent = c.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
            : function (a, b, c) {
                a.detachEvent && a.detachEvent("on" + b, c)
            }
        ,
        f.Event = function (a, b) {
            if (!this.preventDefault)
                return new f.Event(a, b);
            a && a.type ? (this.originalEvent = a,
                this.type = a.type,
                this.isDefaultPrevented = a.defaultPrevented || a.returnValue === !1 || a.getPreventDefault && a.getPreventDefault() ? E : D) : this.type = a,
                b && f.extend(this, b),
                this.timeStamp = f.now(),
                this[f.expando] = !0
        }
        ,
        f.Event.prototype = {
            preventDefault: function () {
                this.isDefaultPrevented = E;
                var a = this.originalEvent;
                !a || (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
            },
            stopPropagation: function () {
                this.isPropagationStopped = E;
                var a = this.originalEvent;
                !a || (a.stopPropagation && a.stopPropagation(),
                    a.cancelBubble = !0)
            },
            stopImmediatePropagation: function () {
                this.isImmediatePropagationStopped = E,
                    this.stopPropagation()
            },
            isDefaultPrevented: D,
            isPropagationStopped: D,
            isImmediatePropagationStopped: D
        };
    var F = function (a) {
        var b = a.relatedTarget
            , c = !1
            , d = a.type;
        a.type = a.data,
            b !== this && (b && (c = f.contains(this, b)),
                c || (f.event.handle.apply(this, arguments),
                    a.type = d))
    }
        , G = function (a) {
            a.type = a.data,
                f.event.handle.apply(this, arguments)
        };
    f.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    }, function (a, b) {
        f.event.special[a] = {
            setup: function (c) {
                f.event.add(this, b, c && c.selector ? G : F, a)
            },
            teardown: function (a) {
                f.event.remove(this, b, a && a.selector ? G : F)
            }
        }
    }),
        f.support.submitBubbles || (f.event.special.submit = {
            setup: function (a, b) {
                if (!f.nodeName(this, "form"))
                    f.event.add(this, "click.specialSubmit", function (a) {
                        var b = a.target
                            , c = b.type;
                        (c === "submit" || c === "image") && f(b).closest("form").length && K("submit", this, arguments)
                    }),
                        f.event.add(this, "keypress.specialSubmit", function (a) {
                            var b = a.target
                                , c = b.type;
                            (c === "text" || c === "password") && f(b).closest("form").length && a.keyCode === 13 && K("submit", this, arguments)
                        });
                else
                    return !1
            },
            teardown: function (a) {
                f.event.remove(this, ".specialSubmit")
            }
        });
    if (!f.support.changeBubbles) {
        var H, I = function (a) {
            var b = a.type
                , c = a.value;
            b === "radio" || b === "checkbox" ? c = a.checked : b === "select-multiple" ? c = a.selectedIndex > -1 ? f.map(a.options, function (a) {
                return a.selected
            }).join("-") : "" : f.nodeName(a, "select") && (c = a.selectedIndex);
            return c
        }, J = function (c) {
            var d = c.target, e, g;
            if (!!y.test(d.nodeName) && !d.readOnly) {
                e = f._data(d, "_change_data"),
                    g = I(d),
                    (c.type !== "focusout" || d.type !== "radio") && f._data(d, "_change_data", g);
                if (e === b || g === e)
                    return;
                if (e != null || g)
                    c.type = "change",
                        c.liveFired = b,
                        f.event.trigger(c, arguments[1], d)
            }
        };
        f.event.special.change = {
            filters: {
                focusout: J,
                beforedeactivate: J,
                click: function (a) {
                    var b = a.target
                        , c = f.nodeName(b, "input") ? b.type : "";
                    (c === "radio" || c === "checkbox" || f.nodeName(b, "select")) && J.call(this, a)
                },
                keydown: function (a) {
                    var b = a.target
                        , c = f.nodeName(b, "input") ? b.type : "";
                    (a.keyCode === 13 && !f.nodeName(b, "textarea") || a.keyCode === 32 && (c === "checkbox" || c === "radio") || c === "select-multiple") && J.call(this, a)
                },
                beforeactivate: function (a) {
                    var b = a.target;
                    f._data(b, "_change_data", I(b))
                }
            },
            setup: function (a, b) {
                if (this.type === "file")
                    return !1;
                for (var c in H)
                    f.event.add(this, c + ".specialChange", H[c]);
                return y.test(this.nodeName)
            },
            teardown: function (a) {
                f.event.remove(this, ".specialChange");
                return y.test(this.nodeName)
            }
        },
            H = f.event.special.change.filters,
            H.focus = H.beforeactivate
    }
    f.support.focusinBubbles || f.each({
        focus: "focusin",
        blur: "focusout"
    }, function (a, b) {
        function e(a) {
            var c = f.event.fix(a);
            c.type = b,
                c.originalEvent = {},
                f.event.trigger(c, null, c.target),
                c.isDefaultPrevented() && a.preventDefault()
        }
        var d = 0;
        f.event.special[b] = {
            setup: function () {
                d++ === 0 && c.addEventListener(a, e, !0)
            },
            teardown: function () {
                --d === 0 && c.removeEventListener(a, e, !0)
            }
        }
    }),
        f.each(["bind", "one"], function (a, c) {
            f.fn[c] = function (a, d, e) {
                var g;
                if (typeof a == "object") {
                    for (var h in a)
                        this[c](h, d, a[h], e);
                    return this
                }
                if (arguments.length === 2 || d === !1)
                    e = d,
                        d = b;
                c === "one" ? (g = function (a) {
                    f(this).unbind(a, g);
                    return e.apply(this, arguments)
                }
                    ,
                    g.guid = e.guid || f.guid++) : g = e;
                if (a === "unload" && c !== "one")
                    this.one(a, d, e);
                else
                    for (var i = 0, j = this.length; i < j; i++)
                        f.event.add(this[i], a, g, d);
                return this
            }
        }),
        f.fn.extend({
            unbind: function (a, b) {
                if (typeof a == "object" && !a.preventDefault)
                    for (var c in a)
                        this.unbind(c, a[c]);
                else
                    for (var d = 0, e = this.length; d < e; d++)
                        f.event.remove(this[d], a, b);
                return this
            },
            delegate: function (a, b, c, d) {
                return this.live(b, c, d, a)
            },
            undelegate: function (a, b, c) {
                return arguments.length === 0 ? this.unbind("live") : this.die(b, null, c, a)
            },
            trigger: function (a, b) {
                return this.each(function () {
                    f.event.trigger(a, b, this)
                })
            },
            triggerHandler: function (a, b) {
                if (this[0])
                    return f.event.trigger(a, b, this[0], !0)
            },
            toggle: function (a) {
                var b = arguments
                    , c = a.guid || f.guid++
                    , d = 0
                    , e = function (c) {
                        var e = (f.data(this, "lastToggle" + a.guid) || 0) % d;
                        f.data(this, "lastToggle" + a.guid, e + 1),
                            c.preventDefault();
                        return b[e].apply(this, arguments) || !1
                    };
                e.guid = c;
                while (d < b.length)
                    b[d++].guid = c;
                return this.click(e)
            },
            hover: function (a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            }
        });
    var L = {
        focus: "focusin",
        blur: "focusout",
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    };
    f.each(["live", "die"], function (a, c) {
        f.fn[c] = function (a, d, e, g) {
            var h, i = 0, j, k, l, m = g || this.selector, n = g ? this : f(this.context);
            if (typeof a == "object" && !a.preventDefault) {
                for (var o in a)
                    n[c](o, d, a[o], m);
                return this
            }
            if (c === "die" && !a && g && g.charAt(0) === ".") {
                n.unbind(g);
                return this
            }
            if (d === !1 || f.isFunction(d))
                e = d || D,
                    d = b;
            a = (a || "").split(" ");
            while ((h = a[i++]) != null) {
                j = x.exec(h),
                    k = "",
                    j && (k = j[0],
                        h = h.replace(x, ""));
                if (h === "hover") {
                    a.push("mouseenter" + k, "mouseleave" + k);
                    continue
                }
                l = h,
                    L[h] ? (a.push(L[h] + k),
                        h = h + k) : h = (L[h] || h) + k;
                if (c === "live")
                    for (var p = 0, q = n.length; p < q; p++)
                        f.event.add(n[p], "live." + N(h, m), {
                            data: d,
                            selector: m,
                            handler: e,
                            origType: h,
                            origHandler: e,
                            preType: l
                        });
                else
                    n.unbind("live." + N(h, m), e)
            }
            return this
        }
    }),
        f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error".split(" "), function (a, b) {
            f.fn[b] = function (a, c) {
                c == null && (c = a,
                    a = null);
                return arguments.length > 0 ? this.bind(b, a, c) : this.trigger(b)
            }
                ,
                f.attrFn && (f.attrFn[b] = !0)
        }),
        function () {
            function u(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        i = i[a];
                        while (i) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            if (i.nodeType === 1) {
                                f || (i.sizcache = c,
                                    i.sizset = g);
                                if (typeof b != "string") {
                                    if (i === b) {
                                        j = !0;
                                        break
                                    }
                                } else if (k.filter(b, [i]).length > 0) {
                                    j = i;
                                    break
                                }
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }
            function t(a, b, c, d, e, f) {
                for (var g = 0, h = d.length; g < h; g++) {
                    var i = d[g];
                    if (i) {
                        var j = !1;
                        i = i[a];
                        while (i) {
                            if (i.sizcache === c) {
                                j = d[i.sizset];
                                break
                            }
                            i.nodeType === 1 && !f && (i.sizcache = c,
                                i.sizset = g);
                            if (i.nodeName.toLowerCase() === b) {
                                j = i;
                                break
                            }
                            i = i[a]
                        }
                        d[g] = j
                    }
                }
            }
            var a = /((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g
                , d = 0
                , e = Object.prototype.toString
                , g = !1
                , h = !0
                , i = /\\/g
                , j = /\W/;
            [0, 0].sort(function () {
                h = !1;
                return 0
            });
            var k = function (b, d, f, g) {
                f = f || [],
                    d = d || c;
                var h = d;
                if (d.nodeType !== 1 && d.nodeType !== 9)
                    return [];
                if (!b || typeof b != "string")
                    return f;
                var i, j, n, o, q, r, s, t, u = !0, w = k.isXML(d), x = [], y = b;
                do {
                    a.exec(""),
                        i = a.exec(y);
                    if (i) {
                        y = i[3],
                            x.push(i[1]);
                        if (i[2]) {
                            o = i[3];
                            break
                        }
                    }
                } while (i);
                if (x.length > 1 && m.exec(b))
                    if (x.length === 2 && l.relative[x[0]])
                        j = v(x[0] + x[1], d);
                    else {
                        j = l.relative[x[0]] ? [d] : k(x.shift(), d);
                        while (x.length)
                            b = x.shift(),
                                l.relative[b] && (b += x.shift()),
                                j = v(b, j)
                    }
                else {
                    !g && x.length > 1 && d.nodeType === 9 && !w && l.match.ID.test(x[0]) && !l.match.ID.test(x[x.length - 1]) && (q = k.find(x.shift(), d, w),
                        d = q.expr ? k.filter(q.expr, q.set)[0] : q.set[0]);
                    if (d) {
                        q = g ? {
                            expr: x.pop(),
                            set: p(g)
                        } : k.find(x.pop(), x.length === 1 && (x[0] === "~" || x[0] === "+") && d.parentNode ? d.parentNode : d, w),
                            j = q.expr ? k.filter(q.expr, q.set) : q.set,
                            x.length > 0 ? n = p(j) : u = !1;
                        while (x.length)
                            r = x.pop(),
                                s = r,
                                l.relative[r] ? s = x.pop() : r = "",
                                s == null && (s = d),
                                l.relative[r](n, s, w)
                    } else
                        n = x = []
                }
                n || (n = j),
                    n || k.error(r || b);
                if (e.call(n) === "[object Array]")
                    if (!u)
                        f.push.apply(f, n);
                    else if (d && d.nodeType === 1)
                        for (t = 0; n[t] != null; t++)
                            n[t] && (n[t] === !0 || n[t].nodeType === 1 && k.contains(d, n[t])) && f.push(j[t]);
                    else
                        for (t = 0; n[t] != null; t++)
                            n[t] && n[t].nodeType === 1 && f.push(j[t]);
                else
                    p(n, f);
                o && (k(o, h, f, g),
                    k.uniqueSort(f));
                return f
            };
            k.uniqueSort = function (a) {
                if (r) {
                    g = h,
                        a.sort(r);
                    if (g)
                        for (var b = 1; b < a.length; b++)
                            a[b] === a[b - 1] && a.splice(b--, 1)
                }
                return a
            }
                ,
                k.matches = function (a, b) {
                    return k(a, null, null, b)
                }
                ,
                k.matchesSelector = function (a, b) {
                    return k(b, null, null, [a]).length > 0
                }
                ,
                k.find = function (a, b, c) {
                    var d;
                    if (!a)
                        return [];
                    for (var e = 0, f = l.order.length; e < f; e++) {
                        var g, h = l.order[e];
                        if (g = l.leftMatch[h].exec(a)) {
                            var j = g[1];
                            g.splice(1, 1);
                            if (j.substr(j.length - 1) !== "\\") {
                                g[1] = (g[1] || "").replace(i, ""),
                                    d = l.find[h](g, b, c);
                                if (d != null) {
                                    a = a.replace(l.match[h], "");
                                    break
                                }
                            }
                        }
                    }
                    d || (d = typeof b.getElementsByTagName != "undefined" ? b.getElementsByTagName("*") : []);
                    return {
                        set: d,
                        expr: a
                    }
                }
                ,
                k.filter = function (a, c, d, e) {
                    var f, g, h = a, i = [], j = c, m = c && c[0] && k.isXML(c[0]);
                    while (a && c.length) {
                        for (var n in l.filter)
                            if ((f = l.leftMatch[n].exec(a)) != null && f[2]) {
                                var o, p, q = l.filter[n], r = f[1];
                                g = !1,
                                    f.splice(1, 1);
                                if (r.substr(r.length - 1) === "\\")
                                    continue;
                                j === i && (i = []);
                                if (l.preFilter[n]) {
                                    f = l.preFilter[n](f, j, d, i, e, m);
                                    if (!f)
                                        g = o = !0;
                                    else if (f === !0)
                                        continue
                                }
                                if (f)
                                    for (var s = 0; (p = j[s]) != null; s++)
                                        if (p) {
                                            o = q(p, f, s, j);
                                            var t = e ^ !!o;
                                            d && o != null ? t ? g = !0 : j[s] = !1 : t && (i.push(p),
                                                g = !0)
                                        }
                                if (o !== b) {
                                    d || (j = i),
                                        a = a.replace(l.match[n], "");
                                    if (!g)
                                        return [];
                                    break
                                }
                            }
                        if (a === h)
                            if (g == null)
                                k.error(a);
                            else
                                break;
                        h = a
                    }
                    return j
                }
                ,
                k.error = function (a) {
                    throw "Syntax error, unrecognized expression: " + a
                }
                ;
            var l = k.selectors = {
                order: ["ID", "NAME", "TAG"],
                match: {
                    ID: /#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    CLASS: /\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,
                    NAME: /\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,
                    ATTR: /\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,
                    TAG: /^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,
                    CHILD: /:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,
                    POS: /:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,
                    PSEUDO: /:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/
                },
                leftMatch: {},
                attrMap: {
                    "class": "className",
                    "for": "htmlFor"
                },
                attrHandle: {
                    href: function (a) {
                        return a.getAttribute("href")
                    },
                    type: function (a) {
                        return a.getAttribute("type")
                    }
                },
                relative: {
                    "+": function (a, b) {
                        var c = typeof b == "string"
                            , d = c && !j.test(b)
                            , e = c && !d;
                        d && (b = b.toLowerCase());
                        for (var f = 0, g = a.length, h; f < g; f++)
                            if (h = a[f]) {
                                while ((h = h.previousSibling) && h.nodeType !== 1)
                                    ;
                                a[f] = e || h && h.nodeName.toLowerCase() === b ? h || !1 : h === b
                            }
                        e && k.filter(b, a, !0)
                    },
                    ">": function (a, b) {
                        var c, d = typeof b == "string", e = 0, f = a.length;
                        if (d && !j.test(b)) {
                            b = b.toLowerCase();
                            for (; e < f; e++) {
                                c = a[e];
                                if (c) {
                                    var g = c.parentNode;
                                    a[e] = g.nodeName.toLowerCase() === b ? g : !1
                                }
                            }
                        } else {
                            for (; e < f; e++)
                                c = a[e],
                                    c && (a[e] = d ? c.parentNode : c.parentNode === b);
                            d && k.filter(b, a, !0)
                        }
                    },
                    "": function (a, b, c) {
                        var e, f = d++, g = u;
                        typeof b == "string" && !j.test(b) && (b = b.toLowerCase(),
                            e = b,
                            g = t),
                            g("parentNode", b, f, a, e, c)
                    },
                    "~": function (a, b, c) {
                        var e, f = d++, g = u;
                        typeof b == "string" && !j.test(b) && (b = b.toLowerCase(),
                            e = b,
                            g = t),
                            g("previousSibling", b, f, a, e, c)
                    }
                },
                find: {
                    ID: function (a, b, c) {
                        if (typeof b.getElementById != "undefined" && !c) {
                            var d = b.getElementById(a[1]);
                            return d && d.parentNode ? [d] : []
                        }
                    },
                    NAME: function (a, b) {
                        if (typeof b.getElementsByName != "undefined") {
                            var c = []
                                , d = b.getElementsByName(a[1]);
                            for (var e = 0, f = d.length; e < f; e++)
                                d[e].getAttribute("name") === a[1] && c.push(d[e]);
                            return c.length === 0 ? null : c
                        }
                    },
                    TAG: function (a, b) {
                        if (typeof b.getElementsByTagName != "undefined")
                            return b.getElementsByTagName(a[1])
                    }
                },
                preFilter: {
                    CLASS: function (a, b, c, d, e, f) {
                        a = " " + a[1].replace(i, "") + " ";
                        if (f)
                            return a;
                        for (var g = 0, h; (h = b[g]) != null; g++)
                            h && (e ^ (h.className && (" " + h.className + " ").replace(/[\t\n\r]/g, " ").indexOf(a) >= 0) ? c || d.push(h) : c && (b[g] = !1));
                        return !1
                    },
                    ID: function (a) {
                        return a[1].replace(i, "")
                    },
                    TAG: function (a, b) {
                        return a[1].replace(i, "").toLowerCase()
                    },
                    CHILD: function (a) {
                        if (a[1] === "nth") {
                            a[2] || k.error(a[0]),
                                a[2] = a[2].replace(/^\+|\s*/g, "");
                            var b = /(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2] === "even" && "2n" || a[2] === "odd" && "2n+1" || !/\D/.test(a[2]) && "0n+" + a[2] || a[2]);
                            a[2] = b[1] + (b[2] || 1) - 0,
                                a[3] = b[3] - 0
                        } else
                            a[2] && k.error(a[0]);
                        a[0] = d++;
                        return a
                    },
                    ATTR: function (a, b, c, d, e, f) {
                        var g = a[1] = a[1].replace(i, "");
                        !f && l.attrMap[g] && (a[1] = l.attrMap[g]),
                            a[4] = (a[4] || a[5] || "").replace(i, ""),
                            a[2] === "~=" && (a[4] = " " + a[4] + " ");
                        return a
                    },
                    PSEUDO: function (b, c, d, e, f) {
                        if (b[1] === "not")
                            if ((a.exec(b[3]) || "").length > 1 || /^\w/.test(b[3]))
                                b[3] = k(b[3], null, null, c);
                            else {
                                var g = k.filter(b[3], c, d, !0 ^ f);
                                d || e.push.apply(e, g);
                                return !1
                            }
                        else if (l.match.POS.test(b[0]) || l.match.CHILD.test(b[0]))
                            return !0;
                        return b
                    },
                    POS: function (a) {
                        a.unshift(!0);
                        return a
                    }
                },
                filters: {
                    enabled: function (a) {
                        return a.disabled === !1 && a.type !== "hidden"
                    },
                    disabled: function (a) {
                        return a.disabled === !0
                    },
                    checked: function (a) {
                        return a.checked === !0
                    },
                    selected: function (a) {
                        a.parentNode && a.parentNode.selectedIndex;
                        return a.selected === !0
                    },
                    parent: function (a) {
                        return !!a.firstChild
                    },
                    empty: function (a) {
                        return !a.firstChild
                    },
                    has: function (a, b, c) {
                        return !!k(c[3], a).length
                    },
                    header: function (a) {
                        return /h\d/i.test(a.nodeName)
                    },
                    text: function (a) {
                        var b = a.getAttribute("type")
                            , c = a.type;
                        return a.nodeName.toLowerCase() === "input" && "text" === c && (b === c || b === null)
                    },
                    radio: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "radio" === a.type
                    },
                    checkbox: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "checkbox" === a.type
                    },
                    file: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "file" === a.type
                    },
                    password: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "password" === a.type
                    },
                    submit: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "submit" === a.type
                    },
                    image: function (a) {
                        return a.nodeName.toLowerCase() === "input" && "image" === a.type
                    },
                    reset: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return (b === "input" || b === "button") && "reset" === a.type
                    },
                    button: function (a) {
                        var b = a.nodeName.toLowerCase();
                        return b === "input" && "button" === a.type || b === "button"
                    },
                    input: function (a) {
                        return /input|select|textarea|button/i.test(a.nodeName)
                    },
                    focus: function (a) {
                        return a === a.ownerDocument.activeElement
                    }
                },
                setFilters: {
                    first: function (a, b) {
                        return b === 0
                    },
                    last: function (a, b, c, d) {
                        return b === d.length - 1
                    },
                    even: function (a, b) {
                        return b % 2 === 0
                    },
                    odd: function (a, b) {
                        return b % 2 === 1
                    },
                    lt: function (a, b, c) {
                        return b < c[3] - 0
                    },
                    gt: function (a, b, c) {
                        return b > c[3] - 0
                    },
                    nth: function (a, b, c) {
                        return c[3] - 0 === b
                    },
                    eq: function (a, b, c) {
                        return c[3] - 0 === b
                    }
                },
                filter: {
                    PSEUDO: function (a, b, c, d) {
                        var e = b[1]
                            , f = l.filters[e];
                        if (f)
                            return f(a, c, b, d);
                        if (e === "contains")
                            return (a.textContent || a.innerText || k.getText([a]) || "").indexOf(b[3]) >= 0;
                        if (e === "not") {
                            var g = b[3];
                            for (var h = 0, i = g.length; h < i; h++)
                                if (g[h] === a)
                                    return !1;
                            return !0
                        }
                        k.error(e)
                    },
                    CHILD: function (a, b) {
                        var c = b[1]
                            , d = a;
                        switch (c) {
                            case "only":
                            case "first":
                                while (d = d.previousSibling)
                                    if (d.nodeType === 1)
                                        return !1;
                                if (c === "first")
                                    return !0;
                                d = a;
                            case "last":
                                while (d = d.nextSibling)
                                    if (d.nodeType === 1)
                                        return !1;
                                return !0;
                            case "nth":
                                var e = b[2]
                                    , f = b[3];
                                if (e === 1 && f === 0)
                                    return !0;
                                var g = b[0]
                                    , h = a.parentNode;
                                if (h && (h.sizcache !== g || !a.nodeIndex)) {
                                    var i = 0;
                                    for (d = h.firstChild; d; d = d.nextSibling)
                                        d.nodeType === 1 && (d.nodeIndex = ++i);
                                    h.sizcache = g
                                }
                                var j = a.nodeIndex - f;
                                return e === 0 ? j === 0 : j % e === 0 && j / e >= 0
                        }
                    },
                    ID: function (a, b) {
                        return a.nodeType === 1 && a.getAttribute("id") === b
                    },
                    TAG: function (a, b) {
                        return b === "*" && a.nodeType === 1 || a.nodeName.toLowerCase() === b
                    },
                    CLASS: function (a, b) {
                        return (" " + (a.className || a.getAttribute("class")) + " ").indexOf(b) > -1
                    },
                    ATTR: function (a, b) {
                        var c = b[1]
                            , d = l.attrHandle[c] ? l.attrHandle[c](a) : a[c] != null ? a[c] : a.getAttribute(c)
                            , e = d + ""
                            , f = b[2]
                            , g = b[4];
                        return d == null ? f === "!=" : f === "=" ? e === g : f === "*=" ? e.indexOf(g) >= 0 : f === "~=" ? (" " + e + " ").indexOf(g) >= 0 : g ? f === "!=" ? e !== g : f === "^=" ? e.indexOf(g) === 0 : f === "$=" ? e.substr(e.length - g.length) === g : f === "|=" ? e === g || e.substr(0, g.length + 1) === g + "-" : !1 : e && d !== !1
                    },
                    POS: function (a, b, c, d) {
                        var e = b[2]
                            , f = l.setFilters[e];
                        if (f)
                            return f(a, c, b, d)
                    }
                }
            }
                , m = l.match.POS
                , n = function (a, b) {
                    return "\\" + (b - 0 + 1)
                };
            for (var o in l.match)
                l.match[o] = new RegExp(l.match[o].source + /(?![^\[]*\])(?![^\(]*\))/.source),
                    l.leftMatch[o] = new RegExp(/(^(?:.|\r|\n)*?)/.source + l.match[o].source.replace(/\\(\d+)/g, n));
            var p = function (a, b) {
                a = Array.prototype.slice.call(a, 0);
                if (b) {
                    b.push.apply(b, a);
                    return b
                }
                return a
            };
            try {
                Array.prototype.slice.call(c.documentElement.childNodes, 0)[0].nodeType
            } catch (q) {
                p = function (a, b) {
                    var c = 0
                        , d = b || [];
                    if (e.call(a) === "[object Array]")
                        Array.prototype.push.apply(d, a);
                    else if (typeof a.length == "number")
                        for (var f = a.length; c < f; c++)
                            d.push(a[c]);
                    else
                        for (; a[c]; c++)
                            d.push(a[c]);
                    return d
                }
            }
            var r, s;
            c.documentElement.compareDocumentPosition ? r = function (a, b) {
                if (a === b) {
                    g = !0;
                    return 0
                }
                if (!a.compareDocumentPosition || !b.compareDocumentPosition)
                    return a.compareDocumentPosition ? -1 : 1;
                return a.compareDocumentPosition(b) & 4 ? -1 : 1
            }
                : (r = function (a, b) {
                    if (a === b) {
                        g = !0;
                        return 0
                    }
                    if (a.sourceIndex && b.sourceIndex)
                        return a.sourceIndex - b.sourceIndex;
                    var c, d, e = [], f = [], h = a.parentNode, i = b.parentNode, j = h;
                    if (h === i)
                        return s(a, b);
                    if (!h)
                        return -1;
                    if (!i)
                        return 1;
                    while (j)
                        e.unshift(j),
                            j = j.parentNode;
                    j = i;
                    while (j)
                        f.unshift(j),
                            j = j.parentNode;
                    c = e.length,
                        d = f.length;
                    for (var k = 0; k < c && k < d; k++)
                        if (e[k] !== f[k])
                            return s(e[k], f[k]);
                    return k === c ? s(a, f[k], -1) : s(e[k], b, 1)
                }
                    ,
                    s = function (a, b, c) {
                        if (a === b)
                            return c;
                        var d = a.nextSibling;
                        while (d) {
                            if (d === b)
                                return -1;
                            d = d.nextSibling
                        }
                        return 1
                    }
                ),
                k.getText = function (a) {
                    var b = "", c;
                    for (var d = 0; a[d]; d++)
                        c = a[d],
                            c.nodeType === 3 || c.nodeType === 4 ? b += c.nodeValue : c.nodeType !== 8 && (b += k.getText(c.childNodes));
                    return b
                }
                ,
                function () {
                    var a = c.createElement("div")
                        , d = "script" + (new Date).getTime()
                        , e = c.documentElement;
                    a.innerHTML = "<a name='" + d + "'/>",
                        e.insertBefore(a, e.firstChild),
                        c.getElementById(d) && (l.find.ID = function (a, c, d) {
                            if (typeof c.getElementById != "undefined" && !d) {
                                var e = c.getElementById(a[1]);
                                return e ? e.id === a[1] || typeof e.getAttributeNode != "undefined" && e.getAttributeNode("id").nodeValue === a[1] ? [e] : b : []
                            }
                        }
                            ,
                            l.filter.ID = function (a, b) {
                                var c = typeof a.getAttributeNode != "undefined" && a.getAttributeNode("id");
                                return a.nodeType === 1 && c && c.nodeValue === b
                            }
                        ),
                        e.removeChild(a),
                        e = a = null
                }(),
                function () {
                    var a = c.createElement("div");
                    a.appendChild(c.createComment("")),
                        a.getElementsByTagName("*").length > 0 && (l.find.TAG = function (a, b) {
                            var c = b.getElementsByTagName(a[1]);
                            if (a[1] === "*") {
                                var d = [];
                                for (var e = 0; c[e]; e++)
                                    c[e].nodeType === 1 && d.push(c[e]);
                                c = d
                            }
                            return c
                        }
                        ),
                        a.innerHTML = "<a href='#'></a>",
                        a.firstChild && typeof a.firstChild.getAttribute != "undefined" && a.firstChild.getAttribute("href") !== "#" && (l.attrHandle.href = function (a) {
                            return a.getAttribute("href", 2)
                        }
                        ),
                        a = null
                }(),
                c.querySelectorAll && function () {
                    var a = k
                        , b = c.createElement("div")
                        , d = "__sizzle__";
                    b.innerHTML = "<p class='TEST'></p>";
                    if (!b.querySelectorAll || b.querySelectorAll(".TEST").length !== 0) {
                        k = function (b, e, f, g) {
                            e = e || c;
                            if (!g && !k.isXML(e)) {
                                var h = /^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);
                                if (h && (e.nodeType === 1 || e.nodeType === 9)) {
                                    if (h[1])
                                        return p(e.getElementsByTagName(b), f);
                                    if (h[2] && l.find.CLASS && e.getElementsByClassName)
                                        return p(e.getElementsByClassName(h[2]), f)
                                }
                                if (e.nodeType === 9) {
                                    if (b === "body" && e.body)
                                        return p([e.body], f);
                                    if (h && h[3]) {
                                        var i = e.getElementById(h[3]);
                                        if (!i || !i.parentNode)
                                            return p([], f);
                                        if (i.id === h[3])
                                            return p([i], f)
                                    }
                                    try {
                                        return p(e.querySelectorAll(b), f)
                                    } catch (j) { }
                                } else if (e.nodeType === 1 && e.nodeName.toLowerCase() !== "object") {
                                    var m = e
                                        , n = e.getAttribute("id")
                                        , o = n || d
                                        , q = e.parentNode
                                        , r = /^\s*[+~]/.test(b);
                                    n ? o = o.replace(/'/g, "\\$&") : e.setAttribute("id", o),
                                        r && q && (e = e.parentNode);
                                    try {
                                        if (!r || q)
                                            return p(e.querySelectorAll("[id='" + o + "'] " + b), f)
                                    } catch (s) { } finally {
                                        n || m.removeAttribute("id")
                                    }
                                }
                            }
                            return a(b, e, f, g)
                        }
                            ;
                        for (var e in a)
                            k[e] = a[e];
                        b = null
                    }
                }(),
                function () {
                    var a = c.documentElement
                        , b = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.msMatchesSelector;
                    if (b) {
                        var d = !b.call(c.createElement("div"), "div")
                            , e = !1;
                        try {
                            b.call(c.documentElement, "[test!='']:sizzle")
                        } catch (f) {
                            e = !0
                        }
                        k.matchesSelector = function (a, c) {
                            c = c.replace(/\=\s*([^'"\]]*)\s*\]/g, "='$1']");
                            if (!k.isXML(a))
                                try {
                                    if (e || !l.match.PSEUDO.test(c) && !/!=/.test(c)) {
                                        var f = b.call(a, c);
                                        if (f || !d || a.document && a.document.nodeType !== 11)
                                            return f
                                    }
                                } catch (g) { }
                            return k(c, null, null, [a]).length > 0
                        }
                    }
                }(),
                function () {
                    var a = c.createElement("div");
                    a.innerHTML = "<div class='test e'></div><div class='test'></div>";
                    if (!!a.getElementsByClassName && a.getElementsByClassName("e").length !== 0) {
                        a.lastChild.className = "e";
                        if (a.getElementsByClassName("e").length === 1)
                            return;
                        l.order.splice(1, 0, "CLASS"),
                            l.find.CLASS = function (a, b, c) {
                                if (typeof b.getElementsByClassName != "undefined" && !c)
                                    return b.getElementsByClassName(a[1])
                            }
                            ,
                            a = null
                    }
                }(),
                c.documentElement.contains ? k.contains = function (a, b) {
                    return a !== b && (a.contains ? a.contains(b) : !0)
                }
                    : c.documentElement.compareDocumentPosition ? k.contains = function (a, b) {
                        return !!(a.compareDocumentPosition(b) & 16)
                    }
                        : k.contains = function () {
                            return !1
                        }
                ,
                k.isXML = function (a) {
                    var b = (a ? a.ownerDocument || a : 0).documentElement;
                    return b ? b.nodeName !== "HTML" : !1
                }
                ;
            var v = function (a, b) {
                var c, d = [], e = "", f = b.nodeType ? [b] : b;
                while (c = l.match.PSEUDO.exec(a))
                    e += c[0],
                        a = a.replace(l.match.PSEUDO, "");
                a = l.relative[a] ? a + "*" : a;
                for (var g = 0, h = f.length; g < h; g++)
                    k(a, f[g], d);
                return k.filter(e, d)
            };
            f.find = k,
                f.expr = k.selectors,
                f.expr[":"] = f.expr.filters,
                f.unique = k.uniqueSort,
                f.text = k.getText,
                f.isXMLDoc = k.isXML,
                f.contains = k.contains
        }();
    var O = /Until$/
        , P = /^(?:parents|prevUntil|prevAll)/
        , Q = /,/
        , R = /^.[^:#\[\.,]*$/
        , S = Array.prototype.slice
        , T = f.expr.match.POS
        , U = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    f.fn.extend({
        find: function (a) {
            var b = this, c, d;
            if (typeof a != "string")
                return f(a).filter(function () {
                    for (c = 0,
                        d = b.length; c < d; c++)
                        if (f.contains(b[c], this))
                            return !0
                });
            var e = this.pushStack("", "find", a), g, h, i;
            for (c = 0,
                d = this.length; c < d; c++) {
                g = e.length,
                    f.find(a, this[c], e);
                if (c > 0)
                    for (h = g; h < e.length; h++)
                        for (i = 0; i < g; i++)
                            if (e[i] === e[h]) {
                                e.splice(h--, 1);
                                break
                            }
            }
            return e
        },
        has: function (a) {
            var b = f(a);
            return this.filter(function () {
                for (var a = 0, c = b.length; a < c; a++)
                    if (f.contains(this, b[a]))
                        return !0
            })
        },
        not: function (a) {
            return this.pushStack(W(this, a, !1), "not", a)
        },
        filter: function (a) {
            return this.pushStack(W(this, a, !0), "filter", a)
        },
        is: function (a) {
            return !!a && (typeof a == "string" ? f.filter(a, this).length > 0 : this.filter(a).length > 0)
        },
        closest: function (a, b) {
            var c = [], d, e, g = this[0];
            if (f.isArray(a)) {
                var h, i, j = {}, k = 1;
                if (g && a.length) {
                    for (d = 0,
                        e = a.length; d < e; d++)
                        i = a[d],
                            j[i] || (j[i] = T.test(i) ? f(i, b || this.context) : i);
                    while (g && g.ownerDocument && g !== b) {
                        for (i in j)
                            h = j[i],
                                (h.jquery ? h.index(g) > -1 : f(g).is(h)) && c.push({
                                    selector: i,
                                    elem: g,
                                    level: k
                                });
                        g = g.parentNode,
                            k++
                    }
                }
                return c
            }
            var l = T.test(a) || typeof a != "string" ? f(a, b || this.context) : 0;
            for (d = 0,
                e = this.length; d < e; d++) {
                g = this[d];
                while (g) {
                    if (l ? l.index(g) > -1 : f.find.matchesSelector(g, a)) {
                        c.push(g);
                        break
                    }
                    g = g.parentNode;
                    if (!g || !g.ownerDocument || g === b || g.nodeType === 11)
                        break
                }
            }
            c = c.length > 1 ? f.unique(c) : c;
            return this.pushStack(c, "closest", a)
        },
        index: function (a) {
            if (!a || typeof a == "string")
                return f.inArray(this[0], a ? f(a) : this.parent().children());
            return f.inArray(a.jquery ? a[0] : a, this)
        },
        add: function (a, b) {
            var c = typeof a == "string" ? f(a, b) : f.makeArray(a && a.nodeType ? [a] : a)
                , d = f.merge(this.get(), c);
            return this.pushStack(V(c[0]) || V(d[0]) ? d : f.unique(d))
        },
        andSelf: function () {
            return this.add(this.prevObject)
        }
    }),
        f.each({
            parent: function (a) {
                var b = a.parentNode;
                return b && b.nodeType !== 11 ? b : null
            },
            parents: function (a) {
                return f.dir(a, "parentNode")
            },
            parentsUntil: function (a, b, c) {
                return f.dir(a, "parentNode", c)
            },
            next: function (a) {
                return f.nth(a, 2, "nextSibling")
            },
            prev: function (a) {
                return f.nth(a, 2, "previousSibling")
            },
            nextAll: function (a) {
                return f.dir(a, "nextSibling")
            },
            prevAll: function (a) {
                return f.dir(a, "previousSibling")
            },
            nextUntil: function (a, b, c) {
                return f.dir(a, "nextSibling", c)
            },
            prevUntil: function (a, b, c) {
                return f.dir(a, "previousSibling", c)
            },
            siblings: function (a) {
                return f.sibling(a.parentNode.firstChild, a)
            },
            children: function (a) {
                return f.sibling(a.firstChild)
            },
            contents: function (a) {
                return f.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : f.makeArray(a.childNodes)
            }
        }, function (a, b) {
            f.fn[a] = function (c, d) {
                var e = f.map(this, b, c)
                    , g = S.call(arguments);
                O.test(a) || (d = c),
                    d && typeof d == "string" && (e = f.filter(d, e)),
                    e = this.length > 1 && !U[a] ? f.unique(e) : e,
                    (this.length > 1 || Q.test(d)) && P.test(a) && (e = e.reverse());
                return this.pushStack(e, a, g.join(","))
            }
        }),
        f.extend({
            filter: function (a, b, c) {
                c && (a = ":not(" + a + ")");
                return b.length === 1 ? f.find.matchesSelector(b[0], a) ? [b[0]] : [] : f.find.matches(a, b)
            },
            dir: function (a, c, d) {
                var e = []
                    , g = a[c];
                while (g && g.nodeType !== 9 && (d === b || g.nodeType !== 1 || !f(g).is(d)))
                    g.nodeType === 1 && e.push(g),
                        g = g[c];
                return e
            },
            nth: function (a, b, c, d) {
                b = b || 1;
                var e = 0;
                for (; a; a = a[c])
                    if (a.nodeType === 1 && ++e === b)
                        break;
                return a
            },
            sibling: function (a, b) {
                var c = [];
                for (; a; a = a.nextSibling)
                    a.nodeType === 1 && a !== b && c.push(a);
                return c
            }
        });
    var X = / jQuery\d+="(?:\d+|null)"/g
        , Y = /^\s+/
        , Z = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig
        , $ = /<([\w:]+)/
        , _ = /<tbody/i
        , ba = /<|&#?\w+;/
        , bb = /<(?:script|object|embed|option|style)/i
        , bc = /checked\s*(?:[^=]|=\s*.checked.)/i
        , bd = /\/(java|ecma)script/i
        , be = /^\s*<!(?:\[CDATA\[|\-\-)/
        , bf = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            legend: [1, "<fieldset>", "</fieldset>"],
            thead: [1, "<table>", "</table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
            area: [1, "<map>", "</map>"],
            _default: [0, "", ""]
        };
    bf.optgroup = bf.option,
        bf.tbody = bf.tfoot = bf.colgroup = bf.caption = bf.thead,
        bf.th = bf.td,
        f.support.htmlSerialize || (bf._default = [1, "div<div>", "</div>"]),
        f.fn.extend({
            text: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        var c = f(this);
                        c.text(a.call(this, b, c.text()))
                    });
                if (typeof a != "object" && a !== b)
                    return this.empty().append((this[0] && this[0].ownerDocument || c).createTextNode(a));
                return f.text(this)
            },
            wrapAll: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapAll(a.call(this, b))
                    });
                if (this[0]) {
                    var b = f(a, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && b.insertBefore(this[0]),
                        b.map(function () {
                            var a = this;
                            while (a.firstChild && a.firstChild.nodeType === 1)
                                a = a.firstChild;
                            return a
                        }).append(this)
                }
                return this
            },
            wrapInner: function (a) {
                if (f.isFunction(a))
                    return this.each(function (b) {
                        f(this).wrapInner(a.call(this, b))
                    });
                return this.each(function () {
                    var b = f(this)
                        , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
            },
            wrap: function (a) {
                return this.each(function () {
                    f(this).wrapAll(a)
                })
            },
            unwrap: function () {
                return this.parent().each(function () {
                    f.nodeName(this, "body") || f(this).replaceWith(this.childNodes)
                }).end()
            },
            append: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 && this.appendChild(a)
                })
            },
            prepend: function () {
                return this.domManip(arguments, !0, function (a) {
                    this.nodeType === 1 && this.insertBefore(a, this.firstChild)
                })
            },
            before: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this)
                    });
                if (arguments.length) {
                    var a = f(arguments[0]);
                    a.push.apply(a, this.toArray());
                    return this.pushStack(a, "before", arguments)
                }
            },
            after: function () {
                if (this[0] && this[0].parentNode)
                    return this.domManip(arguments, !1, function (a) {
                        this.parentNode.insertBefore(a, this.nextSibling)
                    });
                if (arguments.length) {
                    var a = this.pushStack(this, "after", arguments);
                    a.push.apply(a, f(arguments[0]).toArray());
                    return a
                }
            },
            remove: function (a, b) {
                for (var c = 0, d; (d = this[c]) != null; c++)
                    if (!a || f.filter(a, [d]).length)
                        !b && d.nodeType === 1 && (f.cleanData(d.getElementsByTagName("*")),
                            f.cleanData([d])),
                            d.parentNode && d.parentNode.removeChild(d);
                return this
            },
            empty: function () {
                for (var a = 0, b; (b = this[a]) != null; a++) {
                    b.nodeType === 1 && f.cleanData(b.getElementsByTagName("*"));
                    while (b.firstChild)
                        b.removeChild(b.firstChild)
                }
                return this
            },
            clone: function (a, b) {
                a = a == null ? !1 : a,
                    b = b == null ? a : b;
                return this.map(function () {
                    return f.clone(this, a, b)
                })
            },
            html: function (a) {
                if (a === b)
                    return this[0] && this[0].nodeType === 1 ? this[0].innerHTML.replace(X, "") : null;
                if (typeof a == "string" && !bb.test(a) && (f.support.leadingWhitespace || !Y.test(a)) && !bf[($.exec(a) || ["", ""])[1].toLowerCase()]) {
                    a = a.replace(Z, "<$1></$2>");
                    try {
                        for (var c = 0, d = this.length; c < d; c++)
                            this[c].nodeType === 1 && (f.cleanData(this[c].getElementsByTagName("*")),
                                this[c].innerHTML = a)
                    } catch (e) {
                        this.empty().append(a)
                    }
                } else
                    f.isFunction(a) ? this.each(function (b) {
                        var c = f(this);
                        c.html(a.call(this, b, c.html()))
                    }) : this.empty().append(a);
                return this
            },
            replaceWith: function (a) {
                if (this[0] && this[0].parentNode) {
                    if (f.isFunction(a))
                        return this.each(function (b) {
                            var c = f(this)
                                , d = c.html();
                            c.replaceWith(a.call(this, b, d))
                        });
                    typeof a != "string" && (a = f(a).detach());
                    return this.each(function () {
                        var b = this.nextSibling
                            , c = this.parentNode;
                        f(this).remove(),
                            b ? f(b).before(a) : f(c).append(a)
                    })
                }
                return this.length ? this.pushStack(f(f.isFunction(a) ? a() : a), "replaceWith", a) : this
            },
            detach: function (a) {
                return this.remove(a, !0)
            },
            domManip: function (a, c, d) {
                var e, g, h, i, j = a[0], k = [];
                if (!f.support.checkClone && arguments.length === 3 && typeof j == "string" && bc.test(j))
                    return this.each(function () {
                        f(this).domManip(a, c, d, !0)
                    });
                if (f.isFunction(j))
                    return this.each(function (e) {
                        var g = f(this);
                        a[0] = j.call(this, e, c ? g.html() : b),
                            g.domManip(a, c, d)
                    });
                if (this[0]) {
                    i = j && j.parentNode,
                        f.support.parentNode && i && i.nodeType === 11 && i.childNodes.length === this.length ? e = {
                            fragment: i
                        } : e = f.buildFragment(a, this, k),
                        h = e.fragment,
                        h.childNodes.length === 1 ? g = h = h.firstChild : g = h.firstChild;
                    if (g) {
                        c = c && f.nodeName(g, "tr");
                        for (var l = 0, m = this.length, n = m - 1; l < m; l++)
                            d.call(c ? bg(this[l], g) : this[l], e.cacheable || m > 1 && l < n ? f.clone(h, !0, !0) : h)
                    }
                    k.length && f.each(k, bm)
                }
                return this
            }
        }),
        f.buildFragment = function (a, b, d) {
            var e, g, h, i;
            b && b[0] && (i = b[0].ownerDocument || b[0]),
                i.createDocumentFragment || (i = c),
                a.length === 1 && typeof a[0] == "string" && a[0].length < 512 && i === c && a[0].charAt(0) === "<" && !bb.test(a[0]) && (f.support.checkClone || !bc.test(a[0])) && (g = !0,
                    h = f.fragments[a[0]],
                    h && h !== 1 && (e = h)),
                e || (e = i.createDocumentFragment(),
                    f.clean(a, i, e, d)),
                g && (f.fragments[a[0]] = h ? e : 1);
            return {
                fragment: e,
                cacheable: g
            }
        }
        ,
        f.fragments = {},
        f.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function (a, b) {
            f.fn[a] = function (c) {
                var d = []
                    , e = f(c)
                    , g = this.length === 1 && this[0].parentNode;
                if (g && g.nodeType === 11 && g.childNodes.length === 1 && e.length === 1) {
                    e[b](this[0]);
                    return this
                }
                for (var h = 0, i = e.length; h < i; h++) {
                    var j = (h > 0 ? this.clone(!0) : this).get();
                    f(e[h])[b](j),
                        d = d.concat(j)
                }
                return this.pushStack(d, a, e.selector)
            }
        }),
        f.extend({
            clone: function (a, b, c) {
                var d = a.cloneNode(!0), e, g, h;
                if ((!f.support.noCloneEvent || !f.support.noCloneChecked) && (a.nodeType === 1 || a.nodeType === 11) && !f.isXMLDoc(a)) {
                    bi(a, d),
                        e = bj(a),
                        g = bj(d);
                    for (h = 0; e[h]; ++h)
                        bi(e[h], g[h])
                }
                if (b) {
                    bh(a, d);
                    if (c) {
                        e = bj(a),
                            g = bj(d);
                        for (h = 0; e[h]; ++h)
                            bh(e[h], g[h])
                    }
                }
                e = g = null;
                return d
            },
            clean: function (a, b, d, e) {
                var g;
                b = b || c,
                    typeof b.createElement == "undefined" && (b = b.ownerDocument || b[0] && b[0].ownerDocument || c);
                var h = [], i;
                for (var j = 0, k; (k = a[j]) != null; j++) {
                    typeof k == "number" && (k += "");
                    if (!k)
                        continue;
                    if (typeof k == "string")
                        if (!ba.test(k))
                            k = b.createTextNode(k);
                        else {
                            k = k.replace(Z, "<$1></$2>");
                            var l = ($.exec(k) || ["", ""])[1].toLowerCase()
                                , m = bf[l] || bf._default
                                , n = m[0]
                                , o = b.createElement("div");
                            o.innerHTML = m[1] + k + m[2];
                            while (n--)
                                o = o.lastChild;
                            if (!f.support.tbody) {
                                var p = _.test(k)
                                    , q = l === "table" && !p ? o.firstChild && o.firstChild.childNodes : m[1] === "<table>" && !p ? o.childNodes : [];
                                for (i = q.length - 1; i >= 0; --i)
                                    f.nodeName(q[i], "tbody") && !q[i].childNodes.length && q[i].parentNode.removeChild(q[i])
                            }
                            !f.support.leadingWhitespace && Y.test(k) && o.insertBefore(b.createTextNode(Y.exec(k)[0]), o.firstChild),
                                k = o.childNodes
                        }
                    var r;
                    if (!f.support.appendChecked)
                        if (k[0] && typeof (r = k.length) == "number")
                            for (i = 0; i < r; i++)
                                bl(k[i]);
                        else
                            bl(k);
                    k.nodeType ? h.push(k) : h = f.merge(h, k)
                }
                if (d) {
                    g = function (a) {
                        return !a.type || bd.test(a.type)
                    }
                        ;
                    for (j = 0; h[j]; j++)
                        if (e && f.nodeName(h[j], "script") && (!h[j].type || h[j].type.toLowerCase() === "text/javascript"))
                            e.push(h[j].parentNode ? h[j].parentNode.removeChild(h[j]) : h[j]);
                        else {
                            if (h[j].nodeType === 1) {
                                var s = f.grep(h[j].getElementsByTagName("script"), g);
                                h.splice.apply(h, [j + 1, 0].concat(s))
                            }
                            d.appendChild(h[j])
                        }
                }
                return h
            },
            cleanData: function (a) {
                var b, c, d = f.cache, e = f.expando, g = f.event.special, h = f.support.deleteExpando;
                for (var i = 0, j; (j = a[i]) != null; i++) {
                    if (j.nodeName && f.noData[j.nodeName.toLowerCase()])
                        continue;
                    c = j[f.expando];
                    if (c) {
                        b = d[c] && d[c][e];
                        if (b && b.events) {
                            for (var k in b.events)
                                g[k] ? f.event.remove(j, k) : f.removeEvent(j, k, b.handle);
                            b.handle && (b.handle.elem = null)
                        }
                        h ? delete j[f.expando] : j.removeAttribute && j.removeAttribute(f.expando),
                            delete d[c]
                    }
                }
            }
        });
    var bn = /alpha\([^)]*\)/i, bo = /opacity=([^)]*)/, bp = /([A-Z]|^ms)/g, bq = /^-?\d+(?:px)?$/i, br = /^-?\d/, bs = /^[+\-]=/, bt = /[^+\-\.\de]+/g, bu = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, bv = ["Left", "Right"], bw = ["Top", "Bottom"], bx, by, bz;
    f.fn.css = function (a, c) {
        if (arguments.length === 2 && c === b)
            return this;
        return f.access(this, a, c, !0, function (a, c, d) {
            return d !== b ? f.style(a, c, d) : f.css(a, c)
        })
    }
        ,
        f.extend({
            cssHooks: {
                opacity: {
                    get: function (a, b) {
                        if (b) {
                            var c = bx(a, "opacity", "opacity");
                            return c === "" ? "1" : c
                        }
                        return a.style.opacity
                    }
                }
            },
            cssNumber: {
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": f.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function (a, c, d, e) {
                if (!!a && a.nodeType !== 3 && a.nodeType !== 8 && !!a.style) {
                    var g, h, i = f.camelCase(c), j = a.style, k = f.cssHooks[i];
                    c = f.cssProps[i] || i;
                    if (d === b) {
                        if (k && "get" in k && (g = k.get(a, !1, e)) !== b)
                            return g;
                        return j[c]
                    }
                    h = typeof d;
                    if (h === "number" && isNaN(d) || d == null)
                        return;
                    h === "string" && bs.test(d) && (d = +d.replace(bt, "") + parseFloat(f.css(a, c)),
                        h = "number"),
                        h === "number" && !f.cssNumber[i] && (d += "px");
                    if (!k || !("set" in k) || (d = k.set(a, d)) !== b)
                        try {
                            j[c] = d
                        } catch (l) { }
                }
            },
            css: function (a, c, d) {
                var e, g;
                c = f.camelCase(c),
                    g = f.cssHooks[c],
                    c = f.cssProps[c] || c,
                    c === "cssFloat" && (c = "float");
                if (g && "get" in g && (e = g.get(a, !0, d)) !== b)
                    return e;
                if (bx)
                    return bx(a, c)
            },
            swap: function (a, b, c) {
                var d = {};
                for (var e in b)
                    d[e] = a.style[e],
                        a.style[e] = b[e];
                c.call(a);
                for (e in b)
                    a.style[e] = d[e]
            }
        }),
        f.curCSS = f.css,
        f.each(["height", "width"], function (a, b) {
            f.cssHooks[b] = {
                get: function (a, c, d) {
                    var e;
                    if (c) {
                        if (a.offsetWidth !== 0)
                            return bA(a, b, d);
                        f.swap(a, bu, function () {
                            e = bA(a, b, d)
                        });
                        return e
                    }
                },
                set: function (a, b) {
                    if (!bq.test(b))
                        return b;
                    b = parseFloat(b);
                    if (b >= 0)
                        return b + "px"
                }
            }
        }),
        f.support.opacity || (f.cssHooks.opacity = {
            get: function (a, b) {
                return bo.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? parseFloat(RegExp.$1) / 100 + "" : b ? "1" : ""
            },
            set: function (a, b) {
                var c = a.style
                    , d = a.currentStyle;
                c.zoom = 1;
                var e = f.isNaN(b) ? "" : "alpha(opacity=" + b * 100 + ")"
                    , g = d && d.filter || c.filter || "";
                c.filter = bn.test(g) ? g.replace(bn, e) : g + " " + e
            }
        }),
        f(function () {
            f.support.reliableMarginRight || (f.cssHooks.marginRight = {
                get: function (a, b) {
                    var c;
                    f.swap(a, {
                        display: "inline-block"
                    }, function () {
                        b ? c = bx(a, "margin-right", "marginRight") : c = a.style.marginRight
                    });
                    return c
                }
            })
        }),
        c.defaultView && c.defaultView.getComputedStyle && (by = function (a, c) {
            var d, e, g;
            c = c.replace(bp, "-$1").toLowerCase();
            if (!(e = a.ownerDocument.defaultView))
                return b;
            if (g = e.getComputedStyle(a, null))
                d = g.getPropertyValue(c),
                    d === "" && !f.contains(a.ownerDocument.documentElement, a) && (d = f.style(a, c));
            return d
        }
        ),
        c.documentElement.currentStyle && (bz = function (a, b) {
            var c, d = a.currentStyle && a.currentStyle[b], e = a.runtimeStyle && a.runtimeStyle[b], f = a.style;
            !bq.test(d) && br.test(d) && (c = f.left,
                e && (a.runtimeStyle.left = a.currentStyle.left),
                f.left = b === "fontSize" ? "1em" : d || 0,
                d = f.pixelLeft + "px",
                f.left = c,
                e && (a.runtimeStyle.left = e));
            return d === "" ? "auto" : d
        }
        ),
        bx = by || bz,
        f.expr && f.expr.filters && (f.expr.filters.hidden = function (a) {
            var b = a.offsetWidth
                , c = a.offsetHeight;
            return b === 0 && c === 0 || !f.support.reliableHiddenOffsets && (a.style.display || f.css(a, "display")) === "none"
        }
            ,
            f.expr.filters.visible = function (a) {
                return !f.expr.filters.hidden(a)
            }
        );
    var bB = /%20/g, bC = /\[\]$/, bD = /\r?\n/g, bE = /#.*$/, bF = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg, bG = /^(?:color|date|datetime|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i, bH = /^(?:about|app|app\-storage|.+\-extension|file|widget):$/, bI = /^(?:GET|HEAD)$/, bJ = /^\/\//, bK = /\?/, bL = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, bM = /^(?:select|textarea)/i, bN = /\s+/, bO = /([?&])_=[^&]*/, bP = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/, bQ = f.fn.load, bR = {}, bS = {}, bT, bU;
    try {
        bT = e.href
    } catch (bV) {
        bT = c.createElement("a"),
            bT.href = "",
            bT = bT.href
    }
    bU = bP.exec(bT.toLowerCase()) || [],
        f.fn.extend({
            load: function (a, c, d) {
                if (typeof a != "string" && bQ)
                    return bQ.apply(this, arguments);
                if (!this.length)
                    return this;
                var e = a.indexOf(" ");
                if (e >= 0) {
                    var g = a.slice(e, a.length);
                    a = a.slice(0, e)
                }
                var h = "GET";
                c && (f.isFunction(c) ? (d = c,
                    c = b) : typeof c == "object" && (c = f.param(c, f.ajaxSettings.traditional),
                        h = "POST"));
                var i = this;
                f.ajax({
                    url: a,
                    type: h,
                    dataType: "html",
                    data: c,
                    complete: function (a, b, c) {
                        c = a.responseText,
                            a.isResolved() && (a.done(function (a) {
                                c = a
                            }),
                                i.html(g ? f("<div>").append(c.replace(bL, "")).find(g) : c)),
                            d && i.each(d, [c, b, a])
                    }
                });
                return this
            },
            serialize: function () {
                return f.param(this.serializeArray())
            },
            serializeArray: function () {
                return this.map(function () {
                    return this.elements ? f.makeArray(this.elements) : this
                }).filter(function () {
                    return this.name && !this.disabled && (this.checked || bM.test(this.nodeName) || bG.test(this.type))
                }).map(function (a, b) {
                    var c = f(this).val();
                    return c == null ? null : f.isArray(c) ? f.map(c, function (a, c) {
                        return {
                            name: b.name,
                            value: a.replace(bD, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(bD, "\r\n")
                    }
                }).get()
            }
        }),
        f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function (a, b) {
            f.fn[b] = function (a) {
                return this.bind(b, a)
            }
        }),
        f.each(["get", "post"], function (a, c) {
            f[c] = function (a, d, e, g) {
                f.isFunction(d) && (g = g || e,
                    e = d,
                    d = b);
                return f.ajax({
                    type: c,
                    url: a,
                    data: d,
                    success: e,
                    dataType: g
                })
            }
        }),
        f.extend({
            getScript: function (a, c) {
                return f.get(a, b, c, "script")
            },
            getJSON: function (a, b, c) {
                return f.get(a, b, c, "json")
            },
            ajaxSetup: function (a, b) {
                b ? f.extend(!0, a, f.ajaxSettings, b) : (b = a,
                    a = f.extend(!0, f.ajaxSettings, b));
                for (var c in {
                    context: 1,
                    url: 1
                })
                    c in b ? a[c] = b[c] : c in f.ajaxSettings && (a[c] = f.ajaxSettings[c]);
                return a
            },
            ajaxSettings: {
                url: bT,
                isLocal: bH.test(bU[1]),
                global: !0,
                type: "GET",
                contentType: "application/x-www-form-urlencoded",
                processData: !0,
                async: !0,
                accepts: {
                    xml: "application/xml, text/xml",
                    html: "text/html",
                    text: "text/plain",
                    json: "application/json, text/javascript",
                    "*": "*/*"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText"
                },
                converters: {
                    "* text": a.String,
                    "text html": !0,
                    "text json": f.parseJSON,
                    "text xml": f.parseXML
                }
            },
            ajaxPrefilter: bW(bR),
            ajaxTransport: bW(bS),
            ajax: function (a, c) {
                function w(a, c, l, m) {
                    if (s !== 2) {
                        s = 2,
                            q && clearTimeout(q),
                            p = b,
                            n = m || "",
                            v.readyState = a ? 4 : 0;
                        var o, r, u, w = l ? bZ(d, v, l) : b, x, y;
                        if (a >= 200 && a < 300 || a === 304) {
                            if (d.ifModified) {
                                if (x = v.getResponseHeader("Last-Modified"))
                                    f.lastModified[k] = x;
                                if (y = v.getResponseHeader("Etag"))
                                    f.etag[k] = y
                            }
                            if (a === 304)
                                c = "notmodified",
                                    o = !0;
                            else
                                try {
                                    r = b$(d, w),
                                        c = "success",
                                        o = !0
                                } catch (z) {
                                    c = "parsererror",
                                        u = z
                                }
                        } else {
                            u = c;
                            if (!c || a)
                                c = "error",
                                    a < 0 && (a = 0)
                        }
                        v.status = a,
                            v.statusText = c,
                            o ? h.resolveWith(e, [r, c, v]) : h.rejectWith(e, [v, c, u]),
                            v.statusCode(j),
                            j = b,
                            t && g.trigger("ajax" + (o ? "Success" : "Error"), [v, d, o ? r : u]),
                            i.resolveWith(e, [v, c]),
                            t && (g.trigger("ajaxComplete", [v, d]),
                                --f.active || f.event.trigger("ajaxStop"))
                    }
                }
                typeof a == "object" && (c = a,
                    a = b),
                    c = c || {};
                var d = f.ajaxSetup({}, c), e = d.context || d, g = e !== d && (e.nodeType || e instanceof f) ? f(e) : f.event, h = f.Deferred(), i = f._Deferred(), j = d.statusCode || {}, k, l = {}, m = {}, n, o, p, q, r, s = 0, t, u, v = {
                    readyState: 0,
                    setRequestHeader: function (a, b) {
                        if (!s) {
                            var c = a.toLowerCase();
                            a = m[c] = m[c] || a,
                                l[a] = b
                        }
                        return this
                    },
                    getAllResponseHeaders: function () {
                        return s === 2 ? n : null
                    },
                    getResponseHeader: function (a) {
                        var c;
                        if (s === 2) {
                            if (!o) {
                                o = {};
                                while (c = bF.exec(n))
                                    o[c[1].toLowerCase()] = c[2]
                            }
                            c = o[a.toLowerCase()]
                        }
                        return c === b ? null : c
                    },
                    overrideMimeType: function (a) {
                        s || (d.mimeType = a);
                        return this
                    },
                    abort: function (a) {
                        a = a || "abort",
                            p && p.abort(a),
                            w(0, a);
                        return this
                    }
                };
                h.promise(v),
                    v.success = v.done,
                    v.error = v.fail,
                    v.complete = i.done,
                    v.statusCode = function (a) {
                        if (a) {
                            var b;
                            if (s < 2)
                                for (b in a)
                                    j[b] = [j[b], a[b]];
                            else
                                b = a[v.status],
                                    v.then(b, b)
                        }
                        return this
                    }
                    ,
                    d.url = ((a || d.url) + "").replace(bE, "").replace(bJ, bU[1] + "//"),
                    d.dataTypes = f.trim(d.dataType || "*").toLowerCase().split(bN),
                    d.crossDomain == null && (r = bP.exec(d.url.toLowerCase()),
                        d.crossDomain = !(!r || r[1] == bU[1] && r[2] == bU[2] && (r[3] || (r[1] === "http:" ? 80 : 443)) == (bU[3] || (bU[1] === "http:" ? 80 : 443)))),
                    d.data && d.processData && typeof d.data != "string" && (d.data = f.param(d.data, d.traditional)),
                    bX(bR, d, c, v);
                if (s === 2)
                    return !1;
                t = d.global,
                    d.type = d.type.toUpperCase(),
                    d.hasContent = !bI.test(d.type),
                    t && f.active++ === 0 && f.event.trigger("ajaxStart");
                if (!d.hasContent) {
                    d.data && (d.url += (bK.test(d.url) ? "&" : "?") + d.data),
                        k = d.url;
                    if (d.cache === !1) {
                        var x = f.now()
                            , y = d.url.replace(bO, "$1_=" + x);
                        d.url = y + (y === d.url ? (bK.test(d.url) ? "&" : "?") + "_=" + x : "")
                    }
                }
                (d.data && d.hasContent && d.contentType !== !1 || c.contentType) && v.setRequestHeader("Content-Type", d.contentType),
                    d.ifModified && (k = k || d.url,
                        f.lastModified[k] && v.setRequestHeader("If-Modified-Since", f.lastModified[k]),
                        f.etag[k] && v.setRequestHeader("If-None-Match", f.etag[k])),
                    v.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + (d.dataTypes[0] !== "*" ? ", */*; q=0.01" : "") : d.accepts["*"]);
                for (u in d.headers)
                    v.setRequestHeader(u, d.headers[u]);
                if (d.beforeSend && (d.beforeSend.call(e, v, d) === !1 || s === 2)) {
                    v.abort();
                    return !1
                }
                for (u in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[u](d[u]);
                p = bX(bS, d, c, v);
                if (!p)
                    w(-1, "No Transport");
                else {
                    v.readyState = 1,
                        t && g.trigger("ajaxSend", [v, d]),
                        d.async && d.timeout > 0 && (q = setTimeout(function () {
                            v.abort("timeout")
                        }, d.timeout));
                    try {
                        s = 1,
                            p.send(l, w)
                    } catch (z) {
                        status < 2 ? w(-1, z) : f.error(z)
                    }
                }
                return v
            },
            param: function (a, c) {
                var d = []
                    , e = function (a, b) {
                        b = f.isFunction(b) ? b() : b,
                            d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
                    };
                c === b && (c = f.ajaxSettings.traditional);
                if (f.isArray(a) || a.jquery && !f.isPlainObject(a))
                    f.each(a, function () {
                        e(this.name, this.value)
                    });
                else
                    for (var g in a)
                        bY(g, a[g], c, e);
                return d.join("&").replace(bB, "+")
            }
        }),
        f.extend({
            active: 0,
            lastModified: {},
            etag: {}
        });
    var b_ = f.now()
        , ca = /(\=)\?(&|$)|\?\?/i;
    f.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            return f.expando + "_" + b_++
        }
    }),
        f.ajaxPrefilter("json jsonp", function (b, c, d) {
            var e = b.contentType === "application/x-www-form-urlencoded" && typeof b.data == "string";
            if (b.dataTypes[0] === "jsonp" || b.jsonp !== !1 && (ca.test(b.url) || e && ca.test(b.data))) {
                var g, h = b.jsonpCallback = f.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, i = a[h], j = b.url, k = b.data, l = "$1" + h + "$2";
                b.jsonp !== !1 && (j = j.replace(ca, l),
                    b.url === j && (e && (k = k.replace(ca, l)),
                        b.data === k && (j += (/\?/.test(j) ? "&" : "?") + b.jsonp + "=" + h))),
                    b.url = j,
                    b.data = k,
                    a[h] = function (a) {
                        g = [a]
                    }
                    ,
                    d.always(function () {
                        a[h] = i,
                            g && f.isFunction(i) && a[h](g[0])
                    }),
                    b.converters["script json"] = function () {
                        g || f.error(h + " was not called");
                        return g[0]
                    }
                    ,
                    b.dataTypes[0] = "json";
                return "script"
            }
        }),
        f.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /javascript|ecmascript/
            },
            converters: {
                "text script": function (a) {
                    f.globalEval(a);
                    return a
                }
            }
        }),
        f.ajaxPrefilter("script", function (a) {
            a.cache === b && (a.cache = !1),
                a.crossDomain && (a.type = "GET",
                    a.global = !1)
        }),
        f.ajaxTransport("script", function (a) {
            if (a.crossDomain) {
                var d, e = c.head || c.getElementsByTagName("head")[0] || c.documentElement;
                return {
                    send: function (f, g) {
                        d = c.createElement("script"),
                            d.async = "async",
                            a.scriptCharset && (d.charset = a.scriptCharset),
                            d.src = a.url,
                            d.onload = d.onreadystatechange = function (a, c) {
                                if (c || !d.readyState || /loaded|complete/.test(d.readyState))
                                    d.onload = d.onreadystatechange = null,
                                        e && d.parentNode && e.removeChild(d),
                                        d = b,
                                        c || g(200, "success")
                            }
                            ,
                            e.insertBefore(d, e.firstChild)
                    },
                    abort: function () {
                        d && d.onload(0, 1)
                    }
                }
            }
        });
    var cb = a.ActiveXObject ? function () {
        for (var a in cd)
            cd[a](0, 1)
    }
        : !1, cc = 0, cd;
    f.ajaxSettings.xhr = a.ActiveXObject ? function () {
        return !this.isLocal && ce() || cf()
    }
        : ce,
        function (a) {
            f.extend(f.support, {
                ajax: !!a,
                cors: !!a && "withCredentials" in a
            })
        }(f.ajaxSettings.xhr()),
        f.support.ajax && f.ajaxTransport(function (c) {
            if (!c.crossDomain || f.support.cors) {
                var d;
                return {
                    send: function (e, g) {
                        var h = c.xhr(), i, j;
                        c.username ? h.open(c.type, c.url, c.async, c.username, c.password) : h.open(c.type, c.url, c.async);
                        if (c.xhrFields)
                            for (j in c.xhrFields)
                                h[j] = c.xhrFields[j];
                        c.mimeType && h.overrideMimeType && h.overrideMimeType(c.mimeType),
                            !c.crossDomain && !e["X-Requested-With"] && (e["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (j in e)
                                h.setRequestHeader(j, e[j])
                        } catch (k) { }
                        h.send(c.hasContent && c.data || null),
                            d = function (a, e) {
                                var j, k, l, m, n;
                                try {
                                    if (d && (e || h.readyState === 4)) {
                                        d = b,
                                            i && (h.onreadystatechange = f.noop,
                                                cb && delete cd[i]);
                                        if (e)
                                            h.readyState !== 4 && h.abort();
                                        else {
                                            j = h.status,
                                                l = h.getAllResponseHeaders(),
                                                m = {},
                                                n = h.responseXML,
                                                n && n.documentElement && (m.xml = n),
                                                m.text = h.responseText;
                                            try {
                                                k = h.statusText
                                            } catch (o) {
                                                k = ""
                                            }
                                            !j && c.isLocal && !c.crossDomain ? j = m.text ? 200 : 404 : j === 1223 && (j = 204)
                                        }
                                    }
                                } catch (p) {
                                    e || g(-1, p)
                                }
                                m && g(j, k, m, l)
                            }
                            ,
                            !c.async || h.readyState === 4 ? d() : (i = ++cc,
                                cb && (cd || (cd = {},
                                    f(a).unload(cb)),
                                    cd[i] = d),
                                h.onreadystatechange = d)
                    },
                    abort: function () {
                        d && d(0, 1)
                    }
                }
            }
        });
    var cg = {}, ch, ci, cj = /^(?:toggle|show|hide)$/, ck = /^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i, cl, cm = [["height", "marginTop", "marginBottom", "paddingTop", "paddingBottom"], ["width", "marginLeft", "marginRight", "paddingLeft", "paddingRight"], ["opacity"]], cn, co = a.webkitRequestAnimationFrame || a.mozRequestAnimationFrame || a.oRequestAnimationFrame;
    f.fn.extend({
        show: function (a, b, c) {
            var d, e;
            if (a || a === 0)
                return this.animate(cr("show", 3), a, b, c);
            for (var g = 0, h = this.length; g < h; g++)
                d = this[g],
                    d.style && (e = d.style.display,
                        !f._data(d, "olddisplay") && e === "none" && (e = d.style.display = ""),
                        e === "" && f.css(d, "display") === "none" && f._data(d, "olddisplay", cs(d.nodeName)));
            for (g = 0; g < h; g++) {
                d = this[g];
                if (d.style) {
                    e = d.style.display;
                    if (e === "" || e === "none")
                        d.style.display = f._data(d, "olddisplay") || ""
                }
            }
            return this
        },
        hide: function (a, b, c) {
            if (a || a === 0)
                return this.animate(cr("hide", 3), a, b, c);
            for (var d = 0, e = this.length; d < e; d++)
                if (this[d].style) {
                    var g = f.css(this[d], "display");
                    g !== "none" && !f._data(this[d], "olddisplay") && f._data(this[d], "olddisplay", g)
                }
            for (d = 0; d < e; d++)
                this[d].style && (this[d].style.display = "none");
            return this
        },
        _toggle: f.fn.toggle,
        toggle: function (a, b, c) {
            var d = typeof a == "boolean";
            f.isFunction(a) && f.isFunction(b) ? this._toggle.apply(this, arguments) : a == null || d ? this.each(function () {
                var b = d ? a : f(this).is(":hidden");
                f(this)[b ? "show" : "hide"]()
            }) : this.animate(cr("toggle", 3), a, b, c);
            return this
        },
        fadeTo: function (a, b, c, d) {
            return this.filter(":hidden").css("opacity", 0).show().end().animate({
                opacity: b
            }, a, c, d)
        },
        animate: function (a, b, c, d) {
            var e = f.speed(b, c, d);
            if (f.isEmptyObject(a))
                return this.each(e.complete, [!1]);
            a = f.extend({}, a);
            return this[e.queue === !1 ? "each" : "queue"](function () {
                e.queue === !1 && f._mark(this);
                var b = f.extend({}, e), c = this.nodeType === 1, d = c && f(this).is(":hidden"), g, h, i, j, k, l, m, n, o;
                b.animatedProperties = {};
                for (i in a) {
                    g = f.camelCase(i),
                        i !== g && (a[g] = a[i],
                            delete a[i]),
                        h = a[g],
                        f.isArray(h) ? (b.animatedProperties[g] = h[1],
                            h = a[g] = h[0]) : b.animatedProperties[g] = b.specialEasing && b.specialEasing[g] || b.easing || "swing";
                    if (h === "hide" && d || h === "show" && !d)
                        return b.complete.call(this);
                    c && (g === "height" || g === "width") && (b.overflow = [this.style.overflow, this.style.overflowX, this.style.overflowY],
                        f.css(this, "display") === "inline" && f.css(this, "float") === "none" && (f.support.inlineBlockNeedsLayout ? (j = cs(this.nodeName),
                            j === "inline" ? this.style.display = "inline-block" : (this.style.display = "inline",
                                this.style.zoom = 1)) : this.style.display = "inline-block"))
                }
                b.overflow != null && (this.style.overflow = "hidden");
                for (i in a)
                    k = new f.fx(this, b, i),
                        h = a[i],
                        cj.test(h) ? k[h === "toggle" ? d ? "show" : "hide" : h]() : (l = ck.exec(h),
                            m = k.cur(),
                            l ? (n = parseFloat(l[2]),
                                o = l[3] || (f.cssNumber[i] ? "" : "px"),
                                o !== "px" && (f.style(this, i, (n || 1) + o),
                                    m = (n || 1) / k.cur() * m,
                                    f.style(this, i, m + o)),
                                l[1] && (n = (l[1] === "-=" ? -1 : 1) * n + m),
                                k.custom(m, n, o)) : k.custom(m, h, ""));
                return !0
            })
        },
        stop: function (a, b) {
            a && this.queue([]),
                this.each(function () {
                    var a = f.timers
                        , c = a.length;
                    b || f._unmark(!0, this);
                    while (c--)
                        a[c].elem === this && (b && a[c](!0),
                            a.splice(c, 1))
                }),
                b || this.dequeue();
            return this
        }
    }),
        f.each({
            slideDown: cr("show", 1),
            slideUp: cr("hide", 1),
            slideToggle: cr("toggle", 1),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function (a, b) {
            f.fn[a] = function (a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        f.extend({
            speed: function (a, b, c) {
                var d = a && typeof a == "object" ? f.extend({}, a) : {
                    complete: c || !c && b || f.isFunction(a) && a,
                    duration: a,
                    easing: c && b || b && !f.isFunction(b) && b
                };
                d.duration = f.fx.off ? 0 : typeof d.duration == "number" ? d.duration : d.duration in f.fx.speeds ? f.fx.speeds[d.duration] : f.fx.speeds._default,
                    d.old = d.complete,
                    d.complete = function (a) {
                        f.isFunction(d.old) && d.old.call(this),
                            d.queue !== !1 ? f.dequeue(this) : a !== !1 && f._unmark(this)
                    }
                    ;
                return d
            },
            easing: {
                linear: function (a, b, c, d) {
                    return c + d * a
                },
                swing: function (a, b, c, d) {
                    return (-Math.cos(a * Math.PI) / 2 + .5) * d + c
                }
            },
            timers: [],
            fx: function (a, b, c) {
                this.options = b,
                    this.elem = a,
                    this.prop = c,
                    b.orig = b.orig || {}
            }
        }),
        f.fx.prototype = {
            update: function () {
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    (f.fx.step[this.prop] || f.fx.step._default)(this)
            },
            cur: function () {
                if (this.elem[this.prop] != null && (!this.elem.style || this.elem.style[this.prop] == null))
                    return this.elem[this.prop];
                var a, b = f.css(this.elem, this.prop);
                return isNaN(a = parseFloat(b)) ? !b || b === "auto" ? 0 : b : a
            },
            custom: function (a, b, c) {
                function h(a) {
                    return d.step(a)
                }
                var d = this, e = f.fx, g;
                this.startTime = cn || cp(),
                    this.start = a,
                    this.end = b,
                    this.unit = c || this.unit || (f.cssNumber[this.prop] ? "" : "px"),
                    this.now = this.start,
                    this.pos = this.state = 0,
                    h.elem = this.elem,
                    h() && f.timers.push(h) && !cl && (co ? (cl = !0,
                        g = function () {
                            cl && (co(g),
                                e.tick())
                        }
                        ,
                        co(g)) : cl = setInterval(e.tick, e.interval))
            },
            show: function () {
                this.options.orig[this.prop] = f.style(this.elem, this.prop),
                    this.options.show = !0,
                    this.custom(this.prop === "width" || this.prop === "height" ? 1 : 0, this.cur()),
                    f(this.elem).show()
            },
            hide: function () {
                this.options.orig[this.prop] = f.style(this.elem, this.prop),
                    this.options.hide = !0,
                    this.custom(this.cur(), 0)
            },
            step: function (a) {
                var b = cn || cp(), c = !0, d = this.elem, e = this.options, g, h;
                if (a || b >= e.duration + this.startTime) {
                    this.now = this.end,
                        this.pos = this.state = 1,
                        this.update(),
                        e.animatedProperties[this.prop] = !0;
                    for (g in e.animatedProperties)
                        e.animatedProperties[g] !== !0 && (c = !1);
                    if (c) {
                        e.overflow != null && !f.support.shrinkWrapBlocks && f.each(["", "X", "Y"], function (a, b) {
                            d.style["overflow" + b] = e.overflow[a]
                        }),
                            e.hide && f(d).hide();
                        if (e.hide || e.show)
                            for (var i in e.animatedProperties)
                                f.style(d, i, e.orig[i]);
                        e.complete.call(d)
                    }
                    return !1
                }
                e.duration == Infinity ? this.now = b : (h = b - this.startTime,
                    this.state = h / e.duration,
                    this.pos = f.easing[e.animatedProperties[this.prop]](this.state, h, 0, 1, e.duration),
                    this.now = this.start + (this.end - this.start) * this.pos),
                    this.update();
                return !0
            }
        },
        f.extend(f.fx, {
            tick: function () {
                for (var a = f.timers, b = 0; b < a.length; ++b)
                    a[b]() || a.splice(b--, 1);
                a.length || f.fx.stop()
            },
            interval: 13,
            stop: function () {
                clearInterval(cl),
                    cl = null
            },
            speeds: {
                slow: 600,
                fast: 200,
                _default: 400
            },
            step: {
                opacity: function (a) {
                    f.style(a.elem, "opacity", a.now)
                },
                _default: function (a) {
                    a.elem.style && a.elem.style[a.prop] != null ? a.elem.style[a.prop] = (a.prop === "width" || a.prop === "height" ? Math.max(0, a.now) : a.now) + a.unit : a.elem[a.prop] = a.now
                }
            }
        }),
        f.expr && f.expr.filters && (f.expr.filters.animated = function (a) {
            return f.grep(f.timers, function (b) {
                return a === b.elem
            }).length
        }
        );
    var ct = /^t(?:able|d|h)$/i
        , cu = /^(?:body|html)$/i;
    "getBoundingClientRect" in c.documentElement ? f.fn.offset = function (a) {
        var b = this[0], c;
        if (a)
            return this.each(function (b) {
                f.offset.setOffset(this, a, b)
            });
        if (!b || !b.ownerDocument)
            return null;
        if (b === b.ownerDocument.body)
            return f.offset.bodyOffset(b);
        try {
            c = b.getBoundingClientRect()
        } catch (d) { }
        var e = b.ownerDocument
            , g = e.documentElement;
        if (!c || !f.contains(g, b))
            return c ? {
                top: c.top,
                left: c.left
            } : {
                top: 0,
                left: 0
            };
        var h = e.body
            , i = cv(e)
            , j = g.clientTop || h.clientTop || 0
            , k = g.clientLeft || h.clientLeft || 0
            , l = i.pageYOffset || f.support.boxModel && g.scrollTop || h.scrollTop
            , m = i.pageXOffset || f.support.boxModel && g.scrollLeft || h.scrollLeft
            , n = c.top + l - j
            , o = c.left + m - k;
        return {
            top: n,
            left: o
        }
    }
        : f.fn.offset = function (a) {
            var b = this[0];
            if (a)
                return this.each(function (b) {
                    f.offset.setOffset(this, a, b)
                });
            if (!b || !b.ownerDocument)
                return null;
            if (b === b.ownerDocument.body)
                return f.offset.bodyOffset(b);
            f.offset.initialize();
            var c, d = b.offsetParent, e = b, g = b.ownerDocument, h = g.documentElement, i = g.body, j = g.defaultView, k = j ? j.getComputedStyle(b, null) : b.currentStyle, l = b.offsetTop, m = b.offsetLeft;
            while ((b = b.parentNode) && b !== i && b !== h) {
                if (f.offset.supportsFixedPosition && k.position === "fixed")
                    break;
                c = j ? j.getComputedStyle(b, null) : b.currentStyle,
                    l -= b.scrollTop,
                    m -= b.scrollLeft,
                    b === d && (l += b.offsetTop,
                        m += b.offsetLeft,
                        f.offset.doesNotAddBorder && (!f.offset.doesAddBorderForTableAndCells || !ct.test(b.nodeName)) && (l += parseFloat(c.borderTopWidth) || 0,
                            m += parseFloat(c.borderLeftWidth) || 0),
                        e = d,
                        d = b.offsetParent),
                    f.offset.subtractsBorderForOverflowNotVisible && c.overflow !== "visible" && (l += parseFloat(c.borderTopWidth) || 0,
                        m += parseFloat(c.borderLeftWidth) || 0),
                    k = c
            }
            if (k.position === "relative" || k.position === "static")
                l += i.offsetTop,
                    m += i.offsetLeft;
            f.offset.supportsFixedPosition && k.position === "fixed" && (l += Math.max(h.scrollTop, i.scrollTop),
                m += Math.max(h.scrollLeft, i.scrollLeft));
            return {
                top: l,
                left: m
            }
        }
        ,
        f.offset = {
            initialize: function () {
                var a = c.body, b = c.createElement("div"), d, e, g, h, i = parseFloat(f.css(a, "marginTop")) || 0, j = "<div style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;'><div></div></div><table style='position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;' cellpadding='0' cellspacing='0'><tr><td></td></tr></table>";
                f.extend(b.style, {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    margin: 0,
                    border: 0,
                    width: "1px",
                    height: "1px",
                    visibility: "hidden"
                }),
                    b.innerHTML = j,
                    a.insertBefore(b, a.firstChild),
                    d = b.firstChild,
                    e = d.firstChild,
                    h = d.nextSibling.firstChild.firstChild,
                    this.doesNotAddBorder = e.offsetTop !== 5,
                    this.doesAddBorderForTableAndCells = h.offsetTop === 5,
                    e.style.position = "fixed",
                    e.style.top = "20px",
                    this.supportsFixedPosition = e.offsetTop === 20 || e.offsetTop === 15,
                    e.style.position = e.style.top = "",
                    d.style.overflow = "hidden",
                    d.style.position = "relative",
                    this.subtractsBorderForOverflowNotVisible = e.offsetTop === -5,
                    this.doesNotIncludeMarginInBodyOffset = a.offsetTop !== i,
                    a.removeChild(b),
                    f.offset.initialize = f.noop
            },
            bodyOffset: function (a) {
                var b = a.offsetTop
                    , c = a.offsetLeft;
                f.offset.initialize(),
                    f.offset.doesNotIncludeMarginInBodyOffset && (b += parseFloat(f.css(a, "marginTop")) || 0,
                        c += parseFloat(f.css(a, "marginLeft")) || 0);
                return {
                    top: b,
                    left: c
                }
            },
            setOffset: function (a, b, c) {
                var d = f.css(a, "position");
                d === "static" && (a.style.position = "relative");
                var e = f(a), g = e.offset(), h = f.css(a, "top"), i = f.css(a, "left"), j = (d === "absolute" || d === "fixed") && f.inArray("auto", [h, i]) > -1, k = {}, l = {}, m, n;
                j ? (l = e.position(),
                    m = l.top,
                    n = l.left) : (m = parseFloat(h) || 0,
                        n = parseFloat(i) || 0),
                    f.isFunction(b) && (b = b.call(a, c, g)),
                    b.top != null && (k.top = b.top - g.top + m),
                    b.left != null && (k.left = b.left - g.left + n),
                    "using" in b ? b.using.call(a, k) : e.css(k)
            }
        },
        f.fn.extend({
            position: function () {
                if (!this[0])
                    return null;
                var a = this[0]
                    , b = this.offsetParent()
                    , c = this.offset()
                    , d = cu.test(b[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : b.offset();
                c.top -= parseFloat(f.css(a, "marginTop")) || 0,
                    c.left -= parseFloat(f.css(a, "marginLeft")) || 0,
                    d.top += parseFloat(f.css(b[0], "borderTopWidth")) || 0,
                    d.left += parseFloat(f.css(b[0], "borderLeftWidth")) || 0;
                return {
                    top: c.top - d.top,
                    left: c.left - d.left
                }
            },
            offsetParent: function () {
                return this.map(function () {
                    var a = this.offsetParent || c.body;
                    while (a && !cu.test(a.nodeName) && f.css(a, "position") === "static")
                        a = a.offsetParent;
                    return a
                })
            }
        }),
        f.each(["Left", "Top"], function (a, c) {
            var d = "scroll" + c;
            f.fn[d] = function (c) {
                var e, g;
                if (c === b) {
                    e = this[0];
                    if (!e)
                        return null;
                    g = cv(e);
                    return g ? "pageXOffset" in g ? g[a ? "pageYOffset" : "pageXOffset"] : f.support.boxModel && g.document.documentElement[d] || g.document.body[d] : e[d]
                }
                return this.each(function () {
                    g = cv(this),
                        g ? g.scrollTo(a ? f(g).scrollLeft() : c, a ? c : f(g).scrollTop()) : this[d] = c
                })
            }
        }),
        f.each(["Height", "Width"], function (a, c) {
            var d = c.toLowerCase();
            f.fn["inner" + c] = function () {
                var a = this[0];
                return a && a.style ? parseFloat(f.css(a, d, "padding")) : null
            }
                ,
                f.fn["outer" + c] = function (a) {
                    var b = this[0];
                    return b && b.style ? parseFloat(f.css(b, d, a ? "margin" : "border")) : null
                }
                ,
                f.fn[d] = function (a) {
                    var e = this[0];
                    if (!e)
                        return a == null ? null : this;
                    if (f.isFunction(a))
                        return this.each(function (b) {
                            var c = f(this);
                            c[d](a.call(this, b, c[d]()))
                        });
                    if (f.isWindow(e)) {
                        var g = e.document.documentElement["client" + c];
                        return e.document.compatMode === "CSS1Compat" && g || e.document.body["client" + c] || g
                    }
                    if (e.nodeType === 9)
                        return Math.max(e.documentElement["client" + c], e.body["scroll" + c], e.documentElement["scroll" + c], e.body["offset" + c], e.documentElement["offset" + c]);
                    if (a === b) {
                        var h = f.css(e, d)
                            , i = parseFloat(h);
                        return f.isNaN(i) ? h : i
                    }
                    return this.css(d, typeof a == "string" ? a : a + "px")
                }
        }),
        a.jQuery = a.$ = f
}
)(window);
/*!
* jQuery UI 1.8.15
*
* Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://jquery.org/license
*
* http://docs.jquery.com/UI
*/
(function (c, j) {
    function k(a, b) {
        var d = a.nodeName.toLowerCase();
        if ("area" === d) {
            b = a.parentNode;
            d = b.name;
            if (!a.href || !d || b.nodeName.toLowerCase() !== "map")
                return false;
            a = c("img[usemap=#" + d + "]")[0];
            return !!a && l(a)
        }
        return (/input|select|textarea|button|object/.test(d) ? !a.disabled : "a" == d ? a.href || b : b) && l(a)
    }
    function l(a) {
        return !c(a).parents().andSelf().filter(function () {
            return c.curCSS(this, "visibility") === "hidden" || c.expr.filters.hidden(this)
        }).length
    }
    c.ui = c.ui || {};
    if (!c.ui.version) {
        c.extend(c.ui, {
            version: "1.8.15",
            keyCode: {
                ALT: 18,
                BACKSPACE: 8,
                CAPS_LOCK: 20,
                COMMA: 188,
                COMMAND: 91,
                COMMAND_LEFT: 91,
                COMMAND_RIGHT: 93,
                CONTROL: 17,
                DELETE: 46,
                DOWN: 40,
                END: 35,
                ENTER: 13,
                ESCAPE: 27,
                HOME: 36,
                INSERT: 45,
                LEFT: 37,
                MENU: 93,
                NUMPAD_ADD: 107,
                NUMPAD_DECIMAL: 110,
                NUMPAD_DIVIDE: 111,
                NUMPAD_ENTER: 108,
                NUMPAD_MULTIPLY: 106,
                NUMPAD_SUBTRACT: 109,
                PAGE_DOWN: 34,
                PAGE_UP: 33,
                PERIOD: 190,
                RIGHT: 39,
                SHIFT: 16,
                SPACE: 32,
                TAB: 9,
                UP: 38,
                WINDOWS: 91
            }
        });
        c.fn.extend({
            propAttr: c.fn.prop || c.fn.attr,
            _focus: c.fn.focus,
            focus: function (a, b) {
                return typeof a === "number" ? this.each(function () {
                    var d = this;
                    setTimeout(function () {
                        c(d).focus();
                        b && b.call(d)
                    }, a)
                }) : this._focus.apply(this, arguments)
            },
            scrollParent: function () {
                var a;
                a = c.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function () {
                    return /(relative|absolute|fixed)/.test(c.curCSS(this, "position", 1)) && /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0) : this.parents().filter(function () {
                    return /(auto|scroll)/.test(c.curCSS(this, "overflow", 1) + c.curCSS(this, "overflow-y", 1) + c.curCSS(this, "overflow-x", 1))
                }).eq(0);
                return /fixed/.test(this.css("position")) || !a.length ? c(document) : a
            },
            zIndex: function (a) {
                if (a !== j)
                    return this.css("zIndex", a);
                if (this.length) {
                    a = c(this[0]);
                    for (var b; a.length && a[0] !== document;) {
                        b = a.css("position");
                        if (b === "absolute" || b === "relative" || b === "fixed") {
                            b = parseInt(a.css("zIndex"), 10);
                            if (!isNaN(b) && b !== 0)
                                return b
                        }
                        a = a.parent()
                    }
                }
                return 0
            },
            disableSelection: function () {
                return this.bind((c.support.selectstart ? "selectstart" : "mousedown") + ".ui-disableSelection", function (a) {
                    a.preventDefault()
                })
            },
            enableSelection: function () {
                return this.unbind(".ui-disableSelection")
            }
        });
        c.each(["Width", "Height"], function (a, b) {
            function d(f, g, m, n) {
                c.each(e, function () {
                    g -= parseFloat(c.curCSS(f, "padding" + this, true)) || 0;
                    if (m)
                        g -= parseFloat(c.curCSS(f, "border" + this + "Width", true)) || 0;
                    if (n)
                        g -= parseFloat(c.curCSS(f, "margin" + this, true)) || 0
                });
                return g
            }
            var e = b === "Width" ? ["Left", "Right"] : ["Top", "Bottom"]
                , h = b.toLowerCase()
                , i = {
                    innerWidth: c.fn.innerWidth,
                    innerHeight: c.fn.innerHeight,
                    outerWidth: c.fn.outerWidth,
                    outerHeight: c.fn.outerHeight
                };
            c.fn["inner" + b] = function (f) {
                if (f === j)
                    return i["inner" + b].call(this);
                return this.each(function () {
                    c(this).css(h, d(this, f) + "px")
                })
            }
                ;
            c.fn["outer" + b] = function (f, g) {
                if (typeof f !== "number")
                    return i["outer" + b].call(this, f);
                return this.each(function () {
                    c(this).css(h, d(this, f, true, g) + "px")
                })
            }
        });
        c.extend(c.expr[":"], {
            data: function (a, b, d) {
                return !!c.data(a, d[3])
            },
            focusable: function (a) {
                return k(a, !isNaN(c.attr(a, "tabindex")))
            },
            tabbable: function (a) {
                var b = c.attr(a, "tabindex")
                    , d = isNaN(b);
                return (d || b >= 0) && k(a, !d)
            }
        });
        c(function () {
            var a = document.body
                , b = a.appendChild(b = document.createElement("div"));
            c.extend(b.style, {
                minHeight: "100px",
                height: "auto",
                padding: 0,
                borderWidth: 0
            });
            c.support.minHeight = b.offsetHeight === 100;
            c.support.selectstart = "onselectstart" in b;
            a.removeChild(b).style.display = "none"
        });
        c.extend(c.ui, {
            plugin: {
                add: function (a, b, d) {
                    a = c.ui[a].prototype;
                    for (var e in d) {
                        a.plugins[e] = a.plugins[e] || [];
                        a.plugins[e].push([b, d[e]])
                    }
                },
                call: function (a, b, d) {
                    if ((b = a.plugins[b]) && a.element[0].parentNode)
                        for (var e = 0; e < b.length; e++)
                            a.options[b[e][0]] && b[e][1].apply(a.element, d)
                }
            },
            contains: function (a, b) {
                return document.compareDocumentPosition ? a.compareDocumentPosition(b) & 16 : a !== b && a.contains(b)
            },
            hasScroll: function (a, b) {
                if (c(a).css("overflow") === "hidden")
                    return false;
                b = b && b === "left" ? "scrollLeft" : "scrollTop";
                var d = false;
                if (a[b] > 0)
                    return true;
                a[b] = 1;
                d = a[b] > 0;
                a[b] = 0;
                return d
            },
            isOverAxis: function (a, b, d) {
                return a > b && a < b + d
            },
            isOver: function (a, b, d, e, h, i) {
                return c.ui.isOverAxis(a, d, h) && c.ui.isOverAxis(b, e, i)
            }
        })
    }
}
)(jQuery);
;/*!
 * jQuery UI Widget 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function (b, j) {
    if (b.cleanData) {
        var k = b.cleanData;
        b.cleanData = function (a) {
            for (var c = 0, d; (d = a[c]) != null; c++)
                b(d).triggerHandler("remove");
            k(a)
        }
    } else {
        var l = b.fn.remove;
        b.fn.remove = function (a, c) {
            return this.each(function () {
                if (!c)
                    if (!a || b.filter(a, [this]).length)
                        b("*", this).add([this]).each(function () {
                            b(this).triggerHandler("remove")
                        });
                return l.call(b(this), a, c)
            })
        }
    }
    b.widget = function (a, c, d) {
        var e = a.split(".")[0], f;
        a = a.split(".")[1];
        f = e + "-" + a;
        if (!d) {
            d = c;
            c = b.Widget
        }
        b.expr[":"][f] = function (h) {
            return !!b.data(h, a)
        }
            ;
        b[e] = b[e] || {};
        b[e][a] = function (h, g) {
            arguments.length && this._createWidget(h, g)
        }
            ;
        c = new c;
        c.options = b.extend(true, {}, c.options);
        b[e][a].prototype = b.extend(true, c, {
            namespace: e,
            widgetName: a,
            widgetEventPrefix: b[e][a].prototype.widgetEventPrefix || a,
            widgetBaseClass: f
        }, d);
        b.widget.bridge(a, b[e][a])
    }
        ;
    b.widget.bridge = function (a, c) {
        b.fn[a] = function (d) {
            var e = typeof d === "string"
                , f = Array.prototype.slice.call(arguments, 1)
                , h = this;
            d = !e && f.length ? b.extend.apply(null, [true, d].concat(f)) : d;
            if (e && d.charAt(0) === "_")
                return h;
            e ? this.each(function () {
                var g = b.data(this, a)
                    , i = g && b.isFunction(g[d]) ? g[d].apply(g, f) : g;
                if (i !== g && i !== j) {
                    h = i;
                    return false
                }
            }) : this.each(function () {
                var g = b.data(this, a);
                g ? g.option(d || {})._init() : b.data(this, a, new c(d, this))
            });
            return h
        }
    }
        ;
    b.Widget = function (a, c) {
        arguments.length && this._createWidget(a, c)
    }
        ;
    b.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: false
        },
        _createWidget: function (a, c) {
            b.data(c, this.widgetName, this);
            this.element = b(c);
            this.options = b.extend(true, {}, this.options, this._getCreateOptions(), a);
            var d = this;
            this.element.bind("remove." + this.widgetName, function () {
                d.destroy()
            });
            this._create();
            this._trigger("create");
            this._init()
        },
        _getCreateOptions: function () {
            return b.metadata && b.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function () { },
        _init: function () { },
        destroy: function () {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName);
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function () {
            return this.element
        },
        option: function (a, c) {
            var d = a;
            if (arguments.length === 0)
                return b.extend({}, this.options);
            if (typeof a === "string") {
                if (c === j)
                    return this.options[a];
                d = {};
                d[a] = c
            }
            this._setOptions(d);
            return this
        },
        _setOptions: function (a) {
            var c = this;
            b.each(a, function (d, e) {
                c._setOption(d, e)
            });
            return this
        },
        _setOption: function (a, c) {
            this.options[a] = c;
            if (a === "disabled")
                this.widget()[c ? "addClass" : "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", c);
            return this
        },
        enable: function () {
            return this._setOption("disabled", false)
        },
        disable: function () {
            return this._setOption("disabled", true)
        },
        _trigger: function (a, c, d) {
            var e = this.options[a];
            c = b.Event(c);
            c.type = (a === this.widgetEventPrefix ? a : this.widgetEventPrefix + a).toLowerCase();
            d = d || {};
            if (c.originalEvent) {
                a = b.event.props.length;
                for (var f; a;) {
                    f = b.event.props[--a];
                    c[f] = c.originalEvent[f]
                }
            }
            this.element.trigger(c, d);
            return !(b.isFunction(e) && e.call(this.element[0], c, d) === false || c.isDefaultPrevented())
        }
    }
}
)(jQuery);
;/*!
 * jQuery UI Mouse 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function (b) {
    b.widget("ui.mouse", {
        options: {
            cancel: ":input,option",
            distance: 1,
            delay: 0
        },
        _mouseInit: function () {
            var a = this;
            this.element.bind("mousedown." + this.widgetName, function (c) {
                return a._mouseDown(c)
            }).bind("click." + this.widgetName, function (c) {
                if (true === b.data(c.target, a.widgetName + ".preventClickEvent")) {
                    b.removeData(c.target, a.widgetName + ".preventClickEvent");
                    c.stopImmediatePropagation();
                    return false
                }
            });
            this.started = false
        },
        _mouseDestroy: function () {
            this.element.unbind("." + this.widgetName)
        },
        _mouseDown: function (a) {
            a.originalEvent = a.originalEvent || {};
            if (!a.originalEvent.mouseHandled) {
                this._mouseStarted && this._mouseUp(a);
                this._mouseDownEvent = a;
                var c = this
                    , e = a.which == 1
                    , f = typeof this.options.cancel == "string" ? b(a.target).closest(this.options.cancel).length : false;
                if (!e || f || !this._mouseCapture(a))
                    return true;
                this.mouseDelayMet = !this.options.delay;
                if (!this.mouseDelayMet)
                    this._mouseDelayTimer = setTimeout(function () {
                        c.mouseDelayMet = true
                    }, this.options.delay);
                if (this._mouseDistanceMet(a) && this._mouseDelayMet(a)) {
                    this._mouseStarted = this._mouseStart(a) !== false;
                    if (!this._mouseStarted) {
                        a.preventDefault();
                        return true
                    }
                }
                true === b.data(a.target, this.widgetName + ".preventClickEvent") && b.removeData(a.target, this.widgetName + ".preventClickEvent");
                this._mouseMoveDelegate = function (d) {
                    return c._mouseMove(d)
                }
                    ;
                this._mouseUpDelegate = function (d) {
                    return c._mouseUp(d)
                }
                    ;
                b(document).bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate);
                a.preventDefault();
                return a.originalEvent.mouseHandled = true
            }
        },
        _mouseMove: function (a) {
            if (b.browser.msie && !(document.documentMode >= 9) && !a.button)
                return this._mouseUp(a);
            if (this._mouseStarted) {
                this._mouseDrag(a);
                return a.preventDefault()
            }
            if (this._mouseDistanceMet(a) && this._mouseDelayMet(a))
                (this._mouseStarted = this._mouseStart(this._mouseDownEvent, a) !== false) ? this._mouseDrag(a) : this._mouseUp(a);
            return !this._mouseStarted
        },
        _mouseUp: function (a) {
            b(document).unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate);
            if (this._mouseStarted) {
                this._mouseStarted = false;
                a.target == this._mouseDownEvent.target && b.data(a.target, this.widgetName + ".preventClickEvent", true);
                this._mouseStop(a)
            }
            return false
        },
        _mouseDistanceMet: function (a) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - a.pageX), Math.abs(this._mouseDownEvent.pageY - a.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () { },
        _mouseDrag: function () { },
        _mouseStop: function () { },
        _mouseCapture: function () {
            return true
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Position 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function (c) {
    c.ui = c.ui || {};
    var n = /left|center|right/
        , o = /top|center|bottom/
        , t = c.fn.position
        , u = c.fn.offset;
    c.fn.position = function (b) {
        if (!b || !b.of)
            return t.apply(this, arguments);
        b = c.extend({}, b);
        var a = c(b.of), d = a[0], g = (b.collision || "flip").split(" "), e = b.offset ? b.offset.split(" ") : [0, 0], h, k, j;
        if (d.nodeType === 9) {
            h = a.width();
            k = a.height();
            j = {
                top: 0,
                left: 0
            }
        } else if (d.setTimeout) {
            h = a.width();
            k = a.height();
            j = {
                top: a.scrollTop(),
                left: a.scrollLeft()
            }
        } else if (d.preventDefault) {
            b.at = "left top";
            h = k = 0;
            j = {
                top: b.of.pageY,
                left: b.of.pageX
            }
        } else {
            h = a.outerWidth();
            k = a.outerHeight();
            j = a.offset()
        }
        c.each(["my", "at"], function () {
            var f = (b[this] || "").split(" ");
            if (f.length === 1)
                f = n.test(f[0]) ? f.concat(["center"]) : o.test(f[0]) ? ["center"].concat(f) : ["center", "center"];
            f[0] = n.test(f[0]) ? f[0] : "center";
            f[1] = o.test(f[1]) ? f[1] : "center";
            b[this] = f
        });
        if (g.length === 1)
            g[1] = g[0];
        e[0] = parseInt(e[0], 10) || 0;
        if (e.length === 1)
            e[1] = e[0];
        e[1] = parseInt(e[1], 10) || 0;
        if (b.at[0] === "right")
            j.left += h;
        else if (b.at[0] === "center")
            j.left += h / 2;
        if (b.at[1] === "bottom")
            j.top += k;
        else if (b.at[1] === "center")
            j.top += k / 2;
        j.left += e[0];
        j.top += e[1];
        return this.each(function () {
            var f = c(this), l = f.outerWidth(), m = f.outerHeight(), p = parseInt(c.curCSS(this, "marginLeft", true)) || 0, q = parseInt(c.curCSS(this, "marginTop", true)) || 0, v = l + p + (parseInt(c.curCSS(this, "marginRight", true)) || 0), w = m + q + (parseInt(c.curCSS(this, "marginBottom", true)) || 0), i = c.extend({}, j), r;
            if (b.my[0] === "right")
                i.left -= l;
            else if (b.my[0] === "center")
                i.left -= l / 2;
            if (b.my[1] === "bottom")
                i.top -= m;
            else if (b.my[1] === "center")
                i.top -= m / 2;
            i.left = Math.round(i.left);
            i.top = Math.round(i.top);
            r = {
                left: i.left - p,
                top: i.top - q
            };
            c.each(["left", "top"], function (s, x) {
                c.ui.position[g[s]] && c.ui.position[g[s]][x](i, {
                    targetWidth: h,
                    targetHeight: k,
                    elemWidth: l,
                    elemHeight: m,
                    collisionPosition: r,
                    collisionWidth: v,
                    collisionHeight: w,
                    offset: e,
                    my: b.my,
                    at: b.at
                })
            });
            c.fn.bgiframe && f.bgiframe();
            f.offset(c.extend(i, {
                using: b.using
            }))
        })
    }
        ;
    c.ui.position = {
        fit: {
            left: function (b, a) {
                var d = c(window);
                d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                b.left = d > 0 ? b.left - d : Math.max(b.left - a.collisionPosition.left, b.left)
            },
            top: function (b, a) {
                var d = c(window);
                d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                b.top = d > 0 ? b.top - d : Math.max(b.top - a.collisionPosition.top, b.top)
            }
        },
        flip: {
            left: function (b, a) {
                if (a.at[0] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.left + a.collisionWidth - d.width() - d.scrollLeft();
                    var g = a.my[0] === "left" ? -a.elemWidth : a.my[0] === "right" ? a.elemWidth : 0
                        , e = a.at[0] === "left" ? a.targetWidth : -a.targetWidth
                        , h = -2 * a.offset[0];
                    b.left += a.collisionPosition.left < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            },
            top: function (b, a) {
                if (a.at[1] !== "center") {
                    var d = c(window);
                    d = a.collisionPosition.top + a.collisionHeight - d.height() - d.scrollTop();
                    var g = a.my[1] === "top" ? -a.elemHeight : a.my[1] === "bottom" ? a.elemHeight : 0
                        , e = a.at[1] === "top" ? a.targetHeight : -a.targetHeight
                        , h = -2 * a.offset[1];
                    b.top += a.collisionPosition.top < 0 ? g + e + h : d > 0 ? g + e + h : 0
                }
            }
        }
    };
    if (!c.offset.setOffset) {
        c.offset.setOffset = function (b, a) {
            if (/static/.test(c.curCSS(b, "position")))
                b.style.position = "relative";
            var d = c(b)
                , g = d.offset()
                , e = parseInt(c.curCSS(b, "top", true), 10) || 0
                , h = parseInt(c.curCSS(b, "left", true), 10) || 0;
            g = {
                top: a.top - g.top + e,
                left: a.left - g.left + h
            };
            "using" in a ? a.using.call(b, g) : d.css(g)
        }
            ;
        c.fn.offset = function (b) {
            var a = this[0];
            if (!a || !a.ownerDocument)
                return null;
            if (b)
                return this.each(function () {
                    c.offset.setOffset(this, b)
                });
            return u.call(this)
        }
    }
}
)(jQuery);
;/*
 * jQuery UI Draggable 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.draggable", d.ui.mouse, {
        widgetEventPrefix: "drag",
        options: {
            addClasses: true,
            appendTo: "parent",
            axis: false,
            connectToSortable: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            grid: false,
            handle: false,
            helper: "original",
            iframeFix: false,
            opacity: false,
            refreshPositions: false,
            revert: false,
            revertDuration: 500,
            scope: "default",
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: false,
            snapMode: "both",
            snapTolerance: 20,
            stack: false,
            zIndex: false
        },
        _create: function () {
            if (this.options.helper == "original" && !/^(?:r|a|f)/.test(this.element.css("position")))
                this.element[0].style.position = "relative";
            this.options.addClasses && this.element.addClass("ui-draggable");
            this.options.disabled && this.element.addClass("ui-draggable-disabled");
            this._mouseInit()
        },
        destroy: function () {
            if (this.element.data("draggable")) {
                this.element.removeData("draggable").unbind(".draggable").removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled");
                this._mouseDestroy();
                return this
            }
        },
        _mouseCapture: function (a) {
            var b = this.options;
            if (this.helper || b.disabled || d(a.target).is(".ui-resizable-handle"))
                return false;
            this.handle = this._getHandle(a);
            if (!this.handle)
                return false;
            d(b.iframeFix === true ? "iframe" : b.iframeFix).each(function () {
                d('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>').css({
                    width: this.offsetWidth + "px",
                    height: this.offsetHeight + "px",
                    position: "absolute",
                    opacity: "0.001",
                    zIndex: 1E3
                }).css(d(this).offset()).appendTo("body")
            });
            return true
        },
        _mouseStart: function (a) {
            var b = this.options;
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            if (d.ui.ddmanager)
                d.ui.ddmanager.current = this;
            this._cacheMargins();
            this.cssPosition = this.helper.css("position");
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.positionAbs = this.element.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this.position = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            b.containment && this._setContainment();
            if (this._trigger("start", a) === false) {
                this._clear();
                return false
            }
            this._cacheHelperProportions();
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.helper.addClass("ui-draggable-dragging");
            this._mouseDrag(a, true);
            d.ui.ddmanager && d.ui.ddmanager.dragStart(this, a);
            return true
        },
        _mouseDrag: function (a, b) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!b) {
                b = this._uiHash();
                if (this._trigger("drag", a, b) === false) {
                    this._mouseUp({});
                    return false
                }
                this.position = b.position
            }
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            return false
        },
        _mouseStop: function (a) {
            var b = false;
            if (d.ui.ddmanager && !this.options.dropBehaviour)
                b = d.ui.ddmanager.drop(this, a);
            if (this.dropped) {
                b = this.dropped;
                this.dropped = false
            }
            if ((!this.element[0] || !this.element[0].parentNode) && this.options.helper == "original")
                return false;
            if (this.options.revert == "invalid" && !b || this.options.revert == "valid" && b || this.options.revert === true || d.isFunction(this.options.revert) && this.options.revert.call(this.element, b)) {
                var c = this;
                d(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                    c._trigger("stop", a) !== false && c._clear()
                })
            } else
                this._trigger("stop", a) !== false && this._clear();
            return false
        },
        _mouseUp: function (a) {
            this.options.iframeFix === true && d("div.ui-draggable-iframeFix").each(function () {
                this.parentNode.removeChild(this)
            });
            d.ui.ddmanager && d.ui.ddmanager.dragStop(this, a);
            return d.ui.mouse.prototype._mouseUp.call(this, a)
        },
        cancel: function () {
            this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear();
            return this
        },
        _getHandle: function (a) {
            var b = !this.options.handle || !d(this.options.handle, this.element).length ? true : false;
            d(this.options.handle, this.element).find("*").andSelf().each(function () {
                if (this == a.target)
                    b = true
            });
            return b
        },
        _createHelper: function (a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a])) : b.helper == "clone" ? this.element.clone().removeAttr("id") : this.element;
            a.parents("body").length || a.appendTo(b.appendTo == "parent" ? this.element[0].parentNode : b.appendTo);
            a[0] != this.element[0] && !/(fixed|absolute)/.test(a.css("position")) && a.css("position", "absolute");
            return a
        },
        _adjustOffsetFromHelper: function (a) {
            if (typeof a == "string")
                a = a.split(" ");
            if (d.isArray(a))
                a = {
                    left: +a[0],
                    top: +a[1] || 0
                };
            if ("left" in a)
                this.offset.click.left = a.left + this.margins.left;
            if ("right" in a)
                this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top" in a)
                this.offset.click.top = a.top + this.margins.top;
            if ("bottom" in a)
                this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie)
                a = {
                    top: 0,
                    left: 0
                };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var a = this.element.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else
                return {
                    top: 0,
                    left: 0
                }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var a = this.options;
            if (a.containment == "parent")
                a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window")
                this.containment = [a.containment == "document" ? 0 : d(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, a.containment == "document" ? 0 : d(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, (a.containment == "document" ? 0 : d(window).scrollLeft()) + d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (a.containment == "document" ? 0 : d(window).scrollTop()) + (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment) && a.containment.constructor != Array) {
                a = d(a.containment);
                var b = a[0];
                if (b) {
                    a.offset();
                    var c = d(b).css("overflow") != "hidden";
                    this.containment = [(parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0), (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0), (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom];
                    this.relative_container = a
                }
            } else if (a.containment.constructor == Array)
                this.containment = a.containment
        },
        _convertPositionTo: function (a, b) {
            if (!b)
                b = this.position;
            a = a == "absolute" ? 1 : -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
                , f = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft()) * a)
            }
        },
        _generatePosition: function (a) {
            var b = this.options
                , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
                , f = /(html|body)/i.test(c[0].tagName)
                , e = a.pageX
                , h = a.pageY;
            if (this.originalPosition) {
                var g;
                if (this.containment) {
                    if (this.relative_container) {
                        g = this.relative_container.offset();
                        g = [this.containment[0] + g.left, this.containment[1] + g.top, this.containment[2] + g.left, this.containment[3] + g.top]
                    } else
                        g = this.containment;
                    if (a.pageX - this.offset.click.left < g[0])
                        e = g[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < g[1])
                        h = g[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > g[2])
                        e = g[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > g[3])
                        h = g[3] + this.offset.click.top
                }
                if (b.grid) {
                    h = b.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / b.grid[1]) * b.grid[1] : this.originalPageY;
                    h = g ? !(h - this.offset.click.top < g[1] || h - this.offset.click.top > g[3]) ? h : !(h - this.offset.click.top < g[1]) ? h - b.grid[1] : h + b.grid[1] : h;
                    e = b.grid[0] ? this.originalPageX + Math.round((e - this.originalPageX) / b.grid[0]) * b.grid[0] : this.originalPageX;
                    e = g ? !(e - this.offset.click.left < g[0] || e - this.offset.click.left > g[2]) ? e : !(e - this.offset.click.left < g[0]) ? e - b.grid[0] : e + b.grid[0] : e
                }
            }
            return {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : f ? 0 : c.scrollTop()),
                left: e - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && d.browser.version < 526 && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : f ? 0 : c.scrollLeft())
            }
        },
        _clear: function () {
            this.helper.removeClass("ui-draggable-dragging");
            this.helper[0] != this.element[0] && !this.cancelHelperRemoval && this.helper.remove();
            this.helper = null;
            this.cancelHelperRemoval = false
        },
        _trigger: function (a, b, c) {
            c = c || this._uiHash();
            d.ui.plugin.call(this, a, [b, c]);
            if (a == "drag")
                this.positionAbs = this._convertPositionTo("absolute");
            return d.Widget.prototype._trigger.call(this, a, b, c)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    });
    d.extend(d.ui.draggable, {
        version: "1.8.15"
    });
    d.ui.plugin.add("draggable", "connectToSortable", {
        start: function (a, b) {
            var c = d(this).data("draggable")
                , f = c.options
                , e = d.extend({}, b, {
                    item: c.element
                });
            c.sortables = [];
            d(f.connectToSortable).each(function () {
                var h = d.data(this, "sortable");
                if (h && !h.options.disabled) {
                    c.sortables.push({
                        instance: h,
                        shouldRevert: h.options.revert
                    });
                    h.refreshPositions();
                    h._trigger("activate", a, e)
                }
            })
        },
        stop: function (a, b) {
            var c = d(this).data("draggable")
                , f = d.extend({}, b, {
                    item: c.element
                });
            d.each(c.sortables, function () {
                if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    c.cancelHelperRemoval = true;
                    this.instance.cancelHelperRemoval = false;
                    if (this.shouldRevert)
                        this.instance.options.revert = true;
                    this.instance._mouseStop(a);
                    this.instance.options.helper = this.instance.options._helper;
                    c.options.helper == "original" && this.instance.currentItem.css({
                        top: "auto",
                        left: "auto"
                    })
                } else {
                    this.instance.cancelHelperRemoval = false;
                    this.instance._trigger("deactivate", a, f)
                }
            })
        },
        drag: function (a, b) {
            var c = d(this).data("draggable")
                , f = this;
            d.each(c.sortables, function () {
                this.instance.positionAbs = c.positionAbs;
                this.instance.helperProportions = c.helperProportions;
                this.instance.offset.click = c.offset.click;
                if (this.instance._intersectsWith(this.instance.containerCache)) {
                    if (!this.instance.isOver) {
                        this.instance.isOver = 1;
                        this.instance.currentItem = d(f).clone().removeAttr("id").appendTo(this.instance.element).data("sortable-item", true);
                        this.instance.options._helper = this.instance.options.helper;
                        this.instance.options.helper = function () {
                            return b.helper[0]
                        }
                            ;
                        a.target = this.instance.currentItem[0];
                        this.instance._mouseCapture(a, true);
                        this.instance._mouseStart(a, true, true);
                        this.instance.offset.click.top = c.offset.click.top;
                        this.instance.offset.click.left = c.offset.click.left;
                        this.instance.offset.parent.left -= c.offset.parent.left - this.instance.offset.parent.left;
                        this.instance.offset.parent.top -= c.offset.parent.top - this.instance.offset.parent.top;
                        c._trigger("toSortable", a);
                        c.dropped = this.instance.element;
                        c.currentItem = c.element;
                        this.instance.fromOutside = c
                    }
                    this.instance.currentItem && this.instance._mouseDrag(a)
                } else if (this.instance.isOver) {
                    this.instance.isOver = 0;
                    this.instance.cancelHelperRemoval = true;
                    this.instance.options.revert = false;
                    this.instance._trigger("out", a, this.instance._uiHash(this.instance));
                    this.instance._mouseStop(a, true);
                    this.instance.options.helper = this.instance.options._helper;
                    this.instance.currentItem.remove();
                    this.instance.placeholder && this.instance.placeholder.remove();
                    c._trigger("fromSortable", a);
                    c.dropped = false
                }
            })
        }
    });
    d.ui.plugin.add("draggable", "cursor", {
        start: function () {
            var a = d("body")
                , b = d(this).data("draggable").options;
            if (a.css("cursor"))
                b._cursor = a.css("cursor");
            a.css("cursor", b.cursor)
        },
        stop: function () {
            var a = d(this).data("draggable").options;
            a._cursor && d("body").css("cursor", a._cursor)
        }
    });
    d.ui.plugin.add("draggable", "opacity", {
        start: function (a, b) {
            a = d(b.helper);
            b = d(this).data("draggable").options;
            if (a.css("opacity"))
                b._opacity = a.css("opacity");
            a.css("opacity", b.opacity)
        },
        stop: function (a, b) {
            a = d(this).data("draggable").options;
            a._opacity && d(b.helper).css("opacity", a._opacity)
        }
    });
    d.ui.plugin.add("draggable", "scroll", {
        start: function () {
            var a = d(this).data("draggable");
            if (a.scrollParent[0] != document && a.scrollParent[0].tagName != "HTML")
                a.overflowOffset = a.scrollParent.offset()
        },
        drag: function (a) {
            var b = d(this).data("draggable")
                , c = b.options
                , f = false;
            if (b.scrollParent[0] != document && b.scrollParent[0].tagName != "HTML") {
                if (!c.axis || c.axis != "x")
                    if (b.overflowOffset.top + b.scrollParent[0].offsetHeight - a.pageY < c.scrollSensitivity)
                        b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop + c.scrollSpeed;
                    else if (a.pageY - b.overflowOffset.top < c.scrollSensitivity)
                        b.scrollParent[0].scrollTop = f = b.scrollParent[0].scrollTop - c.scrollSpeed;
                if (!c.axis || c.axis != "y")
                    if (b.overflowOffset.left + b.scrollParent[0].offsetWidth - a.pageX < c.scrollSensitivity)
                        b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft + c.scrollSpeed;
                    else if (a.pageX - b.overflowOffset.left < c.scrollSensitivity)
                        b.scrollParent[0].scrollLeft = f = b.scrollParent[0].scrollLeft - c.scrollSpeed
            } else {
                if (!c.axis || c.axis != "x")
                    if (a.pageY - d(document).scrollTop() < c.scrollSensitivity)
                        f = d(document).scrollTop(d(document).scrollTop() - c.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < c.scrollSensitivity)
                        f = d(document).scrollTop(d(document).scrollTop() + c.scrollSpeed);
                if (!c.axis || c.axis != "y")
                    if (a.pageX - d(document).scrollLeft() < c.scrollSensitivity)
                        f = d(document).scrollLeft(d(document).scrollLeft() - c.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < c.scrollSensitivity)
                        f = d(document).scrollLeft(d(document).scrollLeft() + c.scrollSpeed)
            }
            f !== false && d.ui.ddmanager && !c.dropBehaviour && d.ui.ddmanager.prepareOffsets(b, a)
        }
    });
    d.ui.plugin.add("draggable", "snap", {
        start: function () {
            var a = d(this).data("draggable")
                , b = a.options;
            a.snapElements = [];
            d(b.snap.constructor != String ? b.snap.items || ":data(draggable)" : b.snap).each(function () {
                var c = d(this)
                    , f = c.offset();
                this != a.element[0] && a.snapElements.push({
                    item: this,
                    width: c.outerWidth(),
                    height: c.outerHeight(),
                    top: f.top,
                    left: f.left
                })
            })
        },
        drag: function (a, b) {
            for (var c = d(this).data("draggable"), f = c.options, e = f.snapTolerance, h = b.offset.left, g = h + c.helperProportions.width, n = b.offset.top, o = n + c.helperProportions.height, i = c.snapElements.length - 1; i >= 0; i--) {
                var j = c.snapElements[i].left
                    , l = j + c.snapElements[i].width
                    , k = c.snapElements[i].top
                    , m = k + c.snapElements[i].height;
                if (j - e < h && h < l + e && k - e < n && n < m + e || j - e < h && h < l + e && k - e < o && o < m + e || j - e < g && g < l + e && k - e < n && n < m + e || j - e < g && g < l + e && k - e < o && o < m + e) {
                    if (f.snapMode != "inner") {
                        var p = Math.abs(k - o) <= e
                            , q = Math.abs(m - n) <= e
                            , r = Math.abs(j - g) <= e
                            , s = Math.abs(l - h) <= e;
                        if (p)
                            b.position.top = c._convertPositionTo("relative", {
                                top: k - c.helperProportions.height,
                                left: 0
                            }).top - c.margins.top;
                        if (q)
                            b.position.top = c._convertPositionTo("relative", {
                                top: m,
                                left: 0
                            }).top - c.margins.top;
                        if (r)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: j - c.helperProportions.width
                            }).left - c.margins.left;
                        if (s)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: l
                            }).left - c.margins.left
                    }
                    var t = p || q || r || s;
                    if (f.snapMode != "outer") {
                        p = Math.abs(k - n) <= e;
                        q = Math.abs(m - o) <= e;
                        r = Math.abs(j - h) <= e;
                        s = Math.abs(l - g) <= e;
                        if (p)
                            b.position.top = c._convertPositionTo("relative", {
                                top: k,
                                left: 0
                            }).top - c.margins.top;
                        if (q)
                            b.position.top = c._convertPositionTo("relative", {
                                top: m - c.helperProportions.height,
                                left: 0
                            }).top - c.margins.top;
                        if (r)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: j
                            }).left - c.margins.left;
                        if (s)
                            b.position.left = c._convertPositionTo("relative", {
                                top: 0,
                                left: l - c.helperProportions.width
                            }).left - c.margins.left
                    }
                    if (!c.snapElements[i].snapping && (p || q || r || s || t))
                        c.options.snap.snap && c.options.snap.snap.call(c.element, a, d.extend(c._uiHash(), {
                            snapItem: c.snapElements[i].item
                        }));
                    c.snapElements[i].snapping = p || q || r || s || t
                } else {
                    c.snapElements[i].snapping && c.options.snap.release && c.options.snap.release.call(c.element, a, d.extend(c._uiHash(), {
                        snapItem: c.snapElements[i].item
                    }));
                    c.snapElements[i].snapping = false
                }
            }
        }
    });
    d.ui.plugin.add("draggable", "stack", {
        start: function () {
            var a = d(this).data("draggable").options;
            a = d.makeArray(d(a.stack)).sort(function (c, f) {
                return (parseInt(d(c).css("zIndex"), 10) || 0) - (parseInt(d(f).css("zIndex"), 10) || 0)
            });
            if (a.length) {
                var b = parseInt(a[0].style.zIndex) || 0;
                d(a).each(function (c) {
                    this.style.zIndex = b + c
                });
                this[0].style.zIndex = b + a.length
            }
        }
    });
    d.ui.plugin.add("draggable", "zIndex", {
        start: function (a, b) {
            a = d(b.helper);
            b = d(this).data("draggable").options;
            if (a.css("zIndex"))
                b._zIndex = a.css("zIndex");
            a.css("zIndex", b.zIndex)
        },
        stop: function (a, b) {
            a = d(this).data("draggable").options;
            a._zIndex && d(b.helper).css("zIndex", a._zIndex)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Droppable 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function (d) {
    d.widget("ui.droppable", {
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            activeClass: false,
            addClasses: true,
            greedy: false,
            hoverClass: false,
            scope: "default",
            tolerance: "intersect"
        },
        _create: function () {
            var a = this.options
                , b = a.accept;
            this.isover = 0;
            this.isout = 1;
            this.accept = d.isFunction(b) ? b : function (c) {
                return c.is(b)
            }
                ;
            this.proportions = {
                width: this.element[0].offsetWidth,
                height: this.element[0].offsetHeight
            };
            d.ui.ddmanager.droppables[a.scope] = d.ui.ddmanager.droppables[a.scope] || [];
            d.ui.ddmanager.droppables[a.scope].push(this);
            a.addClasses && this.element.addClass("ui-droppable")
        },
        destroy: function () {
            for (var a = d.ui.ddmanager.droppables[this.options.scope], b = 0; b < a.length; b++)
                a[b] == this && a.splice(b, 1);
            this.element.removeClass("ui-droppable ui-droppable-disabled").removeData("droppable").unbind(".droppable");
            return this
        },
        _setOption: function (a, b) {
            if (a == "accept")
                this.accept = d.isFunction(b) ? b : function (c) {
                    return c.is(b)
                }
                    ;
            d.Widget.prototype._setOption.apply(this, arguments)
        },
        _activate: function (a) {
            var b = d.ui.ddmanager.current;
            this.options.activeClass && this.element.addClass(this.options.activeClass);
            b && this._trigger("activate", a, this.ui(b))
        },
        _deactivate: function (a) {
            var b = d.ui.ddmanager.current;
            this.options.activeClass && this.element.removeClass(this.options.activeClass);
            b && this._trigger("deactivate", a, this.ui(b))
        },
        _over: function (a) {
            var b = d.ui.ddmanager.current;
            if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
                if (this.accept.call(this.element[0], b.currentItem || b.element)) {
                    this.options.hoverClass && this.element.addClass(this.options.hoverClass);
                    this._trigger("over", a, this.ui(b))
                }
        },
        _out: function (a) {
            var b = d.ui.ddmanager.current;
            if (!(!b || (b.currentItem || b.element)[0] == this.element[0]))
                if (this.accept.call(this.element[0], b.currentItem || b.element)) {
                    this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                    this._trigger("out", a, this.ui(b))
                }
        },
        _drop: function (a, b) {
            var c = b || d.ui.ddmanager.current;
            if (!c || (c.currentItem || c.element)[0] == this.element[0])
                return false;
            var e = false;
            this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function () {
                var g = d.data(this, "droppable");
                if (g.options.greedy && !g.options.disabled && g.options.scope == c.options.scope && g.accept.call(g.element[0], c.currentItem || c.element) && d.ui.intersect(c, d.extend(g, {
                    offset: g.element.offset()
                }), g.options.tolerance)) {
                    e = true;
                    return false
                }
            });
            if (e)
                return false;
            if (this.accept.call(this.element[0], c.currentItem || c.element)) {
                this.options.activeClass && this.element.removeClass(this.options.activeClass);
                this.options.hoverClass && this.element.removeClass(this.options.hoverClass);
                this._trigger("drop", a, this.ui(c));
                return this.element
            }
            return false
        },
        ui: function (a) {
            return {
                draggable: a.currentItem || a.element,
                helper: a.helper,
                position: a.position,
                offset: a.positionAbs
            }
        }
    });
    d.extend(d.ui.droppable, {
        version: "1.8.15"
    });
    d.ui.intersect = function (a, b, c) {
        if (!b.offset)
            return false;
        var e = (a.positionAbs || a.position.absolute).left
            , g = e + a.helperProportions.width
            , f = (a.positionAbs || a.position.absolute).top
            , h = f + a.helperProportions.height
            , i = b.offset.left
            , k = i + b.proportions.width
            , j = b.offset.top
            , l = j + b.proportions.height;
        switch (c) {
            case "fit":
                return i <= e && g <= k && j <= f && h <= l;
            case "intersect":
                return i < e + a.helperProportions.width / 2 && g - a.helperProportions.width / 2 < k && j < f + a.helperProportions.height / 2 && h - a.helperProportions.height / 2 < l;
            case "pointer":
                return d.ui.isOver((a.positionAbs || a.position.absolute).top + (a.clickOffset || a.offset.click).top, (a.positionAbs || a.position.absolute).left + (a.clickOffset || a.offset.click).left, j, i, b.proportions.height, b.proportions.width);
            case "touch":
                return (f >= j && f <= l || h >= j && h <= l || f < j && h > l) && (e >= i && e <= k || g >= i && g <= k || e < i && g > k);
            default:
                return false
        }
    }
        ;
    d.ui.ddmanager = {
        current: null,
        droppables: {
            "default": []
        },
        prepareOffsets: function (a, b) {
            var c = d.ui.ddmanager.droppables[a.options.scope] || []
                , e = b ? b.type : null
                , g = (a.currentItem || a.element).find(":data(droppable)").andSelf()
                , f = 0;
            a: for (; f < c.length; f++)
                if (!(c[f].options.disabled || a && !c[f].accept.call(c[f].element[0], a.currentItem || a.element))) {
                    for (var h = 0; h < g.length; h++)
                        if (g[h] == c[f].element[0]) {
                            c[f].proportions.height = 0;
                            continue a
                        }
                    c[f].visible = c[f].element.css("display") != "none";
                    if (c[f].visible) {
                        e == "mousedown" && c[f]._activate.call(c[f], b);
                        c[f].offset = c[f].element.offset();
                        c[f].proportions = {
                            width: c[f].element[0].offsetWidth,
                            height: c[f].element[0].offsetHeight
                        }
                    }
                }
        },
        drop: function (a, b) {
            var c = false;
            d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
                if (this.options) {
                    if (!this.options.disabled && this.visible && d.ui.intersect(a, this, this.options.tolerance))
                        c = c || this._drop.call(this, b);
                    if (!this.options.disabled && this.visible && this.accept.call(this.element[0], a.currentItem || a.element)) {
                        this.isout = 1;
                        this.isover = 0;
                        this._deactivate.call(this, b)
                    }
                }
            });
            return c
        },
        dragStart: function (a, b) {
            a.element.parentsUntil("body").bind("scroll.droppable", function () {
                a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a, b)
            })
        },
        drag: function (a, b) {
            a.options.refreshPositions && d.ui.ddmanager.prepareOffsets(a, b);
            d.each(d.ui.ddmanager.droppables[a.options.scope] || [], function () {
                if (!(this.options.disabled || this.greedyChild || !this.visible)) {
                    var c = d.ui.intersect(a, this, this.options.tolerance);
                    if (c = !c && this.isover == 1 ? "isout" : c && this.isover == 0 ? "isover" : null) {
                        var e;
                        if (this.options.greedy) {
                            var g = this.element.parents(":data(droppable):eq(0)");
                            if (g.length) {
                                e = d.data(g[0], "droppable");
                                e.greedyChild = c == "isover" ? 1 : 0
                            }
                        }
                        if (e && c == "isover") {
                            e.isover = 0;
                            e.isout = 1;
                            e._out.call(e, b)
                        }
                        this[c] = 1;
                        this[c == "isout" ? "isover" : "isout"] = 0;
                        this[c == "isover" ? "_over" : "_out"].call(this, b);
                        if (e && c == "isout") {
                            e.isout = 0;
                            e.isover = 1;
                            e._over.call(e, b)
                        }
                    }
                }
            })
        },
        dragStop: function (a, b) {
            a.element.parentsUntil("body").unbind("scroll.droppable");
            a.options.refreshPositions || d.ui.ddmanager.prepareOffsets(a, b)
        }
    }
}
)(jQuery);
;/*
 * jQuery UI Resizable 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (e) {
    e.widget("ui.resizable", e.ui.mouse, {
        widgetEventPrefix: "resize",
        options: {
            alsoResize: false,
            animate: false,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: false,
            autoHide: false,
            containment: false,
            ghost: false,
            grid: false,
            handles: "e,s,se",
            helper: false,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 1E3
        },
        _create: function () {
            var b = this
                , a = this.options;
            this.element.addClass("ui-resizable");
            e.extend(this, {
                _aspectRatio: !!a.aspectRatio,
                aspectRatio: a.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: a.helper || a.ghost || a.animate ? a.helper || "ui-resizable-helper" : null
            });
            if (this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {
                /relative/.test(this.element.css("position")) && e.browser.opera && this.element.css({
                    position: "relative",
                    top: "auto",
                    left: "auto"
                });
                this.element.wrap(e('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
                    position: this.element.css("position"),
                    width: this.element.outerWidth(),
                    height: this.element.outerHeight(),
                    top: this.element.css("top"),
                    left: this.element.css("left")
                }));
                this.element = this.element.parent().data("resizable", this.element.data("resizable"));
                this.elementIsWrapper = true;
                this.element.css({
                    marginLeft: this.originalElement.css("marginLeft"),
                    marginTop: this.originalElement.css("marginTop"),
                    marginRight: this.originalElement.css("marginRight"),
                    marginBottom: this.originalElement.css("marginBottom")
                });
                this.originalElement.css({
                    marginLeft: 0,
                    marginTop: 0,
                    marginRight: 0,
                    marginBottom: 0
                });
                this.originalResizeStyle = this.originalElement.css("resize");
                this.originalElement.css("resize", "none");
                this._proportionallyResizeElements.push(this.originalElement.css({
                    position: "static",
                    zoom: 1,
                    display: "block"
                }));
                this.originalElement.css({
                    margin: this.originalElement.css("margin")
                });
                this._proportionallyResize()
            }
            this.handles = a.handles || (!e(".ui-resizable-handle", this.element).length ? "e,s,se" : {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            });
            if (this.handles.constructor == String) {
                if (this.handles == "all")
                    this.handles = "n,e,s,w,se,sw,ne,nw";
                var c = this.handles.split(",");
                this.handles = {};
                for (var d = 0; d < c.length; d++) {
                    var f = e.trim(c[d])
                        , g = e('<div class="ui-resizable-handle ' + ("ui-resizable-" + f) + '"></div>');
                    /sw|se|ne|nw/.test(f) && g.css({
                        zIndex: ++a.zIndex
                    });
                    "se" == f && g.addClass("ui-icon ui-icon-gripsmall-diagonal-se");
                    this.handles[f] = ".ui-resizable-" + f;
                    this.element.append(g)
                }
            }
            this._renderAxis = function (h) {
                h = h || this.element;
                for (var i in this.handles) {
                    if (this.handles[i].constructor == String)
                        this.handles[i] = e(this.handles[i], this.element).show();
                    if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {
                        var j = e(this.handles[i], this.element)
                            , l = 0;
                        l = /sw|ne|nw|se|n|s/.test(i) ? j.outerHeight() : j.outerWidth();
                        j = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join("");
                        h.css(j, l);
                        this._proportionallyResize()
                    }
                    e(this.handles[i])
                }
            }
                ;
            this._renderAxis(this.element);
            this._handles = e(".ui-resizable-handle", this.element).disableSelection();
            this._handles.mouseover(function () {
                if (!b.resizing) {
                    if (this.className)
                        var h = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
                    b.axis = h && h[1] ? h[1] : "se"
                }
            });
            if (a.autoHide) {
                this._handles.hide();
                e(this.element).addClass("ui-resizable-autohide").hover(function () {
                    if (!a.disabled) {
                        e(this).removeClass("ui-resizable-autohide");
                        b._handles.show()
                    }
                }, function () {
                    if (!a.disabled)
                        if (!b.resizing) {
                            e(this).addClass("ui-resizable-autohide");
                            b._handles.hide()
                        }
                })
            }
            this._mouseInit()
        },
        destroy: function () {
            this._mouseDestroy();
            var b = function (c) {
                e(c).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing").removeData("resizable").unbind(".resizable").find(".ui-resizable-handle").remove()
            };
            if (this.elementIsWrapper) {
                b(this.element);
                var a = this.element;
                a.after(this.originalElement.css({
                    position: a.css("position"),
                    width: a.outerWidth(),
                    height: a.outerHeight(),
                    top: a.css("top"),
                    left: a.css("left")
                })).remove()
            }
            this.originalElement.css("resize", this.originalResizeStyle);
            b(this.originalElement);
            return this
        },
        _mouseCapture: function (b) {
            var a = false;
            for (var c in this.handles)
                if (e(this.handles[c])[0] == b.target)
                    a = true;
            return !this.options.disabled && a
        },
        _mouseStart: function (b) {
            var a = this.options
                , c = this.element.position()
                , d = this.element;
            this.resizing = true;
            this.documentScroll = {
                top: e(document).scrollTop(),
                left: e(document).scrollLeft()
            };
            if (d.is(".ui-draggable") || /absolute/.test(d.css("position")))
                d.css({
                    position: "absolute",
                    top: c.top,
                    left: c.left
                });
            e.browser.opera && /relative/.test(d.css("position")) && d.css({
                position: "relative",
                top: "auto",
                left: "auto"
            });
            this._renderProxy();
            c = m(this.helper.css("left"));
            var f = m(this.helper.css("top"));
            if (a.containment) {
                c += e(a.containment).scrollLeft() || 0;
                f += e(a.containment).scrollTop() || 0
            }
            this.offset = this.helper.offset();
            this.position = {
                left: c,
                top: f
            };
            this.size = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalSize = this._helper ? {
                width: d.outerWidth(),
                height: d.outerHeight()
            } : {
                width: d.width(),
                height: d.height()
            };
            this.originalPosition = {
                left: c,
                top: f
            };
            this.sizeDiff = {
                width: d.outerWidth() - d.width(),
                height: d.outerHeight() - d.height()
            };
            this.originalMousePosition = {
                left: b.pageX,
                top: b.pageY
            };
            this.aspectRatio = typeof a.aspectRatio == "number" ? a.aspectRatio : this.originalSize.width / this.originalSize.height || 1;
            a = e(".ui-resizable-" + this.axis).css("cursor");
            e("body").css("cursor", a == "auto" ? this.axis + "-resize" : a);
            d.addClass("ui-resizable-resizing");
            this._propagate("start", b);
            return true
        },
        _mouseDrag: function (b) {
            var a = this.helper
                , c = this.originalMousePosition
                , d = this._change[this.axis];
            if (!d)
                return false;
            c = d.apply(this, [b, b.pageX - c.left || 0, b.pageY - c.top || 0]);
            this._updateVirtualBoundaries(b.shiftKey);
            if (this._aspectRatio || b.shiftKey)
                c = this._updateRatio(c, b);
            c = this._respectSize(c, b);
            this._propagate("resize", b);
            a.css({
                top: this.position.top + "px",
                left: this.position.left + "px",
                width: this.size.width + "px",
                height: this.size.height + "px"
            });
            !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize();
            this._updateCache(c);
            this._trigger("resize", b, this.ui());
            return false
        },
        _mouseStop: function (b) {
            this.resizing = false;
            var a = this.options
                , c = this;
            if (this._helper) {
                var d = this._proportionallyResizeElements
                    , f = d.length && /textarea/i.test(d[0].nodeName);
                d = f && e.ui.hasScroll(d[0], "left") ? 0 : c.sizeDiff.height;
                f = f ? 0 : c.sizeDiff.width;
                f = {
                    width: c.helper.width() - f,
                    height: c.helper.height() - d
                };
                d = parseInt(c.element.css("left"), 10) + (c.position.left - c.originalPosition.left) || null;
                var g = parseInt(c.element.css("top"), 10) + (c.position.top - c.originalPosition.top) || null;
                a.animate || this.element.css(e.extend(f, {
                    top: g,
                    left: d
                }));
                c.helper.height(c.size.height);
                c.helper.width(c.size.width);
                this._helper && !a.animate && this._proportionallyResize()
            }
            e("body").css("cursor", "auto");
            this.element.removeClass("ui-resizable-resizing");
            this._propagate("stop", b);
            this._helper && this.helper.remove();
            return false
        },
        _updateVirtualBoundaries: function (b) {
            var a = this.options, c, d, f;
            a = {
                minWidth: k(a.minWidth) ? a.minWidth : 0,
                maxWidth: k(a.maxWidth) ? a.maxWidth : Infinity,
                minHeight: k(a.minHeight) ? a.minHeight : 0,
                maxHeight: k(a.maxHeight) ? a.maxHeight : Infinity
            };
            if (this._aspectRatio || b) {
                b = a.minHeight * this.aspectRatio;
                d = a.minWidth / this.aspectRatio;
                c = a.maxHeight * this.aspectRatio;
                f = a.maxWidth / this.aspectRatio;
                if (b > a.minWidth)
                    a.minWidth = b;
                if (d > a.minHeight)
                    a.minHeight = d;
                if (c < a.maxWidth)
                    a.maxWidth = c;
                if (f < a.maxHeight)
                    a.maxHeight = f
            }
            this._vBoundaries = a
        },
        _updateCache: function (b) {
            this.offset = this.helper.offset();
            if (k(b.left))
                this.position.left = b.left;
            if (k(b.top))
                this.position.top = b.top;
            if (k(b.height))
                this.size.height = b.height;
            if (k(b.width))
                this.size.width = b.width
        },
        _updateRatio: function (b) {
            var a = this.position
                , c = this.size
                , d = this.axis;
            if (k(b.height))
                b.width = b.height * this.aspectRatio;
            else if (k(b.width))
                b.height = b.width / this.aspectRatio;
            if (d == "sw") {
                b.left = a.left + (c.width - b.width);
                b.top = null
            }
            if (d == "nw") {
                b.top = a.top + (c.height - b.height);
                b.left = a.left + (c.width - b.width)
            }
            return b
        },
        _respectSize: function (b) {
            var a = this._vBoundaries
                , c = this.axis
                , d = k(b.width) && a.maxWidth && a.maxWidth < b.width
                , f = k(b.height) && a.maxHeight && a.maxHeight < b.height
                , g = k(b.width) && a.minWidth && a.minWidth > b.width
                , h = k(b.height) && a.minHeight && a.minHeight > b.height;
            if (g)
                b.width = a.minWidth;
            if (h)
                b.height = a.minHeight;
            if (d)
                b.width = a.maxWidth;
            if (f)
                b.height = a.maxHeight;
            var i = this.originalPosition.left + this.originalSize.width
                , j = this.position.top + this.size.height
                , l = /sw|nw|w/.test(c);
            c = /nw|ne|n/.test(c);
            if (g && l)
                b.left = i - a.minWidth;
            if (d && l)
                b.left = i - a.maxWidth;
            if (h && c)
                b.top = j - a.minHeight;
            if (f && c)
                b.top = j - a.maxHeight;
            if ((a = !b.width && !b.height) && !b.left && b.top)
                b.top = null;
            else if (a && !b.top && b.left)
                b.left = null;
            return b
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length)
                for (var b = this.helper || this.element, a = 0; a < this._proportionallyResizeElements.length; a++) {
                    var c = this._proportionallyResizeElements[a];
                    if (!this.borderDif) {
                        var d = [c.css("borderTopWidth"), c.css("borderRightWidth"), c.css("borderBottomWidth"), c.css("borderLeftWidth")]
                            , f = [c.css("paddingTop"), c.css("paddingRight"), c.css("paddingBottom"), c.css("paddingLeft")];
                        this.borderDif = e.map(d, function (g, h) {
                            g = parseInt(g, 10) || 0;
                            h = parseInt(f[h], 10) || 0;
                            return g + h
                        })
                    }
                    e.browser.msie && (e(b).is(":hidden") || e(b).parents(":hidden").length) || c.css({
                        height: b.height() - this.borderDif[0] - this.borderDif[2] || 0,
                        width: b.width() - this.borderDif[1] - this.borderDif[3] || 0
                    })
                }
        },
        _renderProxy: function () {
            var b = this.options;
            this.elementOffset = this.element.offset();
            if (this._helper) {
                this.helper = this.helper || e('<div style="overflow:hidden;"></div>');
                var a = e.browser.msie && e.browser.version < 7
                    , c = a ? 1 : 0;
                a = a ? 2 : -1;
                this.helper.addClass(this._helper).css({
                    width: this.element.outerWidth() + a,
                    height: this.element.outerHeight() + a,
                    position: "absolute",
                    left: this.elementOffset.left - c + "px",
                    top: this.elementOffset.top - c + "px",
                    zIndex: ++b.zIndex
                });
                this.helper.appendTo("body").disableSelection()
            } else
                this.helper = this.element
        },
        _change: {
            e: function (b, a) {
                return {
                    width: this.originalSize.width + a
                }
            },
            w: function (b, a) {
                return {
                    left: this.originalPosition.left + a,
                    width: this.originalSize.width - a
                }
            },
            n: function (b, a, c) {
                return {
                    top: this.originalPosition.top + c,
                    height: this.originalSize.height - c
                }
            },
            s: function (b, a, c) {
                return {
                    height: this.originalSize.height + c
                }
            },
            se: function (b, a, c) {
                return e.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [b, a, c]))
            },
            sw: function (b, a, c) {
                return e.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [b, a, c]))
            },
            ne: function (b, a, c) {
                return e.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [b, a, c]))
            },
            nw: function (b, a, c) {
                return e.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [b, a, c]))
            }
        },
        _propagate: function (b, a) {
            e.ui.plugin.call(this, b, [a, this.ui()]);
            b != "resize" && this._trigger(b, a, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    });
    e.extend(e.ui.resizable, {
        version: "1.8.15"
    });
    e.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var b = e(this).data("resizable").options
                , a = function (c) {
                    e(c).each(function () {
                        var d = e(this);
                        d.data("resizable-alsoresize", {
                            width: parseInt(d.width(), 10),
                            height: parseInt(d.height(), 10),
                            left: parseInt(d.css("left"), 10),
                            top: parseInt(d.css("top"), 10),
                            position: d.css("position")
                        })
                    })
                };
            if (typeof b.alsoResize == "object" && !b.alsoResize.parentNode)
                if (b.alsoResize.length) {
                    b.alsoResize = b.alsoResize[0];
                    a(b.alsoResize)
                } else
                    e.each(b.alsoResize, function (c) {
                        a(c)
                    });
            else
                a(b.alsoResize)
        },
        resize: function (b, a) {
            var c = e(this).data("resizable");
            b = c.options;
            var d = c.originalSize
                , f = c.originalPosition
                , g = {
                    height: c.size.height - d.height || 0,
                    width: c.size.width - d.width || 0,
                    top: c.position.top - f.top || 0,
                    left: c.position.left - f.left || 0
                }
                , h = function (i, j) {
                    e(i).each(function () {
                        var l = e(this)
                            , q = e(this).data("resizable-alsoresize")
                            , p = {}
                            , r = j && j.length ? j : l.parents(a.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                        e.each(r, function (n, o) {
                            if ((n = (q[o] || 0) + (g[o] || 0)) && n >= 0)
                                p[o] = n || null
                        });
                        if (e.browser.opera && /relative/.test(l.css("position"))) {
                            c._revertToRelativePosition = true;
                            l.css({
                                position: "absolute",
                                top: "auto",
                                left: "auto"
                            })
                        }
                        l.css(p)
                    })
                };
            typeof b.alsoResize == "object" && !b.alsoResize.nodeType ? e.each(b.alsoResize, function (i, j) {
                h(i, j)
            }) : h(b.alsoResize)
        },
        stop: function () {
            var b = e(this).data("resizable")
                , a = b.options
                , c = function (d) {
                    e(d).each(function () {
                        var f = e(this);
                        f.css({
                            position: f.data("resizable-alsoresize").position
                        })
                    })
                };
            if (b._revertToRelativePosition) {
                b._revertToRelativePosition = false;
                typeof a.alsoResize == "object" && !a.alsoResize.nodeType ? e.each(a.alsoResize, function (d) {
                    c(d)
                }) : c(a.alsoResize)
            }
            e(this).removeData("resizable-alsoresize")
        }
    });
    e.ui.plugin.add("resizable", "animate", {
        stop: function (b) {
            var a = e(this).data("resizable")
                , c = a.options
                , d = a._proportionallyResizeElements
                , f = d.length && /textarea/i.test(d[0].nodeName)
                , g = f && e.ui.hasScroll(d[0], "left") ? 0 : a.sizeDiff.height;
            f = {
                width: a.size.width - (f ? 0 : a.sizeDiff.width),
                height: a.size.height - g
            };
            g = parseInt(a.element.css("left"), 10) + (a.position.left - a.originalPosition.left) || null;
            var h = parseInt(a.element.css("top"), 10) + (a.position.top - a.originalPosition.top) || null;
            a.element.animate(e.extend(f, h && g ? {
                top: h,
                left: g
            } : {}), {
                duration: c.animateDuration,
                easing: c.animateEasing,
                step: function () {
                    var i = {
                        width: parseInt(a.element.css("width"), 10),
                        height: parseInt(a.element.css("height"), 10),
                        top: parseInt(a.element.css("top"), 10),
                        left: parseInt(a.element.css("left"), 10)
                    };
                    d && d.length && e(d[0]).css({
                        width: i.width,
                        height: i.height
                    });
                    a._updateCache(i);
                    a._propagate("resize", b)
                }
            })
        }
    });
    e.ui.plugin.add("resizable", "containment", {
        start: function () {
            var b = e(this).data("resizable")
                , a = b.element
                , c = b.options.containment;
            if (a = c instanceof e ? c.get(0) : /parent/.test(c) ? a.parent().get(0) : c) {
                b.containerElement = e(a);
                if (/document/.test(c) || c == document) {
                    b.containerOffset = {
                        left: 0,
                        top: 0
                    };
                    b.containerPosition = {
                        left: 0,
                        top: 0
                    };
                    b.parentData = {
                        element: e(document),
                        left: 0,
                        top: 0,
                        width: e(document).width(),
                        height: e(document).height() || document.body.parentNode.scrollHeight
                    }
                } else {
                    var d = e(a)
                        , f = [];
                    e(["Top", "Right", "Left", "Bottom"]).each(function (i, j) {
                        f[i] = m(d.css("padding" + j))
                    });
                    b.containerOffset = d.offset();
                    b.containerPosition = d.position();
                    b.containerSize = {
                        height: d.innerHeight() - f[3],
                        width: d.innerWidth() - f[1]
                    };
                    c = b.containerOffset;
                    var g = b.containerSize.height
                        , h = b.containerSize.width;
                    h = e.ui.hasScroll(a, "left") ? a.scrollWidth : h;
                    g = e.ui.hasScroll(a) ? a.scrollHeight : g;
                    b.parentData = {
                        element: a,
                        left: c.left,
                        top: c.top,
                        width: h,
                        height: g
                    }
                }
            }
        },
        resize: function (b) {
            var a = e(this).data("resizable")
                , c = a.options
                , d = a.containerOffset
                , f = a.position;
            b = a._aspectRatio || b.shiftKey;
            var g = {
                top: 0,
                left: 0
            }
                , h = a.containerElement;
            if (h[0] != document && /static/.test(h.css("position")))
                g = d;
            if (f.left < (a._helper ? d.left : 0)) {
                a.size.width += a._helper ? a.position.left - d.left : a.position.left - g.left;
                if (b)
                    a.size.height = a.size.width / c.aspectRatio;
                a.position.left = c.helper ? d.left : 0
            }
            if (f.top < (a._helper ? d.top : 0)) {
                a.size.height += a._helper ? a.position.top - d.top : a.position.top;
                if (b)
                    a.size.width = a.size.height * c.aspectRatio;
                a.position.top = a._helper ? d.top : 0
            }
            a.offset.left = a.parentData.left + a.position.left;
            a.offset.top = a.parentData.top + a.position.top;
            c = Math.abs((a._helper ? a.offset.left - g.left : a.offset.left - g.left) + a.sizeDiff.width);
            d = Math.abs((a._helper ? a.offset.top - g.top : a.offset.top - d.top) + a.sizeDiff.height);
            f = a.containerElement.get(0) == a.element.parent().get(0);
            g = /relative|absolute/.test(a.containerElement.css("position"));
            if (f && g)
                c -= a.parentData.left;
            if (c + a.size.width >= a.parentData.width) {
                a.size.width = a.parentData.width - c;
                if (b)
                    a.size.height = a.size.width / a.aspectRatio
            }
            if (d + a.size.height >= a.parentData.height) {
                a.size.height = a.parentData.height - d;
                if (b)
                    a.size.width = a.size.height * a.aspectRatio
            }
        },
        stop: function () {
            var b = e(this).data("resizable")
                , a = b.options
                , c = b.containerOffset
                , d = b.containerPosition
                , f = b.containerElement
                , g = e(b.helper)
                , h = g.offset()
                , i = g.outerWidth() - b.sizeDiff.width;
            g = g.outerHeight() - b.sizeDiff.height;
            b._helper && !a.animate && /relative/.test(f.css("position")) && e(this).css({
                left: h.left - d.left - c.left,
                width: i,
                height: g
            });
            b._helper && !a.animate && /static/.test(f.css("position")) && e(this).css({
                left: h.left - d.left - c.left,
                width: i,
                height: g
            })
        }
    });
    e.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var b = e(this).data("resizable")
                , a = b.options
                , c = b.size;
            b.ghost = b.originalElement.clone();
            b.ghost.css({
                opacity: 0.25,
                display: "block",
                position: "relative",
                height: c.height,
                width: c.width,
                margin: 0,
                left: 0,
                top: 0
            }).addClass("ui-resizable-ghost").addClass(typeof a.ghost == "string" ? a.ghost : "");
            b.ghost.appendTo(b.helper)
        },
        resize: function () {
            var b = e(this).data("resizable");
            b.ghost && b.ghost.css({
                position: "relative",
                height: b.size.height,
                width: b.size.width
            })
        },
        stop: function () {
            var b = e(this).data("resizable");
            b.ghost && b.helper && b.helper.get(0).removeChild(b.ghost.get(0))
        }
    });
    e.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var b = e(this).data("resizable")
                , a = b.options
                , c = b.size
                , d = b.originalSize
                , f = b.originalPosition
                , g = b.axis;
            a.grid = typeof a.grid == "number" ? [a.grid, a.grid] : a.grid;
            var h = Math.round((c.width - d.width) / (a.grid[0] || 1)) * (a.grid[0] || 1);
            a = Math.round((c.height - d.height) / (a.grid[1] || 1)) * (a.grid[1] || 1);
            if (/^(se|s|e)$/.test(g)) {
                b.size.width = d.width + h;
                b.size.height = d.height + a
            } else if (/^(ne)$/.test(g)) {
                b.size.width = d.width + h;
                b.size.height = d.height + a;
                b.position.top = f.top - a
            } else {
                if (/^(sw)$/.test(g)) {
                    b.size.width = d.width + h;
                    b.size.height = d.height + a
                } else {
                    b.size.width = d.width + h;
                    b.size.height = d.height + a;
                    b.position.top = f.top - a
                }
                b.position.left = f.left - h
            }
        }
    });
    var m = function (b) {
        return parseInt(b, 10) || 0
    }
        , k = function (b) {
            return !isNaN(parseInt(b, 10))
        }
}
)(jQuery);
;/*
 * jQuery UI Selectable 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (e) {
    e.widget("ui.selectable", e.ui.mouse, {
        options: {
            appendTo: "body",
            autoRefresh: true,
            distance: 0,
            filter: "*",
            tolerance: "touch"
        },
        _create: function () {
            var c = this;
            this.element.addClass("ui-selectable");
            this.dragged = false;
            var f;
            this.refresh = function () {
                f = e(c.options.filter, c.element[0]);
                f.each(function () {
                    var d = e(this)
                        , b = d.offset();
                    e.data(this, "selectable-item", {
                        element: this,
                        $element: d,
                        left: b.left,
                        top: b.top,
                        right: b.left + d.outerWidth(),
                        bottom: b.top + d.outerHeight(),
                        startselected: false,
                        selected: d.hasClass("ui-selected"),
                        selecting: d.hasClass("ui-selecting"),
                        unselecting: d.hasClass("ui-unselecting")
                    })
                })
            }
                ;
            this.refresh();
            this.selectees = f.addClass("ui-selectee");
            this._mouseInit();
            this.helper = e("<div class='ui-selectable-helper'></div>")
        },
        destroy: function () {
            this.selectees.removeClass("ui-selectee").removeData("selectable-item");
            this.element.removeClass("ui-selectable ui-selectable-disabled").removeData("selectable").unbind(".selectable");
            this._mouseDestroy();
            return this
        },
        _mouseStart: function (c) {
            var f = this;
            this.opos = [c.pageX, c.pageY];
            if (!this.options.disabled) {
                var d = this.options;
                this.selectees = e(d.filter, this.element[0]);
                this._trigger("start", c);
                e(d.appendTo).append(this.helper);
                this.helper.css({
                    left: c.clientX,
                    top: c.clientY,
                    width: 0,
                    height: 0
                });
                d.autoRefresh && this.refresh();
                this.selectees.filter(".ui-selected").each(function () {
                    var b = e.data(this, "selectable-item");
                    b.startselected = true;
                    if (!c.metaKey) {
                        b.$element.removeClass("ui-selected");
                        b.selected = false;
                        b.$element.addClass("ui-unselecting");
                        b.unselecting = true;
                        f._trigger("unselecting", c, {
                            unselecting: b.element
                        })
                    }
                });
                e(c.target).parents().andSelf().each(function () {
                    var b = e.data(this, "selectable-item");
                    if (b) {
                        var g = !c.metaKey || !b.$element.hasClass("ui-selected");
                        b.$element.removeClass(g ? "ui-unselecting" : "ui-selected").addClass(g ? "ui-selecting" : "ui-unselecting");
                        b.unselecting = !g;
                        b.selecting = g;
                        (b.selected = g) ? f._trigger("selecting", c, {
                            selecting: b.element
                        }) : f._trigger("unselecting", c, {
                            unselecting: b.element
                        });
                        return false
                    }
                })
            }
        },
        _mouseDrag: function (c) {
            var f = this;
            this.dragged = true;
            if (!this.options.disabled) {
                var d = this.options
                    , b = this.opos[0]
                    , g = this.opos[1]
                    , h = c.pageX
                    , i = c.pageY;
                if (b > h) {
                    var j = h;
                    h = b;
                    b = j
                }
                if (g > i) {
                    j = i;
                    i = g;
                    g = j
                }
                this.helper.css({
                    left: b,
                    top: g,
                    width: h - b,
                    height: i - g
                });
                this.selectees.each(function () {
                    var a = e.data(this, "selectable-item");
                    if (!(!a || a.element == f.element[0])) {
                        var k = false;
                        if (d.tolerance == "touch")
                            k = !(a.left > h || a.right < b || a.top > i || a.bottom < g);
                        else if (d.tolerance == "fit")
                            k = a.left > b && a.right < h && a.top > g && a.bottom < i;
                        if (k) {
                            if (a.selected) {
                                a.$element.removeClass("ui-selected");
                                a.selected = false
                            }
                            if (a.unselecting) {
                                a.$element.removeClass("ui-unselecting");
                                a.unselecting = false
                            }
                            if (!a.selecting) {
                                a.$element.addClass("ui-selecting");
                                a.selecting = true;
                                f._trigger("selecting", c, {
                                    selecting: a.element
                                })
                            }
                        } else {
                            if (a.selecting)
                                if (c.metaKey && a.startselected) {
                                    a.$element.removeClass("ui-selecting");
                                    a.selecting = false;
                                    a.$element.addClass("ui-selected");
                                    a.selected = true
                                } else {
                                    a.$element.removeClass("ui-selecting");
                                    a.selecting = false;
                                    if (a.startselected) {
                                        a.$element.addClass("ui-unselecting");
                                        a.unselecting = true
                                    }
                                    f._trigger("unselecting", c, {
                                        unselecting: a.element
                                    })
                                }
                            if (a.selected)
                                if (!c.metaKey && !a.startselected) {
                                    a.$element.removeClass("ui-selected");
                                    a.selected = false;
                                    a.$element.addClass("ui-unselecting");
                                    a.unselecting = true;
                                    f._trigger("unselecting", c, {
                                        unselecting: a.element
                                    })
                                }
                        }
                    }
                });
                return false
            }
        },
        _mouseStop: function (c) {
            var f = this;
            this.dragged = false;
            e(".ui-unselecting", this.element[0]).each(function () {
                var d = e.data(this, "selectable-item");
                d.$element.removeClass("ui-unselecting");
                d.unselecting = false;
                d.startselected = false;
                f._trigger("unselected", c, {
                    unselected: d.element
                })
            });
            e(".ui-selecting", this.element[0]).each(function () {
                var d = e.data(this, "selectable-item");
                d.$element.removeClass("ui-selecting").addClass("ui-selected");
                d.selecting = false;
                d.selected = true;
                d.startselected = true;
                f._trigger("selected", c, {
                    selected: d.element
                })
            });
            this._trigger("stop", c);
            this.helper.remove();
            return false
        }
    });
    e.extend(e.ui.selectable, {
        version: "1.8.15"
    })
}
)(jQuery);
;/*
 * jQuery UI Sortable 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.sortable", d.ui.mouse, {
        widgetEventPrefix: "sort",
        options: {
            appendTo: "parent",
            axis: false,
            connectWith: false,
            containment: false,
            cursor: "auto",
            cursorAt: false,
            dropOnEmpty: true,
            forcePlaceholderSize: false,
            forceHelperSize: false,
            grid: false,
            handle: false,
            helper: "original",
            items: "> *",
            opacity: false,
            placeholder: false,
            revert: false,
            scroll: true,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1E3
        },
        _create: function () {
            var a = this.options;
            this.containerCache = {};
            this.element.addClass("ui-sortable");
            this.refresh();
            this.floating = this.items.length ? a.axis === "x" || /left|right/.test(this.items[0].item.css("float")) || /inline|table-cell/.test(this.items[0].item.css("display")) : false;
            this.offset = this.element.offset();
            this._mouseInit()
        },
        destroy: function () {
            this.element.removeClass("ui-sortable ui-sortable-disabled").removeData("sortable").unbind(".sortable");
            this._mouseDestroy();
            for (var a = this.items.length - 1; a >= 0; a--)
                this.items[a].item.removeData("sortable-item");
            return this
        },
        _setOption: function (a, b) {
            if (a === "disabled") {
                this.options[a] = b;
                this.widget()[b ? "addClass" : "removeClass"]("ui-sortable-disabled")
            } else
                d.Widget.prototype._setOption.apply(this, arguments)
        },
        _mouseCapture: function (a, b) {
            if (this.reverting)
                return false;
            if (this.options.disabled || this.options.type == "static")
                return false;
            this._refreshItems(a);
            var c = null
                , e = this;
            d(a.target).parents().each(function () {
                if (d.data(this, "sortable-item") == e) {
                    c = d(this);
                    return false
                }
            });
            if (d.data(a.target, "sortable-item") == e)
                c = d(a.target);
            if (!c)
                return false;
            if (this.options.handle && !b) {
                var f = false;
                d(this.options.handle, c).find("*").andSelf().each(function () {
                    if (this == a.target)
                        f = true
                });
                if (!f)
                    return false
            }
            this.currentItem = c;
            this._removeCurrentsFromItems();
            return true
        },
        _mouseStart: function (a, b, c) {
            b = this.options;
            var e = this;
            this.currentContainer = this;
            this.refreshPositions();
            this.helper = this._createHelper(a);
            this._cacheHelperProportions();
            this._cacheMargins();
            this.scrollParent = this.helper.scrollParent();
            this.offset = this.currentItem.offset();
            this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            };
            this.helper.css("position", "absolute");
            this.cssPosition = this.helper.css("position");
            d.extend(this.offset, {
                click: {
                    left: a.pageX - this.offset.left,
                    top: a.pageY - this.offset.top
                },
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            });
            this.originalPosition = this._generatePosition(a);
            this.originalPageX = a.pageX;
            this.originalPageY = a.pageY;
            b.cursorAt && this._adjustOffsetFromHelper(b.cursorAt);
            this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            };
            this.helper[0] != this.currentItem[0] && this.currentItem.hide();
            this._createPlaceholder();
            b.containment && this._setContainment();
            if (b.cursor) {
                if (d("body").css("cursor"))
                    this._storedCursor = d("body").css("cursor");
                d("body").css("cursor", b.cursor)
            }
            if (b.opacity) {
                if (this.helper.css("opacity"))
                    this._storedOpacity = this.helper.css("opacity");
                this.helper.css("opacity", b.opacity)
            }
            if (b.zIndex) {
                if (this.helper.css("zIndex"))
                    this._storedZIndex = this.helper.css("zIndex");
                this.helper.css("zIndex", b.zIndex)
            }
            if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML")
                this.overflowOffset = this.scrollParent.offset();
            this._trigger("start", a, this._uiHash());
            this._preserveHelperProportions || this._cacheHelperProportions();
            if (!c)
                for (c = this.containers.length - 1; c >= 0; c--)
                    this.containers[c]._trigger("activate", a, e._uiHash(this));
            if (d.ui.ddmanager)
                d.ui.ddmanager.current = this;
            d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a);
            this.dragging = true;
            this.helper.addClass("ui-sortable-helper");
            this._mouseDrag(a);
            return true
        },
        _mouseDrag: function (a) {
            this.position = this._generatePosition(a);
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.lastPositionAbs)
                this.lastPositionAbs = this.positionAbs;
            if (this.options.scroll) {
                var b = this.options
                    , c = false;
                if (this.scrollParent[0] != document && this.scrollParent[0].tagName != "HTML") {
                    if (this.overflowOffset.top + this.scrollParent[0].offsetHeight - a.pageY < b.scrollSensitivity)
                        this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop + b.scrollSpeed;
                    else if (a.pageY - this.overflowOffset.top < b.scrollSensitivity)
                        this.scrollParent[0].scrollTop = c = this.scrollParent[0].scrollTop - b.scrollSpeed;
                    if (this.overflowOffset.left + this.scrollParent[0].offsetWidth - a.pageX < b.scrollSensitivity)
                        this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft + b.scrollSpeed;
                    else if (a.pageX - this.overflowOffset.left < b.scrollSensitivity)
                        this.scrollParent[0].scrollLeft = c = this.scrollParent[0].scrollLeft - b.scrollSpeed
                } else {
                    if (a.pageY - d(document).scrollTop() < b.scrollSensitivity)
                        c = d(document).scrollTop(d(document).scrollTop() - b.scrollSpeed);
                    else if (d(window).height() - (a.pageY - d(document).scrollTop()) < b.scrollSensitivity)
                        c = d(document).scrollTop(d(document).scrollTop() + b.scrollSpeed);
                    if (a.pageX - d(document).scrollLeft() < b.scrollSensitivity)
                        c = d(document).scrollLeft(d(document).scrollLeft() - b.scrollSpeed);
                    else if (d(window).width() - (a.pageX - d(document).scrollLeft()) < b.scrollSensitivity)
                        c = d(document).scrollLeft(d(document).scrollLeft() + b.scrollSpeed)
                }
                c !== false && d.ui.ddmanager && !b.dropBehaviour && d.ui.ddmanager.prepareOffsets(this, a)
            }
            this.positionAbs = this._convertPositionTo("absolute");
            if (!this.options.axis || this.options.axis != "y")
                this.helper[0].style.left = this.position.left + "px";
            if (!this.options.axis || this.options.axis != "x")
                this.helper[0].style.top = this.position.top + "px";
            for (b = this.items.length - 1; b >= 0; b--) {
                c = this.items[b];
                var e = c.item[0]
                    , f = this._intersectsWithPointer(c);
                if (f)
                    if (e != this.currentItem[0] && this.placeholder[f == 1 ? "next" : "prev"]()[0] != e && !d.ui.contains(this.placeholder[0], e) && (this.options.type == "semi-dynamic" ? !d.ui.contains(this.element[0], e) : true)) {
                        this.direction = f == 1 ? "down" : "up";
                        if (this.options.tolerance == "pointer" || this._intersectsWithSides(c))
                            this._rearrange(a, c);
                        else
                            break;
                        this._trigger("change", a, this._uiHash());
                        break
                    }
            }
            this._contactContainers(a);
            d.ui.ddmanager && d.ui.ddmanager.drag(this, a);
            this._trigger("sort", a, this._uiHash());
            this.lastPositionAbs = this.positionAbs;
            return false
        },
        _mouseStop: function (a, b) {
            if (a) {
                d.ui.ddmanager && !this.options.dropBehaviour && d.ui.ddmanager.drop(this, a);
                if (this.options.revert) {
                    var c = this;
                    b = c.placeholder.offset();
                    c.reverting = true;
                    d(this.helper).animate({
                        left: b.left - this.offset.parent.left - c.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
                        top: b.top - this.offset.parent.top - c.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
                    }, parseInt(this.options.revert, 10) || 500, function () {
                        c._clear(a)
                    })
                } else
                    this._clear(a, b);
                return false
            }
        },
        cancel: function () {
            var a = this;
            if (this.dragging) {
                this._mouseUp({
                    target: null
                });
                this.options.helper == "original" ? this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper") : this.currentItem.show();
                for (var b = this.containers.length - 1; b >= 0; b--) {
                    this.containers[b]._trigger("deactivate", null, a._uiHash(this));
                    if (this.containers[b].containerCache.over) {
                        this.containers[b]._trigger("out", null, a._uiHash(this));
                        this.containers[b].containerCache.over = 0
                    }
                }
            }
            if (this.placeholder) {
                this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
                this.options.helper != "original" && this.helper && this.helper[0].parentNode && this.helper.remove();
                d.extend(this, {
                    helper: null,
                    dragging: false,
                    reverting: false,
                    _noFinalSort: null
                });
                this.domPosition.prev ? d(this.domPosition.prev).after(this.currentItem) : d(this.domPosition.parent).prepend(this.currentItem)
            }
            return this
        },
        serialize: function (a) {
            var b = this._getItemsAsjQuery(a && a.connected)
                , c = [];
            a = a || {};
            d(b).each(function () {
                var e = (d(a.item || this).attr(a.attribute || "id") || "").match(a.expression || /(.+)[-=_](.+)/);
                if (e)
                    c.push((a.key || e[1] + "[]") + "=" + (a.key && a.expression ? e[1] : e[2]))
            });
            !c.length && a.key && c.push(a.key + "=");
            return c.join("&")
        },
        toArray: function (a) {
            var b = this._getItemsAsjQuery(a && a.connected)
                , c = [];
            a = a || {};
            b.each(function () {
                c.push(d(a.item || this).attr(a.attribute || "id") || "")
            });
            return c
        },
        _intersectsWith: function (a) {
            var b = this.positionAbs.left
                , c = b + this.helperProportions.width
                , e = this.positionAbs.top
                , f = e + this.helperProportions.height
                , g = a.left
                , h = g + a.width
                , i = a.top
                , k = i + a.height
                , j = this.offset.click.top
                , l = this.offset.click.left;
            j = e + j > i && e + j < k && b + l > g && b + l < h;
            return this.options.tolerance == "pointer" || this.options.forcePointerForContainers || this.options.tolerance != "pointer" && this.helperProportions[this.floating ? "width" : "height"] > a[this.floating ? "width" : "height"] ? j : g < b + this.helperProportions.width / 2 && c - this.helperProportions.width / 2 < h && i < e + this.helperProportions.height / 2 && f - this.helperProportions.height / 2 < k
        },
        _intersectsWithPointer: function (a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left, a.width);
            b = b && a;
            a = this._getDragVerticalDirection();
            var c = this._getDragHorizontalDirection();
            if (!b)
                return false;
            return this.floating ? c && c == "right" || a == "down" ? 2 : 1 : a && (a == "down" ? 2 : 1)
        },
        _intersectsWithSides: function (a) {
            var b = d.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, a.top + a.height / 2, a.height);
            a = d.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, a.left + a.width / 2, a.width);
            var c = this._getDragVerticalDirection()
                , e = this._getDragHorizontalDirection();
            return this.floating && e ? e == "right" && a || e == "left" && !a : c && (c == "down" && b || c == "up" && !b)
        },
        _getDragVerticalDirection: function () {
            var a = this.positionAbs.top - this.lastPositionAbs.top;
            return a != 0 && (a > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var a = this.positionAbs.left - this.lastPositionAbs.left;
            return a != 0 && (a > 0 ? "right" : "left")
        },
        refresh: function (a) {
            this._refreshItems(a);
            this.refreshPositions();
            return this
        },
        _connectWith: function () {
            var a = this.options;
            return a.connectWith.constructor == String ? [a.connectWith] : a.connectWith
        },
        _getItemsAsjQuery: function (a) {
            var b = []
                , c = []
                , e = this._connectWith();
            if (e && a)
                for (a = e.length - 1; a >= 0; a--)
                    for (var f = d(e[a]), g = f.length - 1; g >= 0; g--) {
                        var h = d.data(f[g], "sortable");
                        if (h && h != this && !h.options.disabled)
                            c.push([d.isFunction(h.options.items) ? h.options.items.call(h.element) : d(h.options.items, h.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), h])
                    }
            c.push([d.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : d(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]);
            for (a = c.length - 1; a >= 0; a--)
                c[a][0].each(function () {
                    b.push(this)
                });
            return d(b)
        },
        _removeCurrentsFromItems: function () {
            for (var a = this.currentItem.find(":data(sortable-item)"), b = 0; b < this.items.length; b++)
                for (var c = 0; c < a.length; c++)
                    a[c] == this.items[b].item[0] && this.items.splice(b, 1)
        },
        _refreshItems: function (a) {
            this.items = [];
            this.containers = [this];
            var b = this.items
                , c = [[d.isFunction(this.options.items) ? this.options.items.call(this.element[0], a, {
                    item: this.currentItem
                }) : d(this.options.items, this.element), this]]
                , e = this._connectWith();
            if (e)
                for (var f = e.length - 1; f >= 0; f--)
                    for (var g = d(e[f]), h = g.length - 1; h >= 0; h--) {
                        var i = d.data(g[h], "sortable");
                        if (i && i != this && !i.options.disabled) {
                            c.push([d.isFunction(i.options.items) ? i.options.items.call(i.element[0], a, {
                                item: this.currentItem
                            }) : d(i.options.items, i.element), i]);
                            this.containers.push(i)
                        }
                    }
            for (f = c.length - 1; f >= 0; f--) {
                a = c[f][1];
                e = c[f][0];
                h = 0;
                for (g = e.length; h < g; h++) {
                    i = d(e[h]);
                    i.data("sortable-item", a);
                    b.push({
                        item: i,
                        instance: a,
                        width: 0,
                        height: 0,
                        left: 0,
                        top: 0
                    })
                }
            }
        },
        refreshPositions: function (a) {
            if (this.offsetParent && this.helper)
                this.offset.parent = this._getParentOffset();
            for (var b = this.items.length - 1; b >= 0; b--) {
                var c = this.items[b];
                if (!(c.instance != this.currentContainer && this.currentContainer && c.item[0] != this.currentItem[0])) {
                    var e = this.options.toleranceElement ? d(this.options.toleranceElement, c.item) : c.item;
                    if (!a) {
                        c.width = e.outerWidth();
                        c.height = e.outerHeight()
                    }
                    e = e.offset();
                    c.left = e.left;
                    c.top = e.top
                }
            }
            if (this.options.custom && this.options.custom.refreshContainers)
                this.options.custom.refreshContainers.call(this);
            else
                for (b = this.containers.length - 1; b >= 0; b--) {
                    e = this.containers[b].element.offset();
                    this.containers[b].containerCache.left = e.left;
                    this.containers[b].containerCache.top = e.top;
                    this.containers[b].containerCache.width = this.containers[b].element.outerWidth();
                    this.containers[b].containerCache.height = this.containers[b].element.outerHeight()
                }
            return this
        },
        _createPlaceholder: function (a) {
            var b = a || this
                , c = b.options;
            if (!c.placeholder || c.placeholder.constructor == String) {
                var e = c.placeholder;
                c.placeholder = {
                    element: function () {
                        var f = d(document.createElement(b.currentItem[0].nodeName)).addClass(e || b.currentItem[0].className + " ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];
                        if (!e)
                            f.style.visibility = "hidden";
                        return f
                    },
                    update: function (f, g) {
                        if (!(e && !c.forcePlaceholderSize)) {
                            g.height() || g.height(b.currentItem.innerHeight() - parseInt(b.currentItem.css("paddingTop") || 0, 10) - parseInt(b.currentItem.css("paddingBottom") || 0, 10));
                            g.width() || g.width(b.currentItem.innerWidth() - parseInt(b.currentItem.css("paddingLeft") || 0, 10) - parseInt(b.currentItem.css("paddingRight") || 0, 10))
                        }
                    }
                }
            }
            b.placeholder = d(c.placeholder.element.call(b.element, b.currentItem));
            b.currentItem.after(b.placeholder);
            c.placeholder.update(b, b.placeholder)
        },
        _contactContainers: function (a) {
            for (var b = null, c = null, e = this.containers.length - 1; e >= 0; e--)
                if (!d.ui.contains(this.currentItem[0], this.containers[e].element[0]))
                    if (this._intersectsWith(this.containers[e].containerCache)) {
                        if (!(b && d.ui.contains(this.containers[e].element[0], b.element[0]))) {
                            b = this.containers[e];
                            c = e
                        }
                    } else if (this.containers[e].containerCache.over) {
                        this.containers[e]._trigger("out", a, this._uiHash(this));
                        this.containers[e].containerCache.over = 0
                    }
            if (b)
                if (this.containers.length === 1) {
                    this.containers[c]._trigger("over", a, this._uiHash(this));
                    this.containers[c].containerCache.over = 1
                } else if (this.currentContainer != this.containers[c]) {
                    b = 1E4;
                    e = null;
                    for (var f = this.positionAbs[this.containers[c].floating ? "left" : "top"], g = this.items.length - 1; g >= 0; g--)
                        if (d.ui.contains(this.containers[c].element[0], this.items[g].item[0])) {
                            var h = this.items[g][this.containers[c].floating ? "left" : "top"];
                            if (Math.abs(h - f) < b) {
                                b = Math.abs(h - f);
                                e = this.items[g]
                            }
                        }
                    if (e || this.options.dropOnEmpty) {
                        this.currentContainer = this.containers[c];
                        e ? this._rearrange(a, e, null, true) : this._rearrange(a, null, this.containers[c].element, true);
                        this._trigger("change", a, this._uiHash());
                        this.containers[c]._trigger("change", a, this._uiHash(this));
                        this.options.placeholder.update(this.currentContainer, this.placeholder);
                        this.containers[c]._trigger("over", a, this._uiHash(this));
                        this.containers[c].containerCache.over = 1
                    }
                }
        },
        _createHelper: function (a) {
            var b = this.options;
            a = d.isFunction(b.helper) ? d(b.helper.apply(this.element[0], [a, this.currentItem])) : b.helper == "clone" ? this.currentItem.clone() : this.currentItem;
            a.parents("body").length || d(b.appendTo != "parent" ? b.appendTo : this.currentItem[0].parentNode)[0].appendChild(a[0]);
            if (a[0] == this.currentItem[0])
                this._storedCSS = {
                    width: this.currentItem[0].style.width,
                    height: this.currentItem[0].style.height,
                    position: this.currentItem.css("position"),
                    top: this.currentItem.css("top"),
                    left: this.currentItem.css("left")
                };
            if (a[0].style.width == "" || b.forceHelperSize)
                a.width(this.currentItem.width());
            if (a[0].style.height == "" || b.forceHelperSize)
                a.height(this.currentItem.height());
            return a
        },
        _adjustOffsetFromHelper: function (a) {
            if (typeof a == "string")
                a = a.split(" ");
            if (d.isArray(a))
                a = {
                    left: +a[0],
                    top: +a[1] || 0
                };
            if ("left" in a)
                this.offset.click.left = a.left + this.margins.left;
            if ("right" in a)
                this.offset.click.left = this.helperProportions.width - a.right + this.margins.left;
            if ("top" in a)
                this.offset.click.top = a.top + this.margins.top;
            if ("bottom" in a)
                this.offset.click.top = this.helperProportions.height - a.bottom + this.margins.top
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var a = this.offsetParent.offset();
            if (this.cssPosition == "absolute" && this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
                a.left += this.scrollParent.scrollLeft();
                a.top += this.scrollParent.scrollTop()
            }
            if (this.offsetParent[0] == document.body || this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == "html" && d.browser.msie)
                a = {
                    top: 0,
                    left: 0
                };
            return {
                top: a.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: a.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if (this.cssPosition == "relative") {
                var a = this.currentItem.position();
                return {
                    top: a.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: a.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            } else
                return {
                    top: 0,
                    left: 0
                }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {
                width: this.helper.outerWidth(),
                height: this.helper.outerHeight()
            }
        },
        _setContainment: function () {
            var a = this.options;
            if (a.containment == "parent")
                a.containment = this.helper[0].parentNode;
            if (a.containment == "document" || a.containment == "window")
                this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, d(a.containment == "document" ? document : window).width() - this.helperProportions.width - this.margins.left, (d(a.containment == "document" ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top];
            if (!/^(document|window|parent)$/.test(a.containment)) {
                var b = d(a.containment)[0];
                a = d(a.containment).offset();
                var c = d(b).css("overflow") != "hidden";
                this.containment = [a.left + (parseInt(d(b).css("borderLeftWidth"), 10) || 0) + (parseInt(d(b).css("paddingLeft"), 10) || 0) - this.margins.left, a.top + (parseInt(d(b).css("borderTopWidth"), 10) || 0) + (parseInt(d(b).css("paddingTop"), 10) || 0) - this.margins.top, a.left + (c ? Math.max(b.scrollWidth, b.offsetWidth) : b.offsetWidth) - (parseInt(d(b).css("borderLeftWidth"), 10) || 0) - (parseInt(d(b).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, a.top + (c ? Math.max(b.scrollHeight, b.offsetHeight) : b.offsetHeight) - (parseInt(d(b).css("borderTopWidth"), 10) || 0) - (parseInt(d(b).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]
            }
        },
        _convertPositionTo: function (a, b) {
            if (!b)
                b = this.position;
            a = a == "absolute" ? 1 : -1;
            var c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
                , e = /(html|body)/i.test(c[0].tagName);
            return {
                top: b.top + this.offset.relative.top * a + this.offset.parent.top * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()) * a),
                left: b.left + this.offset.relative.left * a + this.offset.parent.left * a - (d.browser.safari && this.cssPosition == "fixed" ? 0 : (this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft()) * a)
            }
        },
        _generatePosition: function (a) {
            var b = this.options
                , c = this.cssPosition == "absolute" && !(this.scrollParent[0] != document && d.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent
                , e = /(html|body)/i.test(c[0].tagName);
            if (this.cssPosition == "relative" && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0]))
                this.offset.relative = this._getRelativeOffset();
            var f = a.pageX
                , g = a.pageY;
            if (this.originalPosition) {
                if (this.containment) {
                    if (a.pageX - this.offset.click.left < this.containment[0])
                        f = this.containment[0] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top < this.containment[1])
                        g = this.containment[1] + this.offset.click.top;
                    if (a.pageX - this.offset.click.left > this.containment[2])
                        f = this.containment[2] + this.offset.click.left;
                    if (a.pageY - this.offset.click.top > this.containment[3])
                        g = this.containment[3] + this.offset.click.top
                }
                if (b.grid) {
                    g = this.originalPageY + Math.round((g - this.originalPageY) / b.grid[1]) * b.grid[1];
                    g = this.containment ? !(g - this.offset.click.top < this.containment[1] || g - this.offset.click.top > this.containment[3]) ? g : !(g - this.offset.click.top < this.containment[1]) ? g - b.grid[1] : g + b.grid[1] : g;
                    f = this.originalPageX + Math.round((f - this.originalPageX) / b.grid[0]) * b.grid[0];
                    f = this.containment ? !(f - this.offset.click.left < this.containment[0] || f - this.offset.click.left > this.containment[2]) ? f : !(f - this.offset.click.left < this.containment[0]) ? f - b.grid[0] : f + b.grid[0] : f
                }
            }
            return {
                top: g - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollTop() : e ? 0 : c.scrollTop()),
                left: f - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + (d.browser.safari && this.cssPosition == "fixed" ? 0 : this.cssPosition == "fixed" ? -this.scrollParent.scrollLeft() : e ? 0 : c.scrollLeft())
            }
        },
        _rearrange: function (a, b, c, e) {
            c ? c[0].appendChild(this.placeholder[0]) : b.item[0].parentNode.insertBefore(this.placeholder[0], this.direction == "down" ? b.item[0] : b.item[0].nextSibling);
            this.counter = this.counter ? ++this.counter : 1;
            var f = this
                , g = this.counter;
            window.setTimeout(function () {
                g == f.counter && f.refreshPositions(!e)
            }, 0)
        },
        _clear: function (a, b) {
            this.reverting = false;
            var c = [];
            !this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem);
            this._noFinalSort = null;
            if (this.helper[0] == this.currentItem[0]) {
                for (var e in this._storedCSS)
                    if (this._storedCSS[e] == "auto" || this._storedCSS[e] == "static")
                        this._storedCSS[e] = "";
                this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")
            } else
                this.currentItem.show();
            this.fromOutside && !b && c.push(function (f) {
                this._trigger("receive", f, this._uiHash(this.fromOutside))
            });
            if ((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !b)
                c.push(function (f) {
                    this._trigger("update", f, this._uiHash())
                });
            if (!d.ui.contains(this.element[0], this.currentItem[0])) {
                b || c.push(function (f) {
                    this._trigger("remove", f, this._uiHash())
                });
                for (e = this.containers.length - 1; e >= 0; e--)
                    if (d.ui.contains(this.containers[e].element[0], this.currentItem[0]) && !b) {
                        c.push(function (f) {
                            return function (g) {
                                f._trigger("receive", g, this._uiHash(this))
                            }
                        }
                            .call(this, this.containers[e]));
                        c.push(function (f) {
                            return function (g) {
                                f._trigger("update", g, this._uiHash(this))
                            }
                        }
                            .call(this, this.containers[e]))
                    }
            }
            for (e = this.containers.length - 1; e >= 0; e--) {
                b || c.push(function (f) {
                    return function (g) {
                        f._trigger("deactivate", g, this._uiHash(this))
                    }
                }
                    .call(this, this.containers[e]));
                if (this.containers[e].containerCache.over) {
                    c.push(function (f) {
                        return function (g) {
                            f._trigger("out", g, this._uiHash(this))
                        }
                    }
                        .call(this, this.containers[e]));
                    this.containers[e].containerCache.over = 0
                }
            }
            this._storedCursor && d("body").css("cursor", this._storedCursor);
            this._storedOpacity && this.helper.css("opacity", this._storedOpacity);
            if (this._storedZIndex)
                this.helper.css("zIndex", this._storedZIndex == "auto" ? "" : this._storedZIndex);
            this.dragging = false;
            if (this.cancelHelperRemoval) {
                if (!b) {
                    this._trigger("beforeStop", a, this._uiHash());
                    for (e = 0; e < c.length; e++)
                        c[e].call(this, a);
                    this._trigger("stop", a, this._uiHash())
                }
                return false
            }
            b || this._trigger("beforeStop", a, this._uiHash());
            this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
            this.helper[0] != this.currentItem[0] && this.helper.remove();
            this.helper = null;
            if (!b) {
                for (e = 0; e < c.length; e++)
                    c[e].call(this, a);
                this._trigger("stop", a, this._uiHash())
            }
            this.fromOutside = false;
            return true
        },
        _trigger: function () {
            d.Widget.prototype._trigger.apply(this, arguments) === false && this.cancel()
        },
        _uiHash: function (a) {
            var b = a || this;
            return {
                helper: b.helper,
                placeholder: b.placeholder || d([]),
                position: b.position,
                originalPosition: b.originalPosition,
                offset: b.positionAbs,
                item: b.currentItem,
                sender: a ? a.element : null
            }
        }
    });
    d.extend(d.ui.sortable, {
        version: "1.8.15"
    })
}
)(jQuery);
;/*
 * jQuery UI Accordion 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Accordion
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (c) {
    c.widget("ui.accordion", {
        options: {
            active: 0,
            animated: "slide",
            autoHeight: true,
            clearStyle: false,
            collapsible: false,
            event: "click",
            fillSpace: false,
            header: "> li > :first-child,> :not(li):even",
            icons: {
                header: "ui-icon-triangle-1-e",
                headerSelected: "ui-icon-triangle-1-s"
            },
            navigation: false,
            navigationFilter: function () {
                return this.href.toLowerCase() === location.href.toLowerCase()
            }
        },
        _create: function () {
            var a = this
                , b = a.options;
            a.running = 0;
            a.element.addClass("ui-accordion ui-widget ui-helper-reset").children("li").addClass("ui-accordion-li-fix");
            a.headers = a.element.find(b.header).addClass("ui-accordion-header ui-helper-reset ui-state-default ui-corner-all").bind("mouseenter.accordion", function () {
                b.disabled || c(this).addClass("ui-state-hover")
            }).bind("mouseleave.accordion", function () {
                b.disabled || c(this).removeClass("ui-state-hover")
            }).bind("focus.accordion", function () {
                b.disabled || c(this).addClass("ui-state-focus")
            }).bind("blur.accordion", function () {
                b.disabled || c(this).removeClass("ui-state-focus")
            });
            a.headers.next().addClass("ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom");
            if (b.navigation) {
                var d = a.element.find("a").filter(b.navigationFilter).eq(0);
                if (d.length) {
                    var h = d.closest(".ui-accordion-header");
                    a.active = h.length ? h : d.closest(".ui-accordion-content").prev()
                }
            }
            a.active = a._findActive(a.active || b.active).addClass("ui-state-default ui-state-active").toggleClass("ui-corner-all").toggleClass("ui-corner-top");
            a.active.next().addClass("ui-accordion-content-active");
            a._createIcons();
            a.resize();
            a.element.attr("role", "tablist");
            a.headers.attr("role", "tab").bind("keydown.accordion", function (f) {
                return a._keydown(f)
            }).next().attr("role", "tabpanel");
            a.headers.not(a.active || "").attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).next().hide();
            a.active.length ? a.active.attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }) : a.headers.eq(0).attr("tabIndex", 0);
            c.browser.safari || a.headers.find("a").attr("tabIndex", -1);
            b.event && a.headers.bind(b.event.split(" ").join(".accordion ") + ".accordion", function (f) {
                a._clickHandler.call(a, f, this);
                f.preventDefault()
            })
        },
        _createIcons: function () {
            var a = this.options;
            if (a.icons) {
                c("<span></span>").addClass("ui-icon " + a.icons.header).prependTo(this.headers);
                this.active.children(".ui-icon").toggleClass(a.icons.header).toggleClass(a.icons.headerSelected);
                this.element.addClass("ui-accordion-icons")
            }
        },
        _destroyIcons: function () {
            this.headers.children(".ui-icon").remove();
            this.element.removeClass("ui-accordion-icons")
        },
        destroy: function () {
            var a = this.options;
            this.element.removeClass("ui-accordion ui-widget ui-helper-reset").removeAttr("role");
            this.headers.unbind(".accordion").removeClass("ui-accordion-header ui-accordion-disabled ui-helper-reset ui-state-default ui-corner-all ui-state-active ui-state-disabled ui-corner-top").removeAttr("role").removeAttr("aria-expanded").removeAttr("aria-selected").removeAttr("tabIndex");
            this.headers.find("a").removeAttr("tabIndex");
            this._destroyIcons();
            var b = this.headers.next().css("display", "").removeAttr("role").removeClass("ui-helper-reset ui-widget-content ui-corner-bottom ui-accordion-content ui-accordion-content-active ui-accordion-disabled ui-state-disabled");
            if (a.autoHeight || a.fillHeight)
                b.css("height", "");
            return c.Widget.prototype.destroy.call(this)
        },
        _setOption: function (a, b) {
            c.Widget.prototype._setOption.apply(this, arguments);
            a == "active" && this.activate(b);
            if (a == "icons") {
                this._destroyIcons();
                b && this._createIcons()
            }
            if (a == "disabled")
                this.headers.add(this.headers.next())[b ? "addClass" : "removeClass"]("ui-accordion-disabled ui-state-disabled")
        },
        _keydown: function (a) {
            if (!(this.options.disabled || a.altKey || a.ctrlKey)) {
                var b = c.ui.keyCode
                    , d = this.headers.length
                    , h = this.headers.index(a.target)
                    , f = false;
                switch (a.keyCode) {
                    case b.RIGHT:
                    case b.DOWN:
                        f = this.headers[(h + 1) % d];
                        break;
                    case b.LEFT:
                    case b.UP:
                        f = this.headers[(h - 1 + d) % d];
                        break;
                    case b.SPACE:
                    case b.ENTER:
                        this._clickHandler({
                            target: a.target
                        }, a.target);
                        a.preventDefault()
                }
                if (f) {
                    c(a.target).attr("tabIndex", -1);
                    c(f).attr("tabIndex", 0);
                    f.focus();
                    return false
                }
                return true
            }
        },
        resize: function () {
            var a = this.options, b;
            if (a.fillSpace) {
                if (c.browser.msie) {
                    var d = this.element.parent().css("overflow");
                    this.element.parent().css("overflow", "hidden")
                }
                b = this.element.parent().height();
                c.browser.msie && this.element.parent().css("overflow", d);
                this.headers.each(function () {
                    b -= c(this).outerHeight(true)
                });
                this.headers.next().each(function () {
                    c(this).height(Math.max(0, b - c(this).innerHeight() + c(this).height()))
                }).css("overflow", "auto")
            } else if (a.autoHeight) {
                b = 0;
                this.headers.next().each(function () {
                    b = Math.max(b, c(this).height("").height())
                }).height(b)
            }
            return this
        },
        activate: function (a) {
            this.options.active = a;
            a = this._findActive(a)[0];
            this._clickHandler({
                target: a
            }, a);
            return this
        },
        _findActive: function (a) {
            return a ? typeof a === "number" ? this.headers.filter(":eq(" + a + ")") : this.headers.not(this.headers.not(a)) : a === false ? c([]) : this.headers.filter(":eq(0)")
        },
        _clickHandler: function (a, b) {
            var d = this.options;
            if (!d.disabled)
                if (a.target) {
                    a = c(a.currentTarget || b);
                    b = a[0] === this.active[0];
                    d.active = d.collapsible && b ? false : this.headers.index(a);
                    if (!(this.running || !d.collapsible && b)) {
                        var h = this.active;
                        j = a.next();
                        g = this.active.next();
                        e = {
                            options: d,
                            newHeader: b && d.collapsible ? c([]) : a,
                            oldHeader: this.active,
                            newContent: b && d.collapsible ? c([]) : j,
                            oldContent: g
                        };
                        var f = this.headers.index(this.active[0]) > this.headers.index(a[0]);
                        this.active = b ? c([]) : a;
                        this._toggle(j, g, e, b, f);
                        h.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
                        if (!b) {
                            a.removeClass("ui-state-default ui-corner-all").addClass("ui-state-active ui-corner-top").children(".ui-icon").removeClass(d.icons.header).addClass(d.icons.headerSelected);
                            a.next().addClass("ui-accordion-content-active")
                        }
                    }
                } else if (d.collapsible) {
                    this.active.removeClass("ui-state-active ui-corner-top").addClass("ui-state-default ui-corner-all").children(".ui-icon").removeClass(d.icons.headerSelected).addClass(d.icons.header);
                    this.active.next().addClass("ui-accordion-content-active");
                    var g = this.active.next()
                        , e = {
                            options: d,
                            newHeader: c([]),
                            oldHeader: d.active,
                            newContent: c([]),
                            oldContent: g
                        }
                        , j = this.active = c([]);
                    this._toggle(j, g, e)
                }
        },
        _toggle: function (a, b, d, h, f) {
            var g = this
                , e = g.options;
            g.toShow = a;
            g.toHide = b;
            g.data = d;
            var j = function () {
                if (g)
                    return g._completed.apply(g, arguments)
            };
            g._trigger("changestart", null, g.data);
            g.running = b.size() === 0 ? a.size() : b.size();
            if (e.animated) {
                d = {};
                d = e.collapsible && h ? {
                    toShow: c([]),
                    toHide: b,
                    complete: j,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                } : {
                    toShow: a,
                    toHide: b,
                    complete: j,
                    down: f,
                    autoHeight: e.autoHeight || e.fillSpace
                };
                if (!e.proxied)
                    e.proxied = e.animated;
                if (!e.proxiedDuration)
                    e.proxiedDuration = e.duration;
                e.animated = c.isFunction(e.proxied) ? e.proxied(d) : e.proxied;
                e.duration = c.isFunction(e.proxiedDuration) ? e.proxiedDuration(d) : e.proxiedDuration;
                h = c.ui.accordion.animations;
                var i = e.duration
                    , k = e.animated;
                if (k && !h[k] && !c.easing[k])
                    k = "slide";
                h[k] || (h[k] = function (l) {
                    this.slide(l, {
                        easing: k,
                        duration: i || 700
                    })
                }
                );
                h[k](d)
            } else {
                if (e.collapsible && h)
                    a.toggle();
                else {
                    b.hide();
                    a.show()
                }
                j(true)
            }
            b.prev().attr({
                "aria-expanded": "false",
                "aria-selected": "false",
                tabIndex: -1
            }).blur();
            a.prev().attr({
                "aria-expanded": "true",
                "aria-selected": "true",
                tabIndex: 0
            }).focus()
        },
        _completed: function (a) {
            this.running = a ? 0 : --this.running;
            if (!this.running) {
                this.options.clearStyle && this.toShow.add(this.toHide).css({
                    height: "",
                    overflow: ""
                });
                this.toHide.removeClass("ui-accordion-content-active");
                if (this.toHide.length)
                    this.toHide.parent()[0].className = this.toHide.parent()[0].className;
                this._trigger("change", null, this.data)
            }
        }
    });
    c.extend(c.ui.accordion, {
        version: "1.8.15",
        animations: {
            slide: function (a, b) {
                a = c.extend({
                    easing: "swing",
                    duration: 300
                }, a, b);
                if (a.toHide.size())
                    if (a.toShow.size()) {
                        var d = a.toShow.css("overflow"), h = 0, f = {}, g = {}, e;
                        b = a.toShow;
                        e = b[0].style.width;
                        b.width(parseInt(b.parent().width(), 10) - parseInt(b.css("paddingLeft"), 10) - parseInt(b.css("paddingRight"), 10) - (parseInt(b.css("borderLeftWidth"), 10) || 0) - (parseInt(b.css("borderRightWidth"), 10) || 0));
                        c.each(["height", "paddingTop", "paddingBottom"], function (j, i) {
                            g[i] = "hide";
                            j = ("" + c.css(a.toShow[0], i)).match(/^([\d+-.]+)(.*)$/);
                            f[i] = {
                                value: j[1],
                                unit: j[2] || "px"
                            }
                        });
                        a.toShow.css({
                            height: 0,
                            overflow: "hidden"
                        }).show();
                        a.toHide.filter(":hidden").each(a.complete).end().filter(":visible").animate(g, {
                            step: function (j, i) {
                                if (i.prop == "height")
                                    h = i.end - i.start === 0 ? 0 : (i.now - i.start) / (i.end - i.start);
                                a.toShow[0].style[i.prop] = h * f[i.prop].value + f[i.prop].unit
                            },
                            duration: a.duration,
                            easing: a.easing,
                            complete: function () {
                                a.autoHeight || a.toShow.css("height", "");
                                a.toShow.css({
                                    width: e,
                                    overflow: d
                                });
                                a.complete()
                            }
                        })
                    } else
                        a.toHide.animate({
                            height: "hide",
                            paddingTop: "hide",
                            paddingBottom: "hide"
                        }, a);
                else
                    a.toShow.animate({
                        height: "show",
                        paddingTop: "show",
                        paddingBottom: "show"
                    }, a)
            },
            bounceslide: function (a) {
                this.slide(a, {
                    easing: a.down ? "easeOutBounce" : "swing",
                    duration: a.down ? 1E3 : 200
                })
            }
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Autocomplete 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Autocomplete
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.position.js
 */
(function (d) {
    var e = 0;
    d.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: false,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function () {
            var a = this, b = this.element[0].ownerDocument, g;
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete", function (c) {
                if (!(a.options.disabled || a.element.propAttr("readOnly"))) {
                    g = false;
                    var f = d.ui.keyCode;
                    switch (c.keyCode) {
                        case f.PAGE_UP:
                            a._move("previousPage", c);
                            break;
                        case f.PAGE_DOWN:
                            a._move("nextPage", c);
                            break;
                        case f.UP:
                            a._move("previous", c);
                            c.preventDefault();
                            break;
                        case f.DOWN:
                            a._move("next", c);
                            c.preventDefault();
                            break;
                        case f.ENTER:
                        case f.NUMPAD_ENTER:
                            if (a.menu.active) {
                                g = true;
                                c.preventDefault()
                            }
                        case f.TAB:
                            if (!a.menu.active)
                                return;
                            a.menu.select(c);
                            break;
                        case f.ESCAPE:
                            a.element.val(a.term);
                            a.close(c);
                            break;
                        default:
                            clearTimeout(a.searching);
                            a.searching = setTimeout(function () {
                                if (a.term != a.element.val()) {
                                    a.selectedItem = null;
                                    a.search(null, c)
                                }
                            }, a.options.delay);
                            break
                    }
                }
            }).bind("keypress.autocomplete", function (c) {
                if (g) {
                    g = false;
                    c.preventDefault()
                }
            }).bind("focus.autocomplete", function () {
                if (!a.options.disabled) {
                    a.selectedItem = null;
                    a.previous = a.element.val()
                }
            }).bind("blur.autocomplete", function (c) {
                if (!a.options.disabled) {
                    clearTimeout(a.searching);
                    a.closing = setTimeout(function () {
                        a.close(c);
                        a._change(c)
                    }, 150)
                }
            });
            this._initSource();
            this.response = function () {
                return a._response.apply(a, arguments)
            }
                ;
            this.menu = d("<ul></ul>").addClass("ui-autocomplete").appendTo(d(this.options.appendTo || "body", b)[0]).mousedown(function (c) {
                var f = a.menu.element[0];
                d(c.target).closest(".ui-menu-item").length || setTimeout(function () {
                    d(document).one("mousedown", function (h) {
                        h.target !== a.element[0] && h.target !== f && !d.ui.contains(f, h.target) && a.close()
                    })
                }, 1);
                setTimeout(function () {
                    clearTimeout(a.closing)
                }, 13)
            }).menu({
                focus: function (c, f) {
                    f = f.item.data("item.autocomplete");
                    false !== a._trigger("focus", c, {
                        item: f
                    }) && /^key/.test(c.originalEvent.type) && a.element.val(f.value)
                },
                selected: function (c, f) {
                    var h = f.item.data("item.autocomplete")
                        , i = a.previous;
                    if (a.element[0] !== b.activeElement) {
                        a.element.focus();
                        a.previous = i;
                        setTimeout(function () {
                            a.previous = i;
                            a.selectedItem = h
                        }, 1)
                    }
                    false !== a._trigger("select", c, {
                        item: h
                    }) && a.element.val(h.value);
                    a.term = a.element.val();
                    a.close(c);
                    a.selectedItem = h
                },
                blur: function () {
                    a.menu.element.is(":visible") && a.element.val() !== a.term && a.element.val(a.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu");
            d.fn.bgiframe && this.menu.element.bgiframe()
        },
        destroy: function () {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup");
            this.menu.element.remove();
            d.Widget.prototype.destroy.call(this)
        },
        _setOption: function (a, b) {
            d.Widget.prototype._setOption.apply(this, arguments);
            a === "source" && this._initSource();
            if (a === "appendTo")
                this.menu.element.appendTo(d(b || "body", this.element[0].ownerDocument)[0]);
            a === "disabled" && b && this.xhr && this.xhr.abort()
        },
        _initSource: function () {
            var a = this, b, g;
            if (d.isArray(this.options.source)) {
                b = this.options.source;
                this.source = function (c, f) {
                    f(d.ui.autocomplete.filter(b, c.term))
                }
            } else if (typeof this.options.source === "string") {
                g = this.options.source;
                this.source = function (c, f) {
                    a.xhr && a.xhr.abort();
                    a.xhr = d.ajax({
                        url: g,
                        data: c,
                        dataType: "json",
                        autocompleteRequest: ++e,
                        success: function (h) {
                            this.autocompleteRequest === e && f(h)
                        },
                        error: function () {
                            this.autocompleteRequest === e && f([])
                        }
                    })
                }
            } else
                this.source = this.options.source
        },
        search: function (a, b) {
            a = a != null ? a : this.element.val();
            this.term = this.element.val();
            if (a.length < this.options.minLength)
                return this.close(b);
            clearTimeout(this.closing);
            if (this._trigger("search", b) !== false)
                return this._search(a)
        },
        _search: function (a) {
            this.pending++;
            this.element.addClass("ui-autocomplete-loading");
            this.source({
                term: a
            }, this.response)
        },
        _response: function (a) {
            if (!this.options.disabled && a && a.length) {
                a = this._normalize(a);
                this._suggest(a);
                this._trigger("open")
            } else
                this.close();
            this.pending--;
            this.pending || this.element.removeClass("ui-autocomplete-loading")
        },
        close: function (a) {
            clearTimeout(this.closing);
            if (this.menu.element.is(":visible")) {
                this.menu.element.hide();
                this.menu.deactivate();
                this._trigger("close", a)
            }
        },
        _change: function (a) {
            this.previous !== this.element.val() && this._trigger("change", a, {
                item: this.selectedItem
            })
        },
        _normalize: function (a) {
            if (a.length && a[0].label && a[0].value)
                return a;
            return d.map(a, function (b) {
                if (typeof b === "string")
                    return {
                        label: b,
                        value: b
                    };
                return d.extend({
                    label: b.label || b.value,
                    value: b.value || b.label
                }, b)
            })
        },
        _suggest: function (a) {
            var b = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(b, a);
            this.menu.deactivate();
            this.menu.refresh();
            b.show();
            this._resizeMenu();
            b.position(d.extend({
                of: this.element
            }, this.options.position));
            this.options.autoFocus && this.menu.next(new d.Event("mouseover"))
        },
        _resizeMenu: function () {
            var a = this.menu.element;
            a.outerWidth(Math.max(a.width("").outerWidth(), this.element.outerWidth()))
        },
        _renderMenu: function (a, b) {
            var g = this;
            d.each(b, function (c, f) {
                g._renderItem(a, f)
            })
        },
        _renderItem: function (a, b) {
            return d("<li></li>").data("item.autocomplete", b).append(d("<a></a>").text(b.label)).appendTo(a)
        },
        _move: function (a, b) {
            if (this.menu.element.is(":visible"))
                if (this.menu.first() && /^previous/.test(a) || this.menu.last() && /^next/.test(a)) {
                    this.element.val(this.term);
                    this.menu.deactivate()
                } else
                    this.menu[a](b);
            else
                this.search(null, b)
        },
        widget: function () {
            return this.menu.element
        }
    });
    d.extend(d.ui.autocomplete, {
        escapeRegex: function (a) {
            return a.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function (a, b) {
            var g = new RegExp(d.ui.autocomplete.escapeRegex(b), "i");
            return d.grep(a, function (c) {
                return g.test(c.label || c.value || c)
            })
        }
    })
}
)(jQuery);
(function (d) {
    d.widget("ui.menu", {
        _create: function () {
            var e = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function (a) {
                if (d(a.target).closest(".ui-menu-item a").length) {
                    a.preventDefault();
                    e.select(a)
                }
            });
            this.refresh()
        },
        refresh: function () {
            var e = this;
            this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem").children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function (a) {
                e.activate(a, d(this).parent())
            }).mouseleave(function () {
                e.deactivate()
            })
        },
        activate: function (e, a) {
            this.deactivate();
            if (this.hasScroll()) {
                var b = a.offset().top - this.element.offset().top
                    , g = this.element.scrollTop()
                    , c = this.element.height();
                if (b < 0)
                    this.element.scrollTop(g + b);
                else
                    b >= c && this.element.scrollTop(g + b - c + a.height())
            }
            this.active = a.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end();
            this._trigger("focus", e, {
                item: a
            })
        },
        deactivate: function () {
            if (this.active) {
                this.active.children("a").removeClass("ui-state-hover").removeAttr("id");
                this._trigger("blur");
                this.active = null
            }
        },
        next: function (e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function (e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function (e, a, b) {
            if (this.active) {
                e = this.active[e + "All"](".ui-menu-item").eq(0);
                e.length ? this.activate(b, e) : this.activate(b, this.element.children(a))
            } else
                this.activate(b, this.element.children(a))
        },
        nextPage: function (e) {
            if (this.hasScroll())
                if (!this.active || this.last())
                    this.activate(e, this.element.children(".ui-menu-item:first"));
                else {
                    var a = this.active.offset().top
                        , b = this.element.height()
                        , g = this.element.children(".ui-menu-item").filter(function () {
                            var c = d(this).offset().top - a - b + d(this).height();
                            return c < 10 && c > -10
                        });
                    g.length || (g = this.element.children(".ui-menu-item:last"));
                    this.activate(e, g)
                }
            else
                this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first" : ":last"))
        },
        previousPage: function (e) {
            if (this.hasScroll())
                if (!this.active || this.first())
                    this.activate(e, this.element.children(".ui-menu-item:last"));
                else {
                    var a = this.active.offset().top
                        , b = this.element.height();
                    result = this.element.children(".ui-menu-item").filter(function () {
                        var g = d(this).offset().top - a + b - d(this).height();
                        return g < 10 && g > -10
                    });
                    result.length || (result = this.element.children(".ui-menu-item:first"));
                    this.activate(e, result)
                }
            else
                this.activate(e, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last" : ":first"))
        },
        hasScroll: function () {
            return this.element.height() < this.element[d.fn.prop ? "prop" : "attr"]("scrollHeight")
        },
        select: function (e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Button 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Button
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (b) {
    var h, i, j, g, l = function () {
        var a = b(this).find(":ui-button");
        setTimeout(function () {
            a.button("refresh")
        }, 1)
    }, k = function (a) {
        var c = a.name
            , e = a.form
            , f = b([]);
        if (c)
            f = e ? b(e).find("[name='" + c + "']") : b("[name='" + c + "']", a.ownerDocument).filter(function () {
                return !this.form
            });
        return f
    };
    b.widget("ui.button", {
        options: {
            disabled: null,
            text: true,
            label: null,
            icons: {
                primary: null,
                secondary: null
            }
        },
        _create: function () {
            this.element.closest("form").unbind("reset.button").bind("reset.button", l);
            if (typeof this.options.disabled !== "boolean")
                this.options.disabled = this.element.propAttr("disabled");
            this._determineButtonType();
            this.hasTitle = !!this.buttonElement.attr("title");
            var a = this
                , c = this.options
                , e = this.type === "checkbox" || this.type === "radio"
                , f = "ui-state-hover" + (!e ? " ui-state-active" : "");
            if (c.label === null)
                c.label = this.buttonElement.html();
            if (this.element.is(":disabled"))
                c.disabled = true;
            this.buttonElement.addClass("ui-button ui-widget ui-state-default ui-corner-all").attr("role", "button").bind("mouseenter.button", function () {
                if (!c.disabled) {
                    b(this).addClass("ui-state-hover");
                    this === h && b(this).addClass("ui-state-active")
                }
            }).bind("mouseleave.button", function () {
                c.disabled || b(this).removeClass(f)
            }).bind("click.button", function (d) {
                if (c.disabled) {
                    d.preventDefault();
                    d.stopImmediatePropagation()
                }
            });
            this.element.bind("focus.button", function () {
                a.buttonElement.addClass("ui-state-focus")
            }).bind("blur.button", function () {
                a.buttonElement.removeClass("ui-state-focus")
            });
            if (e) {
                this.element.bind("change.button", function () {
                    g || a.refresh()
                });
                this.buttonElement.bind("mousedown.button", function (d) {
                    if (!c.disabled) {
                        g = false;
                        i = d.pageX;
                        j = d.pageY
                    }
                }).bind("mouseup.button", function (d) {
                    if (!c.disabled)
                        if (i !== d.pageX || j !== d.pageY)
                            g = true
                })
            }
            if (this.type === "checkbox")
                this.buttonElement.bind("click.button", function () {
                    if (c.disabled || g)
                        return false;
                    b(this).toggleClass("ui-state-active");
                    a.buttonElement.attr("aria-pressed", a.element[0].checked)
                });
            else if (this.type === "radio")
                this.buttonElement.bind("click.button", function () {
                    if (c.disabled || g)
                        return false;
                    b(this).addClass("ui-state-active");
                    a.buttonElement.attr("aria-pressed", "true");
                    var d = a.element[0];
                    k(d).not(d).map(function () {
                        return b(this).button("widget")[0]
                    }).removeClass("ui-state-active").attr("aria-pressed", "false")
                });
            else {
                this.buttonElement.bind("mousedown.button", function () {
                    if (c.disabled)
                        return false;
                    b(this).addClass("ui-state-active");
                    h = this;
                    b(document).one("mouseup", function () {
                        h = null
                    })
                }).bind("mouseup.button", function () {
                    if (c.disabled)
                        return false;
                    b(this).removeClass("ui-state-active")
                }).bind("keydown.button", function (d) {
                    if (c.disabled)
                        return false;
                    if (d.keyCode == b.ui.keyCode.SPACE || d.keyCode == b.ui.keyCode.ENTER)
                        b(this).addClass("ui-state-active")
                }).bind("keyup.button", function () {
                    b(this).removeClass("ui-state-active")
                });
                this.buttonElement.is("a") && this.buttonElement.keyup(function (d) {
                    d.keyCode === b.ui.keyCode.SPACE && b(this).click()
                })
            }
            this._setOption("disabled", c.disabled);
            this._resetButton()
        },
        _determineButtonType: function () {
            this.type = this.element.is(":checkbox") ? "checkbox" : this.element.is(":radio") ? "radio" : this.element.is("input") ? "input" : "button";
            if (this.type === "checkbox" || this.type === "radio") {
                var a = this.element.parents().filter(":last")
                    , c = "label[for=" + this.element.attr("id") + "]";
                this.buttonElement = a.find(c);
                if (!this.buttonElement.length) {
                    a = a.length ? a.siblings() : this.element.siblings();
                    this.buttonElement = a.filter(c);
                    if (!this.buttonElement.length)
                        this.buttonElement = a.find(c)
                }
                this.element.addClass("ui-helper-hidden-accessible");
                (a = this.element.is(":checked")) && this.buttonElement.addClass("ui-state-active");
                this.buttonElement.attr("aria-pressed", a)
            } else
                this.buttonElement = this.element
        },
        widget: function () {
            return this.buttonElement
        },
        destroy: function () {
            this.element.removeClass("ui-helper-hidden-accessible");
            this.buttonElement.removeClass("ui-button ui-widget ui-state-default ui-corner-all ui-state-hover ui-state-active  ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only").removeAttr("role").removeAttr("aria-pressed").html(this.buttonElement.find(".ui-button-text").html());
            this.hasTitle || this.buttonElement.removeAttr("title");
            b.Widget.prototype.destroy.call(this)
        },
        _setOption: function (a, c) {
            b.Widget.prototype._setOption.apply(this, arguments);
            if (a === "disabled")
                c ? this.element.propAttr("disabled", true) : this.element.propAttr("disabled", false);
            else
                this._resetButton()
        },
        refresh: function () {
            var a = this.element.is(":disabled");
            a !== this.options.disabled && this._setOption("disabled", a);
            if (this.type === "radio")
                k(this.element[0]).each(function () {
                    b(this).is(":checked") ? b(this).button("widget").addClass("ui-state-active").attr("aria-pressed", "true") : b(this).button("widget").removeClass("ui-state-active").attr("aria-pressed", "false")
                });
            else if (this.type === "checkbox")
                this.element.is(":checked") ? this.buttonElement.addClass("ui-state-active").attr("aria-pressed", "true") : this.buttonElement.removeClass("ui-state-active").attr("aria-pressed", "false")
        },
        _resetButton: function () {
            if (this.type === "input")
                this.options.label && this.element.val(this.options.label);
            else {
                var a = this.buttonElement.removeClass("ui-button-icons-only ui-button-icon-only ui-button-text-icons ui-button-text-icon-primary ui-button-text-icon-secondary ui-button-text-only")
                    , c = b("<span></span>").addClass("ui-button-text").html(this.options.label).appendTo(a.empty()).text()
                    , e = this.options.icons
                    , f = e.primary && e.secondary
                    , d = [];
                if (e.primary || e.secondary) {
                    if (this.options.text)
                        d.push("ui-button-text-icon" + (f ? "s" : e.primary ? "-primary" : "-secondary"));
                    e.primary && a.prepend("<span class='ui-button-icon-primary ui-icon " + e.primary + "'></span>");
                    e.secondary && a.append("<span class='ui-button-icon-secondary ui-icon " + e.secondary + "'></span>");
                    if (!this.options.text) {
                        d.push(f ? "ui-button-icons-only" : "ui-button-icon-only");
                        this.hasTitle || a.attr("title", c)
                    }
                } else
                    d.push("ui-button-text-only");
                a.addClass(d.join(" "))
            }
        }
    });
    b.widget("ui.buttonset", {
        options: {
            items: ":button, :submit, :reset, :checkbox, :radio, a, :data(button)"
        },
        _create: function () {
            this.element.addClass("ui-buttonset")
        },
        _init: function () {
            this.refresh()
        },
        _setOption: function (a, c) {
            a === "disabled" && this.buttons.button("option", a, c);
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        refresh: function () {
            var a = this.element.css("direction") === "ltr";
            this.buttons = this.element.find(this.options.items).filter(":ui-button").button("refresh").end().not(":ui-button").button().end().map(function () {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-all ui-corner-left ui-corner-right").filter(":first").addClass(a ? "ui-corner-left" : "ui-corner-right").end().filter(":last").addClass(a ? "ui-corner-right" : "ui-corner-left").end().end()
        },
        destroy: function () {
            this.element.removeClass("ui-buttonset");
            this.buttons.map(function () {
                return b(this).button("widget")[0]
            }).removeClass("ui-corner-left ui-corner-right").end().button("destroy");
            b.Widget.prototype.destroy.call(this)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Dialog 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Dialog
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *  jquery.ui.button.js
 *	jquery.ui.draggable.js
 *	jquery.ui.mouse.js
 *	jquery.ui.position.js
 *	jquery.ui.resizable.js
 */
(function (c, l) {
    var m = {
        buttons: true,
        height: true,
        maxHeight: true,
        maxWidth: true,
        minHeight: true,
        minWidth: true,
        width: true
    }
        , n = {
            maxHeight: true,
            maxWidth: true,
            minHeight: true,
            minWidth: true
        }
        , o = c.attrFn || {
            val: true,
            css: true,
            html: true,
            text: true,
            data: true,
            width: true,
            height: true,
            offset: true,
            click: true
        };
    c.widget("ui.dialog", {
        options: {
            autoOpen: true,
            buttons: {},
            closeOnEscape: true,
            closeText: "close",
            dialogClass: "",
            draggable: true,
            hide: null,
            height: "auto",
            maxHeight: false,
            maxWidth: false,
            minHeight: 150,
            minWidth: 150,
            modal: false,
            position: {
                my: "center",
                at: "center",
                collision: "fit",
                using: function (a) {
                    var b = c(this).css(a).offset().top;
                    b < 0 && c(this).css("top", a.top - b)
                }
            },
            resizable: true,
            show: null,
            stack: true,
            title: "",
            width: 300,
            zIndex: 1E3
        },
        _create: function () {
            this.originalTitle = this.element.attr("title");
            if (typeof this.originalTitle !== "string")
                this.originalTitle = "";
            this.options.title = this.options.title || this.originalTitle;
            var a = this
                , b = a.options
                , d = b.title || "&#160;"
                , e = c.ui.dialog.getTitleId(a.element)
                , g = (a.uiDialog = c("<div></div>")).appendTo(document.body).hide().addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b.dialogClass).css({
                    zIndex: b.zIndex
                }).attr("tabIndex", -1).css("outline", 0).keydown(function (i) {
                    if (b.closeOnEscape && i.keyCode && i.keyCode === c.ui.keyCode.ESCAPE) {
                        a.close(i);
                        i.preventDefault()
                    }
                }).attr({
                    role: "dialog",
                    "aria-labelledby": e
                }).mousedown(function (i) {
                    a.moveToTop(false, i)
                });
            a.element.show().removeAttr("title").addClass("ui-dialog-content ui-widget-content").appendTo(g);
            var f = (a.uiDialogTitlebar = c("<div></div>")).addClass("ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix").prependTo(g)
                , h = c('<a href="#"></a>').addClass("ui-dialog-titlebar-close ui-corner-all").attr("role", "button").hover(function () {
                    h.addClass("ui-state-hover")
                }, function () {
                    h.removeClass("ui-state-hover")
                }).focus(function () {
                    h.addClass("ui-state-focus")
                }).blur(function () {
                    h.removeClass("ui-state-focus")
                }).click(function (i) {
                    a.close(i);
                    return false
                }).appendTo(f);
            (a.uiDialogTitlebarCloseText = c("<span></span>")).addClass("ui-icon ui-icon-closethick").text(b.closeText).appendTo(h);
            c("<span></span>").addClass("ui-dialog-title").attr("id", e).html(d).prependTo(f);
            if (c.isFunction(b.beforeclose) && !c.isFunction(b.beforeClose))
                b.beforeClose = b.beforeclose;
            f.find("*").add(f).disableSelection();
            b.draggable && c.fn.draggable && a._makeDraggable();
            b.resizable && c.fn.resizable && a._makeResizable();
            a._createButtons(b.buttons);
            a._isOpen = false;
            c.fn.bgiframe && g.bgiframe()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        destroy: function () {
            var a = this;
            a.overlay && a.overlay.destroy();
            a.uiDialog.hide();
            a.element.unbind(".dialog").removeData("dialog").removeClass("ui-dialog-content ui-widget-content").hide().appendTo("body");
            a.uiDialog.remove();
            a.originalTitle && a.element.attr("title", a.originalTitle);
            return a
        },
        widget: function () {
            return this.uiDialog
        },
        close: function (a) {
            var b = this, d, e;
            if (false !== b._trigger("beforeClose", a)) {
                b.overlay && b.overlay.destroy();
                b.uiDialog.unbind("keypress.ui-dialog");
                b._isOpen = false;
                if (b.options.hide)
                    b.uiDialog.hide(b.options.hide, function () {
                        b._trigger("close", a)
                    });
                else {
                    b.uiDialog.hide();
                    b._trigger("close", a)
                }
                c.ui.dialog.overlay.resize();
                if (b.options.modal) {
                    d = 0;
                    c(".ui-dialog").each(function () {
                        if (this !== b.uiDialog[0]) {
                            e = c(this).css("z-index");
                            isNaN(e) || (d = Math.max(d, e))
                        }
                    });
                    c.ui.dialog.maxZ = d
                }
                return b
            }
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function (a, b) {
            var d = this
                , e = d.options;
            if (e.modal && !a || !e.stack && !e.modal)
                return d._trigger("focus", b);
            if (e.zIndex > c.ui.dialog.maxZ)
                c.ui.dialog.maxZ = e.zIndex;
            if (d.overlay) {
                c.ui.dialog.maxZ += 1;
                d.overlay.$el.css("z-index", c.ui.dialog.overlay.maxZ = c.ui.dialog.maxZ)
            }
            a = {
                scrollTop: d.element.scrollTop(),
                scrollLeft: d.element.scrollLeft()
            };
            c.ui.dialog.maxZ += 1;
            d.uiDialog.css("z-index", c.ui.dialog.maxZ);
            d.element.attr(a);
            d._trigger("focus", b);
            return d
        },
        open: function () {
            if (!this._isOpen) {
                var a = this
                    , b = a.options
                    , d = a.uiDialog;
                a.overlay = b.modal ? new c.ui.dialog.overlay(a) : null;
                a._size();
                a._position(b.position);
                d.show(b.show);
                a.moveToTop(true);
                b.modal && d.bind("keypress.ui-dialog", function (e) {
                    if (e.keyCode === c.ui.keyCode.TAB) {
                        var g = c(":tabbable", this)
                            , f = g.filter(":first");
                        g = g.filter(":last");
                        if (e.target === g[0] && !e.shiftKey) {
                            f.focus(1);
                            return false
                        } else if (e.target === f[0] && e.shiftKey) {
                            g.focus(1);
                            return false
                        }
                    }
                });
                c(a.element.find(":tabbable").get().concat(d.find(".ui-dialog-buttonpane :tabbable").get().concat(d.get()))).eq(0).focus();
                a._isOpen = true;
                a._trigger("open");
                return a
            }
        },
        _createButtons: function (a) {
            var b = this
                , d = false
                , e = c("<div></div>").addClass("ui-dialog-buttonpane ui-widget-content ui-helper-clearfix")
                , g = c("<div></div>").addClass("ui-dialog-buttonset").appendTo(e);
            b.uiDialog.find(".ui-dialog-buttonpane").remove();
            typeof a === "object" && a !== null && c.each(a, function () {
                return !(d = true)
            });
            if (d) {
                c.each(a, function (f, h) {
                    h = c.isFunction(h) ? {
                        click: h,
                        text: f
                    } : h;
                    var i = c('<button type="button"></button>').click(function () {
                        h.click.apply(b.element[0], arguments)
                    }).appendTo(g);
                    c.each(h, function (j, k) {
                        if (j !== "click")
                            j in o ? i[j](k) : i.attr(j, k)
                    });
                    c.fn.button && i.button()
                });
                e.appendTo(b.uiDialog)
            }
        },
        _makeDraggable: function () {
            function a(f) {
                return {
                    position: f.position,
                    offset: f.offset
                }
            }
            var b = this, d = b.options, e = c(document), g;
            b.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (f, h) {
                    g = d.height === "auto" ? "auto" : c(this).height();
                    c(this).height(c(this).height()).addClass("ui-dialog-dragging");
                    b._trigger("dragStart", f, a(h))
                },
                drag: function (f, h) {
                    b._trigger("drag", f, a(h))
                },
                stop: function (f, h) {
                    d.position = [h.position.left - e.scrollLeft(), h.position.top - e.scrollTop()];
                    c(this).removeClass("ui-dialog-dragging").height(g);
                    b._trigger("dragStop", f, a(h));
                    c.ui.dialog.overlay.resize()
                }
            })
        },
        _makeResizable: function (a) {
            function b(f) {
                return {
                    originalPosition: f.originalPosition,
                    originalSize: f.originalSize,
                    position: f.position,
                    size: f.size
                }
            }
            a = a === l ? this.options.resizable : a;
            var d = this
                , e = d.options
                , g = d.uiDialog.css("position");
            a = typeof a === "string" ? a : "n,e,s,w,se,sw,ne,nw";
            d.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: d.element,
                maxWidth: e.maxWidth,
                maxHeight: e.maxHeight,
                minWidth: e.minWidth,
                minHeight: d._minHeight(),
                handles: a,
                start: function (f, h) {
                    c(this).addClass("ui-dialog-resizing");
                    d._trigger("resizeStart", f, b(h))
                },
                resize: function (f, h) {
                    d._trigger("resize", f, b(h))
                },
                stop: function (f, h) {
                    c(this).removeClass("ui-dialog-resizing");
                    e.height = c(this).height();
                    e.width = c(this).width();
                    d._trigger("resizeStop", f, b(h));
                    c.ui.dialog.overlay.resize()
                }
            }).css("position", g).find(".ui-resizable-se").addClass("ui-icon ui-icon-grip-diagonal-se")
        },
        _minHeight: function () {
            var a = this.options;
            return a.height === "auto" ? a.minHeight : Math.min(a.minHeight, a.height)
        },
        _position: function (a) {
            var b = [], d = [0, 0], e;
            if (a) {
                if (typeof a === "string" || typeof a === "object" && "0" in a) {
                    b = a.split ? a.split(" ") : [a[0], a[1]];
                    if (b.length === 1)
                        b[1] = b[0];
                    c.each(["left", "top"], function (g, f) {
                        if (+b[g] === b[g]) {
                            d[g] = b[g];
                            b[g] = f
                        }
                    });
                    a = {
                        my: b.join(" "),
                        at: b.join(" "),
                        offset: d.join(" ")
                    }
                }
                a = c.extend({}, c.ui.dialog.prototype.options.position, a)
            } else
                a = c.ui.dialog.prototype.options.position;
            (e = this.uiDialog.is(":visible")) || this.uiDialog.show();
            this.uiDialog.css({
                top: 0,
                left: 0
            }).position(c.extend({
                of: window
            }, a));
            e || this.uiDialog.hide()
        },
        _setOptions: function (a) {
            var b = this
                , d = {}
                , e = false;
            c.each(a, function (g, f) {
                b._setOption(g, f);
                if (g in m)
                    e = true;
                if (g in n)
                    d[g] = f
            });
            e && this._size();
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", d)
        },
        _setOption: function (a, b) {
            var d = this
                , e = d.uiDialog;
            switch (a) {
                case "beforeclose":
                    a = "beforeClose";
                    break;
                case "buttons":
                    d._createButtons(b);
                    break;
                case "closeText":
                    d.uiDialogTitlebarCloseText.text("" + b);
                    break;
                case "dialogClass":
                    e.removeClass(d.options.dialogClass).addClass("ui-dialog ui-widget ui-widget-content ui-corner-all " + b);
                    break;
                case "disabled":
                    b ? e.addClass("ui-dialog-disabled") : e.removeClass("ui-dialog-disabled");
                    break;
                case "draggable":
                    var g = e.is(":data(draggable)");
                    g && !b && e.draggable("destroy");
                    !g && b && d._makeDraggable();
                    break;
                case "position":
                    d._position(b);
                    break;
                case "resizable":
                    (g = e.is(":data(resizable)")) && !b && e.resizable("destroy");
                    g && typeof b === "string" && e.resizable("option", "handles", b);
                    !g && b !== false && d._makeResizable(b);
                    break;
                case "title":
                    c(".ui-dialog-title", d.uiDialogTitlebar).html("" + (b || "&#160;"));
                    break
            }
            c.Widget.prototype._setOption.apply(d, arguments)
        },
        _size: function () {
            var a = this.options, b, d, e = this.uiDialog.is(":visible");
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                height: 0
            });
            if (a.minWidth > a.width)
                a.width = a.minWidth;
            b = this.uiDialog.css({
                height: "auto",
                width: a.width
            }).height();
            d = Math.max(0, a.minHeight - b);
            if (a.height === "auto")
                if (c.support.minHeight)
                    this.element.css({
                        minHeight: d,
                        height: "auto"
                    });
                else {
                    this.uiDialog.show();
                    a = this.element.css("height", "auto").height();
                    e || this.uiDialog.hide();
                    this.element.height(Math.max(a, d))
                }
            else
                this.element.height(Math.max(a.height - b, 0));
            this.uiDialog.is(":data(resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        }
    });
    c.extend(c.ui.dialog, {
        version: "1.8.15",
        uuid: 0,
        maxZ: 0,
        getTitleId: function (a) {
            a = a.attr("id");
            if (!a) {
                this.uuid += 1;
                a = this.uuid
            }
            return "ui-dialog-title-" + a
        },
        overlay: function (a) {
            this.$el = c.ui.dialog.overlay.create(a)
        }
    });
    c.extend(c.ui.dialog.overlay, {
        instances: [],
        oldInstances: [],
        maxZ: 0,
        events: c.map("focus,mousedown,mouseup,keydown,keypress,click".split(","), function (a) {
            return a + ".dialog-overlay"
        }).join(" "),
        create: function (a) {
            if (this.instances.length === 0) {
                setTimeout(function () {
                    c.ui.dialog.overlay.instances.length && c(document).bind(c.ui.dialog.overlay.events, function (d) {
                        if (c(d.target).zIndex() < c.ui.dialog.overlay.maxZ)
                            return false
                    })
                }, 1);
                c(document).bind("keydown.dialog-overlay", function (d) {
                    if (a.options.closeOnEscape && d.keyCode && d.keyCode === c.ui.keyCode.ESCAPE) {
                        a.close(d);
                        d.preventDefault()
                    }
                });
                c(window).bind("resize.dialog-overlay", c.ui.dialog.overlay.resize)
            }
            var b = (this.oldInstances.pop() || c("<div></div>").addClass("ui-widget-overlay")).appendTo(document.body).css({
                width: this.width(),
                height: this.height()
            });
            c.fn.bgiframe && b.bgiframe();
            this.instances.push(b);
            return b
        },
        destroy: function (a) {
            var b = c.inArray(a, this.instances);
            b != -1 && this.oldInstances.push(this.instances.splice(b, 1)[0]);
            this.instances.length === 0 && c([document, window]).unbind(".dialog-overlay");
            a.remove();
            var d = 0;
            c.each(this.instances, function () {
                d = Math.max(d, this.css("z-index"))
            });
            this.maxZ = d
        },
        height: function () {
            var a, b;
            if (c.browser.msie && c.browser.version < 7) {
                a = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
                b = Math.max(document.documentElement.offsetHeight, document.body.offsetHeight);
                return a < b ? c(window).height() + "px" : a + "px"
            } else
                return c(document).height() + "px"
        },
        width: function () {
            var a, b;
            if (c.browser.msie) {
                a = Math.max(document.documentElement.scrollWidth, document.body.scrollWidth);
                b = Math.max(document.documentElement.offsetWidth, document.body.offsetWidth);
                return a < b ? c(window).width() + "px" : a + "px"
            } else
                return c(document).width() + "px"
        },
        resize: function () {
            var a = c([]);
            c.each(c.ui.dialog.overlay.instances, function () {
                a = a.add(this)
            });
            a.css({
                width: 0,
                height: 0
            }).css({
                width: c.ui.dialog.overlay.width(),
                height: c.ui.dialog.overlay.height()
            })
        }
    });
    c.extend(c.ui.dialog.overlay.prototype, {
        destroy: function () {
            c.ui.dialog.overlay.destroy(this.$el)
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Slider 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Slider
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function (d) {
    d.widget("ui.slider", d.ui.mouse, {
        widgetEventPrefix: "slide",
        options: {
            animate: false,
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: false,
            step: 1,
            value: 0,
            values: null
        },
        _create: function () {
            var a = this
                , b = this.options
                , c = this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all")
                , f = b.values && b.values.length || 1
                , e = [];
            this._mouseSliding = this._keySliding = false;
            this._animateOff = true;
            this._handleIndex = null;
            this._detectOrientation();
            this._mouseInit();
            this.element.addClass("ui-slider ui-slider-" + this.orientation + " ui-widget ui-widget-content ui-corner-all" + (b.disabled ? " ui-slider-disabled ui-disabled" : ""));
            this.range = d([]);
            if (b.range) {
                if (b.range === true) {
                    if (!b.values)
                        b.values = [this._valueMin(), this._valueMin()];
                    if (b.values.length && b.values.length !== 2)
                        b.values = [b.values[0], b.values[0]]
                }
                this.range = d("<div></div>").appendTo(this.element).addClass("ui-slider-range ui-widget-header" + (b.range === "min" || b.range === "max" ? " ui-slider-range-" + b.range : ""))
            }
            for (var j = c.length; j < f; j += 1)
                e.push("<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>");
            this.handles = c.add(d(e.join("")).appendTo(a.element));
            this.handle = this.handles.eq(0);
            this.handles.add(this.range).filter("a").click(function (g) {
                g.preventDefault()
            }).hover(function () {
                b.disabled || d(this).addClass("ui-state-hover")
            }, function () {
                d(this).removeClass("ui-state-hover")
            }).focus(function () {
                if (b.disabled)
                    d(this).blur();
                else {
                    d(".ui-slider .ui-state-focus").removeClass("ui-state-focus");
                    d(this).addClass("ui-state-focus")
                }
            }).blur(function () {
                d(this).removeClass("ui-state-focus")
            });
            this.handles.each(function (g) {
                d(this).data("index.ui-slider-handle", g)
            });
            this.handles.keydown(function (g) {
                var k = true, l = d(this).data("index.ui-slider-handle"), i, h, m;
                if (!a.options.disabled) {
                    switch (g.keyCode) {
                        case d.ui.keyCode.HOME:
                        case d.ui.keyCode.END:
                        case d.ui.keyCode.PAGE_UP:
                        case d.ui.keyCode.PAGE_DOWN:
                        case d.ui.keyCode.UP:
                        case d.ui.keyCode.RIGHT:
                        case d.ui.keyCode.DOWN:
                        case d.ui.keyCode.LEFT:
                            k = false;
                            if (!a._keySliding) {
                                a._keySliding = true;
                                d(this).addClass("ui-state-active");
                                i = a._start(g, l);
                                if (i === false)
                                    return
                            }
                            break
                    }
                    m = a.options.step;
                    i = a.options.values && a.options.values.length ? (h = a.values(l)) : (h = a.value());
                    switch (g.keyCode) {
                        case d.ui.keyCode.HOME:
                            h = a._valueMin();
                            break;
                        case d.ui.keyCode.END:
                            h = a._valueMax();
                            break;
                        case d.ui.keyCode.PAGE_UP:
                            h = a._trimAlignValue(i + (a._valueMax() - a._valueMin()) / 5);
                            break;
                        case d.ui.keyCode.PAGE_DOWN:
                            h = a._trimAlignValue(i - (a._valueMax() - a._valueMin()) / 5);
                            break;
                        case d.ui.keyCode.UP:
                        case d.ui.keyCode.RIGHT:
                            if (i === a._valueMax())
                                return;
                            h = a._trimAlignValue(i + m);
                            break;
                        case d.ui.keyCode.DOWN:
                        case d.ui.keyCode.LEFT:
                            if (i === a._valueMin())
                                return;
                            h = a._trimAlignValue(i - m);
                            break
                    }
                    a._slide(g, l, h);
                    return k
                }
            }).keyup(function (g) {
                var k = d(this).data("index.ui-slider-handle");
                if (a._keySliding) {
                    a._keySliding = false;
                    a._stop(g, k);
                    a._change(g, k);
                    d(this).removeClass("ui-state-active")
                }
            });
            this._refreshValue();
            this._animateOff = false
        },
        destroy: function () {
            this.handles.remove();
            this.range.remove();
            this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-slider-disabled ui-widget ui-widget-content ui-corner-all").removeData("slider").unbind(".slider");
            this._mouseDestroy();
            return this
        },
        _mouseCapture: function (a) {
            var b = this.options, c, f, e, j, g;
            if (b.disabled)
                return false;
            this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            };
            this.elementOffset = this.element.offset();
            c = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            f = this._valueMax() - this._valueMin() + 1;
            j = this;
            this.handles.each(function (k) {
                var l = Math.abs(c - j.values(k));
                if (f > l) {
                    f = l;
                    e = d(this);
                    g = k
                }
            });
            if (b.range === true && this.values(1) === b.min) {
                g += 1;
                e = d(this.handles[g])
            }
            if (this._start(a, g) === false)
                return false;
            this._mouseSliding = true;
            j._handleIndex = g;
            e.addClass("ui-state-active").focus();
            b = e.offset();
            this._clickOffset = !d(a.target).parents().andSelf().is(".ui-slider-handle") ? {
                left: 0,
                top: 0
            } : {
                left: a.pageX - b.left - e.width() / 2,
                top: a.pageY - b.top - e.height() / 2 - (parseInt(e.css("borderTopWidth"), 10) || 0) - (parseInt(e.css("borderBottomWidth"), 10) || 0) + (parseInt(e.css("marginTop"), 10) || 0)
            };
            this.handles.hasClass("ui-state-hover") || this._slide(a, g, c);
            return this._animateOff = true
        },
        _mouseStart: function () {
            return true
        },
        _mouseDrag: function (a) {
            var b = this._normValueFromMouse({
                x: a.pageX,
                y: a.pageY
            });
            this._slide(a, this._handleIndex, b);
            return false
        },
        _mouseStop: function (a) {
            this.handles.removeClass("ui-state-active");
            this._mouseSliding = false;
            this._stop(a, this._handleIndex);
            this._change(a, this._handleIndex);
            this._clickOffset = this._handleIndex = null;
            return this._animateOff = false
        },
        _detectOrientation: function () {
            this.orientation = this.options.orientation === "vertical" ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (a) {
            var b;
            if (this.orientation === "horizontal") {
                b = this.elementSize.width;
                a = a.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)
            } else {
                b = this.elementSize.height;
                a = a.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)
            }
            b = a / b;
            if (b > 1)
                b = 1;
            if (b < 0)
                b = 0;
            if (this.orientation === "vertical")
                b = 1 - b;
            a = this._valueMax() - this._valueMin();
            return this._trimAlignValue(this._valueMin() + b * a)
        },
        _start: function (a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                c.value = this.values(b);
                c.values = this.values()
            }
            return this._trigger("start", a, c)
        },
        _slide: function (a, b, c) {
            var f;
            if (this.options.values && this.options.values.length) {
                f = this.values(b ? 0 : 1);
                if (this.options.values.length === 2 && this.options.range === true && (b === 0 && c > f || b === 1 && c < f))
                    c = f;
                if (c !== this.values(b)) {
                    f = this.values();
                    f[b] = c;
                    a = this._trigger("slide", a, {
                        handle: this.handles[b],
                        value: c,
                        values: f
                    });
                    this.values(b ? 0 : 1);
                    a !== false && this.values(b, c, true)
                }
            } else if (c !== this.value()) {
                a = this._trigger("slide", a, {
                    handle: this.handles[b],
                    value: c
                });
                a !== false && this.value(c)
            }
        },
        _stop: function (a, b) {
            var c = {
                handle: this.handles[b],
                value: this.value()
            };
            if (this.options.values && this.options.values.length) {
                c.value = this.values(b);
                c.values = this.values()
            }
            this._trigger("stop", a, c)
        },
        _change: function (a, b) {
            if (!this._keySliding && !this._mouseSliding) {
                var c = {
                    handle: this.handles[b],
                    value: this.value()
                };
                if (this.options.values && this.options.values.length) {
                    c.value = this.values(b);
                    c.values = this.values()
                }
                this._trigger("change", a, c)
            }
        },
        value: function (a) {
            if (arguments.length) {
                this.options.value = this._trimAlignValue(a);
                this._refreshValue();
                this._change(null, 0)
            } else
                return this._value()
        },
        values: function (a, b) {
            var c, f, e;
            if (arguments.length > 1) {
                this.options.values[a] = this._trimAlignValue(b);
                this._refreshValue();
                this._change(null, a)
            } else if (arguments.length)
                if (d.isArray(arguments[0])) {
                    c = this.options.values;
                    f = arguments[0];
                    for (e = 0; e < c.length; e += 1) {
                        c[e] = this._trimAlignValue(f[e]);
                        this._change(null, e)
                    }
                    this._refreshValue()
                } else
                    return this.options.values && this.options.values.length ? this._values(a) : this.value();
            else
                return this._values()
        },
        _setOption: function (a, b) {
            var c, f = 0;
            if (d.isArray(this.options.values))
                f = this.options.values.length;
            d.Widget.prototype._setOption.apply(this, arguments);
            switch (a) {
                case "disabled":
                    if (b) {
                        this.handles.filter(".ui-state-focus").blur();
                        this.handles.removeClass("ui-state-hover");
                        this.handles.propAttr("disabled", true);
                        this.element.addClass("ui-disabled")
                    } else {
                        this.handles.propAttr("disabled", false);
                        this.element.removeClass("ui-disabled")
                    }
                    break;
                case "orientation":
                    this._detectOrientation();
                    this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-" + this.orientation);
                    this._refreshValue();
                    break;
                case "value":
                    this._animateOff = true;
                    this._refreshValue();
                    this._change(null, 0);
                    this._animateOff = false;
                    break;
                case "values":
                    this._animateOff = true;
                    this._refreshValue();
                    for (c = 0; c < f; c += 1)
                        this._change(null, c);
                    this._animateOff = false;
                    break
            }
        },
        _value: function () {
            var a = this.options.value;
            return a = this._trimAlignValue(a)
        },
        _values: function (a) {
            var b, c;
            if (arguments.length) {
                b = this.options.values[a];
                return b = this._trimAlignValue(b)
            } else {
                b = this.options.values.slice();
                for (c = 0; c < b.length; c += 1)
                    b[c] = this._trimAlignValue(b[c]);
                return b
            }
        },
        _trimAlignValue: function (a) {
            if (a <= this._valueMin())
                return this._valueMin();
            if (a >= this._valueMax())
                return this._valueMax();
            var b = this.options.step > 0 ? this.options.step : 1
                , c = (a - this._valueMin()) % b;
            a = a - c;
            if (Math.abs(c) * 2 >= b)
                a += c > 0 ? b : -b;
            return parseFloat(a.toFixed(5))
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.options.max
        },
        _refreshValue: function () {
            var a = this.options.range, b = this.options, c = this, f = !this._animateOff ? b.animate : false, e, j = {}, g, k, l, i;
            if (this.options.values && this.options.values.length)
                this.handles.each(function (h) {
                    e = (c.values(h) - c._valueMin()) / (c._valueMax() - c._valueMin()) * 100;
                    j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                    d(this).stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                    if (c.options.range === true)
                        if (c.orientation === "horizontal") {
                            if (h === 0)
                                c.range.stop(1, 1)[f ? "animate" : "css"]({
                                    left: e + "%"
                                }, b.animate);
                            if (h === 1)
                                c.range[f ? "animate" : "css"]({
                                    width: e - g + "%"
                                }, {
                                    queue: false,
                                    duration: b.animate
                                })
                        } else {
                            if (h === 0)
                                c.range.stop(1, 1)[f ? "animate" : "css"]({
                                    bottom: e + "%"
                                }, b.animate);
                            if (h === 1)
                                c.range[f ? "animate" : "css"]({
                                    height: e - g + "%"
                                }, {
                                    queue: false,
                                    duration: b.animate
                                })
                        }
                    g = e
                });
            else {
                k = this.value();
                l = this._valueMin();
                i = this._valueMax();
                e = i !== l ? (k - l) / (i - l) * 100 : 0;
                j[c.orientation === "horizontal" ? "left" : "bottom"] = e + "%";
                this.handle.stop(1, 1)[f ? "animate" : "css"](j, b.animate);
                if (a === "min" && this.orientation === "horizontal")
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        width: e + "%"
                    }, b.animate);
                if (a === "max" && this.orientation === "horizontal")
                    this.range[f ? "animate" : "css"]({
                        width: 100 - e + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    });
                if (a === "min" && this.orientation === "vertical")
                    this.range.stop(1, 1)[f ? "animate" : "css"]({
                        height: e + "%"
                    }, b.animate);
                if (a === "max" && this.orientation === "vertical")
                    this.range[f ? "animate" : "css"]({
                        height: 100 - e + "%"
                    }, {
                        queue: false,
                        duration: b.animate
                    })
            }
        }
    });
    d.extend(d.ui.slider, {
        version: "1.8.15"
    })
}
)(jQuery);
;/*
 * jQuery UI Tabs 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Tabs
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 */
(function (d, p) {
    function u() {
        return ++v
    }
    function w() {
        return ++x
    }
    var v = 0
        , x = 0;
    d.widget("ui.tabs", {
        options: {
            add: null,
            ajaxOptions: null,
            cache: false,
            cookie: null,
            collapsible: false,
            disable: null,
            disabled: [],
            enable: null,
            event: "click",
            fx: null,
            idPrefix: "ui-tabs-",
            load: null,
            panelTemplate: "<div></div>",
            remove: null,
            select: null,
            show: null,
            spinner: "<em>Loading&#8230;</em>",
            tabTemplate: "<li><a href='#{href}'><span>#{label}</span></a></li>"
        },
        _create: function () {
            this._tabify(true)
        },
        _setOption: function (b, e) {
            if (b == "selected")
                this.options.collapsible && e == this.options.selected || this.select(e);
            else {
                this.options[b] = e;
                this._tabify()
            }
        },
        _tabId: function (b) {
            return b.title && b.title.replace(/\s/g, "_").replace(/[^\w\u00c0-\uFFFF-]/g, "") || this.options.idPrefix + u()
        },
        _sanitizeSelector: function (b) {
            return b.replace(/:/g, "\\:")
        },
        _cookie: function () {
            var b = this.cookie || (this.cookie = this.options.cookie.name || "ui-tabs-" + w());
            return d.cookie.apply(null, [b].concat(d.makeArray(arguments)))
        },
        _ui: function (b, e) {
            return {
                tab: b,
                panel: e,
                index: this.anchors.index(b)
            }
        },
        _cleanup: function () {
            this.lis.filter(".ui-state-processing").removeClass("ui-state-processing").find("span:data(label.tabs)").each(function () {
                var b = d(this);
                b.html(b.data("label.tabs")).removeData("label.tabs")
            })
        },
        _tabify: function (b) {
            function e(g, f) {
                g.css("display", "");
                !d.support.opacity && f.opacity && g[0].style.removeAttribute("filter")
            }
            var a = this
                , c = this.options
                , h = /^#.+/;
            this.list = this.element.find("ol,ul").eq(0);
            this.lis = d(" > li:has(a[href])", this.list);
            this.anchors = this.lis.map(function () {
                return d("a", this)[0]
            });
            this.panels = d([]);
            this.anchors.each(function (g, f) {
                var i = d(f).attr("href"), l = i.split("#")[0], q;
                if (l && (l === location.toString().split("#")[0] || (q = d("base")[0]) && l === q.href)) {
                    i = f.hash;
                    f.href = i
                }
                if (h.test(i))
                    a.panels = a.panels.add(a.element.find(a._sanitizeSelector(i)));
                else if (i && i !== "#") {
                    d.data(f, "href.tabs", i);
                    d.data(f, "load.tabs", i.replace(/#.*$/, ""));
                    i = a._tabId(f);
                    f.href = "#" + i;
                    f = a.element.find("#" + i);
                    if (!f.length) {
                        f = d(c.panelTemplate).attr("id", i).addClass("ui-tabs-panel ui-widget-content ui-corner-bottom").insertAfter(a.panels[g - 1] || a.list);
                        f.data("destroy.tabs", true)
                    }
                    a.panels = a.panels.add(f)
                } else
                    c.disabled.push(g)
            });
            if (b) {
                this.element.addClass("ui-tabs ui-widget ui-widget-content ui-corner-all");
                this.list.addClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
                this.lis.addClass("ui-state-default ui-corner-top");
                this.panels.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom");
                if (c.selected === p) {
                    location.hash && this.anchors.each(function (g, f) {
                        if (f.hash == location.hash) {
                            c.selected = g;
                            return false
                        }
                    });
                    if (typeof c.selected !== "number" && c.cookie)
                        c.selected = parseInt(a._cookie(), 10);
                    if (typeof c.selected !== "number" && this.lis.filter(".ui-tabs-selected").length)
                        c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
                    c.selected = c.selected || (this.lis.length ? 0 : -1)
                } else if (c.selected === null)
                    c.selected = -1;
                c.selected = c.selected >= 0 && this.anchors[c.selected] || c.selected < 0 ? c.selected : 0;
                c.disabled = d.unique(c.disabled.concat(d.map(this.lis.filter(".ui-state-disabled"), function (g) {
                    return a.lis.index(g)
                }))).sort();
                d.inArray(c.selected, c.disabled) != -1 && c.disabled.splice(d.inArray(c.selected, c.disabled), 1);
                this.panels.addClass("ui-tabs-hide");
                this.lis.removeClass("ui-tabs-selected ui-state-active");
                if (c.selected >= 0 && this.anchors.length) {
                    a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash)).removeClass("ui-tabs-hide");
                    this.lis.eq(c.selected).addClass("ui-tabs-selected ui-state-active");
                    a.element.queue("tabs", function () {
                        a._trigger("show", null, a._ui(a.anchors[c.selected], a.element.find(a._sanitizeSelector(a.anchors[c.selected].hash))[0]))
                    });
                    this.load(c.selected)
                }
                d(window).bind("unload", function () {
                    a.lis.add(a.anchors).unbind(".tabs");
                    a.lis = a.anchors = a.panels = null
                })
            } else
                c.selected = this.lis.index(this.lis.filter(".ui-tabs-selected"));
            this.element[c.collapsible ? "addClass" : "removeClass"]("ui-tabs-collapsible");
            c.cookie && this._cookie(c.selected, c.cookie);
            b = 0;
            for (var j; j = this.lis[b]; b++)
                d(j)[d.inArray(b, c.disabled) != -1 && !d(j).hasClass("ui-tabs-selected") ? "addClass" : "removeClass"]("ui-state-disabled");
            c.cache === false && this.anchors.removeData("cache.tabs");
            this.lis.add(this.anchors).unbind(".tabs");
            if (c.event !== "mouseover") {
                var k = function (g, f) {
                    f.is(":not(.ui-state-disabled)") && f.addClass("ui-state-" + g)
                }
                    , n = function (g, f) {
                        f.removeClass("ui-state-" + g)
                    };
                this.lis.bind("mouseover.tabs", function () {
                    k("hover", d(this))
                });
                this.lis.bind("mouseout.tabs", function () {
                    n("hover", d(this))
                });
                this.anchors.bind("focus.tabs", function () {
                    k("focus", d(this).closest("li"))
                });
                this.anchors.bind("blur.tabs", function () {
                    n("focus", d(this).closest("li"))
                })
            }
            var m, o;
            if (c.fx)
                if (d.isArray(c.fx)) {
                    m = c.fx[0];
                    o = c.fx[1]
                } else
                    m = o = c.fx;
            var r = o ? function (g, f) {
                d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                f.hide().removeClass("ui-tabs-hide").animate(o, o.duration || "normal", function () {
                    e(f, o);
                    a._trigger("show", null, a._ui(g, f[0]))
                })
            }
                : function (g, f) {
                    d(g).closest("li").addClass("ui-tabs-selected ui-state-active");
                    f.removeClass("ui-tabs-hide");
                    a._trigger("show", null, a._ui(g, f[0]))
                }
                , s = m ? function (g, f) {
                    f.animate(m, m.duration || "normal", function () {
                        a.lis.removeClass("ui-tabs-selected ui-state-active");
                        f.addClass("ui-tabs-hide");
                        e(f, m);
                        a.element.dequeue("tabs")
                    })
                }
                    : function (g, f) {
                        a.lis.removeClass("ui-tabs-selected ui-state-active");
                        f.addClass("ui-tabs-hide");
                        a.element.dequeue("tabs")
                    }
                ;
            this.anchors.bind(c.event + ".tabs", function () {
                var g = this
                    , f = d(g).closest("li")
                    , i = a.panels.filter(":not(.ui-tabs-hide)")
                    , l = a.element.find(a._sanitizeSelector(g.hash));
                if (f.hasClass("ui-tabs-selected") && !c.collapsible || f.hasClass("ui-state-disabled") || f.hasClass("ui-state-processing") || a.panels.filter(":animated").length || a._trigger("select", null, a._ui(this, l[0])) === false) {
                    this.blur();
                    return false
                }
                c.selected = a.anchors.index(this);
                a.abort();
                if (c.collapsible)
                    if (f.hasClass("ui-tabs-selected")) {
                        c.selected = -1;
                        c.cookie && a._cookie(c.selected, c.cookie);
                        a.element.queue("tabs", function () {
                            s(g, i)
                        }).dequeue("tabs");
                        this.blur();
                        return false
                    } else if (!i.length) {
                        c.cookie && a._cookie(c.selected, c.cookie);
                        a.element.queue("tabs", function () {
                            r(g, l)
                        });
                        a.load(a.anchors.index(this));
                        this.blur();
                        return false
                    }
                c.cookie && a._cookie(c.selected, c.cookie);
                if (l.length) {
                    i.length && a.element.queue("tabs", function () {
                        s(g, i)
                    });
                    a.element.queue("tabs", function () {
                        r(g, l)
                    });
                    a.load(a.anchors.index(this))
                } else
                    throw "jQuery UI Tabs: Mismatching fragment identifier.";
                d.browser.msie && this.blur()
            });
            this.anchors.bind("click.tabs", function () {
                return false
            })
        },
        _getIndex: function (b) {
            if (typeof b == "string")
                b = this.anchors.index(this.anchors.filter("[href$=" + b + "]"));
            return b
        },
        destroy: function () {
            var b = this.options;
            this.abort();
            this.element.unbind(".tabs").removeClass("ui-tabs ui-widget ui-widget-content ui-corner-all ui-tabs-collapsible").removeData("tabs");
            this.list.removeClass("ui-tabs-nav ui-helper-reset ui-helper-clearfix ui-widget-header ui-corner-all");
            this.anchors.each(function () {
                var e = d.data(this, "href.tabs");
                if (e)
                    this.href = e;
                var a = d(this).unbind(".tabs");
                d.each(["href", "load", "cache"], function (c, h) {
                    a.removeData(h + ".tabs")
                })
            });
            this.lis.unbind(".tabs").add(this.panels).each(function () {
                d.data(this, "destroy.tabs") ? d(this).remove() : d(this).removeClass("ui-state-default ui-corner-top ui-tabs-selected ui-state-active ui-state-hover ui-state-focus ui-state-disabled ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide")
            });
            b.cookie && this._cookie(null, b.cookie);
            return this
        },
        add: function (b, e, a) {
            if (a === p)
                a = this.anchors.length;
            var c = this
                , h = this.options;
            e = d(h.tabTemplate.replace(/#\{href\}/g, b).replace(/#\{label\}/g, e));
            b = !b.indexOf("#") ? b.replace("#", "") : this._tabId(d("a", e)[0]);
            e.addClass("ui-state-default ui-corner-top").data("destroy.tabs", true);
            var j = c.element.find("#" + b);
            j.length || (j = d(h.panelTemplate).attr("id", b).data("destroy.tabs", true));
            j.addClass("ui-tabs-panel ui-widget-content ui-corner-bottom ui-tabs-hide");
            if (a >= this.lis.length) {
                e.appendTo(this.list);
                j.appendTo(this.list[0].parentNode)
            } else {
                e.insertBefore(this.lis[a]);
                j.insertBefore(this.panels[a])
            }
            h.disabled = d.map(h.disabled, function (k) {
                return k >= a ? ++k : k
            });
            this._tabify();
            if (this.anchors.length == 1) {
                h.selected = 0;
                e.addClass("ui-tabs-selected ui-state-active");
                j.removeClass("ui-tabs-hide");
                this.element.queue("tabs", function () {
                    c._trigger("show", null, c._ui(c.anchors[0], c.panels[0]))
                });
                this.load(0)
            }
            this._trigger("add", null, this._ui(this.anchors[a], this.panels[a]));
            return this
        },
        remove: function (b) {
            b = this._getIndex(b);
            var e = this.options
                , a = this.lis.eq(b).remove()
                , c = this.panels.eq(b).remove();
            if (a.hasClass("ui-tabs-selected") && this.anchors.length > 1)
                this.select(b + (b + 1 < this.anchors.length ? 1 : -1));
            e.disabled = d.map(d.grep(e.disabled, function (h) {
                return h != b
            }), function (h) {
                return h >= b ? --h : h
            });
            this._tabify();
            this._trigger("remove", null, this._ui(a.find("a")[0], c[0]));
            return this
        },
        enable: function (b) {
            b = this._getIndex(b);
            var e = this.options;
            if (d.inArray(b, e.disabled) != -1) {
                this.lis.eq(b).removeClass("ui-state-disabled");
                e.disabled = d.grep(e.disabled, function (a) {
                    return a != b
                });
                this._trigger("enable", null, this._ui(this.anchors[b], this.panels[b]));
                return this
            }
        },
        disable: function (b) {
            b = this._getIndex(b);
            var e = this.options;
            if (b != e.selected) {
                this.lis.eq(b).addClass("ui-state-disabled");
                e.disabled.push(b);
                e.disabled.sort();
                this._trigger("disable", null, this._ui(this.anchors[b], this.panels[b]))
            }
            return this
        },
        select: function (b) {
            b = this._getIndex(b);
            if (b == -1)
                if (this.options.collapsible && this.options.selected != -1)
                    b = this.options.selected;
                else
                    return this;
            this.anchors.eq(b).trigger(this.options.event + ".tabs");
            return this
        },
        load: function (b) {
            b = this._getIndex(b);
            var e = this
                , a = this.options
                , c = this.anchors.eq(b)[0]
                , h = d.data(c, "load.tabs");
            this.abort();
            if (!h || this.element.queue("tabs").length !== 0 && d.data(c, "cache.tabs"))
                this.element.dequeue("tabs");
            else {
                this.lis.eq(b).addClass("ui-state-processing");
                if (a.spinner) {
                    var j = d("span", c);
                    j.data("label.tabs", j.html()).html(a.spinner)
                }
                this.xhr = d.ajax(d.extend({}, a.ajaxOptions, {
                    url: h,
                    success: function (k, n) {
                        e.element.find(e._sanitizeSelector(c.hash)).html(k);
                        e._cleanup();
                        a.cache && d.data(c, "cache.tabs", true);
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try {
                            a.ajaxOptions.success(k, n)
                        } catch (m) { }
                    },
                    error: function (k, n) {
                        e._cleanup();
                        e._trigger("load", null, e._ui(e.anchors[b], e.panels[b]));
                        try {
                            a.ajaxOptions.error(k, n, b, c)
                        } catch (m) { }
                    }
                }));
                e.element.dequeue("tabs");
                return this
            }
        },
        abort: function () {
            this.element.queue([]);
            this.panels.stop(false, true);
            this.element.queue("tabs", this.element.queue("tabs").splice(-2, 2));
            if (this.xhr) {
                this.xhr.abort();
                delete this.xhr
            }
            this._cleanup();
            return this
        },
        url: function (b, e) {
            this.anchors.eq(b).removeData("cache.tabs").data("load.tabs", e);
            return this
        },
        length: function () {
            return this.anchors.length
        }
    });
    d.extend(d.ui.tabs, {
        version: "1.8.15"
    });
    d.extend(d.ui.tabs.prototype, {
        rotation: null,
        rotate: function (b, e) {
            var a = this
                , c = this.options
                , h = a._rotate || (a._rotate = function (j) {
                    clearTimeout(a.rotation);
                    a.rotation = setTimeout(function () {
                        var k = c.selected;
                        a.select(++k < a.anchors.length ? k : 0)
                    }, b);
                    j && j.stopPropagation()
                }
                );
            e = a._unrotate || (a._unrotate = !e ? function (j) {
                j.clientX && a.rotate(null)
            }
                : function () {
                    t = c.selected;
                    h()
                }
            );
            if (b) {
                this.element.bind("tabsshow", h);
                this.anchors.bind(c.event + ".tabs", e);
                h()
            } else {
                clearTimeout(a.rotation);
                this.element.unbind("tabsshow", h);
                this.anchors.unbind(c.event + ".tabs", e);
                delete this._rotate;
                delete this._unrotate
            }
            return this
        }
    })
}
)(jQuery);
;/*
 * jQuery UI Datepicker 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Datepicker
 *
 * Depends:
 *	jquery.ui.core.js
 */
(function (d, C) {
    function M() {
        this.debug = false;
        this._curInst = null;
        this._keyEvent = false;
        this._disabledInputs = [];
        this._inDialog = this._datepickerShowing = false;
        this._mainDivId = "ui-datepicker-div";
        this._inlineClass = "ui-datepicker-inline";
        this._appendClass = "ui-datepicker-append";
        this._triggerClass = "ui-datepicker-trigger";
        this._dialogClass = "ui-datepicker-dialog";
        this._disableClass = "ui-datepicker-disabled";
        this._unselectableClass = "ui-datepicker-unselectable";
        this._currentClass = "ui-datepicker-current-day";
        this._dayOverClass = "ui-datepicker-days-cell-over";
        this.regional = [];
        this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: false,
            showMonthAfterYear: false,
            yearSuffix: ""
        };
        this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: false,
            hideIfNoPrevNext: false,
            navigationAsDateFormat: false,
            gotoCurrent: false,
            changeMonth: false,
            changeYear: false,
            yearRange: "c-10:c+10",
            showOtherMonths: false,
            selectOtherMonths: false,
            showWeek: false,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: true,
            showButtonPanel: false,
            autoSize: false,
            disabled: false
        };
        d.extend(this._defaults, this.regional[""]);
        this.dpDiv = N(d('<div id="' + this._mainDivId + '" class="ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
    }
    function N(a) {
        return a.bind("mouseout", function (b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            b.length && b.removeClass("ui-state-hover ui-datepicker-prev-hover ui-datepicker-next-hover")
        }).bind("mouseover", function (b) {
            b = d(b.target).closest("button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a");
            if (!(d.datepicker._isDisabledDatepicker(J.inline ? a.parent()[0] : J.input[0]) || !b.length)) {
                b.parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover");
                b.addClass("ui-state-hover");
                b.hasClass("ui-datepicker-prev") && b.addClass("ui-datepicker-prev-hover");
                b.hasClass("ui-datepicker-next") && b.addClass("ui-datepicker-next-hover")
            }
        })
    }
    function H(a, b) {
        d.extend(a, b);
        for (var c in b)
            if (b[c] == null || b[c] == C)
                a[c] = b[c];
        return a
    }
    d.extend(d.ui, {
        datepicker: {
            version: "1.8.15"
        }
    });
    var B = (new Date).getTime(), J;
    d.extend(M.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        log: function () {
            this.debug && console.log.apply("", arguments)
        },
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (a) {
            H(this._defaults, a || {});
            return this
        },
        _attachDatepicker: function (a, b) {
            var c = null;
            for (var e in this._defaults) {
                var f = a.getAttribute("date:" + e);
                if (f) {
                    c = c || {};
                    try {
                        c[e] = eval(f)
                    } catch (h) {
                        c[e] = f
                    }
                }
            }
            e = a.nodeName.toLowerCase();
            f = e == "div" || e == "span";
            if (!a.id) {
                this.uuid += 1;
                a.id = "dp" + this.uuid
            }
            var i = this._newInst(d(a), f);
            i.settings = d.extend({}, b || {}, c || {});
            if (e == "input")
                this._connectDatepicker(a, i);
            else
                f && this._inlineDatepicker(a, i)
        },
        _newInst: function (a, b) {
            return {
                id: a[0].id.replace(/([^A-Za-z0-9_-])/g, "\\\\$1"),
                input: a,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: b,
                dpDiv: !b ? this.dpDiv : N(d('<div class="' + this._inlineClass + ' ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all"></div>'))
            }
        },
        _connectDatepicker: function (a, b) {
            var c = d(a);
            b.append = d([]);
            b.trigger = d([]);
            if (!c.hasClass(this.markerClassName)) {
                this._attachments(c, b);
                c.addClass(this.markerClassName).keydown(this._doKeyDown).keypress(this._doKeyPress).keyup(this._doKeyUp).bind("setData.datepicker", function (e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function (e, f) {
                    return this._get(b, f)
                });
                this._autoSize(b);
                d.data(a, "datepicker", b);
                b.settings.disabled && this._disableDatepicker(a)
            }
        },
        _attachments: function (a, b) {
            var c = this._get(b, "appendText")
                , e = this._get(b, "isRTL");
            b.append && b.append.remove();
            if (c) {
                b.append = d('<span class="' + this._appendClass + '">' + c + "</span>");
                a[e ? "before" : "after"](b.append)
            }
            a.unbind("focus", this._showDatepicker);
            b.trigger && b.trigger.remove();
            c = this._get(b, "showOn");
            if (c == "focus" || c == "both")
                a.focus(this._showDatepicker);
            if (c == "button" || c == "both") {
                c = this._get(b, "buttonText");
                var f = this._get(b, "buttonImage");
                b.trigger = d(this._get(b, "buttonImageOnly") ? d("<img/>").addClass(this._triggerClass).attr({
                    src: f,
                    alt: c,
                    title: c
                }) : d('<button type="button"></button>').addClass(this._triggerClass).html(f == "" ? c : d("<img/>").attr({
                    src: f,
                    alt: c,
                    title: c
                })));
                a[e ? "before" : "after"](b.trigger);
                b.trigger.click(function () {
                    d.datepicker._datepickerShowing && d.datepicker._lastInput == a[0] ? d.datepicker._hideDatepicker() : d.datepicker._showDatepicker(a[0]);
                    return false
                })
            }
        },
        _autoSize: function (a) {
            if (this._get(a, "autoSize") && !a.inline) {
                var b = new Date(2009, 11, 20)
                    , c = this._get(a, "dateFormat");
                if (c.match(/[DM]/)) {
                    var e = function (f) {
                        for (var h = 0, i = 0, g = 0; g < f.length; g++)
                            if (f[g].length > h) {
                                h = f[g].length;
                                i = g
                            }
                        return i
                    };
                    b.setMonth(e(this._get(a, c.match(/MM/) ? "monthNames" : "monthNamesShort")));
                    b.setDate(e(this._get(a, c.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - b.getDay())
                }
                a.input.attr("size", this._formatDate(a, b).length)
            }
        },
        _inlineDatepicker: function (a, b) {
            var c = d(a);
            if (!c.hasClass(this.markerClassName)) {
                c.addClass(this.markerClassName).append(b.dpDiv).bind("setData.datepicker", function (e, f, h) {
                    b.settings[f] = h
                }).bind("getData.datepicker", function (e, f) {
                    return this._get(b, f)
                });
                d.data(a, "datepicker", b);
                this._setDate(b, this._getDefaultDate(b), true);
                this._updateDatepicker(b);
                this._updateAlternate(b);
                b.settings.disabled && this._disableDatepicker(a);
                b.dpDiv.css("display", "block")
            }
        },
        _dialogDatepicker: function (a, b, c, e, f) {
            a = this._dialogInst;
            if (!a) {
                this.uuid += 1;
                this._dialogInput = d('<input type="text" id="' + ("dp" + this.uuid) + '" style="position: absolute; top: -100px; width: 0px; z-index: -10;"/>');
                this._dialogInput.keydown(this._doKeyDown);
                d("body").append(this._dialogInput);
                a = this._dialogInst = this._newInst(this._dialogInput, false);
                a.settings = {};
                d.data(this._dialogInput[0], "datepicker", a)
            }
            H(a.settings, e || {});
            b = b && b.constructor == Date ? this._formatDate(a, b) : b;
            this._dialogInput.val(b);
            this._pos = f ? f.length ? f : [f.pageX, f.pageY] : null;
            if (!this._pos)
                this._pos = [document.documentElement.clientWidth / 2 - 100 + (document.documentElement.scrollLeft || document.body.scrollLeft), document.documentElement.clientHeight / 2 - 150 + (document.documentElement.scrollTop || document.body.scrollTop)];
            this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px");
            a.settings.onSelect = c;
            this._inDialog = true;
            this.dpDiv.addClass(this._dialogClass);
            this._showDatepicker(this._dialogInput[0]);
            d.blockUI && d.blockUI(this.dpDiv);
            d.data(this._dialogInput[0], "datepicker", a);
            return this
        },
        _destroyDatepicker: function (a) {
            var b = d(a)
                , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                d.removeData(a, "datepicker");
                if (e == "input") {
                    c.append.remove();
                    c.trigger.remove();
                    b.removeClass(this.markerClassName).unbind("focus", this._showDatepicker).unbind("keydown", this._doKeyDown).unbind("keypress", this._doKeyPress).unbind("keyup", this._doKeyUp)
                } else if (e == "div" || e == "span")
                    b.removeClass(this.markerClassName).empty()
            }
        },
        _enableDatepicker: function (a) {
            var b = d(a)
                , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = false;
                    c.trigger.filter("button").each(function () {
                        this.disabled = false
                    }).end().filter("img").css({
                        opacity: "1.0",
                        cursor: ""
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().removeClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").removeAttr("disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function (f) {
                    return f == a ? null : f
                })
            }
        },
        _disableDatepicker: function (a) {
            var b = d(a)
                , c = d.data(a, "datepicker");
            if (b.hasClass(this.markerClassName)) {
                var e = a.nodeName.toLowerCase();
                if (e == "input") {
                    a.disabled = true;
                    c.trigger.filter("button").each(function () {
                        this.disabled = true
                    }).end().filter("img").css({
                        opacity: "0.5",
                        cursor: "default"
                    })
                } else if (e == "div" || e == "span") {
                    b = b.children("." + this._inlineClass);
                    b.children().addClass("ui-state-disabled");
                    b.find("select.ui-datepicker-month, select.ui-datepicker-year").attr("disabled", "disabled")
                }
                this._disabledInputs = d.map(this._disabledInputs, function (f) {
                    return f == a ? null : f
                });
                this._disabledInputs[this._disabledInputs.length] = a
            }
        },
        _isDisabledDatepicker: function (a) {
            if (!a)
                return false;
            for (var b = 0; b < this._disabledInputs.length; b++)
                if (this._disabledInputs[b] == a)
                    return true;
            return false
        },
        _getInst: function (a) {
            try {
                return d.data(a, "datepicker")
            } catch (b) {
                throw "Missing instance data for this datepicker";
            }
        },
        _optionDatepicker: function (a, b, c) {
            var e = this._getInst(a);
            if (arguments.length == 2 && typeof b == "string")
                return b == "defaults" ? d.extend({}, d.datepicker._defaults) : e ? b == "all" ? d.extend({}, e.settings) : this._get(e, b) : null;
            var f = b || {};
            if (typeof b == "string") {
                f = {};
                f[b] = c
            }
            if (e) {
                this._curInst == e && this._hideDatepicker();
                var h = this._getDateDatepicker(a, true)
                    , i = this._getMinMaxDate(e, "min")
                    , g = this._getMinMaxDate(e, "max");
                H(e.settings, f);
                if (i !== null && f.dateFormat !== C && f.minDate === C)
                    e.settings.minDate = this._formatDate(e, i);
                if (g !== null && f.dateFormat !== C && f.maxDate === C)
                    e.settings.maxDate = this._formatDate(e, g);
                this._attachments(d(a), e);
                this._autoSize(e);
                this._setDate(e, h);
                this._updateAlternate(e);
                this._updateDatepicker(e)
            }
        },
        _changeDatepicker: function (a, b, c) {
            this._optionDatepicker(a, b, c)
        },
        _refreshDatepicker: function (a) {
            (a = this._getInst(a)) && this._updateDatepicker(a)
        },
        _setDateDatepicker: function (a, b) {
            if (a = this._getInst(a)) {
                this._setDate(a, b);
                this._updateDatepicker(a);
                this._updateAlternate(a)
            }
        },
        _getDateDatepicker: function (a, b) {
            (a = this._getInst(a)) && !a.inline && this._setDateFromField(a, b);
            return a ? this._getDate(a) : null
        },
        _doKeyDown: function (a) {
            var b = d.datepicker._getInst(a.target)
                , c = true
                , e = b.dpDiv.is(".ui-datepicker-rtl");
            b._keyEvent = true;
            if (d.datepicker._datepickerShowing)
                switch (a.keyCode) {
                    case 9:
                        d.datepicker._hideDatepicker();
                        c = false;
                        break;
                    case 13:
                        c = d("td." + d.datepicker._dayOverClass + ":not(." + d.datepicker._currentClass + ")", b.dpDiv);
                        c[0] && d.datepicker._selectDay(a.target, b.selectedMonth, b.selectedYear, c[0]);
                        if (a = d.datepicker._get(b, "onSelect")) {
                            c = d.datepicker._formatDate(b);
                            a.apply(b.input ? b.input[0] : null, [c, b])
                        } else
                            d.datepicker._hideDatepicker();
                        return false;
                    case 27:
                        d.datepicker._hideDatepicker();
                        break;
                    case 33:
                        d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 34:
                        d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 35:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._clearDate(a.target);
                        c = a.ctrlKey || a.metaKey;
                        break;
                    case 36:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._gotoToday(a.target);
                        c = a.ctrlKey || a.metaKey;
                        break;
                    case 37:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._adjustDate(a.target, e ? +1 : -1, "D");
                        c = a.ctrlKey || a.metaKey;
                        if (a.originalEvent.altKey)
                            d.datepicker._adjustDate(a.target, a.ctrlKey ? -d.datepicker._get(b, "stepBigMonths") : -d.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 38:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._adjustDate(a.target, -7, "D");
                        c = a.ctrlKey || a.metaKey;
                        break;
                    case 39:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._adjustDate(a.target, e ? -1 : +1, "D");
                        c = a.ctrlKey || a.metaKey;
                        if (a.originalEvent.altKey)
                            d.datepicker._adjustDate(a.target, a.ctrlKey ? +d.datepicker._get(b, "stepBigMonths") : +d.datepicker._get(b, "stepMonths"), "M");
                        break;
                    case 40:
                        if (a.ctrlKey || a.metaKey)
                            d.datepicker._adjustDate(a.target, +7, "D");
                        c = a.ctrlKey || a.metaKey;
                        break;
                    default:
                        c = false
                }
            else if (a.keyCode == 36 && a.ctrlKey)
                d.datepicker._showDatepicker(this);
            else
                c = false;
            if (c) {
                a.preventDefault();
                a.stopPropagation()
            }
        },
        _doKeyPress: function (a) {
            var b = d.datepicker._getInst(a.target);
            if (d.datepicker._get(b, "constrainInput")) {
                b = d.datepicker._possibleChars(d.datepicker._get(b, "dateFormat"));
                var c = String.fromCharCode(a.charCode == C ? a.keyCode : a.charCode);
                return a.ctrlKey || a.metaKey || c < " " || !b || b.indexOf(c) > -1
            }
        },
        _doKeyUp: function (a) {
            a = d.datepicker._getInst(a.target);
            if (a.input.val() != a.lastVal)
                try {
                    if (d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), a.input ? a.input.val() : null, d.datepicker._getFormatConfig(a))) {
                        d.datepicker._setDateFromField(a);
                        d.datepicker._updateAlternate(a);
                        d.datepicker._updateDatepicker(a)
                    }
                } catch (b) {
                    d.datepicker.log(b)
                }
            return true
        },
        _showDatepicker: function (a) {
            a = a.target || a;
            if (a.nodeName.toLowerCase() != "input")
                a = d("input", a.parentNode)[0];
            if (!(d.datepicker._isDisabledDatepicker(a) || d.datepicker._lastInput == a)) {
                var b = d.datepicker._getInst(a);
                if (d.datepicker._curInst && d.datepicker._curInst != b) {
                    d.datepicker._datepickerShowing && d.datepicker._triggerOnClose(d.datepicker._curInst);
                    d.datepicker._curInst.dpDiv.stop(true, true)
                }
                var c = d.datepicker._get(b, "beforeShow");
                H(b.settings, c ? c.apply(a, [a, b]) : {});
                b.lastVal = null;
                d.datepicker._lastInput = a;
                d.datepicker._setDateFromField(b);
                if (d.datepicker._inDialog)
                    a.value = "";
                if (!d.datepicker._pos) {
                    d.datepicker._pos = d.datepicker._findPos(a);
                    d.datepicker._pos[1] += a.offsetHeight
                }
                var e = false;
                d(a).parents().each(function () {
                    e |= d(this).css("position") == "fixed";
                    return !e
                });
                if (e && d.browser.opera) {
                    d.datepicker._pos[0] -= document.documentElement.scrollLeft;
                    d.datepicker._pos[1] -= document.documentElement.scrollTop
                }
                c = {
                    left: d.datepicker._pos[0],
                    top: d.datepicker._pos[1]
                };
                d.datepicker._pos = null;
                b.dpDiv.empty();
                b.dpDiv.css({
                    position: "absolute",
                    display: "block",
                    top: "-1000px"
                });
                d.datepicker._updateDatepicker(b);
                c = d.datepicker._checkOffset(b, c, e);
                b.dpDiv.css({
                    position: d.datepicker._inDialog && d.blockUI ? "static" : e ? "fixed" : "absolute",
                    display: "none",
                    left: c.left + "px",
                    top: c.top + "px"
                });
                if (!b.inline) {
                    c = d.datepicker._get(b, "showAnim");
                    var f = d.datepicker._get(b, "duration")
                        , h = function () {
                            var i = b.dpDiv.find("iframe.ui-datepicker-cover");
                            if (i.length) {
                                var g = d.datepicker._getBorders(b.dpDiv);
                                i.css({
                                    left: -g[0],
                                    top: -g[1],
                                    width: b.dpDiv.outerWidth(),
                                    height: b.dpDiv.outerHeight()
                                })
                            }
                        };
                    b.dpDiv.zIndex(d(a).zIndex() + 1);
                    d.datepicker._datepickerShowing = true;
                    d.effects && d.effects[c] ? b.dpDiv.show(c, d.datepicker._get(b, "showOptions"), f, h) : b.dpDiv[c || "show"](c ? f : null, h);
                    if (!c || !f)
                        h();
                    b.input.is(":visible") && !b.input.is(":disabled") && b.input.focus();
                    d.datepicker._curInst = b
                }
            }
        },
        _updateDatepicker: function (a) {
            this.maxRows = 4;
            var b = d.datepicker._getBorders(a.dpDiv);
            J = a;
            a.dpDiv.empty().append(this._generateHTML(a));
            var c = a.dpDiv.find("iframe.ui-datepicker-cover");
            c.length && c.css({
                left: -b[0],
                top: -b[1],
                width: a.dpDiv.outerWidth(),
                height: a.dpDiv.outerHeight()
            });
            a.dpDiv.find("." + this._dayOverClass + " a").mouseover();
            b = this._getNumberOfMonths(a);
            c = b[1];
            a.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width("");
            c > 1 && a.dpDiv.addClass("ui-datepicker-multi-" + c).css("width", 17 * c + "em");
            a.dpDiv[(b[0] != 1 || b[1] != 1 ? "add" : "remove") + "Class"]("ui-datepicker-multi");
            a.dpDiv[(this._get(a, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl");
            a == d.datepicker._curInst && d.datepicker._datepickerShowing && a.input && a.input.is(":visible") && !a.input.is(":disabled") && a.input[0] != document.activeElement && a.input.focus();
            if (a.yearshtml) {
                var e = a.yearshtml;
                setTimeout(function () {
                    e === a.yearshtml && a.yearshtml && a.dpDiv.find("select.ui-datepicker-year:first").replaceWith(a.yearshtml);
                    e = a.yearshtml = null
                }, 0)
            }
        },
        _getBorders: function (a) {
            var b = function (c) {
                return {
                    thin: 1,
                    medium: 2,
                    thick: 3
                }[c] || c
            };
            return [parseFloat(b(a.css("border-left-width"))), parseFloat(b(a.css("border-top-width")))]
        },
        _checkOffset: function (a, b, c) {
            var e = a.dpDiv.outerWidth()
                , f = a.dpDiv.outerHeight()
                , h = a.input ? a.input.outerWidth() : 0
                , i = a.input ? a.input.outerHeight() : 0
                , g = document.documentElement.clientWidth + d(document).scrollLeft()
                , j = document.documentElement.clientHeight + d(document).scrollTop();
            b.left -= this._get(a, "isRTL") ? e - h : 0;
            b.left -= c && b.left == a.input.offset().left ? d(document).scrollLeft() : 0;
            b.top -= c && b.top == a.input.offset().top + i ? d(document).scrollTop() : 0;
            b.left -= Math.min(b.left, b.left + e > g && g > e ? Math.abs(b.left + e - g) : 0);
            b.top -= Math.min(b.top, b.top + f > j && j > f ? Math.abs(f + i) : 0);
            return b
        },
        _findPos: function (a) {
            for (var b = this._get(this._getInst(a), "isRTL"); a && (a.type == "hidden" || a.nodeType != 1 || d.expr.filters.hidden(a));)
                a = a[b ? "previousSibling" : "nextSibling"];
            a = d(a).offset();
            return [a.left, a.top]
        },
        _triggerOnClose: function (a) {
            var b = this._get(a, "onClose");
            if (b)
                b.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a])
        },
        _hideDatepicker: function (a) {
            var b = this._curInst;
            if (!(!b || a && b != d.data(a, "datepicker")))
                if (this._datepickerShowing) {
                    a = this._get(b, "showAnim");
                    var c = this._get(b, "duration")
                        , e = function () {
                            d.datepicker._tidyDialog(b);
                            this._curInst = null
                        };
                    d.effects && d.effects[a] ? b.dpDiv.hide(a, d.datepicker._get(b, "showOptions"), c, e) : b.dpDiv[a == "slideDown" ? "slideUp" : a == "fadeIn" ? "fadeOut" : "hide"](a ? c : null, e);
                    a || e();
                    d.datepicker._triggerOnClose(b);
                    this._datepickerShowing = false;
                    this._lastInput = null;
                    if (this._inDialog) {
                        this._dialogInput.css({
                            position: "absolute",
                            left: "0",
                            top: "-100px"
                        });
                        if (d.blockUI) {
                            d.unblockUI();
                            d("body").append(this.dpDiv)
                        }
                    }
                    this._inDialog = false
                }
        },
        _tidyDialog: function (a) {
            a.dpDiv.removeClass(this._dialogClass).unbind(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (a) {
            if (d.datepicker._curInst) {
                a = d(a.target);
                a[0].id != d.datepicker._mainDivId && a.parents("#" + d.datepicker._mainDivId).length == 0 && !a.hasClass(d.datepicker.markerClassName) && !a.hasClass(d.datepicker._triggerClass) && d.datepicker._datepickerShowing && !(d.datepicker._inDialog && d.blockUI) && d.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            if (!this._isDisabledDatepicker(a[0])) {
                this._adjustInstDate(e, b + (c == "M" ? this._get(e, "showCurrentAtPos") : 0), c);
                this._updateDatepicker(e)
            }
        },
        _gotoToday: function (a) {
            a = d(a);
            var b = this._getInst(a[0]);
            if (this._get(b, "gotoCurrent") && b.currentDay) {
                b.selectedDay = b.currentDay;
                b.drawMonth = b.selectedMonth = b.currentMonth;
                b.drawYear = b.selectedYear = b.currentYear
            } else {
                var c = new Date;
                b.selectedDay = c.getDate();
                b.drawMonth = b.selectedMonth = c.getMonth();
                b.drawYear = b.selectedYear = c.getFullYear()
            }
            this._notifyChange(b);
            this._adjustDate(a)
        },
        _selectMonthYear: function (a, b, c) {
            a = d(a);
            var e = this._getInst(a[0]);
            e["selected" + (c == "M" ? "Month" : "Year")] = e["draw" + (c == "M" ? "Month" : "Year")] = parseInt(b.options[b.selectedIndex].value, 10);
            this._notifyChange(e);
            this._adjustDate(a)
        },
        _selectDay: function (a, b, c, e) {
            var f = d(a);
            if (!(d(e).hasClass(this._unselectableClass) || this._isDisabledDatepicker(f[0]))) {
                f = this._getInst(f[0]);
                f.selectedDay = f.currentDay = d("a", e).html();
                f.selectedMonth = f.currentMonth = b;
                f.selectedYear = f.currentYear = c;
                this._selectDate(a, this._formatDate(f, f.currentDay, f.currentMonth, f.currentYear))
            }
        },
        _clearDate: function (a) {
            a = d(a);
            this._getInst(a[0]);
            this._selectDate(a, "")
        },
        _selectDate: function (a, b) {
            a = this._getInst(d(a)[0]);
            b = b != null ? b : this._formatDate(a);
            a.input && a.input.val(b);
            this._updateAlternate(a);
            var c = this._get(a, "onSelect");
            if (c)
                c.apply(a.input ? a.input[0] : null, [b, a]);
            else
                a.input && a.input.trigger("change");
            if (a.inline)
                this._updateDatepicker(a);
            else {
                this._hideDatepicker();
                this._lastInput = a.input[0];
                a.input.focus();
                this._lastInput = null
            }
        },
        _updateAlternate: function (a) {
            var b = this._get(a, "altField");
            if (b) {
                var c = this._get(a, "altFormat") || this._get(a, "dateFormat")
                    , e = this._getDate(a)
                    , f = this.formatDate(c, e, this._getFormatConfig(a));
                d(b).each(function () {
                    d(this).val(f)
                })
            }
        },
        noWeekends: function (a) {
            a = a.getDay();
            return [a > 0 && a < 6, ""]
        },
        iso8601Week: function (a) {
            a = new Date(a.getTime());
            a.setDate(a.getDate() + 4 - (a.getDay() || 7));
            var b = a.getTime();
            a.setMonth(0);
            a.setDate(1);
            return Math.floor(Math.round((b - a) / 864E5) / 7) + 1
        },
        parseDate: function (a, b, c) {
            if (a == null || b == null)
                throw "Invalid arguments";
            b = typeof b == "object" ? b.toString() : b + "";
            if (b == "")
                return null;
            var e = (c ? c.shortYearCutoff : null) || this._defaults.shortYearCutoff;
            e = typeof e != "string" ? e : (new Date).getFullYear() % 100 + parseInt(e, 10);
            for (var f = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort, h = (c ? c.dayNames : null) || this._defaults.dayNames, i = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort, g = (c ? c.monthNames : null) || this._defaults.monthNames, j = c = -1, l = -1, u = -1, k = false, o = function (p) {
                (p = A + 1 < a.length && a.charAt(A + 1) == p) && A++;
                return p
            }, m = function (p) {
                var D = o(p);
                p = new RegExp("^\\d{1," + (p == "@" ? 14 : p == "!" ? 20 : p == "y" && D ? 4 : p == "o" ? 3 : 2) + "}");
                p = b.substring(q).match(p);
                if (!p)
                    throw "Missing number at position " + q;
                q += p[0].length;
                return parseInt(p[0], 10)
            }, n = function (p, D, K) {
                p = d.map(o(p) ? K : D, function (w, x) {
                    return [[x, w]]
                }).sort(function (w, x) {
                    return -(w[1].length - x[1].length)
                });
                var E = -1;
                d.each(p, function (w, x) {
                    w = x[1];
                    if (b.substr(q, w.length).toLowerCase() == w.toLowerCase()) {
                        E = x[0];
                        q += w.length;
                        return false
                    }
                });
                if (E != -1)
                    return E + 1;
                else
                    throw "Unknown name at position " + q;
            }, s = function () {
                if (b.charAt(q) != a.charAt(A))
                    throw "Unexpected literal at position " + q;
                q++
            }, q = 0, A = 0; A < a.length; A++)
                if (k)
                    if (a.charAt(A) == "'" && !o("'"))
                        k = false;
                    else
                        s();
                else
                    switch (a.charAt(A)) {
                        case "d":
                            l = m("d");
                            break;
                        case "D":
                            n("D", f, h);
                            break;
                        case "o":
                            u = m("o");
                            break;
                        case "m":
                            j = m("m");
                            break;
                        case "M":
                            j = n("M", i, g);
                            break;
                        case "y":
                            c = m("y");
                            break;
                        case "@":
                            var v = new Date(m("@"));
                            c = v.getFullYear();
                            j = v.getMonth() + 1;
                            l = v.getDate();
                            break;
                        case "!":
                            v = new Date((m("!") - this._ticksTo1970) / 1E4);
                            c = v.getFullYear();
                            j = v.getMonth() + 1;
                            l = v.getDate();
                            break;
                        case "'":
                            if (o("'"))
                                s();
                            else
                                k = true;
                            break;
                        default:
                            s()
                    }
            if (q < b.length)
                throw "Extra/unparsed characters found in date: " + b.substring(q);
            if (c == -1)
                c = (new Date).getFullYear();
            else if (c < 100)
                c += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c <= e ? 0 : -100);
            if (u > -1) {
                j = 1;
                l = u;
                do {
                    e = this._getDaysInMonth(c, j - 1);
                    if (l <= e)
                        break;
                    j++;
                    l -= e
                } while (1)
            }
            v = this._daylightSavingAdjust(new Date(c, j - 1, l));
            if (v.getFullYear() != c || v.getMonth() + 1 != j || v.getDate() != l)
                throw "Invalid date";
            return v
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)) * 24 * 60 * 60 * 1E7,
        formatDate: function (a, b, c) {
            if (!b)
                return "";
            var e = (c ? c.dayNamesShort : null) || this._defaults.dayNamesShort
                , f = (c ? c.dayNames : null) || this._defaults.dayNames
                , h = (c ? c.monthNamesShort : null) || this._defaults.monthNamesShort;
            c = (c ? c.monthNames : null) || this._defaults.monthNames;
            var i = function (o) {
                (o = k + 1 < a.length && a.charAt(k + 1) == o) && k++;
                return o
            }
                , g = function (o, m, n) {
                    m = "" + m;
                    if (i(o))
                        for (; m.length < n;)
                            m = "0" + m;
                    return m
                }
                , j = function (o, m, n, s) {
                    return i(o) ? s[m] : n[m]
                }
                , l = ""
                , u = false;
            if (b)
                for (var k = 0; k < a.length; k++)
                    if (u)
                        if (a.charAt(k) == "'" && !i("'"))
                            u = false;
                        else
                            l += a.charAt(k);
                    else
                        switch (a.charAt(k)) {
                            case "d":
                                l += g("d", b.getDate(), 2);
                                break;
                            case "D":
                                l += j("D", b.getDay(), e, f);
                                break;
                            case "o":
                                l += g("o", Math.round(((new Date(b.getFullYear(), b.getMonth(), b.getDate())).getTime() - (new Date(b.getFullYear(), 0, 0)).getTime()) / 864E5), 3);
                                break;
                            case "m":
                                l += g("m", b.getMonth() + 1, 2);
                                break;
                            case "M":
                                l += j("M", b.getMonth(), h, c);
                                break;
                            case "y":
                                l += i("y") ? b.getFullYear() : (b.getYear() % 100 < 10 ? "0" : "") + b.getYear() % 100;
                                break;
                            case "@":
                                l += b.getTime();
                                break;
                            case "!":
                                l += b.getTime() * 1E4 + this._ticksTo1970;
                                break;
                            case "'":
                                if (i("'"))
                                    l += "'";
                                else
                                    u = true;
                                break;
                            default:
                                l += a.charAt(k)
                        }
            return l
        },
        _possibleChars: function (a) {
            for (var b = "", c = false, e = function (h) {
                (h = f + 1 < a.length && a.charAt(f + 1) == h) && f++;
                return h
            }, f = 0; f < a.length; f++)
                if (c)
                    if (a.charAt(f) == "'" && !e("'"))
                        c = false;
                    else
                        b += a.charAt(f);
                else
                    switch (a.charAt(f)) {
                        case "d":
                        case "m":
                        case "y":
                        case "@":
                            b += "0123456789";
                            break;
                        case "D":
                        case "M":
                            return null;
                        case "'":
                            if (e("'"))
                                b += "'";
                            else
                                c = true;
                            break;
                        default:
                            b += a.charAt(f)
                    }
            return b
        },
        _get: function (a, b) {
            return a.settings[b] !== C ? a.settings[b] : this._defaults[b]
        },
        _setDateFromField: function (a, b) {
            if (a.input.val() != a.lastVal) {
                var c = this._get(a, "dateFormat"), e = a.lastVal = a.input ? a.input.val() : null, f, h;
                f = h = this._getDefaultDate(a);
                var i = this._getFormatConfig(a);
                try {
                    f = this.parseDate(c, e, i) || h
                } catch (g) {
                    this.log(g);
                    e = b ? "" : e
                }
                a.selectedDay = f.getDate();
                a.drawMonth = a.selectedMonth = f.getMonth();
                a.drawYear = a.selectedYear = f.getFullYear();
                a.currentDay = e ? f.getDate() : 0;
                a.currentMonth = e ? f.getMonth() : 0;
                a.currentYear = e ? f.getFullYear() : 0;
                this._adjustInstDate(a)
            }
        },
        _getDefaultDate: function (a) {
            return this._restrictMinMax(a, this._determineDate(a, this._get(a, "defaultDate"), new Date))
        },
        _determineDate: function (a, b, c) {
            var e = function (h) {
                var i = new Date;
                i.setDate(i.getDate() + h);
                return i
            }
                , f = function (h) {
                    try {
                        return d.datepicker.parseDate(d.datepicker._get(a, "dateFormat"), h, d.datepicker._getFormatConfig(a))
                    } catch (i) { }
                    var g = (h.toLowerCase().match(/^c/) ? d.datepicker._getDate(a) : null) || new Date
                        , j = g.getFullYear()
                        , l = g.getMonth();
                    g = g.getDate();
                    for (var u = /([+-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, k = u.exec(h); k;) {
                        switch (k[2] || "d") {
                            case "d":
                            case "D":
                                g += parseInt(k[1], 10);
                                break;
                            case "w":
                            case "W":
                                g += parseInt(k[1], 10) * 7;
                                break;
                            case "m":
                            case "M":
                                l += parseInt(k[1], 10);
                                g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                                break;
                            case "y":
                            case "Y":
                                j += parseInt(k[1], 10);
                                g = Math.min(g, d.datepicker._getDaysInMonth(j, l));
                                break
                        }
                        k = u.exec(h)
                    }
                    return new Date(j, l, g)
                };
            if (b = (b = b == null || b === "" ? c : typeof b == "string" ? f(b) : typeof b == "number" ? isNaN(b) ? c : e(b) : new Date(b.getTime())) && b.toString() == "Invalid Date" ? c : b) {
                b.setHours(0);
                b.setMinutes(0);
                b.setSeconds(0);
                b.setMilliseconds(0)
            }
            return this._daylightSavingAdjust(b)
        },
        _daylightSavingAdjust: function (a) {
            if (!a)
                return null;
            a.setHours(a.getHours() > 12 ? a.getHours() + 2 : 0);
            return a
        },
        _setDate: function (a, b, c) {
            var e = !b
                , f = a.selectedMonth
                , h = a.selectedYear;
            b = this._restrictMinMax(a, this._determineDate(a, b, new Date));
            a.selectedDay = a.currentDay = b.getDate();
            a.drawMonth = a.selectedMonth = a.currentMonth = b.getMonth();
            a.drawYear = a.selectedYear = a.currentYear = b.getFullYear();
            if ((f != a.selectedMonth || h != a.selectedYear) && !c)
                this._notifyChange(a);
            this._adjustInstDate(a);
            if (a.input)
                a.input.val(e ? "" : this._formatDate(a));
            if (c = this._get(a, "onSelect")) {
                e = this._formatDate(a);
                c.apply(a.input ? a.input[0] : null, [e, a])
            }
        },
        _getDate: function (a) {
            return !a.currentYear || a.input && a.input.val() == "" ? null : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay))
        },
        _generateHTML: function (a) {
            var b = new Date;
            b = this._daylightSavingAdjust(new Date(b.getFullYear(), b.getMonth(), b.getDate()));
            var c = this._get(a, "isRTL")
                , e = this._get(a, "showButtonPanel")
                , f = this._get(a, "hideIfNoPrevNext")
                , h = this._get(a, "navigationAsDateFormat")
                , i = this._getNumberOfMonths(a)
                , g = this._get(a, "showCurrentAtPos")
                , j = this._get(a, "stepMonths")
                , l = i[0] != 1 || i[1] != 1
                , u = this._daylightSavingAdjust(!a.currentDay ? new Date(9999, 9, 9) : new Date(a.currentYear, a.currentMonth, a.currentDay))
                , k = this._getMinMaxDate(a, "min")
                , o = this._getMinMaxDate(a, "max");
            g = a.drawMonth - g;
            var m = a.drawYear;
            if (g < 0) {
                g += 12;
                m--
            }
            if (o) {
                var n = this._daylightSavingAdjust(new Date(o.getFullYear(), o.getMonth() - i[0] * i[1] + 1, o.getDate()));
                for (n = k && n < k ? k : n; this._daylightSavingAdjust(new Date(m, g, 1)) > n;) {
                    g--;
                    if (g < 0) {
                        g = 11;
                        m--
                    }
                }
            }
            a.drawMonth = g;
            a.drawYear = m;
            n = this._get(a, "prevText");
            n = !h ? n : this.formatDate(n, this._daylightSavingAdjust(new Date(m, g - j, 1)), this._getFormatConfig(a));
            n = this._canAdjustMonth(a, -1, m, g) ? '<a class="ui-datepicker-prev ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', -" + j + ", 'M');\" title=\"" + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>" : f ? "" : '<a class="ui-datepicker-prev ui-corner-all ui-state-disabled" title="' + n + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "e" : "w") + '">' + n + "</span></a>";
            var s = this._get(a, "nextText");
            s = !h ? s : this.formatDate(s, this._daylightSavingAdjust(new Date(m, g + j, 1)), this._getFormatConfig(a));
            f = this._canAdjustMonth(a, +1, m, g) ? '<a class="ui-datepicker-next ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._adjustDate('#" + a.id + "', +" + j + ", 'M');\" title=\"" + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>" : f ? "" : '<a class="ui-datepicker-next ui-corner-all ui-state-disabled" title="' + s + '"><span class="ui-icon ui-icon-circle-triangle-' + (c ? "w" : "e") + '">' + s + "</span></a>";
            j = this._get(a, "currentText");
            s = this._get(a, "gotoCurrent") && a.currentDay ? u : b;
            j = !h ? j : this.formatDate(j, s, this._getFormatConfig(a));
            h = !a.inline ? '<button type="button" class="ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all" onclick="DP_jQuery_' + B + '.datepicker._hideDatepicker();">' + this._get(a, "closeText") + "</button>" : "";
            e = e ? '<div class="ui-datepicker-buttonpane ui-widget-content">' + (c ? h : "") + (this._isInRange(a, s) ? '<button type="button" class="ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all" onclick="DP_jQuery_' + B + ".datepicker._gotoToday('#" + a.id + "');\">" + j + "</button>" : "") + (c ? "" : h) + "</div>" : "";
            h = parseInt(this._get(a, "firstDay"), 10);
            h = isNaN(h) ? 0 : h;
            j = this._get(a, "showWeek");
            s = this._get(a, "dayNames");
            this._get(a, "dayNamesShort");
            var q = this._get(a, "dayNamesMin")
                , A = this._get(a, "monthNames")
                , v = this._get(a, "monthNamesShort")
                , p = this._get(a, "beforeShowDay")
                , D = this._get(a, "showOtherMonths")
                , K = this._get(a, "selectOtherMonths");
            this._get(a, "calculateWeek");
            for (var E = this._getDefaultDate(a), w = "", x = 0; x < i[0]; x++) {
                var O = "";
                this.maxRows = 4;
                for (var G = 0; G < i[1]; G++) {
                    var P = this._daylightSavingAdjust(new Date(m, g, a.selectedDay))
                        , t = " ui-corner-all"
                        , y = "";
                    if (l) {
                        y += '<div class="ui-datepicker-group';
                        if (i[1] > 1)
                            switch (G) {
                                case 0:
                                    y += " ui-datepicker-group-first";
                                    t = " ui-corner-" + (c ? "right" : "left");
                                    break;
                                case i[1] - 1:
                                    y += " ui-datepicker-group-last";
                                    t = " ui-corner-" + (c ? "left" : "right");
                                    break;
                                default:
                                    y += " ui-datepicker-group-middle";
                                    t = "";
                                    break
                            }
                        y += '">'
                    }
                    y += '<div class="ui-datepicker-header ui-widget-header ui-helper-clearfix' + t + '">' + (/all|left/.test(t) && x == 0 ? c ? f : n : "") + (/all|right/.test(t) && x == 0 ? c ? n : f : "") + this._generateMonthYearHeader(a, g, m, k, o, x > 0 || G > 0, A, v) + '</div><table class="ui-datepicker-calendar"><thead><tr>';
                    var z = j ? '<th class="ui-datepicker-week-col">' + this._get(a, "weekHeader") + "</th>" : "";
                    for (t = 0; t < 7; t++) {
                        var r = (t + h) % 7;
                        z += "<th" + ((t + h + 6) % 7 >= 5 ? ' class="ui-datepicker-week-end"' : "") + '><span title="' + s[r] + '">' + q[r] + "</span></th>"
                    }
                    y += z + "</tr></thead><tbody>";
                    z = this._getDaysInMonth(m, g);
                    if (m == a.selectedYear && g == a.selectedMonth)
                        a.selectedDay = Math.min(a.selectedDay, z);
                    t = (this._getFirstDayOfMonth(m, g) - h + 7) % 7;
                    z = Math.ceil((t + z) / 7);
                    this.maxRows = z = l ? this.maxRows > z ? this.maxRows : z : z;
                    r = this._daylightSavingAdjust(new Date(m, g, 1 - t));
                    for (var Q = 0; Q < z; Q++) {
                        y += "<tr>";
                        var R = !j ? "" : '<td class="ui-datepicker-week-col">' + this._get(a, "calculateWeek")(r) + "</td>";
                        for (t = 0; t < 7; t++) {
                            var I = p ? p.apply(a.input ? a.input[0] : null, [r]) : [true, ""]
                                , F = r.getMonth() != g
                                , L = F && !K || !I[0] || k && r < k || o && r > o;
                            R += '<td class="' + ((t + h + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (F ? " ui-datepicker-other-month" : "") + (r.getTime() == P.getTime() && g == a.selectedMonth && a._keyEvent || E.getTime() == r.getTime() && E.getTime() == P.getTime() ? " " + this._dayOverClass : "") + (L ? " " + this._unselectableClass + " ui-state-disabled" : "") + (F && !D ? "" : " " + I[1] + (r.getTime() == u.getTime() ? " " + this._currentClass : "") + (r.getTime() == b.getTime() ? " ui-datepicker-today" : "")) + '"' + ((!F || D) && I[2] ? ' title="' + I[2] + '"' : "") + (L ? "" : ' onclick="DP_jQuery_' + B + ".datepicker._selectDay('#" + a.id + "'," + r.getMonth() + "," + r.getFullYear() + ', this);return false;"') + ">" + (F && !D ? "&#xa0;" : L ? '<span class="ui-state-default">' + r.getDate() + "</span>" : '<a class="ui-state-default' + (r.getTime() == b.getTime() ? " ui-state-highlight" : "") + (r.getTime() == u.getTime() ? " ui-state-active" : "") + (F ? " ui-priority-secondary" : "") + '" href="#">' + r.getDate() + "</a>") + "</td>";
                            r.setDate(r.getDate() + 1);
                            r = this._daylightSavingAdjust(r)
                        }
                        y += R + "</tr>"
                    }
                    g++;
                    if (g > 11) {
                        g = 0;
                        m++
                    }
                    y += "</tbody></table>" + (l ? "</div>" + (i[0] > 0 && G == i[1] - 1 ? '<div class="ui-datepicker-row-break"></div>' : "") : "");
                    O += y
                }
                w += O
            }
            w += e + (d.browser.msie && parseInt(d.browser.version, 10) < 7 && !a.inline ? '<iframe src="javascript:false;" class="ui-datepicker-cover" frameborder="0"></iframe>' : "");
            a._keyEvent = false;
            return w
        },
        _generateMonthYearHeader: function (a, b, c, e, f, h, i, g) {
            var j = this._get(a, "changeMonth")
                , l = this._get(a, "changeYear")
                , u = this._get(a, "showMonthAfterYear")
                , k = '<div class="ui-datepicker-title">'
                , o = "";
            if (h || !j)
                o += '<span class="ui-datepicker-month">' + i[b] + "</span>";
            else {
                i = e && e.getFullYear() == c;
                var m = f && f.getFullYear() == c;
                o += '<select class="ui-datepicker-month" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'M');\" >";
                for (var n = 0; n < 12; n++)
                    if ((!i || n >= e.getMonth()) && (!m || n <= f.getMonth()))
                        o += '<option value="' + n + '"' + (n == b ? ' selected="selected"' : "") + ">" + g[n] + "</option>";
                o += "</select>"
            }
            u || (k += o + (h || !(j && l) ? "&#xa0;" : ""));
            if (!a.yearshtml) {
                a.yearshtml = "";
                if (h || !l)
                    k += '<span class="ui-datepicker-year">' + c + "</span>";
                else {
                    g = this._get(a, "yearRange").split(":");
                    var s = (new Date).getFullYear();
                    i = function (q) {
                        q = q.match(/c[+-].*/) ? c + parseInt(q.substring(1), 10) : q.match(/[+-].*/) ? s + parseInt(q, 10) : parseInt(q, 10);
                        return isNaN(q) ? s : q
                    }
                        ;
                    b = i(g[0]);
                    g = Math.max(b, i(g[1] || ""));
                    b = e ? Math.max(b, e.getFullYear()) : b;
                    g = f ? Math.min(g, f.getFullYear()) : g;
                    for (a.yearshtml += '<select class="ui-datepicker-year" onchange="DP_jQuery_' + B + ".datepicker._selectMonthYear('#" + a.id + "', this, 'Y');\" >"; b <= g; b++)
                        a.yearshtml += '<option value="' + b + '"' + (b == c ? ' selected="selected"' : "") + ">" + b + "</option>";
                    a.yearshtml += "</select>";
                    k += a.yearshtml;
                    a.yearshtml = null
                }
            }
            k += this._get(a, "yearSuffix");
            if (u)
                k += (h || !(j && l) ? "&#xa0;" : "") + o;
            k += "</div>";
            return k
        },
        _adjustInstDate: function (a, b, c) {
            var e = a.drawYear + (c == "Y" ? b : 0)
                , f = a.drawMonth + (c == "M" ? b : 0);
            b = Math.min(a.selectedDay, this._getDaysInMonth(e, f)) + (c == "D" ? b : 0);
            e = this._restrictMinMax(a, this._daylightSavingAdjust(new Date(e, f, b)));
            a.selectedDay = e.getDate();
            a.drawMonth = a.selectedMonth = e.getMonth();
            a.drawYear = a.selectedYear = e.getFullYear();
            if (c == "M" || c == "Y")
                this._notifyChange(a)
        },
        _restrictMinMax: function (a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            b = c && b < c ? c : b;
            return b = a && b > a ? a : b
        },
        _notifyChange: function (a) {
            var b = this._get(a, "onChangeMonthYear");
            if (b)
                b.apply(a.input ? a.input[0] : null, [a.selectedYear, a.selectedMonth + 1, a])
        },
        _getNumberOfMonths: function (a) {
            a = this._get(a, "numberOfMonths");
            return a == null ? [1, 1] : typeof a == "number" ? [1, a] : a
        },
        _getMinMaxDate: function (a, b) {
            return this._determineDate(a, this._get(a, b + "Date"), null)
        },
        _getDaysInMonth: function (a, b) {
            return 32 - this._daylightSavingAdjust(new Date(a, b, 32)).getDate()
        },
        _getFirstDayOfMonth: function (a, b) {
            return (new Date(a, b, 1)).getDay()
        },
        _canAdjustMonth: function (a, b, c, e) {
            var f = this._getNumberOfMonths(a);
            c = this._daylightSavingAdjust(new Date(c, e + (b < 0 ? b : f[0] * f[1]), 1));
            b < 0 && c.setDate(this._getDaysInMonth(c.getFullYear(), c.getMonth()));
            return this._isInRange(a, c)
        },
        _isInRange: function (a, b) {
            var c = this._getMinMaxDate(a, "min");
            a = this._getMinMaxDate(a, "max");
            return (!c || b.getTime() >= c.getTime()) && (!a || b.getTime() <= a.getTime())
        },
        _getFormatConfig: function (a) {
            var b = this._get(a, "shortYearCutoff");
            b = typeof b != "string" ? b : (new Date).getFullYear() % 100 + parseInt(b, 10);
            return {
                shortYearCutoff: b,
                dayNamesShort: this._get(a, "dayNamesShort"),
                dayNames: this._get(a, "dayNames"),
                monthNamesShort: this._get(a, "monthNamesShort"),
                monthNames: this._get(a, "monthNames")
            }
        },
        _formatDate: function (a, b, c, e) {
            if (!b) {
                a.currentDay = a.selectedDay;
                a.currentMonth = a.selectedMonth;
                a.currentYear = a.selectedYear
            }
            b = b ? typeof b == "object" ? b : this._daylightSavingAdjust(new Date(e, c, b)) : this._daylightSavingAdjust(new Date(a.currentYear, a.currentMonth, a.currentDay));
            return this.formatDate(this._get(a, "dateFormat"), b, this._getFormatConfig(a))
        }
    });
    d.fn.datepicker = function (a) {
        if (!this.length)
            return this;
        if (!d.datepicker.initialized) {
            d(document).mousedown(d.datepicker._checkExternalClick).find("body").append(d.datepicker.dpDiv);
            d.datepicker.initialized = true
        }
        var b = Array.prototype.slice.call(arguments, 1);
        if (typeof a == "string" && (a == "isDisabled" || a == "getDate" || a == "widget"))
            return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        if (a == "option" && arguments.length == 2 && typeof arguments[1] == "string")
            return d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this[0]].concat(b));
        return this.each(function () {
            typeof a == "string" ? d.datepicker["_" + a + "Datepicker"].apply(d.datepicker, [this].concat(b)) : d.datepicker._attachDatepicker(this, a)
        })
    }
        ;
    d.datepicker = new M;
    d.datepicker.initialized = false;
    d.datepicker.uuid = (new Date).getTime();
    d.datepicker.version = "1.8.15";
    window["DP_jQuery_" + B] = d
}
)(jQuery);
;/*
 * jQuery UI Progressbar 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Progressbar
 *
 * Depends:
 *   jquery.ui.core.js
 *   jquery.ui.widget.js
 */
(function (b, d) {
    b.widget("ui.progressbar", {
        options: {
            value: 0,
            max: 100
        },
        min: 0,
        _create: function () {
            this.element.addClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").attr({
                role: "progressbar",
                "aria-valuemin": this.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._value()
            });
            this.valueDiv = b("<div class='ui-progressbar-value ui-widget-header ui-corner-left'></div>").appendTo(this.element);
            this.oldValue = this._value();
            this._refreshValue()
        },
        destroy: function () {
            this.element.removeClass("ui-progressbar ui-widget ui-widget-content ui-corner-all").removeAttr("role").removeAttr("aria-valuemin").removeAttr("aria-valuemax").removeAttr("aria-valuenow");
            this.valueDiv.remove();
            b.Widget.prototype.destroy.apply(this, arguments)
        },
        value: function (a) {
            if (a === d)
                return this._value();
            this._setOption("value", a);
            return this
        },
        _setOption: function (a, c) {
            if (a === "value") {
                this.options.value = c;
                this._refreshValue();
                this._value() === this.options.max && this._trigger("complete")
            }
            b.Widget.prototype._setOption.apply(this, arguments)
        },
        _value: function () {
            var a = this.options.value;
            if (typeof a !== "number")
                a = 0;
            return Math.min(this.options.max, Math.max(this.min, a))
        },
        _percentage: function () {
            return 100 * this._value() / this.options.max
        },
        _refreshValue: function () {
            var a = this.value()
                , c = this._percentage();
            if (this.oldValue !== a) {
                this.oldValue = a;
                this._trigger("change")
            }
            this.valueDiv.toggle(a > this.min).toggleClass("ui-corner-right", a === this.options.max).width(c.toFixed(0) + "%");
            this.element.attr("aria-valuenow", a)
        }
    });
    b.extend(b.ui.progressbar, {
        version: "1.8.15"
    })
}
)(jQuery);
;/*
 * jQuery UI Effects 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
jQuery.effects || function (f, j) {
    function m(c) {
        var a;
        if (c && c.constructor == Array && c.length == 3)
            return c;
        if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(c))
            return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3], 10)];
        if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(c))
            return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55];
        if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(c))
            return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)];
        if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(c))
            return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
        if (/rgba\(0, 0, 0, 0\)/.exec(c))
            return n.transparent;
        return n[f.trim(c).toLowerCase()]
    }
    function s(c, a) {
        var b;
        do {
            b = f.curCSS(c, a);
            if (b != "" && b != "transparent" || f.nodeName(c, "body"))
                break;
            a = "backgroundColor"
        } while (c = c.parentNode);
        return m(b)
    }
    function o() {
        var c = document.defaultView ? document.defaultView.getComputedStyle(this, null) : this.currentStyle, a = {}, b, d;
        if (c && c.length && c[0] && c[c[0]])
            for (var e = c.length; e--;) {
                b = c[e];
                if (typeof c[b] == "string") {
                    d = b.replace(/\-(\w)/g, function (g, h) {
                        return h.toUpperCase()
                    });
                    a[d] = c[b]
                }
            }
        else
            for (b in c)
                if (typeof c[b] === "string")
                    a[b] = c[b];
        return a
    }
    function p(c) {
        var a, b;
        for (a in c) {
            b = c[a];
            if (b == null || f.isFunction(b) || a in t || /scrollbar/.test(a) || !/color/i.test(a) && isNaN(parseFloat(b)))
                delete c[a]
        }
        return c
    }
    function u(c, a) {
        var b = {
            _: 0
        }, d;
        for (d in a)
            if (c[d] != a[d])
                b[d] = a[d];
        return b
    }
    function k(c, a, b, d) {
        if (typeof c == "object") {
            d = a;
            b = null;
            a = c;
            c = a.effect
        }
        if (f.isFunction(a)) {
            d = a;
            b = null;
            a = {}
        }
        if (typeof a == "number" || f.fx.speeds[a]) {
            d = b;
            b = a;
            a = {}
        }
        if (f.isFunction(b)) {
            d = b;
            b = null
        }
        a = a || {};
        b = b || a.duration;
        b = f.fx.off ? 0 : typeof b == "number" ? b : b in f.fx.speeds ? f.fx.speeds[b] : f.fx.speeds._default;
        d = d || a.complete;
        return [c, a, b, d]
    }
    function l(c) {
        if (!c || typeof c === "number" || f.fx.speeds[c])
            return true;
        if (typeof c === "string" && !f.effects[c])
            return true;
        return false
    }
    f.effects = {};
    f.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "borderColor", "color", "outlineColor"], function (c, a) {
        f.fx.step[a] = function (b) {
            if (!b.colorInit) {
                b.start = s(b.elem, a);
                b.end = m(b.end);
                b.colorInit = true
            }
            b.elem.style[a] = "rgb(" + Math.max(Math.min(parseInt(b.pos * (b.end[0] - b.start[0]) + b.start[0], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[1] - b.start[1]) + b.start[1], 10), 255), 0) + "," + Math.max(Math.min(parseInt(b.pos * (b.end[2] - b.start[2]) + b.start[2], 10), 255), 0) + ")"
        }
    });
    var n = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
        , q = ["add", "remove", "toggle"]
        , t = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
    f.effects.animateClass = function (c, a, b, d) {
        if (f.isFunction(b)) {
            d = b;
            b = null
        }
        return this.queue(function () {
            var e = f(this), g = e.attr("style") || " ", h = p(o.call(this)), r, v = e.attr("class");
            f.each(q, function (w, i) {
                c[i] && e[i + "Class"](c[i])
            });
            r = p(o.call(this));
            e.attr("class", v);
            e.animate(u(h, r), {
                queue: false,
                duration: a,
                easing: b,
                complete: function () {
                    f.each(q, function (w, i) {
                        c[i] && e[i + "Class"](c[i])
                    });
                    if (typeof e.attr("style") == "object") {
                        e.attr("style").cssText = "";
                        e.attr("style").cssText = g
                    } else
                        e.attr("style", g);
                    d && d.apply(this, arguments);
                    f.dequeue(this)
                }
            })
        })
    }
        ;
    f.fn.extend({
        _addClass: f.fn.addClass,
        addClass: function (c, a, b, d) {
            return a ? f.effects.animateClass.apply(this, [{
                add: c
            }, a, b, d]) : this._addClass(c)
        },
        _removeClass: f.fn.removeClass,
        removeClass: function (c, a, b, d) {
            return a ? f.effects.animateClass.apply(this, [{
                remove: c
            }, a, b, d]) : this._removeClass(c)
        },
        _toggleClass: f.fn.toggleClass,
        toggleClass: function (c, a, b, d, e) {
            return typeof a == "boolean" || a === j ? b ? f.effects.animateClass.apply(this, [a ? {
                add: c
            } : {
                remove: c
            }, b, d, e]) : this._toggleClass(c, a) : f.effects.animateClass.apply(this, [{
                toggle: c
            }, a, b, d])
        },
        switchClass: function (c, a, b, d, e) {
            return f.effects.animateClass.apply(this, [{
                add: a,
                remove: c
            }, b, d, e])
        }
    });
    f.extend(f.effects, {
        version: "1.8.15",
        save: function (c, a) {
            for (var b = 0; b < a.length; b++)
                a[b] !== null && c.data("ec.storage." + a[b], c[0].style[a[b]])
        },
        restore: function (c, a) {
            for (var b = 0; b < a.length; b++)
                a[b] !== null && c.css(a[b], c.data("ec.storage." + a[b]))
        },
        setMode: function (c, a) {
            if (a == "toggle")
                a = c.is(":hidden") ? "show" : "hide";
            return a
        },
        getBaseline: function (c, a) {
            var b;
            switch (c[0]) {
                case "top":
                    b = 0;
                    break;
                case "middle":
                    b = 0.5;
                    break;
                case "bottom":
                    b = 1;
                    break;
                default:
                    b = c[0] / a.height
            }
            switch (c[1]) {
                case "left":
                    c = 0;
                    break;
                case "center":
                    c = 0.5;
                    break;
                case "right":
                    c = 1;
                    break;
                default:
                    c = c[1] / a.width
            }
            return {
                x: c,
                y: b
            }
        },
        createWrapper: function (c) {
            if (c.parent().is(".ui-effects-wrapper"))
                return c.parent();
            var a = {
                width: c.outerWidth(true),
                height: c.outerHeight(true),
                "float": c.css("float")
            }
                , b = f("<div></div>").addClass("ui-effects-wrapper").css({
                    fontSize: "100%",
                    background: "transparent",
                    border: "none",
                    margin: 0,
                    padding: 0
                });
            c.wrap(b);
            b = c.parent();
            if (c.css("position") == "static") {
                b.css({
                    position: "relative"
                });
                c.css({
                    position: "relative"
                })
            } else {
                f.extend(a, {
                    position: c.css("position"),
                    zIndex: c.css("z-index")
                });
                f.each(["top", "left", "bottom", "right"], function (d, e) {
                    a[e] = c.css(e);
                    if (isNaN(parseInt(a[e], 10)))
                        a[e] = "auto"
                });
                c.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })
            }
            return b.css(a).show()
        },
        removeWrapper: function (c) {
            if (c.parent().is(".ui-effects-wrapper"))
                return c.parent().replaceWith(c);
            return c
        },
        setTransition: function (c, a, b, d) {
            d = d || {};
            f.each(a, function (e, g) {
                unit = c.cssUnit(g);
                if (unit[0] > 0)
                    d[g] = unit[0] * b + unit[1]
            });
            return d
        }
    });
    f.fn.extend({
        effect: function (c) {
            var a = k.apply(this, arguments)
                , b = {
                    options: a[1],
                    duration: a[2],
                    callback: a[3]
                };
            a = b.options.mode;
            var d = f.effects[c];
            if (f.fx.off || !d)
                return a ? this[a](b.duration, b.callback) : this.each(function () {
                    b.callback && b.callback.call(this)
                });
            return d.call(this, b)
        },
        _show: f.fn.show,
        show: function (c) {
            if (l(c))
                return this._show.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "show";
                return this.effect.apply(this, a)
            }
        },
        _hide: f.fn.hide,
        hide: function (c) {
            if (l(c))
                return this._hide.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "hide";
                return this.effect.apply(this, a)
            }
        },
        __toggle: f.fn.toggle,
        toggle: function (c) {
            if (l(c) || typeof c === "boolean" || f.isFunction(c))
                return this.__toggle.apply(this, arguments);
            else {
                var a = k.apply(this, arguments);
                a[1].mode = "toggle";
                return this.effect.apply(this, a)
            }
        },
        cssUnit: function (c) {
            var a = this.css(c)
                , b = [];
            f.each(["em", "px", "%", "pt"], function (d, e) {
                if (a.indexOf(e) > 0)
                    b = [parseFloat(a), e]
            });
            return b
        }
    });
    f.easing.jswing = f.easing.swing;
    f.extend(f.easing, {
        def: "easeOutQuad",
        swing: function (c, a, b, d, e) {
            return f.easing[f.easing.def](c, a, b, d, e)
        },
        easeInQuad: function (c, a, b, d, e) {
            return d * (a /= e) * a + b
        },
        easeOutQuad: function (c, a, b, d, e) {
            return -d * (a /= e) * (a - 2) + b
        },
        easeInOutQuad: function (c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a + b;
            return -d / 2 * (--a * (a - 2) - 1) + b
        },
        easeInCubic: function (c, a, b, d, e) {
            return d * (a /= e) * a * a + b
        },
        easeOutCubic: function (c, a, b, d, e) {
            return d * ((a = a / e - 1) * a * a + 1) + b
        },
        easeInOutCubic: function (c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a + b;
            return d / 2 * ((a -= 2) * a * a + 2) + b
        },
        easeInQuart: function (c, a, b, d, e) {
            return d * (a /= e) * a * a * a + b
        },
        easeOutQuart: function (c, a, b, d, e) {
            return -d * ((a = a / e - 1) * a * a * a - 1) + b
        },
        easeInOutQuart: function (c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a * a + b;
            return -d / 2 * ((a -= 2) * a * a * a - 2) + b
        },
        easeInQuint: function (c, a, b, d, e) {
            return d * (a /= e) * a * a * a * a + b
        },
        easeOutQuint: function (c, a, b, d, e) {
            return d * ((a = a / e - 1) * a * a * a * a + 1) + b
        },
        easeInOutQuint: function (c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * a * a * a + b;
            return d / 2 * ((a -= 2) * a * a * a * a + 2) + b
        },
        easeInSine: function (c, a, b, d, e) {
            return -d * Math.cos(a / e * (Math.PI / 2)) + d + b
        },
        easeOutSine: function (c, a, b, d, e) {
            return d * Math.sin(a / e * (Math.PI / 2)) + b
        },
        easeInOutSine: function (c, a, b, d, e) {
            return -d / 2 * (Math.cos(Math.PI * a / e) - 1) + b
        },
        easeInExpo: function (c, a, b, d, e) {
            return a == 0 ? b : d * Math.pow(2, 10 * (a / e - 1)) + b
        },
        easeOutExpo: function (c, a, b, d, e) {
            return a == e ? b + d : d * (-Math.pow(2, -10 * a / e) + 1) + b
        },
        easeInOutExpo: function (c, a, b, d, e) {
            if (a == 0)
                return b;
            if (a == e)
                return b + d;
            if ((a /= e / 2) < 1)
                return d / 2 * Math.pow(2, 10 * (a - 1)) + b;
            return d / 2 * (-Math.pow(2, -10 * --a) + 2) + b
        },
        easeInCirc: function (c, a, b, d, e) {
            return -d * (Math.sqrt(1 - (a /= e) * a) - 1) + b
        },
        easeOutCirc: function (c, a, b, d, e) {
            return d * Math.sqrt(1 - (a = a / e - 1) * a) + b
        },
        easeInOutCirc: function (c, a, b, d, e) {
            if ((a /= e / 2) < 1)
                return -d / 2 * (Math.sqrt(1 - a * a) - 1) + b;
            return d / 2 * (Math.sqrt(1 - (a -= 2) * a) + 1) + b
        },
        easeInElastic: function (c, a, b, d, e) {
            c = 1.70158;
            var g = 0
                , h = d;
            if (a == 0)
                return b;
            if ((a /= e) == 1)
                return b + d;
            g || (g = e * 0.3);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            return -(h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g)) + b
        },
        easeOutElastic: function (c, a, b, d, e) {
            c = 1.70158;
            var g = 0
                , h = d;
            if (a == 0)
                return b;
            if ((a /= e) == 1)
                return b + d;
            g || (g = e * 0.3);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            return h * Math.pow(2, -10 * a) * Math.sin((a * e - c) * 2 * Math.PI / g) + d + b
        },
        easeInOutElastic: function (c, a, b, d, e) {
            c = 1.70158;
            var g = 0
                , h = d;
            if (a == 0)
                return b;
            if ((a /= e / 2) == 2)
                return b + d;
            g || (g = e * 0.3 * 1.5);
            if (h < Math.abs(d)) {
                h = d;
                c = g / 4
            } else
                c = g / (2 * Math.PI) * Math.asin(d / h);
            if (a < 1)
                return -0.5 * h * Math.pow(2, 10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) + b;
            return h * Math.pow(2, -10 * (a -= 1)) * Math.sin((a * e - c) * 2 * Math.PI / g) * 0.5 + d + b
        },
        easeInBack: function (c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            return d * (a /= e) * a * ((g + 1) * a - g) + b
        },
        easeOutBack: function (c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            return d * ((a = a / e - 1) * a * ((g + 1) * a + g) + 1) + b
        },
        easeInOutBack: function (c, a, b, d, e, g) {
            if (g == j)
                g = 1.70158;
            if ((a /= e / 2) < 1)
                return d / 2 * a * a * (((g *= 1.525) + 1) * a - g) + b;
            return d / 2 * ((a -= 2) * a * (((g *= 1.525) + 1) * a + g) + 2) + b
        },
        easeInBounce: function (c, a, b, d, e) {
            return d - f.easing.easeOutBounce(c, e - a, 0, d, e) + b
        },
        easeOutBounce: function (c, a, b, d, e) {
            return (a /= e) < 1 / 2.75 ? d * 7.5625 * a * a + b : a < 2 / 2.75 ? d * (7.5625 * (a -= 1.5 / 2.75) * a + 0.75) + b : a < 2.5 / 2.75 ? d * (7.5625 * (a -= 2.25 / 2.75) * a + 0.9375) + b : d * (7.5625 * (a -= 2.625 / 2.75) * a + 0.984375) + b
        },
        easeInOutBounce: function (c, a, b, d, e) {
            if (a < e / 2)
                return f.easing.easeInBounce(c, a * 2, 0, d, e) * 0.5 + b;
            return f.easing.easeOutBounce(c, a * 2 - e, 0, d, e) * 0.5 + d * 0.5 + b
        }
    })
}(jQuery);
;/*
 * jQuery UI Effects Blind 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (b) {
    b.effects.blind = function (c) {
        return this.queue(function () {
            var a = b(this)
                , g = ["position", "top", "bottom", "left", "right"]
                , f = b.effects.setMode(a, c.options.mode || "hide")
                , d = c.options.direction || "vertical";
            b.effects.save(a, g);
            a.show();
            var e = b.effects.createWrapper(a).css({
                overflow: "hidden"
            })
                , h = d == "vertical" ? "height" : "width";
            d = d == "vertical" ? e.height() : e.width();
            f == "show" && e.css(h, 0);
            var i = {};
            i[h] = f == "show" ? d : 0;
            e.animate(i, c.duration, c.options.easing, function () {
                f == "hide" && a.hide();
                b.effects.restore(a, g);
                b.effects.removeWrapper(a);
                c.callback && c.callback.apply(a[0], arguments);
                a.dequeue()
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Bounce 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (e) {
    e.effects.bounce = function (b) {
        return this.queue(function () {
            var a = e(this)
                , l = ["position", "top", "bottom", "left", "right"]
                , h = e.effects.setMode(a, b.options.mode || "effect")
                , d = b.options.direction || "up"
                , c = b.options.distance || 20
                , m = b.options.times || 5
                , i = b.duration || 250;
            /show|hide/.test(h) && l.push("opacity");
            e.effects.save(a, l);
            a.show();
            e.effects.createWrapper(a);
            var f = d == "up" || d == "down" ? "top" : "left";
            d = d == "up" || d == "left" ? "pos" : "neg";
            c = b.options.distance || (f == "top" ? a.outerHeight({
                margin: true
            }) / 3 : a.outerWidth({
                margin: true
            }) / 3);
            if (h == "show")
                a.css("opacity", 0).css(f, d == "pos" ? -c : c);
            if (h == "hide")
                c /= m * 2;
            h != "hide" && m--;
            if (h == "show") {
                var g = {
                    opacity: 1
                };
                g[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(g, i / 2, b.options.easing);
                c /= 2;
                m--
            }
            for (g = 0; g < m; g++) {
                var j = {}
                    , k = {};
                j[f] = (d == "pos" ? "-=" : "+=") + c;
                k[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(j, i / 2, b.options.easing).animate(k, i / 2, b.options.easing);
                c = h == "hide" ? c * 2 : c / 2
            }
            if (h == "hide") {
                g = {
                    opacity: 0
                };
                g[f] = (d == "pos" ? "-=" : "+=") + c;
                a.animate(g, i / 2, b.options.easing, function () {
                    a.hide();
                    e.effects.restore(a, l);
                    e.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments)
                })
            } else {
                j = {};
                k = {};
                j[f] = (d == "pos" ? "-=" : "+=") + c;
                k[f] = (d == "pos" ? "+=" : "-=") + c;
                a.animate(j, i / 2, b.options.easing).animate(k, i / 2, b.options.easing, function () {
                    e.effects.restore(a, l);
                    e.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments)
                })
            }
            a.queue("fx", function () {
                a.dequeue()
            });
            a.dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Clip 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (b) {
    b.effects.clip = function (e) {
        return this.queue(function () {
            var a = b(this)
                , i = ["position", "top", "bottom", "left", "right", "height", "width"]
                , f = b.effects.setMode(a, e.options.mode || "hide")
                , c = e.options.direction || "vertical";
            b.effects.save(a, i);
            a.show();
            var d = b.effects.createWrapper(a).css({
                overflow: "hidden"
            });
            d = a[0].tagName == "IMG" ? d : a;
            var g = {
                size: c == "vertical" ? "height" : "width",
                position: c == "vertical" ? "top" : "left"
            };
            c = c == "vertical" ? d.height() : d.width();
            if (f == "show") {
                d.css(g.size, 0);
                d.css(g.position, c / 2)
            }
            var h = {};
            h[g.size] = f == "show" ? c : 0;
            h[g.position] = f == "show" ? 0 : c / 2;
            d.animate(h, {
                queue: false,
                duration: e.duration,
                easing: e.options.easing,
                complete: function () {
                    f == "hide" && a.hide();
                    b.effects.restore(a, i);
                    b.effects.removeWrapper(a);
                    e.callback && e.callback.apply(a[0], arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Drop 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (c) {
    c.effects.drop = function (d) {
        return this.queue(function () {
            var a = c(this)
                , h = ["position", "top", "bottom", "left", "right", "opacity"]
                , e = c.effects.setMode(a, d.options.mode || "hide")
                , b = d.options.direction || "left";
            c.effects.save(a, h);
            a.show();
            c.effects.createWrapper(a);
            var f = b == "up" || b == "down" ? "top" : "left";
            b = b == "up" || b == "left" ? "pos" : "neg";
            var g = d.options.distance || (f == "top" ? a.outerHeight({
                margin: true
            }) / 2 : a.outerWidth({
                margin: true
            }) / 2);
            if (e == "show")
                a.css("opacity", 0).css(f, b == "pos" ? -g : g);
            var i = {
                opacity: e == "show" ? 1 : 0
            };
            i[f] = (e == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + g;
            a.animate(i, {
                queue: false,
                duration: d.duration,
                easing: d.options.easing,
                complete: function () {
                    e == "hide" && a.hide();
                    c.effects.restore(a, h);
                    c.effects.removeWrapper(a);
                    d.callback && d.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Explode 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (j) {
    j.effects.explode = function (a) {
        return this.queue(function () {
            var c = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3
                , d = a.options.pieces ? Math.round(Math.sqrt(a.options.pieces)) : 3;
            a.options.mode = a.options.mode == "toggle" ? j(this).is(":visible") ? "hide" : "show" : a.options.mode;
            var b = j(this).show().css("visibility", "hidden")
                , g = b.offset();
            g.top -= parseInt(b.css("marginTop"), 10) || 0;
            g.left -= parseInt(b.css("marginLeft"), 10) || 0;
            for (var h = b.outerWidth(true), i = b.outerHeight(true), e = 0; e < c; e++)
                for (var f = 0; f < d; f++)
                    b.clone().appendTo("body").wrap("<div></div>").css({
                        position: "absolute",
                        visibility: "visible",
                        left: -f * (h / d),
                        top: -e * (i / c)
                    }).parent().addClass("ui-effects-explode").css({
                        position: "absolute",
                        overflow: "hidden",
                        width: h / d,
                        height: i / c,
                        left: g.left + f * (h / d) + (a.options.mode == "show" ? (f - Math.floor(d / 2)) * (h / d) : 0),
                        top: g.top + e * (i / c) + (a.options.mode == "show" ? (e - Math.floor(c / 2)) * (i / c) : 0),
                        opacity: a.options.mode == "show" ? 0 : 1
                    }).animate({
                        left: g.left + f * (h / d) + (a.options.mode == "show" ? 0 : (f - Math.floor(d / 2)) * (h / d)),
                        top: g.top + e * (i / c) + (a.options.mode == "show" ? 0 : (e - Math.floor(c / 2)) * (i / c)),
                        opacity: a.options.mode == "show" ? 1 : 0
                    }, a.duration || 500);
            setTimeout(function () {
                a.options.mode == "show" ? b.css({
                    visibility: "visible"
                }) : b.css({
                    visibility: "visible"
                }).hide();
                a.callback && a.callback.apply(b[0]);
                b.dequeue();
                j("div.ui-effects-explode").remove()
            }, a.duration || 500)
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Fade 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (b) {
    b.effects.fade = function (a) {
        return this.queue(function () {
            var c = b(this)
                , d = b.effects.setMode(c, a.options.mode || "hide");
            c.animate({
                opacity: d
            }, {
                queue: false,
                duration: a.duration,
                easing: a.options.easing,
                complete: function () {
                    a.callback && a.callback.apply(this, arguments);
                    c.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Fold 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (c) {
    c.effects.fold = function (a) {
        return this.queue(function () {
            var b = c(this)
                , j = ["position", "top", "bottom", "left", "right"]
                , d = c.effects.setMode(b, a.options.mode || "hide")
                , g = a.options.size || 15
                , h = !!a.options.horizFirst
                , k = a.duration ? a.duration / 2 : c.fx.speeds._default / 2;
            c.effects.save(b, j);
            b.show();
            var e = c.effects.createWrapper(b).css({
                overflow: "hidden"
            })
                , f = d == "show" != h
                , l = f ? ["width", "height"] : ["height", "width"];
            f = f ? [e.width(), e.height()] : [e.height(), e.width()];
            var i = /([0-9]+)%/.exec(g);
            if (i)
                g = parseInt(i[1], 10) / 100 * f[d == "hide" ? 0 : 1];
            if (d == "show")
                e.css(h ? {
                    height: 0,
                    width: g
                } : {
                    height: g,
                    width: 0
                });
            h = {};
            i = {};
            h[l[0]] = d == "show" ? f[0] : g;
            i[l[1]] = d == "show" ? f[1] : 0;
            e.animate(h, k, a.options.easing).animate(i, k, a.options.easing, function () {
                d == "hide" && b.hide();
                c.effects.restore(b, j);
                c.effects.removeWrapper(b);
                a.callback && a.callback.apply(b[0], arguments);
                b.dequeue()
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Highlight 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (b) {
    b.effects.highlight = function (c) {
        return this.queue(function () {
            var a = b(this)
                , e = ["backgroundImage", "backgroundColor", "opacity"]
                , d = b.effects.setMode(a, c.options.mode || "show")
                , f = {
                    backgroundColor: a.css("backgroundColor")
                };
            if (d == "hide")
                f.opacity = 0;
            b.effects.save(a, e);
            a.show().css({
                backgroundImage: "none",
                backgroundColor: c.options.color || "#ffff99"
            }).animate(f, {
                queue: false,
                duration: c.duration,
                easing: c.options.easing,
                complete: function () {
                    d == "hide" && a.hide();
                    b.effects.restore(a, e);
                    d == "show" && !b.support.opacity && this.style.removeAttribute("filter");
                    c.callback && c.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Pulsate 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (d) {
    d.effects.pulsate = function (a) {
        return this.queue(function () {
            var b = d(this)
                , c = d.effects.setMode(b, a.options.mode || "show");
            times = (a.options.times || 5) * 2 - 1;
            duration = a.duration ? a.duration / 2 : d.fx.speeds._default / 2;
            isVisible = b.is(":visible");
            animateTo = 0;
            if (!isVisible) {
                b.css("opacity", 0).show();
                animateTo = 1
            }
            if (c == "hide" && isVisible || c == "show" && !isVisible)
                times--;
            for (c = 0; c < times; c++) {
                b.animate({
                    opacity: animateTo
                }, duration, a.options.easing);
                animateTo = (animateTo + 1) % 2
            }
            b.animate({
                opacity: animateTo
            }, duration, a.options.easing, function () {
                animateTo == 0 && b.hide();
                a.callback && a.callback.apply(this, arguments)
            });
            b.queue("fx", function () {
                b.dequeue()
            }).dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Scale 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (c) {
    c.effects.puff = function (b) {
        return this.queue(function () {
            var a = c(this)
                , e = c.effects.setMode(a, b.options.mode || "hide")
                , g = parseInt(b.options.percent, 10) || 150
                , h = g / 100
                , i = {
                    height: a.height(),
                    width: a.width()
                };
            c.extend(b.options, {
                fade: true,
                mode: e,
                percent: e == "hide" ? g : 100,
                from: e == "hide" ? i : {
                    height: i.height * h,
                    width: i.width * h
                }
            });
            a.effect("scale", b.options, b.duration, b.callback);
            a.dequeue()
        })
    }
        ;
    c.effects.scale = function (b) {
        return this.queue(function () {
            var a = c(this)
                , e = c.extend(true, {}, b.options)
                , g = c.effects.setMode(a, b.options.mode || "effect")
                , h = parseInt(b.options.percent, 10) || (parseInt(b.options.percent, 10) == 0 ? 0 : g == "hide" ? 0 : 100)
                , i = b.options.direction || "both"
                , f = b.options.origin;
            if (g != "effect") {
                e.origin = f || ["middle", "center"];
                e.restore = true
            }
            f = {
                height: a.height(),
                width: a.width()
            };
            a.from = b.options.from || (g == "show" ? {
                height: 0,
                width: 0
            } : f);
            h = {
                y: i != "horizontal" ? h / 100 : 1,
                x: i != "vertical" ? h / 100 : 1
            };
            a.to = {
                height: f.height * h.y,
                width: f.width * h.x
            };
            if (b.options.fade) {
                if (g == "show") {
                    a.from.opacity = 0;
                    a.to.opacity = 1
                }
                if (g == "hide") {
                    a.from.opacity = 1;
                    a.to.opacity = 0
                }
            }
            e.from = a.from;
            e.to = a.to;
            e.mode = g;
            a.effect("size", e, b.duration, b.callback);
            a.dequeue()
        })
    }
        ;
    c.effects.size = function (b) {
        return this.queue(function () {
            var a = c(this)
                , e = ["position", "top", "bottom", "left", "right", "width", "height", "overflow", "opacity"]
                , g = ["position", "top", "bottom", "left", "right", "overflow", "opacity"]
                , h = ["width", "height", "overflow"]
                , i = ["fontSize"]
                , f = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"]
                , k = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"]
                , p = c.effects.setMode(a, b.options.mode || "effect")
                , n = b.options.restore || false
                , m = b.options.scale || "both"
                , l = b.options.origin
                , j = {
                    height: a.height(),
                    width: a.width()
                };
            a.from = b.options.from || j;
            a.to = b.options.to || j;
            if (l) {
                l = c.effects.getBaseline(l, j);
                a.from.top = (j.height - a.from.height) * l.y;
                a.from.left = (j.width - a.from.width) * l.x;
                a.to.top = (j.height - a.to.height) * l.y;
                a.to.left = (j.width - a.to.width) * l.x
            }
            var d = {
                from: {
                    y: a.from.height / j.height,
                    x: a.from.width / j.width
                },
                to: {
                    y: a.to.height / j.height,
                    x: a.to.width / j.width
                }
            };
            if (m == "box" || m == "both") {
                if (d.from.y != d.to.y) {
                    e = e.concat(f);
                    a.from = c.effects.setTransition(a, f, d.from.y, a.from);
                    a.to = c.effects.setTransition(a, f, d.to.y, a.to)
                }
                if (d.from.x != d.to.x) {
                    e = e.concat(k);
                    a.from = c.effects.setTransition(a, k, d.from.x, a.from);
                    a.to = c.effects.setTransition(a, k, d.to.x, a.to)
                }
            }
            if (m == "content" || m == "both")
                if (d.from.y != d.to.y) {
                    e = e.concat(i);
                    a.from = c.effects.setTransition(a, i, d.from.y, a.from);
                    a.to = c.effects.setTransition(a, i, d.to.y, a.to)
                }
            c.effects.save(a, n ? e : g);
            a.show();
            c.effects.createWrapper(a);
            a.css("overflow", "hidden").css(a.from);
            if (m == "content" || m == "both") {
                f = f.concat(["marginTop", "marginBottom"]).concat(i);
                k = k.concat(["marginLeft", "marginRight"]);
                h = e.concat(f).concat(k);
                a.find("*[width]").each(function () {
                    child = c(this);
                    n && c.effects.save(child, h);
                    var o = {
                        height: child.height(),
                        width: child.width()
                    };
                    child.from = {
                        height: o.height * d.from.y,
                        width: o.width * d.from.x
                    };
                    child.to = {
                        height: o.height * d.to.y,
                        width: o.width * d.to.x
                    };
                    if (d.from.y != d.to.y) {
                        child.from = c.effects.setTransition(child, f, d.from.y, child.from);
                        child.to = c.effects.setTransition(child, f, d.to.y, child.to)
                    }
                    if (d.from.x != d.to.x) {
                        child.from = c.effects.setTransition(child, k, d.from.x, child.from);
                        child.to = c.effects.setTransition(child, k, d.to.x, child.to)
                    }
                    child.css(child.from);
                    child.animate(child.to, b.duration, b.options.easing, function () {
                        n && c.effects.restore(child, h)
                    })
                })
            }
            a.animate(a.to, {
                queue: false,
                duration: b.duration,
                easing: b.options.easing,
                complete: function () {
                    a.to.opacity === 0 && a.css("opacity", a.from.opacity);
                    p == "hide" && a.hide();
                    c.effects.restore(a, n ? e : g);
                    c.effects.removeWrapper(a);
                    b.callback && b.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Shake 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (d) {
    d.effects.shake = function (a) {
        return this.queue(function () {
            var b = d(this)
                , j = ["position", "top", "bottom", "left", "right"];
            d.effects.setMode(b, a.options.mode || "effect");
            var c = a.options.direction || "left"
                , e = a.options.distance || 20
                , l = a.options.times || 3
                , f = a.duration || a.options.duration || 140;
            d.effects.save(b, j);
            b.show();
            d.effects.createWrapper(b);
            var g = c == "up" || c == "down" ? "top" : "left"
                , h = c == "up" || c == "left" ? "pos" : "neg";
            c = {};
            var i = {}
                , k = {};
            c[g] = (h == "pos" ? "-=" : "+=") + e;
            i[g] = (h == "pos" ? "+=" : "-=") + e * 2;
            k[g] = (h == "pos" ? "-=" : "+=") + e * 2;
            b.animate(c, f, a.options.easing);
            for (e = 1; e < l; e++)
                b.animate(i, f, a.options.easing).animate(k, f, a.options.easing);
            b.animate(i, f, a.options.easing).animate(c, f / 2, a.options.easing, function () {
                d.effects.restore(b, j);
                d.effects.removeWrapper(b);
                a.callback && a.callback.apply(this, arguments)
            });
            b.queue("fx", function () {
                b.dequeue()
            });
            b.dequeue()
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Slide 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (c) {
    c.effects.slide = function (d) {
        return this.queue(function () {
            var a = c(this)
                , h = ["position", "top", "bottom", "left", "right"]
                , f = c.effects.setMode(a, d.options.mode || "show")
                , b = d.options.direction || "left";
            c.effects.save(a, h);
            a.show();
            c.effects.createWrapper(a).css({
                overflow: "hidden"
            });
            var g = b == "up" || b == "down" ? "top" : "left";
            b = b == "up" || b == "left" ? "pos" : "neg";
            var e = d.options.distance || (g == "top" ? a.outerHeight({
                margin: true
            }) : a.outerWidth({
                margin: true
            }));
            if (f == "show")
                a.css(g, b == "pos" ? isNaN(e) ? "-" + e : -e : e);
            var i = {};
            i[g] = (f == "show" ? b == "pos" ? "+=" : "-=" : b == "pos" ? "-=" : "+=") + e;
            a.animate(i, {
                queue: false,
                duration: d.duration,
                easing: d.options.easing,
                complete: function () {
                    f == "hide" && a.hide();
                    c.effects.restore(a, h);
                    c.effects.removeWrapper(a);
                    d.callback && d.callback.apply(this, arguments);
                    a.dequeue()
                }
            })
        })
    }
}
)(jQuery);
;/*
 * jQuery UI Effects Transfer 1.8.15
 *
 * Copyright 2011, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function (e) {
    e.effects.transfer = function (a) {
        return this.queue(function () {
            var b = e(this)
                , c = e(a.options.to)
                , d = c.offset();
            c = {
                top: d.top,
                left: d.left,
                height: c.innerHeight(),
                width: c.innerWidth()
            };
            d = b.offset();
            var f = e('<div class="ui-effects-transfer"></div>').appendTo(document.body).addClass(a.options.className).css({
                top: d.top,
                left: d.left,
                height: b.innerHeight(),
                width: b.innerWidth(),
                position: "absolute"
            }).animate(c, a.duration, a.options.easing, function () {
                f.remove();
                a.callback && a.callback.apply(b[0], arguments);
                b.dequeue()
            })
        })
    }
}
)(jQuery);
;/**
 * jQuery.ScrollTo - Easy element scrolling using jQuery.
 * Copyright (c) 2007-2009 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 5/25/2009
 * @author Ariel Flesler
 * @version 1.4.2
 *
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 */
; (function (d) {
    var k = d.scrollTo = function (a, i, e) {
        d(window).scrollTo(a, i, e)
    }
        ;
    k.defaults = {
        axis: 'xy',
        duration: parseFloat(d.fn.jquery) >= 1.3 ? 0 : 1
    };
    k.window = function (a) {
        return d(window)._scrollable()
    }
        ;
    d.fn._scrollable = function () {
        return this.map(function () {
            var a = this
                , i = !a.nodeName || d.inArray(a.nodeName.toLowerCase(), ['iframe', '#document', 'html', 'body']) != -1;
            if (!i)
                return a;
            var e = (a.contentWindow || a).document || a.ownerDocument || a;
            return d.browser.safari || e.compatMode == 'BackCompat' ? e.body : e.documentElement
        })
    }
        ;
    d.fn.scrollTo = function (n, j, b) {
        if (typeof j == 'object') {
            b = j;
            j = 0
        }
        if (typeof b == 'function')
            b = {
                onAfter: b
            };
        if (n == 'max')
            n = 9e9;
        b = d.extend({}, k.defaults, b);
        j = j || b.speed || b.duration;
        b.queue = b.queue && b.axis.length > 1;
        if (b.queue)
            j /= 2;
        b.offset = p(b.offset);
        b.over = p(b.over);
        return this._scrollable().each(function () {
            var q = this, r = d(q), f = n, s, g = {}, u = r.is('html,body');
            switch (typeof f) {
                case 'number':
                case 'string':
                    if (/^([+-]=)?\d+(\.\d+)?(px|%)?$/.test(f)) {
                        f = p(f);
                        break
                    }
                    f = d(f, this);
                case 'object':
                    if (f.is || f.style)
                        s = (f = d(f)).offset()
            }
            d.each(b.axis.split(''), function (a, i) {
                var e = i == 'x' ? 'Left' : 'Top'
                    , h = e.toLowerCase()
                    , c = 'scroll' + e
                    , l = q[c]
                    , m = k.max(q, i);
                if (s) {
                    g[c] = s[h] + (u ? 0 : l - r.offset()[h]);
                    if (b.margin) {
                        g[c] -= parseInt(f.css('margin' + e)) || 0;
                        g[c] -= parseInt(f.css('border' + e + 'Width')) || 0
                    }
                    g[c] += b.offset[h] || 0;
                    if (b.over[h])
                        g[c] += f[i == 'x' ? 'width' : 'height']() * b.over[h]
                } else {
                    var o = f[h];
                    g[c] = o.slice && o.slice(-1) == '%' ? parseFloat(o) / 100 * m : o
                }
                if (/^\d+$/.test(g[c]))
                    g[c] = g[c] <= 0 ? 0 : Math.min(g[c], m);
                if (!a && b.queue) {
                    if (l != g[c])
                        t(b.onAfterFirst);
                    delete g[c]
                }
            });
            t(b.onAfter);
            function t(a) {
                r.animate(g, j, b.easing, a && function () {
                    a.call(this, n, b)
                }
                )
            }
        }).end()
    }
        ;
    k.max = function (a, i) {
        var e = i == 'x' ? 'Width' : 'Height'
            , h = 'scroll' + e;
        if (!d(a).is('html,body'))
            return a[h] - d(a)[e.toLowerCase()]();
        var c = 'client' + e
            , l = a.ownerDocument.documentElement
            , m = a.ownerDocument.body;
        return Math.max(l[h], m[h]) - Math.min(l[c], m[c])
    }
        ;
    function p(a) {
        return typeof a == 'object' ? a : {
            top: a,
            left: a
        }
    }
}
)(jQuery);

/*
*
* Copyright (c) 2006-2008 Sam Collett (http://www.texotela.co.uk)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*
* Version 2.2.4
* Demo: http://www.texotela.co.uk/code/jquery/select/
*
* $LastChangedDate: 2008-06-17 17:27:25 +0100 (Tue, 17 Jun 2008) $
* $Rev: 5727 $
*
*/
; (function (h) {
    h.fn.addOption = function () {
        var j = function (a, f, c, g) {
            var d = document.createElement("option");
            d.value = f,
                d.text = c;
            var b = a.options;
            var e = b.length;
            if (!a.cache) {
                a.cache = {};
                for (var i = 0; i < e; i++) {
                    a.cache[b[i].value] = i
                }
            }
            if (typeof a.cache[f] == "undefined")
                a.cache[f] = e;
            a.options[a.cache[f]] = d;
            if (g) {
                d.selected = true
            }
        };
        var k = arguments;
        if (k.length == 0)
            return this;
        var l = true;
        var m = false;
        var n, o, p;
        if (typeof (k[0]) == "object") {
            m = true;
            n = k[0]
        }
        if (k.length >= 2) {
            if (typeof (k[1]) == "boolean")
                l = k[1];
            else if (typeof (k[2]) == "boolean")
                l = k[2];
            if (!m) {
                o = k[0];
                p = k[1]
            }
        }
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return;
            if (m) {
                for (var a in n) {
                    j(this, a, n[a], l)
                }
            } else {
                j(this, o, p, l)
            }
        });
        return this
    }
        ;
    h.fn.ajaxAddOption = function (c, g, d, b, e) {
        if (typeof (c) != "string")
            return this;
        if (typeof (g) != "object")
            g = {};
        if (typeof (d) != "boolean")
            d = true;
        this.each(function () {
            var f = this;
            h.getJSON(c, g, function (a) {
                h(f).addOption(a, d);
                if (typeof b == "function") {
                    if (typeof e == "object") {
                        b.apply(f, e)
                    } else {
                        b.call(f)
                    }
                }
            })
        });
        return this
    }
        ;
    h.fn.removeOption = function () {
        var d = arguments;
        if (d.length == 0)
            return this;
        var b = typeof (d[0]);
        var e, i;
        if (b == "string" || b == "object" || b == "function") {
            e = d[0];
            if (e.constructor == Array) {
                var j = e.length;
                for (var k = 0; k < j; k++) {
                    this.removeOption(e[k], d[1])
                }
                return this
            }
        } else if (b == "number")
            i = d[0];
        else
            return this;
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return;
            if (this.cache)
                this.cache = null;
            var a = false;
            var f = this.options;
            if (!!e) {
                var c = f.length;
                for (var g = c - 1; g >= 0; g--) {
                    if (e.constructor == RegExp) {
                        if (f[g].value.match(e)) {
                            a = true
                        }
                    } else if (f[g].value == e) {
                        a = true
                    }
                    if (a && d[1] === true)
                        a = f[g].selected;
                    if (a) {
                        f[g] = null
                    }
                    a = false
                }
            } else {
                if (d[1] === true) {
                    a = f[i].selected
                } else {
                    a = true
                }
                if (a) {
                    this.remove(i)
                }
            }
        });
        return this
    }
        ;
    h.fn.sortOptions = function (e) {
        var i = h(this).selectedValues();
        var j = typeof (e) == "undefined" ? true : !!e;
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return;
            var c = this.options;
            var g = c.length;
            var d = [];
            for (var b = 0; b < g; b++) {
                d[b] = {
                    v: c[b].value,
                    t: c[b].text
                }
            }
            d.sort(function (a, f) {
                o1t = a.t.toLowerCase(),
                    o2t = f.t.toLowerCase();
                if (o1t == o2t)
                    return 0;
                if (j) {
                    return o1t < o2t ? -1 : 1
                } else {
                    return o1t > o2t ? -1 : 1
                }
            });
            for (var b = 0; b < g; b++) {
                c[b].text = d[b].t;
                c[b].value = d[b].v
            }
        }).selectOptions(i, true);
        return this
    }
        ;
    h.fn.selectOptions = function (g, d) {
        var b = g;
        var e = typeof (g);
        if (e == "object" && b.constructor == Array) {
            var i = this;
            h.each(b, function () {
                i.selectOptions(this, d)
            })
        }
        ; var j = d || false;
        if (e != "string" && e != "function" && e != "object")
            return this;
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return this;
            var a = this.options;
            var f = a.length;
            for (var c = 0; c < f; c++) {
                if (b.constructor == RegExp) {
                    if (a[c].value.match(b)) {
                        a[c].selected = true
                    } else if (j) {
                        a[c].selected = false
                    }
                } else {
                    if (a[c].value == b) {
                        a[c].selected = true
                    } else if (j) {
                        a[c].selected = false
                    }
                }
            }
        });
        return this
    }
        ;
    h.fn.copyOptions = function (g, d) {
        var b = d || "selected";
        if (h(g).size() == 0)
            return this;
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return this;
            var a = this.options;
            var f = a.length;
            for (var c = 0; c < f; c++) {
                if (b == "all" || (b == "selected" && a[c].selected)) {
                    h(g).addOption(a[c].value, a[c].text)
                }
            }
        });
        return this
    }
        ;
    h.fn.containsOption = function (g, d) {
        var b = false;
        var e = g;
        var i = typeof (e);
        var j = typeof (d);
        if (i != "string" && i != "function" && i != "object")
            return j == "function" ? this : b;
        this.each(function () {
            if (this.nodeName.toLowerCase() != "select")
                return this;
            if (b && j != "function")
                return false;
            var a = this.options;
            var f = a.length;
            for (var c = 0; c < f; c++) {
                if (e.constructor == RegExp) {
                    if (a[c].value.match(e)) {
                        b = true;
                        if (j == "function")
                            d.call(a[c], c)
                    }
                } else {
                    if (a[c].value == e) {
                        b = true;
                        if (j == "function")
                            d.call(a[c], c)
                    }
                }
            }
        });
        return j == "function" ? this : b
    }
        ;
    h.fn.selectedValues = function () {
        var a = [];
        this.selectedOptions().each(function () {
            a[a.length] = this.value
        });
        return a
    }
        ;
    h.fn.selectedTexts = function () {
        var a = [];
        this.selectedOptions().each(function () {
            a[a.length] = this.text
        });
        return a
    }
        ;
    h.fn.selectedOptions = function () {
        return this.find("option:selected")
    }
}
)(jQuery);
/**
* Cookie plugin
*
* Copyright (c) 2006 Klaus Hartl (stilbuero.de)
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*
*/

/**
* Create a cookie with the given name and value and other optional parameters.
*
* @example $.cookie('the_cookie', 'the_value');
* @desc Set the value of a cookie.
* @example $.cookie('the_cookie', 'the_value', { expires: 7, path: '/', domain: 'jquery.com', secure: true });
* @desc Create a cookie with all available options.
* @example $.cookie('the_cookie', 'the_value');
* @desc Create a session cookie.
* @example $.cookie('the_cookie', null);
* @desc Delete a cookie by passing null as value. Keep in mind that you have to use the same path and domain
*       used when the cookie was set.
*
* @param String name The name of the cookie.
* @param String value The value of the cookie.
* @param Object options An object literal containing key/value pairs to provide optional cookie attributes.
* @option Number|Date expires Either an integer specifying the expiration date from now on in days or a Date object.
*                             If a negative value is specified (e.g. a date in the past), the cookie will be deleted.
*                             If set to null or omitted, the cookie will be a session cookie and will not be retained
*                             when the the browser exits.
* @option String path The value of the path atribute of the cookie (default: path of page that created the cookie).
* @option String domain The value of the domain attribute of the cookie (default: domain of page that created the cookie).
* @option Boolean secure If true, the secure attribute of the cookie will be set and the cookie transmission will
*                        require a secure protocol (like HTTPS).
* @type undefined
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/

/**
* Get the value of a cookie with the given name.
*
* @example $.cookie('the_cookie');
* @desc Get the value of a cookie.
*
* @param String name The name of the cookie.
* @return The value of the cookie.
* @type String
*
* @name $.cookie
* @cat Plugins/Cookie
* @author Klaus Hartl/klaus.hartl@stilbuero.de
*/
jQuery.cookie = function (name, value, options) {
    if (typeof value != 'undefined') {
        // name and value given, set cookie
        options = options || {};
        if (value === null) {
            value = '';
            options.expires = -1;
        }
        var expires = '';
        if (options.expires && (typeof options.expires == 'number' || options.expires.toUTCString)) {
            var date;
            if (typeof options.expires == 'number') {
                date = new Date();
                date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            } else {
                date = options.expires;
            }
            expires = '; expires=' + date.toUTCString();
            // use expires attribute, max-age is not supported by IE
        }
        // CAUTION: Needed to parenthesize options.path and options.domain
        // in the following expressions, otherwise they evaluate to undefined
        // in the packed version for some reason...
        var path = options.path ? '; path=' + (options.path) : '';
        var domain = options.domain ? '; domain=' + (options.domain) : '';
        var secure = options.secure ? '; secure' : '';
        document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain, secure].join('');
    } else {
        // only name given, get cookie
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
}
    ;

/*
* Copyright (c) 2009 Simo Kinnunen.
* Licensed under the MIT license.
*
* @version 1.09
*/
var Cufon = (function () {
    var m = function () {
        return m.replace.apply(null, arguments)
    };
    var x = m.DOM = {
        ready: (function () {
            var C = false
                , E = {
                    loaded: 1,
                    complete: 1
                };
            var B = []
                , D = function () {
                    if (C) {
                        return
                    }
                    C = true;
                    for (var F; F = B.shift(); F()) { }
                };
            if (document.addEventListener) {
                document.addEventListener("DOMContentLoaded", D, false);
                window.addEventListener("pageshow", D, false)
            }
            if (!window.opera && document.readyState) {
                (function () {
                    E[document.readyState] ? D() : setTimeout(arguments.callee, 10)
                }
                )()
            }
            if (document.readyState && document.createStyleSheet) {
                (function () {
                    try {
                        document.body.doScroll("left");
                        D()
                    } catch (F) {
                        setTimeout(arguments.callee, 1)
                    }
                }
                )()
            }
            q(window, "load", D);
            return function (F) {
                if (!arguments.length) {
                    D()
                } else {
                    C ? F() : B.push(F)
                }
            }
        }
        )(),
        root: function () {
            return document.documentElement || document.body
        }
    };
    var n = m.CSS = {
        Size: function (C, B) {
            this.value = parseFloat(C);
            this.unit = String(C).match(/[a-z%]*$/)[0] || "px";
            this.convert = function (D) {
                return D / B * this.value
            }
                ;
            this.convertFrom = function (D) {
                return D / this.value * B
            }
                ;
            this.toString = function () {
                return this.value + this.unit
            }
        },
        addClass: function (C, B) {
            var D = C.className;
            C.className = D + (D && " ") + B;
            return C
        },
        color: j(function (C) {
            var B = {};
            B.color = C.replace(/^rgba\((.*?),\s*([\d.]+)\)/, function (E, D, F) {
                B.opacity = parseFloat(F);
                return "rgb(" + D + ")"
            });
            return B
        }),
        fontStretch: j(function (B) {
            if (typeof B == "number") {
                return B
            }
            if (/%$/.test(B)) {
                return parseFloat(B) / 100
            }
            return {
                "ultra-condensed": 0.5,
                "extra-condensed": 0.625,
                condensed: 0.75,
                "semi-condensed": 0.875,
                "semi-expanded": 1.125,
                expanded: 1.25,
                "extra-expanded": 1.5,
                "ultra-expanded": 2
            }[B] || 1
        }),
        getStyle: function (C) {
            var B = document.defaultView;
            if (B && B.getComputedStyle) {
                return new a(B.getComputedStyle(C, null))
            }
            if (C.currentStyle) {
                return new a(C.currentStyle)
            }
            return new a(C.style)
        },
        gradient: j(function (F) {
            var G = {
                id: F,
                type: F.match(/^-([a-z]+)-gradient\(/)[1],
                stops: []
            }
                , C = F.substr(F.indexOf("(")).match(/([\d.]+=)?(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)/ig);
            for (var E = 0, B = C.length, D; E < B; ++E) {
                D = C[E].split("=", 2).reverse();
                G.stops.push([D[1] || E / (B - 1), D[0]])
            }
            return G
        }),
        quotedList: j(function (E) {
            var D = [], C = /\s*((["'])([\s\S]*?[^\\])\2|[^,]+)\s*/g, B;
            while (B = C.exec(E)) {
                D.push(B[3] || B[1])
            }
            return D
        }),
        recognizesMedia: j(function (G) {
            var E = document.createElement("style"), D, C, B;
            E.type = "text/css";
            E.media = G;
            try {
                E.appendChild(document.createTextNode("/**/"))
            } catch (F) { }
            C = g("head")[0];
            C.insertBefore(E, C.firstChild);
            D = (E.sheet || E.styleSheet);
            B = D && !D.disabled;
            C.removeChild(E);
            return B
        }),
        removeClass: function (D, C) {
            var B = RegExp("(?:^|\\s+)" + C + "(?=\\s|$)", "g");
            D.className = D.className.replace(B, "");
            return D
        },
        supports: function (D, C) {
            var B = document.createElement("span").style;
            if (B[D] === undefined) {
                return false
            }
            B[D] = C;
            return B[D] === C
        },
        textAlign: function (E, D, B, C) {
            if (D.get("textAlign") == "right") {
                if (B > 0) {
                    E = " " + E
                }
            } else {
                if (B < C - 1) {
                    E += " "
                }
            }
            return E
        },
        textShadow: j(function (F) {
            if (F == "none") {
                return null
            }
            var E = [], G = {}, B, C = 0;
            var D = /(#[a-f0-9]+|[a-z]+\(.*?\)|[a-z]+)|(-?[\d.]+[a-z%]*)|,/ig;
            while (B = D.exec(F)) {
                if (B[0] == ",") {
                    E.push(G);
                    G = {};
                    C = 0
                } else {
                    if (B[1]) {
                        G.color = B[1]
                    } else {
                        G[["offX", "offY", "blur"][C++]] = B[2]
                    }
                }
            }
            E.push(G);
            return E
        }),
        textTransform: (function () {
            var B = {
                uppercase: function (C) {
                    return C.toUpperCase()
                },
                lowercase: function (C) {
                    return C.toLowerCase()
                },
                capitalize: function (C) {
                    return C.replace(/\b./g, function (D) {
                        return D.toUpperCase()
                    })
                }
            };
            return function (E, D) {
                var C = B[D.get("textTransform")];
                return C ? C(E) : E
            }
        }
        )(),
        whiteSpace: (function () {
            var D = {
                inline: 1,
                "inline-block": 1,
                "run-in": 1
            };
            var C = /^\s+/
                , B = /\s+$/;
            return function (H, F, G, E) {
                if (E) {
                    if (E.nodeName.toLowerCase() == "br") {
                        H = H.replace(C, "")
                    }
                }
                if (D[F.get("display")]) {
                    return H
                }
                if (!G.previousSibling) {
                    H = H.replace(C, "")
                }
                if (!G.nextSibling) {
                    H = H.replace(B, "")
                }
                return H
            }
        }
        )()
    };
    n.ready = (function () {
        var B = !n.recognizesMedia("all")
            , E = false;
        var D = []
            , H = function () {
                B = true;
                for (var K; K = D.shift(); K()) { }
            };
        var I = g("link")
            , J = g("style");
        function C(K) {
            return K.disabled || G(K.sheet, K.media || "screen")
        }
        function G(M, P) {
            if (!n.recognizesMedia(P || "all")) {
                return true
            }
            if (!M || M.disabled) {
                return false
            }
            try {
                var Q = M.cssRules, O;
                if (Q) {
                    search: for (var L = 0, K = Q.length; O = Q[L],
                        L < K; ++L) {
                        switch (O.type) {
                            case 2:
                                break;
                            case 3:
                                if (!G(O.styleSheet, O.media.mediaText)) {
                                    return false
                                }
                                break;
                            default:
                                break search
                        }
                    }
                }
            } catch (N) { }
            return true
        }
        function F() {
            if (document.createStyleSheet) {
                return true
            }
            var L, K;
            for (K = 0; L = I[K]; ++K) {
                if (L.rel.toLowerCase() == "stylesheet" && !C(L)) {
                    return false
                }
            }
            for (K = 0; L = J[K]; ++K) {
                if (!C(L)) {
                    return false
                }
            }
            return true
        }
        x.ready(function () {
            if (!E) {
                E = n.getStyle(document.body).isUsable()
            }
            if (B || (E && F())) {
                H()
            } else {
                setTimeout(arguments.callee, 10)
            }
        });
        return function (K) {
            if (B) {
                K()
            } else {
                D.push(K)
            }
        }
    }
    )();
    function s(D) {
        var C = this.face = D.face
            , B = {
                "\u0020": 1,
                "\u00a0": 1,
                "\u3000": 1
            };
        this.glyphs = D.glyphs;
        this.w = D.w;
        this.baseSize = parseInt(C["units-per-em"], 10);
        this.family = C["font-family"].toLowerCase();
        this.weight = C["font-weight"];
        this.style = C["font-style"] || "normal";
        this.viewBox = (function () {
            var F = C.bbox.split(/\s+/);
            var E = {
                minX: parseInt(F[0], 10),
                minY: parseInt(F[1], 10),
                maxX: parseInt(F[2], 10),
                maxY: parseInt(F[3], 10)
            };
            E.width = E.maxX - E.minX;
            E.height = E.maxY - E.minY;
            E.toString = function () {
                return [this.minX, this.minY, this.width, this.height].join(" ")
            }
                ;
            return E
        }
        )();
        this.ascent = -parseInt(C.ascent, 10);
        this.descent = -parseInt(C.descent, 10);
        this.height = -this.ascent + this.descent;
        this.spacing = function (L, N, E) {
            var O = this.glyphs, M, K, G, P = [], F = 0, J = -1, I = -1, H;
            while (H = L[++J]) {
                M = O[H] || this.missingGlyph;
                if (!M) {
                    continue
                }
                if (K) {
                    F -= G = K[H] || 0;
                    P[I] -= G
                }
                F += P[++I] = ~~(M.w || this.w) + N + (B[H] ? E : 0);
                K = M.k
            }
            P.total = F;
            return P
        }
    }
    function f() {
        var C = {}
            , B = {
                oblique: "italic",
                italic: "oblique"
            };
        this.add = function (D) {
            (C[D.style] || (C[D.style] = {}))[D.weight] = D
        }
            ;
        this.get = function (H, I) {
            var G = C[H] || C[B[H]] || C.normal || C.italic || C.oblique;
            if (!G) {
                return null
            }
            I = {
                normal: 400,
                bold: 700
            }[I] || parseInt(I, 10);
            if (G[I]) {
                return G[I]
            }
            var E = {
                1: 1,
                99: 0
            }[I % 100], K = [], F, D;
            if (E === undefined) {
                E = I > 400
            }
            if (I == 500) {
                I = 400
            }
            for (var J in G) {
                if (!k(G, J)) {
                    continue
                }
                J = parseInt(J, 10);
                if (!F || J < F) {
                    F = J
                }
                if (!D || J > D) {
                    D = J
                }
                K.push(J)
            }
            if (I < F) {
                I = F
            }
            if (I > D) {
                I = D
            }
            K.sort(function (M, L) {
                return (E ? (M >= I && L >= I) ? M < L : M > L : (M <= I && L <= I) ? M > L : M < L) ? -1 : 1
            });
            return G[K[0]]
        }
    }
    function r() {
        function D(F, G) {
            if (F.contains) {
                return F.contains(G)
            }
            return F.compareDocumentPosition(G) & 16
        }
        function B(G) {
            var F = G.relatedTarget;
            if (!F || D(this, F)) {
                return
            }
            C(this, G.type == "mouseover")
        }
        function E(F) {
            C(this, F.type == "mouseenter")
        }
        function C(F, G) {
            setTimeout(function () {
                var H = d.get(F).options;
                m.replace(F, G ? h(H, H.hover) : H, true)
            }, 10)
        }
        this.attach = function (F) {
            if (F.onmouseenter === undefined) {
                q(F, "mouseover", B);
                q(F, "mouseout", B)
            } else {
                q(F, "mouseenter", E);
                q(F, "mouseleave", E)
            }
        }
    }
    function u() {
        var C = []
            , D = {};
        function B(H) {
            var E = [], G;
            for (var F = 0; G = H[F]; ++F) {
                E[F] = C[D[G]]
            }
            return E
        }
        this.add = function (F, E) {
            D[F] = C.push(E) - 1
        }
            ;
        this.repeat = function () {
            var E = arguments.length ? B(arguments) : C, F;
            for (var G = 0; F = E[G++];) {
                m.replace(F[0], F[1], true)
            }
        }
    }
    function A() {
        var D = {}
            , B = 0;
        function C(E) {
            return E.cufid || (E.cufid = ++B)
        }
        this.get = function (E) {
            var F = C(E);
            return D[F] || (D[F] = {})
        }
    }
    function a(B) {
        var D = {}
            , C = {};
        this.extend = function (E) {
            for (var F in E) {
                if (k(E, F)) {
                    D[F] = E[F]
                }
            }
            return this
        }
            ;
        this.get = function (E) {
            return D[E] != undefined ? D[E] : B[E]
        }
            ;
        this.getSize = function (F, E) {
            return C[F] || (C[F] = new n.Size(this.get(F), E))
        }
            ;
        this.isUsable = function () {
            return !!B
        }
    }
    function q(C, B, D) {
        if (C.addEventListener) {
            C.addEventListener(B, D, false)
        } else {
            if (C.attachEvent) {
                C.attachEvent("on" + B, function () {
                    return D.call(C, window.event)
                })
            }
        }
    }
    function v(C, B) {
        var D = d.get(C);
        if (D.options) {
            return C
        }
        if (B.hover && B.hoverables[C.nodeName.toLowerCase()]) {
            b.attach(C)
        }
        D.options = B;
        return C
    }
    function j(B) {
        var C = {};
        return function (D) {
            if (!k(C, D)) {
                C[D] = B.apply(null, arguments)
            }
            return C[D]
        }
    }
    function c(F, E) {
        var B = n.quotedList(E.get("fontFamily").toLowerCase()), D;
        for (var C = 0; D = B[C]; ++C) {
            if (i[D]) {
                return i[D].get(E.get("fontStyle"), E.get("fontWeight"))
            }
        }
        return null
    }
    function g(B) {
        return document.getElementsByTagName(B)
    }
    function k(C, B) {
        return C.hasOwnProperty(B)
    }
    function h() {
        var C = {}, B, F;
        for (var E = 0, D = arguments.length; B = arguments[E],
            E < D; ++E) {
            for (F in B) {
                if (k(B, F)) {
                    C[F] = B[F]
                }
            }
        }
        return C
    }
    function o(E, M, C, N, F, D) {
        var K = document.createDocumentFragment(), H;
        if (M === "") {
            return K
        }
        var L = N.separate;
        var I = M.split(p[L])
            , B = (L == "words");
        if (B && t) {
            if (/^\s/.test(M)) {
                I.unshift("")
            }
            if (/\s$/.test(M)) {
                I.push("")
            }
        }
        for (var J = 0, G = I.length; J < G; ++J) {
            H = z[N.engine](E, B ? n.textAlign(I[J], C, J, G) : I[J], C, N, F, D, J < G - 1);
            if (H) {
                K.appendChild(H)
            }
        }
        return K
    }
    function l(D, M) {
        var C = D.nodeName.toLowerCase();
        if (M.ignore[C]) {
            return
        }
        var E = !M.textless[C];
        var B = n.getStyle(v(D, M)).extend(M);
        var F = c(D, B), G, K, I, H, L, J;
        if (!F) {
            return
        }
        for (G = D.firstChild; G; G = I) {
            K = G.nodeType;
            I = G.nextSibling;
            if (E && K == 3) {
                if (H) {
                    H.appendData(G.data);
                    D.removeChild(G)
                } else {
                    H = G
                }
                if (I) {
                    continue
                }
            }
            if (H) {
                D.replaceChild(o(F, n.whiteSpace(H.data, B, H, J), B, M, G, D), H);
                H = null
            }
            if (K == 1) {
                if (G.firstChild) {
                    if (G.nodeName.toLowerCase() == "cufon") {
                        z[M.engine](F, null, B, M, G, D)
                    } else {
                        arguments.callee(G, M)
                    }
                }
                J = G
            }
        }
    }
    var t = " ".split(/\s+/).length == 0;
    var d = new A();
    var b = new r();
    var y = new u();
    var e = false;
    var z = {}
        , i = {}
        , w = {
            autoDetect: false,
            engine: null,
            forceHitArea: false,
            hover: false,
            hoverables: {
                a: true
            },
            ignore: {
                applet: 1,
                canvas: 1,
                col: 1,
                colgroup: 1,
                head: 1,
                iframe: 1,
                map: 1,
                optgroup: 1,
                option: 1,
                script: 1,
                select: 1,
                style: 1,
                textarea: 1,
                title: 1,
                pre: 1
            },
            printable: true,
            selector: (window.Sizzle || (window.jQuery && function (B) {
                return jQuery(B)
            }
            ) || (window.dojo && dojo.query) || (window.Ext && Ext.query) || (window.YAHOO && YAHOO.util && YAHOO.util.Selector && YAHOO.util.Selector.query) || (window.$$ && function (B) {
                return $$(B)
            }
                ) || (window.$ && function (B) {
                    return $(B)
                }
                ) || (document.querySelectorAll && function (B) {
                    return document.querySelectorAll(B)
                }
                ) || g),
            separate: "words",
            textless: {
                dl: 1,
                html: 1,
                ol: 1,
                table: 1,
                tbody: 1,
                thead: 1,
                tfoot: 1,
                tr: 1,
                ul: 1
            },
            textShadow: "none"
        };
    var p = {
        words: /\s/.test("\u00a0") ? /[^\S\u00a0]+/ : /\s+/,
        characters: "",
        none: /^/
    };
    m.now = function () {
        x.ready();
        return m
    }
        ;
    m.refresh = function () {
        y.repeat.apply(y, arguments);
        return m
    }
        ;
    m.registerEngine = function (C, B) {
        if (!B) {
            return m
        }
        z[C] = B;
        return m.set("engine", C)
    }
        ;
    m.registerFont = function (D) {
        if (!D) {
            return m
        }
        var B = new s(D)
            , C = B.family;
        if (!i[C]) {
            i[C] = new f()
        }
        i[C].add(B);
        return m.set("fontFamily", '"' + C + '"')
    }
        ;
    m.replace = function (D, C, B) {
        C = h(w, C);
        if (!C.engine) {
            return m
        }
        if (!e) {
            n.addClass(x.root(), "cufon-active cufon-loading");
            n.ready(function () {
                n.addClass(n.removeClass(x.root(), "cufon-loading"), "cufon-ready")
            });
            e = true
        }
        if (C.hover) {
            C.forceHitArea = true
        }
        if (C.autoDetect) {
            delete C.fontFamily
        }
        if (typeof C.textShadow == "string") {
            C.textShadow = n.textShadow(C.textShadow)
        }
        if (typeof C.color == "string" && /^-/.test(C.color)) {
            C.textGradient = n.gradient(C.color)
        } else {
            delete C.textGradient
        }
        if (!B) {
            y.add(D, arguments)
        }
        if (D.nodeType || typeof D == "string") {
            D = [D]
        }
        n.ready(function () {
            for (var F = 0, E = D.length; F < E; ++F) {
                var G = D[F];
                if (typeof G == "string") {
                    m.replace(C.selector(G), C, true)
                } else {
                    l(G, C)
                }
            }
        });
        return m
    }
        ;
    m.set = function (B, C) {
        w[B] = C;
        return m
    }
        ;
    return m
}
)();
Cufon.registerEngine("canvas", (function () {
    var b = document.createElement("canvas");
    if (!b || !b.getContext || !b.getContext.apply) {
        return
    }
    b = null;
    var a = Cufon.CSS.supports("display", "inline-block");
    var e = !a && (document.compatMode == "BackCompat" || /frameset|transitional/i.test(document.doctype.publicId));
    var f = document.createElement("style");
    f.type = "text/css";
    f.appendChild(document.createTextNode(("cufon{text-indent:0;}@media screen,projection{cufon{display:inline;display:inline-block;position:relative;vertical-align:middle;" + (e ? "" : "font-size:1px;line-height:1px;") + "}cufon cufontext{display:-moz-inline-box;display:inline-block;width:0;height:0;overflow:hidden;text-indent:-10000in;}" + (a ? "cufon canvas{position:relative;}" : "cufon canvas{position:absolute;}") + "}@media print{cufon{padding:0;}cufon canvas{display:none;}}").replace(/;/g, "!important;")));
    document.getElementsByTagName("head")[0].appendChild(f);
    function d(p, h) {
        var n = 0
            , m = 0;
        var g = [], o = /([mrvxe])([^a-z]*)/g, k;
        generate: for (var j = 0; k = o.exec(p); ++j) {
            var l = k[2].split(",");
            switch (k[1]) {
                case "v":
                    g[j] = {
                        m: "bezierCurveTo",
                        a: [n + ~~l[0], m + ~~l[1], n + ~~l[2], m + ~~l[3], n += ~~l[4], m += ~~l[5]]
                    };
                    break;
                case "r":
                    g[j] = {
                        m: "lineTo",
                        a: [n += ~~l[0], m += ~~l[1]]
                    };
                    break;
                case "m":
                    g[j] = {
                        m: "moveTo",
                        a: [n = ~~l[0], m = ~~l[1]]
                    };
                    break;
                case "x":
                    g[j] = {
                        m: "closePath"
                    };
                    break;
                case "e":
                    break generate
            }
            h[g[j].m].apply(h, g[j].a)
        }
        return g
    }
    function c(m, k) {
        for (var j = 0, h = m.length; j < h; ++j) {
            var g = m[j];
            k[g.m].apply(k, g.a)
        }
    }
    return function (V, w, P, t, C, W) {
        var k = (w === null);
        if (k) {
            w = C.getAttribute("alt")
        }
        var A = V.viewBox;
        var m = P.getSize("fontSize", V.baseSize);
        var B = 0
            , O = 0
            , N = 0
            , u = 0;
        var z = t.textShadow
            , L = [];
        if (z) {
            for (var U = z.length; U--;) {
                var F = z[U];
                var K = m.convertFrom(parseFloat(F.offX));
                var I = m.convertFrom(parseFloat(F.offY));
                L[U] = [K, I];
                if (I < B) {
                    B = I
                }
                if (K > O) {
                    O = K
                }
                if (I > N) {
                    N = I
                }
                if (K < u) {
                    u = K
                }
            }
        }
        var Z = Cufon.CSS.textTransform(w, P).split("");
        var E = V.spacing(Z, ~~m.convertFrom(parseFloat(P.get("letterSpacing")) || 0), ~~m.convertFrom(parseFloat(P.get("wordSpacing")) || 0));
        if (!E.length) {
            return null
        }
        var h = E.total;
        O += A.width - E[E.length - 1];
        u += A.minX;
        var s, n;
        if (k) {
            s = C;
            n = C.firstChild
        } else {
            s = document.createElement("cufon");
            s.className = "cufon cufon-canvas";
            s.setAttribute("alt", w);
            n = document.createElement("canvas");
            s.appendChild(n);
            if (t.printable) {
                var S = document.createElement("cufontext");
                S.appendChild(document.createTextNode(w));
                s.appendChild(S)
            }
        }
        var aa = s.style;
        var H = n.style;
        var j = m.convert(A.height);
        var Y = Math.ceil(j);
        var M = Y / j;
        var G = M * Cufon.CSS.fontStretch(P.get("fontStretch"));
        var J = h * G;
        var Q = Math.ceil(m.convert(J + O - u));
        var o = Math.ceil(m.convert(A.height - B + N));
        n.width = Q;
        n.height = o;
        H.width = Q + "px";
        H.height = o + "px";
        B += A.minY;
        H.top = Math.round(m.convert(B - V.ascent)) + "px";
        H.left = Math.round(m.convert(u)) + "px";
        var r = Math.max(Math.ceil(m.convert(J)), 0) + "px";
        if (a) {
            aa.width = r;
            aa.height = m.convert(V.height) + "px"
        } else {
            aa.paddingLeft = r;
            aa.paddingBottom = (m.convert(V.height) - 1) + "px"
        }
        var X = n.getContext("2d")
            , D = j / A.height;
        X.scale(D, D * M);
        X.translate(-u, -B);
        X.save();
        function T() {
            var x = V.glyphs, ab, l = -1, g = -1, y;
            X.scale(G, 1);
            while (y = Z[++l]) {
                var ab = x[Z[l]] || V.missingGlyph;
                if (!ab) {
                    continue
                }
                if (ab.d) {
                    X.beginPath();
                    if (ab.code) {
                        c(ab.code, X)
                    } else {
                        ab.code = d("m" + ab.d, X)
                    }
                    X.fill()
                }
                X.translate(E[++g], 0)
            }
            X.restore()
        }
        if (z) {
            for (var U = z.length; U--;) {
                var F = z[U];
                X.save();
                X.fillStyle = F.color;
                X.translate.apply(X, L[U]);
                T()
            }
        }
        var q = t.textGradient;
        if (q) {
            var v = q.stops
                , p = X.createLinearGradient(0, A.minY, 0, A.maxY);
            for (var U = 0, R = v.length; U < R; ++U) {
                p.addColorStop.apply(p, v[U])
            }
            X.fillStyle = p
        } else {
            X.fillStyle = P.get("color")
        }
        T();
        return s
    }
}
)());
Cufon.registerEngine("vml", (function () {
    var e = document.namespaces;
    if (!e) {
        return
    }
    e.add("cvml", "urn:schemas-microsoft-com:vml");
    e = null;
    var b = document.createElement("cvml:shape");
    b.style.behavior = "url(#default#VML)";
    if (!b.coordsize) {
        return
    }
    b = null;
    var h = (document.documentMode || 0) < 8;
    document.write(('<style type="text/css">cufoncanvas{text-indent:0;}@media screen{cvml\\:shape,cvml\\:rect,cvml\\:fill,cvml\\:shadow{behavior:url(#default#VML);display:block;antialias:true;position:absolute;}cufoncanvas{position:absolute;text-align:left;}cufon{display:inline-block;position:relative;vertical-align:' + (h ? "middle" : "text-bottom") + ";}cufon cufontext{position:absolute;left:-10000in;font-size:1px;}a cufon{cursor:pointer}}@media print{cufon cufoncanvas{display:none;}}</style>").replace(/;/g, "!important;"));
    function c(i, j) {
        return a(i, /(?:em|ex|%)$|^[a-z-]+$/i.test(j) ? "1em" : j)
    }
    function a(l, m) {
        if (m === "0") {
            return 0
        }
        if (/px$/i.test(m)) {
            return parseFloat(m)
        }
        var k = l.style.left
            , j = l.runtimeStyle.left;
        l.runtimeStyle.left = l.currentStyle.left;
        l.style.left = m.replace("%", "em");
        var i = l.style.pixelLeft;
        l.style.left = k;
        l.runtimeStyle.left = j;
        return i
    }
    function f(l, k, j, n) {
        var i = "computed" + n
            , m = k[i];
        if (isNaN(m)) {
            m = k.get(n);
            k[i] = m = (m == "normal") ? 0 : ~~j.convertFrom(a(l, m))
        }
        return m
    }
    var g = {};
    function d(p) {
        var q = p.id;
        if (!g[q]) {
            var n = p.stops
                , o = document.createElement("cvml:fill")
                , i = [];
            o.type = "gradient";
            o.angle = 180;
            o.focus = "0";
            o.method = "sigma";
            o.color = n[0][1];
            for (var m = 1, l = n.length - 1; m < l; ++m) {
                i.push(n[m][0] * 100 + "% " + n[m][1])
            }
            o.colors = i.join(",");
            o.color2 = n[l][1];
            g[q] = o
        }
        return g[q]
    }
    return function (ac, G, Y, C, K, ad, W) {
        var n = (G === null);
        if (n) {
            G = K.alt
        }
        var I = ac.viewBox;
        var p = Y.computedFontSize || (Y.computedFontSize = new Cufon.CSS.Size(c(ad, Y.get("fontSize")) + "px", ac.baseSize));
        var y, q;
        if (n) {
            y = K;
            q = K.firstChild
        } else {
            y = document.createElement("cufon");
            y.className = "cufon cufon-vml";
            y.alt = G;
            q = document.createElement("cufoncanvas");
            y.appendChild(q);
            if (C.printable) {
                var Z = document.createElement("cufontext");
                Z.appendChild(document.createTextNode(G));
                y.appendChild(Z)
            }
            if (!W) {
                y.appendChild(document.createElement("cvml:shape"))
            }
        }
        var ai = y.style;
        var R = q.style;
        var l = p.convert(I.height)
            , af = Math.ceil(l);
        var V = af / l;
        var P = V * Cufon.CSS.fontStretch(Y.get("fontStretch"));
        var U = I.minX
            , T = I.minY;
        R.height = af;
        R.top = Math.round(p.convert(T - ac.ascent));
        R.left = Math.round(p.convert(U));
        ai.height = p.convert(ac.height) + "px";
        var F = Y.get("color");
        var ag = Cufon.CSS.textTransform(G, Y).split("");
        var L = ac.spacing(ag, f(ad, Y, p, "letterSpacing"), f(ad, Y, p, "wordSpacing"));
        if (!L.length) {
            return null
        }
        var k = L.total;
        var x = -U + k + (I.width - L[L.length - 1]);
        var ah = p.convert(x * P)
            , X = Math.round(ah);
        var O = x + "," + I.height, m;
        var J = "r" + O + "ns";
        var u = C.textGradient && d(C.textGradient);
        var o = ac.glyphs
            , S = 0;
        var H = C.textShadow;
        var ab = -1, aa = 0, w;
        while (w = ag[++ab]) {
            var D = o[ag[ab]] || ac.missingGlyph, v;
            if (!D) {
                continue
            }
            if (n) {
                v = q.childNodes[aa];
                while (v.firstChild) {
                    v.removeChild(v.firstChild)
                }
            } else {
                v = document.createElement("cvml:shape");
                q.appendChild(v)
            }
            v.stroked = "f";
            v.coordsize = O;
            v.coordorigin = m = (U - S) + "," + T;
            v.path = (D.d ? "m" + D.d + "xe" : "") + "m" + m + J;
            v.fillcolor = F;
            if (u) {
                v.appendChild(u.cloneNode(false))
            }
            var ae = v.style;
            ae.width = X;
            ae.height = af;
            if (H) {
                var s = H[0]
                    , r = H[1];
                var B = Cufon.CSS.color(s.color), z;
                var N = document.createElement("cvml:shadow");
                N.on = "t";
                N.color = B.color;
                N.offset = s.offX + "," + s.offY;
                if (r) {
                    z = Cufon.CSS.color(r.color);
                    N.type = "double";
                    N.color2 = z.color;
                    N.offset2 = r.offX + "," + r.offY
                }
                N.opacity = B.opacity || (z && z.opacity) || 1;
                v.appendChild(N)
            }
            S += L[aa++]
        }
        var M = v.nextSibling, t, A;
        if (C.forceHitArea) {
            if (!M) {
                M = document.createElement("cvml:rect");
                M.stroked = "f";
                M.className = "cufon-vml-cover";
                t = document.createElement("cvml:fill");
                t.opacity = 0;
                M.appendChild(t);
                q.appendChild(M)
            }
            A = M.style;
            A.width = X;
            A.height = af
        } else {
            if (M) {
                q.removeChild(M)
            }
        }
        ai.width = Math.max(Math.ceil(p.convert(k * P)), 0);
        if (h) {
            var Q = Y.computedYAdjust;
            if (Q === undefined) {
                var E = Y.get("lineHeight");
                if (E == "normal") {
                    E = "1em"
                } else {
                    if (!isNaN(E)) {
                        E += "em"
                    }
                }
                Y.computedYAdjust = Q = 0.5 * (a(ad, E) - parseFloat(ai.height))
            }
            if (Q) {
                ai.marginTop = Math.ceil(Q) + "px";
                ai.marginBottom = Q + "px"
            }
        }
        return y
    }
}
)());

/*	SWFObject v2.2 <http://code.google.com/p/swfobject/>
is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
var swfobject = function () {
    var D = "undefined", r = "object", S = "Shockwave Flash", W = "ShockwaveFlash.ShockwaveFlash", q = "application/x-shockwave-flash", R = "SWFObjectExprInst", x = "onreadystatechange", O = window, j = document, t = navigator, T = false, U = [h], o = [], N = [], I = [], l, Q, E, B, J = false, a = false, n, G, m = true, M = function () {
        var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D
            , ah = t.userAgent.toLowerCase()
            , Y = t.platform.toLowerCase()
            , ae = Y ? /win/.test(Y) : /win/.test(ah)
            , ac = Y ? /mac/.test(Y) : /mac/.test(ah)
            , af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false
            , X = !+"\v1"
            , ag = [0, 0, 0]
            , ab = null;
        if (typeof t.plugins != D && typeof t.plugins[S] == r) {
            ab = t.plugins[S].description;
            if (ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                T = true;
                X = false;
                ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
            }
        } else {
            if (typeof O.ActiveXObject != D) {
                try {
                    var ad = new ActiveXObject(W);
                    if (ad) {
                        ab = ad.GetVariable("$version");
                        if (ab) {
                            X = true;
                            ab = ab.split(" ")[1].split(",");
                            ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                        }
                    }
                } catch (Z) { }
            }
        }
        return {
            w3: aa,
            pv: ag,
            wk: af,
            ie: X,
            win: ae,
            mac: ac
        }
    }(), k = function () {
        if (!M.w3) {
            return
        }
        if ((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
            f()
        }
        if (!J) {
            if (typeof j.addEventListener != D) {
                j.addEventListener("DOMContentLoaded", f, false)
            }
            if (M.ie && M.win) {
                j.attachEvent(x, function () {
                    if (j.readyState == "complete") {
                        j.detachEvent(x, arguments.callee);
                        f()
                    }
                });
                if (O == top) {
                    (function () {
                        if (J) {
                            return
                        }
                        try {
                            j.documentElement.doScroll("left")
                        } catch (X) {
                            setTimeout(arguments.callee, 0);
                            return
                        }
                        f()
                    }
                    )()
                }
            }
            if (M.wk) {
                (function () {
                    if (J) {
                        return
                    }
                    if (!/loaded|complete/.test(j.readyState)) {
                        setTimeout(arguments.callee, 0);
                        return
                    }
                    f()
                }
                )()
            }
            s(f)
        }
    }();
    function f() {
        if (J) {
            return
        }
        try {
            var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
            Z.parentNode.removeChild(Z)
        } catch (aa) {
            return
        }
        J = true;
        var X = U.length;
        for (var Y = 0; Y < X; Y++) {
            U[Y]()
        }
    }
    function K(X) {
        if (J) {
            X()
        } else {
            U[U.length] = X
        }
    }
    function s(Y) {
        if (typeof O.addEventListener != D) {
            O.addEventListener("load", Y, false)
        } else {
            if (typeof j.addEventListener != D) {
                j.addEventListener("load", Y, false)
            } else {
                if (typeof O.attachEvent != D) {
                    i(O, "onload", Y)
                } else {
                    if (typeof O.onload == "function") {
                        var X = O.onload;
                        O.onload = function () {
                            X();
                            Y()
                        }
                    } else {
                        O.onload = Y
                    }
                }
            }
        }
    }
    function h() {
        if (T) {
            V()
        } else {
            H()
        }
    }
    function V() {
        var X = j.getElementsByTagName("body")[0];
        var aa = C(r);
        aa.setAttribute("type", q);
        var Z = X.appendChild(aa);
        if (Z) {
            var Y = 0;
            (function () {
                if (typeof Z.GetVariable != D) {
                    var ab = Z.GetVariable("$version");
                    if (ab) {
                        ab = ab.split(" ")[1].split(",");
                        M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                    }
                } else {
                    if (Y < 10) {
                        Y++;
                        setTimeout(arguments.callee, 10);
                        return
                    }
                }
                X.removeChild(aa);
                Z = null;
                H()
            }
            )()
        } else {
            H()
        }
    }
    function H() {
        var ag = o.length;
        if (ag > 0) {
            for (var af = 0; af < ag; af++) {
                var Y = o[af].id;
                var ab = o[af].callbackFn;
                var aa = {
                    success: false,
                    id: Y
                };
                if (M.pv[0] > 0) {
                    var ae = c(Y);
                    if (ae) {
                        if (F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                            w(Y, true);
                            if (ab) {
                                aa.success = true;
                                aa.ref = z(Y);
                                ab(aa)
                            }
                        } else {
                            if (o[af].expressInstall && A()) {
                                var ai = {};
                                ai.data = o[af].expressInstall;
                                ai.width = ae.getAttribute("width") || "0";
                                ai.height = ae.getAttribute("height") || "0";
                                if (ae.getAttribute("class")) {
                                    ai.styleclass = ae.getAttribute("class")
                                }
                                if (ae.getAttribute("align")) {
                                    ai.align = ae.getAttribute("align")
                                }
                                var ah = {};
                                var X = ae.getElementsByTagName("param");
                                var ac = X.length;
                                for (var ad = 0; ad < ac; ad++) {
                                    if (X[ad].getAttribute("name").toLowerCase() != "movie") {
                                        ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                    }
                                }
                                P(ai, ah, Y, ab)
                            } else {
                                p(ae);
                                if (ab) {
                                    ab(aa)
                                }
                            }
                        }
                    }
                } else {
                    w(Y, true);
                    if (ab) {
                        var Z = z(Y);
                        if (Z && typeof Z.SetVariable != D) {
                            aa.success = true;
                            aa.ref = Z
                        }
                        ab(aa)
                    }
                }
            }
        }
    }
    function z(aa) {
        var X = null;
        var Y = c(aa);
        if (Y && Y.nodeName == "OBJECT") {
            if (typeof Y.SetVariable != D) {
                X = Y
            } else {
                var Z = Y.getElementsByTagName(r)[0];
                if (Z) {
                    X = Z
                }
            }
        }
        return X
    }
    function A() {
        return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
    }
    function P(aa, ab, X, Z) {
        a = true;
        E = Z || null;
        B = {
            success: false,
            id: X
        };
        var ae = c(X);
        if (ae) {
            if (ae.nodeName == "OBJECT") {
                l = g(ae);
                Q = null
            } else {
                l = ae;
                Q = X
            }
            aa.id = R;
            if (typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                aa.width = "310"
            }
            if (typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                aa.height = "137"
            }
            j.title = j.title.slice(0, 47) + " - Flash Player Installation";
            var ad = M.ie && M.win ? "ActiveX" : "PlugIn"
                , ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
            if (typeof ab.flashvars != D) {
                ab.flashvars += "&" + ac
            } else {
                ab.flashvars = ac
            }
            if (M.ie && M.win && ae.readyState != 4) {
                var Y = C("div");
                X += "SWFObjectNew";
                Y.setAttribute("id", X);
                ae.parentNode.insertBefore(Y, ae);
                ae.style.display = "none";
                (function () {
                    if (ae.readyState == 4) {
                        ae.parentNode.removeChild(ae)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                }
                )()
            }
            u(aa, ab, X)
        }
    }
    function p(Y) {
        if (M.ie && M.win && Y.readyState != 4) {
            var X = C("div");
            Y.parentNode.insertBefore(X, Y);
            X.parentNode.replaceChild(g(Y), X);
            Y.style.display = "none";
            (function () {
                if (Y.readyState == 4) {
                    Y.parentNode.removeChild(Y)
                } else {
                    setTimeout(arguments.callee, 10)
                }
            }
            )()
        } else {
            Y.parentNode.replaceChild(g(Y), Y)
        }
    }
    function g(ab) {
        var aa = C("div");
        if (M.win && M.ie) {
            aa.innerHTML = ab.innerHTML
        } else {
            var Y = ab.getElementsByTagName(r)[0];
            if (Y) {
                var ad = Y.childNodes;
                if (ad) {
                    var X = ad.length;
                    for (var Z = 0; Z < X; Z++) {
                        if (!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                            aa.appendChild(ad[Z].cloneNode(true))
                        }
                    }
                }
            }
        }
        return aa
    }
    function u(ai, ag, Y) {
        var X, aa = c(Y);
        if (M.wk && M.wk < 312) {
            return X
        }
        if (aa) {
            if (typeof ai.id == D) {
                ai.id = Y
            }
            if (M.ie && M.win) {
                var ah = "";
                for (var ae in ai) {
                    if (ai[ae] != Object.prototype[ae]) {
                        if (ae.toLowerCase() == "data") {
                            ag.movie = ai[ae]
                        } else {
                            if (ae.toLowerCase() == "styleclass") {
                                ah += ' class="' + ai[ae] + '"'
                            } else {
                                if (ae.toLowerCase() != "classid") {
                                    ah += " " + ae + '="' + ai[ae] + '"'
                                }
                            }
                        }
                    }
                }
                var af = "";
                for (var ad in ag) {
                    if (ag[ad] != Object.prototype[ad]) {
                        af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                    }
                }
                aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                N[N.length] = ai.id;
                X = c(ai.id)
            } else {
                var Z = C(r);
                Z.setAttribute("type", q);
                for (var ac in ai) {
                    if (ai[ac] != Object.prototype[ac]) {
                        if (ac.toLowerCase() == "styleclass") {
                            Z.setAttribute("class", ai[ac])
                        } else {
                            if (ac.toLowerCase() != "classid") {
                                Z.setAttribute(ac, ai[ac])
                            }
                        }
                    }
                }
                for (var ab in ag) {
                    if (ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                        e(Z, ab, ag[ab])
                    }
                }
                aa.parentNode.replaceChild(Z, aa);
                X = Z
            }
        }
        return X
    }
    function e(Z, X, Y) {
        var aa = C("param");
        aa.setAttribute("name", X);
        aa.setAttribute("value", Y);
        Z.appendChild(aa)
    }
    function y(Y) {
        var X = c(Y);
        if (X && X.nodeName == "OBJECT") {
            if (M.ie && M.win) {
                X.style.display = "none";
                (function () {
                    if (X.readyState == 4) {
                        b(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                }
                )()
            } else {
                X.parentNode.removeChild(X)
            }
        }
    }
    function b(Z) {
        var Y = c(Z);
        if (Y) {
            for (var X in Y) {
                if (typeof Y[X] == "function") {
                    Y[X] = null
                }
            }
            Y.parentNode.removeChild(Y)
        }
    }
    function c(Z) {
        var X = null;
        try {
            X = j.getElementById(Z)
        } catch (Y) { }
        return X
    }
    function C(X) {
        return j.createElement(X)
    }
    function i(Z, X, Y) {
        Z.attachEvent(X, Y);
        I[I.length] = [Z, X, Y]
    }
    function F(Z) {
        var Y = M.pv
            , X = Z.split(".");
        X[0] = parseInt(X[0], 10);
        X[1] = parseInt(X[1], 10) || 0;
        X[2] = parseInt(X[2], 10) || 0;
        return (Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
    }
    function v(ac, Y, ad, ab) {
        if (M.ie && M.mac) {
            return
        }
        var aa = j.getElementsByTagName("head")[0];
        if (!aa) {
            return
        }
        var X = (ad && typeof ad == "string") ? ad : "screen";
        if (ab) {
            n = null;
            G = null
        }
        if (!n || G != X) {
            var Z = C("style");
            Z.setAttribute("type", "text/css");
            Z.setAttribute("media", X);
            n = aa.appendChild(Z);
            if (M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                n = j.styleSheets[j.styleSheets.length - 1]
            }
            G = X
        }
        if (M.ie && M.win) {
            if (n && typeof n.addRule == r) {
                n.addRule(ac, Y)
            }
        } else {
            if (n && typeof j.createTextNode != D) {
                n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
            }
        }
    }
    function w(Z, X) {
        if (!m) {
            return
        }
        var Y = X ? "visible" : "hidden";
        if (J && c(Z)) {
            c(Z).style.visibility = Y
        } else {
            v("#" + Z, "visibility:" + Y)
        }
    }
    function L(Y) {
        var Z = /[\\\"<>\.;]/;
        var X = Z.exec(Y) != null;
        return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
    }
    var d = function () {
        if (M.ie && M.win) {
            window.attachEvent("onunload", function () {
                var ac = I.length;
                for (var ab = 0; ab < ac; ab++) {
                    I[ab][0].detachEvent(I[ab][1], I[ab][2])
                }
                var Z = N.length;
                for (var aa = 0; aa < Z; aa++) {
                    y(N[aa])
                }
                for (var Y in M) {
                    M[Y] = null
                }
                M = null;
                for (var X in swfobject) {
                    swfobject[X] = null
                }
                swfobject = null
            })
        }
    }();
    return {
        registerObject: function (ab, X, aa, Z) {
            if (M.w3 && ab && X) {
                var Y = {};
                Y.id = ab;
                Y.swfVersion = X;
                Y.expressInstall = aa;
                Y.callbackFn = Z;
                o[o.length] = Y;
                w(ab, false)
            } else {
                if (Z) {
                    Z({
                        success: false,
                        id: ab
                    })
                }
            }
        },
        getObjectById: function (X) {
            if (M.w3) {
                return z(X)
            }
        },
        embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
            var X = {
                success: false,
                id: ah
            };
            if (M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                w(ah, false);
                K(function () {
                    ae += "";
                    ag += "";
                    var aj = {};
                    if (af && typeof af === r) {
                        for (var al in af) {
                            aj[al] = af[al]
                        }
                    }
                    aj.data = ab;
                    aj.width = ae;
                    aj.height = ag;
                    var am = {};
                    if (ad && typeof ad === r) {
                        for (var ak in ad) {
                            am[ak] = ad[ak]
                        }
                    }
                    if (Z && typeof Z === r) {
                        for (var ai in Z) {
                            if (typeof am.flashvars != D) {
                                am.flashvars += "&" + ai + "=" + Z[ai]
                            } else {
                                am.flashvars = ai + "=" + Z[ai]
                            }
                        }
                    }
                    if (F(Y)) {
                        var an = u(aj, am, ah);
                        if (aj.id == ah) {
                            w(ah, true)
                        }
                        X.success = true;
                        X.ref = an
                    } else {
                        if (aa && A()) {
                            aj.data = aa;
                            P(aj, am, ah, ac);
                            return
                        } else {
                            w(ah, true)
                        }
                    }
                    if (ac) {
                        ac(X)
                    }
                })
            } else {
                if (ac) {
                    ac(X)
                }
            }
        },
        switchOffAutoHideShow: function () {
            m = false
        },
        ua: M,
        getFlashPlayerVersion: function () {
            return {
                major: M.pv[0],
                minor: M.pv[1],
                release: M.pv[2]
            }
        },
        hasFlashPlayerVersion: F,
        createSWF: function (Z, Y, X) {
            if (M.w3) {
                return u(Z, Y, X)
            } else {
                return undefined
            }
        },
        showExpressInstall: function (Z, aa, X, Y) {
            if (M.w3 && A()) {
                P(Z, aa, X, Y)
            }
        },
        removeSWF: function (X) {
            if (M.w3) {
                y(X)
            }
        },
        createCSS: function (aa, Z, Y, X) {
            if (M.w3) {
                v(aa, Z, Y, X)
            }
        },
        addDomLoadEvent: K,
        addLoadEvent: s,
        getQueryParamValue: function (aa) {
            var Z = j.location.search || j.location.hash;
            if (Z) {
                if (/\?/.test(Z)) {
                    Z = Z.split("?")[1]
                }
                if (aa == null) {
                    return L(Z)
                }
                var Y = Z.split("&");
                for (var X = 0; X < Y.length; X++) {
                    if (Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                        return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                    }
                }
            }
            return ""
        },
        expressInstallCallback: function () {
            if (a) {
                var X = c(R);
                if (X && l) {
                    X.parentNode.replaceChild(l, X);
                    if (Q) {
                        w(Q, true);
                        if (M.ie && M.win) {
                            l.style.display = "block"
                        }
                    }
                    if (E) {
                        E(B)
                    }
                }
                a = false
            }
        }
    }
}();

(function () {

    var BrowserDetect = {
        init: function () {
            this.browser = this.searchString(this.dataBrowser) || "An unknown browser";
            this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "an unknown version";
            this.OS = this.searchString(this.dataOS) || "an unknown OS";
        },
        searchString: function (data) {
            for (var i = 0; i < data.length; i++) {
                var dataString = data[i].string;
                var dataProp = data[i].prop;
                this.versionSearchString = data[i].versionSearch || data[i].identity;
                if (dataString) {
                    if (dataString.indexOf(data[i].subString) != -1)
                        return data[i].identity;
                } else if (dataProp)
                    return data[i].identity;
            }
        },
        searchVersion: function (dataString) {
            var index = dataString.indexOf(this.versionSearchString);
            if (index == -1)
                return;
            return parseFloat(dataString.substring(index + this.versionSearchString.length + 1));
        },
        dataBrowser: [{
            string: navigator.userAgent,
            subString: "Chrome",
            identity: "Chrome"
        }, {
            string: navigator.userAgent,
            subString: "OmniWeb",
            versionSearch: "OmniWeb/",
            identity: "OmniWeb"
        }, {
            string: navigator.vendor,
            subString: "Apple",
            identity: "Safari",
            versionSearch: "Version"
        }, {
            prop: window.opera,
            identity: "Opera"
        }, {
            string: navigator.vendor,
            subString: "iCab",
            identity: "iCab"
        }, {
            string: navigator.vendor,
            subString: "KDE",
            identity: "Konqueror"
        }, {
            string: navigator.userAgent,
            subString: "Firefox",
            identity: "Firefox"
        }, {
            string: navigator.vendor,
            subString: "Camino",
            identity: "Camino"
        }, {
            // for newer Netscapes (6+)
            string: navigator.userAgent,
            subString: "Netscape",
            identity: "Netscape"
        }, {
            string: navigator.userAgent,
            subString: "MSIE",
            identity: "Explorer",
            versionSearch: "MSIE"
        }, {
            string: navigator.userAgent,
            subString: "Gecko",
            identity: "Mozilla",
            versionSearch: "rv"
        }, {
            // for older Netscapes (4-)
            string: navigator.userAgent,
            subString: "Mozilla",
            identity: "Netscape",
            versionSearch: "Mozilla"
        }],
        dataOS: [{
            string: navigator.platform,
            subString: "Win",
            identity: "Windows"
        }, {
            string: navigator.platform,
            subString: "Mac",
            identity: "Mac"
        }, {
            string: navigator.userAgent,
            subString: "iPhone",
            identity: "iPhone/iPod"
        }, {
            string: navigator.platform,
            subString: "Linux",
            identity: "Linux"
        }]

    };

    BrowserDetect.init();

    window.$.client = {
        os: BrowserDetect.OS,
        browser: BrowserDetect.browser
    };

}
)();

//copyright 2008 Jarrett Vance
//http://jvance.com
$.fn.rater = function (options) {
    var opts = $.extend({}, $.fn.rater.defaults, options);
    return this.each(function () {
        var $this = $(this);
        var $on = $this.find('.ui-rater-starsOn');
        var $off = $this.find('.ui-rater-starsOff');
        opts.size = $on.height();
        if (opts.rating == undefined)
            opts.rating = $on.width() / opts.size;
        if (opts.id == undefined)
            opts.id = $this.attr('id');

        $off.mousemove(function (e) {
            var left = e.clientX - $off.offset().left;
            var width = $off.width() - ($off.width() - left);
            width = Math.ceil(width / (opts.size / opts.step)) * opts.size / opts.step;
            $on.width(width);
        }).hover(function (e) {
            $on.addClass('ui-rater-starsHover');
        }, function (e) {
            $on.removeClass('ui-rater-starsHover');
            $on.width(opts.rating * opts.size);
        }).click(function (e) {
            var r = Math.round($on.width() / $off.width() * (opts.units * opts.step)) / opts.step;
            $off.unbind('click').unbind('mousemove').unbind('mouseenter').unbind('mouseleave');
            $off.css('cursor', 'default');
            $on.css('cursor', 'default');
            $.fn.rater.rate($this, opts, r);
        }).css('cursor', 'pointer');
        $on.css('cursor', 'pointer');
    });
}
    ;

$.fn.rater.defaults = {
    postHref: location.href,
    units: 5,
    step: 1
};

$.fn.rater.rate = function ($this, opts, rating) {
    var $on = $this.find('.ui-rater-starsOn');
    var $off = $this.find('.ui-rater-starsOff');
    $off.fadeTo(600, 0.4, function () {
        $.ajax({
            url: opts.postHref,
            type: "POST",
            data: 'id=' + opts.id + '&rating=' + rating,
            complete: function (req) {
                if (req.status == 200) {
                    //success
                    opts.rating = parseFloat(req.responseText);
                    $off.fadeTo(600, 0.1, function () {
                        $on.removeClass('ui-rater-starsHover').width(opts.rating * opts.size);
                        var $count = $this.find('.ui-rater-rateCount');
                        $count.text(parseInt($count.text()) + 1);
                        $this.find('.ui-rater-rating').text(opts.rating.toFixed(1));
                        $off.fadeTo(600, 1);
                        $this.attr('title', 'Your rating: ' + rating.toFixed(1));
                    });
                } else {
                    //failure
                    alert(req.responseText);
                    $on.removeClass('ui-rater-starsHover').width(opts.rating * opts.size);
                    $this.rater(opts);
                    $off.fadeTo(2200, 1);
                }
            }
        });
    });
}
    ;

/*****************************************************************************
jQuery Placeholder 1.1.1

Copyright (c) 2010 Michael J. Ryan (http://tracker1.info/)

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html

------------------------------------------------------------------------------

Sets up a watermark for inputted fields... this will create a LABEL.watermark
tag immediately following the input tag, the positioning will be set absolute,
and it will be positioned to match the input tag.

To activate on all tags with a 'data-watermark' attribute:

$('input[placeholder],textarea[placeholder]').placeholder();


To style the tags as appropriate (you'll want to make sure the font matches):

label.placeholder {
    cursor: text;				<--- display a cursor to match the text input

    padding: 4px 4px 4px 4px;   <--- this should match the border+padding
                                        for the input field(s)
    color: #999999;				<--- this will display as faded
}

You'll also want to have the color set for browsers with native support
input:placeholder, textarea:placeholder {
    color: #999999;
}
input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {
    color: #999999;
}

------------------------------------------------------------------------------

Thanks to...
http://www.alistapart.com/articles/makingcompactformsmoreaccessible
http://plugins.jquery.com/project/overlabel

This works similar to the overlabel, but creates the actual label tag
based on a data-watermark attribute on the input tag, instead of
relying on the markup to provide it.

*****************************************************************************/
(function ($) {

    var ph = "PLACEHOLDER-INPUT";
    var phl = "PLACEHOLDER-LABEL";
    var boundEvents = false;
    var default_options = {
        labelClass: 'placeholder'
    };

    //check for native support for placeholder attribute, if so stub methods and return
    var input = document.createElement("input");
    if ('placeholder' in input) {
        $.fn.placeholder = $.fn.unplaceholder = function () { }
            ;
        //empty function
        delete input;
        //cleanup IE memory
        return;
    }
    ; delete input;

    $.fn.placeholder = function (options) {
        bindEvents();

        var opts = $.extend(default_options, options)

        this.each(function () {
            var rnd = Math.random().toString(32).replace(/\./, '')
                , input = $(this)
                , label = $('<span style="position:absolute;display:none;top:0;left:0;width:' + input.width() + 'px"></span>');

            if (!input.attr('placeholder') || input.data(ph) === ph)
                return;
            //already watermarked

            //make sure the input tag has an ID assigned, if not, assign one.
            if (!input.attr('id'))
                input.attr('id', 'input_' + rnd);

            label.attr('id', input.attr('id') + "_placeholder").data(ph, '#' + input.attr('id'))//reference to the input tag
                .attr('for', input.attr('id')).addClass(opts.labelClass).addClass(opts.labelClass + '-for-' + this.tagName.toLowerCase())//ex: watermark-for-textarea
                .addClass(phl).text(input.attr('placeholder'));

            input.data(phl, '#' + label.attr('id'))//set a reference to the label
                .data(ph, ph)//set that the field is watermarked
                .addClass(ph)//add the watermark class
                .after(label);
            //add the label field to the page

            //setup overlay
            itemIn.call(this);
            itemOut.call(this);
        });
    }
        ;

    $.fn.unplaceholder = function () {
        this.each(function () {
            var input = $(this)
                , label = $(input.data(phl));

            if (input.data(ph) !== ph)
                return;

            label.remove();
            input.removeData(ph).removeData(phl).removeClass(ph);
        });
    }
        ;

    function bindEvents() {
        if (boundEvents)
            return;

        //prepare live bindings if not already done.
        $('.' + ph).live('click', itemIn).live('focusin', itemIn).live('focusout', itemOut);

        $('.' + phl).live('click', itemInLabel);
        bound = true;

        boundEvents = true;
    }
    ;
    function itemIn() {
        var input = $(this)
            , label = $(input.data(phl));

        label.css('display', 'none');
    }
    ;
    function itemInLabel() {
        $(this).css('display', 'none');
        var arr = $(this).attr('id').split('_');
        arr.pop();
        $('#' + arr.join('_')).focus();
    }
    ;
    function itemOut() {
        var that = this;

        //use timeout to let other validators/formatters directly bound to blur/focusout work first
        setTimeout(function () {
            var input = $(that);
            $(input.data(phl)).css('top', input.position().top + 'px').css('left', input.position().left + 'px').css('display', !!input.val() ? 'none' : 'block');
        }, 200);
    }
    ;

}(jQuery));

/*!
* Tiny Scrollbar 1.6
* http://www.baijs.nl/tinyscrollbar/
*
* Copyright 2010, Maarten Baijs
* Dual licensed under the MIT or GPL Version 2 licenses.
* http://www.opensource.org/licenses/mit-license.php
* http://www.opensource.org/licenses/gpl-2.0.php
*
* Date: 27 / 04 / 2011
* Depends on library: jQuery
*
*/

(function ($) {
    $.fn.tinyscrollbar = function (options) {
        var defaults = {
            axis: 'y',
            wheel: 40,
            scroll: true,
            size: 'auto',
            sizethumb: 'auto'
        };
        var options = $.extend(defaults, options);
        var oWrapper = $(this);
        var oViewport = {
            obj: $('.viewport', this)
        };
        var oContent = {
            obj: $('.overview', this)
        };
        var oScrollbar = {
            obj: $('.scrollbar', this)
        };
        var oTrack = {
            obj: $('.track', oScrollbar.obj)
        };
        var oThumb = {
            obj: $('.thumb', oScrollbar.obj)
        };
        var sAxis = options.axis == 'x'
            , sDirection = sAxis ? 'left' : 'top'
            , sSize = sAxis ? 'Width' : 'Height';
        var iScroll, iPosition = {
            start: 0,
            now: 0
        }, iMouse = {};
        if (this.length > 1) {
            this.each(function () {
                $(this).tinyscrollbar(options)
            });
            return this;
        }
        this.initialize = function () {
            this.update();
            setEvents();
        }
            ;
        this.update = function () {
            iScroll = 0;
            oViewport[options.axis] = oViewport.obj[0]['offset' + sSize];
            oContent[options.axis] = oContent.obj[0]['scroll' + sSize];
            oContent.ratio = oViewport[options.axis] / oContent[options.axis];
            oScrollbar.obj.toggleClass('disable', oContent.ratio >= 1);
            oTrack[options.axis] = options.size == 'auto' ? oViewport[options.axis] : options.size;
            oThumb[options.axis] = Math.min(oTrack[options.axis], Math.max(0, (options.sizethumb == 'auto' ? (oTrack[options.axis] * oContent.ratio) : options.sizethumb)));
            oScrollbar.ratio = options.sizethumb == 'auto' ? (oContent[options.axis] / oTrack[options.axis]) : (oContent[options.axis] - oViewport[options.axis]) / (oTrack[options.axis] - oThumb[options.axis]);
            setSize();
        }
            ;
        function setSize() {
            oContent.obj.removeAttr('style');
            oThumb.obj.removeAttr('style');
            iMouse['start'] = oThumb.obj.offset()[sDirection];
            var sCssSize = sSize.toLowerCase();
            oScrollbar.obj.css(sCssSize, oTrack[options.axis]);
            oTrack.obj.css(sCssSize, oTrack[options.axis]);
            oThumb.obj.css(sCssSize, oThumb[options.axis]);
        }
        ; function setEvents() {
            oThumb.obj.bind('mousedown', start);
            oTrack.obj.bind('mouseup', drag);
            if (options.scroll && this.addEventListener) {
                oWrapper[0].addEventListener('DOMMouseScroll', wheel, false);
                oWrapper[0].addEventListener('mousewheel', wheel, false);
            } else if (options.scroll) {
                oWrapper[0].onmousewheel = wheel;
            }
        }
        ; function start(oEvent) {
            iMouse.start = sAxis ? oEvent.pageX : oEvent.pageY;
            iPosition.start = parseInt(oThumb.obj.css(sDirection));
            $(document).bind('mousemove', drag);
            $(document).bind('mouseup', end);
            oThumb.obj.bind('mouseup', end);
            return false;
        }
        ; function wheel(oEvent) {
            if (!(oContent.ratio >= 1)) {
                oEvent = $.event.fix(oEvent || window.event);
                var iDelta = oEvent.wheelDelta ? oEvent.wheelDelta / 120 : -oEvent.detail / 3;
                iScroll -= iDelta * options.wheel;
                iScroll = Math.min((oContent[options.axis] - oViewport[options.axis]), Math.max(0, iScroll));
                oThumb.obj.css(sDirection, iScroll / oScrollbar.ratio);
                oContent.obj.css(sDirection, -iScroll);
                oEvent.preventDefault();
            }
            ;
        }
        ; function end(oEvent) {
            $(document).unbind('mousemove', drag);
            $(document).unbind('mouseup', end);
            oThumb.obj.unbind('mouseup', end);
            return false;
        }
        ; function drag(oEvent) {
            if (!(oContent.ratio >= 1)) {
                iPosition.now = Math.min((oTrack[options.axis] - oThumb[options.axis]), Math.max(0, (iPosition.start + ((sAxis ? oEvent.pageX : oEvent.pageY) - iMouse.start))));
                iScroll = iPosition.now * oScrollbar.ratio;
                oContent.obj.css(sDirection, -iScroll);
                oThumb.obj.css(sDirection, iPosition.now);
                ;
            }
            return false;
        }
        ; return this.initialize();
    }
        ;
}
)(jQuery);

/*
* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
*
* Uses the built in easing capabilities added In jQuery 1.1
* to offer multiple easing options
*
* TERMS OF USE - jQuery Easing
* 
* Open source under the BSD License. 
* 
* Copyright © 2008 George McGinley Smith
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
* Redistributions of source code must retain the above copyright notice, this list of 
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list 
* of conditions and the following disclaimer in the documentation and/or other materials 
* provided with the distribution.
* 
* Neither the name of the author nor the names of contributors may be used to endorse 
* or promote products derived from this software without specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
* OF THE POSSIBILITY OF SUCH DAMAGE. 
*
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function (x, t, b, c, d) {
        //alert(jQuery.easing.default);
        return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function (x, t, b, c, d) {
        return c * (t /= d) * t + b;
    },
    easeOutQuad: function (x, t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t + b;
        return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function (x, t, b, c, d) {
        return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function (x, t, b, c, d) {
        return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t + b;
        return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function (x, t, b, c, d) {
        return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function (x, t, b, c, d) {
        return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return c / 2 * t * t * t * t * t + b;
        return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function (x, t, b, c, d) {
        return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function (x, t, b, c, d) {
        return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function (x, t, b, c, d) {
        return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function (x, t, b, c, d) {
        return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function (x, t, b, c, d) {
        return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function (x, t, b, c, d) {
        if (t == 0)
            return b;
        if (t == d)
            return b + c;
        if ((t /= d / 2) < 1)
            return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function (x, t, b, c, d) {
        return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function (x, t, b, c, d) {
        return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function (x, t, b, c, d) {
        if ((t /= d / 2) < 1)
            return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
        return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d) == 1)
            return b + c;
        if (!p)
            p = d * .3;
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function (x, t, b, c, d) {
        var s = 1.70158;
        var p = 0;
        var a = c;
        if (t == 0)
            return b;
        if ((t /= d / 2) == 2)
            return b + c;
        if (!p)
            p = d * (.3 * 1.5);
        if (a < Math.abs(c)) {
            a = c;
            var s = p / 4;
        } else
            var s = p / (2 * Math.PI) * Math.asin(c / a);
        if (t < 1)
            return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
        return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function (x, t, b, c, d, s) {
        if (s == undefined)
            s = 1.70158;
        if ((t /= d / 2) < 1)
            return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
        return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function (x, t, b, c, d) {
        return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function (x, t, b, c, d) {
        if ((t /= d) < (1 / 2.75)) {
            return c * (7.5625 * t * t) + b;
        } else if (t < (2 / 2.75)) {
            return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
        } else if (t < (2.5 / 2.75)) {
            return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
        } else {
            return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
        }
    },
    easeInOutBounce: function (x, t, b, c, d) {
        if (t < d / 2)
            return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
        return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
});

/*
*
* TERMS OF USE - EASING EQUATIONS
* 
* Open source under the BSD License. 
* 
* Copyright © 2001 Robert Penner
* All rights reserved.
* 
* Redistribution and use in source and binary forms, with or without modification, 
* are permitted provided that the following conditions are met:
* 
* Redistributions of source code must retain the above copyright notice, this list of 
* conditions and the following disclaimer.
* Redistributions in binary form must reproduce the above copyright notice, this list 
* of conditions and the following disclaimer in the documentation and/or other materials 
* provided with the distribution.
* 
* Neither the name of the author nor the names of contributors may be used to endorse 
* or promote products derived from this software without specific prior written permission.
* 
* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
* EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
* MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
*  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
*  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
*  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
* AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
*  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
* OF THE POSSIBILITY OF SUCH DAMAGE. 
*
*/

/*!
* jCarousel - Riding carousels with jQuery
*   http://sorgalla.com/jcarousel/
*
* Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
* Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
* and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
*
* Built on top of the jQuery library
*   http://jquery.com
*
* Inspired by the "Carousel Component" by Bill Scott
*   http://billwscott.com/carousel/
*/

(function (g) {
    var q = {
        vertical: !1,
        rtl: !1,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: "normal",
        easing: "swing",
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: "<div></div>",
        buttonPrevHTML: "<div></div>",
        buttonNextEvent: "click",
        buttonPrevEvent: "click",
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }
        , m = !1;
    g(window).bind("load.jcarousel", function () {
        m = !0
    });
    g.jcarousel = function (a, c) {
        this.options = g.extend({}, q, c || {});
        this.autoStopped = this.locked = !1;
        this.buttonPrevState = this.buttonNextState = this.buttonPrev = this.buttonNext = this.list = this.clip = this.container = null;
        if (!c || c.rtl === void 0)
            this.options.rtl = (g(a).attr("dir") || g("html").attr("dir") || "").toLowerCase() == "rtl";
        this.wh = !this.options.vertical ? "width" : "height";
        this.lt = !this.options.vertical ? this.options.rtl ? "right" : "left" : "top";
        for (var b = "", d = a.className.split(" "), f = 0; f < d.length; f++)
            if (d[f].indexOf("jcarousel-skin") != -1) {
                g(a).removeClass(d[f]);
                b = d[f];
                break
            }
        a.nodeName.toUpperCase() == "UL" || a.nodeName.toUpperCase() == "OL" ? (this.list = g(a),
            this.clip = this.list.parents(".jcarousel-clip"),
            this.container = this.list.parents(".jcarousel-container")) : (this.container = g(a),
                this.list = this.container.find("ul,ol").eq(0),
                this.clip = this.container.find(".jcarousel-clip"));
        if (this.clip.size() === 0)
            this.clip = this.list.wrap("<div></div>").parent();
        if (this.container.size() === 0)
            this.container = this.clip.wrap("<div></div>").parent();
        b !== "" && this.container.parent()[0].className.indexOf("jcarousel-skin") == -1 && this.container.wrap('<div class=" ' + b + '"></div>');
        this.buttonPrev = g(".jcarousel-prev", this.container);
        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null)
            this.buttonPrev = g(this.options.buttonPrevHTML).appendTo(this.container);
        this.buttonPrev.addClass(this.className("jcarousel-prev"));
        this.buttonNext = g(".jcarousel-next", this.container);
        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null)
            this.buttonNext = g(this.options.buttonNextHTML).appendTo(this.container);
        this.buttonNext.addClass(this.className("jcarousel-next"));
        this.clip.addClass(this.className("jcarousel-clip")).css({
            position: "relative"
        });
        this.list.addClass(this.className("jcarousel-list")).css({
            overflow: "hidden",
            position: "relative",
            top: 0,
            margin: 0,
            padding: 0
        }).css(this.options.rtl ? "right" : "left", 0);
        this.container.addClass(this.className("jcarousel-container")).css({
            position: "relative"
        });
        !this.options.vertical && this.options.rtl && this.container.addClass("jcarousel-direction-rtl").attr("dir", "rtl");
        var j = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null
            , b = this.list.children("li")
            , e = this;
        if (b.size() > 0) {
            var h = 0
                , i = this.options.offset;
            b.each(function () {
                e.format(this, i++);
                h += e.dimension(this, j)
            });
            this.list.css(this.wh, h + 100 + "px");
            if (!c || c.size === void 0)
                this.options.size = b.size()
        }
        this.container.css("display", "block");
        this.buttonNext.css("display", "block");
        this.buttonPrev.css("display", "block");
        this.funcNext = function () {
            e.next()
        }
            ;
        this.funcPrev = function () {
            e.prev()
        }
            ;
        this.funcResize = function () {
            e.resizeTimer && clearTimeout(e.resizeTimer);
            e.resizeTimer = setTimeout(function () {
                e.reload()
            }, 100)
        }
            ;
        this.options.initCallback !== null && this.options.initCallback(this, "init");
        !m && g.browser.safari ? (this.buttons(!1, !1),
            g(window).bind("load.jcarousel", function () {
                e.setup()
            })) : this.setup()
    }
        ;
    var f = g.jcarousel;
    f.fn = f.prototype = {
        jcarousel: "0.2.8"
    };
    f.fn.extend = f.extend = g.extend;
    f.fn.extend({
        setup: function () {
            this.prevLast = this.prevFirst = this.last = this.first = null;
            this.animating = !1;
            this.tail = this.resizeTimer = this.timer = null;
            this.inTail = !1;
            if (!this.locked) {
                this.list.css(this.lt, this.pos(this.options.offset) + "px");
                var a = this.pos(this.options.start, !0);
                this.prevFirst = this.prevLast = null;
                this.animate(a, !1);
                g(window).unbind("resize.jcarousel", this.funcResize).bind("resize.jcarousel", this.funcResize);
                this.options.setupCallback !== null && this.options.setupCallback(this)
            }
        },
        reset: function () {
            this.list.empty();
            this.list.css(this.lt, "0px");
            this.list.css(this.wh, "10px");
            this.options.initCallback !== null && this.options.initCallback(this, "reset");
            this.setup()
        },
        reload: function () {
            this.tail !== null && this.inTail && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + this.tail);
            this.tail = null;
            this.inTail = !1;
            this.options.reloadCallback !== null && this.options.reloadCallback(this);
            if (this.options.visible !== null) {
                var a = this
                    , c = Math.ceil(this.clipping() / this.options.visible)
                    , b = 0
                    , d = 0;
                this.list.children("li").each(function (f) {
                    b += a.dimension(this, c);
                    f + 1 < a.first && (d = b)
                });
                this.list.css(this.wh, b + "px");
                this.list.css(this.lt, -d + "px")
            }
            this.scroll(this.first, !1)
        },
        lock: function () {
            this.locked = !0;
            this.buttons()
        },
        unlock: function () {
            this.locked = !1;
            this.buttons()
        },
        size: function (a) {
            if (a !== void 0)
                this.options.size = a,
                    this.locked || this.buttons();
            return this.options.size
        },
        has: function (a, c) {
            if (c === void 0 || !c)
                c = a;
            if (this.options.size !== null && c > this.options.size)
                c = this.options.size;
            for (var b = a; b <= c; b++) {
                var d = this.get(b);
                if (!d.length || d.hasClass("jcarousel-item-placeholder"))
                    return !1
            }
            return !0
        },
        get: function (a) {
            return g(">.jcarousel-item-" + a, this.list)
        },
        add: function (a, c) {
            var b = this.get(a)
                , d = 0
                , p = g(c);
            if (b.length === 0)
                for (var j, e = f.intval(a), b = this.create(a); ;) {
                    if (j = this.get(--e),
                        e <= 0 || j.length) {
                        e <= 0 ? this.list.prepend(b) : j.after(b);
                        break
                    }
                }
            else
                d = this.dimension(b);
            p.get(0).nodeName.toUpperCase() == "LI" ? (b.replaceWith(p),
                b = p) : b.empty().append(c);
            this.format(b.removeClass(this.className("jcarousel-item-placeholder")), a);
            p = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            d = this.dimension(b, p) - d;
            a > 0 && a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) - d + "px");
            this.list.css(this.wh, f.intval(this.list.css(this.wh)) + d + "px");
            return b
        },
        remove: function (a) {
            var c = this.get(a);
            if (c.length && !(a >= this.first && a <= this.last)) {
                var b = this.dimension(c);
                a < this.first && this.list.css(this.lt, f.intval(this.list.css(this.lt)) + b + "px");
                c.remove();
                this.list.css(this.wh, f.intval(this.list.css(this.wh)) - b + "px")
            }
        },
        next: function () {
            this.tail !== null && !this.inTail ? this.scrollTail(!1) : this.scroll((this.options.wrap == "both" || this.options.wrap == "last") && this.options.size !== null && this.last == this.options.size ? 1 : this.first + this.options.scroll)
        },
        prev: function () {
            this.tail !== null && this.inTail ? this.scrollTail(!0) : this.scroll((this.options.wrap == "both" || this.options.wrap == "first") && this.options.size !== null && this.first == 1 ? this.options.size : this.first - this.options.scroll)
        },
        scrollTail: function (a) {
            if (!this.locked && !this.animating && this.tail) {
                this.pauseAuto();
                var c = f.intval(this.list.css(this.lt))
                    , c = !a ? c - this.tail : c + this.tail;
                this.inTail = !a;
                this.prevFirst = this.first;
                this.prevLast = this.last;
                this.animate(c)
            }
        },
        scroll: function (a, c) {
            !this.locked && !this.animating && (this.pauseAuto(),
                this.animate(this.pos(a), c))
        },
        pos: function (a, c) {
            var b = f.intval(this.list.css(this.lt));
            if (this.locked || this.animating)
                return b;
            this.options.wrap != "circular" && (a = a < 1 ? 1 : this.options.size && a > this.options.size ? this.options.size : a);
            for (var d = this.first > a, g = this.options.wrap != "circular" && this.first <= 1 ? 1 : this.first, j = d ? this.get(g) : this.get(this.last), e = d ? g : g - 1, h = null, i = 0, k = !1, l = 0; d ? --e >= a : ++e < a;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0 && (h = this.create(e).addClass(this.className("jcarousel-item-placeholder")),
                    j[d ? "before" : "after"](h),
                    this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size)))
                    j = this.get(this.index(e)),
                        j.length && (h = this.add(e, j.clone(!0)));
                j = h;
                l = this.dimension(h);
                k && (i += l);
                if (this.first !== null && (this.options.wrap == "circular" || e >= 1 && (this.options.size === null || e <= this.options.size)))
                    b = d ? b + l : b - l
            }
            for (var g = this.clipping(), m = [], o = 0, n = 0, j = this.get(a - 1), e = a; ++o;) {
                h = this.get(e);
                k = !h.length;
                if (h.length === 0) {
                    h = this.create(e).addClass(this.className("jcarousel-item-placeholder"));
                    if (j.length === 0)
                        this.list.prepend(h);
                    else
                        j[d ? "before" : "after"](h);
                    if (this.first !== null && this.options.wrap == "circular" && this.options.size !== null && (e <= 0 || e > this.options.size))
                        j = this.get(this.index(e)),
                            j.length && (h = this.add(e, j.clone(!0)))
                }
                j = h;
                l = this.dimension(h);
                if (l === 0)
                    throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...");
                this.options.wrap != "circular" && this.options.size !== null && e > this.options.size ? m.push(h) : k && (i += l);
                n += l;
                if (n >= g)
                    break;
                e++
            }
            for (h = 0; h < m.length; h++)
                m[h].remove();
            i > 0 && (this.list.css(this.wh, this.dimension(this.list) + i + "px"),
                d && (b -= i,
                    this.list.css(this.lt, f.intval(this.list.css(this.lt)) - i + "px")));
            i = a + o - 1;
            if (this.options.wrap != "circular" && this.options.size && i > this.options.size)
                i = this.options.size;
            if (e > i) {
                o = 0;
                e = i;
                for (n = 0; ++o;) {
                    h = this.get(e--);
                    if (!h.length)
                        break;
                    n += this.dimension(h);
                    if (n >= g)
                        break
                }
            }
            e = i - o + 1;
            this.options.wrap != "circular" && e < 1 && (e = 1);
            if (this.inTail && d)
                b += this.tail,
                    this.inTail = !1;
            this.tail = null;
            if (this.options.wrap != "circular" && i == this.options.size && i - o + 1 >= 1 && (d = f.intval(this.get(i).css(!this.options.vertical ? "marginRight" : "marginBottom")),
                n - d > g))
                this.tail = n - g - d;
            if (c && a === this.options.size && this.tail)
                b -= this.tail,
                    this.inTail = !0;
            for (; a-- > e;)
                b += this.dimension(this.get(a));
            this.prevFirst = this.first;
            this.prevLast = this.last;
            this.first = e;
            this.last = i;
            return b
        },
        animate: function (a, c) {
            if (!this.locked && !this.animating) {
                this.animating = !0;
                var b = this
                    , d = function () {
                        b.animating = !1;
                        a === 0 && b.list.css(b.lt, 0);
                        !b.autoStopped && (b.options.wrap == "circular" || b.options.wrap == "both" || b.options.wrap == "last" || b.options.size === null || b.last < b.options.size || b.last == b.options.size && b.tail !== null && !b.inTail) && b.startAuto();
                        b.buttons();
                        b.notify("onAfterAnimation");
                        if (b.options.wrap == "circular" && b.options.size !== null)
                            for (var c = b.prevFirst; c <= b.prevLast; c++)
                                c !== null && !(c >= b.first && c <= b.last) && (c < 1 || c > b.options.size) && b.remove(c)
                    };
                this.notify("onBeforeAnimation");
                if (!this.options.animation || c === !1)
                    this.list.css(this.lt, a + "px"),
                        d();
                else {
                    var f = !this.options.vertical ? this.options.rtl ? {
                        right: a
                    } : {
                        left: a
                    } : {
                        top: a
                    }
                        , d = {
                            duration: this.options.animation,
                            easing: this.options.easing,
                            complete: d
                        };
                    if (g.isFunction(this.options.animationStepCallback))
                        d.step = this.options.animationStepCallback;
                    this.list.animate(f, d)
                }
            }
        },
        startAuto: function (a) {
            if (a !== void 0)
                this.options.auto = a;
            if (this.options.auto === 0)
                return this.stopAuto();
            if (this.timer === null) {
                this.autoStopped = !1;
                var c = this;
                this.timer = window.setTimeout(function () {
                    c.next()
                }, this.options.auto * 1E3)
            }
        },
        stopAuto: function () {
            this.pauseAuto();
            this.autoStopped = !0
        },
        pauseAuto: function () {
            if (this.timer !== null)
                window.clearTimeout(this.timer),
                    this.timer = null
        },
        buttons: function (a, c) {
            if (a == null && (a = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "first" || this.options.size === null || this.last < this.options.size),
                !this.locked && (!this.options.wrap || this.options.wrap == "first") && this.options.size !== null && this.last >= this.options.size))
                a = this.tail !== null && !this.inTail;
            if (c == null && (c = !this.locked && this.options.size !== 0 && (this.options.wrap && this.options.wrap != "last" || this.first > 1),
                !this.locked && (!this.options.wrap || this.options.wrap == "last") && this.options.size !== null && this.first == 1))
                c = this.tail !== null && this.inTail;
            var b = this;
            this.buttonNext.size() > 0 ? (this.buttonNext.unbind(this.options.buttonNextEvent + ".jcarousel", this.funcNext),
                a && this.buttonNext.bind(this.options.buttonNextEvent + ".jcarousel", this.funcNext),
                this.buttonNext[a ? "removeClass" : "addClass"](this.className("jcarousel-next-disabled")).attr("disabled", a ? !1 : !0),
                this.options.buttonNextCallback !== null && this.buttonNext.data("jcarouselstate") != a && this.buttonNext.each(function () {
                    b.options.buttonNextCallback(b, this, a)
                }).data("jcarouselstate", a)) : this.options.buttonNextCallback !== null && this.buttonNextState != a && this.options.buttonNextCallback(b, null, a);
            this.buttonPrev.size() > 0 ? (this.buttonPrev.unbind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev),
                c && this.buttonPrev.bind(this.options.buttonPrevEvent + ".jcarousel", this.funcPrev),
                this.buttonPrev[c ? "removeClass" : "addClass"](this.className("jcarousel-prev-disabled")).attr("disabled", c ? !1 : !0),
                this.options.buttonPrevCallback !== null && this.buttonPrev.data("jcarouselstate") != c && this.buttonPrev.each(function () {
                    b.options.buttonPrevCallback(b, this, c)
                }).data("jcarouselstate", c)) : this.options.buttonPrevCallback !== null && this.buttonPrevState != c && this.options.buttonPrevCallback(b, null, c);
            this.buttonNextState = a;
            this.buttonPrevState = c
        },
        notify: function (a) {
            var c = this.prevFirst === null ? "init" : this.prevFirst < this.first ? "next" : "prev";
            this.callback("itemLoadCallback", a, c);
            this.prevFirst !== this.first && (this.callback("itemFirstInCallback", a, c, this.first),
                this.callback("itemFirstOutCallback", a, c, this.prevFirst));
            this.prevLast !== this.last && (this.callback("itemLastInCallback", a, c, this.last),
                this.callback("itemLastOutCallback", a, c, this.prevLast));
            this.callback("itemVisibleInCallback", a, c, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback("itemVisibleOutCallback", a, c, this.prevFirst, this.prevLast, this.first, this.last)
        },
        callback: function (a, c, b, d, f, j, e) {
            if (!(this.options[a] == null || typeof this.options[a] != "object" && c != "onAfterAnimation")) {
                var h = typeof this.options[a] == "object" ? this.options[a][c] : this.options[a];
                if (g.isFunction(h)) {
                    var i = this;
                    if (d === void 0)
                        h(i, b, c);
                    else if (f === void 0)
                        this.get(d).each(function () {
                            h(i, this, d, b, c)
                        });
                    else
                        for (var a = function (a) {
                            i.get(a).each(function () {
                                h(i, this, a, b, c)
                            })
                        }, k = d; k <= f; k++)
                            k !== null && !(k >= j && k <= e) && a(k)
                }
            }
        },
        create: function (a) {
            return this.format("<li></li>", a)
        },
        format: function (a, c) {
            for (var a = g(a), b = a.get(0).className.split(" "), d = 0; d < b.length; d++)
                b[d].indexOf("jcarousel-") != -1 && a.removeClass(b[d]);
            a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-" + c)).css({
                "float": this.options.rtl ? "right" : "left",
                "list-style": "none"
            }).attr("jcarouselindex", c);
            return a
        },
        className: function (a) {
            return a + " " + a + (!this.options.vertical ? "-horizontal" : "-vertical")
        },
        dimension: function (a, c) {
            var b = g(a);
            if (c == null)
                return !this.options.vertical ? b.outerWidth(!0) || f.intval(this.options.itemFallbackDimension) : b.outerHeight(!0) || f.intval(this.options.itemFallbackDimension);
            else {
                var d = !this.options.vertical ? c - f.intval(b.css("marginLeft")) - f.intval(b.css("marginRight")) : c - f.intval(b.css("marginTop")) - f.intval(b.css("marginBottom"));
                g(b).css(this.wh, d + "px");
                return this.dimension(b)
            }
        },
        clipping: function () {
            return !this.options.vertical ? this.clip[0].offsetWidth - f.intval(this.clip.css("borderLeftWidth")) - f.intval(this.clip.css("borderRightWidth")) : this.clip[0].offsetHeight - f.intval(this.clip.css("borderTopWidth")) - f.intval(this.clip.css("borderBottomWidth"))
        },
        index: function (a, c) {
            if (c == null)
                c = this.options.size;
            return Math.round(((a - 1) / c - Math.floor((a - 1) / c)) * c) + 1
        }
    });
    f.extend({
        defaults: function (a) {
            return g.extend(q, a || {})
        },
        intval: function (a) {
            a = parseInt(a, 10);
            return isNaN(a) ? 0 : a
        },
        windowLoaded: function () {
            m = !0
        }
    });
    g.fn.jcarousel = function (a) {
        if (typeof a == "string") {
            var c = g(this).data("jcarousel")
                , b = Array.prototype.slice.call(arguments, 1);
            return c[a].apply(c, b)
        } else
            return this.each(function () {
                var b = g(this).data("jcarousel");
                b ? (a && g.extend(b.options, a),
                    b.reload()) : g(this).data("jcarousel", new f(this, a))
            })
    }
}
)(jQuery);
/*
* jQuery UI selectmenu dev version
*
* Copyright (c) 2009 AUTHORS.txt (http://jqueryui.com/about)
* Dual licensed under the MIT (MIT-LICENSE.txt)
* and GPL (GPL-LICENSE.txt) licenses.
*
* http://docs.jquery.com/UI
* https://github.com/fnagel/jquery-ui/wiki/Selectmenu
*/

(function ($) {

    $.widget("ui.selectmenu", {
        getter: "value",
        version: "1.8",
        eventPrefix: "selectmenu",
        options: {
            transferClasses: true,
            typeAhead: "sequential",
            style: 'dropdown',
            positionOptions: {
                my: "left top",
                at: "left bottom",
                offset: null
            },
            width: null,
            menuWidth: null,
            handleWidth: 26,
            maxHeight: null,
            icons: null,
            format: null,
            bgImage: function () { },
            wrapperElement: "<div />"
        },

        _create: function () {
            var self = this
                , o = this.options;

            // set a default id value, generate a new random one if not set by developer
            var selectmenuId = this.element.attr('id') || 'ui-selectmenu-' + Math.random().toString(16).slice(2, 10);

            // quick array of button and menu id's
            this.ids = [selectmenuId + '-button', selectmenuId + '-menu'];

            // define safe mouseup for future toggling
            this._safemouseup = true;

            // create menu button wrapper
            this.newelement = $('<a />', {
                'class': this.widgetBaseClass + ' ui-widget ui-state-default ui-corner-all',
                'id': this.ids[0],
                'role': 'button',
                'href': '#',
                'tabindex': this.element.attr('disabled') ? 1 : 0,
                'aria-haspopup': true,
                'aria-owns': this.ids[1]
            });
            this.newelementWrap = $(o.wrapperElement).append(this.newelement).insertAfter(this.element);

            // transfer tabindex
            var tabindex = this.element.attr('tabindex');
            if (tabindex) {
                this.newelement.attr('tabindex', tabindex);
            }

            // save reference to select in data for ease in calling methods
            this.newelement.data('selectelement', this.element);

            // menu icon
            this.selectmenuIcon = $('<span class="' + this.widgetBaseClass + '-icon ui-icon"></span>').prependTo(this.newelement);

            // append status span to button
            this.newelement.prepend('<span class="' + self.widgetBaseClass + '-status" />');

            // make associated form label trigger focus
            $('label[for="' + selectmenuId + '"]').attr('for', this.ids[0]).bind('click.selectmenu', function () {
                self.newelement[0].focus();
                return false;
            });

            // click toggle for menu visibility
            this.newelement.bind('mousedown.selectmenu', function (event) {
                self._toggle(event, true);
                // make sure a click won't open/close instantly
                if (o.style == "popup") {
                    self._safemouseup = false;
                    setTimeout(function () {
                        self._safemouseup = true;
                    }, 300);
                }
                return false;
            }).bind('click.selectmenu', function () {
                return false;
            }).bind("keydown.selectmenu", function (event) {
                var ret = false;
                switch (event.keyCode) {
                    case $.ui.keyCode.ENTER:
                        ret = true;
                        break;
                    case $.ui.keyCode.SPACE:
                        self._toggle(event);
                        break;
                    case $.ui.keyCode.UP:
                        if (event.altKey) {
                            self.open(event);
                        } else {
                            self._moveSelection(-1);
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if (event.altKey) {
                            self.open(event);
                        } else {
                            self._moveSelection(1);
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        self._moveSelection(-1);
                        break;
                    case $.ui.keyCode.RIGHT:
                        self._moveSelection(1);
                        break;
                    case $.ui.keyCode.TAB:
                        ret = true;
                        break;
                    default:
                        ret = true;
                }
                return ret;
            }).bind('keypress.selectmenu', function (event) {
                self._typeAhead(event.which, 'mouseup');
                return true;
            }).bind('mouseover.selectmenu focus.selectmenu', function () {
                if (!o.disabled) {
                    $(this).addClass(self.widgetBaseClass + '-focus ui-state-hover');
                }
            }).bind('mouseout.selectmenu blur.selectmenu', function () {
                if (!o.disabled) {
                    $(this).removeClass(self.widgetBaseClass + '-focus ui-state-hover');
                }
            });

            // document click closes menu
            $(document).bind("mousedown.selectmenu", function (event) {
                self.close(event);
            });

            // change event on original selectmenu
            this.element.bind("click.selectmenu", function () {
                self._refreshValue();
            })// FIXME: newelement can be null under unclear circumstances in IE8
                // TODO not sure if this is still a problem (fnagel 20.03.11)
                .bind("focus.selectmenu", function () {
                    if (self.newelement) {
                        self.newelement[0].focus();
                    }
                });

            // set width when not set via options
            if (!o.width) {
                o.width = this.element.outerWidth();
            }
            // set menu button width
            this.newelement.width(o.width);

            // hide original selectmenu element
            this.element.hide();

            // create menu portion, append to body		
            this.list = $('<ul />', {
                'class': 'ui-widget ui-widget-content',
                'aria-hidden': true,
                'role': 'listbox',
                'aria-labelledby': this.ids[0],
                'id': this.ids[1]
            });
            this.listWrap = $(o.wrapperElement).addClass(self.widgetBaseClass + '-menu').append(this.list).appendTo('body');

            // transfer menu click to menu button
            this.list.bind("keydown.selectmenu", function (event) {
                var ret = false;
                switch (event.keyCode) {
                    case $.ui.keyCode.UP:
                        if (event.altKey) {
                            self.close(event, true);
                        } else {
                            self._moveFocus(-1);
                        }
                        break;
                    case $.ui.keyCode.DOWN:
                        if (event.altKey) {
                            self.close(event, true);
                        } else {
                            self._moveFocus(1);
                        }
                        break;
                    case $.ui.keyCode.LEFT:
                        self._moveFocus(-1);
                        break;
                    case $.ui.keyCode.RIGHT:
                        self._moveFocus(1);
                        break;
                    case $.ui.keyCode.HOME:
                        self._moveFocus(':first');
                        break;
                    case $.ui.keyCode.PAGE_UP:
                        self._scrollPage('up');
                        break;
                    case $.ui.keyCode.PAGE_DOWN:
                        self._scrollPage('down');
                        break;
                    case $.ui.keyCode.END:
                        self._moveFocus(':last');
                        break;
                    case $.ui.keyCode.ENTER:
                    case $.ui.keyCode.SPACE:
                        self.close(event, true);
                        $(event.target).parents('li:eq(0)').trigger('mouseup');
                        break;
                    case $.ui.keyCode.TAB:
                        ret = true;
                        self.close(event, true);
                        $(event.target).parents('li:eq(0)').trigger('mouseup');
                        break;
                    case $.ui.keyCode.ESCAPE:
                        self.close(event, true);
                        break;
                    default:
                        ret = true;
                }
                return ret;
            }).bind('keypress.selectmenu', function (event) {
                self._typeAhead(event.which, 'focus');
                return true;
            })// this allows for using the scrollbar in an overflowed list
                .bind('mousedown.selectmenu mouseup.selectmenu', function () {
                    return false;
                });

            // needed when window is resized
            // TODO seems to be useless, but causes errors (fnagel 01.08.11)
            // see: https://github.com/fnagel/jquery-ui/issues/147
            // $(window).bind( "resize.selectmenu", $.proxy( self._refreshPosition, this ) );
        },

        _init: function () {
            var self = this
                , o = this.options;

            // serialize selectmenu element options
            var selectOptionData = [];
            this.element.find('option').each(function () {
                var opt = $(this);
                selectOptionData.push({
                    value: opt.attr('value'),
                    text: self._formatText(opt.text()),
                    selected: opt.attr('selected'),
                    disabled: opt.attr('disabled'),
                    classes: opt.attr('class'),
                    typeahead: opt.attr('typeahead'),
                    parentOptGroup: opt.parent('optgroup'),
                    bgImage: o.bgImage.call(opt)
                });
            });

            // active state class is only used in popup style
            var activeClass = (self.options.style == "popup") ? " ui-state-active" : "";

            // empty list so we can refresh the selectmenu via selectmenu()
            this.list.html("");

            // write li's
            if (selectOptionData.length) {
                for (var i = 0; i < selectOptionData.length; i++) {
                    var thisLiAttr = {
                        role: 'presentation'
                    };
                    if (selectOptionData[i].disabled) {
                        thisLiAttr['class'] = this.namespace + '-state-disabled';
                    }
                    var thisAAttr = {
                        html: selectOptionData[i].text,
                        href: '#',
                        tabindex: -1,
                        role: 'option',
                        'aria-selected': false
                    };
                    if (selectOptionData[i].disabled) {
                        thisAAttr['aria-disabled'] = selectOptionData[i].disabled;
                    }
                    if (selectOptionData[i].typeahead) {
                        thisAAttr['typeahead'] = selectOptionData[i].typeahead;
                    }
                    var thisA = $('<a/>', thisAAttr);
                    var thisLi = $('<li/>', thisLiAttr).append(thisA).data('index', i).addClass(selectOptionData[i].classes).data('optionClasses', selectOptionData[i].classes || '').bind("mouseup.selectmenu", function (event) {
                        if (self._safemouseup && !self._disabled(event.currentTarget) && !self._disabled($(event.currentTarget).parents("ul>li." + self.widgetBaseClass + "-group "))) {
                            var changed = $(this).data('index') != self._selectedIndex();
                            self.index($(this).data('index'));
                            self.select(event);
                            if (changed) {
                                self.change(event);
                            }
                            self.close(event, true);
                        }
                        return false;
                    }).bind("click.selectmenu", function () {
                        return false;
                    }).bind('mouseover.selectmenu focus.selectmenu', function (e) {
                        // no hover if diabled
                        if (!$(e.currentTarget).hasClass(self.namespace + '-state-disabled') && !$(e.currentTarget).parent("ul").parent("li").hasClass(self.namespace + '-state-disabled')) {
                            self._selectedOptionLi().addClass(activeClass);
                            self._focusedOptionLi().removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                            $(this).removeClass('ui-state-active').addClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                        }
                    }).bind('mouseout.selectmenu blur.selectmenu', function () {
                        if ($(this).is(self._selectedOptionLi().selector)) {
                            $(this).addClass(activeClass);
                        }
                        $(this).removeClass(self.widgetBaseClass + '-item-focus ui-state-hover');
                    });

                    // optgroup or not...
                    if (selectOptionData[i].parentOptGroup.length) {
                        var optGroupName = self.widgetBaseClass + '-group-' + this.element.find('optgroup').index(selectOptionData[i].parentOptGroup);
                        if (this.list.find('li.' + optGroupName).length) {
                            this.list.find('li.' + optGroupName + ':last ul').append(thisLi);
                        } else {
                            $(' <li role="presentation" class="' + self.widgetBaseClass + '-group ' + optGroupName + (selectOptionData[i].parentOptGroup.attr("disabled") ? ' ' + this.namespace + '-state-disabled" aria-disabled="true"' : '"') + '><span class="' + self.widgetBaseClass + '-group-label">' + selectOptionData[i].parentOptGroup.attr('label') + '</span><ul></ul></li> ').appendTo(this.list).find('ul').append(thisLi);
                        }
                    } else {
                        thisLi.appendTo(this.list);
                    }

                    // append icon if option is specified
                    if (o.icons) {
                        for (var j in o.icons) {
                            if (thisLi.is(o.icons[j].find)) {
                                thisLi.data('optionClasses', selectOptionData[i].classes + ' ' + self.widgetBaseClass + '-hasIcon').addClass(self.widgetBaseClass + '-hasIcon');
                                var iconClass = o.icons[j].icon || "";
                                thisLi.find('a:eq(0)').prepend('<span class="' + self.widgetBaseClass + '-item-icon ui-icon ' + iconClass + '"></span>');
                                if (selectOptionData[i].bgImage) {
                                    thisLi.find('span').css('background-image', selectOptionData[i].bgImage);
                                }
                            }
                        }
                    }
                }
            } else {
                $('<li role="presentation"><a href="#" tabindex="-1" role="option"></a></li>').appendTo(this.list);
            }
            // we need to set and unset the CSS classes for dropdown and popup style
            var isDropDown = (o.style == 'dropdown');
            this.newelement.toggleClass(self.widgetBaseClass + '-dropdown', isDropDown).toggleClass(self.widgetBaseClass + '-popup', !isDropDown);
            this.list.toggleClass(self.widgetBaseClass + '-menu-dropdown ui-corner-bottom', isDropDown).toggleClass(self.widgetBaseClass + '-menu-popup ui-corner-all', !isDropDown)// add corners to top and bottom menu items
                .find('li:first').toggleClass('ui-corner-top', !isDropDown).end().find('li:last').addClass('ui-corner-bottom');
            this.selectmenuIcon.toggleClass('ui-icon-triangle-1-s', isDropDown).toggleClass('ui-icon-triangle-2-n-s', !isDropDown);

            // transfer classes to selectmenu and list
            if (o.transferClasses) {
                var transferClasses = this.element.attr('class') || '';
                this.newelement.add(this.list).addClass(transferClasses);
            }

            // set menu width to either menuWidth option value, width option value, or select width
            if (o.style == 'dropdown') {
                this.list.width(o.menuWidth ? o.menuWidth : o.width);
            } else {
                this.list.width(o.menuWidth ? o.menuWidth : o.width - o.handleWidth);
            }

            // reset height to auto
            this.list.css('height', 'auto');
            var listH = this.listWrap.height();
            // calculate default max height
            if (o.maxHeight && o.maxHeight < listH) {
                this.list.height(o.maxHeight);
            } else {
                var winH = $(window).height() / 3;
                if (winH < listH)
                    this.list.height(winH);
            }

            // save reference to actionable li's (not group label li's)
            this._optionLis = this.list.find('li:not(.' + self.widgetBaseClass + '-group)');

            // transfer disabled state
            if (this.element.attr('disabled')) {
                this.disable();
            } else {
                this.enable()
            }

            // update value
            this.index(this._selectedIndex());

            // needed when selectmenu is placed at the very bottom / top of the page
            window.setTimeout(function () {
                self._refreshPosition();
            }, 200);
        },

        destroy: function () {
            this.element.removeData(this.widgetName).removeClass(this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled').removeAttr('aria-disabled').unbind(".selectmenu");

            // TODO unneded as event binding has been disabled
            // $( window ).unbind( ".selectmenu" );
            $(document).unbind(".selectmenu");

            // unbind click on label, reset its for attr
            $('label[for=' + this.newelement.attr('id') + ']').attr('for', this.element.attr('id')).unbind('.selectmenu');

            this.newelementWrap.remove();
            this.listWrap.remove();

            this.element.show();

            // call widget destroy function
            $.Widget.prototype.destroy.apply(this, arguments);
        },

        _typeAhead: function (code, eventType) {
            var self = this
                , focusFound = false
                , C = String.fromCharCode(code).toUpperCase();
            c = C.toLowerCase();

            if (self.options.typeAhead == 'sequential') {
                // clear the timeout so we can use _prevChar
                window.clearTimeout('ui.selectmenu-' + self.selectmenuId);

                // define our find var
                var find = typeof (self._prevChar) == 'undefined' ? '' : self._prevChar.join('');

                function focusOptSeq(elem, ind, c) {
                    focusFound = true;
                    $(elem).trigger(eventType);
                    typeof (self._prevChar) == 'undefined' ? self._prevChar = [c] : self._prevChar[self._prevChar.length] = c;
                }
                this.list.find('li a').each(function (i) {
                    if (!focusFound) {
                        // allow the typeahead attribute on the option tag for a more specific lookup
                        var thisText = $(this).attr('typeahead') || $(this).text();
                        if (thisText.indexOf(find + C) === 0) {
                            focusOptSeq(this, i, C);
                        } else if (thisText.indexOf(find + c) === 0) {
                            focusOptSeq(this, i, c);
                        }
                    }
                });
                // set a 1 second timeout for sequenctial typeahead
                // keep this set even if we have no matches so it doesnt typeahead somewhere else
                window.setTimeout(function (el) {
                    self._prevChar = undefined;
                }, 1000, self);

            } else {
                // define self._prevChar if needed
                if (!self._prevChar) {
                    self._prevChar = ['', 0];
                }

                focusFound = false;
                function focusOpt(elem, ind) {
                    focusFound = true;
                    $(elem).trigger(eventType);
                    self._prevChar[1] = ind;
                }
                this.list.find('li a').each(function (i) {
                    if (!focusFound) {
                        var thisText = $(this).text();
                        if (thisText.indexOf(C) === 0 || thisText.indexOf(c) === 0) {
                            if (self._prevChar[0] == C) {
                                if (self._prevChar[1] < i) {
                                    focusOpt(this, i);
                                }
                            } else {
                                focusOpt(this, i);
                            }
                        }
                    }
                });
                this._prevChar[0] = C;
            }
        },

        // returns some usefull information, called by callbacks only
        _uiHash: function () {
            var index = this.index();
            return {
                index: index,
                option: $("option", this.element).get(index),
                value: this.element[0].value
            };
        },

        open: function (event) {
            var self = this
                , o = this.options;
            if (self.newelement.attr("aria-disabled") != 'true') {
                self._closeOthers(event);
                self.newelement.addClass('ui-state-active');

                self.listWrap.appendTo(o.appendTo);
                self.list.attr('aria-hidden', false);

                if (o.style == "dropdown") {
                    self.newelement.removeClass('ui-corner-all').addClass('ui-corner-top');
                }

                self.listWrap.addClass(self.widgetBaseClass + '-open');
                // positioning needed for IE7 (tested 01.08.11 on MS VPC Image)
                // see https://github.com/fnagel/jquery-ui/issues/147
                if ($.browser.msie && $.browser.version.substr(0, 1) == 7) {
                    self._refreshPosition();
                }
                var selected = self.list.attr('aria-hidden', false).find('li:not(.' + self.widgetBaseClass + '-group):eq(' + self._selectedIndex() + '):visible a');
                if (selected.length)
                    selected[0].focus();
                // positioning needed for FF, Chrome, IE8, IE7, IE6 (tested 01.08.11 on MS VPC Image)
                self._refreshPosition();

                self._trigger("open", event, self._uiHash());
            }
        },

        close: function (event, retainFocus) {
            if (this.newelement.is('.ui-state-active')) {
                this.newelement.removeClass('ui-state-active');
                this.listWrap.removeClass(this.widgetBaseClass + '-open');
                this.list.attr('aria-hidden', true);
                if (this.options.style == "dropdown") {
                    this.newelement.removeClass('ui-corner-top').addClass('ui-corner-all');
                }
                if (retainFocus) {
                    this.newelement.focus();
                }
                this._trigger("close", event, this._uiHash());
            }
        },

        change: function (event) {
            this.element.trigger("change");
            this._trigger("change", event, this._uiHash());
        },

        select: function (event) {
            if (this._disabled(event.currentTarget)) {
                return false;
            }
            this._trigger("select", event, this._uiHash());
        },

        _closeOthers: function (event) {
            $('.' + this.widgetBaseClass + '.ui-state-active').not(this.newelement).each(function () {
                $(this).data('selectelement').selectmenu('close', event);
            });
            $('.' + this.widgetBaseClass + '.ui-state-hover').trigger('mouseout');
        },

        _toggle: function (event, retainFocus) {
            if (this.list.is('.' + this.widgetBaseClass + '-open')) {
                this.close(event, retainFocus);
            } else {
                this.open(event);
            }
        },

        _formatText: function (text) {
            return (this.options.format ? this.options.format(text) : text);
        },

        _selectedIndex: function () {
            return this.element[0].selectedIndex;
        },

        _selectedOptionLi: function () {
            return this._optionLis.eq(this._selectedIndex());
        },

        _focusedOptionLi: function () {
            return this.list.find('.' + this.widgetBaseClass + '-item-focus');
        },

        _moveSelection: function (amt, recIndex) {
            // do nothing if disabled
            if (!this.options.disabled) {
                var currIndex = parseInt(this._selectedOptionLi().data('index') || 0, 10);
                var newIndex = currIndex + amt;
                // do not loop when using up key

                if (newIndex < 0) {
                    newIndex = 0;
                }
                if (newIndex > this._optionLis.size() - 1) {
                    newIndex = this._optionLis.size() - 1;
                }
                // Occurs when a full loop has been made
                if (newIndex === recIndex) {
                    return false;
                }

                if (this._optionLis.eq(newIndex).hasClass(this.namespace + '-state-disabled')) {
                    // if option at newIndex is disabled, call _moveFocus, incrementing amt by one
                    (amt > 0) ? ++amt : --amt;
                    this._moveSelection(amt, newIndex);
                } else {
                    return this._optionLis.eq(newIndex).trigger('mouseup');
                }
            }
        },

        _moveFocus: function (amt, recIndex) {
            if (!isNaN(amt)) {
                var currIndex = parseInt(this._focusedOptionLi().data('index') || 0, 10);
                var newIndex = currIndex + amt;
            } else {
                var newIndex = parseInt(this._optionLis.filter(amt).data('index'), 10);
            }

            if (newIndex < 0) {
                newIndex = 0;
            }
            if (newIndex > this._optionLis.size() - 1) {
                newIndex = this._optionLis.size() - 1;
            }

            //Occurs when a full loop has been made
            if (newIndex === recIndex) {
                return false;
            }

            var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);

            this._focusedOptionLi().find('a:eq(0)').attr('id', '');

            if (this._optionLis.eq(newIndex).hasClass(this.namespace + '-state-disabled')) {
                // if option at newIndex is disabled, call _moveFocus, incrementing amt by one
                (amt > 0) ? ++amt : --amt;
                this._moveFocus(amt, newIndex);
            } else {
                this._optionLis.eq(newIndex).find('a:eq(0)').attr('id', activeID).focus();
            }

            this.list.attr('aria-activedescendant', activeID);
        },

        _scrollPage: function (direction) {
            var numPerPage = Math.floor(this.list.outerHeight() / this.list.find('li:first').outerHeight());
            numPerPage = (direction == 'up' ? -numPerPage : numPerPage);
            this._moveFocus(numPerPage);
        },

        _setOption: function (key, value) {
            this.options[key] = value;
            // set
            if (key == 'disabled') {
                this.close();
                this.element.add(this.newelement).add(this.list)[value ? 'addClass' : 'removeClass'](this.widgetBaseClass + '-disabled' + ' ' + this.namespace + '-state-disabled').attr("aria-disabled", value);
            }
        },

        disable: function (index, type) {
            // if options is not provided, call the parents disable function
            if (typeof (index) == 'undefined') {
                this._setOption('disabled', true);
            } else {
                if (type == "optgroup") {
                    this._disableOptgroup(index);
                } else {
                    this._disableOption(index);
                }
            }
        },

        enable: function (index, type) {
            // if options is not provided, call the parents enable function
            if (typeof (index) == 'undefined') {
                this._setOption('disabled', false);
            } else {
                if (type == "optgroup") {
                    this._enableOptgroup(index);
                } else {
                    this._enableOption(index);
                }
            }
        },

        _disabled: function (elem) {
            return $(elem).hasClass(this.namespace + '-state-disabled');
        },

        _disableOption: function (index) {
            var optionElem = this._optionLis.eq(index);
            if (optionElem) {
                optionElem.addClass(this.namespace + '-state-disabled').find("a").attr("aria-disabled", true);
                this.element.find("option").eq(index).attr("disabled", "disabled");
            }
        },

        _enableOption: function (index) {
            var optionElem = this._optionLis.eq(index);
            if (optionElem) {
                optionElem.removeClass(this.namespace + '-state-disabled').find("a").attr("aria-disabled", false);
                this.element.find("option").eq(index).removeAttr("disabled");
            }
        },

        _disableOptgroup: function (index) {
            var optGroupElem = this.list.find('li.' + this.widgetBaseClass + '-group-' + index);
            if (optGroupElem) {
                optGroupElem.addClass(this.namespace + '-state-disabled').attr("aria-disabled", true);
                this.element.find("optgroup").eq(index).attr("disabled", "disabled");
            }
        },

        _enableOptgroup: function (index) {
            var optGroupElem = this.list.find('li.' + this.widgetBaseClass + '-group-' + index);
            if (optGroupElem) {
                optGroupElem.removeClass(this.namespace + '-state-disabled').attr("aria-disabled", false);
                this.element.find("optgroup").eq(index).removeAttr("disabled");
            }
        },

        index: function (newValue) {
            if (arguments.length) {
                if (!this._disabled($(this._optionLis[newValue]))) {
                    this.element[0].selectedIndex = newValue;
                    this._refreshValue();
                } else {
                    return false;
                }
            } else {
                return this._selectedIndex();
            }
        },

        value: function (newValue) {
            if (arguments.length) {
                this.element[0].value = newValue;
                this._refreshValue();
            } else {
                return this.element[0].value;
            }
        },

        _refreshValue: function () {
            var activeClass = (this.options.style == "popup") ? " ui-state-active" : "";
            var activeID = this.widgetBaseClass + '-item-' + Math.round(Math.random() * 1000);
            // deselect previous
            this.list.find('.' + this.widgetBaseClass + '-item-selected').removeClass(this.widgetBaseClass + "-item-selected" + activeClass).find('a').attr('aria-selected', 'false').attr('id', '');
            // select new
            this._selectedOptionLi().addClass(this.widgetBaseClass + "-item-selected" + activeClass).find('a').attr('aria-selected', 'true').attr('id', activeID);

            // toggle any class brought in from option
            var currentOptionClasses = (this.newelement.data('optionClasses') ? this.newelement.data('optionClasses') : "");
            var newOptionClasses = (this._selectedOptionLi().data('optionClasses') ? this._selectedOptionLi().data('optionClasses') : "");
            this.newelement.removeClass(currentOptionClasses).data('optionClasses', newOptionClasses).addClass(newOptionClasses).find('.' + this.widgetBaseClass + '-status').html(this._selectedOptionLi().find('a:eq(0)').html());

            this.list.attr('aria-activedescendant', activeID);
        },

        _refreshPosition: function () {
            var o = this.options;

            // if its a native pop-up we need to calculate the position of the selected li
            if (o.style == "popup" && !o.positionOptions.offset) {
                var selected = this._selectedOptionLi();
                var _offset = "0 -" + (selected.outerHeight() + selected.offset().top - this.list.offset().top);
            }
            // update zIndex if jQuery UI is able to process
            var zIndexElement = this.element.zIndex();
            if (zIndexElement) {
                this.listWrap.css('zIndex', zIndexElement);
            }
            this.listWrap.position({
                // set options for position plugin
                of: o.positionOptions.of || this.newelement,
                my: o.positionOptions.my,
                at: o.positionOptions.at,
                offset: o.positionOptions.offset || _offset,
                collision: o.positionOptions.collision || 'flip'
            });
        }
    });

}
)(jQuery);

/*
* jQuery Cycle Plugin (with Transition Definitions)
* Examples and documentation at: http://jquery.malsup.com/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version: 2.88 (08-JUN-2010)
* Dual licensed under the MIT and GPL licenses.
* http://jquery.malsup.com/license.html
* Requires: jQuery v1.2.6 or later
*/
(function ($) {
    var ver = "2.88";
    if ($.support == undefined) {
        $.support = {
            opacity: !($.browser.msie)
        };
    }
    function debug(s) {
        if ($.fn.cycle.debug) {
            log(s);
        }
    }
    function log() {
        if (window.console && window.console.log) {
            window.console.log("[cycle] " + Array.prototype.join.call(arguments, " "));
        }
    }
    $.fn.cycle = function (options, arg2) {
        var o = {
            s: this.selector,
            c: this.context
        };
        if (this.length === 0 && options != "stop") {
            if (!$.isReady && o.s) {
                log("DOM not ready, queuing slideshow");
                $(function () {
                    $(o.s, o.c).cycle(options, arg2);
                });
                return this;
            }
            log("terminating; zero elements found by selector" + ($.isReady ? "" : " (DOM not ready)"));
            return this;
        }
        return this.each(function () {
            var opts = handleArguments(this, options, arg2);
            if (opts === false) {
                return;
            }
            opts.updateActivePagerLink = opts.updateActivePagerLink || $.fn.cycle.updateActivePagerLink;
            if (this.cycleTimeout) {
                clearTimeout(this.cycleTimeout);
            }
            this.cycleTimeout = this.cyclePause = 0;
            var $cont = $(this);
            var $slides = opts.slideExpr ? $(opts.slideExpr, this) : $cont.children();
            var els = $slides.get();
            if (els.length < 2) {
                log("terminating; too few slides: " + els.length);
                return;
            }
            var opts2 = buildOptions($cont, $slides, els, opts, o);
            if (opts2 === false) {
                return;
            }
            var startTime = opts2.continuous ? 10 : getTimeout(els[opts2.currSlide], els[opts2.nextSlide], opts2, !opts2.rev);
            if (startTime) {
                startTime += (opts2.delay || 0);
                if (startTime < 10) {
                    startTime = 10;
                }
                debug("first timeout: " + startTime);
                this.cycleTimeout = setTimeout(function () {
                    go(els, opts2, 0, (!opts2.rev && !opts.backwards));
                }, startTime);
            }
        });
    }
        ;
    function handleArguments(cont, options, arg2) {
        if (cont.cycleStop == undefined) {
            cont.cycleStop = 0;
        }
        if (options === undefined || options === null) {
            options = {};
        }
        if (options.constructor == String) {
            switch (options) {
                case "destroy":
                case "stop":
                    var opts = $(cont).data("cycle.opts");
                    if (!opts) {
                        return false;
                    }
                    cont.cycleStop++;
                    if (cont.cycleTimeout) {
                        clearTimeout(cont.cycleTimeout);
                    }
                    cont.cycleTimeout = 0;
                    $(cont).removeData("cycle.opts");
                    if (options == "destroy") {
                        destroy(opts);
                    }
                    return false;
                case "toggle":
                    cont.cyclePause = (cont.cyclePause === 1) ? 0 : 1;
                    checkInstantResume(cont.cyclePause, arg2, cont);
                    return false;
                case "pause":
                    cont.cyclePause = 1;
                    return false;
                case "resume":
                    cont.cyclePause = 0;
                    checkInstantResume(false, arg2, cont);
                    return false;
                case "prev":
                case "next":
                    var opts = $(cont).data("cycle.opts");
                    if (!opts) {
                        log('options not found, "prev/next" ignored');
                        return false;
                    }
                    $.fn.cycle[options](opts);
                    return false;
                default:
                    options = {
                        fx: options
                    };
            }
            return options;
        } else {
            if (options.constructor == Number) {
                var num = options;
                options = $(cont).data("cycle.opts");
                if (!options) {
                    log("options not found, can not advance slide");
                    return false;
                }
                if (num < 0 || num >= options.elements.length) {
                    log("invalid slide index: " + num);
                    return false;
                }
                options.nextSlide = num;
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                if (typeof arg2 == "string") {
                    options.oneTimeFx = arg2;
                }
                go(options.elements, options, 1, num >= options.currSlide);
                return false;
            }
        }
        return options;
        function checkInstantResume(isPaused, arg2, cont) {
            if (!isPaused && arg2 === true) {
                var options = $(cont).data("cycle.opts");
                if (!options) {
                    log("options not found, can not resume");
                    return false;
                }
                if (cont.cycleTimeout) {
                    clearTimeout(cont.cycleTimeout);
                    cont.cycleTimeout = 0;
                }
                go(options.elements, options, 1, (!opts.rev && !opts.backwards));
            }
        }
    }
    function removeFilter(el, opts) {
        if (!$.support.opacity && opts.cleartype && el.style.filter) {
            try {
                el.style.removeAttribute("filter");
            } catch (smother) { }
        }
    }
    function destroy(opts) {
        if (opts.next) {
            $(opts.next).unbind(opts.prevNextEvent);
        }
        if (opts.prev) {
            $(opts.prev).unbind(opts.prevNextEvent);
        }
        if (opts.pager || opts.pagerAnchorBuilder) {
            $.each(opts.pagerAnchors || [], function () {
                this.unbind().remove();
            });
        }
        opts.pagerAnchors = null;
        if (opts.destroy) {
            opts.destroy(opts);
        }
    }
    function buildOptions($cont, $slides, els, options, o) {
        var opts = $.extend({}, $.fn.cycle.defaults, options || {}, $.metadata ? $cont.metadata() : $.meta ? $cont.data() : {});
        if (opts.autostop) {
            opts.countdown = opts.autostopCount || els.length;
        }
        var cont = $cont[0];
        $cont.data("cycle.opts", opts);
        opts.$cont = $cont;
        opts.stopCount = cont.cycleStop;
        opts.elements = els;
        opts.before = opts.before ? [opts.before] : [];
        opts.after = opts.after ? [opts.after] : [];
        opts.after.unshift(function () {
            opts.busy = 0;
        });
        if (!$.support.opacity && opts.cleartype) {
            opts.after.push(function () {
                removeFilter(this, opts);
            });
        }
        if (opts.continuous) {
            opts.after.push(function () {
                go(els, opts, 0, (!opts.rev && !opts.backwards));
            });
        }
        saveOriginalOpts(opts);
        if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
            clearTypeFix($slides);
        }
        if ($cont.css("position") == "static") {
            $cont.css("position", "relative");
        }
        if (opts.width) {
            $cont.width(opts.width);
        }
        if (opts.height && opts.height != "auto") {
            $cont.height(opts.height);
        }
        if (opts.startingSlide) {
            opts.startingSlide = parseInt(opts.startingSlide);
        } else {
            if (opts.backwards) {
                opts.startingSlide = els.length - 1;
            }
        }
        if (opts.random) {
            opts.randomMap = [];
            for (var i = 0; i < els.length; i++) {
                opts.randomMap.push(i);
            }
            opts.randomMap.sort(function (a, b) {
                return Math.random() - 0.5;
            });
            opts.randomIndex = 1;
            opts.startingSlide = opts.randomMap[1];
        } else {
            if (opts.startingSlide >= els.length) {
                opts.startingSlide = 0;
            }
        }
        opts.currSlide = opts.startingSlide || 0;
        var first = opts.startingSlide;
        $slides.css({
            position: "absolute",
            top: 0,
            left: 0
        }).hide().each(function (i) {
            var z;
            if (opts.backwards) {
                z = first ? i <= first ? els.length + (i - first) : first - i : els.length - i;
            } else {
                z = first ? i >= first ? els.length - (i - first) : first - i : els.length - i;
            }
            $(this).css("z-index", z);
        });
        $(els[first]).css("opacity", 1).show();
        removeFilter(els[first], opts);
        if (opts.fit && opts.width) {
            $slides.width(opts.width);
        }
        if (opts.fit && opts.height && opts.height != "auto") {
            $slides.height(opts.height);
        }
        var reshape = opts.containerResize && !$cont.innerHeight();
        if (reshape) {
            var maxw = 0
                , maxh = 0;
            for (var j = 0; j < els.length; j++) {
                var $e = $(els[j])
                    , e = $e[0]
                    , w = $e.outerWidth()
                    , h = $e.outerHeight();
                if (!w) {
                    w = e.offsetWidth || e.width || $e.attr("width");
                }
                if (!h) {
                    h = e.offsetHeight || e.height || $e.attr("height");
                }
                maxw = w > maxw ? w : maxw;
                maxh = h > maxh ? h : maxh;
            }
            if (maxw > 0 && maxh > 0) {
                $cont.css({
                    width: maxw + "px",
                    height: maxh + "px"
                });
            }
        }
        if (opts.pause) {
            $cont.hover(function () {
                this.cyclePause++;
            }, function () {
                this.cyclePause--;
            });
        }
        if (supportMultiTransitions(opts) === false) {
            return false;
        }
        var requeue = false;
        options.requeueAttempts = options.requeueAttempts || 0;
        $slides.each(function () {
            var $el = $(this);
            this.cycleH = (opts.fit && opts.height) ? opts.height : ($el.height() || this.offsetHeight || this.height || $el.attr("height") || 0);
            this.cycleW = (opts.fit && opts.width) ? opts.width : ($el.width() || this.offsetWidth || this.width || $el.attr("width") || 0);
            if ($el.is("img")) {
                var loadingIE = ($.browser.msie && this.cycleW == 28 && this.cycleH == 30 && !this.complete);
                var loadingFF = ($.browser.mozilla && this.cycleW == 34 && this.cycleH == 19 && !this.complete);
                var loadingOp = ($.browser.opera && ((this.cycleW == 42 && this.cycleH == 19) || (this.cycleW == 37 && this.cycleH == 17)) && !this.complete);
                var loadingOther = (this.cycleH == 0 && this.cycleW == 0 && !this.complete);
                if (loadingIE || loadingFF || loadingOp || loadingOther) {
                    if (o.s && opts.requeueOnImageNotLoaded && ++options.requeueAttempts < 100) {
                        log(options.requeueAttempts, " - img slide not loaded, requeuing slideshow: ", this.src, this.cycleW, this.cycleH);
                        setTimeout(function () {
                            $(o.s, o.c).cycle(options);
                        }, opts.requeueTimeout);
                        requeue = true;
                        return false;
                    } else {
                        log("could not determine size of image: " + this.src, this.cycleW, this.cycleH);
                    }
                }
            }
            return true;
        });
        if (requeue) {
            return false;
        }
        opts.cssBefore = opts.cssBefore || {};
        opts.animIn = opts.animIn || {};
        opts.animOut = opts.animOut || {};
        $slides.not(":eq(" + first + ")").css(opts.cssBefore);
        if (opts.cssFirst) {
            $($slides[first]).css(opts.cssFirst);
        }
        if (opts.timeout) {
            opts.timeout = parseInt(opts.timeout);
            if (opts.speed.constructor == String) {
                opts.speed = $.fx.speeds[opts.speed] || parseInt(opts.speed);
            }
            if (!opts.sync) {
                opts.speed = opts.speed / 2;
            }
            var buffer = opts.fx == "shuffle" ? 500 : 250;
            while ((opts.timeout - opts.speed) < buffer) {
                opts.timeout += opts.speed;
            }
        }
        if (opts.easing) {
            opts.easeIn = opts.easeOut = opts.easing;
        }
        if (!opts.speedIn) {
            opts.speedIn = opts.speed;
        }
        if (!opts.speedOut) {
            opts.speedOut = opts.speed;
        }
        opts.slideCount = els.length;
        opts.currSlide = opts.lastSlide = first;
        if (opts.random) {
            if (++opts.randomIndex == els.length) {
                opts.randomIndex = 0;
            }
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            if (opts.backwards) {
                opts.nextSlide = opts.startingSlide == 0 ? (els.length - 1) : opts.startingSlide - 1;
            } else {
                opts.nextSlide = opts.startingSlide >= (els.length - 1) ? 0 : opts.startingSlide + 1;
            }
        }
        if (!opts.multiFx) {
            var init = $.fn.cycle.transitions[opts.fx];
            if ($.isFunction(init)) {
                init($cont, $slides, opts);
            } else {
                if (opts.fx != "custom" && !opts.multiFx) {
                    log("unknown transition: " + opts.fx, "; slideshow terminating");
                    return false;
                }
            }
        }
        var e0 = $slides[first];
        if (opts.before.length) {
            opts.before[0].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.after.length > 1) {
            opts.after[1].apply(e0, [e0, e0, opts, true]);
        }
        if (opts.next) {
            $(opts.next).bind(opts.prevNextEvent, function () {
                return advance(opts, opts.rev ? -1 : 1);
            });
        }
        if (opts.prev) {
            $(opts.prev).bind(opts.prevNextEvent, function () {
                return advance(opts, opts.rev ? 1 : -1);
            });
        }
        if (opts.pager || opts.pagerAnchorBuilder) {
            buildPager(els, opts);
        }
        exposeAddSlide(opts, els);
        return opts;
    }
    function saveOriginalOpts(opts) {
        opts.original = {
            before: [],
            after: []
        };
        opts.original.cssBefore = $.extend({}, opts.cssBefore);
        opts.original.cssAfter = $.extend({}, opts.cssAfter);
        opts.original.animIn = $.extend({}, opts.animIn);
        opts.original.animOut = $.extend({}, opts.animOut);
        $.each(opts.before, function () {
            opts.original.before.push(this);
        });
        $.each(opts.after, function () {
            opts.original.after.push(this);
        });
    }
    function supportMultiTransitions(opts) {
        var i, tx, txs = $.fn.cycle.transitions;
        if (opts.fx.indexOf(",") > 0) {
            opts.multiFx = true;
            opts.fxs = opts.fx.replace(/\s*/g, "").split(",");
            for (i = 0; i < opts.fxs.length; i++) {
                var fx = opts.fxs[i];
                tx = txs[fx];
                if (!tx || !txs.hasOwnProperty(fx) || !$.isFunction(tx)) {
                    log("discarding unknown transition: ", fx);
                    opts.fxs.splice(i, 1);
                    i--;
                }
            }
            if (!opts.fxs.length) {
                log("No valid transitions named; slideshow terminating.");
                return false;
            }
        } else {
            if (opts.fx == "all") {
                opts.multiFx = true;
                opts.fxs = [];
                for (p in txs) {
                    tx = txs[p];
                    if (txs.hasOwnProperty(p) && $.isFunction(tx)) {
                        opts.fxs.push(p);
                    }
                }
            }
        }
        if (opts.multiFx && opts.randomizeEffects) {
            var r1 = Math.floor(Math.random() * 20) + 30;
            for (i = 0; i < r1; i++) {
                var r2 = Math.floor(Math.random() * opts.fxs.length);
                opts.fxs.push(opts.fxs.splice(r2, 1)[0]);
            }
            debug("randomized fx sequence: ", opts.fxs);
        }
        return true;
    }
    function exposeAddSlide(opts, els) {
        opts.addSlide = function (newSlide, prepend) {
            var $s = $(newSlide)
                , s = $s[0];
            if (!opts.autostopCount) {
                opts.countdown++;
            }
            els[prepend ? "unshift" : "push"](s);
            if (opts.els) {
                opts.els[prepend ? "unshift" : "push"](s);
            }
            opts.slideCount = els.length;
            $s.css("position", "absolute");
            $s[prepend ? "prependTo" : "appendTo"](opts.$cont);
            if (prepend) {
                opts.currSlide++;
                opts.nextSlide++;
            }
            if (!$.support.opacity && opts.cleartype && !opts.cleartypeNoBg) {
                clearTypeFix($s);
            }
            if (opts.fit && opts.width) {
                $s.width(opts.width);
            }
            if (opts.fit && opts.height && opts.height != "auto") {
                $slides.height(opts.height);
            }
            s.cycleH = (opts.fit && opts.height) ? opts.height : $s.height();
            s.cycleW = (opts.fit && opts.width) ? opts.width : $s.width();
            $s.css(opts.cssBefore);
            if (opts.pager || opts.pagerAnchorBuilder) {
                $.fn.cycle.createPagerAnchor(els.length - 1, s, $(opts.pager), els, opts);
            }
            if ($.isFunction(opts.onAddSlide)) {
                opts.onAddSlide($s);
            } else {
                $s.hide();
            }
        }
            ;
    }
    $.fn.cycle.resetState = function (opts, fx) {
        fx = fx || opts.fx;
        opts.before = [];
        opts.after = [];
        opts.cssBefore = $.extend({}, opts.original.cssBefore);
        opts.cssAfter = $.extend({}, opts.original.cssAfter);
        opts.animIn = $.extend({}, opts.original.animIn);
        opts.animOut = $.extend({}, opts.original.animOut);
        opts.fxFn = null;
        $.each(opts.original.before, function () {
            opts.before.push(this);
        });
        $.each(opts.original.after, function () {
            opts.after.push(this);
        });
        var init = $.fn.cycle.transitions[fx];
        if ($.isFunction(init)) {
            init(opts.$cont, $(opts.elements), opts);
        }
    }
        ;
    function go(els, opts, manual, fwd) {
        if (manual && opts.busy && opts.manualTrump) {
            debug("manualTrump in go(), stopping active transition");
            $(els).stop(true, true);
            opts.busy = false;
        }
        if (opts.busy) {
            debug("transition active, ignoring new tx request");
            return;
        }
        var p = opts.$cont[0]
            , curr = els[opts.currSlide]
            , next = els[opts.nextSlide];
        if (p.cycleStop != opts.stopCount || p.cycleTimeout === 0 && !manual) {
            return;
        }
        if (!manual && !p.cyclePause && !opts.bounce && ((opts.autostop && (--opts.countdown <= 0)) || (opts.nowrap && !opts.random && opts.nextSlide < opts.currSlide))) {
            if (opts.end) {
                opts.end(opts);
            }
            return;
        }
        var changed = false;
        if ((manual || !p.cyclePause) && (opts.nextSlide != opts.currSlide)) {
            changed = true;
            var fx = opts.fx;
            curr.cycleH = curr.cycleH || $(curr).height();
            curr.cycleW = curr.cycleW || $(curr).width();
            next.cycleH = next.cycleH || $(next).height();
            next.cycleW = next.cycleW || $(next).width();
            if (opts.multiFx) {
                if (opts.lastFx == undefined || ++opts.lastFx >= opts.fxs.length) {
                    opts.lastFx = 0;
                }
                fx = opts.fxs[opts.lastFx];
                opts.currFx = fx;
            }
            if (opts.oneTimeFx) {
                fx = opts.oneTimeFx;
                opts.oneTimeFx = null;
            }
            $.fn.cycle.resetState(opts, fx);
            if (opts.before.length) {
                $.each(opts.before, function (i, o) {
                    if (p.cycleStop != opts.stopCount) {
                        return;
                    }
                    o.apply(next, [curr, next, opts, fwd]);
                });
            }
            var after = function () {
                $.each(opts.after, function (i, o) {
                    if (p.cycleStop != opts.stopCount) {
                        return;
                    }
                    o.apply(next, [curr, next, opts, fwd]);
                });
            };
            debug("tx firing; currSlide: " + opts.currSlide + "; nextSlide: " + opts.nextSlide);
            opts.busy = 1;
            if (opts.fxFn) {
                opts.fxFn(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
            } else {
                if ($.isFunction($.fn.cycle[opts.fx])) {
                    $.fn.cycle[opts.fx](curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                } else {
                    $.fn.cycle.custom(curr, next, opts, after, fwd, manual && opts.fastOnEvent);
                }
            }
        }
        if (changed || opts.nextSlide == opts.currSlide) {
            opts.lastSlide = opts.currSlide;
            if (opts.random) {
                opts.currSlide = opts.nextSlide;
                if (++opts.randomIndex == els.length) {
                    opts.randomIndex = 0;
                }
                opts.nextSlide = opts.randomMap[opts.randomIndex];
                if (opts.nextSlide == opts.currSlide) {
                    opts.nextSlide = (opts.currSlide == opts.slideCount - 1) ? 0 : opts.currSlide + 1;
                }
            } else {
                if (opts.backwards) {
                    var roll = (opts.nextSlide - 1) < 0;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = 1;
                        opts.currSlide = 0;
                    } else {
                        opts.nextSlide = roll ? (els.length - 1) : opts.nextSlide - 1;
                        opts.currSlide = roll ? 0 : opts.nextSlide + 1;
                    }
                } else {
                    var roll = (opts.nextSlide + 1) == els.length;
                    if (roll && opts.bounce) {
                        opts.backwards = !opts.backwards;
                        opts.nextSlide = els.length - 2;
                        opts.currSlide = els.length - 1;
                    } else {
                        opts.nextSlide = roll ? 0 : opts.nextSlide + 1;
                        opts.currSlide = roll ? els.length - 1 : opts.nextSlide - 1;
                    }
                }
            }
        }
        if (changed && opts.pager) {
            opts.updateActivePagerLink(opts.pager, opts.currSlide, opts.activePagerClass);
        }
        var ms = 0;
        if (opts.timeout && !opts.continuous) {
            ms = getTimeout(els[opts.currSlide], els[opts.nextSlide], opts, fwd);
        } else {
            if (opts.continuous && p.cyclePause) {
                ms = 10;
            }
        }
        if (ms > 0) {
            p.cycleTimeout = setTimeout(function () {
                go(els, opts, 0, (!opts.rev && !opts.backwards));
            }, ms);
        }
    }
    $.fn.cycle.updateActivePagerLink = function (pager, currSlide, clsName) {
        $(pager).each(function () {
            $(this).children().removeClass(clsName).eq(currSlide).addClass(clsName);
        });
    }
        ;
    function getTimeout(curr, next, opts, fwd) {
        if (opts.timeoutFn) {
            var t = opts.timeoutFn.call(curr, curr, next, opts, fwd);
            while ((t - opts.speed) < 250) {
                t += opts.speed;
            }
            debug("calculated timeout: " + t + "; speed: " + opts.speed);
            if (t !== false) {
                return t;
            }
        }
        return opts.timeout;
    }
    $.fn.cycle.next = function (opts) {
        advance(opts, opts.rev ? -1 : 1);
    }
        ;
    $.fn.cycle.prev = function (opts) {
        advance(opts, opts.rev ? 1 : -1);
    }
        ;
    function advance(opts, val) {
        var els = opts.elements;
        var p = opts.$cont[0]
            , timeout = p.cycleTimeout;
        if (timeout) {
            clearTimeout(timeout);
            p.cycleTimeout = 0;
        }
        if (opts.random && val < 0) {
            opts.randomIndex--;
            if (--opts.randomIndex == -2) {
                opts.randomIndex = els.length - 2;
            } else {
                if (opts.randomIndex == -1) {
                    opts.randomIndex = els.length - 1;
                }
            }
            opts.nextSlide = opts.randomMap[opts.randomIndex];
        } else {
            if (opts.random) {
                opts.nextSlide = opts.randomMap[opts.randomIndex];
            } else {
                opts.nextSlide = opts.currSlide + val;
                if (opts.nextSlide < 0) {
                    if (opts.nowrap) {
                        return false;
                    }
                    opts.nextSlide = els.length - 1;
                } else {
                    if (opts.nextSlide >= els.length) {
                        if (opts.nowrap) {
                            return false;
                        }
                        opts.nextSlide = 0;
                    }
                }
            }
        }
        var cb = opts.onPrevNextEvent || opts.prevNextClick;
        if ($.isFunction(cb)) {
            cb(val > 0, opts.nextSlide, els[opts.nextSlide]);
        }
        go(els, opts, 1, val >= 0);
        return false;
    }
    function buildPager(els, opts) {
        var $p = $(opts.pager);
        $.each(els, function (i, o) {
            $.fn.cycle.createPagerAnchor(i, o, $p, els, opts);
        });
        opts.updateActivePagerLink(opts.pager, opts.startingSlide, opts.activePagerClass);
    }
    $.fn.cycle.createPagerAnchor = function (i, el, $p, els, opts) {
        var a;
        if ($.isFunction(opts.pagerAnchorBuilder)) {
            a = opts.pagerAnchorBuilder(i, el);
            debug("pagerAnchorBuilder(" + i + ", el) returned: " + a);
        } else {
            a = '<a href="#">' + (i + 1) + "</a>";
        }
        if (!a) {
            return;
        }
        var $a = $(a);
        if ($a.parents("body").length === 0) {
            var arr = [];
            if ($p.length > 1) {
                $p.each(function () {
                    var $clone = $a.clone(true);
                    $(this).append($clone);
                    arr.push($clone[0]);
                });
                $a = $(arr);
            } else {
                $a.appendTo($p);
            }
        }
        opts.pagerAnchors = opts.pagerAnchors || [];
        opts.pagerAnchors.push($a);
        $a.bind(opts.pagerEvent, function (e) {
            e.preventDefault();
            opts.nextSlide = i;
            var p = opts.$cont[0]
                , timeout = p.cycleTimeout;
            if (timeout) {
                clearTimeout(timeout);
                p.cycleTimeout = 0;
            }
            var cb = opts.onPagerEvent || opts.pagerClick;
            if ($.isFunction(cb)) {
                cb(opts.nextSlide, els[opts.nextSlide]);
            }
            go(els, opts, 1, opts.currSlide < i);
        });
        if (!/^click/.test(opts.pagerEvent) && !opts.allowPagerClickBubble) {
            $a.bind("click.cycle", function () {
                return false;
            });
        }
        if (opts.pauseOnPagerHover) {
            $a.hover(function () {
                opts.$cont[0].cyclePause++;
            }, function () {
                opts.$cont[0].cyclePause--;
            });
        }
    }
        ;
    $.fn.cycle.hopsFromLast = function (opts, fwd) {
        var hops, l = opts.lastSlide, c = opts.currSlide;
        if (fwd) {
            hops = c > l ? c - l : opts.slideCount - l;
        } else {
            hops = c < l ? l - c : l + opts.slideCount - c;
        }
        return hops;
    }
        ;
    function clearTypeFix($slides) {
        debug("applying clearType background-color hack");
        function hex(s) {
            s = parseInt(s).toString(16);
            return s.length < 2 ? "0" + s : s;
        }
        function getBg(e) {
            for (; e && e.nodeName.toLowerCase() != "html"; e = e.parentNode) {
                var v = $.css(e, "background-color");
                if (v.indexOf("rgb") >= 0) {
                    var rgb = v.match(/\d+/g);
                    return "#" + hex(rgb[0]) + hex(rgb[1]) + hex(rgb[2]);
                }
                if (v && v != "transparent") {
                    return v;
                }
            }
            return "#ffffff";
        }
        $slides.each(function () {
            $(this).css("background-color", getBg(this));
        });
    }
    $.fn.cycle.commonReset = function (curr, next, opts, w, h, rev) {
        $(opts.elements).not(curr).hide();
        opts.cssBefore.opacity = 1;
        opts.cssBefore.display = "block";
        if (w !== false && next.cycleW > 0) {
            opts.cssBefore.width = next.cycleW;
        }
        if (h !== false && next.cycleH > 0) {
            opts.cssBefore.height = next.cycleH;
        }
        opts.cssAfter = opts.cssAfter || {};
        opts.cssAfter.display = "none";
        $(curr).css("zIndex", opts.slideCount + (rev === true ? 1 : 0));
        $(next).css("zIndex", opts.slideCount + (rev === true ? 0 : 1));
    }
        ;
    $.fn.cycle.custom = function (curr, next, opts, cb, fwd, speedOverride) {
        var $l = $(curr)
            , $n = $(next);
        var speedIn = opts.speedIn
            , speedOut = opts.speedOut
            , easeIn = opts.easeIn
            , easeOut = opts.easeOut;
        $n.css(opts.cssBefore);
        if (speedOverride) {
            if (typeof speedOverride == "number") {
                speedIn = speedOut = speedOverride;
            } else {
                speedIn = speedOut = 1;
            }
            easeIn = easeOut = null;
        }
        var fn = function () {
            $n.animate(opts.animIn, speedIn, easeIn, cb);
        };
        $l.animate(opts.animOut, speedOut, easeOut, function () {
            if (opts.cssAfter) {
                $l.css(opts.cssAfter);
            }
            if (!opts.sync) {
                fn();
            }
        });
        if (opts.sync) {
            fn();
        }
    }
        ;
    $.fn.cycle.transitions = {
        fade: function ($cont, $slides, opts) {
            $slides.not(":eq(" + opts.currSlide + ")").css("opacity", 0);
            opts.before.push(function (curr, next, opts) {
                $.fn.cycle.commonReset(curr, next, opts);
                opts.cssBefore.opacity = 0;
            });
            opts.animIn = {
                opacity: 1
            };
            opts.animOut = {
                opacity: 0
            };
            opts.cssBefore = {
                top: 0,
                left: 0
            };
        }
    };
    $.fn.cycle.ver = function () {
        return ver;
    }
        ;
    $.fn.cycle.defaults = {
        fx: "fade",
        timeout: 4000,
        timeoutFn: null,
        continuous: 0,
        speed: 1000,
        speedIn: null,
        speedOut: null,
        next: null,
        prev: null,
        onPrevNextEvent: null,
        prevNextEvent: "click.cycle",
        pager: null,
        onPagerEvent: null,
        pagerEvent: "click.cycle",
        allowPagerClickBubble: false,
        pagerAnchorBuilder: null,
        before: null,
        after: null,
        end: null,
        easing: null,
        easeIn: null,
        easeOut: null,
        shuffle: null,
        animIn: null,
        animOut: null,
        cssBefore: null,
        cssAfter: null,
        fxFn: null,
        height: "auto",
        startingSlide: 0,
        sync: 1,
        random: 0,
        fit: 0,
        containerResize: 1,
        pause: 0,
        pauseOnPagerHover: 0,
        autostop: 0,
        autostopCount: 0,
        delay: 0,
        slideExpr: null,
        cleartype: !$.support.opacity,
        cleartypeNoBg: false,
        nowrap: 0,
        fastOnEvent: 0,
        randomizeEffects: 1,
        rev: 0,
        manualTrump: true,
        requeueOnImageNotLoaded: true,
        requeueTimeout: 250,
        activePagerClass: "activeSlide",
        updateActivePagerLink: null,
        backwards: false
    };
}
)(jQuery);
/*
* jQuery Cycle Plugin Transition Definitions
* This script is a plugin for the jQuery Cycle Plugin
* Examples and documentation at: http://malsup.com/jquery/cycle/
* Copyright (c) 2007-2010 M. Alsup
* Version:	 2.72
* Dual licensed under the MIT and GPL licenses:
* http://www.opensource.org/licenses/mit-license.php
* http://www.gnu.org/licenses/gpl.html
*/
(function ($) {
    $.fn.cycle.transitions.none = function ($cont, $slides, opts) {
        opts.fxFn = function (curr, next, opts, after) {
            $(next).show();
            $(curr).hide();
            after();
        }
            ;
    }
        ;
    $.fn.cycle.transitions.scrollUp = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssBefore = {
            top: h,
            left: 0
        };
        opts.cssFirst = {
            top: 0
        };
        opts.animIn = {
            top: 0
        };
        opts.animOut = {
            top: -h
        };
    }
        ;
    $.fn.cycle.transitions.scrollDown = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var h = $cont.height();
        opts.cssFirst = {
            top: 0
        };
        opts.cssBefore = {
            top: -h,
            left: 0
        };
        opts.animIn = {
            top: 0
        };
        opts.animOut = {
            top: h
        };
    }
        ;
    $.fn.cycle.transitions.scrollLeft = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst = {
            left: 0
        };
        opts.cssBefore = {
            left: w,
            top: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: 0 - w
        };
    }
        ;
    $.fn.cycle.transitions.scrollRight = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push($.fn.cycle.commonReset);
        var w = $cont.width();
        opts.cssFirst = {
            left: 0
        };
        opts.cssBefore = {
            left: -w,
            top: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: w
        };
    }
        ;
    $.fn.cycle.transitions.scrollHorz = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden").width();
        opts.before.push(function (curr, next, opts, fwd) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.left = fwd ? (next.cycleW - 1) : (1 - next.cycleW);
            opts.animOut.left = fwd ? -curr.cycleW : curr.cycleW;
        });
        opts.cssFirst = {
            left: 0
        };
        opts.cssBefore = {
            top: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            top: 0
        };
    }
        ;
    $.fn.cycle.transitions.scrollVert = function ($cont, $slides, opts) {
        $cont.css("overflow", "hidden");
        opts.before.push(function (curr, next, opts, fwd) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.cssBefore.top = fwd ? (1 - next.cycleH) : (next.cycleH - 1);
            opts.animOut.top = fwd ? curr.cycleH : -curr.cycleH;
        });
        opts.cssFirst = {
            top: 0
        };
        opts.cssBefore = {
            left: 0
        };
        opts.animIn = {
            top: 0
        };
        opts.animOut = {
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.slideX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore = {
            left: 0,
            top: 0,
            width: 0
        };
        opts.animIn = {
            width: "show"
        };
        opts.animOut = {
            width: 0
        };
    }
        ;
    $.fn.cycle.transitions.slideY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $(opts.elements).not(curr).hide();
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
        });
        opts.cssBefore = {
            left: 0,
            top: 0,
            height: 0
        };
        opts.animIn = {
            height: "show"
        };
        opts.animOut = {
            height: 0
        };
    }
        ;
    $.fn.cycle.transitions.shuffle = function ($cont, $slides, opts) {
        var i, w = $cont.css("overflow", "visible").width();
        $slides.css({
            left: 0,
            top: 0
        });
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
        });
        if (!opts.speedAdjusted) {
            opts.speed = opts.speed / 2;
            opts.speedAdjusted = true;
        }
        opts.random = 0;
        opts.shuffle = opts.shuffle || {
            left: -w,
            top: 15
        };
        opts.els = [];
        for (i = 0; i < $slides.length; i++) {
            opts.els.push($slides[i]);
        }
        for (i = 0; i < opts.currSlide; i++) {
            opts.els.push(opts.els.shift());
        }
        opts.fxFn = function (curr, next, opts, cb, fwd) {
            var $el = fwd ? $(curr) : $(next);
            $(next).css(opts.cssBefore);
            var count = opts.slideCount;
            $el.animate(opts.shuffle, opts.speedIn, opts.easeIn, function () {
                var hops = $.fn.cycle.hopsFromLast(opts, fwd);
                for (var k = 0; k < hops; k++) {
                    fwd ? opts.els.push(opts.els.shift()) : opts.els.unshift(opts.els.pop());
                }
                if (fwd) {
                    for (var i = 0, len = opts.els.length; i < len; i++) {
                        $(opts.els[i]).css("z-index", len - i + count);
                    }
                } else {
                    var z = $(curr).css("z-index");
                    $el.css("z-index", parseInt(z) + 1 + count);
                }
                $el.animate({
                    left: 0,
                    top: 0
                }, opts.speedOut, opts.easeOut, function () {
                    $(fwd ? this : curr).hide();
                    if (cb) {
                        cb();
                    }
                });
            });
        }
            ;
        opts.cssBefore = {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.turnUp = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = next.cycleH;
            opts.animIn.height = next.cycleH;
        });
        opts.cssFirst = {
            top: 0
        };
        opts.cssBefore = {
            left: 0,
            height: 0
        };
        opts.animIn = {
            top: 0
        };
        opts.animOut = {
            height: 0
        };
    }
        ;
    $.fn.cycle.transitions.turnDown = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssFirst = {
            top: 0
        };
        opts.cssBefore = {
            left: 0,
            top: 0,
            height: 0
        };
        opts.animOut = {
            height: 0
        };
    }
        ;
    $.fn.cycle.transitions.turnLeft = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = next.cycleW;
            opts.animIn.width = next.cycleW;
        });
        opts.cssBefore = {
            top: 0,
            width: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            width: 0
        };
    }
        ;
    $.fn.cycle.transitions.turnRight = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore = {
            top: 0,
            left: 0,
            width: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            width: 0
        };
    }
        ;
    $.fn.cycle.transitions.zoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn = {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            };
            opts.animOut = {
                width: 0,
                height: 0,
                top: curr.cycleH / 2,
                left: curr.cycleW / 2
            };
        });
        opts.cssFirst = {
            top: 0,
            left: 0
        };
        opts.cssBefore = {
            width: 0,
            height: 0
        };
    }
        ;
    $.fn.cycle.transitions.fadeZoom = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, false);
            opts.cssBefore.left = next.cycleW / 2;
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn = {
                top: 0,
                left: 0,
                width: next.cycleW,
                height: next.cycleH
            };
        });
        opts.cssBefore = {
            width: 0,
            height: 0
        };
        opts.animOut = {
            opacity: 0
        };
    }
        ;
    $.fn.cycle.transitions.blindX = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.width = next.cycleW;
            opts.animOut.left = curr.cycleW;
        });
        opts.cssBefore = {
            left: w,
            top: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: w
        };
    }
        ;
    $.fn.cycle.transitions.blindY = function ($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore = {
            top: h,
            left: 0
        };
        opts.animIn = {
            top: 0
        };
        opts.animOut = {
            top: h
        };
    }
        ;
    $.fn.cycle.transitions.blindZ = function ($cont, $slides, opts) {
        var h = $cont.css("overflow", "hidden").height();
        var w = $cont.width();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            opts.animIn.height = next.cycleH;
            opts.animOut.top = curr.cycleH;
        });
        opts.cssBefore = {
            top: h,
            left: w
        };
        opts.animIn = {
            top: 0,
            left: 0
        };
        opts.animOut = {
            top: h,
            left: w
        };
    }
        ;
    $.fn.cycle.transitions.growX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true);
            opts.cssBefore.left = this.cycleW / 2;
            opts.animIn = {
                left: 0,
                width: this.cycleW
            };
            opts.animOut = {
                left: 0
            };
        });
        opts.cssBefore = {
            width: 0,
            top: 0
        };
    }
        ;
    $.fn.cycle.transitions.growY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false);
            opts.cssBefore.top = this.cycleH / 2;
            opts.animIn = {
                top: 0,
                height: this.cycleH
            };
            opts.animOut = {
                top: 0
            };
        });
        opts.cssBefore = {
            height: 0,
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.curtainX = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, false, true, true);
            opts.cssBefore.left = next.cycleW / 2;
            opts.animIn = {
                left: 0,
                width: this.cycleW
            };
            opts.animOut = {
                left: curr.cycleW / 2,
                width: 0
            };
        });
        opts.cssBefore = {
            top: 0,
            width: 0
        };
    }
        ;
    $.fn.cycle.transitions.curtainY = function ($cont, $slides, opts) {
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, false, true);
            opts.cssBefore.top = next.cycleH / 2;
            opts.animIn = {
                top: 0,
                height: next.cycleH
            };
            opts.animOut = {
                top: curr.cycleH / 2,
                height: 0
            };
        });
        opts.cssBefore = {
            left: 0,
            height: 0
        };
    }
        ;
    $.fn.cycle.transitions.cover = function ($cont, $slides, opts) {
        var d = opts.direction || "left";
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts);
            if (d == "right") {
                opts.cssBefore.left = -w;
            } else {
                if (d == "up") {
                    opts.cssBefore.top = h;
                } else {
                    if (d == "down") {
                        opts.cssBefore.top = -h;
                    } else {
                        opts.cssBefore.left = w;
                    }
                }
            }
        });
        opts.animIn = {
            left: 0,
            top: 0
        };
        opts.animOut = {
            opacity: 1
        };
        opts.cssBefore = {
            top: 0,
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.uncover = function ($cont, $slides, opts) {
        var d = opts.direction || "left";
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (d == "right") {
                opts.animOut.left = w;
            } else {
                if (d == "up") {
                    opts.animOut.top = -h;
                } else {
                    if (d == "down") {
                        opts.animOut.top = h;
                    } else {
                        opts.animOut.left = -w;
                    }
                }
            }
        });
        opts.animIn = {
            left: 0,
            top: 0
        };
        opts.animOut = {
            opacity: 1
        };
        opts.cssBefore = {
            top: 0,
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.toss = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "visible").width();
        var h = $cont.height();
        opts.before.push(function (curr, next, opts) {
            $.fn.cycle.commonReset(curr, next, opts, true, true, true);
            if (!opts.animOut.left && !opts.animOut.top) {
                opts.animOut = {
                    left: w * 2,
                    top: -h / 2,
                    opacity: 0
                };
            } else {
                opts.animOut.opacity = 0;
            }
        });
        opts.cssBefore = {
            left: 0,
            top: 0
        };
        opts.animIn = {
            left: 0
        };
    }
        ;
    $.fn.cycle.transitions.wipe = function ($cont, $slides, opts) {
        var w = $cont.css("overflow", "hidden").width();
        var h = $cont.height();
        opts.cssBefore = opts.cssBefore || {};
        var clip;
        if (opts.clip) {
            if (/l2r/.test(opts.clip)) {
                clip = "rect(0px 0px " + h + "px 0px)";
            } else {
                if (/r2l/.test(opts.clip)) {
                    clip = "rect(0px " + w + "px " + h + "px " + w + "px)";
                } else {
                    if (/t2b/.test(opts.clip)) {
                        clip = "rect(0px " + w + "px 0px 0px)";
                    } else {
                        if (/b2t/.test(opts.clip)) {
                            clip = "rect(" + h + "px " + w + "px " + h + "px 0px)";
                        } else {
                            if (/zoom/.test(opts.clip)) {
                                var top = parseInt(h / 2);
                                var left = parseInt(w / 2);
                                clip = "rect(" + top + "px " + left + "px " + top + "px " + left + "px)";
                            }
                        }
                    }
                }
            }
        }
        opts.cssBefore.clip = opts.cssBefore.clip || clip || "rect(0px 0px 0px 0px)";
        var d = opts.cssBefore.clip.match(/(\d+)/g);
        var t = parseInt(d[0])
            , r = parseInt(d[1])
            , b = parseInt(d[2])
            , l = parseInt(d[3]);
        opts.before.push(function (curr, next, opts) {
            if (curr == next) {
                return;
            }
            var $curr = $(curr)
                , $next = $(next);
            $.fn.cycle.commonReset(curr, next, opts, true, true, false);
            opts.cssAfter.display = "block";
            var step = 1
                , count = parseInt((opts.speedIn / 13)) - 1;
            (function f() {
                var tt = t ? t - parseInt(step * (t / count)) : 0;
                var ll = l ? l - parseInt(step * (l / count)) : 0;
                var bb = b < h ? b + parseInt(step * ((h - b) / count || 1)) : h;
                var rr = r < w ? r + parseInt(step * ((w - r) / count || 1)) : w;
                $next.css({
                    clip: "rect(" + tt + "px " + rr + "px " + bb + "px " + ll + "px)"
                });
                (step++ <= count) ? setTimeout(f, 13) : $curr.css("display", "none");
            }
            )();
        });
        opts.cssBefore = {
            display: "block",
            opacity: 1,
            top: 0,
            left: 0
        };
        opts.animIn = {
            left: 0
        };
        opts.animOut = {
            left: 0
        };
    }
        ;
}
)(jQuery);

/**
* Storage plugin
* @author Dave Schindler
*/
(function ($) {
    // Private data
    var isLS = typeof window.localStorage !== 'undefined';
    // Private functions
    function wls(n, v) {
        var c;
        if (typeof n === "string" && typeof v === "string") {
            localStorage[n] = v;
            return true;
        } else if (typeof n === "object" && typeof v === "undefined") {
            for (c in n) {
                if (n.hasOwnProperty(c)) {
                    localStorage[c] = n[c];
                }
            }
            return true;
        }
        return false;
    }
    function wc(n, v) {
        var dt, e, c;
        dt = new Date();
        dt.setTime(dt.getTime() + 31536000000);
        e = "; expires=" + dt.toGMTString();
        if (typeof n === "string" && typeof v === "string") {
            document.cookie = n + "=" + v + e + "; path=/";
            return true;
        } else if (typeof n === "object" && typeof v === "undefined") {
            for (c in n) {
                if (n.hasOwnProperty(c)) {
                    document.cookie = c + "=" + n[c] + e + "; path=/";
                }
            }
            return true;
        }
        return false;
    }
    function rls(n) {
        return localStorage[n];
    }
    function rc(n) {
        var nn, ca, i, c;
        nn = n + "=";
        ca = document.cookie.split(';');
        for (i = 0; i < ca.length; i++) {
            c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1, c.length);
            }
            if (c.indexOf(nn) === 0) {
                return c.substring(nn.length, c.length);
            }
        }
        return null;
    }
    function dls(n) {
        return delete localStorage[n];
    }
    function dc(n) {
        return wc(n, "", -1);
    }

    $.extend({
        Storage: {
            set: isLS ? wls : wc,
            get: isLS ? rls : rc,
            remove: isLS ? dls : dc
        }
    });
}
)(jQuery);

/**
* @author Kyle Florence <kyle[dot]florence[at]gmail[dot]com>
* @website https://github.com/kflorence/jquery-deserialize/
* @version 1.2.1
*
* Dual licensed under the MIT and GPLv2 licenses.
*/
(function (i, b) {
    var f = Array.prototype.push
        , a = /^(?:radio|checkbox)$/i
        , e = /\+/g
        , d = /^(?:option|select-one|select-multiple)$/i
        , g = /^(?:button|color|date|datetime|datetime-local|email|hidden|month|number|password|range|reset|search|submit|tel|text|textarea|time|url|week)$/i;
    function c(j) {
        return j.map(function () {
            return this.elements ? i.makeArray(this.elements) : this
        }).filter(":input").get()
    }
    function h(j) {
        var k, l = {};
        i.each(j, function (n, m) {
            k = l[m.name];
            l[m.name] = k === b ? m : (i.isArray(k) ? k.concat(m) : [k, m])
        });
        return l
    }
    i.fn.deserialize = function (A, l) {
        var y, n, q = c(this), t = [];
        if (!A || !q.length) {
            return this
        }
        if (i.isArray(A)) {
            t = A
        } else {
            if (i.isPlainObject(A)) {
                var B, w;
                for (B in A) {
                    i.isArray(w = A[B]) ? f.apply(t, i.map(w, function (j) {
                        return {
                            name: B,
                            value: j
                        }
                    })) : f.call(t, {
                        name: B,
                        value: w
                    })
                }
            } else {
                if (typeof A === "string") {
                    var v;
                    A = A.split("&");
                    for (y = 0,
                        n = A.length; y < n; y++) {
                        v = A[y].split("=");
                        f.call(t, {
                            name: decodeURIComponent(v[0]),
                            value: decodeURIComponent(v[1].replace(e, "%20"))
                        })
                    }
                }
            }
        }
        if (!(n = t.length)) {
            return this
        }
        var u, k, x, z, C, o, m, w, p = i.noop, s = i.noop, r = {};
        l = l || {};
        q = h(q);
        if (i.isFunction(l)) {
            s = l
        } else {
            p = i.isFunction(l.change) ? l.change : p;
            s = i.isFunction(l.complete) ? l.complete : s
        }
        for (y = 0; y < n; y++) {
            u = t[y];
            C = u.name;
            w = u.value;
            if (!(k = q[C])) {
                continue
            }
            m = (z = k.length) ? k[0] : k;
            m = (m.type || m.nodeName).toLowerCase();
            o = null;
            if (g.test(m)) {
                if (z) {
                    x = r[C];
                    k = k[r[C] = (x == b) ? 0 : ++x]
                }
                p.call(k, (k.value = w))
            } else {
                if (a.test(m)) {
                    o = "checked"
                } else {
                    if (d.test(m)) {
                        o = "selected"
                    }
                }
            }
            if (o) {
                if (!z) {
                    k = [k];
                    z = 1
                }
                for (x = 0; x < z; x++) {
                    u = k[x];
                    if (u.value == w) {
                        p.call(u, (u[o] = true) && w)
                    }
                }
            }
        }
        s.call(this);
        return this
    }
}
)(jQuery);