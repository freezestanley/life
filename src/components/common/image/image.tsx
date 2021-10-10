import React from 'react';
import './image.less';
interface PropTypes {
  className: string;
  src: string;
  style: React.CSSProperties;
}
export default (props: PropTypes) => {
  return (
    <img
      className={`${props.className} xj-image`}
      src={props.src}
      style={props.style}
    />
  );
};
