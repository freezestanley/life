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
                role: '.jxImage-0', // 谁
                animateTo: {
                  // ... 做哪些动画
                  // rotate: '+=3600',
                  x: '+=300',
                  y: '+=100',
                  scale: 1.5,
                  duration: 1,
                  opacity: 1,
                },
              },
              // {
              //   type: 'from', // 做的动画
              //   role: '.ani2', // 谁
              //   animateTo: {
              //     // ... 做哪些动画
              //     x: 100,
              //     y: 200,
              //     duration: 2,
              //   },
              //   methods: [
              //     {
              //       // (保留字段) 执行完后做什么
              //       name: 'delay',
              //       params: 2, // any 函数参数
              //     },
              //   ],
              // },
              // {
              //   type: 'to', // 做的动画类型
              //   role: '.ani1', // 谁
              //   animateTo: {
              //     // ... 做哪些动画
              //     width: 200,
              //     // duration: 1,
              //   },
              // },
            ],
          },
          // 第二条时间线
          // {
          //   timeline: [
          //     {
          //       type: 'to', // 做的动画类型
          //       role: '.ani3', // 谁
          //       animateTo: {
          //         // ... 做哪些动画
          //         rotate: '-=3600',
          //         duration: 3,
          //       },
          //     },
          //     {
          //       type: 'to', // 做的动画
          //       role: '.ani4', // 谁
          //       animateTo: {
          //         // ... 做哪些动画
          //         x: '+=100',
          //         y: '-=200',
          //         duration: 5,
          //       },
          //       methods: [
          //         {
          //           // (保留字段) 执行完后做什么
          //           name: 'delay',
          //           params: 2, // any 函数参数
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
        elms: [
          {
            role: 'jxImage-0',
            component: 'jxImage',
            props: {
              src:
                'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres1.myzaker.com%2F201901%2F5c3c44e0622768ac2700a576_1024.jpg&refer=http%3A%2F%2Fzkres1.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636500825&t=e8420b9e907c97ebbf5fdc56261574f4',
            },
          },
        ],
      },
    ],
  },
};
