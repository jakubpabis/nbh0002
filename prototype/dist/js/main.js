/*!
 * Bootstrap v4.6.1 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
!(function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? e(exports, require('jquery'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'jquery'], e)
    : e(
        ((t =
          'undefined' != typeof globalThis ? globalThis : t || self).bootstrap =
          {}),
        t.jQuery
      );
})(this, function (t, e) {
  'use strict';
  function n(t) {
    return t && 'object' == typeof t && 'default' in t ? t : { default: t };
  }
  var i = n(e);
  function o(t, e) {
    for (var n = 0; n < e.length; n++) {
      var i = e[n];
      (i.enumerable = i.enumerable || !1),
        (i.configurable = !0),
        'value' in i && (i.writable = !0),
        Object.defineProperty(t, i.key, i);
    }
  }
  function r(t, e, n) {
    return e && o(t.prototype, e), n && o(t, n), t;
  }
  function a() {
    return (
      (a =
        Object.assign ||
        function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
              Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
          }
          return t;
        }),
      a.apply(this, arguments)
    );
  }
  function s(t, e) {
    return (
      (s =
        Object.setPrototypeOf ||
        function (t, e) {
          return (t.__proto__ = e), t;
        }),
      s(t, e)
    );
  }
  var l = 'transitionend';
  var u = {
    TRANSITION_END: 'bsTransitionEnd',
    getUID: function (t) {
      do {
        t += ~~(1e6 * Math.random());
      } while (document.getElementById(t));
      return t;
    },
    getSelectorFromElement: function (t) {
      var e = t.getAttribute('data-target');
      if (!e || '#' === e) {
        var n = t.getAttribute('href');
        e = n && '#' !== n ? n.trim() : '';
      }
      try {
        return document.querySelector(e) ? e : null;
      } catch (t) {
        return null;
      }
    },
    getTransitionDurationFromElement: function (t) {
      if (!t) return 0;
      var e = i.default(t).css('transition-duration'),
        n = i.default(t).css('transition-delay'),
        o = parseFloat(e),
        r = parseFloat(n);
      return o || r
        ? ((e = e.split(',')[0]),
          (n = n.split(',')[0]),
          1e3 * (parseFloat(e) + parseFloat(n)))
        : 0;
    },
    reflow: function (t) {
      return t.offsetHeight;
    },
    triggerTransitionEnd: function (t) {
      i.default(t).trigger(l);
    },
    supportsTransitionEnd: function () {
      return Boolean(l);
    },
    isElement: function (t) {
      return (t[0] || t).nodeType;
    },
    typeCheckConfig: function (t, e, n) {
      for (var i in n)
        if (Object.prototype.hasOwnProperty.call(n, i)) {
          var o = n[i],
            r = e[i],
            a =
              r && u.isElement(r)
                ? 'element'
                : null === (s = r) || 'undefined' == typeof s
                ? '' + s
                : {}.toString
                    .call(s)
                    .match(/\s([a-z]+)/i)[1]
                    .toLowerCase();
          if (!new RegExp(o).test(a))
            throw new Error(
              t.toUpperCase() +
                ': Option "' +
                i +
                '" provided type "' +
                a +
                '" but expected type "' +
                o +
                '".'
            );
        }
      var s;
    },
    findShadowRoot: function (t) {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        var e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot
        ? t
        : t.parentNode
        ? u.findShadowRoot(t.parentNode)
        : null;
    },
    jQueryDetection: function () {
      if ('undefined' == typeof i.default)
        throw new TypeError(
          "Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript."
        );
      var t = i.default.fn.jquery.split(' ')[0].split('.');
      if (
        (t[0] < 2 && t[1] < 9) ||
        (1 === t[0] && 9 === t[1] && t[2] < 1) ||
        t[0] >= 4
      )
        throw new Error(
          "Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0"
        );
    },
  };
  u.jQueryDetection(),
    (i.default.fn.emulateTransitionEnd = function (t) {
      var e = this,
        n = !1;
      return (
        i.default(this).one(u.TRANSITION_END, function () {
          n = !0;
        }),
        setTimeout(function () {
          n || u.triggerTransitionEnd(e);
        }, t),
        this
      );
    }),
    (i.default.event.special[u.TRANSITION_END] = {
      bindType: l,
      delegateType: l,
      handle: function (t) {
        if (i.default(t.target).is(this))
          return t.handleObj.handler.apply(this, arguments);
      },
    });
  var f = 'bs.alert',
    d = i.default.fn.alert,
    c = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.close = function (t) {
          var e = this._element;
          t && (e = this._getRootElement(t)),
            this._triggerCloseEvent(e).isDefaultPrevented() ||
              this._removeElement(e);
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, f), (this._element = null);
        }),
        (e._getRootElement = function (t) {
          var e = u.getSelectorFromElement(t),
            n = !1;
          return (
            e && (n = document.querySelector(e)),
            n || (n = i.default(t).closest('.alert')[0]),
            n
          );
        }),
        (e._triggerCloseEvent = function (t) {
          var e = i.default.Event('close.bs.alert');
          return i.default(t).trigger(e), e;
        }),
        (e._removeElement = function (t) {
          var e = this;
          if (
            (i.default(t).removeClass('show'), i.default(t).hasClass('fade'))
          ) {
            var n = u.getTransitionDurationFromElement(t);
            i.default(t)
              .one(u.TRANSITION_END, function (n) {
                return e._destroyElement(t, n);
              })
              .emulateTransitionEnd(n);
          } else this._destroyElement(t);
        }),
        (e._destroyElement = function (t) {
          i.default(t).detach().trigger('closed.bs.alert').remove();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(f);
            o || ((o = new t(this)), n.data(f, o)), 'close' === e && o[e](this);
          });
        }),
        (t._handleDismiss = function (t) {
          return function (e) {
            e && e.preventDefault(), t.close(this);
          };
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.alert.data-api',
      '[data-dismiss="alert"]',
      c._handleDismiss(new c())
    ),
    (i.default.fn.alert = c._jQueryInterface),
    (i.default.fn.alert.Constructor = c),
    (i.default.fn.alert.noConflict = function () {
      return (i.default.fn.alert = d), c._jQueryInterface;
    });
  var h = 'bs.button',
    p = i.default.fn.button,
    m = 'active',
    g = '[data-toggle^="button"]',
    _ = 'input:not([type="hidden"])',
    v = '.btn',
    b = (function () {
      function t(t) {
        (this._element = t), (this.shouldAvoidTriggerChange = !1);
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          var t = !0,
            e = !0,
            n = i.default(this._element).closest('[data-toggle="buttons"]')[0];
          if (n) {
            var o = this._element.querySelector(_);
            if (o) {
              if ('radio' === o.type)
                if (o.checked && this._element.classList.contains(m)) t = !1;
                else {
                  var r = n.querySelector('.active');
                  r && i.default(r).removeClass(m);
                }
              t &&
                (('checkbox' !== o.type && 'radio' !== o.type) ||
                  (o.checked = !this._element.classList.contains(m)),
                this.shouldAvoidTriggerChange ||
                  i.default(o).trigger('change')),
                o.focus(),
                (e = !1);
            }
          }
          this._element.hasAttribute('disabled') ||
            this._element.classList.contains('disabled') ||
            (e &&
              this._element.setAttribute(
                'aria-pressed',
                !this._element.classList.contains(m)
              ),
            t && i.default(this._element).toggleClass(m));
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, h), (this._element = null);
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this),
              r = o.data(h);
            r || ((r = new t(this)), o.data(h, r)),
              (r.shouldAvoidTriggerChange = n),
              'toggle' === e && r[e]();
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on('click.bs.button.data-api', g, function (t) {
      var e = t.target,
        n = e;
      if (
        (i.default(e).hasClass('btn') || (e = i.default(e).closest(v)[0]),
        !e || e.hasAttribute('disabled') || e.classList.contains('disabled'))
      )
        t.preventDefault();
      else {
        var o = e.querySelector(_);
        if (
          o &&
          (o.hasAttribute('disabled') || o.classList.contains('disabled'))
        )
          return void t.preventDefault();
        ('INPUT' !== n.tagName && 'LABEL' === e.tagName) ||
          b._jQueryInterface.call(
            i.default(e),
            'toggle',
            'INPUT' === n.tagName
          );
      }
    })
    .on('focus.bs.button.data-api blur.bs.button.data-api', g, function (t) {
      var e = i.default(t.target).closest(v)[0];
      i.default(e).toggleClass('focus', /^focus(in)?$/.test(t.type));
    }),
    i.default(window).on('load.bs.button.data-api', function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-toggle="buttons"] .btn')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var i = t[e],
          o = i.querySelector(_);
        o.checked || o.hasAttribute('checked')
          ? i.classList.add(m)
          : i.classList.remove(m);
      }
      for (
        var r = 0,
          a = (t = [].slice.call(
            document.querySelectorAll('[data-toggle="button"]')
          )).length;
        r < a;
        r++
      ) {
        var s = t[r];
        'true' === s.getAttribute('aria-pressed')
          ? s.classList.add(m)
          : s.classList.remove(m);
      }
    }),
    (i.default.fn.button = b._jQueryInterface),
    (i.default.fn.button.Constructor = b),
    (i.default.fn.button.noConflict = function () {
      return (i.default.fn.button = p), b._jQueryInterface;
    });
  var y = 'carousel',
    E = 'bs.carousel',
    w = i.default.fn[y],
    T = 'active',
    C = 'next',
    S = 'prev',
    N = 'slid.bs.carousel',
    D = '.active.carousel-item',
    A = {
      interval: 5e3,
      keyboard: !0,
      slide: !1,
      pause: 'hover',
      wrap: !0,
      touch: !0,
    },
    k = {
      interval: '(number|boolean)',
      keyboard: 'boolean',
      slide: '(boolean|string)',
      pause: '(string|boolean)',
      wrap: 'boolean',
      touch: 'boolean',
    },
    I = { TOUCH: 'touch', PEN: 'pen' },
    O = (function () {
      function t(t, e) {
        (this._items = null),
          (this._interval = null),
          (this._activeElement = null),
          (this._isPaused = !1),
          (this._isSliding = !1),
          (this.touchTimeout = null),
          (this.touchStartX = 0),
          (this.touchDeltaX = 0),
          (this._config = this._getConfig(e)),
          (this._element = t),
          (this._indicatorsElement = this._element.querySelector(
            '.carousel-indicators'
          )),
          (this._touchSupported =
            'ontouchstart' in document.documentElement ||
            navigator.maxTouchPoints > 0),
          (this._pointerEvent = Boolean(
            window.PointerEvent || window.MSPointerEvent
          )),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.next = function () {
          this._isSliding || this._slide(C);
        }),
        (e.nextWhenVisible = function () {
          var t = i.default(this._element);
          !document.hidden &&
            t.is(':visible') &&
            'hidden' !== t.css('visibility') &&
            this.next();
        }),
        (e.prev = function () {
          this._isSliding || this._slide(S);
        }),
        (e.pause = function (t) {
          t || (this._isPaused = !0),
            this._element.querySelector(
              '.carousel-item-next, .carousel-item-prev'
            ) && (u.triggerTransitionEnd(this._element), this.cycle(!0)),
            clearInterval(this._interval),
            (this._interval = null);
        }),
        (e.cycle = function (t) {
          t || (this._isPaused = !1),
            this._interval &&
              (clearInterval(this._interval), (this._interval = null)),
            this._config.interval &&
              !this._isPaused &&
              (this._updateInterval(),
              (this._interval = setInterval(
                (document.visibilityState
                  ? this.nextWhenVisible
                  : this.next
                ).bind(this),
                this._config.interval
              )));
        }),
        (e.to = function (t) {
          var e = this;
          this._activeElement = this._element.querySelector(D);
          var n = this._getItemIndex(this._activeElement);
          if (!(t > this._items.length - 1 || t < 0))
            if (this._isSliding)
              i.default(this._element).one(N, function () {
                return e.to(t);
              });
            else {
              if (n === t) return this.pause(), void this.cycle();
              var o = t > n ? C : S;
              this._slide(o, this._items[t]);
            }
        }),
        (e.dispose = function () {
          i.default(this._element).off('.bs.carousel'),
            i.default.removeData(this._element, E),
            (this._items = null),
            (this._config = null),
            (this._element = null),
            (this._interval = null),
            (this._isPaused = null),
            (this._isSliding = null),
            (this._activeElement = null),
            (this._indicatorsElement = null);
        }),
        (e._getConfig = function (t) {
          return (t = a({}, A, t)), u.typeCheckConfig(y, t, k), t;
        }),
        (e._handleSwipe = function () {
          var t = Math.abs(this.touchDeltaX);
          if (!(t <= 40)) {
            var e = t / this.touchDeltaX;
            (this.touchDeltaX = 0), e > 0 && this.prev(), e < 0 && this.next();
          }
        }),
        (e._addEventListeners = function () {
          var t = this;
          this._config.keyboard &&
            i.default(this._element).on('keydown.bs.carousel', function (e) {
              return t._keydown(e);
            }),
            'hover' === this._config.pause &&
              i
                .default(this._element)
                .on('mouseenter.bs.carousel', function (e) {
                  return t.pause(e);
                })
                .on('mouseleave.bs.carousel', function (e) {
                  return t.cycle(e);
                }),
            this._config.touch && this._addTouchEventListeners();
        }),
        (e._addTouchEventListeners = function () {
          var t = this;
          if (this._touchSupported) {
            var e = function (e) {
                t._pointerEvent && I[e.originalEvent.pointerType.toUpperCase()]
                  ? (t.touchStartX = e.originalEvent.clientX)
                  : t._pointerEvent ||
                    (t.touchStartX = e.originalEvent.touches[0].clientX);
              },
              n = function (e) {
                t._pointerEvent &&
                  I[e.originalEvent.pointerType.toUpperCase()] &&
                  (t.touchDeltaX = e.originalEvent.clientX - t.touchStartX),
                  t._handleSwipe(),
                  'hover' === t._config.pause &&
                    (t.pause(),
                    t.touchTimeout && clearTimeout(t.touchTimeout),
                    (t.touchTimeout = setTimeout(function (e) {
                      return t.cycle(e);
                    }, 500 + t._config.interval)));
              };
            i
              .default(this._element.querySelectorAll('.carousel-item img'))
              .on('dragstart.bs.carousel', function (t) {
                return t.preventDefault();
              }),
              this._pointerEvent
                ? (i
                    .default(this._element)
                    .on('pointerdown.bs.carousel', function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on('pointerup.bs.carousel', function (t) {
                      return n(t);
                    }),
                  this._element.classList.add('pointer-event'))
                : (i
                    .default(this._element)
                    .on('touchstart.bs.carousel', function (t) {
                      return e(t);
                    }),
                  i
                    .default(this._element)
                    .on('touchmove.bs.carousel', function (e) {
                      return (function (e) {
                        t.touchDeltaX =
                          e.originalEvent.touches &&
                          e.originalEvent.touches.length > 1
                            ? 0
                            : e.originalEvent.touches[0].clientX -
                              t.touchStartX;
                      })(e);
                    }),
                  i
                    .default(this._element)
                    .on('touchend.bs.carousel', function (t) {
                      return n(t);
                    }));
          }
        }),
        (e._keydown = function (t) {
          if (!/input|textarea/i.test(t.target.tagName))
            switch (t.which) {
              case 37:
                t.preventDefault(), this.prev();
                break;
              case 39:
                t.preventDefault(), this.next();
            }
        }),
        (e._getItemIndex = function (t) {
          return (
            (this._items =
              t && t.parentNode
                ? [].slice.call(t.parentNode.querySelectorAll('.carousel-item'))
                : []),
            this._items.indexOf(t)
          );
        }),
        (e._getItemByDirection = function (t, e) {
          var n = t === C,
            i = t === S,
            o = this._getItemIndex(e),
            r = this._items.length - 1;
          if (((i && 0 === o) || (n && o === r)) && !this._config.wrap)
            return e;
          var a = (o + (t === S ? -1 : 1)) % this._items.length;
          return -1 === a
            ? this._items[this._items.length - 1]
            : this._items[a];
        }),
        (e._triggerSlideEvent = function (t, e) {
          var n = this._getItemIndex(t),
            o = this._getItemIndex(this._element.querySelector(D)),
            r = i.default.Event('slide.bs.carousel', {
              relatedTarget: t,
              direction: e,
              from: o,
              to: n,
            });
          return i.default(this._element).trigger(r), r;
        }),
        (e._setActiveIndicatorElement = function (t) {
          if (this._indicatorsElement) {
            var e = [].slice.call(
              this._indicatorsElement.querySelectorAll('.active')
            );
            i.default(e).removeClass(T);
            var n = this._indicatorsElement.children[this._getItemIndex(t)];
            n && i.default(n).addClass(T);
          }
        }),
        (e._updateInterval = function () {
          var t = this._activeElement || this._element.querySelector(D);
          if (t) {
            var e = parseInt(t.getAttribute('data-interval'), 10);
            e
              ? ((this._config.defaultInterval =
                  this._config.defaultInterval || this._config.interval),
                (this._config.interval = e))
              : (this._config.interval =
                  this._config.defaultInterval || this._config.interval);
          }
        }),
        (e._slide = function (t, e) {
          var n,
            o,
            r,
            a = this,
            s = this._element.querySelector(D),
            l = this._getItemIndex(s),
            f = e || (s && this._getItemByDirection(t, s)),
            d = this._getItemIndex(f),
            c = Boolean(this._interval);
          if (
            (t === C
              ? ((n = 'carousel-item-left'),
                (o = 'carousel-item-next'),
                (r = 'left'))
              : ((n = 'carousel-item-right'),
                (o = 'carousel-item-prev'),
                (r = 'right')),
            f && i.default(f).hasClass(T))
          )
            this._isSliding = !1;
          else if (
            !this._triggerSlideEvent(f, r).isDefaultPrevented() &&
            s &&
            f
          ) {
            (this._isSliding = !0),
              c && this.pause(),
              this._setActiveIndicatorElement(f),
              (this._activeElement = f);
            var h = i.default.Event(N, {
              relatedTarget: f,
              direction: r,
              from: l,
              to: d,
            });
            if (i.default(this._element).hasClass('slide')) {
              i.default(f).addClass(o),
                u.reflow(f),
                i.default(s).addClass(n),
                i.default(f).addClass(n);
              var p = u.getTransitionDurationFromElement(s);
              i.default(s)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(f)
                    .removeClass(n + ' ' + o)
                    .addClass(T),
                    i.default(s).removeClass('active ' + o + ' ' + n),
                    (a._isSliding = !1),
                    setTimeout(function () {
                      return i.default(a._element).trigger(h);
                    }, 0);
                })
                .emulateTransitionEnd(p);
            } else
              i.default(s).removeClass(T),
                i.default(f).addClass(T),
                (this._isSliding = !1),
                i.default(this._element).trigger(h);
            c && this.cycle();
          }
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(E),
              o = a({}, A, i.default(this).data());
            'object' == typeof e && (o = a({}, o, e));
            var r = 'string' == typeof e ? e : o.slide;
            if (
              (n || ((n = new t(this, o)), i.default(this).data(E, n)),
              'number' == typeof e)
            )
              n.to(e);
            else if ('string' == typeof r) {
              if ('undefined' == typeof n[r])
                throw new TypeError('No method named "' + r + '"');
              n[r]();
            } else o.interval && o.ride && (n.pause(), n.cycle());
          });
        }),
        (t._dataApiClickHandler = function (e) {
          var n = u.getSelectorFromElement(this);
          if (n) {
            var o = i.default(n)[0];
            if (o && i.default(o).hasClass('carousel')) {
              var r = a({}, i.default(o).data(), i.default(this).data()),
                s = this.getAttribute('data-slide-to');
              s && (r.interval = !1),
                t._jQueryInterface.call(i.default(o), r),
                s && i.default(o).data(E).to(s),
                e.preventDefault();
            }
          }
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return A;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.carousel.data-api',
      '[data-slide], [data-slide-to]',
      O._dataApiClickHandler
    ),
    i.default(window).on('load.bs.carousel.data-api', function () {
      for (
        var t = [].slice.call(
            document.querySelectorAll('[data-ride="carousel"]')
          ),
          e = 0,
          n = t.length;
        e < n;
        e++
      ) {
        var o = i.default(t[e]);
        O._jQueryInterface.call(o, o.data());
      }
    }),
    (i.default.fn[y] = O._jQueryInterface),
    (i.default.fn[y].Constructor = O),
    (i.default.fn[y].noConflict = function () {
      return (i.default.fn[y] = w), O._jQueryInterface;
    });
  var x = 'collapse',
    j = 'bs.collapse',
    L = i.default.fn[x],
    P = 'show',
    F = 'collapse',
    R = 'collapsing',
    H = 'collapsed',
    M = 'width',
    q = '[data-toggle="collapse"]',
    B = { toggle: !0, parent: '' },
    Q = { toggle: 'boolean', parent: '(string|element)' },
    W = (function () {
      function t(t, e) {
        (this._isTransitioning = !1),
          (this._element = t),
          (this._config = this._getConfig(e)),
          (this._triggerArray = [].slice.call(
            document.querySelectorAll(
              '[data-toggle="collapse"][href="#' +
                t.id +
                '"],[data-toggle="collapse"][data-target="#' +
                t.id +
                '"]'
            )
          ));
        for (
          var n = [].slice.call(document.querySelectorAll(q)),
            i = 0,
            o = n.length;
          i < o;
          i++
        ) {
          var r = n[i],
            a = u.getSelectorFromElement(r),
            s = [].slice
              .call(document.querySelectorAll(a))
              .filter(function (e) {
                return e === t;
              });
          null !== a &&
            s.length > 0 &&
            ((this._selector = a), this._triggerArray.push(r));
        }
        (this._parent = this._config.parent ? this._getParent() : null),
          this._config.parent ||
            this._addAriaAndCollapsedClass(this._element, this._triggerArray),
          this._config.toggle && this.toggle();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          i.default(this._element).hasClass(P) ? this.hide() : this.show();
        }),
        (e.show = function () {
          var e,
            n,
            o = this;
          if (
            !(
              this._isTransitioning ||
              i.default(this._element).hasClass(P) ||
              (this._parent &&
                0 ===
                  (e = [].slice
                    .call(this._parent.querySelectorAll('.show, .collapsing'))
                    .filter(function (t) {
                      return 'string' == typeof o._config.parent
                        ? t.getAttribute('data-parent') === o._config.parent
                        : t.classList.contains(F);
                    })).length &&
                (e = null),
              e &&
                (n = i.default(e).not(this._selector).data(j)) &&
                n._isTransitioning)
            )
          ) {
            var r = i.default.Event('show.bs.collapse');
            if (
              (i.default(this._element).trigger(r), !r.isDefaultPrevented())
            ) {
              e &&
                (t._jQueryInterface.call(
                  i.default(e).not(this._selector),
                  'hide'
                ),
                n || i.default(e).data(j, null));
              var a = this._getDimension();
              i.default(this._element).removeClass(F).addClass(R),
                (this._element.style[a] = 0),
                this._triggerArray.length &&
                  i
                    .default(this._triggerArray)
                    .removeClass(H)
                    .attr('aria-expanded', !0),
                this.setTransitioning(!0);
              var s = 'scroll' + (a[0].toUpperCase() + a.slice(1)),
                l = u.getTransitionDurationFromElement(this._element);
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  i
                    .default(o._element)
                    .removeClass(R)
                    .addClass('collapse show'),
                    (o._element.style[a] = ''),
                    o.setTransitioning(!1),
                    i.default(o._element).trigger('shown.bs.collapse');
                })
                .emulateTransitionEnd(l),
                (this._element.style[a] = this._element[s] + 'px');
            }
          }
        }),
        (e.hide = function () {
          var t = this;
          if (!this._isTransitioning && i.default(this._element).hasClass(P)) {
            var e = i.default.Event('hide.bs.collapse');
            if (
              (i.default(this._element).trigger(e), !e.isDefaultPrevented())
            ) {
              var n = this._getDimension();
              (this._element.style[n] =
                this._element.getBoundingClientRect()[n] + 'px'),
                u.reflow(this._element),
                i
                  .default(this._element)
                  .addClass(R)
                  .removeClass('collapse show');
              var o = this._triggerArray.length;
              if (o > 0)
                for (var r = 0; r < o; r++) {
                  var a = this._triggerArray[r],
                    s = u.getSelectorFromElement(a);
                  null !== s &&
                    (i
                      .default([].slice.call(document.querySelectorAll(s)))
                      .hasClass(P) ||
                      i.default(a).addClass(H).attr('aria-expanded', !1));
                }
              this.setTransitioning(!0), (this._element.style[n] = '');
              var l = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, function () {
                  t.setTransitioning(!1),
                    i
                      .default(t._element)
                      .removeClass(R)
                      .addClass(F)
                      .trigger('hidden.bs.collapse');
                })
                .emulateTransitionEnd(l);
            }
          }
        }),
        (e.setTransitioning = function (t) {
          this._isTransitioning = t;
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, j),
            (this._config = null),
            (this._parent = null),
            (this._element = null),
            (this._triggerArray = null),
            (this._isTransitioning = null);
        }),
        (e._getConfig = function (t) {
          return (
            ((t = a({}, B, t)).toggle = Boolean(t.toggle)),
            u.typeCheckConfig(x, t, Q),
            t
          );
        }),
        (e._getDimension = function () {
          return i.default(this._element).hasClass(M) ? M : 'height';
        }),
        (e._getParent = function () {
          var e,
            n = this;
          u.isElement(this._config.parent)
            ? ((e = this._config.parent),
              'undefined' != typeof this._config.parent.jquery &&
                (e = this._config.parent[0]))
            : (e = document.querySelector(this._config.parent));
          var o =
              '[data-toggle="collapse"][data-parent="' +
              this._config.parent +
              '"]',
            r = [].slice.call(e.querySelectorAll(o));
          return (
            i.default(r).each(function (e, i) {
              n._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i]);
            }),
            e
          );
        }),
        (e._addAriaAndCollapsedClass = function (t, e) {
          var n = i.default(t).hasClass(P);
          e.length && i.default(e).toggleClass(H, !n).attr('aria-expanded', n);
        }),
        (t._getTargetFromElement = function (t) {
          var e = u.getSelectorFromElement(t);
          return e ? document.querySelector(e) : null;
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(j),
              r = a({}, B, n.data(), 'object' == typeof e && e ? e : {});
            if (
              (!o &&
                r.toggle &&
                'string' == typeof e &&
                /show|hide/.test(e) &&
                (r.toggle = !1),
              o || ((o = new t(this, r)), n.data(j, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return B;
            },
          },
        ]),
        t
      );
    })();
  i.default(document).on('click.bs.collapse.data-api', q, function (t) {
    'A' === t.currentTarget.tagName && t.preventDefault();
    var e = i.default(this),
      n = u.getSelectorFromElement(this),
      o = [].slice.call(document.querySelectorAll(n));
    i.default(o).each(function () {
      var t = i.default(this),
        n = t.data(j) ? 'toggle' : e.data();
      W._jQueryInterface.call(t, n);
    });
  }),
    (i.default.fn[x] = W._jQueryInterface),
    (i.default.fn[x].Constructor = W),
    (i.default.fn[x].noConflict = function () {
      return (i.default.fn[x] = L), W._jQueryInterface;
    });
  var U =
      'undefined' != typeof window &&
      'undefined' != typeof document &&
      'undefined' != typeof navigator,
    V = (function () {
      for (var t = ['Edge', 'Trident', 'Firefox'], e = 0; e < t.length; e += 1)
        if (U && navigator.userAgent.indexOf(t[e]) >= 0) return 1;
      return 0;
    })(),
    Y =
      U && window.Promise
        ? function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                window.Promise.resolve().then(function () {
                  (e = !1), t();
                }));
            };
          }
        : function (t) {
            var e = !1;
            return function () {
              e ||
                ((e = !0),
                setTimeout(function () {
                  (e = !1), t();
                }, V));
            };
          };
  function z(t) {
    return t && '[object Function]' === {}.toString.call(t);
  }
  function K(t, e) {
    if (1 !== t.nodeType) return [];
    var n = t.ownerDocument.defaultView.getComputedStyle(t, null);
    return e ? n[e] : n;
  }
  function X(t) {
    return 'HTML' === t.nodeName ? t : t.parentNode || t.host;
  }
  function G(t) {
    if (!t) return document.body;
    switch (t.nodeName) {
      case 'HTML':
      case 'BODY':
        return t.ownerDocument.body;
      case '#document':
        return t.body;
    }
    var e = K(t),
      n = e.overflow,
      i = e.overflowX,
      o = e.overflowY;
    return /(auto|scroll|overlay)/.test(n + o + i) ? t : G(X(t));
  }
  function $(t) {
    return t && t.referenceNode ? t.referenceNode : t;
  }
  var J = U && !(!window.MSInputMethodContext || !document.documentMode),
    Z = U && /MSIE 10/.test(navigator.userAgent);
  function tt(t) {
    return 11 === t ? J : 10 === t ? Z : J || Z;
  }
  function et(t) {
    if (!t) return document.documentElement;
    for (
      var e = tt(10) ? document.body : null, n = t.offsetParent || null;
      n === e && t.nextElementSibling;

    )
      n = (t = t.nextElementSibling).offsetParent;
    var i = n && n.nodeName;
    return i && 'BODY' !== i && 'HTML' !== i
      ? -1 !== ['TH', 'TD', 'TABLE'].indexOf(n.nodeName) &&
        'static' === K(n, 'position')
        ? et(n)
        : n
      : t
      ? t.ownerDocument.documentElement
      : document.documentElement;
  }
  function nt(t) {
    return null !== t.parentNode ? nt(t.parentNode) : t;
  }
  function it(t, e) {
    if (!(t && t.nodeType && e && e.nodeType)) return document.documentElement;
    var n = t.compareDocumentPosition(e) & Node.DOCUMENT_POSITION_FOLLOWING,
      i = n ? t : e,
      o = n ? e : t,
      r = document.createRange();
    r.setStart(i, 0), r.setEnd(o, 0);
    var a,
      s,
      l = r.commonAncestorContainer;
    if ((t !== l && e !== l) || i.contains(o))
      return 'BODY' === (s = (a = l).nodeName) ||
        ('HTML' !== s && et(a.firstElementChild) !== a)
        ? et(l)
        : l;
    var u = nt(t);
    return u.host ? it(u.host, e) : it(t, nt(e).host);
  }
  function ot(t) {
    var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'top',
      n = 'top' === e ? 'scrollTop' : 'scrollLeft',
      i = t.nodeName;
    if ('BODY' === i || 'HTML' === i) {
      var o = t.ownerDocument.documentElement,
        r = t.ownerDocument.scrollingElement || o;
      return r[n];
    }
    return t[n];
  }
  function rt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = ot(e, 'top'),
      o = ot(e, 'left'),
      r = n ? -1 : 1;
    return (
      (t.top += i * r),
      (t.bottom += i * r),
      (t.left += o * r),
      (t.right += o * r),
      t
    );
  }
  function at(t, e) {
    var n = 'x' === e ? 'Left' : 'Top',
      i = 'Left' === n ? 'Right' : 'Bottom';
    return (
      parseFloat(t['border' + n + 'Width']) +
      parseFloat(t['border' + i + 'Width'])
    );
  }
  function st(t, e, n, i) {
    return Math.max(
      e['offset' + t],
      e['scroll' + t],
      n['client' + t],
      n['offset' + t],
      n['scroll' + t],
      tt(10)
        ? parseInt(n['offset' + t]) +
            parseInt(i['margin' + ('Height' === t ? 'Top' : 'Left')]) +
            parseInt(i['margin' + ('Height' === t ? 'Bottom' : 'Right')])
        : 0
    );
  }
  function lt(t) {
    var e = t.body,
      n = t.documentElement,
      i = tt(10) && getComputedStyle(n);
    return { height: st('Height', e, n, i), width: st('Width', e, n, i) };
  }
  var ut = function (t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function');
    },
    ft = (function () {
      function t(t, e) {
        for (var n = 0; n < e.length; n++) {
          var i = e[n];
          (i.enumerable = i.enumerable || !1),
            (i.configurable = !0),
            'value' in i && (i.writable = !0),
            Object.defineProperty(t, i.key, i);
        }
      }
      return function (e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e;
      };
    })(),
    dt = function (t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      );
    },
    ct =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = arguments[e];
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
        }
        return t;
      };
  function ht(t) {
    return ct({}, t, { right: t.left + t.width, bottom: t.top + t.height });
  }
  function pt(t) {
    var e = {};
    try {
      if (tt(10)) {
        e = t.getBoundingClientRect();
        var n = ot(t, 'top'),
          i = ot(t, 'left');
        (e.top += n), (e.left += i), (e.bottom += n), (e.right += i);
      } else e = t.getBoundingClientRect();
    } catch (t) {}
    var o = {
        left: e.left,
        top: e.top,
        width: e.right - e.left,
        height: e.bottom - e.top,
      },
      r = 'HTML' === t.nodeName ? lt(t.ownerDocument) : {},
      a = r.width || t.clientWidth || o.width,
      s = r.height || t.clientHeight || o.height,
      l = t.offsetWidth - a,
      u = t.offsetHeight - s;
    if (l || u) {
      var f = K(t);
      (l -= at(f, 'x')), (u -= at(f, 'y')), (o.width -= l), (o.height -= u);
    }
    return ht(o);
  }
  function mt(t, e) {
    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
      i = tt(10),
      o = 'HTML' === e.nodeName,
      r = pt(t),
      a = pt(e),
      s = G(t),
      l = K(e),
      u = parseFloat(l.borderTopWidth),
      f = parseFloat(l.borderLeftWidth);
    n && o && ((a.top = Math.max(a.top, 0)), (a.left = Math.max(a.left, 0)));
    var d = ht({
      top: r.top - a.top - u,
      left: r.left - a.left - f,
      width: r.width,
      height: r.height,
    });
    if (((d.marginTop = 0), (d.marginLeft = 0), !i && o)) {
      var c = parseFloat(l.marginTop),
        h = parseFloat(l.marginLeft);
      (d.top -= u - c),
        (d.bottom -= u - c),
        (d.left -= f - h),
        (d.right -= f - h),
        (d.marginTop = c),
        (d.marginLeft = h);
    }
    return (
      (i && !n ? e.contains(s) : e === s && 'BODY' !== s.nodeName) &&
        (d = rt(d, e)),
      d
    );
  }
  function gt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = t.ownerDocument.documentElement,
      i = mt(t, n),
      o = Math.max(n.clientWidth, window.innerWidth || 0),
      r = Math.max(n.clientHeight, window.innerHeight || 0),
      a = e ? 0 : ot(n),
      s = e ? 0 : ot(n, 'left'),
      l = {
        top: a - i.top + i.marginTop,
        left: s - i.left + i.marginLeft,
        width: o,
        height: r,
      };
    return ht(l);
  }
  function _t(t) {
    var e = t.nodeName;
    if ('BODY' === e || 'HTML' === e) return !1;
    if ('fixed' === K(t, 'position')) return !0;
    var n = X(t);
    return !!n && _t(n);
  }
  function vt(t) {
    if (!t || !t.parentElement || tt()) return document.documentElement;
    for (var e = t.parentElement; e && 'none' === K(e, 'transform'); )
      e = e.parentElement;
    return e || document.documentElement;
  }
  function bt(t, e, n, i) {
    var o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
      r = { top: 0, left: 0 },
      a = o ? vt(t) : it(t, $(e));
    if ('viewport' === i) r = gt(a, o);
    else {
      var s = void 0;
      'scrollParent' === i
        ? 'BODY' === (s = G(X(e))).nodeName &&
          (s = t.ownerDocument.documentElement)
        : (s = 'window' === i ? t.ownerDocument.documentElement : i);
      var l = mt(s, a, o);
      if ('HTML' !== s.nodeName || _t(a)) r = l;
      else {
        var u = lt(t.ownerDocument),
          f = u.height,
          d = u.width;
        (r.top += l.top - l.marginTop),
          (r.bottom = f + l.top),
          (r.left += l.left - l.marginLeft),
          (r.right = d + l.left);
      }
    }
    var c = 'number' == typeof (n = n || 0);
    return (
      (r.left += c ? n : n.left || 0),
      (r.top += c ? n : n.top || 0),
      (r.right -= c ? n : n.right || 0),
      (r.bottom -= c ? n : n.bottom || 0),
      r
    );
  }
  function yt(t) {
    return t.width * t.height;
  }
  function Et(t, e, n, i, o) {
    var r = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : 0;
    if (-1 === t.indexOf('auto')) return t;
    var a = bt(n, i, r, o),
      s = {
        top: { width: a.width, height: e.top - a.top },
        right: { width: a.right - e.right, height: a.height },
        bottom: { width: a.width, height: a.bottom - e.bottom },
        left: { width: e.left - a.left, height: a.height },
      },
      l = Object.keys(s)
        .map(function (t) {
          return ct({ key: t }, s[t], { area: yt(s[t]) });
        })
        .sort(function (t, e) {
          return e.area - t.area;
        }),
      u = l.filter(function (t) {
        var e = t.width,
          i = t.height;
        return e >= n.clientWidth && i >= n.clientHeight;
      }),
      f = u.length > 0 ? u[0].key : l[0].key,
      d = t.split('-')[1];
    return f + (d ? '-' + d : '');
  }
  function wt(t, e, n) {
    var i =
        arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
      o = i ? vt(e) : it(e, $(n));
    return mt(n, o, i);
  }
  function Tt(t) {
    var e = t.ownerDocument.defaultView.getComputedStyle(t),
      n = parseFloat(e.marginTop || 0) + parseFloat(e.marginBottom || 0),
      i = parseFloat(e.marginLeft || 0) + parseFloat(e.marginRight || 0);
    return { width: t.offsetWidth + i, height: t.offsetHeight + n };
  }
  function Ct(t) {
    var e = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
    return t.replace(/left|right|bottom|top/g, function (t) {
      return e[t];
    });
  }
  function St(t, e, n) {
    n = n.split('-')[0];
    var i = Tt(t),
      o = { width: i.width, height: i.height },
      r = -1 !== ['right', 'left'].indexOf(n),
      a = r ? 'top' : 'left',
      s = r ? 'left' : 'top',
      l = r ? 'height' : 'width',
      u = r ? 'width' : 'height';
    return (
      (o[a] = e[a] + e[l] / 2 - i[l] / 2),
      (o[s] = n === s ? e[s] - i[u] : e[Ct(s)]),
      o
    );
  }
  function Nt(t, e) {
    return Array.prototype.find ? t.find(e) : t.filter(e)[0];
  }
  function Dt(t, e, n) {
    return (
      (void 0 === n
        ? t
        : t.slice(
            0,
            (function (t, e, n) {
              if (Array.prototype.findIndex)
                return t.findIndex(function (t) {
                  return t.name === n;
                });
              var i = Nt(t, function (t) {
                return t.name === n;
              });
              return t.indexOf(i);
            })(t, 0, n)
          )
      ).forEach(function (t) {
        t.function &&
          console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
        var n = t.function || t.fn;
        t.enabled &&
          z(n) &&
          ((e.offsets.popper = ht(e.offsets.popper)),
          (e.offsets.reference = ht(e.offsets.reference)),
          (e = n(e, t)));
      }),
      e
    );
  }
  function At() {
    if (!this.state.isDestroyed) {
      var t = {
        instance: this,
        styles: {},
        arrowStyles: {},
        attributes: {},
        flipped: !1,
        offsets: {},
      };
      (t.offsets.reference = wt(
        this.state,
        this.popper,
        this.reference,
        this.options.positionFixed
      )),
        (t.placement = Et(
          this.options.placement,
          t.offsets.reference,
          this.popper,
          this.reference,
          this.options.modifiers.flip.boundariesElement,
          this.options.modifiers.flip.padding
        )),
        (t.originalPlacement = t.placement),
        (t.positionFixed = this.options.positionFixed),
        (t.offsets.popper = St(this.popper, t.offsets.reference, t.placement)),
        (t.offsets.popper.position = this.options.positionFixed
          ? 'fixed'
          : 'absolute'),
        (t = Dt(this.modifiers, t)),
        this.state.isCreated
          ? this.options.onUpdate(t)
          : ((this.state.isCreated = !0), this.options.onCreate(t));
    }
  }
  function kt(t, e) {
    return t.some(function (t) {
      var n = t.name;
      return t.enabled && n === e;
    });
  }
  function It(t) {
    for (
      var e = [!1, 'ms', 'Webkit', 'Moz', 'O'],
        n = t.charAt(0).toUpperCase() + t.slice(1),
        i = 0;
      i < e.length;
      i++
    ) {
      var o = e[i],
        r = o ? '' + o + n : t;
      if ('undefined' != typeof document.body.style[r]) return r;
    }
    return null;
  }
  function Ot() {
    return (
      (this.state.isDestroyed = !0),
      kt(this.modifiers, 'applyStyle') &&
        (this.popper.removeAttribute('x-placement'),
        (this.popper.style.position = ''),
        (this.popper.style.top = ''),
        (this.popper.style.left = ''),
        (this.popper.style.right = ''),
        (this.popper.style.bottom = ''),
        (this.popper.style.willChange = ''),
        (this.popper.style[It('transform')] = '')),
      this.disableEventListeners(),
      this.options.removeOnDestroy &&
        this.popper.parentNode.removeChild(this.popper),
      this
    );
  }
  function xt(t) {
    var e = t.ownerDocument;
    return e ? e.defaultView : window;
  }
  function jt(t, e, n, i) {
    var o = 'BODY' === t.nodeName,
      r = o ? t.ownerDocument.defaultView : t;
    r.addEventListener(e, n, { passive: !0 }),
      o || jt(G(r.parentNode), e, n, i),
      i.push(r);
  }
  function Lt(t, e, n, i) {
    (n.updateBound = i),
      xt(t).addEventListener('resize', n.updateBound, { passive: !0 });
    var o = G(t);
    return (
      jt(o, 'scroll', n.updateBound, n.scrollParents),
      (n.scrollElement = o),
      (n.eventsEnabled = !0),
      n
    );
  }
  function Pt() {
    this.state.eventsEnabled ||
      (this.state = Lt(
        this.reference,
        this.options,
        this.state,
        this.scheduleUpdate
      ));
  }
  function Ft() {
    var t, e;
    this.state.eventsEnabled &&
      (cancelAnimationFrame(this.scheduleUpdate),
      (this.state =
        ((t = this.reference),
        (e = this.state),
        xt(t).removeEventListener('resize', e.updateBound),
        e.scrollParents.forEach(function (t) {
          t.removeEventListener('scroll', e.updateBound);
        }),
        (e.updateBound = null),
        (e.scrollParents = []),
        (e.scrollElement = null),
        (e.eventsEnabled = !1),
        e)));
  }
  function Rt(t) {
    return '' !== t && !isNaN(parseFloat(t)) && isFinite(t);
  }
  function Ht(t, e) {
    Object.keys(e).forEach(function (n) {
      var i = '';
      -1 !== ['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(n) &&
        Rt(e[n]) &&
        (i = 'px'),
        (t.style[n] = e[n] + i);
    });
  }
  var Mt = U && /Firefox/i.test(navigator.userAgent);
  function qt(t, e, n) {
    var i = Nt(t, function (t) {
        return t.name === e;
      }),
      o =
        !!i &&
        t.some(function (t) {
          return t.name === n && t.enabled && t.order < i.order;
        });
    if (!o) {
      var r = '`' + e + '`',
        a = '`' + n + '`';
      console.warn(
        a +
          ' modifier is required by ' +
          r +
          ' modifier in order to work, be sure to include it before ' +
          r +
          '!'
      );
    }
    return o;
  }
  var Bt = [
      'auto-start',
      'auto',
      'auto-end',
      'top-start',
      'top',
      'top-end',
      'right-start',
      'right',
      'right-end',
      'bottom-end',
      'bottom',
      'bottom-start',
      'left-end',
      'left',
      'left-start',
    ],
    Qt = Bt.slice(3);
  function Wt(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
      n = Qt.indexOf(t),
      i = Qt.slice(n + 1).concat(Qt.slice(0, n));
    return e ? i.reverse() : i;
  }
  var Ut = {
      placement: 'bottom',
      positionFixed: !1,
      eventsEnabled: !0,
      removeOnDestroy: !1,
      onCreate: function () {},
      onUpdate: function () {},
      modifiers: {
        shift: {
          order: 100,
          enabled: !0,
          fn: function (t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = e.split('-')[1];
            if (i) {
              var o = t.offsets,
                r = o.reference,
                a = o.popper,
                s = -1 !== ['bottom', 'top'].indexOf(n),
                l = s ? 'left' : 'top',
                u = s ? 'width' : 'height',
                f = {
                  start: dt({}, l, r[l]),
                  end: dt({}, l, r[l] + r[u] - a[u]),
                };
              t.offsets.popper = ct({}, a, f[i]);
            }
            return t;
          },
        },
        offset: {
          order: 200,
          enabled: !0,
          fn: function (t, e) {
            var n,
              i = e.offset,
              o = t.placement,
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = o.split('-')[0];
            return (
              (n = Rt(+i)
                ? [+i, 0]
                : (function (t, e, n, i) {
                    var o = [0, 0],
                      r = -1 !== ['right', 'left'].indexOf(i),
                      a = t.split(/(\+|\-)/).map(function (t) {
                        return t.trim();
                      }),
                      s = a.indexOf(
                        Nt(a, function (t) {
                          return -1 !== t.search(/,|\s/);
                        })
                      );
                    a[s] &&
                      -1 === a[s].indexOf(',') &&
                      console.warn(
                        'Offsets separated by white space(s) are deprecated, use a comma (,) instead.'
                      );
                    var l = /\s*,\s*|\s+/,
                      u =
                        -1 !== s
                          ? [
                              a.slice(0, s).concat([a[s].split(l)[0]]),
                              [a[s].split(l)[1]].concat(a.slice(s + 1)),
                            ]
                          : [a];
                    return (
                      (u = u.map(function (t, i) {
                        var o = (1 === i ? !r : r) ? 'height' : 'width',
                          a = !1;
                        return t
                          .reduce(function (t, e) {
                            return '' === t[t.length - 1] &&
                              -1 !== ['+', '-'].indexOf(e)
                              ? ((t[t.length - 1] = e), (a = !0), t)
                              : a
                              ? ((t[t.length - 1] += e), (a = !1), t)
                              : t.concat(e);
                          }, [])
                          .map(function (t) {
                            return (function (t, e, n, i) {
                              var o = t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),
                                r = +o[1],
                                a = o[2];
                              return r
                                ? 0 === a.indexOf('%')
                                  ? (ht('%p' === a ? n : i)[e] / 100) * r
                                  : 'vh' === a || 'vw' === a
                                  ? (('vh' === a
                                      ? Math.max(
                                          document.documentElement.clientHeight,
                                          window.innerHeight || 0
                                        )
                                      : Math.max(
                                          document.documentElement.clientWidth,
                                          window.innerWidth || 0
                                        )) /
                                      100) *
                                    r
                                  : r
                                : t;
                            })(t, o, e, n);
                          });
                      })),
                      u.forEach(function (t, e) {
                        t.forEach(function (n, i) {
                          Rt(n) && (o[e] += n * ('-' === t[i - 1] ? -1 : 1));
                        });
                      }),
                      o
                    );
                  })(i, a, s, l)),
              'left' === l
                ? ((a.top += n[0]), (a.left -= n[1]))
                : 'right' === l
                ? ((a.top += n[0]), (a.left += n[1]))
                : 'top' === l
                ? ((a.left += n[0]), (a.top -= n[1]))
                : 'bottom' === l && ((a.left += n[0]), (a.top += n[1])),
              (t.popper = a),
              t
            );
          },
          offset: 0,
        },
        preventOverflow: {
          order: 300,
          enabled: !0,
          fn: function (t, e) {
            var n = e.boundariesElement || et(t.instance.popper);
            t.instance.reference === n && (n = et(n));
            var i = It('transform'),
              o = t.instance.popper.style,
              r = o.top,
              a = o.left,
              s = o[i];
            (o.top = ''), (o.left = ''), (o[i] = '');
            var l = bt(
              t.instance.popper,
              t.instance.reference,
              e.padding,
              n,
              t.positionFixed
            );
            (o.top = r), (o.left = a), (o[i] = s), (e.boundaries = l);
            var u = e.priority,
              f = t.offsets.popper,
              d = {
                primary: function (t) {
                  var n = f[t];
                  return (
                    f[t] < l[t] &&
                      !e.escapeWithReference &&
                      (n = Math.max(f[t], l[t])),
                    dt({}, t, n)
                  );
                },
                secondary: function (t) {
                  var n = 'right' === t ? 'left' : 'top',
                    i = f[n];
                  return (
                    f[t] > l[t] &&
                      !e.escapeWithReference &&
                      (i = Math.min(
                        f[n],
                        l[t] - ('right' === t ? f.width : f.height)
                      )),
                    dt({}, n, i)
                  );
                },
              };
            return (
              u.forEach(function (t) {
                var e =
                  -1 !== ['left', 'top'].indexOf(t) ? 'primary' : 'secondary';
                f = ct({}, f, d[e](t));
              }),
              (t.offsets.popper = f),
              t
            );
          },
          priority: ['left', 'right', 'top', 'bottom'],
          padding: 5,
          boundariesElement: 'scrollParent',
        },
        keepTogether: {
          order: 400,
          enabled: !0,
          fn: function (t) {
            var e = t.offsets,
              n = e.popper,
              i = e.reference,
              o = t.placement.split('-')[0],
              r = Math.floor,
              a = -1 !== ['top', 'bottom'].indexOf(o),
              s = a ? 'right' : 'bottom',
              l = a ? 'left' : 'top',
              u = a ? 'width' : 'height';
            return (
              n[s] < r(i[l]) && (t.offsets.popper[l] = r(i[l]) - n[u]),
              n[l] > r(i[s]) && (t.offsets.popper[l] = r(i[s])),
              t
            );
          },
        },
        arrow: {
          order: 500,
          enabled: !0,
          fn: function (t, e) {
            var n;
            if (!qt(t.instance.modifiers, 'arrow', 'keepTogether')) return t;
            var i = e.element;
            if ('string' == typeof i) {
              if (!(i = t.instance.popper.querySelector(i))) return t;
            } else if (!t.instance.popper.contains(i))
              return (
                console.warn(
                  'WARNING: `arrow.element` must be child of its popper element!'
                ),
                t
              );
            var o = t.placement.split('-')[0],
              r = t.offsets,
              a = r.popper,
              s = r.reference,
              l = -1 !== ['left', 'right'].indexOf(o),
              u = l ? 'height' : 'width',
              f = l ? 'Top' : 'Left',
              d = f.toLowerCase(),
              c = l ? 'left' : 'top',
              h = l ? 'bottom' : 'right',
              p = Tt(i)[u];
            s[h] - p < a[d] && (t.offsets.popper[d] -= a[d] - (s[h] - p)),
              s[d] + p > a[h] && (t.offsets.popper[d] += s[d] + p - a[h]),
              (t.offsets.popper = ht(t.offsets.popper));
            var m = s[d] + s[u] / 2 - p / 2,
              g = K(t.instance.popper),
              _ = parseFloat(g['margin' + f]),
              v = parseFloat(g['border' + f + 'Width']),
              b = m - t.offsets.popper[d] - _ - v;
            return (
              (b = Math.max(Math.min(a[u] - p, b), 0)),
              (t.arrowElement = i),
              (t.offsets.arrow =
                (dt((n = {}), d, Math.round(b)), dt(n, c, ''), n)),
              t
            );
          },
          element: '[x-arrow]',
        },
        flip: {
          order: 600,
          enabled: !0,
          fn: function (t, e) {
            if (kt(t.instance.modifiers, 'inner')) return t;
            if (t.flipped && t.placement === t.originalPlacement) return t;
            var n = bt(
                t.instance.popper,
                t.instance.reference,
                e.padding,
                e.boundariesElement,
                t.positionFixed
              ),
              i = t.placement.split('-')[0],
              o = Ct(i),
              r = t.placement.split('-')[1] || '',
              a = [];
            switch (e.behavior) {
              case 'flip':
                a = [i, o];
                break;
              case 'clockwise':
                a = Wt(i);
                break;
              case 'counterclockwise':
                a = Wt(i, !0);
                break;
              default:
                a = e.behavior;
            }
            return (
              a.forEach(function (s, l) {
                if (i !== s || a.length === l + 1) return t;
                (i = t.placement.split('-')[0]), (o = Ct(i));
                var u = t.offsets.popper,
                  f = t.offsets.reference,
                  d = Math.floor,
                  c =
                    ('left' === i && d(u.right) > d(f.left)) ||
                    ('right' === i && d(u.left) < d(f.right)) ||
                    ('top' === i && d(u.bottom) > d(f.top)) ||
                    ('bottom' === i && d(u.top) < d(f.bottom)),
                  h = d(u.left) < d(n.left),
                  p = d(u.right) > d(n.right),
                  m = d(u.top) < d(n.top),
                  g = d(u.bottom) > d(n.bottom),
                  _ =
                    ('left' === i && h) ||
                    ('right' === i && p) ||
                    ('top' === i && m) ||
                    ('bottom' === i && g),
                  v = -1 !== ['top', 'bottom'].indexOf(i),
                  b =
                    !!e.flipVariations &&
                    ((v && 'start' === r && h) ||
                      (v && 'end' === r && p) ||
                      (!v && 'start' === r && m) ||
                      (!v && 'end' === r && g)),
                  y =
                    !!e.flipVariationsByContent &&
                    ((v && 'start' === r && p) ||
                      (v && 'end' === r && h) ||
                      (!v && 'start' === r && g) ||
                      (!v && 'end' === r && m)),
                  E = b || y;
                (c || _ || E) &&
                  ((t.flipped = !0),
                  (c || _) && (i = a[l + 1]),
                  E &&
                    (r = (function (t) {
                      return 'end' === t ? 'start' : 'start' === t ? 'end' : t;
                    })(r)),
                  (t.placement = i + (r ? '-' + r : '')),
                  (t.offsets.popper = ct(
                    {},
                    t.offsets.popper,
                    St(t.instance.popper, t.offsets.reference, t.placement)
                  )),
                  (t = Dt(t.instance.modifiers, t, 'flip')));
              }),
              t
            );
          },
          behavior: 'flip',
          padding: 5,
          boundariesElement: 'viewport',
          flipVariations: !1,
          flipVariationsByContent: !1,
        },
        inner: {
          order: 700,
          enabled: !1,
          fn: function (t) {
            var e = t.placement,
              n = e.split('-')[0],
              i = t.offsets,
              o = i.popper,
              r = i.reference,
              a = -1 !== ['left', 'right'].indexOf(n),
              s = -1 === ['top', 'left'].indexOf(n);
            return (
              (o[a ? 'left' : 'top'] =
                r[n] - (s ? o[a ? 'width' : 'height'] : 0)),
              (t.placement = Ct(e)),
              (t.offsets.popper = ht(o)),
              t
            );
          },
        },
        hide: {
          order: 800,
          enabled: !0,
          fn: function (t) {
            if (!qt(t.instance.modifiers, 'hide', 'preventOverflow')) return t;
            var e = t.offsets.reference,
              n = Nt(t.instance.modifiers, function (t) {
                return 'preventOverflow' === t.name;
              }).boundaries;
            if (
              e.bottom < n.top ||
              e.left > n.right ||
              e.top > n.bottom ||
              e.right < n.left
            ) {
              if (!0 === t.hide) return t;
              (t.hide = !0), (t.attributes['x-out-of-boundaries'] = '');
            } else {
              if (!1 === t.hide) return t;
              (t.hide = !1), (t.attributes['x-out-of-boundaries'] = !1);
            }
            return t;
          },
        },
        computeStyle: {
          order: 850,
          enabled: !0,
          fn: function (t, e) {
            var n = e.x,
              i = e.y,
              o = t.offsets.popper,
              r = Nt(t.instance.modifiers, function (t) {
                return 'applyStyle' === t.name;
              }).gpuAcceleration;
            void 0 !== r &&
              console.warn(
                'WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!'
              );
            var a,
              s,
              l = void 0 !== r ? r : e.gpuAcceleration,
              u = et(t.instance.popper),
              f = pt(u),
              d = { position: o.position },
              c = (function (t, e) {
                var n = t.offsets,
                  i = n.popper,
                  o = n.reference,
                  r = Math.round,
                  a = Math.floor,
                  s = function (t) {
                    return t;
                  },
                  l = r(o.width),
                  u = r(i.width),
                  f = -1 !== ['left', 'right'].indexOf(t.placement),
                  d = -1 !== t.placement.indexOf('-'),
                  c = e ? (f || d || l % 2 == u % 2 ? r : a) : s,
                  h = e ? r : s;
                return {
                  left: c(
                    l % 2 == 1 && u % 2 == 1 && !d && e ? i.left - 1 : i.left
                  ),
                  top: h(i.top),
                  bottom: h(i.bottom),
                  right: c(i.right),
                };
              })(t, window.devicePixelRatio < 2 || !Mt),
              h = 'bottom' === n ? 'top' : 'bottom',
              p = 'right' === i ? 'left' : 'right',
              m = It('transform');
            if (
              ((s =
                'bottom' === h
                  ? 'HTML' === u.nodeName
                    ? -u.clientHeight + c.bottom
                    : -f.height + c.bottom
                  : c.top),
              (a =
                'right' === p
                  ? 'HTML' === u.nodeName
                    ? -u.clientWidth + c.right
                    : -f.width + c.right
                  : c.left),
              l && m)
            )
              (d[m] = 'translate3d(' + a + 'px, ' + s + 'px, 0)'),
                (d[h] = 0),
                (d[p] = 0),
                (d.willChange = 'transform');
            else {
              var g = 'bottom' === h ? -1 : 1,
                _ = 'right' === p ? -1 : 1;
              (d[h] = s * g), (d[p] = a * _), (d.willChange = h + ', ' + p);
            }
            var v = { 'x-placement': t.placement };
            return (
              (t.attributes = ct({}, v, t.attributes)),
              (t.styles = ct({}, d, t.styles)),
              (t.arrowStyles = ct({}, t.offsets.arrow, t.arrowStyles)),
              t
            );
          },
          gpuAcceleration: !0,
          x: 'bottom',
          y: 'right',
        },
        applyStyle: {
          order: 900,
          enabled: !0,
          fn: function (t) {
            var e, n;
            return (
              Ht(t.instance.popper, t.styles),
              (e = t.instance.popper),
              (n = t.attributes),
              Object.keys(n).forEach(function (t) {
                !1 !== n[t] ? e.setAttribute(t, n[t]) : e.removeAttribute(t);
              }),
              t.arrowElement &&
                Object.keys(t.arrowStyles).length &&
                Ht(t.arrowElement, t.arrowStyles),
              t
            );
          },
          onLoad: function (t, e, n, i, o) {
            var r = wt(o, e, t, n.positionFixed),
              a = Et(
                n.placement,
                r,
                e,
                t,
                n.modifiers.flip.boundariesElement,
                n.modifiers.flip.padding
              );
            return (
              e.setAttribute('x-placement', a),
              Ht(e, { position: n.positionFixed ? 'fixed' : 'absolute' }),
              n
            );
          },
          gpuAcceleration: void 0,
        },
      },
    },
    Vt = (function () {
      function t(e, n) {
        var i = this,
          o =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        ut(this, t),
          (this.scheduleUpdate = function () {
            return requestAnimationFrame(i.update);
          }),
          (this.update = Y(this.update.bind(this))),
          (this.options = ct({}, t.Defaults, o)),
          (this.state = { isDestroyed: !1, isCreated: !1, scrollParents: [] }),
          (this.reference = e && e.jquery ? e[0] : e),
          (this.popper = n && n.jquery ? n[0] : n),
          (this.options.modifiers = {}),
          Object.keys(ct({}, t.Defaults.modifiers, o.modifiers)).forEach(
            function (e) {
              i.options.modifiers[e] = ct(
                {},
                t.Defaults.modifiers[e] || {},
                o.modifiers ? o.modifiers[e] : {}
              );
            }
          ),
          (this.modifiers = Object.keys(this.options.modifiers)
            .map(function (t) {
              return ct({ name: t }, i.options.modifiers[t]);
            })
            .sort(function (t, e) {
              return t.order - e.order;
            })),
          this.modifiers.forEach(function (t) {
            t.enabled &&
              z(t.onLoad) &&
              t.onLoad(i.reference, i.popper, i.options, t, i.state);
          }),
          this.update();
        var r = this.options.eventsEnabled;
        r && this.enableEventListeners(), (this.state.eventsEnabled = r);
      }
      return (
        ft(t, [
          {
            key: 'update',
            value: function () {
              return At.call(this);
            },
          },
          {
            key: 'destroy',
            value: function () {
              return Ot.call(this);
            },
          },
          {
            key: 'enableEventListeners',
            value: function () {
              return Pt.call(this);
            },
          },
          {
            key: 'disableEventListeners',
            value: function () {
              return Ft.call(this);
            },
          },
        ]),
        t
      );
    })();
  (Vt.Utils = ('undefined' != typeof window ? window : global).PopperUtils),
    (Vt.placements = Bt),
    (Vt.Defaults = Ut);
  var Yt = Vt,
    zt = 'dropdown',
    Kt = 'bs.dropdown',
    Xt = i.default.fn[zt],
    Gt = new RegExp('38|40|27'),
    $t = 'disabled',
    Jt = 'show',
    Zt = 'dropdown-menu-right',
    te = 'hide.bs.dropdown',
    ee = 'hidden.bs.dropdown',
    ne = 'click.bs.dropdown.data-api',
    ie = 'keydown.bs.dropdown.data-api',
    oe = '[data-toggle="dropdown"]',
    re = '.dropdown-menu',
    ae = {
      offset: 0,
      flip: !0,
      boundary: 'scrollParent',
      reference: 'toggle',
      display: 'dynamic',
      popperConfig: null,
    },
    se = {
      offset: '(number|string|function)',
      flip: 'boolean',
      boundary: '(string|element)',
      reference: '(string|element)',
      display: 'string',
      popperConfig: '(null|object)',
    },
    le = (function () {
      function t(t, e) {
        (this._element = t),
          (this._popper = null),
          (this._config = this._getConfig(e)),
          (this._menu = this._getMenuElement()),
          (this._inNavbar = this._detectNavbar()),
          this._addEventListeners();
      }
      var e = t.prototype;
      return (
        (e.toggle = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t)
          ) {
            var e = i.default(this._menu).hasClass(Jt);
            t._clearMenus(), e || this.show(!0);
          }
        }),
        (e.show = function (e) {
          if (
            (void 0 === e && (e = !1),
            !(
              this._element.disabled ||
              i.default(this._element).hasClass($t) ||
              i.default(this._menu).hasClass(Jt)
            ))
          ) {
            var n = { relatedTarget: this._element },
              o = i.default.Event('show.bs.dropdown', n),
              r = t._getParentFromElement(this._element);
            if ((i.default(r).trigger(o), !o.isDefaultPrevented())) {
              if (!this._inNavbar && e) {
                if ('undefined' == typeof Yt)
                  throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                  );
                var a = this._element;
                'parent' === this._config.reference
                  ? (a = r)
                  : u.isElement(this._config.reference) &&
                    ((a = this._config.reference),
                    'undefined' != typeof this._config.reference.jquery &&
                      (a = this._config.reference[0])),
                  'scrollParent' !== this._config.boundary &&
                    i.default(r).addClass('position-static'),
                  (this._popper = new Yt(
                    a,
                    this._menu,
                    this._getPopperConfig()
                  ));
              }
              'ontouchstart' in document.documentElement &&
                0 === i.default(r).closest('.navbar-nav').length &&
                i
                  .default(document.body)
                  .children()
                  .on('mouseover', null, i.default.noop),
                this._element.focus(),
                this._element.setAttribute('aria-expanded', !0),
                i.default(this._menu).toggleClass(Jt),
                i
                  .default(r)
                  .toggleClass(Jt)
                  .trigger(i.default.Event('shown.bs.dropdown', n));
            }
          }
        }),
        (e.hide = function () {
          if (
            !this._element.disabled &&
            !i.default(this._element).hasClass($t) &&
            i.default(this._menu).hasClass(Jt)
          ) {
            var e = { relatedTarget: this._element },
              n = i.default.Event(te, e),
              o = t._getParentFromElement(this._element);
            i.default(o).trigger(n),
              n.isDefaultPrevented() ||
                (this._popper && this._popper.destroy(),
                i.default(this._menu).toggleClass(Jt),
                i.default(o).toggleClass(Jt).trigger(i.default.Event(ee, e)));
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, Kt),
            i.default(this._element).off('.bs.dropdown'),
            (this._element = null),
            (this._menu = null),
            null !== this._popper &&
              (this._popper.destroy(), (this._popper = null));
        }),
        (e.update = function () {
          (this._inNavbar = this._detectNavbar()),
            null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e._addEventListeners = function () {
          var t = this;
          i.default(this._element).on('click.bs.dropdown', function (e) {
            e.preventDefault(), e.stopPropagation(), t.toggle();
          });
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              this.constructor.Default,
              i.default(this._element).data(),
              t
            )),
            u.typeCheckConfig(zt, t, this.constructor.DefaultType),
            t
          );
        }),
        (e._getMenuElement = function () {
          if (!this._menu) {
            var e = t._getParentFromElement(this._element);
            e && (this._menu = e.querySelector(re));
          }
          return this._menu;
        }),
        (e._getPlacement = function () {
          var t = i.default(this._element.parentNode),
            e = 'bottom-start';
          return (
            t.hasClass('dropup')
              ? (e = i.default(this._menu).hasClass(Zt)
                  ? 'top-end'
                  : 'top-start')
              : t.hasClass('dropright')
              ? (e = 'right-start')
              : t.hasClass('dropleft')
              ? (e = 'left-start')
              : i.default(this._menu).hasClass(Zt) && (e = 'bottom-end'),
            e
          );
        }),
        (e._detectNavbar = function () {
          return i.default(this._element).closest('.navbar').length > 0;
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this._config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t._config.offset(e.offsets, t._element)
                    )),
                    e
                  );
                })
              : (e.offset = this._config.offset),
            e
          );
        }),
        (e._getPopperConfig = function () {
          var t = {
            placement: this._getPlacement(),
            modifiers: {
              offset: this._getOffset(),
              flip: { enabled: this._config.flip },
              preventOverflow: { boundariesElement: this._config.boundary },
            },
          };
          return (
            'static' === this._config.display &&
              (t.modifiers.applyStyle = { enabled: !1 }),
            a({}, t, this._config.popperConfig)
          );
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(Kt);
            if (
              (n ||
                ((n = new t(this, 'object' == typeof e ? e : null)),
                i.default(this).data(Kt, n)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        (t._clearMenus = function (e) {
          if (!e || (3 !== e.which && ('keyup' !== e.type || 9 === e.which)))
            for (
              var n = [].slice.call(document.querySelectorAll(oe)),
                o = 0,
                r = n.length;
              o < r;
              o++
            ) {
              var a = t._getParentFromElement(n[o]),
                s = i.default(n[o]).data(Kt),
                l = { relatedTarget: n[o] };
              if ((e && 'click' === e.type && (l.clickEvent = e), s)) {
                var u = s._menu;
                if (
                  i.default(a).hasClass(Jt) &&
                  !(
                    e &&
                    (('click' === e.type &&
                      /input|textarea/i.test(e.target.tagName)) ||
                      ('keyup' === e.type && 9 === e.which)) &&
                    i.default.contains(a, e.target)
                  )
                ) {
                  var f = i.default.Event(te, l);
                  i.default(a).trigger(f),
                    f.isDefaultPrevented() ||
                      ('ontouchstart' in document.documentElement &&
                        i
                          .default(document.body)
                          .children()
                          .off('mouseover', null, i.default.noop),
                      n[o].setAttribute('aria-expanded', 'false'),
                      s._popper && s._popper.destroy(),
                      i.default(u).removeClass(Jt),
                      i
                        .default(a)
                        .removeClass(Jt)
                        .trigger(i.default.Event(ee, l)));
                }
              }
            }
        }),
        (t._getParentFromElement = function (t) {
          var e,
            n = u.getSelectorFromElement(t);
          return n && (e = document.querySelector(n)), e || t.parentNode;
        }),
        (t._dataApiKeydownHandler = function (e) {
          if (
            !(/input|textarea/i.test(e.target.tagName)
              ? 32 === e.which ||
                (27 !== e.which &&
                  ((40 !== e.which && 38 !== e.which) ||
                    i.default(e.target).closest(re).length))
              : !Gt.test(e.which)) &&
            !this.disabled &&
            !i.default(this).hasClass($t)
          ) {
            var n = t._getParentFromElement(this),
              o = i.default(n).hasClass(Jt);
            if (o || 27 !== e.which) {
              if (
                (e.preventDefault(),
                e.stopPropagation(),
                !o || 27 === e.which || 32 === e.which)
              )
                return (
                  27 === e.which &&
                    i.default(n.querySelector(oe)).trigger('focus'),
                  void i.default(this).trigger('click')
                );
              var r = [].slice
                .call(
                  n.querySelectorAll(
                    '.dropdown-menu .dropdown-item:not(.disabled):not(:disabled)'
                  )
                )
                .filter(function (t) {
                  return i.default(t).is(':visible');
                });
              if (0 !== r.length) {
                var a = r.indexOf(e.target);
                38 === e.which && a > 0 && a--,
                  40 === e.which && a < r.length - 1 && a++,
                  a < 0 && (a = 0),
                  r[a].focus();
              }
            }
          }
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return ae;
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return se;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(ie, oe, le._dataApiKeydownHandler)
    .on(ie, re, le._dataApiKeydownHandler)
    .on(ne + ' keyup.bs.dropdown.data-api', le._clearMenus)
    .on(ne, oe, function (t) {
      t.preventDefault(),
        t.stopPropagation(),
        le._jQueryInterface.call(i.default(this), 'toggle');
    })
    .on(ne, '.dropdown form', function (t) {
      t.stopPropagation();
    }),
    (i.default.fn[zt] = le._jQueryInterface),
    (i.default.fn[zt].Constructor = le),
    (i.default.fn[zt].noConflict = function () {
      return (i.default.fn[zt] = Xt), le._jQueryInterface;
    });
  var ue = 'bs.modal',
    fe = i.default.fn.modal,
    de = 'modal-open',
    ce = 'fade',
    he = 'show',
    pe = 'modal-static',
    me = 'hidden.bs.modal',
    ge = 'show.bs.modal',
    _e = 'focusin.bs.modal',
    ve = 'resize.bs.modal',
    be = 'click.dismiss.bs.modal',
    ye = 'keydown.dismiss.bs.modal',
    Ee = 'mousedown.dismiss.bs.modal',
    we = '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
    Te = { backdrop: !0, keyboard: !0, focus: !0, show: !0 },
    Ce = {
      backdrop: '(boolean|string)',
      keyboard: 'boolean',
      focus: 'boolean',
      show: 'boolean',
    },
    Se = (function () {
      function t(t, e) {
        (this._config = this._getConfig(e)),
          (this._element = t),
          (this._dialog = t.querySelector('.modal-dialog')),
          (this._backdrop = null),
          (this._isShown = !1),
          (this._isBodyOverflowing = !1),
          (this._ignoreBackdropClick = !1),
          (this._isTransitioning = !1),
          (this._scrollbarWidth = 0);
      }
      var e = t.prototype;
      return (
        (e.toggle = function (t) {
          return this._isShown ? this.hide() : this.show(t);
        }),
        (e.show = function (t) {
          var e = this;
          if (!this._isShown && !this._isTransitioning) {
            var n = i.default.Event(ge, { relatedTarget: t });
            i.default(this._element).trigger(n),
              n.isDefaultPrevented() ||
                ((this._isShown = !0),
                i.default(this._element).hasClass(ce) &&
                  (this._isTransitioning = !0),
                this._checkScrollbar(),
                this._setScrollbar(),
                this._adjustDialog(),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i
                  .default(this._element)
                  .on(be, '[data-dismiss="modal"]', function (t) {
                    return e.hide(t);
                  }),
                i.default(this._dialog).on(Ee, function () {
                  i.default(e._element).one(
                    'mouseup.dismiss.bs.modal',
                    function (t) {
                      i.default(t.target).is(e._element) &&
                        (e._ignoreBackdropClick = !0);
                    }
                  );
                }),
                this._showBackdrop(function () {
                  return e._showElement(t);
                }));
          }
        }),
        (e.hide = function (t) {
          var e = this;
          if (
            (t && t.preventDefault(), this._isShown && !this._isTransitioning)
          ) {
            var n = i.default.Event('hide.bs.modal');
            if (
              (i.default(this._element).trigger(n),
              this._isShown && !n.isDefaultPrevented())
            ) {
              this._isShown = !1;
              var o = i.default(this._element).hasClass(ce);
              if (
                (o && (this._isTransitioning = !0),
                this._setEscapeEvent(),
                this._setResizeEvent(),
                i.default(document).off(_e),
                i.default(this._element).removeClass(he),
                i.default(this._element).off(be),
                i.default(this._dialog).off(Ee),
                o)
              ) {
                var r = u.getTransitionDurationFromElement(this._element);
                i.default(this._element)
                  .one(u.TRANSITION_END, function (t) {
                    return e._hideModal(t);
                  })
                  .emulateTransitionEnd(r);
              } else this._hideModal();
            }
          }
        }),
        (e.dispose = function () {
          [window, this._element, this._dialog].forEach(function (t) {
            return i.default(t).off('.bs.modal');
          }),
            i.default(document).off(_e),
            i.default.removeData(this._element, ue),
            (this._config = null),
            (this._element = null),
            (this._dialog = null),
            (this._backdrop = null),
            (this._isShown = null),
            (this._isBodyOverflowing = null),
            (this._ignoreBackdropClick = null),
            (this._isTransitioning = null),
            (this._scrollbarWidth = null);
        }),
        (e.handleUpdate = function () {
          this._adjustDialog();
        }),
        (e._getConfig = function (t) {
          return (t = a({}, Te, t)), u.typeCheckConfig('modal', t, Ce), t;
        }),
        (e._triggerBackdropTransition = function () {
          var t = this,
            e = i.default.Event('hidePrevented.bs.modal');
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            var n =
              this._element.scrollHeight >
              document.documentElement.clientHeight;
            n || (this._element.style.overflowY = 'hidden'),
              this._element.classList.add(pe);
            var o = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._element).off(u.TRANSITION_END),
              i
                .default(this._element)
                .one(u.TRANSITION_END, function () {
                  t._element.classList.remove(pe),
                    n ||
                      i
                        .default(t._element)
                        .one(u.TRANSITION_END, function () {
                          t._element.style.overflowY = '';
                        })
                        .emulateTransitionEnd(t._element, o);
                })
                .emulateTransitionEnd(o),
              this._element.focus();
          }
        }),
        (e._showElement = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce),
            o = this._dialog ? this._dialog.querySelector('.modal-body') : null;
          (this._element.parentNode &&
            this._element.parentNode.nodeType === Node.ELEMENT_NODE) ||
            document.body.appendChild(this._element),
            (this._element.style.display = 'block'),
            this._element.removeAttribute('aria-hidden'),
            this._element.setAttribute('aria-modal', !0),
            this._element.setAttribute('role', 'dialog'),
            i.default(this._dialog).hasClass('modal-dialog-scrollable') && o
              ? (o.scrollTop = 0)
              : (this._element.scrollTop = 0),
            n && u.reflow(this._element),
            i.default(this._element).addClass(he),
            this._config.focus && this._enforceFocus();
          var r = i.default.Event('shown.bs.modal', { relatedTarget: t }),
            a = function () {
              e._config.focus && e._element.focus(),
                (e._isTransitioning = !1),
                i.default(e._element).trigger(r);
            };
          if (n) {
            var s = u.getTransitionDurationFromElement(this._dialog);
            i.default(this._dialog)
              .one(u.TRANSITION_END, a)
              .emulateTransitionEnd(s);
          } else a();
        }),
        (e._enforceFocus = function () {
          var t = this;
          i.default(document)
            .off(_e)
            .on(_e, function (e) {
              document !== e.target &&
                t._element !== e.target &&
                0 === i.default(t._element).has(e.target).length &&
                t._element.focus();
            });
        }),
        (e._setEscapeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(this._element).on(ye, function (e) {
                t._config.keyboard && 27 === e.which
                  ? (e.preventDefault(), t.hide())
                  : t._config.keyboard ||
                    27 !== e.which ||
                    t._triggerBackdropTransition();
              })
            : this._isShown || i.default(this._element).off(ye);
        }),
        (e._setResizeEvent = function () {
          var t = this;
          this._isShown
            ? i.default(window).on(ve, function (e) {
                return t.handleUpdate(e);
              })
            : i.default(window).off(ve);
        }),
        (e._hideModal = function () {
          var t = this;
          (this._element.style.display = 'none'),
            this._element.setAttribute('aria-hidden', !0),
            this._element.removeAttribute('aria-modal'),
            this._element.removeAttribute('role'),
            (this._isTransitioning = !1),
            this._showBackdrop(function () {
              i.default(document.body).removeClass(de),
                t._resetAdjustments(),
                t._resetScrollbar(),
                i.default(t._element).trigger(me);
            });
        }),
        (e._removeBackdrop = function () {
          this._backdrop &&
            (i.default(this._backdrop).remove(), (this._backdrop = null));
        }),
        (e._showBackdrop = function (t) {
          var e = this,
            n = i.default(this._element).hasClass(ce) ? ce : '';
          if (this._isShown && this._config.backdrop) {
            if (
              ((this._backdrop = document.createElement('div')),
              (this._backdrop.className = 'modal-backdrop'),
              n && this._backdrop.classList.add(n),
              i.default(this._backdrop).appendTo(document.body),
              i.default(this._element).on(be, function (t) {
                e._ignoreBackdropClick
                  ? (e._ignoreBackdropClick = !1)
                  : t.target === t.currentTarget &&
                    ('static' === e._config.backdrop
                      ? e._triggerBackdropTransition()
                      : e.hide());
              }),
              n && u.reflow(this._backdrop),
              i.default(this._backdrop).addClass(he),
              !t)
            )
              return;
            if (!n) return void t();
            var o = u.getTransitionDurationFromElement(this._backdrop);
            i.default(this._backdrop)
              .one(u.TRANSITION_END, t)
              .emulateTransitionEnd(o);
          } else if (!this._isShown && this._backdrop) {
            i.default(this._backdrop).removeClass(he);
            var r = function () {
              e._removeBackdrop(), t && t();
            };
            if (i.default(this._element).hasClass(ce)) {
              var a = u.getTransitionDurationFromElement(this._backdrop);
              i.default(this._backdrop)
                .one(u.TRANSITION_END, r)
                .emulateTransitionEnd(a);
            } else r();
          } else t && t();
        }),
        (e._adjustDialog = function () {
          var t =
            this._element.scrollHeight > document.documentElement.clientHeight;
          !this._isBodyOverflowing &&
            t &&
            (this._element.style.paddingLeft = this._scrollbarWidth + 'px'),
            this._isBodyOverflowing &&
              !t &&
              (this._element.style.paddingRight = this._scrollbarWidth + 'px');
        }),
        (e._resetAdjustments = function () {
          (this._element.style.paddingLeft = ''),
            (this._element.style.paddingRight = '');
        }),
        (e._checkScrollbar = function () {
          var t = document.body.getBoundingClientRect();
          (this._isBodyOverflowing =
            Math.round(t.left + t.right) < window.innerWidth),
            (this._scrollbarWidth = this._getScrollbarWidth());
        }),
        (e._setScrollbar = function () {
          var t = this;
          if (this._isBodyOverflowing) {
            var e = [].slice.call(document.querySelectorAll(we)),
              n = [].slice.call(document.querySelectorAll('.sticky-top'));
            i.default(e).each(function (e, n) {
              var o = n.style.paddingRight,
                r = i.default(n).css('padding-right');
              i.default(n)
                .data('padding-right', o)
                .css('padding-right', parseFloat(r) + t._scrollbarWidth + 'px');
            }),
              i.default(n).each(function (e, n) {
                var o = n.style.marginRight,
                  r = i.default(n).css('margin-right');
                i.default(n)
                  .data('margin-right', o)
                  .css(
                    'margin-right',
                    parseFloat(r) - t._scrollbarWidth + 'px'
                  );
              });
            var o = document.body.style.paddingRight,
              r = i.default(document.body).css('padding-right');
            i.default(document.body)
              .data('padding-right', o)
              .css(
                'padding-right',
                parseFloat(r) + this._scrollbarWidth + 'px'
              );
          }
          i.default(document.body).addClass(de);
        }),
        (e._resetScrollbar = function () {
          var t = [].slice.call(document.querySelectorAll(we));
          i.default(t).each(function (t, e) {
            var n = i.default(e).data('padding-right');
            i.default(e).removeData('padding-right'),
              (e.style.paddingRight = n || '');
          });
          var e = [].slice.call(document.querySelectorAll('.sticky-top'));
          i.default(e).each(function (t, e) {
            var n = i.default(e).data('margin-right');
            'undefined' != typeof n &&
              i.default(e).css('margin-right', n).removeData('margin-right');
          });
          var n = i.default(document.body).data('padding-right');
          i.default(document.body).removeData('padding-right'),
            (document.body.style.paddingRight = n || '');
        }),
        (e._getScrollbarWidth = function () {
          var t = document.createElement('div');
          (t.className = 'modal-scrollbar-measure'),
            document.body.appendChild(t);
          var e = t.getBoundingClientRect().width - t.clientWidth;
          return document.body.removeChild(t), e;
        }),
        (t._jQueryInterface = function (e, n) {
          return this.each(function () {
            var o = i.default(this).data(ue),
              r = a(
                {},
                Te,
                i.default(this).data(),
                'object' == typeof e && e ? e : {}
              );
            if (
              (o || ((o = new t(this, r)), i.default(this).data(ue, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](n);
            } else r.show && o.show(n);
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Te;
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on('click.bs.modal.data-api', '[data-toggle="modal"]', function (t) {
      var e,
        n = this,
        o = u.getSelectorFromElement(this);
      o && (e = document.querySelector(o));
      var r = i.default(e).data(ue)
        ? 'toggle'
        : a({}, i.default(e).data(), i.default(this).data());
      ('A' !== this.tagName && 'AREA' !== this.tagName) || t.preventDefault();
      var s = i.default(e).one(ge, function (t) {
        t.isDefaultPrevented() ||
          s.one(me, function () {
            i.default(n).is(':visible') && n.focus();
          });
      });
      Se._jQueryInterface.call(i.default(e), r, this);
    }),
    (i.default.fn.modal = Se._jQueryInterface),
    (i.default.fn.modal.Constructor = Se),
    (i.default.fn.modal.noConflict = function () {
      return (i.default.fn.modal = fe), Se._jQueryInterface;
    });
  var Ne = [
      'background',
      'cite',
      'href',
      'itemtype',
      'longdesc',
      'poster',
      'src',
      'xlink:href',
    ],
    De = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
    Ae =
      /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  function ke(t, e, n) {
    if (0 === t.length) return t;
    if (n && 'function' == typeof n) return n(t);
    for (
      var i = new window.DOMParser().parseFromString(t, 'text/html'),
        o = Object.keys(e),
        r = [].slice.call(i.body.querySelectorAll('*')),
        a = function (t, n) {
          var i = r[t],
            a = i.nodeName.toLowerCase();
          if (-1 === o.indexOf(i.nodeName.toLowerCase()))
            return i.parentNode.removeChild(i), 'continue';
          var s = [].slice.call(i.attributes),
            l = [].concat(e['*'] || [], e[a] || []);
          s.forEach(function (t) {
            (function (t, e) {
              var n = t.nodeName.toLowerCase();
              if (-1 !== e.indexOf(n))
                return (
                  -1 === Ne.indexOf(n) ||
                  Boolean(De.test(t.nodeValue) || Ae.test(t.nodeValue))
                );
              for (
                var i = e.filter(function (t) {
                    return t instanceof RegExp;
                  }),
                  o = 0,
                  r = i.length;
                o < r;
                o++
              )
                if (i[o].test(n)) return !0;
              return !1;
            })(t, l) || i.removeAttribute(t.nodeName);
          });
        },
        s = 0,
        l = r.length;
      s < l;
      s++
    )
      a(s);
    return i.body.innerHTML;
  }
  var Ie = 'tooltip',
    Oe = 'bs.tooltip',
    xe = i.default.fn.tooltip,
    je = new RegExp('(^|\\s)bs-tooltip\\S+', 'g'),
    Le = ['sanitize', 'whiteList', 'sanitizeFn'],
    Pe = 'fade',
    Fe = 'show',
    Re = 'show',
    He = 'out',
    Me = 'hover',
    qe = 'focus',
    Be = {
      AUTO: 'auto',
      TOP: 'top',
      RIGHT: 'right',
      BOTTOM: 'bottom',
      LEFT: 'left',
    },
    Qe = {
      animation: !0,
      template:
        '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
      trigger: 'hover focus',
      title: '',
      delay: 0,
      html: !1,
      selector: !1,
      placement: 'top',
      offset: 0,
      container: !1,
      fallbackPlacement: 'flip',
      boundary: 'scrollParent',
      customClass: '',
      sanitize: !0,
      sanitizeFn: null,
      whiteList: {
        '*': ['class', 'dir', 'id', 'lang', 'role', /^aria-[\w-]*$/i],
        a: ['target', 'href', 'title', 'rel'],
        area: [],
        b: [],
        br: [],
        col: [],
        code: [],
        div: [],
        em: [],
        hr: [],
        h1: [],
        h2: [],
        h3: [],
        h4: [],
        h5: [],
        h6: [],
        i: [],
        img: ['src', 'srcset', 'alt', 'title', 'width', 'height'],
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
      popperConfig: null,
    },
    We = {
      animation: 'boolean',
      template: 'string',
      title: '(string|element|function)',
      trigger: 'string',
      delay: '(number|object)',
      html: 'boolean',
      selector: '(string|boolean)',
      placement: '(string|function)',
      offset: '(number|string|function)',
      container: '(string|element|boolean)',
      fallbackPlacement: '(string|array)',
      boundary: '(string|element)',
      customClass: '(string|function)',
      sanitize: 'boolean',
      sanitizeFn: '(null|function)',
      whiteList: 'object',
      popperConfig: '(null|object)',
    },
    Ue = {
      HIDE: 'hide.bs.tooltip',
      HIDDEN: 'hidden.bs.tooltip',
      SHOW: 'show.bs.tooltip',
      SHOWN: 'shown.bs.tooltip',
      INSERTED: 'inserted.bs.tooltip',
      CLICK: 'click.bs.tooltip',
      FOCUSIN: 'focusin.bs.tooltip',
      FOCUSOUT: 'focusout.bs.tooltip',
      MOUSEENTER: 'mouseenter.bs.tooltip',
      MOUSELEAVE: 'mouseleave.bs.tooltip',
    },
    Ve = (function () {
      function t(t, e) {
        if ('undefined' == typeof Yt)
          throw new TypeError(
            "Bootstrap's tooltips require Popper (https://popper.js.org)"
          );
        (this._isEnabled = !0),
          (this._timeout = 0),
          (this._hoverState = ''),
          (this._activeTrigger = {}),
          (this._popper = null),
          (this.element = t),
          (this.config = this._getConfig(e)),
          (this.tip = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.enable = function () {
          this._isEnabled = !0;
        }),
        (e.disable = function () {
          this._isEnabled = !1;
        }),
        (e.toggleEnabled = function () {
          this._isEnabled = !this._isEnabled;
        }),
        (e.toggle = function (t) {
          if (this._isEnabled)
            if (t) {
              var e = this.constructor.DATA_KEY,
                n = i.default(t.currentTarget).data(e);
              n ||
                ((n = new this.constructor(
                  t.currentTarget,
                  this._getDelegateConfig()
                )),
                i.default(t.currentTarget).data(e, n)),
                (n._activeTrigger.click = !n._activeTrigger.click),
                n._isWithActiveTrigger()
                  ? n._enter(null, n)
                  : n._leave(null, n);
            } else {
              if (i.default(this.getTipElement()).hasClass(Fe))
                return void this._leave(null, this);
              this._enter(null, this);
            }
        }),
        (e.dispose = function () {
          clearTimeout(this._timeout),
            i.default.removeData(this.element, this.constructor.DATA_KEY),
            i.default(this.element).off(this.constructor.EVENT_KEY),
            i
              .default(this.element)
              .closest('.modal')
              .off('hide.bs.modal', this._hideModalHandler),
            this.tip && i.default(this.tip).remove(),
            (this._isEnabled = null),
            (this._timeout = null),
            (this._hoverState = null),
            (this._activeTrigger = null),
            this._popper && this._popper.destroy(),
            (this._popper = null),
            (this.element = null),
            (this.config = null),
            (this.tip = null);
        }),
        (e.show = function () {
          var t = this;
          if ('none' === i.default(this.element).css('display'))
            throw new Error('Please use show on visible elements');
          var e = i.default.Event(this.constructor.Event.SHOW);
          if (this.isWithContent() && this._isEnabled) {
            i.default(this.element).trigger(e);
            var n = u.findShadowRoot(this.element),
              o = i.default.contains(
                null !== n ? n : this.element.ownerDocument.documentElement,
                this.element
              );
            if (e.isDefaultPrevented() || !o) return;
            var r = this.getTipElement(),
              a = u.getUID(this.constructor.NAME);
            r.setAttribute('id', a),
              this.element.setAttribute('aria-describedby', a),
              this.setContent(),
              this.config.animation && i.default(r).addClass(Pe);
            var s =
                'function' == typeof this.config.placement
                  ? this.config.placement.call(this, r, this.element)
                  : this.config.placement,
              l = this._getAttachment(s);
            this.addAttachmentClass(l);
            var f = this._getContainer();
            i.default(r).data(this.constructor.DATA_KEY, this),
              i.default.contains(
                this.element.ownerDocument.documentElement,
                this.tip
              ) || i.default(r).appendTo(f),
              i.default(this.element).trigger(this.constructor.Event.INSERTED),
              (this._popper = new Yt(
                this.element,
                r,
                this._getPopperConfig(l)
              )),
              i.default(r).addClass(Fe),
              i.default(r).addClass(this.config.customClass),
              'ontouchstart' in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .on('mouseover', null, i.default.noop);
            var d = function () {
              t.config.animation && t._fixTransition();
              var e = t._hoverState;
              (t._hoverState = null),
                i.default(t.element).trigger(t.constructor.Event.SHOWN),
                e === He && t._leave(null, t);
            };
            if (i.default(this.tip).hasClass(Pe)) {
              var c = u.getTransitionDurationFromElement(this.tip);
              i.default(this.tip)
                .one(u.TRANSITION_END, d)
                .emulateTransitionEnd(c);
            } else d();
          }
        }),
        (e.hide = function (t) {
          var e = this,
            n = this.getTipElement(),
            o = i.default.Event(this.constructor.Event.HIDE),
            r = function () {
              e._hoverState !== Re &&
                n.parentNode &&
                n.parentNode.removeChild(n),
                e._cleanTipClass(),
                e.element.removeAttribute('aria-describedby'),
                i.default(e.element).trigger(e.constructor.Event.HIDDEN),
                null !== e._popper && e._popper.destroy(),
                t && t();
            };
          if ((i.default(this.element).trigger(o), !o.isDefaultPrevented())) {
            if (
              (i.default(n).removeClass(Fe),
              'ontouchstart' in document.documentElement &&
                i
                  .default(document.body)
                  .children()
                  .off('mouseover', null, i.default.noop),
              (this._activeTrigger.click = !1),
              (this._activeTrigger.focus = !1),
              (this._activeTrigger.hover = !1),
              i.default(this.tip).hasClass(Pe))
            ) {
              var a = u.getTransitionDurationFromElement(n);
              i.default(n).one(u.TRANSITION_END, r).emulateTransitionEnd(a);
            } else r();
            this._hoverState = '';
          }
        }),
        (e.update = function () {
          null !== this._popper && this._popper.scheduleUpdate();
        }),
        (e.isWithContent = function () {
          return Boolean(this.getTitle());
        }),
        (e.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass('bs-tooltip-' + t);
        }),
        (e.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (e.setContent = function () {
          var t = this.getTipElement();
          this.setElementContent(
            i.default(t.querySelectorAll('.tooltip-inner')),
            this.getTitle()
          ),
            i.default(t).removeClass('fade show');
        }),
        (e.setElementContent = function (t, e) {
          'object' != typeof e || (!e.nodeType && !e.jquery)
            ? this.config.html
              ? (this.config.sanitize &&
                  (e = ke(e, this.config.whiteList, this.config.sanitizeFn)),
                t.html(e))
              : t.text(e)
            : this.config.html
            ? i.default(e).parent().is(t) || t.empty().append(e)
            : t.text(i.default(e).text());
        }),
        (e.getTitle = function () {
          var t = this.element.getAttribute('data-original-title');
          return (
            t ||
              (t =
                'function' == typeof this.config.title
                  ? this.config.title.call(this.element)
                  : this.config.title),
            t
          );
        }),
        (e._getPopperConfig = function (t) {
          var e = this;
          return a(
            {},
            {
              placement: t,
              modifiers: {
                offset: this._getOffset(),
                flip: { behavior: this.config.fallbackPlacement },
                arrow: { element: '.arrow' },
                preventOverflow: { boundariesElement: this.config.boundary },
              },
              onCreate: function (t) {
                t.originalPlacement !== t.placement &&
                  e._handlePopperPlacementChange(t);
              },
              onUpdate: function (t) {
                return e._handlePopperPlacementChange(t);
              },
            },
            this.config.popperConfig
          );
        }),
        (e._getOffset = function () {
          var t = this,
            e = {};
          return (
            'function' == typeof this.config.offset
              ? (e.fn = function (e) {
                  return (
                    (e.offsets = a(
                      {},
                      e.offsets,
                      t.config.offset(e.offsets, t.element)
                    )),
                    e
                  );
                })
              : (e.offset = this.config.offset),
            e
          );
        }),
        (e._getContainer = function () {
          return !1 === this.config.container
            ? document.body
            : u.isElement(this.config.container)
            ? i.default(this.config.container)
            : i.default(document).find(this.config.container);
        }),
        (e._getAttachment = function (t) {
          return Be[t.toUpperCase()];
        }),
        (e._setListeners = function () {
          var t = this;
          this.config.trigger.split(' ').forEach(function (e) {
            if ('click' === e)
              i.default(t.element).on(
                t.constructor.Event.CLICK,
                t.config.selector,
                function (e) {
                  return t.toggle(e);
                }
              );
            else if ('manual' !== e) {
              var n =
                  e === Me
                    ? t.constructor.Event.MOUSEENTER
                    : t.constructor.Event.FOCUSIN,
                o =
                  e === Me
                    ? t.constructor.Event.MOUSELEAVE
                    : t.constructor.Event.FOCUSOUT;
              i.default(t.element)
                .on(n, t.config.selector, function (e) {
                  return t._enter(e);
                })
                .on(o, t.config.selector, function (e) {
                  return t._leave(e);
                });
            }
          }),
            (this._hideModalHandler = function () {
              t.element && t.hide();
            }),
            i
              .default(this.element)
              .closest('.modal')
              .on('hide.bs.modal', this._hideModalHandler),
            this.config.selector
              ? (this.config = a({}, this.config, {
                  trigger: 'manual',
                  selector: '',
                }))
              : this._fixTitle();
        }),
        (e._fixTitle = function () {
          var t = typeof this.element.getAttribute('data-original-title');
          (this.element.getAttribute('title') || 'string' !== t) &&
            (this.element.setAttribute(
              'data-original-title',
              this.element.getAttribute('title') || ''
            ),
            this.element.setAttribute('title', ''));
        }),
        (e._enter = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusin' === t.type ? qe : Me] = !0),
            i.default(e.getTipElement()).hasClass(Fe) || e._hoverState === Re
              ? (e._hoverState = Re)
              : (clearTimeout(e._timeout),
                (e._hoverState = Re),
                e.config.delay && e.config.delay.show
                  ? (e._timeout = setTimeout(function () {
                      e._hoverState === Re && e.show();
                    }, e.config.delay.show))
                  : e.show());
        }),
        (e._leave = function (t, e) {
          var n = this.constructor.DATA_KEY;
          (e = e || i.default(t.currentTarget).data(n)) ||
            ((e = new this.constructor(
              t.currentTarget,
              this._getDelegateConfig()
            )),
            i.default(t.currentTarget).data(n, e)),
            t && (e._activeTrigger['focusout' === t.type ? qe : Me] = !1),
            e._isWithActiveTrigger() ||
              (clearTimeout(e._timeout),
              (e._hoverState = He),
              e.config.delay && e.config.delay.hide
                ? (e._timeout = setTimeout(function () {
                    e._hoverState === He && e.hide();
                  }, e.config.delay.hide))
                : e.hide());
        }),
        (e._isWithActiveTrigger = function () {
          for (var t in this._activeTrigger)
            if (this._activeTrigger[t]) return !0;
          return !1;
        }),
        (e._getConfig = function (t) {
          var e = i.default(this.element).data();
          return (
            Object.keys(e).forEach(function (t) {
              -1 !== Le.indexOf(t) && delete e[t];
            }),
            'number' ==
              typeof (t = a(
                {},
                this.constructor.Default,
                e,
                'object' == typeof t && t ? t : {}
              )).delay && (t.delay = { show: t.delay, hide: t.delay }),
            'number' == typeof t.title && (t.title = t.title.toString()),
            'number' == typeof t.content && (t.content = t.content.toString()),
            u.typeCheckConfig(Ie, t, this.constructor.DefaultType),
            t.sanitize &&
              (t.template = ke(t.template, t.whiteList, t.sanitizeFn)),
            t
          );
        }),
        (e._getDelegateConfig = function () {
          var t = {};
          if (this.config)
            for (var e in this.config)
              this.constructor.Default[e] !== this.config[e] &&
                (t[e] = this.config[e]);
          return t;
        }),
        (e._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr('class').match(je);
          null !== e && e.length && t.removeClass(e.join(''));
        }),
        (e._handlePopperPlacementChange = function (t) {
          (this.tip = t.instance.popper),
            this._cleanTipClass(),
            this.addAttachmentClass(this._getAttachment(t.placement));
        }),
        (e._fixTransition = function () {
          var t = this.getTipElement(),
            e = this.config.animation;
          null === t.getAttribute('x-placement') &&
            (i.default(t).removeClass(Pe),
            (this.config.animation = !1),
            this.hide(),
            this.show(),
            (this.config.animation = e));
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(Oe),
              r = 'object' == typeof e && e;
            if (
              (o || !/dispose|hide/.test(e)) &&
              (o || ((o = new t(this, r)), n.data(Oe, o)), 'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Qe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return Ie;
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Oe;
            },
          },
          {
            key: 'Event',
            get: function () {
              return Ue;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.tooltip';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return We;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.tooltip = Ve._jQueryInterface),
    (i.default.fn.tooltip.Constructor = Ve),
    (i.default.fn.tooltip.noConflict = function () {
      return (i.default.fn.tooltip = xe), Ve._jQueryInterface;
    });
  var Ye = 'bs.popover',
    ze = i.default.fn.popover,
    Ke = new RegExp('(^|\\s)bs-popover\\S+', 'g'),
    Xe = a({}, Ve.Default, {
      placement: 'right',
      trigger: 'click',
      content: '',
      template:
        '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
    }),
    Ge = a({}, Ve.DefaultType, { content: '(string|element|function)' }),
    $e = {
      HIDE: 'hide.bs.popover',
      HIDDEN: 'hidden.bs.popover',
      SHOW: 'show.bs.popover',
      SHOWN: 'shown.bs.popover',
      INSERTED: 'inserted.bs.popover',
      CLICK: 'click.bs.popover',
      FOCUSIN: 'focusin.bs.popover',
      FOCUSOUT: 'focusout.bs.popover',
      MOUSEENTER: 'mouseenter.bs.popover',
      MOUSELEAVE: 'mouseleave.bs.popover',
    },
    Je = (function (t) {
      var e, n;
      function o() {
        return t.apply(this, arguments) || this;
      }
      (n = t),
        ((e = o).prototype = Object.create(n.prototype)),
        (e.prototype.constructor = e),
        s(e, n);
      var a = o.prototype;
      return (
        (a.isWithContent = function () {
          return this.getTitle() || this._getContent();
        }),
        (a.addAttachmentClass = function (t) {
          i.default(this.getTipElement()).addClass('bs-popover-' + t);
        }),
        (a.getTipElement = function () {
          return (
            (this.tip = this.tip || i.default(this.config.template)[0]),
            this.tip
          );
        }),
        (a.setContent = function () {
          var t = i.default(this.getTipElement());
          this.setElementContent(t.find('.popover-header'), this.getTitle());
          var e = this._getContent();
          'function' == typeof e && (e = e.call(this.element)),
            this.setElementContent(t.find('.popover-body'), e),
            t.removeClass('fade show');
        }),
        (a._getContent = function () {
          return (
            this.element.getAttribute('data-content') || this.config.content
          );
        }),
        (a._cleanTipClass = function () {
          var t = i.default(this.getTipElement()),
            e = t.attr('class').match(Ke);
          null !== e && e.length > 0 && t.removeClass(e.join(''));
        }),
        (o._jQueryInterface = function (t) {
          return this.each(function () {
            var e = i.default(this).data(Ye),
              n = 'object' == typeof t ? t : null;
            if (
              (e || !/dispose|hide/.test(t)) &&
              (e || ((e = new o(this, n)), i.default(this).data(Ye, e)),
              'string' == typeof t)
            ) {
              if ('undefined' == typeof e[t])
                throw new TypeError('No method named "' + t + '"');
              e[t]();
            }
          });
        }),
        r(o, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return Xe;
            },
          },
          {
            key: 'NAME',
            get: function () {
              return 'popover';
            },
          },
          {
            key: 'DATA_KEY',
            get: function () {
              return Ye;
            },
          },
          {
            key: 'Event',
            get: function () {
              return $e;
            },
          },
          {
            key: 'EVENT_KEY',
            get: function () {
              return '.bs.popover';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Ge;
            },
          },
        ]),
        o
      );
    })(Ve);
  (i.default.fn.popover = Je._jQueryInterface),
    (i.default.fn.popover.Constructor = Je),
    (i.default.fn.popover.noConflict = function () {
      return (i.default.fn.popover = ze), Je._jQueryInterface;
    });
  var Ze = 'scrollspy',
    tn = 'bs.scrollspy',
    en = i.default.fn[Ze],
    nn = 'active',
    on = 'position',
    rn = '.nav, .list-group',
    an = { offset: 10, method: 'auto', target: '' },
    sn = { offset: 'number', method: 'string', target: '(string|element)' },
    ln = (function () {
      function t(t, e) {
        var n = this;
        (this._element = t),
          (this._scrollElement = 'BODY' === t.tagName ? window : t),
          (this._config = this._getConfig(e)),
          (this._selector =
            this._config.target +
            ' .nav-link,' +
            this._config.target +
            ' .list-group-item,' +
            this._config.target +
            ' .dropdown-item'),
          (this._offsets = []),
          (this._targets = []),
          (this._activeTarget = null),
          (this._scrollHeight = 0),
          i
            .default(this._scrollElement)
            .on('scroll.bs.scrollspy', function (t) {
              return n._process(t);
            }),
          this.refresh(),
          this._process();
      }
      var e = t.prototype;
      return (
        (e.refresh = function () {
          var t = this,
            e =
              this._scrollElement === this._scrollElement.window
                ? 'offset'
                : on,
            n = 'auto' === this._config.method ? e : this._config.method,
            o = n === on ? this._getScrollTop() : 0;
          (this._offsets = []),
            (this._targets = []),
            (this._scrollHeight = this._getScrollHeight()),
            [].slice
              .call(document.querySelectorAll(this._selector))
              .map(function (t) {
                var e,
                  r = u.getSelectorFromElement(t);
                if ((r && (e = document.querySelector(r)), e)) {
                  var a = e.getBoundingClientRect();
                  if (a.width || a.height)
                    return [i.default(e)[n]().top + o, r];
                }
                return null;
              })
              .filter(function (t) {
                return t;
              })
              .sort(function (t, e) {
                return t[0] - e[0];
              })
              .forEach(function (e) {
                t._offsets.push(e[0]), t._targets.push(e[1]);
              });
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, tn),
            i.default(this._scrollElement).off('.bs.scrollspy'),
            (this._element = null),
            (this._scrollElement = null),
            (this._config = null),
            (this._selector = null),
            (this._offsets = null),
            (this._targets = null),
            (this._activeTarget = null),
            (this._scrollHeight = null);
        }),
        (e._getConfig = function (t) {
          if (
            'string' !=
              typeof (t = a({}, an, 'object' == typeof t && t ? t : {}))
                .target &&
            u.isElement(t.target)
          ) {
            var e = i.default(t.target).attr('id');
            e || ((e = u.getUID(Ze)), i.default(t.target).attr('id', e)),
              (t.target = '#' + e);
          }
          return u.typeCheckConfig(Ze, t, sn), t;
        }),
        (e._getScrollTop = function () {
          return this._scrollElement === window
            ? this._scrollElement.pageYOffset
            : this._scrollElement.scrollTop;
        }),
        (e._getScrollHeight = function () {
          return (
            this._scrollElement.scrollHeight ||
            Math.max(
              document.body.scrollHeight,
              document.documentElement.scrollHeight
            )
          );
        }),
        (e._getOffsetHeight = function () {
          return this._scrollElement === window
            ? window.innerHeight
            : this._scrollElement.getBoundingClientRect().height;
        }),
        (e._process = function () {
          var t = this._getScrollTop() + this._config.offset,
            e = this._getScrollHeight(),
            n = this._config.offset + e - this._getOffsetHeight();
          if ((this._scrollHeight !== e && this.refresh(), t >= n)) {
            var i = this._targets[this._targets.length - 1];
            this._activeTarget !== i && this._activate(i);
          } else {
            if (
              this._activeTarget &&
              t < this._offsets[0] &&
              this._offsets[0] > 0
            )
              return (this._activeTarget = null), void this._clear();
            for (var o = this._offsets.length; o--; )
              this._activeTarget !== this._targets[o] &&
                t >= this._offsets[o] &&
                ('undefined' == typeof this._offsets[o + 1] ||
                  t < this._offsets[o + 1]) &&
                this._activate(this._targets[o]);
          }
        }),
        (e._activate = function (t) {
          (this._activeTarget = t), this._clear();
          var e = this._selector.split(',').map(function (e) {
              return (
                e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
              );
            }),
            n = i.default(
              [].slice.call(document.querySelectorAll(e.join(',')))
            );
          n.hasClass('dropdown-item')
            ? (n.closest('.dropdown').find('.dropdown-toggle').addClass(nn),
              n.addClass(nn))
            : (n.addClass(nn),
              n.parents(rn).prev('.nav-link, .list-group-item').addClass(nn),
              n
                .parents(rn)
                .prev('.nav-item')
                .children('.nav-link')
                .addClass(nn)),
            i
              .default(this._scrollElement)
              .trigger('activate.bs.scrollspy', { relatedTarget: t });
        }),
        (e._clear = function () {
          [].slice
            .call(document.querySelectorAll(this._selector))
            .filter(function (t) {
              return t.classList.contains(nn);
            })
            .forEach(function (t) {
              return t.classList.remove(nn);
            });
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this).data(tn);
            if (
              (n ||
                ((n = new t(this, 'object' == typeof e && e)),
                i.default(this).data(tn, n)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof n[e])
                throw new TypeError('No method named "' + e + '"');
              n[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'Default',
            get: function () {
              return an;
            },
          },
        ]),
        t
      );
    })();
  i.default(window).on('load.bs.scrollspy.data-api', function () {
    for (
      var t = [].slice.call(document.querySelectorAll('[data-spy="scroll"]')),
        e = t.length;
      e--;

    ) {
      var n = i.default(t[e]);
      ln._jQueryInterface.call(n, n.data());
    }
  }),
    (i.default.fn[Ze] = ln._jQueryInterface),
    (i.default.fn[Ze].Constructor = ln),
    (i.default.fn[Ze].noConflict = function () {
      return (i.default.fn[Ze] = en), ln._jQueryInterface;
    });
  var un = 'bs.tab',
    fn = i.default.fn.tab,
    dn = 'active',
    cn = 'fade',
    hn = 'show',
    pn = '.active',
    mn = '> li > .active',
    gn = (function () {
      function t(t) {
        this._element = t;
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this;
          if (
            !(
              (this._element.parentNode &&
                this._element.parentNode.nodeType === Node.ELEMENT_NODE &&
                i.default(this._element).hasClass(dn)) ||
              i.default(this._element).hasClass('disabled')
            )
          ) {
            var e,
              n,
              o = i.default(this._element).closest('.nav, .list-group')[0],
              r = u.getSelectorFromElement(this._element);
            if (o) {
              var a = 'UL' === o.nodeName || 'OL' === o.nodeName ? mn : pn;
              n = (n = i.default.makeArray(i.default(o).find(a)))[n.length - 1];
            }
            var s = i.default.Event('hide.bs.tab', {
                relatedTarget: this._element,
              }),
              l = i.default.Event('show.bs.tab', { relatedTarget: n });
            if (
              (n && i.default(n).trigger(s),
              i.default(this._element).trigger(l),
              !l.isDefaultPrevented() && !s.isDefaultPrevented())
            ) {
              r && (e = document.querySelector(r)),
                this._activate(this._element, o);
              var f = function () {
                var e = i.default.Event('hidden.bs.tab', {
                    relatedTarget: t._element,
                  }),
                  o = i.default.Event('shown.bs.tab', { relatedTarget: n });
                i.default(n).trigger(e), i.default(t._element).trigger(o);
              };
              e ? this._activate(e, e.parentNode, f) : f();
            }
          }
        }),
        (e.dispose = function () {
          i.default.removeData(this._element, un), (this._element = null);
        }),
        (e._activate = function (t, e, n) {
          var o = this,
            r = (
              !e || ('UL' !== e.nodeName && 'OL' !== e.nodeName)
                ? i.default(e).children(pn)
                : i.default(e).find(mn)
            )[0],
            a = n && r && i.default(r).hasClass(cn),
            s = function () {
              return o._transitionComplete(t, r, n);
            };
          if (r && a) {
            var l = u.getTransitionDurationFromElement(r);
            i.default(r)
              .removeClass(hn)
              .one(u.TRANSITION_END, s)
              .emulateTransitionEnd(l);
          } else s();
        }),
        (e._transitionComplete = function (t, e, n) {
          if (e) {
            i.default(e).removeClass(dn);
            var o = i.default(e.parentNode).find('> .dropdown-menu .active')[0];
            o && i.default(o).removeClass(dn),
              'tab' === e.getAttribute('role') &&
                e.setAttribute('aria-selected', !1);
          }
          i.default(t).addClass(dn),
            'tab' === t.getAttribute('role') &&
              t.setAttribute('aria-selected', !0),
            u.reflow(t),
            t.classList.contains(cn) && t.classList.add(hn);
          var r = t.parentNode;
          if (
            (r && 'LI' === r.nodeName && (r = r.parentNode),
            r && i.default(r).hasClass('dropdown-menu'))
          ) {
            var a = i.default(t).closest('.dropdown')[0];
            if (a) {
              var s = [].slice.call(a.querySelectorAll('.dropdown-toggle'));
              i.default(s).addClass(dn);
            }
            t.setAttribute('aria-expanded', !0);
          }
          n && n();
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(un);
            if (
              (o || ((o = new t(this)), n.data(un, o)), 'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e]();
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
        ]),
        t
      );
    })();
  i
    .default(document)
    .on(
      'click.bs.tab.data-api',
      '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
      function (t) {
        t.preventDefault(), gn._jQueryInterface.call(i.default(this), 'show');
      }
    ),
    (i.default.fn.tab = gn._jQueryInterface),
    (i.default.fn.tab.Constructor = gn),
    (i.default.fn.tab.noConflict = function () {
      return (i.default.fn.tab = fn), gn._jQueryInterface;
    });
  var _n = 'bs.toast',
    vn = i.default.fn.toast,
    bn = 'hide',
    yn = 'show',
    En = 'showing',
    wn = 'click.dismiss.bs.toast',
    Tn = { animation: !0, autohide: !0, delay: 500 },
    Cn = { animation: 'boolean', autohide: 'boolean', delay: 'number' },
    Sn = (function () {
      function t(t, e) {
        (this._element = t),
          (this._config = this._getConfig(e)),
          (this._timeout = null),
          this._setListeners();
      }
      var e = t.prototype;
      return (
        (e.show = function () {
          var t = this,
            e = i.default.Event('show.bs.toast');
          if ((i.default(this._element).trigger(e), !e.isDefaultPrevented())) {
            this._clearTimeout(),
              this._config.animation && this._element.classList.add('fade');
            var n = function () {
              t._element.classList.remove(En),
                t._element.classList.add(yn),
                i.default(t._element).trigger('shown.bs.toast'),
                t._config.autohide &&
                  (t._timeout = setTimeout(function () {
                    t.hide();
                  }, t._config.delay));
            };
            if (
              (this._element.classList.remove(bn),
              u.reflow(this._element),
              this._element.classList.add(En),
              this._config.animation)
            ) {
              var o = u.getTransitionDurationFromElement(this._element);
              i.default(this._element)
                .one(u.TRANSITION_END, n)
                .emulateTransitionEnd(o);
            } else n();
          }
        }),
        (e.hide = function () {
          if (this._element.classList.contains(yn)) {
            var t = i.default.Event('hide.bs.toast');
            i.default(this._element).trigger(t),
              t.isDefaultPrevented() || this._close();
          }
        }),
        (e.dispose = function () {
          this._clearTimeout(),
            this._element.classList.contains(yn) &&
              this._element.classList.remove(yn),
            i.default(this._element).off(wn),
            i.default.removeData(this._element, _n),
            (this._element = null),
            (this._config = null);
        }),
        (e._getConfig = function (t) {
          return (
            (t = a(
              {},
              Tn,
              i.default(this._element).data(),
              'object' == typeof t && t ? t : {}
            )),
            u.typeCheckConfig('toast', t, this.constructor.DefaultType),
            t
          );
        }),
        (e._setListeners = function () {
          var t = this;
          i.default(this._element).on(
            wn,
            '[data-dismiss="toast"]',
            function () {
              return t.hide();
            }
          );
        }),
        (e._close = function () {
          var t = this,
            e = function () {
              t._element.classList.add(bn),
                i.default(t._element).trigger('hidden.bs.toast');
            };
          if ((this._element.classList.remove(yn), this._config.animation)) {
            var n = u.getTransitionDurationFromElement(this._element);
            i.default(this._element)
              .one(u.TRANSITION_END, e)
              .emulateTransitionEnd(n);
          } else e();
        }),
        (e._clearTimeout = function () {
          clearTimeout(this._timeout), (this._timeout = null);
        }),
        (t._jQueryInterface = function (e) {
          return this.each(function () {
            var n = i.default(this),
              o = n.data(_n);
            if (
              (o ||
                ((o = new t(this, 'object' == typeof e && e)), n.data(_n, o)),
              'string' == typeof e)
            ) {
              if ('undefined' == typeof o[e])
                throw new TypeError('No method named "' + e + '"');
              o[e](this);
            }
          });
        }),
        r(t, null, [
          {
            key: 'VERSION',
            get: function () {
              return '4.6.1';
            },
          },
          {
            key: 'DefaultType',
            get: function () {
              return Cn;
            },
          },
          {
            key: 'Default',
            get: function () {
              return Tn;
            },
          },
        ]),
        t
      );
    })();
  (i.default.fn.toast = Sn._jQueryInterface),
    (i.default.fn.toast.Constructor = Sn),
    (i.default.fn.toast.noConflict = function () {
      return (i.default.fn.toast = vn), Sn._jQueryInterface;
    }),
    (t.Alert = c),
    (t.Button = b),
    (t.Carousel = O),
    (t.Collapse = W),
    (t.Dropdown = le),
    (t.Modal = Se),
    (t.Popover = Je),
    (t.Scrollspy = ln),
    (t.Tab = gn),
    (t.Toast = Sn),
    (t.Tooltip = Ve),
    (t.Util = u),
    Object.defineProperty(t, '__esModule', { value: !0 });
});
//# sourceMappingURL=bootstrap.bundle.min.js.map

(function ($) {
  $.each(['show', 'hide'], function (i, ev) {
    var el = $.fn[ev];
    $.fn[ev] = function () {
      this.trigger(ev);
      return el.apply(this, arguments);
    };
  });
})(jQuery);

jQuery.fn.preventDoubleSubmission = function () {
  $(this).on('submit', function (e) {
    var $form = $(this);

    if ($form.data('submitted') === true) {
      // Previously submitted - don't submit again
      e.preventDefault();
      console.log('prevent double submittion');
    } else {
      // Mark it so that the next submit can be ignored
      $form.data('submitted', true);
    }
  });

  // Keep chainability
  return this;
};

var getUrlParameter = function getUrlParameter(sParam) {
  var sPageURL = window.location.search.substring(1),
    sURLVariables = sPageURL.split('&'),
    sParameterName,
    i;

  for (i = 0; i < sURLVariables.length; i++) {
    sParameterName = sURLVariables[i].split('=');

    if (sParameterName[0] === sParam) {
      return sParameterName[1] === undefined
        ? true
        : decodeURIComponent(sParameterName[1]);
    }
  }
};

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function slideTo(el) {
  $('html, body').animate(
    {
      scrollTop: $(el).offset().top,
    },
    500
  );
}

function spaceFromBottom(el) {
  var eTop = $(el).offset().top; //get the offset top of the element
  if (eTop - $(window).scrollTop() < $(window).height() + 100) {
    return true;
  } else {
    return false;
  }
}

function getFileName($input, $el) {
  $text = $input.value;
  document.getElementById($el).innerHTML = $text.split('\\')[2];
}

function isScriptLoaded(url) {
  var scripts = document.getElementsByTagName('script');
  for (var i = scripts.length; i--; ) {
    if (scripts[i].src == url) return true;
  }
  return false;
}

function addScript($src) {
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = $src;
  head.appendChild(script);
}

function loadScript(url, callback) {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  if (script.readyState) {
    // only required for IE <9
    script.onreadystatechange = function () {
      if (script.readyState === 'loaded' || script.readyState === 'complete') {
        script.onreadystatechange = null;
        callback();
      }
    };
  } else {
    //Others
    script.onload = function () {
      callback();
    };
  }

  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}

/**
 * Parse url
 */
function urlParser($url) {
  var parser = document.createElement('a');
  parser.href = $url;

  var $result = parser.hostname;

  return $result;
}

/**
 * Swiper 8.1.5
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: May 16, 2022
 */

!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = t())
    : 'function' == typeof define && define.amd
    ? define(t)
    : ((e = 'undefined' != typeof globalThis ? globalThis : e || self).Swiper =
        t());
})(this, function () {
  'use strict';
  function e(e) {
    return (
      null !== e &&
      'object' == typeof e &&
      'constructor' in e &&
      e.constructor === Object
    );
  }
  function t(s, a) {
    void 0 === s && (s = {}),
      void 0 === a && (a = {}),
      Object.keys(a).forEach((i) => {
        void 0 === s[i]
          ? (s[i] = a[i])
          : e(a[i]) && e(s[i]) && Object.keys(a[i]).length > 0 && t(s[i], a[i]);
      });
  }
  const s = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector: () => null,
    querySelectorAll: () => [],
    getElementById: () => null,
    createEvent: () => ({ initEvent() {} }),
    createElement: () => ({
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName: () => [],
    }),
    createElementNS: () => ({}),
    importNode: () => null,
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
  };
  function a() {
    const e = 'undefined' != typeof document ? document : {};
    return t(e, s), e;
  }
  const i = {
    document: s,
    navigator: { userAgent: '' },
    location: {
      hash: '',
      host: '',
      hostname: '',
      href: '',
      origin: '',
      pathname: '',
      protocol: '',
      search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
      return this;
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle: () => ({ getPropertyValue: () => '' }),
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia: () => ({}),
    requestAnimationFrame: (e) =>
      'undefined' == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
    cancelAnimationFrame(e) {
      'undefined' != typeof setTimeout && clearTimeout(e);
    },
  };
  function r() {
    const e = 'undefined' != typeof window ? window : {};
    return t(e, i), e;
  }
  class n extends Array {
    constructor(e) {
      'number' == typeof e
        ? super(e)
        : (super(...(e || [])),
          (function (e) {
            const t = e.__proto__;
            Object.defineProperty(e, '__proto__', {
              get: () => t,
              set(e) {
                t.__proto__ = e;
              },
            });
          })(this));
    }
  }
  function l(e) {
    void 0 === e && (e = []);
    const t = [];
    return (
      e.forEach((e) => {
        Array.isArray(e) ? t.push(...l(e)) : t.push(e);
      }),
      t
    );
  }
  function o(e, t) {
    return Array.prototype.filter.call(e, t);
  }
  function d(e, t) {
    const s = r(),
      i = a();
    let l = [];
    if (!t && e instanceof n) return e;
    if (!e) return new n(l);
    if ('string' == typeof e) {
      const s = e.trim();
      if (s.indexOf('<') >= 0 && s.indexOf('>') >= 0) {
        let e = 'div';
        0 === s.indexOf('<li') && (e = 'ul'),
          0 === s.indexOf('<tr') && (e = 'tbody'),
          (0 !== s.indexOf('<td') && 0 !== s.indexOf('<th')) || (e = 'tr'),
          0 === s.indexOf('<tbody') && (e = 'table'),
          0 === s.indexOf('<option') && (e = 'select');
        const t = i.createElement(e);
        t.innerHTML = s;
        for (let e = 0; e < t.childNodes.length; e += 1)
          l.push(t.childNodes[e]);
      } else
        l = (function (e, t) {
          if ('string' != typeof e) return [e];
          const s = [],
            a = t.querySelectorAll(e);
          for (let e = 0; e < a.length; e += 1) s.push(a[e]);
          return s;
        })(e.trim(), t || i);
    } else if (e.nodeType || e === s || e === i) l.push(e);
    else if (Array.isArray(e)) {
      if (e instanceof n) return e;
      l = e;
    }
    return new n(
      (function (e) {
        const t = [];
        for (let s = 0; s < e.length; s += 1)
          -1 === t.indexOf(e[s]) && t.push(e[s]);
        return t;
      })(l)
    );
  }
  d.fn = n.prototype;
  const c = {
    addClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.add(...a);
        }),
        this
      );
    },
    removeClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        this.forEach((e) => {
          e.classList.remove(...a);
        }),
        this
      );
    },
    hasClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      return (
        o(this, (e) => a.filter((t) => e.classList.contains(t)).length > 0)
          .length > 0
      );
    },
    toggleClass: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      const a = l(t.map((e) => e.split(' ')));
      this.forEach((e) => {
        a.forEach((t) => {
          e.classList.toggle(t);
        });
      });
    },
    attr: function (e, t) {
      if (1 === arguments.length && 'string' == typeof e)
        return this[0] ? this[0].getAttribute(e) : void 0;
      for (let s = 0; s < this.length; s += 1)
        if (2 === arguments.length) this[s].setAttribute(e, t);
        else
          for (const t in e) (this[s][t] = e[t]), this[s].setAttribute(t, e[t]);
      return this;
    },
    removeAttr: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
      return this;
    },
    transform: function (e) {
      for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
      return this;
    },
    transition: function (e) {
      for (let t = 0; t < this.length; t += 1)
        this[t].style.transitionDuration = 'string' != typeof e ? `${e}ms` : e;
      return this;
    },
    on: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      function l(e) {
        const t = e.target;
        if (!t) return;
        const s = e.target.dom7EventData || [];
        if ((s.indexOf(e) < 0 && s.unshift(e), d(t).is(i))) r.apply(t, s);
        else {
          const e = d(t).parents();
          for (let t = 0; t < e.length; t += 1)
            d(e[t]).is(i) && r.apply(e[t], s);
        }
      }
      function o(e) {
        const t = (e && e.target && e.target.dom7EventData) || [];
        t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
      }
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const c = a.split(' ');
      let p;
      for (let e = 0; e < this.length; e += 1) {
        const t = this[e];
        if (i)
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7LiveListeners || (t.dom7LiveListeners = {}),
              t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []),
              t.dom7LiveListeners[e].push({ listener: r, proxyListener: l }),
              t.addEventListener(e, l, n);
          }
        else
          for (p = 0; p < c.length; p += 1) {
            const e = c[p];
            t.dom7Listeners || (t.dom7Listeners = {}),
              t.dom7Listeners[e] || (t.dom7Listeners[e] = []),
              t.dom7Listeners[e].push({ listener: r, proxyListener: o }),
              t.addEventListener(e, o, n);
          }
      }
      return this;
    },
    off: function () {
      for (var e = arguments.length, t = new Array(e), s = 0; s < e; s++)
        t[s] = arguments[s];
      let [a, i, r, n] = t;
      'function' == typeof t[1] && (([a, r, n] = t), (i = void 0)),
        n || (n = !1);
      const l = a.split(' ');
      for (let e = 0; e < l.length; e += 1) {
        const t = l[e];
        for (let e = 0; e < this.length; e += 1) {
          const s = this[e];
          let a;
          if (
            (!i && s.dom7Listeners
              ? (a = s.dom7Listeners[t])
              : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]),
            a && a.length)
          )
            for (let e = a.length - 1; e >= 0; e -= 1) {
              const i = a[e];
              (r && i.listener === r) ||
              (r &&
                i.listener &&
                i.listener.dom7proxy &&
                i.listener.dom7proxy === r)
                ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e, 1))
                : r ||
                  (s.removeEventListener(t, i.proxyListener, n),
                  a.splice(e, 1));
            }
        }
      }
      return this;
    },
    trigger: function () {
      const e = r();
      for (var t = arguments.length, s = new Array(t), a = 0; a < t; a++)
        s[a] = arguments[a];
      const i = s[0].split(' '),
        n = s[1];
      for (let t = 0; t < i.length; t += 1) {
        const a = i[t];
        for (let t = 0; t < this.length; t += 1) {
          const i = this[t];
          if (e.CustomEvent) {
            const t = new e.CustomEvent(a, {
              detail: n,
              bubbles: !0,
              cancelable: !0,
            });
            (i.dom7EventData = s.filter((e, t) => t > 0)),
              i.dispatchEvent(t),
              (i.dom7EventData = []),
              delete i.dom7EventData;
          }
        }
      }
      return this;
    },
    transitionEnd: function (e) {
      const t = this;
      return (
        e &&
          t.on('transitionend', function s(a) {
            a.target === this && (e.call(this, a), t.off('transitionend', s));
          }),
        this
      );
    },
    outerWidth: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetWidth +
            parseFloat(e.getPropertyValue('margin-right')) +
            parseFloat(e.getPropertyValue('margin-left'))
          );
        }
        return this[0].offsetWidth;
      }
      return null;
    },
    outerHeight: function (e) {
      if (this.length > 0) {
        if (e) {
          const e = this.styles();
          return (
            this[0].offsetHeight +
            parseFloat(e.getPropertyValue('margin-top')) +
            parseFloat(e.getPropertyValue('margin-bottom'))
          );
        }
        return this[0].offsetHeight;
      }
      return null;
    },
    styles: function () {
      const e = r();
      return this[0] ? e.getComputedStyle(this[0], null) : {};
    },
    offset: function () {
      if (this.length > 0) {
        const e = r(),
          t = a(),
          s = this[0],
          i = s.getBoundingClientRect(),
          n = t.body,
          l = s.clientTop || n.clientTop || 0,
          o = s.clientLeft || n.clientLeft || 0,
          d = s === e ? e.scrollY : s.scrollTop,
          c = s === e ? e.scrollX : s.scrollLeft;
        return { top: i.top + d - l, left: i.left + c - o };
      }
      return null;
    },
    css: function (e, t) {
      const s = r();
      let a;
      if (1 === arguments.length) {
        if ('string' != typeof e) {
          for (a = 0; a < this.length; a += 1)
            for (const t in e) this[a].style[t] = e[t];
          return this;
        }
        if (this[0])
          return s.getComputedStyle(this[0], null).getPropertyValue(e);
      }
      if (2 === arguments.length && 'string' == typeof e) {
        for (a = 0; a < this.length; a += 1) this[a].style[e] = t;
        return this;
      }
      return this;
    },
    each: function (e) {
      return e
        ? (this.forEach((t, s) => {
            e.apply(t, [t, s]);
          }),
          this)
        : this;
    },
    html: function (e) {
      if (void 0 === e) return this[0] ? this[0].innerHTML : null;
      for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
      return this;
    },
    text: function (e) {
      if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
      for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
      return this;
    },
    is: function (e) {
      const t = r(),
        s = a(),
        i = this[0];
      let l, o;
      if (!i || void 0 === e) return !1;
      if ('string' == typeof e) {
        if (i.matches) return i.matches(e);
        if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
        if (i.msMatchesSelector) return i.msMatchesSelector(e);
        for (l = d(e), o = 0; o < l.length; o += 1) if (l[o] === i) return !0;
        return !1;
      }
      if (e === s) return i === s;
      if (e === t) return i === t;
      if (e.nodeType || e instanceof n) {
        for (l = e.nodeType ? [e] : e, o = 0; o < l.length; o += 1)
          if (l[o] === i) return !0;
        return !1;
      }
      return !1;
    },
    index: function () {
      let e,
        t = this[0];
      if (t) {
        for (e = 0; null !== (t = t.previousSibling); )
          1 === t.nodeType && (e += 1);
        return e;
      }
    },
    eq: function (e) {
      if (void 0 === e) return this;
      const t = this.length;
      if (e > t - 1) return d([]);
      if (e < 0) {
        const s = t + e;
        return d(s < 0 ? [] : [this[s]]);
      }
      return d([this[e]]);
    },
    append: function () {
      let e;
      const t = a();
      for (let s = 0; s < arguments.length; s += 1) {
        e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
        for (let s = 0; s < this.length; s += 1)
          if ('string' == typeof e) {
            const a = t.createElement('div');
            for (a.innerHTML = e; a.firstChild; )
              this[s].appendChild(a.firstChild);
          } else if (e instanceof n)
            for (let t = 0; t < e.length; t += 1) this[s].appendChild(e[t]);
          else this[s].appendChild(e);
      }
      return this;
    },
    prepend: function (e) {
      const t = a();
      let s, i;
      for (s = 0; s < this.length; s += 1)
        if ('string' == typeof e) {
          const a = t.createElement('div');
          for (a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)
            this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
        } else if (e instanceof n)
          for (i = 0; i < e.length; i += 1)
            this[s].insertBefore(e[i], this[s].childNodes[0]);
        else this[s].insertBefore(e, this[s].childNodes[0]);
      return this;
    },
    next: function (e) {
      return this.length > 0
        ? e
          ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e)
            ? d([this[0].nextElementSibling])
            : d([])
          : this[0].nextElementSibling
          ? d([this[0].nextElementSibling])
          : d([])
        : d([]);
    },
    nextAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.nextElementSibling; ) {
        const a = s.nextElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    prev: function (e) {
      if (this.length > 0) {
        const t = this[0];
        return e
          ? t.previousElementSibling && d(t.previousElementSibling).is(e)
            ? d([t.previousElementSibling])
            : d([])
          : t.previousElementSibling
          ? d([t.previousElementSibling])
          : d([]);
      }
      return d([]);
    },
    prevAll: function (e) {
      const t = [];
      let s = this[0];
      if (!s) return d([]);
      for (; s.previousElementSibling; ) {
        const a = s.previousElementSibling;
        e ? d(a).is(e) && t.push(a) : t.push(a), (s = a);
      }
      return d(t);
    },
    parent: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1)
        null !== this[s].parentNode &&
          (e
            ? d(this[s].parentNode).is(e) && t.push(this[s].parentNode)
            : t.push(this[s].parentNode));
      return d(t);
    },
    parents: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        let a = this[s].parentNode;
        for (; a; ) e ? d(a).is(e) && t.push(a) : t.push(a), (a = a.parentNode);
      }
      return d(t);
    },
    closest: function (e) {
      let t = this;
      return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
    },
    find: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].querySelectorAll(e);
        for (let e = 0; e < a.length; e += 1) t.push(a[e]);
      }
      return d(t);
    },
    children: function (e) {
      const t = [];
      for (let s = 0; s < this.length; s += 1) {
        const a = this[s].children;
        for (let s = 0; s < a.length; s += 1)
          (e && !d(a[s]).is(e)) || t.push(a[s]);
      }
      return d(t);
    },
    filter: function (e) {
      return d(o(this, e));
    },
    remove: function () {
      for (let e = 0; e < this.length; e += 1)
        this[e].parentNode && this[e].parentNode.removeChild(this[e]);
      return this;
    },
  };
  function p(e, t) {
    return void 0 === t && (t = 0), setTimeout(e, t);
  }
  function u() {
    return Date.now();
  }
  function h(e, t) {
    void 0 === t && (t = 'x');
    const s = r();
    let a, i, n;
    const l = (function (e) {
      const t = r();
      let s;
      return (
        t.getComputedStyle && (s = t.getComputedStyle(e, null)),
        !s && e.currentStyle && (s = e.currentStyle),
        s || (s = e.style),
        s
      );
    })(e);
    return (
      s.WebKitCSSMatrix
        ? ((i = l.transform || l.webkitTransform),
          i.split(',').length > 6 &&
            (i = i
              .split(', ')
              .map((e) => e.replace(',', '.'))
              .join(', ')),
          (n = new s.WebKitCSSMatrix('none' === i ? '' : i)))
        : ((n =
            l.MozTransform ||
            l.OTransform ||
            l.MsTransform ||
            l.msTransform ||
            l.transform ||
            l
              .getPropertyValue('transform')
              .replace('translate(', 'matrix(1, 0, 0, 1,')),
          (a = n.toString().split(','))),
      'x' === t &&
        (i = s.WebKitCSSMatrix
          ? n.m41
          : 16 === a.length
          ? parseFloat(a[12])
          : parseFloat(a[4])),
      'y' === t &&
        (i = s.WebKitCSSMatrix
          ? n.m42
          : 16 === a.length
          ? parseFloat(a[13])
          : parseFloat(a[5])),
      i || 0
    );
  }
  function m(e) {
    return (
      'object' == typeof e &&
      null !== e &&
      e.constructor &&
      'Object' === Object.prototype.toString.call(e).slice(8, -1)
    );
  }
  function f(e) {
    return 'undefined' != typeof window && void 0 !== window.HTMLElement
      ? e instanceof HTMLElement
      : e && (1 === e.nodeType || 11 === e.nodeType);
  }
  function g() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
      t = ['__proto__', 'constructor', 'prototype'];
    for (let s = 1; s < arguments.length; s += 1) {
      const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
      if (null != a && !f(a)) {
        const s = Object.keys(Object(a)).filter((e) => t.indexOf(e) < 0);
        for (let t = 0, i = s.length; t < i; t += 1) {
          const i = s[t],
            r = Object.getOwnPropertyDescriptor(a, i);
          void 0 !== r &&
            r.enumerable &&
            (m(e[i]) && m(a[i])
              ? a[i].__swiper__
                ? (e[i] = a[i])
                : g(e[i], a[i])
              : !m(e[i]) && m(a[i])
              ? ((e[i] = {}), a[i].__swiper__ ? (e[i] = a[i]) : g(e[i], a[i]))
              : (e[i] = a[i]));
        }
      }
    }
    return e;
  }
  function v(e, t, s) {
    e.style.setProperty(t, s);
  }
  function w(e) {
    let { swiper: t, targetPosition: s, side: a } = e;
    const i = r(),
      n = -t.translate;
    let l,
      o = null;
    const d = t.params.speed;
    (t.wrapperEl.style.scrollSnapType = 'none'),
      i.cancelAnimationFrame(t.cssModeFrameID);
    const c = s > n ? 'next' : 'prev',
      p = (e, t) => ('next' === c && e >= t) || ('prev' === c && e <= t),
      u = () => {
        (l = new Date().getTime()), null === o && (o = l);
        const e = Math.max(Math.min((l - o) / d, 1), 0),
          r = 0.5 - Math.cos(e * Math.PI) / 2;
        let c = n + r * (s - n);
        if ((p(c, s) && (c = s), t.wrapperEl.scrollTo({ [a]: c }), p(c, s)))
          return (
            (t.wrapperEl.style.overflow = 'hidden'),
            (t.wrapperEl.style.scrollSnapType = ''),
            setTimeout(() => {
              (t.wrapperEl.style.overflow = ''),
                t.wrapperEl.scrollTo({ [a]: c });
            }),
            void i.cancelAnimationFrame(t.cssModeFrameID)
          );
        t.cssModeFrameID = i.requestAnimationFrame(u);
      };
    u();
  }
  let b, x, y;
  function E() {
    return (
      b ||
        (b = (function () {
          const e = r(),
            t = a();
          return {
            smoothScroll:
              t.documentElement && 'scrollBehavior' in t.documentElement.style,
            touch: !!(
              'ontouchstart' in e ||
              (e.DocumentTouch && t instanceof e.DocumentTouch)
            ),
            passiveListener: (function () {
              let t = !1;
              try {
                const s = Object.defineProperty({}, 'passive', {
                  get() {
                    t = !0;
                  },
                });
                e.addEventListener('testPassiveListener', null, s);
              } catch (e) {}
              return t;
            })(),
            gestures: 'ongesturestart' in e,
          };
        })()),
      b
    );
  }
  function T(e) {
    return (
      void 0 === e && (e = {}),
      x ||
        (x = (function (e) {
          let { userAgent: t } = void 0 === e ? {} : e;
          const s = E(),
            a = r(),
            i = a.navigator.platform,
            n = t || a.navigator.userAgent,
            l = { ios: !1, android: !1 },
            o = a.screen.width,
            d = a.screen.height,
            c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
          let p = n.match(/(iPad).*OS\s([\d_]+)/);
          const u = n.match(/(iPod)(.*OS\s([\d_]+))?/),
            h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = 'Win32' === i;
          let f = 'MacIntel' === i;
          return (
            !p &&
              f &&
              s.touch &&
              [
                '1024x1366',
                '1366x1024',
                '834x1194',
                '1194x834',
                '834x1112',
                '1112x834',
                '768x1024',
                '1024x768',
                '820x1180',
                '1180x820',
                '810x1080',
                '1080x810',
              ].indexOf(`${o}x${d}`) >= 0 &&
              ((p = n.match(/(Version)\/([\d.]+)/)),
              p || (p = [0, 1, '13_0_0']),
              (f = !1)),
            c && !m && ((l.os = 'android'), (l.android = !0)),
            (p || h || u) && ((l.os = 'ios'), (l.ios = !0)),
            l
          );
        })(e)),
      x
    );
  }
  function C() {
    return (
      y ||
        (y = (function () {
          const e = r();
          return {
            isSafari: (function () {
              const t = e.navigator.userAgent.toLowerCase();
              return (
                t.indexOf('safari') >= 0 &&
                t.indexOf('chrome') < 0 &&
                t.indexOf('android') < 0
              );
            })(),
            isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
              e.navigator.userAgent
            ),
          };
        })()),
      y
    );
  }
  Object.keys(c).forEach((e) => {
    Object.defineProperty(d.fn, e, { value: c[e], writable: !0 });
  });
  var $ = {
    on(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      const i = s ? 'unshift' : 'push';
      return (
        e.split(' ').forEach((e) => {
          a.eventsListeners[e] || (a.eventsListeners[e] = []),
            a.eventsListeners[e][i](t);
        }),
        a
      );
    },
    once(e, t, s) {
      const a = this;
      if (!a.eventsListeners || a.destroyed) return a;
      if ('function' != typeof t) return a;
      function i() {
        a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
        for (var s = arguments.length, r = new Array(s), n = 0; n < s; n++)
          r[n] = arguments[n];
        t.apply(a, r);
      }
      return (i.__emitterProxy = t), a.on(e, i, s);
    },
    onAny(e, t) {
      const s = this;
      if (!s.eventsListeners || s.destroyed) return s;
      if ('function' != typeof e) return s;
      const a = t ? 'unshift' : 'push';
      return (
        s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s
      );
    },
    offAny(e) {
      const t = this;
      if (!t.eventsListeners || t.destroyed) return t;
      if (!t.eventsAnyListeners) return t;
      const s = t.eventsAnyListeners.indexOf(e);
      return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
    },
    off(e, t) {
      const s = this;
      return !s.eventsListeners || s.destroyed
        ? s
        : s.eventsListeners
        ? (e.split(' ').forEach((e) => {
            void 0 === t
              ? (s.eventsListeners[e] = [])
              : s.eventsListeners[e] &&
                s.eventsListeners[e].forEach((a, i) => {
                  (a === t || (a.__emitterProxy && a.__emitterProxy === t)) &&
                    s.eventsListeners[e].splice(i, 1);
                });
          }),
          s)
        : s;
    },
    emit() {
      const e = this;
      if (!e.eventsListeners || e.destroyed) return e;
      if (!e.eventsListeners) return e;
      let t, s, a;
      for (var i = arguments.length, r = new Array(i), n = 0; n < i; n++)
        r[n] = arguments[n];
      'string' == typeof r[0] || Array.isArray(r[0])
        ? ((t = r[0]), (s = r.slice(1, r.length)), (a = e))
        : ((t = r[0].events), (s = r[0].data), (a = r[0].context || e)),
        s.unshift(a);
      return (
        (Array.isArray(t) ? t : t.split(' ')).forEach((t) => {
          e.eventsAnyListeners &&
            e.eventsAnyListeners.length &&
            e.eventsAnyListeners.forEach((e) => {
              e.apply(a, [t, ...s]);
            }),
            e.eventsListeners &&
              e.eventsListeners[t] &&
              e.eventsListeners[t].forEach((e) => {
                e.apply(a, s);
              });
        }),
        e
      );
    },
  };
  var S = {
    updateSize: function () {
      const e = this;
      let t, s;
      const a = e.$el;
      (t =
        void 0 !== e.params.width && null !== e.params.width
          ? e.params.width
          : a[0].clientWidth),
        (s =
          void 0 !== e.params.height && null !== e.params.height
            ? e.params.height
            : a[0].clientHeight),
        (0 === t && e.isHorizontal()) ||
          (0 === s && e.isVertical()) ||
          ((t =
            t -
            parseInt(a.css('padding-left') || 0, 10) -
            parseInt(a.css('padding-right') || 0, 10)),
          (s =
            s -
            parseInt(a.css('padding-top') || 0, 10) -
            parseInt(a.css('padding-bottom') || 0, 10)),
          Number.isNaN(t) && (t = 0),
          Number.isNaN(s) && (s = 0),
          Object.assign(e, {
            width: t,
            height: s,
            size: e.isHorizontal() ? t : s,
          }));
    },
    updateSlides: function () {
      const e = this;
      function t(t) {
        return e.isHorizontal()
          ? t
          : {
              width: 'height',
              'margin-top': 'margin-left',
              'margin-bottom ': 'margin-right',
              'margin-left': 'margin-top',
              'margin-right': 'margin-bottom',
              'padding-left': 'padding-top',
              'padding-right': 'padding-bottom',
              marginRight: 'marginBottom',
            }[t];
      }
      function s(e, s) {
        return parseFloat(e.getPropertyValue(t(s)) || 0);
      }
      const a = e.params,
        { $wrapperEl: i, size: r, rtlTranslate: n, wrongRTL: l } = e,
        o = e.virtual && a.virtual.enabled,
        d = o ? e.virtual.slides.length : e.slides.length,
        c = i.children(`.${e.params.slideClass}`),
        p = o ? e.virtual.slides.length : c.length;
      let u = [];
      const h = [],
        m = [];
      let f = a.slidesOffsetBefore;
      'function' == typeof f && (f = a.slidesOffsetBefore.call(e));
      let g = a.slidesOffsetAfter;
      'function' == typeof g && (g = a.slidesOffsetAfter.call(e));
      const w = e.snapGrid.length,
        b = e.slidesGrid.length;
      let x = a.spaceBetween,
        y = -f,
        E = 0,
        T = 0;
      if (void 0 === r) return;
      'string' == typeof x &&
        x.indexOf('%') >= 0 &&
        (x = (parseFloat(x.replace('%', '')) / 100) * r),
        (e.virtualSize = -x),
        n
          ? c.css({ marginLeft: '', marginBottom: '', marginTop: '' })
          : c.css({ marginRight: '', marginBottom: '', marginTop: '' }),
        a.centeredSlides &&
          a.cssMode &&
          (v(e.wrapperEl, '--swiper-centered-offset-before', ''),
          v(e.wrapperEl, '--swiper-centered-offset-after', ''));
      const C = a.grid && a.grid.rows > 1 && e.grid;
      let $;
      C && e.grid.initSlides(p);
      const S =
        'auto' === a.slidesPerView &&
        a.breakpoints &&
        Object.keys(a.breakpoints).filter(
          (e) => void 0 !== a.breakpoints[e].slidesPerView
        ).length > 0;
      for (let i = 0; i < p; i += 1) {
        $ = 0;
        const n = c.eq(i);
        if (
          (C && e.grid.updateSlide(i, n, p, t), 'none' !== n.css('display'))
        ) {
          if ('auto' === a.slidesPerView) {
            S && (c[i].style[t('width')] = '');
            const r = getComputedStyle(n[0]),
              l = n[0].style.transform,
              o = n[0].style.webkitTransform;
            if (
              (l && (n[0].style.transform = 'none'),
              o && (n[0].style.webkitTransform = 'none'),
              a.roundLengths)
            )
              $ = e.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
            else {
              const e = s(r, 'width'),
                t = s(r, 'padding-left'),
                a = s(r, 'padding-right'),
                i = s(r, 'margin-left'),
                l = s(r, 'margin-right'),
                o = r.getPropertyValue('box-sizing');
              if (o && 'border-box' === o) $ = e + i + l;
              else {
                const { clientWidth: s, offsetWidth: r } = n[0];
                $ = e + t + a + i + l + (r - s);
              }
            }
            l && (n[0].style.transform = l),
              o && (n[0].style.webkitTransform = o),
              a.roundLengths && ($ = Math.floor($));
          } else
            ($ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView),
              a.roundLengths && ($ = Math.floor($)),
              c[i] && (c[i].style[t('width')] = `${$}px`);
          c[i] && (c[i].swiperSlideSize = $),
            m.push($),
            a.centeredSlides
              ? ((y = y + $ / 2 + E / 2 + x),
                0 === E && 0 !== i && (y = y - r / 2 - x),
                0 === i && (y = y - r / 2 - x),
                Math.abs(y) < 0.001 && (y = 0),
                a.roundLengths && (y = Math.floor(y)),
                T % a.slidesPerGroup == 0 && u.push(y),
                h.push(y))
              : (a.roundLengths && (y = Math.floor(y)),
                (T - Math.min(e.params.slidesPerGroupSkip, T)) %
                  e.params.slidesPerGroup ==
                  0 && u.push(y),
                h.push(y),
                (y = y + $ + x)),
            (e.virtualSize += $ + x),
            (E = $),
            (T += 1);
        }
      }
      if (
        ((e.virtualSize = Math.max(e.virtualSize, r) + g),
        n &&
          l &&
          ('slide' === a.effect || 'coverflow' === a.effect) &&
          i.css({ width: `${e.virtualSize + a.spaceBetween}px` }),
        a.setWrapperSize &&
          i.css({ [t('width')]: `${e.virtualSize + a.spaceBetween}px` }),
        C && e.grid.updateWrapperSize($, u, t),
        !a.centeredSlides)
      ) {
        const t = [];
        for (let s = 0; s < u.length; s += 1) {
          let i = u[s];
          a.roundLengths && (i = Math.floor(i)),
            u[s] <= e.virtualSize - r && t.push(i);
        }
        (u = t),
          Math.floor(e.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 &&
            u.push(e.virtualSize - r);
      }
      if ((0 === u.length && (u = [0]), 0 !== a.spaceBetween)) {
        const s = e.isHorizontal() && n ? 'marginLeft' : t('marginRight');
        c.filter((e, t) => !a.cssMode || t !== c.length - 1).css({
          [s]: `${x}px`,
        });
      }
      if (a.centeredSlides && a.centeredSlidesBounds) {
        let e = 0;
        m.forEach((t) => {
          e += t + (a.spaceBetween ? a.spaceBetween : 0);
        }),
          (e -= a.spaceBetween);
        const t = e - r;
        u = u.map((e) => (e < 0 ? -f : e > t ? t + g : e));
      }
      if (a.centerInsufficientSlides) {
        let e = 0;
        if (
          (m.forEach((t) => {
            e += t + (a.spaceBetween ? a.spaceBetween : 0);
          }),
          (e -= a.spaceBetween),
          e < r)
        ) {
          const t = (r - e) / 2;
          u.forEach((e, s) => {
            u[s] = e - t;
          }),
            h.forEach((e, s) => {
              h[s] = e + t;
            });
        }
      }
      if (
        (Object.assign(e, {
          slides: c,
          snapGrid: u,
          slidesGrid: h,
          slidesSizesGrid: m,
        }),
        a.centeredSlides && a.cssMode && !a.centeredSlidesBounds)
      ) {
        v(e.wrapperEl, '--swiper-centered-offset-before', -u[0] + 'px'),
          v(
            e.wrapperEl,
            '--swiper-centered-offset-after',
            e.size / 2 - m[m.length - 1] / 2 + 'px'
          );
        const t = -e.snapGrid[0],
          s = -e.slidesGrid[0];
        (e.snapGrid = e.snapGrid.map((e) => e + t)),
          (e.slidesGrid = e.slidesGrid.map((e) => e + s));
      }
      if (
        (p !== d && e.emit('slidesLengthChange'),
        u.length !== w &&
          (e.params.watchOverflow && e.checkOverflow(),
          e.emit('snapGridLengthChange')),
        h.length !== b && e.emit('slidesGridLengthChange'),
        a.watchSlidesProgress && e.updateSlidesOffset(),
        !(o || a.cssMode || ('slide' !== a.effect && 'fade' !== a.effect)))
      ) {
        const t = `${a.containerModifierClass}backface-hidden`,
          s = e.$el.hasClass(t);
        p <= a.maxBackfaceHiddenSlides
          ? s || e.$el.addClass(t)
          : s && e.$el.removeClass(t);
      }
    },
    updateAutoHeight: function (e) {
      const t = this,
        s = [],
        a = t.virtual && t.params.virtual.enabled;
      let i,
        r = 0;
      'number' == typeof e
        ? t.setTransition(e)
        : !0 === e && t.setTransition(t.params.speed);
      const n = (e) =>
        a
          ? t.slides.filter(
              (t) =>
                parseInt(t.getAttribute('data-swiper-slide-index'), 10) === e
            )[0]
          : t.slides.eq(e)[0];
      if ('auto' !== t.params.slidesPerView && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
          (t.visibleSlides || d([])).each((e) => {
            s.push(e);
          });
        else
          for (i = 0; i < Math.ceil(t.params.slidesPerView); i += 1) {
            const e = t.activeIndex + i;
            if (e > t.slides.length && !a) break;
            s.push(n(e));
          }
      else s.push(n(t.activeIndex));
      for (i = 0; i < s.length; i += 1)
        if (void 0 !== s[i]) {
          const e = s[i].offsetHeight;
          r = e > r ? e : r;
        }
      (r || 0 === r) && t.$wrapperEl.css('height', `${r}px`);
    },
    updateSlidesOffset: function () {
      const e = this,
        t = e.slides;
      for (let s = 0; s < t.length; s += 1)
        t[s].swiperSlideOffset = e.isHorizontal()
          ? t[s].offsetLeft
          : t[s].offsetTop;
    },
    updateSlidesProgress: function (e) {
      void 0 === e && (e = (this && this.translate) || 0);
      const t = this,
        s = t.params,
        { slides: a, rtlTranslate: i, snapGrid: r } = t;
      if (0 === a.length) return;
      void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
      let n = -e;
      i && (n = e),
        a.removeClass(s.slideVisibleClass),
        (t.visibleSlidesIndexes = []),
        (t.visibleSlides = []);
      for (let e = 0; e < a.length; e += 1) {
        const l = a[e];
        let o = l.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
        const d =
            (n + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          c =
            (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) /
            (l.swiperSlideSize + s.spaceBetween),
          p = -(n - o),
          u = p + t.slidesSizesGrid[e];
        ((p >= 0 && p < t.size - 1) ||
          (u > 1 && u <= t.size) ||
          (p <= 0 && u >= t.size)) &&
          (t.visibleSlides.push(l),
          t.visibleSlidesIndexes.push(e),
          a.eq(e).addClass(s.slideVisibleClass)),
          (l.progress = i ? -d : d),
          (l.originalProgress = i ? -c : c);
      }
      t.visibleSlides = d(t.visibleSlides);
    },
    updateProgress: function (e) {
      const t = this;
      if (void 0 === e) {
        const s = t.rtlTranslate ? -1 : 1;
        e = (t && t.translate && t.translate * s) || 0;
      }
      const s = t.params,
        a = t.maxTranslate() - t.minTranslate();
      let { progress: i, isBeginning: r, isEnd: n } = t;
      const l = r,
        o = n;
      0 === a
        ? ((i = 0), (r = !0), (n = !0))
        : ((i = (e - t.minTranslate()) / a), (r = i <= 0), (n = i >= 1)),
        Object.assign(t, { progress: i, isBeginning: r, isEnd: n }),
        (s.watchSlidesProgress || (s.centeredSlides && s.autoHeight)) &&
          t.updateSlidesProgress(e),
        r && !l && t.emit('reachBeginning toEdge'),
        n && !o && t.emit('reachEnd toEdge'),
        ((l && !r) || (o && !n)) && t.emit('fromEdge'),
        t.emit('progress', i);
    },
    updateSlidesClasses: function () {
      const e = this,
        {
          slides: t,
          params: s,
          $wrapperEl: a,
          activeIndex: i,
          realIndex: r,
        } = e,
        n = e.virtual && s.virtual.enabled;
      let l;
      t.removeClass(
        `${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`
      ),
        (l = n
          ? e.$wrapperEl.find(
              `.${s.slideClass}[data-swiper-slide-index="${i}"]`
            )
          : t.eq(i)),
        l.addClass(s.slideActiveClass),
        s.loop &&
          (l.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass)
            : a
                .children(
                  `.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`
                )
                .addClass(s.slideDuplicateActiveClass));
      let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
      s.loop && 0 === o.length && ((o = t.eq(0)), o.addClass(s.slideNextClass));
      let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
      s.loop &&
        0 === d.length &&
        ((d = t.eq(-1)), d.addClass(s.slidePrevClass)),
        s.loop &&
          (o.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${o.attr(
                    'data-swiper-slide-index'
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass)
            : a
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${o.attr(
                    'data-swiper-slide-index'
                  )}"]`
                )
                .addClass(s.slideDuplicateNextClass),
          d.hasClass(s.slideDuplicateClass)
            ? a
                .children(
                  `.${s.slideClass}:not(.${
                    s.slideDuplicateClass
                  })[data-swiper-slide-index="${d.attr(
                    'data-swiper-slide-index'
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)
            : a
                .children(
                  `.${s.slideClass}.${
                    s.slideDuplicateClass
                  }[data-swiper-slide-index="${d.attr(
                    'data-swiper-slide-index'
                  )}"]`
                )
                .addClass(s.slideDuplicatePrevClass)),
        e.emitSlidesClasses();
    },
    updateActiveIndex: function (e) {
      const t = this,
        s = t.rtlTranslate ? t.translate : -t.translate,
        {
          slidesGrid: a,
          snapGrid: i,
          params: r,
          activeIndex: n,
          realIndex: l,
          snapIndex: o,
        } = t;
      let d,
        c = e;
      if (void 0 === c) {
        for (let e = 0; e < a.length; e += 1)
          void 0 !== a[e + 1]
            ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2
              ? (c = e)
              : s >= a[e] && s < a[e + 1] && (c = e + 1)
            : s >= a[e] && (c = e);
        r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
      }
      if (i.indexOf(s) >= 0) d = i.indexOf(s);
      else {
        const e = Math.min(r.slidesPerGroupSkip, c);
        d = e + Math.floor((c - e) / r.slidesPerGroup);
      }
      if ((d >= i.length && (d = i.length - 1), c === n))
        return void (d !== o && ((t.snapIndex = d), t.emit('snapIndexChange')));
      const p = parseInt(
        t.slides.eq(c).attr('data-swiper-slide-index') || c,
        10
      );
      Object.assign(t, {
        snapIndex: d,
        realIndex: p,
        previousIndex: n,
        activeIndex: c,
      }),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        l !== p && t.emit('realIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) && t.emit('slideChange');
    },
    updateClickedSlide: function (e) {
      const t = this,
        s = t.params,
        a = d(e).closest(`.${s.slideClass}`)[0];
      let i,
        r = !1;
      if (a)
        for (let e = 0; e < t.slides.length; e += 1)
          if (t.slides[e] === a) {
            (r = !0), (i = e);
            break;
          }
      if (!a || !r)
        return (t.clickedSlide = void 0), void (t.clickedIndex = void 0);
      (t.clickedSlide = a),
        t.virtual && t.params.virtual.enabled
          ? (t.clickedIndex = parseInt(
              d(a).attr('data-swiper-slide-index'),
              10
            ))
          : (t.clickedIndex = i),
        s.slideToClickedSlide &&
          void 0 !== t.clickedIndex &&
          t.clickedIndex !== t.activeIndex &&
          t.slideToClickedSlide();
    },
  };
  var M = {
    getTranslate: function (e) {
      void 0 === e && (e = this.isHorizontal() ? 'x' : 'y');
      const { params: t, rtlTranslate: s, translate: a, $wrapperEl: i } = this;
      if (t.virtualTranslate) return s ? -a : a;
      if (t.cssMode) return a;
      let r = h(i[0], e);
      return s && (r = -r), r || 0;
    },
    setTranslate: function (e, t) {
      const s = this,
        {
          rtlTranslate: a,
          params: i,
          $wrapperEl: r,
          wrapperEl: n,
          progress: l,
        } = s;
      let o,
        d = 0,
        c = 0;
      s.isHorizontal() ? (d = a ? -e : e) : (c = e),
        i.roundLengths && ((d = Math.floor(d)), (c = Math.floor(c))),
        i.cssMode
          ? (n[s.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = s.isHorizontal()
              ? -d
              : -c)
          : i.virtualTranslate ||
            r.transform(`translate3d(${d}px, ${c}px, 0px)`),
        (s.previousTranslate = s.translate),
        (s.translate = s.isHorizontal() ? d : c);
      const p = s.maxTranslate() - s.minTranslate();
      (o = 0 === p ? 0 : (e - s.minTranslate()) / p),
        o !== l && s.updateProgress(e),
        s.emit('setTranslate', s.translate, t);
    },
    minTranslate: function () {
      return -this.snapGrid[0];
    },
    maxTranslate: function () {
      return -this.snapGrid[this.snapGrid.length - 1];
    },
    translateTo: function (e, t, s, a, i) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        void 0 === a && (a = !0);
      const r = this,
        { params: n, wrapperEl: l } = r;
      if (r.animating && n.preventInteractionOnTransition) return !1;
      const o = r.minTranslate(),
        d = r.maxTranslate();
      let c;
      if (
        ((c = a && e > o ? o : a && e < d ? d : e),
        r.updateProgress(c),
        n.cssMode)
      ) {
        const e = r.isHorizontal();
        if (0 === t) l[e ? 'scrollLeft' : 'scrollTop'] = -c;
        else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: -c, side: e ? 'left' : 'top' }), !0
            );
          l.scrollTo({ [e ? 'left' : 'top']: -c, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        0 === t
          ? (r.setTransition(0),
            r.setTranslate(c),
            s &&
              (r.emit('beforeTransitionStart', t, i), r.emit('transitionEnd')))
          : (r.setTransition(t),
            r.setTranslate(c),
            s &&
              (r.emit('beforeTransitionStart', t, i),
              r.emit('transitionStart')),
            r.animating ||
              ((r.animating = !0),
              r.onTranslateToWrapperTransitionEnd ||
                (r.onTranslateToWrapperTransitionEnd = function (e) {
                  r &&
                    !r.destroyed &&
                    e.target === this &&
                    (r.$wrapperEl[0].removeEventListener(
                      'transitionend',
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    r.$wrapperEl[0].removeEventListener(
                      'webkitTransitionEnd',
                      r.onTranslateToWrapperTransitionEnd
                    ),
                    (r.onTranslateToWrapperTransitionEnd = null),
                    delete r.onTranslateToWrapperTransitionEnd,
                    s && r.emit('transitionEnd'));
                }),
              r.$wrapperEl[0].addEventListener(
                'transitionend',
                r.onTranslateToWrapperTransitionEnd
              ),
              r.$wrapperEl[0].addEventListener(
                'webkitTransitionEnd',
                r.onTranslateToWrapperTransitionEnd
              ))),
        !0
      );
    },
  };
  function P(e) {
    let { swiper: t, runCallbacks: s, direction: a, step: i } = e;
    const { activeIndex: r, previousIndex: n } = t;
    let l = a;
    if (
      (l || (l = r > n ? 'next' : r < n ? 'prev' : 'reset'),
      t.emit(`transition${i}`),
      s && r !== n)
    ) {
      if ('reset' === l) return void t.emit(`slideResetTransition${i}`);
      t.emit(`slideChangeTransition${i}`),
        'next' === l
          ? t.emit(`slideNextTransition${i}`)
          : t.emit(`slidePrevTransition${i}`);
    }
  }
  var k = {
    slideTo: function (e, t, s, a, i) {
      if (
        (void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0),
        'number' != typeof e && 'string' != typeof e)
      )
        throw new Error(
          `The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`
        );
      if ('string' == typeof e) {
        const t = parseInt(e, 10);
        if (!isFinite(t))
          throw new Error(
            `The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`
          );
        e = t;
      }
      const r = this;
      let n = e;
      n < 0 && (n = 0);
      const {
        params: l,
        snapGrid: o,
        slidesGrid: d,
        previousIndex: c,
        activeIndex: p,
        rtlTranslate: u,
        wrapperEl: h,
        enabled: m,
      } = r;
      if ((r.animating && l.preventInteractionOnTransition) || (!m && !a && !i))
        return !1;
      const f = Math.min(r.params.slidesPerGroupSkip, n);
      let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
      g >= o.length && (g = o.length - 1),
        (p || l.initialSlide || 0) === (c || 0) &&
          s &&
          r.emit('beforeSlideChangeStart');
      const v = -o[g];
      if ((r.updateProgress(v), l.normalizeSlideIndex))
        for (let e = 0; e < d.length; e += 1) {
          const t = -Math.floor(100 * v),
            s = Math.floor(100 * d[e]),
            a = Math.floor(100 * d[e + 1]);
          void 0 !== d[e + 1]
            ? t >= s && t < a - (a - s) / 2
              ? (n = e)
              : t >= s && t < a && (n = e + 1)
            : t >= s && (n = e);
        }
      if (r.initialized && n !== p) {
        if (!r.allowSlideNext && v < r.translate && v < r.minTranslate())
          return !1;
        if (
          !r.allowSlidePrev &&
          v > r.translate &&
          v > r.maxTranslate() &&
          (p || 0) !== n
        )
          return !1;
      }
      let b;
      if (
        ((b = n > p ? 'next' : n < p ? 'prev' : 'reset'),
        (u && -v === r.translate) || (!u && v === r.translate))
      )
        return (
          r.updateActiveIndex(n),
          l.autoHeight && r.updateAutoHeight(),
          r.updateSlidesClasses(),
          'slide' !== l.effect && r.setTranslate(v),
          'reset' !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)),
          !1
        );
      if (l.cssMode) {
        const e = r.isHorizontal(),
          s = u ? v : -v;
        if (0 === t) {
          const t = r.virtual && r.params.virtual.enabled;
          t &&
            ((r.wrapperEl.style.scrollSnapType = 'none'),
            (r._immediateVirtual = !0)),
            (h[e ? 'scrollLeft' : 'scrollTop'] = s),
            t &&
              requestAnimationFrame(() => {
                (r.wrapperEl.style.scrollSnapType = ''),
                  (r._swiperImmediateVirtual = !1);
              });
        } else {
          if (!r.support.smoothScroll)
            return (
              w({ swiper: r, targetPosition: s, side: e ? 'left' : 'top' }), !0
            );
          h.scrollTo({ [e ? 'left' : 'top']: s, behavior: 'smooth' });
        }
        return !0;
      }
      return (
        r.setTransition(t),
        r.setTranslate(v),
        r.updateActiveIndex(n),
        r.updateSlidesClasses(),
        r.emit('beforeTransitionStart', t, a),
        r.transitionStart(s, b),
        0 === t
          ? r.transitionEnd(s, b)
          : r.animating ||
            ((r.animating = !0),
            r.onSlideToWrapperTransitionEnd ||
              (r.onSlideToWrapperTransitionEnd = function (e) {
                r &&
                  !r.destroyed &&
                  e.target === this &&
                  (r.$wrapperEl[0].removeEventListener(
                    'transitionend',
                    r.onSlideToWrapperTransitionEnd
                  ),
                  r.$wrapperEl[0].removeEventListener(
                    'webkitTransitionEnd',
                    r.onSlideToWrapperTransitionEnd
                  ),
                  (r.onSlideToWrapperTransitionEnd = null),
                  delete r.onSlideToWrapperTransitionEnd,
                  r.transitionEnd(s, b));
              }),
            r.$wrapperEl[0].addEventListener(
              'transitionend',
              r.onSlideToWrapperTransitionEnd
            ),
            r.$wrapperEl[0].addEventListener(
              'webkitTransitionEnd',
              r.onSlideToWrapperTransitionEnd
            )),
        !0
      );
    },
    slideToLoop: function (e, t, s, a) {
      void 0 === e && (e = 0),
        void 0 === t && (t = this.params.speed),
        void 0 === s && (s = !0);
      const i = this;
      let r = e;
      return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
    },
    slideNext: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        { animating: i, enabled: r, params: n } = a;
      if (!r) return a;
      let l = n.slidesPerGroup;
      'auto' === n.slidesPerView &&
        1 === n.slidesPerGroup &&
        n.slidesPerGroupAuto &&
        (l = Math.max(a.slidesPerViewDynamic('current', !0), 1));
      const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
      if (n.loop) {
        if (i && n.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      return n.rewind && a.isEnd
        ? a.slideTo(0, e, t, s)
        : a.slideTo(a.activeIndex + o, e, t, s);
    },
    slidePrev: function (e, t, s) {
      void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
      const a = this,
        {
          params: i,
          animating: r,
          snapGrid: n,
          slidesGrid: l,
          rtlTranslate: o,
          enabled: d,
        } = a;
      if (!d) return a;
      if (i.loop) {
        if (r && i.loopPreventsSlide) return !1;
        a.loopFix(), (a._clientLeft = a.$wrapperEl[0].clientLeft);
      }
      function c(e) {
        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
      }
      const p = c(o ? a.translate : -a.translate),
        u = n.map((e) => c(e));
      let h = n[u.indexOf(p) - 1];
      if (void 0 === h && i.cssMode) {
        let e;
        n.forEach((t, s) => {
          p >= t && (e = s);
        }),
          void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
      }
      let m = 0;
      if (
        (void 0 !== h &&
          ((m = l.indexOf(h)),
          m < 0 && (m = a.activeIndex - 1),
          'auto' === i.slidesPerView &&
            1 === i.slidesPerGroup &&
            i.slidesPerGroupAuto &&
            ((m = m - a.slidesPerViewDynamic('previous', !0) + 1),
            (m = Math.max(m, 0)))),
        i.rewind && a.isBeginning)
      ) {
        const i =
          a.params.virtual && a.params.virtual.enabled && a.virtual
            ? a.virtual.slides.length - 1
            : a.slides.length - 1;
        return a.slideTo(i, e, t, s);
      }
      return a.slideTo(m, e, t, s);
    },
    slideReset: function (e, t, s) {
      return (
        void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        this.slideTo(this.activeIndex, e, t, s)
      );
    },
    slideToClosest: function (e, t, s, a) {
      void 0 === e && (e = this.params.speed),
        void 0 === t && (t = !0),
        void 0 === a && (a = 0.5);
      const i = this;
      let r = i.activeIndex;
      const n = Math.min(i.params.slidesPerGroupSkip, r),
        l = n + Math.floor((r - n) / i.params.slidesPerGroup),
        o = i.rtlTranslate ? i.translate : -i.translate;
      if (o >= i.snapGrid[l]) {
        const e = i.snapGrid[l];
        o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
      } else {
        const e = i.snapGrid[l - 1];
        o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
      }
      return (
        (r = Math.max(r, 0)),
        (r = Math.min(r, i.slidesGrid.length - 1)),
        i.slideTo(r, e, t, s)
      );
    },
    slideToClickedSlide: function () {
      const e = this,
        { params: t, $wrapperEl: s } = e,
        a =
          'auto' === t.slidesPerView
            ? e.slidesPerViewDynamic()
            : t.slidesPerView;
      let i,
        r = e.clickedIndex;
      if (t.loop) {
        if (e.animating) return;
        (i = parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)),
          t.centeredSlides
            ? r < e.loopedSlides - a / 2 ||
              r > e.slides.length - e.loopedSlides + a / 2
              ? (e.loopFix(),
                (r = s
                  .children(
                    `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                  )
                  .eq(0)
                  .index()),
                p(() => {
                  e.slideTo(r);
                }))
              : e.slideTo(r)
            : r > e.slides.length - a
            ? (e.loopFix(),
              (r = s
                .children(
                  `.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`
                )
                .eq(0)
                .index()),
              p(() => {
                e.slideTo(r);
              }))
            : e.slideTo(r);
      } else e.slideTo(r);
    },
  };
  var z = {
    loopCreate: function () {
      const e = this,
        t = a(),
        { params: s, $wrapperEl: i } = e,
        r = i.children().length > 0 ? d(i.children()[0].parentNode) : i;
      r.children(`.${s.slideClass}.${s.slideDuplicateClass}`).remove();
      let n = r.children(`.${s.slideClass}`);
      if (s.loopFillGroupWithBlank) {
        const e = s.slidesPerGroup - (n.length % s.slidesPerGroup);
        if (e !== s.slidesPerGroup) {
          for (let a = 0; a < e; a += 1) {
            const e = d(t.createElement('div')).addClass(
              `${s.slideClass} ${s.slideBlankClass}`
            );
            r.append(e);
          }
          n = r.children(`.${s.slideClass}`);
        }
      }
      'auto' !== s.slidesPerView ||
        s.loopedSlides ||
        (s.loopedSlides = n.length),
        (e.loopedSlides = Math.ceil(
          parseFloat(s.loopedSlides || s.slidesPerView, 10)
        )),
        (e.loopedSlides += s.loopAdditionalSlides),
        e.loopedSlides > n.length && (e.loopedSlides = n.length);
      const l = [],
        o = [];
      n.each((t, s) => {
        const a = d(t);
        s < e.loopedSlides && o.push(t),
          s < n.length && s >= n.length - e.loopedSlides && l.push(t),
          a.attr('data-swiper-slide-index', s);
      });
      for (let e = 0; e < o.length; e += 1)
        r.append(d(o[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
      for (let e = l.length - 1; e >= 0; e -= 1)
        r.prepend(d(l[e].cloneNode(!0)).addClass(s.slideDuplicateClass));
    },
    loopFix: function () {
      const e = this;
      e.emit('beforeLoopFix');
      const {
        activeIndex: t,
        slides: s,
        loopedSlides: a,
        allowSlidePrev: i,
        allowSlideNext: r,
        snapGrid: n,
        rtlTranslate: l,
      } = e;
      let o;
      (e.allowSlidePrev = !0), (e.allowSlideNext = !0);
      const d = -n[t] - e.getTranslate();
      if (t < a) {
        (o = s.length - 3 * a + t), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      } else if (t >= s.length - a) {
        (o = -s.length + t + a), (o += a);
        e.slideTo(o, 0, !1, !0) &&
          0 !== d &&
          e.setTranslate((l ? -e.translate : e.translate) - d);
      }
      (e.allowSlidePrev = i), (e.allowSlideNext = r), e.emit('loopFix');
    },
    loopDestroy: function () {
      const { $wrapperEl: e, params: t, slides: s } = this;
      e
        .children(
          `.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`
        )
        .remove(),
        s.removeAttr('data-swiper-slide-index');
    },
  };
  function O(e) {
    const t = this,
      s = a(),
      i = r(),
      n = t.touchEventsData,
      { params: l, touches: o, enabled: c } = t;
    if (!c) return;
    if (t.animating && l.preventInteractionOnTransition) return;
    !t.animating && l.cssMode && l.loop && t.loopFix();
    let p = e;
    p.originalEvent && (p = p.originalEvent);
    let h = d(p.target);
    if ('wrapper' === l.touchEventsTarget && !h.closest(t.wrapperEl).length)
      return;
    if (
      ((n.isTouchEvent = 'touchstart' === p.type),
      !n.isTouchEvent && 'which' in p && 3 === p.which)
    )
      return;
    if (!n.isTouchEvent && 'button' in p && p.button > 0) return;
    if (n.isTouched && n.isMoved) return;
    !!l.noSwipingClass &&
      '' !== l.noSwipingClass &&
      p.target &&
      p.target.shadowRoot &&
      e.path &&
      e.path[0] &&
      (h = d(e.path[0]));
    const m = l.noSwipingSelector
        ? l.noSwipingSelector
        : `.${l.noSwipingClass}`,
      f = !(!p.target || !p.target.shadowRoot);
    if (
      l.noSwiping &&
      (f
        ? (function (e, t) {
            return (
              void 0 === t && (t = this),
              (function t(s) {
                if (!s || s === a() || s === r()) return null;
                s.assignedSlot && (s = s.assignedSlot);
                const i = s.closest(e);
                return i || s.getRootNode ? i || t(s.getRootNode().host) : null;
              })(t)
            );
          })(m, h[0])
        : h.closest(m)[0])
    )
      return void (t.allowClick = !0);
    if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
    (o.currentX = 'touchstart' === p.type ? p.targetTouches[0].pageX : p.pageX),
      (o.currentY =
        'touchstart' === p.type ? p.targetTouches[0].pageY : p.pageY);
    const g = o.currentX,
      v = o.currentY,
      w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection,
      b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
    if (w && (g <= b || g >= i.innerWidth - b)) {
      if ('prevent' !== w) return;
      e.preventDefault();
    }
    if (
      (Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
      }),
      (o.startX = g),
      (o.startY = v),
      (n.touchStartTime = u()),
      (t.allowClick = !0),
      t.updateSize(),
      (t.swipeDirection = void 0),
      l.threshold > 0 && (n.allowThresholdMove = !1),
      'touchstart' !== p.type)
    ) {
      let e = !0;
      h.is(n.focusableElements) &&
        ((e = !1), 'SELECT' === h[0].nodeName && (n.isTouched = !1)),
        s.activeElement &&
          d(s.activeElement).is(n.focusableElements) &&
          s.activeElement !== h[0] &&
          s.activeElement.blur();
      const a = e && t.allowTouchMove && l.touchStartPreventDefault;
      (!l.touchStartForcePreventDefault && !a) ||
        h[0].isContentEditable ||
        p.preventDefault();
    }
    t.params.freeMode &&
      t.params.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !l.cssMode &&
      t.freeMode.onTouchStart(),
      t.emit('touchStart', p);
  }
  function L(e) {
    const t = a(),
      s = this,
      i = s.touchEventsData,
      { params: r, touches: n, rtlTranslate: l, enabled: o } = s;
    if (!o) return;
    let c = e;
    if ((c.originalEvent && (c = c.originalEvent), !i.isTouched))
      return void (
        i.startMoving &&
        i.isScrolling &&
        s.emit('touchMoveOpposite', c)
      );
    if (i.isTouchEvent && 'touchmove' !== c.type) return;
    const p =
        'touchmove' === c.type &&
        c.targetTouches &&
        (c.targetTouches[0] || c.changedTouches[0]),
      h = 'touchmove' === c.type ? p.pageX : c.pageX,
      m = 'touchmove' === c.type ? p.pageY : c.pageY;
    if (c.preventedByNestedSwiper) return (n.startX = h), void (n.startY = m);
    if (!s.allowTouchMove)
      return (
        d(c.target).is(i.focusableElements) || (s.allowClick = !1),
        void (
          i.isTouched &&
          (Object.assign(n, { startX: h, startY: m, currentX: h, currentY: m }),
          (i.touchStartTime = u()))
        )
      );
    if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop)
      if (s.isVertical()) {
        if (
          (m < n.startY && s.translate <= s.maxTranslate()) ||
          (m > n.startY && s.translate >= s.minTranslate())
        )
          return (i.isTouched = !1), void (i.isMoved = !1);
      } else if (
        (h < n.startX && s.translate <= s.maxTranslate()) ||
        (h > n.startX && s.translate >= s.minTranslate())
      )
        return;
    if (
      i.isTouchEvent &&
      t.activeElement &&
      c.target === t.activeElement &&
      d(c.target).is(i.focusableElements)
    )
      return (i.isMoved = !0), void (s.allowClick = !1);
    if (
      (i.allowTouchCallbacks && s.emit('touchMove', c),
      c.targetTouches && c.targetTouches.length > 1)
    )
      return;
    (n.currentX = h), (n.currentY = m);
    const f = n.currentX - n.startX,
      g = n.currentY - n.startY;
    if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold)
      return;
    if (void 0 === i.isScrolling) {
      let e;
      (s.isHorizontal() && n.currentY === n.startY) ||
      (s.isVertical() && n.currentX === n.startX)
        ? (i.isScrolling = !1)
        : f * f + g * g >= 25 &&
          ((e = (180 * Math.atan2(Math.abs(g), Math.abs(f))) / Math.PI),
          (i.isScrolling = s.isHorizontal()
            ? e > r.touchAngle
            : 90 - e > r.touchAngle));
    }
    if (
      (i.isScrolling && s.emit('touchMoveOpposite', c),
      void 0 === i.startMoving &&
        ((n.currentX === n.startX && n.currentY === n.startY) ||
          (i.startMoving = !0)),
      i.isScrolling)
    )
      return void (i.isTouched = !1);
    if (!i.startMoving) return;
    (s.allowClick = !1),
      !r.cssMode && c.cancelable && c.preventDefault(),
      r.touchMoveStopPropagation && !r.nested && c.stopPropagation(),
      i.isMoved ||
        (r.loop && !r.cssMode && s.loopFix(),
        (i.startTranslate = s.getTranslate()),
        s.setTransition(0),
        s.animating &&
          s.$wrapperEl.trigger('webkitTransitionEnd transitionend'),
        (i.allowMomentumBounce = !1),
        !r.grabCursor ||
          (!0 !== s.allowSlideNext && !0 !== s.allowSlidePrev) ||
          s.setGrabCursor(!0),
        s.emit('sliderFirstMove', c)),
      s.emit('sliderMove', c),
      (i.isMoved = !0);
    let v = s.isHorizontal() ? f : g;
    (n.diff = v),
      (v *= r.touchRatio),
      l && (v = -v),
      (s.swipeDirection = v > 0 ? 'prev' : 'next'),
      (i.currentTranslate = v + i.startTranslate);
    let w = !0,
      b = r.resistanceRatio;
    if (
      (r.touchReleaseOnEdges && (b = 0),
      v > 0 && i.currentTranslate > s.minTranslate()
        ? ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.minTranslate() -
              1 +
              (-s.minTranslate() + i.startTranslate + v) ** b))
        : v < 0 &&
          i.currentTranslate < s.maxTranslate() &&
          ((w = !1),
          r.resistance &&
            (i.currentTranslate =
              s.maxTranslate() +
              1 -
              (s.maxTranslate() - i.startTranslate - v) ** b)),
      w && (c.preventedByNestedSwiper = !0),
      !s.allowSlideNext &&
        'next' === s.swipeDirection &&
        i.currentTranslate < i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      !s.allowSlidePrev &&
        'prev' === s.swipeDirection &&
        i.currentTranslate > i.startTranslate &&
        (i.currentTranslate = i.startTranslate),
      s.allowSlidePrev ||
        s.allowSlideNext ||
        (i.currentTranslate = i.startTranslate),
      r.threshold > 0)
    ) {
      if (!(Math.abs(v) > r.threshold || i.allowThresholdMove))
        return void (i.currentTranslate = i.startTranslate);
      if (!i.allowThresholdMove)
        return (
          (i.allowThresholdMove = !0),
          (n.startX = n.currentX),
          (n.startY = n.currentY),
          (i.currentTranslate = i.startTranslate),
          void (n.diff = s.isHorizontal()
            ? n.currentX - n.startX
            : n.currentY - n.startY)
        );
    }
    r.followFinger &&
      !r.cssMode &&
      (((r.freeMode && r.freeMode.enabled && s.freeMode) ||
        r.watchSlidesProgress) &&
        (s.updateActiveIndex(), s.updateSlidesClasses()),
      s.params.freeMode &&
        r.freeMode.enabled &&
        s.freeMode &&
        s.freeMode.onTouchMove(),
      s.updateProgress(i.currentTranslate),
      s.setTranslate(i.currentTranslate));
  }
  function I(e) {
    const t = this,
      s = t.touchEventsData,
      { params: a, touches: i, rtlTranslate: r, slidesGrid: n, enabled: l } = t;
    if (!l) return;
    let o = e;
    if (
      (o.originalEvent && (o = o.originalEvent),
      s.allowTouchCallbacks && t.emit('touchEnd', o),
      (s.allowTouchCallbacks = !1),
      !s.isTouched)
    )
      return (
        s.isMoved && a.grabCursor && t.setGrabCursor(!1),
        (s.isMoved = !1),
        void (s.startMoving = !1)
      );
    a.grabCursor &&
      s.isMoved &&
      s.isTouched &&
      (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) &&
      t.setGrabCursor(!1);
    const d = u(),
      c = d - s.touchStartTime;
    if (t.allowClick) {
      const e = o.path || (o.composedPath && o.composedPath());
      t.updateClickedSlide((e && e[0]) || o.target),
        t.emit('tap click', o),
        c < 300 &&
          d - s.lastClickTime < 300 &&
          t.emit('doubleTap doubleClick', o);
    }
    if (
      ((s.lastClickTime = u()),
      p(() => {
        t.destroyed || (t.allowClick = !0);
      }),
      !s.isTouched ||
        !s.isMoved ||
        !t.swipeDirection ||
        0 === i.diff ||
        s.currentTranslate === s.startTranslate)
    )
      return (s.isTouched = !1), (s.isMoved = !1), void (s.startMoving = !1);
    let h;
    if (
      ((s.isTouched = !1),
      (s.isMoved = !1),
      (s.startMoving = !1),
      (h = a.followFinger
        ? r
          ? t.translate
          : -t.translate
        : -s.currentTranslate),
      a.cssMode)
    )
      return;
    if (t.params.freeMode && a.freeMode.enabled)
      return void t.freeMode.onTouchEnd({ currentPos: h });
    let m = 0,
      f = t.slidesSizesGrid[0];
    for (
      let e = 0;
      e < n.length;
      e += e < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
    ) {
      const t = e < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
      void 0 !== n[e + t]
        ? h >= n[e] && h < n[e + t] && ((m = e), (f = n[e + t] - n[e]))
        : h >= n[e] && ((m = e), (f = n[n.length - 1] - n[n.length - 2]));
    }
    let g = null,
      v = null;
    a.rewind &&
      (t.isBeginning
        ? (v =
            t.params.virtual && t.params.virtual.enabled && t.virtual
              ? t.virtual.slides.length - 1
              : t.slides.length - 1)
        : t.isEnd && (g = 0));
    const w = (h - n[m]) / f,
      b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    if (c > a.longSwipesMs) {
      if (!a.longSwipes) return void t.slideTo(t.activeIndex);
      'next' === t.swipeDirection &&
        (w >= a.longSwipesRatio
          ? t.slideTo(a.rewind && t.isEnd ? g : m + b)
          : t.slideTo(m)),
        'prev' === t.swipeDirection &&
          (w > 1 - a.longSwipesRatio
            ? t.slideTo(m + b)
            : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio
            ? t.slideTo(v)
            : t.slideTo(m));
    } else {
      if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
      t.navigation &&
      (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl)
        ? o.target === t.navigation.nextEl
          ? t.slideTo(m + b)
          : t.slideTo(m)
        : ('next' === t.swipeDirection && t.slideTo(null !== g ? g : m + b),
          'prev' === t.swipeDirection && t.slideTo(null !== v ? v : m));
    }
  }
  function A() {
    const e = this,
      { params: t, el: s } = e;
    if (s && 0 === s.offsetWidth) return;
    t.breakpoints && e.setBreakpoint();
    const { allowSlideNext: a, allowSlidePrev: i, snapGrid: r } = e;
    (e.allowSlideNext = !0),
      (e.allowSlidePrev = !0),
      e.updateSize(),
      e.updateSlides(),
      e.updateSlidesClasses(),
      ('auto' === t.slidesPerView || t.slidesPerView > 1) &&
      e.isEnd &&
      !e.isBeginning &&
      !e.params.centeredSlides
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
      e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(),
      (e.allowSlidePrev = i),
      (e.allowSlideNext = a),
      e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
  }
  function D(e) {
    const t = this;
    t.enabled &&
      (t.allowClick ||
        (t.params.preventClicks && e.preventDefault(),
        t.params.preventClicksPropagation &&
          t.animating &&
          (e.stopPropagation(), e.stopImmediatePropagation())));
  }
  function G() {
    const e = this,
      { wrapperEl: t, rtlTranslate: s, enabled: a } = e;
    if (!a) return;
    let i;
    (e.previousTranslate = e.translate),
      e.isHorizontal()
        ? (e.translate = -t.scrollLeft)
        : (e.translate = -t.scrollTop),
      0 === e.translate && (e.translate = 0),
      e.updateActiveIndex(),
      e.updateSlidesClasses();
    const r = e.maxTranslate() - e.minTranslate();
    (i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r),
      i !== e.progress && e.updateProgress(s ? -e.translate : e.translate),
      e.emit('setTranslate', e.translate, !1);
  }
  let N = !1;
  function B() {}
  const H = (e, t) => {
    const s = a(),
      {
        params: i,
        touchEvents: r,
        el: n,
        wrapperEl: l,
        device: o,
        support: d,
      } = e,
      c = !!i.nested,
      p = 'on' === t ? 'addEventListener' : 'removeEventListener',
      u = t;
    if (d.touch) {
      const t = !(
        'touchstart' !== r.start ||
        !d.passiveListener ||
        !i.passiveListeners
      ) && { passive: !0, capture: !1 };
      n[p](r.start, e.onTouchStart, t),
        n[p](
          r.move,
          e.onTouchMove,
          d.passiveListener ? { passive: !1, capture: c } : c
        ),
        n[p](r.end, e.onTouchEnd, t),
        r.cancel && n[p](r.cancel, e.onTouchEnd, t);
    } else
      n[p](r.start, e.onTouchStart, !1),
        s[p](r.move, e.onTouchMove, c),
        s[p](r.end, e.onTouchEnd, !1);
    (i.preventClicks || i.preventClicksPropagation) &&
      n[p]('click', e.onClick, !0),
      i.cssMode && l[p]('scroll', e.onScroll),
      i.updateOnWindowResize
        ? e[u](
            o.ios || o.android
              ? 'resize orientationchange observerUpdate'
              : 'resize observerUpdate',
            A,
            !0
          )
        : e[u]('observerUpdate', A, !0);
  };
  var X = {
    attachEvents: function () {
      const e = this,
        t = a(),
        { params: s, support: i } = e;
      (e.onTouchStart = O.bind(e)),
        (e.onTouchMove = L.bind(e)),
        (e.onTouchEnd = I.bind(e)),
        s.cssMode && (e.onScroll = G.bind(e)),
        (e.onClick = D.bind(e)),
        i.touch && !N && (t.addEventListener('touchstart', B), (N = !0)),
        H(e, 'on');
    },
    detachEvents: function () {
      H(this, 'off');
    },
  };
  const Y = (e, t) => e.grid && t.grid && t.grid.rows > 1;
  var R = {
    addClasses: function () {
      const e = this,
        { classNames: t, params: s, rtl: a, $el: i, device: r, support: n } = e,
        l = (function (e, t) {
          const s = [];
          return (
            e.forEach((e) => {
              'object' == typeof e
                ? Object.keys(e).forEach((a) => {
                    e[a] && s.push(t + a);
                  })
                : 'string' == typeof e && s.push(t + e);
            }),
            s
          );
        })(
          [
            'initialized',
            s.direction,
            { 'pointer-events': !n.touch },
            { 'free-mode': e.params.freeMode && s.freeMode.enabled },
            { autoheight: s.autoHeight },
            { rtl: a },
            { grid: s.grid && s.grid.rows > 1 },
            {
              'grid-column':
                s.grid && s.grid.rows > 1 && 'column' === s.grid.fill,
            },
            { android: r.android },
            { ios: r.ios },
            { 'css-mode': s.cssMode },
            { centered: s.cssMode && s.centeredSlides },
            { 'watch-progress': s.watchSlidesProgress },
          ],
          s.containerModifierClass
        );
      t.push(...l), i.addClass([...t].join(' ')), e.emitContainerClasses();
    },
    removeClasses: function () {
      const { $el: e, classNames: t } = this;
      e.removeClass(t.join(' ')), this.emitContainerClasses();
    },
  };
  var W = {
    init: !0,
    direction: 'horizontal',
    touchEventsTarget: 'wrapper',
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    enabled: !0,
    focusableElements: 'input, select, option, textarea, button, video, label',
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: 'slide',
    breakpoints: void 0,
    breakpointsBase: 'window',
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 0,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    preloadImages: !0,
    updateOnImagesReady: !0,
    loop: !1,
    loopAdditionalSlides: 0,
    loopedSlides: null,
    loopFillGroupWithBlank: !1,
    loopPreventsSlide: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: 'swiper-no-swiping',
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: 'swiper-',
    slideClass: 'swiper-slide',
    slideBlankClass: 'swiper-slide-invisible-blank',
    slideActiveClass: 'swiper-slide-active',
    slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
    slideVisibleClass: 'swiper-slide-visible',
    slideDuplicateClass: 'swiper-slide-duplicate',
    slideNextClass: 'swiper-slide-next',
    slideDuplicateNextClass: 'swiper-slide-duplicate-next',
    slidePrevClass: 'swiper-slide-prev',
    slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
    wrapperClass: 'swiper-wrapper',
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
  function j(e, t) {
    return function (s) {
      void 0 === s && (s = {});
      const a = Object.keys(s)[0],
        i = s[a];
      'object' == typeof i && null !== i
        ? (['navigation', 'pagination', 'scrollbar'].indexOf(a) >= 0 &&
            !0 === e[a] &&
            (e[a] = { auto: !0 }),
          a in e && 'enabled' in i
            ? (!0 === e[a] && (e[a] = { enabled: !0 }),
              'object' != typeof e[a] ||
                'enabled' in e[a] ||
                (e[a].enabled = !0),
              e[a] || (e[a] = { enabled: !1 }),
              g(t, s))
            : g(t, s))
        : g(t, s);
    };
  }
  const _ = {
      eventsEmitter: $,
      update: S,
      translate: M,
      transition: {
        setTransition: function (e, t) {
          const s = this;
          s.params.cssMode || s.$wrapperEl.transition(e),
            s.emit('setTransition', e, t);
        },
        transitionStart: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          a.cssMode ||
            (a.autoHeight && s.updateAutoHeight(),
            P({ swiper: s, runCallbacks: e, direction: t, step: 'Start' }));
        },
        transitionEnd: function (e, t) {
          void 0 === e && (e = !0);
          const s = this,
            { params: a } = s;
          (s.animating = !1),
            a.cssMode ||
              (s.setTransition(0),
              P({ swiper: s, runCallbacks: e, direction: t, step: 'End' }));
        },
      },
      slide: k,
      loop: z,
      grabCursor: {
        setGrabCursor: function (e) {
          const t = this;
          if (
            t.support.touch ||
            !t.params.simulateTouch ||
            (t.params.watchOverflow && t.isLocked) ||
            t.params.cssMode
          )
            return;
          const s =
            'container' === t.params.touchEventsTarget ? t.el : t.wrapperEl;
          (s.style.cursor = 'move'), (s.style.cursor = e ? 'grabbing' : 'grab');
        },
        unsetGrabCursor: function () {
          const e = this;
          e.support.touch ||
            (e.params.watchOverflow && e.isLocked) ||
            e.params.cssMode ||
            (e[
              'container' === e.params.touchEventsTarget ? 'el' : 'wrapperEl'
            ].style.cursor = '');
        },
      },
      events: X,
      breakpoints: {
        setBreakpoint: function () {
          const e = this,
            {
              activeIndex: t,
              initialized: s,
              loopedSlides: a = 0,
              params: i,
              $el: r,
            } = e,
            n = i.breakpoints;
          if (!n || (n && 0 === Object.keys(n).length)) return;
          const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
          if (!l || e.currentBreakpoint === l) return;
          const o = (l in n ? n[l] : void 0) || e.originalParams,
            d = Y(e, i),
            c = Y(e, o),
            p = i.enabled;
          d && !c
            ? (r.removeClass(
                `${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`
              ),
              e.emitContainerClasses())
            : !d &&
              c &&
              (r.addClass(`${i.containerModifierClass}grid`),
              ((o.grid.fill && 'column' === o.grid.fill) ||
                (!o.grid.fill && 'column' === i.grid.fill)) &&
                r.addClass(`${i.containerModifierClass}grid-column`),
              e.emitContainerClasses());
          const u = o.direction && o.direction !== i.direction,
            h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
          u && s && e.changeDirection(), g(e.params, o);
          const m = e.params.enabled;
          Object.assign(e, {
            allowTouchMove: e.params.allowTouchMove,
            allowSlideNext: e.params.allowSlideNext,
            allowSlidePrev: e.params.allowSlidePrev,
          }),
            p && !m ? e.disable() : !p && m && e.enable(),
            (e.currentBreakpoint = l),
            e.emit('_beforeBreakpoint', o),
            h &&
              s &&
              (e.loopDestroy(),
              e.loopCreate(),
              e.updateSlides(),
              e.slideTo(t - a + e.loopedSlides, 0, !1)),
            e.emit('breakpoint', o);
        },
        getBreakpoint: function (e, t, s) {
          if ((void 0 === t && (t = 'window'), !e || ('container' === t && !s)))
            return;
          let a = !1;
          const i = r(),
            n = 'window' === t ? i.innerHeight : s.clientHeight,
            l = Object.keys(e).map((e) => {
              if ('string' == typeof e && 0 === e.indexOf('@')) {
                const t = parseFloat(e.substr(1));
                return { value: n * t, point: e };
              }
              return { value: e, point: e };
            });
          l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
          for (let e = 0; e < l.length; e += 1) {
            const { point: r, value: n } = l[e];
            'window' === t
              ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r)
              : n <= s.clientWidth && (a = r);
          }
          return a || 'max';
        },
      },
      checkOverflow: {
        checkOverflow: function () {
          const e = this,
            { isLocked: t, params: s } = e,
            { slidesOffsetBefore: a } = s;
          if (a) {
            const t = e.slides.length - 1,
              s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
            e.isLocked = e.size > s;
          } else e.isLocked = 1 === e.snapGrid.length;
          !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked),
            !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked),
            t && t !== e.isLocked && (e.isEnd = !1),
            t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock');
        },
      },
      classes: R,
      images: {
        loadImage: function (e, t, s, a, i, n) {
          const l = r();
          let o;
          function c() {
            n && n();
          }
          d(e).parent('picture')[0] || (e.complete && i)
            ? c()
            : t
            ? ((o = new l.Image()),
              (o.onload = c),
              (o.onerror = c),
              a && (o.sizes = a),
              s && (o.srcset = s),
              t && (o.src = t))
            : c();
        },
        preloadImages: function () {
          const e = this;
          function t() {
            null != e &&
              e &&
              !e.destroyed &&
              (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1),
              e.imagesLoaded === e.imagesToLoad.length &&
                (e.params.updateOnImagesReady && e.update(),
                e.emit('imagesReady')));
          }
          e.imagesToLoad = e.$el.find('img');
          for (let s = 0; s < e.imagesToLoad.length; s += 1) {
            const a = e.imagesToLoad[s];
            e.loadImage(
              a,
              a.currentSrc || a.getAttribute('src'),
              a.srcset || a.getAttribute('srcset'),
              a.sizes || a.getAttribute('sizes'),
              !0,
              t
            );
          }
        },
      },
    },
    q = {};
  class V {
    constructor() {
      let e, t;
      for (var s = arguments.length, a = new Array(s), i = 0; i < s; i++)
        a[i] = arguments[i];
      if (
        (1 === a.length &&
        a[0].constructor &&
        'Object' === Object.prototype.toString.call(a[0]).slice(8, -1)
          ? (t = a[0])
          : ([e, t] = a),
        t || (t = {}),
        (t = g({}, t)),
        e && !t.el && (t.el = e),
        t.el && d(t.el).length > 1)
      ) {
        const e = [];
        return (
          d(t.el).each((s) => {
            const a = g({}, t, { el: s });
            e.push(new V(a));
          }),
          e
        );
      }
      const r = this;
      (r.__swiper__ = !0),
        (r.support = E()),
        (r.device = T({ userAgent: t.userAgent })),
        (r.browser = C()),
        (r.eventsListeners = {}),
        (r.eventsAnyListeners = []),
        (r.modules = [...r.__modules__]),
        t.modules && Array.isArray(t.modules) && r.modules.push(...t.modules);
      const n = {};
      r.modules.forEach((e) => {
        e({
          swiper: r,
          extendParams: j(t, n),
          on: r.on.bind(r),
          once: r.once.bind(r),
          off: r.off.bind(r),
          emit: r.emit.bind(r),
        });
      });
      const l = g({}, W, n);
      return (
        (r.params = g({}, l, q, t)),
        (r.originalParams = g({}, r.params)),
        (r.passedParams = g({}, t)),
        r.params &&
          r.params.on &&
          Object.keys(r.params.on).forEach((e) => {
            r.on(e, r.params.on[e]);
          }),
        r.params && r.params.onAny && r.onAny(r.params.onAny),
        (r.$ = d),
        Object.assign(r, {
          enabled: r.params.enabled,
          el: e,
          classNames: [],
          slides: d(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          isHorizontal: () => 'horizontal' === r.params.direction,
          isVertical: () => 'vertical' === r.params.direction,
          activeIndex: 0,
          realIndex: 0,
          isBeginning: !0,
          isEnd: !1,
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: !1,
          allowSlideNext: r.params.allowSlideNext,
          allowSlidePrev: r.params.allowSlidePrev,
          touchEvents: (function () {
            const e = ['touchstart', 'touchmove', 'touchend', 'touchcancel'],
              t = ['pointerdown', 'pointermove', 'pointerup'];
            return (
              (r.touchEventsTouch = {
                start: e[0],
                move: e[1],
                end: e[2],
                cancel: e[3],
              }),
              (r.touchEventsDesktop = { start: t[0], move: t[1], end: t[2] }),
              r.support.touch || !r.params.simulateTouch
                ? r.touchEventsTouch
                : r.touchEventsDesktop
            );
          })(),
          touchEventsData: {
            isTouched: void 0,
            isMoved: void 0,
            allowTouchCallbacks: void 0,
            touchStartTime: void 0,
            isScrolling: void 0,
            currentTranslate: void 0,
            startTranslate: void 0,
            allowThresholdMove: void 0,
            focusableElements: r.params.focusableElements,
            lastClickTime: u(),
            clickTimeout: void 0,
            velocities: [],
            allowMomentumBounce: void 0,
            isTouchEvent: void 0,
            startMoving: void 0,
          },
          allowClick: !0,
          allowTouchMove: r.params.allowTouchMove,
          touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
          imagesToLoad: [],
          imagesLoaded: 0,
        }),
        r.emit('_swiper'),
        r.params.init && r.init(),
        r
      );
    }
    enable() {
      const e = this;
      e.enabled ||
        ((e.enabled = !0),
        e.params.grabCursor && e.setGrabCursor(),
        e.emit('enable'));
    }
    disable() {
      const e = this;
      e.enabled &&
        ((e.enabled = !1),
        e.params.grabCursor && e.unsetGrabCursor(),
        e.emit('disable'));
    }
    setProgress(e, t) {
      const s = this;
      e = Math.min(Math.max(e, 0), 1);
      const a = s.minTranslate(),
        i = (s.maxTranslate() - a) * e + a;
      s.translateTo(i, void 0 === t ? 0 : t),
        s.updateActiveIndex(),
        s.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = e.el.className
        .split(' ')
        .filter(
          (t) =>
            0 === t.indexOf('swiper') ||
            0 === t.indexOf(e.params.containerModifierClass)
        );
      e.emit('_containerClasses', t.join(' '));
    }
    getSlideClasses(e) {
      const t = this;
      return t.destroyed
        ? ''
        : e.className
            .split(' ')
            .filter(
              (e) =>
                0 === e.indexOf('swiper-slide') ||
                0 === e.indexOf(t.params.slideClass)
            )
            .join(' ');
    }
    emitSlidesClasses() {
      const e = this;
      if (!e.params._emitClasses || !e.el) return;
      const t = [];
      e.slides.each((s) => {
        const a = e.getSlideClasses(s);
        t.push({ slideEl: s, classNames: a }), e.emit('_slideClass', s, a);
      }),
        e.emit('_slideClasses', t);
    }
    slidesPerViewDynamic(e, t) {
      void 0 === e && (e = 'current'), void 0 === t && (t = !1);
      const {
        params: s,
        slides: a,
        slidesGrid: i,
        slidesSizesGrid: r,
        size: n,
        activeIndex: l,
      } = this;
      let o = 1;
      if (s.centeredSlides) {
        let e,
          t = a[l].swiperSlideSize;
        for (let s = l + 1; s < a.length; s += 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
        for (let s = l - 1; s >= 0; s -= 1)
          a[s] &&
            !e &&
            ((t += a[s].swiperSlideSize), (o += 1), t > n && (e = !0));
      } else if ('current' === e)
        for (let e = l + 1; e < a.length; e += 1) {
          (t ? i[e] + r[e] - i[l] < n : i[e] - i[l] < n) && (o += 1);
        }
      else
        for (let e = l - 1; e >= 0; e -= 1) {
          i[l] - i[e] < n && (o += 1);
        }
      return o;
    }
    update() {
      const e = this;
      if (!e || e.destroyed) return;
      const { snapGrid: t, params: s } = e;
      function a() {
        const t = e.rtlTranslate ? -1 * e.translate : e.translate,
          s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
        e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
      }
      let i;
      s.breakpoints && e.setBreakpoint(),
        e.updateSize(),
        e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.params.freeMode && e.params.freeMode.enabled
          ? (a(), e.params.autoHeight && e.updateAutoHeight())
          : ((i =
              ('auto' === e.params.slidesPerView ||
                e.params.slidesPerView > 1) &&
              e.isEnd &&
              !e.params.centeredSlides
                ? e.slideTo(e.slides.length - 1, 0, !1, !0)
                : e.slideTo(e.activeIndex, 0, !1, !0)),
            i || a()),
        s.watchOverflow && t !== e.snapGrid && e.checkOverflow(),
        e.emit('update');
    }
    changeDirection(e, t) {
      void 0 === t && (t = !0);
      const s = this,
        a = s.params.direction;
      return (
        e || (e = 'horizontal' === a ? 'vertical' : 'horizontal'),
        e === a ||
          ('horizontal' !== e && 'vertical' !== e) ||
          (s.$el
            .removeClass(`${s.params.containerModifierClass}${a}`)
            .addClass(`${s.params.containerModifierClass}${e}`),
          s.emitContainerClasses(),
          (s.params.direction = e),
          s.slides.each((t) => {
            'vertical' === e ? (t.style.width = '') : (t.style.height = '');
          }),
          s.emit('changeDirection'),
          t && s.update()),
        s
      );
    }
    mount(e) {
      const t = this;
      if (t.mounted) return !0;
      const s = d(e || t.params.el);
      if (!(e = s[0])) return !1;
      e.swiper = t;
      const i = () =>
        `.${(t.params.wrapperClass || '').trim().split(' ').join('.')}`;
      let r = (() => {
        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
          const t = d(e.shadowRoot.querySelector(i()));
          return (t.children = (e) => s.children(e)), t;
        }
        return s.children ? s.children(i()) : d(s).children(i());
      })();
      if (0 === r.length && t.params.createElements) {
        const e = a().createElement('div');
        (r = d(e)),
          (e.className = t.params.wrapperClass),
          s.append(e),
          s.children(`.${t.params.slideClass}`).each((e) => {
            r.append(e);
          });
      }
      return (
        Object.assign(t, {
          $el: s,
          el: e,
          $wrapperEl: r,
          wrapperEl: r[0],
          mounted: !0,
          rtl: 'rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction'),
          rtlTranslate:
            'horizontal' === t.params.direction &&
            ('rtl' === e.dir.toLowerCase() || 'rtl' === s.css('direction')),
          wrongRTL: '-webkit-box' === r.css('display'),
        }),
        !0
      );
    }
    init(e) {
      const t = this;
      if (t.initialized) return t;
      return (
        !1 === t.mount(e) ||
          (t.emit('beforeInit'),
          t.params.breakpoints && t.setBreakpoint(),
          t.addClasses(),
          t.params.loop && t.loopCreate(),
          t.updateSize(),
          t.updateSlides(),
          t.params.watchOverflow && t.checkOverflow(),
          t.params.grabCursor && t.enabled && t.setGrabCursor(),
          t.params.preloadImages && t.preloadImages(),
          t.params.loop
            ? t.slideTo(
                t.params.initialSlide + t.loopedSlides,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              )
            : t.slideTo(
                t.params.initialSlide,
                0,
                t.params.runCallbacksOnInit,
                !1,
                !0
              ),
          t.attachEvents(),
          (t.initialized = !0),
          t.emit('init'),
          t.emit('afterInit')),
        t
      );
    }
    destroy(e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);
      const s = this,
        { params: a, $el: i, $wrapperEl: r, slides: n } = s;
      return (
        void 0 === s.params ||
          s.destroyed ||
          (s.emit('beforeDestroy'),
          (s.initialized = !1),
          s.detachEvents(),
          a.loop && s.loopDestroy(),
          t &&
            (s.removeClasses(),
            i.removeAttr('style'),
            r.removeAttr('style'),
            n &&
              n.length &&
              n
                .removeClass(
                  [
                    a.slideVisibleClass,
                    a.slideActiveClass,
                    a.slideNextClass,
                    a.slidePrevClass,
                  ].join(' ')
                )
                .removeAttr('style')
                .removeAttr('data-swiper-slide-index')),
          s.emit('destroy'),
          Object.keys(s.eventsListeners).forEach((e) => {
            s.off(e);
          }),
          !1 !== e &&
            ((s.$el[0].swiper = null),
            (function (e) {
              const t = e;
              Object.keys(t).forEach((e) => {
                try {
                  t[e] = null;
                } catch (e) {}
                try {
                  delete t[e];
                } catch (e) {}
              });
            })(s)),
          (s.destroyed = !0)),
        null
      );
    }
    static extendDefaults(e) {
      g(q, e);
    }
    static get extendedDefaults() {
      return q;
    }
    static get defaults() {
      return W;
    }
    static installModule(e) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t = V.prototype.__modules__;
      'function' == typeof e && t.indexOf(e) < 0 && t.push(e);
    }
    static use(e) {
      return Array.isArray(e)
        ? (e.forEach((e) => V.installModule(e)), V)
        : (V.installModule(e), V);
    }
  }
  function F(e, t, s, i) {
    const r = a();
    return (
      e.params.createElements &&
        Object.keys(i).forEach((a) => {
          if (!s[a] && !0 === s.auto) {
            let n = e.$el.children(`.${i[a]}`)[0];
            n ||
              ((n = r.createElement('div')),
              (n.className = i[a]),
              e.$el.append(n)),
              (s[a] = n),
              (t[a] = n);
          }
        }),
      s
    );
  }
  function U(e) {
    return (
      void 0 === e && (e = ''),
      `.${e
        .trim()
        .replace(/([\.:!\/])/g, '\\$1')
        .replace(/ /g, '.')}`
    );
  }
  function K(e) {
    const t = this,
      { $wrapperEl: s, params: a } = t;
    if ((a.loop && t.loopDestroy(), 'object' == typeof e && 'length' in e))
      for (let t = 0; t < e.length; t += 1) e[t] && s.append(e[t]);
    else s.append(e);
    a.loop && t.loopCreate(), a.observer || t.update();
  }
  function Z(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    s.loop && t.loopDestroy();
    let r = i + 1;
    if ('object' == typeof e && 'length' in e) {
      for (let t = 0; t < e.length; t += 1) e[t] && a.prepend(e[t]);
      r = i + e.length;
    } else a.prepend(e);
    s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
  }
  function Q(e, t) {
    const s = this,
      { $wrapperEl: a, params: i, activeIndex: r } = s;
    let n = r;
    i.loop &&
      ((n -= s.loopedSlides),
      s.loopDestroy(),
      (s.slides = a.children(`.${i.slideClass}`)));
    const l = s.slides.length;
    if (e <= 0) return void s.prependSlide(t);
    if (e >= l) return void s.appendSlide(t);
    let o = n > e ? n + 1 : n;
    const d = [];
    for (let t = l - 1; t >= e; t -= 1) {
      const e = s.slides.eq(t);
      e.remove(), d.unshift(e);
    }
    if ('object' == typeof t && 'length' in t) {
      for (let e = 0; e < t.length; e += 1) t[e] && a.append(t[e]);
      o = n > e ? n + t.length : n;
    } else a.append(t);
    for (let e = 0; e < d.length; e += 1) a.append(d[e]);
    i.loop && s.loopCreate(),
      i.observer || s.update(),
      i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
  }
  function J(e) {
    const t = this,
      { params: s, $wrapperEl: a, activeIndex: i } = t;
    let r = i;
    s.loop &&
      ((r -= t.loopedSlides),
      t.loopDestroy(),
      (t.slides = a.children(`.${s.slideClass}`)));
    let n,
      l = r;
    if ('object' == typeof e && 'length' in e) {
      for (let s = 0; s < e.length; s += 1)
        (n = e[s]), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
      l = Math.max(l, 0);
    } else (n = e), t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), (l = Math.max(l, 0));
    s.loop && t.loopCreate(),
      s.observer || t.update(),
      s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
  }
  function ee() {
    const e = this,
      t = [];
    for (let s = 0; s < e.slides.length; s += 1) t.push(s);
    e.removeSlide(t);
  }
  function te(e) {
    const {
      effect: t,
      swiper: s,
      on: a,
      setTranslate: i,
      setTransition: r,
      overwriteParams: n,
      perspective: l,
      recreateShadows: o,
      getEffectParams: d,
    } = e;
    let c;
    a('beforeInit', () => {
      if (s.params.effect !== t) return;
      s.classNames.push(`${s.params.containerModifierClass}${t}`),
        l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
      const e = n ? n() : {};
      Object.assign(s.params, e), Object.assign(s.originalParams, e);
    }),
      a('setTranslate', () => {
        s.params.effect === t && i();
      }),
      a('setTransition', (e, a) => {
        s.params.effect === t && r(a);
      }),
      a('transitionEnd', () => {
        if (s.params.effect === t && o) {
          if (!d || !d().slideShadows) return;
          s.slides.each((e) => {
            s.$(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .remove();
          }),
            o();
        }
      }),
      a('virtualUpdate', () => {
        s.params.effect === t &&
          (s.slides.length || (c = !0),
          requestAnimationFrame(() => {
            c && s.slides && s.slides.length && (i(), (c = !1));
          }));
      });
  }
  function se(e, t) {
    return e.transformEl
      ? t
          .find(e.transformEl)
          .css({
            'backface-visibility': 'hidden',
            '-webkit-backface-visibility': 'hidden',
          })
      : t;
  }
  function ae(e) {
    let { swiper: t, duration: s, transformEl: a, allSlides: i } = e;
    const { slides: r, activeIndex: n, $wrapperEl: l } = t;
    if (t.params.virtualTranslate && 0 !== s) {
      let e,
        s = !1;
      (e = i ? (a ? r.find(a) : r) : a ? r.eq(n).find(a) : r.eq(n)),
        e.transitionEnd(() => {
          if (s) return;
          if (!t || t.destroyed) return;
          (s = !0), (t.animating = !1);
          const e = ['webkitTransitionEnd', 'transitionend'];
          for (let t = 0; t < e.length; t += 1) l.trigger(e[t]);
        });
    }
  }
  function ie(e, t, s) {
    const a = 'swiper-slide-shadow' + (s ? `-${s}` : ''),
      i = e.transformEl ? t.find(e.transformEl) : t;
    let r = i.children(`.${a}`);
    return (
      r.length ||
        ((r = d(`<div class="swiper-slide-shadow${s ? `-${s}` : ''}"></div>`)),
        i.append(r)),
      r
    );
  }
  Object.keys(_).forEach((e) => {
    Object.keys(_[e]).forEach((t) => {
      V.prototype[t] = _[e][t];
    });
  }),
    V.use([
      function (e) {
        let { swiper: t, on: s, emit: a } = e;
        const i = r();
        let n = null,
          l = null;
        const o = () => {
            t &&
              !t.destroyed &&
              t.initialized &&
              (a('beforeResize'), a('resize'));
          },
          d = () => {
            t && !t.destroyed && t.initialized && a('orientationchange');
          };
        s('init', () => {
          t.params.resizeObserver && void 0 !== i.ResizeObserver
            ? t &&
              !t.destroyed &&
              t.initialized &&
              ((n = new ResizeObserver((e) => {
                l = i.requestAnimationFrame(() => {
                  const { width: s, height: a } = t;
                  let i = s,
                    r = a;
                  e.forEach((e) => {
                    let { contentBoxSize: s, contentRect: a, target: n } = e;
                    (n && n !== t.el) ||
                      ((i = a ? a.width : (s[0] || s).inlineSize),
                      (r = a ? a.height : (s[0] || s).blockSize));
                  }),
                    (i === s && r === a) || o();
                });
              })),
              n.observe(t.el))
            : (i.addEventListener('resize', o),
              i.addEventListener('orientationchange', d));
        }),
          s('destroy', () => {
            l && i.cancelAnimationFrame(l),
              n && n.unobserve && t.el && (n.unobserve(t.el), (n = null)),
              i.removeEventListener('resize', o),
              i.removeEventListener('orientationchange', d);
          });
      },
      function (e) {
        let { swiper: t, extendParams: s, on: a, emit: i } = e;
        const n = [],
          l = r(),
          o = function (e, t) {
            void 0 === t && (t = {});
            const s = new (l.MutationObserver || l.WebkitMutationObserver)(
              (e) => {
                if (1 === e.length) return void i('observerUpdate', e[0]);
                const t = function () {
                  i('observerUpdate', e[0]);
                };
                l.requestAnimationFrame
                  ? l.requestAnimationFrame(t)
                  : l.setTimeout(t, 0);
              }
            );
            s.observe(e, {
              attributes: void 0 === t.attributes || t.attributes,
              childList: void 0 === t.childList || t.childList,
              characterData: void 0 === t.characterData || t.characterData,
            }),
              n.push(s);
          };
        s({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
          a('init', () => {
            if (t.params.observer) {
              if (t.params.observeParents) {
                const e = t.$el.parents();
                for (let t = 0; t < e.length; t += 1) o(e[t]);
              }
              o(t.$el[0], { childList: t.params.observeSlideChildren }),
                o(t.$wrapperEl[0], { attributes: !1 });
            }
          }),
          a('destroy', () => {
            n.forEach((e) => {
              e.disconnect();
            }),
              n.splice(0, n.length);
          });
      },
    ]);
  const re = [
    function (e) {
      let t,
        { swiper: s, extendParams: a, on: i, emit: r } = e;
      function n(e, t) {
        const a = s.params.virtual;
        if (a.cache && s.virtual.cache[t]) return s.virtual.cache[t];
        const i = a.renderSlide
          ? d(a.renderSlide.call(s, e, t))
          : d(
              `<div class="${s.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`
            );
        return (
          i.attr('data-swiper-slide-index') ||
            i.attr('data-swiper-slide-index', t),
          a.cache && (s.virtual.cache[t] = i),
          i
        );
      }
      function l(e) {
        const {
            slidesPerView: t,
            slidesPerGroup: a,
            centeredSlides: i,
          } = s.params,
          { addSlidesBefore: l, addSlidesAfter: o } = s.params.virtual,
          { from: d, to: c, slides: p, slidesGrid: u, offset: h } = s.virtual;
        s.params.cssMode || s.updateActiveIndex();
        const m = s.activeIndex || 0;
        let f, g, v;
        (f = s.rtlTranslate ? 'right' : s.isHorizontal() ? 'left' : 'top'),
          i
            ? ((g = Math.floor(t / 2) + a + o), (v = Math.floor(t / 2) + a + l))
            : ((g = t + (a - 1) + o), (v = a + l));
        const w = Math.max((m || 0) - v, 0),
          b = Math.min((m || 0) + g, p.length - 1),
          x = (s.slidesGrid[w] || 0) - (s.slidesGrid[0] || 0);
        function y() {
          s.updateSlides(),
            s.updateProgress(),
            s.updateSlidesClasses(),
            s.lazy && s.params.lazy.enabled && s.lazy.load(),
            r('virtualUpdate');
        }
        if (
          (Object.assign(s.virtual, {
            from: w,
            to: b,
            offset: x,
            slidesGrid: s.slidesGrid,
          }),
          d === w && c === b && !e)
        )
          return (
            s.slidesGrid !== u && x !== h && s.slides.css(f, `${x}px`),
            s.updateProgress(),
            void r('virtualUpdate')
          );
        if (s.params.virtual.renderExternal)
          return (
            s.params.virtual.renderExternal.call(s, {
              offset: x,
              from: w,
              to: b,
              slides: (function () {
                const e = [];
                for (let t = w; t <= b; t += 1) e.push(p[t]);
                return e;
              })(),
            }),
            void (s.params.virtual.renderExternalUpdate
              ? y()
              : r('virtualUpdate'))
          );
        const E = [],
          T = [];
        if (e) s.$wrapperEl.find(`.${s.params.slideClass}`).remove();
        else
          for (let e = d; e <= c; e += 1)
            (e < w || e > b) &&
              s.$wrapperEl
                .find(`.${s.params.slideClass}[data-swiper-slide-index="${e}"]`)
                .remove();
        for (let t = 0; t < p.length; t += 1)
          t >= w &&
            t <= b &&
            (void 0 === c || e
              ? T.push(t)
              : (t > c && T.push(t), t < d && E.push(t)));
        T.forEach((e) => {
          s.$wrapperEl.append(n(p[e], e));
        }),
          E.sort((e, t) => t - e).forEach((e) => {
            s.$wrapperEl.prepend(n(p[e], e));
          }),
          s.$wrapperEl.children('.swiper-slide').css(f, `${x}px`),
          y();
      }
      a({
        virtual: {
          enabled: !1,
          slides: [],
          cache: !0,
          renderSlide: null,
          renderExternal: null,
          renderExternalUpdate: !0,
          addSlidesBefore: 0,
          addSlidesAfter: 0,
        },
      }),
        (s.virtual = {
          cache: {},
          from: void 0,
          to: void 0,
          slides: [],
          offset: 0,
          slidesGrid: [],
        }),
        i('beforeInit', () => {
          s.params.virtual.enabled &&
            ((s.virtual.slides = s.params.virtual.slides),
            s.classNames.push(`${s.params.containerModifierClass}virtual`),
            (s.params.watchSlidesProgress = !0),
            (s.originalParams.watchSlidesProgress = !0),
            s.params.initialSlide || l());
        }),
        i('setTranslate', () => {
          s.params.virtual.enabled &&
            (s.params.cssMode && !s._immediateVirtual
              ? (clearTimeout(t),
                (t = setTimeout(() => {
                  l();
                }, 100)))
              : l());
        }),
        i('init update resize', () => {
          s.params.virtual.enabled &&
            s.params.cssMode &&
            v(s.wrapperEl, '--swiper-virtual-size', `${s.virtualSize}px`);
        }),
        Object.assign(s.virtual, {
          appendSlide: function (e) {
            if ('object' == typeof e && 'length' in e)
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.push(e[t]);
            else s.virtual.slides.push(e);
            l(!0);
          },
          prependSlide: function (e) {
            const t = s.activeIndex;
            let a = t + 1,
              i = 1;
            if (Array.isArray(e)) {
              for (let t = 0; t < e.length; t += 1)
                e[t] && s.virtual.slides.unshift(e[t]);
              (a = t + e.length), (i = e.length);
            } else s.virtual.slides.unshift(e);
            if (s.params.virtual.cache) {
              const e = s.virtual.cache,
                t = {};
              Object.keys(e).forEach((s) => {
                const a = e[s],
                  r = a.attr('data-swiper-slide-index');
                r && a.attr('data-swiper-slide-index', parseInt(r, 10) + i),
                  (t[parseInt(s, 10) + i] = a);
              }),
                (s.virtual.cache = t);
            }
            l(!0), s.slideTo(a, 0);
          },
          removeSlide: function (e) {
            if (null == e) return;
            let t = s.activeIndex;
            if (Array.isArray(e))
              for (let a = e.length - 1; a >= 0; a -= 1)
                s.virtual.slides.splice(e[a], 1),
                  s.params.virtual.cache && delete s.virtual.cache[e[a]],
                  e[a] < t && (t -= 1),
                  (t = Math.max(t, 0));
            else
              s.virtual.slides.splice(e, 1),
                s.params.virtual.cache && delete s.virtual.cache[e],
                e < t && (t -= 1),
                (t = Math.max(t, 0));
            l(!0), s.slideTo(t, 0);
          },
          removeAllSlides: function () {
            (s.virtual.slides = []),
              s.params.virtual.cache && (s.virtual.cache = {}),
              l(!0),
              s.slideTo(0, 0);
          },
          update: l,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: n } = e;
      const l = a(),
        o = r();
      function c(e) {
        if (!t.enabled) return;
        const { rtlTranslate: s } = t;
        let a = e;
        a.originalEvent && (a = a.originalEvent);
        const i = a.keyCode || a.charCode,
          r = t.params.keyboard.pageUpDown,
          d = r && 33 === i,
          c = r && 34 === i,
          p = 37 === i,
          u = 39 === i,
          h = 38 === i,
          m = 40 === i;
        if (
          !t.allowSlideNext &&
          ((t.isHorizontal() && u) || (t.isVertical() && m) || c)
        )
          return !1;
        if (
          !t.allowSlidePrev &&
          ((t.isHorizontal() && p) || (t.isVertical() && h) || d)
        )
          return !1;
        if (
          !(
            a.shiftKey ||
            a.altKey ||
            a.ctrlKey ||
            a.metaKey ||
            (l.activeElement &&
              l.activeElement.nodeName &&
              ('input' === l.activeElement.nodeName.toLowerCase() ||
                'textarea' === l.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (
            t.params.keyboard.onlyInViewport &&
            (d || c || p || u || h || m)
          ) {
            let e = !1;
            if (
              t.$el.parents(`.${t.params.slideClass}`).length > 0 &&
              0 === t.$el.parents(`.${t.params.slideActiveClass}`).length
            )
              return;
            const a = t.$el,
              i = a[0].clientWidth,
              r = a[0].clientHeight,
              n = o.innerWidth,
              l = o.innerHeight,
              d = t.$el.offset();
            s && (d.left -= t.$el[0].scrollLeft);
            const c = [
              [d.left, d.top],
              [d.left + i, d.top],
              [d.left, d.top + r],
              [d.left + i, d.top + r],
            ];
            for (let t = 0; t < c.length; t += 1) {
              const s = c[t];
              if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                if (0 === s[0] && 0 === s[1]) continue;
                e = !0;
              }
            }
            if (!e) return;
          }
          t.isHorizontal()
            ? ((d || c || p || u) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (((c || u) && !s) || ((d || p) && s)) && t.slideNext(),
              (((d || p) && !s) || ((c || u) && s)) && t.slidePrev())
            : ((d || c || h || m) &&
                (a.preventDefault ? a.preventDefault() : (a.returnValue = !1)),
              (c || m) && t.slideNext(),
              (d || h) && t.slidePrev()),
            n('keyPress', i);
        }
      }
      function p() {
        t.keyboard.enabled ||
          (d(l).on('keydown', c), (t.keyboard.enabled = !0));
      }
      function u() {
        t.keyboard.enabled &&
          (d(l).off('keydown', c), (t.keyboard.enabled = !1));
      }
      (t.keyboard = { enabled: !1 }),
        s({ keyboard: { enabled: !1, onlyInViewport: !0, pageUpDown: !0 } }),
        i('init', () => {
          t.params.keyboard.enabled && p();
        }),
        i('destroy', () => {
          t.keyboard.enabled && u();
        }),
        Object.assign(t.keyboard, { enable: p, disable: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      let l;
      s({
        mousewheel: {
          enabled: !1,
          releaseOnEdges: !1,
          invert: !1,
          forceToAxis: !1,
          sensitivity: 1,
          eventsTarget: 'container',
          thresholdDelta: null,
          thresholdTime: null,
        },
      }),
        (t.mousewheel = { enabled: !1 });
      let o,
        c = u();
      const h = [];
      function m() {
        t.enabled && (t.mouseEntered = !0);
      }
      function f() {
        t.enabled && (t.mouseEntered = !1);
      }
      function g(e) {
        return (
          !(
            t.params.mousewheel.thresholdDelta &&
            e.delta < t.params.mousewheel.thresholdDelta
          ) &&
          !(
            t.params.mousewheel.thresholdTime &&
            u() - c < t.params.mousewheel.thresholdTime
          ) &&
          ((e.delta >= 6 && u() - c < 60) ||
            (e.direction < 0
              ? (t.isEnd && !t.params.loop) ||
                t.animating ||
                (t.slideNext(), i('scroll', e.raw))
              : (t.isBeginning && !t.params.loop) ||
                t.animating ||
                (t.slidePrev(), i('scroll', e.raw)),
            (c = new n.Date().getTime()),
            !1))
        );
      }
      function v(e) {
        let s = e,
          a = !0;
        if (!t.enabled) return;
        const r = t.params.mousewheel;
        t.params.cssMode && s.preventDefault();
        let n = t.$el;
        if (
          ('container' !== t.params.mousewheel.eventsTarget &&
            (n = d(t.params.mousewheel.eventsTarget)),
          !t.mouseEntered && !n[0].contains(s.target) && !r.releaseOnEdges)
        )
          return !0;
        s.originalEvent && (s = s.originalEvent);
        let c = 0;
        const m = t.rtlTranslate ? -1 : 1,
          f = (function (e) {
            let t = 0,
              s = 0,
              a = 0,
              i = 0;
            return (
              'detail' in e && (s = e.detail),
              'wheelDelta' in e && (s = -e.wheelDelta / 120),
              'wheelDeltaY' in e && (s = -e.wheelDeltaY / 120),
              'wheelDeltaX' in e && (t = -e.wheelDeltaX / 120),
              'axis' in e && e.axis === e.HORIZONTAL_AXIS && ((t = s), (s = 0)),
              (a = 10 * t),
              (i = 10 * s),
              'deltaY' in e && (i = e.deltaY),
              'deltaX' in e && (a = e.deltaX),
              e.shiftKey && !a && ((a = i), (i = 0)),
              (a || i) &&
                e.deltaMode &&
                (1 === e.deltaMode
                  ? ((a *= 40), (i *= 40))
                  : ((a *= 800), (i *= 800))),
              a && !t && (t = a < 1 ? -1 : 1),
              i && !s && (s = i < 1 ? -1 : 1),
              { spinX: t, spinY: s, pixelX: a, pixelY: i }
            );
          })(s);
        if (r.forceToAxis)
          if (t.isHorizontal()) {
            if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
            c = -f.pixelX * m;
          } else {
            if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
            c = -f.pixelY;
          }
        else
          c =
            Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
        if (0 === c) return !0;
        r.invert && (c = -c);
        let v = t.getTranslate() + c * r.sensitivity;
        if (
          (v >= t.minTranslate() && (v = t.minTranslate()),
          v <= t.maxTranslate() && (v = t.maxTranslate()),
          (a =
            !!t.params.loop ||
            !(v === t.minTranslate() || v === t.maxTranslate())),
          a && t.params.nested && s.stopPropagation(),
          t.params.freeMode && t.params.freeMode.enabled)
        ) {
          const e = { time: u(), delta: Math.abs(c), direction: Math.sign(c) },
            a =
              o &&
              e.time < o.time + 500 &&
              e.delta <= o.delta &&
              e.direction === o.direction;
          if (!a) {
            (o = void 0), t.params.loop && t.loopFix();
            let n = t.getTranslate() + c * r.sensitivity;
            const d = t.isBeginning,
              u = t.isEnd;
            if (
              (n >= t.minTranslate() && (n = t.minTranslate()),
              n <= t.maxTranslate() && (n = t.maxTranslate()),
              t.setTransition(0),
              t.setTranslate(n),
              t.updateProgress(),
              t.updateActiveIndex(),
              t.updateSlidesClasses(),
              ((!d && t.isBeginning) || (!u && t.isEnd)) &&
                t.updateSlidesClasses(),
              t.params.freeMode.sticky)
            ) {
              clearTimeout(l), (l = void 0), h.length >= 15 && h.shift();
              const s = h.length ? h[h.length - 1] : void 0,
                a = h[0];
              if (
                (h.push(e),
                s && (e.delta > s.delta || e.direction !== s.direction))
              )
                h.splice(0);
              else if (
                h.length >= 15 &&
                e.time - a.time < 500 &&
                a.delta - e.delta >= 1 &&
                e.delta <= 6
              ) {
                const s = c > 0 ? 0.8 : 0.2;
                (o = e),
                  h.splice(0),
                  (l = p(() => {
                    t.slideToClosest(t.params.speed, !0, void 0, s);
                  }, 0));
              }
              l ||
                (l = p(() => {
                  (o = e),
                    h.splice(0),
                    t.slideToClosest(t.params.speed, !0, void 0, 0.5);
                }, 500));
            }
            if (
              (a || i('scroll', s),
              t.params.autoplay &&
                t.params.autoplayDisableOnInteraction &&
                t.autoplay.stop(),
              n === t.minTranslate() || n === t.maxTranslate())
            )
              return !0;
          }
        } else {
          const s = {
            time: u(),
            delta: Math.abs(c),
            direction: Math.sign(c),
            raw: e,
          };
          h.length >= 2 && h.shift();
          const a = h.length ? h[h.length - 1] : void 0;
          if (
            (h.push(s),
            a
              ? (s.direction !== a.direction ||
                  s.delta > a.delta ||
                  s.time > a.time + 150) &&
                g(s)
              : g(s),
            (function (e) {
              const s = t.params.mousewheel;
              if (e.direction < 0) {
                if (t.isEnd && !t.params.loop && s.releaseOnEdges) return !0;
              } else if (t.isBeginning && !t.params.loop && s.releaseOnEdges)
                return !0;
              return !1;
            })(s))
          )
            return !0;
        }
        return s.preventDefault ? s.preventDefault() : (s.returnValue = !1), !1;
      }
      function w(e) {
        let s = t.$el;
        'container' !== t.params.mousewheel.eventsTarget &&
          (s = d(t.params.mousewheel.eventsTarget)),
          s[e]('mouseenter', m),
          s[e]('mouseleave', f),
          s[e]('wheel', v);
      }
      function b() {
        return t.params.cssMode
          ? (t.wrapperEl.removeEventListener('wheel', v), !0)
          : !t.mousewheel.enabled && (w('on'), (t.mousewheel.enabled = !0), !0);
      }
      function x() {
        return t.params.cssMode
          ? (t.wrapperEl.addEventListener(event, v), !0)
          : !!t.mousewheel.enabled &&
              (w('off'), (t.mousewheel.enabled = !1), !0);
      }
      a('init', () => {
        !t.params.mousewheel.enabled && t.params.cssMode && x(),
          t.params.mousewheel.enabled && b();
      }),
        a('destroy', () => {
          t.params.cssMode && b(), t.mousewheel.enabled && x();
        }),
        Object.assign(t.mousewheel, { enable: b, disable: x });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      function r(e) {
        let s;
        return (
          e &&
            ((s = d(e)),
            t.params.uniqueNavElements &&
              'string' == typeof e &&
              s.length > 1 &&
              1 === t.$el.find(e).length &&
              (s = t.$el.find(e))),
          s
        );
      }
      function n(e, s) {
        const a = t.params.navigation;
        e &&
          e.length > 0 &&
          (e[s ? 'addClass' : 'removeClass'](a.disabledClass),
          e[0] && 'BUTTON' === e[0].tagName && (e[0].disabled = s),
          t.params.watchOverflow &&
            t.enabled &&
            e[t.isLocked ? 'addClass' : 'removeClass'](a.lockClass));
      }
      function l() {
        if (t.params.loop) return;
        const { $nextEl: e, $prevEl: s } = t.navigation;
        n(s, t.isBeginning && !t.params.rewind),
          n(e, t.isEnd && !t.params.rewind);
      }
      function o(e) {
        e.preventDefault(),
          (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
      }
      function c(e) {
        e.preventDefault(),
          (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
      }
      function p() {
        const e = t.params.navigation;
        if (
          ((t.params.navigation = F(
            t,
            t.originalParams.navigation,
            t.params.navigation,
            { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
          )),
          !e.nextEl && !e.prevEl)
        )
          return;
        const s = r(e.nextEl),
          a = r(e.prevEl);
        s && s.length > 0 && s.on('click', c),
          a && a.length > 0 && a.on('click', o),
          Object.assign(t.navigation, {
            $nextEl: s,
            nextEl: s && s[0],
            $prevEl: a,
            prevEl: a && a[0],
          }),
          t.enabled ||
            (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
      }
      function u() {
        const { $nextEl: e, $prevEl: s } = t.navigation;
        e &&
          e.length &&
          (e.off('click', c), e.removeClass(t.params.navigation.disabledClass)),
          s &&
            s.length &&
            (s.off('click', o),
            s.removeClass(t.params.navigation.disabledClass));
      }
      s({
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: !1,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock',
        },
      }),
        (t.navigation = {
          nextEl: null,
          $nextEl: null,
          prevEl: null,
          $prevEl: null,
        }),
        a('init', () => {
          p(), l();
        }),
        a('toEdge fromEdge lock unlock', () => {
          l();
        }),
        a('destroy', () => {
          u();
        }),
        a('enable disable', () => {
          const { $nextEl: e, $prevEl: s } = t.navigation;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.navigation.lockClass
            ),
            s &&
              s[t.enabled ? 'removeClass' : 'addClass'](
                t.params.navigation.lockClass
              );
        }),
        a('click', (e, s) => {
          const { $nextEl: a, $prevEl: r } = t.navigation,
            n = s.target;
          if (t.params.navigation.hideOnClick && !d(n).is(r) && !d(n).is(a)) {
            if (
              t.pagination &&
              t.params.pagination &&
              t.params.pagination.clickable &&
              (t.pagination.el === n || t.pagination.el.contains(n))
            )
              return;
            let e;
            a
              ? (e = a.hasClass(t.params.navigation.hiddenClass))
              : r && (e = r.hasClass(t.params.navigation.hiddenClass)),
              i(!0 === e ? 'navigationShow' : 'navigationHide'),
              a && a.toggleClass(t.params.navigation.hiddenClass),
              r && r.toggleClass(t.params.navigation.hiddenClass);
          }
        }),
        Object.assign(t.navigation, { update: l, init: p, destroy: u });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const r = 'swiper-pagination';
      let n;
      s({
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: !1,
          hideOnClick: !1,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: !1,
          type: 'bullets',
          dynamicBullets: !1,
          dynamicMainBullets: 1,
          formatFractionCurrent: (e) => e,
          formatFractionTotal: (e) => e,
          bulletClass: `${r}-bullet`,
          bulletActiveClass: `${r}-bullet-active`,
          modifierClass: `${r}-`,
          currentClass: `${r}-current`,
          totalClass: `${r}-total`,
          hiddenClass: `${r}-hidden`,
          progressbarFillClass: `${r}-progressbar-fill`,
          progressbarOppositeClass: `${r}-progressbar-opposite`,
          clickableClass: `${r}-clickable`,
          lockClass: `${r}-lock`,
          horizontalClass: `${r}-horizontal`,
          verticalClass: `${r}-vertical`,
        },
      }),
        (t.pagination = { el: null, $el: null, bullets: [] });
      let l = 0;
      function o() {
        return (
          !t.params.pagination.el ||
          !t.pagination.el ||
          !t.pagination.$el ||
          0 === t.pagination.$el.length
        );
      }
      function c(e, s) {
        const { bulletActiveClass: a } = t.params.pagination;
        e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
      }
      function p() {
        const e = t.rtl,
          s = t.params.pagination;
        if (o()) return;
        const a =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          r = t.pagination.$el;
        let p;
        const u = t.params.loop
          ? Math.ceil((a - 2 * t.loopedSlides) / t.params.slidesPerGroup)
          : t.snapGrid.length;
        if (
          (t.params.loop
            ? ((p = Math.ceil(
                (t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup
              )),
              p > a - 1 - 2 * t.loopedSlides && (p -= a - 2 * t.loopedSlides),
              p > u - 1 && (p -= u),
              p < 0 && 'bullets' !== t.params.paginationType && (p = u + p))
            : (p = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0),
          'bullets' === s.type &&
            t.pagination.bullets &&
            t.pagination.bullets.length > 0)
        ) {
          const a = t.pagination.bullets;
          let i, o, u;
          if (
            (s.dynamicBullets &&
              ((n = a
                .eq(0)
                [t.isHorizontal() ? 'outerWidth' : 'outerHeight'](!0)),
              r.css(
                t.isHorizontal() ? 'width' : 'height',
                n * (s.dynamicMainBullets + 4) + 'px'
              ),
              s.dynamicMainBullets > 1 &&
                void 0 !== t.previousIndex &&
                ((l += p - (t.previousIndex - t.loopedSlides || 0)),
                l > s.dynamicMainBullets - 1
                  ? (l = s.dynamicMainBullets - 1)
                  : l < 0 && (l = 0)),
              (i = Math.max(p - l, 0)),
              (o = i + (Math.min(a.length, s.dynamicMainBullets) - 1)),
              (u = (o + i) / 2)),
            a.removeClass(
              ['', '-next', '-next-next', '-prev', '-prev-prev', '-main']
                .map((e) => `${s.bulletActiveClass}${e}`)
                .join(' ')
            ),
            r.length > 1)
          )
            a.each((e) => {
              const t = d(e),
                a = t.index();
              a === p && t.addClass(s.bulletActiveClass),
                s.dynamicBullets &&
                  (a >= i &&
                    a <= o &&
                    t.addClass(`${s.bulletActiveClass}-main`),
                  a === i && c(t, 'prev'),
                  a === o && c(t, 'next'));
            });
          else {
            const e = a.eq(p),
              r = e.index();
            if ((e.addClass(s.bulletActiveClass), s.dynamicBullets)) {
              const e = a.eq(i),
                n = a.eq(o);
              for (let e = i; e <= o; e += 1)
                a.eq(e).addClass(`${s.bulletActiveClass}-main`);
              if (t.params.loop)
                if (r >= a.length) {
                  for (let e = s.dynamicMainBullets; e >= 0; e -= 1)
                    a.eq(a.length - e).addClass(`${s.bulletActiveClass}-main`);
                  a.eq(a.length - s.dynamicMainBullets - 1).addClass(
                    `${s.bulletActiveClass}-prev`
                  );
                } else c(e, 'prev'), c(n, 'next');
              else c(e, 'prev'), c(n, 'next');
            }
          }
          if (s.dynamicBullets) {
            const i = Math.min(a.length, s.dynamicMainBullets + 4),
              r = (n * i - n) / 2 - u * n,
              l = e ? 'right' : 'left';
            a.css(t.isHorizontal() ? l : 'top', `${r}px`);
          }
        }
        if (
          ('fraction' === s.type &&
            (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)),
            r.find(U(s.totalClass)).text(s.formatFractionTotal(u))),
          'progressbar' === s.type)
        ) {
          let e;
          e = s.progressbarOpposite
            ? t.isHorizontal()
              ? 'vertical'
              : 'horizontal'
            : t.isHorizontal()
            ? 'horizontal'
            : 'vertical';
          const a = (p + 1) / u;
          let i = 1,
            n = 1;
          'horizontal' === e ? (i = a) : (n = a),
            r
              .find(U(s.progressbarFillClass))
              .transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`)
              .transition(t.params.speed);
        }
        'custom' === s.type && s.renderCustom
          ? (r.html(s.renderCustom(t, p + 1, u)), i('paginationRender', r[0]))
          : i('paginationUpdate', r[0]),
          t.params.watchOverflow &&
            t.enabled &&
            r[t.isLocked ? 'addClass' : 'removeClass'](s.lockClass);
      }
      function u() {
        const e = t.params.pagination;
        if (o()) return;
        const s =
            t.virtual && t.params.virtual.enabled
              ? t.virtual.slides.length
              : t.slides.length,
          a = t.pagination.$el;
        let r = '';
        if ('bullets' === e.type) {
          let i = t.params.loop
            ? Math.ceil((s - 2 * t.loopedSlides) / t.params.slidesPerGroup)
            : t.snapGrid.length;
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.loop &&
            i > s &&
            (i = s);
          for (let s = 0; s < i; s += 1)
            e.renderBullet
              ? (r += e.renderBullet.call(t, s, e.bulletClass))
              : (r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`);
          a.html(r), (t.pagination.bullets = a.find(U(e.bulletClass)));
        }
        'fraction' === e.type &&
          ((r = e.renderFraction
            ? e.renderFraction.call(t, e.currentClass, e.totalClass)
            : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`),
          a.html(r)),
          'progressbar' === e.type &&
            ((r = e.renderProgressbar
              ? e.renderProgressbar.call(t, e.progressbarFillClass)
              : `<span class="${e.progressbarFillClass}"></span>`),
            a.html(r)),
          'custom' !== e.type && i('paginationRender', t.pagination.$el[0]);
      }
      function h() {
        t.params.pagination = F(
          t,
          t.originalParams.pagination,
          t.params.pagination,
          { el: 'swiper-pagination' }
        );
        const e = t.params.pagination;
        if (!e.el) return;
        let s = d(e.el);
        0 !== s.length &&
          (t.params.uniqueNavElements &&
            'string' == typeof e.el &&
            s.length > 1 &&
            ((s = t.$el.find(e.el)),
            s.length > 1 &&
              (s = s.filter((e) => d(e).parents('.swiper')[0] === t.el))),
          'bullets' === e.type && e.clickable && s.addClass(e.clickableClass),
          s.addClass(e.modifierClass + e.type),
          s.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          'bullets' === e.type &&
            e.dynamicBullets &&
            (s.addClass(`${e.modifierClass}${e.type}-dynamic`),
            (l = 0),
            e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)),
          'progressbar' === e.type &&
            e.progressbarOpposite &&
            s.addClass(e.progressbarOppositeClass),
          e.clickable &&
            s.on('click', U(e.bulletClass), function (e) {
              e.preventDefault();
              let s = d(this).index() * t.params.slidesPerGroup;
              t.params.loop && (s += t.loopedSlides), t.slideTo(s);
            }),
          Object.assign(t.pagination, { $el: s, el: s[0] }),
          t.enabled || s.addClass(e.lockClass));
      }
      function m() {
        const e = t.params.pagination;
        if (o()) return;
        const s = t.pagination.$el;
        s.removeClass(e.hiddenClass),
          s.removeClass(e.modifierClass + e.type),
          s.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass),
          t.pagination.bullets &&
            t.pagination.bullets.removeClass &&
            t.pagination.bullets.removeClass(e.bulletActiveClass),
          e.clickable && s.off('click', U(e.bulletClass));
      }
      a('init', () => {
        h(), u(), p();
      }),
        a('activeIndexChange', () => {
          (t.params.loop || void 0 === t.snapIndex) && p();
        }),
        a('snapIndexChange', () => {
          t.params.loop || p();
        }),
        a('slidesLengthChange', () => {
          t.params.loop && (u(), p());
        }),
        a('snapGridLengthChange', () => {
          t.params.loop || (u(), p());
        }),
        a('destroy', () => {
          m();
        }),
        a('enable disable', () => {
          const { $el: e } = t.pagination;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.pagination.lockClass
            );
        }),
        a('lock unlock', () => {
          p();
        }),
        a('click', (e, s) => {
          const a = s.target,
            { $el: r } = t.pagination;
          if (
            t.params.pagination.el &&
            t.params.pagination.hideOnClick &&
            r.length > 0 &&
            !d(a).hasClass(t.params.pagination.bulletClass)
          ) {
            if (
              t.navigation &&
              ((t.navigation.nextEl && a === t.navigation.nextEl) ||
                (t.navigation.prevEl && a === t.navigation.prevEl))
            )
              return;
            const e = r.hasClass(t.params.pagination.hiddenClass);
            i(!0 === e ? 'paginationShow' : 'paginationHide'),
              r.toggleClass(t.params.pagination.hiddenClass);
          }
        }),
        Object.assign(t.pagination, {
          render: u,
          update: p,
          init: h,
          destroy: m,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: i, emit: r } = e;
      const n = a();
      let l,
        o,
        c,
        u,
        h = !1,
        m = null,
        f = null;
      function g() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e, rtlTranslate: s, progress: a } = t,
          { $dragEl: i, $el: r } = e,
          n = t.params.scrollbar;
        let l = o,
          d = (c - o) * a;
        s
          ? ((d = -d),
            d > 0 ? ((l = o - d), (d = 0)) : -d + o > c && (l = c + d))
          : d < 0
          ? ((l = o + d), (d = 0))
          : d + o > c && (l = c - d),
          t.isHorizontal()
            ? (i.transform(`translate3d(${d}px, 0, 0)`),
              (i[0].style.width = `${l}px`))
            : (i.transform(`translate3d(0px, ${d}px, 0)`),
              (i[0].style.height = `${l}px`)),
          n.hide &&
            (clearTimeout(m),
            (r[0].style.opacity = 1),
            (m = setTimeout(() => {
              (r[0].style.opacity = 0), r.transition(400);
            }, 1e3)));
      }
      function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return;
        const { scrollbar: e } = t,
          { $dragEl: s, $el: a } = e;
        (s[0].style.width = ''),
          (s[0].style.height = ''),
          (c = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight),
          (u =
            t.size /
            (t.virtualSize +
              t.params.slidesOffsetBefore -
              (t.params.centeredSlides ? t.snapGrid[0] : 0))),
          (o =
            'auto' === t.params.scrollbar.dragSize
              ? c * u
              : parseInt(t.params.scrollbar.dragSize, 10)),
          t.isHorizontal()
            ? (s[0].style.width = `${o}px`)
            : (s[0].style.height = `${o}px`),
          (a[0].style.display = u >= 1 ? 'none' : ''),
          t.params.scrollbar.hide && (a[0].style.opacity = 0),
          t.params.watchOverflow &&
            t.enabled &&
            e.$el[t.isLocked ? 'addClass' : 'removeClass'](
              t.params.scrollbar.lockClass
            );
      }
      function w(e) {
        return t.isHorizontal()
          ? 'touchstart' === e.type || 'touchmove' === e.type
            ? e.targetTouches[0].clientX
            : e.clientX
          : 'touchstart' === e.type || 'touchmove' === e.type
          ? e.targetTouches[0].clientY
          : e.clientY;
      }
      function b(e) {
        const { scrollbar: s, rtlTranslate: a } = t,
          { $el: i } = s;
        let r;
        (r =
          (w(e) -
            i.offset()[t.isHorizontal() ? 'left' : 'top'] -
            (null !== l ? l : o / 2)) /
          (c - o)),
          (r = Math.max(Math.min(r, 1), 0)),
          a && (r = 1 - r);
        const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
        t.updateProgress(n),
          t.setTranslate(n),
          t.updateActiveIndex(),
          t.updateSlidesClasses();
      }
      function x(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n, $dragEl: o } = a;
        (h = !0),
          (l =
            e.target === o[0] || e.target === o
              ? w(e) -
                e.target.getBoundingClientRect()[
                  t.isHorizontal() ? 'left' : 'top'
                ]
              : null),
          e.preventDefault(),
          e.stopPropagation(),
          i.transition(100),
          o.transition(100),
          b(e),
          clearTimeout(f),
          n.transition(0),
          s.hide && n.css('opacity', 1),
          t.params.cssMode && t.$wrapperEl.css('scroll-snap-type', 'none'),
          r('scrollbarDragStart', e);
      }
      function y(e) {
        const { scrollbar: s, $wrapperEl: a } = t,
          { $el: i, $dragEl: n } = s;
        h &&
          (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
          b(e),
          a.transition(0),
          i.transition(0),
          n.transition(0),
          r('scrollbarDragMove', e));
      }
      function E(e) {
        const s = t.params.scrollbar,
          { scrollbar: a, $wrapperEl: i } = t,
          { $el: n } = a;
        h &&
          ((h = !1),
          t.params.cssMode &&
            (t.$wrapperEl.css('scroll-snap-type', ''), i.transition('')),
          s.hide &&
            (clearTimeout(f),
            (f = p(() => {
              n.css('opacity', 0), n.transition(400);
            }, 1e3))),
          r('scrollbarDragEnd', e),
          s.snapOnRelease && t.slideToClosest());
      }
      function T(e) {
        const {
            scrollbar: s,
            touchEventsTouch: a,
            touchEventsDesktop: i,
            params: r,
            support: l,
          } = t,
          o = s.$el[0],
          d = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !1,
            capture: !1,
          },
          c = !(!l.passiveListener || !r.passiveListeners) && {
            passive: !0,
            capture: !1,
          };
        if (!o) return;
        const p = 'on' === e ? 'addEventListener' : 'removeEventListener';
        l.touch
          ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c))
          : (o[p](i.start, x, d), n[p](i.move, y, d), n[p](i.end, E, c));
      }
      function C() {
        const { scrollbar: e, $el: s } = t;
        t.params.scrollbar = F(
          t,
          t.originalParams.scrollbar,
          t.params.scrollbar,
          { el: 'swiper-scrollbar' }
        );
        const a = t.params.scrollbar;
        if (!a.el) return;
        let i = d(a.el);
        t.params.uniqueNavElements &&
          'string' == typeof a.el &&
          i.length > 1 &&
          1 === s.find(a.el).length &&
          (i = s.find(a.el));
        let r = i.find(`.${t.params.scrollbar.dragClass}`);
        0 === r.length &&
          ((r = d(`<div class="${t.params.scrollbar.dragClass}"></div>`)),
          i.append(r)),
          Object.assign(e, { $el: i, el: i[0], $dragEl: r, dragEl: r[0] }),
          a.draggable && t.params.scrollbar.el && T('on'),
          i &&
            i[t.enabled ? 'removeClass' : 'addClass'](
              t.params.scrollbar.lockClass
            );
      }
      function $() {
        t.params.scrollbar.el && T('off');
      }
      s({
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: !1,
          draggable: !1,
          snapOnRelease: !0,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag',
        },
      }),
        (t.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }),
        i('init', () => {
          C(), v(), g();
        }),
        i('update resize observerUpdate lock unlock', () => {
          v();
        }),
        i('setTranslate', () => {
          g();
        }),
        i('setTransition', (e, s) => {
          !(function (e) {
            t.params.scrollbar.el &&
              t.scrollbar.el &&
              t.scrollbar.$dragEl.transition(e);
          })(s);
        }),
        i('enable disable', () => {
          const { $el: e } = t.scrollbar;
          e &&
            e[t.enabled ? 'removeClass' : 'addClass'](
              t.params.scrollbar.lockClass
            );
        }),
        i('destroy', () => {
          $();
        }),
        Object.assign(t.scrollbar, {
          updateSize: v,
          setTranslate: g,
          init: C,
          destroy: $,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ parallax: { enabled: !1 } });
      const i = (e, s) => {
          const { rtl: a } = t,
            i = d(e),
            r = a ? -1 : 1,
            n = i.attr('data-swiper-parallax') || '0';
          let l = i.attr('data-swiper-parallax-x'),
            o = i.attr('data-swiper-parallax-y');
          const c = i.attr('data-swiper-parallax-scale'),
            p = i.attr('data-swiper-parallax-opacity');
          if (
            (l || o
              ? ((l = l || '0'), (o = o || '0'))
              : t.isHorizontal()
              ? ((l = n), (o = '0'))
              : ((o = n), (l = '0')),
            (l =
              l.indexOf('%') >= 0
                ? parseInt(l, 10) * s * r + '%'
                : l * s * r + 'px'),
            (o =
              o.indexOf('%') >= 0 ? parseInt(o, 10) * s + '%' : o * s + 'px'),
            null != p)
          ) {
            const e = p - (p - 1) * (1 - Math.abs(s));
            i[0].style.opacity = e;
          }
          if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
          else {
            const e = c - (c - 1) * (1 - Math.abs(s));
            i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
          }
        },
        r = () => {
          const { $el: e, slides: s, progress: a, snapGrid: r } = t;
          e
            .children(
              '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
            )
            .each((e) => {
              i(e, a);
            }),
            s.each((e, s) => {
              let n = e.progress;
              t.params.slidesPerGroup > 1 &&
                'auto' !== t.params.slidesPerView &&
                (n += Math.ceil(s / 2) - a * (r.length - 1)),
                (n = Math.min(Math.max(n, -1), 1)),
                d(e)
                  .find(
                    '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
                  )
                  .each((e) => {
                    i(e, n);
                  });
            });
        };
      a('beforeInit', () => {
        t.params.parallax.enabled &&
          ((t.params.watchSlidesProgress = !0),
          (t.originalParams.watchSlidesProgress = !0));
      }),
        a('init', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTranslate', () => {
          t.params.parallax.enabled && r();
        }),
        a('setTransition', (e, s) => {
          t.params.parallax.enabled &&
            (function (e) {
              void 0 === e && (e = t.params.speed);
              const { $el: s } = t;
              s.find(
                '[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]'
              ).each((t) => {
                const s = d(t);
                let a =
                  parseInt(s.attr('data-swiper-parallax-duration'), 10) || e;
                0 === e && (a = 0), s.transition(a);
              });
            })(s);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      const n = r();
      s({
        zoom: {
          enabled: !1,
          maxRatio: 3,
          minRatio: 1,
          toggle: !0,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed',
        },
      }),
        (t.zoom = { enabled: !1 });
      let l,
        o,
        c,
        p = 1,
        u = !1;
      const m = {
          $slideEl: void 0,
          slideWidth: void 0,
          slideHeight: void 0,
          $imageEl: void 0,
          $imageWrapEl: void 0,
          maxRatio: 3,
        },
        f = {
          isTouched: void 0,
          isMoved: void 0,
          currentX: void 0,
          currentY: void 0,
          minX: void 0,
          minY: void 0,
          maxX: void 0,
          maxY: void 0,
          width: void 0,
          height: void 0,
          startX: void 0,
          startY: void 0,
          touchesStart: {},
          touchesCurrent: {},
        },
        g = {
          x: void 0,
          y: void 0,
          prevPositionX: void 0,
          prevPositionY: void 0,
          prevTime: void 0,
        };
      let v = 1;
      function w(e) {
        if (e.targetTouches.length < 2) return 1;
        const t = e.targetTouches[0].pageX,
          s = e.targetTouches[0].pageY,
          a = e.targetTouches[1].pageX,
          i = e.targetTouches[1].pageY;
        return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
      }
      function b(e) {
        const s = t.support,
          a = t.params.zoom;
        if (((o = !1), (c = !1), !s.gestures)) {
          if (
            'touchstart' !== e.type ||
            ('touchstart' === e.type && e.targetTouches.length < 2)
          )
            return;
          (o = !0), (m.scaleStart = w(e));
        }
        (m.$slideEl && m.$slideEl.length) ||
        ((m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
        0 === m.$slideEl.length && (m.$slideEl = t.slides.eq(t.activeIndex)),
        (m.$imageEl = m.$slideEl
          .find(`.${a.containerClass}`)
          .eq(0)
          .find('picture, img, svg, canvas, .swiper-zoom-target')
          .eq(0)),
        (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)),
        (m.maxRatio = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
        0 !== m.$imageWrapEl.length)
          ? (m.$imageEl && m.$imageEl.transition(0), (u = !0))
          : (m.$imageEl = void 0);
      }
      function x(e) {
        const s = t.support,
          a = t.params.zoom,
          i = t.zoom;
        if (!s.gestures) {
          if (
            'touchmove' !== e.type ||
            ('touchmove' === e.type && e.targetTouches.length < 2)
          )
            return;
          (c = !0), (m.scaleMove = w(e));
        }
        m.$imageEl && 0 !== m.$imageEl.length
          ? (s.gestures
              ? (i.scale = e.scale * p)
              : (i.scale = (m.scaleMove / m.scaleStart) * p),
            i.scale > m.maxRatio &&
              (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5),
            i.scale < a.minRatio &&
              (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5),
            m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`))
          : 'gesturechange' === e.type && b(e);
      }
      function y(e) {
        const s = t.device,
          a = t.support,
          i = t.params.zoom,
          r = t.zoom;
        if (!a.gestures) {
          if (!o || !c) return;
          if (
            'touchend' !== e.type ||
            ('touchend' === e.type && e.changedTouches.length < 2 && !s.android)
          )
            return;
          (o = !1), (c = !1);
        }
        m.$imageEl &&
          0 !== m.$imageEl.length &&
          ((r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio)),
          m.$imageEl
            .transition(t.params.speed)
            .transform(`translate3d(0,0,0) scale(${r.scale})`),
          (p = r.scale),
          (u = !1),
          1 === r.scale && (m.$slideEl = void 0));
      }
      function E(e) {
        const s = t.zoom;
        if (!m.$imageEl || 0 === m.$imageEl.length) return;
        if (((t.allowClick = !1), !f.isTouched || !m.$slideEl)) return;
        f.isMoved ||
          ((f.width = m.$imageEl[0].offsetWidth),
          (f.height = m.$imageEl[0].offsetHeight),
          (f.startX = h(m.$imageWrapEl[0], 'x') || 0),
          (f.startY = h(m.$imageWrapEl[0], 'y') || 0),
          (m.slideWidth = m.$slideEl[0].offsetWidth),
          (m.slideHeight = m.$slideEl[0].offsetHeight),
          m.$imageWrapEl.transition(0));
        const a = f.width * s.scale,
          i = f.height * s.scale;
        if (!(a < m.slideWidth && i < m.slideHeight)) {
          if (
            ((f.minX = Math.min(m.slideWidth / 2 - a / 2, 0)),
            (f.maxX = -f.minX),
            (f.minY = Math.min(m.slideHeight / 2 - i / 2, 0)),
            (f.maxY = -f.minY),
            (f.touchesCurrent.x =
              'touchmove' === e.type ? e.targetTouches[0].pageX : e.pageX),
            (f.touchesCurrent.y =
              'touchmove' === e.type ? e.targetTouches[0].pageY : e.pageY),
            !f.isMoved && !u)
          ) {
            if (
              t.isHorizontal() &&
              ((Math.floor(f.minX) === Math.floor(f.startX) &&
                f.touchesCurrent.x < f.touchesStart.x) ||
                (Math.floor(f.maxX) === Math.floor(f.startX) &&
                  f.touchesCurrent.x > f.touchesStart.x))
            )
              return void (f.isTouched = !1);
            if (
              !t.isHorizontal() &&
              ((Math.floor(f.minY) === Math.floor(f.startY) &&
                f.touchesCurrent.y < f.touchesStart.y) ||
                (Math.floor(f.maxY) === Math.floor(f.startY) &&
                  f.touchesCurrent.y > f.touchesStart.y))
            )
              return void (f.isTouched = !1);
          }
          e.cancelable && e.preventDefault(),
            e.stopPropagation(),
            (f.isMoved = !0),
            (f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX),
            (f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY),
            f.currentX < f.minX &&
              (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
            f.currentX > f.maxX &&
              (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
            f.currentY < f.minY &&
              (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
            f.currentY > f.maxY &&
              (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
            g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
            g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
            g.prevTime || (g.prevTime = Date.now()),
            (g.x =
              (f.touchesCurrent.x - g.prevPositionX) /
              (Date.now() - g.prevTime) /
              2),
            (g.y =
              (f.touchesCurrent.y - g.prevPositionY) /
              (Date.now() - g.prevTime) /
              2),
            Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
            Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
            (g.prevPositionX = f.touchesCurrent.x),
            (g.prevPositionY = f.touchesCurrent.y),
            (g.prevTime = Date.now()),
            m.$imageWrapEl.transform(
              `translate3d(${f.currentX}px, ${f.currentY}px,0)`
            );
        }
      }
      function T() {
        const e = t.zoom;
        m.$slideEl &&
          t.previousIndex !== t.activeIndex &&
          (m.$imageEl && m.$imageEl.transform('translate3d(0,0,0) scale(1)'),
          m.$imageWrapEl && m.$imageWrapEl.transform('translate3d(0,0,0)'),
          (e.scale = 1),
          (p = 1),
          (m.$slideEl = void 0),
          (m.$imageEl = void 0),
          (m.$imageWrapEl = void 0));
      }
      function C(e) {
        const s = t.zoom,
          a = t.params.zoom;
        if (
          (m.$slideEl ||
            (e &&
              e.target &&
              (m.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)),
            m.$slideEl ||
              (t.params.virtual && t.params.virtual.enabled && t.virtual
                ? (m.$slideEl = t.$wrapperEl.children(
                    `.${t.params.slideActiveClass}`
                  ))
                : (m.$slideEl = t.slides.eq(t.activeIndex))),
            (m.$imageEl = m.$slideEl
              .find(`.${a.containerClass}`)
              .eq(0)
              .find('picture, img, svg, canvas, .swiper-zoom-target')
              .eq(0)),
            (m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`))),
          !m.$imageEl ||
            0 === m.$imageEl.length ||
            !m.$imageWrapEl ||
            0 === m.$imageWrapEl.length)
        )
          return;
        let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
        t.params.cssMode &&
          ((t.wrapperEl.style.overflow = 'hidden'),
          (t.wrapperEl.style.touchAction = 'none')),
          m.$slideEl.addClass(`${a.zoomedSlideClass}`),
          void 0 === f.touchesStart.x && e
            ? ((i =
                'touchend' === e.type ? e.changedTouches[0].pageX : e.pageX),
              (r = 'touchend' === e.type ? e.changedTouches[0].pageY : e.pageY))
            : ((i = f.touchesStart.x), (r = f.touchesStart.y)),
          (s.scale = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          (p = m.$imageWrapEl.attr('data-swiper-zoom') || a.maxRatio),
          e
            ? (($ = m.$slideEl[0].offsetWidth),
              (S = m.$slideEl[0].offsetHeight),
              (l = m.$slideEl.offset().left + n.scrollX),
              (o = m.$slideEl.offset().top + n.scrollY),
              (c = l + $ / 2 - i),
              (u = o + S / 2 - r),
              (v = m.$imageEl[0].offsetWidth),
              (w = m.$imageEl[0].offsetHeight),
              (b = v * s.scale),
              (x = w * s.scale),
              (y = Math.min($ / 2 - b / 2, 0)),
              (E = Math.min(S / 2 - x / 2, 0)),
              (T = -y),
              (C = -E),
              (h = c * s.scale),
              (g = u * s.scale),
              h < y && (h = y),
              h > T && (h = T),
              g < E && (g = E),
              g > C && (g = C))
            : ((h = 0), (g = 0)),
          m.$imageWrapEl
            .transition(300)
            .transform(`translate3d(${h}px, ${g}px,0)`),
          m.$imageEl
            .transition(300)
            .transform(`translate3d(0,0,0) scale(${s.scale})`);
      }
      function $() {
        const e = t.zoom,
          s = t.params.zoom;
        m.$slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (m.$slideEl = t.$wrapperEl.children(
                `.${t.params.slideActiveClass}`
              ))
            : (m.$slideEl = t.slides.eq(t.activeIndex)),
          (m.$imageEl = m.$slideEl
            .find(`.${s.containerClass}`)
            .eq(0)
            .find('picture, img, svg, canvas, .swiper-zoom-target')
            .eq(0)),
          (m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`))),
          m.$imageEl &&
            0 !== m.$imageEl.length &&
            m.$imageWrapEl &&
            0 !== m.$imageWrapEl.length &&
            (t.params.cssMode &&
              ((t.wrapperEl.style.overflow = ''),
              (t.wrapperEl.style.touchAction = '')),
            (e.scale = 1),
            (p = 1),
            m.$imageWrapEl.transition(300).transform('translate3d(0,0,0)'),
            m.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)'),
            m.$slideEl.removeClass(`${s.zoomedSlideClass}`),
            (m.$slideEl = void 0));
      }
      function S(e) {
        const s = t.zoom;
        s.scale && 1 !== s.scale ? $() : C(e);
      }
      function M() {
        const e = t.support;
        return {
          passiveListener: !(
            'touchstart' !== t.touchEvents.start ||
            !e.passiveListener ||
            !t.params.passiveListeners
          ) && { passive: !0, capture: !1 },
          activeListenerWithCapture: !e.passiveListener || {
            passive: !1,
            capture: !0,
          },
        };
      }
      function P() {
        return `.${t.params.slideClass}`;
      }
      function k(e) {
        const { passiveListener: s } = M(),
          a = P();
        t.$wrapperEl[e]('gesturestart', a, b, s),
          t.$wrapperEl[e]('gesturechange', a, x, s),
          t.$wrapperEl[e]('gestureend', a, y, s);
      }
      function z() {
        l || ((l = !0), k('on'));
      }
      function O() {
        l && ((l = !1), k('off'));
      }
      function L() {
        const e = t.zoom;
        if (e.enabled) return;
        e.enabled = !0;
        const s = t.support,
          { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.on(t.touchEvents.start, z, a),
            t.$wrapperEl.on(t.touchEvents.end, O, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.on(t.touchEvents.start, r, b, a),
            t.$wrapperEl.on(t.touchEvents.move, r, x, i),
            t.$wrapperEl.on(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.on(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.on(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      function I() {
        const e = t.zoom;
        if (!e.enabled) return;
        const s = t.support;
        e.enabled = !1;
        const { passiveListener: a, activeListenerWithCapture: i } = M(),
          r = P();
        s.gestures
          ? (t.$wrapperEl.off(t.touchEvents.start, z, a),
            t.$wrapperEl.off(t.touchEvents.end, O, a))
          : 'touchstart' === t.touchEvents.start &&
            (t.$wrapperEl.off(t.touchEvents.start, r, b, a),
            t.$wrapperEl.off(t.touchEvents.move, r, x, i),
            t.$wrapperEl.off(t.touchEvents.end, r, y, a),
            t.touchEvents.cancel &&
              t.$wrapperEl.off(t.touchEvents.cancel, r, y, a)),
          t.$wrapperEl.off(
            t.touchEvents.move,
            `.${t.params.zoom.containerClass}`,
            E,
            i
          );
      }
      Object.defineProperty(t.zoom, 'scale', {
        get: () => v,
        set(e) {
          if (v !== e) {
            const t = m.$imageEl ? m.$imageEl[0] : void 0,
              s = m.$slideEl ? m.$slideEl[0] : void 0;
            i('zoomChange', e, t, s);
          }
          v = e;
        },
      }),
        a('init', () => {
          t.params.zoom.enabled && L();
        }),
        a('destroy', () => {
          I();
        }),
        a('touchStart', (e, s) => {
          t.zoom.enabled &&
            (function (e) {
              const s = t.device;
              m.$imageEl &&
                0 !== m.$imageEl.length &&
                (f.isTouched ||
                  (s.android && e.cancelable && e.preventDefault(),
                  (f.isTouched = !0),
                  (f.touchesStart.x =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageX
                      : e.pageX),
                  (f.touchesStart.y =
                    'touchstart' === e.type
                      ? e.targetTouches[0].pageY
                      : e.pageY)));
            })(s);
        }),
        a('touchEnd', (e, s) => {
          t.zoom.enabled &&
            (function () {
              const e = t.zoom;
              if (!m.$imageEl || 0 === m.$imageEl.length) return;
              if (!f.isTouched || !f.isMoved)
                return (f.isTouched = !1), void (f.isMoved = !1);
              (f.isTouched = !1), (f.isMoved = !1);
              let s = 300,
                a = 300;
              const i = g.x * s,
                r = f.currentX + i,
                n = g.y * a,
                l = f.currentY + n;
              0 !== g.x && (s = Math.abs((r - f.currentX) / g.x)),
                0 !== g.y && (a = Math.abs((l - f.currentY) / g.y));
              const o = Math.max(s, a);
              (f.currentX = r), (f.currentY = l);
              const d = f.width * e.scale,
                c = f.height * e.scale;
              (f.minX = Math.min(m.slideWidth / 2 - d / 2, 0)),
                (f.maxX = -f.minX),
                (f.minY = Math.min(m.slideHeight / 2 - c / 2, 0)),
                (f.maxY = -f.minY),
                (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
                (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
                m.$imageWrapEl
                  .transition(o)
                  .transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
            })();
        }),
        a('doubleTap', (e, s) => {
          !t.animating &&
            t.params.zoom.enabled &&
            t.zoom.enabled &&
            t.params.zoom.toggle &&
            S(s);
        }),
        a('transitionEnd', () => {
          t.zoom.enabled && t.params.zoom.enabled && T();
        }),
        a('slideChange', () => {
          t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && T();
        }),
        Object.assign(t.zoom, {
          enable: L,
          disable: I,
          in: C,
          out: $,
          toggle: S,
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a, emit: i } = e;
      s({
        lazy: {
          checkInView: !1,
          enabled: !1,
          loadPrevNext: !1,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: !1,
          scrollingElement: '',
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader',
        },
      }),
        (t.lazy = {});
      let n = !1,
        l = !1;
      function o(e, s) {
        void 0 === s && (s = !0);
        const a = t.params.lazy;
        if (void 0 === e) return;
        if (0 === t.slides.length) return;
        const r =
            t.virtual && t.params.virtual.enabled
              ? t.$wrapperEl.children(
                  `.${t.params.slideClass}[data-swiper-slide-index="${e}"]`
                )
              : t.slides.eq(e),
          n = r.find(
            `.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`
          );
        !r.hasClass(a.elementClass) ||
          r.hasClass(a.loadedClass) ||
          r.hasClass(a.loadingClass) ||
          n.push(r[0]),
          0 !== n.length &&
            n.each((e) => {
              const n = d(e);
              n.addClass(a.loadingClass);
              const l = n.attr('data-background'),
                c = n.attr('data-src'),
                p = n.attr('data-srcset'),
                u = n.attr('data-sizes'),
                h = n.parent('picture');
              t.loadImage(n[0], c || l, p, u, !1, () => {
                if (null != t && t && (!t || t.params) && !t.destroyed) {
                  if (
                    (l
                      ? (n.css('background-image', `url("${l}")`),
                        n.removeAttr('data-background'))
                      : (p &&
                          (n.attr('srcset', p), n.removeAttr('data-srcset')),
                        u && (n.attr('sizes', u), n.removeAttr('data-sizes')),
                        h.length &&
                          h.children('source').each((e) => {
                            const t = d(e);
                            t.attr('data-srcset') &&
                              (t.attr('srcset', t.attr('data-srcset')),
                              t.removeAttr('data-srcset'));
                          }),
                        c && (n.attr('src', c), n.removeAttr('data-src'))),
                    n.addClass(a.loadedClass).removeClass(a.loadingClass),
                    r.find(`.${a.preloaderClass}`).remove(),
                    t.params.loop && s)
                  ) {
                    const e = r.attr('data-swiper-slide-index');
                    if (r.hasClass(t.params.slideDuplicateClass)) {
                      o(
                        t.$wrapperEl
                          .children(
                            `[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`
                          )
                          .index(),
                        !1
                      );
                    } else {
                      o(
                        t.$wrapperEl
                          .children(
                            `.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`
                          )
                          .index(),
                        !1
                      );
                    }
                  }
                  i('lazyImageReady', r[0], n[0]),
                    t.params.autoHeight && t.updateAutoHeight();
                }
              }),
                i('lazyImageLoad', r[0], n[0]);
            });
      }
      function c() {
        const { $wrapperEl: e, params: s, slides: a, activeIndex: i } = t,
          r = t.virtual && s.virtual.enabled,
          n = s.lazy;
        let c = s.slidesPerView;
        function p(t) {
          if (r) {
            if (
              e.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`)
                .length
            )
              return !0;
          } else if (a[t]) return !0;
          return !1;
        }
        function u(e) {
          return r ? d(e).attr('data-swiper-slide-index') : d(e).index();
        }
        if (
          ('auto' === c && (c = 0), l || (l = !0), t.params.watchSlidesProgress)
        )
          e.children(`.${s.slideVisibleClass}`).each((e) => {
            o(r ? d(e).attr('data-swiper-slide-index') : d(e).index());
          });
        else if (c > 1) for (let e = i; e < i + c; e += 1) p(e) && o(e);
        else o(i);
        if (n.loadPrevNext)
          if (c > 1 || (n.loadPrevNextAmount && n.loadPrevNextAmount > 1)) {
            const e = n.loadPrevNextAmount,
              t = c,
              s = Math.min(i + t + Math.max(e, t), a.length),
              r = Math.max(i - Math.max(t, e), 0);
            for (let e = i + c; e < s; e += 1) p(e) && o(e);
            for (let e = r; e < i; e += 1) p(e) && o(e);
          } else {
            const t = e.children(`.${s.slideNextClass}`);
            t.length > 0 && o(u(t));
            const a = e.children(`.${s.slidePrevClass}`);
            a.length > 0 && o(u(a));
          }
      }
      function p() {
        const e = r();
        if (!t || t.destroyed) return;
        const s = t.params.lazy.scrollingElement
            ? d(t.params.lazy.scrollingElement)
            : d(e),
          a = s[0] === e,
          i = a ? e.innerWidth : s[0].offsetWidth,
          l = a ? e.innerHeight : s[0].offsetHeight,
          o = t.$el.offset(),
          { rtlTranslate: u } = t;
        let h = !1;
        u && (o.left -= t.$el[0].scrollLeft);
        const m = [
          [o.left, o.top],
          [o.left + t.width, o.top],
          [o.left, o.top + t.height],
          [o.left + t.width, o.top + t.height],
        ];
        for (let e = 0; e < m.length; e += 1) {
          const t = m[e];
          if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
            if (0 === t[0] && 0 === t[1]) continue;
            h = !0;
          }
        }
        const f = !(
          'touchstart' !== t.touchEvents.start ||
          !t.support.passiveListener ||
          !t.params.passiveListeners
        ) && { passive: !0, capture: !1 };
        h
          ? (c(), s.off('scroll', p, f))
          : n || ((n = !0), s.on('scroll', p, f));
      }
      a('beforeInit', () => {
        t.params.lazy.enabled &&
          t.params.preloadImages &&
          (t.params.preloadImages = !1);
      }),
        a('init', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('scroll', () => {
          t.params.freeMode &&
            t.params.freeMode.enabled &&
            !t.params.freeMode.sticky &&
            c();
        }),
        a('scrollbarDragMove resize _freeModeNoMomentumRelease', () => {
          t.params.lazy.enabled && (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionStart', () => {
          t.params.lazy.enabled &&
            (t.params.lazy.loadOnTransitionStart ||
              (!t.params.lazy.loadOnTransitionStart && !l)) &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a('transitionEnd', () => {
          t.params.lazy.enabled &&
            !t.params.lazy.loadOnTransitionStart &&
            (t.params.lazy.checkInView ? p() : c());
        }),
        a('slideChange', () => {
          const {
            lazy: e,
            cssMode: s,
            watchSlidesProgress: a,
            touchReleaseOnEdges: i,
            resistanceRatio: r,
          } = t.params;
          e.enabled && (s || (a && (i || 0 === r))) && c();
        }),
        Object.assign(t.lazy, { load: c, loadInSlide: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      function i(e, t) {
        const s = (function () {
          let e, t, s;
          return (a, i) => {
            for (t = -1, e = a.length; e - t > 1; )
              (s = (e + t) >> 1), a[s] <= i ? (t = s) : (e = s);
            return e;
          };
        })();
        let a, i;
        return (
          (this.x = e),
          (this.y = t),
          (this.lastIndex = e.length - 1),
          (this.interpolate = function (e) {
            return e
              ? ((i = s(this.x, e)),
                (a = i - 1),
                ((e - this.x[a]) * (this.y[i] - this.y[a])) /
                  (this.x[i] - this.x[a]) +
                  this.y[a])
              : 0;
          }),
          this
        );
      }
      function r() {
        t.controller.control &&
          t.controller.spline &&
          ((t.controller.spline = void 0), delete t.controller.spline);
      }
      s({ controller: { control: void 0, inverse: !1, by: 'slide' } }),
        (t.controller = { control: void 0 }),
        a('beforeInit', () => {
          t.controller.control = t.params.controller.control;
        }),
        a('update', () => {
          r();
        }),
        a('resize', () => {
          r();
        }),
        a('observerUpdate', () => {
          r();
        }),
        a('setTranslate', (e, s, a) => {
          t.controller.control && t.controller.setTranslate(s, a);
        }),
        a('setTransition', (e, s, a) => {
          t.controller.control && t.controller.setTransition(s, a);
        }),
        Object.assign(t.controller, {
          setTranslate: function (e, s) {
            const a = t.controller.control;
            let r, n;
            const l = t.constructor;
            function o(e) {
              const s = t.rtlTranslate ? -t.translate : t.translate;
              'slide' === t.params.controller.by &&
                (!(function (e) {
                  t.controller.spline ||
                    (t.controller.spline = t.params.loop
                      ? new i(t.slidesGrid, e.slidesGrid)
                      : new i(t.snapGrid, e.snapGrid));
                })(e),
                (n = -t.controller.spline.interpolate(-s))),
                (n && 'container' !== t.params.controller.by) ||
                  ((r =
                    (e.maxTranslate() - e.minTranslate()) /
                    (t.maxTranslate() - t.minTranslate())),
                  (n = (s - t.minTranslate()) * r + e.minTranslate())),
                t.params.controller.inverse && (n = e.maxTranslate() - n),
                e.updateProgress(n),
                e.setTranslate(n, t),
                e.updateActiveIndex(),
                e.updateSlidesClasses();
            }
            if (Array.isArray(a))
              for (let e = 0; e < a.length; e += 1)
                a[e] !== s && a[e] instanceof l && o(a[e]);
            else a instanceof l && s !== a && o(a);
          },
          setTransition: function (e, s) {
            const a = t.constructor,
              i = t.controller.control;
            let r;
            function n(s) {
              s.setTransition(e, t),
                0 !== e &&
                  (s.transitionStart(),
                  s.params.autoHeight &&
                    p(() => {
                      s.updateAutoHeight();
                    }),
                  s.$wrapperEl.transitionEnd(() => {
                    i &&
                      (s.params.loop &&
                        'slide' === t.params.controller.by &&
                        s.loopFix(),
                      s.transitionEnd());
                  }));
            }
            if (Array.isArray(i))
              for (r = 0; r < i.length; r += 1)
                i[r] !== s && i[r] instanceof a && n(i[r]);
            else i instanceof a && s !== i && n(i);
          },
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        a11y: {
          enabled: !0,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}',
          slideLabelMessage: '{{index}} / {{slidesLength}}',
          containerMessage: null,
          containerRoleDescriptionMessage: null,
          itemRoleDescriptionMessage: null,
          slideRole: 'group',
          id: null,
        },
      });
      let i = null;
      function r(e) {
        const t = i;
        0 !== t.length && (t.html(''), t.html(e));
      }
      function n(e) {
        e.attr('tabIndex', '0');
      }
      function l(e) {
        e.attr('tabIndex', '-1');
      }
      function o(e, t) {
        e.attr('role', t);
      }
      function c(e, t) {
        e.attr('aria-roledescription', t);
      }
      function p(e, t) {
        e.attr('aria-label', t);
      }
      function u(e) {
        e.attr('aria-disabled', !0);
      }
      function h(e) {
        e.attr('aria-disabled', !1);
      }
      function m(e) {
        if (13 !== e.keyCode && 32 !== e.keyCode) return;
        const s = t.params.a11y,
          a = d(e.target);
        t.navigation &&
          t.navigation.$nextEl &&
          a.is(t.navigation.$nextEl) &&
          ((t.isEnd && !t.params.loop) || t.slideNext(),
          t.isEnd ? r(s.lastSlideMessage) : r(s.nextSlideMessage)),
          t.navigation &&
            t.navigation.$prevEl &&
            a.is(t.navigation.$prevEl) &&
            ((t.isBeginning && !t.params.loop) || t.slidePrev(),
            t.isBeginning ? r(s.firstSlideMessage) : r(s.prevSlideMessage)),
          t.pagination &&
            a.is(U(t.params.pagination.bulletClass)) &&
            a[0].click();
      }
      function f() {
        return (
          t.pagination && t.pagination.bullets && t.pagination.bullets.length
        );
      }
      function g() {
        return f() && t.params.pagination.clickable;
      }
      const v = (e, t, s) => {
          n(e),
            'BUTTON' !== e[0].tagName && (o(e, 'button'), e.on('keydown', m)),
            p(e, s),
            (function (e, t) {
              e.attr('aria-controls', t);
            })(e, t);
        },
        w = (e) => {
          const s = e.target.closest(`.${t.params.slideClass}`);
          if (!s || !t.slides.includes(s)) return;
          const a = t.slides.indexOf(s) === t.activeIndex,
            i =
              t.params.watchSlidesProgress &&
              t.visibleSlides &&
              t.visibleSlides.includes(s);
          a || i || t.slideTo(t.slides.indexOf(s), 0);
        };
      function b() {
        const e = t.params.a11y;
        t.$el.append(i);
        const s = t.$el;
        e.containerRoleDescriptionMessage &&
          c(s, e.containerRoleDescriptionMessage),
          e.containerMessage && p(s, e.containerMessage);
        const a = t.$wrapperEl,
          r =
            e.id ||
            a.attr('id') ||
            `swiper-wrapper-${
              ((n = 16),
              void 0 === n && (n = 16),
              'x'
                .repeat(n)
                .replace(/x/g, () =>
                  Math.round(16 * Math.random()).toString(16)
                ))
            }`;
        var n;
        const l =
          t.params.autoplay && t.params.autoplay.enabled ? 'off' : 'polite';
        var u;
        (u = r),
          a.attr('id', u),
          (function (e, t) {
            e.attr('aria-live', t);
          })(a, l),
          e.itemRoleDescriptionMessage &&
            c(d(t.slides), e.itemRoleDescriptionMessage),
          o(d(t.slides), e.slideRole);
        const h = t.params.loop
          ? t.slides.filter(
              (e) => !e.classList.contains(t.params.slideDuplicateClass)
            ).length
          : t.slides.length;
        let f, b;
        t.slides.each((s, a) => {
          const i = d(s),
            r = t.params.loop
              ? parseInt(i.attr('data-swiper-slide-index'), 10)
              : a;
          p(
            i,
            e.slideLabelMessage
              .replace(/\{\{index\}\}/, r + 1)
              .replace(/\{\{slidesLength\}\}/, h)
          );
        }),
          t.navigation && t.navigation.$nextEl && (f = t.navigation.$nextEl),
          t.navigation && t.navigation.$prevEl && (b = t.navigation.$prevEl),
          f && f.length && v(f, r, e.nextSlideMessage),
          b && b.length && v(b, r, e.prevSlideMessage),
          g() &&
            t.pagination.$el.on(
              'keydown',
              U(t.params.pagination.bulletClass),
              m
            ),
          t.$el.on('focus', w, !0);
      }
      a('beforeInit', () => {
        i = d(
          `<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`
        );
      }),
        a('afterInit', () => {
          t.params.a11y.enabled && b();
        }),
        a('fromEdge toEdge afterInit lock unlock', () => {
          t.params.a11y.enabled &&
            (function () {
              if (t.params.loop || t.params.rewind || !t.navigation) return;
              const { $nextEl: e, $prevEl: s } = t.navigation;
              s &&
                s.length > 0 &&
                (t.isBeginning ? (u(s), l(s)) : (h(s), n(s))),
                e && e.length > 0 && (t.isEnd ? (u(e), l(e)) : (h(e), n(e)));
            })();
        }),
        a('paginationUpdate', () => {
          t.params.a11y.enabled &&
            (function () {
              const e = t.params.a11y;
              f() &&
                t.pagination.bullets.each((s) => {
                  const a = d(s);
                  t.params.pagination.clickable &&
                    (n(a),
                    t.params.pagination.renderBullet ||
                      (o(a, 'button'),
                      p(
                        a,
                        e.paginationBulletMessage.replace(
                          /\{\{index\}\}/,
                          a.index() + 1
                        )
                      ))),
                    a.is(`.${t.params.pagination.bulletActiveClass}`)
                      ? a.attr('aria-current', 'true')
                      : a.removeAttr('aria-current');
                });
            })();
        }),
        a('destroy', () => {
          t.params.a11y.enabled &&
            (function () {
              let e, s;
              i && i.length > 0 && i.remove(),
                t.navigation &&
                  t.navigation.$nextEl &&
                  (e = t.navigation.$nextEl),
                t.navigation &&
                  t.navigation.$prevEl &&
                  (s = t.navigation.$prevEl),
                e && e.off('keydown', m),
                s && s.off('keydown', m),
                g() &&
                  t.pagination.$el.off(
                    'keydown',
                    U(t.params.pagination.bulletClass),
                    m
                  ),
                t.$el.off('focus', w, !0);
            })();
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        history: {
          enabled: !1,
          root: '',
          replaceState: !1,
          key: 'slides',
          keepQuery: !1,
        },
      });
      let i = !1,
        n = {};
      const l = (e) =>
          e
            .toString()
            .replace(/\s+/g, '-')
            .replace(/[^\w-]+/g, '')
            .replace(/--+/g, '-')
            .replace(/^-+/, '')
            .replace(/-+$/, ''),
        o = (e) => {
          const t = r();
          let s;
          s = e ? new URL(e) : t.location;
          const a = s.pathname
              .slice(1)
              .split('/')
              .filter((e) => '' !== e),
            i = a.length;
          return { key: a[i - 2], value: a[i - 1] };
        },
        d = (e, s) => {
          const a = r();
          if (!i || !t.params.history.enabled) return;
          let n;
          n = t.params.url ? new URL(t.params.url) : a.location;
          const o = t.slides.eq(s);
          let d = l(o.attr('data-history'));
          if (t.params.history.root.length > 0) {
            let s = t.params.history.root;
            '/' === s[s.length - 1] && (s = s.slice(0, s.length - 1)),
              (d = `${s}/${e}/${d}`);
          } else n.pathname.includes(e) || (d = `${e}/${d}`);
          t.params.history.keepQuery && (d += n.search);
          const c = a.history.state;
          (c && c.value === d) ||
            (t.params.history.replaceState
              ? a.history.replaceState({ value: d }, null, d)
              : a.history.pushState({ value: d }, null, d));
        },
        c = (e, s, a) => {
          if (s)
            for (let i = 0, r = t.slides.length; i < r; i += 1) {
              const r = t.slides.eq(i);
              if (
                l(r.attr('data-history')) === s &&
                !r.hasClass(t.params.slideDuplicateClass)
              ) {
                const s = r.index();
                t.slideTo(s, e, a);
              }
            }
          else t.slideTo(0, e, a);
        },
        p = () => {
          (n = o(t.params.url)), c(t.params.speed, n.value, !1);
        };
      a('init', () => {
        t.params.history.enabled &&
          (() => {
            const e = r();
            if (t.params.history) {
              if (!e.history || !e.history.pushState)
                return (
                  (t.params.history.enabled = !1),
                  void (t.params.hashNavigation.enabled = !0)
                );
              (i = !0),
                (n = o(t.params.url)),
                (n.key || n.value) &&
                  (c(0, n.value, t.params.runCallbacksOnInit),
                  t.params.history.replaceState ||
                    e.addEventListener('popstate', p));
            }
          })();
      }),
        a('destroy', () => {
          t.params.history.enabled &&
            (() => {
              const e = r();
              t.params.history.replaceState ||
                e.removeEventListener('popstate', p);
            })();
        }),
        a('transitionEnd _freeModeNoMomentumRelease', () => {
          i && d(t.params.history.key, t.activeIndex);
        }),
        a('slideChange', () => {
          i && t.params.cssMode && d(t.params.history.key, t.activeIndex);
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: i, on: n } = e,
        l = !1;
      const o = a(),
        c = r();
      s({ hashNavigation: { enabled: !1, replaceState: !1, watchState: !1 } });
      const p = () => {
          i('hashChange');
          const e = o.location.hash.replace('#', '');
          if (e !== t.slides.eq(t.activeIndex).attr('data-hash')) {
            const s = t.$wrapperEl
              .children(`.${t.params.slideClass}[data-hash="${e}"]`)
              .index();
            if (void 0 === s) return;
            t.slideTo(s);
          }
        },
        u = () => {
          if (l && t.params.hashNavigation.enabled)
            if (
              t.params.hashNavigation.replaceState &&
              c.history &&
              c.history.replaceState
            )
              c.history.replaceState(
                null,
                null,
                `#${t.slides.eq(t.activeIndex).attr('data-hash')}` || ''
              ),
                i('hashSet');
            else {
              const e = t.slides.eq(t.activeIndex),
                s = e.attr('data-hash') || e.attr('data-history');
              (o.location.hash = s || ''), i('hashSet');
            }
        };
      n('init', () => {
        t.params.hashNavigation.enabled &&
          (() => {
            if (
              !t.params.hashNavigation.enabled ||
              (t.params.history && t.params.history.enabled)
            )
              return;
            l = !0;
            const e = o.location.hash.replace('#', '');
            if (e) {
              const s = 0;
              for (let a = 0, i = t.slides.length; a < i; a += 1) {
                const i = t.slides.eq(a);
                if (
                  (i.attr('data-hash') || i.attr('data-history')) === e &&
                  !i.hasClass(t.params.slideDuplicateClass)
                ) {
                  const e = i.index();
                  t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                }
              }
            }
            t.params.hashNavigation.watchState && d(c).on('hashchange', p);
          })();
      }),
        n('destroy', () => {
          t.params.hashNavigation.enabled &&
            t.params.hashNavigation.watchState &&
            d(c).off('hashchange', p);
        }),
        n('transitionEnd _freeModeNoMomentumRelease', () => {
          l && u();
        }),
        n('slideChange', () => {
          l && t.params.cssMode && u();
        });
    },
    function (e) {
      let t,
        { swiper: s, extendParams: i, on: r, emit: n } = e;
      function l() {
        const e = s.slides.eq(s.activeIndex);
        let a = s.params.autoplay.delay;
        e.attr('data-swiper-autoplay') &&
          (a = e.attr('data-swiper-autoplay') || s.params.autoplay.delay),
          clearTimeout(t),
          (t = p(() => {
            let e;
            s.params.autoplay.reverseDirection
              ? s.params.loop
                ? (s.loopFix(),
                  (e = s.slidePrev(s.params.speed, !0, !0)),
                  n('autoplay'))
                : s.isBeginning
                ? s.params.autoplay.stopOnLastSlide
                  ? d()
                  : ((e = s.slideTo(
                      s.slides.length - 1,
                      s.params.speed,
                      !0,
                      !0
                    )),
                    n('autoplay'))
                : ((e = s.slidePrev(s.params.speed, !0, !0)), n('autoplay'))
              : s.params.loop
              ? (s.loopFix(),
                (e = s.slideNext(s.params.speed, !0, !0)),
                n('autoplay'))
              : s.isEnd
              ? s.params.autoplay.stopOnLastSlide
                ? d()
                : ((e = s.slideTo(0, s.params.speed, !0, !0)), n('autoplay'))
              : ((e = s.slideNext(s.params.speed, !0, !0)), n('autoplay')),
              ((s.params.cssMode && s.autoplay.running) || !1 === e) && l();
          }, a));
      }
      function o() {
        return (
          void 0 === t &&
          !s.autoplay.running &&
          ((s.autoplay.running = !0), n('autoplayStart'), l(), !0)
        );
      }
      function d() {
        return (
          !!s.autoplay.running &&
          void 0 !== t &&
          (t && (clearTimeout(t), (t = void 0)),
          (s.autoplay.running = !1),
          n('autoplayStop'),
          !0)
        );
      }
      function c(e) {
        s.autoplay.running &&
          (s.autoplay.paused ||
            (t && clearTimeout(t),
            (s.autoplay.paused = !0),
            0 !== e && s.params.autoplay.waitForTransition
              ? ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
                  s.$wrapperEl[0].addEventListener(e, h);
                })
              : ((s.autoplay.paused = !1), l())));
      }
      function u() {
        const e = a();
        'hidden' === e.visibilityState && s.autoplay.running && c(),
          'visible' === e.visibilityState &&
            s.autoplay.paused &&
            (l(), (s.autoplay.paused = !1));
      }
      function h(e) {
        s &&
          !s.destroyed &&
          s.$wrapperEl &&
          e.target === s.$wrapperEl[0] &&
          (['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          }),
          (s.autoplay.paused = !1),
          s.autoplay.running ? l() : d());
      }
      function m() {
        s.params.autoplay.disableOnInteraction
          ? d()
          : (n('autoplayPause'), c()),
          ['transitionend', 'webkitTransitionEnd'].forEach((e) => {
            s.$wrapperEl[0].removeEventListener(e, h);
          });
      }
      function f() {
        s.params.autoplay.disableOnInteraction ||
          ((s.autoplay.paused = !1), n('autoplayResume'), l());
      }
      (s.autoplay = { running: !1, paused: !1 }),
        i({
          autoplay: {
            enabled: !1,
            delay: 3e3,
            waitForTransition: !0,
            disableOnInteraction: !0,
            stopOnLastSlide: !1,
            reverseDirection: !1,
            pauseOnMouseEnter: !1,
          },
        }),
        r('init', () => {
          if (s.params.autoplay.enabled) {
            o();
            a().addEventListener('visibilitychange', u),
              s.params.autoplay.pauseOnMouseEnter &&
                (s.$el.on('mouseenter', m), s.$el.on('mouseleave', f));
          }
        }),
        r('beforeTransitionStart', (e, t, a) => {
          s.autoplay.running &&
            (a || !s.params.autoplay.disableOnInteraction
              ? s.autoplay.pause(t)
              : d());
        }),
        r('sliderFirstMove', () => {
          s.autoplay.running &&
            (s.params.autoplay.disableOnInteraction ? d() : c());
        }),
        r('touchEnd', () => {
          s.params.cssMode &&
            s.autoplay.paused &&
            !s.params.autoplay.disableOnInteraction &&
            l();
        }),
        r('destroy', () => {
          s.$el.off('mouseenter', m),
            s.$el.off('mouseleave', f),
            s.autoplay.running && d();
          a().removeEventListener('visibilitychange', u);
        }),
        Object.assign(s.autoplay, { pause: c, run: l, start: o, stop: d });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        thumbs: {
          swiper: null,
          multipleActiveThumbs: !0,
          autoScrollOffset: 0,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-thumbs',
        },
      });
      let i = !1,
        r = !1;
      function n() {
        const e = t.thumbs.swiper;
        if (!e || e.destroyed) return;
        const s = e.clickedIndex,
          a = e.clickedSlide;
        if (a && d(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
        if (null == s) return;
        let i;
        if (
          ((i = e.params.loop
            ? parseInt(d(e.clickedSlide).attr('data-swiper-slide-index'), 10)
            : s),
          t.params.loop)
        ) {
          let e = t.activeIndex;
          t.slides.eq(e).hasClass(t.params.slideDuplicateClass) &&
            (t.loopFix(),
            (t._clientLeft = t.$wrapperEl[0].clientLeft),
            (e = t.activeIndex));
          const s = t.slides
              .eq(e)
              .prevAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index(),
            a = t.slides
              .eq(e)
              .nextAll(`[data-swiper-slide-index="${i}"]`)
              .eq(0)
              .index();
          i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
        }
        t.slideTo(i);
      }
      function l() {
        const { thumbs: e } = t.params;
        if (i) return !1;
        i = !0;
        const s = t.constructor;
        if (e.swiper instanceof s)
          (t.thumbs.swiper = e.swiper),
            Object.assign(t.thumbs.swiper.originalParams, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            }),
            Object.assign(t.thumbs.swiper.params, {
              watchSlidesProgress: !0,
              slideToClickedSlide: !1,
            });
        else if (m(e.swiper)) {
          const a = Object.assign({}, e.swiper);
          Object.assign(a, {
            watchSlidesProgress: !0,
            slideToClickedSlide: !1,
          }),
            (t.thumbs.swiper = new s(a)),
            (r = !0);
        }
        return (
          t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass),
          t.thumbs.swiper.on('tap', n),
          !0
        );
      }
      function o(e) {
        const s = t.thumbs.swiper;
        if (!s || s.destroyed) return;
        const a =
            'auto' === s.params.slidesPerView
              ? s.slidesPerViewDynamic()
              : s.params.slidesPerView,
          i = t.params.thumbs.autoScrollOffset,
          r = i && !s.params.loop;
        if (t.realIndex !== s.realIndex || r) {
          let n,
            l,
            o = s.activeIndex;
          if (s.params.loop) {
            s.slides.eq(o).hasClass(s.params.slideDuplicateClass) &&
              (s.loopFix(),
              (s._clientLeft = s.$wrapperEl[0].clientLeft),
              (o = s.activeIndex));
            const e = s.slides
                .eq(o)
                .prevAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index(),
              a = s.slides
                .eq(o)
                .nextAll(`[data-swiper-slide-index="${t.realIndex}"]`)
                .eq(0)
                .index();
            (n =
              void 0 === e
                ? a
                : void 0 === a
                ? e
                : a - o == o - e
                ? s.params.slidesPerGroup > 1
                  ? a
                  : o
                : a - o < o - e
                ? a
                : e),
              (l = t.activeIndex > t.previousIndex ? 'next' : 'prev');
          } else (n = t.realIndex), (l = n > t.previousIndex ? 'next' : 'prev');
          r && (n += 'next' === l ? i : -1 * i),
            s.visibleSlidesIndexes &&
              s.visibleSlidesIndexes.indexOf(n) < 0 &&
              (s.params.centeredSlides
                ? (n =
                    n > o
                      ? n - Math.floor(a / 2) + 1
                      : n + Math.floor(a / 2) - 1)
                : n > o && s.params.slidesPerGroup,
              s.slideTo(n, e ? 0 : void 0));
        }
        let n = 1;
        const l = t.params.thumbs.slideThumbActiveClass;
        if (
          (t.params.slidesPerView > 1 &&
            !t.params.centeredSlides &&
            (n = t.params.slidesPerView),
          t.params.thumbs.multipleActiveThumbs || (n = 1),
          (n = Math.floor(n)),
          s.slides.removeClass(l),
          s.params.loop || (s.params.virtual && s.params.virtual.enabled))
        )
          for (let e = 0; e < n; e += 1)
            s.$wrapperEl
              .children(`[data-swiper-slide-index="${t.realIndex + e}"]`)
              .addClass(l);
        else
          for (let e = 0; e < n; e += 1)
            s.slides.eq(t.realIndex + e).addClass(l);
      }
      (t.thumbs = { swiper: null }),
        a('beforeInit', () => {
          const { thumbs: e } = t.params;
          e && e.swiper && (l(), o(!0));
        }),
        a('slideChange update resize observerUpdate', () => {
          o();
        }),
        a('setTransition', (e, s) => {
          const a = t.thumbs.swiper;
          a && !a.destroyed && a.setTransition(s);
        }),
        a('beforeDestroy', () => {
          const e = t.thumbs.swiper;
          e && !e.destroyed && r && e.destroy();
        }),
        Object.assign(t.thumbs, { init: l, update: o });
    },
    function (e) {
      let { swiper: t, extendParams: s, emit: a, once: i } = e;
      s({
        freeMode: {
          enabled: !1,
          momentum: !0,
          momentumRatio: 1,
          momentumBounce: !0,
          momentumBounceRatio: 1,
          momentumVelocityRatio: 1,
          sticky: !1,
          minimumVelocity: 0.02,
        },
      }),
        Object.assign(t, {
          freeMode: {
            onTouchStart: function () {
              const e = t.getTranslate();
              t.setTranslate(e),
                t.setTransition(0),
                (t.touchEventsData.velocities.length = 0),
                t.freeMode.onTouchEnd({
                  currentPos: t.rtl ? t.translate : -t.translate,
                });
            },
            onTouchMove: function () {
              const { touchEventsData: e, touches: s } = t;
              0 === e.velocities.length &&
                e.velocities.push({
                  position: s[t.isHorizontal() ? 'startX' : 'startY'],
                  time: e.touchStartTime,
                }),
                e.velocities.push({
                  position: s[t.isHorizontal() ? 'currentX' : 'currentY'],
                  time: u(),
                });
            },
            onTouchEnd: function (e) {
              let { currentPos: s } = e;
              const {
                  params: r,
                  $wrapperEl: n,
                  rtlTranslate: l,
                  snapGrid: o,
                  touchEventsData: d,
                } = t,
                c = u() - d.touchStartTime;
              if (s < -t.minTranslate()) t.slideTo(t.activeIndex);
              else if (s > -t.maxTranslate())
                t.slides.length < o.length
                  ? t.slideTo(o.length - 1)
                  : t.slideTo(t.slides.length - 1);
              else {
                if (r.freeMode.momentum) {
                  if (d.velocities.length > 1) {
                    const e = d.velocities.pop(),
                      s = d.velocities.pop(),
                      a = e.position - s.position,
                      i = e.time - s.time;
                    (t.velocity = a / i),
                      (t.velocity /= 2),
                      Math.abs(t.velocity) < r.freeMode.minimumVelocity &&
                        (t.velocity = 0),
                      (i > 150 || u() - e.time > 300) && (t.velocity = 0);
                  } else t.velocity = 0;
                  (t.velocity *= r.freeMode.momentumVelocityRatio),
                    (d.velocities.length = 0);
                  let e = 1e3 * r.freeMode.momentumRatio;
                  const s = t.velocity * e;
                  let c = t.translate + s;
                  l && (c = -c);
                  let p,
                    h = !1;
                  const m =
                    20 * Math.abs(t.velocity) * r.freeMode.momentumBounceRatio;
                  let f;
                  if (c < t.maxTranslate())
                    r.freeMode.momentumBounce
                      ? (c + t.maxTranslate() < -m &&
                          (c = t.maxTranslate() - m),
                        (p = t.maxTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.maxTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (c > t.minTranslate())
                    r.freeMode.momentumBounce
                      ? (c - t.minTranslate() > m && (c = t.minTranslate() + m),
                        (p = t.minTranslate()),
                        (h = !0),
                        (d.allowMomentumBounce = !0))
                      : (c = t.minTranslate()),
                      r.loop && r.centeredSlides && (f = !0);
                  else if (r.freeMode.sticky) {
                    let e;
                    for (let t = 0; t < o.length; t += 1)
                      if (o[t] > -c) {
                        e = t;
                        break;
                      }
                    (c =
                      Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) ||
                      'next' === t.swipeDirection
                        ? o[e]
                        : o[e - 1]),
                      (c = -c);
                  }
                  if (
                    (f &&
                      i('transitionEnd', () => {
                        t.loopFix();
                      }),
                    0 !== t.velocity)
                  ) {
                    if (
                      ((e = l
                        ? Math.abs((-c - t.translate) / t.velocity)
                        : Math.abs((c - t.translate) / t.velocity)),
                      r.freeMode.sticky)
                    ) {
                      const s = Math.abs((l ? -c : c) - t.translate),
                        a = t.slidesSizesGrid[t.activeIndex];
                      e =
                        s < a
                          ? r.speed
                          : s < 2 * a
                          ? 1.5 * r.speed
                          : 2.5 * r.speed;
                    }
                  } else if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode.momentumBounce && h
                    ? (t.updateProgress(p),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      (t.animating = !0),
                      n.transitionEnd(() => {
                        t &&
                          !t.destroyed &&
                          d.allowMomentumBounce &&
                          (a('momentumBounce'),
                          t.setTransition(r.speed),
                          setTimeout(() => {
                            t.setTranslate(p),
                              n.transitionEnd(() => {
                                t && !t.destroyed && t.transitionEnd();
                              });
                          }, 0));
                      }))
                    : t.velocity
                    ? (a('_freeModeNoMomentumRelease'),
                      t.updateProgress(c),
                      t.setTransition(e),
                      t.setTranslate(c),
                      t.transitionStart(!0, t.swipeDirection),
                      t.animating ||
                        ((t.animating = !0),
                        n.transitionEnd(() => {
                          t && !t.destroyed && t.transitionEnd();
                        })))
                    : t.updateProgress(c),
                    t.updateActiveIndex(),
                    t.updateSlidesClasses();
                } else {
                  if (r.freeMode.sticky) return void t.slideToClosest();
                  r.freeMode && a('_freeModeNoMomentumRelease');
                }
                (!r.freeMode.momentum || c >= r.longSwipesMs) &&
                  (t.updateProgress(),
                  t.updateActiveIndex(),
                  t.updateSlidesClasses());
              }
            },
          },
        });
    },
    function (e) {
      let t,
        s,
        a,
        { swiper: i, extendParams: r } = e;
      r({ grid: { rows: 1, fill: 'column' } }),
        (i.grid = {
          initSlides: (e) => {
            const { slidesPerView: r } = i.params,
              { rows: n, fill: l } = i.params.grid;
            (s = t / n),
              (a = Math.floor(e / n)),
              (t = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n),
              'auto' !== r && 'row' === l && (t = Math.max(t, r * n));
          },
          updateSlide: (e, r, n, l) => {
            const { slidesPerGroup: o, spaceBetween: d } = i.params,
              { rows: c, fill: p } = i.params.grid;
            let u, h, m;
            if ('row' === p && o > 1) {
              const s = Math.floor(e / (o * c)),
                a = e - c * o * s,
                i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
              (m = Math.floor(a / i)),
                (h = a - m * i + s * o),
                (u = h + (m * t) / c),
                r.css({ '-webkit-order': u, order: u });
            } else
              'column' === p
                ? ((h = Math.floor(e / c)),
                  (m = e - h * c),
                  (h > a || (h === a && m === c - 1)) &&
                    ((m += 1), m >= c && ((m = 0), (h += 1))))
                : ((m = Math.floor(e / s)), (h = e - m * s));
            r.css(l('margin-top'), 0 !== m ? d && `${d}px` : '');
          },
          updateWrapperSize: (e, s, a) => {
            const {
                spaceBetween: r,
                centeredSlides: n,
                roundLengths: l,
              } = i.params,
              { rows: o } = i.params.grid;
            if (
              ((i.virtualSize = (e + r) * t),
              (i.virtualSize = Math.ceil(i.virtualSize / o) - r),
              i.$wrapperEl.css({ [a('width')]: `${i.virtualSize + r}px` }),
              n)
            ) {
              s.splice(0, s.length);
              const e = [];
              for (let t = 0; t < s.length; t += 1) {
                let a = s[t];
                l && (a = Math.floor(a)),
                  s[t] < i.virtualSize + s[0] && e.push(a);
              }
              s.push(...e);
            }
          },
        });
    },
    function (e) {
      let { swiper: t } = e;
      Object.assign(t, {
        appendSlide: K.bind(t),
        prependSlide: Z.bind(t),
        addSlide: Q.bind(t),
        removeSlide: J.bind(t),
        removeAllSlides: ee.bind(t),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ fadeEffect: { crossFade: !1, transformEl: null } }),
        te({
          effect: 'fade',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e } = t,
              s = t.params.fadeEffect;
            for (let a = 0; a < e.length; a += 1) {
              const e = t.slides.eq(a);
              let i = -e[0].swiperSlideOffset;
              t.params.virtualTranslate || (i -= t.translate);
              let r = 0;
              t.isHorizontal() || ((r = i), (i = 0));
              const n = t.params.fadeEffect.crossFade
                ? Math.max(1 - Math.abs(e[0].progress), 0)
                : 1 + Math.min(Math.max(e[0].progress, -1), 0);
              se(s, e)
                .css({ opacity: n })
                .transform(`translate3d(${i}px, ${r}px, 0px)`);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.fadeEffect;
            (s ? t.slides.find(s) : t.slides).transition(e),
              ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
          },
          overwriteParams: () => ({
            slidesPerView: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: !0,
            spaceBetween: 0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        cubeEffect: {
          slideShadows: !0,
          shadow: !0,
          shadowOffset: 20,
          shadowScale: 0.94,
        },
      });
      const i = (e, t, s) => {
        let a = s
            ? e.find('.swiper-slide-shadow-left')
            : e.find('.swiper-slide-shadow-top'),
          i = s
            ? e.find('.swiper-slide-shadow-right')
            : e.find('.swiper-slide-shadow-bottom');
        0 === a.length &&
          ((a = d(
            `<div class="swiper-slide-shadow-${s ? 'left' : 'top'}"></div>`
          )),
          e.append(a)),
          0 === i.length &&
            ((i = d(
              `<div class="swiper-slide-shadow-${
                s ? 'right' : 'bottom'
              }"></div>`
            )),
            e.append(i)),
          a.length && (a[0].style.opacity = Math.max(-t, 0)),
          i.length && (i[0].style.opacity = Math.max(t, 0));
      };
      te({
        effect: 'cube',
        swiper: t,
        on: a,
        setTranslate: () => {
          const {
              $el: e,
              $wrapperEl: s,
              slides: a,
              width: r,
              height: n,
              rtlTranslate: l,
              size: o,
              browser: c,
            } = t,
            p = t.params.cubeEffect,
            u = t.isHorizontal(),
            h = t.virtual && t.params.virtual.enabled;
          let m,
            f = 0;
          p.shadow &&
            (u
              ? ((m = s.find('.swiper-cube-shadow')),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  s.append(m)),
                m.css({ height: `${r}px` }))
              : ((m = e.find('.swiper-cube-shadow')),
                0 === m.length &&
                  ((m = d('<div class="swiper-cube-shadow"></div>')),
                  e.append(m))));
          for (let e = 0; e < a.length; e += 1) {
            const t = a.eq(e);
            let s = e;
            h && (s = parseInt(t.attr('data-swiper-slide-index'), 10));
            let r = 90 * s,
              n = Math.floor(r / 360);
            l && ((r = -r), (n = Math.floor(-r / 360)));
            const d = Math.max(Math.min(t[0].progress, 1), -1);
            let c = 0,
              m = 0,
              g = 0;
            s % 4 == 0
              ? ((c = 4 * -n * o), (g = 0))
              : (s - 1) % 4 == 0
              ? ((c = 0), (g = 4 * -n * o))
              : (s - 2) % 4 == 0
              ? ((c = o + 4 * n * o), (g = o))
              : (s - 3) % 4 == 0 && ((c = -o), (g = 3 * o + 4 * o * n)),
              l && (c = -c),
              u || ((m = c), (c = 0));
            const v = `rotateX(${u ? 0 : -r}deg) rotateY(${
              u ? r : 0
            }deg) translate3d(${c}px, ${m}px, ${g}px)`;
            d <= 1 &&
              d > -1 &&
              ((f = 90 * s + 90 * d), l && (f = 90 * -s - 90 * d)),
              t.transform(v),
              p.slideShadows && i(t, d, u);
          }
          if (
            (s.css({
              '-webkit-transform-origin': `50% 50% -${o / 2}px`,
              'transform-origin': `50% 50% -${o / 2}px`,
            }),
            p.shadow)
          )
            if (u)
              m.transform(
                `translate3d(0px, ${r / 2 + p.shadowOffset}px, ${
                  -r / 2
                }px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`
              );
            else {
              const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90),
                t =
                  1.5 -
                  (Math.sin((2 * e * Math.PI) / 360) / 2 +
                    Math.cos((2 * e * Math.PI) / 360) / 2),
                s = p.shadowScale,
                a = p.shadowScale / t,
                i = p.shadowOffset;
              m.transform(
                `scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${
                  -n / 2 / a
                }px) rotateX(-90deg)`
              );
            }
          const g = c.isSafari || c.isWebView ? -o / 2 : 0;
          s.transform(
            `translate3d(0px,0,${g}px) rotateX(${
              t.isHorizontal() ? 0 : f
            }deg) rotateY(${t.isHorizontal() ? -f : 0}deg)`
          ),
            s[0].style.setProperty('--swiper-cube-translate-z', `${g}px`);
        },
        setTransition: (e) => {
          const { $el: s, slides: a } = t;
          a
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
            t.params.cubeEffect.shadow &&
              !t.isHorizontal() &&
              s.find('.swiper-cube-shadow').transition(e);
        },
        recreateShadows: () => {
          const e = t.isHorizontal();
          t.slides.each((t) => {
            const s = Math.max(Math.min(t.progress, 1), -1);
            i(d(t), s, e);
          });
        },
        getEffectParams: () => t.params.cubeEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          resistanceRatio: 0,
          spaceBetween: 0,
          centeredSlides: !1,
          virtualTranslate: !0,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        flipEffect: { slideShadows: !0, limitRotation: !0, transformEl: null },
      });
      const i = (e, s, a) => {
        let i = t.isHorizontal()
            ? e.find('.swiper-slide-shadow-left')
            : e.find('.swiper-slide-shadow-top'),
          r = t.isHorizontal()
            ? e.find('.swiper-slide-shadow-right')
            : e.find('.swiper-slide-shadow-bottom');
        0 === i.length && (i = ie(a, e, t.isHorizontal() ? 'left' : 'top')),
          0 === r.length &&
            (r = ie(a, e, t.isHorizontal() ? 'right' : 'bottom')),
          i.length && (i[0].style.opacity = Math.max(-s, 0)),
          r.length && (r[0].style.opacity = Math.max(s, 0));
      };
      te({
        effect: 'flip',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, rtlTranslate: s } = t,
            a = t.params.flipEffect;
          for (let r = 0; r < e.length; r += 1) {
            const n = e.eq(r);
            let l = n[0].progress;
            t.params.flipEffect.limitRotation &&
              (l = Math.max(Math.min(n[0].progress, 1), -1));
            const o = n[0].swiperSlideOffset;
            let d = -180 * l,
              c = 0,
              p = t.params.cssMode ? -o - t.translate : -o,
              u = 0;
            t.isHorizontal()
              ? s && (d = -d)
              : ((u = p), (p = 0), (c = -d), (d = 0)),
              (n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length),
              a.slideShadows && i(n, l, a);
            const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
            se(a, n).transform(h);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.flipEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find(
              '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
            )
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s });
        },
        recreateShadows: () => {
          const e = t.params.flipEffect;
          t.slides.each((s) => {
            const a = d(s);
            let r = a[0].progress;
            t.params.flipEffect.limitRotation &&
              (r = Math.max(Math.min(s.progress, 1), -1)),
              i(a, r, e);
          });
        },
        getEffectParams: () => t.params.flipEffect,
        perspective: () => !0,
        overwriteParams: () => ({
          slidesPerView: 1,
          slidesPerGroup: 1,
          watchSlidesProgress: !0,
          spaceBetween: 0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          scale: 1,
          modifier: 1,
          slideShadows: !0,
          transformEl: null,
        },
      }),
        te({
          effect: 'coverflow',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { width: e, height: s, slides: a, slidesSizesGrid: i } = t,
              r = t.params.coverflowEffect,
              n = t.isHorizontal(),
              l = t.translate,
              o = n ? e / 2 - l : s / 2 - l,
              d = n ? r.rotate : -r.rotate,
              c = r.depth;
            for (let e = 0, t = a.length; e < t; e += 1) {
              const t = a.eq(e),
                s = i[e],
                l = (o - t[0].swiperSlideOffset - s / 2) / s,
                p =
                  'function' == typeof r.modifier
                    ? r.modifier(l)
                    : l * r.modifier;
              let u = n ? d * p : 0,
                h = n ? 0 : d * p,
                m = -c * Math.abs(p),
                f = r.stretch;
              'string' == typeof f &&
                -1 !== f.indexOf('%') &&
                (f = (parseFloat(r.stretch) / 100) * s);
              let g = n ? 0 : f * p,
                v = n ? f * p : 0,
                w = 1 - (1 - r.scale) * Math.abs(p);
              Math.abs(v) < 0.001 && (v = 0),
                Math.abs(g) < 0.001 && (g = 0),
                Math.abs(m) < 0.001 && (m = 0),
                Math.abs(u) < 0.001 && (u = 0),
                Math.abs(h) < 0.001 && (h = 0),
                Math.abs(w) < 0.001 && (w = 0);
              const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
              if (
                (se(r, t).transform(b),
                (t[0].style.zIndex = 1 - Math.abs(Math.round(p))),
                r.slideShadows)
              ) {
                let e = n
                    ? t.find('.swiper-slide-shadow-left')
                    : t.find('.swiper-slide-shadow-top'),
                  s = n
                    ? t.find('.swiper-slide-shadow-right')
                    : t.find('.swiper-slide-shadow-bottom');
                0 === e.length && (e = ie(r, t, n ? 'left' : 'top')),
                  0 === s.length && (s = ie(r, t, n ? 'right' : 'bottom')),
                  e.length && (e[0].style.opacity = p > 0 ? p : 0),
                  s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
              }
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.coverflowEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find(
                '.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left'
              )
              .transition(e);
          },
          perspective: () => !0,
          overwriteParams: () => ({ watchSlidesProgress: !0 }),
        });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({
        creativeEffect: {
          transformEl: null,
          limitProgress: 1,
          shadowPerProgress: !1,
          progressMultiplier: 1,
          perspective: !0,
          prev: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
          next: {
            translate: [0, 0, 0],
            rotate: [0, 0, 0],
            opacity: 1,
            scale: 1,
          },
        },
      });
      const i = (e) => ('string' == typeof e ? e : `${e}px`);
      te({
        effect: 'creative',
        swiper: t,
        on: a,
        setTranslate: () => {
          const { slides: e, $wrapperEl: s, slidesSizesGrid: a } = t,
            r = t.params.creativeEffect,
            { progressMultiplier: n } = r,
            l = t.params.centeredSlides;
          if (l) {
            const e = a[0] / 2 - t.params.slidesOffsetBefore || 0;
            s.transform(`translateX(calc(50% - ${e}px))`);
          }
          for (let s = 0; s < e.length; s += 1) {
            const a = e.eq(s),
              o = a[0].progress,
              d = Math.min(
                Math.max(a[0].progress, -r.limitProgress),
                r.limitProgress
              );
            let c = d;
            l ||
              (c = Math.min(
                Math.max(a[0].originalProgress, -r.limitProgress),
                r.limitProgress
              ));
            const p = a[0].swiperSlideOffset,
              u = [t.params.cssMode ? -p - t.translate : -p, 0, 0],
              h = [0, 0, 0];
            let m = !1;
            t.isHorizontal() || ((u[1] = u[0]), (u[0] = 0));
            let f = {
              translate: [0, 0, 0],
              rotate: [0, 0, 0],
              scale: 1,
              opacity: 1,
            };
            d < 0
              ? ((f = r.next), (m = !0))
              : d > 0 && ((f = r.prev), (m = !0)),
              u.forEach((e, t) => {
                u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(
                  d * n
                )}))`;
              }),
              h.forEach((e, t) => {
                h[t] = f.rotate[t] * Math.abs(d * n);
              }),
              (a[0].style.zIndex = -Math.abs(Math.round(o)) + e.length);
            const g = u.join(', '),
              v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`,
              w =
                c < 0
                  ? `scale(${1 + (1 - f.scale) * c * n})`
                  : `scale(${1 - (1 - f.scale) * c * n})`,
              b =
                c < 0
                  ? 1 + (1 - f.opacity) * c * n
                  : 1 - (1 - f.opacity) * c * n,
              x = `translate3d(${g}) ${v} ${w}`;
            if ((m && f.shadow) || !m) {
              let e = a.children('.swiper-slide-shadow');
              if ((0 === e.length && f.shadow && (e = ie(r, a)), e.length)) {
                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
              }
            }
            const y = se(r, a);
            y.transform(x).css({ opacity: b }),
              f.origin && y.css('transform-origin', f.origin);
          }
        },
        setTransition: (e) => {
          const { transformEl: s } = t.params.creativeEffect;
          (s ? t.slides.find(s) : t.slides)
            .transition(e)
            .find('.swiper-slide-shadow')
            .transition(e),
            ae({ swiper: t, duration: e, transformEl: s, allSlides: !0 });
        },
        perspective: () => t.params.creativeEffect.perspective,
        overwriteParams: () => ({
          watchSlidesProgress: !0,
          virtualTranslate: !t.params.cssMode,
        }),
      });
    },
    function (e) {
      let { swiper: t, extendParams: s, on: a } = e;
      s({ cardsEffect: { slideShadows: !0, transformEl: null, rotate: !0 } }),
        te({
          effect: 'cards',
          swiper: t,
          on: a,
          setTranslate: () => {
            const { slides: e, activeIndex: s } = t,
              a = t.params.cardsEffect,
              { startTranslate: i, isTouched: r } = t.touchEventsData,
              n = t.translate;
            for (let l = 0; l < e.length; l += 1) {
              const o = e.eq(l),
                d = o[0].progress,
                c = Math.min(Math.max(d, -4), 4);
              let p = o[0].swiperSlideOffset;
              t.params.centeredSlides &&
                !t.params.cssMode &&
                t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`),
                t.params.centeredSlides &&
                  t.params.cssMode &&
                  (p -= e[0].swiperSlideOffset);
              let u = t.params.cssMode ? -p - t.translate : -p,
                h = 0;
              const m = -100 * Math.abs(c);
              let f = 1,
                g = -2 * c,
                v = 8 - 0.75 * Math.abs(c);
              const w =
                  t.virtual && t.params.virtual.enabled
                    ? t.virtual.from + l
                    : l,
                b =
                  (w === s || w === s - 1) &&
                  c > 0 &&
                  c < 1 &&
                  (r || t.params.cssMode) &&
                  n < i,
                x =
                  (w === s || w === s + 1) &&
                  c < 0 &&
                  c > -1 &&
                  (r || t.params.cssMode) &&
                  n > i;
              if (b || x) {
                const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                (g += -28 * c * e),
                  (f += -0.5 * e),
                  (v += 96 * e),
                  (h = -25 * e * Math.abs(c) + '%');
              }
              if (
                ((u =
                  c < 0
                    ? `calc(${u}px + (${v * Math.abs(c)}%))`
                    : c > 0
                    ? `calc(${u}px + (-${v * Math.abs(c)}%))`
                    : `${u}px`),
                !t.isHorizontal())
              ) {
                const e = h;
                (h = u), (u = e);
              }
              const y = c < 0 ? '' + (1 + (1 - f) * c) : '' + (1 - (1 - f) * c),
                E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${
                  a.rotate ? g : 0
                }deg)\n        scale(${y})\n      `;
              if (a.slideShadows) {
                let e = o.find('.swiper-slide-shadow');
                0 === e.length && (e = ie(a, o)),
                  e.length &&
                    (e[0].style.opacity = Math.min(
                      Math.max((Math.abs(c) - 0.5) / 0.5, 0),
                      1
                    ));
              }
              o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
              se(a, o).transform(E);
            }
          },
          setTransition: (e) => {
            const { transformEl: s } = t.params.cardsEffect;
            (s ? t.slides.find(s) : t.slides)
              .transition(e)
              .find('.swiper-slide-shadow')
              .transition(e),
              ae({ swiper: t, duration: e, transformEl: s });
          },
          perspective: () => !0,
          overwriteParams: () => ({
            watchSlidesProgress: !0,
            virtualTranslate: !t.params.cssMode,
          }),
        });
    },
  ];
  return V.use(re), V;
});
//# sourceMappingURL=swiper-bundle.min.js.map

/*!
 * Datepicker for Bootstrap v1.9.0 (https://github.com/uxsolutions/bootstrap-datepicker)
 *
 * Licensed under the Apache License v2.0 (http://www.apache.org/licenses/LICENSE-2.0)
 */

!(function (a) {
  'function' == typeof define && define.amd
    ? define(['jquery'], a)
    : a('object' == typeof exports ? require('jquery') : jQuery);
})(function (a, b) {
  function c() {
    return new Date(Date.UTC.apply(Date, arguments));
  }
  function d() {
    var a = new Date();
    return c(a.getFullYear(), a.getMonth(), a.getDate());
  }
  function e(a, b) {
    return (
      a.getUTCFullYear() === b.getUTCFullYear() &&
      a.getUTCMonth() === b.getUTCMonth() &&
      a.getUTCDate() === b.getUTCDate()
    );
  }
  function f(c, d) {
    return function () {
      return (
        d !== b && a.fn.datepicker.deprecated(d), this[c].apply(this, arguments)
      );
    };
  }
  function g(a) {
    return a && !isNaN(a.getTime());
  }
  function h(b, c) {
    function d(a, b) {
      return b.toLowerCase();
    }
    var e,
      f = a(b).data(),
      g = {},
      h = new RegExp('^' + c.toLowerCase() + '([A-Z])');
    c = new RegExp('^' + c.toLowerCase());
    for (var i in f) c.test(i) && ((e = i.replace(h, d)), (g[e] = f[i]));
    return g;
  }
  function i(b) {
    var c = {};
    if (q[b] || ((b = b.split('-')[0]), q[b])) {
      var d = q[b];
      return (
        a.each(p, function (a, b) {
          b in d && (c[b] = d[b]);
        }),
        c
      );
    }
  }
  var j = (function () {
      var b = {
        get: function (a) {
          return this.slice(a)[0];
        },
        contains: function (a) {
          for (var b = a && a.valueOf(), c = 0, d = this.length; c < d; c++)
            if (0 <= this[c].valueOf() - b && this[c].valueOf() - b < 864e5)
              return c;
          return -1;
        },
        remove: function (a) {
          this.splice(a, 1);
        },
        replace: function (b) {
          b &&
            (a.isArray(b) || (b = [b]), this.clear(), this.push.apply(this, b));
        },
        clear: function () {
          this.length = 0;
        },
        copy: function () {
          var a = new j();
          return a.replace(this), a;
        },
      };
      return function () {
        var c = [];
        return c.push.apply(c, arguments), a.extend(c, b), c;
      };
    })(),
    k = function (b, c) {
      a.data(b, 'datepicker', this),
        (this._events = []),
        (this._secondaryEvents = []),
        this._process_options(c),
        (this.dates = new j()),
        (this.viewDate = this.o.defaultViewDate),
        (this.focusDate = null),
        (this.element = a(b)),
        (this.isInput = this.element.is('input')),
        (this.inputField = this.isInput
          ? this.element
          : this.element.find('input')),
        (this.component =
          !!this.element.hasClass('date') &&
          this.element.find(
            '.add-on, .input-group-addon, .input-group-append, .input-group-prepend, .btn'
          )),
        this.component && 0 === this.component.length && (this.component = !1),
        (this.isInline = !this.component && this.element.is('div')),
        (this.picker = a(r.template)),
        this._check_template(this.o.templates.leftArrow) &&
          this.picker.find('.prev').html(this.o.templates.leftArrow),
        this._check_template(this.o.templates.rightArrow) &&
          this.picker.find('.next').html(this.o.templates.rightArrow),
        this._buildEvents(),
        this._attachEvents(),
        this.isInline
          ? this.picker.addClass('datepicker-inline').appendTo(this.element)
          : this.picker.addClass('datepicker-dropdown dropdown-menu'),
        this.o.rtl && this.picker.addClass('datepicker-rtl'),
        this.o.calendarWeeks &&
          this.picker
            .find(
              '.datepicker-days .datepicker-switch, thead .datepicker-title, tfoot .today, tfoot .clear'
            )
            .attr('colspan', function (a, b) {
              return Number(b) + 1;
            }),
        this._process_options({
          startDate: this._o.startDate,
          endDate: this._o.endDate,
          daysOfWeekDisabled: this.o.daysOfWeekDisabled,
          daysOfWeekHighlighted: this.o.daysOfWeekHighlighted,
          datesDisabled: this.o.datesDisabled,
        }),
        (this._allow_update = !1),
        this.setViewMode(this.o.startView),
        (this._allow_update = !0),
        this.fillDow(),
        this.fillMonths(),
        this.update(),
        this.isInline && this.show();
    };
  k.prototype = {
    constructor: k,
    _resolveViewName: function (b) {
      return (
        a.each(r.viewModes, function (c, d) {
          if (b === c || -1 !== a.inArray(b, d.names)) return (b = c), !1;
        }),
        b
      );
    },
    _resolveDaysOfWeek: function (b) {
      return a.isArray(b) || (b = b.split(/[,\s]*/)), a.map(b, Number);
    },
    _check_template: function (c) {
      try {
        if (c === b || '' === c) return !1;
        if ((c.match(/[<>]/g) || []).length <= 0) return !0;
        return a(c).length > 0;
      } catch (a) {
        return !1;
      }
    },
    _process_options: function (b) {
      this._o = a.extend({}, this._o, b);
      var e = (this.o = a.extend({}, this._o)),
        f = e.language;
      q[f] || ((f = f.split('-')[0]), q[f] || (f = o.language)),
        (e.language = f),
        (e.startView = this._resolveViewName(e.startView)),
        (e.minViewMode = this._resolveViewName(e.minViewMode)),
        (e.maxViewMode = this._resolveViewName(e.maxViewMode)),
        (e.startView = Math.max(
          this.o.minViewMode,
          Math.min(this.o.maxViewMode, e.startView)
        )),
        !0 !== e.multidate &&
          ((e.multidate = Number(e.multidate) || !1),
          !1 !== e.multidate && (e.multidate = Math.max(0, e.multidate))),
        (e.multidateSeparator = String(e.multidateSeparator)),
        (e.weekStart %= 7),
        (e.weekEnd = (e.weekStart + 6) % 7);
      var g = r.parseFormat(e.format);
      e.startDate !== -1 / 0 &&
        (e.startDate
          ? e.startDate instanceof Date
            ? (e.startDate = this._local_to_utc(this._zero_time(e.startDate)))
            : (e.startDate = r.parseDate(
                e.startDate,
                g,
                e.language,
                e.assumeNearbyYear
              ))
          : (e.startDate = -1 / 0)),
        e.endDate !== 1 / 0 &&
          (e.endDate
            ? e.endDate instanceof Date
              ? (e.endDate = this._local_to_utc(this._zero_time(e.endDate)))
              : (e.endDate = r.parseDate(
                  e.endDate,
                  g,
                  e.language,
                  e.assumeNearbyYear
                ))
            : (e.endDate = 1 / 0)),
        (e.daysOfWeekDisabled = this._resolveDaysOfWeek(
          e.daysOfWeekDisabled || []
        )),
        (e.daysOfWeekHighlighted = this._resolveDaysOfWeek(
          e.daysOfWeekHighlighted || []
        )),
        (e.datesDisabled = e.datesDisabled || []),
        a.isArray(e.datesDisabled) ||
          (e.datesDisabled = e.datesDisabled.split(',')),
        (e.datesDisabled = a.map(e.datesDisabled, function (a) {
          return r.parseDate(a, g, e.language, e.assumeNearbyYear);
        }));
      var h = String(e.orientation).toLowerCase().split(/\s+/g),
        i = e.orientation.toLowerCase();
      if (
        ((h = a.grep(h, function (a) {
          return /^auto|left|right|top|bottom$/.test(a);
        })),
        (e.orientation = { x: 'auto', y: 'auto' }),
        i && 'auto' !== i)
      )
        if (1 === h.length)
          switch (h[0]) {
            case 'top':
            case 'bottom':
              e.orientation.y = h[0];
              break;
            case 'left':
            case 'right':
              e.orientation.x = h[0];
          }
        else
          (i = a.grep(h, function (a) {
            return /^left|right$/.test(a);
          })),
            (e.orientation.x = i[0] || 'auto'),
            (i = a.grep(h, function (a) {
              return /^top|bottom$/.test(a);
            })),
            (e.orientation.y = i[0] || 'auto');
      else;
      if (
        e.defaultViewDate instanceof Date ||
        'string' == typeof e.defaultViewDate
      )
        e.defaultViewDate = r.parseDate(
          e.defaultViewDate,
          g,
          e.language,
          e.assumeNearbyYear
        );
      else if (e.defaultViewDate) {
        var j = e.defaultViewDate.year || new Date().getFullYear(),
          k = e.defaultViewDate.month || 0,
          l = e.defaultViewDate.day || 1;
        e.defaultViewDate = c(j, k, l);
      } else e.defaultViewDate = d();
    },
    _applyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        (c = a[f][0]),
          2 === a[f].length
            ? ((d = b), (e = a[f][1]))
            : 3 === a[f].length && ((d = a[f][1]), (e = a[f][2])),
          c.on(e, d);
    },
    _unapplyEvents: function (a) {
      for (var c, d, e, f = 0; f < a.length; f++)
        (c = a[f][0]),
          2 === a[f].length
            ? ((e = b), (d = a[f][1]))
            : 3 === a[f].length && ((e = a[f][1]), (d = a[f][2])),
          c.off(d, e);
    },
    _buildEvents: function () {
      var b = {
        keyup: a.proxy(function (b) {
          -1 === a.inArray(b.keyCode, [27, 37, 39, 38, 40, 32, 13, 9]) &&
            this.update();
        }, this),
        keydown: a.proxy(this.keydown, this),
        paste: a.proxy(this.paste, this),
      };
      !0 === this.o.showOnFocus && (b.focus = a.proxy(this.show, this)),
        this.isInput
          ? (this._events = [[this.element, b]])
          : this.component && this.inputField.length
          ? (this._events = [
              [this.inputField, b],
              [this.component, { click: a.proxy(this.show, this) }],
            ])
          : (this._events = [
              [
                this.element,
                {
                  click: a.proxy(this.show, this),
                  keydown: a.proxy(this.keydown, this),
                },
              ],
            ]),
        this._events.push(
          [
            this.element,
            '*',
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ],
          [
            this.element,
            {
              blur: a.proxy(function (a) {
                this._focused_from = a.target;
              }, this),
            },
          ]
        ),
        this.o.immediateUpdates &&
          this._events.push([
            this.element,
            {
              'changeYear changeMonth': a.proxy(function (a) {
                this.update(a.date);
              }, this),
            },
          ]),
        (this._secondaryEvents = [
          [this.picker, { click: a.proxy(this.click, this) }],
          [
            this.picker,
            '.prev, .next',
            { click: a.proxy(this.navArrowsClick, this) },
          ],
          [
            this.picker,
            '.day:not(.disabled)',
            { click: a.proxy(this.dayCellClick, this) },
          ],
          [a(window), { resize: a.proxy(this.place, this) }],
          [
            a(document),
            {
              'mousedown touchstart': a.proxy(function (a) {
                this.element.is(a.target) ||
                  this.element.find(a.target).length ||
                  this.picker.is(a.target) ||
                  this.picker.find(a.target).length ||
                  this.isInline ||
                  this.hide();
              }, this),
            },
          ],
        ]);
    },
    _attachEvents: function () {
      this._detachEvents(), this._applyEvents(this._events);
    },
    _detachEvents: function () {
      this._unapplyEvents(this._events);
    },
    _attachSecondaryEvents: function () {
      this._detachSecondaryEvents(), this._applyEvents(this._secondaryEvents);
    },
    _detachSecondaryEvents: function () {
      this._unapplyEvents(this._secondaryEvents);
    },
    _trigger: function (b, c) {
      var d = c || this.dates.get(-1),
        e = this._utc_to_local(d);
      this.element.trigger({
        type: b,
        date: e,
        viewMode: this.viewMode,
        dates: a.map(this.dates, this._utc_to_local),
        format: a.proxy(function (a, b) {
          0 === arguments.length
            ? ((a = this.dates.length - 1), (b = this.o.format))
            : 'string' == typeof a && ((b = a), (a = this.dates.length - 1)),
            (b = b || this.o.format);
          var c = this.dates.get(a);
          return r.formatDate(c, b, this.o.language);
        }, this),
      });
    },
    show: function () {
      if (
        !(
          this.inputField.is(':disabled') ||
          (this.inputField.prop('readonly') && !1 === this.o.enableOnReadonly)
        )
      )
        return (
          this.isInline || this.picker.appendTo(this.o.container),
          this.place(),
          this.picker.show(),
          this._attachSecondaryEvents(),
          this._trigger('show'),
          (window.navigator.msMaxTouchPoints || 'ontouchstart' in document) &&
            this.o.disableTouchKeyboard &&
            a(this.element).blur(),
          this
        );
    },
    hide: function () {
      return this.isInline || !this.picker.is(':visible')
        ? this
        : ((this.focusDate = null),
          this.picker.hide().detach(),
          this._detachSecondaryEvents(),
          this.setViewMode(this.o.startView),
          this.o.forceParse && this.inputField.val() && this.setValue(),
          this._trigger('hide'),
          this);
    },
    destroy: function () {
      return (
        this.hide(),
        this._detachEvents(),
        this._detachSecondaryEvents(),
        this.picker.remove(),
        delete this.element.data().datepicker,
        this.isInput || delete this.element.data().date,
        this
      );
    },
    paste: function (b) {
      var c;
      if (
        b.originalEvent.clipboardData &&
        b.originalEvent.clipboardData.types &&
        -1 !== a.inArray('text/plain', b.originalEvent.clipboardData.types)
      )
        c = b.originalEvent.clipboardData.getData('text/plain');
      else {
        if (!window.clipboardData) return;
        c = window.clipboardData.getData('Text');
      }
      this.setDate(c), this.update(), b.preventDefault();
    },
    _utc_to_local: function (a) {
      if (!a) return a;
      var b = new Date(a.getTime() + 6e4 * a.getTimezoneOffset());
      return (
        b.getTimezoneOffset() !== a.getTimezoneOffset() &&
          (b = new Date(a.getTime() + 6e4 * b.getTimezoneOffset())),
        b
      );
    },
    _local_to_utc: function (a) {
      return a && new Date(a.getTime() - 6e4 * a.getTimezoneOffset());
    },
    _zero_time: function (a) {
      return a && new Date(a.getFullYear(), a.getMonth(), a.getDate());
    },
    _zero_utc_time: function (a) {
      return a && c(a.getUTCFullYear(), a.getUTCMonth(), a.getUTCDate());
    },
    getDates: function () {
      return a.map(this.dates, this._utc_to_local);
    },
    getUTCDates: function () {
      return a.map(this.dates, function (a) {
        return new Date(a);
      });
    },
    getDate: function () {
      return this._utc_to_local(this.getUTCDate());
    },
    getUTCDate: function () {
      var a = this.dates.get(-1);
      return a !== b ? new Date(a) : null;
    },
    clearDates: function () {
      this.inputField.val(''),
        this.update(),
        this._trigger('changeDate'),
        this.o.autoclose && this.hide();
    },
    setDates: function () {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return (
        this.update.apply(this, b),
        this._trigger('changeDate'),
        this.setValue(),
        this
      );
    },
    setUTCDates: function () {
      var b = a.isArray(arguments[0]) ? arguments[0] : arguments;
      return this.setDates.apply(this, a.map(b, this._utc_to_local)), this;
    },
    setDate: f('setDates'),
    setUTCDate: f('setUTCDates'),
    remove: f(
      'destroy',
      'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'
    ),
    setValue: function () {
      var a = this.getFormattedDate();
      return this.inputField.val(a), this;
    },
    getFormattedDate: function (c) {
      c === b && (c = this.o.format);
      var d = this.o.language;
      return a
        .map(this.dates, function (a) {
          return r.formatDate(a, c, d);
        })
        .join(this.o.multidateSeparator);
    },
    getStartDate: function () {
      return this.o.startDate;
    },
    setStartDate: function (a) {
      return (
        this._process_options({ startDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    getEndDate: function () {
      return this.o.endDate;
    },
    setEndDate: function (a) {
      return (
        this._process_options({ endDate: a }),
        this.update(),
        this.updateNavArrows(),
        this
      );
    },
    setDaysOfWeekDisabled: function (a) {
      return (
        this._process_options({ daysOfWeekDisabled: a }), this.update(), this
      );
    },
    setDaysOfWeekHighlighted: function (a) {
      return (
        this._process_options({ daysOfWeekHighlighted: a }), this.update(), this
      );
    },
    setDatesDisabled: function (a) {
      return this._process_options({ datesDisabled: a }), this.update(), this;
    },
    place: function () {
      if (this.isInline) return this;
      var b = this.picker.outerWidth(),
        c = this.picker.outerHeight(),
        d = a(this.o.container),
        e = d.width(),
        f =
          'body' === this.o.container ? a(document).scrollTop() : d.scrollTop(),
        g = d.offset(),
        h = [0];
      this.element.parents().each(function () {
        var b = a(this).css('z-index');
        'auto' !== b && 0 !== Number(b) && h.push(Number(b));
      });
      var i = Math.max.apply(Math, h) + this.o.zIndexOffset,
        j = this.component
          ? this.component.parent().offset()
          : this.element.offset(),
        k = this.component
          ? this.component.outerHeight(!0)
          : this.element.outerHeight(!1),
        l = this.component
          ? this.component.outerWidth(!0)
          : this.element.outerWidth(!1),
        m = j.left - g.left,
        n = j.top - g.top;
      'body' !== this.o.container && (n += f),
        this.picker.removeClass(
          'datepicker-orient-top datepicker-orient-bottom datepicker-orient-right datepicker-orient-left'
        ),
        'auto' !== this.o.orientation.x
          ? (this.picker.addClass('datepicker-orient-' + this.o.orientation.x),
            'right' === this.o.orientation.x && (m -= b - l))
          : j.left < 0
          ? (this.picker.addClass('datepicker-orient-left'), (m -= j.left - 10))
          : m + b > e
          ? (this.picker.addClass('datepicker-orient-right'), (m += l - b))
          : this.o.rtl
          ? this.picker.addClass('datepicker-orient-right')
          : this.picker.addClass('datepicker-orient-left');
      var o,
        p = this.o.orientation.y;
      if (
        ('auto' === p && ((o = -f + n - c), (p = o < 0 ? 'bottom' : 'top')),
        this.picker.addClass('datepicker-orient-' + p),
        'top' === p
          ? (n -= c + parseInt(this.picker.css('padding-top')))
          : (n += k),
        this.o.rtl)
      ) {
        var q = e - (m + l);
        this.picker.css({ top: n, right: q, zIndex: i });
      } else this.picker.css({ top: n, left: m, zIndex: i });
      return this;
    },
    _allow_update: !0,
    update: function () {
      if (!this._allow_update) return this;
      var b = this.dates.copy(),
        c = [],
        d = !1;
      return (
        arguments.length
          ? (a.each(
              arguments,
              a.proxy(function (a, b) {
                b instanceof Date && (b = this._local_to_utc(b)), c.push(b);
              }, this)
            ),
            (d = !0))
          : ((c = this.isInput
              ? this.element.val()
              : this.element.data('date') || this.inputField.val()),
            (c =
              c && this.o.multidate ? c.split(this.o.multidateSeparator) : [c]),
            delete this.element.data().date),
        (c = a.map(
          c,
          a.proxy(function (a) {
            return r.parseDate(
              a,
              this.o.format,
              this.o.language,
              this.o.assumeNearbyYear
            );
          }, this)
        )),
        (c = a.grep(
          c,
          a.proxy(function (a) {
            return !this.dateWithinRange(a) || !a;
          }, this),
          !0
        )),
        this.dates.replace(c),
        this.o.updateViewDate &&
          (this.dates.length
            ? (this.viewDate = new Date(this.dates.get(-1)))
            : this.viewDate < this.o.startDate
            ? (this.viewDate = new Date(this.o.startDate))
            : this.viewDate > this.o.endDate
            ? (this.viewDate = new Date(this.o.endDate))
            : (this.viewDate = this.o.defaultViewDate)),
        d
          ? (this.setValue(), this.element.change())
          : this.dates.length &&
            String(b) !== String(this.dates) &&
            d &&
            (this._trigger('changeDate'), this.element.change()),
        !this.dates.length &&
          b.length &&
          (this._trigger('clearDate'), this.element.change()),
        this.fill(),
        this
      );
    },
    fillDow: function () {
      if (this.o.showWeekDays) {
        var b = this.o.weekStart,
          c = '<tr>';
        for (
          this.o.calendarWeeks && (c += '<th class="cw">&#160;</th>');
          b < this.o.weekStart + 7;

        )
          (c += '<th class="dow'),
            -1 !== a.inArray(b, this.o.daysOfWeekDisabled) &&
              (c += ' disabled'),
            (c += '">' + q[this.o.language].daysMin[b++ % 7] + '</th>');
        (c += '</tr>'), this.picker.find('.datepicker-days thead').append(c);
      }
    },
    fillMonths: function () {
      for (
        var a, b = this._utc_to_local(this.viewDate), c = '', d = 0;
        d < 12;
        d++
      )
        (a = b && b.getMonth() === d ? ' focused' : ''),
          (c +=
            '<span class="month' +
            a +
            '">' +
            q[this.o.language].monthsShort[d] +
            '</span>');
      this.picker.find('.datepicker-months td').html(c);
    },
    setRange: function (b) {
      b && b.length
        ? (this.range = a.map(b, function (a) {
            return a.valueOf();
          }))
        : delete this.range,
        this.fill();
    },
    getClassNames: function (b) {
      var c = [],
        f = this.viewDate.getUTCFullYear(),
        g = this.viewDate.getUTCMonth(),
        h = d();
      return (
        b.getUTCFullYear() < f ||
        (b.getUTCFullYear() === f && b.getUTCMonth() < g)
          ? c.push('old')
          : (b.getUTCFullYear() > f ||
              (b.getUTCFullYear() === f && b.getUTCMonth() > g)) &&
            c.push('new'),
        this.focusDate &&
          b.valueOf() === this.focusDate.valueOf() &&
          c.push('focused'),
        this.o.todayHighlight && e(b, h) && c.push('today'),
        -1 !== this.dates.contains(b) && c.push('active'),
        this.dateWithinRange(b) || c.push('disabled'),
        this.dateIsDisabled(b) && c.push('disabled', 'disabled-date'),
        -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekHighlighted) &&
          c.push('highlighted'),
        this.range &&
          (b > this.range[0] &&
            b < this.range[this.range.length - 1] &&
            c.push('range'),
          -1 !== a.inArray(b.valueOf(), this.range) && c.push('selected'),
          b.valueOf() === this.range[0] && c.push('range-start'),
          b.valueOf() === this.range[this.range.length - 1] &&
            c.push('range-end')),
        c
      );
    },
    _fill_yearsView: function (c, d, e, f, g, h, i) {
      for (
        var j,
          k,
          l,
          m = '',
          n = e / 10,
          o = this.picker.find(c),
          p = Math.floor(f / e) * e,
          q = p + 9 * n,
          r = Math.floor(this.viewDate.getFullYear() / n) * n,
          s = a.map(this.dates, function (a) {
            return Math.floor(a.getUTCFullYear() / n) * n;
          }),
          t = p - n;
        t <= q + n;
        t += n
      )
        (j = [d]),
          (k = null),
          t === p - n ? j.push('old') : t === q + n && j.push('new'),
          -1 !== a.inArray(t, s) && j.push('active'),
          (t < g || t > h) && j.push('disabled'),
          t === r && j.push('focused'),
          i !== a.noop &&
            ((l = i(new Date(t, 0, 1))),
            l === b
              ? (l = {})
              : 'boolean' == typeof l
              ? (l = { enabled: l })
              : 'string' == typeof l && (l = { classes: l }),
            !1 === l.enabled && j.push('disabled'),
            l.classes && (j = j.concat(l.classes.split(/\s+/))),
            l.tooltip && (k = l.tooltip)),
          (m +=
            '<span class="' +
            j.join(' ') +
            '"' +
            (k ? ' title="' + k + '"' : '') +
            '>' +
            t +
            '</span>');
      o.find('.datepicker-switch').text(p + '-' + q), o.find('td').html(m);
    },
    fill: function () {
      var e,
        f,
        g = new Date(this.viewDate),
        h = g.getUTCFullYear(),
        i = g.getUTCMonth(),
        j =
          this.o.startDate !== -1 / 0
            ? this.o.startDate.getUTCFullYear()
            : -1 / 0,
        k =
          this.o.startDate !== -1 / 0 ? this.o.startDate.getUTCMonth() : -1 / 0,
        l = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
        m = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
        n = q[this.o.language].today || q.en.today || '',
        o = q[this.o.language].clear || q.en.clear || '',
        p = q[this.o.language].titleFormat || q.en.titleFormat,
        s = d(),
        t =
          (!0 === this.o.todayBtn || 'linked' === this.o.todayBtn) &&
          s >= this.o.startDate &&
          s <= this.o.endDate &&
          !this.weekOfDateIsDisabled(s);
      if (!isNaN(h) && !isNaN(i)) {
        this.picker
          .find('.datepicker-days .datepicker-switch')
          .text(r.formatDate(g, p, this.o.language)),
          this.picker
            .find('tfoot .today')
            .text(n)
            .css('display', t ? 'table-cell' : 'none'),
          this.picker
            .find('tfoot .clear')
            .text(o)
            .css('display', !0 === this.o.clearBtn ? 'table-cell' : 'none'),
          this.picker
            .find('thead .datepicker-title')
            .text(this.o.title)
            .css(
              'display',
              'string' == typeof this.o.title && '' !== this.o.title
                ? 'table-cell'
                : 'none'
            ),
          this.updateNavArrows(),
          this.fillMonths();
        var u = c(h, i, 0),
          v = u.getUTCDate();
        u.setUTCDate(v - ((u.getUTCDay() - this.o.weekStart + 7) % 7));
        var w = new Date(u);
        u.getUTCFullYear() < 100 && w.setUTCFullYear(u.getUTCFullYear()),
          w.setUTCDate(w.getUTCDate() + 42),
          (w = w.valueOf());
        for (var x, y, z = []; u.valueOf() < w; ) {
          if (
            (x = u.getUTCDay()) === this.o.weekStart &&
            (z.push('<tr>'), this.o.calendarWeeks)
          ) {
            var A = new Date(+u + ((this.o.weekStart - x - 7) % 7) * 864e5),
              B = new Date(Number(A) + ((11 - A.getUTCDay()) % 7) * 864e5),
              C = new Date(
                Number((C = c(B.getUTCFullYear(), 0, 1))) +
                  ((11 - C.getUTCDay()) % 7) * 864e5
              ),
              D = (B - C) / 864e5 / 7 + 1;
            z.push('<td class="cw">' + D + '</td>');
          }
          (y = this.getClassNames(u)), y.push('day');
          var E = u.getUTCDate();
          this.o.beforeShowDay !== a.noop &&
            ((f = this.o.beforeShowDay(this._utc_to_local(u))),
            f === b
              ? (f = {})
              : 'boolean' == typeof f
              ? (f = { enabled: f })
              : 'string' == typeof f && (f = { classes: f }),
            !1 === f.enabled && y.push('disabled'),
            f.classes && (y = y.concat(f.classes.split(/\s+/))),
            f.tooltip && (e = f.tooltip),
            f.content && (E = f.content)),
            (y = a.isFunction(a.uniqueSort) ? a.uniqueSort(y) : a.unique(y)),
            z.push(
              '<td class="' +
                y.join(' ') +
                '"' +
                (e ? ' title="' + e + '"' : '') +
                ' data-date="' +
                u.getTime().toString() +
                '">' +
                E +
                '</td>'
            ),
            (e = null),
            x === this.o.weekEnd && z.push('</tr>'),
            u.setUTCDate(u.getUTCDate() + 1);
        }
        this.picker.find('.datepicker-days tbody').html(z.join(''));
        var F = q[this.o.language].monthsTitle || q.en.monthsTitle || 'Months',
          G = this.picker
            .find('.datepicker-months')
            .find('.datepicker-switch')
            .text(this.o.maxViewMode < 2 ? F : h)
            .end()
            .find('tbody span')
            .removeClass('active');
        if (
          (a.each(this.dates, function (a, b) {
            b.getUTCFullYear() === h &&
              G.eq(b.getUTCMonth()).addClass('active');
          }),
          (h < j || h > l) && G.addClass('disabled'),
          h === j && G.slice(0, k).addClass('disabled'),
          h === l && G.slice(m + 1).addClass('disabled'),
          this.o.beforeShowMonth !== a.noop)
        ) {
          var H = this;
          a.each(G, function (c, d) {
            var e = new Date(h, c, 1),
              f = H.o.beforeShowMonth(e);
            f === b
              ? (f = {})
              : 'boolean' == typeof f
              ? (f = { enabled: f })
              : 'string' == typeof f && (f = { classes: f }),
              !1 !== f.enabled ||
                a(d).hasClass('disabled') ||
                a(d).addClass('disabled'),
              f.classes && a(d).addClass(f.classes),
              f.tooltip && a(d).prop('title', f.tooltip);
          });
        }
        this._fill_yearsView(
          '.datepicker-years',
          'year',
          10,
          h,
          j,
          l,
          this.o.beforeShowYear
        ),
          this._fill_yearsView(
            '.datepicker-decades',
            'decade',
            100,
            h,
            j,
            l,
            this.o.beforeShowDecade
          ),
          this._fill_yearsView(
            '.datepicker-centuries',
            'century',
            1e3,
            h,
            j,
            l,
            this.o.beforeShowCentury
          );
      }
    },
    updateNavArrows: function () {
      if (this._allow_update) {
        var a,
          b,
          c = new Date(this.viewDate),
          d = c.getUTCFullYear(),
          e = c.getUTCMonth(),
          f =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCFullYear()
              : -1 / 0,
          g =
            this.o.startDate !== -1 / 0
              ? this.o.startDate.getUTCMonth()
              : -1 / 0,
          h =
            this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCFullYear() : 1 / 0,
          i = this.o.endDate !== 1 / 0 ? this.o.endDate.getUTCMonth() : 1 / 0,
          j = 1;
        switch (this.viewMode) {
          case 4:
            j *= 10;
          case 3:
            j *= 10;
          case 2:
            j *= 10;
          case 1:
            (a = Math.floor(d / j) * j <= f),
              (b = Math.floor(d / j) * j + j > h);
            break;
          case 0:
            (a = d <= f && e <= g), (b = d >= h && e >= i);
        }
        this.picker.find('.prev').toggleClass('disabled', a),
          this.picker.find('.next').toggleClass('disabled', b);
      }
    },
    click: function (b) {
      b.preventDefault(), b.stopPropagation();
      var e, f, g, h;
      (e = a(b.target)),
        e.hasClass('datepicker-switch') &&
          this.viewMode !== this.o.maxViewMode &&
          this.setViewMode(this.viewMode + 1),
        e.hasClass('today') &&
          !e.hasClass('day') &&
          (this.setViewMode(0),
          this._setDate(d(), 'linked' === this.o.todayBtn ? null : 'view')),
        e.hasClass('clear') && this.clearDates(),
        e.hasClass('disabled') ||
          ((e.hasClass('month') ||
            e.hasClass('year') ||
            e.hasClass('decade') ||
            e.hasClass('century')) &&
            (this.viewDate.setUTCDate(1),
            (f = 1),
            1 === this.viewMode
              ? ((h = e.parent().find('span').index(e)),
                (g = this.viewDate.getUTCFullYear()),
                this.viewDate.setUTCMonth(h))
              : ((h = 0),
                (g = Number(e.text())),
                this.viewDate.setUTCFullYear(g)),
            this._trigger(r.viewModes[this.viewMode - 1].e, this.viewDate),
            this.viewMode === this.o.minViewMode
              ? this._setDate(c(g, h, f))
              : (this.setViewMode(this.viewMode - 1), this.fill()))),
        this.picker.is(':visible') &&
          this._focused_from &&
          this._focused_from.focus(),
        delete this._focused_from;
    },
    dayCellClick: function (b) {
      var c = a(b.currentTarget),
        d = c.data('date'),
        e = new Date(d);
      this.o.updateViewDate &&
        (e.getUTCFullYear() !== this.viewDate.getUTCFullYear() &&
          this._trigger('changeYear', this.viewDate),
        e.getUTCMonth() !== this.viewDate.getUTCMonth() &&
          this._trigger('changeMonth', this.viewDate)),
        this._setDate(e);
    },
    navArrowsClick: function (b) {
      var c = a(b.currentTarget),
        d = c.hasClass('prev') ? -1 : 1;
      0 !== this.viewMode && (d *= 12 * r.viewModes[this.viewMode].navStep),
        (this.viewDate = this.moveMonth(this.viewDate, d)),
        this._trigger(r.viewModes[this.viewMode].e, this.viewDate),
        this.fill();
    },
    _toggle_multidate: function (a) {
      var b = this.dates.contains(a);
      if (
        (a || this.dates.clear(),
        -1 !== b
          ? (!0 === this.o.multidate ||
              this.o.multidate > 1 ||
              this.o.toggleActive) &&
            this.dates.remove(b)
          : !1 === this.o.multidate
          ? (this.dates.clear(), this.dates.push(a))
          : this.dates.push(a),
        'number' == typeof this.o.multidate)
      )
        for (; this.dates.length > this.o.multidate; ) this.dates.remove(0);
    },
    _setDate: function (a, b) {
      (b && 'date' !== b) || this._toggle_multidate(a && new Date(a)),
        ((!b && this.o.updateViewDate) || 'view' === b) &&
          (this.viewDate = a && new Date(a)),
        this.fill(),
        this.setValue(),
        (b && 'view' === b) || this._trigger('changeDate'),
        this.inputField.trigger('change'),
        !this.o.autoclose || (b && 'date' !== b) || this.hide();
    },
    moveDay: function (a, b) {
      var c = new Date(a);
      return c.setUTCDate(a.getUTCDate() + b), c;
    },
    moveWeek: function (a, b) {
      return this.moveDay(a, 7 * b);
    },
    moveMonth: function (a, b) {
      if (!g(a)) return this.o.defaultViewDate;
      if (!b) return a;
      var c,
        d,
        e = new Date(a.valueOf()),
        f = e.getUTCDate(),
        h = e.getUTCMonth(),
        i = Math.abs(b);
      if (((b = b > 0 ? 1 : -1), 1 === i))
        (d =
          -1 === b
            ? function () {
                return e.getUTCMonth() === h;
              }
            : function () {
                return e.getUTCMonth() !== c;
              }),
          (c = h + b),
          e.setUTCMonth(c),
          (c = (c + 12) % 12);
      else {
        for (var j = 0; j < i; j++) e = this.moveMonth(e, b);
        (c = e.getUTCMonth()),
          e.setUTCDate(f),
          (d = function () {
            return c !== e.getUTCMonth();
          });
      }
      for (; d(); ) e.setUTCDate(--f), e.setUTCMonth(c);
      return e;
    },
    moveYear: function (a, b) {
      return this.moveMonth(a, 12 * b);
    },
    moveAvailableDate: function (a, b, c) {
      do {
        if (((a = this[c](a, b)), !this.dateWithinRange(a))) return !1;
        c = 'moveDay';
      } while (this.dateIsDisabled(a));
      return a;
    },
    weekOfDateIsDisabled: function (b) {
      return -1 !== a.inArray(b.getUTCDay(), this.o.daysOfWeekDisabled);
    },
    dateIsDisabled: function (b) {
      return (
        this.weekOfDateIsDisabled(b) ||
        a.grep(this.o.datesDisabled, function (a) {
          return e(b, a);
        }).length > 0
      );
    },
    dateWithinRange: function (a) {
      return a >= this.o.startDate && a <= this.o.endDate;
    },
    keydown: function (a) {
      if (!this.picker.is(':visible'))
        return void (
          (40 !== a.keyCode && 27 !== a.keyCode) ||
          (this.show(), a.stopPropagation())
        );
      var b,
        c,
        d = !1,
        e = this.focusDate || this.viewDate;
      switch (a.keyCode) {
        case 27:
          this.focusDate
            ? ((this.focusDate = null),
              (this.viewDate = this.dates.get(-1) || this.viewDate),
              this.fill())
            : this.hide(),
            a.preventDefault(),
            a.stopPropagation();
          break;
        case 37:
        case 38:
        case 39:
        case 40:
          if (
            !this.o.keyboardNavigation ||
            7 === this.o.daysOfWeekDisabled.length
          )
            break;
          (b = 37 === a.keyCode || 38 === a.keyCode ? -1 : 1),
            0 === this.viewMode
              ? a.ctrlKey
                ? (c = this.moveAvailableDate(e, b, 'moveYear')) &&
                  this._trigger('changeYear', this.viewDate)
                : a.shiftKey
                ? (c = this.moveAvailableDate(e, b, 'moveMonth')) &&
                  this._trigger('changeMonth', this.viewDate)
                : 37 === a.keyCode || 39 === a.keyCode
                ? (c = this.moveAvailableDate(e, b, 'moveDay'))
                : this.weekOfDateIsDisabled(e) ||
                  (c = this.moveAvailableDate(e, b, 'moveWeek'))
              : 1 === this.viewMode
              ? ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                (c = this.moveAvailableDate(e, b, 'moveMonth')))
              : 2 === this.viewMode &&
                ((38 !== a.keyCode && 40 !== a.keyCode) || (b *= 4),
                (c = this.moveAvailableDate(e, b, 'moveYear'))),
            c &&
              ((this.focusDate = this.viewDate = c),
              this.setValue(),
              this.fill(),
              a.preventDefault());
          break;
        case 13:
          if (!this.o.forceParse) break;
          (e = this.focusDate || this.dates.get(-1) || this.viewDate),
            this.o.keyboardNavigation && (this._toggle_multidate(e), (d = !0)),
            (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.setValue(),
            this.fill(),
            this.picker.is(':visible') &&
              (a.preventDefault(),
              a.stopPropagation(),
              this.o.autoclose && this.hide());
          break;
        case 9:
          (this.focusDate = null),
            (this.viewDate = this.dates.get(-1) || this.viewDate),
            this.fill(),
            this.hide();
      }
      d &&
        (this.dates.length
          ? this._trigger('changeDate')
          : this._trigger('clearDate'),
        this.inputField.trigger('change'));
    },
    setViewMode: function (a) {
      (this.viewMode = a),
        this.picker
          .children('div')
          .hide()
          .filter('.datepicker-' + r.viewModes[this.viewMode].clsName)
          .show(),
        this.updateNavArrows(),
        this._trigger('changeViewMode', new Date(this.viewDate));
    },
  };
  var l = function (b, c) {
    a.data(b, 'datepicker', this),
      (this.element = a(b)),
      (this.inputs = a.map(c.inputs, function (a) {
        return a.jquery ? a[0] : a;
      })),
      delete c.inputs,
      (this.keepEmptyValues = c.keepEmptyValues),
      delete c.keepEmptyValues,
      n
        .call(a(this.inputs), c)
        .on('changeDate', a.proxy(this.dateUpdated, this)),
      (this.pickers = a.map(this.inputs, function (b) {
        return a.data(b, 'datepicker');
      })),
      this.updateDates();
  };
  l.prototype = {
    updateDates: function () {
      (this.dates = a.map(this.pickers, function (a) {
        return a.getUTCDate();
      })),
        this.updateRanges();
    },
    updateRanges: function () {
      var b = a.map(this.dates, function (a) {
        return a.valueOf();
      });
      a.each(this.pickers, function (a, c) {
        c.setRange(b);
      });
    },
    clearDates: function () {
      a.each(this.pickers, function (a, b) {
        b.clearDates();
      });
    },
    dateUpdated: function (c) {
      if (!this.updating) {
        this.updating = !0;
        var d = a.data(c.target, 'datepicker');
        if (d !== b) {
          var e = d.getUTCDate(),
            f = this.keepEmptyValues,
            g = a.inArray(c.target, this.inputs),
            h = g - 1,
            i = g + 1,
            j = this.inputs.length;
          if (-1 !== g) {
            if (
              (a.each(this.pickers, function (a, b) {
                b.getUTCDate() || (b !== d && f) || b.setUTCDate(e);
              }),
              e < this.dates[h])
            )
              for (; h >= 0 && e < this.dates[h]; )
                this.pickers[h--].setUTCDate(e);
            else if (e > this.dates[i])
              for (; i < j && e > this.dates[i]; )
                this.pickers[i++].setUTCDate(e);
            this.updateDates(), delete this.updating;
          }
        }
      }
    },
    destroy: function () {
      a.map(this.pickers, function (a) {
        a.destroy();
      }),
        a(this.inputs).off('changeDate', this.dateUpdated),
        delete this.element.data().datepicker;
    },
    remove: f(
      'destroy',
      'Method `remove` is deprecated and will be removed in version 2.0. Use `destroy` instead'
    ),
  };
  var m = a.fn.datepicker,
    n = function (c) {
      var d = Array.apply(null, arguments);
      d.shift();
      var e;
      if (
        (this.each(function () {
          var b = a(this),
            f = b.data('datepicker'),
            g = 'object' == typeof c && c;
          if (!f) {
            var j = h(this, 'date'),
              m = a.extend({}, o, j, g),
              n = i(m.language),
              p = a.extend({}, o, n, j, g);
            b.hasClass('input-daterange') || p.inputs
              ? (a.extend(p, { inputs: p.inputs || b.find('input').toArray() }),
                (f = new l(this, p)))
              : (f = new k(this, p)),
              b.data('datepicker', f);
          }
          'string' == typeof c &&
            'function' == typeof f[c] &&
            (e = f[c].apply(f, d));
        }),
        e === b || e instanceof k || e instanceof l)
      )
        return this;
      if (this.length > 1)
        throw new Error(
          'Using only allowed for the collection of a single element (' +
            c +
            ' function)'
        );
      return e;
    };
  a.fn.datepicker = n;
  var o = (a.fn.datepicker.defaults = {
      assumeNearbyYear: !1,
      autoclose: !1,
      beforeShowDay: a.noop,
      beforeShowMonth: a.noop,
      beforeShowYear: a.noop,
      beforeShowDecade: a.noop,
      beforeShowCentury: a.noop,
      calendarWeeks: !1,
      clearBtn: !1,
      toggleActive: !1,
      daysOfWeekDisabled: [],
      daysOfWeekHighlighted: [],
      datesDisabled: [],
      endDate: 1 / 0,
      forceParse: !0,
      format: 'mm/dd/yyyy',
      keepEmptyValues: !1,
      keyboardNavigation: !0,
      language: 'en',
      minViewMode: 0,
      maxViewMode: 4,
      multidate: !1,
      multidateSeparator: ',',
      orientation: 'auto',
      rtl: !1,
      startDate: -1 / 0,
      startView: 0,
      todayBtn: !1,
      todayHighlight: !1,
      updateViewDate: !0,
      weekStart: 0,
      disableTouchKeyboard: !1,
      enableOnReadonly: !0,
      showOnFocus: !0,
      zIndexOffset: 10,
      container: 'body',
      immediateUpdates: !1,
      title: '',
      templates: { leftArrow: '&#x00AB;', rightArrow: '&#x00BB;' },
      showWeekDays: !0,
    }),
    p = (a.fn.datepicker.locale_opts = ['format', 'rtl', 'weekStart']);
  a.fn.datepicker.Constructor = k;
  var q = (a.fn.datepicker.dates = {
      en: {
        days: [
          'Sunday',
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
        ],
        monthsShort: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        today: 'Today',
        clear: 'Clear',
        titleFormat: 'MM yyyy',
      },
    }),
    r = {
      viewModes: [
        { names: ['days', 'month'], clsName: 'days', e: 'changeMonth' },
        {
          names: ['months', 'year'],
          clsName: 'months',
          e: 'changeYear',
          navStep: 1,
        },
        {
          names: ['years', 'decade'],
          clsName: 'years',
          e: 'changeDecade',
          navStep: 10,
        },
        {
          names: ['decades', 'century'],
          clsName: 'decades',
          e: 'changeCentury',
          navStep: 100,
        },
        {
          names: ['centuries', 'millennium'],
          clsName: 'centuries',
          e: 'changeMillennium',
          navStep: 1e3,
        },
      ],
      validParts: /dd?|DD?|mm?|MM?|yy(?:yy)?/g,
      nonpunctuation: /[^ -\/:-@\u5e74\u6708\u65e5\[-`{-~\t\n\r]+/g,
      parseFormat: function (a) {
        if ('function' == typeof a.toValue && 'function' == typeof a.toDisplay)
          return a;
        var b = a.replace(this.validParts, '\0').split('\0'),
          c = a.match(this.validParts);
        if (!b || !b.length || !c || 0 === c.length)
          throw new Error('Invalid date format.');
        return { separators: b, parts: c };
      },
      parseDate: function (c, e, f, g) {
        function h(a, b) {
          return (
            !0 === b && (b = 10),
            a < 100 && (a += 2e3) > new Date().getFullYear() + b && (a -= 100),
            a
          );
        }
        function i() {
          var a = this.slice(0, j[n].length),
            b = j[n].slice(0, a.length);
          return a.toLowerCase() === b.toLowerCase();
        }
        if (!c) return b;
        if (c instanceof Date) return c;
        if (('string' == typeof e && (e = r.parseFormat(e)), e.toValue))
          return e.toValue(c, e, f);
        var j,
          l,
          m,
          n,
          o,
          p = { d: 'moveDay', m: 'moveMonth', w: 'moveWeek', y: 'moveYear' },
          s = { yesterday: '-1d', today: '+0d', tomorrow: '+1d' };
        if (
          (c in s && (c = s[c]),
          /^[\-+]\d+[dmwy]([\s,]+[\-+]\d+[dmwy])*$/i.test(c))
        ) {
          for (
            j = c.match(/([\-+]\d+)([dmwy])/gi), c = new Date(), n = 0;
            n < j.length;
            n++
          )
            (l = j[n].match(/([\-+]\d+)([dmwy])/i)),
              (m = Number(l[1])),
              (o = p[l[2].toLowerCase()]),
              (c = k.prototype[o](c, m));
          return k.prototype._zero_utc_time(c);
        }
        j = (c && c.match(this.nonpunctuation)) || [];
        var t,
          u,
          v = {},
          w = ['yyyy', 'yy', 'M', 'MM', 'm', 'mm', 'd', 'dd'],
          x = {
            yyyy: function (a, b) {
              return a.setUTCFullYear(g ? h(b, g) : b);
            },
            m: function (a, b) {
              if (isNaN(a)) return a;
              for (b -= 1; b < 0; ) b += 12;
              for (b %= 12, a.setUTCMonth(b); a.getUTCMonth() !== b; )
                a.setUTCDate(a.getUTCDate() - 1);
              return a;
            },
            d: function (a, b) {
              return a.setUTCDate(b);
            },
          };
        (x.yy = x.yyyy), (x.M = x.MM = x.mm = x.m), (x.dd = x.d), (c = d());
        var y = e.parts.slice();
        if (
          (j.length !== y.length &&
            (y = a(y)
              .filter(function (b, c) {
                return -1 !== a.inArray(c, w);
              })
              .toArray()),
          j.length === y.length)
        ) {
          var z;
          for (n = 0, z = y.length; n < z; n++) {
            if (((t = parseInt(j[n], 10)), (l = y[n]), isNaN(t)))
              switch (l) {
                case 'MM':
                  (u = a(q[f].months).filter(i)),
                    (t = a.inArray(u[0], q[f].months) + 1);
                  break;
                case 'M':
                  (u = a(q[f].monthsShort).filter(i)),
                    (t = a.inArray(u[0], q[f].monthsShort) + 1);
              }
            v[l] = t;
          }
          var A, B;
          for (n = 0; n < w.length; n++)
            (B = w[n]) in v &&
              !isNaN(v[B]) &&
              ((A = new Date(c)), x[B](A, v[B]), isNaN(A) || (c = A));
        }
        return c;
      },
      formatDate: function (b, c, d) {
        if (!b) return '';
        if (('string' == typeof c && (c = r.parseFormat(c)), c.toDisplay))
          return c.toDisplay(b, c, d);
        var e = {
          d: b.getUTCDate(),
          D: q[d].daysShort[b.getUTCDay()],
          DD: q[d].days[b.getUTCDay()],
          m: b.getUTCMonth() + 1,
          M: q[d].monthsShort[b.getUTCMonth()],
          MM: q[d].months[b.getUTCMonth()],
          yy: b.getUTCFullYear().toString().substring(2),
          yyyy: b.getUTCFullYear(),
        };
        (e.dd = (e.d < 10 ? '0' : '') + e.d),
          (e.mm = (e.m < 10 ? '0' : '') + e.m),
          (b = []);
        for (
          var f = a.extend([], c.separators), g = 0, h = c.parts.length;
          g <= h;
          g++
        )
          f.length && b.push(f.shift()), b.push(e[c.parts[g]]);
        return b.join('');
      },
      headTemplate:
        '<thead><tr><th colspan="7" class="datepicker-title"></th></tr><tr><th class="prev">' +
        o.templates.leftArrow +
        '</th><th colspan="5" class="datepicker-switch"></th><th class="next">' +
        o.templates.rightArrow +
        '</th></tr></thead>',
      contTemplate: '<tbody><tr><td colspan="7"></td></tr></tbody>',
      footTemplate:
        '<tfoot><tr><th colspan="7" class="today"></th></tr><tr><th colspan="7" class="clear"></th></tr></tfoot>',
    };
  (r.template =
    '<div class="datepicker"><div class="datepicker-days"><table class="table-condensed">' +
    r.headTemplate +
    '<tbody></tbody>' +
    r.footTemplate +
    '</table></div><div class="datepicker-months"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-years"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-decades"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div><div class="datepicker-centuries"><table class="table-condensed">' +
    r.headTemplate +
    r.contTemplate +
    r.footTemplate +
    '</table></div></div>'),
    (a.fn.datepicker.DPGlobal = r),
    (a.fn.datepicker.noConflict = function () {
      return (a.fn.datepicker = m), this;
    }),
    (a.fn.datepicker.version = '1.9.0'),
    (a.fn.datepicker.deprecated = function (a) {
      var b = window.console;
      b && b.warn && b.warn('DEPRECATED: ' + a);
    }),
    a(document).on(
      'focus.datepicker.data-api click.datepicker.data-api',
      '[data-provide="datepicker"]',
      function (b) {
        var c = a(this);
        c.data('datepicker') || (b.preventDefault(), n.call(c, 'show'));
      }
    ),
    a(function () {
      n.call(a('[data-provide="datepicker-inline"]'));
    });
});

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

!function(t){var i=t(window);t.fn.visible=function(t,e,o){if(!(this.length<1)){var r=this.length>1?this.eq(0):this,n=r.get(0),f=i.width(),h=i.height(),o=o?o:"both",l=e===!0?n.offsetWidth*n.offsetHeight:!0;if("function"==typeof n.getBoundingClientRect){var g=n.getBoundingClientRect(),u=g.top>=0&&g.top<h,s=g.bottom>0&&g.bottom<=h,c=g.left>=0&&g.left<f,a=g.right>0&&g.right<=f,v=t?u||s:u&&s,b=t?c||a:c&&a;if("both"===o)return l&&v&&b;if("vertical"===o)return l&&v;if("horizontal"===o)return l&&b}else{var d=i.scrollTop(),p=d+h,w=i.scrollLeft(),m=w+f,y=r.offset(),z=y.top,B=z+r.height(),C=y.left,R=C+r.width(),j=t===!0?B:z,q=t===!0?z:B,H=t===!0?R:C,L=t===!0?C:R;if("both"===o)return!!l&&p>=q&&j>=d&&m>=L&&H>=w;if("vertical"===o)return!!l&&p>=q&&j>=d;if("horizontal"===o)return!!l&&m>=L&&H>=w}}}}(jQuery);

'use strict';

function lazyImages() {
  $('.lazyset').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('srcset', $(this).data('srcset'))
        .removeAttr('data-srcset')
        .addClass('loaded');
    }
  });
  $('.lazy').each(function () {
    if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
      $(this)
        .attr('src', $(this).data('src'))
        .removeAttr('data-src')
        .addClass('loaded');
    }
  });

  $(window).on('scroll resize', function () {
    $('.lazyset').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('srcset', $(this).data('srcset'))
          .removeAttr('data-srcset')
          .addClass('loaded');
      }
    });
    $('.lazy').each(function () {
      if (spaceFromBottom($(this)) && !$(this).hasClass('loaded')) {
        $(this)
          .attr('src', $(this).data('src'))
          .removeAttr('data-src')
          .addClass('loaded');
      }
    });
  });
}

function uglyInput() {
  $('.ugly').each(function () {
    var $input = $(this).find('input, textarea');
    $input.on('change focusout', function () {
      if (!$input.val() === true) {
        $input.parent().find('.ugly-label').css({ opacity: 1 });
      } else {
        $input.parent().find('.ugly-label').css({ opacity: 0 });
      }
    });
  });
}

function productImgHover() {
  if (!$('body').hasClass('mobile-device')) {
    $('.products__product, li.product').on('mouseenter', function () {
      if ($(this).find('.products__product-img').find('.hover').length) {
        $(this)
          .find('.products__product-img')
          .find('.main, .attachment-woocommerce_thumbnail')
          .stop(true)
          .addClass('d-none');
        $(this)
          .find('.products__product-img')
          .find('.hover')
          .stop(true)
          .removeClass('d-none');
      }
    });
    $('.products__product, li.product').on('mouseleave', function () {
      if ($(this).find('.products__product-img').find('.hover').length) {
        $(this)
          .find('.products__product-img')
          .find('.main, .attachment-woocommerce_thumbnail')
          .removeClass('d-none');
        $(this)
          .find('.products__product-img')
          .find('.hover')
          .addClass('d-none');
      }
    });
  }
}

function addedToCartLink() {
  $(document).ajaxComplete(function (event, request, settings) {
    $(document)
      .find('.added_to_cart.wc-forward')
      .on('click', function (e) {
        e.preventDefault();
        $('#nbhdModalCart').modal('show');
      });
  });
}

function hideQty() {
  $('form').find('.quantity.hidden').prev('.quantity').remove();
}

function filterMobile() {
  var filter = $('.nbhd-products-archive-filters-title');
  filter.on('click', function () {
    if ($(window).width() <= 991) {
      if ($(this).next().hasClass('d-none')) {
        $(this).next().removeClass('d-none');
      } else {
        $(this).next().addClass('d-none');
      }
    }
  });
}

// function hidePaymentMethods() {
//   if ($('#shipping_method_0_flat_rate11').is(':checked')) {
//     $('.wc_payment_methods.payment_methods.methods')
//       .hide(200)
//       .addClass('d-none');
//   } else {
//     $('.wc_payment_methods.payment_methods.methods')
//       .show(200)
//       .removeClass('d-none');
//   }
//   $('#shipping_method')
//     .find('input')
//     .on('change', function () {
//       if ($('#shipping_method_0_flat_rate11').is(':checked')) {
//         $('.wc_payment_methods.payment_methods.methods')
//           .hide(200)
//           .addClass('d-none');
//       } else {
//         $('.wc_payment_methods.payment_methods.methods')
//           .show(200)
//           .removeClass('d-none');
//       }
//       console.log($(this));
//     });
// }

jQuery(document).ready(function () {
  lazyImages();
  uglyInput();
  feather.replace();
  productImgHover();
  addedToCartLink();
  hideQty();
  filterMobile();
  //hidePaymentMethods();

  // jQuery(document.body).on('updated_checkout', function () {
  //   //console.log('cos');
  //   $('.form-row.mailchimp-newsletter')
  //     .addClass('pretty p-default p-thick p-pulse')
  //     .find('label')
  //     .wrap('<div class="state p-warning-o"></div>');
  // });

  if (
    !getCookie('newsletter-kupon-10') ||
    getCookie('newsletter-kupon-10') !== 'showed'
  ) {
    console.log('somesome');
    if (getUrlParameter('already')) {
      setCookie('newsletter-kupon-10', getUrlParameter('already'), 7);
      $('#already-modal-newsletter').modal('show');
    } else if (getUrlParameter('code')) {
      setCookie('newsletter-kupon-10', getUrlParameter('code'), 7);
      $('#code-modal-newsletter').modal('show');
    } else {
      setTimeout(function () {
        $('#open-modal-newsletter').modal('show');
        setCookie('newsletter-kupon-10', 'showed', 1);
      }, 5000);
    }
  }

  $('#nbhdModalSearch').on('shown.bs.modal', function () {
    $('input.dgwt-wcas-search-input').trigger('focus');
  });

  var swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },

    autoplay: {
      delay: 4000,
      disableOnInteraction: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
});

jQuery(window).on('load', function () {
  lazyImages();
  // $('.form-row.mailchimp-newsletter')
  //   .addClass('pretty p-default p-thick p-pulse')
  //   .find('label')
  //   .wrap('<div class="state p-warning-o"></div>');
});
