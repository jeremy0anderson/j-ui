Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var Framer = require('framer-motion');
var styled = require('styled-components');
var M = require('@mui/material');
var I = require('@mui/icons-material');
var reactRouterDom = require('react-router-dom');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n["default"] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);
var Framer__namespace = /*#__PURE__*/_interopNamespace(Framer);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);
var M__namespace = /*#__PURE__*/_interopNamespace(M);
var I__namespace = /*#__PURE__*/_interopNamespace(I);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var switchVariants = {
    unchecked: function (tapped) {
        return {
            x: tapped ? -8 : "-50%",
            scale: 1,
            background: "hsl(200, 100%,100%)",
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            }
        };
    },
    checked: function (tapped) {
        return {
            scale: 1,
            x: tapped ? 8 : "50%",
            background: "hsl(200, 100%,100%)",
            transition: {
                type: "spring",
                duration: 0.3,
                bounce: 0,
            }
        };
    },
    tapped: function (tapped) {
        return {
            scale: tapped ? 1.4 : 1
        };
    }
};
var Switch = /** @class */ (function (_super) {
    __extends(Switch, _super);
    function Switch(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            checked: _this.props.checked || false,
            tapped: false
        };
        _this.toggleChecked = _this.toggleChecked.bind(_this);
        return _this;
    }
    Switch.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        return this.state !== nextState || this.props !== nextProps;
    };
    Switch.prototype.componentDidUpdate = function (prevProps, prevState) {
    };
    Switch.prototype.toggleChecked = function () {
        this.setState(__assign(__assign({}, this.state), { checked: !this.props.checked }));
    };
    Switch.prototype.render = function () {
        var _this = this;
        return (React__namespace.createElement(Framer.motion.div, { onTapCancel: function () { _this.setState(__assign(__assign({}, _this.state), { tapped: false })); }, onTapStart: function () { return _this.setState(__assign(__assign({}, _this.state), { tapped: true })); }, onTap: function () { _this.setState(__assign(__assign({}, _this.state), { tapped: false })); }, onClick: this.props.toggle, animate: { background: this.props.checked ? "linear-gradient(90deg, hsl(13,100%,42%) -20%, hsl(33,100%,42%) 100%)" : "linear-gradient(90deg, hsla(0,0%,36%,0.5), hsla(0,8%,6%,0.7))" }, style: { display: 'flex', justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: 20, width: 50, height: 25, background: "hsla(0,0%,79%, 0.4)", cursor: 'pointer' } },
            React__namespace.createElement("div", { style: { width: 50, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                React__namespace.createElement(Framer.motion.div, { custom: this.state.tapped, style: { borderRadius: 20, display: 'flex', justifyContent: 'center', alignContent: "center", alignItems: "center", width: 20, height: 20, background: "hsla(0,0%,36%,0.4)" }, initial: "unchecked", animate: this.props.checked ? "checked" : "unchecked", variants: switchVariants })))
        // <label  style={{boxShadow: "1px 1px 3px 1px", borderRadius:20,display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}}>{this.props.label}</label>
        );
    };
    return Switch;
}(React__namespace.Component));

var variants = {
    container: {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.1,
                staggerChildren: 0.04
            }
        }
    },
    item: {
        hidden: {
            y: "-100%",
            transition: { type: "spring", duration: 0.5, ease: [0.15, 0.5, 0.7, 1]
            }
        },
        visible: {
            y: 0,
            height: 'auto',
            overflow: 'visible',
            transition: { type: "spring", ease: [0, 0.4, 0.7, 1], duration: 0.2, bounce: 0.2, bounceStiffness: 0.2 }
        }
    }
};
var Wrapper = function (props) {
    return React__namespace.createElement("span", { className: "word-wrapper" }, props.children);
};
var tagMap = {
    paragraph: "p",
    heading1: "h1",
    heading2: "h2",
    heading3: "h3",
    heading4: "h4",
    heading5: "h5",
    heading6: "h6"
};
var AnimatedTextInner = function (props) {
    // let speed;
    // switch(props.speed){
    //     case "slow":  speed = 1; break;
    //     case "normal": speed = 0.5; break;
    //     case "fast":  speed = 0.3; break;
    //     default:  speed = props.speed; break;
    // }
    var item = variants.item;
    var splitWords = props.text.split(" ");
    var words = [];
    for (var _i = 0, _a = splitWords.entries(); _i < _a.length; _i++) {
        var _b = _a[_i], item_1 = _b[1];
        words.push(item_1.split(""));
    }
    words.map(function (word) {
        return word.push("\u00A0");
    });
    var Tag = tagMap[props.type];
    return (React__namespace.createElement(Tag, null, words.map(function (word, index) {
        return (React__namespace.createElement(Wrapper, { key: index + word }, words[index].flat().map(function (element, index) {
            return (React__namespace.createElement("span", { style: {
                    overflow: "hidden",
                    display: "inline-flex",
                }, key: index },
                React__namespace.createElement(Framer.motion.span, { style: { display: "flex", overflow: "visible" }, variants: item }, element)));
        })));
    })));
};
var AnimatedText = function (props) {
    return (React__namespace.createElement(Framer.motion.div, { style: props.style ? props.style : {}, initial: "hidden", animate: "visible", variants: variants.container },
        React__namespace.createElement(AnimatedTextInner, { type: props.type, text: props.text })));
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "@media(max-width:600px){\n  #menu-toggle {\n    display: flex!important;\n    color:white;\n  }\n  #navbar-menu-main{\n    display: none!important;\n  }\n}\n#navbar-menu-main{\n  display:flex;\n  align-content: center;\n  align-items: center;\n  padding:0;\n  text-align-all: center;\n  position: absolute;\n  right: 0;\n}\n#menu-toggle{\n  display:none;\n\n}";
styleInject(css_248z);

var LinkRef = React__namespace.forwardRef(function (props, ref) {
    return React__namespace.createElement(reactRouterDom.Link, __assign({ ref: ref, to: props.to }, props));
}), Link = Framer__namespace.motion(LinkRef);
var motion = Framer__namespace.motion;
var DrawerContainer = styled__default["default"](motion.div)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n"], ["\n"])));
var Navbar = styled__default["default"](motion.div)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  align-items: center;\n  align-content:center;\n  display: flex;\n  width: 100vw;\n  height: 60px;\n"], ["\n  position: fixed;\n  align-items: center;\n  align-content:center;\n  display: flex;\n  width: 100vw;\n  height: 60px;\n"])));
var Toolbar = styled__default["default"]('div')(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding-inline: 10px;\n  align-items: center;\n  align-content:center;\n"], ["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding-inline: 10px;\n  align-items: center;\n  align-content:center;\n"])));
var Drawer = /** @class */ (function (_super) {
    __extends(Drawer, _super);
    function Drawer(props) {
        var _this = _super.call(this, props) || this;
        _this.Menu = function (props) { return (React__namespace.createElement(motion.ul, { style: { zIndex: 1010, listStyleType: 'none', display: 'flex', flexDirection: 'column', padding: 0, justifyContent: "center", alignItems: 'center', alignContent: 'center', margin: 0, left: 0, overflow: 'hidden' }, transition: { duration: 0.3, type: 'spring' }, animate: { left: props.open ? "-100%" : 0, height: props.open ? props.items.length * 60 : 0 } }, props.items.map(function (item, index) {
            return (React__namespace.createElement(Link, { onClick: props.onToggle, whileHover: { scale: 1.1 }, key: item + "link", style: { width: props.anchor === "top" && props.open ? "100vw" : "auto", borderBottom: "1px solid black", zIndex: 1010, height: 60, textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }, to: item.toLowerCase() === "home" ? "/" : "/".concat(item.toLowerCase()) },
                React__namespace.createElement(motion.li, { key: item + index, animate: { width: props.open ? 250 : 0 }, transition: { type: 'spring', duration: 0.3 }, style: {
                        width: props.anchor === "top" ? "100vw" : "auto",
                        zIndex: 1010,
                        position: 'relative', top: 0,
                        height: 60, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
                    } }, item)));
        }))); };
        _this.PermanentMenu = function (props) {
            return (React__namespace.createElement(motion.div, { style: { height: "calc(100vh - 60px)", position: 'fixed', top: 60, left: 0, width: 80, boxShadow: "4px 4px 10px darkgray" } }, props.icons.map(function (icon, index) {
                return (React__namespace.createElement(Link, { onClick: props.onToggle, key: index, style: { width: 80, borderBottom: "1px solid black", zIndex: 1010, height: 60, textDecoration: 'none', color: 'white' }, to: icon.to },
                    React__namespace.createElement(motion.li, { key: index + "li", whileHover: { width: 140, }, transition: { duration: 0.3 }, style: {
                            // boxShadow: "0 2px 8px darkslategray",
                            borderTopRightRadius: 20,
                            borderBottomRightRadius: 20,
                            background: "lightgray",
                            zIndex: 1010,
                            position: 'relative', top: 0,
                            height: 60, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
                        } },
                        React__namespace.createElement(M__namespace.Box, null, icon.icon))));
            })));
        };
        _this.Permanent = function (props) {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, left: 0 } },
                React__namespace.createElement(_this.Menu, { onToggle: props.onToggle, open: _this.props.open, items: _this.props.items })));
        };
        _this.Left = function (props) {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, left: 0 } },
                React__namespace.createElement(_this.Menu, { onToggle: props.onToggle, open: _this.props.open, items: _this.props.items })));
        };
        _this.Right = function (props) {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, right: 0 }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, right: 0, borderBottomLeftRadius: 20 } },
                React__namespace.createElement(_this.Menu, { onToggle: props.onToggle, open: _this.props.open, items: _this.props.items })));
        };
        _this.Top = function (props) {
            return (React__namespace.createElement(DrawerContainer, { initial: { height: 0 }, animate: { height: props.open ? 250 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, right: 0, background: props.menuBackground, width: "100vw", position: "fixed", top: 60, left: 0 } },
                React__namespace.createElement(_this.Menu, { onToggle: props.onToggle, open: props.open, items: props.items, anchor: props.anchor })));
        };
        _this.state = {};
        return _this;
    }
    Drawer.prototype.render = function () {
        switch (this.props.anchor) {
            case "left": return React__namespace.createElement(this.Left, __assign({}, this.props));
            case "right": return React__namespace.createElement(this.Right, __assign({}, this.props));
            case "top": return React__namespace.createElement(this.Top, __assign({}, this.props));
            case "permanent-left": return React__namespace.createElement(this.PermanentMenu, __assign({ icons: [{ to: "/", icon: React__namespace.createElement(I__namespace.HomeOutlined, null) }] }, this.props));
            default: return React__namespace.createElement(React__namespace.Fragment, null);
        }
    };
    return Drawer;
}(React__namespace.Component));
var Navigation = /** @class */ (function (_super) {
    __extends(Navigation, _super);
    function Navigation(props) {
        var _this = _super.call(this, props) || this;
        _this.TopMenu = function (props) {
            return (React__namespace.createElement(motion.ul, { id: "navbar-menu-main", style: { display: 'flex' } }, props.items.map(function (item, index) {
                return (React__namespace.createElement(Link, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, style: { margin: "0 20px", position: "relative", zIndex: 1010, height: 60, width: 60, textDecoration: 'none', color: 'white', alignItems: "center", alignContent: 'center', justifyContent: 'center' }, to: item.toLowerCase() === "home" ? "/" : "/".concat(item.toLowerCase()), key: item + index + "nav" },
                    React__namespace.createElement("p", { style: { margin: "20px 0", textAlign: "center" } }, item)));
            })));
        };
        _this.state = {
            drawerOpen: false
        };
        _this.toggle = _this.toggle.bind(_this);
        return _this;
    }
    Navigation.prototype.componentDidMount = function () { };
    Navigation.prototype.shouldComponentUpdate = function (nextProps, nextState, nextContext) {
        return this.props !== nextProps || this.state !== nextState || this.context !== nextContext;
    };
    Navigation.prototype.componentDidUpdate = function (prevProps, prevState, snapshot) {
    };
    Navigation.prototype.componentWillUnmount = function () { };
    Navigation.prototype.toggle = function () {
        this.setState(__assign(__assign({}, this.state), { drawerOpen: !this.state.drawerOpen }));
    };
    Navigation.prototype.render = function () {
        var _this = this;
        var animateProps;
        switch (this.props.anchor) {
            case 'left':
                animateProps = {
                    width: this.state.drawerOpen ? "calc(100vw - 250px)" : "100vw",
                    x: this.state.drawerOpen ? 250 : 0
                };
                break;
            case 'right':
                animateProps = {
                    width: this.state.drawerOpen ? "calc(100vw - 250px)" : "100vw"
                };
                break;
        }
        return (React__namespace.createElement(React__namespace.Fragment, null,
            React__namespace.createElement(Navbar, { style: { position: "fixed", top: 0, left: 0, zIndex: 999, boxShadow: "0 4px 7px", background: this.props.background ? this.props.background : "white" }, animate: animateProps, transition: { type: "spring", duration: 0.3 } },
                React__namespace.createElement(Toolbar, { style: { display: 'flex' } },
                    React__namespace.createElement(M__namespace.IconButton, { id: "menu-toggle", onClick: this.toggle },
                        React__namespace.createElement(I__namespace.MenuOutlined, null)),
                    React__namespace.createElement(this.TopMenu, { items: this.props.items, open: this.state.drawerOpen }))),
            React__namespace.createElement(Drawer, { onToggle: this.toggle, items: this.props.items, anchor: this.props.anchor, open: this.state.drawerOpen, menuBackground: this.props.menuBackground }),
            React__namespace.createElement(motion.div, { transition: { duration: 0.3, type: 'spring' }, animate: { opacity: this.state.drawerOpen ? 1 : 0, visibility: this.state.drawerOpen ? "visible" : "hidden" }, onClick: function () {
                    if (_this.state.drawerOpen) {
                        _this.toggle();
                    }
                    else
                        return;
                }, style: { filter: "blur(2px)", background: "rgba(10, 10, 10, 0.5)", width: "100vw", position: 'absolute', left: 0, top: 0, zIndex: 900, height: "100vh" } })));
    };
    return Navigation;
}(React__namespace.Component));
var templateObject_1, templateObject_2, templateObject_3;
// function Test(){
//     return(
//         <BrowserRouter>
//         <Navigation
//             anchor={"top"} items={["Home", "About", "Contact"''} menuBackground={'rgb(40,40,40)'} background={"linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)"}/>
//         </BrowserRouter>
//     )
// }

var index = { Switch: Switch, AnimatedText: AnimatedText, Navigation: Navigation };

exports.Components = index;
//# sourceMappingURL=index.js.map
