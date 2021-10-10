import * as Types from './types';
// 所有的元素都只会是父元素的子层级
export const configs: Types.ConfigsTypes = {
  version: '0.0.1',
  audioUrl: '',
  stage: {
    // 舞台
    scenes: [
      // 场景
      {
        lib: 'gsap', // 所使用的动画库, (保留字段)
        type: 'timelines', // 以时间线形式按顺序执行
        timelines: [
          // 时间线sss
          {
            timeline: [
              {
                type: 'to', // 做的动画类型
                role: '.ani1', // 谁
                animateTo: {
                  // ... 做哪些动画
                  rotate: '+=3600',
                  x: 300,
                  duration: 5,
                },
              },
              {
                type: 'from', // 做的动画
                role: '.ani2', // 谁
                animateTo: {
                  // ... 做哪些动画
                  x: 100,
                  y: 200,
                  duration: 2,
                },
                methods: [
                  {
                    // (保留字段) 执行完后做什么
                    name: 'delay',
                    params: 2, // any 函数参数
                  },
                ],
              },
              {
                type: 'to', // 做的动画类型
                role: '.ani1', // 谁
                animateTo: {
                  // ... 做哪些动画
                  width: 200,
                  // duration: 1,
                },
              },
            ],
          },
          // 第二条时间线
          {
            timeline: [
              {
                type: 'to', // 做的动画类型
                role: '.ani3', // 谁
                animateTo: {
                  // ... 做哪些动画
                  rotate: '-=3600',
                  duration: 3,
                },
              },
              {
                type: 'to', // 做的动画
                role: '.ani4', // 谁
                animateTo: {
                  // ... 做哪些动画
                  x: '+=100',
                  y: '-=200',
                  duration: 5,
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
    ],
  },
};
