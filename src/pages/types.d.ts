export interface ConfigsTypes {
  version: string; // 配置的版本
  audioUrl: string; // bgm url
  stage: StageTypes; // 舞台
}
export interface StageTypes {
  root?: React.RefObject<Element>; // 做舞台的根节点
  scenes: ScenesTypes[]; // 场景
  autoPlay: boolean; // 一般是true
  speed: number; // 切换时间, 默认1.5s
}
export interface ScenesTypes {
  lib: 'gsap' | string; // 所使用的动画库, (保留字段)
  type: 'timelines' | string; // 以时间线形式按顺序执行
  timelines: TimelinesTypes[]; // 多时间线配置
  elms: SceneElmsTypes[]; // dom相关属性
}
export interface TimelinesTypes {
  timeline: TimelineTypes[];
}
export interface TimelineTypes {
  type: string; // 做的动画类型 to from fromTo
  role: string; // 谁做动画 .[className]
  animateTo: GSAPTweenVars;
  animateFrom?: GSAPTweenVars; // 可选, 针对 fromTo的动画形式
  methods?: TimelinesMethodsTypes[];
}
export interface TimelinesMethodsTypes {
  // 暂未实现
  // (保留字段) 执行完后做什么
  name: 'delay';
  params: any; // any 函数参数
}
export interface SceneElmsTypes {
  role: string; // 类名, 要与timeline中的role对应
  component: string; // 组件key
  props?: React.AllHTMLAttributes<any>;
  // props?: {
  //   // 元素的原生属性
  //   style?: React.CSSProperties; // 除组件样式外的额外定制
  // };
  'x-props'?: {
    // 元素的额外属性
  };
}
