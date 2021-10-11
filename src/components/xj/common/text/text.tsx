/**
 * @description 描述
 */
import React, { FC } from 'react';
import { BaseProps } from '../../index.d';
import './text.less';
const Text: BaseProps = ({ className, ...props }) => {
  return (
    <div className={`${className} xj-text`} {...props}>
      {props.children}
    </div>
  );
};
Text.__config = {
  width: {
    name: '宽度',
    default: null,
  },
  left: {
    name: 'x轴',
    default: 0,
  },
  top: {
    name: 'y轴',
    default: 0,
  },
};
export default Text;
