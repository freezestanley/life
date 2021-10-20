/**
 * @description 配置组件的部分
 */
import React, { FC } from 'react';
import { ConfigsTypes } from '@/pages/types';
import styles from './board.less';
interface PropTypes {
  config: ConfigsTypes;
}
const Board: FC<PropTypes> = function(props) {
  return <div className={styles['board']}></div>;
};

export default Board;
