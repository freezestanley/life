declare module '*.css';
declare module '*.less';
declare module '*.png';
declare module '*.svg' {
  export function ReactComponent(
    props: React.SVGProps<SVGSVGElement>,
  ): React.ReactElement;
  const url: string;
  export default url;
}
declare interface ResType<T = null> {
  success: boolean;
  code: string;
  value: T;
  message: string;
  pageNum?: number | null;
  pageSize?: number | null;
}
