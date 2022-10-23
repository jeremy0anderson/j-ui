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
            return (React__namespace.createElement(DrawerContainer, { initial: { height: 0 }, animate: { height: props.open ? props.items.length * 60 : 0, }, transition: { type: 'spring', duration: 0.3 }, style: { zIndex: 1000, right: 0, background: props.menuBackground, width: "100vw", position: "fixed", top: 60, left: 0 } },
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
            React__namespace.createElement(Navbar, { style: { position: "fixed", top: 0, left: 0, zIndex: 1000 }, animate: animateProps, transition: { type: "spring", duration: 0.3 } },
                React__namespace.createElement(Toolbar, { style: { display: 'flex' } },
                    React__namespace.createElement(M__namespace.IconButton, { id: "menu-toggle", onClick: this.toggle },
                        React__namespace.createElement(I__namespace.MenuOutlined, null)),
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
//             anchor={"top"} items={["Home", "About", "Contact"]} menuBackground={'rgb(40,40,40)'} background={"linear-gradient(-45deg, rgb(125, 10, 201) 0%, rgb(125, 0, 100) 100%)"}/>
//         </BrowserRouter>
//     )
// }

const _requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  window.mozRequestAnimationFrame ||
  function(callback) {
    setTimeout(callback, 10);
  };
let imageData, renderCount;
let index, startIndex, layerIndex;
let origin, particle, touch, touchIndex, rect;
let x, y, z, dX, dY, dZ, distance;
let force, angle, intensity, vertices;
let canvas, context, data, r, g, b, a;
let tick;
let rotationX = 0;
let rotationY = 0;

const NextParticle = class NextParticle {
  constructor(optionsParam) {
    let options = {};
    if (optionsParam) {
      if (optionsParam.nodeName) {
        options = JSON.parse(JSON.stringify(optionsParam.dataset));
        if (optionsParam.nodeName === 'IMG') {
          options.image = optionsParam;
        } else {
          options.wrapperElement = optionsParam;
        }
      } else {
        options = optionsParam;
      }
    }
    this.xOffset = options.xOffset || 0;
    this.yOffset = options.yOffset || 0;
    this.state = 'stopped';
    this.touches = [];
    this.on('imageLoaded', this._onImageLoaded);
    this._initImage(options);
  }
  
  on(event, fn) {
    this.events = this.events || {};
    this.events[event] = this.events[event] || [];
    this.events[event].push(fn);
  }
  
  emit(event, params) {
    const events = this.events[event];
    if (events && events.length) {
      for (let eventIndex = 0; eventIndex < events.length; eventIndex++) {
        const cb = events[eventIndex];
        cb.call(this, params);
      }
    }
  }
  
  get renderer() {
    return this._renderer;
  }
  
  set renderer(value) {
    this._renderer = value;
    this._draw = this['_' + value + 'Renderer'];
    try {
      this['_' + value + 'InitContext']();
    } catch (e) {
      console.log(e);
      if (value !== 'default') {
        this.renderer = 'default';
      }
    }
  }
  
  set color(value) {
    this.colorArr = this._parseColor(value);
    if (this.colorArr) {
      if (isNaN(this.colorArr[3])) {
        this.colorArr[3] = 255;
      }
      if (0 < this.colorArr[3] && this.colorArr[3] <= 1) {
        this.colorArr[3] *= 255;
      }
    }
  }
  
  start(optionsParam) {
    const options = optionsParam || {};
    this.initPosition = options.initPosition || this.initPosition;
    this.initDirection = options.initDirection || this.initDirection;
    if (this.canvas) {
      this.canvas.width = this.width;
      this.canvas.height = this.height;
      this.canvas.style.display = '';
    }
    this._initOrigins();
    this._initParticles();
    this._webglSetAttributes();
    if (this.state !== 'running') {
      this.state = 'running';
      if (!this.disableInteraction) {
        if ('ontouchstart' in window || window.navigator.msPointerEnabled) {
          document.body.addEventListener('touchstart', this._touchHandler);
          document.body.addEventListener('touchmove', this._touchHandler);
          document.body.addEventListener('touchend', this._clearTouches);
          document.body.addEventListener('touchcancel', this._clearTouches);
        } else {
          this.canvas.addEventListener('mousemove', this._mouseHandler);
          this.canvas.addEventListener('mouseout', this._clearTouches);
          this.canvas.addEventListener('click', this._clickHandler);
        }
      }
      this._animate();
    }
  }
  
  stop(optionsParam) {
    const options = optionsParam || {};
    this.fadePosition = options.fadePosition || this.fadePosition;
    this.fadeDirection = options.fadeDirection || this.fadeDirection;
    this._fade();
    document.body.removeEventListener('touchstart', this._touchHandler);
    document.body.removeEventListener('touchmove', this._touchHandler);
    document.body.removeEventListener('touchend', this._clearTouches);
    document.body.removeEventListener('touchcancel', this._clearTouches);
    if (this.canvas) {
      this.canvas.removeEventListener('mousemove', this._mouseHandler);
      this.canvas.removeEventListener('mouseout', this._clearTouches);
      this.canvas.removeEventListener('click', this._clickHandler);
    }
  }
  
  _animate() {
    if (this.state !== 'stopped') {
      this._calculate();
      this._draw();
      _requestAnimationFrame(() => this._animate());
    } else {
      this.emit('stopped');
    }
  }
  
  get _mouseHandler() {
    return e => {
      this.touches = [
        {
          x:  e.offsetX,
          y: e.clientY,
          z: 4 + (this.layerCount - 1) * this.layerDistance,
          force: 1,
        },
      ];
    };
  }
  
  get _clickHandler() {
    return e => {
      const strength = this.clickStrength;
      this.origins.map(o => (o.z -= strength));
      setTimeout(() => {
        this.origins.map(o => (o.z += strength));
      }, 100);
    };
  }
  
  get _touchHandler() {
    return e => {
      this.touches = [];
      rect = this.canvas.getBoundingClientRect();
      for (touchIndex = 0; touchIndex < e.changedTouches.length; touchIndex++) {
        touch = e.changedTouches[touchIndex];
        if (touch.target === this.canvas) {
          this.touches.push({
            x: touch.pageX - rect.left,
            y: touch.pageY - rect.top,
            z: 49 + (this.layerCount - 1) * this.layerDistance,
            force: touch.force || 1,
          });
          e.preventDefault();
        }
      }
    };
  }
  
  get _clearTouches() {
    return e => {
      this.touches = [];
    };
  }
  
  _onImageLoaded(options) {
    this.imageWidth = this.image.naturalWidth || this.image.width;
    this.imageHeight = this.image.naturalHeight || this.image.height;
    this.imageRatio = this.imageWidth / this.imageHeight;
    this.width = this.width || this.imageWidth;
    this.height = this.height || this.imageHeight;
    this.renderSize = (this.width + this.height) / 10;
    if (this.srcImage) {
      this.srcImage.style.display = 'none';
    }
    this._initSettings(options);
    this._initContext(options);
    this._initResponsive(options);
    this.start();
  }
  
  _initImage(options) {
    this.srcImage = options.image;
    if (!this.srcImage && options.imageId) {
      this.srcImage = document.getElementById(options.imageId);
    }
    this.imageUrl = options.imageUrl || this.srcImage.src;
    this.image = document.createElement('img');
    this.wrapperElement = options.wrapperElement || this.srcImage.parentElement;
    this.image.onload = () => this.emit('imageLoaded', options);
    this.image.crossOrigin = 'Anonymous';
    if (options.addTimestamp) {
      if (/\?/.test(this.imageUrl)) {
        this.imageUrl += '&d=' + Date.now();
      } else {
        this.imageUrl += '?d=' + Date.now();
      }
    }
    this.image.src = this.imageUrl;
  }
  
  _initContext(options) {
    this.canvas = options.canvas;
    if (!this.canvas && !this.context && this.wrapperElement) {
      this.canvas = document.createElement('canvas');
      this.wrapperElement.appendChild(this.canvas);
    }
    if (this.convas) {
      this.convas.style.display = 'none';
    }
    this.context = options.context;
    this.renderer = options.renderer || 'default';
  }
  
  _defaultInitContext(options) {
    this.context = this.context || this.canvas.getContext('2d');
  }
  
  _webglInitContext() {
    this.context =
      this.context ||
      this.canvas.getContext('webgl2') ||
      this.canvas.getContext('experimental-webgl');
    this.fragmentShaderScript = `#version 300 es

        precision highp float;

        in vec4 vColor;
        out vec4 fragColor;

        void main(void) {
          // fragColor = vec4(1, 1, 1, 0.1);
          fragColor = vColor;
        }
      `;
    
    this.vertexShaderScript = `#version 300 es

        precision highp float;

        in vec3 vertexPosition;
        in vec4 vertexColor;
        uniform vec3 vertexOffset;
        uniform float pointSize;
        uniform float depth;
        vec3 mirror = vec3(1, -1, 1);

        uniform mat4 modelViewMatrix;
        uniform mat4 perspectiveMatrix;
        uniform mat4 rotationMatrix;

        out vec4 vColor;

        void main(void) {
          gl_Position = rotationMatrix * perspectiveMatrix * modelViewMatrix * vec4(mirror * vertexPosition + vertexOffset, vertexPosition);
          gl_PointSize = pointSize + max((log(vertexPosition.z) - 9.91) * depth, -pointSize + 1.0);
          vColor = vertexColor;
        }
      `;
    this.context.viewport(0, 0, this.width, this.height);
    const vertexShader = this.context.createShader(this.context.VERTEX_SHADER);
    this.context.shaderSource(vertexShader, this.vertexShaderScript);
    this.context.compileShader(vertexShader);
    if (!this.context.getShaderParameter(vertexShader, this.context.COMPILE_STATUS)) {
      console.log(this.context.getShaderInfoLog(vertexShader));
    }
    const fragmentShader = this.context.createShader(this.context.FRAGMENT_SHADER);
    this.context.shaderSource(fragmentShader, this.fragmentShaderScript);
    this.context.compileShader(fragmentShader);
    if (!this.context.getShaderParameter(fragmentShader, this.context.COMPILE_STATUS)) {
      console.log(this.context.getShaderInfoLog(fragmentShader));
    }
    this.program = this.context.createProgram();
    this.context.attachShader(this.program, vertexShader);
    this.context.attachShader(this.program, fragmentShader);
    this.context.linkProgram(this.program);
    this.context.useProgram(this.program);
    this.vertexPosition = this.context.getAttribLocation(this.program, 'vertexPosition');
    this.context.enableVertexAttribArray(this.vertexPosition);
    this.vertexColor = this.context.getAttribLocation(this.program, 'vertexColor');
    this.context.enableVertexAttribArray(this.vertexColor);
    this.context.clearColor(0.0, 0.0, 0.0, 0.0);
    this.context.enable(this.context.BLEND);
    this.context.disable(this.context.DEPTH_TEST);
    this.context.blendFunc(this.context.SRC_ALPHA, this.context.ONE);
    this.vertexBuffer = this.context.createBuffer();
    this.context.bindBuffer(this.context.ARRAY_BUFFER, this.vertexBuffer);
    this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
    this.vertexOffset = this.context.getUniformLocation(this.program, 'vertexOffset');
    this.context.uniform3f(this.vertexOffset, this.xOffset, this.yOffset, 1000);
    this.context.vertexAttribPointer(this.vertexPosition, 3.0, this.context.FLOAT, false, 28, 0);
    this.context.vertexAttribPointer(this.vertexColor, 4.0, this.context.FLOAT, false, 28, 12);
    this.uModelViewMatrix = this.context.getUniformLocation(this.program, 'modelViewMatrix');
    this.uPerspectiveMatrix = this.context.getUniformLocation(this.program, 'perspectiveMatrix');
    this.uRotationMatrix = this.context.getUniformLocation(this.program, 'rotationMatrix');
    this.uPointSize = this.context.getUniformLocation(this.program, 'pointSize');
    this.uDepth = this.context.getUniformLocation(this.program, 'depth');
    // this.uVertexColors = this.context.getUniformLocation(this.program, 'vertexColors');
    // this.uVertexIndex = this.context.getUniformLocation(this.program, 'vertexIndex');
    
    this._webglSetAttributes();
  }
  
  _webglSetAttributes() {
    if (this.renderer === 'webgl') {
      var fieldOfView = 1;
      var aspectRatio = this.canvas.width / this.canvas.height;
      var nearPlane = 10;
      var farPlane = 100;
      var top = nearPlane * Math.tan((fieldOfView * Math.PI) / 360.0);
      var bottom = -top;
      var right = top * aspectRatio;
      var left = -right;
      var a = (right + left) / (right - left);
      var b = (top + bottom) / (top - bottom);
      var c = (farPlane + nearPlane) / (farPlane - nearPlane);
      var d = (2 * farPlane * nearPlane) / (farPlane - nearPlane);
      var x = (2 * nearPlane) / (right - left);
      var y = (2 * nearPlane) / (top - bottom);
      
      var perspectiveMatrix = [x, 0, a, 0, 0, y, b, 0, 0, 0, c, d, 0, 0, -1, 0];
      var modelViewMatrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      this.context.viewport(0, 0, this.width, this.height);
      this.context.uniformMatrix4fv(
        this.uModelViewMatrix,
        false,
        new Float32Array(perspectiveMatrix),
      );
      this.context.uniformMatrix4fv(
        this.uPerspectiveMatrix,
        false,
        new Float32Array(modelViewMatrix),
      );
      this.context.uniform1f(this.uPointSize, this.particleSize);
      this.context.uniform1f(this.uDepth, this.depth);
      // this.context.uniform4fv(this.uVertexColors, new Float32Array(this.vertexColors));
      // this.context.uniform1f(this.uVertexIndex, 0);
      this._updateRotation();
    }
  }
  
  _updateRotation() {
    const a = Math.cos(rotationX);
    const b = Math.sin(rotationX);
    const c = Math.cos(rotationY);
    const d = Math.sin(rotationY);
    var rotationMatrix = [c, 0, d, 0, 0, a, -b, 0, -c, b, a, 0, 0, 0, 0, 1];
    this.context.uniformMatrix4fv(this.uRotationMatrix, false, new Float32Array(rotationMatrix));
  }
  
  _webglRenderer() {
    vertices = new Float32Array(this.vertices);
    this.context.bufferData(this.context.ARRAY_BUFFER, vertices, this.context.STATIC_DRAW);
    this.context.clear(this.context.COLOR_BUFFER_BIT | this.context.DEPTH_BUFFER_BIT);
    this.context.drawArrays(this.context.POINTS, 0, this.particles.length);
    this.context.flush();
  }
  
  _initSettings(options) {
    this.width = options.width * 1 || this.width;
    this.height = options.height * 1 || this.height;
    this.maxWidth = options.maxWidth;
    this.maxHeight = options.maxHeight;
    this.minWidth = options.minWidth;
    this.minHeight = options.minHeight;
    if (this.maxWidth) {
      if (/%$/.test(this.maxWidth)) {
        this.maxWidth = (this.width * this.maxWidth.replace('%', '')) / 100;
      } else {
        this.maxWidth *= 1;
      }
    }
    if (this.maxHeight) {
      if (/%$/.test(this.maxHeight)) {
        this.maxHeight = (this.height * this.maxHeight.replace('%', '')) / 100;
      } else {
        this.maxHeight *= 1;
      }
    }
    if (this.minWidth) {
      if (/%$/.test(this.minWidth)) {
        this.minWidth = (this.width * this.minWidth.replace('%', '')) / 100;
      } else {
        this.minWidth *= 1;
      }
    }
    if (this.minHeight) {
      if (/%$/.test(this.minHeight)) {
        this.minHeight = (this.height * this.minHeight.replace('%', '')) / 100;
      } else {
        this.minHeight *= 1;
      }
    }
    this.alphaFade = 0.4;
    this.gravity = options.gravity * 1 || 0.08;
    this.particleGap = options.particleGap * 1 || 3;
    this.particleSize = options.particleSize * 1 || 1;
    this.layerCount = options.layerCount * 1 || 1;
    this.depth = options.depth * 1 || 1;
    this.rotationDuration = options.rotationDuration * 1 || 0;
    this.growDuration = options.growDuration * 1 || 200;
    this.waitDuration = options.waitDuration * 1 || 200;
    this.shrinkDuration = options.shrinkDuration * 1 || 200;
    this.shrinkDistance = options.shrinkDistance * 1 || 50;
    this.threeDimensional =
      options.threeDimensional !== undefined && options.threeDimensional !== 'false'
        ? !!options.threeDimensional
        : false;
    this.lifeCycle =
      options.lifeCycle !== undefined && options.lifeCycle !== 'false'
        ? !!options.lifeCycle
        : false;
    this.layerDistance = options.layerDistance || this.particleGap;
    this.initPosition = options.initPosition || 'random';
    this.initDirection = options.initDirection || 'random';
    this.fadePosition = options.fadePosition || 'none';
    this.fadeDirection = options.fadeDirection || 'none';
    this.noise = isNaN(options.noise * 1) ? 10 : options.noise * 1;
    this.disableInteraction = options.disableInteraction;
    this.mouseForce = options.mouseForce * 1 || 30;
    this.clickStrength = options.clickStrength * 1 || 0;
    this.color = options.color;
    this.colorArr = options.colorArr || this.colorArr;
  }
  
  _initResponsive(options) {
    this.responsiveWidth = this.wrapperElement && options.responsiveWidth;
    if (this.responsiveWidth) {
      this.on('stopped', () => {
        this.width = this.wrapperElement.clientWidth;
        this.start();
      });
      this.wrapperElement.addEventListener('resize', () => {
        if (this.width !== this.wrapperElement.clientWidth) {
          this.stop();
        }
      });
      this.width = this.wrapperElement.clientWidth;
    }
  }
  
  _calculate() {
    this.vertices = this.renderer === 'webgl' ? [] : false;
    
    renderCount = 0;
    for (index = 0; index < this.particles.length; index++) {
      origin = this.origins[index];
      particle = this.particles[index];
      dX = origin.x - particle.x + (Math.random() - 0.5) * this.noise;
      dY = origin.y - particle.y + (Math.random() - 0.5) * this.noise;
      dZ = origin.z - particle.z + ((Math.random() - 0.5) * this.noise) / 1000;
      distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
      force = distance * 0.01;
      particle.vx += force * (dX / distance) * this.speed;
      particle.vy += force * (dY / distance) * this.speed;
      particle.vz += force * (dZ / distance) * this.speed;
      for (touchIndex = 0; touchIndex < this.touches.length; touchIndex++) {
        touch = this.touches[touchIndex];
        dX = particle.x - touch.x;
        dY = particle.y - touch.y;
        dZ = particle.z - touch.z;
        distance = Math.sqrt(dX * dX + dY * dY + dZ * dZ);
        force = (this.mouseForce * touch.force) / distance;
        particle.vx += force * (dX / distance) * this.speed;
        particle.vy += force * (dY / distance) * this.speed;
        particle.vz += force * (dZ / distance) * this.speed;
      }
      particle.vx *= this.gravityFactor;
      particle.vy *= this.gravityFactor;
      particle.vz *= this.gravityFactor;
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.z += particle.vz;
      if (
        0 > particle.x ||
        particle.x >= this.width ||
        0 > particle.y ||
        particle.y >= this.height
      ) {
        particle.isHidden = true;
        if (this.state === 'stopping') {
          particle.isDead = true;
        }
      } else {
        if (this.state === 'stopping' && !particle.isDead) {
          renderCount++;
        }
        particle.isHidden = false;
      }
      if (this.vertices) {
        x = particle.x - this.width / 2;
        y = particle.y - this.height / 2;
        z = particle.z;
        a = origin.vertexColors[3];
        if (this.lifeCycle) {
          origin.tick += 1;
          if (origin.tick >= 0) {
            if (origin.tick < this.growDuration) {
              a = a * (origin.tick / this.growDuration);
              // z -= 50 * (tick / this.shrinkDuration);
            } else {
              tick = origin.tick - this.growDuration - this.waitDuration;
              if (tick >= 0 && tick <= this.shrinkDuration) {
                touch = this.touches[touchIndex];
                // rotationX = Math.PI / 2 + Math.cos(dX * Math.PI / 2) * dX * Math.PI * 0.1;
                // rotationY = Math.PI / 2 + Math.cos(dY * Math.PI / 2) * dY * Math.PI * 0.1;
                distance = Math.sqrt(x * x + y * y + (z - 50) * (z - 50));
                // distance = Math.sqrt(x * x + y * y);
                force = tick / this.shrinkDuration;
                x += this.shrinkDistance * (x / distance) * force;
                y += this.shrinkDistance * (y / distance) * force;
                z += this.shrinkDistance * ((z - 50) / distance) * force;
                a *= 1 - force;
                if (tick === this.shrinkDuration) {
                  origin.tick = 0;
                }
              }
            }
          } else {
            a = 0;
          }
        }
        this.vertices.push(
          x,
          y,
          z,
          origin.vertexColors[0],
          origin.vertexColors[1],
          origin.vertexColors[2],
          a,
        );
      }
    }
    if (this.state === 'stopping' && renderCount === 0) {
      this.state = 'stopped';
    }
  }
  
  _defaultRenderer() {
    this.depth = Math.max((this.layerDistance * this.layerCount) / 2, this.mouseForce);
    this.minZ = -this.depth;
    this.maxZ = this.depth;
    imageData = this.context.createImageData(this.width, this.height);
    
    for (index = 0; index < this.origins.length; index++) {
      origin = this.origins[index];
      particle = this.particles[index];
      if (!particle.isDead && !particle.isHidden) {
        x = ~~particle.x;
        y = ~~particle.y;
        a = origin.color[3];
        if (this.alphaFade > 0 && this.layerCount > 1) {
          z = Math.max(Math.min(particle.z, this.maxZ), this.minZ) - this.minZ;
          a = a * (1 - this.alphaFade) + a * this.alphaFade * (z / (this.maxZ - this.minZ));
          a = Math.max(Math.min(~~a, 255), 0);
        }
        startIndex = (x + y * this.width) * 4;
        imageData.data[startIndex + 0] = origin.color[0];
        imageData.data[startIndex + 1] = origin.color[1];
        imageData.data[startIndex + 2] = origin.color[2];
        imageData.data[startIndex + 3] = a;
      }
    }
    this.context.putImageData(imageData, 0, 0);
  }
  
  _initParticles() {
    this.particles = undefined;
    this.particles = [];
    for (index = 0; index < this.origins.length; index++) {
      origin = this.origins[index];
      particle = {};
      this._initParticlePosition(origin, particle);
      this._initParticleDirection(particle);
      this.particles.push(particle);
    }
  }
  
  _initParticlePosition(origin, particle) {
    particle.z = 0;
    switch (this.initPosition) {
      case 'random': {
        particle.x = Math.random() * this.width;
        particle.y = Math.random() * this.height;
        break;
      }
      case 'top': {
        particle.x = Math.random() * this.width * 3 - this.width;
        particle.y = -Math.random() * this.height;
        break;
      }
      case 'left': {
        particle.x = -Math.random() * this.width;
        particle.y = Math.random() * this.height * 3 - this.height;
        break;
      }
      case 'bottom': {
        particle.x = Math.random() * this.width * 3 - this.width;
        particle.y = this.height + Math.random() * this.height;
        break;
      }
      case 'right': {
        particle.x = this.width + Math.random() * this.width;
        particle.y = Math.random() * this.height * 3 - this.height;
        break;
      }
      case 'misplaced': {
        particle.x = origin.x + Math.random() * this.width * 0.3 - this.width * 0.1;
        particle.y = origin.y + Math.random() * this.height * 0.3 - this.height * 0.1;
        break;
      }
      default: {
        particle.x = origin.x;
        particle.y = origin.y;
      }
    }
  }
  
  _fade() {
    if (
      this.fadePosition === 'explode' ||
      this.fadePosition === 'top' ||
      this.fadePosition === 'left' ||
      this.fadePosition === 'bottom' ||
      this.fadePosition === 'right'
    ) {
      this.state = 'stopping';
    } else {
      this.state = 'stopped';
    }
    if (this.origins) {
      for (index = 0; index < this.origins.length; index++) {
        this._fadeOriginPosition(this.origins[index]);
        this._fadeOriginDirection(this.particles[index]);
      }
    }
  }
  
  _fadeOriginPosition(origin) {
    switch (this.fadePosition) {
      case 'random': {
        origin.x = Math.random() * this.width * 2 - this.width;
        origin.y = Math.random() * this.height * 2 - this.height;
        if (origin.x > 0) origin.x += this.width;
        if (origin.y > 0) origin.y += this.height;
        break;
      }
      case 'top': {
        origin.x = Math.random() * this.width * 3 - this.width;
        origin.y = -Math.random() * this.height;
        break;
      }
      case 'left': {
        origin.x = -Math.random() * this.width;
        origin.y = Math.random() * this.height * 3 - this.height;
        break;
      }
      case 'bottom': {
        origin.x = Math.random() * this.width * 3 - this.width;
        origin.y = this.height + Math.random() * this.height;
        break;
      }
      case 'right': {
        origin.x = this.width + Math.random() * this.width;
        origin.y = Math.random() * this.height * 3 - this.height;
        break;
      }
    }
  }
  
  _initParticleDirection(particle) {
    particle.vz = 0;
    switch (this.initDirection) {
      case 'random': {
        angle = Math.random() * Math.PI * 2;
        intensity = Math.random();
        particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'top': {
        angle = Math.random() * Math.PI - Math.PI / 2;
        intensity = Math.random();
        particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'left': {
        angle = Math.random() * Math.PI + Math.PI;
        intensity = Math.random();
        particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'bottom': {
        angle = Math.random() * Math.PI + Math.PI / 2;
        intensity = Math.random();
        particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'right': {
        angle = Math.random() * Math.PI;
        intensity = Math.random();
        particle.vx = this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy = this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      default: {
        particle.vx = 0;
        particle.vy = 0;
      }
    }
  }
  
  _fadeOriginDirection(particle) {
    switch (this.fadeDirection) {
      case 'random': {
        angle = Math.random() * Math.PI * 2;
        intensity = Math.random();
        particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'top': {
        angle = Math.random() * Math.PI - Math.PI / 2;
        intensity = Math.random();
        particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'left': {
        angle = Math.random() * Math.PI + Math.PI;
        intensity = Math.random();
        particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'bottom': {
        angle = Math.random() * Math.PI + Math.PI / 2;
        intensity = Math.random();
        particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      case 'right': {
        angle = Math.random() * Math.PI;
        intensity = Math.random();
        particle.vx += this.width * intensity * Math.sin(angle) * 0.1;
        particle.vy += this.height * intensity * Math.cos(angle) * 0.1;
        break;
      }
      default: {
        particle.vx = 0;
        particle.vy = 0;
      }
    }
  }
  
  _initOrigins() {
    canvas = document.createElement('canvas');
    if (this.responsiveWidth) {
      this.width = this.wrapperElement.clientWidth;
    }
    this.ratio =
      Math.min(this.width, this.maxWidth || Number.POSITIVE_INFINITY) /
      Math.min(this.height, this.maxHeight || Number.POSITIVE_INFINITY);
    if (this.ratio < this.imageRatio) {
      this.renderWidth = ~~Math.min(
        this.width || Number.POSITIVE_INFINITY,
        this.minWidth || this.imageWidth || Number.POSITIVE_INFINITY,
        this.maxWidth || Number.POSITIVE_INFINITY,
      );
      this.renderHeight = ~~(this.renderWidth / this.imageRatio);
    } else {
      this.renderHeight = ~~Math.min(
        this.height || Number.POSITIVE_INFINITY,
        this.minHeight || this.imageHeight || Number.POSITIVE_INFINITY,
        this.maxHeight || Number.POSITIVE_INFINITY,
      );
      this.renderWidth = ~~(this.renderHeight * this.imageRatio);
    }
    this.offsetX = ~~((this.width - this.renderWidth) / 2);
    this.offsetY = ~~((this.height - this.renderHeight) / 2);
    canvas.width = this.renderWidth;
    canvas.height = this.renderHeight;
    context = canvas.getContext('2d');
    context.drawImage(this.image, 0, 0, this.renderWidth, this.renderHeight);
    data = context.getImageData(0, 0, this.renderWidth, this.renderHeight).data;
    this.origins = undefined;
    this.origins = [];
    const duration = this.growDuration + this.waitDuration + this.shrinkDuration;
    for (x = 0; x < this.renderWidth; x += this.particleGap) {
      for (y = 0; y < this.renderHeight; y += this.particleGap) {
        index = (x + y * this.renderWidth) * 4;
        a = data[index + 3];
        if (a > 0) {
          const seed = Math.random();
          tick = -Math.floor(seed * duration);
          if (this.colorArr) {
            for (layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
              this.origins.push({
                x: this.offsetX + x,
                y: this.offsetY + y,
                z: layerIndex * this.layerDistance + 50,
                color: this.colorArr,
                tick,
                seed,
                vertexColors: this.colorArr.map(c => c / 255),
              });
            }
          } else {
            r = data[index];
            g = data[index + 1];
            b = data[index + 2];
            for (layerIndex = 0; layerIndex < this.layerCount; layerIndex++) {
              this.origins.push({
                x: this.offsetX + x,
                y: this.offsetY + y,
                z: layerIndex * this.layerDistance + 50,
                color: [r, g, b, a],
                tick,
                seed,
                vertexColors: [r / 255, g / 255, b / 255, a / 255],
              });
            }
          }
        }
      }
    }
    this.speed = Math.log(this.origins.length) / 20;
    this.gravityFactor = 1 - this.gravity * this.speed;
  }
  
  _parseColor(strParam) {
    let color;
    if (typeof strParam !== 'string') {
      return undefined;
    }
    const str = strParam.replace(' ', '');
    
    if ((color = /^#([\da-fA-F]{2})([\da-fA-F]{2})([\da-fA-F]{2})/.exec(str))) {
      color = [parseInt(color[1], 16), parseInt(color[2], 16), parseInt(color[3], 16)];
    } else if ((color = /^#([\da-fA-F])([\da-fA-F])([\da-fA-F])/.exec(str))) {
      color = [
        parseInt(color[1], 16) * 17,
        parseInt(color[2], 16) * 17,
        parseInt(color[3], 16) * 17,
      ];
    } else if ((color = /^rgba\(([\d]+),([\d]+),([\d]+),([\d]+|[\d]*.[\d]+)\)/.exec(str))) {
      color = [+color[1], +color[2], +color[3], +color[4]];
    } else if ((color = /^rgb\(([\d]+),([\d]+),([\d]+)\)/.exec(str))) {
      color = [+color[1], +color[2], +color[3]];
    } else return undefined;
    
    return color;
  }
};

exports.NextParticleRenderer = void 0;
(function (NextParticleRenderer) {
    NextParticleRenderer["webgl"] = "webgl";
    NextParticleRenderer["default"] = "default";
})(exports.NextParticleRenderer || (exports.NextParticleRenderer = {}));
let np;
const ParticleImage = settings => {
    const wrapperRef = React.createRef();
    const start = () => {
        np = new NextParticle(Object.assign(Object.assign({}, settings), { wrapperElement: wrapperRef.current }));
        if (!np.events.stopped) {
            np.on('stopped', function () {
                this.canvas.remove();
            });
        }
    };
    React.useEffect(() => {
        if (np) {
            np.events.imageLoaded = [];
            np.stop();
        }
        start();
    });
    return React__namespace.createElement("div", { ref: wrapperRef, className: settings.className, style: Object.assign(Object.assign({}, settings.style), { display: 'flex', justifyContent: 'center', alignItems: 'center' }) });
};
// function Test(){
//     return(
//       <ParticleImage
//         xOffset={10}
//           initDirection={'none'}
//           initPosition={'none'}
//           width={300}
//           mouseForce={90}
//           renderer={"webgl"}
//           gravity={0.095}
//           noise={1}
//           layerCount={5}
//           layerDistance={2}
//           particleSize={1}
//           className={"next-particle"}
//           clickStrength={800}
//           particleGap={2}
//           height={300}
//           minWidth={300}
//           minHeight={300}
//           maxWidth={300}
//           maxHeight={300}
//           imageUrl={bub}
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
exports.ParticleImage = ParticleImage;
exports.Switch = Switch;
exports.Text = Text;
//# sourceMappingURL=index.js.map
