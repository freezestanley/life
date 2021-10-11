import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { BaseProps } from '../../index.d';
import './image.less';
const Image: BaseProps = ({ className, ...props }) => {
  return <img className={`${className} xj-image`} {...props} />;
};

Image.__config = {
  width: {
    name: '宽度',
    default: 200,
  },
  height: {
    name: '高度',
    default: 120,
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
export default Image;
