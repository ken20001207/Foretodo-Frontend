!function (n, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : n.Ald = t()
}(this, function () {
  function n() {
    this.concurrency = 4, this.queue = [], this.tasks = [], this.activeCount = 0;
    var n = this;
    this.push = function (t) {
      this.tasks.push(new Promise(function (e, o) {
        var r = function () {
          n.activeCount++, t().then(function (n) {
            e(n)
          }).then(function () {
            n.next()
          })
        };
        n.activeCount < n.concurrency ? r() : n.queue.push(r)
      }))
    }, this.all = function () {
      return Promise.all(this.tasks)
    }, this.next = function () {
      n.activeCount--, n.queue.length > 0 && n.queue.shift()()
    }
  }

  function t() {
    this.request = [], this.updata = !1, this.push = function (n) {
      this.request.length >= 8 && !this.updata && (this.updata = !0, e()), this.request.length >= 10 ? (this.request.shift(), this.request.push(n)) : this.request.push(n)
    }, this.concat = function () {
      this.request.map(function (n) {
        wx.Queue.push(n)
      }), this.request = []
    }
  }

  function e() {
    "function" == typeof gn && "" === G && gn().then(function (n) {
      28 === n.length && (G = n, wx.setStorageSync("aldstat_op", n))
    })
  }

  function o(n) {
    this.app = n
  }

  function r(n) {
    j = S(), W = n, ln = n.scene, this.aldstat = new o(this)
  }

  function i(n) {
    e();
    var t;
    t = n.scene != ln, ln = n.scene, V = 0, W = n, F = n.query.ald_share_src, X = n.query.aldsrc || "", Y = n.query.ald_share_src, fn || ($ = !1), fn = !1, (0 !== Q && Date.now() - Q > 3e4 || t) && (hn || (T = S(), N = Date.now(), wn = 0)), 0 !== Q && Date.now() - Q < 3e4 && (rn = !0), n.query.ald_share_src && "1044" == n.scene && n.shareTicket ? wx.getShareInfo({
      shareTicket: n.shareTicket,
      success: function (n) {
        nn = n, A("event", "ald_share_click", JSON.stringify(n))
      }
    }) : n.query.ald_share_src && A("event", "ald_share_click", 1), "" === tn && wx.getSetting({
      withCredentials: !0,
      success: function (n) {
        if (n.authSetting["scope.userInfo"]) {
          wx.getUserInfo({
            withCredentials: !0, success: function (n) {
              var t = v();
              tn = n, t.ufo = _(n), K = y(n.userInfo.avatarUrl.split("/")), g(t)
            }
          })
        }
      }
    }), q("app", "show")
  }

  function s() {
    e(), Q = Date.now(), "" === tn && wx.getSetting({
      success: function (n) {
        n.authSetting["scope.userInfo"] && wx.getUserInfo({
          withCredentials: !0, success: function (n) {
            tn = n, K = y(n.userInfo.avatarUrl.split("/"));
            var t = v();
            t.ufo = _(n), g(t)
          }
        })
      }
    }), q("app", "hide")
  }

  function a(n) {
    Z++, A("event", "ald_error_message", n)
  }

  function u(n) {
    un = n
  }

  function c() {
    dn = Date.now(), sn = B ? this.$mp.page.route : this.route, D("page", "show"), rn = !1
  }

  function f() {
    an = sn, wn = Date.now() - dn
  }

  function h() {
    an = sn, wn = Date.now() - dn
  }

  function l() {
    A("event", "ald_pulldownrefresh", 1)
  }

  function p() {
    A("event", "ald_reachbottom", 1)
  }

  function d(n) {
    hn = !0;
    var t = m(n.path), e = {};
    for (var o in W.query) "ald_share_src" === o && (e[o] = W.query[o]);
    var r = "";
    if (r = n.path.indexOf("?") == -1 ? n.path + "?" : n.path.substr(0, n.path.indexOf("?")) + "?", "" !== t) for (var o in t) e[o] = t[o];
    e.ald_share_src ? e.ald_share_src.indexOf(z) == -1 && e.ald_share_src.length < 200 && (e.ald_share_src = e.ald_share_src + "," + z) : e.ald_share_src = z;
    for (var i in e) i.indexOf("ald") == -1 && (r += i + "=" + e[i] + "&");
    return n.path = r + "ald_share_src=" + e.ald_share_src, A("event", "ald_share_status", n), n
  }

  function w() {
    function n() {
      return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1)
    }

    return n() + n() + n() + n() + n() + n() + n() + n()
  }

  function g(n) {
    function t() {
      return new Promise(function (t, e) {
        var o = {AldStat: "MiniApp-Stat", se: J || "", op: G || "", img: K};
        "" === E || (o.ai = E), wx.request({
          url: "https://" + U + ".aldwx.com/d.html",
          data: n,
          header: o,
          method: "GET",
          success: function (n) {
            t(200 == n.statusCode ? "" : "status error")
          },
          fail: function () {
            t("fail")
          }
        })
      })
    }

    V++, n.at = T, n.uu = z, n.v = C, n.ak = H.app_key.replace(/(\t)|(\s)/g, ""), n.wsr = W, n.ifo = $, n.rq_c = V, n.ls = j, n.te = b, n.et = Date.now(), n.st = Date.now(), H.useOpen ? "" === G ? pn.push(t) : (wx.Queue.push(t), pn.concat()) : wx.Queue.push(t)
  }

  function v() {
    var n = {};
    for (var t in en) n[t] = en[t];
    return n
  }

  function y(n) {
    for (var t = "", e = 0; e < n.length; e++) n[e].length > t.length && (t = n[e]);
    return t
  }

  function S() {
    return "" + Date.now() + Math.floor(1e7 * Math.random())
  }

  function _(n) {
    var t = {};
    for (var e in n) "rawData" != e && "errMsg" != e && (t[e] = n[e]);
    return t
  }

  function m(n) {
    if (n.indexOf("?") == -1) return "";
    var t = {};
    return n.split("?")[1].split("&").forEach(function (n) {
      var e = n.split("=")[1];
      t[n.split("=")[0]] = e
    }), t
  }

  function x(n) {
    for (var t in n) if ("object" == typeof n[t] && null !== n[t]) return !0;
    return !1
  }

  function q(n, t) {
    var e = v();
    e.ev = n, e.life = t, e.ec = Z, e.dr = Date.now() - N, X && (e.qr = X, e.sr = X), F && (e.usr = F), g(e)
  }

  function D(n, t) {
    var e = v();
    e.ev = n, e.life = t, e.pp = sn, e.pc = an, e.dr = Date.now() - N, hn && (e.so = 1), hn = !1, un && "{}" != JSON.stringify(un) && (e.ag = un), X && (e.qr = X, e.sr = X), F && (e.usr = F), rn && (e.ps = 1), on ? e.pdr = wn : (cn = sn, on = !0, e.ifp = on, e.fp = sn, e.pdr = 0), g(e)
  }

  function A(n, t, e) {
    var o = v();
    o.ev = n, o.tp = t, o.dr = Date.now() - N, e && (o.ct = e), g(o)
  }

  function M(n, t, e) {
    if (n[t]) {
      var o = n[t];
      n[t] = function (n) {
        e.call(this, n, t), o.call(this, n)
      }
    } else n[t] = function (n) {
      e.call(this, n, t)
    }
  }

  function I(n) {
    var t = {};
    for (var e in n) "onLaunch" !== e && "onShow" !== e && "onHide" !== e && "onError" !== e && (t[e] = n[e]);
    return t.onLaunch = function (t) {
      r.call(this, t), "function" == typeof n.onLaunch && n.onLaunch.call(this, t)
    }, t.onShow = function (t) {
      i.call(this, t), n.onShow && "function" == typeof n.onShow && n.onShow.call(this, t)
    }, t.onHide = function () {
      s.call(this), n.onHide && "function" == typeof n.onHide && n.onHide.call(this)
    }, t.onError = function (t) {
      a.call(this, t), n.onError && "function" == typeof n.onError && n.onError.call(this, t)
    }, t
  }

  function P(n) {
    var t = {};
    for (var e in n) "onLoad" !== e && "onShow" !== e && "onHide" !== e && "onUnload" !== e && "onPullDownRefresh" !== e && "onReachBottom" !== e && "onShareAppMessage" !== e && (t[e] = n[e]);
    return t.onLoad = function (t) {
      u.call(this, t), "function" == typeof n.onLoad && n.onLoad.call(this, t)
    }, t.onShow = function (t) {
      c.call(this), "function" == typeof n.onShow && n.onShow.call(this, t)
    }, t.onHide = function (t) {
      f.call(this), "function" == typeof n.onHide && n.onHide.call(this, t)
    }, t.onUnload = function (t) {
      h.call(this), "function" == typeof n.onUnload && n.onUnload.call(this, t)
    }, t.onReachBottom = function (t) {
      p(), n.onReachBottom && "function" == typeof n.onReachBottom && n.onReachBottom.call(this, t)
    }, t.onPullDownRefresh = function (t) {
      l(), n.onPullDownRefresh && "function" == typeof n.onPullDownRefresh && n.onPullDownRefresh.call(this, t)
    }, n.onShareAppMessage && "function" == typeof n.onShareAppMessage && (t.onShareAppMessage = function (t) {
      var e = n.onShareAppMessage.call(this, t);
      return void 0 === e ? (e = {}, e.path = this.route) : void 0 === e.path && (e.path = this.route), d.call(this, e)
    }), t
  }

  function L(n) {
    return App(I(n))
  }

  function O(n) {
    return Page(P(n))
  }

  function R(n) {
    return B = !0, I(n)
  }

  function k(n) {
    return P(n)
  }

  var H = require("./ald-stat-conf");
  void 0 === wx.Queue && (wx.Queue = new n, wx.Queue.all()), H.useOpen && console.warn("提示：开启了useOpen配置后，如果不上传用户opendId则不会上报数据。");
  var C = "7.3.2", U = "log", b = "wx", E = function () {
      return void 0 === wx.getAccountInfoSync ? "" : wx.getAccountInfoSync().miniProgram.appId.split("").map(function (n) {
        return n.charCodeAt(0) + 9
      }).join("-")
    }(), B = !1, T = S(), j = "", N = Date.now(), Q = 0, J = "", G = function () {
      var n = "";
      try {
        n = wx.getStorageSync("aldstat_op")
      } catch (n) {
      }
      return n
    }(), K = "", V = 0, W = "", $ = "", z = function () {
      var n = "";
      try {
        n = wx.getStorageSync("aldstat_uuid")
      } catch (t) {
        n = "uuid_getstoragesync"
      }
      if (n) $ = !1; else {
        n = w();
        try {
          wx.setStorageSync("aldstat_uuid", n), $ = !0
        } catch (n) {
          wx.setStorageSync("aldstat_uuid", "uuid_getstoragesync")
        }
      }
      return n
    }(), F = "", X = "", Y = "", Z = 0, nn = "", tn = "", en = {}, on = !1, rn = !1, sn = "", an = "", un = "", cn = "",
    fn = !0, hn = !1, ln = "", pn = new t, dn = 0, wn = 0, gn = "";
  !function () {
    wx.request({
      url: "https://" + U + ".aldwx.com/config/app.json",
      header: {AldStat: "MiniApp-Stat"},
      method: "GET",
      success: function (n) {
        200 === n.statusCode && (C < n.data.version && console.warn("您的SDK不是最新版本，请尽快升级！"), n.data.warn && console.warn(n.data.warn), n.data.error && console.error(n.data.error))
      }
    })
  }(), wx.aldstat = new o("");
  try {
    var vn = wx.getSystemInfoSync();
    en.br = vn.brand, en.pm = vn.model, en.pr = vn.pixelRatio, en.ww = vn.windowWidth, en.wh = vn.windowHeight, en.lang = vn.language, en.wv = vn.version, en.wvv = vn.platform, en.wsdk = vn.SDKVersion, en.sv = vn.system
  } catch (n) {
  }
  wx.getNetworkType({
    success: function (n) {
      en.nt = n.networkType
    }
  }), wx.getSetting({
    success: function (n) {
      n.authSetting["scope.userLocation"] ? wx.getLocation({
        type: "wgs84", success: function (n) {
          en.lat = n.latitude, en.lng = n.longitude, en.spd = n.speed
        }
      }) : H.getLocation && wx.getLocation({
        type: "wgs84", success: function (n) {
          en.lat = n.latitude, en.lng = n.longitude, en.spd = n.speed
        }
      })
    }
  }), o.prototype.sendEvent = function (n, t) {
    if ("" !== n && "string" == typeof n && n.length <= 255) if ("string" == typeof t && t.length <= 255) A("event", n, t); else if ("object" == typeof t) {
      if (JSON.stringify(t).length >= 255) return void console.error("自定义事件参数不能超过255个字符");
      if (x(t)) return void console.error("事件参数，参数内部只支持Number,String等类型，请参考接入文档");
      for (var e in t) "number" == typeof t[e] && (t[e] = t[e] + "s##");
      A("event", n, JSON.stringify(t))
    } else void 0 === t ? A("event", n, !1) : console.error("事件参数必须为String,Object类型,且参数长度不能超过255个字符"); else console.error("事件名称必须为String类型且不能超过255个字符")
  }, o.prototype.sendSession = function (n) {
    if ("" === n || !n) return void console.error("请传入从后台获取的session_key");
    J = n;
    var t = v();
    t.tp = "session", t.ct = "session", t.ev = "event", "" === tn ? wx.getSetting({
      success: function (n) {
        n.authSetting["scope.userInfo"] ? wx.getUserInfo({
          success: function (n) {
            t.ufo = _(n), K = y(n.userInfo.avatarUrl.split("/")), "" !== nn && (t.gid = nn), g(t)
          }
        }) : "" !== nn && (t.gid = nn, g(t))
      }
    }) : (t.ufo = tn, "" !== nn && (t.gid = nn), g(t))
  }, o.prototype.sendOpenid = function (n) {
    if ("" === n || !n || 28 !== n.length) return void console.error("openID不能为空");
    G = n, wx.setStorageSync("aldstat_op", n);
    var t = v();
    t.tp = "openid", t.ev = "event", t.ct = "openid", g(t)
  }, o.prototype.setOpenid = function (n) {
    "function" == typeof n && (gn = n, e())
  };
  return H.plugin ? {App: L, Page: O, MpvueApp: R, MpvuePage: k} : function (n) {
    !function () {
      var n = App, t = Page, e = Component;
      App = function (t) {
        M(t, "onLaunch", r), M(t, "onShow", i), M(t, "onHide", s), M(t, "onError", a), n(t)
      }, Page = function (n) {
        var e = n.onShareAppMessage;
        M(n, "onLoad", u), M(n, "onUnload", h), M(n, "onShow", c), M(n, "onHide", f), M(n, "onReachBottom", p), M(n, "onPullDownRefresh", l), void 0 !== e && null !== e && (n.onShareAppMessage = function (n) {
          if (void 0 !== e) {
            var t = e.call(this, n);
            return void 0 === t ? (t = {}, t.path = sn) : void 0 === t.path && (t.path = sn), d(t)
          }
        }), t(n)
      }, Component = function (n) {
        try {
          var t = n.methods.onShareAppMessage;
          M(n.methods, "onLoad", u), M(n.methods, "onUnload", h), M(n.methods, "onShow", c), M(n.methods, "onHide", f), M(n.methods, "onReachBottom", p), M(n.methods, "onPullDownRefresh", l), void 0 !== t && null !== t && (n.methods.onShareAppMessage = function (n) {
            if (void 0 !== t) {
              var e = t.call(this, n);
              return void 0 === e ? (e = {}, e.path = sn) : void 0 === e.path && (e.path = sn), d(e)
            }
          }), e(n)
        } catch (t) {
          e(n)
        }
      }
    }()
  }()
});
