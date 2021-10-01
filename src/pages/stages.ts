import * as Types from './types';
// 所有的元素都只会是父元素的子层级
export const configs: Types.ConfigsTypes = {
  version: '0.0.1',
  stage: {
    // 舞台
    scenes: [
      // 场景
      {
        lib: 'gsap', // 所使用的动画库, (保留字段)
        type: 'timelines', // 以时间线形式按顺序执行
        timelines: [
          // 时间线
          {
            type: 'to', // 做的动画类型
            role: '.box', // 谁
            animateTo: {
              // ... 做哪些动画
            },
            animateFrom: {
              // 可选, 针对 fromTo的动画形式
              // ... 做哪些动画
            },
          },
          // 第二条时间线
          {
            type: 'to', // 做的动画
            role: '.box', // 谁
            animateTo: {
              // ... 做哪些动画
            },
            methods: [
              {
                // (保留字段) 执行完后做什么
                name: 'delay',
                params: 2, // any 函数参数
              },
            ],
          },
        ],
      },
    ],
  },
};
