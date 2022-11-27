import * as React from "react"
// import PropTypes from 'prop-types';
// import logo from "./box.svg";
//@ts-ignore
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
let canvas:HTMLCanvasElement|any = document.createElement('canvas'), ctx:CanvasRenderingContext2D|any, image:HTMLImageElement|any;
export declare type ParticleProps = {
    alphaLimit:number|boolean;
    image?: HTMLImageElement | string;
    id?: string;
    width: number;
    height: number;
    friction:number;
    ease:number;
    style?:{}
    grid?:boolean;
    connect:boolean;
    gap:number;
    radius:number;
    minWidth?:number; minHeight?:number;
    maxWidth?:number; maxHeight?:number;
    scale:number;
    color?:string;
    font?:string;
    fontSize?:number;
    size:number;
    lineWidth?:number;
    canvasBackground:string;
    lineColor?:string;
    imageUrl?:string;
    text?:string;
}
export const Particle:React.FC = (props:ParticleProps)=>{

    // const cRef:any = React.useRef(HTMLCanvasElement);
    const iRef:any = React.useRef();
    const wRef:any = React.useRef();

    React.useEffect(() => {
        image = iRef.current;
        let wrapper:HTMLDivElement= wRef.current;
        canvas.id = props.id;
        ctx = canvas.getContext("2d", { willReadFrequently: true })
        if (props.imageUrl) {
            image = iRef.current
        }
        canvas.width = props.width
        canvas.height = props.height


        class Particle {
            effect;x;y;size;color;dx;dy;vx;vy;force;angle;distance;friction;ease;originX;originY;
            constructor(effect:Effect, x:number, y:number, color:string, size:number) {
                this.effect = effect
                this.x = this.originX = x
                this.y = this.originY = y
                this.size = size || 0.5
                this.color = color || "black"
                this.dx = 0
                this.dy = 0
                this.vx = 0
                this.vy = 0
                this.force = 0
                this.angle = 0
                this.distance = 0
                this.friction = props.friction || 0.98
                this.ease = props.ease || 0.0789
            }
            update() {
                let speed = Math.log(this.effect.particles.length) / 10;

                // const original = this.color;
                this.dx = this.effect.mouse.x - this.x
                this.dy = this.effect.mouse.y - this.y
                this.distance = Math.sqrt((this.dx * this.dx)+ (this.dy * this.dy))
                this.force = (-this.effect.mouse.radius / this.distance);
                this.angle = Math.atan2(this.dy, this.dx)
                //@ts-ignore
                if (0 < this.distance <= this.effect.mouse.radius) {
                    if (this.effect.mouse.down) {
                        this.vx += this.force
                          * Math.cos(this.angle)*speed;
                        this.vy += this.force
                          * Math.sin(this.angle)*speed;
                        this.vx *= this.friction - this.ease;
                        this.vy *= this.friction - this.ease;
                        this.vx/= speed
                        this.vy/=speed
                    } else {
                        this.vx += this.force
                          * Math.cos(this.angle) * speed;
                        this.vy += this.force
                          * Math.sin(this.angle) *speed;
                    }
                }
                this.vx *= this.friction -this.ease;
                this.vy *= this.friction -this.ease;
                this.x +=
                  (this.vx) + (this.originX - this.x) *this.ease*speed;
                this.y +=
                  (this.vy) + (this.originY - this.y) *this.ease*speed;
            }
        }
        class Effect {
            particles:Particle[];width;height;image:any;centerX;centerY;x;y;gap;mouse;context;
            constructor(width:number, height:number, ctx:CanvasRenderingContext2D) {
                this.width = width
                this.height = height
                this.image = iRef.current;
                this.centerX = this.width / 2
                this.context = ctx;
                this.centerY = this.height / 2
                this.x = props.width / 2 - this.image.width / 2
                this.y = props.height / 2 - this.image.height / 2
                this.particles = []
                this.gap = props.gap
                this.mouse = {
                    radius: props.radius,
                    x: -Infinity,
                    y: -Infinity,
                    down: false
                }
                // for (let key in props) {
                //     this[key] = props[key]
                // }
            }
            start(canvas:HTMLCanvasElement, window:Window) {
                props.grid ?
                  window.addEventListener("mousedown", () => {
                      this.mouse.down = true;
                  }) : canvas.addEventListener("mousedown", () => {
                      this.mouse.down = true;
                  });
                props.grid ?
                  window.addEventListener('mouseup', () => {
                      this.mouse.down = false;
                  }) : canvas.addEventListener('mouseup', () => {
                      this.mouse.down = false;
                  });
                props.grid ?
                  window.addEventListener("mousemove", event => {
                      this.mouse.x = event.offsetX
                      this.mouse.y = event.offsetY
                  }) : canvas.addEventListener("mousemove", event => {
                      this.mouse.x = event.offsetX
                      this.mouse.y = event.offsetY
                  })
                props.grid ?
                  window.addEventListener("mouseleave", () => {
                      this.mouse.x = -Infinity
                      this.mouse.y = -Infinity
                  }) : canvas.addEventListener("mouseleave", () => {
                      this.mouse.x = -Infinity
                      this.mouse.y = -Infinity
                  });
                canvas.parentElement?.addEventListener("touchstart", event => {
                    this.mouse.x = event.changedTouches[0].clientX+ window.pageXOffset
                    this.mouse.y = event.changedTouches[0].clientY+ window.pageYOffset
                })

                canvas.parentElement?.addEventListener("touchmove", event => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX + window.pageXOffset
                    this.mouse.y = event.targetTouches[0].clientY + window.pageYOffset;
                })

                canvas.parentElement?.addEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity
                    this.mouse.y = -Infinity
                })
            }
            init(context:CanvasRenderingContext2D, args:any) {
                let renderWidth;
                let renderHeight;
                if (args.image) {
                    let imageWidth = image.width
                    let imageHeight = image.height
                    let imageRatio =
                        image.width / image.height;
                        // Math.min(
                        //     props.minWidth || image.width,
                        //     props.maxWidth || Number.POSITIVE_INFINITY
                        // ) /
                        // Math.min(
                        //     props.minHeight || image.height,
                        //     props.maxHeight || Number.POSITIVE_INFINITY
                        // )
                    let ratio =
                        Math.min(canvas.width || image.width || this.width || Number.POSITIVE_INFINITY) /
                        Math.min(canvas.height || image.height || this.height || Number.POSITIVE_INFINITY)
                    if (ratio < imageRatio) {
                        renderWidth = Math.min(props.minWidth || canvas.width || this.width, imageWidth)
                        renderHeight = Math.min(renderWidth / imageRatio)
                    } else {
                        renderHeight = Math.min(
                            props.minHeight ||
                            canvas.height ||
                            props.height ||
                            Number.POSITIVE_INFINITY,
                            imageHeight || props.maxHeight || Number.POSITIVE_INFINITY,
                            Number.POSITIVE_INFINITY
                        )
                        renderWidth = (renderHeight * imageRatio)
                    }
                    let offsetX =((canvas.width - renderWidth*props.scale ||1) / 2)
                    let offsetY =((canvas.height - renderHeight*props.scale|| 1) / 2)
                    // canvas.width = renderWidth*props.scale ||1 /2;
                    // canvas.height=renderHeight*props.scale ||1 / 2;
                    // console.log(renderWidth, renderHeight);
                    if (props.color) {
                        context.fillStyle = props.color
                    }
                    context.drawImage(
                        args.image,
                        offsetX,
                        offsetY,
                        renderWidth*props.scale ||1,
                        renderHeight*props.scale|| 1
                    )
                    //(canvas.width/2)-(image.width/2),canvas.height/2-image.height/2, renderWidth, renderHeight);
                }
                if (args.text) {
                    context.fillStyle = props.color || "#000"
                    context.font = `${props.fontSize || 180}px ${props.font ||
                    "sans-serif"}`
                    context.fillText(
                        args.text,
                        (this.width / 2) - context.measureText(args.text).width / 2,
                        (this.height / 2) + (props.fontSize || 0) / 2
                    )
                }
                let pixels = context.getImageData(0, 0, this.width, this.height)
                    .data
                var index
                // let area = Math.PI * this.mouse.radius * this.mouse.radius;

                for (var y = 0; y < canvas.height; y += this.gap) {
                    for (var x = 0; x < canvas.width; x += this.gap) {
                        index = (y * this.width + x) * 4
                        const red = pixels[index]
                        const green = pixels[index + 1]
                        const blue = pixels[index + 2]
                        const alpha = pixels[index + 3]
                        // let dis = Math.sqrt((this.image.width/2-x)*(this.image.width/2-x)+(this.image.height-y)*(this.image.height-y))
                        let color = props.color?props.color:"rgba(" + red + "," + green + "," + blue + "," +alpha/255 +")"
                        if (alpha/255 > 0 ) {
                            this.particles.push(new Particle(this, x, y, color, props.size))
                        }
                        // if ()
                    }
                }
                context.clearRect(0, 0, this.width, this.height)
            }

            init_grid(context:CanvasRenderingContext2D) {
                let pixels = context.getImageData(0, 0, this.width, this.height)
                  .data
                let index;

                for (let y = 0; y < canvas.height; y += this.gap) {
                    for (let x = 0; x < canvas.width; x += this.gap) {
                        index = (y * this.width + x) * 4
                        const red = pixels[index]
                        const green = pixels[index + 1]
                        const blue = pixels[index + 2]
                        const alpha = pixels[index + 3]
                        // let dis = Math.sqrt((this.image.width/2-x)*(this.image.width/2-x)+(this.image.height-y)*(this.image.height-y))
                        let color = props.color?props.color:"rgba(" + red + "," + green + "," + blue + "," +alpha/255 +")"
                        this.particles.push(new Particle(this, x, y, color, props.size))
                        // if ()
                    }
                }
                context.clearRect(0, 0, this.width, this.height)
            }

            update() {
                for (let i = 0; i <this.particles.length; i++) {
                    this.particles[i].update();
                }
            }
            connect(context:CanvasRenderingContext2D,
                    ptl:{
                        x:number;
                        y:number;
                        size:number;
                        color:string;
                    }){
                let distance, px, sdx,sdy;
                for (let j = 0; j < this.particles.length; j++) {
                    px = this.particles[j];
                    sdx = px.x - ptl.x;
                    sdy = px.y - ptl.y;
                    distance = Math.sqrt((sdx * sdx) + (sdy * sdy));
                    if (distance<=30) {
                        context.beginPath();
                        context.lineWidth=props.lineWidth || 0.5;
                        context.strokeStyle= props.lineColor? props.lineColor:px.color;
                        context.moveTo(px.x, px.y);
                        context.lineTo(ptl.x, ptl.y);
                        context.closePath();
                        context.stroke();
                    }
                }
            }

            render(context:CanvasRenderingContext2D) {
                let distance,
                    dx,
                    dy;
                let connect = (context:CanvasRenderingContext2D, ptl:any)=>{
                    let distance, px, sdx,sdy;
                    for (let j = 0; j < this.particles.length; j++) {

                        // var c = this.particles[j];

                        px = this.particles[j];
                        // let mdx = this.mouse.x - px.x;
                        // let mdy = this.mouse.y - px.y;
                        sdx = px.x - ptl.x;
                        sdy = px.y - ptl.y;
                        // let mDist = Math.sqrt((mdx*mdx) + (mdy*mdy));
                        distance = Math.sqrt((sdx * sdx) + (sdy * sdy));
                        if ( distance <= props.gap +5 && distance > 1) {
                            context.beginPath();
                            context.lineWidth=props.lineWidth || 0.5;
                            context.strokeStyle= props.lineColor? props.lineColor:px.color;
                            context.moveTo(px.x, px.y);
                            // context.arcTo( ptl.x, ptl.y, px.x, px.y, props.area)
                            context.lineTo(ptl.x, ptl.y);
                            context.closePath();
                            context.stroke();
                        }
                    }
                }
                context.clearRect(0,0,this.width, this.height)
                for (let i = 0; i < this.particles.length; i++){
                    let p = this.particles[i];
                        dx = this.mouse.x - p.x;
                        dy = this.mouse.y - p.y;
                        distance = Math.sqrt((dx * dx) + (dy * dy));
                    if (distance >= props.radius) {
                        if ( this.gap >= 3 && props.connect)
                            connect(context, p);
                    } if (this.mouse.down && this.gap <=4 && distance <= props.radius) {this.mouse.radius = props.radius+100}
                    else if (!this.mouse.down){this.mouse.radius=props.radius}
                    context.fillStyle=p.color;
                    // context.rotate(0);
                    context.fillRect(p.x, p.y, p.size, p.size)
                    // context.scale(1, 1);
                    context.beginPath();
                    context.strokeStyle="#fff";
                    context.arc(p.x, p.y, p.size, 0, Math.PI*2);
                    context.closePath();
                    context.fill();
                }

            }
            stop(canvas:HTMLCanvasElement, window:Window) {
                props.grid ?
                  window.removeEventListener("mousedown", () => {
                      this.mouse.down = true;
                  }) : canvas.removeEventListener("mousedown", () => {
                      this.mouse.down = true;
                  });
                props.grid ?
                  window.removeEventListener('mouseup', () => {
                      this.mouse.down = false;
                  }) : canvas.removeEventListener('mouseup', () => {
                      this.mouse.down = false;
                  });
                props.grid ?
                  window.removeEventListener("mousemove", event => {
                      this.mouse.x = event.offsetX
                      this.mouse.y = event.offsetY
                  }) : canvas.removeEventListener("mousemove", event => {
                      this.mouse.x = event.offsetX
                      this.mouse.y = event.offsetY
                  })
                props.grid ?
                  window.removeEventListener("mouseleave", () => {
                      this.mouse.x = -Infinity
                      this.mouse.y = -Infinity
                  }) : canvas.removeEventListener("mouseleave", () => {
                      this.mouse.x = -Infinity
                      this.mouse.y = -Infinity
                  });
                canvas.parentElement?.removeEventListener("touchstart", event => {
                    this.mouse.x = event.changedTouches[0].clientX
                    this.mouse.y = event.changedTouches[0].clientY
                })
                canvas.parentElement?.removeEventListener("touchmove", event => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX
                    this.mouse.y = event.targetTouches[0].clientY
                })
                canvas.parentElement?.removeEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity
                    this.mouse.y = -Infinity
                })
                // wRef.current.children[0].remove()
                // canvas.remove();
            }
        }

        let effect = new Effect(props.width, props.height, ctx)
        function animate() {
            effect.update()
            effect.render(ctx)
            // effect.connect(effect.particles, ctx);
            requestAnimationFrame(animate)
            // effect.update();
        }
        if (props.imageUrl) {
            image.onload = function() {
                props.grid?effect.init_grid(ctx):effect.init(ctx, { image })
                animate()
                effect.start(canvas, window)
            }
        }
        if (!props.imageUrl && props.text) {
            let text = props.text || ""
            props.grid?effect.init_grid(ctx):effect.init(ctx, { text })
            animate()
            effect.start(canvas, window)
        }
        if (!props.imageUrl ){

        }
        wrapper.appendChild(canvas)
        // if (state.on === false){
        //     effect.stop(canvas);
        //     effect = null;
        //     effect = new Effect(props.width, props.height)
        // }
        canvas.style.background = props.canvasBackground;
        return () => {
            effect.stop(canvas,window);
            if (canvas) {
                canvas.remove()
            }
        }
    }, [])
    return (
        <div
            ref={wRef}
            style={{
                position: 'fixed',
                width: "auto",
                height: "auto",
                justifyContent: "center",
                alignItems: "center",
                ...props.style
            }}>
                <img
                    id={props.id}
                    src={props.imageUrl}
                    alt={"particle-image"}
                    ref={iRef}
                    style={{ display: "none" }}
                />
        </div>
    )
}
{/*Particle.propTypes = {*/}
//     width: PropTypes.number.isRequired,
//     height: PropTypes.number.isRequired,
{/*    scale: PropTypes.number.isRequired,*/}
{/*    size:PropTypes.number.isRequired,*/}
//     radius:PropTypes.number.isRequired,
//     friction:PropTypes.number.isRequired,
//     ease:PropTypes.number.isRequired,
//     gap:PropTypes.number.isRequired,
//     maxWidth:PropTypes.number, minWidth:PropTypes.number,
//     maxHeight:PropTypes.number, minHeight:PropTypes.number,
//     imageUrl:PropTypes.string,
//     text:PropTypes.any,
//     font:PropTypes.string,
//     color:PropTypes.string,
//     lineWidth:PropTypes.number,
//     lineColor:PropTypes.string,
//     fontSize:PropTypes.number,
//     id:PropTypes.string
// };

// function Test(){
//     return(
//       <Particle
//         id={"1"}
//         friction={0.98}
//         fontSize={200}
//         lineColor={"orangered"}
//         ease={0.08892}
//         canvasBackground={"#000"}
//         style={{borderRadius: 20, overflow: 'hidden'}}
//         imageUrl={logo}
//         // connect
//         lineWidth={1}
//         text={"Particles"}
//         width={500}
//         height={500}
//         size={1}
//         minHeight={300}
//         minWidth={300}
//         gap={3}
//         color={"#fff"}
//         // grid
//         radius={70}
//         scale={1.8}
//       />
//     )
// }