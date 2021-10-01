// import {GSAPTweenVars} from 'gsap';
export interface ConfigsTypes {
  version: string; // 配置的版本
  stage: StageTypes; // 舞台
}
export interface StageTypes {
  scenes: ScenesTypes[]; // 场景
}
export interface ScenesTypes {
  lib: 'gsap' | string; // 所使用的动画库, (保留字段)
  type: 'timelines' | string; // 以时间线形式按顺序执行
  timelines: TimelinesTypes[]; // 多时间线配置
}
export interface TimelinesTypes {
  type: 'to' | 'from' | 'fromTo'; // 做的动画类型
  role: string; // 谁做动画 .className
  animateTo: GSAPTweenVars;
  animateFrom?: GSAPTweenVars; // 可选, 针对 fromTo的动画形式
  methods?: TimelinesMethodsTypes[];
}
export interface TimelinesMethodsTypes {
  // (保留字段) 执行完后做什么
  name: 'delay';
  params: any; // any 函数参数
}
