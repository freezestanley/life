import API from '@/api';
// import { configs } from './stages';
import Stage from '@/pages/components/stage/stage';
import { ConfigsTypes } from '@/pages/types';
import React, { useEffect, useRef, useState } from 'react';
import { history } from 'umi';
import TemplateList, { TemplateItems } from './components/list/list';
import styles from './templates.less';
export default function App() {
  const boxRef = useRef<any>();
  const tweenRef = useRef<any>();
  const [originConfig, setOriginConfig] = useState<ConfigsTypes>();
  const [templateId, setTemplateId] = useState<string>('1');
  const [list, setList] = useState<TemplateItems[]>([
    {
      name: '张国荣模板1',
      id: '1',
      previewImg:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8449283220%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636788765&t=7bfc66fad72e557839ba79bb167645e3',
    },
    {
      name: '张国荣模板2(暂无)',
      id: '2',
      previewImg:
        'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F34c8f01a5928a6e260dde14c2abbee9f11cd59e2.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636789231&t=0082da7cf765d90c9cd9d8b92f679206',
    },
  ]);
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
  const onItemClick = (id: string) => {
    console.log('模板id', id);
    setTemplateId(id);
  };
  const onEdit = (id: string) => {
    console.log('编辑该模板', id);
    history.push(`/configboard?id=${id}`);
  };
  const fetchConfig = async () => {
    const res: ResType<ConfigsTypes> = await API.Config.detail();
    if (res.success) {
      setOriginConfig(res.value);
    }
  };
  return (
    <div className={styles['templates']}>
      <TemplateList
        selectorId={templateId}
        list={list}
        onItemClick={onItemClick}
        onEdit={onEdit}
      />
      <div className={styles['templates-preview']}>
        {originConfig && (
          <>
            <div className={styles['stage']} ref={boxRef}>
              <div className={styles['mask']} />
              <Stage configs={originConfig} root={boxRef} />
            </div>
            <audio id="music1" controls autoPlay preload="preload" hidden>
              <source src="./wo.mp3" />
            </audio>
          </>
        )}
      </div>
    </div>
  );
}

/**
根据操控面板的大小来缩放预览区域
 */
