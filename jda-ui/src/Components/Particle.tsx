import {FC, useEffect, createRef} from "react";
import * as React from 'react';
import {NextParticle as NP} from '../particle';
export enum NextParticleRenderer {
    webgl = 'webgl',
    default = 'default',
}


export interface NextParticleSettings {
    colorArr?: [number, number, number, number?];
    renderer?: NextParticleRenderer | 'webgl' | 'default';
    imageUrl?: string;
    image?:HTMLImageElement;
    particleGap?: number;
    mouseForce?: number;
    clickStrength?: number;
    noise?: number;
    gravity?: number;
    width?: any;
    height?: any;
    fadePosition?:any;
    maxWidth?: any;
    color?:string;
    maxHeight?: any;
    minWidth?: any;
    minHeight?:any;
    initDirection?:any;
    particleSize?: number;
    layerCount?: number;
    depth?: number;
    initPosition?:string;
    layerDistance?: number;
    lifeCycle?: boolean;
    growDuration?: number;
    waitDuration?: number;
    shrinkDuration?: number;
    shrinkDistance?: number;
    style?:any;
    xOffset?:any;
    yOffset?:any;
}

let np: any;

const ParticleImage: FC<NextParticleSettings & { className?: string }> = settings => {
    const wrapperRef = createRef<HTMLDivElement>();

    const start = () => {
        np = new NP({ ...settings, wrapperElement: wrapperRef.current });
        if (!np.events.stopped) {
            np.on('stopped', function(this: any) {
                this.canvas.remove();
            });
        }
    };

    useEffect(() => {
        if (np) {
            np.events.imageLoaded = [];
            np.stop();
        }
        start();
    });

    return <div ref={wrapperRef} className={settings.className} style={{
        ...settings.style,
        display: 'flex', justifyContent: 'center', alignItems: 'center'}}/>
};
export {ParticleImage};
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