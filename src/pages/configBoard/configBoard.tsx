/**
 * @description 描述
 */
import React, { FC, useRef, useState } from 'react';
import Stage from '@/pages/components/stage/stage';
import Board from './components/board/board';
import { ConfigsTypes } from '@/pages/types';
import API from '@/api';
import styles from './configBoard.less';
interface PropTypes {}
const ConfigBoard: FC<PropTypes> = function(props) {
  const boxRef = useRef<any>();
  const [originConfig, setOriginConfig] = useState<ConfigsTypes>();
  const fetchConfig = async () => {
    const res: ResType<ConfigsTypes> = await API.Config.detail();
    if (res.success) {
      setOriginConfig(res.value);
    }
  };
  if (originConfig === undefined) return <></>;
  return (
    <div className={styles['config_board']}>
      <div className={styles['config_board-content']}>
        {originConfig && <Stage configs={originConfig} root={boxRef} />}
      </div>
      <div className={styles['config_board-board']}>
        <Board config={originConfig} />
      </div>
    </div>
  );
};

export default ConfigBoard;
