/**
 * @description 配置组件的部分
 */
import React, { FC } from 'react';
import styles from './board.less';
interface PropTypes {}
const Board: FC<PropTypes> = function(props) {
  return <div className={styles['board']}></div>;
};

export default Board;
