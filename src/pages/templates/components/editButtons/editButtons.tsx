/**
 * @description 描述
 */
import React, { FC } from 'react';
import styles from './styles/index.less';
interface PropTypes {}
const EditButtons: FC<PropTypes> = function(props) {
  return <div className={styles['edit_buttons']}></div>;
};

export default EditButtons;
