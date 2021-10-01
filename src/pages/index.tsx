import React, { useEffect, useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import './index.less';
export default function App() {
  const boxRef = useRef<any>();
  const q = gsap.utils.selector(boxRef);
  const tl = useRef<any>();
  const tl2 = useRef<any>();
  const tweenRef = useRef<any>();
  useLayoutEffect(() => {
    tl.current = gsap
      .timeline()
      .to(q('.ani1'), {
        rotate: 360,
        duration: 5,
      })
      .to(q('.ani2'), {
        x: 100,
        duration: 5,
      })
      .delay(2);
    tl2.current = gsap
      .timeline()
      .to(q('.ani3'), {
        rotate: 180,
        duration: 3,
      })
      .to(q('.ani4'), {
        y: 100,
        duration: 5,
      });
    // tl.current.de
    return () => {
      tl.current.kill();
    };
  }, []);
  const onTweenClick = () => {
    // tweenRef.current.seek(2);
    // tweenRef.current.pause();
    // tweenRef.current.resume();
    tweenRef.current.progress(0.5);
    // tweenRef.current.restart();
  };
  return (
    <div className="app">
      <div className="box" ref={boxRef}>
        <span className="ani1">Hello1</span>
        <span className="ani2">Hello2</span>
        <p className="ani3"></p>
        <p className="ani4"></p>
      </div>
    </div>
  );
}
