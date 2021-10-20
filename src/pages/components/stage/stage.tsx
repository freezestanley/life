/**
 * @description 描述
 */
import React, { FC, useLayoutEffect, useMemo, useEffect } from 'react';
import * as Types from '@/pages/types';
import { GsapStage } from '@/pages/utils';
import { parseElms, loadElms } from '@/pages/utils/dom';
import styles from './stage.less';
interface PropTypes {
  root: Types.StageTypes['root']; // 要挂载的节点是哪个, 必须在父节点上挂载一个ref
  configs: Types.ConfigsTypes;
}
const Stage: FC<PropTypes> = function({ configs, root }) {
  const nodes = useMemo(() => {
    if (!configs) return [];
    // configs 异步时要动态监听
    return loadElms(parseElms(configs));
  }, [configs]);
  useEffect(() => {
    configs.stage.root = root;
    console.log('Stage', {
      nodes,
      configs,
    });
    if (Array.isArray(nodes)) {
      new GsapStage(configs);
    }
  }, [nodes]);
  return <div className={styles['stage']}>{nodes}</div>;
};

export default Stage;
