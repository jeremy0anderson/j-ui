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

const switchVariants = {
    unchecked: (tapped) => {
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
    checked: (tapped) => {
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
    tapped: (tapped) => {
        return {
            scale: tapped ? 1.4 : 1
        };
    }
};
class Switch extends React__namespace.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: this.props.checked || false,
            tapped: false
        };
        this.toggleChecked = this.toggleChecked.bind(this);
    }
    shouldComponentUpdate(nextProps, nextState) {
        return this.state !== nextState || this.props !== nextProps;
    }
    componentDidUpdate(prevProps, prevState) {
    }
    toggleChecked() {
        this.setState(Object.assign(Object.assign({}, this.state), { checked: !this.props.checked }));
    }
    render() {
        return (React__namespace.createElement(Framer.motion.div, { onTapCancel: () => { this.setState(Object.assign(Object.assign({}, this.state), { tapped: false })); }, onTapStart: () => this.setState(Object.assign(Object.assign({}, this.state), { tapped: true })), onTap: () => { this.setState(Object.assign(Object.assign({}, this.state), { tapped: false })); }, onClick: this.props.toggle, animate: { background: this.props.checked ? "linear-gradient(90deg, hsl(13,100%,42%) -20%, hsl(33,100%,42%) 100%)" : "linear-gradient(90deg, hsla(0,0%,36%,0.5), hsla(0,8%,6%,0.7))" }, style: { display: 'flex', justifyContent: "center", alignItems: "center", alignContent: "center", borderRadius: 20, width: 50, height: 25, background: "hsla(0,0%,79%, 0.4)", cursor: 'pointer' } },
            React__namespace.createElement("div", { style: { width: 50, height: 25, display: 'flex', justifyContent: 'center', alignItems: 'center' } },
                React__namespace.createElement(Framer.motion.div, { custom: this.state.tapped, style: { borderRadius: 20, display: 'flex', justifyContent: 'center', alignContent: "center", alignItems: "center", width: 20, height: 20, background: "hsla(0,0%,36%,0.4)" }, initial: "unchecked", animate: this.props.checked ? "checked" : "unchecked", variants: switchVariants })))
        // <label  style={{boxShadow: "1px 1px 3px 1px", borderRadius:20,display: 'flex', justifyContent: 'center', alignItems: 'center', alignContent:'center'}}>{this.props.label}</label>
        );
    }
}

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

var css_248z$1 = "@media(max-width:600px){\n  #menu-toggle {\n    display: flex!important;\n    color:white;\n  }\n  #navbar-menu-main{\n    display: none!important;\n  }\n}\n#navbar-menu-main{\n  display:flex;\n  align-content: center;\n  align-items: center;\n  padding:0;\n  text-align-all: center;\n  position: absolute;\n  right: 0;\n}\n#menu-toggle{\n  display:none;\n\n}";
styleInject(css_248z$1);

function Toggle(props) {
    const lineVariants = {
        closed: (line) => {
            switch (line) {
                case 0: return { x1: 0, y1: 5, x2: 25, y2: 5 };
                case 1: return { x1: 0, y1: 12.5, x2: 25, y2: 12.5 };
                case 2: return { x1: 0, y1: 20, x2: 25, y2: 20 };
                default: return {};
            }
        },
        open: (line) => {
            switch (line) {
                case 0: return { x1: 5, y1: 5, x2: 20, y2: 20 };
                case 1: return { x1: -5, y1: 12.5, x2: -5, y2: 12.5 };
                case 2: return { x1: 5, y1: 20, x2: 20, y2: 5 };
                default: return {};
            }
        }
    };
    return (React__namespace.createElement(Framer.motion.svg, { stroke: "rgba(238,238,238,0.99)", viewBox: "0 0 25 25", strokeLinecap: "round", strokeWidth: 2, height: 25, width: 25 },
        React__namespace.createElement(Framer.motion.line, { custom: 0, animate: props.open ? "open" : "closed", initial: "closed", variants: lineVariants }),
        React__namespace.createElement(Framer.motion.line, { custom: 1, animate: props.open ? "open" : "closed", initial: "closed", variants: lineVariants }),
        React__namespace.createElement(Framer.motion.line, { custom: 2, animate: props.open ? "open" : "closed", initial: "closed", variants: lineVariants })));
}

const LinkRef = React__namespace.forwardRef((props, ref) => {
    return React__namespace.createElement(reactRouterDom.Link, Object.assign({ ref: ref, to: props.to }, props));
}), Link = Framer__namespace.motion(LinkRef);
const { motion } = Framer__namespace;
const DrawerContainer = styled__default["default"](motion.div) `
`;
const Navbar = styled__default["default"](motion.div) `
  position: fixed;
  align-items: center;
  align-content:center;
  display: flex;
  width: 100vw;
  height: 60px;
`;
const Toolbar = styled__default["default"]('div') `
  width: 100%;
  height: 100%;
  display: flex;
  padding-inline: 10px;
  align-items: center;
  align-content:center;
`;
class Drawer extends React__namespace.Component {
    constructor(props) {
        super(props);
        this.Menu = (props) => (React__namespace.createElement(motion.ul, { style: { zIndex: 1010, listStyleType: 'none', display: 'flex', flexDirection: 'column', padding: 0, justifyContent: "center", alignItems: 'center', alignContent: 'center', margin: 0, left: 0, overflow: 'hidden' }, transition: { duration: 0.3, type: 'spring' }, animate: { left: props.open ? "-100%" : 0, height: props.items.length * 60 } }, props.items.map((item, index) => {
            return (React__namespace.createElement(Link, { onClick: props.onToggle, whileHover: { scale: 1.1 }, key: item + "link", style: { width: props.anchor === "top" && props.open ? "100vw" : "auto", borderBottom: "1px solid black", zIndex: 1010, height: 60, textDecoration: 'none', color: 'white', display: 'flex', justifyContent: 'center', alignItems: 'center' }, to: item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}` },
                React__namespace.createElement(motion.li, { key: item + index, animate: { width: props.open ? 250 : 0 }, transition: { type: 'spring', duration: 0.3 }, style: {
                        width: props.anchor === "top" ? "100vw" : "auto",
                        zIndex: 1010,
                        position: 'relative', top: 0,
                        height: 60, display: 'flex', justifyContent: 'center', alignContent: 'center', alignItems: 'center'
                    } }, item)));
        })));
        this.PermanentMenu = (props) => {
            return (React__namespace.createElement(motion.div, { style: { height: "calc(100vh - 60px)", position: 'fixed', top: 60, left: 0, width: 80, boxShadow: "4px 4px 10px darkgray" } }, props.icons.map((icon, index) => {
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
        this.Permanent = (props) => {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, left: 0 } },
                React__namespace.createElement(this.Menu, { onToggle: props.onToggle, open: this.props.open, items: this.props.items })));
        };
        this.Left = (props) => {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, left: 0 } },
                React__namespace.createElement(this.Menu, { onToggle: props.onToggle, open: this.props.open, items: this.props.items })));
        };
        this.Right = (props) => {
            return (React__namespace.createElement(DrawerContainer, { animate: { width: props.open ? 250 : 0, right: 0 }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, background: props.menuBackground, width: 0, height: "100vh", position: "fixed", top: 0, right: 0, borderBottomLeftRadius: 20 } },
                React__namespace.createElement(this.Menu, { onToggle: props.onToggle, open: this.props.open, items: this.props.items })));
        };
        this.Top = (props) => {
            return (React__namespace.createElement(DrawerContainer, { initial: { height: 0, overflow: 'hidden' }, animate: { height: props.open ? props.items.length * 60 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, right: 0, background: props.menuBackground, width: "100vw", position: "fixed", top: 60, left: 0 } },
                React__namespace.createElement(this.Menu, { onToggle: props.onToggle, open: props.open, items: props.items, anchor: props.anchor })));
        };
        this.state = {};
    }
    render() {
        switch (this.props.anchor) {
            case "left": return React__namespace.createElement(this.Left, Object.assign({}, this.props));
            case "right": return React__namespace.createElement(this.Right, Object.assign({}, this.props));
            case "top": return React__namespace.createElement(this.Top, Object.assign({}, this.props));
            case "permanent-left": return React__namespace.createElement(this.PermanentMenu, Object.assign({ icons: [{ to: "/", icon: React__namespace.createElement(I__namespace.HomeOutlined, null) }] }, this.props));
            default: return React__namespace.createElement(React__namespace.Fragment, null);
        }
    }
}
class Navigation extends React__namespace.Component {
    constructor(props) {
        super(props);
        this.TopMenu = (props) => {
            return (React__namespace.createElement(motion.ul, { id: "navbar-menu-main", style: { display: 'flex' } }, props.items.map((item, index) => {
                return (React__namespace.createElement(Link, { whileHover: { scale: 1.1 }, whileTap: { scale: 0.9 }, style: { margin: "0 20px", position: "relative", zIndex: 1010, height: 60, width: 60, textDecoration: 'none', color: 'white', alignItems: "center", alignContent: 'center', justifyContent: 'center' }, to: item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`, key: item + index + "nav" },
                    React__namespace.createElement("p", { style: { margin: "20px 0", textAlign: "center" } }, item)));
            })));
        };
        this.state = {
            drawerOpen: false,
            activeLink: ""
        };
        this.toggle = this.toggle.bind(this);
    }
    componentDidMount() { }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        return this.props !== nextProps || this.state !== nextState || this.context !== nextContext;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    }
    componentWillUnmount() { }
    toggle() {
        this.setState(Object.assign(Object.assign({}, this.state), { drawerOpen: !this.state.drawerOpen }));
    }
    render() {
        let animateProps;
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
            React__namespace.createElement(Navbar, { style: { position: "fixed", top: 0, left: 0, zIndex: 1000, background: this.props.background || "rgba(10, 10, 10, 0.2)" }, animate: animateProps, transition: { type: "spring", duration: 0.3 } },
                React__namespace.createElement(Toolbar, { style: { display: 'flex' } },
                    React__namespace.createElement(M__namespace.IconButton, { id: "menu-toggle", onClick: this.toggle },
                        React__namespace.createElement(Toggle, { open: this.state.drawerOpen })),
                    React__namespace.createElement(this.TopMenu, { items: this.props.items, open: this.state.drawerOpen }))),
            React__namespace.createElement(Drawer, { onToggle: this.toggle, items: this.props.items, anchor: this.props.anchor, open: this.state.drawerOpen, menuBackground: this.props.menuBackground }),
            React__namespace.createElement(motion.div, { transition: { duration: 0.3, type: 'spring' }, animate: { opacity: this.state.drawerOpen ? 1 : 0, visibility: this.state.drawerOpen ? "visible" : "hidden" }, onClick: () => {
                    if (this.state.drawerOpen) {
                        this.toggle();
                    }
                    else
                        return;
                }, style: { filter: "blur(2px)", background: "rgba(10, 10, 10, 0.5)", width: "100vw", position: 'absolute', left: 0, top: 0, zIndex: 900, height: "100vh" } })));
    }
}
// function Test(){
//     return(
//         <BrowserRouter>
//         <Navigation
//             background={"#000"}
//             anchor={"top"} items={["Home", "About", "Contact"]} menuBackground={'rgb(40,40,40)'}
//           // background={"linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)"}
//         />
//         </BrowserRouter>
//     )
// }

//@ts-ignore
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
function Particles(props) {
    const cRef = React__namespace.useRef(HTMLCanvasElement);
    const iRef = React__namespace.useRef(HTMLImageElement);
    let canvas, ctx, image;
    React__namespace.useEffect(() => {
        canvas = cRef.current;
        ctx = canvas.getContext('2d', { willReadFrequently: true });
        image = iRef.current;
        canvas.width = props.width;
        canvas.height = props.height;
        class Particle {
            constructor(effect, x, y, color) {
                this.effect = effect;
                this.x = this.originX = x;
                this.y = this.originY = y;
                this.size = props.size || 0.5;
                this.color = color;
                this.dx = 0;
                this.dy = 0;
                this.vx = 0;
                this.vy = 0;
                this.force = 0;
                this.angle = 0;
                this.distance = 0;
                this.friction = props.friction || 0.98;
                this.ease = props.ease || 0.02;
                this.area = props.area || 0;
            }
            update() {
                this.dx = this.effect.mouse.x - this.x;
                this.dy = this.effect.mouse.y - this.y;
                this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
                this.force = -this.effect.mouse.radius / this.distance * 1.5;
                if (props.area < this.distance < this.effect.mouse.radius) {
                    this.angle = Math.atan2(this.dy, this.dx);
                    this.vx += this.force * Math.cos(this.angle);
                    this.vy += this.force * Math.sin(this.angle);
                }
                this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
            }
        }
        class Effect {
            constructor(width, height) {
                this.width = width;
                this.height = height;
                this.image = iRef.current || new Image(100, 100);
                this.centerX = this.width / 2;
                this.centerY = this.height / 2;
                this.x = props.width / 2 - image.width / 2;
                this.y = props.height / 2 - image.height / 2;
                this.particles = [];
                this.gap = props.gap || 2;
                this.mouse = {
                    radius: props.radius || 2000,
                    x: -Infinity,
                    y: -Infinity,
                    down: false
                };
                this._renderCount = 0;
                for (let key in props) {
                    this[key] = props[key];
                }
            }
            start(canvas) {
                var _a, _b, _c;
                canvas.addEventListener('mouseup', () => {
                    this.mouse.down = false;
                });
                canvas.addEventListener('mousedown', () => {
                    this.mouse.down = true;
                });
                canvas.addEventListener("mousemove", (event) => {
                    this.mouse.x = event.offsetX;
                    this.mouse.y = event.offsetY;
                });
                canvas.addEventListener('mouseleave', () => {
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
                (_a = canvas.parentElement) === null || _a === void 0 ? void 0 : _a.addEventListener("touchstart", (event) => {
                    this.mouse.x = event.changedTouches[0].clientX;
                    this.mouse.y = event.changedTouches[0].clientY;
                });
                (_b = canvas.parentElement) === null || _b === void 0 ? void 0 : _b.addEventListener("touchmove", (event) => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX;
                    this.mouse.y = event.targetTouches[0].clientY;
                });
                (_c = canvas.parentElement) === null || _c === void 0 ? void 0 : _c.addEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
            }
            init(context, args) {
                let renderWidth = null;
                let renderHeight = null;
                if (args.image) {
                    let imageWidth = image.width;
                    let imageHeight = image.height;
                    let imageRatio = Math.min(props.minWidth || image.width, props.maxWidth || Number.POSITIVE_INFINITY) /
                        Math.min(props.minHeight || image.height, props.maxHeight || Number.POSITIVE_INFINITY);
                    let ratio = (Math.min(canvas.width || props.width || Number.POSITIVE_INFINITY) /
                        Math.min(canvas.height || props.height || Number.POSITIVE_INFINITY));
                    if (ratio < imageRatio) {
                        renderWidth = ~~Math.min(props.minWidth || canvas.width, imageWidth);
                        renderHeight = ~~Math.min(renderWidth / imageRatio);
                    }
                    else {
                        renderHeight = ~~Math.min(props.minHeight || canvas.height || props.height || Number.POSITIVE_INFINITY, imageHeight || props.maxHeight || Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY);
                        renderWidth = ~~(renderHeight * imageRatio);
                    }
                    let offsetX = ~~((canvas.width - renderWidth) / 2);
                    let offsetY = ~~((canvas.height - renderHeight) / 2);
                    // canvas.width = renderWidth;
                    // canvas.height=renderHeight;
                    // console.log(renderWidth, renderHeight);
                    if (props.color) {
                        context.fillStyle = props.color;
                    }
                    context.drawImage(args.image, offsetX, offsetY, renderWidth, renderHeight);
                    //(canvas.width/2)-(image.width/2),canvas.height/2-image.height/2, renderWidth, renderHeight);
                }
                if (args.text) {
                    context.fillStyle = props.color || "#000";
                    context.font = `${props.fontSize || 80}px ${props.font || 'sans-serif'}`;
                    context.fillText(args.text, canvas.width / 2 - context.measureText(args.text).width / 2, (canvas.height / 2) + (props.fontSize || 0) / 2);
                }
                let pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
                var index;
                for (var y = 0; y < this.height; y += this.gap) {
                    for (var x = 0; x < this.width; x += this.gap) {
                        index = (y * this.width + x) * 4;
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                        if (props.color) {
                            color = props.color;
                        }
                        const alpha = pixels[index + 3];
                        if (alpha > 128) {
                            this.particles.push(new Particle(this, x, y, color));
                        }
                    }
                }
                context.clearRect(0, 0, this.width, this.height);
            }
            get renderCount() {
                return this._renderCount;
            }
            set renderCount(value) {
                this._renderCount = value;
            }
            update() {
                for (var i = 0; i < this.particles.length; i++) {
                    this.particles[i].update();
                }
            }
            render(context) {
                this.renderCount = 0;
                context.clearRect(0, 0, this.width, this.height);
                for (var i = 0; i < this.particles.length; i++) {
                    var p = this.particles[i];
                    context.fillStyle = p.color;
                    if (props.strokeColor) {
                        context.strokeStyle = "red";
                    }
                    context.beginPath();
                    context.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                    // context.fillRect(p.x, p.y, p.size, p.size);
                    // context.strokeRect(p.x,p.y, p.size*4, p.size*4)
                    context.closePath();
                    if (props.strokeColor) {
                        context.stroke();
                    }
                    context.fill();
                }
            }
            stop(canvas) {
                var _a, _b, _c;
                canvas.removeEventListener('mouseup', () => {
                    this.mouse.down = false;
                });
                canvas.removeEventListener('mousedown', () => {
                    this.mouse.down = true;
                });
                canvas.removeEventListener("mousemove", (event) => {
                    this.mouse.x = event.offsetX;
                    this.mouse.y = event.offsetY;
                });
                canvas.removeEventListener('mouseleave', () => {
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
                (_a = canvas.parentElement) === null || _a === void 0 ? void 0 : _a.removeEventListener("touchstart", (event) => {
                    this.mouse.x = event.changedTouches[0].clientX;
                    this.mouse.y = event.changedTouches[0].clientY;
                });
                (_b = canvas.parentElement) === null || _b === void 0 ? void 0 : _b.removeEventListener("touchmove", (event) => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX;
                    this.mouse.y = event.targetTouches[0].clientY;
                });
                (_c = canvas.parentElement) === null || _c === void 0 ? void 0 : _c.removeEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
            }
        }
        let effect = new Effect(props.width, props.height);
        function animate() {
            effect.update();
            effect.render(ctx);
            requestAnimationFrame(animate);
        }
        if (props.imageUrl) {
            image.onload = function () {
                effect.init(ctx, { image });
                animate();
                effect.start(canvas);
            };
        }
        if (!props.imageUrl) {
            let text = props.text || "";
            effect.init(ctx, { text });
            animate();
            effect.start(canvas);
        }
        return () => {
            effect.stop(canvas);
        };
    }, [window.innerWidth, window.innerHeight]);
    return (React__namespace.createElement("div", { style: { width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', zIndex: 900 } },
        React__namespace.createElement("canvas", { style: props.canvasStyle, ref: cRef, width: props.width, height: props.height }),
        props.imageUrl &&
            (React__namespace.createElement("img", { src: props.imageUrl, alt: "particle-image", ref: iRef, style: { display: 'none' } }))));
}
// function Test(){
//     return(
//       <Particles width={window.innerWidth}
//                  height={window.innerHeight}
//                  friction={.69}
//                  ease={0.12}
//                  size={0.7}
//                  gap={1}
//                  radius={90}
//                  imageUrl={img}
//                  // area={500}
//                  // text={"Placeholder"}
//                  // fontSize={150}
//                  // font={"sans-serif"}
//                  // color={"#000"}
//       />
//     )
// }

var css_248z = ".motion-text > h1 > .word-wrapper > span {\n    font-size: 80px;\n    font-weight: 800;\n    margin: 0 0 20px;\n}\n.motion-text > h2 > .word-wrapper > span {\n    font-size: 50px;\n    font-weight: 700;\n    line-height: 1.4;\n    margin: 0;\n}\n.motion-text > h3 > .word-wrapper > span {\n    font-size: 40px;\n    font-weight: 5000;\n    line-height: 1.2;\n    margin: 0;\n}\n.motion-text > h4 > .word-wrapper > span {\n    font-size: 30px;\n    font-weight: 400;\n    line-height: 1.2;\n    opacity: 0.75;\n    margin: 0;\n}\n.motion-text > h5 > .word-wrapper > span {\n    font-size: 20px;\n    font-weight: 300;\n    line-height: 1;\n    opacity: 0.75;\n    margin: 0;\n}\n.motion-text > h6 > .word-wrapper > span {\n    font-size: 30px;\n    font-weight: 300;\n    line-height: 1;\n    margin: 0;\n}\n.motion-text > p > .word-wrapper > span {\n    font-size: 50px;\n    font-weight: bold;\n    line-height: 1.2;\n    margin: auto;\n}\n.word-wrapper {\n    white-space: nowrap;\n}";
styleInject(css_248z);

const Wrapper = (props) => {
    return (React__namespace.createElement("span", { style: {
            overflow: 'hidden',
            width: '100%', height: "100%",
        }, className: "word-wrapper" }, props.children));
};
const AnimatedText = (props) => {
    const item = {
        hidden: {
            y: "200%",
            color: "#000",
            overflow: 'hidden',
            rotate: 0,
            transition: {
                type: 'spring', bounce: 0.4,
                ease: [0.455, 0.03, 0.515, 0.955], duration: 0.35
            }
        },
        visible: {
            y: 0,
            rotate: props.rotate ? props.rotate : 0,
            overflow: "hidden",
            color: props.color,
            transition: {
                type: 'spring', bounce: props.bounce, bounceDamping: 0, bounceStiffness: 0,
                ease: [0, 0.37, 0.715, 1], duration: props.duration
            }
        }
    };
    const splitWords = props.text.split(" ");
    const words = [];
    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }
    words.map((word) => {
        return word.push("\u00A0");
    });
    // let fontSize;
    // switch(props.type){
    //     case "h1":fontSize=70; break;
    //     case "h2":fontSize=50; break;
    //     case "h3":fontSize=44; break;
    //     case "h4":fontSize=35; break;
    //     case "h5":fontSize=25; break;
    //     case "h6":fontSize=18; break;
    //     case "p":fontSize=12; break;
    //     default: fontSize=12; break;
    // }
    return (
    // <span className={"motion-text"} style={{display: 'flex', justifyContent: "center", alignItems: 'center'}}>
    React__namespace.createElement(props.element, Object.assign({}, props), words.map((word, index) => {
        return (React__namespace.createElement(Wrapper, { key: word + index }, words[index].flat().map((element, index) => {
            return (React__namespace.createElement("span", { className: "wr-c", style: {
                    width: "auto",
                    display: "inline-flex"
                }, key: index },
                React__namespace.createElement(props.element, { span: true, style: {
                        display: "inline-block"
                    }, variants: item }, element)));
        })));
    }))
    // </span>
    );
};
function Text(props) {
    const container = {
        hidden: {
            overflow: "hidden",
        },
        visible: (stagger) => {
            return {
                transition: {
                    staggerChildren: stagger,
                    type: 'spring', bounce: props.bounce, duration: 0.5, delayChildren: props.delay
                }
            };
        }
    };
    return (React__namespace.createElement(Framer.motion.div, { initial: "hidden", whileInView: "visible", variants: container, custom: props.staggerChildren, style: { display: 'flex', justifyContent: 'center', alignItems: 'center', width: "100%" } },
        React__namespace.createElement(AnimatedText, Object.assign({ rotate: props.rotate }, props, { element: props.element, bounce: props.bounce, color: props.color, duration: props.duration, text: props.text }))));
}

exports.Navigation = Navigation;
exports.Particles = Particles;
exports.Switch = Switch;
exports.Text = Text;
//# sourceMappingURL=index.js.map
