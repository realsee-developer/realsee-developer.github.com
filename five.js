/*! For license information please see five-react.js.LICENSE.txt */
!function (e, t) {
	"object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.FiveSDK_React = t() : e.FiveSDK_React = t()
}(self, ( function () {
	return ( () => {
		var e = {
			348: e => {
				if (!( "FiveSDK" in window )) throw new Error('"FiveSDK" is not available. Please include "five" in your HTML.');
				e.exports = window.FiveSDK
			}, 751: e => {
				if (!( "React" in window )) throw new Error('"React" is not available. Please include "react" in your HTML.');
				e.exports = window.React
			}, 438: e => {
				if (!( "THREE" in window )) throw new Error('"THREE" is not available. Please include "three.js" in your HTML.');
				const t = Number(THREE.REVISION);
				if (t < 115 || t > 117) throw new Error('"Five" needs "THREE.js" version between 125 - 117.');
				e.exports = window.THREE
			}
		}, t = {};
		
		function n (r) {
			var o = t[r];
			if (void 0 !== o) return o.exports;
			var u = t[r] = { exports: {} };
			return e[r](u, u.exports, n), u.exports
		}
		
		n.d = (e, t) => {
			for (var r in t) n.o(t, r) && !n.o(e, r) && Object.defineProperty(e, r, { enumerable: !0, get: t[r] })
		}, n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n.r = e => {
			"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 })
		};
		var r = {};
		return ( () => {
			"use strict";
			n.r(r), n.d(r, {
				FiveCanvas: () => h,
				INJECTION_PROPNAME: () => T,
				Store: () => oe,
				createFiveFeature: () => te,
				createFiveProvider: () => v,
				createStore: () => ue,
				unsafe__useFiveInstance: () => y,
				useFiveAction: () => L,
				useFiveCameraDirection: () => V,
				useFiveCameraRaycaster: () => x,
				useFiveCurrentObserver: () => E,
				useFiveCurrentState: () => C,
				useFiveEventCallback: () => k,
				useFiveFloor: () => _,
				useFiveHelper: () => W,
				useFiveModelIntersectRaycaster: () => O,
				useFiveModelReadyState: () => M,
				useFiveProject2d: () => F,
				useFiveScene: () => S,
				useFiveSceneEffect: () => m,
				useFiveState: () => b,
				useFiveWork: () => w,
				withFive: () => ee
			});
			var e = function (t, n) {
				return ( e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) {
					e.__proto__ = t
				} || function (e, t) {
					for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && ( e[n] = t[n] )
				} )(t, n)
			};
			
			function t (t, n) {
				if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
				
				function r () {
					this.constructor = t
				}
				
				e(t, n), t.prototype = null === n ? Object.create(n) : ( r.prototype = n.prototype, new r )
			}
			
			var o = function () {
				return ( o = Object.assign || function (e) {
					for (var t, n = 1, r = arguments.length; n < r; n++) for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && ( e[o] = t[o] );
					return e
				} ).apply(this, arguments)
			};
			
			function u (e, t, n) {
				if (n || 2 === arguments.length) for (var r, o = 0, u = t.length; o < u; o++) !r && o in t || ( r || ( r = Array.prototype.slice.call(t, 0, o) ), r[o] = t[o] );
				return e.concat(r || Array.prototype.slice.call(t))
			}
			
			Object.create, Object.create;
			var i = n(751), a = n(438), f = [], c = i.createContext(null);
			
			function s () {
				var e = i.useContext(c);
				if (!e) throw new Error("FiveProvider never found.");
				return e.five
			}
			
			function l () {
				var e = i.useContext(c);
				if (!e) throw new Error("FiveProvider never found.");
				return e.loadWork
			}
			
			var d = n(348);
			
			function v (e) {
				return void 0 === e && ( e = {} ), function (n) {
					function r (t) {
						var r, u = this;
						u = n.call(this, t) || this;
						var i = function (e) {
							var t = void 0 === e ? {} : e, n = t.backgroundColor, r = void 0 === n ? 1579548 : n,
								o = t.backgroundAlpha, u = void 0 === o ? 1 : o, i = t.pixelRatio,
								c = void 0 === i ? 1 : i;
							if ("undefined" != typeof window) {
								var s = f.shift();
								return s || ( ( s = new a.WebGLRenderer({
									antialias: !1,
									alpha: !0
								}) ).outputEncoding = a.sRGBEncoding ), s.setPixelRatio(c), s.setClearColor(r, u), s.autoClear = !0, s
							}
						}({ pixelRatio: 1 === ( 0, d.getViewportScale )() ? window.devicePixelRatio : 1 });
						return u.five = new d.Five(o({ renderer: i }, e)), ( t.work || t.initialWork ) && u.five.load(t.work || t.initialWork, t.initialState, void 0, null === ( r = t.initialUserAction ) || void 0 === r || r), u.five.on("load", ( function () {
							var e;
							u.props.onWorkChange && u.props.onWorkChange(null === ( e = u.five ) || void 0 === e ? void 0 : e.work)
						} )), u.five.on("stateChange", ( function (e, t) {
							u.props.onStateChange && u.props.onStateChange(e, t)
						} )), u.five.on("currentStateChange", ( function (e, t) {
							u.props.onCurrentStateChange && u.props.onCurrentStateChange(e, t)
						} )), u.five.on("error", ( function (e) {
							u.props.onError ? u.props.onError(e) : console.warn(e.message)
						} )), u
					}
					
					return t(r, n), r.prototype.loadWork = function (e, t, n, r) {
						if (void 0 === r && ( r = !0 ), this.props.work) throw new Error("props 'work' is set in fiveProvider, if you need modify work internal, use 'initialWork' instead.");
						return this.five.load(e, t, n, r)
					}, r.prototype.shouldComponentUpdate = function (e) {
						var t, n;
						return e.work && e.work !== ( null === ( t = this.five ) || void 0 === t ? void 0 : t.work ) && ( null === ( n = this.five ) || void 0 === n || n.load(e.work, e.initialState) ), !0
					}, r.prototype.componentWillUnmount = function () {
						var e;
						this.five && ( this.five.dispose(), ( e = this.five.renderer ) && -1 === f.indexOf(e) && f.push(e), delete this.five )
					}, r.prototype.render = function () {
						var e = this;
						return i.createElement(c.Provider, {
							value: {
								five: this.five, loadWork: function () {
									for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
									return e.loadWork.apply(e, t)
								}
							}
						}, this.props.children)
					}, r
				}(i.Component)
			}
			
			var p = { display: "inline-block", overflow: "hidden" }, h = function (e) {
				var t = e.width, n = e.height, r = s(), u = i.createRef(), a = o({ width: t, height: n }, p);
				return i.useLayoutEffect(( function () {
					if (u.current && r.renderer) {
						if (null !== r.renderer.domElement.parentNode && r.renderer.domElement.parentNode !== u.current) throw new Error("There are more than 2 fiveCanvas in this context.");
						r.renderer.domElement.parentNode !== u.current && u.current.appendChild(r.renderer.domElement), r.camera.aspect = t / n, r.camera.updateProjectionMatrix(), r.renderer.setSize(t, n), r.needsRender = !0
					}
				} ), [t, n, u.current]), i.createElement("div", { ref: u, style: a })
			};
			
			function y () {
				return s()
			}
			
			function m (e, t) {
				var n = s(), r = [n];
				void 0 !== t && ( r = r.concat(t) ), i.useLayoutEffect(( function () {
					return e(n.scene)
				} ), r)
			}
			
			var S = m;
			
			function w () {
				var e = s(), t = l(), n = i.useState(( function () {
					return e.work
				} )), r = n[0], o = n[1];
				return i.useLayoutEffect(( function () {
					return e.on("load", ( function () {
						return o(e.work)
					} ))
				} ), [e]), [r, t]
			}
			
			function g (e) {
				return o({}, e.state)
			}
			
			function b () {
				var e = s(), t = i.useState(( function () {
					return g(e)
				} )), n = t[0], r = t[1], o = i.useCallback(( function (t, n, r) {
					void 0 === n && ( n = !1 ), void 0 === r && ( r = !0 );
					var o = "function" == typeof t ? t(e.getCurrentState()) : t;
					e.setState(o, n, r)
				} ), [e]);
				return i.useLayoutEffect(( function () {
					return e.on("stateChange", ( function () {
						return r(g(e))
					} ))
				} ), [e]), [n, o]
			}
			
			function C () {
				var e = s(), t = i.useState(( function () {
					return e.getCurrentState()
				} )), n = t[0], r = t[1], o = i.useCallback(( function (t, n, r) {
					void 0 === n && ( n = !1 ), void 0 === r && ( r = !0 );
					var o = "function" == typeof t ? t(e.getCurrentState()) : t;
					e.setState(o, n, r)
				} ), [e]);
				return i.useLayoutEffect(( function () {
					return e.on("currentStateChange", ( function () {
						return r(e.getCurrentState())
					} ))
				} ), [e]), [n, o]
			}
			
			function E () {
				var e = s(), t = i.useState(( function () {
					return e.getCurrentState()
				} )), n = t[0], r = t[1];
				return i.useLayoutEffect(( function () {
					return e.on("currentStateChange", ( function () {
						return r(e.getCurrentState())
					} ))
				} ), [e]), e.work ? e.work.observers[n.panoIndex] : null
			}
			
			function k (e, t, n) {
				var r = s(), o = [r, e];
				void 0 !== n && ( o = o.concat(n) ), i.useLayoutEffect(( function () {
					return r.on(e, t)
				} ), o)
			}
			
			function L () {
				var e = s();
				return {
					updateCamera: i.useCallback(( function (t, n) {
						return e.updateCamera(t, n)
					} ), [e]), initBasisLoader: i.useCallback(( function (t) {
						return e.initBasisLoader(t)
					} ), [e]), getPixels: i.useCallback(( function (t, n, r, o, u) {
						return e.getPixels(t, n, r, o, u)
					} ), [e]), render: i.useCallback(( function (t) {
						return e.render(t)
					} ), [e]), needsRender: i.useCallback(( function () {
						return e.needsRender = !0
					} ), [e]), preloadPano: i.useCallback(( function (t, n) {
						return e.preloadPano(t, n)
					} ), [e])
				}
			}
			
			function F () {
				var e = s(), t = i.useState(( function () {
					return Symbol()
				} )), n = ( t[0], t[1] );
				return i.useLayoutEffect(( function () {
					return e.on("cameraUpdate", ( function () {
						return n(Symbol())
					} ))
				} ), [e]), i.useCallback(( function (t, n) {
					return e.project2d(t, n)
				} ), [e])
			}
			
			function R (e) {
				var t = e.camera.getWorldDirection(new a.Vector3);
				return new a.Raycaster(e.camera.position, t)
			}
			
			function x () {
				var e = s(), t = i.useState(( function () {
					return R(e)
				} )), n = t[0], r = t[1];
				return i.useLayoutEffect(( function () {
					return e.on("cameraUpdate", ( function () {
						return r(R(e))
					} ))
				} ), [e]), n
			}
			
			function P (e) {
				return e.camera.getWorldDirection(new a.Vector3)
			}
			
			function V () {
				var e = s(), t = i.useState(( function () {
					return P(e)
				} )), n = t[0], r = t[1];
				return i.useLayoutEffect(( function () {
					return e.on("cameraUpdate", ( function () {
						return r(P(e))
					} ))
				} ), [e]), n
			}
			
			function O () {
				var e = s();
				return i.useCallback(( function (t) {
					return e.model.intersectRaycaster(t)
				} ), [e])
			}
			
			function j (e) {
				return e.model.empty ? "Empty" : "Loaded"
			}
			
			function M () {
				var e = s(), t = i.useState(( function () {
					return j(e)
				} )), n = t[0], r = t[1];
				return i.useLayoutEffect(( function () {
					return e.on("modelLoaded", ( function () {
						return r(j(e))
					} ))
				} ), [e]), n
			}
			
			function _ () {
				var e = s(), t = i.useState(e.model.shownFloor), n = t[0], r = t[1],
					o = i.useState(e.model.floorLength), u = o[0], a = o[1], f = i.useCallback(( function (t) {
						"number" == typeof t ? e.model.show(t) : e.model.show()
					} ), [e]);
				return i.useLayoutEffect(( function () {
					var t = [];
					return t.push(e.on("modelShownFloorChange", ( function () {
						return r(e.model.shownFloor)
					} ))), t.push(e.on("modelLoaded", ( function () {
						return a(e.model.floorLength)
					} ))), function () {
						for (var e; e = t.shift();) e()
					}
				} ), [e]), [n, u, f]
			}
			
			function W () {
				var e = s(), t = i.useState(e.helperVisible), n = t[0], r = t[1], o = i.useCallback(( function (t) {
					e.helperVisible = t
				} ), [e]);
				return i.useLayoutEffect(( function () {
					return e.on("helpersVisibleChange", ( function (e) {
						return r(e)
					} ))
				} ), [e]), [n, o]
			}
			
			var T = "$five";
			
			function D (e, t) {
				return t.indexOf(e) >= 0
			}
			
			function N (e, t) {
				for (var n = 0, r = Object.keys(t); n < r.length; n++) {
					var o = r[n];
					void 0 !== t[o] && ( e[o] = t[o] )
				}
			}
			
			function H (e, t) {
				if (D("loadWork", t)) return e
			}
			
			function I (e, t) {
				if (D("setState", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.setState.apply(e, t)
				}
			}
			
			function U (e, t) {
				if (D("on", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.on.apply(e, t)
				}
			}
			
			function A (e, t) {
				if (D("on", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.once.apply(e, t)
				}
			}
			
			function B (e, t) {
				if (D("off", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.off.apply(e, t)
				}
			}
			
			function K (e, t) {
				if (D("intersectRaycaster", t)) return function () {
					for (var t, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
					return ( t = e.model ).intersectRaycaster.apply(t, n)
				}
			}
			
			function G (e, t) {
				if (D("project2d", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.project2d.apply(e, t)
				}
			}
			
			function $ (e, t) {
				if (D("updateCamera", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.updateCamera.apply(e, t)
				}
			}
			
			function z (e, t) {
				if (D("initBasisLoader", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.initBasisLoader.apply(e, t)
				}
			}
			
			function J (e, t) {
				if (D("getPixels", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.getPixels.apply(e, t)
				}
			}
			
			function q (e, t) {
				if (D("render", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.render.apply(e, t)
				}
			}
			
			function Q (e, t) {
				if (D("needsRender", t)) return function () {
					e.needsRender = !0
				}
			}
			
			function X (e, t) {
				if (D("preloadPano", t)) return function () {
					for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
					return e.preloadPano.apply(e, t)
				}
			}
			
			function Y (e, t) {
				if (D("showFloor", t)) return function (t) {
					"number" == typeof t ? e.model.show(t) : e.model.show()
				}
			}
			
			function Z (e, t) {
				if (D("toggleHelperVisible", t)) return function (t) {
					e.helperVisible = t
				}
			}
			
			function ee (e) {
				return function (t) {
					return i.forwardRef(( function (n, r) {
						var u = s(), f = l(), c = function (e, t) {
							return [D("unsafe__fiveInstance", t) ? e : void 0]
						}(u, e)[0], d = function (e, t) {
							var n = D("state", t), r = i.useState(Symbol()), u = r[0], a = r[1],
								f = i.useMemo(( function () {
									if (n) return o({}, e.state)
								} ), [e, u]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("stateChange", ( function () {
									return a(Symbol())
								} ))
							} ), [e]), [f, u]
						}(u, e), v = d[0], p = d[1], h = function (e, t) {
							var n = D("currentState", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.getCurrentState()
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("currentStateChange", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), y = h[0], m = h[1], S = function (e, t) {
							var n = D("currentObserver", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.getCurrentState()
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("currentStateChange", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a ? e.work ? e.work.observers[a.panoIndex] : null : void 0, o]
						}(u, e), w = S[0], g = S[1], b = function (e, t) {
							var n = D("work", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.work
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("load", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), C = b[0], E = b[1], k = function (e, t) {
							var n = D("model", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.model
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("modelLoaded", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), L = k[0], F = k[1], R = function (e, t) {
							return [D("scene", t) ? e.scene : void 0]
						}(u, e)[0], x = function (e, t) {
							var n = D("cameraDirection", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								f = i.useMemo(( function () {
									if (n) return e.camera.getWorldDirection(new a.Vector3)
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("cameraUpdate", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [f, o]
						}(u, e), P = x[0], V = x[1], O = function (e, t) {
							var n = D("cameraRaycaster", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								f = i.useMemo(( function () {
									if (n) {
										var t = e.camera.getWorldDirection(new a.Vector3);
										return new a.Raycaster(e.camera.position, t)
									}
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("cameraUpdate", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [f, o]
						}(u, e), j = O[0], M = O[1], _ = function (e, t) {
							var n = D("modelReadyState", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.model.empty ? "Empty" : "Loaded"
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("modelLoaded", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), W = _[0], T = _[1], ee = function (e, t) {
							var n = D("shownFloor", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.model.shownFloor
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("modelShownFloorChange", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), te = ee[0], ne = ee[1], re = function (e, t) {
							var n = D("totalFloorLength", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.model.hasFloors()
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("modelLoaded", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), oe = re[0], ue = re[1], ie = function (e, t) {
							var n = D("helperVisible", t), r = i.useState(Symbol()), o = r[0], u = r[1],
								a = i.useMemo(( function () {
									if (n) return e.helperVisible
								} ), [e, o]);
							return i.useLayoutEffect(( function () {
								if (n) return e.on("helpersVisibleChange", ( function () {
									return u(Symbol())
								} ))
							} ), [e]), [a, o]
						}(u, e), ae = ie[0], fe = ie[1], ce = i.useMemo(( function () {
							var t = {};
							return N(t, {
								setState: I(u, e),
								loadWork: H(f, e),
								on: U(u, e),
								once: A(u, e),
								off: B(u, e),
								intersectRaycaster: K(u, e),
								project2d: G(u, e),
								updateCamera: $(u, e),
								initBasisLoader: z(u, e),
								getPixels: J(u, e),
								render: q(u, e),
								needsRender: Q(u, e),
								preloadPano: X(u, e),
								showFloor: Y(u, e),
								toggleHelperVisible: Z(u, e)
							}), t
						} ), [u, f]), se = i.useMemo(( function () {
							var e = o({}, ce);
							return N(e, {
								unsafe__fiveInstance: c,
								state: v,
								currentState: y,
								currentObserver: w,
								work: C,
								model: L,
								scene: R,
								cameraDirection: P,
								cameraRaycaster: j,
								modelReadyState: W,
								shownFloor: te,
								totalFloorLength: oe,
								helperVisible: ae
							}), e
						} ), [u, ce, p, m, g, E, F, V, M, T, ne, ue, fe]);
						return i.createElement(t, o({ ref: r, $five: se }, n))
					} ))
				}
			}
			
			function te () {
				for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
				return e
			}
			
			function ne (e, t) {
				for (var n = {}, r = t.length, o = -1; ++o < r;) {
					var u = t[o];
					u in e && ( n[u] = e[u] )
				}
				return n
			}
			
			function re (e, t) {
				for (var n = 0; n < e.length; n++) for (var r = 0; r < t.length; r++) if (e[n] === t[r]) return !0;
				return !1
			}
			
			var oe = function () {
				function e (e, t) {
					this.values = e, this.listeners = [], this.onValuesChange = t
				}
				
				return e.prototype.on = function (e, t) {
					var n = this, r = [e, t];
					return this.listeners.push(r), function () {
						var e = n.listeners.indexOf(r);
						e >= 0 && n.listeners.splice(e, 1)
					}
				}, e.prototype.getValues = function (e) {
					return ne(this.values, e)
				}, e.prototype.setValues = function (e, t) {
					var n, r, u = [];
					for (var i in t) e.indexOf(i) >= 0 && ( n = t[i], r = this.values[i], !( "number" == typeof n && "number" == typeof r && isNaN(n) && isNaN(r) || n === r ) ) && u.push(i);
					if (0 !== u.length) {
						for (var a = o({}, this.values), f = 0, c = u; f < c.length; f++) {
							var s = c[f];
							this.values[s] = t[s]
						}
						this.onValuesChange && this.onValuesChange(this.values, a);
						for (var l = 0, d = this.listeners; l < d.length; l++) {
							var v = d[l], p = v[0], h = v[1];
							if (re(p, u)) {
								var y = ne(a, p);
								h(ne(this.values, p), y)
							}
						}
					}
				}, e
			}();
			
			function ue (e) {
				var n = i.createContext(null);
				return {
					useStore: function (e) {
						var t = i.useContext(n);
						if (null === t) throw new Error("StoreProvider never found.");
						var r = i.useRef(!0), o = i.useState(t.getValues(e)), a = o[0], f = o[1], c = u([t], e, !0);
						return i.useLayoutEffect(( function () {
							return r.current ? r.current = !1 : f(t.getValues(e)), t.on(e, ( function (e) {
								return f(e)
							} ))
						} ), c), [a, i.useCallback(( function (n) {
							return t.setValues(e, n)
						} ), c)]
					}, useStoreSetter: function (e) {
						var t = i.useContext(n);
						if (null === t) throw new Error("StoreProvider never found.");
						return i.useCallback(( function (n) {
							return t.setValues(e, n)
						} ), u([t], e, !0))
					}, watchStore: function (e, t, r) {
						var o = i.useContext(n);
						if (null === o) throw new Error("StoreProvider never found.");
						var a = u([o], e, !0);
						void 0 !== r && ( a = a.concat(r) ), i.useLayoutEffect(( function () {
							return o.on(e, t)
						} ), a)
					}, useStoreAction: function (t) {
						var r = i.useContext(n);
						if (null === r) throw new Error("StoreProvider never found.");
						return i.useCallback(( function () {
							for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
							var i = e[t], a = i[0], f = i.slice(1), c = function () {
								return r.getValues(f)
							}, s = function (e) {
								return r.setValues(f, e)
							};
							return a.apply(void 0, u([c, s], n, !1))
						} ), [])
					}, StoreProvider: function (e) {
						function r (t) {
							var n = e.call(this, t) || this;
							return n.store = new oe(t.initialValue, ( function () {
								for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
								n.props.onValuesChange && ( e = n.props ).onValuesChange.apply(e, t)
							} )), n
						}
						
						return t(r, e), r.prototype.shouldComponentUpdate = function (e) {
							return e.children !== this.props.children
						}, r.prototype.render = function () {
							return i.createElement(n.Provider, { value: this.store }, this.props.children)
						}, r
					}(i.Component)
				}
			}
		} )(), r
	} )()
} ));
