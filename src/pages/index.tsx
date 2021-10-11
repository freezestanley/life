import React, {
  useEffect,
  useRef,
  useLayoutEffect,
  useMemo,
  useState,
} from 'react';
import { gsap } from 'gsap';
import classnames from 'classnames';
import { parseElms, loadElms } from './utils/dom';
import { configs } from './stages';
import Stage from '@/pages/components/stage/stage';
import API from '@/api';
import { ConfigsTypes } from './types';
import './index.less';
export default function App() {
  const boxRef = useRef<any>();
  const tweenRef = useRef<any>();
  const [originConfig, setOriginConfig] = useState<ConfigsTypes>(configs);
  const onTweenClick = () => {
    // tweenRef.current.seek(2);
    // tweenRef.current.pause();
    // tweenRef.current.resume();
    tweenRef.current.progress(0.5);
    // tweenRef.current.restart();
  };
  useEffect(() => {
    fetchConfig();
  }, []);
  const fetchConfig = async () => {
    const res = await API.Config.detail();
    console.log({ res });
  };
  return (
    <div className="app">
      <div className={classnames('stage')} ref={boxRef}>
        <Stage configs={originConfig} root={boxRef} />
        {/* <Stage root={boxRef}>{nodes}</Stage> */}
      </div>
    </div>
  );
}

/**
根据操控面板的大小来缩放预览区域
        <span className="ani1">Hello1</span>
        <span className="ani2">Hello2</span>
        <span className="ani3">Hello3</span>
        <span className="ani4">Hello4</span>
 */
