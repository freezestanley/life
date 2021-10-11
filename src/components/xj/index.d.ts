import { PropsWithChildren, ReactElement } from 'react';
export interface FCBaseProps {
  className: string;
}
export interface BaseProps<T = FCBaseProps> {
  // (): React.ReactChild;
  (props: PropsWithChildren<T>, context?: any): ReactElement<any, any> | null;
  __config: {
    [propsName: string]: any;
  };
}
