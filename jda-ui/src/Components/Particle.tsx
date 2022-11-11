import * as React from 'react';
import img from '../background.png';
declare interface ParticleProps{
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
    fillColor?:any;
}
export function Particles(props:ParticleProps){
    const cRef:any = React.useRef(HTMLCanvasElement)
    const iRef:any = React.useRef(HTMLImageElement);
    let
      canvas:HTMLCanvasElement,
      ctx:CanvasRenderingContext2D | any,
      image:HTMLImageElement;
    React.useEffect(()=>{
        canvas = cRef.current;
        ctx = canvas.getContext('2d', {willReadFrequently:true});
        image = iRef.current
          // || new Image(100,100);
        canvas.width = props.width;
        canvas.height = props.height;

        class Particle {
            originX:number;originY:number;effect:Effect;x:number;y:number;size:number;color:any;dx:number;dy:number;vx:number;vy:number;force:number;angle:number;distance:any;friction:number;ease:number;
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
                this.force = -1000;
                this.angle = 0;
                this.distance = 0;
                this.friction = props.friction || 0.98;
                this.ease = props.ease || 0.02;
            }
            update(){
                this.dx = this.effect.mouse.x - this.x;
                this.dy = this.effect.mouse.y - this.y;
                this.distance = Math.sqrt(this.dx * this.dx + this.dy * this.dy);
                this.force = -this.effect.mouse.radius / this.distance *2
                if(0<this.distance < this.effect.mouse.radius) {
                    this.angle = Math.atan2(this.dy, this.dx);
                    this.vx += this.force * Math.cos(this.angle);
                    this.vy += this.force * Math.sin(this.angle);
                }
                this.x += (this.vx *= this.friction) + (this.originX - this.x) * this.ease;
                this.y += (this.vy *= this.friction) + (this.originY - this.y) * this.ease
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
            constructor(width:number, height:number){
                this.width = width;
                this.height = height;
                this.image = iRef.current || new Image(100, 100);
                this.centerX = this.width / 2;
                this.centerY = this.height / 2;
                this.x = props.width/2 - image.width / 2;
                this.y = props.height/2 - image.height / 2;
                this.particles = [];
                this.gap = props.gap || 2
                this.mouse = {
                    radius: props.radius || 2000,
                    x: -Infinity,
                    y: -Infinity,
                    down:false
                }
                for (let key in props) {
                    this[key] = props[key];
                }
            }
            start(canvas:HTMLCanvasElement){
                canvas.addEventListener('mouseup', () => {
                    this.mouse.down = false;
                })
                canvas.addEventListener('mousedown', () => {
                    this.mouse.down = true;
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
            init(context:CanvasRenderingContext2D,args:{
                text?:string;
                image?:HTMLImageElement
            }){

                let renderWidth = null;
                let renderHeight= null;
                // this.image.width/=2;
                // this.image.height/=2
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
                    context.font = `${props.fontSize || 80}px ${props.font||'sans-serif'}`;
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
                        if (alpha > 128) {
                            this.particles.push(new Particle(this, x, y, color));
                        }
                    }
                }
                context.clearRect(0, 0, this.width, this.height);

            }
            update(){
                for(var i = 0; i < this.particles.length; i++) {
                    this.particles[i].update();
                }
            }
            render(context:CanvasRenderingContext2D){
                context.clearRect(0, 0, this.width, this.height);
                for(var i = 0; i < this.particles.length; i++) {
                    var p = this.particles[i];
                    context.fillStyle = p.color;
                    if (props.fillColor){
                        context.strokeStyle ="red";
                    }
                    context.beginPath();
                    context.arc(p.x, p.y, p.size,0, Math.PI*2)
                    // context.fillRect(p.x, p.y, p.size, p.size);
                    // context.strokeRect(p.x,p.y, p.size*4, p.size*4)
                    context.closePath();
                    context.stroke();
                    context.fill();
                }
            }
            stop(canvas:HTMLCanvasElement){
                canvas.removeEventListener('mouseup', () => {
                    this.mouse.down = false;
                })
                canvas.removeEventListener('mousedown', () => {
                    this.mouse.down = true;
                })
                canvas.removeEventListener("mousemove", (event:MouseEvent) => {
                    this.mouse.x = event.offsetX;
                    this.mouse.y = event.offsetY;
                });
                canvas.removeEventListener('mouseleave', ()=>{
                    this.mouse.x = -Infinity;
                    this.mouse.y = -Infinity;
                })

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
            }
            // this = null;
        }
            let effect:any  = new Effect(props.width, props.height);
        function animate() {
            effect.update();
            effect.render(ctx);
            requestAnimationFrame(animate);
        }
        if (props.imageUrl) {
            image.onload = function () {
                // image.width = canvas.width- image.width/2;
                // image.height = canvas.height  -image.height/2;
                effect.init(ctx, {image});
                animate();
                effect.start(canvas);
            }
        }
        if (!props.imageUrl){
            let text = props.text || "";
            effect.init(ctx, {text});
            effect.start(canvas);
            animate();
        }
        return ()=>{
            effect.stop(canvas)
            // effect = undefined;
        }
    },[])
    return(
      <div style={{width: "100%", height: "100%", justifyContent: 'center', alignItems: 'center', zIndex: 900}} >
          <canvas style={props.canvasStyle} ref={cRef} width={props.width} height={props.height} />
          {
            props.imageUrl && (<img src={props.imageUrl} alt={"particle-image"} ref={iRef} style={{display: 'none'}}/>)
          }

      </div>
    )
}

function Test(){
    return(
      <Particles width={window.innerWidth} height={window.innerHeight} friction={0.8} ease={0.12} size={1} gap={1} radius={30}
                 imageUrl={img}
                 // text={"Hi"}
                 // fontSize={150}
                 // font={"sans-serif"}
                 // color={"#000"}
      />
    )
}