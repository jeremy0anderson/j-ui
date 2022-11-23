import * as React from 'react';
import {useEffect, createRef, FC} from 'react';
import {Particle as NP} from '../particle';

export interface ParticleSettings {
  colorArr?: number[];
  renderer?: 'default' | 'webgl';
  imageUrl?: string;
  particleGap?: number;
  mouseForce?: number;
  initPosition?:string;
  clickStrength?: number;
  initDirection?:string;
  noise?: number;
  gravity?: number;
  minWidth?:number|string;
  minHeight?:number|string;
  width?: number;
  height?: number;
  maxWidth?: number|string;
  maxHeight?: number|string;
  particleSize?: number;
  layerCount?: number;
  depth?: number;
  layerDistance?: number;
  lifeCycle?: boolean;
  growDuration?: number;
  waitDuration?: number;
  shrinkDuration?: number;
  shrinkDistance?: number;
}

let np: any;

export const Particle: FC<ParticleSettings & { className?: string }> = settings => {
  const wrapperRef = createRef<HTMLDivElement>();


  useEffect(() => {
    const spawnParticle = () => {
      np = new NP({ ...settings, wrapperElement: wrapperRef.current });
      if (!np.events.stopped) {
        np.on('stopped', function(this: any) {
          this.canvas.remove();
        });
      }
    };

    if (np) {
      np.events.imageLoaded = [];
      np.stop();
    }
    spawnParticle();
  });

  return <div ref={wrapperRef} className={settings.className}></div>;
};
//
//
// function Test(){
//   return (
//     <Particle
//       renderer={'default'}
//       imageUrl={image}
//       particleGap={1}
//       mouseForce={70}
//       clickStrength={1000}
//       // layerCount={2}
//       // layerDistance={10}
//       noise={1}
//       gravity={0.09199}
//       width={window.innerWidth}
//       height={window.innerHeight}
//       particleSize={1}
//       initDirection={'none'}
//       initPosition={'none'}
//       maxHeight={240}
//       maxWidth={240}
//       minWidth={150}
//       minHeight={150}
//       // growDuration={}
//       // waitDuration={}
//       // shrinkDuration={}
//       // shrinkDistance={}
//       />
//   )
// }