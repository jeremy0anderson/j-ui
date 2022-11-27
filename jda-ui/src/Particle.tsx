import React from 'react';
import img from './Clipboard.svg'
//@ts-ignore
const requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame,cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame;
let newCanvas:HTMLCanvasElement = document.createElement('canvas');
export declare interface ParticleProps{
    width:number;
    height:number;
    friction:number;
    ease:number;
    size:number;
    gap:number;
    radius:number;
    minWidth?:number;
    minHeight?:number;
    maxWidth?:number;
    maxHeight?:number;
    color?:string;
    font?:string;
    fontSize?:number;
    text?:string;
    imageUrl?:string;
    canvasStyle?:any;
    strokeColor?:any;
    area?:any;
    highlightColor?:string|any;
}



export function Particles(props:ParticleProps){
    // const cRef:any = React.useRef(HTMLCanvasElement);
    const iRef:any = React.useRef(HTMLImageElement);
    const wRef:any = React.useRef(HTMLDivElement);
    let canvas:HTMLCanvasElement,
        ctx:CanvasRenderingContext2D|any,
        image:HTMLImageElement;
    React.useEffect(()=>{
        let wrapper = wRef.current;
        canvas = newCanvas;
        ctx = canvas.getContext('2d', {willReadFrequently:true});
        image = iRef.current
        canvas.width = props.width;
        canvas.height = props.height;
        canvas.style.touchAction = "none";
        canvas.style.msTouchAction = "none";

        class Particle {
            area:any;originX:number;originY:number;effect:Effect;x:number;y:number;size:number;color:any;dx:number;dy:number;vx:number;vy:number;force:number;angle:number;distance:any;friction:number;ease:number;
            constructor(effect:Effect, x:number, y:number, color:any){
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
            update(){
                // const original = this.color;
                this.dx = this.effect.mouse.x - this.x;
                this.dy = this.effect.mouse.y - this.y;
                this.distance = Math.sqrt(this.dx * this.dx+ this.dy * this.dy);
                this.force = -this.effect.mouse.radius / this.distance;
                this.angle = Math.atan2(this.dy, this.dx);
                if(0<this.distance<= this.effect.mouse.radius) {
                    this.vx += this.force * Math.cos(this.angle);
                    this.vy += this.force * Math.sin(this.angle);

                }
                    this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                    this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease;
            }
        }
        class Effect {
            mouse:{
                x:number;
                y:number;
                radius:any;
                down:boolean;
            };
            width:number;
            height:number;
            image?:any;
            centerX:number;
            centerY:number;
            x:number;
            y:number;
            gap:number;
            particles:Particle[]|any[];
            _renderCount:number;
            pxx:number;
            pyy:number;
            constructor(width:number, height:number){
                this.width = width;
                this.height = height;
                this.image = iRef.current || new Image(100, 100);
                this.centerX = this.width / 2;
                this.centerY = this.height / 2;
                this.x = props.width/2 - image.width / 2;
                this.y = props.height/2 - image.height / 2;
                this.particles = [];
                this.gap = props.gap
                this.mouse = {
                    radius: props.radius || 2000,
                    x: -Infinity,
                    y: -Infinity,
                    down:false
                }
                this._renderCount = 0;
                for (let key in props) {
                    this[key] = props[key];
                }
            }
            start(canvas:HTMLCanvasElement){
                canvas.addEventListener('click', () => {
                    this.mouse.down = !this.mouse.down;
                    // setState({
                    //     ...state,
                    //     on:!state.on,
                    //     gap: state.on?10:2
                    // })
                    // this.gap = state.gap
                })

                canvas.addEventListener("mousemove", (event:MouseEvent) => {
                    this.mouse.x = event.offsetX;
                    this.mouse.y = event.offsetY;
                });
                canvas.addEventListener('mouseleave', ()=>{
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                })

                canvas.parentElement?.addEventListener("touchstart", (event:any) => {
                    this.mouse.x = event.changedTouches[0].clientX;
                    this.mouse.y = event.changedTouches[0].clientY;
                });

                canvas.parentElement?.addEventListener("touchmove", (event:any) => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX;
                    this.mouse.y = event.targetTouches[0].clientY;
                });

                canvas.parentElement?.addEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
            }
            init(context:CanvasRenderingContext2D,args:{text?:string; image?:HTMLImageElement}){
                let renderWidth = null;
                let renderHeight= null;
                if (args.image) {
                    let imageWidth = image.width;
                    let imageHeight = image.height;
                    let imageRatio =
                      Math.min(props.minWidth  || image.width, props.maxWidth || Number.POSITIVE_INFINITY)/
                      Math.min( props.minHeight || image.height,props.maxHeight || Number.POSITIVE_INFINITY);
                    let ratio =
                      (Math.min(canvas.width||props.width ||Number.POSITIVE_INFINITY) /
                        Math.min(canvas.height||props.height|| Number.POSITIVE_INFINITY));
                    if (ratio < imageRatio) {
                        renderWidth = ~~Math.min(props.minWidth || canvas.width, imageWidth);
                        renderHeight = ~~Math.min(renderWidth / imageRatio);
                    } else {
                        renderHeight = ~~Math.min(
                          props.minHeight || canvas.height||props.height || Number.POSITIVE_INFINITY,
                          imageHeight || props.maxHeight || Number.POSITIVE_INFINITY,
                          Number.POSITIVE_INFINITY,
                        );
                        renderWidth = ~~(renderHeight * imageRatio);
                    }
                    let offsetX = ~~((canvas.width - renderWidth) / 2);
                    let offsetY = ~~((canvas.height - renderHeight) / 2);
                    // canvas.width = renderWidth;
                    // canvas.height=renderHeight;
                    // console.log(renderWidth, renderHeight);
                    if (props.color){
                        context.fillStyle=props.color;
                    }
                    context.drawImage(args.image,offsetX, offsetY, renderWidth, renderHeight);
                    //(canvas.width/2)-(image.width/2),canvas.height/2-image.height/2, renderWidth, renderHeight);
                }
                if (args.text){
                    context.fillStyle=props.color||"#000";
                    context.font = `${props.fontSize || 180}px ${props.font||'sans-serif'}`;
                    context.fillText(args.text, canvas.width/2- context.measureText(args.text).width/2, (canvas.height/2)+(props.fontSize||0)/2);
                }
                let pixels = context.getImageData(0, 0,canvas.width, canvas.height).data;
                var index;
                for (var y = 0; y < this.height; y += this.gap) {
                    for (var x = 0; x < this.width; x += this.gap) {
                        index = (y * this.width + x) * 4;
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        let color = 'rgb(' + red + ',' + green + ',' + blue + ')';
                        if (props.color){
                            color=props.color;
                        }

                        const alpha = pixels[index + 3];
                        if (alpha > 0) {
                            this.particles.push(new Particle(this, x, y, color));
                        }
                    }
                }
                context.clearRect(0, 0, this.width, this.height);
            }
            get renderCount(){
                return this._renderCount;
            }
            set renderCount(value){
                this._renderCount = value;
            }
            update(){
                for(var i = 0; i < this.particles.length; i++) {
                    // let particle = this.particles[i];
                    // let dx = this.mouse.x = particle.x;
                    // let dy = this.mouse.y = particle.y;
                    // let distance = Math.sqrt(dx*dx+dy*dy);
                        // particle.color = "red";
                    // this.connect(this.particles, ctx);
                    this.particles[i].update();
                }
            }
            // connect(particles:any, context:CanvasRenderingContext2D){
            //     for (let i = 0; i < particles.length; i+=props.gap) {
            //         for (let j = 0; j < particles.length; j+=props.gap) {
            //                 console.log(particles[i])
            //                 let dx = this.mouse.x - (particles[i].x);
            //                 let dy = this.mouse.y - (particles[i].y);
            //                 let sdx = (particles[i].x - particles[j].x);
            //                 let sdy = (particles[i].y - particles[j].y);
            //                 let sDistance = Math.sqrt(sdx * sdx + sdy * sdy);
            //                 let px = particles[i].x;
            //                 let py = particles[i].y;
            //                 let originX = particles[i].originX;
            //                 let originY = particles[i].originY;
            //                 let dox = originX
            //                 let doy = originY;
            //                 let originDistance = Math.sqrt(dox * dox + doy * doy);
            //
            //                 // let
            //                 // let x = particles[i+5].x===undefined?1:i+1;
            //                 let b = false;
            //                 // let y = particles[i+5].y===undefined?1:i+1;
            //                 let distance = Math.sqrt((dx * dx) + (dy * dy));
            //                 // if ((this.mouse.down && distance <= props.radius+15 && distance >= props.radius-15 && sDistance > 15 && sDistance < 25)) {
            //                 //     b = true;
            //             let index = (j * this.width + i)
            //             if (index!==0) {
            //                 if (distance < props.radius && (sDistance <= 10 && sDistance >= 5)) {
            //                     b = true;
            //                 }
            //                 // if (distance > 300){
            //                 //     c = true;
            //                 // }
            //                 b && (() => {
            //                     context.strokeStyle = props.strokeColor || "#fff";
            //                     context.lineWidth = 0.5
            //                     context.moveTo(px, py);
            //                     // context.lineTo(this.mouse.x, this.mouse.y);
            //                     context.lineTo(particles[j].x, particles[j].y);
            //                     context.stroke();
            //
            //                     // c && (()=>{
            //                     //     context.strokeStyle = props.strokeColor || "#fff";
            //                     //     context.lineWidth = particles[i].size;
            //                     //     context.beginPath();
            //                     //     // context.moveTo(this.mouse.x, this.mouse.y);
            //                     //     context.lineTo(this.mouse.x, this.mouse.y)
            //                     //     // context.lineTo(particles[j].x, particles[j].y)
            //                     //     // context.arc(particles[i].x, particles[i].y, 3, 170, 270);
            //                     //     // context.moveTo(particles[i].x,  particles[i].y )
            //                     //     // context.moveTo(this.mouse.x, this.mouse.y);
            //                     //     // context.moveTo( this.mouse.x-dx, this.mouse.y-dy);
            //                     //     // context.lineTo(this.mouse.x -20, this.mouse.y-20)
            //                     //     context.stroke();
            //                     // })()
            //                 })()
            //             }
            //         }
            //     }
            // }
            render(context:CanvasRenderingContext2D) {
                this.renderCount = 0;
                context.clearRect(0, 0, this.width, this.height);
                for (var i = 0; i < this.particles.length; i++) {
                    var p = this.particles[i];
                    // var c = this.particles[j];
                    let clr = p.color;
                    let dx = this.mouse.x - (p.x);
                    let dy = this.mouse.y - (p.y);
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    context.beginPath();
                    if (distance <=props.radius+10 && distance > 30 && distance < 40) {
                            let rand = Math.round(Math.random()*i);
                            let randX = this.particles[rand].x;
                            let randY = this.particles[rand].y;
                            p.size = props.size + 3;
                            context.beginPath()
                        context.moveTo(randX, randY);
                            context.lineTo(p.x, p.y);
                            // context.fillStyle=props.highlightColor;
                        // if (props.highlightColor) {
                        //     p.color = props.highlightColor;
                        //     context.strokeStyle = props.highlightColor;
                        // }
                        // // context.fill();
                        // // context.stroke();
                    } else {
                        p.size = props.size;
                        p.color = clr;
                        context.strokeStyle=clr;
                        // context.stroke();
                        context.fillRect(p.x, p.y, p.size, p.size);
                        if (props.strokeColor) {
                            context.strokeStyle = props.strokeColor;
                            context.strokeRect(p.x, p.y, p.size , p.size );
                        }
                    }


                    if (this.mouse.down) {

                    }
                    context.fillRect(p.x, p.y, p.size / 2, p.size / 2);
                    context.closePath();
                    context.stroke();
                }
            }
            stop(canvas:HTMLCanvasElement){

                canvas.removeEventListener('click', () => {
                    this.mouse.down = !this.mouse.down;
                })
                canvas.removeEventListener("mousemove", (event:MouseEvent) => {
                    this.mouse.x = event.offsetX;
                    this.mouse.y = event.offsetY;
                });
                canvas.removeEventListener('mouseleave', ()=>{
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });

                canvas.parentElement?.removeEventListener("touchstart", (event:TouchEvent) => {
                    this.mouse.x = event.changedTouches[0].clientX;
                    this.mouse.y = event.changedTouches[0].clientY;
                });

                canvas.parentElement?.removeEventListener("touchmove", (event:TouchEvent) => {
                    // event.preventDefault();
                    this.mouse.x = event.targetTouches[0].clientX;
                    this.mouse.y = event.targetTouches[0].clientY;
                });

                canvas.parentElement?.removeEventListener("touchend", () => {
                    // event.preventDefault();
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                });
                canvas.remove();
                canvas = newCanvas;
                wrapper.appendChild(canvas);
            }
        }

        let effect:Effect  = new Effect(props.width, props.height);
        function animate() {
            effect.update();
            effect.render(ctx);
            // effect.connect(effect.particles, ctx);
            requestAnimationFrame(animate);
            // effect.update();
        }
            if (props.imageUrl) {
                image.onload = function() {
                    effect.init(ctx,{image});
                    animate();
                    effect.start(canvas);
                }
            }
            if (!props.imageUrl) {
                let text = props.text || "";
                effect.init(ctx, { text });
                animate();
                effect.start(canvas);
            }
        wrapper.appendChild(canvas);
            // if (state.on === false){
            //     effect.stop(canvas);
            //     effect = null;
            //     effect = new Effect(props.width, props.height)
            // }
            return () => {
                effect.stop(canvas)
                if (canvas){
                    canvas.remove();
                }

            }
    },[])
    return(
      <div ref={wRef} style={{
          touchAction:"none", msTouchAction: "none",
          width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', zIndex: 900}}>
          {props.imageUrl &&
            (<img src={props.imageUrl} alt={"particle-image"} ref={iRef} style={{display: 'none'}}/>
          )}
      </div>
    )
}

function Test(){
    return(
      <div style={{background: "rgba(10, 10, 10,0.8)"}}>
      <Particles width={window.innerWidth}
                 height={window.innerHeight}
                 friction={.9}
                 ease={0.12}
                 size={0.04}
                 gap={3}
                 radius={80}
                 minWidth={600}
                 minHeight={600}
                 maxWidth={100}
                 maxHeight={100}
                 strokeColor={"orangered"}
                 highlightColor={"#fff"}
                 imageUrl={img}
                 // text={"Bussy"}
                 area={50}
                 fontSize={160}
                 // color={"#fff"}
      />
      </div>
    )
}
