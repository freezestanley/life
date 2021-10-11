/**
 * @description 描述
 */
import React, { FC, useRef, useState } from 'react';
import Stage from '@/pages/components/stage/stage';
import { ConfigsTypes } from '@/pages/types';
import styles from './configBoard.less';
interface PropTypes {}
const ConfigBoard: FC<PropTypes> = function(props) {
  const boxRef = useRef<any>();
  const [originConfig, setOriginConfig] = useState<ConfigsTypes>();
  return (
    <div className={styles['config_board']}>
      <div className={styles['config_board-content']}>
        {originConfig && <Stage configs={originConfig} root={boxRef} />}
      </div>
      <div className={styles['config_board-board']}></div>
    </div>
  );
};

export default ConfigBoard;
