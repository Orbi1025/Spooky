(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) i(l);
  new MutationObserver((l) => {
    for (const u of l)
      if (u.type === "childList")
        for (const g of u.addedNodes)
          g.tagName === "LINK" && g.rel === "modulepreload" && i(g);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(l) {
    const u = {};
    return (
      l.integrity && (u.integrity = l.integrity),
      l.referrerPolicy && (u.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (u.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (u.credentials = "omit")
        : (u.credentials = "same-origin"),
      u
    );
  }
  function i(l) {
    if (l.ep) return;
    l.ep = !0;
    const u = n(l);
    fetch(l.href, u);
  }
})();
var Ip =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Rp(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var zp = { exports: {} },
  eu = {},
  $p = { exports: {} },
  Le = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ml = Symbol.for("react.element"),
  ev = Symbol.for("react.portal"),
  tv = Symbol.for("react.fragment"),
  nv = Symbol.for("react.strict_mode"),
  rv = Symbol.for("react.profiler"),
  iv = Symbol.for("react.provider"),
  ov = Symbol.for("react.context"),
  sv = Symbol.for("react.forward_ref"),
  lv = Symbol.for("react.suspense"),
  av = Symbol.for("react.memo"),
  uv = Symbol.for("react.lazy"),
  Cd = Symbol.iterator;
function cv(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Cd && e[Cd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Fp = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Hp = Object.assign,
  Bp = {};
function ss(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bp),
    (this.updater = n || Fp);
}
ss.prototype.isReactComponent = {};
ss.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ss.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Wp() {}
Wp.prototype = ss.prototype;
function rf(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Bp),
    (this.updater = n || Fp);
}
var of = (rf.prototype = new Wp());
of.constructor = rf;
Hp(of, ss.prototype);
of.isPureReactComponent = !0;
var Ed = Array.isArray,
  Up = Object.prototype.hasOwnProperty,
  sf = { current: null },
  Vp = { key: !0, ref: !0, __self: !0, __source: !0 };
function qp(e, t, n) {
  var i,
    l = {},
    u = null,
    g = null;
  if (t != null)
    for (i in (t.ref !== void 0 && (g = t.ref),
    t.key !== void 0 && (u = "" + t.key),
    t))
      Up.call(t, i) && !Vp.hasOwnProperty(i) && (l[i] = t[i]);
  var _ = arguments.length - 2;
  if (_ === 1) l.children = n;
  else if (1 < _) {
    for (var x = Array(_), j = 0; j < _; j++) x[j] = arguments[j + 2];
    l.children = x;
  }
  if (e && e.defaultProps)
    for (i in ((_ = e.defaultProps), _)) l[i] === void 0 && (l[i] = _[i]);
  return {
    $$typeof: ml,
    type: e,
    key: u,
    ref: g,
    props: l,
    _owner: sf.current,
  };
}
function fv(e, t) {
  return {
    $$typeof: ml,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function lf(e) {
  return typeof e == "object" && e !== null && e.$$typeof === ml;
}
function dv(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Td = /\/+/g;
function $u(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? dv("" + e.key)
    : t.toString(36);
}
function ma(e, t, n, i, l) {
  var u = typeof e;
  (u === "undefined" || u === "boolean") && (e = null);
  var g = !1;
  if (e === null) g = !0;
  else
    switch (u) {
      case "string":
      case "number":
        g = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case ml:
          case ev:
            g = !0;
        }
    }
  if (g)
    return (
      (g = e),
      (l = l(g)),
      (e = i === "" ? "." + $u(g, 0) : i),
      Ed(l)
        ? ((n = ""),
          e != null && (n = e.replace(Td, "$&/") + "/"),
          ma(l, t, n, "", function (j) {
            return j;
          }))
        : l != null &&
          (lf(l) &&
            (l = fv(
              l,
              n +
                (!l.key || (g && g.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Td, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((g = 0), (i = i === "" ? "." : i + ":"), Ed(e)))
    for (var _ = 0; _ < e.length; _++) {
      u = e[_];
      var x = i + $u(u, _);
      g += ma(u, t, n, x, l);
    }
  else if (((x = cv(e)), typeof x == "function"))
    for (e = x.call(e), _ = 0; !(u = e.next()).done; )
      (u = u.value), (x = i + $u(u, _++)), (g += ma(u, t, n, x, l));
  else if (u === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return g;
}
function Zl(e, t, n) {
  if (e == null) return e;
  var i = [],
    l = 0;
  return (
    ma(e, i, "", "", function (u) {
      return t.call(n, u, l++);
    }),
    i
  );
}
function pv(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Kt = { current: null },
  va = { transition: null },
  hv = {
    ReactCurrentDispatcher: Kt,
    ReactCurrentBatchConfig: va,
    ReactCurrentOwner: sf,
  };
function Qp() {
  throw Error("act(...) is not supported in production builds of React.");
}
Le.Children = {
  map: Zl,
  forEach: function (e, t, n) {
    Zl(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Zl(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zl(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!lf(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
Le.Component = ss;
Le.Fragment = tv;
Le.Profiler = rv;
Le.PureComponent = rf;
Le.StrictMode = nv;
Le.Suspense = lv;
Le.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hv;
Le.act = Qp;
Le.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var i = Hp({}, e.props),
    l = e.key,
    u = e.ref,
    g = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((u = t.ref), (g = sf.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var _ = e.type.defaultProps;
    for (x in t)
      Up.call(t, x) &&
        !Vp.hasOwnProperty(x) &&
        (i[x] = t[x] === void 0 && _ !== void 0 ? _[x] : t[x]);
  }
  var x = arguments.length - 2;
  if (x === 1) i.children = n;
  else if (1 < x) {
    _ = Array(x);
    for (var j = 0; j < x; j++) _[j] = arguments[j + 2];
    i.children = _;
  }
  return { $$typeof: ml, type: e.type, key: l, ref: u, props: i, _owner: g };
};
Le.createContext = function (e) {
  return (
    (e = {
      $$typeof: ov,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: iv, _context: e }),
    (e.Consumer = e)
  );
};
Le.createElement = qp;
Le.createFactory = function (e) {
  var t = qp.bind(null, e);
  return (t.type = e), t;
};
Le.createRef = function () {
  return { current: null };
};
Le.forwardRef = function (e) {
  return { $$typeof: sv, render: e };
};
Le.isValidElement = lf;
Le.lazy = function (e) {
  return { $$typeof: uv, _payload: { _status: -1, _result: e }, _init: pv };
};
Le.memo = function (e, t) {
  return { $$typeof: av, type: e, compare: t === void 0 ? null : t };
};
Le.startTransition = function (e) {
  var t = va.transition;
  va.transition = {};
  try {
    e();
  } finally {
    va.transition = t;
  }
};
Le.unstable_act = Qp;
Le.useCallback = function (e, t) {
  return Kt.current.useCallback(e, t);
};
Le.useContext = function (e) {
  return Kt.current.useContext(e);
};
Le.useDebugValue = function () {};
Le.useDeferredValue = function (e) {
  return Kt.current.useDeferredValue(e);
};
Le.useEffect = function (e, t) {
  return Kt.current.useEffect(e, t);
};
Le.useId = function () {
  return Kt.current.useId();
};
Le.useImperativeHandle = function (e, t, n) {
  return Kt.current.useImperativeHandle(e, t, n);
};
Le.useInsertionEffect = function (e, t) {
  return Kt.current.useInsertionEffect(e, t);
};
Le.useLayoutEffect = function (e, t) {
  return Kt.current.useLayoutEffect(e, t);
};
Le.useMemo = function (e, t) {
  return Kt.current.useMemo(e, t);
};
Le.useReducer = function (e, t, n) {
  return Kt.current.useReducer(e, t, n);
};
Le.useRef = function (e) {
  return Kt.current.useRef(e);
};
Le.useState = function (e) {
  return Kt.current.useState(e);
};
Le.useSyncExternalStore = function (e, t, n) {
  return Kt.current.useSyncExternalStore(e, t, n);
};
Le.useTransition = function () {
  return Kt.current.useTransition();
};
Le.version = "18.3.1";
$p.exports = Le;
var zr = $p.exports;
const Ji = Rp(zr);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var gv = zr,
  mv = Symbol.for("react.element"),
  vv = Symbol.for("react.fragment"),
  yv = Object.prototype.hasOwnProperty,
  _v = gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  wv = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xp(e, t, n) {
  var i,
    l = {},
    u = null,
    g = null;
  n !== void 0 && (u = "" + n),
    t.key !== void 0 && (u = "" + t.key),
    t.ref !== void 0 && (g = t.ref);
  for (i in t) yv.call(t, i) && !wv.hasOwnProperty(i) && (l[i] = t[i]);
  if (e && e.defaultProps)
    for (i in ((t = e.defaultProps), t)) l[i] === void 0 && (l[i] = t[i]);
  return {
    $$typeof: mv,
    type: e,
    key: u,
    ref: g,
    props: l,
    _owner: _v.current,
  };
}
eu.Fragment = vv;
eu.jsx = Xp;
eu.jsxs = Xp;
zp.exports = eu;
var H = zp.exports,
  Yp = { exports: {} },
  vn = {},
  Kp = { exports: {} },
  Gp = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(te, de) {
    var D = te.length;
    te.push(de);
    e: for (; 0 < D; ) {
      var Te = (D - 1) >>> 1,
        Ve = te[Te];
      if (0 < l(Ve, de)) (te[Te] = de), (te[D] = Ve), (D = Te);
      else break e;
    }
  }
  function n(te) {
    return te.length === 0 ? null : te[0];
  }
  function i(te) {
    if (te.length === 0) return null;
    var de = te[0],
      D = te.pop();
    if (D !== de) {
      te[0] = D;
      e: for (var Te = 0, Ve = te.length, ft = Ve >>> 1; Te < ft; ) {
        var qe = 2 * (Te + 1) - 1,
          In = te[qe],
          lt = qe + 1,
          Jn = te[lt];
        if (0 > l(In, D))
          lt < Ve && 0 > l(Jn, In)
            ? ((te[Te] = Jn), (te[lt] = D), (Te = lt))
            : ((te[Te] = In), (te[qe] = D), (Te = qe));
        else if (lt < Ve && 0 > l(Jn, D))
          (te[Te] = Jn), (te[lt] = D), (Te = lt);
        else break e;
      }
    }
    return de;
  }
  function l(te, de) {
    var D = te.sortIndex - de.sortIndex;
    return D !== 0 ? D : te.id - de.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var u = performance;
    e.unstable_now = function () {
      return u.now();
    };
  } else {
    var g = Date,
      _ = g.now();
    e.unstable_now = function () {
      return g.now() - _;
    };
  }
  var x = [],
    j = [],
    W = 1,
    B = null,
    z = 3,
    K = !1,
    U = !1,
    V = !1,
    _e = typeof setTimeout == "function" ? setTimeout : null,
    C = typeof clearTimeout == "function" ? clearTimeout : null,
    E = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function A(te) {
    for (var de = n(j); de !== null; ) {
      if (de.callback === null) i(j);
      else if (de.startTime <= te)
        i(j), (de.sortIndex = de.expirationTime), t(x, de);
      else break;
      de = n(j);
    }
  }
  function Q(te) {
    if (((V = !1), A(te), !U))
      if (n(x) !== null) (U = !0), Zn(J);
      else {
        var de = n(j);
        de !== null && ht(Q, de.startTime - te);
      }
  }
  function J(te, de) {
    (U = !1), V && ((V = !1), C(ae), (ae = -1)), (K = !0);
    var D = z;
    try {
      for (
        A(de), B = n(x);
        B !== null && (!(B.expirationTime > de) || (te && !Ct()));

      ) {
        var Te = B.callback;
        if (typeof Te == "function") {
          (B.callback = null), (z = B.priorityLevel);
          var Ve = Te(B.expirationTime <= de);
          (de = e.unstable_now()),
            typeof Ve == "function" ? (B.callback = Ve) : B === n(x) && i(x),
            A(de);
        } else i(x);
        B = n(x);
      }
      if (B !== null) var ft = !0;
      else {
        var qe = n(j);
        qe !== null && ht(Q, qe.startTime - de), (ft = !1);
      }
      return ft;
    } finally {
      (B = null), (z = D), (K = !1);
    }
  }
  var ce = !1,
    c = null,
    ae = -1,
    ge = 5,
    Ee = -1;
  function Ct() {
    return !(e.unstable_now() - Ee < ge);
  }
  function wt() {
    if (c !== null) {
      var te = e.unstable_now();
      Ee = te;
      var de = !0;
      try {
        de = c(!0, te);
      } finally {
        de ? ke() : ((ce = !1), (c = null));
      }
    } else ce = !1;
  }
  var ke;
  if (typeof E == "function")
    ke = function () {
      E(wt);
    };
  else if (typeof MessageChannel < "u") {
    var Et = new MessageChannel(),
      _r = Et.port2;
    (Et.port1.onmessage = wt),
      (ke = function () {
        _r.postMessage(null);
      });
  } else
    ke = function () {
      _e(wt, 0);
    };
  function Zn(te) {
    (c = te), ce || ((ce = !0), ke());
  }
  function ht(te, de) {
    ae = _e(function () {
      te(e.unstable_now());
    }, de);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (te) {
      te.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      U || K || ((U = !0), Zn(J));
    }),
    (e.unstable_forceFrameRate = function (te) {
      0 > te || 125 < te
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (ge = 0 < te ? Math.floor(1e3 / te) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return z;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(x);
    }),
    (e.unstable_next = function (te) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var de = 3;
          break;
        default:
          de = z;
      }
      var D = z;
      z = de;
      try {
        return te();
      } finally {
        z = D;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (te, de) {
      switch (te) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          te = 3;
      }
      var D = z;
      z = te;
      try {
        return de();
      } finally {
        z = D;
      }
    }),
    (e.unstable_scheduleCallback = function (te, de, D) {
      var Te = e.unstable_now();
      switch (
        (typeof D == "object" && D !== null
          ? ((D = D.delay), (D = typeof D == "number" && 0 < D ? Te + D : Te))
          : (D = Te),
        te)
      ) {
        case 1:
          var Ve = -1;
          break;
        case 2:
          Ve = 250;
          break;
        case 5:
          Ve = 1073741823;
          break;
        case 4:
          Ve = 1e4;
          break;
        default:
          Ve = 5e3;
      }
      return (
        (Ve = D + Ve),
        (te = {
          id: W++,
          callback: de,
          priorityLevel: te,
          startTime: D,
          expirationTime: Ve,
          sortIndex: -1,
        }),
        D > Te
          ? ((te.sortIndex = D),
            t(j, te),
            n(x) === null &&
              te === n(j) &&
              (V ? (C(ae), (ae = -1)) : (V = !0), ht(Q, D - Te)))
          : ((te.sortIndex = Ve), t(x, te), U || K || ((U = !0), Zn(J))),
        te
      );
    }),
    (e.unstable_shouldYield = Ct),
    (e.unstable_wrapCallback = function (te) {
      var de = z;
      return function () {
        var D = z;
        z = de;
        try {
          return te.apply(this, arguments);
        } finally {
          z = D;
        }
      };
    });
})(Gp);
Kp.exports = Gp;
var xv = Kp.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sv = zr,
  mn = xv;
function Y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Zp = new Set(),
  Js = {};
function lo(e, t) {
  Jo(e, t), Jo(e + "Capture", t);
}
function Jo(e, t) {
  for (Js[e] = t, e = 0; e < t.length; e++) Zp.add(t[e]);
}
var $r = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  fc = Object.prototype.hasOwnProperty,
  kv =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Nd = {},
  bd = {};
function Cv(e) {
  return fc.call(bd, e)
    ? !0
    : fc.call(Nd, e)
    ? !1
    : kv.test(e)
    ? (bd[e] = !0)
    : ((Nd[e] = !0), !1);
}
function Ev(e, t, n, i) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return i
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Tv(e, t, n, i) {
  if (t === null || typeof t > "u" || Ev(e, t, n, i)) return !0;
  if (i) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Gt(e, t, n, i, l, u, g) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = i),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = u),
    (this.removeEmptyString = g);
}
var Dt = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Dt[e] = new Gt(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Dt[t] = new Gt(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Dt[e] = new Gt(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Dt[e] = new Gt(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Dt[e] = new Gt(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Dt[e] = new Gt(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Dt[e] = new Gt(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Dt[e] = new Gt(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Dt[e] = new Gt(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var af = /[\-:]([a-z])/g;
function uf(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(af, uf);
    Dt[t] = new Gt(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(af, uf);
    Dt[t] = new Gt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(af, uf);
  Dt[t] = new Gt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Dt[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Dt.xlinkHref = new Gt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Dt[e] = new Gt(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function cf(e, t, n, i) {
  var l = Dt.hasOwnProperty(t) ? Dt[t] : null;
  (l !== null
    ? l.type !== 0
    : i ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Tv(t, n, l, i) && (n = null),
    i || l === null
      ? Cv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (i = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))));
}
var Wr = Sv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Jl = Symbol.for("react.element"),
  Mo = Symbol.for("react.portal"),
  Io = Symbol.for("react.fragment"),
  ff = Symbol.for("react.strict_mode"),
  dc = Symbol.for("react.profiler"),
  Jp = Symbol.for("react.provider"),
  eh = Symbol.for("react.context"),
  df = Symbol.for("react.forward_ref"),
  pc = Symbol.for("react.suspense"),
  hc = Symbol.for("react.suspense_list"),
  pf = Symbol.for("react.memo"),
  di = Symbol.for("react.lazy"),
  th = Symbol.for("react.offscreen"),
  jd = Symbol.iterator;
function Ps(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (jd && e[jd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var rt = Object.assign,
  Fu;
function Fs(e) {
  if (Fu === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Fu = (t && t[1]) || "";
    }
  return (
    `
` +
    Fu +
    e
  );
}
var Hu = !1;
function Bu(e, t) {
  if (!e || Hu) return "";
  Hu = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (j) {
          var i = j;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (j) {
          i = j;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (j) {
        i = j;
      }
      e();
    }
  } catch (j) {
    if (j && i && typeof j.stack == "string") {
      for (
        var l = j.stack.split(`
`),
          u = i.stack.split(`
`),
          g = l.length - 1,
          _ = u.length - 1;
        1 <= g && 0 <= _ && l[g] !== u[_];

      )
        _--;
      for (; 1 <= g && 0 <= _; g--, _--)
        if (l[g] !== u[_]) {
          if (g !== 1 || _ !== 1)
            do
              if ((g--, _--, 0 > _ || l[g] !== u[_])) {
                var x =
                  `
` + l[g].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    x.includes("<anonymous>") &&
                    (x = x.replace("<anonymous>", e.displayName)),
                  x
                );
              }
            while (1 <= g && 0 <= _);
          break;
        }
    }
  } finally {
    (Hu = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Fs(e) : "";
}
function Nv(e) {
  switch (e.tag) {
    case 5:
      return Fs(e.type);
    case 16:
      return Fs("Lazy");
    case 13:
      return Fs("Suspense");
    case 19:
      return Fs("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Bu(e.type, !1)), e;
    case 11:
      return (e = Bu(e.type.render, !1)), e;
    case 1:
      return (e = Bu(e.type, !0)), e;
    default:
      return "";
  }
}
function gc(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Io:
      return "Fragment";
    case Mo:
      return "Portal";
    case dc:
      return "Profiler";
    case ff:
      return "StrictMode";
    case pc:
      return "Suspense";
    case hc:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case eh:
        return (e.displayName || "Context") + ".Consumer";
      case Jp:
        return (e._context.displayName || "Context") + ".Provider";
      case df:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case pf:
        return (
          (t = e.displayName || null), t !== null ? t : gc(e.type) || "Memo"
        );
      case di:
        (t = e._payload), (e = e._init);
        try {
          return gc(e(t));
        } catch {}
    }
  return null;
}
function bv(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return gc(t);
    case 8:
      return t === ff ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function Ti(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function nh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function jv(e) {
  var t = nh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    i = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      u = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (g) {
          (i = "" + g), u.call(this, g);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return i;
        },
        setValue: function (g) {
          i = "" + g;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function ea(e) {
  e._valueTracker || (e._valueTracker = jv(e));
}
function rh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    i = "";
  return (
    e && (i = nh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = i),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function ba(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function mc(e, t) {
  var n = t.checked;
  return rt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Od(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    i = t.checked != null ? t.checked : t.defaultChecked;
  (n = Ti(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: i,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ih(e, t) {
  (t = t.checked), t != null && cf(e, "checked", t, !1);
}
function vc(e, t) {
  ih(e, t);
  var n = Ti(t.value),
    i = t.type;
  if (n != null)
    i === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (i === "submit" || i === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? yc(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && yc(e, t.type, Ti(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Ad(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var i = t.type;
    if (
      !(
        (i !== "submit" && i !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function yc(e, t, n) {
  (t !== "number" || ba(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Hs = Array.isArray;
function Qo(e, t, n, i) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && i && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + Ti(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), i && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function _c(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(Y(91));
  return rt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Pd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(Y(92));
      if (Hs(n)) {
        if (1 < n.length) throw Error(Y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: Ti(n) };
}
function oh(e, t) {
  var n = Ti(t.value),
    i = Ti(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    i != null && (e.defaultValue = "" + i);
}
function Ld(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function sh(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function wc(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? sh(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var ta,
  lh = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, i, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, i, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        ta = ta || document.createElement("div"),
          ta.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = ta.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function el(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Us = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Ov = ["Webkit", "ms", "Moz", "O"];
Object.keys(Us).forEach(function (e) {
  Ov.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Us[t] = Us[e]);
  });
});
function ah(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Us.hasOwnProperty(e) && Us[e])
    ? ("" + t).trim()
    : t + "px";
}
function uh(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var i = n.indexOf("--") === 0,
        l = ah(n, t[n], i);
      n === "float" && (n = "cssFloat"), i ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Av = rt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function xc(e, t) {
  if (t) {
    if (Av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(Y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(Y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(Y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(Y(62));
  }
}
function Sc(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var kc = null;
function hf(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Cc = null,
  Xo = null,
  Yo = null;
function Dd(e) {
  if ((e = _l(e))) {
    if (typeof Cc != "function") throw Error(Y(280));
    var t = e.stateNode;
    t && ((t = ou(t)), Cc(e.stateNode, e.type, t));
  }
}
function ch(e) {
  Xo ? (Yo ? Yo.push(e) : (Yo = [e])) : (Xo = e);
}
function fh() {
  if (Xo) {
    var e = Xo,
      t = Yo;
    if (((Yo = Xo = null), Dd(e), t)) for (e = 0; e < t.length; e++) Dd(t[e]);
  }
}
function dh(e, t) {
  return e(t);
}
function ph() {}
var Wu = !1;
function hh(e, t, n) {
  if (Wu) return e(t, n);
  Wu = !0;
  try {
    return dh(e, t, n);
  } finally {
    (Wu = !1), (Xo !== null || Yo !== null) && (ph(), fh());
  }
}
function tl(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var i = ou(n);
  if (i === null) return null;
  n = i[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (i = !i.disabled) ||
        ((e = e.type),
        (i = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !i);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(Y(231, t, typeof n));
  return n;
}
var Ec = !1;
if ($r)
  try {
    var Ls = {};
    Object.defineProperty(Ls, "passive", {
      get: function () {
        Ec = !0;
      },
    }),
      window.addEventListener("test", Ls, Ls),
      window.removeEventListener("test", Ls, Ls);
  } catch {
    Ec = !1;
  }
function Pv(e, t, n, i, l, u, g, _, x) {
  var j = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, j);
  } catch (W) {
    this.onError(W);
  }
}
var Vs = !1,
  ja = null,
  Oa = !1,
  Tc = null,
  Lv = {
    onError: function (e) {
      (Vs = !0), (ja = e);
    },
  };
function Dv(e, t, n, i, l, u, g, _, x) {
  (Vs = !1), (ja = null), Pv.apply(Lv, arguments);
}
function Mv(e, t, n, i, l, u, g, _, x) {
  if ((Dv.apply(this, arguments), Vs)) {
    if (Vs) {
      var j = ja;
      (Vs = !1), (ja = null);
    } else throw Error(Y(198));
    Oa || ((Oa = !0), (Tc = j));
  }
}
function ao(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function gh(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Md(e) {
  if (ao(e) !== e) throw Error(Y(188));
}
function Iv(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ao(e)), t === null)) throw Error(Y(188));
    return t !== e ? null : e;
  }
  for (var n = e, i = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var u = l.alternate;
    if (u === null) {
      if (((i = l.return), i !== null)) {
        n = i;
        continue;
      }
      break;
    }
    if (l.child === u.child) {
      for (u = l.child; u; ) {
        if (u === n) return Md(l), e;
        if (u === i) return Md(l), t;
        u = u.sibling;
      }
      throw Error(Y(188));
    }
    if (n.return !== i.return) (n = l), (i = u);
    else {
      for (var g = !1, _ = l.child; _; ) {
        if (_ === n) {
          (g = !0), (n = l), (i = u);
          break;
        }
        if (_ === i) {
          (g = !0), (i = l), (n = u);
          break;
        }
        _ = _.sibling;
      }
      if (!g) {
        for (_ = u.child; _; ) {
          if (_ === n) {
            (g = !0), (n = u), (i = l);
            break;
          }
          if (_ === i) {
            (g = !0), (i = u), (n = l);
            break;
          }
          _ = _.sibling;
        }
        if (!g) throw Error(Y(189));
      }
    }
    if (n.alternate !== i) throw Error(Y(190));
  }
  if (n.tag !== 3) throw Error(Y(188));
  return n.stateNode.current === n ? e : t;
}
function mh(e) {
  return (e = Iv(e)), e !== null ? vh(e) : null;
}
function vh(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = vh(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var yh = mn.unstable_scheduleCallback,
  Id = mn.unstable_cancelCallback,
  Rv = mn.unstable_shouldYield,
  zv = mn.unstable_requestPaint,
  ct = mn.unstable_now,
  $v = mn.unstable_getCurrentPriorityLevel,
  gf = mn.unstable_ImmediatePriority,
  _h = mn.unstable_UserBlockingPriority,
  Aa = mn.unstable_NormalPriority,
  Fv = mn.unstable_LowPriority,
  wh = mn.unstable_IdlePriority,
  tu = null,
  vr = null;
function Hv(e) {
  if (vr && typeof vr.onCommitFiberRoot == "function")
    try {
      vr.onCommitFiberRoot(tu, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Yn = Math.clz32 ? Math.clz32 : Uv,
  Bv = Math.log,
  Wv = Math.LN2;
function Uv(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Bv(e) / Wv) | 0)) | 0;
}
var na = 64,
  ra = 4194304;
function Bs(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Pa(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var i = 0,
    l = e.suspendedLanes,
    u = e.pingedLanes,
    g = n & 268435455;
  if (g !== 0) {
    var _ = g & ~l;
    _ !== 0 ? (i = Bs(_)) : ((u &= g), u !== 0 && (i = Bs(u)));
  } else (g = n & ~l), g !== 0 ? (i = Bs(g)) : u !== 0 && (i = Bs(u));
  if (i === 0) return 0;
  if (
    t !== 0 &&
    t !== i &&
    !(t & l) &&
    ((l = i & -i), (u = t & -t), l >= u || (l === 16 && (u & 4194240) !== 0))
  )
    return t;
  if ((i & 4 && (i |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= i; 0 < t; )
      (n = 31 - Yn(t)), (l = 1 << n), (i |= e[n]), (t &= ~l);
  return i;
}
function Vv(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function qv(e, t) {
  for (
    var n = e.suspendedLanes,
      i = e.pingedLanes,
      l = e.expirationTimes,
      u = e.pendingLanes;
    0 < u;

  ) {
    var g = 31 - Yn(u),
      _ = 1 << g,
      x = l[g];
    x === -1
      ? (!(_ & n) || _ & i) && (l[g] = Vv(_, t))
      : x <= t && (e.expiredLanes |= _),
      (u &= ~_);
  }
}
function Nc(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function xh() {
  var e = na;
  return (na <<= 1), !(na & 4194240) && (na = 64), e;
}
function Uu(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function vl(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Yn(t)),
    (e[t] = n);
}
function Qv(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var i = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Yn(n),
      u = 1 << l;
    (t[l] = 0), (i[l] = -1), (e[l] = -1), (n &= ~u);
  }
}
function mf(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var i = 31 - Yn(n),
      l = 1 << i;
    (l & t) | (e[i] & t) && (e[i] |= t), (n &= ~l);
  }
}
var Ue = 0;
function Sh(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var kh,
  vf,
  Ch,
  Eh,
  Th,
  bc = !1,
  ia = [],
  yi = null,
  _i = null,
  wi = null,
  nl = new Map(),
  rl = new Map(),
  hi = [],
  Xv =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Rd(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      yi = null;
      break;
    case "dragenter":
    case "dragleave":
      _i = null;
      break;
    case "mouseover":
    case "mouseout":
      wi = null;
      break;
    case "pointerover":
    case "pointerout":
      nl.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      rl.delete(t.pointerId);
  }
}
function Ds(e, t, n, i, l, u) {
  return e === null || e.nativeEvent !== u
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: i,
        nativeEvent: u,
        targetContainers: [l],
      }),
      t !== null && ((t = _l(t)), t !== null && vf(t)),
      e)
    : ((e.eventSystemFlags |= i),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function Yv(e, t, n, i, l) {
  switch (t) {
    case "focusin":
      return (yi = Ds(yi, e, t, n, i, l)), !0;
    case "dragenter":
      return (_i = Ds(_i, e, t, n, i, l)), !0;
    case "mouseover":
      return (wi = Ds(wi, e, t, n, i, l)), !0;
    case "pointerover":
      var u = l.pointerId;
      return nl.set(u, Ds(nl.get(u) || null, e, t, n, i, l)), !0;
    case "gotpointercapture":
      return (
        (u = l.pointerId), rl.set(u, Ds(rl.get(u) || null, e, t, n, i, l)), !0
      );
  }
  return !1;
}
function Nh(e) {
  var t = Ki(e.target);
  if (t !== null) {
    var n = ao(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = gh(n)), t !== null)) {
          (e.blockedOn = t),
            Th(e.priority, function () {
              Ch(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function ya(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = jc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var i = new n.constructor(n.type, n);
      (kc = i), n.target.dispatchEvent(i), (kc = null);
    } else return (t = _l(n)), t !== null && vf(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function zd(e, t, n) {
  ya(e) && n.delete(t);
}
function Kv() {
  (bc = !1),
    yi !== null && ya(yi) && (yi = null),
    _i !== null && ya(_i) && (_i = null),
    wi !== null && ya(wi) && (wi = null),
    nl.forEach(zd),
    rl.forEach(zd);
}
function Ms(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    bc ||
      ((bc = !0),
      mn.unstable_scheduleCallback(mn.unstable_NormalPriority, Kv)));
}
function il(e) {
  function t(l) {
    return Ms(l, e);
  }
  if (0 < ia.length) {
    Ms(ia[0], e);
    for (var n = 1; n < ia.length; n++) {
      var i = ia[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
  }
  for (
    yi !== null && Ms(yi, e),
      _i !== null && Ms(_i, e),
      wi !== null && Ms(wi, e),
      nl.forEach(t),
      rl.forEach(t),
      n = 0;
    n < hi.length;
    n++
  )
    (i = hi[n]), i.blockedOn === e && (i.blockedOn = null);
  for (; 0 < hi.length && ((n = hi[0]), n.blockedOn === null); )
    Nh(n), n.blockedOn === null && hi.shift();
}
var Ko = Wr.ReactCurrentBatchConfig,
  La = !0;
function Gv(e, t, n, i) {
  var l = Ue,
    u = Ko.transition;
  Ko.transition = null;
  try {
    (Ue = 1), yf(e, t, n, i);
  } finally {
    (Ue = l), (Ko.transition = u);
  }
}
function Zv(e, t, n, i) {
  var l = Ue,
    u = Ko.transition;
  Ko.transition = null;
  try {
    (Ue = 4), yf(e, t, n, i);
  } finally {
    (Ue = l), (Ko.transition = u);
  }
}
function yf(e, t, n, i) {
  if (La) {
    var l = jc(e, t, n, i);
    if (l === null) ec(e, t, i, Da, n), Rd(e, i);
    else if (Yv(l, e, t, n, i)) i.stopPropagation();
    else if ((Rd(e, i), t & 4 && -1 < Xv.indexOf(e))) {
      for (; l !== null; ) {
        var u = _l(l);
        if (
          (u !== null && kh(u),
          (u = jc(e, t, n, i)),
          u === null && ec(e, t, i, Da, n),
          u === l)
        )
          break;
        l = u;
      }
      l !== null && i.stopPropagation();
    } else ec(e, t, i, null, n);
  }
}
var Da = null;
function jc(e, t, n, i) {
  if (((Da = null), (e = hf(i)), (e = Ki(e)), e !== null))
    if (((t = ao(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = gh(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Da = e), null;
}
function bh(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($v()) {
        case gf:
          return 1;
        case _h:
          return 4;
        case Aa:
        case Fv:
          return 16;
        case wh:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var mi = null,
  _f = null,
  _a = null;
function jh() {
  if (_a) return _a;
  var e,
    t = _f,
    n = t.length,
    i,
    l = "value" in mi ? mi.value : mi.textContent,
    u = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var g = n - e;
  for (i = 1; i <= g && t[n - i] === l[u - i]; i++);
  return (_a = l.slice(e, 1 < i ? 1 - i : void 0));
}
function wa(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function oa() {
  return !0;
}
function $d() {
  return !1;
}
function yn(e) {
  function t(n, i, l, u, g) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = i),
      (this.nativeEvent = u),
      (this.target = g),
      (this.currentTarget = null);
    for (var _ in e)
      e.hasOwnProperty(_) && ((n = e[_]), (this[_] = n ? n(u) : u[_]));
    return (
      (this.isDefaultPrevented = (
        u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1
      )
        ? oa
        : $d),
      (this.isPropagationStopped = $d),
      this
    );
  }
  return (
    rt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = oa));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = oa));
      },
      persist: function () {},
      isPersistent: oa,
    }),
    t
  );
}
var ls = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  wf = yn(ls),
  yl = rt({}, ls, { view: 0, detail: 0 }),
  Jv = yn(yl),
  Vu,
  qu,
  Is,
  nu = rt({}, yl, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: xf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Is &&
            (Is && e.type === "mousemove"
              ? ((Vu = e.screenX - Is.screenX), (qu = e.screenY - Is.screenY))
              : (qu = Vu = 0),
            (Is = e)),
          Vu);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : qu;
    },
  }),
  Fd = yn(nu),
  ey = rt({}, nu, { dataTransfer: 0 }),
  ty = yn(ey),
  ny = rt({}, yl, { relatedTarget: 0 }),
  Qu = yn(ny),
  ry = rt({}, ls, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  iy = yn(ry),
  oy = rt({}, ls, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  sy = yn(oy),
  ly = rt({}, ls, { data: 0 }),
  Hd = yn(ly),
  ay = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  uy = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  cy = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function fy(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = cy[e]) ? !!t[e] : !1;
}
function xf() {
  return fy;
}
var dy = rt({}, yl, {
    key: function (e) {
      if (e.key) {
        var t = ay[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = wa(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? uy[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: xf,
    charCode: function (e) {
      return e.type === "keypress" ? wa(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? wa(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  py = yn(dy),
  hy = rt({}, nu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Bd = yn(hy),
  gy = rt({}, yl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: xf,
  }),
  my = yn(gy),
  vy = rt({}, ls, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  yy = yn(vy),
  _y = rt({}, nu, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  wy = yn(_y),
  xy = [9, 13, 27, 32],
  Sf = $r && "CompositionEvent" in window,
  qs = null;
$r && "documentMode" in document && (qs = document.documentMode);
var Sy = $r && "TextEvent" in window && !qs,
  Oh = $r && (!Sf || (qs && 8 < qs && 11 >= qs)),
  Wd = " ",
  Ud = !1;
function Ah(e, t) {
  switch (e) {
    case "keyup":
      return xy.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function Ph(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ro = !1;
function ky(e, t) {
  switch (e) {
    case "compositionend":
      return Ph(t);
    case "keypress":
      return t.which !== 32 ? null : ((Ud = !0), Wd);
    case "textInput":
      return (e = t.data), e === Wd && Ud ? null : e;
    default:
      return null;
  }
}
function Cy(e, t) {
  if (Ro)
    return e === "compositionend" || (!Sf && Ah(e, t))
      ? ((e = jh()), (_a = _f = mi = null), (Ro = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Oh && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Ey = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function Vd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Ey[e.type] : t === "textarea";
}
function Lh(e, t, n, i) {
  ch(i),
    (t = Ma(t, "onChange")),
    0 < t.length &&
      ((n = new wf("onChange", "change", null, n, i)),
      e.push({ event: n, listeners: t }));
}
var Qs = null,
  ol = null;
function Ty(e) {
  Uh(e, 0);
}
function ru(e) {
  var t = Fo(e);
  if (rh(t)) return e;
}
function Ny(e, t) {
  if (e === "change") return t;
}
var Dh = !1;
if ($r) {
  var Xu;
  if ($r) {
    var Yu = "oninput" in document;
    if (!Yu) {
      var qd = document.createElement("div");
      qd.setAttribute("oninput", "return;"),
        (Yu = typeof qd.oninput == "function");
    }
    Xu = Yu;
  } else Xu = !1;
  Dh = Xu && (!document.documentMode || 9 < document.documentMode);
}
function Qd() {
  Qs && (Qs.detachEvent("onpropertychange", Mh), (ol = Qs = null));
}
function Mh(e) {
  if (e.propertyName === "value" && ru(ol)) {
    var t = [];
    Lh(t, ol, e, hf(e)), hh(Ty, t);
  }
}
function by(e, t, n) {
  e === "focusin"
    ? (Qd(), (Qs = t), (ol = n), Qs.attachEvent("onpropertychange", Mh))
    : e === "focusout" && Qd();
}
function jy(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return ru(ol);
}
function Oy(e, t) {
  if (e === "click") return ru(t);
}
function Ay(e, t) {
  if (e === "input" || e === "change") return ru(t);
}
function Py(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Gn = typeof Object.is == "function" ? Object.is : Py;
function sl(e, t) {
  if (Gn(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    i = Object.keys(t);
  if (n.length !== i.length) return !1;
  for (i = 0; i < n.length; i++) {
    var l = n[i];
    if (!fc.call(t, l) || !Gn(e[l], t[l])) return !1;
  }
  return !0;
}
function Xd(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Yd(e, t) {
  var n = Xd(e);
  e = 0;
  for (var i; n; ) {
    if (n.nodeType === 3) {
      if (((i = e + n.textContent.length), e <= t && i >= t))
        return { node: n, offset: t - e };
      e = i;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = Xd(n);
  }
}
function Ih(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Ih(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Rh() {
  for (var e = window, t = ba(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = ba(e.document);
  }
  return t;
}
function kf(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Ly(e) {
  var t = Rh(),
    n = e.focusedElem,
    i = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ih(n.ownerDocument.documentElement, n)
  ) {
    if (i !== null && kf(n)) {
      if (
        ((t = i.start),
        (e = i.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          u = Math.min(i.start, l);
        (i = i.end === void 0 ? u : Math.min(i.end, l)),
          !e.extend && u > i && ((l = i), (i = u), (u = l)),
          (l = Yd(n, u));
        var g = Yd(n, i);
        l &&
          g &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== g.node ||
            e.focusOffset !== g.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          u > i
            ? (e.addRange(t), e.extend(g.node, g.offset))
            : (t.setEnd(g.node, g.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Dy = $r && "documentMode" in document && 11 >= document.documentMode,
  zo = null,
  Oc = null,
  Xs = null,
  Ac = !1;
function Kd(e, t, n) {
  var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Ac ||
    zo == null ||
    zo !== ba(i) ||
    ((i = zo),
    "selectionStart" in i && kf(i)
      ? (i = { start: i.selectionStart, end: i.selectionEnd })
      : ((i = (
          (i.ownerDocument && i.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (i = {
          anchorNode: i.anchorNode,
          anchorOffset: i.anchorOffset,
          focusNode: i.focusNode,
          focusOffset: i.focusOffset,
        })),
    (Xs && sl(Xs, i)) ||
      ((Xs = i),
      (i = Ma(Oc, "onSelect")),
      0 < i.length &&
        ((t = new wf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: i }),
        (t.target = zo))));
}
function sa(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var $o = {
    animationend: sa("Animation", "AnimationEnd"),
    animationiteration: sa("Animation", "AnimationIteration"),
    animationstart: sa("Animation", "AnimationStart"),
    transitionend: sa("Transition", "TransitionEnd"),
  },
  Ku = {},
  zh = {};
$r &&
  ((zh = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete $o.animationend.animation,
    delete $o.animationiteration.animation,
    delete $o.animationstart.animation),
  "TransitionEvent" in window || delete $o.transitionend.transition);
function iu(e) {
  if (Ku[e]) return Ku[e];
  if (!$o[e]) return e;
  var t = $o[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in zh) return (Ku[e] = t[n]);
  return e;
}
var $h = iu("animationend"),
  Fh = iu("animationiteration"),
  Hh = iu("animationstart"),
  Bh = iu("transitionend"),
  Wh = new Map(),
  Gd =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function bi(e, t) {
  Wh.set(e, t), lo(t, [e]);
}
for (var Gu = 0; Gu < Gd.length; Gu++) {
  var Zu = Gd[Gu],
    My = Zu.toLowerCase(),
    Iy = Zu[0].toUpperCase() + Zu.slice(1);
  bi(My, "on" + Iy);
}
bi($h, "onAnimationEnd");
bi(Fh, "onAnimationIteration");
bi(Hh, "onAnimationStart");
bi("dblclick", "onDoubleClick");
bi("focusin", "onFocus");
bi("focusout", "onBlur");
bi(Bh, "onTransitionEnd");
Jo("onMouseEnter", ["mouseout", "mouseover"]);
Jo("onMouseLeave", ["mouseout", "mouseover"]);
Jo("onPointerEnter", ["pointerout", "pointerover"]);
Jo("onPointerLeave", ["pointerout", "pointerover"]);
lo(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
lo(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
lo("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
lo(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
lo(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
lo(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Ws =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Ry = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ws));
function Zd(e, t, n) {
  var i = e.type || "unknown-event";
  (e.currentTarget = n), Mv(i, t, void 0, e), (e.currentTarget = null);
}
function Uh(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var i = e[n],
      l = i.event;
    i = i.listeners;
    e: {
      var u = void 0;
      if (t)
        for (var g = i.length - 1; 0 <= g; g--) {
          var _ = i[g],
            x = _.instance,
            j = _.currentTarget;
          if (((_ = _.listener), x !== u && l.isPropagationStopped())) break e;
          Zd(l, _, j), (u = x);
        }
      else
        for (g = 0; g < i.length; g++) {
          if (
            ((_ = i[g]),
            (x = _.instance),
            (j = _.currentTarget),
            (_ = _.listener),
            x !== u && l.isPropagationStopped())
          )
            break e;
          Zd(l, _, j), (u = x);
        }
    }
  }
  if (Oa) throw ((e = Tc), (Oa = !1), (Tc = null), e);
}
function Ze(e, t) {
  var n = t[Ic];
  n === void 0 && (n = t[Ic] = new Set());
  var i = e + "__bubble";
  n.has(i) || (Vh(t, e, 2, !1), n.add(i));
}
function Ju(e, t, n) {
  var i = 0;
  t && (i |= 4), Vh(n, e, i, t);
}
var la = "_reactListening" + Math.random().toString(36).slice(2);
function ll(e) {
  if (!e[la]) {
    (e[la] = !0),
      Zp.forEach(function (n) {
        n !== "selectionchange" && (Ry.has(n) || Ju(n, !1, e), Ju(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[la] || ((t[la] = !0), Ju("selectionchange", !1, t));
  }
}
function Vh(e, t, n, i) {
  switch (bh(t)) {
    case 1:
      var l = Gv;
      break;
    case 4:
      l = Zv;
      break;
    default:
      l = yf;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !Ec ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    i
      ? l !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: l })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, { passive: l })
      : e.addEventListener(t, n, !1);
}
function ec(e, t, n, i, l) {
  var u = i;
  if (!(t & 1) && !(t & 2) && i !== null)
    e: for (;;) {
      if (i === null) return;
      var g = i.tag;
      if (g === 3 || g === 4) {
        var _ = i.stateNode.containerInfo;
        if (_ === l || (_.nodeType === 8 && _.parentNode === l)) break;
        if (g === 4)
          for (g = i.return; g !== null; ) {
            var x = g.tag;
            if (
              (x === 3 || x === 4) &&
              ((x = g.stateNode.containerInfo),
              x === l || (x.nodeType === 8 && x.parentNode === l))
            )
              return;
            g = g.return;
          }
        for (; _ !== null; ) {
          if (((g = Ki(_)), g === null)) return;
          if (((x = g.tag), x === 5 || x === 6)) {
            i = u = g;
            continue e;
          }
          _ = _.parentNode;
        }
      }
      i = i.return;
    }
  hh(function () {
    var j = u,
      W = hf(n),
      B = [];
    e: {
      var z = Wh.get(e);
      if (z !== void 0) {
        var K = wf,
          U = e;
        switch (e) {
          case "keypress":
            if (wa(n) === 0) break e;
          case "keydown":
          case "keyup":
            K = py;
            break;
          case "focusin":
            (U = "focus"), (K = Qu);
            break;
          case "focusout":
            (U = "blur"), (K = Qu);
            break;
          case "beforeblur":
          case "afterblur":
            K = Qu;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            K = Fd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            K = ty;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            K = my;
            break;
          case $h:
          case Fh:
          case Hh:
            K = iy;
            break;
          case Bh:
            K = yy;
            break;
          case "scroll":
            K = Jv;
            break;
          case "wheel":
            K = wy;
            break;
          case "copy":
          case "cut":
          case "paste":
            K = sy;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            K = Bd;
        }
        var V = (t & 4) !== 0,
          _e = !V && e === "scroll",
          C = V ? (z !== null ? z + "Capture" : null) : z;
        V = [];
        for (var E = j, A; E !== null; ) {
          A = E;
          var Q = A.stateNode;
          if (
            (A.tag === 5 &&
              Q !== null &&
              ((A = Q),
              C !== null && ((Q = tl(E, C)), Q != null && V.push(al(E, Q, A)))),
            _e)
          )
            break;
          E = E.return;
        }
        0 < V.length &&
          ((z = new K(z, U, null, n, W)), B.push({ event: z, listeners: V }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((z = e === "mouseover" || e === "pointerover"),
          (K = e === "mouseout" || e === "pointerout"),
          z &&
            n !== kc &&
            (U = n.relatedTarget || n.fromElement) &&
            (Ki(U) || U[Fr]))
        )
          break e;
        if (
          (K || z) &&
          ((z =
            W.window === W
              ? W
              : (z = W.ownerDocument)
              ? z.defaultView || z.parentWindow
              : window),
          K
            ? ((U = n.relatedTarget || n.toElement),
              (K = j),
              (U = U ? Ki(U) : null),
              U !== null &&
                ((_e = ao(U)), U !== _e || (U.tag !== 5 && U.tag !== 6)) &&
                (U = null))
            : ((K = null), (U = j)),
          K !== U)
        ) {
          if (
            ((V = Fd),
            (Q = "onMouseLeave"),
            (C = "onMouseEnter"),
            (E = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((V = Bd),
              (Q = "onPointerLeave"),
              (C = "onPointerEnter"),
              (E = "pointer")),
            (_e = K == null ? z : Fo(K)),
            (A = U == null ? z : Fo(U)),
            (z = new V(Q, E + "leave", K, n, W)),
            (z.target = _e),
            (z.relatedTarget = A),
            (Q = null),
            Ki(W) === j &&
              ((V = new V(C, E + "enter", U, n, W)),
              (V.target = A),
              (V.relatedTarget = _e),
              (Q = V)),
            (_e = Q),
            K && U)
          )
            t: {
              for (V = K, C = U, E = 0, A = V; A; A = Do(A)) E++;
              for (A = 0, Q = C; Q; Q = Do(Q)) A++;
              for (; 0 < E - A; ) (V = Do(V)), E--;
              for (; 0 < A - E; ) (C = Do(C)), A--;
              for (; E--; ) {
                if (V === C || (C !== null && V === C.alternate)) break t;
                (V = Do(V)), (C = Do(C));
              }
              V = null;
            }
          else V = null;
          K !== null && Jd(B, z, K, V, !1),
            U !== null && _e !== null && Jd(B, _e, U, V, !0);
        }
      }
      e: {
        if (
          ((z = j ? Fo(j) : window),
          (K = z.nodeName && z.nodeName.toLowerCase()),
          K === "select" || (K === "input" && z.type === "file"))
        )
          var J = Ny;
        else if (Vd(z))
          if (Dh) J = Ay;
          else {
            J = jy;
            var ce = by;
          }
        else
          (K = z.nodeName) &&
            K.toLowerCase() === "input" &&
            (z.type === "checkbox" || z.type === "radio") &&
            (J = Oy);
        if (J && (J = J(e, j))) {
          Lh(B, J, n, W);
          break e;
        }
        ce && ce(e, z, j),
          e === "focusout" &&
            (ce = z._wrapperState) &&
            ce.controlled &&
            z.type === "number" &&
            yc(z, "number", z.value);
      }
      switch (((ce = j ? Fo(j) : window), e)) {
        case "focusin":
          (Vd(ce) || ce.contentEditable === "true") &&
            ((zo = ce), (Oc = j), (Xs = null));
          break;
        case "focusout":
          Xs = Oc = zo = null;
          break;
        case "mousedown":
          Ac = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Ac = !1), Kd(B, n, W);
          break;
        case "selectionchange":
          if (Dy) break;
        case "keydown":
        case "keyup":
          Kd(B, n, W);
      }
      var c;
      if (Sf)
        e: {
          switch (e) {
            case "compositionstart":
              var ae = "onCompositionStart";
              break e;
            case "compositionend":
              ae = "onCompositionEnd";
              break e;
            case "compositionupdate":
              ae = "onCompositionUpdate";
              break e;
          }
          ae = void 0;
        }
      else
        Ro
          ? Ah(e, n) && (ae = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (ae = "onCompositionStart");
      ae &&
        (Oh &&
          n.locale !== "ko" &&
          (Ro || ae !== "onCompositionStart"
            ? ae === "onCompositionEnd" && Ro && (c = jh())
            : ((mi = W),
              (_f = "value" in mi ? mi.value : mi.textContent),
              (Ro = !0))),
        (ce = Ma(j, ae)),
        0 < ce.length &&
          ((ae = new Hd(ae, e, null, n, W)),
          B.push({ event: ae, listeners: ce }),
          c ? (ae.data = c) : ((c = Ph(n)), c !== null && (ae.data = c)))),
        (c = Sy ? ky(e, n) : Cy(e, n)) &&
          ((j = Ma(j, "onBeforeInput")),
          0 < j.length &&
            ((W = new Hd("onBeforeInput", "beforeinput", null, n, W)),
            B.push({ event: W, listeners: j }),
            (W.data = c)));
    }
    Uh(B, t);
  });
}
function al(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function Ma(e, t) {
  for (var n = t + "Capture", i = []; e !== null; ) {
    var l = e,
      u = l.stateNode;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      (u = tl(e, n)),
      u != null && i.unshift(al(e, u, l)),
      (u = tl(e, t)),
      u != null && i.push(al(e, u, l))),
      (e = e.return);
  }
  return i;
}
function Do(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Jd(e, t, n, i, l) {
  for (var u = t._reactName, g = []; n !== null && n !== i; ) {
    var _ = n,
      x = _.alternate,
      j = _.stateNode;
    if (x !== null && x === i) break;
    _.tag === 5 &&
      j !== null &&
      ((_ = j),
      l
        ? ((x = tl(n, u)), x != null && g.unshift(al(n, x, _)))
        : l || ((x = tl(n, u)), x != null && g.push(al(n, x, _)))),
      (n = n.return);
  }
  g.length !== 0 && e.push({ event: t, listeners: g });
}
var zy = /\r\n?/g,
  $y = /\u0000|\uFFFD/g;
function ep(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      zy,
      `
`
    )
    .replace($y, "");
}
function aa(e, t, n) {
  if (((t = ep(t)), ep(e) !== t && n)) throw Error(Y(425));
}
function Ia() {}
var Pc = null,
  Lc = null;
function Dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Mc = typeof setTimeout == "function" ? setTimeout : void 0,
  Fy = typeof clearTimeout == "function" ? clearTimeout : void 0,
  tp = typeof Promise == "function" ? Promise : void 0,
  Hy =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof tp < "u"
      ? function (e) {
          return tp.resolve(null).then(e).catch(By);
        }
      : Mc;
function By(e) {
  setTimeout(function () {
    throw e;
  });
}
function tc(e, t) {
  var n = t,
    i = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (i === 0) {
          e.removeChild(l), il(t);
          return;
        }
        i--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || i++;
    n = l;
  } while (n);
  il(t);
}
function xi(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function np(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var as = Math.random().toString(36).slice(2),
  mr = "__reactFiber$" + as,
  ul = "__reactProps$" + as,
  Fr = "__reactContainer$" + as,
  Ic = "__reactEvents$" + as,
  Wy = "__reactListeners$" + as,
  Uy = "__reactHandles$" + as;
function Ki(e) {
  var t = e[mr];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Fr] || n[mr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = np(e); e !== null; ) {
          if ((n = e[mr])) return n;
          e = np(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function _l(e) {
  return (
    (e = e[mr] || e[Fr]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Fo(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(Y(33));
}
function ou(e) {
  return e[ul] || null;
}
var Rc = [],
  Ho = -1;
function ji(e) {
  return { current: e };
}
function Je(e) {
  0 > Ho || ((e.current = Rc[Ho]), (Rc[Ho] = null), Ho--);
}
function Ge(e, t) {
  Ho++, (Rc[Ho] = e.current), (e.current = t);
}
var Ni = {},
  Ht = ji(Ni),
  rn = ji(!1),
  no = Ni;
function es(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Ni;
  var i = e.stateNode;
  if (i && i.__reactInternalMemoizedUnmaskedChildContext === t)
    return i.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    u;
  for (u in n) l[u] = t[u];
  return (
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function on(e) {
  return (e = e.childContextTypes), e != null;
}
function Ra() {
  Je(rn), Je(Ht);
}
function rp(e, t, n) {
  if (Ht.current !== Ni) throw Error(Y(168));
  Ge(Ht, t), Ge(rn, n);
}
function qh(e, t, n) {
  var i = e.stateNode;
  if (((t = t.childContextTypes), typeof i.getChildContext != "function"))
    return n;
  i = i.getChildContext();
  for (var l in i) if (!(l in t)) throw Error(Y(108, bv(e) || "Unknown", l));
  return rt({}, n, i);
}
function za(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Ni),
    (no = Ht.current),
    Ge(Ht, e),
    Ge(rn, rn.current),
    !0
  );
}
function ip(e, t, n) {
  var i = e.stateNode;
  if (!i) throw Error(Y(169));
  n
    ? ((e = qh(e, t, no)),
      (i.__reactInternalMemoizedMergedChildContext = e),
      Je(rn),
      Je(Ht),
      Ge(Ht, e))
    : Je(rn),
    Ge(rn, n);
}
var Dr = null,
  su = !1,
  nc = !1;
function Qh(e) {
  Dr === null ? (Dr = [e]) : Dr.push(e);
}
function Vy(e) {
  (su = !0), Qh(e);
}
function Oi() {
  if (!nc && Dr !== null) {
    nc = !0;
    var e = 0,
      t = Ue;
    try {
      var n = Dr;
      for (Ue = 1; e < n.length; e++) {
        var i = n[e];
        do i = i(!0);
        while (i !== null);
      }
      (Dr = null), (su = !1);
    } catch (l) {
      throw (Dr !== null && (Dr = Dr.slice(e + 1)), yh(gf, Oi), l);
    } finally {
      (Ue = t), (nc = !1);
    }
  }
  return null;
}
var Bo = [],
  Wo = 0,
  $a = null,
  Fa = 0,
  On = [],
  An = 0,
  ro = null,
  Mr = 1,
  Ir = "";
function Xi(e, t) {
  (Bo[Wo++] = Fa), (Bo[Wo++] = $a), ($a = e), (Fa = t);
}
function Xh(e, t, n) {
  (On[An++] = Mr), (On[An++] = Ir), (On[An++] = ro), (ro = e);
  var i = Mr;
  e = Ir;
  var l = 32 - Yn(i) - 1;
  (i &= ~(1 << l)), (n += 1);
  var u = 32 - Yn(t) + l;
  if (30 < u) {
    var g = l - (l % 5);
    (u = (i & ((1 << g) - 1)).toString(32)),
      (i >>= g),
      (l -= g),
      (Mr = (1 << (32 - Yn(t) + l)) | (n << l) | i),
      (Ir = u + e);
  } else (Mr = (1 << u) | (n << l) | i), (Ir = e);
}
function Cf(e) {
  e.return !== null && (Xi(e, 1), Xh(e, 1, 0));
}
function Ef(e) {
  for (; e === $a; )
    ($a = Bo[--Wo]), (Bo[Wo] = null), (Fa = Bo[--Wo]), (Bo[Wo] = null);
  for (; e === ro; )
    (ro = On[--An]),
      (On[An] = null),
      (Ir = On[--An]),
      (On[An] = null),
      (Mr = On[--An]),
      (On[An] = null);
}
var gn = null,
  hn = null,
  et = !1,
  Xn = null;
function Yh(e, t) {
  var n = Pn(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function op(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (gn = e), (hn = xi(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (gn = e), (hn = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ro !== null ? { id: Mr, overflow: Ir } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Pn(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (gn = e),
            (hn = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function zc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function $c(e) {
  if (et) {
    var t = hn;
    if (t) {
      var n = t;
      if (!op(e, t)) {
        if (zc(e)) throw Error(Y(418));
        t = xi(n.nextSibling);
        var i = gn;
        t && op(e, t)
          ? Yh(i, n)
          : ((e.flags = (e.flags & -4097) | 2), (et = !1), (gn = e));
      }
    } else {
      if (zc(e)) throw Error(Y(418));
      (e.flags = (e.flags & -4097) | 2), (et = !1), (gn = e);
    }
  }
}
function sp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  gn = e;
}
function ua(e) {
  if (e !== gn) return !1;
  if (!et) return sp(e), (et = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Dc(e.type, e.memoizedProps))),
    t && (t = hn))
  ) {
    if (zc(e)) throw (Kh(), Error(Y(418)));
    for (; t; ) Yh(e, t), (t = xi(t.nextSibling));
  }
  if ((sp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(Y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              hn = xi(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      hn = null;
    }
  } else hn = gn ? xi(e.stateNode.nextSibling) : null;
  return !0;
}
function Kh() {
  for (var e = hn; e; ) e = xi(e.nextSibling);
}
function ts() {
  (hn = gn = null), (et = !1);
}
function Tf(e) {
  Xn === null ? (Xn = [e]) : Xn.push(e);
}
var qy = Wr.ReactCurrentBatchConfig;
function Rs(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(Y(309));
        var i = n.stateNode;
      }
      if (!i) throw Error(Y(147, e));
      var l = i,
        u = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === u
        ? t.ref
        : ((t = function (g) {
            var _ = l.refs;
            g === null ? delete _[u] : (_[u] = g);
          }),
          (t._stringRef = u),
          t);
    }
    if (typeof e != "string") throw Error(Y(284));
    if (!n._owner) throw Error(Y(290, e));
  }
  return e;
}
function ca(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      Y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function lp(e) {
  var t = e._init;
  return t(e._payload);
}
function Gh(e) {
  function t(C, E) {
    if (e) {
      var A = C.deletions;
      A === null ? ((C.deletions = [E]), (C.flags |= 16)) : A.push(E);
    }
  }
  function n(C, E) {
    if (!e) return null;
    for (; E !== null; ) t(C, E), (E = E.sibling);
    return null;
  }
  function i(C, E) {
    for (C = new Map(); E !== null; )
      E.key !== null ? C.set(E.key, E) : C.set(E.index, E), (E = E.sibling);
    return C;
  }
  function l(C, E) {
    return (C = Ei(C, E)), (C.index = 0), (C.sibling = null), C;
  }
  function u(C, E, A) {
    return (
      (C.index = A),
      e
        ? ((A = C.alternate),
          A !== null
            ? ((A = A.index), A < E ? ((C.flags |= 2), E) : A)
            : ((C.flags |= 2), E))
        : ((C.flags |= 1048576), E)
    );
  }
  function g(C) {
    return e && C.alternate === null && (C.flags |= 2), C;
  }
  function _(C, E, A, Q) {
    return E === null || E.tag !== 6
      ? ((E = uc(A, C.mode, Q)), (E.return = C), E)
      : ((E = l(E, A)), (E.return = C), E);
  }
  function x(C, E, A, Q) {
    var J = A.type;
    return J === Io
      ? W(C, E, A.props.children, Q, A.key)
      : E !== null &&
        (E.elementType === J ||
          (typeof J == "object" &&
            J !== null &&
            J.$$typeof === di &&
            lp(J) === E.type))
      ? ((Q = l(E, A.props)), (Q.ref = Rs(C, E, A)), (Q.return = C), Q)
      : ((Q = Na(A.type, A.key, A.props, null, C.mode, Q)),
        (Q.ref = Rs(C, E, A)),
        (Q.return = C),
        Q);
  }
  function j(C, E, A, Q) {
    return E === null ||
      E.tag !== 4 ||
      E.stateNode.containerInfo !== A.containerInfo ||
      E.stateNode.implementation !== A.implementation
      ? ((E = cc(A, C.mode, Q)), (E.return = C), E)
      : ((E = l(E, A.children || [])), (E.return = C), E);
  }
  function W(C, E, A, Q, J) {
    return E === null || E.tag !== 7
      ? ((E = to(A, C.mode, Q, J)), (E.return = C), E)
      : ((E = l(E, A)), (E.return = C), E);
  }
  function B(C, E, A) {
    if ((typeof E == "string" && E !== "") || typeof E == "number")
      return (E = uc("" + E, C.mode, A)), (E.return = C), E;
    if (typeof E == "object" && E !== null) {
      switch (E.$$typeof) {
        case Jl:
          return (
            (A = Na(E.type, E.key, E.props, null, C.mode, A)),
            (A.ref = Rs(C, null, E)),
            (A.return = C),
            A
          );
        case Mo:
          return (E = cc(E, C.mode, A)), (E.return = C), E;
        case di:
          var Q = E._init;
          return B(C, Q(E._payload), A);
      }
      if (Hs(E) || Ps(E))
        return (E = to(E, C.mode, A, null)), (E.return = C), E;
      ca(C, E);
    }
    return null;
  }
  function z(C, E, A, Q) {
    var J = E !== null ? E.key : null;
    if ((typeof A == "string" && A !== "") || typeof A == "number")
      return J !== null ? null : _(C, E, "" + A, Q);
    if (typeof A == "object" && A !== null) {
      switch (A.$$typeof) {
        case Jl:
          return A.key === J ? x(C, E, A, Q) : null;
        case Mo:
          return A.key === J ? j(C, E, A, Q) : null;
        case di:
          return (J = A._init), z(C, E, J(A._payload), Q);
      }
      if (Hs(A) || Ps(A)) return J !== null ? null : W(C, E, A, Q, null);
      ca(C, A);
    }
    return null;
  }
  function K(C, E, A, Q, J) {
    if ((typeof Q == "string" && Q !== "") || typeof Q == "number")
      return (C = C.get(A) || null), _(E, C, "" + Q, J);
    if (typeof Q == "object" && Q !== null) {
      switch (Q.$$typeof) {
        case Jl:
          return (C = C.get(Q.key === null ? A : Q.key) || null), x(E, C, Q, J);
        case Mo:
          return (C = C.get(Q.key === null ? A : Q.key) || null), j(E, C, Q, J);
        case di:
          var ce = Q._init;
          return K(C, E, A, ce(Q._payload), J);
      }
      if (Hs(Q) || Ps(Q)) return (C = C.get(A) || null), W(E, C, Q, J, null);
      ca(E, Q);
    }
    return null;
  }
  function U(C, E, A, Q) {
    for (
      var J = null, ce = null, c = E, ae = (E = 0), ge = null;
      c !== null && ae < A.length;
      ae++
    ) {
      c.index > ae ? ((ge = c), (c = null)) : (ge = c.sibling);
      var Ee = z(C, c, A[ae], Q);
      if (Ee === null) {
        c === null && (c = ge);
        break;
      }
      e && c && Ee.alternate === null && t(C, c),
        (E = u(Ee, E, ae)),
        ce === null ? (J = Ee) : (ce.sibling = Ee),
        (ce = Ee),
        (c = ge);
    }
    if (ae === A.length) return n(C, c), et && Xi(C, ae), J;
    if (c === null) {
      for (; ae < A.length; ae++)
        (c = B(C, A[ae], Q)),
          c !== null &&
            ((E = u(c, E, ae)),
            ce === null ? (J = c) : (ce.sibling = c),
            (ce = c));
      return et && Xi(C, ae), J;
    }
    for (c = i(C, c); ae < A.length; ae++)
      (ge = K(c, C, ae, A[ae], Q)),
        ge !== null &&
          (e &&
            ge.alternate !== null &&
            c.delete(ge.key === null ? ae : ge.key),
          (E = u(ge, E, ae)),
          ce === null ? (J = ge) : (ce.sibling = ge),
          (ce = ge));
    return (
      e &&
        c.forEach(function (Ct) {
          return t(C, Ct);
        }),
      et && Xi(C, ae),
      J
    );
  }
  function V(C, E, A, Q) {
    var J = Ps(A);
    if (typeof J != "function") throw Error(Y(150));
    if (((A = J.call(A)), A == null)) throw Error(Y(151));
    for (
      var ce = (J = null), c = E, ae = (E = 0), ge = null, Ee = A.next();
      c !== null && !Ee.done;
      ae++, Ee = A.next()
    ) {
      c.index > ae ? ((ge = c), (c = null)) : (ge = c.sibling);
      var Ct = z(C, c, Ee.value, Q);
      if (Ct === null) {
        c === null && (c = ge);
        break;
      }
      e && c && Ct.alternate === null && t(C, c),
        (E = u(Ct, E, ae)),
        ce === null ? (J = Ct) : (ce.sibling = Ct),
        (ce = Ct),
        (c = ge);
    }
    if (Ee.done) return n(C, c), et && Xi(C, ae), J;
    if (c === null) {
      for (; !Ee.done; ae++, Ee = A.next())
        (Ee = B(C, Ee.value, Q)),
          Ee !== null &&
            ((E = u(Ee, E, ae)),
            ce === null ? (J = Ee) : (ce.sibling = Ee),
            (ce = Ee));
      return et && Xi(C, ae), J;
    }
    for (c = i(C, c); !Ee.done; ae++, Ee = A.next())
      (Ee = K(c, C, ae, Ee.value, Q)),
        Ee !== null &&
          (e &&
            Ee.alternate !== null &&
            c.delete(Ee.key === null ? ae : Ee.key),
          (E = u(Ee, E, ae)),
          ce === null ? (J = Ee) : (ce.sibling = Ee),
          (ce = Ee));
    return (
      e &&
        c.forEach(function (wt) {
          return t(C, wt);
        }),
      et && Xi(C, ae),
      J
    );
  }
  function _e(C, E, A, Q) {
    if (
      (typeof A == "object" &&
        A !== null &&
        A.type === Io &&
        A.key === null &&
        (A = A.props.children),
      typeof A == "object" && A !== null)
    ) {
      switch (A.$$typeof) {
        case Jl:
          e: {
            for (var J = A.key, ce = E; ce !== null; ) {
              if (ce.key === J) {
                if (((J = A.type), J === Io)) {
                  if (ce.tag === 7) {
                    n(C, ce.sibling),
                      (E = l(ce, A.props.children)),
                      (E.return = C),
                      (C = E);
                    break e;
                  }
                } else if (
                  ce.elementType === J ||
                  (typeof J == "object" &&
                    J !== null &&
                    J.$$typeof === di &&
                    lp(J) === ce.type)
                ) {
                  n(C, ce.sibling),
                    (E = l(ce, A.props)),
                    (E.ref = Rs(C, ce, A)),
                    (E.return = C),
                    (C = E);
                  break e;
                }
                n(C, ce);
                break;
              } else t(C, ce);
              ce = ce.sibling;
            }
            A.type === Io
              ? ((E = to(A.props.children, C.mode, Q, A.key)),
                (E.return = C),
                (C = E))
              : ((Q = Na(A.type, A.key, A.props, null, C.mode, Q)),
                (Q.ref = Rs(C, E, A)),
                (Q.return = C),
                (C = Q));
          }
          return g(C);
        case Mo:
          e: {
            for (ce = A.key; E !== null; ) {
              if (E.key === ce)
                if (
                  E.tag === 4 &&
                  E.stateNode.containerInfo === A.containerInfo &&
                  E.stateNode.implementation === A.implementation
                ) {
                  n(C, E.sibling),
                    (E = l(E, A.children || [])),
                    (E.return = C),
                    (C = E);
                  break e;
                } else {
                  n(C, E);
                  break;
                }
              else t(C, E);
              E = E.sibling;
            }
            (E = cc(A, C.mode, Q)), (E.return = C), (C = E);
          }
          return g(C);
        case di:
          return (ce = A._init), _e(C, E, ce(A._payload), Q);
      }
      if (Hs(A)) return U(C, E, A, Q);
      if (Ps(A)) return V(C, E, A, Q);
      ca(C, A);
    }
    return (typeof A == "string" && A !== "") || typeof A == "number"
      ? ((A = "" + A),
        E !== null && E.tag === 6
          ? (n(C, E.sibling), (E = l(E, A)), (E.return = C), (C = E))
          : (n(C, E), (E = uc(A, C.mode, Q)), (E.return = C), (C = E)),
        g(C))
      : n(C, E);
  }
  return _e;
}
var ns = Gh(!0),
  Zh = Gh(!1),
  Ha = ji(null),
  Ba = null,
  Uo = null,
  Nf = null;
function bf() {
  Nf = Uo = Ba = null;
}
function jf(e) {
  var t = Ha.current;
  Je(Ha), (e._currentValue = t);
}
function Fc(e, t, n) {
  for (; e !== null; ) {
    var i = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), i !== null && (i.childLanes |= t))
        : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Go(e, t) {
  (Ba = e),
    (Nf = Uo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (nn = !0), (e.firstContext = null));
}
function Dn(e) {
  var t = e._currentValue;
  if (Nf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Uo === null)) {
      if (Ba === null) throw Error(Y(308));
      (Uo = e), (Ba.dependencies = { lanes: 0, firstContext: e });
    } else Uo = Uo.next = e;
  return t;
}
var Gi = null;
function Of(e) {
  Gi === null ? (Gi = [e]) : Gi.push(e);
}
function Jh(e, t, n, i) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), Of(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Hr(e, i)
  );
}
function Hr(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var pi = !1;
function Af(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function eg(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Rr(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function Si(e, t, n) {
  var i = e.updateQueue;
  if (i === null) return null;
  if (((i = i.shared), Re & 2)) {
    var l = i.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (i.pending = t),
      Hr(e, n)
    );
  }
  return (
    (l = i.interleaved),
    l === null ? ((t.next = t), Of(i)) : ((t.next = l.next), (l.next = t)),
    (i.interleaved = t),
    Hr(e, n)
  );
}
function xa(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), mf(e, n);
  }
}
function ap(e, t) {
  var n = e.updateQueue,
    i = e.alternate;
  if (i !== null && ((i = i.updateQueue), n === i)) {
    var l = null,
      u = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var g = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        u === null ? (l = u = g) : (u = u.next = g), (n = n.next);
      } while (n !== null);
      u === null ? (l = u = t) : (u = u.next = t);
    } else l = u = t;
    (n = {
      baseState: i.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: u,
      shared: i.shared,
      effects: i.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Wa(e, t, n, i) {
  var l = e.updateQueue;
  pi = !1;
  var u = l.firstBaseUpdate,
    g = l.lastBaseUpdate,
    _ = l.shared.pending;
  if (_ !== null) {
    l.shared.pending = null;
    var x = _,
      j = x.next;
    (x.next = null), g === null ? (u = j) : (g.next = j), (g = x);
    var W = e.alternate;
    W !== null &&
      ((W = W.updateQueue),
      (_ = W.lastBaseUpdate),
      _ !== g &&
        (_ === null ? (W.firstBaseUpdate = j) : (_.next = j),
        (W.lastBaseUpdate = x)));
  }
  if (u !== null) {
    var B = l.baseState;
    (g = 0), (W = j = x = null), (_ = u);
    do {
      var z = _.lane,
        K = _.eventTime;
      if ((i & z) === z) {
        W !== null &&
          (W = W.next =
            {
              eventTime: K,
              lane: 0,
              tag: _.tag,
              payload: _.payload,
              callback: _.callback,
              next: null,
            });
        e: {
          var U = e,
            V = _;
          switch (((z = t), (K = n), V.tag)) {
            case 1:
              if (((U = V.payload), typeof U == "function")) {
                B = U.call(K, B, z);
                break e;
              }
              B = U;
              break e;
            case 3:
              U.flags = (U.flags & -65537) | 128;
            case 0:
              if (
                ((U = V.payload),
                (z = typeof U == "function" ? U.call(K, B, z) : U),
                z == null)
              )
                break e;
              B = rt({}, B, z);
              break e;
            case 2:
              pi = !0;
          }
        }
        _.callback !== null &&
          _.lane !== 0 &&
          ((e.flags |= 64),
          (z = l.effects),
          z === null ? (l.effects = [_]) : z.push(_));
      } else
        (K = {
          eventTime: K,
          lane: z,
          tag: _.tag,
          payload: _.payload,
          callback: _.callback,
          next: null,
        }),
          W === null ? ((j = W = K), (x = B)) : (W = W.next = K),
          (g |= z);
      if (((_ = _.next), _ === null)) {
        if (((_ = l.shared.pending), _ === null)) break;
        (z = _),
          (_ = z.next),
          (z.next = null),
          (l.lastBaseUpdate = z),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (W === null && (x = B),
      (l.baseState = x),
      (l.firstBaseUpdate = j),
      (l.lastBaseUpdate = W),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (g |= l.lane), (l = l.next);
      while (l !== t);
    } else u === null && (l.shared.lanes = 0);
    (oo |= g), (e.lanes = g), (e.memoizedState = B);
  }
}
function up(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var i = e[t],
        l = i.callback;
      if (l !== null) {
        if (((i.callback = null), (i = n), typeof l != "function"))
          throw Error(Y(191, l));
        l.call(i);
      }
    }
}
var wl = {},
  yr = ji(wl),
  cl = ji(wl),
  fl = ji(wl);
function Zi(e) {
  if (e === wl) throw Error(Y(174));
  return e;
}
function Pf(e, t) {
  switch ((Ge(fl, t), Ge(cl, e), Ge(yr, wl), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : wc(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = wc(t, e));
  }
  Je(yr), Ge(yr, t);
}
function rs() {
  Je(yr), Je(cl), Je(fl);
}
function tg(e) {
  Zi(fl.current);
  var t = Zi(yr.current),
    n = wc(t, e.type);
  t !== n && (Ge(cl, e), Ge(yr, n));
}
function Lf(e) {
  cl.current === e && (Je(yr), Je(cl));
}
var tt = ji(0);
function Ua(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var rc = [];
function Df() {
  for (var e = 0; e < rc.length; e++)
    rc[e]._workInProgressVersionPrimary = null;
  rc.length = 0;
}
var Sa = Wr.ReactCurrentDispatcher,
  ic = Wr.ReactCurrentBatchConfig,
  io = 0,
  nt = null,
  yt = null,
  St = null,
  Va = !1,
  Ys = !1,
  dl = 0,
  Qy = 0;
function zt() {
  throw Error(Y(321));
}
function Mf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Gn(e[n], t[n])) return !1;
  return !0;
}
function If(e, t, n, i, l, u) {
  if (
    ((io = u),
    (nt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Sa.current = e === null || e.memoizedState === null ? Gy : Zy),
    (e = n(i, l)),
    Ys)
  ) {
    u = 0;
    do {
      if (((Ys = !1), (dl = 0), 25 <= u)) throw Error(Y(301));
      (u += 1),
        (St = yt = null),
        (t.updateQueue = null),
        (Sa.current = Jy),
        (e = n(i, l));
    } while (Ys);
  }
  if (
    ((Sa.current = qa),
    (t = yt !== null && yt.next !== null),
    (io = 0),
    (St = yt = nt = null),
    (Va = !1),
    t)
  )
    throw Error(Y(300));
  return e;
}
function Rf() {
  var e = dl !== 0;
  return (dl = 0), e;
}
function gr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return St === null ? (nt.memoizedState = St = e) : (St = St.next = e), St;
}
function Mn() {
  if (yt === null) {
    var e = nt.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = yt.next;
  var t = St === null ? nt.memoizedState : St.next;
  if (t !== null) (St = t), (yt = e);
  else {
    if (e === null) throw Error(Y(310));
    (yt = e),
      (e = {
        memoizedState: yt.memoizedState,
        baseState: yt.baseState,
        baseQueue: yt.baseQueue,
        queue: yt.queue,
        next: null,
      }),
      St === null ? (nt.memoizedState = St = e) : (St = St.next = e);
  }
  return St;
}
function pl(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function oc(e) {
  var t = Mn(),
    n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var i = yt,
    l = i.baseQueue,
    u = n.pending;
  if (u !== null) {
    if (l !== null) {
      var g = l.next;
      (l.next = u.next), (u.next = g);
    }
    (i.baseQueue = l = u), (n.pending = null);
  }
  if (l !== null) {
    (u = l.next), (i = i.baseState);
    var _ = (g = null),
      x = null,
      j = u;
    do {
      var W = j.lane;
      if ((io & W) === W)
        x !== null &&
          (x = x.next =
            {
              lane: 0,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
          (i = j.hasEagerState ? j.eagerState : e(i, j.action));
      else {
        var B = {
          lane: W,
          action: j.action,
          hasEagerState: j.hasEagerState,
          eagerState: j.eagerState,
          next: null,
        };
        x === null ? ((_ = x = B), (g = i)) : (x = x.next = B),
          (nt.lanes |= W),
          (oo |= W);
      }
      j = j.next;
    } while (j !== null && j !== u);
    x === null ? (g = i) : (x.next = _),
      Gn(i, t.memoizedState) || (nn = !0),
      (t.memoizedState = i),
      (t.baseState = g),
      (t.baseQueue = x),
      (n.lastRenderedState = i);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (u = l.lane), (nt.lanes |= u), (oo |= u), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function sc(e) {
  var t = Mn(),
    n = t.queue;
  if (n === null) throw Error(Y(311));
  n.lastRenderedReducer = e;
  var i = n.dispatch,
    l = n.pending,
    u = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var g = (l = l.next);
    do (u = e(u, g.action)), (g = g.next);
    while (g !== l);
    Gn(u, t.memoizedState) || (nn = !0),
      (t.memoizedState = u),
      t.baseQueue === null && (t.baseState = u),
      (n.lastRenderedState = u);
  }
  return [u, i];
}
function ng() {}
function rg(e, t) {
  var n = nt,
    i = Mn(),
    l = t(),
    u = !Gn(i.memoizedState, l);
  if (
    (u && ((i.memoizedState = l), (nn = !0)),
    (i = i.queue),
    zf(sg.bind(null, n, i, e), [e]),
    i.getSnapshot !== t || u || (St !== null && St.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      hl(9, og.bind(null, n, i, l, t), void 0, null),
      kt === null)
    )
      throw Error(Y(349));
    io & 30 || ig(n, t, l);
  }
  return l;
}
function ig(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = nt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (nt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function og(e, t, n, i) {
  (t.value = n), (t.getSnapshot = i), lg(t) && ag(e);
}
function sg(e, t, n) {
  return n(function () {
    lg(t) && ag(e);
  });
}
function lg(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Gn(e, n);
  } catch {
    return !0;
  }
}
function ag(e) {
  var t = Hr(e, 1);
  t !== null && Kn(t, e, 1, -1);
}
function cp(e) {
  var t = gr();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: pl,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Ky.bind(null, nt, e)),
    [t.memoizedState, e]
  );
}
function hl(e, t, n, i) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: i, next: null }),
    (t = nt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (nt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((i = n.next), (n.next = e), (e.next = i), (t.lastEffect = e))),
    e
  );
}
function ug() {
  return Mn().memoizedState;
}
function ka(e, t, n, i) {
  var l = gr();
  (nt.flags |= e),
    (l.memoizedState = hl(1 | t, n, void 0, i === void 0 ? null : i));
}
function lu(e, t, n, i) {
  var l = Mn();
  i = i === void 0 ? null : i;
  var u = void 0;
  if (yt !== null) {
    var g = yt.memoizedState;
    if (((u = g.destroy), i !== null && Mf(i, g.deps))) {
      l.memoizedState = hl(t, n, u, i);
      return;
    }
  }
  (nt.flags |= e), (l.memoizedState = hl(1 | t, n, u, i));
}
function fp(e, t) {
  return ka(8390656, 8, e, t);
}
function zf(e, t) {
  return lu(2048, 8, e, t);
}
function cg(e, t) {
  return lu(4, 2, e, t);
}
function fg(e, t) {
  return lu(4, 4, e, t);
}
function dg(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function pg(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), lu(4, 4, dg.bind(null, t, e), n)
  );
}
function $f() {}
function hg(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Mf(t, i[1])
    ? i[0]
    : ((n.memoizedState = [e, t]), e);
}
function gg(e, t) {
  var n = Mn();
  t = t === void 0 ? null : t;
  var i = n.memoizedState;
  return i !== null && t !== null && Mf(t, i[1])
    ? i[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function mg(e, t, n) {
  return io & 21
    ? (Gn(n, t) || ((n = xh()), (nt.lanes |= n), (oo |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (nn = !0)), (e.memoizedState = n));
}
function Xy(e, t) {
  var n = Ue;
  (Ue = n !== 0 && 4 > n ? n : 4), e(!0);
  var i = ic.transition;
  ic.transition = {};
  try {
    e(!1), t();
  } finally {
    (Ue = n), (ic.transition = i);
  }
}
function vg() {
  return Mn().memoizedState;
}
function Yy(e, t, n) {
  var i = Ci(e);
  if (
    ((n = {
      lane: i,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    yg(e))
  )
    _g(t, n);
  else if (((n = Jh(e, t, n, i)), n !== null)) {
    var l = Yt();
    Kn(n, e, i, l), wg(n, t, i);
  }
}
function Ky(e, t, n) {
  var i = Ci(e),
    l = { lane: i, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (yg(e)) _g(t, l);
  else {
    var u = e.alternate;
    if (
      e.lanes === 0 &&
      (u === null || u.lanes === 0) &&
      ((u = t.lastRenderedReducer), u !== null)
    )
      try {
        var g = t.lastRenderedState,
          _ = u(g, n);
        if (((l.hasEagerState = !0), (l.eagerState = _), Gn(_, g))) {
          var x = t.interleaved;
          x === null
            ? ((l.next = l), Of(t))
            : ((l.next = x.next), (x.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = Jh(e, t, l, i)),
      n !== null && ((l = Yt()), Kn(n, e, i, l), wg(n, t, i));
  }
}
function yg(e) {
  var t = e.alternate;
  return e === nt || (t !== null && t === nt);
}
function _g(e, t) {
  Ys = Va = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function wg(e, t, n) {
  if (n & 4194240) {
    var i = t.lanes;
    (i &= e.pendingLanes), (n |= i), (t.lanes = n), mf(e, n);
  }
}
var qa = {
    readContext: Dn,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useInsertionEffect: zt,
    useLayoutEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useMutableSource: zt,
    useSyncExternalStore: zt,
    useId: zt,
    unstable_isNewReconciler: !1,
  },
  Gy = {
    readContext: Dn,
    useCallback: function (e, t) {
      return (gr().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: Dn,
    useEffect: fp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        ka(4194308, 4, dg.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return ka(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return ka(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = gr();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var i = gr();
      return (
        (t = n !== void 0 ? n(t) : t),
        (i.memoizedState = i.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (i.queue = e),
        (e = e.dispatch = Yy.bind(null, nt, e)),
        [i.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = gr();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: cp,
    useDebugValue: $f,
    useDeferredValue: function (e) {
      return (gr().memoizedState = e);
    },
    useTransition: function () {
      var e = cp(!1),
        t = e[0];
      return (e = Xy.bind(null, e[1])), (gr().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var i = nt,
        l = gr();
      if (et) {
        if (n === void 0) throw Error(Y(407));
        n = n();
      } else {
        if (((n = t()), kt === null)) throw Error(Y(349));
        io & 30 || ig(i, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return (
        (l.queue = u),
        fp(sg.bind(null, i, u, e), [e]),
        (i.flags |= 2048),
        hl(9, og.bind(null, i, u, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = gr(),
        t = kt.identifierPrefix;
      if (et) {
        var n = Ir,
          i = Mr;
        (n = (i & ~(1 << (32 - Yn(i) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = dl++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Qy++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Zy = {
    readContext: Dn,
    useCallback: hg,
    useContext: Dn,
    useEffect: zf,
    useImperativeHandle: pg,
    useInsertionEffect: cg,
    useLayoutEffect: fg,
    useMemo: gg,
    useReducer: oc,
    useRef: ug,
    useState: function () {
      return oc(pl);
    },
    useDebugValue: $f,
    useDeferredValue: function (e) {
      var t = Mn();
      return mg(t, yt.memoizedState, e);
    },
    useTransition: function () {
      var e = oc(pl)[0],
        t = Mn().memoizedState;
      return [e, t];
    },
    useMutableSource: ng,
    useSyncExternalStore: rg,
    useId: vg,
    unstable_isNewReconciler: !1,
  },
  Jy = {
    readContext: Dn,
    useCallback: hg,
    useContext: Dn,
    useEffect: zf,
    useImperativeHandle: pg,
    useInsertionEffect: cg,
    useLayoutEffect: fg,
    useMemo: gg,
    useReducer: sc,
    useRef: ug,
    useState: function () {
      return sc(pl);
    },
    useDebugValue: $f,
    useDeferredValue: function (e) {
      var t = Mn();
      return yt === null ? (t.memoizedState = e) : mg(t, yt.memoizedState, e);
    },
    useTransition: function () {
      var e = sc(pl)[0],
        t = Mn().memoizedState;
      return [e, t];
    },
    useMutableSource: ng,
    useSyncExternalStore: rg,
    useId: vg,
    unstable_isNewReconciler: !1,
  };
function qn(e, t) {
  if (e && e.defaultProps) {
    (t = rt({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function Hc(e, t, n, i) {
  (t = e.memoizedState),
    (n = n(i, t)),
    (n = n == null ? t : rt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var au = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ao(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var i = Yt(),
      l = Ci(e),
      u = Rr(i, l);
    (u.payload = t),
      n != null && (u.callback = n),
      (t = Si(e, u, l)),
      t !== null && (Kn(t, e, l, i), xa(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var i = Yt(),
      l = Ci(e),
      u = Rr(i, l);
    (u.tag = 1),
      (u.payload = t),
      n != null && (u.callback = n),
      (t = Si(e, u, l)),
      t !== null && (Kn(t, e, l, i), xa(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Yt(),
      i = Ci(e),
      l = Rr(n, i);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = Si(e, l, i)),
      t !== null && (Kn(t, e, i, n), xa(t, e, i));
  },
};
function dp(e, t, n, i, l, u, g) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(i, u, g)
      : t.prototype && t.prototype.isPureReactComponent
      ? !sl(n, i) || !sl(l, u)
      : !0
  );
}
function xg(e, t, n) {
  var i = !1,
    l = Ni,
    u = t.contextType;
  return (
    typeof u == "object" && u !== null
      ? (u = Dn(u))
      : ((l = on(t) ? no : Ht.current),
        (i = t.contextTypes),
        (u = (i = i != null) ? es(e, l) : Ni)),
    (t = new t(n, u)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = au),
    (e.stateNode = t),
    (t._reactInternals = e),
    i &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = u)),
    t
  );
}
function pp(e, t, n, i) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, i),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, i),
    t.state !== e && au.enqueueReplaceState(t, t.state, null);
}
function Bc(e, t, n, i) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), Af(e);
  var u = t.contextType;
  typeof u == "object" && u !== null
    ? (l.context = Dn(u))
    : ((u = on(t) ? no : Ht.current), (l.context = es(e, u))),
    (l.state = e.memoizedState),
    (u = t.getDerivedStateFromProps),
    typeof u == "function" && (Hc(e, t, u, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && au.enqueueReplaceState(l, l.state, null),
      Wa(e, n, l, i),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function is(e, t) {
  try {
    var n = "",
      i = t;
    do (n += Nv(i)), (i = i.return);
    while (i);
    var l = n;
  } catch (u) {
    l =
      `
Error generating stack: ` +
      u.message +
      `
` +
      u.stack;
  }
  return { value: e, source: t, stack: l, digest: null };
}
function lc(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Wc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var e0 = typeof WeakMap == "function" ? WeakMap : Map;
function Sg(e, t, n) {
  (n = Rr(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var i = t.value;
  return (
    (n.callback = function () {
      Xa || ((Xa = !0), (Jc = i)), Wc(e, t);
    }),
    n
  );
}
function kg(e, t, n) {
  (n = Rr(-1, n)), (n.tag = 3);
  var i = e.type.getDerivedStateFromError;
  if (typeof i == "function") {
    var l = t.value;
    (n.payload = function () {
      return i(l);
    }),
      (n.callback = function () {
        Wc(e, t);
      });
  }
  var u = e.stateNode;
  return (
    u !== null &&
      typeof u.componentDidCatch == "function" &&
      (n.callback = function () {
        Wc(e, t),
          typeof i != "function" &&
            (ki === null ? (ki = new Set([this])) : ki.add(this));
        var g = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: g !== null ? g : "",
        });
      }),
    n
  );
}
function hp(e, t, n) {
  var i = e.pingCache;
  if (i === null) {
    i = e.pingCache = new e0();
    var l = new Set();
    i.set(t, l);
  } else (l = i.get(t)), l === void 0 && ((l = new Set()), i.set(t, l));
  l.has(n) || (l.add(n), (e = h0.bind(null, e, t, n)), t.then(e, e));
}
function gp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function mp(e, t, n, i, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Rr(-1, 1)), (t.tag = 2), Si(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var t0 = Wr.ReactCurrentOwner,
  nn = !1;
function Xt(e, t, n, i) {
  t.child = e === null ? Zh(t, null, n, i) : ns(t, e.child, n, i);
}
function vp(e, t, n, i, l) {
  n = n.render;
  var u = t.ref;
  return (
    Go(t, l),
    (i = If(e, t, n, i, u, l)),
    (n = Rf()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Br(e, t, l))
      : (et && n && Cf(t), (t.flags |= 1), Xt(e, t, i, l), t.child)
  );
}
function yp(e, t, n, i, l) {
  if (e === null) {
    var u = n.type;
    return typeof u == "function" &&
      !Qf(u) &&
      u.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = u), Cg(e, t, u, i, l))
      : ((e = Na(n.type, null, i, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((u = e.child), !(e.lanes & l))) {
    var g = u.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : sl), n(g, i) && e.ref === t.ref)
    )
      return Br(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = Ei(u, i)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Cg(e, t, n, i, l) {
  if (e !== null) {
    var u = e.memoizedProps;
    if (sl(u, i) && e.ref === t.ref)
      if (((nn = !1), (t.pendingProps = i = u), (e.lanes & l) !== 0))
        e.flags & 131072 && (nn = !0);
      else return (t.lanes = e.lanes), Br(e, t, l);
  }
  return Uc(e, t, n, i, l);
}
function Eg(e, t, n) {
  var i = t.pendingProps,
    l = i.children,
    u = e !== null ? e.memoizedState : null;
  if (i.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        Ge(qo, pn),
        (pn |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = u !== null ? u.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          Ge(qo, pn),
          (pn |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (i = u !== null ? u.baseLanes : n),
        Ge(qo, pn),
        (pn |= i);
    }
  else
    u !== null ? ((i = u.baseLanes | n), (t.memoizedState = null)) : (i = n),
      Ge(qo, pn),
      (pn |= i);
  return Xt(e, t, l, n), t.child;
}
function Tg(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Uc(e, t, n, i, l) {
  var u = on(n) ? no : Ht.current;
  return (
    (u = es(t, u)),
    Go(t, l),
    (n = If(e, t, n, i, u, l)),
    (i = Rf()),
    e !== null && !nn
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Br(e, t, l))
      : (et && i && Cf(t), (t.flags |= 1), Xt(e, t, n, l), t.child)
  );
}
function _p(e, t, n, i, l) {
  if (on(n)) {
    var u = !0;
    za(t);
  } else u = !1;
  if ((Go(t, l), t.stateNode === null))
    Ca(e, t), xg(t, n, i), Bc(t, n, i, l), (i = !0);
  else if (e === null) {
    var g = t.stateNode,
      _ = t.memoizedProps;
    g.props = _;
    var x = g.context,
      j = n.contextType;
    typeof j == "object" && j !== null
      ? (j = Dn(j))
      : ((j = on(n) ? no : Ht.current), (j = es(t, j)));
    var W = n.getDerivedStateFromProps,
      B =
        typeof W == "function" ||
        typeof g.getSnapshotBeforeUpdate == "function";
    B ||
      (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
        typeof g.componentWillReceiveProps != "function") ||
      ((_ !== i || x !== j) && pp(t, g, i, j)),
      (pi = !1);
    var z = t.memoizedState;
    (g.state = z),
      Wa(t, i, g, l),
      (x = t.memoizedState),
      _ !== i || z !== x || rn.current || pi
        ? (typeof W == "function" && (Hc(t, n, W, i), (x = t.memoizedState)),
          (_ = pi || dp(t, n, _, i, z, x, j))
            ? (B ||
                (typeof g.UNSAFE_componentWillMount != "function" &&
                  typeof g.componentWillMount != "function") ||
                (typeof g.componentWillMount == "function" &&
                  g.componentWillMount(),
                typeof g.UNSAFE_componentWillMount == "function" &&
                  g.UNSAFE_componentWillMount()),
              typeof g.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = i),
              (t.memoizedState = x)),
          (g.props = i),
          (g.state = x),
          (g.context = j),
          (i = _))
        : (typeof g.componentDidMount == "function" && (t.flags |= 4194308),
          (i = !1));
  } else {
    (g = t.stateNode),
      eg(e, t),
      (_ = t.memoizedProps),
      (j = t.type === t.elementType ? _ : qn(t.type, _)),
      (g.props = j),
      (B = t.pendingProps),
      (z = g.context),
      (x = n.contextType),
      typeof x == "object" && x !== null
        ? (x = Dn(x))
        : ((x = on(n) ? no : Ht.current), (x = es(t, x)));
    var K = n.getDerivedStateFromProps;
    (W =
      typeof K == "function" ||
      typeof g.getSnapshotBeforeUpdate == "function") ||
      (typeof g.UNSAFE_componentWillReceiveProps != "function" &&
        typeof g.componentWillReceiveProps != "function") ||
      ((_ !== B || z !== x) && pp(t, g, i, x)),
      (pi = !1),
      (z = t.memoizedState),
      (g.state = z),
      Wa(t, i, g, l);
    var U = t.memoizedState;
    _ !== B || z !== U || rn.current || pi
      ? (typeof K == "function" && (Hc(t, n, K, i), (U = t.memoizedState)),
        (j = pi || dp(t, n, j, i, z, U, x) || !1)
          ? (W ||
              (typeof g.UNSAFE_componentWillUpdate != "function" &&
                typeof g.componentWillUpdate != "function") ||
              (typeof g.componentWillUpdate == "function" &&
                g.componentWillUpdate(i, U, x),
              typeof g.UNSAFE_componentWillUpdate == "function" &&
                g.UNSAFE_componentWillUpdate(i, U, x)),
            typeof g.componentDidUpdate == "function" && (t.flags |= 4),
            typeof g.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof g.componentDidUpdate != "function" ||
              (_ === e.memoizedProps && z === e.memoizedState) ||
              (t.flags |= 4),
            typeof g.getSnapshotBeforeUpdate != "function" ||
              (_ === e.memoizedProps && z === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = i),
            (t.memoizedState = U)),
        (g.props = i),
        (g.state = U),
        (g.context = x),
        (i = j))
      : (typeof g.componentDidUpdate != "function" ||
          (_ === e.memoizedProps && z === e.memoizedState) ||
          (t.flags |= 4),
        typeof g.getSnapshotBeforeUpdate != "function" ||
          (_ === e.memoizedProps && z === e.memoizedState) ||
          (t.flags |= 1024),
        (i = !1));
  }
  return Vc(e, t, n, i, u, l);
}
function Vc(e, t, n, i, l, u) {
  Tg(e, t);
  var g = (t.flags & 128) !== 0;
  if (!i && !g) return l && ip(t, n, !1), Br(e, t, u);
  (i = t.stateNode), (t0.current = t);
  var _ =
    g && typeof n.getDerivedStateFromError != "function" ? null : i.render();
  return (
    (t.flags |= 1),
    e !== null && g
      ? ((t.child = ns(t, e.child, null, u)), (t.child = ns(t, null, _, u)))
      : Xt(e, t, _, u),
    (t.memoizedState = i.state),
    l && ip(t, n, !0),
    t.child
  );
}
function Ng(e) {
  var t = e.stateNode;
  t.pendingContext
    ? rp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && rp(e, t.context, !1),
    Pf(e, t.containerInfo);
}
function wp(e, t, n, i, l) {
  return ts(), Tf(l), (t.flags |= 256), Xt(e, t, n, i), t.child;
}
var qc = { dehydrated: null, treeContext: null, retryLane: 0 };
function Qc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function bg(e, t, n) {
  var i = t.pendingProps,
    l = tt.current,
    u = !1,
    g = (t.flags & 128) !== 0,
    _;
  if (
    ((_ = g) ||
      (_ = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    _
      ? ((u = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    Ge(tt, l & 1),
    e === null)
  )
    return (
      $c(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((g = i.children),
          (e = i.fallback),
          u
            ? ((i = t.mode),
              (u = t.child),
              (g = { mode: "hidden", children: g }),
              !(i & 1) && u !== null
                ? ((u.childLanes = 0), (u.pendingProps = g))
                : (u = fu(g, i, 0, null)),
              (e = to(e, i, n, null)),
              (u.return = t),
              (e.return = t),
              (u.sibling = e),
              (t.child = u),
              (t.child.memoizedState = Qc(n)),
              (t.memoizedState = qc),
              e)
            : Ff(t, g))
    );
  if (((l = e.memoizedState), l !== null && ((_ = l.dehydrated), _ !== null)))
    return n0(e, t, g, i, _, l, n);
  if (u) {
    (u = i.fallback), (g = t.mode), (l = e.child), (_ = l.sibling);
    var x = { mode: "hidden", children: i.children };
    return (
      !(g & 1) && t.child !== l
        ? ((i = t.child),
          (i.childLanes = 0),
          (i.pendingProps = x),
          (t.deletions = null))
        : ((i = Ei(l, x)), (i.subtreeFlags = l.subtreeFlags & 14680064)),
      _ !== null ? (u = Ei(_, u)) : ((u = to(u, g, n, null)), (u.flags |= 2)),
      (u.return = t),
      (i.return = t),
      (i.sibling = u),
      (t.child = i),
      (i = u),
      (u = t.child),
      (g = e.child.memoizedState),
      (g =
        g === null
          ? Qc(n)
          : {
              baseLanes: g.baseLanes | n,
              cachePool: null,
              transitions: g.transitions,
            }),
      (u.memoizedState = g),
      (u.childLanes = e.childLanes & ~n),
      (t.memoizedState = qc),
      i
    );
  }
  return (
    (u = e.child),
    (e = u.sibling),
    (i = Ei(u, { mode: "visible", children: i.children })),
    !(t.mode & 1) && (i.lanes = n),
    (i.return = t),
    (i.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = i),
    (t.memoizedState = null),
    i
  );
}
function Ff(e, t) {
  return (
    (t = fu({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function fa(e, t, n, i) {
  return (
    i !== null && Tf(i),
    ns(t, e.child, null, n),
    (e = Ff(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function n0(e, t, n, i, l, u, g) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (i = lc(Error(Y(422)))), fa(e, t, g, i))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((u = i.fallback),
        (l = t.mode),
        (i = fu({ mode: "visible", children: i.children }, l, 0, null)),
        (u = to(u, l, g, null)),
        (u.flags |= 2),
        (i.return = t),
        (u.return = t),
        (i.sibling = u),
        (t.child = i),
        t.mode & 1 && ns(t, e.child, null, g),
        (t.child.memoizedState = Qc(g)),
        (t.memoizedState = qc),
        u);
  if (!(t.mode & 1)) return fa(e, t, g, null);
  if (l.data === "$!") {
    if (((i = l.nextSibling && l.nextSibling.dataset), i)) var _ = i.dgst;
    return (i = _), (u = Error(Y(419))), (i = lc(u, i, void 0)), fa(e, t, g, i);
  }
  if (((_ = (g & e.childLanes) !== 0), nn || _)) {
    if (((i = kt), i !== null)) {
      switch (g & -g) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (i.suspendedLanes | g) ? 0 : l),
        l !== 0 &&
          l !== u.retryLane &&
          ((u.retryLane = l), Hr(e, l), Kn(i, e, l, -1));
    }
    return qf(), (i = lc(Error(Y(421)))), fa(e, t, g, i);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = g0.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = u.treeContext),
      (hn = xi(l.nextSibling)),
      (gn = t),
      (et = !0),
      (Xn = null),
      e !== null &&
        ((On[An++] = Mr),
        (On[An++] = Ir),
        (On[An++] = ro),
        (Mr = e.id),
        (Ir = e.overflow),
        (ro = t)),
      (t = Ff(t, i.children)),
      (t.flags |= 4096),
      t);
}
function xp(e, t, n) {
  e.lanes |= t;
  var i = e.alternate;
  i !== null && (i.lanes |= t), Fc(e.return, t, n);
}
function ac(e, t, n, i, l) {
  var u = e.memoizedState;
  u === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: n,
        tailMode: l,
      })
    : ((u.isBackwards = t),
      (u.rendering = null),
      (u.renderingStartTime = 0),
      (u.last = i),
      (u.tail = n),
      (u.tailMode = l));
}
function jg(e, t, n) {
  var i = t.pendingProps,
    l = i.revealOrder,
    u = i.tail;
  if ((Xt(e, t, i.children, n), (i = tt.current), i & 2))
    (i = (i & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && xp(e, n, t);
        else if (e.tag === 19) xp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    i &= 1;
  }
  if ((Ge(tt, i), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Ua(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          ac(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Ua(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        ac(t, !0, n, null, u);
        break;
      case "together":
        ac(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Ca(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Br(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (oo |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(Y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Ei(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Ei(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function r0(e, t, n) {
  switch (t.tag) {
    case 3:
      Ng(t), ts();
      break;
    case 5:
      tg(t);
      break;
    case 1:
      on(t.type) && za(t);
      break;
    case 4:
      Pf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var i = t.type._context,
        l = t.memoizedProps.value;
      Ge(Ha, i._currentValue), (i._currentValue = l);
      break;
    case 13:
      if (((i = t.memoizedState), i !== null))
        return i.dehydrated !== null
          ? (Ge(tt, tt.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? bg(e, t, n)
          : (Ge(tt, tt.current & 1),
            (e = Br(e, t, n)),
            e !== null ? e.sibling : null);
      Ge(tt, tt.current & 1);
      break;
    case 19:
      if (((i = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (i) return jg(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        Ge(tt, tt.current),
        i)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Eg(e, t, n);
  }
  return Br(e, t, n);
}
var Og, Xc, Ag, Pg;
Og = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Xc = function () {};
Ag = function (e, t, n, i) {
  var l = e.memoizedProps;
  if (l !== i) {
    (e = t.stateNode), Zi(yr.current);
    var u = null;
    switch (n) {
      case "input":
        (l = mc(e, l)), (i = mc(e, i)), (u = []);
        break;
      case "select":
        (l = rt({}, l, { value: void 0 })),
          (i = rt({}, i, { value: void 0 })),
          (u = []);
        break;
      case "textarea":
        (l = _c(e, l)), (i = _c(e, i)), (u = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof i.onClick == "function" &&
          (e.onclick = Ia);
    }
    xc(n, i);
    var g;
    n = null;
    for (j in l)
      if (!i.hasOwnProperty(j) && l.hasOwnProperty(j) && l[j] != null)
        if (j === "style") {
          var _ = l[j];
          for (g in _) _.hasOwnProperty(g) && (n || (n = {}), (n[g] = ""));
        } else
          j !== "dangerouslySetInnerHTML" &&
            j !== "children" &&
            j !== "suppressContentEditableWarning" &&
            j !== "suppressHydrationWarning" &&
            j !== "autoFocus" &&
            (Js.hasOwnProperty(j)
              ? u || (u = [])
              : (u = u || []).push(j, null));
    for (j in i) {
      var x = i[j];
      if (
        ((_ = l != null ? l[j] : void 0),
        i.hasOwnProperty(j) && x !== _ && (x != null || _ != null))
      )
        if (j === "style")
          if (_) {
            for (g in _)
              !_.hasOwnProperty(g) ||
                (x && x.hasOwnProperty(g)) ||
                (n || (n = {}), (n[g] = ""));
            for (g in x)
              x.hasOwnProperty(g) &&
                _[g] !== x[g] &&
                (n || (n = {}), (n[g] = x[g]));
          } else n || (u || (u = []), u.push(j, n)), (n = x);
        else
          j === "dangerouslySetInnerHTML"
            ? ((x = x ? x.__html : void 0),
              (_ = _ ? _.__html : void 0),
              x != null && _ !== x && (u = u || []).push(j, x))
            : j === "children"
            ? (typeof x != "string" && typeof x != "number") ||
              (u = u || []).push(j, "" + x)
            : j !== "suppressContentEditableWarning" &&
              j !== "suppressHydrationWarning" &&
              (Js.hasOwnProperty(j)
                ? (x != null && j === "onScroll" && Ze("scroll", e),
                  u || _ === x || (u = []))
                : (u = u || []).push(j, x));
    }
    n && (u = u || []).push("style", n);
    var j = u;
    (t.updateQueue = j) && (t.flags |= 4);
  }
};
Pg = function (e, t, n, i) {
  n !== i && (t.flags |= 4);
};
function zs(e, t) {
  if (!et)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var i = null; n !== null; )
          n.alternate !== null && (i = n), (n = n.sibling);
        i === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (i.sibling = null);
    }
}
function $t(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    i = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (i |= l.subtreeFlags & 14680064),
        (i |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (i |= l.subtreeFlags),
        (i |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= i), (e.childLanes = n), t;
}
function i0(e, t, n) {
  var i = t.pendingProps;
  switch ((Ef(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return $t(t), null;
    case 1:
      return on(t.type) && Ra(), $t(t), null;
    case 3:
      return (
        (i = t.stateNode),
        rs(),
        Je(rn),
        Je(Ht),
        Df(),
        i.pendingContext &&
          ((i.context = i.pendingContext), (i.pendingContext = null)),
        (e === null || e.child === null) &&
          (ua(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Xn !== null && (nf(Xn), (Xn = null)))),
        Xc(e, t),
        $t(t),
        null
      );
    case 5:
      Lf(t);
      var l = Zi(fl.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Ag(e, t, n, i, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!i) {
          if (t.stateNode === null) throw Error(Y(166));
          return $t(t), null;
        }
        if (((e = Zi(yr.current)), ua(t))) {
          (i = t.stateNode), (n = t.type);
          var u = t.memoizedProps;
          switch (((i[mr] = t), (i[ul] = u), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              Ze("cancel", i), Ze("close", i);
              break;
            case "iframe":
            case "object":
            case "embed":
              Ze("load", i);
              break;
            case "video":
            case "audio":
              for (l = 0; l < Ws.length; l++) Ze(Ws[l], i);
              break;
            case "source":
              Ze("error", i);
              break;
            case "img":
            case "image":
            case "link":
              Ze("error", i), Ze("load", i);
              break;
            case "details":
              Ze("toggle", i);
              break;
            case "input":
              Od(i, u), Ze("invalid", i);
              break;
            case "select":
              (i._wrapperState = { wasMultiple: !!u.multiple }),
                Ze("invalid", i);
              break;
            case "textarea":
              Pd(i, u), Ze("invalid", i);
          }
          xc(n, u), (l = null);
          for (var g in u)
            if (u.hasOwnProperty(g)) {
              var _ = u[g];
              g === "children"
                ? typeof _ == "string"
                  ? i.textContent !== _ &&
                    (u.suppressHydrationWarning !== !0 &&
                      aa(i.textContent, _, e),
                    (l = ["children", _]))
                  : typeof _ == "number" &&
                    i.textContent !== "" + _ &&
                    (u.suppressHydrationWarning !== !0 &&
                      aa(i.textContent, _, e),
                    (l = ["children", "" + _]))
                : Js.hasOwnProperty(g) &&
                  _ != null &&
                  g === "onScroll" &&
                  Ze("scroll", i);
            }
          switch (n) {
            case "input":
              ea(i), Ad(i, u, !0);
              break;
            case "textarea":
              ea(i), Ld(i);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof u.onClick == "function" && (i.onclick = Ia);
          }
          (i = l), (t.updateQueue = i), i !== null && (t.flags |= 4);
        } else {
          (g = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = sh(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = g.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof i.is == "string"
                ? (e = g.createElement(n, { is: i.is }))
                : ((e = g.createElement(n)),
                  n === "select" &&
                    ((g = e),
                    i.multiple
                      ? (g.multiple = !0)
                      : i.size && (g.size = i.size)))
              : (e = g.createElementNS(e, n)),
            (e[mr] = t),
            (e[ul] = i),
            Og(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((g = Sc(n, i)), n)) {
              case "dialog":
                Ze("cancel", e), Ze("close", e), (l = i);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ze("load", e), (l = i);
                break;
              case "video":
              case "audio":
                for (l = 0; l < Ws.length; l++) Ze(Ws[l], e);
                l = i;
                break;
              case "source":
                Ze("error", e), (l = i);
                break;
              case "img":
              case "image":
              case "link":
                Ze("error", e), Ze("load", e), (l = i);
                break;
              case "details":
                Ze("toggle", e), (l = i);
                break;
              case "input":
                Od(e, i), (l = mc(e, i)), Ze("invalid", e);
                break;
              case "option":
                l = i;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!i.multiple }),
                  (l = rt({}, i, { value: void 0 })),
                  Ze("invalid", e);
                break;
              case "textarea":
                Pd(e, i), (l = _c(e, i)), Ze("invalid", e);
                break;
              default:
                l = i;
            }
            xc(n, l), (_ = l);
            for (u in _)
              if (_.hasOwnProperty(u)) {
                var x = _[u];
                u === "style"
                  ? uh(e, x)
                  : u === "dangerouslySetInnerHTML"
                  ? ((x = x ? x.__html : void 0), x != null && lh(e, x))
                  : u === "children"
                  ? typeof x == "string"
                    ? (n !== "textarea" || x !== "") && el(e, x)
                    : typeof x == "number" && el(e, "" + x)
                  : u !== "suppressContentEditableWarning" &&
                    u !== "suppressHydrationWarning" &&
                    u !== "autoFocus" &&
                    (Js.hasOwnProperty(u)
                      ? x != null && u === "onScroll" && Ze("scroll", e)
                      : x != null && cf(e, u, x, g));
              }
            switch (n) {
              case "input":
                ea(e), Ad(e, i, !1);
                break;
              case "textarea":
                ea(e), Ld(e);
                break;
              case "option":
                i.value != null && e.setAttribute("value", "" + Ti(i.value));
                break;
              case "select":
                (e.multiple = !!i.multiple),
                  (u = i.value),
                  u != null
                    ? Qo(e, !!i.multiple, u, !1)
                    : i.defaultValue != null &&
                      Qo(e, !!i.multiple, i.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ia);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                i = !!i.autoFocus;
                break e;
              case "img":
                i = !0;
                break e;
              default:
                i = !1;
            }
          }
          i && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return $t(t), null;
    case 6:
      if (e && t.stateNode != null) Pg(e, t, e.memoizedProps, i);
      else {
        if (typeof i != "string" && t.stateNode === null) throw Error(Y(166));
        if (((n = Zi(fl.current)), Zi(yr.current), ua(t))) {
          if (
            ((i = t.stateNode),
            (n = t.memoizedProps),
            (i[mr] = t),
            (u = i.nodeValue !== n) && ((e = gn), e !== null))
          )
            switch (e.tag) {
              case 3:
                aa(i.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  aa(i.nodeValue, n, (e.mode & 1) !== 0);
            }
          u && (t.flags |= 4);
        } else
          (i = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(i)),
            (i[mr] = t),
            (t.stateNode = i);
      }
      return $t(t), null;
    case 13:
      if (
        (Je(tt),
        (i = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (et && hn !== null && t.mode & 1 && !(t.flags & 128))
          Kh(), ts(), (t.flags |= 98560), (u = !1);
        else if (((u = ua(t)), i !== null && i.dehydrated !== null)) {
          if (e === null) {
            if (!u) throw Error(Y(318));
            if (
              ((u = t.memoizedState),
              (u = u !== null ? u.dehydrated : null),
              !u)
            )
              throw Error(Y(317));
            u[mr] = t;
          } else
            ts(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          $t(t), (u = !1);
        } else Xn !== null && (nf(Xn), (Xn = null)), (u = !0);
        if (!u) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((i = i !== null),
          i !== (e !== null && e.memoizedState !== null) &&
            i &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || tt.current & 1 ? _t === 0 && (_t = 3) : qf())),
          t.updateQueue !== null && (t.flags |= 4),
          $t(t),
          null);
    case 4:
      return (
        rs(), Xc(e, t), e === null && ll(t.stateNode.containerInfo), $t(t), null
      );
    case 10:
      return jf(t.type._context), $t(t), null;
    case 17:
      return on(t.type) && Ra(), $t(t), null;
    case 19:
      if ((Je(tt), (u = t.memoizedState), u === null)) return $t(t), null;
      if (((i = (t.flags & 128) !== 0), (g = u.rendering), g === null))
        if (i) zs(u, !1);
        else {
          if (_t !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((g = Ua(e)), g !== null)) {
                for (
                  t.flags |= 128,
                    zs(u, !1),
                    i = g.updateQueue,
                    i !== null && ((t.updateQueue = i), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    i = n,
                    n = t.child;
                  n !== null;

                )
                  (u = n),
                    (e = i),
                    (u.flags &= 14680066),
                    (g = u.alternate),
                    g === null
                      ? ((u.childLanes = 0),
                        (u.lanes = e),
                        (u.child = null),
                        (u.subtreeFlags = 0),
                        (u.memoizedProps = null),
                        (u.memoizedState = null),
                        (u.updateQueue = null),
                        (u.dependencies = null),
                        (u.stateNode = null))
                      : ((u.childLanes = g.childLanes),
                        (u.lanes = g.lanes),
                        (u.child = g.child),
                        (u.subtreeFlags = 0),
                        (u.deletions = null),
                        (u.memoizedProps = g.memoizedProps),
                        (u.memoizedState = g.memoizedState),
                        (u.updateQueue = g.updateQueue),
                        (u.type = g.type),
                        (e = g.dependencies),
                        (u.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return Ge(tt, (tt.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          u.tail !== null &&
            ct() > os &&
            ((t.flags |= 128), (i = !0), zs(u, !1), (t.lanes = 4194304));
        }
      else {
        if (!i)
          if (((e = Ua(g)), e !== null)) {
            if (
              ((t.flags |= 128),
              (i = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              zs(u, !0),
              u.tail === null && u.tailMode === "hidden" && !g.alternate && !et)
            )
              return $t(t), null;
          } else
            2 * ct() - u.renderingStartTime > os &&
              n !== 1073741824 &&
              ((t.flags |= 128), (i = !0), zs(u, !1), (t.lanes = 4194304));
        u.isBackwards
          ? ((g.sibling = t.child), (t.child = g))
          : ((n = u.last),
            n !== null ? (n.sibling = g) : (t.child = g),
            (u.last = g));
      }
      return u.tail !== null
        ? ((t = u.tail),
          (u.rendering = t),
          (u.tail = t.sibling),
          (u.renderingStartTime = ct()),
          (t.sibling = null),
          (n = tt.current),
          Ge(tt, i ? (n & 1) | 2 : n & 1),
          t)
        : ($t(t), null);
    case 22:
    case 23:
      return (
        Vf(),
        (i = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== i && (t.flags |= 8192),
        i && t.mode & 1
          ? pn & 1073741824 && ($t(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : $t(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(Y(156, t.tag));
}
function o0(e, t) {
  switch ((Ef(t), t.tag)) {
    case 1:
      return (
        on(t.type) && Ra(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        rs(),
        Je(rn),
        Je(Ht),
        Df(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Lf(t), null;
    case 13:
      if (
        (Je(tt), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(Y(340));
        ts();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return Je(tt), null;
    case 4:
      return rs(), null;
    case 10:
      return jf(t.type._context), null;
    case 22:
    case 23:
      return Vf(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var da = !1,
  Ft = !1,
  s0 = typeof WeakSet == "function" ? WeakSet : Set,
  se = null;
function Vo(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (i) {
        st(e, t, i);
      }
    else n.current = null;
}
function Yc(e, t, n) {
  try {
    n();
  } catch (i) {
    st(e, t, i);
  }
}
var Sp = !1;
function l0(e, t) {
  if (((Pc = La), (e = Rh()), kf(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var i = n.getSelection && n.getSelection();
        if (i && i.rangeCount !== 0) {
          n = i.anchorNode;
          var l = i.anchorOffset,
            u = i.focusNode;
          i = i.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var g = 0,
            _ = -1,
            x = -1,
            j = 0,
            W = 0,
            B = e,
            z = null;
          t: for (;;) {
            for (
              var K;
              B !== n || (l !== 0 && B.nodeType !== 3) || (_ = g + l),
                B !== u || (i !== 0 && B.nodeType !== 3) || (x = g + i),
                B.nodeType === 3 && (g += B.nodeValue.length),
                (K = B.firstChild) !== null;

            )
              (z = B), (B = K);
            for (;;) {
              if (B === e) break t;
              if (
                (z === n && ++j === l && (_ = g),
                z === u && ++W === i && (x = g),
                (K = B.nextSibling) !== null)
              )
                break;
              (B = z), (z = B.parentNode);
            }
            B = K;
          }
          n = _ === -1 || x === -1 ? null : { start: _, end: x };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (
    Lc = { focusedElem: e, selectionRange: n }, La = !1, se = t;
    se !== null;

  )
    if (((t = se), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (se = e);
    else
      for (; se !== null; ) {
        t = se;
        try {
          var U = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (U !== null) {
                  var V = U.memoizedProps,
                    _e = U.memoizedState,
                    C = t.stateNode,
                    E = C.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? V : qn(t.type, V),
                      _e
                    );
                  C.__reactInternalSnapshotBeforeUpdate = E;
                }
                break;
              case 3:
                var A = t.stateNode.containerInfo;
                A.nodeType === 1
                  ? (A.textContent = "")
                  : A.nodeType === 9 &&
                    A.documentElement &&
                    A.removeChild(A.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(Y(163));
            }
        } catch (Q) {
          st(t, t.return, Q);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (se = e);
          break;
        }
        se = t.return;
      }
  return (U = Sp), (Sp = !1), U;
}
function Ks(e, t, n) {
  var i = t.updateQueue;
  if (((i = i !== null ? i.lastEffect : null), i !== null)) {
    var l = (i = i.next);
    do {
      if ((l.tag & e) === e) {
        var u = l.destroy;
        (l.destroy = void 0), u !== void 0 && Yc(t, n, u);
      }
      l = l.next;
    } while (l !== i);
  }
}
function uu(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var i = n.create;
        n.destroy = i();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Kc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Lg(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Lg(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[mr], delete t[ul], delete t[Ic], delete t[Wy], delete t[Uy])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Dg(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function kp(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Dg(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Gc(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ia));
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Gc(e, t, n), e = e.sibling; e !== null; ) Gc(e, t, n), (e = e.sibling);
}
function Zc(e, t, n) {
  var i = e.tag;
  if (i === 5 || i === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (i !== 4 && ((e = e.child), e !== null))
    for (Zc(e, t, n), e = e.sibling; e !== null; ) Zc(e, t, n), (e = e.sibling);
}
var Pt = null,
  Qn = !1;
function ui(e, t, n) {
  for (n = n.child; n !== null; ) Mg(e, t, n), (n = n.sibling);
}
function Mg(e, t, n) {
  if (vr && typeof vr.onCommitFiberUnmount == "function")
    try {
      vr.onCommitFiberUnmount(tu, n);
    } catch {}
  switch (n.tag) {
    case 5:
      Ft || Vo(n, t);
    case 6:
      var i = Pt,
        l = Qn;
      (Pt = null),
        ui(e, t, n),
        (Pt = i),
        (Qn = l),
        Pt !== null &&
          (Qn
            ? ((e = Pt),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Pt.removeChild(n.stateNode));
      break;
    case 18:
      Pt !== null &&
        (Qn
          ? ((e = Pt),
            (n = n.stateNode),
            e.nodeType === 8
              ? tc(e.parentNode, n)
              : e.nodeType === 1 && tc(e, n),
            il(e))
          : tc(Pt, n.stateNode));
      break;
    case 4:
      (i = Pt),
        (l = Qn),
        (Pt = n.stateNode.containerInfo),
        (Qn = !0),
        ui(e, t, n),
        (Pt = i),
        (Qn = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Ft &&
        ((i = n.updateQueue), i !== null && ((i = i.lastEffect), i !== null))
      ) {
        l = i = i.next;
        do {
          var u = l,
            g = u.destroy;
          (u = u.tag),
            g !== void 0 && (u & 2 || u & 4) && Yc(n, t, g),
            (l = l.next);
        } while (l !== i);
      }
      ui(e, t, n);
      break;
    case 1:
      if (
        !Ft &&
        (Vo(n, t),
        (i = n.stateNode),
        typeof i.componentWillUnmount == "function")
      )
        try {
          (i.props = n.memoizedProps),
            (i.state = n.memoizedState),
            i.componentWillUnmount();
        } catch (_) {
          st(n, t, _);
        }
      ui(e, t, n);
      break;
    case 21:
      ui(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((Ft = (i = Ft) || n.memoizedState !== null), ui(e, t, n), (Ft = i))
        : ui(e, t, n);
      break;
    default:
      ui(e, t, n);
  }
}
function Cp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new s0()),
      t.forEach(function (i) {
        var l = m0.bind(null, e, i);
        n.has(i) || (n.add(i), i.then(l, l));
      });
  }
}
function Vn(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var i = 0; i < n.length; i++) {
      var l = n[i];
      try {
        var u = e,
          g = t,
          _ = g;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 5:
              (Pt = _.stateNode), (Qn = !1);
              break e;
            case 3:
              (Pt = _.stateNode.containerInfo), (Qn = !0);
              break e;
            case 4:
              (Pt = _.stateNode.containerInfo), (Qn = !0);
              break e;
          }
          _ = _.return;
        }
        if (Pt === null) throw Error(Y(160));
        Mg(u, g, l), (Pt = null), (Qn = !1);
        var x = l.alternate;
        x !== null && (x.return = null), (l.return = null);
      } catch (j) {
        st(l, t, j);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Ig(t, e), (t = t.sibling);
}
function Ig(e, t) {
  var n = e.alternate,
    i = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((Vn(t, e), hr(e), i & 4)) {
        try {
          Ks(3, e, e.return), uu(3, e);
        } catch (V) {
          st(e, e.return, V);
        }
        try {
          Ks(5, e, e.return);
        } catch (V) {
          st(e, e.return, V);
        }
      }
      break;
    case 1:
      Vn(t, e), hr(e), i & 512 && n !== null && Vo(n, n.return);
      break;
    case 5:
      if (
        (Vn(t, e),
        hr(e),
        i & 512 && n !== null && Vo(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          el(l, "");
        } catch (V) {
          st(e, e.return, V);
        }
      }
      if (i & 4 && ((l = e.stateNode), l != null)) {
        var u = e.memoizedProps,
          g = n !== null ? n.memoizedProps : u,
          _ = e.type,
          x = e.updateQueue;
        if (((e.updateQueue = null), x !== null))
          try {
            _ === "input" && u.type === "radio" && u.name != null && ih(l, u),
              Sc(_, g);
            var j = Sc(_, u);
            for (g = 0; g < x.length; g += 2) {
              var W = x[g],
                B = x[g + 1];
              W === "style"
                ? uh(l, B)
                : W === "dangerouslySetInnerHTML"
                ? lh(l, B)
                : W === "children"
                ? el(l, B)
                : cf(l, W, B, j);
            }
            switch (_) {
              case "input":
                vc(l, u);
                break;
              case "textarea":
                oh(l, u);
                break;
              case "select":
                var z = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var K = u.value;
                K != null
                  ? Qo(l, !!u.multiple, K, !1)
                  : z !== !!u.multiple &&
                    (u.defaultValue != null
                      ? Qo(l, !!u.multiple, u.defaultValue, !0)
                      : Qo(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[ul] = u;
          } catch (V) {
            st(e, e.return, V);
          }
      }
      break;
    case 6:
      if ((Vn(t, e), hr(e), i & 4)) {
        if (e.stateNode === null) throw Error(Y(162));
        (l = e.stateNode), (u = e.memoizedProps);
        try {
          l.nodeValue = u;
        } catch (V) {
          st(e, e.return, V);
        }
      }
      break;
    case 3:
      if (
        (Vn(t, e), hr(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          il(t.containerInfo);
        } catch (V) {
          st(e, e.return, V);
        }
      break;
    case 4:
      Vn(t, e), hr(e);
      break;
    case 13:
      Vn(t, e),
        hr(e),
        (l = e.child),
        l.flags & 8192 &&
          ((u = l.memoizedState !== null),
          (l.stateNode.isHidden = u),
          !u ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Wf = ct())),
        i & 4 && Cp(e);
      break;
    case 22:
      if (
        ((W = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Ft = (j = Ft) || W), Vn(t, e), (Ft = j)) : Vn(t, e),
        hr(e),
        i & 8192)
      ) {
        if (
          ((j = e.memoizedState !== null),
          (e.stateNode.isHidden = j) && !W && e.mode & 1)
        )
          for (se = e, W = e.child; W !== null; ) {
            for (B = se = W; se !== null; ) {
              switch (((z = se), (K = z.child), z.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ks(4, z, z.return);
                  break;
                case 1:
                  Vo(z, z.return);
                  var U = z.stateNode;
                  if (typeof U.componentWillUnmount == "function") {
                    (i = z), (n = z.return);
                    try {
                      (t = i),
                        (U.props = t.memoizedProps),
                        (U.state = t.memoizedState),
                        U.componentWillUnmount();
                    } catch (V) {
                      st(i, n, V);
                    }
                  }
                  break;
                case 5:
                  Vo(z, z.return);
                  break;
                case 22:
                  if (z.memoizedState !== null) {
                    Tp(B);
                    continue;
                  }
              }
              K !== null ? ((K.return = z), (se = K)) : Tp(B);
            }
            W = W.sibling;
          }
        e: for (W = null, B = e; ; ) {
          if (B.tag === 5) {
            if (W === null) {
              W = B;
              try {
                (l = B.stateNode),
                  j
                    ? ((u = l.style),
                      typeof u.setProperty == "function"
                        ? u.setProperty("display", "none", "important")
                        : (u.display = "none"))
                    : ((_ = B.stateNode),
                      (x = B.memoizedProps.style),
                      (g =
                        x != null && x.hasOwnProperty("display")
                          ? x.display
                          : null),
                      (_.style.display = ah("display", g)));
              } catch (V) {
                st(e, e.return, V);
              }
            }
          } else if (B.tag === 6) {
            if (W === null)
              try {
                B.stateNode.nodeValue = j ? "" : B.memoizedProps;
              } catch (V) {
                st(e, e.return, V);
              }
          } else if (
            ((B.tag !== 22 && B.tag !== 23) ||
              B.memoizedState === null ||
              B === e) &&
            B.child !== null
          ) {
            (B.child.return = B), (B = B.child);
            continue;
          }
          if (B === e) break e;
          for (; B.sibling === null; ) {
            if (B.return === null || B.return === e) break e;
            W === B && (W = null), (B = B.return);
          }
          W === B && (W = null), (B.sibling.return = B.return), (B = B.sibling);
        }
      }
      break;
    case 19:
      Vn(t, e), hr(e), i & 4 && Cp(e);
      break;
    case 21:
      break;
    default:
      Vn(t, e), hr(e);
  }
}
function hr(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Dg(n)) {
            var i = n;
            break e;
          }
          n = n.return;
        }
        throw Error(Y(160));
      }
      switch (i.tag) {
        case 5:
          var l = i.stateNode;
          i.flags & 32 && (el(l, ""), (i.flags &= -33));
          var u = kp(e);
          Zc(e, u, l);
          break;
        case 3:
        case 4:
          var g = i.stateNode.containerInfo,
            _ = kp(e);
          Gc(e, _, g);
          break;
        default:
          throw Error(Y(161));
      }
    } catch (x) {
      st(e, e.return, x);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function a0(e, t, n) {
  (se = e), Rg(e);
}
function Rg(e, t, n) {
  for (var i = (e.mode & 1) !== 0; se !== null; ) {
    var l = se,
      u = l.child;
    if (l.tag === 22 && i) {
      var g = l.memoizedState !== null || da;
      if (!g) {
        var _ = l.alternate,
          x = (_ !== null && _.memoizedState !== null) || Ft;
        _ = da;
        var j = Ft;
        if (((da = g), (Ft = x) && !j))
          for (se = l; se !== null; )
            (g = se),
              (x = g.child),
              g.tag === 22 && g.memoizedState !== null
                ? Np(l)
                : x !== null
                ? ((x.return = g), (se = x))
                : Np(l);
        for (; u !== null; ) (se = u), Rg(u), (u = u.sibling);
        (se = l), (da = _), (Ft = j);
      }
      Ep(e);
    } else
      l.subtreeFlags & 8772 && u !== null ? ((u.return = l), (se = u)) : Ep(e);
  }
}
function Ep(e) {
  for (; se !== null; ) {
    var t = se;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Ft || uu(5, t);
              break;
            case 1:
              var i = t.stateNode;
              if (t.flags & 4 && !Ft)
                if (n === null) i.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : qn(t.type, n.memoizedProps);
                  i.componentDidUpdate(
                    l,
                    n.memoizedState,
                    i.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var u = t.updateQueue;
              u !== null && up(t, u, i);
              break;
            case 3:
              var g = t.updateQueue;
              if (g !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                up(t, g, n);
              }
              break;
            case 5:
              var _ = t.stateNode;
              if (n === null && t.flags & 4) {
                n = _;
                var x = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    x.autoFocus && n.focus();
                    break;
                  case "img":
                    x.src && (n.src = x.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var j = t.alternate;
                if (j !== null) {
                  var W = j.memoizedState;
                  if (W !== null) {
                    var B = W.dehydrated;
                    B !== null && il(B);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(Y(163));
          }
        Ft || (t.flags & 512 && Kc(t));
      } catch (z) {
        st(t, t.return, z);
      }
    }
    if (t === e) {
      se = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (se = n);
      break;
    }
    se = t.return;
  }
}
function Tp(e) {
  for (; se !== null; ) {
    var t = se;
    if (t === e) {
      se = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (se = n);
      break;
    }
    se = t.return;
  }
}
function Np(e) {
  for (; se !== null; ) {
    var t = se;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            uu(4, t);
          } catch (x) {
            st(t, n, x);
          }
          break;
        case 1:
          var i = t.stateNode;
          if (typeof i.componentDidMount == "function") {
            var l = t.return;
            try {
              i.componentDidMount();
            } catch (x) {
              st(t, l, x);
            }
          }
          var u = t.return;
          try {
            Kc(t);
          } catch (x) {
            st(t, u, x);
          }
          break;
        case 5:
          var g = t.return;
          try {
            Kc(t);
          } catch (x) {
            st(t, g, x);
          }
      }
    } catch (x) {
      st(t, t.return, x);
    }
    if (t === e) {
      se = null;
      break;
    }
    var _ = t.sibling;
    if (_ !== null) {
      (_.return = t.return), (se = _);
      break;
    }
    se = t.return;
  }
}
var u0 = Math.ceil,
  Qa = Wr.ReactCurrentDispatcher,
  Hf = Wr.ReactCurrentOwner,
  Ln = Wr.ReactCurrentBatchConfig,
  Re = 0,
  kt = null,
  pt = null,
  Lt = 0,
  pn = 0,
  qo = ji(0),
  _t = 0,
  gl = null,
  oo = 0,
  cu = 0,
  Bf = 0,
  Gs = null,
  tn = null,
  Wf = 0,
  os = 1 / 0,
  Lr = null,
  Xa = !1,
  Jc = null,
  ki = null,
  pa = !1,
  vi = null,
  Ya = 0,
  Zs = 0,
  ef = null,
  Ea = -1,
  Ta = 0;
function Yt() {
  return Re & 6 ? ct() : Ea !== -1 ? Ea : (Ea = ct());
}
function Ci(e) {
  return e.mode & 1
    ? Re & 2 && Lt !== 0
      ? Lt & -Lt
      : qy.transition !== null
      ? (Ta === 0 && (Ta = xh()), Ta)
      : ((e = Ue),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : bh(e.type))),
        e)
    : 1;
}
function Kn(e, t, n, i) {
  if (50 < Zs) throw ((Zs = 0), (ef = null), Error(Y(185)));
  vl(e, n, i),
    (!(Re & 2) || e !== kt) &&
      (e === kt && (!(Re & 2) && (cu |= n), _t === 4 && gi(e, Lt)),
      sn(e, i),
      n === 1 && Re === 0 && !(t.mode & 1) && ((os = ct() + 500), su && Oi()));
}
function sn(e, t) {
  var n = e.callbackNode;
  qv(e, t);
  var i = Pa(e, e === kt ? Lt : 0);
  if (i === 0)
    n !== null && Id(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = i & -i), e.callbackPriority !== t)) {
    if ((n != null && Id(n), t === 1))
      e.tag === 0 ? Vy(bp.bind(null, e)) : Qh(bp.bind(null, e)),
        Hy(function () {
          !(Re & 6) && Oi();
        }),
        (n = null);
    else {
      switch (Sh(i)) {
        case 1:
          n = gf;
          break;
        case 4:
          n = _h;
          break;
        case 16:
          n = Aa;
          break;
        case 536870912:
          n = wh;
          break;
        default:
          n = Aa;
      }
      n = Vg(n, zg.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function zg(e, t) {
  if (((Ea = -1), (Ta = 0), Re & 6)) throw Error(Y(327));
  var n = e.callbackNode;
  if (Zo() && e.callbackNode !== n) return null;
  var i = Pa(e, e === kt ? Lt : 0);
  if (i === 0) return null;
  if (i & 30 || i & e.expiredLanes || t) t = Ka(e, i);
  else {
    t = i;
    var l = Re;
    Re |= 2;
    var u = Fg();
    (kt !== e || Lt !== t) && ((Lr = null), (os = ct() + 500), eo(e, t));
    do
      try {
        d0();
        break;
      } catch (_) {
        $g(e, _);
      }
    while (!0);
    bf(),
      (Qa.current = u),
      (Re = l),
      pt !== null ? (t = 0) : ((kt = null), (Lt = 0), (t = _t));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = Nc(e)), l !== 0 && ((i = l), (t = tf(e, l)))), t === 1)
    )
      throw ((n = gl), eo(e, 0), gi(e, i), sn(e, ct()), n);
    if (t === 6) gi(e, i);
    else {
      if (
        ((l = e.current.alternate),
        !(i & 30) &&
          !c0(l) &&
          ((t = Ka(e, i)),
          t === 2 && ((u = Nc(e)), u !== 0 && ((i = u), (t = tf(e, u)))),
          t === 1))
      )
        throw ((n = gl), eo(e, 0), gi(e, i), sn(e, ct()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = i), t)) {
        case 0:
        case 1:
          throw Error(Y(345));
        case 2:
          Yi(e, tn, Lr);
          break;
        case 3:
          if (
            (gi(e, i), (i & 130023424) === i && ((t = Wf + 500 - ct()), 10 < t))
          ) {
            if (Pa(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & i) !== i)) {
              Yt(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = Mc(Yi.bind(null, e, tn, Lr), t);
            break;
          }
          Yi(e, tn, Lr);
          break;
        case 4:
          if ((gi(e, i), (i & 4194240) === i)) break;
          for (t = e.eventTimes, l = -1; 0 < i; ) {
            var g = 31 - Yn(i);
            (u = 1 << g), (g = t[g]), g > l && (l = g), (i &= ~u);
          }
          if (
            ((i = l),
            (i = ct() - i),
            (i =
              (120 > i
                ? 120
                : 480 > i
                ? 480
                : 1080 > i
                ? 1080
                : 1920 > i
                ? 1920
                : 3e3 > i
                ? 3e3
                : 4320 > i
                ? 4320
                : 1960 * u0(i / 1960)) - i),
            10 < i)
          ) {
            e.timeoutHandle = Mc(Yi.bind(null, e, tn, Lr), i);
            break;
          }
          Yi(e, tn, Lr);
          break;
        case 5:
          Yi(e, tn, Lr);
          break;
        default:
          throw Error(Y(329));
      }
    }
  }
  return sn(e, ct()), e.callbackNode === n ? zg.bind(null, e) : null;
}
function tf(e, t) {
  var n = Gs;
  return (
    e.current.memoizedState.isDehydrated && (eo(e, t).flags |= 256),
    (e = Ka(e, t)),
    e !== 2 && ((t = tn), (tn = n), t !== null && nf(t)),
    e
  );
}
function nf(e) {
  tn === null ? (tn = e) : tn.push.apply(tn, e);
}
function c0(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var i = 0; i < n.length; i++) {
          var l = n[i],
            u = l.getSnapshot;
          l = l.value;
          try {
            if (!Gn(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function gi(e, t) {
  for (
    t &= ~Bf,
      t &= ~cu,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Yn(t),
      i = 1 << n;
    (e[n] = -1), (t &= ~i);
  }
}
function bp(e) {
  if (Re & 6) throw Error(Y(327));
  Zo();
  var t = Pa(e, 0);
  if (!(t & 1)) return sn(e, ct()), null;
  var n = Ka(e, t);
  if (e.tag !== 0 && n === 2) {
    var i = Nc(e);
    i !== 0 && ((t = i), (n = tf(e, i)));
  }
  if (n === 1) throw ((n = gl), eo(e, 0), gi(e, t), sn(e, ct()), n);
  if (n === 6) throw Error(Y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Yi(e, tn, Lr),
    sn(e, ct()),
    null
  );
}
function Uf(e, t) {
  var n = Re;
  Re |= 1;
  try {
    return e(t);
  } finally {
    (Re = n), Re === 0 && ((os = ct() + 500), su && Oi());
  }
}
function so(e) {
  vi !== null && vi.tag === 0 && !(Re & 6) && Zo();
  var t = Re;
  Re |= 1;
  var n = Ln.transition,
    i = Ue;
  try {
    if (((Ln.transition = null), (Ue = 1), e)) return e();
  } finally {
    (Ue = i), (Ln.transition = n), (Re = t), !(Re & 6) && Oi();
  }
}
function Vf() {
  (pn = qo.current), Je(qo);
}
function eo(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Fy(n)), pt !== null))
    for (n = pt.return; n !== null; ) {
      var i = n;
      switch ((Ef(i), i.tag)) {
        case 1:
          (i = i.type.childContextTypes), i != null && Ra();
          break;
        case 3:
          rs(), Je(rn), Je(Ht), Df();
          break;
        case 5:
          Lf(i);
          break;
        case 4:
          rs();
          break;
        case 13:
          Je(tt);
          break;
        case 19:
          Je(tt);
          break;
        case 10:
          jf(i.type._context);
          break;
        case 22:
        case 23:
          Vf();
      }
      n = n.return;
    }
  if (
    ((kt = e),
    (pt = e = Ei(e.current, null)),
    (Lt = pn = t),
    (_t = 0),
    (gl = null),
    (Bf = cu = oo = 0),
    (tn = Gs = null),
    Gi !== null)
  ) {
    for (t = 0; t < Gi.length; t++)
      if (((n = Gi[t]), (i = n.interleaved), i !== null)) {
        n.interleaved = null;
        var l = i.next,
          u = n.pending;
        if (u !== null) {
          var g = u.next;
          (u.next = l), (i.next = g);
        }
        n.pending = i;
      }
    Gi = null;
  }
  return e;
}
function $g(e, t) {
  do {
    var n = pt;
    try {
      if ((bf(), (Sa.current = qa), Va)) {
        for (var i = nt.memoizedState; i !== null; ) {
          var l = i.queue;
          l !== null && (l.pending = null), (i = i.next);
        }
        Va = !1;
      }
      if (
        ((io = 0),
        (St = yt = nt = null),
        (Ys = !1),
        (dl = 0),
        (Hf.current = null),
        n === null || n.return === null)
      ) {
        (_t = 1), (gl = t), (pt = null);
        break;
      }
      e: {
        var u = e,
          g = n.return,
          _ = n,
          x = t;
        if (
          ((t = Lt),
          (_.flags |= 32768),
          x !== null && typeof x == "object" && typeof x.then == "function")
        ) {
          var j = x,
            W = _,
            B = W.tag;
          if (!(W.mode & 1) && (B === 0 || B === 11 || B === 15)) {
            var z = W.alternate;
            z
              ? ((W.updateQueue = z.updateQueue),
                (W.memoizedState = z.memoizedState),
                (W.lanes = z.lanes))
              : ((W.updateQueue = null), (W.memoizedState = null));
          }
          var K = gp(g);
          if (K !== null) {
            (K.flags &= -257),
              mp(K, g, _, u, t),
              K.mode & 1 && hp(u, j, t),
              (t = K),
              (x = j);
            var U = t.updateQueue;
            if (U === null) {
              var V = new Set();
              V.add(x), (t.updateQueue = V);
            } else U.add(x);
            break e;
          } else {
            if (!(t & 1)) {
              hp(u, j, t), qf();
              break e;
            }
            x = Error(Y(426));
          }
        } else if (et && _.mode & 1) {
          var _e = gp(g);
          if (_e !== null) {
            !(_e.flags & 65536) && (_e.flags |= 256),
              mp(_e, g, _, u, t),
              Tf(is(x, _));
            break e;
          }
        }
        (u = x = is(x, _)),
          _t !== 4 && (_t = 2),
          Gs === null ? (Gs = [u]) : Gs.push(u),
          (u = g);
        do {
          switch (u.tag) {
            case 3:
              (u.flags |= 65536), (t &= -t), (u.lanes |= t);
              var C = Sg(u, x, t);
              ap(u, C);
              break e;
            case 1:
              _ = x;
              var E = u.type,
                A = u.stateNode;
              if (
                !(u.flags & 128) &&
                (typeof E.getDerivedStateFromError == "function" ||
                  (A !== null &&
                    typeof A.componentDidCatch == "function" &&
                    (ki === null || !ki.has(A))))
              ) {
                (u.flags |= 65536), (t &= -t), (u.lanes |= t);
                var Q = kg(u, _, t);
                ap(u, Q);
                break e;
              }
          }
          u = u.return;
        } while (u !== null);
      }
      Bg(n);
    } catch (J) {
      (t = J), pt === n && n !== null && (pt = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Fg() {
  var e = Qa.current;
  return (Qa.current = qa), e === null ? qa : e;
}
function qf() {
  (_t === 0 || _t === 3 || _t === 2) && (_t = 4),
    kt === null || (!(oo & 268435455) && !(cu & 268435455)) || gi(kt, Lt);
}
function Ka(e, t) {
  var n = Re;
  Re |= 2;
  var i = Fg();
  (kt !== e || Lt !== t) && ((Lr = null), eo(e, t));
  do
    try {
      f0();
      break;
    } catch (l) {
      $g(e, l);
    }
  while (!0);
  if ((bf(), (Re = n), (Qa.current = i), pt !== null)) throw Error(Y(261));
  return (kt = null), (Lt = 0), _t;
}
function f0() {
  for (; pt !== null; ) Hg(pt);
}
function d0() {
  for (; pt !== null && !Rv(); ) Hg(pt);
}
function Hg(e) {
  var t = Ug(e.alternate, e, pn);
  (e.memoizedProps = e.pendingProps),
    t === null ? Bg(e) : (pt = t),
    (Hf.current = null);
}
function Bg(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = o0(n, t)), n !== null)) {
        (n.flags &= 32767), (pt = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (_t = 6), (pt = null);
        return;
      }
    } else if (((n = i0(n, t, pn)), n !== null)) {
      pt = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pt = t;
      return;
    }
    pt = t = e;
  } while (t !== null);
  _t === 0 && (_t = 5);
}
function Yi(e, t, n) {
  var i = Ue,
    l = Ln.transition;
  try {
    (Ln.transition = null), (Ue = 1), p0(e, t, n, i);
  } finally {
    (Ln.transition = l), (Ue = i);
  }
  return null;
}
function p0(e, t, n, i) {
  do Zo();
  while (vi !== null);
  if (Re & 6) throw Error(Y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(Y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var u = n.lanes | n.childLanes;
  if (
    (Qv(e, u),
    e === kt && ((pt = kt = null), (Lt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      pa ||
      ((pa = !0),
      Vg(Aa, function () {
        return Zo(), null;
      })),
    (u = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || u)
  ) {
    (u = Ln.transition), (Ln.transition = null);
    var g = Ue;
    Ue = 1;
    var _ = Re;
    (Re |= 4),
      (Hf.current = null),
      l0(e, n),
      Ig(n, e),
      Ly(Lc),
      (La = !!Pc),
      (Lc = Pc = null),
      (e.current = n),
      a0(n),
      zv(),
      (Re = _),
      (Ue = g),
      (Ln.transition = u);
  } else e.current = n;
  if (
    (pa && ((pa = !1), (vi = e), (Ya = l)),
    (u = e.pendingLanes),
    u === 0 && (ki = null),
    Hv(n.stateNode),
    sn(e, ct()),
    t !== null)
  )
    for (i = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]), i(l.value, { componentStack: l.stack, digest: l.digest });
  if (Xa) throw ((Xa = !1), (e = Jc), (Jc = null), e);
  return (
    Ya & 1 && e.tag !== 0 && Zo(),
    (u = e.pendingLanes),
    u & 1 ? (e === ef ? Zs++ : ((Zs = 0), (ef = e))) : (Zs = 0),
    Oi(),
    null
  );
}
function Zo() {
  if (vi !== null) {
    var e = Sh(Ya),
      t = Ln.transition,
      n = Ue;
    try {
      if (((Ln.transition = null), (Ue = 16 > e ? 16 : e), vi === null))
        var i = !1;
      else {
        if (((e = vi), (vi = null), (Ya = 0), Re & 6)) throw Error(Y(331));
        var l = Re;
        for (Re |= 4, se = e.current; se !== null; ) {
          var u = se,
            g = u.child;
          if (se.flags & 16) {
            var _ = u.deletions;
            if (_ !== null) {
              for (var x = 0; x < _.length; x++) {
                var j = _[x];
                for (se = j; se !== null; ) {
                  var W = se;
                  switch (W.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ks(8, W, u);
                  }
                  var B = W.child;
                  if (B !== null) (B.return = W), (se = B);
                  else
                    for (; se !== null; ) {
                      W = se;
                      var z = W.sibling,
                        K = W.return;
                      if ((Lg(W), W === j)) {
                        se = null;
                        break;
                      }
                      if (z !== null) {
                        (z.return = K), (se = z);
                        break;
                      }
                      se = K;
                    }
                }
              }
              var U = u.alternate;
              if (U !== null) {
                var V = U.child;
                if (V !== null) {
                  U.child = null;
                  do {
                    var _e = V.sibling;
                    (V.sibling = null), (V = _e);
                  } while (V !== null);
                }
              }
              se = u;
            }
          }
          if (u.subtreeFlags & 2064 && g !== null) (g.return = u), (se = g);
          else
            e: for (; se !== null; ) {
              if (((u = se), u.flags & 2048))
                switch (u.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ks(9, u, u.return);
                }
              var C = u.sibling;
              if (C !== null) {
                (C.return = u.return), (se = C);
                break e;
              }
              se = u.return;
            }
        }
        var E = e.current;
        for (se = E; se !== null; ) {
          g = se;
          var A = g.child;
          if (g.subtreeFlags & 2064 && A !== null) (A.return = g), (se = A);
          else
            e: for (g = E; se !== null; ) {
              if (((_ = se), _.flags & 2048))
                try {
                  switch (_.tag) {
                    case 0:
                    case 11:
                    case 15:
                      uu(9, _);
                  }
                } catch (J) {
                  st(_, _.return, J);
                }
              if (_ === g) {
                se = null;
                break e;
              }
              var Q = _.sibling;
              if (Q !== null) {
                (Q.return = _.return), (se = Q);
                break e;
              }
              se = _.return;
            }
        }
        if (
          ((Re = l), Oi(), vr && typeof vr.onPostCommitFiberRoot == "function")
        )
          try {
            vr.onPostCommitFiberRoot(tu, e);
          } catch {}
        i = !0;
      }
      return i;
    } finally {
      (Ue = n), (Ln.transition = t);
    }
  }
  return !1;
}
function jp(e, t, n) {
  (t = is(n, t)),
    (t = Sg(e, t, 1)),
    (e = Si(e, t, 1)),
    (t = Yt()),
    e !== null && (vl(e, 1, t), sn(e, t));
}
function st(e, t, n) {
  if (e.tag === 3) jp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        jp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var i = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof i.componentDidCatch == "function" &&
            (ki === null || !ki.has(i)))
        ) {
          (e = is(n, e)),
            (e = kg(t, e, 1)),
            (t = Si(t, e, 1)),
            (e = Yt()),
            t !== null && (vl(t, 1, e), sn(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function h0(e, t, n) {
  var i = e.pingCache;
  i !== null && i.delete(t),
    (t = Yt()),
    (e.pingedLanes |= e.suspendedLanes & n),
    kt === e &&
      (Lt & n) === n &&
      (_t === 4 || (_t === 3 && (Lt & 130023424) === Lt && 500 > ct() - Wf)
        ? eo(e, 0)
        : (Bf |= n)),
    sn(e, t);
}
function Wg(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ra), (ra <<= 1), !(ra & 130023424) && (ra = 4194304))
      : (t = 1));
  var n = Yt();
  (e = Hr(e, t)), e !== null && (vl(e, t, n), sn(e, n));
}
function g0(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Wg(e, n);
}
function m0(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var i = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      i = e.stateNode;
      break;
    default:
      throw Error(Y(314));
  }
  i !== null && i.delete(t), Wg(e, n);
}
var Ug;
Ug = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || rn.current) nn = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (nn = !1), r0(e, t, n);
      nn = !!(e.flags & 131072);
    }
  else (nn = !1), et && t.flags & 1048576 && Xh(t, Fa, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var i = t.type;
      Ca(e, t), (e = t.pendingProps);
      var l = es(t, Ht.current);
      Go(t, n), (l = If(null, t, i, e, l, n));
      var u = Rf();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            on(i) ? ((u = !0), za(t)) : (u = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            Af(t),
            (l.updater = au),
            (t.stateNode = l),
            (l._reactInternals = t),
            Bc(t, i, e, n),
            (t = Vc(null, t, i, !0, u, n)))
          : ((t.tag = 0), et && u && Cf(t), Xt(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      i = t.elementType;
      e: {
        switch (
          (Ca(e, t),
          (e = t.pendingProps),
          (l = i._init),
          (i = l(i._payload)),
          (t.type = i),
          (l = t.tag = y0(i)),
          (e = qn(i, e)),
          l)
        ) {
          case 0:
            t = Uc(null, t, i, e, n);
            break e;
          case 1:
            t = _p(null, t, i, e, n);
            break e;
          case 11:
            t = vp(null, t, i, e, n);
            break e;
          case 14:
            t = yp(null, t, i, qn(i.type, e), n);
            break e;
        }
        throw Error(Y(306, i, ""));
      }
      return t;
    case 0:
      return (
        (i = t.type),
        (l = t.pendingProps),
        (l = t.elementType === i ? l : qn(i, l)),
        Uc(e, t, i, l, n)
      );
    case 1:
      return (
        (i = t.type),
        (l = t.pendingProps),
        (l = t.elementType === i ? l : qn(i, l)),
        _p(e, t, i, l, n)
      );
    case 3:
      e: {
        if ((Ng(t), e === null)) throw Error(Y(387));
        (i = t.pendingProps),
          (u = t.memoizedState),
          (l = u.element),
          eg(e, t),
          Wa(t, i, null, n);
        var g = t.memoizedState;
        if (((i = g.element), u.isDehydrated))
          if (
            ((u = {
              element: i,
              isDehydrated: !1,
              cache: g.cache,
              pendingSuspenseBoundaries: g.pendingSuspenseBoundaries,
              transitions: g.transitions,
            }),
            (t.updateQueue.baseState = u),
            (t.memoizedState = u),
            t.flags & 256)
          ) {
            (l = is(Error(Y(423)), t)), (t = wp(e, t, i, n, l));
            break e;
          } else if (i !== l) {
            (l = is(Error(Y(424)), t)), (t = wp(e, t, i, n, l));
            break e;
          } else
            for (
              hn = xi(t.stateNode.containerInfo.firstChild),
                gn = t,
                et = !0,
                Xn = null,
                n = Zh(t, null, i, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ts(), i === l)) {
            t = Br(e, t, n);
            break e;
          }
          Xt(e, t, i, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        tg(t),
        e === null && $c(t),
        (i = t.type),
        (l = t.pendingProps),
        (u = e !== null ? e.memoizedProps : null),
        (g = l.children),
        Dc(i, l) ? (g = null) : u !== null && Dc(i, u) && (t.flags |= 32),
        Tg(e, t),
        Xt(e, t, g, n),
        t.child
      );
    case 6:
      return e === null && $c(t), null;
    case 13:
      return bg(e, t, n);
    case 4:
      return (
        Pf(t, t.stateNode.containerInfo),
        (i = t.pendingProps),
        e === null ? (t.child = ns(t, null, i, n)) : Xt(e, t, i, n),
        t.child
      );
    case 11:
      return (
        (i = t.type),
        (l = t.pendingProps),
        (l = t.elementType === i ? l : qn(i, l)),
        vp(e, t, i, l, n)
      );
    case 7:
      return Xt(e, t, t.pendingProps, n), t.child;
    case 8:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Xt(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((i = t.type._context),
          (l = t.pendingProps),
          (u = t.memoizedProps),
          (g = l.value),
          Ge(Ha, i._currentValue),
          (i._currentValue = g),
          u !== null)
        )
          if (Gn(u.value, g)) {
            if (u.children === l.children && !rn.current) {
              t = Br(e, t, n);
              break e;
            }
          } else
            for (u = t.child, u !== null && (u.return = t); u !== null; ) {
              var _ = u.dependencies;
              if (_ !== null) {
                g = u.child;
                for (var x = _.firstContext; x !== null; ) {
                  if (x.context === i) {
                    if (u.tag === 1) {
                      (x = Rr(-1, n & -n)), (x.tag = 2);
                      var j = u.updateQueue;
                      if (j !== null) {
                        j = j.shared;
                        var W = j.pending;
                        W === null
                          ? (x.next = x)
                          : ((x.next = W.next), (W.next = x)),
                          (j.pending = x);
                      }
                    }
                    (u.lanes |= n),
                      (x = u.alternate),
                      x !== null && (x.lanes |= n),
                      Fc(u.return, n, t),
                      (_.lanes |= n);
                    break;
                  }
                  x = x.next;
                }
              } else if (u.tag === 10) g = u.type === t.type ? null : u.child;
              else if (u.tag === 18) {
                if (((g = u.return), g === null)) throw Error(Y(341));
                (g.lanes |= n),
                  (_ = g.alternate),
                  _ !== null && (_.lanes |= n),
                  Fc(g, n, t),
                  (g = u.sibling);
              } else g = u.child;
              if (g !== null) g.return = u;
              else
                for (g = u; g !== null; ) {
                  if (g === t) {
                    g = null;
                    break;
                  }
                  if (((u = g.sibling), u !== null)) {
                    (u.return = g.return), (g = u);
                    break;
                  }
                  g = g.return;
                }
              u = g;
            }
        Xt(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (i = t.pendingProps.children),
        Go(t, n),
        (l = Dn(l)),
        (i = i(l)),
        (t.flags |= 1),
        Xt(e, t, i, n),
        t.child
      );
    case 14:
      return (
        (i = t.type),
        (l = qn(i, t.pendingProps)),
        (l = qn(i.type, l)),
        yp(e, t, i, l, n)
      );
    case 15:
      return Cg(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (i = t.type),
        (l = t.pendingProps),
        (l = t.elementType === i ? l : qn(i, l)),
        Ca(e, t),
        (t.tag = 1),
        on(i) ? ((e = !0), za(t)) : (e = !1),
        Go(t, n),
        xg(t, i, l),
        Bc(t, i, l, n),
        Vc(null, t, i, !0, e, n)
      );
    case 19:
      return jg(e, t, n);
    case 22:
      return Eg(e, t, n);
  }
  throw Error(Y(156, t.tag));
};
function Vg(e, t) {
  return yh(e, t);
}
function v0(e, t, n, i) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = i),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Pn(e, t, n, i) {
  return new v0(e, t, n, i);
}
function Qf(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function y0(e) {
  if (typeof e == "function") return Qf(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === df)) return 11;
    if (e === pf) return 14;
  }
  return 2;
}
function Ei(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Pn(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Na(e, t, n, i, l, u) {
  var g = 2;
  if (((i = e), typeof e == "function")) Qf(e) && (g = 1);
  else if (typeof e == "string") g = 5;
  else
    e: switch (e) {
      case Io:
        return to(n.children, l, u, t);
      case ff:
        (g = 8), (l |= 8);
        break;
      case dc:
        return (
          (e = Pn(12, n, t, l | 2)), (e.elementType = dc), (e.lanes = u), e
        );
      case pc:
        return (e = Pn(13, n, t, l)), (e.elementType = pc), (e.lanes = u), e;
      case hc:
        return (e = Pn(19, n, t, l)), (e.elementType = hc), (e.lanes = u), e;
      case th:
        return fu(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Jp:
              g = 10;
              break e;
            case eh:
              g = 9;
              break e;
            case df:
              g = 11;
              break e;
            case pf:
              g = 14;
              break e;
            case di:
              (g = 16), (i = null);
              break e;
          }
        throw Error(Y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Pn(g, n, t, l)), (t.elementType = e), (t.type = i), (t.lanes = u), t
  );
}
function to(e, t, n, i) {
  return (e = Pn(7, e, i, t)), (e.lanes = n), e;
}
function fu(e, t, n, i) {
  return (
    (e = Pn(22, e, i, t)),
    (e.elementType = th),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function uc(e, t, n) {
  return (e = Pn(6, e, null, t)), (e.lanes = n), e;
}
function cc(e, t, n) {
  return (
    (t = Pn(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function _0(e, t, n, i, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Uu(0)),
    (this.expirationTimes = Uu(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Uu(0)),
    (this.identifierPrefix = i),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Xf(e, t, n, i, l, u, g, _, x) {
  return (
    (e = new _0(e, t, n, _, x)),
    t === 1 ? ((t = 1), u === !0 && (t |= 8)) : (t = 0),
    (u = Pn(3, null, null, t)),
    (e.current = u),
    (u.stateNode = e),
    (u.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    Af(u),
    e
  );
}
function w0(e, t, n) {
  var i = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Mo,
    key: i == null ? null : "" + i,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function qg(e) {
  if (!e) return Ni;
  e = e._reactInternals;
  e: {
    if (ao(e) !== e || e.tag !== 1) throw Error(Y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (on(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(Y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (on(n)) return qh(e, n, t);
  }
  return t;
}
function Qg(e, t, n, i, l, u, g, _, x) {
  return (
    (e = Xf(n, i, !0, e, l, u, g, _, x)),
    (e.context = qg(null)),
    (n = e.current),
    (i = Yt()),
    (l = Ci(n)),
    (u = Rr(i, l)),
    (u.callback = t ?? null),
    Si(n, u, l),
    (e.current.lanes = l),
    vl(e, l, i),
    sn(e, i),
    e
  );
}
function du(e, t, n, i) {
  var l = t.current,
    u = Yt(),
    g = Ci(l);
  return (
    (n = qg(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Rr(u, g)),
    (t.payload = { element: e }),
    (i = i === void 0 ? null : i),
    i !== null && (t.callback = i),
    (e = Si(l, t, g)),
    e !== null && (Kn(e, l, g, u), xa(e, l, g)),
    g
  );
}
function Ga(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Op(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Yf(e, t) {
  Op(e, t), (e = e.alternate) && Op(e, t);
}
function x0() {
  return null;
}
var Xg =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Kf(e) {
  this._internalRoot = e;
}
pu.prototype.render = Kf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(Y(409));
  du(e, t, null, null);
};
pu.prototype.unmount = Kf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    so(function () {
      du(null, e, null, null);
    }),
      (t[Fr] = null);
  }
};
function pu(e) {
  this._internalRoot = e;
}
pu.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Eh();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < hi.length && t !== 0 && t < hi[n].priority; n++);
    hi.splice(n, 0, e), n === 0 && Nh(e);
  }
};
function Gf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function hu(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Ap() {}
function S0(e, t, n, i, l) {
  if (l) {
    if (typeof i == "function") {
      var u = i;
      i = function () {
        var j = Ga(g);
        u.call(j);
      };
    }
    var g = Qg(t, i, e, 0, null, !1, !1, "", Ap);
    return (
      (e._reactRootContainer = g),
      (e[Fr] = g.current),
      ll(e.nodeType === 8 ? e.parentNode : e),
      so(),
      g
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof i == "function") {
    var _ = i;
    i = function () {
      var j = Ga(x);
      _.call(j);
    };
  }
  var x = Xf(e, 0, !1, null, null, !1, !1, "", Ap);
  return (
    (e._reactRootContainer = x),
    (e[Fr] = x.current),
    ll(e.nodeType === 8 ? e.parentNode : e),
    so(function () {
      du(t, x, n, i);
    }),
    x
  );
}
function gu(e, t, n, i, l) {
  var u = n._reactRootContainer;
  if (u) {
    var g = u;
    if (typeof l == "function") {
      var _ = l;
      l = function () {
        var x = Ga(g);
        _.call(x);
      };
    }
    du(t, g, e, l);
  } else g = S0(n, t, e, l, i);
  return Ga(g);
}
kh = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bs(t.pendingLanes);
        n !== 0 &&
          (mf(t, n | 1), sn(t, ct()), !(Re & 6) && ((os = ct() + 500), Oi()));
      }
      break;
    case 13:
      so(function () {
        var i = Hr(e, 1);
        if (i !== null) {
          var l = Yt();
          Kn(i, e, 1, l);
        }
      }),
        Yf(e, 1);
  }
};
vf = function (e) {
  if (e.tag === 13) {
    var t = Hr(e, 134217728);
    if (t !== null) {
      var n = Yt();
      Kn(t, e, 134217728, n);
    }
    Yf(e, 134217728);
  }
};
Ch = function (e) {
  if (e.tag === 13) {
    var t = Ci(e),
      n = Hr(e, t);
    if (n !== null) {
      var i = Yt();
      Kn(n, e, t, i);
    }
    Yf(e, t);
  }
};
Eh = function () {
  return Ue;
};
Th = function (e, t) {
  var n = Ue;
  try {
    return (Ue = e), t();
  } finally {
    Ue = n;
  }
};
Cc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((vc(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var i = n[t];
          if (i !== e && i.form === e.form) {
            var l = ou(i);
            if (!l) throw Error(Y(90));
            rh(i), vc(i, l);
          }
        }
      }
      break;
    case "textarea":
      oh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Qo(e, !!n.multiple, t, !1);
  }
};
dh = Uf;
ph = so;
var k0 = { usingClientEntryPoint: !1, Events: [_l, Fo, ou, ch, fh, Uf] },
  $s = {
    findFiberByHostInstance: Ki,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  C0 = {
    bundleType: $s.bundleType,
    version: $s.version,
    rendererPackageName: $s.rendererPackageName,
    rendererConfig: $s.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Wr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = mh(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: $s.findFiberByHostInstance || x0,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var ha = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!ha.isDisabled && ha.supportsFiber)
    try {
      (tu = ha.inject(C0)), (vr = ha);
    } catch {}
}
vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = k0;
vn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Gf(t)) throw Error(Y(200));
  return w0(e, t, null, n);
};
vn.createRoot = function (e, t) {
  if (!Gf(e)) throw Error(Y(299));
  var n = !1,
    i = "",
    l = Xg;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (i = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Xf(e, 1, !1, null, null, n, !1, i, l)),
    (e[Fr] = t.current),
    ll(e.nodeType === 8 ? e.parentNode : e),
    new Kf(t)
  );
};
vn.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(Y(188))
      : ((e = Object.keys(e).join(",")), Error(Y(268, e)));
  return (e = mh(t)), (e = e === null ? null : e.stateNode), e;
};
vn.flushSync = function (e) {
  return so(e);
};
vn.hydrate = function (e, t, n) {
  if (!hu(t)) throw Error(Y(200));
  return gu(null, e, t, !0, n);
};
vn.hydrateRoot = function (e, t, n) {
  if (!Gf(e)) throw Error(Y(405));
  var i = (n != null && n.hydratedSources) || null,
    l = !1,
    u = "",
    g = Xg;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (u = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (g = n.onRecoverableError)),
    (t = Qg(t, null, e, 1, n ?? null, l, !1, u, g)),
    (e[Fr] = t.current),
    ll(e),
    i)
  )
    for (e = 0; e < i.length; e++)
      (n = i[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new pu(t);
};
vn.render = function (e, t, n) {
  if (!hu(t)) throw Error(Y(200));
  return gu(null, e, t, !1, n);
};
vn.unmountComponentAtNode = function (e) {
  if (!hu(e)) throw Error(Y(40));
  return e._reactRootContainer
    ? (so(function () {
        gu(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Fr] = null);
        });
      }),
      !0)
    : !1;
};
vn.unstable_batchedUpdates = Uf;
vn.unstable_renderSubtreeIntoContainer = function (e, t, n, i) {
  if (!hu(n)) throw Error(Y(200));
  if (e == null || e._reactInternals === void 0) throw Error(Y(38));
  return gu(e, t, n, !1, i);
};
vn.version = "18.3.1-next-f1338f8080-20240426";
function Yg() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Yg);
    } catch (e) {
      console.error(e);
    }
}
Yg(), (Yp.exports = vn);
var E0 = Yp.exports,
  Kg,
  Pp = E0;
(Kg = Pp.createRoot), Pp.hydrateRoot;
var T0 = { exports: {} };
/*!
 * Bootstrap v5.3.3 (https://getbootstrap.com/)
 * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */ (function (e, t) {
  (function (n, i) {
    e.exports = i();
  })(Ip, function () {
    const n = new Map(),
      i = {
        set(m, s, d) {
          n.has(m) || n.set(m, new Map());
          const y = n.get(m);
          y.has(s) || y.size === 0
            ? y.set(s, d)
            : console.error(
                `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                  Array.from(y.keys())[0]
                }.`
              );
        },
        get: (m, s) => (n.has(m) && n.get(m).get(s)) || null,
        remove(m, s) {
          if (!n.has(m)) return;
          const d = n.get(m);
          d.delete(s), d.size === 0 && n.delete(m);
        },
      },
      l = "transitionend",
      u = (m) => (
        m &&
          window.CSS &&
          window.CSS.escape &&
          (m = m.replace(/#([^\s"#']+)/g, (s, d) => `#${CSS.escape(d)}`)),
        m
      ),
      g = (m) => {
        m.dispatchEvent(new Event(l));
      },
      _ = (m) =>
        !(!m || typeof m != "object") &&
        (m.jquery !== void 0 && (m = m[0]), m.nodeType !== void 0),
      x = (m) =>
        _(m)
          ? m.jquery
            ? m[0]
            : m
          : typeof m == "string" && m.length > 0
          ? document.querySelector(u(m))
          : null,
      j = (m) => {
        if (!_(m) || m.getClientRects().length === 0) return !1;
        const s =
            getComputedStyle(m).getPropertyValue("visibility") === "visible",
          d = m.closest("details:not([open])");
        if (!d) return s;
        if (d !== m) {
          const y = m.closest("summary");
          if ((y && y.parentNode !== d) || y === null) return !1;
        }
        return s;
      },
      W = (m) =>
        !m ||
        m.nodeType !== Node.ELEMENT_NODE ||
        !!m.classList.contains("disabled") ||
        (m.disabled !== void 0
          ? m.disabled
          : m.hasAttribute("disabled") &&
            m.getAttribute("disabled") !== "false"),
      B = (m) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof m.getRootNode == "function") {
          const s = m.getRootNode();
          return s instanceof ShadowRoot ? s : null;
        }
        return m instanceof ShadowRoot
          ? m
          : m.parentNode
          ? B(m.parentNode)
          : null;
      },
      z = () => {},
      K = (m) => {
        m.offsetHeight;
      },
      U = () =>
        window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
          ? window.jQuery
          : null,
      V = [],
      _e = () => document.documentElement.dir === "rtl",
      C = (m) => {
        var s;
        (s = () => {
          const d = U();
          if (d) {
            const y = m.NAME,
              b = d.fn[y];
            (d.fn[y] = m.jQueryInterface),
              (d.fn[y].Constructor = m),
              (d.fn[y].noConflict = () => ((d.fn[y] = b), m.jQueryInterface));
          }
        }),
          document.readyState === "loading"
            ? (V.length ||
                document.addEventListener("DOMContentLoaded", () => {
                  for (const d of V) d();
                }),
              V.push(s))
            : s();
      },
      E = (m, s = [], d = m) => (typeof m == "function" ? m(...s) : d),
      A = (m, s, d = !0) => {
        if (!d) return void E(m);
        const y =
          ((R) => {
            if (!R) return 0;
            let { transitionDuration: q, transitionDelay: Z } =
              window.getComputedStyle(R);
            const oe = Number.parseFloat(q),
              le = Number.parseFloat(Z);
            return oe || le
              ? ((q = q.split(",")[0]),
                (Z = Z.split(",")[0]),
                1e3 * (Number.parseFloat(q) + Number.parseFloat(Z)))
              : 0;
          })(s) + 5;
        let b = !1;
        const O = ({ target: R }) => {
          R === s && ((b = !0), s.removeEventListener(l, O), E(m));
        };
        s.addEventListener(l, O),
          setTimeout(() => {
            b || g(s);
          }, y);
      },
      Q = (m, s, d, y) => {
        const b = m.length;
        let O = m.indexOf(s);
        return O === -1
          ? !d && y
            ? m[b - 1]
            : m[0]
          : ((O += d ? 1 : -1),
            y && (O = (O + b) % b),
            m[Math.max(0, Math.min(O, b - 1))]);
      },
      J = /[^.]*(?=\..*)\.|.*/,
      ce = /\..*/,
      c = /::\d+$/,
      ae = {};
    let ge = 1;
    const Ee = { mouseenter: "mouseover", mouseleave: "mouseout" },
      Ct = new Set([
        "click",
        "dblclick",
        "mouseup",
        "mousedown",
        "contextmenu",
        "mousewheel",
        "DOMMouseScroll",
        "mouseover",
        "mouseout",
        "mousemove",
        "selectstart",
        "selectend",
        "keydown",
        "keypress",
        "keyup",
        "orientationchange",
        "touchstart",
        "touchmove",
        "touchend",
        "touchcancel",
        "pointerdown",
        "pointermove",
        "pointerup",
        "pointerleave",
        "pointercancel",
        "gesturestart",
        "gesturechange",
        "gestureend",
        "focus",
        "blur",
        "change",
        "reset",
        "select",
        "submit",
        "focusin",
        "focusout",
        "load",
        "unload",
        "beforeunload",
        "resize",
        "move",
        "DOMContentLoaded",
        "readystatechange",
        "error",
        "abort",
        "scroll",
      ]);
    function wt(m, s) {
      return (s && `${s}::${ge++}`) || m.uidEvent || ge++;
    }
    function ke(m) {
      const s = wt(m);
      return (m.uidEvent = s), (ae[s] = ae[s] || {}), ae[s];
    }
    function Et(m, s, d = null) {
      return Object.values(m).find(
        (y) => y.callable === s && y.delegationSelector === d
      );
    }
    function _r(m, s, d) {
      const y = typeof s == "string",
        b = y ? d : s || d;
      let O = de(m);
      return Ct.has(O) || (O = m), [y, b, O];
    }
    function Zn(m, s, d, y, b) {
      if (typeof s != "string" || !m) return;
      let [O, R, q] = _r(s, d, y);
      s in Ee &&
        (R = ((xe) =>
          function (we) {
            if (
              !we.relatedTarget ||
              (we.relatedTarget !== we.delegateTarget &&
                !we.delegateTarget.contains(we.relatedTarget))
            )
              return xe.call(this, we);
          })(R));
      const Z = ke(m),
        oe = Z[q] || (Z[q] = {}),
        le = Et(oe, R, O ? d : null);
      if (le) return void (le.oneOff = le.oneOff && b);
      const re = wt(R, s.replace(J, "")),
        Ne = O
          ? (function (ye, xe, we) {
              return function Se(Qe) {
                const Ke = ye.querySelectorAll(xe);
                for (
                  let { target: Pe } = Qe;
                  Pe && Pe !== this;
                  Pe = Pe.parentNode
                )
                  for (const $e of Ke)
                    if ($e === Pe)
                      return (
                        Te(Qe, { delegateTarget: Pe }),
                        Se.oneOff && D.off(ye, Qe.type, xe, we),
                        we.apply(Pe, [Qe])
                      );
              };
            })(m, d, R)
          : (function (ye, xe) {
              return function we(Se) {
                return (
                  Te(Se, { delegateTarget: ye }),
                  we.oneOff && D.off(ye, Se.type, xe),
                  xe.apply(ye, [Se])
                );
              };
            })(m, R);
      (Ne.delegationSelector = O ? d : null),
        (Ne.callable = R),
        (Ne.oneOff = b),
        (Ne.uidEvent = re),
        (oe[re] = Ne),
        m.addEventListener(q, Ne, O);
    }
    function ht(m, s, d, y, b) {
      const O = Et(s[d], y, b);
      O && (m.removeEventListener(d, O, !!b), delete s[d][O.uidEvent]);
    }
    function te(m, s, d, y) {
      const b = s[d] || {};
      for (const [O, R] of Object.entries(b))
        O.includes(y) && ht(m, s, d, R.callable, R.delegationSelector);
    }
    function de(m) {
      return (m = m.replace(ce, "")), Ee[m] || m;
    }
    const D = {
      on(m, s, d, y) {
        Zn(m, s, d, y, !1);
      },
      one(m, s, d, y) {
        Zn(m, s, d, y, !0);
      },
      off(m, s, d, y) {
        if (typeof s != "string" || !m) return;
        const [b, O, R] = _r(s, d, y),
          q = R !== s,
          Z = ke(m),
          oe = Z[R] || {},
          le = s.startsWith(".");
        if (O === void 0) {
          if (le) for (const re of Object.keys(Z)) te(m, Z, re, s.slice(1));
          for (const [re, Ne] of Object.entries(oe)) {
            const ye = re.replace(c, "");
            (q && !s.includes(ye)) ||
              ht(m, Z, R, Ne.callable, Ne.delegationSelector);
          }
        } else {
          if (!Object.keys(oe).length) return;
          ht(m, Z, R, O, b ? d : null);
        }
      },
      trigger(m, s, d) {
        if (typeof s != "string" || !m) return null;
        const y = U();
        let b = null,
          O = !0,
          R = !0,
          q = !1;
        s !== de(s) &&
          y &&
          ((b = y.Event(s, d)),
          y(m).trigger(b),
          (O = !b.isPropagationStopped()),
          (R = !b.isImmediatePropagationStopped()),
          (q = b.isDefaultPrevented()));
        const Z = Te(new Event(s, { bubbles: O, cancelable: !0 }), d);
        return (
          q && Z.preventDefault(),
          R && m.dispatchEvent(Z),
          Z.defaultPrevented && b && b.preventDefault(),
          Z
        );
      },
    };
    function Te(m, s = {}) {
      for (const [d, y] of Object.entries(s))
        try {
          m[d] = y;
        } catch {
          Object.defineProperty(m, d, { configurable: !0, get: () => y });
        }
      return m;
    }
    function Ve(m) {
      if (m === "true") return !0;
      if (m === "false") return !1;
      if (m === Number(m).toString()) return Number(m);
      if (m === "" || m === "null") return null;
      if (typeof m != "string") return m;
      try {
        return JSON.parse(decodeURIComponent(m));
      } catch {
        return m;
      }
    }
    function ft(m) {
      return m.replace(/[A-Z]/g, (s) => `-${s.toLowerCase()}`);
    }
    const qe = {
      setDataAttribute(m, s, d) {
        m.setAttribute(`data-bs-${ft(s)}`, d);
      },
      removeDataAttribute(m, s) {
        m.removeAttribute(`data-bs-${ft(s)}`);
      },
      getDataAttributes(m) {
        if (!m) return {};
        const s = {},
          d = Object.keys(m.dataset).filter(
            (y) => y.startsWith("bs") && !y.startsWith("bsConfig")
          );
        for (const y of d) {
          let b = y.replace(/^bs/, "");
          (b = b.charAt(0).toLowerCase() + b.slice(1, b.length)),
            (s[b] = Ve(m.dataset[y]));
        }
        return s;
      },
      getDataAttribute: (m, s) => Ve(m.getAttribute(`data-bs-${ft(s)}`)),
    };
    class In {
      static get Default() {
        return {};
      }
      static get DefaultType() {
        return {};
      }
      static get NAME() {
        throw new Error(
          'You have to implement the static method "NAME", for each component!'
        );
      }
      _getConfig(s) {
        return (
          (s = this._mergeConfigObj(s)),
          (s = this._configAfterMerge(s)),
          this._typeCheckConfig(s),
          s
        );
      }
      _configAfterMerge(s) {
        return s;
      }
      _mergeConfigObj(s, d) {
        const y = _(d) ? qe.getDataAttribute(d, "config") : {};
        return {
          ...this.constructor.Default,
          ...(typeof y == "object" ? y : {}),
          ...(_(d) ? qe.getDataAttributes(d) : {}),
          ...(typeof s == "object" ? s : {}),
        };
      }
      _typeCheckConfig(s, d = this.constructor.DefaultType) {
        for (const [b, O] of Object.entries(d)) {
          const R = s[b],
            q = _(R)
              ? "element"
              : (y = R) == null
              ? `${y}`
              : Object.prototype.toString
                  .call(y)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
          if (!new RegExp(O).test(q))
            throw new TypeError(
              `${this.constructor.NAME.toUpperCase()}: Option "${b}" provided type "${q}" but expected type "${O}".`
            );
        }
        var y;
      }
    }
    class lt extends In {
      constructor(s, d) {
        super(),
          (s = x(s)) &&
            ((this._element = s),
            (this._config = this._getConfig(d)),
            i.set(this._element, this.constructor.DATA_KEY, this));
      }
      dispose() {
        i.remove(this._element, this.constructor.DATA_KEY),
          D.off(this._element, this.constructor.EVENT_KEY);
        for (const s of Object.getOwnPropertyNames(this)) this[s] = null;
      }
      _queueCallback(s, d, y = !0) {
        A(s, d, y);
      }
      _getConfig(s) {
        return (
          (s = this._mergeConfigObj(s, this._element)),
          (s = this._configAfterMerge(s)),
          this._typeCheckConfig(s),
          s
        );
      }
      static getInstance(s) {
        return i.get(x(s), this.DATA_KEY);
      }
      static getOrCreateInstance(s, d = {}) {
        return (
          this.getInstance(s) || new this(s, typeof d == "object" ? d : null)
        );
      }
      static get VERSION() {
        return "5.3.3";
      }
      static get DATA_KEY() {
        return `bs.${this.NAME}`;
      }
      static get EVENT_KEY() {
        return `.${this.DATA_KEY}`;
      }
      static eventName(s) {
        return `${s}${this.EVENT_KEY}`;
      }
    }
    const Jn = (m) => {
        let s = m.getAttribute("data-bs-target");
        if (!s || s === "#") {
          let d = m.getAttribute("href");
          if (!d || (!d.includes("#") && !d.startsWith("."))) return null;
          d.includes("#") && !d.startsWith("#") && (d = `#${d.split("#")[1]}`),
            (s = d && d !== "#" ? d.trim() : null);
        }
        return s
          ? s
              .split(",")
              .map((d) => u(d))
              .join(",")
          : null;
      },
      pe = {
        find: (m, s = document.documentElement) =>
          [].concat(...Element.prototype.querySelectorAll.call(s, m)),
        findOne: (m, s = document.documentElement) =>
          Element.prototype.querySelector.call(s, m),
        children: (m, s) =>
          [].concat(...m.children).filter((d) => d.matches(s)),
        parents(m, s) {
          const d = [];
          let y = m.parentNode.closest(s);
          for (; y; ) d.push(y), (y = y.parentNode.closest(s));
          return d;
        },
        prev(m, s) {
          let d = m.previousElementSibling;
          for (; d; ) {
            if (d.matches(s)) return [d];
            d = d.previousElementSibling;
          }
          return [];
        },
        next(m, s) {
          let d = m.nextElementSibling;
          for (; d; ) {
            if (d.matches(s)) return [d];
            d = d.nextElementSibling;
          }
          return [];
        },
        focusableChildren(m) {
          const s = [
            "a",
            "button",
            "input",
            "textarea",
            "select",
            "details",
            "[tabindex]",
            '[contenteditable="true"]',
          ]
            .map((d) => `${d}:not([tabindex^="-"])`)
            .join(",");
          return this.find(s, m).filter((d) => !W(d) && j(d));
        },
        getSelectorFromElement(m) {
          const s = Jn(m);
          return s && pe.findOne(s) ? s : null;
        },
        getElementFromSelector(m) {
          const s = Jn(m);
          return s ? pe.findOne(s) : null;
        },
        getMultipleElementsFromSelector(m) {
          const s = Jn(m);
          return s ? pe.find(s) : [];
        },
      },
      Ai = (m, s = "hide") => {
        const d = `click.dismiss${m.EVENT_KEY}`,
          y = m.NAME;
        D.on(document, d, `[data-bs-dismiss="${y}"]`, function (b) {
          if (
            (["A", "AREA"].includes(this.tagName) && b.preventDefault(),
            W(this))
          )
            return;
          const O = pe.getElementFromSelector(this) || this.closest(`.${y}`);
          m.getOrCreateInstance(O)[s]();
        });
      },
      ln = ".bs.alert",
      mu = `close${ln}`,
      Ur = `closed${ln}`;
    class er extends lt {
      static get NAME() {
        return "alert";
      }
      close() {
        if (D.trigger(this._element, mu).defaultPrevented) return;
        this._element.classList.remove("show");
        const s = this._element.classList.contains("fade");
        this._queueCallback(() => this._destroyElement(), this._element, s);
      }
      _destroyElement() {
        this._element.remove(), D.trigger(this._element, Ur), this.dispose();
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = er.getOrCreateInstance(this);
          if (typeof s == "string") {
            if (d[s] === void 0 || s.startsWith("_") || s === "constructor")
              throw new TypeError(`No method named "${s}"`);
            d[s](this);
          }
        });
      }
    }
    Ai(er, "close"), C(er);
    const us = '[data-bs-toggle="button"]';
    class Pi extends lt {
      static get NAME() {
        return "button";
      }
      toggle() {
        this._element.setAttribute(
          "aria-pressed",
          this._element.classList.toggle("active")
        );
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = Pi.getOrCreateInstance(this);
          s === "toggle" && d[s]();
        });
      }
    }
    D.on(document, "click.bs.button.data-api", us, (m) => {
      m.preventDefault();
      const s = m.target.closest(us);
      Pi.getOrCreateInstance(s).toggle();
    }),
      C(Pi);
    const tr = ".bs.swipe",
      uo = `touchstart${tr}`,
      Rn = `touchmove${tr}`,
      vu = `touchend${tr}`,
      yu = `pointerdown${tr}`,
      _u = `pointerup${tr}`,
      _n = { endCallback: null, leftCallback: null, rightCallback: null },
      Li = {
        endCallback: "(function|null)",
        leftCallback: "(function|null)",
        rightCallback: "(function|null)",
      };
    class nr extends In {
      constructor(s, d) {
        super(),
          (this._element = s),
          s &&
            nr.isSupported() &&
            ((this._config = this._getConfig(d)),
            (this._deltaX = 0),
            (this._supportPointerEvents = !!window.PointerEvent),
            this._initEvents());
      }
      static get Default() {
        return _n;
      }
      static get DefaultType() {
        return Li;
      }
      static get NAME() {
        return "swipe";
      }
      dispose() {
        D.off(this._element, tr);
      }
      _start(s) {
        this._supportPointerEvents
          ? this._eventIsPointerPenTouch(s) && (this._deltaX = s.clientX)
          : (this._deltaX = s.touches[0].clientX);
      }
      _end(s) {
        this._eventIsPointerPenTouch(s) &&
          (this._deltaX = s.clientX - this._deltaX),
          this._handleSwipe(),
          E(this._config.endCallback);
      }
      _move(s) {
        this._deltaX =
          s.touches && s.touches.length > 1
            ? 0
            : s.touches[0].clientX - this._deltaX;
      }
      _handleSwipe() {
        const s = Math.abs(this._deltaX);
        if (s <= 40) return;
        const d = s / this._deltaX;
        (this._deltaX = 0),
          d &&
            E(d > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
      _initEvents() {
        this._supportPointerEvents
          ? (D.on(this._element, yu, (s) => this._start(s)),
            D.on(this._element, _u, (s) => this._end(s)),
            this._element.classList.add("pointer-event"))
          : (D.on(this._element, uo, (s) => this._start(s)),
            D.on(this._element, Rn, (s) => this._move(s)),
            D.on(this._element, vu, (s) => this._end(s)));
      }
      _eventIsPointerPenTouch(s) {
        return (
          this._supportPointerEvents &&
          (s.pointerType === "pen" || s.pointerType === "touch")
        );
      }
      static isSupported() {
        return (
          "ontouchstart" in document.documentElement ||
          navigator.maxTouchPoints > 0
        );
      }
    }
    const ie = ".bs.carousel",
      Tt = ".data-api",
      Di = "next",
      Vr = "prev",
      qr = "left",
      Mi = "right",
      xl = `slide${ie}`,
      wr = `slid${ie}`,
      zn = `keydown${ie}`,
      xr = `mouseenter${ie}`,
      Qr = `mouseleave${ie}`,
      wu = `dragstart${ie}`,
      co = `load${ie}${Tt}`,
      Sl = `click${ie}${Tt}`,
      cs = "carousel",
      fo = "active",
      Sr = ".active",
      Xr = ".carousel-item",
      kl = Sr + Xr,
      Cl = { ArrowLeft: Mi, ArrowRight: qr },
      Zt = {
        interval: 5e3,
        keyboard: !0,
        pause: "hover",
        ride: !1,
        touch: !0,
        wrap: !0,
      },
      Mt = {
        interval: "(number|boolean)",
        keyboard: "boolean",
        pause: "(string|boolean)",
        ride: "(boolean|string)",
        touch: "boolean",
        wrap: "boolean",
      };
    class rr extends lt {
      constructor(s, d) {
        super(s, d),
          (this._interval = null),
          (this._activeElement = null),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this._swipeHelper = null),
          (this._indicatorsElement = pe.findOne(
            ".carousel-indicators",
            this._element
          )),
          this._addEventListeners(),
          this._config.ride === cs && this.cycle();
      }
      static get Default() {
        return Zt;
      }
      static get DefaultType() {
        return Mt;
      }
      static get NAME() {
        return "carousel";
      }
      next() {
        this._slide(Di);
      }
      nextWhenVisible() {
        !document.hidden && j(this._element) && this.next();
      }
      prev() {
        this._slide(Vr);
      }
      pause() {
        this._isSliding && g(this._element), this._clearInterval();
      }
      cycle() {
        this._clearInterval(),
          this._updateInterval(),
          (this._interval = setInterval(
            () => this.nextWhenVisible(),
            this._config.interval
          ));
      }
      _maybeEnableCycle() {
        this._config.ride &&
          (this._isSliding
            ? D.one(this._element, wr, () => this.cycle())
            : this.cycle());
      }
      to(s) {
        const d = this._getItems();
        if (s > d.length - 1 || s < 0) return;
        if (this._isSliding)
          return void D.one(this._element, wr, () => this.to(s));
        const y = this._getItemIndex(this._getActive());
        if (y === s) return;
        const b = s > y ? Di : Vr;
        this._slide(b, d[s]);
      }
      dispose() {
        this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
      }
      _configAfterMerge(s) {
        return (s.defaultInterval = s.interval), s;
      }
      _addEventListeners() {
        this._config.keyboard &&
          D.on(this._element, zn, (s) => this._keydown(s)),
          this._config.pause === "hover" &&
            (D.on(this._element, xr, () => this.pause()),
            D.on(this._element, Qr, () => this._maybeEnableCycle())),
          this._config.touch &&
            nr.isSupported() &&
            this._addTouchEventListeners();
      }
      _addTouchEventListeners() {
        for (const d of pe.find(".carousel-item img", this._element))
          D.on(d, wu, (y) => y.preventDefault());
        const s = {
          leftCallback: () => this._slide(this._directionToOrder(qr)),
          rightCallback: () => this._slide(this._directionToOrder(Mi)),
          endCallback: () => {
            this._config.pause === "hover" &&
              (this.pause(),
              this.touchTimeout && clearTimeout(this.touchTimeout),
              (this.touchTimeout = setTimeout(
                () => this._maybeEnableCycle(),
                500 + this._config.interval
              )));
          },
        };
        this._swipeHelper = new nr(this._element, s);
      }
      _keydown(s) {
        if (/input|textarea/i.test(s.target.tagName)) return;
        const d = Cl[s.key];
        d && (s.preventDefault(), this._slide(this._directionToOrder(d)));
      }
      _getItemIndex(s) {
        return this._getItems().indexOf(s);
      }
      _setActiveIndicatorElement(s) {
        if (!this._indicatorsElement) return;
        const d = pe.findOne(Sr, this._indicatorsElement);
        d.classList.remove(fo), d.removeAttribute("aria-current");
        const y = pe.findOne(
          `[data-bs-slide-to="${s}"]`,
          this._indicatorsElement
        );
        y && (y.classList.add(fo), y.setAttribute("aria-current", "true"));
      }
      _updateInterval() {
        const s = this._activeElement || this._getActive();
        if (!s) return;
        const d = Number.parseInt(s.getAttribute("data-bs-interval"), 10);
        this._config.interval = d || this._config.defaultInterval;
      }
      _slide(s, d = null) {
        if (this._isSliding) return;
        const y = this._getActive(),
          b = s === Di,
          O = d || Q(this._getItems(), y, b, this._config.wrap);
        if (O === y) return;
        const R = this._getItemIndex(O),
          q = (re) =>
            D.trigger(this._element, re, {
              relatedTarget: O,
              direction: this._orderToDirection(s),
              from: this._getItemIndex(y),
              to: R,
            });
        if (q(xl).defaultPrevented || !y || !O) return;
        const Z = !!this._interval;
        this.pause(),
          (this._isSliding = !0),
          this._setActiveIndicatorElement(R),
          (this._activeElement = O);
        const oe = b ? "carousel-item-start" : "carousel-item-end",
          le = b ? "carousel-item-next" : "carousel-item-prev";
        O.classList.add(le),
          K(O),
          y.classList.add(oe),
          O.classList.add(oe),
          this._queueCallback(
            () => {
              O.classList.remove(oe, le),
                O.classList.add(fo),
                y.classList.remove(fo, le, oe),
                (this._isSliding = !1),
                q(wr);
            },
            y,
            this._isAnimated()
          ),
          Z && this.cycle();
      }
      _isAnimated() {
        return this._element.classList.contains("slide");
      }
      _getActive() {
        return pe.findOne(kl, this._element);
      }
      _getItems() {
        return pe.find(Xr, this._element);
      }
      _clearInterval() {
        this._interval &&
          (clearInterval(this._interval), (this._interval = null));
      }
      _directionToOrder(s) {
        return _e() ? (s === qr ? Vr : Di) : s === qr ? Di : Vr;
      }
      _orderToDirection(s) {
        return _e() ? (s === Vr ? qr : Mi) : s === Vr ? Mi : qr;
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = rr.getOrCreateInstance(this, s);
          if (typeof s != "number") {
            if (typeof s == "string") {
              if (d[s] === void 0 || s.startsWith("_") || s === "constructor")
                throw new TypeError(`No method named "${s}"`);
              d[s]();
            }
          } else d.to(s);
        });
      }
    }
    D.on(document, Sl, "[data-bs-slide], [data-bs-slide-to]", function (m) {
      const s = pe.getElementFromSelector(this);
      if (!s || !s.classList.contains(cs)) return;
      m.preventDefault();
      const d = rr.getOrCreateInstance(s),
        y = this.getAttribute("data-bs-slide-to");
      return y
        ? (d.to(y), void d._maybeEnableCycle())
        : qe.getDataAttribute(this, "slide") === "next"
        ? (d.next(), void d._maybeEnableCycle())
        : (d.prev(), void d._maybeEnableCycle());
    }),
      D.on(window, co, () => {
        const m = pe.find('[data-bs-ride="carousel"]');
        for (const s of m) rr.getOrCreateInstance(s);
      }),
      C(rr);
    const Ii = ".bs.collapse",
      El = `show${Ii}`,
      Tl = `shown${Ii}`,
      Yr = `hide${Ii}`,
      Kr = `hidden${Ii}`,
      fs = `click${Ii}.data-api`,
      Gr = "show",
      Zr = "collapse",
      po = "collapsing",
      xu = `:scope .${Zr} .${Zr}`,
      ho = '[data-bs-toggle="collapse"]',
      Su = { parent: null, toggle: !0 },
      ku = { parent: "(null|element)", toggle: "boolean" };
    class kr extends lt {
      constructor(s, d) {
        super(s, d), (this._isTransitioning = !1), (this._triggerArray = []);
        const y = pe.find(ho);
        for (const b of y) {
          const O = pe.getSelectorFromElement(b),
            R = pe.find(O).filter((q) => q === this._element);
          O !== null && R.length && this._triggerArray.push(b);
        }
        this._initializeChildren(),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
          this._config.toggle && this.toggle();
      }
      static get Default() {
        return Su;
      }
      static get DefaultType() {
        return ku;
      }
      static get NAME() {
        return "collapse";
      }
      toggle() {
        this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (this._isTransitioning || this._isShown()) return;
        let s = [];
        if (
          (this._config.parent &&
            (s = this._getFirstLevelChildren(
              ".collapse.show, .collapse.collapsing"
            )
              .filter((b) => b !== this._element)
              .map((b) => kr.getOrCreateInstance(b, { toggle: !1 }))),
          (s.length && s[0]._isTransitioning) ||
            D.trigger(this._element, El).defaultPrevented)
        )
          return;
        for (const b of s) b.hide();
        const d = this._getDimension();
        this._element.classList.remove(Zr),
          this._element.classList.add(po),
          (this._element.style[d] = 0),
          this._addAriaAndCollapsedClass(this._triggerArray, !0),
          (this._isTransitioning = !0);
        const y = `scroll${d[0].toUpperCase() + d.slice(1)}`;
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(po),
              this._element.classList.add(Zr, Gr),
              (this._element.style[d] = ""),
              D.trigger(this._element, Tl);
          },
          this._element,
          !0
        ),
          (this._element.style[d] = `${this._element[y]}px`);
      }
      hide() {
        if (
          this._isTransitioning ||
          !this._isShown() ||
          D.trigger(this._element, Yr).defaultPrevented
        )
          return;
        const s = this._getDimension();
        (this._element.style[s] = `${
          this._element.getBoundingClientRect()[s]
        }px`),
          K(this._element),
          this._element.classList.add(po),
          this._element.classList.remove(Zr, Gr);
        for (const d of this._triggerArray) {
          const y = pe.getElementFromSelector(d);
          y && !this._isShown(y) && this._addAriaAndCollapsedClass([d], !1);
        }
        (this._isTransitioning = !0),
          (this._element.style[s] = ""),
          this._queueCallback(
            () => {
              (this._isTransitioning = !1),
                this._element.classList.remove(po),
                this._element.classList.add(Zr),
                D.trigger(this._element, Kr);
            },
            this._element,
            !0
          );
      }
      _isShown(s = this._element) {
        return s.classList.contains(Gr);
      }
      _configAfterMerge(s) {
        return (s.toggle = !!s.toggle), (s.parent = x(s.parent)), s;
      }
      _getDimension() {
        return this._element.classList.contains("collapse-horizontal")
          ? "width"
          : "height";
      }
      _initializeChildren() {
        if (!this._config.parent) return;
        const s = this._getFirstLevelChildren(ho);
        for (const d of s) {
          const y = pe.getElementFromSelector(d);
          y && this._addAriaAndCollapsedClass([d], this._isShown(y));
        }
      }
      _getFirstLevelChildren(s) {
        const d = pe.find(xu, this._config.parent);
        return pe.find(s, this._config.parent).filter((y) => !d.includes(y));
      }
      _addAriaAndCollapsedClass(s, d) {
        if (s.length)
          for (const y of s)
            y.classList.toggle("collapsed", !d),
              y.setAttribute("aria-expanded", d);
      }
      static jQueryInterface(s) {
        const d = {};
        return (
          typeof s == "string" && /show|hide/.test(s) && (d.toggle = !1),
          this.each(function () {
            const y = kr.getOrCreateInstance(this, d);
            if (typeof s == "string") {
              if (y[s] === void 0)
                throw new TypeError(`No method named "${s}"`);
              y[s]();
            }
          })
        );
      }
    }
    D.on(document, fs, ho, function (m) {
      (m.target.tagName === "A" ||
        (m.delegateTarget && m.delegateTarget.tagName === "A")) &&
        m.preventDefault();
      for (const s of pe.getMultipleElementsFromSelector(this))
        kr.getOrCreateInstance(s, { toggle: !1 }).toggle();
    }),
      C(kr);
    var Nt = "top",
      dt = "bottom",
      It = "right",
      gt = "left",
      Jr = "auto",
      $n = [Nt, dt, It, gt],
      ir = "start",
      ei = "end",
      ti = "clippingParents",
      go = "viewport",
      Cr = "popper",
      ds = "reference",
      mo = $n.reduce(function (m, s) {
        return m.concat([s + "-" + ir, s + "-" + ei]);
      }, []),
      ps = [].concat($n, [Jr]).reduce(function (m, s) {
        return m.concat([s, s + "-" + ir, s + "-" + ei]);
      }, []),
      vo = "beforeRead",
      Nl = "read",
      bl = "afterRead",
      hs = "beforeMain",
      gs = "main",
      yo = "afterMain",
      ms = "beforeWrite",
      bt = "write",
      Er = "afterWrite",
      Ri = [vo, Nl, bl, hs, gs, yo, ms, bt, Er];
    function wn(m) {
      return m ? (m.nodeName || "").toLowerCase() : null;
    }
    function Bt(m) {
      if (m == null) return window;
      if (m.toString() !== "[object Window]") {
        var s = m.ownerDocument;
        return (s && s.defaultView) || window;
      }
      return m;
    }
    function Fn(m) {
      return m instanceof Bt(m).Element || m instanceof Element;
    }
    function Wt(m) {
      return m instanceof Bt(m).HTMLElement || m instanceof HTMLElement;
    }
    function ni(m) {
      return (
        typeof ShadowRoot < "u" &&
        (m instanceof Bt(m).ShadowRoot || m instanceof ShadowRoot)
      );
    }
    const _o = {
      name: "applyStyles",
      enabled: !0,
      phase: "write",
      fn: function (m) {
        var s = m.state;
        Object.keys(s.elements).forEach(function (d) {
          var y = s.styles[d] || {},
            b = s.attributes[d] || {},
            O = s.elements[d];
          Wt(O) &&
            wn(O) &&
            (Object.assign(O.style, y),
            Object.keys(b).forEach(function (R) {
              var q = b[R];
              q === !1
                ? O.removeAttribute(R)
                : O.setAttribute(R, q === !0 ? "" : q);
            }));
        });
      },
      effect: function (m) {
        var s = m.state,
          d = {
            popper: {
              position: s.options.strategy,
              left: "0",
              top: "0",
              margin: "0",
            },
            arrow: { position: "absolute" },
            reference: {},
          };
        return (
          Object.assign(s.elements.popper.style, d.popper),
          (s.styles = d),
          s.elements.arrow && Object.assign(s.elements.arrow.style, d.arrow),
          function () {
            Object.keys(s.elements).forEach(function (y) {
              var b = s.elements[y],
                O = s.attributes[y] || {},
                R = Object.keys(
                  s.styles.hasOwnProperty(y) ? s.styles[y] : d[y]
                ).reduce(function (q, Z) {
                  return (q[Z] = ""), q;
                }, {});
              Wt(b) &&
                wn(b) &&
                (Object.assign(b.style, R),
                Object.keys(O).forEach(function (q) {
                  b.removeAttribute(q);
                }));
            });
          }
        );
      },
      requires: ["computeStyles"],
    };
    function xn(m) {
      return m.split("-")[0];
    }
    var Tr = Math.max,
      Rt = Math.min,
      Nr = Math.round;
    function br() {
      var m = navigator.userAgentData;
      return m != null && m.brands && Array.isArray(m.brands)
        ? m.brands
            .map(function (s) {
              return s.brand + "/" + s.version;
            })
            .join(" ")
        : navigator.userAgent;
    }
    function jl() {
      return !/^((?!chrome|android).)*safari/i.test(br());
    }
    function ri(m, s, d) {
      s === void 0 && (s = !1), d === void 0 && (d = !1);
      var y = m.getBoundingClientRect(),
        b = 1,
        O = 1;
      s &&
        Wt(m) &&
        ((b = (m.offsetWidth > 0 && Nr(y.width) / m.offsetWidth) || 1),
        (O = (m.offsetHeight > 0 && Nr(y.height) / m.offsetHeight) || 1));
      var R = (Fn(m) ? Bt(m) : window).visualViewport,
        q = !jl() && d,
        Z = (y.left + (q && R ? R.offsetLeft : 0)) / b,
        oe = (y.top + (q && R ? R.offsetTop : 0)) / O,
        le = y.width / b,
        re = y.height / O;
      return {
        width: le,
        height: re,
        top: oe,
        right: Z + le,
        bottom: oe + re,
        left: Z,
        x: Z,
        y: oe,
      };
    }
    function Hn(m) {
      var s = ri(m),
        d = m.offsetWidth,
        y = m.offsetHeight;
      return (
        Math.abs(s.width - d) <= 1 && (d = s.width),
        Math.abs(s.height - y) <= 1 && (y = s.height),
        { x: m.offsetLeft, y: m.offsetTop, width: d, height: y }
      );
    }
    function or(m, s) {
      var d = s.getRootNode && s.getRootNode();
      if (m.contains(s)) return !0;
      if (d && ni(d)) {
        var y = s;
        do {
          if (y && m.isSameNode(y)) return !0;
          y = y.parentNode || y.host;
        } while (y);
      }
      return !1;
    }
    function an(m) {
      return Bt(m).getComputedStyle(m);
    }
    function Cu(m) {
      return ["table", "td", "th"].indexOf(wn(m)) >= 0;
    }
    function Jt(m) {
      return (
        (Fn(m) ? m.ownerDocument : m.document) || window.document
      ).documentElement;
    }
    function zi(m) {
      return wn(m) === "html"
        ? m
        : m.assignedSlot || m.parentNode || (ni(m) ? m.host : null) || Jt(m);
    }
    function wo(m) {
      return Wt(m) && an(m).position !== "fixed" ? m.offsetParent : null;
    }
    function ii(m) {
      for (
        var s = Bt(m), d = wo(m);
        d && Cu(d) && an(d).position === "static";

      )
        d = wo(d);
      return d &&
        (wn(d) === "html" || (wn(d) === "body" && an(d).position === "static"))
        ? s
        : d ||
            (function (y) {
              var b = /firefox/i.test(br());
              if (/Trident/i.test(br()) && Wt(y) && an(y).position === "fixed")
                return null;
              var O = zi(y);
              for (
                ni(O) && (O = O.host);
                Wt(O) && ["html", "body"].indexOf(wn(O)) < 0;

              ) {
                var R = an(O);
                if (
                  R.transform !== "none" ||
                  R.perspective !== "none" ||
                  R.contain === "paint" ||
                  ["transform", "perspective"].indexOf(R.willChange) !== -1 ||
                  (b && R.willChange === "filter") ||
                  (b && R.filter && R.filter !== "none")
                )
                  return O;
                O = O.parentNode;
              }
              return null;
            })(m) ||
            s;
    }
    function xo(m) {
      return ["top", "bottom"].indexOf(m) >= 0 ? "x" : "y";
    }
    function $i(m, s, d) {
      return Tr(m, Rt(s, d));
    }
    function vs(m) {
      return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, m);
    }
    function Ol(m, s) {
      return s.reduce(function (d, y) {
        return (d[y] = m), d;
      }, {});
    }
    const Al = {
      name: "arrow",
      enabled: !0,
      phase: "main",
      fn: function (m) {
        var s,
          d = m.state,
          y = m.name,
          b = m.options,
          O = d.elements.arrow,
          R = d.modifiersData.popperOffsets,
          q = xn(d.placement),
          Z = xo(q),
          oe = [gt, It].indexOf(q) >= 0 ? "height" : "width";
        if (O && R) {
          var le = (function (Xe, We) {
              return vs(
                typeof (Xe =
                  typeof Xe == "function"
                    ? Xe(
                        Object.assign({}, We.rects, { placement: We.placement })
                      )
                    : Xe) != "number"
                  ? Xe
                  : Ol(Xe, $n)
              );
            })(b.padding, d),
            re = Hn(O),
            Ne = Z === "y" ? Nt : gt,
            ye = Z === "y" ? dt : It,
            xe =
              d.rects.reference[oe] +
              d.rects.reference[Z] -
              R[Z] -
              d.rects.popper[oe],
            we = R[Z] - d.rects.reference[Z],
            Se = ii(O),
            Qe = Se
              ? Z === "y"
                ? Se.clientHeight || 0
                : Se.clientWidth || 0
              : 0,
            Ke = xe / 2 - we / 2,
            Pe = le[Ne],
            $e = Qe - re[oe] - le[ye],
            je = Qe / 2 - re[oe] / 2 + Ke,
            Ie = $i(Pe, je, $e),
            Be = Z;
          d.modifiersData[y] =
            (((s = {})[Be] = Ie), (s.centerOffset = Ie - je), s);
        }
      },
      effect: function (m) {
        var s = m.state,
          d = m.options.element,
          y = d === void 0 ? "[data-popper-arrow]" : d;
        y != null &&
          (typeof y != "string" || (y = s.elements.popper.querySelector(y))) &&
          or(s.elements.popper, y) &&
          (s.elements.arrow = y);
      },
      requires: ["popperOffsets"],
      requiresIfExists: ["preventOverflow"],
    };
    function sr(m) {
      return m.split("-")[1];
    }
    var Eu = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function Pl(m) {
      var s,
        d = m.popper,
        y = m.popperRect,
        b = m.placement,
        O = m.variation,
        R = m.offsets,
        q = m.position,
        Z = m.gpuAcceleration,
        oe = m.adaptive,
        le = m.roundOffsets,
        re = m.isFixed,
        Ne = R.x,
        ye = Ne === void 0 ? 0 : Ne,
        xe = R.y,
        we = xe === void 0 ? 0 : xe,
        Se = typeof le == "function" ? le({ x: ye, y: we }) : { x: ye, y: we };
      (ye = Se.x), (we = Se.y);
      var Qe = R.hasOwnProperty("x"),
        Ke = R.hasOwnProperty("y"),
        Pe = gt,
        $e = Nt,
        je = window;
      if (oe) {
        var Ie = ii(d),
          Be = "clientHeight",
          Xe = "clientWidth";
        Ie === Bt(d) &&
          an((Ie = Jt(d))).position !== "static" &&
          q === "absolute" &&
          ((Be = "scrollHeight"), (Xe = "scrollWidth")),
          (b === Nt || ((b === gt || b === It) && O === ei)) &&
            (($e = dt),
            (we -=
              (re && Ie === je && je.visualViewport
                ? je.visualViewport.height
                : Ie[Be]) - y.height),
            (we *= Z ? 1 : -1)),
          (b !== gt && ((b !== Nt && b !== dt) || O !== ei)) ||
            ((Pe = It),
            (ye -=
              (re && Ie === je && je.visualViewport
                ? je.visualViewport.width
                : Ie[Xe]) - y.width),
            (ye *= Z ? 1 : -1));
      }
      var We,
        ut = Object.assign({ position: q }, oe && Eu),
        dn =
          le === !0
            ? (function (Un, qt) {
                var Nn = Un.x,
                  bn = Un.y,
                  it = qt.devicePixelRatio || 1;
                return { x: Nr(Nn * it) / it || 0, y: Nr(bn * it) / it || 0 };
              })({ x: ye, y: we }, Bt(d))
            : { x: ye, y: we };
      return (
        (ye = dn.x),
        (we = dn.y),
        Z
          ? Object.assign(
              {},
              ut,
              (((We = {})[$e] = Ke ? "0" : ""),
              (We[Pe] = Qe ? "0" : ""),
              (We.transform =
                (je.devicePixelRatio || 1) <= 1
                  ? "translate(" + ye + "px, " + we + "px)"
                  : "translate3d(" + ye + "px, " + we + "px, 0)"),
              We)
            )
          : Object.assign(
              {},
              ut,
              (((s = {})[$e] = Ke ? we + "px" : ""),
              (s[Pe] = Qe ? ye + "px" : ""),
              (s.transform = ""),
              s)
            )
      );
    }
    const ys = {
      name: "computeStyles",
      enabled: !0,
      phase: "beforeWrite",
      fn: function (m) {
        var s = m.state,
          d = m.options,
          y = d.gpuAcceleration,
          b = y === void 0 || y,
          O = d.adaptive,
          R = O === void 0 || O,
          q = d.roundOffsets,
          Z = q === void 0 || q,
          oe = {
            placement: xn(s.placement),
            variation: sr(s.placement),
            popper: s.elements.popper,
            popperRect: s.rects.popper,
            gpuAcceleration: b,
            isFixed: s.options.strategy === "fixed",
          };
        s.modifiersData.popperOffsets != null &&
          (s.styles.popper = Object.assign(
            {},
            s.styles.popper,
            Pl(
              Object.assign({}, oe, {
                offsets: s.modifiersData.popperOffsets,
                position: s.options.strategy,
                adaptive: R,
                roundOffsets: Z,
              })
            )
          )),
          s.modifiersData.arrow != null &&
            (s.styles.arrow = Object.assign(
              {},
              s.styles.arrow,
              Pl(
                Object.assign({}, oe, {
                  offsets: s.modifiersData.arrow,
                  position: "absolute",
                  adaptive: !1,
                  roundOffsets: Z,
                })
              )
            )),
          (s.attributes.popper = Object.assign({}, s.attributes.popper, {
            "data-popper-placement": s.placement,
          }));
      },
      data: {},
    };
    var So = { passive: !0 };
    const _s = {
      name: "eventListeners",
      enabled: !0,
      phase: "write",
      fn: function () {},
      effect: function (m) {
        var s = m.state,
          d = m.instance,
          y = m.options,
          b = y.scroll,
          O = b === void 0 || b,
          R = y.resize,
          q = R === void 0 || R,
          Z = Bt(s.elements.popper),
          oe = [].concat(s.scrollParents.reference, s.scrollParents.popper);
        return (
          O &&
            oe.forEach(function (le) {
              le.addEventListener("scroll", d.update, So);
            }),
          q && Z.addEventListener("resize", d.update, So),
          function () {
            O &&
              oe.forEach(function (le) {
                le.removeEventListener("scroll", d.update, So);
              }),
              q && Z.removeEventListener("resize", d.update, So);
          }
        );
      },
      data: {},
    };
    var Tu = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function ko(m) {
      return m.replace(/left|right|bottom|top/g, function (s) {
        return Tu[s];
      });
    }
    var Ll = { start: "end", end: "start" };
    function Co(m) {
      return m.replace(/start|end/g, function (s) {
        return Ll[s];
      });
    }
    function Eo(m) {
      var s = Bt(m);
      return { scrollLeft: s.pageXOffset, scrollTop: s.pageYOffset };
    }
    function Fi(m) {
      return ri(Jt(m)).left + Eo(m).scrollLeft;
    }
    function To(m) {
      var s = an(m),
        d = s.overflow,
        y = s.overflowX,
        b = s.overflowY;
      return /auto|scroll|overlay|hidden/.test(d + b + y);
    }
    function ws(m) {
      return ["html", "body", "#document"].indexOf(wn(m)) >= 0
        ? m.ownerDocument.body
        : Wt(m) && To(m)
        ? m
        : ws(zi(m));
    }
    function jr(m, s) {
      var d;
      s === void 0 && (s = []);
      var y = ws(m),
        b = y === ((d = m.ownerDocument) == null ? void 0 : d.body),
        O = Bt(y),
        R = b ? [O].concat(O.visualViewport || [], To(y) ? y : []) : y,
        q = s.concat(R);
      return b ? q : q.concat(jr(zi(R)));
    }
    function xs(m) {
      return Object.assign({}, m, {
        left: m.x,
        top: m.y,
        right: m.x + m.width,
        bottom: m.y + m.height,
      });
    }
    function Dl(m, s, d) {
      return s === go
        ? xs(
            (function (y, b) {
              var O = Bt(y),
                R = Jt(y),
                q = O.visualViewport,
                Z = R.clientWidth,
                oe = R.clientHeight,
                le = 0,
                re = 0;
              if (q) {
                (Z = q.width), (oe = q.height);
                var Ne = jl();
                (Ne || (!Ne && b === "fixed")) &&
                  ((le = q.offsetLeft), (re = q.offsetTop));
              }
              return { width: Z, height: oe, x: le + Fi(y), y: re };
            })(m, d)
          )
        : Fn(s)
        ? (function (y, b) {
            var O = ri(y, !1, b === "fixed");
            return (
              (O.top = O.top + y.clientTop),
              (O.left = O.left + y.clientLeft),
              (O.bottom = O.top + y.clientHeight),
              (O.right = O.left + y.clientWidth),
              (O.width = y.clientWidth),
              (O.height = y.clientHeight),
              (O.x = O.left),
              (O.y = O.top),
              O
            );
          })(s, d)
        : xs(
            (function (y) {
              var b,
                O = Jt(y),
                R = Eo(y),
                q = (b = y.ownerDocument) == null ? void 0 : b.body,
                Z = Tr(
                  O.scrollWidth,
                  O.clientWidth,
                  q ? q.scrollWidth : 0,
                  q ? q.clientWidth : 0
                ),
                oe = Tr(
                  O.scrollHeight,
                  O.clientHeight,
                  q ? q.scrollHeight : 0,
                  q ? q.clientHeight : 0
                ),
                le = -R.scrollLeft + Fi(y),
                re = -R.scrollTop;
              return (
                an(q || O).direction === "rtl" &&
                  (le += Tr(O.clientWidth, q ? q.clientWidth : 0) - Z),
                { width: Z, height: oe, x: le, y: re }
              );
            })(Jt(m))
          );
    }
    function Ml(m) {
      var s,
        d = m.reference,
        y = m.element,
        b = m.placement,
        O = b ? xn(b) : null,
        R = b ? sr(b) : null,
        q = d.x + d.width / 2 - y.width / 2,
        Z = d.y + d.height / 2 - y.height / 2;
      switch (O) {
        case Nt:
          s = { x: q, y: d.y - y.height };
          break;
        case dt:
          s = { x: q, y: d.y + d.height };
          break;
        case It:
          s = { x: d.x + d.width, y: Z };
          break;
        case gt:
          s = { x: d.x - y.width, y: Z };
          break;
        default:
          s = { x: d.x, y: d.y };
      }
      var oe = O ? xo(O) : null;
      if (oe != null) {
        var le = oe === "y" ? "height" : "width";
        switch (R) {
          case ir:
            s[oe] = s[oe] - (d[le] / 2 - y[le] / 2);
            break;
          case ei:
            s[oe] = s[oe] + (d[le] / 2 - y[le] / 2);
        }
      }
      return s;
    }
    function Sn(m, s) {
      s === void 0 && (s = {});
      var d = s,
        y = d.placement,
        b = y === void 0 ? m.placement : y,
        O = d.strategy,
        R = O === void 0 ? m.strategy : O,
        q = d.boundary,
        Z = q === void 0 ? ti : q,
        oe = d.rootBoundary,
        le = oe === void 0 ? go : oe,
        re = d.elementContext,
        Ne = re === void 0 ? Cr : re,
        ye = d.altBoundary,
        xe = ye !== void 0 && ye,
        we = d.padding,
        Se = we === void 0 ? 0 : we,
        Qe = vs(typeof Se != "number" ? Se : Ol(Se, $n)),
        Ke = Ne === Cr ? ds : Cr,
        Pe = m.rects.popper,
        $e = m.elements[xe ? Ke : Ne],
        je = (function (qt, Nn, bn, it) {
          var dr =
              Nn === "clippingParents"
                ? (function (Ye) {
                    var Qt = jr(zi(Ye)),
                      jn =
                        ["absolute", "fixed"].indexOf(an(Ye).position) >= 0 &&
                        Wt(Ye)
                          ? ii(Ye)
                          : Ye;
                    return Fn(jn)
                      ? Qt.filter(function (ai) {
                          return Fn(ai) && or(ai, jn) && wn(ai) !== "body";
                        })
                      : [];
                  })(qt)
                : [].concat(Nn),
            pr = [].concat(dr, [bn]),
            Lo = pr[0],
            xt = pr.reduce(function (Ye, Qt) {
              var jn = Dl(qt, Qt, it);
              return (
                (Ye.top = Tr(jn.top, Ye.top)),
                (Ye.right = Rt(jn.right, Ye.right)),
                (Ye.bottom = Rt(jn.bottom, Ye.bottom)),
                (Ye.left = Tr(jn.left, Ye.left)),
                Ye
              );
            }, Dl(qt, Lo, it));
          return (
            (xt.width = xt.right - xt.left),
            (xt.height = xt.bottom - xt.top),
            (xt.x = xt.left),
            (xt.y = xt.top),
            xt
          );
        })(Fn($e) ? $e : $e.contextElement || Jt(m.elements.popper), Z, le, R),
        Ie = ri(m.elements.reference),
        Be = Ml({
          reference: Ie,
          element: Pe,
          strategy: "absolute",
          placement: b,
        }),
        Xe = xs(Object.assign({}, Pe, Be)),
        We = Ne === Cr ? Xe : Ie,
        ut = {
          top: je.top - We.top + Qe.top,
          bottom: We.bottom - je.bottom + Qe.bottom,
          left: je.left - We.left + Qe.left,
          right: We.right - je.right + Qe.right,
        },
        dn = m.modifiersData.offset;
      if (Ne === Cr && dn) {
        var Un = dn[b];
        Object.keys(ut).forEach(function (qt) {
          var Nn = [It, dt].indexOf(qt) >= 0 ? 1 : -1,
            bn = [Nt, dt].indexOf(qt) >= 0 ? "y" : "x";
          ut[qt] += Un[bn] * Nn;
        });
      }
      return ut;
    }
    function Il(m, s) {
      s === void 0 && (s = {});
      var d = s,
        y = d.placement,
        b = d.boundary,
        O = d.rootBoundary,
        R = d.padding,
        q = d.flipVariations,
        Z = d.allowedAutoPlacements,
        oe = Z === void 0 ? ps : Z,
        le = sr(y),
        re = le
          ? q
            ? mo
            : mo.filter(function (xe) {
                return sr(xe) === le;
              })
          : $n,
        Ne = re.filter(function (xe) {
          return oe.indexOf(xe) >= 0;
        });
      Ne.length === 0 && (Ne = re);
      var ye = Ne.reduce(function (xe, we) {
        return (
          (xe[we] = Sn(m, {
            placement: we,
            boundary: b,
            rootBoundary: O,
            padding: R,
          })[xn(we)]),
          xe
        );
      }, {});
      return Object.keys(ye).sort(function (xe, we) {
        return ye[xe] - ye[we];
      });
    }
    const No = {
      name: "flip",
      enabled: !0,
      phase: "main",
      fn: function (m) {
        var s = m.state,
          d = m.options,
          y = m.name;
        if (!s.modifiersData[y]._skip) {
          for (
            var b = d.mainAxis,
              O = b === void 0 || b,
              R = d.altAxis,
              q = R === void 0 || R,
              Z = d.fallbackPlacements,
              oe = d.padding,
              le = d.boundary,
              re = d.rootBoundary,
              Ne = d.altBoundary,
              ye = d.flipVariations,
              xe = ye === void 0 || ye,
              we = d.allowedAutoPlacements,
              Se = s.options.placement,
              Qe = xn(Se),
              Ke =
                Z ||
                (Qe !== Se && xe
                  ? (function (Ye) {
                      if (xn(Ye) === Jr) return [];
                      var Qt = ko(Ye);
                      return [Co(Ye), Qt, Co(Qt)];
                    })(Se)
                  : [ko(Se)]),
              Pe = [Se].concat(Ke).reduce(function (Ye, Qt) {
                return Ye.concat(
                  xn(Qt) === Jr
                    ? Il(s, {
                        placement: Qt,
                        boundary: le,
                        rootBoundary: re,
                        padding: oe,
                        flipVariations: xe,
                        allowedAutoPlacements: we,
                      })
                    : Qt
                );
              }, []),
              $e = s.rects.reference,
              je = s.rects.popper,
              Ie = new Map(),
              Be = !0,
              Xe = Pe[0],
              We = 0;
            We < Pe.length;
            We++
          ) {
            var ut = Pe[We],
              dn = xn(ut),
              Un = sr(ut) === ir,
              qt = [Nt, dt].indexOf(dn) >= 0,
              Nn = qt ? "width" : "height",
              bn = Sn(s, {
                placement: ut,
                boundary: le,
                rootBoundary: re,
                altBoundary: Ne,
                padding: oe,
              }),
              it = qt ? (Un ? It : gt) : Un ? dt : Nt;
            $e[Nn] > je[Nn] && (it = ko(it));
            var dr = ko(it),
              pr = [];
            if (
              (O && pr.push(bn[dn] <= 0),
              q && pr.push(bn[it] <= 0, bn[dr] <= 0),
              pr.every(function (Ye) {
                return Ye;
              }))
            ) {
              (Xe = ut), (Be = !1);
              break;
            }
            Ie.set(ut, pr);
          }
          if (Be)
            for (
              var Lo = function (Ye) {
                  var Qt = Pe.find(function (jn) {
                    var ai = Ie.get(jn);
                    if (ai)
                      return ai.slice(0, Ye).every(function (Yl) {
                        return Yl;
                      });
                  });
                  if (Qt) return (Xe = Qt), "break";
                },
                xt = xe ? 3 : 1;
              xt > 0 && Lo(xt) !== "break";
              xt--
            );
          s.placement !== Xe &&
            ((s.modifiersData[y]._skip = !0),
            (s.placement = Xe),
            (s.reset = !0));
        }
      },
      requiresIfExists: ["offset"],
      data: { _skip: !1 },
    };
    function Rl(m, s, d) {
      return (
        d === void 0 && (d = { x: 0, y: 0 }),
        {
          top: m.top - s.height - d.y,
          right: m.right - s.width + d.x,
          bottom: m.bottom - s.height + d.y,
          left: m.left - s.width - d.x,
        }
      );
    }
    function zl(m) {
      return [Nt, It, dt, gt].some(function (s) {
        return m[s] >= 0;
      });
    }
    const $l = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (m) {
          var s = m.state,
            d = m.name,
            y = s.rects.reference,
            b = s.rects.popper,
            O = s.modifiersData.preventOverflow,
            R = Sn(s, { elementContext: "reference" }),
            q = Sn(s, { altBoundary: !0 }),
            Z = Rl(R, y),
            oe = Rl(q, b, O),
            le = zl(Z),
            re = zl(oe);
          (s.modifiersData[d] = {
            referenceClippingOffsets: Z,
            popperEscapeOffsets: oe,
            isReferenceHidden: le,
            hasPopperEscaped: re,
          }),
            (s.attributes.popper = Object.assign({}, s.attributes.popper, {
              "data-popper-reference-hidden": le,
              "data-popper-escaped": re,
            }));
        },
      },
      r = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (m) {
          var s = m.state,
            d = m.options,
            y = m.name,
            b = d.offset,
            O = b === void 0 ? [0, 0] : b,
            R = ps.reduce(function (le, re) {
              return (
                (le[re] = (function (Ne, ye, xe) {
                  var we = xn(Ne),
                    Se = [gt, Nt].indexOf(we) >= 0 ? -1 : 1,
                    Qe =
                      typeof xe == "function"
                        ? xe(Object.assign({}, ye, { placement: Ne }))
                        : xe,
                    Ke = Qe[0],
                    Pe = Qe[1];
                  return (
                    (Ke = Ke || 0),
                    (Pe = (Pe || 0) * Se),
                    [gt, It].indexOf(we) >= 0
                      ? { x: Pe, y: Ke }
                      : { x: Ke, y: Pe }
                  );
                })(re, s.rects, O)),
                le
              );
            }, {}),
            q = R[s.placement],
            Z = q.x,
            oe = q.y;
          s.modifiersData.popperOffsets != null &&
            ((s.modifiersData.popperOffsets.x += Z),
            (s.modifiersData.popperOffsets.y += oe)),
            (s.modifiersData[y] = R);
        },
      },
      o = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (m) {
          var s = m.state,
            d = m.name;
          s.modifiersData[d] = Ml({
            reference: s.rects.reference,
            element: s.rects.popper,
            strategy: "absolute",
            placement: s.placement,
          });
        },
        data: {},
      },
      a = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (m) {
          var s = m.state,
            d = m.options,
            y = m.name,
            b = d.mainAxis,
            O = b === void 0 || b,
            R = d.altAxis,
            q = R !== void 0 && R,
            Z = d.boundary,
            oe = d.rootBoundary,
            le = d.altBoundary,
            re = d.padding,
            Ne = d.tether,
            ye = Ne === void 0 || Ne,
            xe = d.tetherOffset,
            we = xe === void 0 ? 0 : xe,
            Se = Sn(s, {
              boundary: Z,
              rootBoundary: oe,
              padding: re,
              altBoundary: le,
            }),
            Qe = xn(s.placement),
            Ke = sr(s.placement),
            Pe = !Ke,
            $e = xo(Qe),
            je = $e === "x" ? "y" : "x",
            Ie = s.modifiersData.popperOffsets,
            Be = s.rects.reference,
            Xe = s.rects.popper,
            We =
              typeof we == "function"
                ? we(Object.assign({}, s.rects, { placement: s.placement }))
                : we,
            ut =
              typeof We == "number"
                ? { mainAxis: We, altAxis: We }
                : Object.assign({ mainAxis: 0, altAxis: 0 }, We),
            dn = s.modifiersData.offset
              ? s.modifiersData.offset[s.placement]
              : null,
            Un = { x: 0, y: 0 };
          if (Ie) {
            if (O) {
              var qt,
                Nn = $e === "y" ? Nt : gt,
                bn = $e === "y" ? dt : It,
                it = $e === "y" ? "height" : "width",
                dr = Ie[$e],
                pr = dr + Se[Nn],
                Lo = dr - Se[bn],
                xt = ye ? -Xe[it] / 2 : 0,
                Ye = Ke === ir ? Be[it] : Xe[it],
                Qt = Ke === ir ? -Xe[it] : -Be[it],
                jn = s.elements.arrow,
                ai = ye && jn ? Hn(jn) : { width: 0, height: 0 },
                Yl = s.modifiersData["arrow#persistent"]
                  ? s.modifiersData["arrow#persistent"].padding
                  : { top: 0, right: 0, bottom: 0, left: 0 },
                dd = Yl[Nn],
                pd = Yl[bn],
                Kl = $i(0, Be[it], ai[it]),
                qm = Pe
                  ? Be[it] / 2 - xt - Kl - dd - ut.mainAxis
                  : Ye - Kl - dd - ut.mainAxis,
                Qm = Pe
                  ? -Be[it] / 2 + xt + Kl + pd + ut.mainAxis
                  : Qt + Kl + pd + ut.mainAxis,
                Iu = s.elements.arrow && ii(s.elements.arrow),
                Xm = Iu
                  ? $e === "y"
                    ? Iu.clientTop || 0
                    : Iu.clientLeft || 0
                  : 0,
                hd = (qt = dn == null ? void 0 : dn[$e]) != null ? qt : 0,
                Ym = dr + Qm - hd,
                gd = $i(
                  ye ? Rt(pr, dr + qm - hd - Xm) : pr,
                  dr,
                  ye ? Tr(Lo, Ym) : Lo
                );
              (Ie[$e] = gd), (Un[$e] = gd - dr);
            }
            if (q) {
              var md,
                Km = $e === "x" ? Nt : gt,
                Gm = $e === "x" ? dt : It,
                Qi = Ie[je],
                Gl = je === "y" ? "height" : "width",
                vd = Qi + Se[Km],
                yd = Qi - Se[Gm],
                Ru = [Nt, gt].indexOf(Qe) !== -1,
                _d = (md = dn == null ? void 0 : dn[je]) != null ? md : 0,
                wd = Ru ? vd : Qi - Be[Gl] - Xe[Gl] - _d + ut.altAxis,
                xd = Ru ? Qi + Be[Gl] + Xe[Gl] - _d - ut.altAxis : yd,
                Sd =
                  ye && Ru
                    ? (function (Zm, Jm, zu) {
                        var kd = $i(Zm, Jm, zu);
                        return kd > zu ? zu : kd;
                      })(wd, Qi, xd)
                    : $i(ye ? wd : vd, Qi, ye ? xd : yd);
              (Ie[je] = Sd), (Un[je] = Sd - Qi);
            }
            s.modifiersData[y] = Un;
          }
        },
        requiresIfExists: ["offset"],
      };
    function f(m, s, d) {
      d === void 0 && (d = !1);
      var y,
        b,
        O = Wt(s),
        R =
          Wt(s) &&
          (function (re) {
            var Ne = re.getBoundingClientRect(),
              ye = Nr(Ne.width) / re.offsetWidth || 1,
              xe = Nr(Ne.height) / re.offsetHeight || 1;
            return ye !== 1 || xe !== 1;
          })(s),
        q = Jt(s),
        Z = ri(m, R, d),
        oe = { scrollLeft: 0, scrollTop: 0 },
        le = { x: 0, y: 0 };
      return (
        (O || (!O && !d)) &&
          ((wn(s) !== "body" || To(q)) &&
            (oe =
              (y = s) !== Bt(y) && Wt(y)
                ? { scrollLeft: (b = y).scrollLeft, scrollTop: b.scrollTop }
                : Eo(y)),
          Wt(s)
            ? (((le = ri(s, !0)).x += s.clientLeft), (le.y += s.clientTop))
            : q && (le.x = Fi(q))),
        {
          x: Z.left + oe.scrollLeft - le.x,
          y: Z.top + oe.scrollTop - le.y,
          width: Z.width,
          height: Z.height,
        }
      );
    }
    function p(m) {
      var s = new Map(),
        d = new Set(),
        y = [];
      function b(O) {
        d.add(O.name),
          []
            .concat(O.requires || [], O.requiresIfExists || [])
            .forEach(function (R) {
              if (!d.has(R)) {
                var q = s.get(R);
                q && b(q);
              }
            }),
          y.push(O);
      }
      return (
        m.forEach(function (O) {
          s.set(O.name, O);
        }),
        m.forEach(function (O) {
          d.has(O.name) || b(O);
        }),
        y
      );
    }
    var h = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function v() {
      for (var m = arguments.length, s = new Array(m), d = 0; d < m; d++)
        s[d] = arguments[d];
      return !s.some(function (y) {
        return !(y && typeof y.getBoundingClientRect == "function");
      });
    }
    function k(m) {
      m === void 0 && (m = {});
      var s = m,
        d = s.defaultModifiers,
        y = d === void 0 ? [] : d,
        b = s.defaultOptions,
        O = b === void 0 ? h : b;
      return function (R, q, Z) {
        Z === void 0 && (Z = O);
        var oe,
          le,
          re = {
            placement: "bottom",
            orderedModifiers: [],
            options: Object.assign({}, h, O),
            modifiersData: {},
            elements: { reference: R, popper: q },
            attributes: {},
            styles: {},
          },
          Ne = [],
          ye = !1,
          xe = {
            state: re,
            setOptions: function (Se) {
              var Qe = typeof Se == "function" ? Se(re.options) : Se;
              we(),
                (re.options = Object.assign({}, O, re.options, Qe)),
                (re.scrollParents = {
                  reference: Fn(R)
                    ? jr(R)
                    : R.contextElement
                    ? jr(R.contextElement)
                    : [],
                  popper: jr(q),
                });
              var Ke,
                Pe,
                $e = (function (je) {
                  var Ie = p(je);
                  return Ri.reduce(function (Be, Xe) {
                    return Be.concat(
                      Ie.filter(function (We) {
                        return We.phase === Xe;
                      })
                    );
                  }, []);
                })(
                  ((Ke = [].concat(y, re.options.modifiers)),
                  (Pe = Ke.reduce(function (je, Ie) {
                    var Be = je[Ie.name];
                    return (
                      (je[Ie.name] = Be
                        ? Object.assign({}, Be, Ie, {
                            options: Object.assign({}, Be.options, Ie.options),
                            data: Object.assign({}, Be.data, Ie.data),
                          })
                        : Ie),
                      je
                    );
                  }, {})),
                  Object.keys(Pe).map(function (je) {
                    return Pe[je];
                  }))
                );
              return (
                (re.orderedModifiers = $e.filter(function (je) {
                  return je.enabled;
                })),
                re.orderedModifiers.forEach(function (je) {
                  var Ie = je.name,
                    Be = je.options,
                    Xe = Be === void 0 ? {} : Be,
                    We = je.effect;
                  if (typeof We == "function") {
                    var ut = We({
                      state: re,
                      name: Ie,
                      instance: xe,
                      options: Xe,
                    });
                    Ne.push(ut || function () {});
                  }
                }),
                xe.update()
              );
            },
            forceUpdate: function () {
              if (!ye) {
                var Se = re.elements,
                  Qe = Se.reference,
                  Ke = Se.popper;
                if (v(Qe, Ke)) {
                  (re.rects = {
                    reference: f(Qe, ii(Ke), re.options.strategy === "fixed"),
                    popper: Hn(Ke),
                  }),
                    (re.reset = !1),
                    (re.placement = re.options.placement),
                    re.orderedModifiers.forEach(function (We) {
                      return (re.modifiersData[We.name] = Object.assign(
                        {},
                        We.data
                      ));
                    });
                  for (var Pe = 0; Pe < re.orderedModifiers.length; Pe++)
                    if (re.reset !== !0) {
                      var $e = re.orderedModifiers[Pe],
                        je = $e.fn,
                        Ie = $e.options,
                        Be = Ie === void 0 ? {} : Ie,
                        Xe = $e.name;
                      typeof je == "function" &&
                        (re =
                          je({
                            state: re,
                            options: Be,
                            name: Xe,
                            instance: xe,
                          }) || re);
                    } else (re.reset = !1), (Pe = -1);
                }
              }
            },
            update:
              ((oe = function () {
                return new Promise(function (Se) {
                  xe.forceUpdate(), Se(re);
                });
              }),
              function () {
                return (
                  le ||
                    (le = new Promise(function (Se) {
                      Promise.resolve().then(function () {
                        (le = void 0), Se(oe());
                      });
                    })),
                  le
                );
              }),
            destroy: function () {
              we(), (ye = !0);
            },
          };
        if (!v(R, q)) return xe;
        function we() {
          Ne.forEach(function (Se) {
            return Se();
          }),
            (Ne = []);
        }
        return (
          xe.setOptions(Z).then(function (Se) {
            !ye && Z.onFirstUpdate && Z.onFirstUpdate(Se);
          }),
          xe
        );
      };
    }
    var S = k(),
      N = k({ defaultModifiers: [_s, o, ys, _o] }),
      I = k({ defaultModifiers: [_s, o, ys, _o, r, No, a, Al, $l] });
    const $ = Object.freeze(
        Object.defineProperty(
          {
            __proto__: null,
            afterMain: yo,
            afterRead: bl,
            afterWrite: Er,
            applyStyles: _o,
            arrow: Al,
            auto: Jr,
            basePlacements: $n,
            beforeMain: hs,
            beforeRead: vo,
            beforeWrite: ms,
            bottom: dt,
            clippingParents: ti,
            computeStyles: ys,
            createPopper: I,
            createPopperBase: S,
            createPopperLite: N,
            detectOverflow: Sn,
            end: ei,
            eventListeners: _s,
            flip: No,
            hide: $l,
            left: gt,
            main: gs,
            modifierPhases: Ri,
            offset: r,
            placements: ps,
            popper: Cr,
            popperGenerator: k,
            popperOffsets: o,
            preventOverflow: a,
            read: Nl,
            reference: ds,
            right: It,
            start: ir,
            top: Nt,
            variationPlacements: mo,
            viewport: go,
            write: bt,
          },
          Symbol.toStringTag,
          { value: "Module" }
        )
      ),
      L = "dropdown",
      X = ".bs.dropdown",
      ve = ".data-api",
      De = "ArrowUp",
      Ce = "ArrowDown",
      mt = `hide${X}`,
      at = `hidden${X}`,
      kn = `show${X}`,
      Cn = `shown${X}`,
      Oe = `click${X}${ve}`,
      lr = `keydown${X}${ve}`,
      Me = `keyup${X}${ve}`,
      Fe = "show",
      un = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
      Ss = `${un}.${Fe}`,
      Ut = ".dropdown-menu",
      Hi = _e() ? "top-end" : "top-start",
      En = _e() ? "top-start" : "top-end",
      ar = _e() ? "bottom-end" : "bottom-start",
      ur = _e() ? "bottom-start" : "bottom-end",
      en = _e() ? "left-start" : "right-start",
      ks = _e() ? "right-start" : "left-start",
      Bn = {
        autoClose: !0,
        boundary: "clippingParents",
        display: "dynamic",
        offset: [0, 2],
        popperConfig: null,
        reference: "toggle",
      },
      Wn = {
        autoClose: "(boolean|string)",
        boundary: "(string|element)",
        display: "string",
        offset: "(array|string|function)",
        popperConfig: "(null|object|function)",
        reference: "(string|element|object)",
      };
    class cn extends lt {
      constructor(s, d) {
        super(s, d),
          (this._popper = null),
          (this._parent = this._element.parentNode),
          (this._menu =
            pe.next(this._element, Ut)[0] ||
            pe.prev(this._element, Ut)[0] ||
            pe.findOne(Ut, this._parent)),
          (this._inNavbar = this._detectNavbar());
      }
      static get Default() {
        return Bn;
      }
      static get DefaultType() {
        return Wn;
      }
      static get NAME() {
        return L;
      }
      toggle() {
        return this._isShown() ? this.hide() : this.show();
      }
      show() {
        if (W(this._element) || this._isShown()) return;
        const s = { relatedTarget: this._element };
        if (!D.trigger(this._element, kn, s).defaultPrevented) {
          if (
            (this._createPopper(),
            "ontouchstart" in document.documentElement &&
              !this._parent.closest(".navbar-nav"))
          )
            for (const d of [].concat(...document.body.children))
              D.on(d, "mouseover", z);
          this._element.focus(),
            this._element.setAttribute("aria-expanded", !0),
            this._menu.classList.add(Fe),
            this._element.classList.add(Fe),
            D.trigger(this._element, Cn, s);
        }
      }
      hide() {
        if (W(this._element) || !this._isShown()) return;
        const s = { relatedTarget: this._element };
        this._completeHide(s);
      }
      dispose() {
        this._popper && this._popper.destroy(), super.dispose();
      }
      update() {
        (this._inNavbar = this._detectNavbar()),
          this._popper && this._popper.update();
      }
      _completeHide(s) {
        if (!D.trigger(this._element, mt, s).defaultPrevented) {
          if ("ontouchstart" in document.documentElement)
            for (const d of [].concat(...document.body.children))
              D.off(d, "mouseover", z);
          this._popper && this._popper.destroy(),
            this._menu.classList.remove(Fe),
            this._element.classList.remove(Fe),
            this._element.setAttribute("aria-expanded", "false"),
            qe.removeDataAttribute(this._menu, "popper"),
            D.trigger(this._element, at, s);
        }
      }
      _getConfig(s) {
        if (
          typeof (s = super._getConfig(s)).reference == "object" &&
          !_(s.reference) &&
          typeof s.reference.getBoundingClientRect != "function"
        )
          throw new TypeError(
            `${L.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
          );
        return s;
      }
      _createPopper() {
        if ($ === void 0)
          throw new TypeError(
            "Bootstrap's dropdowns require Popper (https://popper.js.org)"
          );
        let s = this._element;
        this._config.reference === "parent"
          ? (s = this._parent)
          : _(this._config.reference)
          ? (s = x(this._config.reference))
          : typeof this._config.reference == "object" &&
            (s = this._config.reference);
        const d = this._getPopperConfig();
        this._popper = I(s, this._menu, d);
      }
      _isShown() {
        return this._menu.classList.contains(Fe);
      }
      _getPlacement() {
        const s = this._parent;
        if (s.classList.contains("dropend")) return en;
        if (s.classList.contains("dropstart")) return ks;
        if (s.classList.contains("dropup-center")) return "top";
        if (s.classList.contains("dropdown-center")) return "bottom";
        const d =
          getComputedStyle(this._menu)
            .getPropertyValue("--bs-position")
            .trim() === "end";
        return s.classList.contains("dropup") ? (d ? En : Hi) : d ? ur : ar;
      }
      _detectNavbar() {
        return this._element.closest(".navbar") !== null;
      }
      _getOffset() {
        const { offset: s } = this._config;
        return typeof s == "string"
          ? s.split(",").map((d) => Number.parseInt(d, 10))
          : typeof s == "function"
          ? (d) => s(d, this._element)
          : s;
      }
      _getPopperConfig() {
        const s = {
          placement: this._getPlacement(),
          modifiers: [
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            { name: "offset", options: { offset: this._getOffset() } },
          ],
        };
        return (
          (this._inNavbar || this._config.display === "static") &&
            (qe.setDataAttribute(this._menu, "popper", "static"),
            (s.modifiers = [{ name: "applyStyles", enabled: !1 }])),
          { ...s, ...E(this._config.popperConfig, [s]) }
        );
      }
      _selectMenuItem({ key: s, target: d }) {
        const y = pe
          .find(
            ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
            this._menu
          )
          .filter((b) => j(b));
        y.length && Q(y, d, s === Ce, !y.includes(d)).focus();
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = cn.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0) throw new TypeError(`No method named "${s}"`);
            d[s]();
          }
        });
      }
      static clearMenus(s) {
        if (s.button === 2 || (s.type === "keyup" && s.key !== "Tab")) return;
        const d = pe.find(Ss);
        for (const y of d) {
          const b = cn.getInstance(y);
          if (!b || b._config.autoClose === !1) continue;
          const O = s.composedPath(),
            R = O.includes(b._menu);
          if (
            O.includes(b._element) ||
            (b._config.autoClose === "inside" && !R) ||
            (b._config.autoClose === "outside" && R) ||
            (b._menu.contains(s.target) &&
              ((s.type === "keyup" && s.key === "Tab") ||
                /input|select|option|textarea|form/i.test(s.target.tagName)))
          )
            continue;
          const q = { relatedTarget: b._element };
          s.type === "click" && (q.clickEvent = s), b._completeHide(q);
        }
      }
      static dataApiKeydownHandler(s) {
        const d = /input|textarea/i.test(s.target.tagName),
          y = s.key === "Escape",
          b = [De, Ce].includes(s.key);
        if ((!b && !y) || (d && !y)) return;
        s.preventDefault();
        const O = this.matches(un)
            ? this
            : pe.prev(this, un)[0] ||
              pe.next(this, un)[0] ||
              pe.findOne(un, s.delegateTarget.parentNode),
          R = cn.getOrCreateInstance(O);
        if (b) return s.stopPropagation(), R.show(), void R._selectMenuItem(s);
        R._isShown() && (s.stopPropagation(), R.hide(), O.focus());
      }
    }
    D.on(document, lr, un, cn.dataApiKeydownHandler),
      D.on(document, lr, Ut, cn.dataApiKeydownHandler),
      D.on(document, Oe, cn.clearMenus),
      D.on(document, Me, cn.clearMenus),
      D.on(document, Oe, un, function (m) {
        m.preventDefault(), cn.getOrCreateInstance(this).toggle();
      }),
      C(cn);
    const Fl = "backdrop",
      Hl = "show",
      ze = `mousedown.bs.${Fl}`,
      bo = {
        className: "modal-backdrop",
        clickCallback: null,
        isAnimated: !1,
        isVisible: !0,
        rootElement: "body",
      },
      fn = {
        className: "string",
        clickCallback: "(function|null)",
        isAnimated: "boolean",
        isVisible: "boolean",
        rootElement: "(element|string)",
      };
    class Or extends In {
      constructor(s) {
        super(),
          (this._config = this._getConfig(s)),
          (this._isAppended = !1),
          (this._element = null);
      }
      static get Default() {
        return bo;
      }
      static get DefaultType() {
        return fn;
      }
      static get NAME() {
        return Fl;
      }
      show(s) {
        if (!this._config.isVisible) return void E(s);
        this._append();
        const d = this._getElement();
        this._config.isAnimated && K(d),
          d.classList.add(Hl),
          this._emulateAnimation(() => {
            E(s);
          });
      }
      hide(s) {
        this._config.isVisible
          ? (this._getElement().classList.remove(Hl),
            this._emulateAnimation(() => {
              this.dispose(), E(s);
            }))
          : E(s);
      }
      dispose() {
        this._isAppended &&
          (D.off(this._element, ze),
          this._element.remove(),
          (this._isAppended = !1));
      }
      _getElement() {
        if (!this._element) {
          const s = document.createElement("div");
          (s.className = this._config.className),
            this._config.isAnimated && s.classList.add("fade"),
            (this._element = s);
        }
        return this._element;
      }
      _configAfterMerge(s) {
        return (s.rootElement = x(s.rootElement)), s;
      }
      _append() {
        if (this._isAppended) return;
        const s = this._getElement();
        this._config.rootElement.append(s),
          D.on(s, ze, () => {
            E(this._config.clickCallback);
          }),
          (this._isAppended = !0);
      }
      _emulateAnimation(s) {
        A(s, this._getElement(), this._config.isAnimated);
      }
    }
    const jo = ".bs.focustrap",
      Nu = `focusin${jo}`,
      Bl = `keydown.tab${jo}`,
      cr = "backward",
      Cs = { autofocus: !0, trapElement: null },
      fr = { autofocus: "boolean", trapElement: "element" };
    class Es extends In {
      constructor(s) {
        super(),
          (this._config = this._getConfig(s)),
          (this._isActive = !1),
          (this._lastTabNavDirection = null);
      }
      static get Default() {
        return Cs;
      }
      static get DefaultType() {
        return fr;
      }
      static get NAME() {
        return "focustrap";
      }
      activate() {
        this._isActive ||
          (this._config.autofocus && this._config.trapElement.focus(),
          D.off(document, jo),
          D.on(document, Nu, (s) => this._handleFocusin(s)),
          D.on(document, Bl, (s) => this._handleKeydown(s)),
          (this._isActive = !0));
      }
      deactivate() {
        this._isActive && ((this._isActive = !1), D.off(document, jo));
      }
      _handleFocusin(s) {
        const { trapElement: d } = this._config;
        if (s.target === document || s.target === d || d.contains(s.target))
          return;
        const y = pe.focusableChildren(d);
        y.length === 0
          ? d.focus()
          : this._lastTabNavDirection === cr
          ? y[y.length - 1].focus()
          : y[0].focus();
      }
      _handleKeydown(s) {
        s.key === "Tab" &&
          (this._lastTabNavDirection = s.shiftKey ? cr : "forward");
      }
    }
    const oi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
      Bi = ".sticky-top",
      Ar = "padding-right",
      Oo = "margin-right";
    class Ts {
      constructor() {
        this._element = document.body;
      }
      getWidth() {
        const s = document.documentElement.clientWidth;
        return Math.abs(window.innerWidth - s);
      }
      hide() {
        const s = this.getWidth();
        this._disableOverFlow(),
          this._setElementAttributes(this._element, Ar, (d) => d + s),
          this._setElementAttributes(oi, Ar, (d) => d + s),
          this._setElementAttributes(Bi, Oo, (d) => d - s);
      }
      reset() {
        this._resetElementAttributes(this._element, "overflow"),
          this._resetElementAttributes(this._element, Ar),
          this._resetElementAttributes(oi, Ar),
          this._resetElementAttributes(Bi, Oo);
      }
      isOverflowing() {
        return this.getWidth() > 0;
      }
      _disableOverFlow() {
        this._saveInitialAttribute(this._element, "overflow"),
          (this._element.style.overflow = "hidden");
      }
      _setElementAttributes(s, d, y) {
        const b = this.getWidth();
        this._applyManipulationCallback(s, (O) => {
          if (O !== this._element && window.innerWidth > O.clientWidth + b)
            return;
          this._saveInitialAttribute(O, d);
          const R = window.getComputedStyle(O).getPropertyValue(d);
          O.style.setProperty(d, `${y(Number.parseFloat(R))}px`);
        });
      }
      _saveInitialAttribute(s, d) {
        const y = s.style.getPropertyValue(d);
        y && qe.setDataAttribute(s, d, y);
      }
      _resetElementAttributes(s, d) {
        this._applyManipulationCallback(s, (y) => {
          const b = qe.getDataAttribute(y, d);
          b !== null
            ? (qe.removeDataAttribute(y, d), y.style.setProperty(d, b))
            : y.style.removeProperty(d);
        });
      }
      _applyManipulationCallback(s, d) {
        if (_(s)) d(s);
        else for (const y of pe.find(s, this._element)) d(y);
      }
    }
    const jt = ".bs.modal",
      Ns = `hide${jt}`,
      bs = `hidePrevented${jt}`,
      Wl = `hidden${jt}`,
      Ao = `show${jt}`,
      Ul = `shown${jt}`,
      w = `resize${jt}`,
      T = `click.dismiss${jt}`,
      P = `mousedown.dismiss${jt}`,
      M = `keydown.dismiss${jt}`,
      F = `click${jt}.data-api`,
      G = "modal-open",
      ee = "show",
      ue = "modal-static",
      ne = { backdrop: !0, focus: !0, keyboard: !0 },
      Ae = {
        backdrop: "(boolean|string)",
        focus: "boolean",
        keyboard: "boolean",
      };
    class fe extends lt {
      constructor(s, d) {
        super(s, d),
          (this._dialog = pe.findOne(".modal-dialog", this._element)),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          (this._isShown = !1),
          (this._isTransitioning = !1),
          (this._scrollBar = new Ts()),
          this._addEventListeners();
      }
      static get Default() {
        return ne;
      }
      static get DefaultType() {
        return Ae;
      }
      static get NAME() {
        return "modal";
      }
      toggle(s) {
        return this._isShown ? this.hide() : this.show(s);
      }
      show(s) {
        this._isShown ||
          this._isTransitioning ||
          D.trigger(this._element, Ao, { relatedTarget: s }).defaultPrevented ||
          ((this._isShown = !0),
          (this._isTransitioning = !0),
          this._scrollBar.hide(),
          document.body.classList.add(G),
          this._adjustDialog(),
          this._backdrop.show(() => this._showElement(s)));
      }
      hide() {
        this._isShown &&
          !this._isTransitioning &&
          (D.trigger(this._element, Ns).defaultPrevented ||
            ((this._isShown = !1),
            (this._isTransitioning = !0),
            this._focustrap.deactivate(),
            this._element.classList.remove(ee),
            this._queueCallback(
              () => this._hideModal(),
              this._element,
              this._isAnimated()
            )));
      }
      dispose() {
        D.off(window, jt),
          D.off(this._dialog, jt),
          this._backdrop.dispose(),
          this._focustrap.deactivate(),
          super.dispose();
      }
      handleUpdate() {
        this._adjustDialog();
      }
      _initializeBackDrop() {
        return new Or({
          isVisible: !!this._config.backdrop,
          isAnimated: this._isAnimated(),
        });
      }
      _initializeFocusTrap() {
        return new Es({ trapElement: this._element });
      }
      _showElement(s) {
        document.body.contains(this._element) ||
          document.body.append(this._element),
          (this._element.style.display = "block"),
          this._element.removeAttribute("aria-hidden"),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          (this._element.scrollTop = 0);
        const d = pe.findOne(".modal-body", this._dialog);
        d && (d.scrollTop = 0),
          K(this._element),
          this._element.classList.add(ee),
          this._queueCallback(
            () => {
              this._config.focus && this._focustrap.activate(),
                (this._isTransitioning = !1),
                D.trigger(this._element, Ul, { relatedTarget: s });
            },
            this._dialog,
            this._isAnimated()
          );
      }
      _addEventListeners() {
        D.on(this._element, M, (s) => {
          s.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : this._triggerBackdropTransition());
        }),
          D.on(window, w, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }),
          D.on(this._element, P, (s) => {
            D.one(this._element, T, (d) => {
              this._element === s.target &&
                this._element === d.target &&
                (this._config.backdrop !== "static"
                  ? this._config.backdrop && this.hide()
                  : this._triggerBackdropTransition());
            });
          });
      }
      _hideModal() {
        (this._element.style.display = "none"),
          this._element.setAttribute("aria-hidden", !0),
          this._element.removeAttribute("aria-modal"),
          this._element.removeAttribute("role"),
          (this._isTransitioning = !1),
          this._backdrop.hide(() => {
            document.body.classList.remove(G),
              this._resetAdjustments(),
              this._scrollBar.reset(),
              D.trigger(this._element, Wl);
          });
      }
      _isAnimated() {
        return this._element.classList.contains("fade");
      }
      _triggerBackdropTransition() {
        if (D.trigger(this._element, bs).defaultPrevented) return;
        const s =
            this._element.scrollHeight > document.documentElement.clientHeight,
          d = this._element.style.overflowY;
        d === "hidden" ||
          this._element.classList.contains(ue) ||
          (s || (this._element.style.overflowY = "hidden"),
          this._element.classList.add(ue),
          this._queueCallback(() => {
            this._element.classList.remove(ue),
              this._queueCallback(() => {
                this._element.style.overflowY = d;
              }, this._dialog);
          }, this._dialog),
          this._element.focus());
      }
      _adjustDialog() {
        const s =
            this._element.scrollHeight > document.documentElement.clientHeight,
          d = this._scrollBar.getWidth(),
          y = d > 0;
        if (y && !s) {
          const b = _e() ? "paddingLeft" : "paddingRight";
          this._element.style[b] = `${d}px`;
        }
        if (!y && s) {
          const b = _e() ? "paddingRight" : "paddingLeft";
          this._element.style[b] = `${d}px`;
        }
      }
      _resetAdjustments() {
        (this._element.style.paddingLeft = ""),
          (this._element.style.paddingRight = "");
      }
      static jQueryInterface(s, d) {
        return this.each(function () {
          const y = fe.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (y[s] === void 0) throw new TypeError(`No method named "${s}"`);
            y[s](d);
          }
        });
      }
    }
    D.on(document, F, '[data-bs-toggle="modal"]', function (m) {
      const s = pe.getElementFromSelector(this);
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
        D.one(s, Ao, (y) => {
          y.defaultPrevented ||
            D.one(s, Wl, () => {
              j(this) && this.focus();
            });
        });
      const d = pe.findOne(".modal.show");
      d && fe.getInstance(d).hide(), fe.getOrCreateInstance(s).toggle(this);
    }),
      Ai(fe),
      C(fe);
    const he = ".bs.offcanvas",
      be = ".data-api",
      me = `load${he}${be}`,
      He = "show",
      Ot = "showing",
      vt = "hiding",
      Vt = ".offcanvas.show",
      Tn = `show${he}`,
      si = `shown${he}`,
      At = `hide${he}`,
      Zf = `hidePrevented${he}`,
      Jf = `hidden${he}`,
      rm = `resize${he}`,
      im = `click${he}${be}`,
      om = `keydown.dismiss${he}`,
      sm = { backdrop: !0, keyboard: !0, scroll: !1 },
      lm = {
        backdrop: "(boolean|string)",
        keyboard: "boolean",
        scroll: "boolean",
      };
    class Pr extends lt {
      constructor(s, d) {
        super(s, d),
          (this._isShown = !1),
          (this._backdrop = this._initializeBackDrop()),
          (this._focustrap = this._initializeFocusTrap()),
          this._addEventListeners();
      }
      static get Default() {
        return sm;
      }
      static get DefaultType() {
        return lm;
      }
      static get NAME() {
        return "offcanvas";
      }
      toggle(s) {
        return this._isShown ? this.hide() : this.show(s);
      }
      show(s) {
        this._isShown ||
          D.trigger(this._element, Tn, { relatedTarget: s }).defaultPrevented ||
          ((this._isShown = !0),
          this._backdrop.show(),
          this._config.scroll || new Ts().hide(),
          this._element.setAttribute("aria-modal", !0),
          this._element.setAttribute("role", "dialog"),
          this._element.classList.add(Ot),
          this._queueCallback(
            () => {
              (this._config.scroll && !this._config.backdrop) ||
                this._focustrap.activate(),
                this._element.classList.add(He),
                this._element.classList.remove(Ot),
                D.trigger(this._element, si, { relatedTarget: s });
            },
            this._element,
            !0
          ));
      }
      hide() {
        this._isShown &&
          (D.trigger(this._element, At).defaultPrevented ||
            (this._focustrap.deactivate(),
            this._element.blur(),
            (this._isShown = !1),
            this._element.classList.add(vt),
            this._backdrop.hide(),
            this._queueCallback(
              () => {
                this._element.classList.remove(He, vt),
                  this._element.removeAttribute("aria-modal"),
                  this._element.removeAttribute("role"),
                  this._config.scroll || new Ts().reset(),
                  D.trigger(this._element, Jf);
              },
              this._element,
              !0
            )));
      }
      dispose() {
        this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
      }
      _initializeBackDrop() {
        const s = !!this._config.backdrop;
        return new Or({
          className: "offcanvas-backdrop",
          isVisible: s,
          isAnimated: !0,
          rootElement: this._element.parentNode,
          clickCallback: s
            ? () => {
                this._config.backdrop !== "static"
                  ? this.hide()
                  : D.trigger(this._element, Zf);
              }
            : null,
        });
      }
      _initializeFocusTrap() {
        return new Es({ trapElement: this._element });
      }
      _addEventListeners() {
        D.on(this._element, om, (s) => {
          s.key === "Escape" &&
            (this._config.keyboard
              ? this.hide()
              : D.trigger(this._element, Zf));
        });
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = Pr.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0 || s.startsWith("_") || s === "constructor")
              throw new TypeError(`No method named "${s}"`);
            d[s](this);
          }
        });
      }
    }
    D.on(document, im, '[data-bs-toggle="offcanvas"]', function (m) {
      const s = pe.getElementFromSelector(this);
      if ((["A", "AREA"].includes(this.tagName) && m.preventDefault(), W(this)))
        return;
      D.one(s, Jf, () => {
        j(this) && this.focus();
      });
      const d = pe.findOne(Vt);
      d && d !== s && Pr.getInstance(d).hide(),
        Pr.getOrCreateInstance(s).toggle(this);
    }),
      D.on(window, me, () => {
        for (const m of pe.find(Vt)) Pr.getOrCreateInstance(m).show();
      }),
      D.on(window, rm, () => {
        for (const m of pe.find("[aria-modal][class*=show][class*=offcanvas-]"))
          getComputedStyle(m).position !== "fixed" &&
            Pr.getOrCreateInstance(m).hide();
      }),
      Ai(Pr),
      C(Pr);
    const ed = {
        "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
        a: ["target", "href", "title", "rel"],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        dd: [],
        div: [],
        dl: [],
        dt: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ["src", "srcset", "alt", "title", "width", "height"],
        li: [],
        ol: [],
        p: [],
        pre: [],
        s: [],
        small: [],
        span: [],
        sub: [],
        sup: [],
        strong: [],
        u: [],
        ul: [],
      },
      am = new Set([
        "background",
        "cite",
        "href",
        "itemtype",
        "longdesc",
        "poster",
        "src",
        "xlink:href",
      ]),
      um = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
      cm = (m, s) => {
        const d = m.nodeName.toLowerCase();
        return s.includes(d)
          ? !am.has(d) || !!um.test(m.nodeValue)
          : s.filter((y) => y instanceof RegExp).some((y) => y.test(d));
      },
      fm = {
        allowList: ed,
        content: {},
        extraClass: "",
        html: !1,
        sanitize: !0,
        sanitizeFn: null,
        template: "<div></div>",
      },
      dm = {
        allowList: "object",
        content: "object",
        extraClass: "(string|function)",
        html: "boolean",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        template: "string",
      },
      pm = {
        entry: "(string|element|function|null)",
        selector: "(string|element)",
      };
    class hm extends In {
      constructor(s) {
        super(), (this._config = this._getConfig(s));
      }
      static get Default() {
        return fm;
      }
      static get DefaultType() {
        return dm;
      }
      static get NAME() {
        return "TemplateFactory";
      }
      getContent() {
        return Object.values(this._config.content)
          .map((s) => this._resolvePossibleFunction(s))
          .filter(Boolean);
      }
      hasContent() {
        return this.getContent().length > 0;
      }
      changeContent(s) {
        return (
          this._checkContent(s),
          (this._config.content = { ...this._config.content, ...s }),
          this
        );
      }
      toHtml() {
        const s = document.createElement("div");
        s.innerHTML = this._maybeSanitize(this._config.template);
        for (const [b, O] of Object.entries(this._config.content))
          this._setContent(s, O, b);
        const d = s.children[0],
          y = this._resolvePossibleFunction(this._config.extraClass);
        return y && d.classList.add(...y.split(" ")), d;
      }
      _typeCheckConfig(s) {
        super._typeCheckConfig(s), this._checkContent(s.content);
      }
      _checkContent(s) {
        for (const [d, y] of Object.entries(s))
          super._typeCheckConfig({ selector: d, entry: y }, pm);
      }
      _setContent(s, d, y) {
        const b = pe.findOne(y, s);
        b &&
          ((d = this._resolvePossibleFunction(d))
            ? _(d)
              ? this._putElementInTemplate(x(d), b)
              : this._config.html
              ? (b.innerHTML = this._maybeSanitize(d))
              : (b.textContent = d)
            : b.remove());
      }
      _maybeSanitize(s) {
        return this._config.sanitize
          ? (function (d, y, b) {
              if (!d.length) return d;
              if (b && typeof b == "function") return b(d);
              const O = new window.DOMParser().parseFromString(d, "text/html"),
                R = [].concat(...O.body.querySelectorAll("*"));
              for (const q of R) {
                const Z = q.nodeName.toLowerCase();
                if (!Object.keys(y).includes(Z)) {
                  q.remove();
                  continue;
                }
                const oe = [].concat(...q.attributes),
                  le = [].concat(y["*"] || [], y[Z] || []);
                for (const re of oe)
                  cm(re, le) || q.removeAttribute(re.nodeName);
              }
              return O.body.innerHTML;
            })(s, this._config.allowList, this._config.sanitizeFn)
          : s;
      }
      _resolvePossibleFunction(s) {
        return E(s, [this]);
      }
      _putElementInTemplate(s, d) {
        if (this._config.html) return (d.innerHTML = ""), void d.append(s);
        d.textContent = s.textContent;
      }
    }
    const gm = new Set(["sanitize", "allowList", "sanitizeFn"]),
      bu = "fade",
      Vl = "show",
      td = ".modal",
      nd = "hide.bs.modal",
      js = "hover",
      ju = "focus",
      mm = {
        AUTO: "auto",
        TOP: "top",
        RIGHT: _e() ? "left" : "right",
        BOTTOM: "bottom",
        LEFT: _e() ? "right" : "left",
      },
      vm = {
        allowList: ed,
        animation: !0,
        boundary: "clippingParents",
        container: !1,
        customClass: "",
        delay: 0,
        fallbackPlacements: ["top", "right", "bottom", "left"],
        html: !1,
        offset: [0, 6],
        placement: "top",
        popperConfig: null,
        sanitize: !0,
        sanitizeFn: null,
        selector: !1,
        template:
          '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        title: "",
        trigger: "hover focus",
      },
      ym = {
        allowList: "object",
        animation: "boolean",
        boundary: "(string|element)",
        container: "(string|element|boolean)",
        customClass: "(string|function)",
        delay: "(number|object)",
        fallbackPlacements: "array",
        html: "boolean",
        offset: "(array|string|function)",
        placement: "(string|function)",
        popperConfig: "(null|object|function)",
        sanitize: "boolean",
        sanitizeFn: "(null|function)",
        selector: "(string|boolean)",
        template: "string",
        title: "(string|element|function)",
        trigger: "string",
      };
    class Wi extends lt {
      constructor(s, d) {
        if ($ === void 0)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        super(s, d),
          (this._isEnabled = !0),
          (this._timeout = 0),
          (this._isHovered = null),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this._templateFactory = null),
          (this._newContent = null),
          (this.tip = null),
          this._setListeners(),
          this._config.selector || this._fixTitle();
      }
      static get Default() {
        return vm;
      }
      static get DefaultType() {
        return ym;
      }
      static get NAME() {
        return "tooltip";
      }
      enable() {
        this._isEnabled = !0;
      }
      disable() {
        this._isEnabled = !1;
      }
      toggleEnabled() {
        this._isEnabled = !this._isEnabled;
      }
      toggle() {
        this._isEnabled &&
          ((this._activeTrigger.click = !this._activeTrigger.click),
          this._isShown() ? this._leave() : this._enter());
      }
      dispose() {
        clearTimeout(this._timeout),
          D.off(this._element.closest(td), nd, this._hideModalHandler),
          this._element.getAttribute("data-bs-original-title") &&
            this._element.setAttribute(
              "title",
              this._element.getAttribute("data-bs-original-title")
            ),
          this._disposePopper(),
          super.dispose();
      }
      show() {
        if (this._element.style.display === "none")
          throw new Error("Please use show on visible elements");
        if (!this._isWithContent() || !this._isEnabled) return;
        const s = D.trigger(this._element, this.constructor.eventName("show")),
          d = (
            B(this._element) || this._element.ownerDocument.documentElement
          ).contains(this._element);
        if (s.defaultPrevented || !d) return;
        this._disposePopper();
        const y = this._getTipElement();
        this._element.setAttribute("aria-describedby", y.getAttribute("id"));
        const { container: b } = this._config;
        if (
          (this._element.ownerDocument.documentElement.contains(this.tip) ||
            (b.append(y),
            D.trigger(this._element, this.constructor.eventName("inserted"))),
          (this._popper = this._createPopper(y)),
          y.classList.add(Vl),
          "ontouchstart" in document.documentElement)
        )
          for (const O of [].concat(...document.body.children))
            D.on(O, "mouseover", z);
        this._queueCallback(
          () => {
            D.trigger(this._element, this.constructor.eventName("shown")),
              this._isHovered === !1 && this._leave(),
              (this._isHovered = !1);
          },
          this.tip,
          this._isAnimated()
        );
      }
      hide() {
        if (
          this._isShown() &&
          !D.trigger(this._element, this.constructor.eventName("hide"))
            .defaultPrevented
        ) {
          if (
            (this._getTipElement().classList.remove(Vl),
            "ontouchstart" in document.documentElement)
          )
            for (const s of [].concat(...document.body.children))
              D.off(s, "mouseover", z);
          (this._activeTrigger.click = !1),
            (this._activeTrigger[ju] = !1),
            (this._activeTrigger[js] = !1),
            (this._isHovered = null),
            this._queueCallback(
              () => {
                this._isWithActiveTrigger() ||
                  (this._isHovered || this._disposePopper(),
                  this._element.removeAttribute("aria-describedby"),
                  D.trigger(
                    this._element,
                    this.constructor.eventName("hidden")
                  ));
              },
              this.tip,
              this._isAnimated()
            );
        }
      }
      update() {
        this._popper && this._popper.update();
      }
      _isWithContent() {
        return !!this._getTitle();
      }
      _getTipElement() {
        return (
          this.tip ||
            (this.tip = this._createTipElement(
              this._newContent || this._getContentForTemplate()
            )),
          this.tip
        );
      }
      _createTipElement(s) {
        const d = this._getTemplateFactory(s).toHtml();
        if (!d) return null;
        d.classList.remove(bu, Vl),
          d.classList.add(`bs-${this.constructor.NAME}-auto`);
        const y = ((b) => {
          do b += Math.floor(1e6 * Math.random());
          while (document.getElementById(b));
          return b;
        })(this.constructor.NAME).toString();
        return (
          d.setAttribute("id", y), this._isAnimated() && d.classList.add(bu), d
        );
      }
      setContent(s) {
        (this._newContent = s),
          this._isShown() && (this._disposePopper(), this.show());
      }
      _getTemplateFactory(s) {
        return (
          this._templateFactory
            ? this._templateFactory.changeContent(s)
            : (this._templateFactory = new hm({
                ...this._config,
                content: s,
                extraClass: this._resolvePossibleFunction(
                  this._config.customClass
                ),
              })),
          this._templateFactory
        );
      }
      _getContentForTemplate() {
        return { ".tooltip-inner": this._getTitle() };
      }
      _getTitle() {
        return (
          this._resolvePossibleFunction(this._config.title) ||
          this._element.getAttribute("data-bs-original-title")
        );
      }
      _initializeOnDelegatedTarget(s) {
        return this.constructor.getOrCreateInstance(
          s.delegateTarget,
          this._getDelegateConfig()
        );
      }
      _isAnimated() {
        return (
          this._config.animation ||
          (this.tip && this.tip.classList.contains(bu))
        );
      }
      _isShown() {
        return this.tip && this.tip.classList.contains(Vl);
      }
      _createPopper(s) {
        const d = E(this._config.placement, [this, s, this._element]),
          y = mm[d.toUpperCase()];
        return I(this._element, s, this._getPopperConfig(y));
      }
      _getOffset() {
        const { offset: s } = this._config;
        return typeof s == "string"
          ? s.split(",").map((d) => Number.parseInt(d, 10))
          : typeof s == "function"
          ? (d) => s(d, this._element)
          : s;
      }
      _resolvePossibleFunction(s) {
        return E(s, [this._element]);
      }
      _getPopperConfig(s) {
        const d = {
          placement: s,
          modifiers: [
            {
              name: "flip",
              options: { fallbackPlacements: this._config.fallbackPlacements },
            },
            { name: "offset", options: { offset: this._getOffset() } },
            {
              name: "preventOverflow",
              options: { boundary: this._config.boundary },
            },
            {
              name: "arrow",
              options: { element: `.${this.constructor.NAME}-arrow` },
            },
            {
              name: "preSetPlacement",
              enabled: !0,
              phase: "beforeMain",
              fn: (y) => {
                this._getTipElement().setAttribute(
                  "data-popper-placement",
                  y.state.placement
                );
              },
            },
          ],
        };
        return { ...d, ...E(this._config.popperConfig, [d]) };
      }
      _setListeners() {
        const s = this._config.trigger.split(" ");
        for (const d of s)
          if (d === "click")
            D.on(
              this._element,
              this.constructor.eventName("click"),
              this._config.selector,
              (y) => {
                this._initializeOnDelegatedTarget(y).toggle();
              }
            );
          else if (d !== "manual") {
            const y =
                d === js
                  ? this.constructor.eventName("mouseenter")
                  : this.constructor.eventName("focusin"),
              b =
                d === js
                  ? this.constructor.eventName("mouseleave")
                  : this.constructor.eventName("focusout");
            D.on(this._element, y, this._config.selector, (O) => {
              const R = this._initializeOnDelegatedTarget(O);
              (R._activeTrigger[O.type === "focusin" ? ju : js] = !0),
                R._enter();
            }),
              D.on(this._element, b, this._config.selector, (O) => {
                const R = this._initializeOnDelegatedTarget(O);
                (R._activeTrigger[O.type === "focusout" ? ju : js] =
                  R._element.contains(O.relatedTarget)),
                  R._leave();
              });
          }
        (this._hideModalHandler = () => {
          this._element && this.hide();
        }),
          D.on(this._element.closest(td), nd, this._hideModalHandler);
      }
      _fixTitle() {
        const s = this._element.getAttribute("title");
        s &&
          (this._element.getAttribute("aria-label") ||
            this._element.textContent.trim() ||
            this._element.setAttribute("aria-label", s),
          this._element.setAttribute("data-bs-original-title", s),
          this._element.removeAttribute("title"));
      }
      _enter() {
        this._isShown() || this._isHovered
          ? (this._isHovered = !0)
          : ((this._isHovered = !0),
            this._setTimeout(() => {
              this._isHovered && this.show();
            }, this._config.delay.show));
      }
      _leave() {
        this._isWithActiveTrigger() ||
          ((this._isHovered = !1),
          this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
      }
      _setTimeout(s, d) {
        clearTimeout(this._timeout), (this._timeout = setTimeout(s, d));
      }
      _isWithActiveTrigger() {
        return Object.values(this._activeTrigger).includes(!0);
      }
      _getConfig(s) {
        const d = qe.getDataAttributes(this._element);
        for (const y of Object.keys(d)) gm.has(y) && delete d[y];
        return (
          (s = { ...d, ...(typeof s == "object" && s ? s : {}) }),
          (s = this._mergeConfigObj(s)),
          (s = this._configAfterMerge(s)),
          this._typeCheckConfig(s),
          s
        );
      }
      _configAfterMerge(s) {
        return (
          (s.container = s.container === !1 ? document.body : x(s.container)),
          typeof s.delay == "number" &&
            (s.delay = { show: s.delay, hide: s.delay }),
          typeof s.title == "number" && (s.title = s.title.toString()),
          typeof s.content == "number" && (s.content = s.content.toString()),
          s
        );
      }
      _getDelegateConfig() {
        const s = {};
        for (const [d, y] of Object.entries(this._config))
          this.constructor.Default[d] !== y && (s[d] = y);
        return (s.selector = !1), (s.trigger = "manual"), s;
      }
      _disposePopper() {
        this._popper && (this._popper.destroy(), (this._popper = null)),
          this.tip && (this.tip.remove(), (this.tip = null));
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = Wi.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0) throw new TypeError(`No method named "${s}"`);
            d[s]();
          }
        });
      }
    }
    C(Wi);
    const _m = {
        ...Wi.Default,
        content: "",
        offset: [0, 8],
        placement: "right",
        template:
          '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
        trigger: "click",
      },
      wm = { ...Wi.DefaultType, content: "(null|string|element|function)" };
    class ql extends Wi {
      static get Default() {
        return _m;
      }
      static get DefaultType() {
        return wm;
      }
      static get NAME() {
        return "popover";
      }
      _isWithContent() {
        return this._getTitle() || this._getContent();
      }
      _getContentForTemplate() {
        return {
          ".popover-header": this._getTitle(),
          ".popover-body": this._getContent(),
        };
      }
      _getContent() {
        return this._resolvePossibleFunction(this._config.content);
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = ql.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0) throw new TypeError(`No method named "${s}"`);
            d[s]();
          }
        });
      }
    }
    C(ql);
    const Ou = ".bs.scrollspy",
      xm = `activate${Ou}`,
      rd = `click${Ou}`,
      Sm = `load${Ou}.data-api`,
      Po = "active",
      Au = "[href]",
      id = ".nav-link",
      km = `${id}, .nav-item > ${id}, .list-group-item`,
      Cm = {
        offset: null,
        rootMargin: "0px 0px -25%",
        smoothScroll: !1,
        target: null,
        threshold: [0.1, 0.5, 1],
      },
      Em = {
        offset: "(number|null)",
        rootMargin: "string",
        smoothScroll: "boolean",
        target: "element",
        threshold: "array",
      };
    class Os extends lt {
      constructor(s, d) {
        super(s, d),
          (this._targetLinks = new Map()),
          (this._observableSections = new Map()),
          (this._rootElement =
            getComputedStyle(this._element).overflowY === "visible"
              ? null
              : this._element),
          (this._activeTarget = null),
          (this._observer = null),
          (this._previousScrollData = {
            visibleEntryTop: 0,
            parentScrollTop: 0,
          }),
          this.refresh();
      }
      static get Default() {
        return Cm;
      }
      static get DefaultType() {
        return Em;
      }
      static get NAME() {
        return "scrollspy";
      }
      refresh() {
        this._initializeTargetsAndObservables(),
          this._maybeEnableSmoothScroll(),
          this._observer
            ? this._observer.disconnect()
            : (this._observer = this._getNewObserver());
        for (const s of this._observableSections.values())
          this._observer.observe(s);
      }
      dispose() {
        this._observer.disconnect(), super.dispose();
      }
      _configAfterMerge(s) {
        return (
          (s.target = x(s.target) || document.body),
          (s.rootMargin = s.offset ? `${s.offset}px 0px -30%` : s.rootMargin),
          typeof s.threshold == "string" &&
            (s.threshold = s.threshold
              .split(",")
              .map((d) => Number.parseFloat(d))),
          s
        );
      }
      _maybeEnableSmoothScroll() {
        this._config.smoothScroll &&
          (D.off(this._config.target, rd),
          D.on(this._config.target, rd, Au, (s) => {
            const d = this._observableSections.get(s.target.hash);
            if (d) {
              s.preventDefault();
              const y = this._rootElement || window,
                b = d.offsetTop - this._element.offsetTop;
              if (y.scrollTo)
                return void y.scrollTo({ top: b, behavior: "smooth" });
              y.scrollTop = b;
            }
          }));
      }
      _getNewObserver() {
        const s = {
          root: this._rootElement,
          threshold: this._config.threshold,
          rootMargin: this._config.rootMargin,
        };
        return new IntersectionObserver((d) => this._observerCallback(d), s);
      }
      _observerCallback(s) {
        const d = (R) => this._targetLinks.get(`#${R.target.id}`),
          y = (R) => {
            (this._previousScrollData.visibleEntryTop = R.target.offsetTop),
              this._process(d(R));
          },
          b = (this._rootElement || document.documentElement).scrollTop,
          O = b >= this._previousScrollData.parentScrollTop;
        this._previousScrollData.parentScrollTop = b;
        for (const R of s) {
          if (!R.isIntersecting) {
            (this._activeTarget = null), this._clearActiveClass(d(R));
            continue;
          }
          const q =
            R.target.offsetTop >= this._previousScrollData.visibleEntryTop;
          if (O && q) {
            if ((y(R), !b)) return;
          } else O || q || y(R);
        }
      }
      _initializeTargetsAndObservables() {
        (this._targetLinks = new Map()), (this._observableSections = new Map());
        const s = pe.find(Au, this._config.target);
        for (const d of s) {
          if (!d.hash || W(d)) continue;
          const y = pe.findOne(decodeURI(d.hash), this._element);
          j(y) &&
            (this._targetLinks.set(decodeURI(d.hash), d),
            this._observableSections.set(d.hash, y));
        }
      }
      _process(s) {
        this._activeTarget !== s &&
          (this._clearActiveClass(this._config.target),
          (this._activeTarget = s),
          s.classList.add(Po),
          this._activateParents(s),
          D.trigger(this._element, xm, { relatedTarget: s }));
      }
      _activateParents(s) {
        if (s.classList.contains("dropdown-item"))
          pe.findOne(".dropdown-toggle", s.closest(".dropdown")).classList.add(
            Po
          );
        else
          for (const d of pe.parents(s, ".nav, .list-group"))
            for (const y of pe.prev(d, km)) y.classList.add(Po);
      }
      _clearActiveClass(s) {
        s.classList.remove(Po);
        const d = pe.find(`${Au}.${Po}`, s);
        for (const y of d) y.classList.remove(Po);
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = Os.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0 || s.startsWith("_") || s === "constructor")
              throw new TypeError(`No method named "${s}"`);
            d[s]();
          }
        });
      }
    }
    D.on(window, Sm, () => {
      for (const m of pe.find('[data-bs-spy="scroll"]'))
        Os.getOrCreateInstance(m);
    }),
      C(Os);
    const Ui = ".bs.tab",
      Tm = `hide${Ui}`,
      Nm = `hidden${Ui}`,
      bm = `show${Ui}`,
      jm = `shown${Ui}`,
      Om = `click${Ui}`,
      Am = `keydown${Ui}`,
      Pm = `load${Ui}`,
      Lm = "ArrowLeft",
      od = "ArrowRight",
      Dm = "ArrowUp",
      sd = "ArrowDown",
      Pu = "Home",
      ld = "End",
      Vi = "active",
      ad = "fade",
      Lu = "show",
      ud = ".dropdown-toggle",
      Du = `:not(${ud})`,
      cd =
        '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
      Mu = `.nav-link${Du}, .list-group-item${Du}, [role="tab"]${Du}, ${cd}`,
      Mm = `.${Vi}[data-bs-toggle="tab"], .${Vi}[data-bs-toggle="pill"], .${Vi}[data-bs-toggle="list"]`;
    class qi extends lt {
      constructor(s) {
        super(s),
          (this._parent = this._element.closest(
            '.list-group, .nav, [role="tablist"]'
          )),
          this._parent &&
            (this._setInitialAttributes(this._parent, this._getChildren()),
            D.on(this._element, Am, (d) => this._keydown(d)));
      }
      static get NAME() {
        return "tab";
      }
      show() {
        const s = this._element;
        if (this._elemIsActive(s)) return;
        const d = this._getActiveElem(),
          y = d ? D.trigger(d, Tm, { relatedTarget: s }) : null;
        D.trigger(s, bm, { relatedTarget: d }).defaultPrevented ||
          (y && y.defaultPrevented) ||
          (this._deactivate(d, s), this._activate(s, d));
      }
      _activate(s, d) {
        s &&
          (s.classList.add(Vi),
          this._activate(pe.getElementFromSelector(s)),
          this._queueCallback(
            () => {
              s.getAttribute("role") === "tab"
                ? (s.removeAttribute("tabindex"),
                  s.setAttribute("aria-selected", !0),
                  this._toggleDropDown(s, !0),
                  D.trigger(s, jm, { relatedTarget: d }))
                : s.classList.add(Lu);
            },
            s,
            s.classList.contains(ad)
          ));
      }
      _deactivate(s, d) {
        s &&
          (s.classList.remove(Vi),
          s.blur(),
          this._deactivate(pe.getElementFromSelector(s)),
          this._queueCallback(
            () => {
              s.getAttribute("role") === "tab"
                ? (s.setAttribute("aria-selected", !1),
                  s.setAttribute("tabindex", "-1"),
                  this._toggleDropDown(s, !1),
                  D.trigger(s, Nm, { relatedTarget: d }))
                : s.classList.remove(Lu);
            },
            s,
            s.classList.contains(ad)
          ));
      }
      _keydown(s) {
        if (![Lm, od, Dm, sd, Pu, ld].includes(s.key)) return;
        s.stopPropagation(), s.preventDefault();
        const d = this._getChildren().filter((b) => !W(b));
        let y;
        if ([Pu, ld].includes(s.key)) y = d[s.key === Pu ? 0 : d.length - 1];
        else {
          const b = [od, sd].includes(s.key);
          y = Q(d, s.target, b, !0);
        }
        y && (y.focus({ preventScroll: !0 }), qi.getOrCreateInstance(y).show());
      }
      _getChildren() {
        return pe.find(Mu, this._parent);
      }
      _getActiveElem() {
        return this._getChildren().find((s) => this._elemIsActive(s)) || null;
      }
      _setInitialAttributes(s, d) {
        this._setAttributeIfNotExists(s, "role", "tablist");
        for (const y of d) this._setInitialAttributesOnChild(y);
      }
      _setInitialAttributesOnChild(s) {
        s = this._getInnerElement(s);
        const d = this._elemIsActive(s),
          y = this._getOuterElement(s);
        s.setAttribute("aria-selected", d),
          y !== s && this._setAttributeIfNotExists(y, "role", "presentation"),
          d || s.setAttribute("tabindex", "-1"),
          this._setAttributeIfNotExists(s, "role", "tab"),
          this._setInitialAttributesOnTargetPanel(s);
      }
      _setInitialAttributesOnTargetPanel(s) {
        const d = pe.getElementFromSelector(s);
        d &&
          (this._setAttributeIfNotExists(d, "role", "tabpanel"),
          s.id &&
            this._setAttributeIfNotExists(d, "aria-labelledby", `${s.id}`));
      }
      _toggleDropDown(s, d) {
        const y = this._getOuterElement(s);
        if (!y.classList.contains("dropdown")) return;
        const b = (O, R) => {
          const q = pe.findOne(O, y);
          q && q.classList.toggle(R, d);
        };
        b(ud, Vi), b(".dropdown-menu", Lu), y.setAttribute("aria-expanded", d);
      }
      _setAttributeIfNotExists(s, d, y) {
        s.hasAttribute(d) || s.setAttribute(d, y);
      }
      _elemIsActive(s) {
        return s.classList.contains(Vi);
      }
      _getInnerElement(s) {
        return s.matches(Mu) ? s : pe.findOne(Mu, s);
      }
      _getOuterElement(s) {
        return s.closest(".nav-item, .list-group-item") || s;
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = qi.getOrCreateInstance(this);
          if (typeof s == "string") {
            if (d[s] === void 0 || s.startsWith("_") || s === "constructor")
              throw new TypeError(`No method named "${s}"`);
            d[s]();
          }
        });
      }
    }
    D.on(document, Om, cd, function (m) {
      ["A", "AREA"].includes(this.tagName) && m.preventDefault(),
        W(this) || qi.getOrCreateInstance(this).show();
    }),
      D.on(window, Pm, () => {
        for (const m of pe.find(Mm)) qi.getOrCreateInstance(m);
      }),
      C(qi);
    const li = ".bs.toast",
      Im = `mouseover${li}`,
      Rm = `mouseout${li}`,
      zm = `focusin${li}`,
      $m = `focusout${li}`,
      Fm = `hide${li}`,
      Hm = `hidden${li}`,
      Bm = `show${li}`,
      Wm = `shown${li}`,
      fd = "hide",
      Ql = "show",
      Xl = "showing",
      Um = { animation: "boolean", autohide: "boolean", delay: "number" },
      Vm = { animation: !0, autohide: !0, delay: 5e3 };
    class As extends lt {
      constructor(s, d) {
        super(s, d),
          (this._timeout = null),
          (this._hasMouseInteraction = !1),
          (this._hasKeyboardInteraction = !1),
          this._setListeners();
      }
      static get Default() {
        return Vm;
      }
      static get DefaultType() {
        return Um;
      }
      static get NAME() {
        return "toast";
      }
      show() {
        D.trigger(this._element, Bm).defaultPrevented ||
          (this._clearTimeout(),
          this._config.animation && this._element.classList.add("fade"),
          this._element.classList.remove(fd),
          K(this._element),
          this._element.classList.add(Ql, Xl),
          this._queueCallback(
            () => {
              this._element.classList.remove(Xl),
                D.trigger(this._element, Wm),
                this._maybeScheduleHide();
            },
            this._element,
            this._config.animation
          ));
      }
      hide() {
        this.isShown() &&
          (D.trigger(this._element, Fm).defaultPrevented ||
            (this._element.classList.add(Xl),
            this._queueCallback(
              () => {
                this._element.classList.add(fd),
                  this._element.classList.remove(Xl, Ql),
                  D.trigger(this._element, Hm);
              },
              this._element,
              this._config.animation
            )));
      }
      dispose() {
        this._clearTimeout(),
          this.isShown() && this._element.classList.remove(Ql),
          super.dispose();
      }
      isShown() {
        return this._element.classList.contains(Ql);
      }
      _maybeScheduleHide() {
        this._config.autohide &&
          (this._hasMouseInteraction ||
            this._hasKeyboardInteraction ||
            (this._timeout = setTimeout(() => {
              this.hide();
            }, this._config.delay)));
      }
      _onInteraction(s, d) {
        switch (s.type) {
          case "mouseover":
          case "mouseout":
            this._hasMouseInteraction = d;
            break;
          case "focusin":
          case "focusout":
            this._hasKeyboardInteraction = d;
        }
        if (d) return void this._clearTimeout();
        const y = s.relatedTarget;
        this._element === y ||
          this._element.contains(y) ||
          this._maybeScheduleHide();
      }
      _setListeners() {
        D.on(this._element, Im, (s) => this._onInteraction(s, !0)),
          D.on(this._element, Rm, (s) => this._onInteraction(s, !1)),
          D.on(this._element, zm, (s) => this._onInteraction(s, !0)),
          D.on(this._element, $m, (s) => this._onInteraction(s, !1));
      }
      _clearTimeout() {
        clearTimeout(this._timeout), (this._timeout = null);
      }
      static jQueryInterface(s) {
        return this.each(function () {
          const d = As.getOrCreateInstance(this, s);
          if (typeof s == "string") {
            if (d[s] === void 0) throw new TypeError(`No method named "${s}"`);
            d[s](this);
          }
        });
      }
    }
    return (
      Ai(As),
      C(As),
      {
        Alert: er,
        Button: Pi,
        Carousel: rr,
        Collapse: kr,
        Dropdown: cn,
        Modal: fe,
        Offcanvas: Pr,
        Popover: ql,
        ScrollSpy: Os,
        Tab: qi,
        Toast: As,
        Tooltip: Wi,
      }
    );
  });
})(T0);
var Gg = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Lp = Ji.createContext && Ji.createContext(Gg),
  N0 = ["attr", "size", "title"];
function b0(e, t) {
  if (e == null) return {};
  var n = j0(e, t),
    i,
    l;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(e);
    for (l = 0; l < u.length; l++)
      (i = u[l]),
        !(t.indexOf(i) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, i) &&
          (n[i] = e[i]);
  }
  return n;
}
function j0(e, t) {
  if (e == null) return {};
  var n = {};
  for (var i in e)
    if (Object.prototype.hasOwnProperty.call(e, i)) {
      if (t.indexOf(i) >= 0) continue;
      n[i] = e[i];
    }
  return n;
}
function Za() {
  return (
    (Za = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
          }
          return e;
        }),
    Za.apply(this, arguments)
  );
}
function Dp(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    t &&
      (i = i.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, i);
  }
  return n;
}
function Ja(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Dp(Object(n), !0).forEach(function (i) {
          O0(e, i, n[i]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Dp(Object(n)).forEach(function (i) {
          Object.defineProperty(e, i, Object.getOwnPropertyDescriptor(n, i));
        });
  }
  return e;
}
function O0(e, t, n) {
  return (
    (t = A0(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function A0(e) {
  var t = P0(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function P0(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var i = n.call(e, t || "default");
    if (typeof i != "object") return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Zg(e) {
  return (
    e &&
    e.map((t, n) =>
      Ji.createElement(t.tag, Ja({ key: n }, t.attr), Zg(t.child))
    )
  );
}
function Jg(e) {
  return (t) =>
    Ji.createElement(L0, Za({ attr: Ja({}, e.attr) }, t), Zg(e.child));
}
function L0(e) {
  var t = (n) => {
    var { attr: i, size: l, title: u } = e,
      g = b0(e, N0),
      _ = l || n.size || "1em",
      x;
    return (
      n.className && (x = n.className),
      e.className && (x = (x ? x + " " : "") + e.className),
      Ji.createElement(
        "svg",
        Za(
          { stroke: "currentColor", fill: "currentColor", strokeWidth: "0" },
          n.attr,
          i,
          g,
          {
            className: x,
            style: Ja(Ja({ color: e.color || n.color }, n.style), e.style),
            height: _,
            width: _,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        u && Ji.createElement("title", null, u),
        e.children
      )
    );
  };
  return Lp !== void 0
    ? Ji.createElement(Lp.Consumer, null, (n) => t(n))
    : t(Gg);
}
function em(e) {
  return Jg({
    tag: "svg",
    attr: { viewBox: "0 0 448 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function D0(e) {
  return Jg({
    tag: "svg",
    attr: { viewBox: "0 0 496 512" },
    child: [
      {
        tag: "path",
        attr: {
          d: "M248,8C111.033,8,0,119.033,0,256S111.033,504,248,504,496,392.967,496,256,384.967,8,248,8ZM362.952,176.66c-3.732,39.215-19.881,134.378-28.1,178.3-3.476,18.584-10.322,24.816-16.948,25.425-14.4,1.326-25.338-9.517-39.287-18.661-21.827-14.308-34.158-23.215-55.346-37.177-24.485-16.135-8.612-25,5.342-39.5,3.652-3.793,67.107-61.51,68.335-66.746.153-.655.3-3.1-1.154-4.384s-3.59-.849-5.135-.5q-3.283.746-104.608,69.142-14.845,10.194-26.894,9.934c-8.855-.191-25.888-5.006-38.551-9.123-15.531-5.048-27.875-7.717-26.8-16.291q.84-6.7,18.45-13.7,108.446-47.248,144.628-62.3c68.872-28.647,83.183-33.623,92.511-33.789,2.052-.034,6.639.474,9.61,2.885a10.452,10.452,0,0,1,3.53,6.716A43.765,43.765,0,0,1,362.952,176.66Z",
        },
        child: [],
      },
    ],
  })(e);
}
const M0 = () => (
    zr.useEffect(() => {
      document.addEventListener("scroll", () => {
        console.log(window.scrollY);
        const e = document.querySelector(".navbar");
        window.scrollY > 50
          ? e.classList.add("navbar-scroll")
          : e.classList.remove("navbar-scroll");
      });
    }, []),
    H.jsx(H.Fragment, {
      children: H.jsxs("nav", {
        className: "navbar navbar-expand-lg fixed-top",
        children: [
          H.jsx("a", {
            className: "navbar-brand",
            href: "#",
            children: "$SPOOKYBOYS",
          }),
          H.jsx("button", {
            className: "navbar-toggler",
            type: "button",
            "data-toggle": "collapse",
            "data-target": "#navbarNav",
            "aria-controls": "navbarNav",
            "aria-expanded": "false",
            "aria-label": "Toggle navigation",
            children: H.jsx("span", { className: "navbar-toggler-icon" }),
          }),
          H.jsx("div", {
            className: "collapse navbar-collapse justify-content-center",
            id: "navbarNav",
            children: H.jsxs("ul", {
              className: "navbar-nav",
              children: [
                H.jsx("li", {
                  className: "nav-item",
                  children: H.jsx("a", {
                    className: "nav-link",
                    href: "#about-section",
                    children: "About",
                  }),
                }),
                H.jsx("li", {
                  className: "nav-item",
                  children: H.jsx("a", {
                    className: "nav-link",
                    href: "#tokenomicssection",
                    children: "Tokenomics",
                  }),
                }),
                H.jsx("li", {
                  className: "nav-item",
                  children: H.jsx("a", {
                    className: "nav-link",
                    href: "#roadmap-section",
                    children: "Roadmap",
                  }),
                }),
                H.jsx("li", {
                  className: "nav-item",
                  children: H.jsx("a", {
                    className: "nav-link",
                    href: "#memes-section",
                    children: "Characters",
                  }),
                }),
                H.jsx("li", {
                  className: "nav-item",
                  children: H.jsx("a", {
                    className: "nav-link",
                    href: "https://pancakeswap.finance/swap?outputCurrency=0x856340E1Abd24bd8f91262f298aab0e9ac861C8C",
                    children: "Buy Now",
                  }),
                }),
              ],
            }),
          }),
          H.jsx("a", {
            href: "https://x.com/SpookyBoys_bsc",
            target: "_blank",
            className: "twitter-icon hidden-sm",
            children: H.jsx(em, {}),
          }),
        ],
      }),
    })
  ),
  I0 = () => {
    const [e, t] = zr.useState(!1),
      n = "0x856340E1Abd24bd8f91262f298aab0e9ac861C8C";
    return (
      zr.useEffect(() => {
        e &&
          setTimeout(() => {
            t(!1);
          }, 2e3);
      }, [e]),
      H.jsx(H.Fragment, {
        children: H.jsx("div", {
          id: "overlay",
          className: "overlay",
          children: H.jsxs("div", {
            className: "hero-top",
            children: [
              H.jsx("h1", { children: "UPTOBER WILL BE SPOOKY" }),
              H.jsx("div", {
                className: "ca-copy",
                children: H.jsxs("div", {
                  className: "contract",
                  children: [
                    H.jsxs("p", { children: [" ", n, " "] }),
                    H.jsx("button", {
                      class: "copy btn",
                      onClick: () =>
                        navigator.clipboard.writeText(n).then(() => t(!0)),
                      children: e
                        ? H.jsx("i", { class: "fa fa-check" })
                        : H.jsx("i", { class: "fas fa-copy" }),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
      })
    );
  };
var tm = {};
function R0(e) {
  if (typeof window > "u") return;
  const t = document.createElement("style");
  return (
    t.setAttribute("type", "text/css"),
    (t.innerHTML = e),
    document.head.appendChild(t),
    e
  );
}
Object.defineProperty(tm, "__esModule", { value: !0 });
var ot = zr;
function z0(e) {
  return e && typeof e == "object" && "default" in e ? e : { default: e };
}
var ci = z0(ot);
R0(`.rfm-marquee-container {
  overflow-x: hidden;
  display: flex;
  flex-direction: row;
  position: relative;
  width: var(--width);
  transform: var(--transform);
}
.rfm-marquee-container:hover div {
  animation-play-state: var(--pause-on-hover);
}
.rfm-marquee-container:active div {
  animation-play-state: var(--pause-on-click);
}

.rfm-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
.rfm-overlay::before, .rfm-overlay::after {
  background: linear-gradient(to right, var(--gradient-color), rgba(255, 255, 255, 0));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
  z-index: 2;
  pointer-events: none;
  touch-action: none;
}
.rfm-overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.rfm-overlay::before {
  left: 0;
  top: 0;
}

.rfm-marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--iteration-count);
  animation-play-state: var(--play);
  animation-delay: var(--delay);
  animation-direction: var(--direction);
}
@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.rfm-initial-child-container {
  flex: 0 0 auto;
  display: flex;
  min-width: auto;
  flex-direction: row;
  align-items: center;
}

.rfm-child {
  transform: var(--transform);
}`);
const $0 = ot.forwardRef(function (
  {
    style: t = {},
    className: n = "",
    autoFill: i = !1,
    play: l = !0,
    pauseOnHover: u = !1,
    pauseOnClick: g = !1,
    direction: _ = "left",
    speed: x = 50,
    delay: j = 0,
    loop: W = 0,
    gradient: B = !1,
    gradientColor: z = "white",
    gradientWidth: K = 200,
    onFinish: U,
    onCycleComplete: V,
    onMount: _e,
    children: C,
  },
  E
) {
  const [A, Q] = ot.useState(0),
    [J, ce] = ot.useState(0),
    [c, ae] = ot.useState(1),
    [ge, Ee] = ot.useState(!1),
    Ct = ot.useRef(null),
    wt = E || Ct,
    ke = ot.useRef(null),
    Et = ot.useCallback(() => {
      if (ke.current && wt.current) {
        const Te = wt.current.getBoundingClientRect(),
          Ve = ke.current.getBoundingClientRect();
        let ft = Te.width,
          qe = Ve.width;
        (_ === "up" || _ === "down") && ((ft = Te.height), (qe = Ve.height)),
          ae(i && ft && qe && qe < ft ? Math.ceil(ft / qe) : 1),
          Q(ft),
          ce(qe);
      }
    }, [i, wt, _]);
  ot.useEffect(() => {
    if (ge && (Et(), ke.current && wt.current)) {
      const Te = new ResizeObserver(() => Et());
      return (
        Te.observe(wt.current),
        Te.observe(ke.current),
        () => {
          Te && Te.disconnect();
        }
      );
    }
  }, [Et, wt, ge]),
    ot.useEffect(() => {
      Et();
    }, [Et, C]),
    ot.useEffect(() => {
      Ee(!0);
    }, []),
    ot.useEffect(() => {
      typeof _e == "function" && _e();
    }, []);
  const _r = ot.useMemo(
      () => (i ? (J * c) / x : J < A ? A / x : J / x),
      [i, A, J, c, x]
    ),
    Zn = ot.useMemo(
      () =>
        Object.assign(Object.assign({}, t), {
          "--pause-on-hover": !l || u ? "paused" : "running",
          "--pause-on-click": !l || (u && !g) || g ? "paused" : "running",
          "--width": _ === "up" || _ === "down" ? "100vh" : "100%",
          "--transform":
            _ === "up"
              ? "rotate(-90deg)"
              : _ === "down"
              ? "rotate(90deg)"
              : "none",
        }),
      [t, l, u, g, _]
    ),
    ht = ot.useMemo(
      () => ({
        "--gradient-color": z,
        "--gradient-width": typeof K == "number" ? `${K}px` : K,
      }),
      [z, K]
    ),
    te = ot.useMemo(
      () => ({
        "--play": l ? "running" : "paused",
        "--direction": _ === "left" ? "normal" : "reverse",
        "--duration": `${_r}s`,
        "--delay": `${j}s`,
        "--iteration-count": W ? `${W}` : "infinite",
        "--min-width": i ? "auto" : "100%",
      }),
      [l, _, _r, j, W, i]
    ),
    de = ot.useMemo(
      () => ({
        "--transform":
          _ === "up"
            ? "rotate(90deg)"
            : _ === "down"
            ? "rotate(-90deg)"
            : "none",
      }),
      [_]
    ),
    D = ot.useCallback(
      (Te) =>
        [...Array(Number.isFinite(Te) && Te >= 0 ? Te : 0)].map((Ve, ft) =>
          ci.default.createElement(
            ot.Fragment,
            { key: ft },
            ot.Children.map(C, (qe) =>
              ci.default.createElement(
                "div",
                { style: de, className: "rfm-child" },
                qe
              )
            )
          )
        ),
      [de, C]
    );
  return ge
    ? ci.default.createElement(
        "div",
        { ref: wt, style: Zn, className: "rfm-marquee-container " + n },
        B &&
          ci.default.createElement("div", {
            style: ht,
            className: "rfm-overlay",
          }),
        ci.default.createElement(
          "div",
          {
            className: "rfm-marquee",
            style: te,
            onAnimationIteration: V,
            onAnimationEnd: U,
          },
          ci.default.createElement(
            "div",
            { className: "rfm-initial-child-container", ref: ke },
            ot.Children.map(C, (Te) =>
              ci.default.createElement(
                "div",
                { style: de, className: "rfm-child" },
                Te
              )
            )
          ),
          D(c - 1)
        ),
        ci.default.createElement(
          "div",
          { className: "rfm-marquee", style: te },
          D(c)
        )
      )
    : null;
});
var F0 = (tm.default = $0);
const H0 = "/assets/barra1-DrYCQTlj.gif",
  B0 = "/assets/barra2-D1NpP8_k.gif",
  ga = () =>
    H.jsx("div", {
      className: "sliding-bar",
      children: H.jsx(F0, {
        autoFill: !0,
        children: H.jsxs("div", {
          className: "sliding-content",
          children: [
            H.jsx("img", { src: H0, alt: "Sliding Image" }),
            H.jsx("img", { src: B0, alt: "Sliding Image" }),
          ],
        }),
      }),
    }),
  W0 = "/assets/segundaseccion-DTFK4DqQ.gif",
  U0 = "/assets/primeraseccion-Cy3U4qF9.gif",
  Mp = ({ img: e, text: t, reverse: n }) =>
    H.jsx("div", {
      className: "about-card",
      children: H.jsxs("div", {
        className: "about-card__content",
        children: [
          !n && e,
          H.jsx("div", { className: "about-card__text", children: t }),
          n && e,
        ],
      }),
    }),
  V0 = () =>
    H.jsx(H.Fragment, {
      children: H.jsx("div", {
        id: "about-section",
        className: "new-section about",
        children: H.jsxs("div", {
          children: [
            H.jsx("h1", {
              className: "about-title",
              children: "Spooky Boys",
            }),
            H.jsxs("div", {
              className: "about-cards",
              children: [
                H.jsx(Mp, {
                  img: H.jsx("img", {
                    src: U0,
                    alt: "First Section Image",
                    className:
                      "img-fluid hidden img-animate primeraseccion visible img-visible",
                  }),
                  text: "This Halloween, the Boys Club is not just dressing up—they're becoming the legends of horror. Andy wraps himself in ancient curses as Andy the Mummy, Brett is reborn as the towering Frankenstein’s Monster, Landwolf unleashes his wild side as Landwolf the Werewolf, and Pepe rises from the depths as Pepe the Swamp Monster. Together, they’re set to bring mayhem and thrill to the season. Get ready to join the Spooky Boys as they rule the night in monstrous fashion!",
                }),
                H.jsx(Mp, {
                  img: H.jsx("img", {
                    src: W0,
                    alt: "Second Section Image",
                    className: "img-fluid hidden primeraseccion",
                  }),
                  reverse: !0,
                  text: "Halloween night will never be the same with the Spooky Boys on the loose. Whether it’s Andy the Mummy stalking for treasure, Frankenstein Brett sparking chaos, Landwolf the Werewolf hunting under the full moon, or Pepe the Swamp Monster lurking in the shadows, the boys are turning every corner into a fright fest. The streets will be alive with howls, croaks, and laughter—are you brave enough to join their Spooky Boys adventure? Enter if you dare!",
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  q0 = "/assets/tokenomics-B0EVVV5r.gif",
  Q0 = () =>
    H.jsxs("div", {
      id: "tokenomicssection",
      className: "tokenomicssection tokenomics",
      children: [
        H.jsx("h1", { className: "tokenomics__title", children: "TOKENOMICS" }),
        H.jsxs("div", {
          className: "tokenomics__content",
          children: [
            H.jsx("div", {
              className: "tokenomics__text",
              children: H.jsxs("p", {
                className: "texttokenomics",
                children: [
                  H.jsx("p", {
                    className: "texttokenomics",
                    children: "Supply: 1,000,000,000",
                  }),
                  "Tax: 0%",
                  H.jsx("br", {}),
                  "LP: Locked",
                  H.jsx("br", {}),
                  "Contract: Renounced",
                ],
              }),
            }),
            H.jsx("div", {
              className: "tokenomics__img",
              children: H.jsx("img", {
                src: q0,
                alt: "Tokenomics Image",
                className: "img-fluid tokenomicsimg",
              }),
            }),
          ],
        }),
      ],
    }),
  X0 = "/1.png",
  Y0 = () =>
    H.jsxs("div", {
      id: "tokenomicssection",
      className: "tokenomicssection tokenomics",
      children: [
        H.jsx("h1", { className: "tokenomics__title", children: "ROADMAP" }),
        H.jsxs("div", {
          className: "tokenomics__content",
          children: [
            H.jsx("div", {
              className: "tokenomics__img",
              children: H.jsx("img", {
                src: X0,
                alt: "",
                className: "img-fluid tokenomicsimg",
              }),
            }),
            H.jsx("div", {
              className: "tokenomics__text",
              children: H.jsxs("p", {
                className: "texttokenomics small",
                children: [
                  H.jsx("span", { children: " Phase 1:" }),
                  " Token Launched, Contract Verified, DEXTools & Dexscreener Socials Updated, CMC & CG Applications",
                  H.jsx("br", {}),
                  H.jsx("br", {}),
                  H.jsx("span", { children: "Phase 2:" }),
                  " CMC & CG Listings, Marketing Campaigns Kick Off, Tier 3 CEX Listings",
                  H.jsx("br", {}),
                  H.jsx("br", {}),
                  H.jsx("span", { children: "Phase 3:" }),
                  " Tier 2 CEX Listings, Strategic Partnerships, Tier 1 CEX Listings",
                  H.jsx("br", {}),
                  H.jsx("br", {}),
                  "THE MYSTERIOUS CHEST",
                  H.jsx("br", {}),
                ],
              }),
            }),
          ],
        }),
      ],
    }),
  K0 = "/assets/meme1-CN9tLQab.png",
  G0 = "/assets/meme2-DPNiyCbe.png",
  Z0 = "/assets/meme3-iiYOegY2.png",
  J0 = "/assets/meme4-DASkG-b9.png",
  e1 = () =>
    H.jsx(H.Fragment, {
      children: H.jsx("div", {
        id: "memes-section",
        className: "gallery-section",
        children: H.jsxs("div", {
          className: "container",
          children: [
            H.jsx("h2", { className: "titlememes", children: "Characters" }),
            H.jsxs("div", {
              className: "gallery-grid",
              children: [
                H.jsx("div", {
                  className: "gallery-item",
                  children: H.jsx("img", {
                    src: K0,
                    alt: "Meme 1",
                    className: "img-fluid",
                  }),
                }),
                H.jsx("div", {
                  className: "gallery-item",
                  children: H.jsx("img", {
                    src: G0,
                    alt: "Meme 2",
                    className: "img-fluid",
                  }),
                }),
                H.jsx("div", {
                  className: "gallery-item",
                  children: H.jsx("img", {
                    src: Z0,
                    alt: "Meme 3",
                    className: "img-fluid",
                  }),
                }),
                H.jsx("div", {
                  className: "gallery-item",
                  children: H.jsx("img", {
                    src: J0,
                    alt: "Meme 4",
                    className: "img-fluid",
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  t1 = () =>
    H.jsx(H.Fragment, {
      children: H.jsx("div", {
        id: "footer-section",
        className: "footer-section",
        children: H.jsxs("div", {
          className: "container",
          children: [
            H.jsx("h1", {
              className: "titlesect",
              children: "Join our community",
            }),
            H.jsxs("div", {
              className:
                "row justify-content-center text-center social-section",
              children: [
                H.jsx("div", {
                  className: "col-12 col-md-4 social",
                  children: H.jsx("a", {
                    href: "https://x.com/SpookyBoys_bsc",
                    target: "_blank",
                    rel: "noreferrer",
                    children: H.jsx(em, { className: "social-icon" }),
                  }),
                }),
                H.jsx("div", {
                  className: "col-12 col-md-4 social",
                  children: H.jsx("a", {
                    href: "https://t.me/SpookyBoys_bsc",
                    target: "_blank",
                    rel: "noreferrer",
                    children: H.jsx(D0, { className: "social-icon" }),
                  }),
                }),
              ],
            }),
            H.jsx("div", {
              className: "row justify-content-center",
              children: H.jsx("div", {
                className: "col-12",
                children: H.jsxs("p", {
                  className: "textcopy",
                  children: [
                    "$SPOOKYBOYS is a meme coin with no intrinsic value and doesn't guarantee a financial return; its value is determined by the global community. Content on this website is for entertainment only and not financial advice. Engage at your own risk, as purchasing or selling tokens involves potential losses and high volatility. Always consult local laws before transacting in cryptocurrencies.",
                    H.jsx("br", {}),
                    "Copyright $SPOOKYBOYS © 2025 - All Rights Reserved.",
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
    });
var nm = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */ (function (e) {
  (function (t, n) {
    e.exports = t.document
      ? n(t, !0)
      : function (i) {
          if (!i.document)
            throw new Error("jQuery requires a window with a document");
          return n(i);
        };
  })(typeof window < "u" ? window : Ip, function (t, n) {
    var i = [],
      l = Object.getPrototypeOf,
      u = i.slice,
      g = i.flat
        ? function (r) {
            return i.flat.call(r);
          }
        : function (r) {
            return i.concat.apply([], r);
          },
      _ = i.push,
      x = i.indexOf,
      j = {},
      W = j.toString,
      B = j.hasOwnProperty,
      z = B.toString,
      K = z.call(Object),
      U = {},
      V = function (o) {
        return (
          typeof o == "function" &&
          typeof o.nodeType != "number" &&
          typeof o.item != "function"
        );
      },
      _e = function (o) {
        return o != null && o === o.window;
      },
      C = t.document,
      E = { type: !0, src: !0, nonce: !0, noModule: !0 };
    function A(r, o, a) {
      a = a || C;
      var f,
        p,
        h = a.createElement("script");
      if (((h.text = r), o))
        for (f in E)
          (p = o[f] || (o.getAttribute && o.getAttribute(f))),
            p && h.setAttribute(f, p);
      a.head.appendChild(h).parentNode.removeChild(h);
    }
    function Q(r) {
      return r == null
        ? r + ""
        : typeof r == "object" || typeof r == "function"
        ? j[W.call(r)] || "object"
        : typeof r;
    }
    var J = "3.7.1",
      ce = /HTML$/i,
      c = function (r, o) {
        return new c.fn.init(r, o);
      };
    (c.fn = c.prototype =
      {
        jquery: J,
        constructor: c,
        length: 0,
        toArray: function () {
          return u.call(this);
        },
        get: function (r) {
          return r == null
            ? u.call(this)
            : r < 0
            ? this[r + this.length]
            : this[r];
        },
        pushStack: function (r) {
          var o = c.merge(this.constructor(), r);
          return (o.prevObject = this), o;
        },
        each: function (r) {
          return c.each(this, r);
        },
        map: function (r) {
          return this.pushStack(
            c.map(this, function (o, a) {
              return r.call(o, a, o);
            })
          );
        },
        slice: function () {
          return this.pushStack(u.apply(this, arguments));
        },
        first: function () {
          return this.eq(0);
        },
        last: function () {
          return this.eq(-1);
        },
        even: function () {
          return this.pushStack(
            c.grep(this, function (r, o) {
              return (o + 1) % 2;
            })
          );
        },
        odd: function () {
          return this.pushStack(
            c.grep(this, function (r, o) {
              return o % 2;
            })
          );
        },
        eq: function (r) {
          var o = this.length,
            a = +r + (r < 0 ? o : 0);
          return this.pushStack(a >= 0 && a < o ? [this[a]] : []);
        },
        end: function () {
          return this.prevObject || this.constructor();
        },
        push: _,
        sort: i.sort,
        splice: i.splice,
      }),
      (c.extend = c.fn.extend =
        function () {
          var r,
            o,
            a,
            f,
            p,
            h,
            v = arguments[0] || {},
            k = 1,
            S = arguments.length,
            N = !1;
          for (
            typeof v == "boolean" && ((N = v), (v = arguments[k] || {}), k++),
              typeof v != "object" && !V(v) && (v = {}),
              k === S && ((v = this), k--);
            k < S;
            k++
          )
            if ((r = arguments[k]) != null)
              for (o in r)
                (f = r[o]),
                  !(o === "__proto__" || v === f) &&
                    (N && f && (c.isPlainObject(f) || (p = Array.isArray(f)))
                      ? ((a = v[o]),
                        p && !Array.isArray(a)
                          ? (h = [])
                          : !p && !c.isPlainObject(a)
                          ? (h = {})
                          : (h = a),
                        (p = !1),
                        (v[o] = c.extend(N, h, f)))
                      : f !== void 0 && (v[o] = f));
          return v;
        }),
      c.extend({
        expando: "jQuery" + (J + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (r) {
          throw new Error(r);
        },
        noop: function () {},
        isPlainObject: function (r) {
          var o, a;
          return !r || W.call(r) !== "[object Object]"
            ? !1
            : ((o = l(r)),
              o
                ? ((a = B.call(o, "constructor") && o.constructor),
                  typeof a == "function" && z.call(a) === K)
                : !0);
        },
        isEmptyObject: function (r) {
          var o;
          for (o in r) return !1;
          return !0;
        },
        globalEval: function (r, o, a) {
          A(r, { nonce: o && o.nonce }, a);
        },
        each: function (r, o) {
          var a,
            f = 0;
          if (ae(r))
            for (a = r.length; f < a && o.call(r[f], f, r[f]) !== !1; f++);
          else for (f in r) if (o.call(r[f], f, r[f]) === !1) break;
          return r;
        },
        text: function (r) {
          var o,
            a = "",
            f = 0,
            p = r.nodeType;
          if (!p) for (; (o = r[f++]); ) a += c.text(o);
          return p === 1 || p === 11
            ? r.textContent
            : p === 9
            ? r.documentElement.textContent
            : p === 3 || p === 4
            ? r.nodeValue
            : a;
        },
        makeArray: function (r, o) {
          var a = o || [];
          return (
            r != null &&
              (ae(Object(r))
                ? c.merge(a, typeof r == "string" ? [r] : r)
                : _.call(a, r)),
            a
          );
        },
        inArray: function (r, o, a) {
          return o == null ? -1 : x.call(o, r, a);
        },
        isXMLDoc: function (r) {
          var o = r && r.namespaceURI,
            a = r && (r.ownerDocument || r).documentElement;
          return !ce.test(o || (a && a.nodeName) || "HTML");
        },
        merge: function (r, o) {
          for (var a = +o.length, f = 0, p = r.length; f < a; f++)
            r[p++] = o[f];
          return (r.length = p), r;
        },
        grep: function (r, o, a) {
          for (var f, p = [], h = 0, v = r.length, k = !a; h < v; h++)
            (f = !o(r[h], h)), f !== k && p.push(r[h]);
          return p;
        },
        map: function (r, o, a) {
          var f,
            p,
            h = 0,
            v = [];
          if (ae(r))
            for (f = r.length; h < f; h++)
              (p = o(r[h], h, a)), p != null && v.push(p);
          else for (h in r) (p = o(r[h], h, a)), p != null && v.push(p);
          return g(v);
        },
        guid: 1,
        support: U,
      }),
      typeof Symbol == "function" &&
        (c.fn[Symbol.iterator] = i[Symbol.iterator]),
      c.each(
        "Boolean Number String Function Array Date RegExp Object Error Symbol".split(
          " "
        ),
        function (r, o) {
          j["[object " + o + "]"] = o.toLowerCase();
        }
      );
    function ae(r) {
      var o = !!r && "length" in r && r.length,
        a = Q(r);
      return V(r) || _e(r)
        ? !1
        : a === "array" ||
            o === 0 ||
            (typeof o == "number" && o > 0 && o - 1 in r);
    }
    function ge(r, o) {
      return r.nodeName && r.nodeName.toLowerCase() === o.toLowerCase();
    }
    var Ee = i.pop,
      Ct = i.sort,
      wt = i.splice,
      ke = "[\\x20\\t\\r\\n\\f]",
      Et = new RegExp(
        "^" + ke + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ke + "+$",
        "g"
      );
    c.contains = function (r, o) {
      var a = o && o.parentNode;
      return (
        r === a ||
        !!(
          a &&
          a.nodeType === 1 &&
          (r.contains
            ? r.contains(a)
            : r.compareDocumentPosition && r.compareDocumentPosition(a) & 16)
        )
      );
    };
    var _r = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function Zn(r, o) {
      return o
        ? r === "\0"
          ? "�"
          : r.slice(0, -1) +
            "\\" +
            r.charCodeAt(r.length - 1).toString(16) +
            " "
        : "\\" + r;
    }
    c.escapeSelector = function (r) {
      return (r + "").replace(_r, Zn);
    };
    var ht = C,
      te = _;
    (function () {
      var r,
        o,
        a,
        f,
        p,
        h = te,
        v,
        k,
        S,
        N,
        I,
        $ = c.expando,
        L = 0,
        X = 0,
        ve = bo(),
        De = bo(),
        Ce = bo(),
        mt = bo(),
        at = function (w, T) {
          return w === T && (p = !0), 0;
        },
        kn =
          "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        Cn =
          "(?:\\\\[\\da-fA-F]{1,6}" +
          ke +
          "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",
        Oe =
          "\\[" +
          ke +
          "*(" +
          Cn +
          ")(?:" +
          ke +
          "*([*^$|!~]?=)" +
          ke +
          `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` +
          Cn +
          "))|)" +
          ke +
          "*\\]",
        lr =
          ":(" +
          Cn +
          `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` +
          Oe +
          ")*)|.*)\\)|)",
        Me = new RegExp(ke + "+", "g"),
        Fe = new RegExp("^" + ke + "*," + ke + "*"),
        un = new RegExp("^" + ke + "*([>+~]|" + ke + ")" + ke + "*"),
        Ss = new RegExp(ke + "|>"),
        Ut = new RegExp(lr),
        Hi = new RegExp("^" + Cn + "$"),
        En = {
          ID: new RegExp("^#(" + Cn + ")"),
          CLASS: new RegExp("^\\.(" + Cn + ")"),
          TAG: new RegExp("^(" + Cn + "|[*])"),
          ATTR: new RegExp("^" + Oe),
          PSEUDO: new RegExp("^" + lr),
          CHILD: new RegExp(
            "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
              ke +
              "*(even|odd|(([+-]|)(\\d*)n|)" +
              ke +
              "*(?:([+-]|)" +
              ke +
              "*(\\d+)|))" +
              ke +
              "*\\)|)",
            "i"
          ),
          bool: new RegExp("^(?:" + kn + ")$", "i"),
          needsContext: new RegExp(
            "^" +
              ke +
              "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
              ke +
              "*((?:-\\d)?\\d*)" +
              ke +
              "*\\)|)(?=[^-]|$)",
            "i"
          ),
        },
        ar = /^(?:input|select|textarea|button)$/i,
        ur = /^h\d$/i,
        en = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ks = /[+~]/,
        Bn = new RegExp(
          "\\\\[\\da-fA-F]{1,6}" + ke + "?|\\\\([^\\r\\n\\f])",
          "g"
        ),
        Wn = function (w, T) {
          var P = "0x" + w.slice(1) - 65536;
          return (
            T ||
            (P < 0
              ? String.fromCharCode(P + 65536)
              : String.fromCharCode((P >> 10) | 55296, (P & 1023) | 56320))
          );
        },
        cn = function () {
          fr();
        },
        Fl = Ar(
          function (w) {
            return w.disabled === !0 && ge(w, "fieldset");
          },
          { dir: "parentNode", next: "legend" }
        );
      function Hl() {
        try {
          return v.activeElement;
        } catch {}
      }
      try {
        h.apply((i = u.call(ht.childNodes)), ht.childNodes),
          i[ht.childNodes.length].nodeType;
      } catch {
        h = {
          apply: function (T, P) {
            te.apply(T, u.call(P));
          },
          call: function (T) {
            te.apply(T, u.call(arguments, 1));
          },
        };
      }
      function ze(w, T, P, M) {
        var F,
          G,
          ee,
          ue,
          ne,
          Ae,
          fe,
          he = T && T.ownerDocument,
          be = T ? T.nodeType : 9;
        if (
          ((P = P || []),
          typeof w != "string" || !w || (be !== 1 && be !== 9 && be !== 11))
        )
          return P;
        if (!M && (fr(T), (T = T || v), S)) {
          if (be !== 11 && (ne = en.exec(w)))
            if ((F = ne[1])) {
              if (be === 9)
                if ((ee = T.getElementById(F))) {
                  if (ee.id === F) return h.call(P, ee), P;
                } else return P;
              else if (
                he &&
                (ee = he.getElementById(F)) &&
                ze.contains(T, ee) &&
                ee.id === F
              )
                return h.call(P, ee), P;
            } else {
              if (ne[2]) return h.apply(P, T.getElementsByTagName(w)), P;
              if ((F = ne[3]) && T.getElementsByClassName)
                return h.apply(P, T.getElementsByClassName(F)), P;
            }
          if (!mt[w + " "] && (!N || !N.test(w))) {
            if (((fe = w), (he = T), be === 1 && (Ss.test(w) || un.test(w)))) {
              for (
                he = (ks.test(w) && Cs(T.parentNode)) || T,
                  (he != T || !U.scope) &&
                    ((ue = T.getAttribute("id"))
                      ? (ue = c.escapeSelector(ue))
                      : T.setAttribute("id", (ue = $))),
                  Ae = oi(w),
                  G = Ae.length;
                G--;

              )
                Ae[G] = (ue ? "#" + ue : ":scope") + " " + Bi(Ae[G]);
              fe = Ae.join(",");
            }
            try {
              return h.apply(P, he.querySelectorAll(fe)), P;
            } catch {
              mt(w, !0);
            } finally {
              ue === $ && T.removeAttribute("id");
            }
          }
        }
        return Ul(w.replace(Et, "$1"), T, P, M);
      }
      function bo() {
        var w = [];
        function T(P, M) {
          return (
            w.push(P + " ") > o.cacheLength && delete T[w.shift()],
            (T[P + " "] = M)
          );
        }
        return T;
      }
      function fn(w) {
        return (w[$] = !0), w;
      }
      function Or(w) {
        var T = v.createElement("fieldset");
        try {
          return !!w(T);
        } catch {
          return !1;
        } finally {
          T.parentNode && T.parentNode.removeChild(T), (T = null);
        }
      }
      function jo(w) {
        return function (T) {
          return ge(T, "input") && T.type === w;
        };
      }
      function Nu(w) {
        return function (T) {
          return (ge(T, "input") || ge(T, "button")) && T.type === w;
        };
      }
      function Bl(w) {
        return function (T) {
          return "form" in T
            ? T.parentNode && T.disabled === !1
              ? "label" in T
                ? "label" in T.parentNode
                  ? T.parentNode.disabled === w
                  : T.disabled === w
                : T.isDisabled === w || (T.isDisabled !== !w && Fl(T) === w)
              : T.disabled === w
            : "label" in T
            ? T.disabled === w
            : !1;
        };
      }
      function cr(w) {
        return fn(function (T) {
          return (
            (T = +T),
            fn(function (P, M) {
              for (var F, G = w([], P.length, T), ee = G.length; ee--; )
                P[(F = G[ee])] && (P[F] = !(M[F] = P[F]));
            })
          );
        });
      }
      function Cs(w) {
        return w && typeof w.getElementsByTagName < "u" && w;
      }
      function fr(w) {
        var T,
          P = w ? w.ownerDocument || w : ht;
        return (
          P == v ||
            P.nodeType !== 9 ||
            !P.documentElement ||
            ((v = P),
            (k = v.documentElement),
            (S = !c.isXMLDoc(v)),
            (I = k.matches || k.webkitMatchesSelector || k.msMatchesSelector),
            k.msMatchesSelector &&
              ht != v &&
              (T = v.defaultView) &&
              T.top !== T &&
              T.addEventListener("unload", cn),
            (U.getById = Or(function (M) {
              return (
                (k.appendChild(M).id = c.expando),
                !v.getElementsByName || !v.getElementsByName(c.expando).length
              );
            })),
            (U.disconnectedMatch = Or(function (M) {
              return I.call(M, "*");
            })),
            (U.scope = Or(function () {
              return v.querySelectorAll(":scope");
            })),
            (U.cssHas = Or(function () {
              try {
                return v.querySelector(":has(*,:jqfake)"), !1;
              } catch {
                return !0;
              }
            })),
            U.getById
              ? ((o.filter.ID = function (M) {
                  var F = M.replace(Bn, Wn);
                  return function (G) {
                    return G.getAttribute("id") === F;
                  };
                }),
                (o.find.ID = function (M, F) {
                  if (typeof F.getElementById < "u" && S) {
                    var G = F.getElementById(M);
                    return G ? [G] : [];
                  }
                }))
              : ((o.filter.ID = function (M) {
                  var F = M.replace(Bn, Wn);
                  return function (G) {
                    var ee =
                      typeof G.getAttributeNode < "u" &&
                      G.getAttributeNode("id");
                    return ee && ee.value === F;
                  };
                }),
                (o.find.ID = function (M, F) {
                  if (typeof F.getElementById < "u" && S) {
                    var G,
                      ee,
                      ue,
                      ne = F.getElementById(M);
                    if (ne) {
                      if (((G = ne.getAttributeNode("id")), G && G.value === M))
                        return [ne];
                      for (
                        ue = F.getElementsByName(M), ee = 0;
                        (ne = ue[ee++]);

                      )
                        if (
                          ((G = ne.getAttributeNode("id")), G && G.value === M)
                        )
                          return [ne];
                    }
                    return [];
                  }
                })),
            (o.find.TAG = function (M, F) {
              return typeof F.getElementsByTagName < "u"
                ? F.getElementsByTagName(M)
                : F.querySelectorAll(M);
            }),
            (o.find.CLASS = function (M, F) {
              if (typeof F.getElementsByClassName < "u" && S)
                return F.getElementsByClassName(M);
            }),
            (N = []),
            Or(function (M) {
              var F;
              (k.appendChild(M).innerHTML =
                "<a id='" +
                $ +
                "' href='' disabled='disabled'></a><select id='" +
                $ +
                "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                M.querySelectorAll("[selected]").length ||
                  N.push("\\[" + ke + "*(?:value|" + kn + ")"),
                M.querySelectorAll("[id~=" + $ + "-]").length || N.push("~="),
                M.querySelectorAll("a#" + $ + "+*").length ||
                  N.push(".#.+[+~]"),
                M.querySelectorAll(":checked").length || N.push(":checked"),
                (F = v.createElement("input")),
                F.setAttribute("type", "hidden"),
                M.appendChild(F).setAttribute("name", "D"),
                (k.appendChild(M).disabled = !0),
                M.querySelectorAll(":disabled").length !== 2 &&
                  N.push(":enabled", ":disabled"),
                (F = v.createElement("input")),
                F.setAttribute("name", ""),
                M.appendChild(F),
                M.querySelectorAll("[name='']").length ||
                  N.push("\\[" + ke + "*name" + ke + "*=" + ke + `*(?:''|"")`);
            }),
            U.cssHas || N.push(":has"),
            (N = N.length && new RegExp(N.join("|"))),
            (at = function (M, F) {
              if (M === F) return (p = !0), 0;
              var G = !M.compareDocumentPosition - !F.compareDocumentPosition;
              return (
                G ||
                ((G =
                  (M.ownerDocument || M) == (F.ownerDocument || F)
                    ? M.compareDocumentPosition(F)
                    : 1),
                G & 1 || (!U.sortDetached && F.compareDocumentPosition(M) === G)
                  ? M === v || (M.ownerDocument == ht && ze.contains(ht, M))
                    ? -1
                    : F === v || (F.ownerDocument == ht && ze.contains(ht, F))
                    ? 1
                    : f
                    ? x.call(f, M) - x.call(f, F)
                    : 0
                  : G & 4
                  ? -1
                  : 1)
              );
            })),
          v
        );
      }
      (ze.matches = function (w, T) {
        return ze(w, null, null, T);
      }),
        (ze.matchesSelector = function (w, T) {
          if ((fr(w), S && !mt[T + " "] && (!N || !N.test(T))))
            try {
              var P = I.call(w, T);
              if (
                P ||
                U.disconnectedMatch ||
                (w.document && w.document.nodeType !== 11)
              )
                return P;
            } catch {
              mt(T, !0);
            }
          return ze(T, v, null, [w]).length > 0;
        }),
        (ze.contains = function (w, T) {
          return (w.ownerDocument || w) != v && fr(w), c.contains(w, T);
        }),
        (ze.attr = function (w, T) {
          (w.ownerDocument || w) != v && fr(w);
          var P = o.attrHandle[T.toLowerCase()],
            M =
              P && B.call(o.attrHandle, T.toLowerCase()) ? P(w, T, !S) : void 0;
          return M !== void 0 ? M : w.getAttribute(T);
        }),
        (ze.error = function (w) {
          throw new Error("Syntax error, unrecognized expression: " + w);
        }),
        (c.uniqueSort = function (w) {
          var T,
            P = [],
            M = 0,
            F = 0;
          if (
            ((p = !U.sortStable),
            (f = !U.sortStable && u.call(w, 0)),
            Ct.call(w, at),
            p)
          ) {
            for (; (T = w[F++]); ) T === w[F] && (M = P.push(F));
            for (; M--; ) wt.call(w, P[M], 1);
          }
          return (f = null), w;
        }),
        (c.fn.uniqueSort = function () {
          return this.pushStack(c.uniqueSort(u.apply(this)));
        }),
        (o = c.expr =
          {
            cacheLength: 50,
            createPseudo: fn,
            match: En,
            attrHandle: {},
            find: {},
            relative: {
              ">": { dir: "parentNode", first: !0 },
              " ": { dir: "parentNode" },
              "+": { dir: "previousSibling", first: !0 },
              "~": { dir: "previousSibling" },
            },
            preFilter: {
              ATTR: function (w) {
                return (
                  (w[1] = w[1].replace(Bn, Wn)),
                  (w[3] = (w[3] || w[4] || w[5] || "").replace(Bn, Wn)),
                  w[2] === "~=" && (w[3] = " " + w[3] + " "),
                  w.slice(0, 4)
                );
              },
              CHILD: function (w) {
                return (
                  (w[1] = w[1].toLowerCase()),
                  w[1].slice(0, 3) === "nth"
                    ? (w[3] || ze.error(w[0]),
                      (w[4] = +(w[4]
                        ? w[5] + (w[6] || 1)
                        : 2 * (w[3] === "even" || w[3] === "odd"))),
                      (w[5] = +(w[7] + w[8] || w[3] === "odd")))
                    : w[3] && ze.error(w[0]),
                  w
                );
              },
              PSEUDO: function (w) {
                var T,
                  P = !w[6] && w[2];
                return En.CHILD.test(w[0])
                  ? null
                  : (w[3]
                      ? (w[2] = w[4] || w[5] || "")
                      : P &&
                        Ut.test(P) &&
                        (T = oi(P, !0)) &&
                        (T = P.indexOf(")", P.length - T) - P.length) &&
                        ((w[0] = w[0].slice(0, T)), (w[2] = P.slice(0, T))),
                    w.slice(0, 3));
              },
            },
            filter: {
              TAG: function (w) {
                var T = w.replace(Bn, Wn).toLowerCase();
                return w === "*"
                  ? function () {
                      return !0;
                    }
                  : function (P) {
                      return ge(P, T);
                    };
              },
              CLASS: function (w) {
                var T = ve[w + " "];
                return (
                  T ||
                  ((T = new RegExp("(^|" + ke + ")" + w + "(" + ke + "|$)")) &&
                    ve(w, function (P) {
                      return T.test(
                        (typeof P.className == "string" && P.className) ||
                          (typeof P.getAttribute < "u" &&
                            P.getAttribute("class")) ||
                          ""
                      );
                    }))
                );
              },
              ATTR: function (w, T, P) {
                return function (M) {
                  var F = ze.attr(M, w);
                  return F == null
                    ? T === "!="
                    : T
                    ? ((F += ""),
                      T === "="
                        ? F === P
                        : T === "!="
                        ? F !== P
                        : T === "^="
                        ? P && F.indexOf(P) === 0
                        : T === "*="
                        ? P && F.indexOf(P) > -1
                        : T === "$="
                        ? P && F.slice(-P.length) === P
                        : T === "~="
                        ? (" " + F.replace(Me, " ") + " ").indexOf(P) > -1
                        : T === "|="
                        ? F === P || F.slice(0, P.length + 1) === P + "-"
                        : !1)
                    : !0;
                };
              },
              CHILD: function (w, T, P, M, F) {
                var G = w.slice(0, 3) !== "nth",
                  ee = w.slice(-4) !== "last",
                  ue = T === "of-type";
                return M === 1 && F === 0
                  ? function (ne) {
                      return !!ne.parentNode;
                    }
                  : function (ne, Ae, fe) {
                      var he,
                        be,
                        me,
                        He,
                        Ot,
                        vt = G !== ee ? "nextSibling" : "previousSibling",
                        Vt = ne.parentNode,
                        Tn = ue && ne.nodeName.toLowerCase(),
                        si = !fe && !ue,
                        At = !1;
                      if (Vt) {
                        if (G) {
                          for (; vt; ) {
                            for (me = ne; (me = me[vt]); )
                              if (ue ? ge(me, Tn) : me.nodeType === 1)
                                return !1;
                            Ot = vt = w === "only" && !Ot && "nextSibling";
                          }
                          return !0;
                        }
                        if (
                          ((Ot = [ee ? Vt.firstChild : Vt.lastChild]), ee && si)
                        ) {
                          for (
                            be = Vt[$] || (Vt[$] = {}),
                              he = be[w] || [],
                              He = he[0] === L && he[1],
                              At = He && he[2],
                              me = He && Vt.childNodes[He];
                            (me =
                              (++He && me && me[vt]) ||
                              (At = He = 0) ||
                              Ot.pop());

                          )
                            if (me.nodeType === 1 && ++At && me === ne) {
                              be[w] = [L, He, At];
                              break;
                            }
                        } else if (
                          (si &&
                            ((be = ne[$] || (ne[$] = {})),
                            (he = be[w] || []),
                            (He = he[0] === L && he[1]),
                            (At = He)),
                          At === !1)
                        )
                          for (
                            ;
                            (me =
                              (++He && me && me[vt]) ||
                              (At = He = 0) ||
                              Ot.pop()) &&
                            !(
                              (ue ? ge(me, Tn) : me.nodeType === 1) &&
                              ++At &&
                              (si &&
                                ((be = me[$] || (me[$] = {})),
                                (be[w] = [L, At])),
                              me === ne)
                            );

                          );
                        return (
                          (At -= F), At === M || (At % M === 0 && At / M >= 0)
                        );
                      }
                    };
              },
              PSEUDO: function (w, T) {
                var P,
                  M =
                    o.pseudos[w] ||
                    o.setFilters[w.toLowerCase()] ||
                    ze.error("unsupported pseudo: " + w);
                return M[$]
                  ? M(T)
                  : M.length > 1
                  ? ((P = [w, w, "", T]),
                    o.setFilters.hasOwnProperty(w.toLowerCase())
                      ? fn(function (F, G) {
                          for (var ee, ue = M(F, T), ne = ue.length; ne--; )
                            (ee = x.call(F, ue[ne])),
                              (F[ee] = !(G[ee] = ue[ne]));
                        })
                      : function (F) {
                          return M(F, 0, P);
                        })
                  : M;
              },
            },
            pseudos: {
              not: fn(function (w) {
                var T = [],
                  P = [],
                  M = Ao(w.replace(Et, "$1"));
                return M[$]
                  ? fn(function (F, G, ee, ue) {
                      for (
                        var ne, Ae = M(F, null, ue, []), fe = F.length;
                        fe--;

                      )
                        (ne = Ae[fe]) && (F[fe] = !(G[fe] = ne));
                    })
                  : function (F, G, ee) {
                      return (
                        (T[0] = F), M(T, null, ee, P), (T[0] = null), !P.pop()
                      );
                    };
              }),
              has: fn(function (w) {
                return function (T) {
                  return ze(w, T).length > 0;
                };
              }),
              contains: fn(function (w) {
                return (
                  (w = w.replace(Bn, Wn)),
                  function (T) {
                    return (T.textContent || c.text(T)).indexOf(w) > -1;
                  }
                );
              }),
              lang: fn(function (w) {
                return (
                  Hi.test(w || "") || ze.error("unsupported lang: " + w),
                  (w = w.replace(Bn, Wn).toLowerCase()),
                  function (T) {
                    var P;
                    do
                      if (
                        (P = S
                          ? T.lang
                          : T.getAttribute("xml:lang") ||
                            T.getAttribute("lang"))
                      )
                        return (
                          (P = P.toLowerCase()),
                          P === w || P.indexOf(w + "-") === 0
                        );
                    while ((T = T.parentNode) && T.nodeType === 1);
                    return !1;
                  }
                );
              }),
              target: function (w) {
                var T = t.location && t.location.hash;
                return T && T.slice(1) === w.id;
              },
              root: function (w) {
                return w === k;
              },
              focus: function (w) {
                return (
                  w === Hl() &&
                  v.hasFocus() &&
                  !!(w.type || w.href || ~w.tabIndex)
                );
              },
              enabled: Bl(!1),
              disabled: Bl(!0),
              checked: function (w) {
                return (
                  (ge(w, "input") && !!w.checked) ||
                  (ge(w, "option") && !!w.selected)
                );
              },
              selected: function (w) {
                return (
                  w.parentNode && w.parentNode.selectedIndex, w.selected === !0
                );
              },
              empty: function (w) {
                for (w = w.firstChild; w; w = w.nextSibling)
                  if (w.nodeType < 6) return !1;
                return !0;
              },
              parent: function (w) {
                return !o.pseudos.empty(w);
              },
              header: function (w) {
                return ur.test(w.nodeName);
              },
              input: function (w) {
                return ar.test(w.nodeName);
              },
              button: function (w) {
                return (
                  (ge(w, "input") && w.type === "button") || ge(w, "button")
                );
              },
              text: function (w) {
                var T;
                return (
                  ge(w, "input") &&
                  w.type === "text" &&
                  ((T = w.getAttribute("type")) == null ||
                    T.toLowerCase() === "text")
                );
              },
              first: cr(function () {
                return [0];
              }),
              last: cr(function (w, T) {
                return [T - 1];
              }),
              eq: cr(function (w, T, P) {
                return [P < 0 ? P + T : P];
              }),
              even: cr(function (w, T) {
                for (var P = 0; P < T; P += 2) w.push(P);
                return w;
              }),
              odd: cr(function (w, T) {
                for (var P = 1; P < T; P += 2) w.push(P);
                return w;
              }),
              lt: cr(function (w, T, P) {
                var M;
                for (
                  P < 0 ? (M = P + T) : P > T ? (M = T) : (M = P);
                  --M >= 0;

                )
                  w.push(M);
                return w;
              }),
              gt: cr(function (w, T, P) {
                for (var M = P < 0 ? P + T : P; ++M < T; ) w.push(M);
                return w;
              }),
            },
          }),
        (o.pseudos.nth = o.pseudos.eq);
      for (r in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
        o.pseudos[r] = jo(r);
      for (r in { submit: !0, reset: !0 }) o.pseudos[r] = Nu(r);
      function Es() {}
      (Es.prototype = o.filters = o.pseudos), (o.setFilters = new Es());
      function oi(w, T) {
        var P,
          M,
          F,
          G,
          ee,
          ue,
          ne,
          Ae = De[w + " "];
        if (Ae) return T ? 0 : Ae.slice(0);
        for (ee = w, ue = [], ne = o.preFilter; ee; ) {
          (!P || (M = Fe.exec(ee))) &&
            (M && (ee = ee.slice(M[0].length) || ee), ue.push((F = []))),
            (P = !1),
            (M = un.exec(ee)) &&
              ((P = M.shift()),
              F.push({ value: P, type: M[0].replace(Et, " ") }),
              (ee = ee.slice(P.length)));
          for (G in o.filter)
            (M = En[G].exec(ee)) &&
              (!ne[G] || (M = ne[G](M))) &&
              ((P = M.shift()),
              F.push({ value: P, type: G, matches: M }),
              (ee = ee.slice(P.length)));
          if (!P) break;
        }
        return T ? ee.length : ee ? ze.error(w) : De(w, ue).slice(0);
      }
      function Bi(w) {
        for (var T = 0, P = w.length, M = ""; T < P; T++) M += w[T].value;
        return M;
      }
      function Ar(w, T, P) {
        var M = T.dir,
          F = T.next,
          G = F || M,
          ee = P && G === "parentNode",
          ue = X++;
        return T.first
          ? function (ne, Ae, fe) {
              for (; (ne = ne[M]); )
                if (ne.nodeType === 1 || ee) return w(ne, Ae, fe);
              return !1;
            }
          : function (ne, Ae, fe) {
              var he,
                be,
                me = [L, ue];
              if (fe) {
                for (; (ne = ne[M]); )
                  if ((ne.nodeType === 1 || ee) && w(ne, Ae, fe)) return !0;
              } else
                for (; (ne = ne[M]); )
                  if (ne.nodeType === 1 || ee)
                    if (((be = ne[$] || (ne[$] = {})), F && ge(ne, F)))
                      ne = ne[M] || ne;
                    else {
                      if ((he = be[G]) && he[0] === L && he[1] === ue)
                        return (me[2] = he[2]);
                      if (((be[G] = me), (me[2] = w(ne, Ae, fe)))) return !0;
                    }
              return !1;
            };
      }
      function Oo(w) {
        return w.length > 1
          ? function (T, P, M) {
              for (var F = w.length; F--; ) if (!w[F](T, P, M)) return !1;
              return !0;
            }
          : w[0];
      }
      function Ts(w, T, P) {
        for (var M = 0, F = T.length; M < F; M++) ze(w, T[M], P);
        return P;
      }
      function jt(w, T, P, M, F) {
        for (
          var G, ee = [], ue = 0, ne = w.length, Ae = T != null;
          ue < ne;
          ue++
        )
          (G = w[ue]) && (!P || P(G, M, F)) && (ee.push(G), Ae && T.push(ue));
        return ee;
      }
      function Ns(w, T, P, M, F, G) {
        return (
          M && !M[$] && (M = Ns(M)),
          F && !F[$] && (F = Ns(F, G)),
          fn(function (ee, ue, ne, Ae) {
            var fe,
              he,
              be,
              me,
              He = [],
              Ot = [],
              vt = ue.length,
              Vt = ee || Ts(T || "*", ne.nodeType ? [ne] : ne, []),
              Tn = w && (ee || !T) ? jt(Vt, He, w, ne, Ae) : Vt;
            if (
              (P
                ? ((me = F || (ee ? w : vt || M) ? [] : ue), P(Tn, me, ne, Ae))
                : (me = Tn),
              M)
            )
              for (fe = jt(me, Ot), M(fe, [], ne, Ae), he = fe.length; he--; )
                (be = fe[he]) && (me[Ot[he]] = !(Tn[Ot[he]] = be));
            if (ee) {
              if (F || w) {
                if (F) {
                  for (fe = [], he = me.length; he--; )
                    (be = me[he]) && fe.push((Tn[he] = be));
                  F(null, (me = []), fe, Ae);
                }
                for (he = me.length; he--; )
                  (be = me[he]) &&
                    (fe = F ? x.call(ee, be) : He[he]) > -1 &&
                    (ee[fe] = !(ue[fe] = be));
              }
            } else (me = jt(me === ue ? me.splice(vt, me.length) : me)), F ? F(null, ue, me, Ae) : h.apply(ue, me);
          })
        );
      }
      function bs(w) {
        for (
          var T,
            P,
            M,
            F = w.length,
            G = o.relative[w[0].type],
            ee = G || o.relative[" "],
            ue = G ? 1 : 0,
            ne = Ar(
              function (he) {
                return he === T;
              },
              ee,
              !0
            ),
            Ae = Ar(
              function (he) {
                return x.call(T, he) > -1;
              },
              ee,
              !0
            ),
            fe = [
              function (he, be, me) {
                var He =
                  (!G && (me || be != a)) ||
                  ((T = be).nodeType ? ne(he, be, me) : Ae(he, be, me));
                return (T = null), He;
              },
            ];
          ue < F;
          ue++
        )
          if ((P = o.relative[w[ue].type])) fe = [Ar(Oo(fe), P)];
          else {
            if (((P = o.filter[w[ue].type].apply(null, w[ue].matches)), P[$])) {
              for (M = ++ue; M < F && !o.relative[w[M].type]; M++);
              return Ns(
                ue > 1 && Oo(fe),
                ue > 1 &&
                  Bi(
                    w
                      .slice(0, ue - 1)
                      .concat({ value: w[ue - 2].type === " " ? "*" : "" })
                  ).replace(Et, "$1"),
                P,
                ue < M && bs(w.slice(ue, M)),
                M < F && bs((w = w.slice(M))),
                M < F && Bi(w)
              );
            }
            fe.push(P);
          }
        return Oo(fe);
      }
      function Wl(w, T) {
        var P = T.length > 0,
          M = w.length > 0,
          F = function (G, ee, ue, ne, Ae) {
            var fe,
              he,
              be,
              me = 0,
              He = "0",
              Ot = G && [],
              vt = [],
              Vt = a,
              Tn = G || (M && o.find.TAG("*", Ae)),
              si = (L += Vt == null ? 1 : Math.random() || 0.1),
              At = Tn.length;
            for (
              Ae && (a = ee == v || ee || Ae);
              He !== At && (fe = Tn[He]) != null;
              He++
            ) {
              if (M && fe) {
                for (
                  he = 0, !ee && fe.ownerDocument != v && (fr(fe), (ue = !S));
                  (be = w[he++]);

                )
                  if (be(fe, ee || v, ue)) {
                    h.call(ne, fe);
                    break;
                  }
                Ae && (L = si);
              }
              P && ((fe = !be && fe) && me--, G && Ot.push(fe));
            }
            if (((me += He), P && He !== me)) {
              for (he = 0; (be = T[he++]); ) be(Ot, vt, ee, ue);
              if (G) {
                if (me > 0)
                  for (; He--; ) Ot[He] || vt[He] || (vt[He] = Ee.call(ne));
                vt = jt(vt);
              }
              h.apply(ne, vt),
                Ae &&
                  !G &&
                  vt.length > 0 &&
                  me + T.length > 1 &&
                  c.uniqueSort(ne);
            }
            return Ae && ((L = si), (a = Vt)), Ot;
          };
        return P ? fn(F) : F;
      }
      function Ao(w, T) {
        var P,
          M = [],
          F = [],
          G = Ce[w + " "];
        if (!G) {
          for (T || (T = oi(w)), P = T.length; P--; )
            (G = bs(T[P])), G[$] ? M.push(G) : F.push(G);
          (G = Ce(w, Wl(F, M))), (G.selector = w);
        }
        return G;
      }
      function Ul(w, T, P, M) {
        var F,
          G,
          ee,
          ue,
          ne,
          Ae = typeof w == "function" && w,
          fe = !M && oi((w = Ae.selector || w));
        if (((P = P || []), fe.length === 1)) {
          if (
            ((G = fe[0] = fe[0].slice(0)),
            G.length > 2 &&
              (ee = G[0]).type === "ID" &&
              T.nodeType === 9 &&
              S &&
              o.relative[G[1].type])
          ) {
            if (
              ((T = (o.find.ID(ee.matches[0].replace(Bn, Wn), T) || [])[0]), T)
            )
              Ae && (T = T.parentNode);
            else return P;
            w = w.slice(G.shift().value.length);
          }
          for (
            F = En.needsContext.test(w) ? 0 : G.length;
            F-- && ((ee = G[F]), !o.relative[(ue = ee.type)]);

          )
            if (
              (ne = o.find[ue]) &&
              (M = ne(
                ee.matches[0].replace(Bn, Wn),
                (ks.test(G[0].type) && Cs(T.parentNode)) || T
              ))
            ) {
              if ((G.splice(F, 1), (w = M.length && Bi(G)), !w))
                return h.apply(P, M), P;
              break;
            }
        }
        return (
          (Ae || Ao(w, fe))(
            M,
            T,
            !S,
            P,
            !T || (ks.test(w) && Cs(T.parentNode)) || T
          ),
          P
        );
      }
      (U.sortStable = $.split("").sort(at).join("") === $),
        fr(),
        (U.sortDetached = Or(function (w) {
          return w.compareDocumentPosition(v.createElement("fieldset")) & 1;
        })),
        (c.find = ze),
        (c.expr[":"] = c.expr.pseudos),
        (c.unique = c.uniqueSort),
        (ze.compile = Ao),
        (ze.select = Ul),
        (ze.setDocument = fr),
        (ze.tokenize = oi),
        (ze.escape = c.escapeSelector),
        (ze.getText = c.text),
        (ze.isXML = c.isXMLDoc),
        (ze.selectors = c.expr),
        (ze.support = c.support),
        (ze.uniqueSort = c.uniqueSort);
    })();
    var de = function (r, o, a) {
        for (var f = [], p = a !== void 0; (r = r[o]) && r.nodeType !== 9; )
          if (r.nodeType === 1) {
            if (p && c(r).is(a)) break;
            f.push(r);
          }
        return f;
      },
      D = function (r, o) {
        for (var a = []; r; r = r.nextSibling)
          r.nodeType === 1 && r !== o && a.push(r);
        return a;
      },
      Te = c.expr.match.needsContext,
      Ve = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function ft(r, o, a) {
      return V(o)
        ? c.grep(r, function (f, p) {
            return !!o.call(f, p, f) !== a;
          })
        : o.nodeType
        ? c.grep(r, function (f) {
            return (f === o) !== a;
          })
        : typeof o != "string"
        ? c.grep(r, function (f) {
            return x.call(o, f) > -1 !== a;
          })
        : c.filter(o, r, a);
    }
    (c.filter = function (r, o, a) {
      var f = o[0];
      return (
        a && (r = ":not(" + r + ")"),
        o.length === 1 && f.nodeType === 1
          ? c.find.matchesSelector(f, r)
            ? [f]
            : []
          : c.find.matches(
              r,
              c.grep(o, function (p) {
                return p.nodeType === 1;
              })
            )
      );
    }),
      c.fn.extend({
        find: function (r) {
          var o,
            a,
            f = this.length,
            p = this;
          if (typeof r != "string")
            return this.pushStack(
              c(r).filter(function () {
                for (o = 0; o < f; o++) if (c.contains(p[o], this)) return !0;
              })
            );
          for (a = this.pushStack([]), o = 0; o < f; o++) c.find(r, p[o], a);
          return f > 1 ? c.uniqueSort(a) : a;
        },
        filter: function (r) {
          return this.pushStack(ft(this, r || [], !1));
        },
        not: function (r) {
          return this.pushStack(ft(this, r || [], !0));
        },
        is: function (r) {
          return !!ft(
            this,
            typeof r == "string" && Te.test(r) ? c(r) : r || [],
            !1
          ).length;
        },
      });
    var qe,
      In = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,
      lt = (c.fn.init = function (r, o, a) {
        var f, p;
        if (!r) return this;
        if (((a = a || qe), typeof r == "string"))
          if (
            (r[0] === "<" && r[r.length - 1] === ">" && r.length >= 3
              ? (f = [null, r, null])
              : (f = In.exec(r)),
            f && (f[1] || !o))
          )
            if (f[1]) {
              if (
                ((o = o instanceof c ? o[0] : o),
                c.merge(
                  this,
                  c.parseHTML(
                    f[1],
                    o && o.nodeType ? o.ownerDocument || o : C,
                    !0
                  )
                ),
                Ve.test(f[1]) && c.isPlainObject(o))
              )
                for (f in o) V(this[f]) ? this[f](o[f]) : this.attr(f, o[f]);
              return this;
            } else
              return (
                (p = C.getElementById(f[2])),
                p && ((this[0] = p), (this.length = 1)),
                this
              );
          else
            return !o || o.jquery
              ? (o || a).find(r)
              : this.constructor(o).find(r);
        else {
          if (r.nodeType) return (this[0] = r), (this.length = 1), this;
          if (V(r)) return a.ready !== void 0 ? a.ready(r) : r(c);
        }
        return c.makeArray(r, this);
      });
    (lt.prototype = c.fn), (qe = c(C));
    var Jn = /^(?:parents|prev(?:Until|All))/,
      pe = { children: !0, contents: !0, next: !0, prev: !0 };
    c.fn.extend({
      has: function (r) {
        var o = c(r, this),
          a = o.length;
        return this.filter(function () {
          for (var f = 0; f < a; f++) if (c.contains(this, o[f])) return !0;
        });
      },
      closest: function (r, o) {
        var a,
          f = 0,
          p = this.length,
          h = [],
          v = typeof r != "string" && c(r);
        if (!Te.test(r)) {
          for (; f < p; f++)
            for (a = this[f]; a && a !== o; a = a.parentNode)
              if (
                a.nodeType < 11 &&
                (v
                  ? v.index(a) > -1
                  : a.nodeType === 1 && c.find.matchesSelector(a, r))
              ) {
                h.push(a);
                break;
              }
        }
        return this.pushStack(h.length > 1 ? c.uniqueSort(h) : h);
      },
      index: function (r) {
        return r
          ? typeof r == "string"
            ? x.call(c(r), this[0])
            : x.call(this, r.jquery ? r[0] : r)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (r, o) {
        return this.pushStack(c.uniqueSort(c.merge(this.get(), c(r, o))));
      },
      addBack: function (r) {
        return this.add(
          r == null ? this.prevObject : this.prevObject.filter(r)
        );
      },
    });
    function Ai(r, o) {
      for (; (r = r[o]) && r.nodeType !== 1; );
      return r;
    }
    c.each(
      {
        parent: function (r) {
          var o = r.parentNode;
          return o && o.nodeType !== 11 ? o : null;
        },
        parents: function (r) {
          return de(r, "parentNode");
        },
        parentsUntil: function (r, o, a) {
          return de(r, "parentNode", a);
        },
        next: function (r) {
          return Ai(r, "nextSibling");
        },
        prev: function (r) {
          return Ai(r, "previousSibling");
        },
        nextAll: function (r) {
          return de(r, "nextSibling");
        },
        prevAll: function (r) {
          return de(r, "previousSibling");
        },
        nextUntil: function (r, o, a) {
          return de(r, "nextSibling", a);
        },
        prevUntil: function (r, o, a) {
          return de(r, "previousSibling", a);
        },
        siblings: function (r) {
          return D((r.parentNode || {}).firstChild, r);
        },
        children: function (r) {
          return D(r.firstChild);
        },
        contents: function (r) {
          return r.contentDocument != null && l(r.contentDocument)
            ? r.contentDocument
            : (ge(r, "template") && (r = r.content || r),
              c.merge([], r.childNodes));
        },
      },
      function (r, o) {
        c.fn[r] = function (a, f) {
          var p = c.map(this, o, a);
          return (
            r.slice(-5) !== "Until" && (f = a),
            f && typeof f == "string" && (p = c.filter(f, p)),
            this.length > 1 &&
              (pe[r] || c.uniqueSort(p), Jn.test(r) && p.reverse()),
            this.pushStack(p)
          );
        };
      }
    );
    var ln = /[^\x20\t\r\n\f]+/g;
    function mu(r) {
      var o = {};
      return (
        c.each(r.match(ln) || [], function (a, f) {
          o[f] = !0;
        }),
        o
      );
    }
    c.Callbacks = function (r) {
      r = typeof r == "string" ? mu(r) : c.extend({}, r);
      var o,
        a,
        f,
        p,
        h = [],
        v = [],
        k = -1,
        S = function () {
          for (p = p || r.once, f = o = !0; v.length; k = -1)
            for (a = v.shift(); ++k < h.length; )
              h[k].apply(a[0], a[1]) === !1 &&
                r.stopOnFalse &&
                ((k = h.length), (a = !1));
          r.memory || (a = !1), (o = !1), p && (a ? (h = []) : (h = ""));
        },
        N = {
          add: function () {
            return (
              h &&
                (a && !o && ((k = h.length - 1), v.push(a)),
                (function I($) {
                  c.each($, function (L, X) {
                    V(X)
                      ? (!r.unique || !N.has(X)) && h.push(X)
                      : X && X.length && Q(X) !== "string" && I(X);
                  });
                })(arguments),
                a && !o && S()),
              this
            );
          },
          remove: function () {
            return (
              c.each(arguments, function (I, $) {
                for (var L; (L = c.inArray($, h, L)) > -1; )
                  h.splice(L, 1), L <= k && k--;
              }),
              this
            );
          },
          has: function (I) {
            return I ? c.inArray(I, h) > -1 : h.length > 0;
          },
          empty: function () {
            return h && (h = []), this;
          },
          disable: function () {
            return (p = v = []), (h = a = ""), this;
          },
          disabled: function () {
            return !h;
          },
          lock: function () {
            return (p = v = []), !a && !o && (h = a = ""), this;
          },
          locked: function () {
            return !!p;
          },
          fireWith: function (I, $) {
            return (
              p ||
                (($ = $ || []),
                ($ = [I, $.slice ? $.slice() : $]),
                v.push($),
                o || S()),
              this
            );
          },
          fire: function () {
            return N.fireWith(this, arguments), this;
          },
          fired: function () {
            return !!f;
          },
        };
      return N;
    };
    function Ur(r) {
      return r;
    }
    function er(r) {
      throw r;
    }
    function us(r, o, a, f) {
      var p;
      try {
        r && V((p = r.promise))
          ? p.call(r).done(o).fail(a)
          : r && V((p = r.then))
          ? p.call(r, o, a)
          : o.apply(void 0, [r].slice(f));
      } catch (h) {
        a.apply(void 0, [h]);
      }
    }
    c.extend({
      Deferred: function (r) {
        var o = [
            [
              "notify",
              "progress",
              c.Callbacks("memory"),
              c.Callbacks("memory"),
              2,
            ],
            [
              "resolve",
              "done",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              0,
              "resolved",
            ],
            [
              "reject",
              "fail",
              c.Callbacks("once memory"),
              c.Callbacks("once memory"),
              1,
              "rejected",
            ],
          ],
          a = "pending",
          f = {
            state: function () {
              return a;
            },
            always: function () {
              return p.done(arguments).fail(arguments), this;
            },
            catch: function (h) {
              return f.then(null, h);
            },
            pipe: function () {
              var h = arguments;
              return c
                .Deferred(function (v) {
                  c.each(o, function (k, S) {
                    var N = V(h[S[4]]) && h[S[4]];
                    p[S[1]](function () {
                      var I = N && N.apply(this, arguments);
                      I && V(I.promise)
                        ? I.promise()
                            .progress(v.notify)
                            .done(v.resolve)
                            .fail(v.reject)
                        : v[S[0] + "With"](this, N ? [I] : arguments);
                    });
                  }),
                    (h = null);
                })
                .promise();
            },
            then: function (h, v, k) {
              var S = 0;
              function N(I, $, L, X) {
                return function () {
                  var ve = this,
                    De = arguments,
                    Ce = function () {
                      var at, kn;
                      if (!(I < S)) {
                        if (((at = L.apply(ve, De)), at === $.promise()))
                          throw new TypeError("Thenable self-resolution");
                        (kn =
                          at &&
                          (typeof at == "object" || typeof at == "function") &&
                          at.then),
                          V(kn)
                            ? X
                              ? kn.call(at, N(S, $, Ur, X), N(S, $, er, X))
                              : (S++,
                                kn.call(
                                  at,
                                  N(S, $, Ur, X),
                                  N(S, $, er, X),
                                  N(S, $, Ur, $.notifyWith)
                                ))
                            : (L !== Ur && ((ve = void 0), (De = [at])),
                              (X || $.resolveWith)(ve, De));
                      }
                    },
                    mt = X
                      ? Ce
                      : function () {
                          try {
                            Ce();
                          } catch (at) {
                            c.Deferred.exceptionHook &&
                              c.Deferred.exceptionHook(at, mt.error),
                              I + 1 >= S &&
                                (L !== er && ((ve = void 0), (De = [at])),
                                $.rejectWith(ve, De));
                          }
                        };
                  I
                    ? mt()
                    : (c.Deferred.getErrorHook
                        ? (mt.error = c.Deferred.getErrorHook())
                        : c.Deferred.getStackHook &&
                          (mt.error = c.Deferred.getStackHook()),
                      t.setTimeout(mt));
                };
              }
              return c
                .Deferred(function (I) {
                  o[0][3].add(N(0, I, V(k) ? k : Ur, I.notifyWith)),
                    o[1][3].add(N(0, I, V(h) ? h : Ur)),
                    o[2][3].add(N(0, I, V(v) ? v : er));
                })
                .promise();
            },
            promise: function (h) {
              return h != null ? c.extend(h, f) : f;
            },
          },
          p = {};
        return (
          c.each(o, function (h, v) {
            var k = v[2],
              S = v[5];
            (f[v[1]] = k.add),
              S &&
                k.add(
                  function () {
                    a = S;
                  },
                  o[3 - h][2].disable,
                  o[3 - h][3].disable,
                  o[0][2].lock,
                  o[0][3].lock
                ),
              k.add(v[3].fire),
              (p[v[0]] = function () {
                return (
                  p[v[0] + "With"](this === p ? void 0 : this, arguments), this
                );
              }),
              (p[v[0] + "With"] = k.fireWith);
          }),
          f.promise(p),
          r && r.call(p, p),
          p
        );
      },
      when: function (r) {
        var o = arguments.length,
          a = o,
          f = Array(a),
          p = u.call(arguments),
          h = c.Deferred(),
          v = function (k) {
            return function (S) {
              (f[k] = this),
                (p[k] = arguments.length > 1 ? u.call(arguments) : S),
                --o || h.resolveWith(f, p);
            };
          };
        if (
          o <= 1 &&
          (us(r, h.done(v(a)).resolve, h.reject, !o),
          h.state() === "pending" || V(p[a] && p[a].then))
        )
          return h.then();
        for (; a--; ) us(p[a], v(a), h.reject);
        return h.promise();
      },
    });
    var Pi = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    (c.Deferred.exceptionHook = function (r, o) {
      t.console &&
        t.console.warn &&
        r &&
        Pi.test(r.name) &&
        t.console.warn("jQuery.Deferred exception: " + r.message, r.stack, o);
    }),
      (c.readyException = function (r) {
        t.setTimeout(function () {
          throw r;
        });
      });
    var tr = c.Deferred();
    (c.fn.ready = function (r) {
      return (
        tr.then(r).catch(function (o) {
          c.readyException(o);
        }),
        this
      );
    }),
      c.extend({
        isReady: !1,
        readyWait: 1,
        ready: function (r) {
          (r === !0 ? --c.readyWait : c.isReady) ||
            ((c.isReady = !0),
            !(r !== !0 && --c.readyWait > 0) && tr.resolveWith(C, [c]));
        },
      }),
      (c.ready.then = tr.then);
    function uo() {
      C.removeEventListener("DOMContentLoaded", uo),
        t.removeEventListener("load", uo),
        c.ready();
    }
    C.readyState === "complete" ||
    (C.readyState !== "loading" && !C.documentElement.doScroll)
      ? t.setTimeout(c.ready)
      : (C.addEventListener("DOMContentLoaded", uo),
        t.addEventListener("load", uo));
    var Rn = function (r, o, a, f, p, h, v) {
        var k = 0,
          S = r.length,
          N = a == null;
        if (Q(a) === "object") {
          p = !0;
          for (k in a) Rn(r, o, k, a[k], !0, h, v);
        } else if (
          f !== void 0 &&
          ((p = !0),
          V(f) || (v = !0),
          N &&
            (v
              ? (o.call(r, f), (o = null))
              : ((N = o),
                (o = function (I, $, L) {
                  return N.call(c(I), L);
                }))),
          o)
        )
          for (; k < S; k++) o(r[k], a, v ? f : f.call(r[k], k, o(r[k], a)));
        return p ? r : N ? o.call(r) : S ? o(r[0], a) : h;
      },
      vu = /^-ms-/,
      yu = /-([a-z])/g;
    function _u(r, o) {
      return o.toUpperCase();
    }
    function _n(r) {
      return r.replace(vu, "ms-").replace(yu, _u);
    }
    var Li = function (r) {
      return r.nodeType === 1 || r.nodeType === 9 || !+r.nodeType;
    };
    function nr() {
      this.expando = c.expando + nr.uid++;
    }
    (nr.uid = 1),
      (nr.prototype = {
        cache: function (r) {
          var o = r[this.expando];
          return (
            o ||
              ((o = {}),
              Li(r) &&
                (r.nodeType
                  ? (r[this.expando] = o)
                  : Object.defineProperty(r, this.expando, {
                      value: o,
                      configurable: !0,
                    }))),
            o
          );
        },
        set: function (r, o, a) {
          var f,
            p = this.cache(r);
          if (typeof o == "string") p[_n(o)] = a;
          else for (f in o) p[_n(f)] = o[f];
          return p;
        },
        get: function (r, o) {
          return o === void 0
            ? this.cache(r)
            : r[this.expando] && r[this.expando][_n(o)];
        },
        access: function (r, o, a) {
          return o === void 0 || (o && typeof o == "string" && a === void 0)
            ? this.get(r, o)
            : (this.set(r, o, a), a !== void 0 ? a : o);
        },
        remove: function (r, o) {
          var a,
            f = r[this.expando];
          if (f !== void 0) {
            if (o !== void 0)
              for (
                Array.isArray(o)
                  ? (o = o.map(_n))
                  : ((o = _n(o)), (o = (o in f) ? [o] : o.match(ln) || [])),
                  a = o.length;
                a--;

              )
                delete f[o[a]];
            (o === void 0 || c.isEmptyObject(f)) &&
              (r.nodeType
                ? (r[this.expando] = void 0)
                : delete r[this.expando]);
          }
        },
        hasData: function (r) {
          var o = r[this.expando];
          return o !== void 0 && !c.isEmptyObject(o);
        },
      });
    var ie = new nr(),
      Tt = new nr(),
      Di = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      Vr = /[A-Z]/g;
    function qr(r) {
      return r === "true"
        ? !0
        : r === "false"
        ? !1
        : r === "null"
        ? null
        : r === +r + ""
        ? +r
        : Di.test(r)
        ? JSON.parse(r)
        : r;
    }
    function Mi(r, o, a) {
      var f;
      if (a === void 0 && r.nodeType === 1)
        if (
          ((f = "data-" + o.replace(Vr, "-$&").toLowerCase()),
          (a = r.getAttribute(f)),
          typeof a == "string")
        ) {
          try {
            a = qr(a);
          } catch {}
          Tt.set(r, o, a);
        } else a = void 0;
      return a;
    }
    c.extend({
      hasData: function (r) {
        return Tt.hasData(r) || ie.hasData(r);
      },
      data: function (r, o, a) {
        return Tt.access(r, o, a);
      },
      removeData: function (r, o) {
        Tt.remove(r, o);
      },
      _data: function (r, o, a) {
        return ie.access(r, o, a);
      },
      _removeData: function (r, o) {
        ie.remove(r, o);
      },
    }),
      c.fn.extend({
        data: function (r, o) {
          var a,
            f,
            p,
            h = this[0],
            v = h && h.attributes;
          if (r === void 0) {
            if (
              this.length &&
              ((p = Tt.get(h)), h.nodeType === 1 && !ie.get(h, "hasDataAttrs"))
            ) {
              for (a = v.length; a--; )
                v[a] &&
                  ((f = v[a].name),
                  f.indexOf("data-") === 0 &&
                    ((f = _n(f.slice(5))), Mi(h, f, p[f])));
              ie.set(h, "hasDataAttrs", !0);
            }
            return p;
          }
          return typeof r == "object"
            ? this.each(function () {
                Tt.set(this, r);
              })
            : Rn(
                this,
                function (k) {
                  var S;
                  if (h && k === void 0)
                    return (
                      (S = Tt.get(h, r)),
                      S !== void 0 || ((S = Mi(h, r)), S !== void 0)
                        ? S
                        : void 0
                    );
                  this.each(function () {
                    Tt.set(this, r, k);
                  });
                },
                null,
                o,
                arguments.length > 1,
                null,
                !0
              );
        },
        removeData: function (r) {
          return this.each(function () {
            Tt.remove(this, r);
          });
        },
      }),
      c.extend({
        queue: function (r, o, a) {
          var f;
          if (r)
            return (
              (o = (o || "fx") + "queue"),
              (f = ie.get(r, o)),
              a &&
                (!f || Array.isArray(a)
                  ? (f = ie.access(r, o, c.makeArray(a)))
                  : f.push(a)),
              f || []
            );
        },
        dequeue: function (r, o) {
          o = o || "fx";
          var a = c.queue(r, o),
            f = a.length,
            p = a.shift(),
            h = c._queueHooks(r, o),
            v = function () {
              c.dequeue(r, o);
            };
          p === "inprogress" && ((p = a.shift()), f--),
            p &&
              (o === "fx" && a.unshift("inprogress"),
              delete h.stop,
              p.call(r, v, h)),
            !f && h && h.empty.fire();
        },
        _queueHooks: function (r, o) {
          var a = o + "queueHooks";
          return (
            ie.get(r, a) ||
            ie.access(r, a, {
              empty: c.Callbacks("once memory").add(function () {
                ie.remove(r, [o + "queue", a]);
              }),
            })
          );
        },
      }),
      c.fn.extend({
        queue: function (r, o) {
          var a = 2;
          return (
            typeof r != "string" && ((o = r), (r = "fx"), a--),
            arguments.length < a
              ? c.queue(this[0], r)
              : o === void 0
              ? this
              : this.each(function () {
                  var f = c.queue(this, r, o);
                  c._queueHooks(this, r),
                    r === "fx" && f[0] !== "inprogress" && c.dequeue(this, r);
                })
          );
        },
        dequeue: function (r) {
          return this.each(function () {
            c.dequeue(this, r);
          });
        },
        clearQueue: function (r) {
          return this.queue(r || "fx", []);
        },
        promise: function (r, o) {
          var a,
            f = 1,
            p = c.Deferred(),
            h = this,
            v = this.length,
            k = function () {
              --f || p.resolveWith(h, [h]);
            };
          for (
            typeof r != "string" && ((o = r), (r = void 0)), r = r || "fx";
            v--;

          )
            (a = ie.get(h[v], r + "queueHooks")),
              a && a.empty && (f++, a.empty.add(k));
          return k(), p.promise(o);
        },
      });
    var xl = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      wr = new RegExp("^(?:([+-])=|)(" + xl + ")([a-z%]*)$", "i"),
      zn = ["Top", "Right", "Bottom", "Left"],
      xr = C.documentElement,
      Qr = function (r) {
        return c.contains(r.ownerDocument, r);
      },
      wu = { composed: !0 };
    xr.getRootNode &&
      (Qr = function (r) {
        return (
          c.contains(r.ownerDocument, r) ||
          r.getRootNode(wu) === r.ownerDocument
        );
      });
    var co = function (r, o) {
      return (
        (r = o || r),
        r.style.display === "none" ||
          (r.style.display === "" && Qr(r) && c.css(r, "display") === "none")
      );
    };
    function Sl(r, o, a, f) {
      var p,
        h,
        v = 20,
        k = f
          ? function () {
              return f.cur();
            }
          : function () {
              return c.css(r, o, "");
            },
        S = k(),
        N = (a && a[3]) || (c.cssNumber[o] ? "" : "px"),
        I =
          r.nodeType &&
          (c.cssNumber[o] || (N !== "px" && +S)) &&
          wr.exec(c.css(r, o));
      if (I && I[3] !== N) {
        for (S = S / 2, N = N || I[3], I = +S || 1; v--; )
          c.style(r, o, I + N),
            (1 - h) * (1 - (h = k() / S || 0.5)) <= 0 && (v = 0),
            (I = I / h);
        (I = I * 2), c.style(r, o, I + N), (a = a || []);
      }
      return (
        a &&
          ((I = +I || +S || 0),
          (p = a[1] ? I + (a[1] + 1) * a[2] : +a[2]),
          f && ((f.unit = N), (f.start = I), (f.end = p))),
        p
      );
    }
    var cs = {};
    function fo(r) {
      var o,
        a = r.ownerDocument,
        f = r.nodeName,
        p = cs[f];
      return (
        p ||
        ((o = a.body.appendChild(a.createElement(f))),
        (p = c.css(o, "display")),
        o.parentNode.removeChild(o),
        p === "none" && (p = "block"),
        (cs[f] = p),
        p)
      );
    }
    function Sr(r, o) {
      for (var a, f, p = [], h = 0, v = r.length; h < v; h++)
        (f = r[h]),
          f.style &&
            ((a = f.style.display),
            o
              ? (a === "none" &&
                  ((p[h] = ie.get(f, "display") || null),
                  p[h] || (f.style.display = "")),
                f.style.display === "" && co(f) && (p[h] = fo(f)))
              : a !== "none" && ((p[h] = "none"), ie.set(f, "display", a)));
      for (h = 0; h < v; h++) p[h] != null && (r[h].style.display = p[h]);
      return r;
    }
    c.fn.extend({
      show: function () {
        return Sr(this, !0);
      },
      hide: function () {
        return Sr(this);
      },
      toggle: function (r) {
        return typeof r == "boolean"
          ? r
            ? this.show()
            : this.hide()
          : this.each(function () {
              co(this) ? c(this).show() : c(this).hide();
            });
      },
    });
    var Xr = /^(?:checkbox|radio)$/i,
      kl = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
      Cl = /^$|^module$|\/(?:java|ecma)script/i;
    (function () {
      var r = C.createDocumentFragment(),
        o = r.appendChild(C.createElement("div")),
        a = C.createElement("input");
      a.setAttribute("type", "radio"),
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        o.appendChild(a),
        (U.checkClone = o.cloneNode(!0).cloneNode(!0).lastChild.checked),
        (o.innerHTML = "<textarea>x</textarea>"),
        (U.noCloneChecked = !!o.cloneNode(!0).lastChild.defaultValue),
        (o.innerHTML = "<option></option>"),
        (U.option = !!o.lastChild);
    })();
    var Zt = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
    (Zt.tbody = Zt.tfoot = Zt.colgroup = Zt.caption = Zt.thead),
      (Zt.th = Zt.td),
      U.option ||
        (Zt.optgroup = Zt.option =
          [1, "<select multiple='multiple'>", "</select>"]);
    function Mt(r, o) {
      var a;
      return (
        typeof r.getElementsByTagName < "u"
          ? (a = r.getElementsByTagName(o || "*"))
          : typeof r.querySelectorAll < "u"
          ? (a = r.querySelectorAll(o || "*"))
          : (a = []),
        o === void 0 || (o && ge(r, o)) ? c.merge([r], a) : a
      );
    }
    function rr(r, o) {
      for (var a = 0, f = r.length; a < f; a++)
        ie.set(r[a], "globalEval", !o || ie.get(o[a], "globalEval"));
    }
    var Ii = /<|&#?\w+;/;
    function El(r, o, a, f, p) {
      for (
        var h,
          v,
          k,
          S,
          N,
          I,
          $ = o.createDocumentFragment(),
          L = [],
          X = 0,
          ve = r.length;
        X < ve;
        X++
      )
        if (((h = r[X]), h || h === 0))
          if (Q(h) === "object") c.merge(L, h.nodeType ? [h] : h);
          else if (!Ii.test(h)) L.push(o.createTextNode(h));
          else {
            for (
              v = v || $.appendChild(o.createElement("div")),
                k = (kl.exec(h) || ["", ""])[1].toLowerCase(),
                S = Zt[k] || Zt._default,
                v.innerHTML = S[1] + c.htmlPrefilter(h) + S[2],
                I = S[0];
              I--;

            )
              v = v.lastChild;
            c.merge(L, v.childNodes), (v = $.firstChild), (v.textContent = "");
          }
      for ($.textContent = "", X = 0; (h = L[X++]); ) {
        if (f && c.inArray(h, f) > -1) {
          p && p.push(h);
          continue;
        }
        if (((N = Qr(h)), (v = Mt($.appendChild(h), "script")), N && rr(v), a))
          for (I = 0; (h = v[I++]); ) Cl.test(h.type || "") && a.push(h);
      }
      return $;
    }
    var Tl = /^([^.]*)(?:\.(.+)|)/;
    function Yr() {
      return !0;
    }
    function Kr() {
      return !1;
    }
    function fs(r, o, a, f, p, h) {
      var v, k;
      if (typeof o == "object") {
        typeof a != "string" && ((f = f || a), (a = void 0));
        for (k in o) fs(r, k, a, f, o[k], h);
        return r;
      }
      if (
        (f == null && p == null
          ? ((p = a), (f = a = void 0))
          : p == null &&
            (typeof a == "string"
              ? ((p = f), (f = void 0))
              : ((p = f), (f = a), (a = void 0))),
        p === !1)
      )
        p = Kr;
      else if (!p) return r;
      return (
        h === 1 &&
          ((v = p),
          (p = function (S) {
            return c().off(S), v.apply(this, arguments);
          }),
          (p.guid = v.guid || (v.guid = c.guid++))),
        r.each(function () {
          c.event.add(this, o, p, f, a);
        })
      );
    }
    c.event = {
      global: {},
      add: function (r, o, a, f, p) {
        var h,
          v,
          k,
          S,
          N,
          I,
          $,
          L,
          X,
          ve,
          De,
          Ce = ie.get(r);
        if (Li(r))
          for (
            a.handler && ((h = a), (a = h.handler), (p = h.selector)),
              p && c.find.matchesSelector(xr, p),
              a.guid || (a.guid = c.guid++),
              (S = Ce.events) || (S = Ce.events = Object.create(null)),
              (v = Ce.handle) ||
                (v = Ce.handle =
                  function (mt) {
                    return typeof c < "u" && c.event.triggered !== mt.type
                      ? c.event.dispatch.apply(r, arguments)
                      : void 0;
                  }),
              o = (o || "").match(ln) || [""],
              N = o.length;
            N--;

          )
            (k = Tl.exec(o[N]) || []),
              (X = De = k[1]),
              (ve = (k[2] || "").split(".").sort()),
              X &&
                (($ = c.event.special[X] || {}),
                (X = (p ? $.delegateType : $.bindType) || X),
                ($ = c.event.special[X] || {}),
                (I = c.extend(
                  {
                    type: X,
                    origType: De,
                    data: f,
                    handler: a,
                    guid: a.guid,
                    selector: p,
                    needsContext: p && c.expr.match.needsContext.test(p),
                    namespace: ve.join("."),
                  },
                  h
                )),
                (L = S[X]) ||
                  ((L = S[X] = []),
                  (L.delegateCount = 0),
                  (!$.setup || $.setup.call(r, f, ve, v) === !1) &&
                    r.addEventListener &&
                    r.addEventListener(X, v)),
                $.add &&
                  ($.add.call(r, I),
                  I.handler.guid || (I.handler.guid = a.guid)),
                p ? L.splice(L.delegateCount++, 0, I) : L.push(I),
                (c.event.global[X] = !0));
      },
      remove: function (r, o, a, f, p) {
        var h,
          v,
          k,
          S,
          N,
          I,
          $,
          L,
          X,
          ve,
          De,
          Ce = ie.hasData(r) && ie.get(r);
        if (!(!Ce || !(S = Ce.events))) {
          for (o = (o || "").match(ln) || [""], N = o.length; N--; ) {
            if (
              ((k = Tl.exec(o[N]) || []),
              (X = De = k[1]),
              (ve = (k[2] || "").split(".").sort()),
              !X)
            ) {
              for (X in S) c.event.remove(r, X + o[N], a, f, !0);
              continue;
            }
            for (
              $ = c.event.special[X] || {},
                X = (f ? $.delegateType : $.bindType) || X,
                L = S[X] || [],
                k =
                  k[2] &&
                  new RegExp("(^|\\.)" + ve.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                v = h = L.length;
              h--;

            )
              (I = L[h]),
                (p || De === I.origType) &&
                  (!a || a.guid === I.guid) &&
                  (!k || k.test(I.namespace)) &&
                  (!f || f === I.selector || (f === "**" && I.selector)) &&
                  (L.splice(h, 1),
                  I.selector && L.delegateCount--,
                  $.remove && $.remove.call(r, I));
            v &&
              !L.length &&
              ((!$.teardown || $.teardown.call(r, ve, Ce.handle) === !1) &&
                c.removeEvent(r, X, Ce.handle),
              delete S[X]);
          }
          c.isEmptyObject(S) && ie.remove(r, "handle events");
        }
      },
      dispatch: function (r) {
        var o,
          a,
          f,
          p,
          h,
          v,
          k = new Array(arguments.length),
          S = c.event.fix(r),
          N = (ie.get(this, "events") || Object.create(null))[S.type] || [],
          I = c.event.special[S.type] || {};
        for (k[0] = S, o = 1; o < arguments.length; o++) k[o] = arguments[o];
        if (
          ((S.delegateTarget = this),
          !(I.preDispatch && I.preDispatch.call(this, S) === !1))
        ) {
          for (
            v = c.event.handlers.call(this, S, N), o = 0;
            (p = v[o++]) && !S.isPropagationStopped();

          )
            for (
              S.currentTarget = p.elem, a = 0;
              (h = p.handlers[a++]) && !S.isImmediatePropagationStopped();

            )
              (!S.rnamespace ||
                h.namespace === !1 ||
                S.rnamespace.test(h.namespace)) &&
                ((S.handleObj = h),
                (S.data = h.data),
                (f = (
                  (c.event.special[h.origType] || {}).handle || h.handler
                ).apply(p.elem, k)),
                f !== void 0 &&
                  (S.result = f) === !1 &&
                  (S.preventDefault(), S.stopPropagation()));
          return I.postDispatch && I.postDispatch.call(this, S), S.result;
        }
      },
      handlers: function (r, o) {
        var a,
          f,
          p,
          h,
          v,
          k = [],
          S = o.delegateCount,
          N = r.target;
        if (S && N.nodeType && !(r.type === "click" && r.button >= 1)) {
          for (; N !== this; N = N.parentNode || this)
            if (
              N.nodeType === 1 &&
              !(r.type === "click" && N.disabled === !0)
            ) {
              for (h = [], v = {}, a = 0; a < S; a++)
                (f = o[a]),
                  (p = f.selector + " "),
                  v[p] === void 0 &&
                    (v[p] = f.needsContext
                      ? c(p, this).index(N) > -1
                      : c.find(p, this, null, [N]).length),
                  v[p] && h.push(f);
              h.length && k.push({ elem: N, handlers: h });
            }
        }
        return (
          (N = this),
          S < o.length && k.push({ elem: N, handlers: o.slice(S) }),
          k
        );
      },
      addProp: function (r, o) {
        Object.defineProperty(c.Event.prototype, r, {
          enumerable: !0,
          configurable: !0,
          get: V(o)
            ? function () {
                if (this.originalEvent) return o(this.originalEvent);
              }
            : function () {
                if (this.originalEvent) return this.originalEvent[r];
              },
          set: function (a) {
            Object.defineProperty(this, r, {
              enumerable: !0,
              configurable: !0,
              writable: !0,
              value: a,
            });
          },
        });
      },
      fix: function (r) {
        return r[c.expando] ? r : new c.Event(r);
      },
      special: {
        load: { noBubble: !0 },
        click: {
          setup: function (r) {
            var o = this || r;
            return (
              Xr.test(o.type) &&
                o.click &&
                ge(o, "input") &&
                Gr(o, "click", !0),
              !1
            );
          },
          trigger: function (r) {
            var o = this || r;
            return (
              Xr.test(o.type) && o.click && ge(o, "input") && Gr(o, "click"), !0
            );
          },
          _default: function (r) {
            var o = r.target;
            return (
              (Xr.test(o.type) &&
                o.click &&
                ge(o, "input") &&
                ie.get(o, "click")) ||
              ge(o, "a")
            );
          },
        },
        beforeunload: {
          postDispatch: function (r) {
            r.result !== void 0 &&
              r.originalEvent &&
              (r.originalEvent.returnValue = r.result);
          },
        },
      },
    };
    function Gr(r, o, a) {
      if (!a) {
        ie.get(r, o) === void 0 && c.event.add(r, o, Yr);
        return;
      }
      ie.set(r, o, !1),
        c.event.add(r, o, {
          namespace: !1,
          handler: function (f) {
            var p,
              h = ie.get(this, o);
            if (f.isTrigger & 1 && this[o]) {
              if (h)
                (c.event.special[o] || {}).delegateType && f.stopPropagation();
              else if (
                ((h = u.call(arguments)),
                ie.set(this, o, h),
                this[o](),
                (p = ie.get(this, o)),
                ie.set(this, o, !1),
                h !== p)
              )
                return f.stopImmediatePropagation(), f.preventDefault(), p;
            } else
              h &&
                (ie.set(this, o, c.event.trigger(h[0], h.slice(1), this)),
                f.stopPropagation(),
                (f.isImmediatePropagationStopped = Yr));
          },
        });
    }
    (c.removeEvent = function (r, o, a) {
      r.removeEventListener && r.removeEventListener(o, a);
    }),
      (c.Event = function (r, o) {
        if (!(this instanceof c.Event)) return new c.Event(r, o);
        r && r.type
          ? ((this.originalEvent = r),
            (this.type = r.type),
            (this.isDefaultPrevented =
              r.defaultPrevented ||
              (r.defaultPrevented === void 0 && r.returnValue === !1)
                ? Yr
                : Kr),
            (this.target =
              r.target && r.target.nodeType === 3
                ? r.target.parentNode
                : r.target),
            (this.currentTarget = r.currentTarget),
            (this.relatedTarget = r.relatedTarget))
          : (this.type = r),
          o && c.extend(this, o),
          (this.timeStamp = (r && r.timeStamp) || Date.now()),
          (this[c.expando] = !0);
      }),
      (c.Event.prototype = {
        constructor: c.Event,
        isDefaultPrevented: Kr,
        isPropagationStopped: Kr,
        isImmediatePropagationStopped: Kr,
        isSimulated: !1,
        preventDefault: function () {
          var r = this.originalEvent;
          (this.isDefaultPrevented = Yr),
            r && !this.isSimulated && r.preventDefault();
        },
        stopPropagation: function () {
          var r = this.originalEvent;
          (this.isPropagationStopped = Yr),
            r && !this.isSimulated && r.stopPropagation();
        },
        stopImmediatePropagation: function () {
          var r = this.originalEvent;
          (this.isImmediatePropagationStopped = Yr),
            r && !this.isSimulated && r.stopImmediatePropagation(),
            this.stopPropagation();
        },
      }),
      c.each(
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
        c.event.addProp
      ),
      c.each({ focus: "focusin", blur: "focusout" }, function (r, o) {
        function a(f) {
          if (C.documentMode) {
            var p = ie.get(this, "handle"),
              h = c.event.fix(f);
            (h.type = f.type === "focusin" ? "focus" : "blur"),
              (h.isSimulated = !0),
              p(f),
              h.target === h.currentTarget && p(h);
          } else c.event.simulate(o, f.target, c.event.fix(f));
        }
        (c.event.special[r] = {
          setup: function () {
            var f;
            if ((Gr(this, r, !0), C.documentMode))
              (f = ie.get(this, o)),
                f || this.addEventListener(o, a),
                ie.set(this, o, (f || 0) + 1);
            else return !1;
          },
          trigger: function () {
            return Gr(this, r), !0;
          },
          teardown: function () {
            var f;
            if (C.documentMode)
              (f = ie.get(this, o) - 1),
                f
                  ? ie.set(this, o, f)
                  : (this.removeEventListener(o, a), ie.remove(this, o));
            else return !1;
          },
          _default: function (f) {
            return ie.get(f.target, r);
          },
          delegateType: o,
        }),
          (c.event.special[o] = {
            setup: function () {
              var f = this.ownerDocument || this.document || this,
                p = C.documentMode ? this : f,
                h = ie.get(p, o);
              h ||
                (C.documentMode
                  ? this.addEventListener(o, a)
                  : f.addEventListener(r, a, !0)),
                ie.set(p, o, (h || 0) + 1);
            },
            teardown: function () {
              var f = this.ownerDocument || this.document || this,
                p = C.documentMode ? this : f,
                h = ie.get(p, o) - 1;
              h
                ? ie.set(p, o, h)
                : (C.documentMode
                    ? this.removeEventListener(o, a)
                    : f.removeEventListener(r, a, !0),
                  ie.remove(p, o));
            },
          });
      }),
      c.each(
        {
          mouseenter: "mouseover",
          mouseleave: "mouseout",
          pointerenter: "pointerover",
          pointerleave: "pointerout",
        },
        function (r, o) {
          c.event.special[r] = {
            delegateType: o,
            bindType: o,
            handle: function (a) {
              var f,
                p = this,
                h = a.relatedTarget,
                v = a.handleObj;
              return (
                (!h || (h !== p && !c.contains(p, h))) &&
                  ((a.type = v.origType),
                  (f = v.handler.apply(this, arguments)),
                  (a.type = o)),
                f
              );
            },
          };
        }
      ),
      c.fn.extend({
        on: function (r, o, a, f) {
          return fs(this, r, o, a, f);
        },
        one: function (r, o, a, f) {
          return fs(this, r, o, a, f, 1);
        },
        off: function (r, o, a) {
          var f, p;
          if (r && r.preventDefault && r.handleObj)
            return (
              (f = r.handleObj),
              c(r.delegateTarget).off(
                f.namespace ? f.origType + "." + f.namespace : f.origType,
                f.selector,
                f.handler
              ),
              this
            );
          if (typeof r == "object") {
            for (p in r) this.off(p, o, r[p]);
            return this;
          }
          return (
            (o === !1 || typeof o == "function") && ((a = o), (o = void 0)),
            a === !1 && (a = Kr),
            this.each(function () {
              c.event.remove(this, r, a, o);
            })
          );
        },
      });
    var Zr = /<script|<style|<link/i,
      po = /checked\s*(?:[^=]|=\s*.checked.)/i,
      xu = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function ho(r, o) {
      return (
        (ge(r, "table") &&
          ge(o.nodeType !== 11 ? o : o.firstChild, "tr") &&
          c(r).children("tbody")[0]) ||
        r
      );
    }
    function Su(r) {
      return (r.type = (r.getAttribute("type") !== null) + "/" + r.type), r;
    }
    function ku(r) {
      return (
        (r.type || "").slice(0, 5) === "true/"
          ? (r.type = r.type.slice(5))
          : r.removeAttribute("type"),
        r
      );
    }
    function kr(r, o) {
      var a, f, p, h, v, k, S;
      if (o.nodeType === 1) {
        if (ie.hasData(r) && ((h = ie.get(r)), (S = h.events), S)) {
          ie.remove(o, "handle events");
          for (p in S)
            for (a = 0, f = S[p].length; a < f; a++) c.event.add(o, p, S[p][a]);
        }
        Tt.hasData(r) &&
          ((v = Tt.access(r)), (k = c.extend({}, v)), Tt.set(o, k));
      }
    }
    function Nt(r, o) {
      var a = o.nodeName.toLowerCase();
      a === "input" && Xr.test(r.type)
        ? (o.checked = r.checked)
        : (a === "input" || a === "textarea") &&
          (o.defaultValue = r.defaultValue);
    }
    function dt(r, o, a, f) {
      o = g(o);
      var p,
        h,
        v,
        k,
        S,
        N,
        I = 0,
        $ = r.length,
        L = $ - 1,
        X = o[0],
        ve = V(X);
      if (ve || ($ > 1 && typeof X == "string" && !U.checkClone && po.test(X)))
        return r.each(function (De) {
          var Ce = r.eq(De);
          ve && (o[0] = X.call(this, De, Ce.html())), dt(Ce, o, a, f);
        });
      if (
        $ &&
        ((p = El(o, r[0].ownerDocument, !1, r, f)),
        (h = p.firstChild),
        p.childNodes.length === 1 && (p = h),
        h || f)
      ) {
        for (v = c.map(Mt(p, "script"), Su), k = v.length; I < $; I++)
          (S = p),
            I !== L &&
              ((S = c.clone(S, !0, !0)), k && c.merge(v, Mt(S, "script"))),
            a.call(r[I], S, I);
        if (k)
          for (
            N = v[v.length - 1].ownerDocument, c.map(v, ku), I = 0;
            I < k;
            I++
          )
            (S = v[I]),
              Cl.test(S.type || "") &&
                !ie.access(S, "globalEval") &&
                c.contains(N, S) &&
                (S.src && (S.type || "").toLowerCase() !== "module"
                  ? c._evalUrl &&
                    !S.noModule &&
                    c._evalUrl(
                      S.src,
                      { nonce: S.nonce || S.getAttribute("nonce") },
                      N
                    )
                  : A(S.textContent.replace(xu, ""), S, N));
      }
      return r;
    }
    function It(r, o, a) {
      for (var f, p = o ? c.filter(o, r) : r, h = 0; (f = p[h]) != null; h++)
        !a && f.nodeType === 1 && c.cleanData(Mt(f)),
          f.parentNode &&
            (a && Qr(f) && rr(Mt(f, "script")), f.parentNode.removeChild(f));
      return r;
    }
    c.extend({
      htmlPrefilter: function (r) {
        return r;
      },
      clone: function (r, o, a) {
        var f,
          p,
          h,
          v,
          k = r.cloneNode(!0),
          S = Qr(r);
        if (
          !U.noCloneChecked &&
          (r.nodeType === 1 || r.nodeType === 11) &&
          !c.isXMLDoc(r)
        )
          for (v = Mt(k), h = Mt(r), f = 0, p = h.length; f < p; f++)
            Nt(h[f], v[f]);
        if (o)
          if (a)
            for (
              h = h || Mt(r), v = v || Mt(k), f = 0, p = h.length;
              f < p;
              f++
            )
              kr(h[f], v[f]);
          else kr(r, k);
        return (
          (v = Mt(k, "script")), v.length > 0 && rr(v, !S && Mt(r, "script")), k
        );
      },
      cleanData: function (r) {
        for (
          var o, a, f, p = c.event.special, h = 0;
          (a = r[h]) !== void 0;
          h++
        )
          if (Li(a)) {
            if ((o = a[ie.expando])) {
              if (o.events)
                for (f in o.events)
                  p[f] ? c.event.remove(a, f) : c.removeEvent(a, f, o.handle);
              a[ie.expando] = void 0;
            }
            a[Tt.expando] && (a[Tt.expando] = void 0);
          }
      },
    }),
      c.fn.extend({
        detach: function (r) {
          return It(this, r, !0);
        },
        remove: function (r) {
          return It(this, r);
        },
        text: function (r) {
          return Rn(
            this,
            function (o) {
              return o === void 0
                ? c.text(this)
                : this.empty().each(function () {
                    (this.nodeType === 1 ||
                      this.nodeType === 11 ||
                      this.nodeType === 9) &&
                      (this.textContent = o);
                  });
            },
            null,
            r,
            arguments.length
          );
        },
        append: function () {
          return dt(this, arguments, function (r) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var o = ho(this, r);
              o.appendChild(r);
            }
          });
        },
        prepend: function () {
          return dt(this, arguments, function (r) {
            if (
              this.nodeType === 1 ||
              this.nodeType === 11 ||
              this.nodeType === 9
            ) {
              var o = ho(this, r);
              o.insertBefore(r, o.firstChild);
            }
          });
        },
        before: function () {
          return dt(this, arguments, function (r) {
            this.parentNode && this.parentNode.insertBefore(r, this);
          });
        },
        after: function () {
          return dt(this, arguments, function (r) {
            this.parentNode &&
              this.parentNode.insertBefore(r, this.nextSibling);
          });
        },
        empty: function () {
          for (var r, o = 0; (r = this[o]) != null; o++)
            r.nodeType === 1 && (c.cleanData(Mt(r, !1)), (r.textContent = ""));
          return this;
        },
        clone: function (r, o) {
          return (
            (r = r ?? !1),
            (o = o ?? r),
            this.map(function () {
              return c.clone(this, r, o);
            })
          );
        },
        html: function (r) {
          return Rn(
            this,
            function (o) {
              var a = this[0] || {},
                f = 0,
                p = this.length;
              if (o === void 0 && a.nodeType === 1) return a.innerHTML;
              if (
                typeof o == "string" &&
                !Zr.test(o) &&
                !Zt[(kl.exec(o) || ["", ""])[1].toLowerCase()]
              ) {
                o = c.htmlPrefilter(o);
                try {
                  for (; f < p; f++)
                    (a = this[f] || {}),
                      a.nodeType === 1 &&
                        (c.cleanData(Mt(a, !1)), (a.innerHTML = o));
                  a = 0;
                } catch {}
              }
              a && this.empty().append(o);
            },
            null,
            r,
            arguments.length
          );
        },
        replaceWith: function () {
          var r = [];
          return dt(
            this,
            arguments,
            function (o) {
              var a = this.parentNode;
              c.inArray(this, r) < 0 &&
                (c.cleanData(Mt(this)), a && a.replaceChild(o, this));
            },
            r
          );
        },
      }),
      c.each(
        {
          appendTo: "append",
          prependTo: "prepend",
          insertBefore: "before",
          insertAfter: "after",
          replaceAll: "replaceWith",
        },
        function (r, o) {
          c.fn[r] = function (a) {
            for (var f, p = [], h = c(a), v = h.length - 1, k = 0; k <= v; k++)
              (f = k === v ? this : this.clone(!0)),
                c(h[k])[o](f),
                _.apply(p, f.get());
            return this.pushStack(p);
          };
        }
      );
    var gt = new RegExp("^(" + xl + ")(?!px)[a-z%]+$", "i"),
      Jr = /^--/,
      $n = function (r) {
        var o = r.ownerDocument.defaultView;
        return (!o || !o.opener) && (o = t), o.getComputedStyle(r);
      },
      ir = function (r, o, a) {
        var f,
          p,
          h = {};
        for (p in o) (h[p] = r.style[p]), (r.style[p] = o[p]);
        f = a.call(r);
        for (p in o) r.style[p] = h[p];
        return f;
      },
      ei = new RegExp(zn.join("|"), "i");
    (function () {
      function r() {
        if (N) {
          (S.style.cssText =
            "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0"),
            (N.style.cssText =
              "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%"),
            xr.appendChild(S).appendChild(N);
          var I = t.getComputedStyle(N);
          (a = I.top !== "1%"),
            (k = o(I.marginLeft) === 12),
            (N.style.right = "60%"),
            (h = o(I.right) === 36),
            (f = o(I.width) === 36),
            (N.style.position = "absolute"),
            (p = o(N.offsetWidth / 3) === 12),
            xr.removeChild(S),
            (N = null);
        }
      }
      function o(I) {
        return Math.round(parseFloat(I));
      }
      var a,
        f,
        p,
        h,
        v,
        k,
        S = C.createElement("div"),
        N = C.createElement("div");
      N.style &&
        ((N.style.backgroundClip = "content-box"),
        (N.cloneNode(!0).style.backgroundClip = ""),
        (U.clearCloneStyle = N.style.backgroundClip === "content-box"),
        c.extend(U, {
          boxSizingReliable: function () {
            return r(), f;
          },
          pixelBoxStyles: function () {
            return r(), h;
          },
          pixelPosition: function () {
            return r(), a;
          },
          reliableMarginLeft: function () {
            return r(), k;
          },
          scrollboxSize: function () {
            return r(), p;
          },
          reliableTrDimensions: function () {
            var I, $, L, X;
            return (
              v == null &&
                ((I = C.createElement("table")),
                ($ = C.createElement("tr")),
                (L = C.createElement("div")),
                (I.style.cssText =
                  "position:absolute;left:-11111px;border-collapse:separate"),
                ($.style.cssText = "box-sizing:content-box;border:1px solid"),
                ($.style.height = "1px"),
                (L.style.height = "9px"),
                (L.style.display = "block"),
                xr.appendChild(I).appendChild($).appendChild(L),
                (X = t.getComputedStyle($)),
                (v =
                  parseInt(X.height, 10) +
                    parseInt(X.borderTopWidth, 10) +
                    parseInt(X.borderBottomWidth, 10) ===
                  $.offsetHeight),
                xr.removeChild(I)),
              v
            );
          },
        }));
    })();
    function ti(r, o, a) {
      var f,
        p,
        h,
        v,
        k = Jr.test(o),
        S = r.style;
      return (
        (a = a || $n(r)),
        a &&
          ((v = a.getPropertyValue(o) || a[o]),
          k && v && (v = v.replace(Et, "$1") || void 0),
          v === "" && !Qr(r) && (v = c.style(r, o)),
          !U.pixelBoxStyles() &&
            gt.test(v) &&
            ei.test(o) &&
            ((f = S.width),
            (p = S.minWidth),
            (h = S.maxWidth),
            (S.minWidth = S.maxWidth = S.width = v),
            (v = a.width),
            (S.width = f),
            (S.minWidth = p),
            (S.maxWidth = h))),
        v !== void 0 ? v + "" : v
      );
    }
    function go(r, o) {
      return {
        get: function () {
          if (r()) {
            delete this.get;
            return;
          }
          return (this.get = o).apply(this, arguments);
        },
      };
    }
    var Cr = ["Webkit", "Moz", "ms"],
      ds = C.createElement("div").style,
      mo = {};
    function ps(r) {
      for (var o = r[0].toUpperCase() + r.slice(1), a = Cr.length; a--; )
        if (((r = Cr[a] + o), r in ds)) return r;
    }
    function vo(r) {
      var o = c.cssProps[r] || mo[r];
      return o || (r in ds ? r : (mo[r] = ps(r) || r));
    }
    var Nl = /^(none|table(?!-c[ea]).+)/,
      bl = { position: "absolute", visibility: "hidden", display: "block" },
      hs = { letterSpacing: "0", fontWeight: "400" };
    function gs(r, o, a) {
      var f = wr.exec(o);
      return f ? Math.max(0, f[2] - (a || 0)) + (f[3] || "px") : o;
    }
    function yo(r, o, a, f, p, h) {
      var v = o === "width" ? 1 : 0,
        k = 0,
        S = 0,
        N = 0;
      if (a === (f ? "border" : "content")) return 0;
      for (; v < 4; v += 2)
        a === "margin" && (N += c.css(r, a + zn[v], !0, p)),
          f
            ? (a === "content" && (S -= c.css(r, "padding" + zn[v], !0, p)),
              a !== "margin" &&
                (S -= c.css(r, "border" + zn[v] + "Width", !0, p)))
            : ((S += c.css(r, "padding" + zn[v], !0, p)),
              a !== "padding"
                ? (S += c.css(r, "border" + zn[v] + "Width", !0, p))
                : (k += c.css(r, "border" + zn[v] + "Width", !0, p)));
      return (
        !f &&
          h >= 0 &&
          (S +=
            Math.max(
              0,
              Math.ceil(
                r["offset" + o[0].toUpperCase() + o.slice(1)] - h - S - k - 0.5
              )
            ) || 0),
        S + N
      );
    }
    function ms(r, o, a) {
      var f = $n(r),
        p = !U.boxSizingReliable() || a,
        h = p && c.css(r, "boxSizing", !1, f) === "border-box",
        v = h,
        k = ti(r, o, f),
        S = "offset" + o[0].toUpperCase() + o.slice(1);
      if (gt.test(k)) {
        if (!a) return k;
        k = "auto";
      }
      return (
        ((!U.boxSizingReliable() && h) ||
          (!U.reliableTrDimensions() && ge(r, "tr")) ||
          k === "auto" ||
          (!parseFloat(k) && c.css(r, "display", !1, f) === "inline")) &&
          r.getClientRects().length &&
          ((h = c.css(r, "boxSizing", !1, f) === "border-box"),
          (v = S in r),
          v && (k = r[S])),
        (k = parseFloat(k) || 0),
        k + yo(r, o, a || (h ? "border" : "content"), v, f, k) + "px"
      );
    }
    c.extend({
      cssHooks: {
        opacity: {
          get: function (r, o) {
            if (o) {
              var a = ti(r, "opacity");
              return a === "" ? "1" : a;
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
      style: function (r, o, a, f) {
        if (!(!r || r.nodeType === 3 || r.nodeType === 8 || !r.style)) {
          var p,
            h,
            v,
            k = _n(o),
            S = Jr.test(o),
            N = r.style;
          if (
            (S || (o = vo(k)),
            (v = c.cssHooks[o] || c.cssHooks[k]),
            a !== void 0)
          ) {
            if (
              ((h = typeof a),
              h === "string" &&
                (p = wr.exec(a)) &&
                p[1] &&
                ((a = Sl(r, o, p)), (h = "number")),
              a == null || a !== a)
            )
              return;
            h === "number" &&
              !S &&
              (a += (p && p[3]) || (c.cssNumber[k] ? "" : "px")),
              !U.clearCloneStyle &&
                a === "" &&
                o.indexOf("background") === 0 &&
                (N[o] = "inherit"),
              (!v || !("set" in v) || (a = v.set(r, a, f)) !== void 0) &&
                (S ? N.setProperty(o, a) : (N[o] = a));
          } else
            return v && "get" in v && (p = v.get(r, !1, f)) !== void 0
              ? p
              : N[o];
        }
      },
      css: function (r, o, a, f) {
        var p,
          h,
          v,
          k = _n(o),
          S = Jr.test(o);
        return (
          S || (o = vo(k)),
          (v = c.cssHooks[o] || c.cssHooks[k]),
          v && "get" in v && (p = v.get(r, !0, a)),
          p === void 0 && (p = ti(r, o, f)),
          p === "normal" && o in hs && (p = hs[o]),
          a === "" || a
            ? ((h = parseFloat(p)), a === !0 || isFinite(h) ? h || 0 : p)
            : p
        );
      },
    }),
      c.each(["height", "width"], function (r, o) {
        c.cssHooks[o] = {
          get: function (a, f, p) {
            if (f)
              return Nl.test(c.css(a, "display")) &&
                (!a.getClientRects().length || !a.getBoundingClientRect().width)
                ? ir(a, bl, function () {
                    return ms(a, o, p);
                  })
                : ms(a, o, p);
          },
          set: function (a, f, p) {
            var h,
              v = $n(a),
              k = !U.scrollboxSize() && v.position === "absolute",
              S = k || p,
              N = S && c.css(a, "boxSizing", !1, v) === "border-box",
              I = p ? yo(a, o, p, N, v) : 0;
            return (
              N &&
                k &&
                (I -= Math.ceil(
                  a["offset" + o[0].toUpperCase() + o.slice(1)] -
                    parseFloat(v[o]) -
                    yo(a, o, "border", !1, v) -
                    0.5
                )),
              I &&
                (h = wr.exec(f)) &&
                (h[3] || "px") !== "px" &&
                ((a.style[o] = f), (f = c.css(a, o))),
              gs(a, f, I)
            );
          },
        };
      }),
      (c.cssHooks.marginLeft = go(U.reliableMarginLeft, function (r, o) {
        if (o)
          return (
            (parseFloat(ti(r, "marginLeft")) ||
              r.getBoundingClientRect().left -
                ir(r, { marginLeft: 0 }, function () {
                  return r.getBoundingClientRect().left;
                })) + "px"
          );
      })),
      c.each({ margin: "", padding: "", border: "Width" }, function (r, o) {
        (c.cssHooks[r + o] = {
          expand: function (a) {
            for (
              var f = 0, p = {}, h = typeof a == "string" ? a.split(" ") : [a];
              f < 4;
              f++
            )
              p[r + zn[f] + o] = h[f] || h[f - 2] || h[0];
            return p;
          },
        }),
          r !== "margin" && (c.cssHooks[r + o].set = gs);
      }),
      c.fn.extend({
        css: function (r, o) {
          return Rn(
            this,
            function (a, f, p) {
              var h,
                v,
                k = {},
                S = 0;
              if (Array.isArray(f)) {
                for (h = $n(a), v = f.length; S < v; S++)
                  k[f[S]] = c.css(a, f[S], !1, h);
                return k;
              }
              return p !== void 0 ? c.style(a, f, p) : c.css(a, f);
            },
            r,
            o,
            arguments.length > 1
          );
        },
      });
    function bt(r, o, a, f, p) {
      return new bt.prototype.init(r, o, a, f, p);
    }
    (c.Tween = bt),
      (bt.prototype = {
        constructor: bt,
        init: function (r, o, a, f, p, h) {
          (this.elem = r),
            (this.prop = a),
            (this.easing = p || c.easing._default),
            (this.options = o),
            (this.start = this.now = this.cur()),
            (this.end = f),
            (this.unit = h || (c.cssNumber[a] ? "" : "px"));
        },
        cur: function () {
          var r = bt.propHooks[this.prop];
          return r && r.get ? r.get(this) : bt.propHooks._default.get(this);
        },
        run: function (r) {
          var o,
            a = bt.propHooks[this.prop];
          return (
            this.options.duration
              ? (this.pos = o =
                  c.easing[this.easing](
                    r,
                    this.options.duration * r,
                    0,
                    1,
                    this.options.duration
                  ))
              : (this.pos = o = r),
            (this.now = (this.end - this.start) * o + this.start),
            this.options.step &&
              this.options.step.call(this.elem, this.now, this),
            a && a.set ? a.set(this) : bt.propHooks._default.set(this),
            this
          );
        },
      }),
      (bt.prototype.init.prototype = bt.prototype),
      (bt.propHooks = {
        _default: {
          get: function (r) {
            var o;
            return r.elem.nodeType !== 1 ||
              (r.elem[r.prop] != null && r.elem.style[r.prop] == null)
              ? r.elem[r.prop]
              : ((o = c.css(r.elem, r.prop, "")), !o || o === "auto" ? 0 : o);
          },
          set: function (r) {
            c.fx.step[r.prop]
              ? c.fx.step[r.prop](r)
              : r.elem.nodeType === 1 &&
                (c.cssHooks[r.prop] || r.elem.style[vo(r.prop)] != null)
              ? c.style(r.elem, r.prop, r.now + r.unit)
              : (r.elem[r.prop] = r.now);
          },
        },
      }),
      (bt.propHooks.scrollTop = bt.propHooks.scrollLeft =
        {
          set: function (r) {
            r.elem.nodeType && r.elem.parentNode && (r.elem[r.prop] = r.now);
          },
        }),
      (c.easing = {
        linear: function (r) {
          return r;
        },
        swing: function (r) {
          return 0.5 - Math.cos(r * Math.PI) / 2;
        },
        _default: "swing",
      }),
      (c.fx = bt.prototype.init),
      (c.fx.step = {});
    var Er,
      Ri,
      wn = /^(?:toggle|show|hide)$/,
      Bt = /queueHooks$/;
    function Fn() {
      Ri &&
        (C.hidden === !1 && t.requestAnimationFrame
          ? t.requestAnimationFrame(Fn)
          : t.setTimeout(Fn, c.fx.interval),
        c.fx.tick());
    }
    function Wt() {
      return (
        t.setTimeout(function () {
          Er = void 0;
        }),
        (Er = Date.now())
      );
    }
    function ni(r, o) {
      var a,
        f = 0,
        p = { height: r };
      for (o = o ? 1 : 0; f < 4; f += 2 - o)
        (a = zn[f]), (p["margin" + a] = p["padding" + a] = r);
      return o && (p.opacity = p.width = r), p;
    }
    function _o(r, o, a) {
      for (
        var f,
          p = (Rt.tweeners[o] || []).concat(Rt.tweeners["*"]),
          h = 0,
          v = p.length;
        h < v;
        h++
      )
        if ((f = p[h].call(a, o, r))) return f;
    }
    function xn(r, o, a) {
      var f,
        p,
        h,
        v,
        k,
        S,
        N,
        I,
        $ = "width" in o || "height" in o,
        L = this,
        X = {},
        ve = r.style,
        De = r.nodeType && co(r),
        Ce = ie.get(r, "fxshow");
      a.queue ||
        ((v = c._queueHooks(r, "fx")),
        v.unqueued == null &&
          ((v.unqueued = 0),
          (k = v.empty.fire),
          (v.empty.fire = function () {
            v.unqueued || k();
          })),
        v.unqueued++,
        L.always(function () {
          L.always(function () {
            v.unqueued--, c.queue(r, "fx").length || v.empty.fire();
          });
        }));
      for (f in o)
        if (((p = o[f]), wn.test(p))) {
          if (
            (delete o[f],
            (h = h || p === "toggle"),
            p === (De ? "hide" : "show"))
          )
            if (p === "show" && Ce && Ce[f] !== void 0) De = !0;
            else continue;
          X[f] = (Ce && Ce[f]) || c.style(r, f);
        }
      if (((S = !c.isEmptyObject(o)), !(!S && c.isEmptyObject(X)))) {
        $ &&
          r.nodeType === 1 &&
          ((a.overflow = [ve.overflow, ve.overflowX, ve.overflowY]),
          (N = Ce && Ce.display),
          N == null && (N = ie.get(r, "display")),
          (I = c.css(r, "display")),
          I === "none" &&
            (N
              ? (I = N)
              : (Sr([r], !0),
                (N = r.style.display || N),
                (I = c.css(r, "display")),
                Sr([r]))),
          (I === "inline" || (I === "inline-block" && N != null)) &&
            c.css(r, "float") === "none" &&
            (S ||
              (L.done(function () {
                ve.display = N;
              }),
              N == null && ((I = ve.display), (N = I === "none" ? "" : I))),
            (ve.display = "inline-block"))),
          a.overflow &&
            ((ve.overflow = "hidden"),
            L.always(function () {
              (ve.overflow = a.overflow[0]),
                (ve.overflowX = a.overflow[1]),
                (ve.overflowY = a.overflow[2]);
            })),
          (S = !1);
        for (f in X)
          S ||
            (Ce
              ? "hidden" in Ce && (De = Ce.hidden)
              : (Ce = ie.access(r, "fxshow", { display: N })),
            h && (Ce.hidden = !De),
            De && Sr([r], !0),
            L.done(function () {
              De || Sr([r]), ie.remove(r, "fxshow");
              for (f in X) c.style(r, f, X[f]);
            })),
            (S = _o(De ? Ce[f] : 0, f, L)),
            f in Ce ||
              ((Ce[f] = S.start), De && ((S.end = S.start), (S.start = 0)));
      }
    }
    function Tr(r, o) {
      var a, f, p, h, v;
      for (a in r)
        if (
          ((f = _n(a)),
          (p = o[f]),
          (h = r[a]),
          Array.isArray(h) && ((p = h[1]), (h = r[a] = h[0])),
          a !== f && ((r[f] = h), delete r[a]),
          (v = c.cssHooks[f]),
          v && "expand" in v)
        ) {
          (h = v.expand(h)), delete r[f];
          for (a in h) a in r || ((r[a] = h[a]), (o[a] = p));
        } else o[f] = p;
    }
    function Rt(r, o, a) {
      var f,
        p,
        h = 0,
        v = Rt.prefilters.length,
        k = c.Deferred().always(function () {
          delete S.elem;
        }),
        S = function () {
          if (p) return !1;
          for (
            var $ = Er || Wt(),
              L = Math.max(0, N.startTime + N.duration - $),
              X = L / N.duration || 0,
              ve = 1 - X,
              De = 0,
              Ce = N.tweens.length;
            De < Ce;
            De++
          )
            N.tweens[De].run(ve);
          return (
            k.notifyWith(r, [N, ve, L]),
            ve < 1 && Ce
              ? L
              : (Ce || k.notifyWith(r, [N, 1, 0]), k.resolveWith(r, [N]), !1)
          );
        },
        N = k.promise({
          elem: r,
          props: c.extend({}, o),
          opts: c.extend(
            !0,
            { specialEasing: {}, easing: c.easing._default },
            a
          ),
          originalProperties: o,
          originalOptions: a,
          startTime: Er || Wt(),
          duration: a.duration,
          tweens: [],
          createTween: function ($, L) {
            var X = c.Tween(
              r,
              N.opts,
              $,
              L,
              N.opts.specialEasing[$] || N.opts.easing
            );
            return N.tweens.push(X), X;
          },
          stop: function ($) {
            var L = 0,
              X = $ ? N.tweens.length : 0;
            if (p) return this;
            for (p = !0; L < X; L++) N.tweens[L].run(1);
            return (
              $
                ? (k.notifyWith(r, [N, 1, 0]), k.resolveWith(r, [N, $]))
                : k.rejectWith(r, [N, $]),
              this
            );
          },
        }),
        I = N.props;
      for (Tr(I, N.opts.specialEasing); h < v; h++)
        if (((f = Rt.prefilters[h].call(N, r, I, N.opts)), f))
          return (
            V(f.stop) &&
              (c._queueHooks(N.elem, N.opts.queue).stop = f.stop.bind(f)),
            f
          );
      return (
        c.map(I, _o, N),
        V(N.opts.start) && N.opts.start.call(r, N),
        N.progress(N.opts.progress)
          .done(N.opts.done, N.opts.complete)
          .fail(N.opts.fail)
          .always(N.opts.always),
        c.fx.timer(c.extend(S, { elem: r, anim: N, queue: N.opts.queue })),
        N
      );
    }
    (c.Animation = c.extend(Rt, {
      tweeners: {
        "*": [
          function (r, o) {
            var a = this.createTween(r, o);
            return Sl(a.elem, r, wr.exec(o), a), a;
          },
        ],
      },
      tweener: function (r, o) {
        V(r) ? ((o = r), (r = ["*"])) : (r = r.match(ln));
        for (var a, f = 0, p = r.length; f < p; f++)
          (a = r[f]),
            (Rt.tweeners[a] = Rt.tweeners[a] || []),
            Rt.tweeners[a].unshift(o);
      },
      prefilters: [xn],
      prefilter: function (r, o) {
        o ? Rt.prefilters.unshift(r) : Rt.prefilters.push(r);
      },
    })),
      (c.speed = function (r, o, a) {
        var f =
          r && typeof r == "object"
            ? c.extend({}, r)
            : {
                complete: a || (!a && o) || (V(r) && r),
                duration: r,
                easing: (a && o) || (o && !V(o) && o),
              };
        return (
          c.fx.off
            ? (f.duration = 0)
            : typeof f.duration != "number" &&
              (f.duration in c.fx.speeds
                ? (f.duration = c.fx.speeds[f.duration])
                : (f.duration = c.fx.speeds._default)),
          (f.queue == null || f.queue === !0) && (f.queue = "fx"),
          (f.old = f.complete),
          (f.complete = function () {
            V(f.old) && f.old.call(this), f.queue && c.dequeue(this, f.queue);
          }),
          f
        );
      }),
      c.fn.extend({
        fadeTo: function (r, o, a, f) {
          return this.filter(co)
            .css("opacity", 0)
            .show()
            .end()
            .animate({ opacity: o }, r, a, f);
        },
        animate: function (r, o, a, f) {
          var p = c.isEmptyObject(r),
            h = c.speed(o, a, f),
            v = function () {
              var k = Rt(this, c.extend({}, r), h);
              (p || ie.get(this, "finish")) && k.stop(!0);
            };
          return (
            (v.finish = v),
            p || h.queue === !1 ? this.each(v) : this.queue(h.queue, v)
          );
        },
        stop: function (r, o, a) {
          var f = function (p) {
            var h = p.stop;
            delete p.stop, h(a);
          };
          return (
            typeof r != "string" && ((a = o), (o = r), (r = void 0)),
            o && this.queue(r || "fx", []),
            this.each(function () {
              var p = !0,
                h = r != null && r + "queueHooks",
                v = c.timers,
                k = ie.get(this);
              if (h) k[h] && k[h].stop && f(k[h]);
              else for (h in k) k[h] && k[h].stop && Bt.test(h) && f(k[h]);
              for (h = v.length; h--; )
                v[h].elem === this &&
                  (r == null || v[h].queue === r) &&
                  (v[h].anim.stop(a), (p = !1), v.splice(h, 1));
              (p || !a) && c.dequeue(this, r);
            })
          );
        },
        finish: function (r) {
          return (
            r !== !1 && (r = r || "fx"),
            this.each(function () {
              var o,
                a = ie.get(this),
                f = a[r + "queue"],
                p = a[r + "queueHooks"],
                h = c.timers,
                v = f ? f.length : 0;
              for (
                a.finish = !0,
                  c.queue(this, r, []),
                  p && p.stop && p.stop.call(this, !0),
                  o = h.length;
                o--;

              )
                h[o].elem === this &&
                  h[o].queue === r &&
                  (h[o].anim.stop(!0), h.splice(o, 1));
              for (o = 0; o < v; o++)
                f[o] && f[o].finish && f[o].finish.call(this);
              delete a.finish;
            })
          );
        },
      }),
      c.each(["toggle", "show", "hide"], function (r, o) {
        var a = c.fn[o];
        c.fn[o] = function (f, p, h) {
          return f == null || typeof f == "boolean"
            ? a.apply(this, arguments)
            : this.animate(ni(o, !0), f, p, h);
        };
      }),
      c.each(
        {
          slideDown: ni("show"),
          slideUp: ni("hide"),
          slideToggle: ni("toggle"),
          fadeIn: { opacity: "show" },
          fadeOut: { opacity: "hide" },
          fadeToggle: { opacity: "toggle" },
        },
        function (r, o) {
          c.fn[r] = function (a, f, p) {
            return this.animate(o, a, f, p);
          };
        }
      ),
      (c.timers = []),
      (c.fx.tick = function () {
        var r,
          o = 0,
          a = c.timers;
        for (Er = Date.now(); o < a.length; o++)
          (r = a[o]), !r() && a[o] === r && a.splice(o--, 1);
        a.length || c.fx.stop(), (Er = void 0);
      }),
      (c.fx.timer = function (r) {
        c.timers.push(r), c.fx.start();
      }),
      (c.fx.interval = 13),
      (c.fx.start = function () {
        Ri || ((Ri = !0), Fn());
      }),
      (c.fx.stop = function () {
        Ri = null;
      }),
      (c.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
      (c.fn.delay = function (r, o) {
        return (
          (r = (c.fx && c.fx.speeds[r]) || r),
          (o = o || "fx"),
          this.queue(o, function (a, f) {
            var p = t.setTimeout(a, r);
            f.stop = function () {
              t.clearTimeout(p);
            };
          })
        );
      }),
      (function () {
        var r = C.createElement("input"),
          o = C.createElement("select"),
          a = o.appendChild(C.createElement("option"));
        (r.type = "checkbox"),
          (U.checkOn = r.value !== ""),
          (U.optSelected = a.selected),
          (r = C.createElement("input")),
          (r.value = "t"),
          (r.type = "radio"),
          (U.radioValue = r.value === "t");
      })();
    var Nr,
      br = c.expr.attrHandle;
    c.fn.extend({
      attr: function (r, o) {
        return Rn(this, c.attr, r, o, arguments.length > 1);
      },
      removeAttr: function (r) {
        return this.each(function () {
          c.removeAttr(this, r);
        });
      },
    }),
      c.extend({
        attr: function (r, o, a) {
          var f,
            p,
            h = r.nodeType;
          if (!(h === 3 || h === 8 || h === 2)) {
            if (typeof r.getAttribute > "u") return c.prop(r, o, a);
            if (
              ((h !== 1 || !c.isXMLDoc(r)) &&
                (p =
                  c.attrHooks[o.toLowerCase()] ||
                  (c.expr.match.bool.test(o) ? Nr : void 0)),
              a !== void 0)
            ) {
              if (a === null) {
                c.removeAttr(r, o);
                return;
              }
              return p && "set" in p && (f = p.set(r, a, o)) !== void 0
                ? f
                : (r.setAttribute(o, a + ""), a);
            }
            return p && "get" in p && (f = p.get(r, o)) !== null
              ? f
              : ((f = c.find.attr(r, o)), f ?? void 0);
          }
        },
        attrHooks: {
          type: {
            set: function (r, o) {
              if (!U.radioValue && o === "radio" && ge(r, "input")) {
                var a = r.value;
                return r.setAttribute("type", o), a && (r.value = a), o;
              }
            },
          },
        },
        removeAttr: function (r, o) {
          var a,
            f = 0,
            p = o && o.match(ln);
          if (p && r.nodeType === 1)
            for (; (a = p[f++]); ) r.removeAttribute(a);
        },
      }),
      (Nr = {
        set: function (r, o, a) {
          return o === !1 ? c.removeAttr(r, a) : r.setAttribute(a, a), a;
        },
      }),
      c.each(c.expr.match.bool.source.match(/\w+/g), function (r, o) {
        var a = br[o] || c.find.attr;
        br[o] = function (f, p, h) {
          var v,
            k,
            S = p.toLowerCase();
          return (
            h ||
              ((k = br[S]),
              (br[S] = v),
              (v = a(f, p, h) != null ? S : null),
              (br[S] = k)),
            v
          );
        };
      });
    var jl = /^(?:input|select|textarea|button)$/i,
      ri = /^(?:a|area)$/i;
    c.fn.extend({
      prop: function (r, o) {
        return Rn(this, c.prop, r, o, arguments.length > 1);
      },
      removeProp: function (r) {
        return this.each(function () {
          delete this[c.propFix[r] || r];
        });
      },
    }),
      c.extend({
        prop: function (r, o, a) {
          var f,
            p,
            h = r.nodeType;
          if (!(h === 3 || h === 8 || h === 2))
            return (
              (h !== 1 || !c.isXMLDoc(r)) &&
                ((o = c.propFix[o] || o), (p = c.propHooks[o])),
              a !== void 0
                ? p && "set" in p && (f = p.set(r, a, o)) !== void 0
                  ? f
                  : (r[o] = a)
                : p && "get" in p && (f = p.get(r, o)) !== null
                ? f
                : r[o]
            );
        },
        propHooks: {
          tabIndex: {
            get: function (r) {
              var o = c.find.attr(r, "tabindex");
              return o
                ? parseInt(o, 10)
                : jl.test(r.nodeName) || (ri.test(r.nodeName) && r.href)
                ? 0
                : -1;
            },
          },
        },
        propFix: { for: "htmlFor", class: "className" },
      }),
      U.optSelected ||
        (c.propHooks.selected = {
          get: function (r) {
            var o = r.parentNode;
            return o && o.parentNode && o.parentNode.selectedIndex, null;
          },
          set: function (r) {
            var o = r.parentNode;
            o && (o.selectedIndex, o.parentNode && o.parentNode.selectedIndex);
          },
        }),
      c.each(
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
          c.propFix[this.toLowerCase()] = this;
        }
      );
    function Hn(r) {
      var o = r.match(ln) || [];
      return o.join(" ");
    }
    function or(r) {
      return (r.getAttribute && r.getAttribute("class")) || "";
    }
    function an(r) {
      return Array.isArray(r)
        ? r
        : typeof r == "string"
        ? r.match(ln) || []
        : [];
    }
    c.fn.extend({
      addClass: function (r) {
        var o, a, f, p, h, v;
        return V(r)
          ? this.each(function (k) {
              c(this).addClass(r.call(this, k, or(this)));
            })
          : ((o = an(r)),
            o.length
              ? this.each(function () {
                  if (
                    ((f = or(this)),
                    (a = this.nodeType === 1 && " " + Hn(f) + " "),
                    a)
                  ) {
                    for (h = 0; h < o.length; h++)
                      (p = o[h]),
                        a.indexOf(" " + p + " ") < 0 && (a += p + " ");
                    (v = Hn(a)), f !== v && this.setAttribute("class", v);
                  }
                })
              : this);
      },
      removeClass: function (r) {
        var o, a, f, p, h, v;
        return V(r)
          ? this.each(function (k) {
              c(this).removeClass(r.call(this, k, or(this)));
            })
          : arguments.length
          ? ((o = an(r)),
            o.length
              ? this.each(function () {
                  if (
                    ((f = or(this)),
                    (a = this.nodeType === 1 && " " + Hn(f) + " "),
                    a)
                  ) {
                    for (h = 0; h < o.length; h++)
                      for (p = o[h]; a.indexOf(" " + p + " ") > -1; )
                        a = a.replace(" " + p + " ", " ");
                    (v = Hn(a)), f !== v && this.setAttribute("class", v);
                  }
                })
              : this)
          : this.attr("class", "");
      },
      toggleClass: function (r, o) {
        var a,
          f,
          p,
          h,
          v = typeof r,
          k = v === "string" || Array.isArray(r);
        return V(r)
          ? this.each(function (S) {
              c(this).toggleClass(r.call(this, S, or(this), o), o);
            })
          : typeof o == "boolean" && k
          ? o
            ? this.addClass(r)
            : this.removeClass(r)
          : ((a = an(r)),
            this.each(function () {
              if (k)
                for (h = c(this), p = 0; p < a.length; p++)
                  (f = a[p]), h.hasClass(f) ? h.removeClass(f) : h.addClass(f);
              else
                (r === void 0 || v === "boolean") &&
                  ((f = or(this)),
                  f && ie.set(this, "__className__", f),
                  this.setAttribute &&
                    this.setAttribute(
                      "class",
                      f || r === !1 ? "" : ie.get(this, "__className__") || ""
                    ));
            }));
      },
      hasClass: function (r) {
        var o,
          a,
          f = 0;
        for (o = " " + r + " "; (a = this[f++]); )
          if (a.nodeType === 1 && (" " + Hn(or(a)) + " ").indexOf(o) > -1)
            return !0;
        return !1;
      },
    });
    var Cu = /\r/g;
    c.fn.extend({
      val: function (r) {
        var o,
          a,
          f,
          p = this[0];
        return arguments.length
          ? ((f = V(r)),
            this.each(function (h) {
              var v;
              this.nodeType === 1 &&
                (f ? (v = r.call(this, h, c(this).val())) : (v = r),
                v == null
                  ? (v = "")
                  : typeof v == "number"
                  ? (v += "")
                  : Array.isArray(v) &&
                    (v = c.map(v, function (k) {
                      return k == null ? "" : k + "";
                    })),
                (o =
                  c.valHooks[this.type] ||
                  c.valHooks[this.nodeName.toLowerCase()]),
                (!o || !("set" in o) || o.set(this, v, "value") === void 0) &&
                  (this.value = v));
            }))
          : p
          ? ((o = c.valHooks[p.type] || c.valHooks[p.nodeName.toLowerCase()]),
            o && "get" in o && (a = o.get(p, "value")) !== void 0
              ? a
              : ((a = p.value),
                typeof a == "string" ? a.replace(Cu, "") : a ?? ""))
          : void 0;
      },
    }),
      c.extend({
        valHooks: {
          option: {
            get: function (r) {
              var o = c.find.attr(r, "value");
              return o ?? Hn(c.text(r));
            },
          },
          select: {
            get: function (r) {
              var o,
                a,
                f,
                p = r.options,
                h = r.selectedIndex,
                v = r.type === "select-one",
                k = v ? null : [],
                S = v ? h + 1 : p.length;
              for (h < 0 ? (f = S) : (f = v ? h : 0); f < S; f++)
                if (
                  ((a = p[f]),
                  (a.selected || f === h) &&
                    !a.disabled &&
                    (!a.parentNode.disabled || !ge(a.parentNode, "optgroup")))
                ) {
                  if (((o = c(a).val()), v)) return o;
                  k.push(o);
                }
              return k;
            },
            set: function (r, o) {
              for (
                var a, f, p = r.options, h = c.makeArray(o), v = p.length;
                v--;

              )
                (f = p[v]),
                  (f.selected = c.inArray(c.valHooks.option.get(f), h) > -1) &&
                    (a = !0);
              return a || (r.selectedIndex = -1), h;
            },
          },
        },
      }),
      c.each(["radio", "checkbox"], function () {
        (c.valHooks[this] = {
          set: function (r, o) {
            if (Array.isArray(o))
              return (r.checked = c.inArray(c(r).val(), o) > -1);
          },
        }),
          U.checkOn ||
            (c.valHooks[this].get = function (r) {
              return r.getAttribute("value") === null ? "on" : r.value;
            });
      });
    var Jt = t.location,
      zi = { guid: Date.now() },
      wo = /\?/;
    c.parseXML = function (r) {
      var o, a;
      if (!r || typeof r != "string") return null;
      try {
        o = new t.DOMParser().parseFromString(r, "text/xml");
      } catch {}
      return (
        (a = o && o.getElementsByTagName("parsererror")[0]),
        (!o || a) &&
          c.error(
            "Invalid XML: " +
              (a
                ? c.map(a.childNodes, function (f) {
                    return f.textContent;
                  }).join(`
`)
                : r)
          ),
        o
      );
    };
    var ii = /^(?:focusinfocus|focusoutblur)$/,
      xo = function (r) {
        r.stopPropagation();
      };
    c.extend(c.event, {
      trigger: function (r, o, a, f) {
        var p,
          h,
          v,
          k,
          S,
          N,
          I,
          $,
          L = [a || C],
          X = B.call(r, "type") ? r.type : r,
          ve = B.call(r, "namespace") ? r.namespace.split(".") : [];
        if (
          ((h = $ = v = a = a || C),
          !(a.nodeType === 3 || a.nodeType === 8) &&
            !ii.test(X + c.event.triggered) &&
            (X.indexOf(".") > -1 &&
              ((ve = X.split(".")), (X = ve.shift()), ve.sort()),
            (S = X.indexOf(":") < 0 && "on" + X),
            (r = r[c.expando] ? r : new c.Event(X, typeof r == "object" && r)),
            (r.isTrigger = f ? 2 : 3),
            (r.namespace = ve.join(".")),
            (r.rnamespace = r.namespace
              ? new RegExp("(^|\\.)" + ve.join("\\.(?:.*\\.|)") + "(\\.|$)")
              : null),
            (r.result = void 0),
            r.target || (r.target = a),
            (o = o == null ? [r] : c.makeArray(o, [r])),
            (I = c.event.special[X] || {}),
            !(!f && I.trigger && I.trigger.apply(a, o) === !1)))
        ) {
          if (!f && !I.noBubble && !_e(a)) {
            for (
              k = I.delegateType || X, ii.test(k + X) || (h = h.parentNode);
              h;
              h = h.parentNode
            )
              L.push(h), (v = h);
            v === (a.ownerDocument || C) &&
              L.push(v.defaultView || v.parentWindow || t);
          }
          for (p = 0; (h = L[p++]) && !r.isPropagationStopped(); )
            ($ = h),
              (r.type = p > 1 ? k : I.bindType || X),
              (N =
                (ie.get(h, "events") || Object.create(null))[r.type] &&
                ie.get(h, "handle")),
              N && N.apply(h, o),
              (N = S && h[S]),
              N &&
                N.apply &&
                Li(h) &&
                ((r.result = N.apply(h, o)),
                r.result === !1 && r.preventDefault());
          return (
            (r.type = X),
            !f &&
              !r.isDefaultPrevented() &&
              (!I._default || I._default.apply(L.pop(), o) === !1) &&
              Li(a) &&
              S &&
              V(a[X]) &&
              !_e(a) &&
              ((v = a[S]),
              v && (a[S] = null),
              (c.event.triggered = X),
              r.isPropagationStopped() && $.addEventListener(X, xo),
              a[X](),
              r.isPropagationStopped() && $.removeEventListener(X, xo),
              (c.event.triggered = void 0),
              v && (a[S] = v)),
            r.result
          );
        }
      },
      simulate: function (r, o, a) {
        var f = c.extend(new c.Event(), a, { type: r, isSimulated: !0 });
        c.event.trigger(f, null, o);
      },
    }),
      c.fn.extend({
        trigger: function (r, o) {
          return this.each(function () {
            c.event.trigger(r, o, this);
          });
        },
        triggerHandler: function (r, o) {
          var a = this[0];
          if (a) return c.event.trigger(r, o, a, !0);
        },
      });
    var $i = /\[\]$/,
      vs = /\r?\n/g,
      Ol = /^(?:submit|button|image|reset|file)$/i,
      Al = /^(?:input|select|textarea|keygen)/i;
    function sr(r, o, a, f) {
      var p;
      if (Array.isArray(o))
        c.each(o, function (h, v) {
          a || $i.test(r)
            ? f(r, v)
            : sr(
                r + "[" + (typeof v == "object" && v != null ? h : "") + "]",
                v,
                a,
                f
              );
        });
      else if (!a && Q(o) === "object")
        for (p in o) sr(r + "[" + p + "]", o[p], a, f);
      else f(r, o);
    }
    (c.param = function (r, o) {
      var a,
        f = [],
        p = function (h, v) {
          var k = V(v) ? v() : v;
          f[f.length] =
            encodeURIComponent(h) + "=" + encodeURIComponent(k ?? "");
        };
      if (r == null) return "";
      if (Array.isArray(r) || (r.jquery && !c.isPlainObject(r)))
        c.each(r, function () {
          p(this.name, this.value);
        });
      else for (a in r) sr(a, r[a], o, p);
      return f.join("&");
    }),
      c.fn.extend({
        serialize: function () {
          return c.param(this.serializeArray());
        },
        serializeArray: function () {
          return this.map(function () {
            var r = c.prop(this, "elements");
            return r ? c.makeArray(r) : this;
          })
            .filter(function () {
              var r = this.type;
              return (
                this.name &&
                !c(this).is(":disabled") &&
                Al.test(this.nodeName) &&
                !Ol.test(r) &&
                (this.checked || !Xr.test(r))
              );
            })
            .map(function (r, o) {
              var a = c(this).val();
              return a == null
                ? null
                : Array.isArray(a)
                ? c.map(a, function (f) {
                    return {
                      name: o.name,
                      value: f.replace(
                        vs,
                        `\r
`
                      ),
                    };
                  })
                : {
                    name: o.name,
                    value: a.replace(
                      vs,
                      `\r
`
                    ),
                  };
            })
            .get();
        },
      });
    var Eu = /%20/g,
      Pl = /#.*$/,
      ys = /([?&])_=[^&]*/,
      So = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      _s = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Tu = /^(?:GET|HEAD)$/,
      ko = /^\/\//,
      Ll = {},
      Co = {},
      Eo = "*/".concat("*"),
      Fi = C.createElement("a");
    Fi.href = Jt.href;
    function To(r) {
      return function (o, a) {
        typeof o != "string" && ((a = o), (o = "*"));
        var f,
          p = 0,
          h = o.toLowerCase().match(ln) || [];
        if (V(a))
          for (; (f = h[p++]); )
            f[0] === "+"
              ? ((f = f.slice(1) || "*"), (r[f] = r[f] || []).unshift(a))
              : (r[f] = r[f] || []).push(a);
      };
    }
    function ws(r, o, a, f) {
      var p = {},
        h = r === Co;
      function v(k) {
        var S;
        return (
          (p[k] = !0),
          c.each(r[k] || [], function (N, I) {
            var $ = I(o, a, f);
            if (typeof $ == "string" && !h && !p[$])
              return o.dataTypes.unshift($), v($), !1;
            if (h) return !(S = $);
          }),
          S
        );
      }
      return v(o.dataTypes[0]) || (!p["*"] && v("*"));
    }
    function jr(r, o) {
      var a,
        f,
        p = c.ajaxSettings.flatOptions || {};
      for (a in o) o[a] !== void 0 && ((p[a] ? r : f || (f = {}))[a] = o[a]);
      return f && c.extend(!0, r, f), r;
    }
    function xs(r, o, a) {
      for (var f, p, h, v, k = r.contents, S = r.dataTypes; S[0] === "*"; )
        S.shift(),
          f === void 0 &&
            (f = r.mimeType || o.getResponseHeader("Content-Type"));
      if (f) {
        for (p in k)
          if (k[p] && k[p].test(f)) {
            S.unshift(p);
            break;
          }
      }
      if (S[0] in a) h = S[0];
      else {
        for (p in a) {
          if (!S[0] || r.converters[p + " " + S[0]]) {
            h = p;
            break;
          }
          v || (v = p);
        }
        h = h || v;
      }
      if (h) return h !== S[0] && S.unshift(h), a[h];
    }
    function Dl(r, o, a, f) {
      var p,
        h,
        v,
        k,
        S,
        N = {},
        I = r.dataTypes.slice();
      if (I[1]) for (v in r.converters) N[v.toLowerCase()] = r.converters[v];
      for (h = I.shift(); h; )
        if (
          (r.responseFields[h] && (a[r.responseFields[h]] = o),
          !S && f && r.dataFilter && (o = r.dataFilter(o, r.dataType)),
          (S = h),
          (h = I.shift()),
          h)
        ) {
          if (h === "*") h = S;
          else if (S !== "*" && S !== h) {
            if (((v = N[S + " " + h] || N["* " + h]), !v)) {
              for (p in N)
                if (
                  ((k = p.split(" ")),
                  k[1] === h && ((v = N[S + " " + k[0]] || N["* " + k[0]]), v))
                ) {
                  v === !0
                    ? (v = N[p])
                    : N[p] !== !0 && ((h = k[0]), I.unshift(k[1]));
                  break;
                }
            }
            if (v !== !0)
              if (v && r.throws) o = v(o);
              else
                try {
                  o = v(o);
                } catch ($) {
                  return {
                    state: "parsererror",
                    error: v ? $ : "No conversion from " + S + " to " + h,
                  };
                }
          }
        }
      return { state: "success", data: o };
    }
    c.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: Jt.href,
        type: "GET",
        isLocal: _s.test(Jt.protocol),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": Eo,
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
          "text xml": c.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (r, o) {
        return o ? jr(jr(r, c.ajaxSettings), o) : jr(c.ajaxSettings, r);
      },
      ajaxPrefilter: To(Ll),
      ajaxTransport: To(Co),
      ajax: function (r, o) {
        typeof r == "object" && ((o = r), (r = void 0)), (o = o || {});
        var a,
          f,
          p,
          h,
          v,
          k,
          S,
          N,
          I,
          $,
          L = c.ajaxSetup({}, o),
          X = L.context || L,
          ve = L.context && (X.nodeType || X.jquery) ? c(X) : c.event,
          De = c.Deferred(),
          Ce = c.Callbacks("once memory"),
          mt = L.statusCode || {},
          at = {},
          kn = {},
          Cn = "canceled",
          Oe = {
            readyState: 0,
            getResponseHeader: function (Me) {
              var Fe;
              if (S) {
                if (!h)
                  for (h = {}; (Fe = So.exec(p)); )
                    h[Fe[1].toLowerCase() + " "] = (
                      h[Fe[1].toLowerCase() + " "] || []
                    ).concat(Fe[2]);
                Fe = h[Me.toLowerCase() + " "];
              }
              return Fe == null ? null : Fe.join(", ");
            },
            getAllResponseHeaders: function () {
              return S ? p : null;
            },
            setRequestHeader: function (Me, Fe) {
              return (
                S == null &&
                  ((Me = kn[Me.toLowerCase()] = kn[Me.toLowerCase()] || Me),
                  (at[Me] = Fe)),
                this
              );
            },
            overrideMimeType: function (Me) {
              return S == null && (L.mimeType = Me), this;
            },
            statusCode: function (Me) {
              var Fe;
              if (Me)
                if (S) Oe.always(Me[Oe.status]);
                else for (Fe in Me) mt[Fe] = [mt[Fe], Me[Fe]];
              return this;
            },
            abort: function (Me) {
              var Fe = Me || Cn;
              return a && a.abort(Fe), lr(0, Fe), this;
            },
          };
        if (
          (De.promise(Oe),
          (L.url = ((r || L.url || Jt.href) + "").replace(
            ko,
            Jt.protocol + "//"
          )),
          (L.type = o.method || o.type || L.method || L.type),
          (L.dataTypes = (L.dataType || "*").toLowerCase().match(ln) || [""]),
          L.crossDomain == null)
        ) {
          k = C.createElement("a");
          try {
            (k.href = L.url),
              (k.href = k.href),
              (L.crossDomain =
                Fi.protocol + "//" + Fi.host != k.protocol + "//" + k.host);
          } catch {
            L.crossDomain = !0;
          }
        }
        if (
          (L.data &&
            L.processData &&
            typeof L.data != "string" &&
            (L.data = c.param(L.data, L.traditional)),
          ws(Ll, L, o, Oe),
          S)
        )
          return Oe;
        (N = c.event && L.global),
          N && c.active++ === 0 && c.event.trigger("ajaxStart"),
          (L.type = L.type.toUpperCase()),
          (L.hasContent = !Tu.test(L.type)),
          (f = L.url.replace(Pl, "")),
          L.hasContent
            ? L.data &&
              L.processData &&
              (L.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) === 0 &&
              (L.data = L.data.replace(Eu, "+"))
            : (($ = L.url.slice(f.length)),
              L.data &&
                (L.processData || typeof L.data == "string") &&
                ((f += (wo.test(f) ? "&" : "?") + L.data), delete L.data),
              L.cache === !1 &&
                ((f = f.replace(ys, "$1")),
                ($ = (wo.test(f) ? "&" : "?") + "_=" + zi.guid++ + $)),
              (L.url = f + $)),
          L.ifModified &&
            (c.lastModified[f] &&
              Oe.setRequestHeader("If-Modified-Since", c.lastModified[f]),
            c.etag[f] && Oe.setRequestHeader("If-None-Match", c.etag[f])),
          ((L.data && L.hasContent && L.contentType !== !1) || o.contentType) &&
            Oe.setRequestHeader("Content-Type", L.contentType),
          Oe.setRequestHeader(
            "Accept",
            L.dataTypes[0] && L.accepts[L.dataTypes[0]]
              ? L.accepts[L.dataTypes[0]] +
                  (L.dataTypes[0] !== "*" ? ", " + Eo + "; q=0.01" : "")
              : L.accepts["*"]
          );
        for (I in L.headers) Oe.setRequestHeader(I, L.headers[I]);
        if (L.beforeSend && (L.beforeSend.call(X, Oe, L) === !1 || S))
          return Oe.abort();
        if (
          ((Cn = "abort"),
          Ce.add(L.complete),
          Oe.done(L.success),
          Oe.fail(L.error),
          (a = ws(Co, L, o, Oe)),
          !a)
        )
          lr(-1, "No Transport");
        else {
          if (((Oe.readyState = 1), N && ve.trigger("ajaxSend", [Oe, L]), S))
            return Oe;
          L.async &&
            L.timeout > 0 &&
            (v = t.setTimeout(function () {
              Oe.abort("timeout");
            }, L.timeout));
          try {
            (S = !1), a.send(at, lr);
          } catch (Me) {
            if (S) throw Me;
            lr(-1, Me);
          }
        }
        function lr(Me, Fe, un, Ss) {
          var Ut,
            Hi,
            En,
            ar,
            ur,
            en = Fe;
          S ||
            ((S = !0),
            v && t.clearTimeout(v),
            (a = void 0),
            (p = Ss || ""),
            (Oe.readyState = Me > 0 ? 4 : 0),
            (Ut = (Me >= 200 && Me < 300) || Me === 304),
            un && (ar = xs(L, Oe, un)),
            !Ut &&
              c.inArray("script", L.dataTypes) > -1 &&
              c.inArray("json", L.dataTypes) < 0 &&
              (L.converters["text script"] = function () {}),
            (ar = Dl(L, ar, Oe, Ut)),
            Ut
              ? (L.ifModified &&
                  ((ur = Oe.getResponseHeader("Last-Modified")),
                  ur && (c.lastModified[f] = ur),
                  (ur = Oe.getResponseHeader("etag")),
                  ur && (c.etag[f] = ur)),
                Me === 204 || L.type === "HEAD"
                  ? (en = "nocontent")
                  : Me === 304
                  ? (en = "notmodified")
                  : ((en = ar.state),
                    (Hi = ar.data),
                    (En = ar.error),
                    (Ut = !En)))
              : ((En = en),
                (Me || !en) && ((en = "error"), Me < 0 && (Me = 0))),
            (Oe.status = Me),
            (Oe.statusText = (Fe || en) + ""),
            Ut
              ? De.resolveWith(X, [Hi, en, Oe])
              : De.rejectWith(X, [Oe, en, En]),
            Oe.statusCode(mt),
            (mt = void 0),
            N &&
              ve.trigger(Ut ? "ajaxSuccess" : "ajaxError", [
                Oe,
                L,
                Ut ? Hi : En,
              ]),
            Ce.fireWith(X, [Oe, en]),
            N &&
              (ve.trigger("ajaxComplete", [Oe, L]),
              --c.active || c.event.trigger("ajaxStop")));
        }
        return Oe;
      },
      getJSON: function (r, o, a) {
        return c.get(r, o, a, "json");
      },
      getScript: function (r, o) {
        return c.get(r, void 0, o, "script");
      },
    }),
      c.each(["get", "post"], function (r, o) {
        c[o] = function (a, f, p, h) {
          return (
            V(f) && ((h = h || p), (p = f), (f = void 0)),
            c.ajax(
              c.extend(
                { url: a, type: o, dataType: h, data: f, success: p },
                c.isPlainObject(a) && a
              )
            )
          );
        };
      }),
      c.ajaxPrefilter(function (r) {
        var o;
        for (o in r.headers)
          o.toLowerCase() === "content-type" &&
            (r.contentType = r.headers[o] || "");
      }),
      (c._evalUrl = function (r, o, a) {
        return c.ajax({
          url: r,
          type: "GET",
          dataType: "script",
          cache: !0,
          async: !1,
          global: !1,
          converters: { "text script": function () {} },
          dataFilter: function (f) {
            c.globalEval(f, o, a);
          },
        });
      }),
      c.fn.extend({
        wrapAll: function (r) {
          var o;
          return (
            this[0] &&
              (V(r) && (r = r.call(this[0])),
              (o = c(r, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && o.insertBefore(this[0]),
              o
                .map(function () {
                  for (var a = this; a.firstElementChild; )
                    a = a.firstElementChild;
                  return a;
                })
                .append(this)),
            this
          );
        },
        wrapInner: function (r) {
          return V(r)
            ? this.each(function (o) {
                c(this).wrapInner(r.call(this, o));
              })
            : this.each(function () {
                var o = c(this),
                  a = o.contents();
                a.length ? a.wrapAll(r) : o.append(r);
              });
        },
        wrap: function (r) {
          var o = V(r);
          return this.each(function (a) {
            c(this).wrapAll(o ? r.call(this, a) : r);
          });
        },
        unwrap: function (r) {
          return (
            this.parent(r)
              .not("body")
              .each(function () {
                c(this).replaceWith(this.childNodes);
              }),
            this
          );
        },
      }),
      (c.expr.pseudos.hidden = function (r) {
        return !c.expr.pseudos.visible(r);
      }),
      (c.expr.pseudos.visible = function (r) {
        return !!(r.offsetWidth || r.offsetHeight || r.getClientRects().length);
      }),
      (c.ajaxSettings.xhr = function () {
        try {
          return new t.XMLHttpRequest();
        } catch {}
      });
    var Ml = { 0: 200, 1223: 204 },
      Sn = c.ajaxSettings.xhr();
    (U.cors = !!Sn && "withCredentials" in Sn),
      (U.ajax = Sn = !!Sn),
      c.ajaxTransport(function (r) {
        var o, a;
        if (U.cors || (Sn && !r.crossDomain))
          return {
            send: function (f, p) {
              var h,
                v = r.xhr();
              if (
                (v.open(r.type, r.url, r.async, r.username, r.password),
                r.xhrFields)
              )
                for (h in r.xhrFields) v[h] = r.xhrFields[h];
              r.mimeType &&
                v.overrideMimeType &&
                v.overrideMimeType(r.mimeType),
                !r.crossDomain &&
                  !f["X-Requested-With"] &&
                  (f["X-Requested-With"] = "XMLHttpRequest");
              for (h in f) v.setRequestHeader(h, f[h]);
              (o = function (k) {
                return function () {
                  o &&
                    ((o =
                      a =
                      v.onload =
                      v.onerror =
                      v.onabort =
                      v.ontimeout =
                      v.onreadystatechange =
                        null),
                    k === "abort"
                      ? v.abort()
                      : k === "error"
                      ? typeof v.status != "number"
                        ? p(0, "error")
                        : p(v.status, v.statusText)
                      : p(
                          Ml[v.status] || v.status,
                          v.statusText,
                          (v.responseType || "text") !== "text" ||
                            typeof v.responseText != "string"
                            ? { binary: v.response }
                            : { text: v.responseText },
                          v.getAllResponseHeaders()
                        ));
                };
              }),
                (v.onload = o()),
                (a = v.onerror = v.ontimeout = o("error")),
                v.onabort !== void 0
                  ? (v.onabort = a)
                  : (v.onreadystatechange = function () {
                      v.readyState === 4 &&
                        t.setTimeout(function () {
                          o && a();
                        });
                    }),
                (o = o("abort"));
              try {
                v.send((r.hasContent && r.data) || null);
              } catch (k) {
                if (o) throw k;
              }
            },
            abort: function () {
              o && o();
            },
          };
      }),
      c.ajaxPrefilter(function (r) {
        r.crossDomain && (r.contents.script = !1);
      }),
      c.ajaxSetup({
        accepts: {
          script:
            "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
        },
        contents: { script: /\b(?:java|ecma)script\b/ },
        converters: {
          "text script": function (r) {
            return c.globalEval(r), r;
          },
        },
      }),
      c.ajaxPrefilter("script", function (r) {
        r.cache === void 0 && (r.cache = !1), r.crossDomain && (r.type = "GET");
      }),
      c.ajaxTransport("script", function (r) {
        if (r.crossDomain || r.scriptAttrs) {
          var o, a;
          return {
            send: function (f, p) {
              (o = c("<script>")
                .attr(r.scriptAttrs || {})
                .prop({ charset: r.scriptCharset, src: r.url })
                .on(
                  "load error",
                  (a = function (h) {
                    o.remove(),
                      (a = null),
                      h && p(h.type === "error" ? 404 : 200, h.type);
                  })
                )),
                C.head.appendChild(o[0]);
            },
            abort: function () {
              a && a();
            },
          };
        }
      });
    var Il = [],
      No = /(=)\?(?=&|$)|\?\?/;
    c.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function () {
        var r = Il.pop() || c.expando + "_" + zi.guid++;
        return (this[r] = !0), r;
      },
    }),
      c.ajaxPrefilter("json jsonp", function (r, o, a) {
        var f,
          p,
          h,
          v =
            r.jsonp !== !1 &&
            (No.test(r.url)
              ? "url"
              : typeof r.data == "string" &&
                (r.contentType || "").indexOf(
                  "application/x-www-form-urlencoded"
                ) === 0 &&
                No.test(r.data) &&
                "data");
        if (v || r.dataTypes[0] === "jsonp")
          return (
            (f = r.jsonpCallback =
              V(r.jsonpCallback) ? r.jsonpCallback() : r.jsonpCallback),
            v
              ? (r[v] = r[v].replace(No, "$1" + f))
              : r.jsonp !== !1 &&
                (r.url += (wo.test(r.url) ? "&" : "?") + r.jsonp + "=" + f),
            (r.converters["script json"] = function () {
              return h || c.error(f + " was not called"), h[0];
            }),
            (r.dataTypes[0] = "json"),
            (p = t[f]),
            (t[f] = function () {
              h = arguments;
            }),
            a.always(function () {
              p === void 0 ? c(t).removeProp(f) : (t[f] = p),
                r[f] && ((r.jsonpCallback = o.jsonpCallback), Il.push(f)),
                h && V(p) && p(h[0]),
                (h = p = void 0);
            }),
            "script"
          );
      }),
      (U.createHTMLDocument = (function () {
        var r = C.implementation.createHTMLDocument("").body;
        return (
          (r.innerHTML = "<form></form><form></form>"),
          r.childNodes.length === 2
        );
      })()),
      (c.parseHTML = function (r, o, a) {
        if (typeof r != "string") return [];
        typeof o == "boolean" && ((a = o), (o = !1));
        var f, p, h;
        return (
          o ||
            (U.createHTMLDocument
              ? ((o = C.implementation.createHTMLDocument("")),
                (f = o.createElement("base")),
                (f.href = C.location.href),
                o.head.appendChild(f))
              : (o = C)),
          (p = Ve.exec(r)),
          (h = !a && []),
          p
            ? [o.createElement(p[1])]
            : ((p = El([r], o, h)),
              h && h.length && c(h).remove(),
              c.merge([], p.childNodes))
        );
      }),
      (c.fn.load = function (r, o, a) {
        var f,
          p,
          h,
          v = this,
          k = r.indexOf(" ");
        return (
          k > -1 && ((f = Hn(r.slice(k))), (r = r.slice(0, k))),
          V(o)
            ? ((a = o), (o = void 0))
            : o && typeof o == "object" && (p = "POST"),
          v.length > 0 &&
            c
              .ajax({ url: r, type: p || "GET", dataType: "html", data: o })
              .done(function (S) {
                (h = arguments),
                  v.html(f ? c("<div>").append(c.parseHTML(S)).find(f) : S);
              })
              .always(
                a &&
                  function (S, N) {
                    v.each(function () {
                      a.apply(this, h || [S.responseText, N, S]);
                    });
                  }
              ),
          this
        );
      }),
      (c.expr.pseudos.animated = function (r) {
        return c.grep(c.timers, function (o) {
          return r === o.elem;
        }).length;
      }),
      (c.offset = {
        setOffset: function (r, o, a) {
          var f,
            p,
            h,
            v,
            k,
            S,
            N,
            I = c.css(r, "position"),
            $ = c(r),
            L = {};
          I === "static" && (r.style.position = "relative"),
            (k = $.offset()),
            (h = c.css(r, "top")),
            (S = c.css(r, "left")),
            (N =
              (I === "absolute" || I === "fixed") &&
              (h + S).indexOf("auto") > -1),
            N
              ? ((f = $.position()), (v = f.top), (p = f.left))
              : ((v = parseFloat(h) || 0), (p = parseFloat(S) || 0)),
            V(o) && (o = o.call(r, a, c.extend({}, k))),
            o.top != null && (L.top = o.top - k.top + v),
            o.left != null && (L.left = o.left - k.left + p),
            "using" in o ? o.using.call(r, L) : $.css(L);
        },
      }),
      c.fn.extend({
        offset: function (r) {
          if (arguments.length)
            return r === void 0
              ? this
              : this.each(function (p) {
                  c.offset.setOffset(this, r, p);
                });
          var o,
            a,
            f = this[0];
          if (f)
            return f.getClientRects().length
              ? ((o = f.getBoundingClientRect()),
                (a = f.ownerDocument.defaultView),
                { top: o.top + a.pageYOffset, left: o.left + a.pageXOffset })
              : { top: 0, left: 0 };
        },
        position: function () {
          if (this[0]) {
            var r,
              o,
              a,
              f = this[0],
              p = { top: 0, left: 0 };
            if (c.css(f, "position") === "fixed") o = f.getBoundingClientRect();
            else {
              for (
                o = this.offset(),
                  a = f.ownerDocument,
                  r = f.offsetParent || a.documentElement;
                r &&
                (r === a.body || r === a.documentElement) &&
                c.css(r, "position") === "static";

              )
                r = r.parentNode;
              r &&
                r !== f &&
                r.nodeType === 1 &&
                ((p = c(r).offset()),
                (p.top += c.css(r, "borderTopWidth", !0)),
                (p.left += c.css(r, "borderLeftWidth", !0)));
            }
            return {
              top: o.top - p.top - c.css(f, "marginTop", !0),
              left: o.left - p.left - c.css(f, "marginLeft", !0),
            };
          }
        },
        offsetParent: function () {
          return this.map(function () {
            for (
              var r = this.offsetParent;
              r && c.css(r, "position") === "static";

            )
              r = r.offsetParent;
            return r || xr;
          });
        },
      }),
      c.each(
        { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
        function (r, o) {
          var a = o === "pageYOffset";
          c.fn[r] = function (f) {
            return Rn(
              this,
              function (p, h, v) {
                var k;
                if (
                  (_e(p) ? (k = p) : p.nodeType === 9 && (k = p.defaultView),
                  v === void 0)
                )
                  return k ? k[o] : p[h];
                k
                  ? k.scrollTo(a ? k.pageXOffset : v, a ? v : k.pageYOffset)
                  : (p[h] = v);
              },
              r,
              f,
              arguments.length
            );
          };
        }
      ),
      c.each(["top", "left"], function (r, o) {
        c.cssHooks[o] = go(U.pixelPosition, function (a, f) {
          if (f)
            return (f = ti(a, o)), gt.test(f) ? c(a).position()[o] + "px" : f;
        });
      }),
      c.each({ Height: "height", Width: "width" }, function (r, o) {
        c.each(
          { padding: "inner" + r, content: o, "": "outer" + r },
          function (a, f) {
            c.fn[f] = function (p, h) {
              var v = arguments.length && (a || typeof p != "boolean"),
                k = a || (p === !0 || h === !0 ? "margin" : "border");
              return Rn(
                this,
                function (S, N, I) {
                  var $;
                  return _e(S)
                    ? f.indexOf("outer") === 0
                      ? S["inner" + r]
                      : S.document.documentElement["client" + r]
                    : S.nodeType === 9
                    ? (($ = S.documentElement),
                      Math.max(
                        S.body["scroll" + r],
                        $["scroll" + r],
                        S.body["offset" + r],
                        $["offset" + r],
                        $["client" + r]
                      ))
                    : I === void 0
                    ? c.css(S, N, k)
                    : c.style(S, N, I, k);
                },
                o,
                v ? p : void 0,
                v
              );
            };
          }
        );
      }),
      c.each(
        [
          "ajaxStart",
          "ajaxStop",
          "ajaxComplete",
          "ajaxError",
          "ajaxSuccess",
          "ajaxSend",
        ],
        function (r, o) {
          c.fn[o] = function (a) {
            return this.on(o, a);
          };
        }
      ),
      c.fn.extend({
        bind: function (r, o, a) {
          return this.on(r, null, o, a);
        },
        unbind: function (r, o) {
          return this.off(r, null, o);
        },
        delegate: function (r, o, a, f) {
          return this.on(o, r, a, f);
        },
        undelegate: function (r, o, a) {
          return arguments.length === 1
            ? this.off(r, "**")
            : this.off(o, r || "**", a);
        },
        hover: function (r, o) {
          return this.on("mouseenter", r).on("mouseleave", o || r);
        },
      }),
      c.each(
        "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(
          " "
        ),
        function (r, o) {
          c.fn[o] = function (a, f) {
            return arguments.length > 0
              ? this.on(o, null, a, f)
              : this.trigger(o);
          };
        }
      );
    var Rl = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    (c.proxy = function (r, o) {
      var a, f, p;
      if ((typeof o == "string" && ((a = r[o]), (o = r), (r = a)), !!V(r)))
        return (
          (f = u.call(arguments, 2)),
          (p = function () {
            return r.apply(o || this, f.concat(u.call(arguments)));
          }),
          (p.guid = r.guid = r.guid || c.guid++),
          p
        );
    }),
      (c.holdReady = function (r) {
        r ? c.readyWait++ : c.ready(!0);
      }),
      (c.isArray = Array.isArray),
      (c.parseJSON = JSON.parse),
      (c.nodeName = ge),
      (c.isFunction = V),
      (c.isWindow = _e),
      (c.camelCase = _n),
      (c.type = Q),
      (c.now = Date.now),
      (c.isNumeric = function (r) {
        var o = c.type(r);
        return (o === "number" || o === "string") && !isNaN(r - parseFloat(r));
      }),
      (c.trim = function (r) {
        return r == null ? "" : (r + "").replace(Rl, "$1");
      });
    var zl = t.jQuery,
      $l = t.$;
    return (
      (c.noConflict = function (r) {
        return (
          t.$ === c && (t.$ = $l), r && t.jQuery === c && (t.jQuery = zl), c
        );
      }),
      typeof n > "u" && (t.jQuery = t.$ = c),
      c
    );
  });
})(nm);
var n1 = nm.exports;
const fi = Rp(n1);
function r1() {
  return (
    zr.useEffect(() => {
      fi("a.nav-link").on("click", function (e) {
        if (this.hash !== "") {
          e.preventDefault();
          var t = this.hash;
          fi("html, body").animate({ scrollTop: fi(t).offset().top }, 800);
        }
      }),
        fi(window).on("scroll", function () {
          var e = fi(this).scrollTop(),
            t = fi("#overlay").outerHeight();
          e > t - 120
            ? fi(".navbar").addClass("scrolled")
            : fi(".navbar").removeClass("scrolled");
        });
    }, []),
    H.jsxs("main", {
      children: [
        H.jsx(M0, {}),
        H.jsx(I0, {}),
        H.jsx(ga, {}),
        H.jsx(V0, {}),
        H.jsx(ga, {}),
        H.jsx(Q0, {}),
        H.jsx(ga, {}),
        H.jsx(Y0, {}),
        H.jsx(ga, {}),
        H.jsx(e1, {}),
        H.jsx(t1, {}),
      ],
    })
  );
}
Kg(document.getElementById("root")).render(
  H.jsx(zr.StrictMode, { children: H.jsx(r1, {}) })
);
