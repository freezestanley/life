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
// import { configs } from './stages';
import Stage from '@/pages/components/stage/stage';
import API from '@/api';
import { ConfigsTypes } from './types';
import './index.less';
export default function App() {
  const boxRef = useRef<any>();
  const tweenRef = useRef<any>();
  const [originConfig, setOriginConfig] = useState<ConfigsTypes>();
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
    const res: ResType<ConfigsTypes> = await API.Config.detail();
    if (res.success) {
      setOriginConfig(res.value);
    }
  };
  return (
    <div className="app">
      {originConfig && (
        <div className={classnames('stage')} ref={boxRef}>
          <Stage configs={originConfig} root={boxRef} />
        </div>
      )}
    </div>
  );
}

/**
根据操控面板的大小来缩放预览区域
 */
