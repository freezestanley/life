import Mock from 'mockjs';
export default {
  'POST /api/configs/detail': Mock.mock({
    success: true,
    message: '',
    code: '',
    pageNum: null,
    pageSize: null,
    value: {
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
                  {
                    type: 'from', // 做的动画
                    role: '.jxImage-0', // 谁
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
                ],
              },
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
          {
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              // 时间线sss
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.jxImage-1', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      x: '+=600',
                      y: '+=150',
                      scale: 1.5,
                      duration: 1,
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'jxImage-1',
                component: 'jxImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres1.myzaker.com%2F201901%2F5c3c44e0622768ac2700a576_1024.jpg&refer=http%3A%2F%2Fzkres1.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636500825&t=e8420b9e907c97ebbf5fdc56261574f4',
                },
              },
            ],
          },
          {
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              // 时间线sss
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.jxImage-3', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      x: '+=600',
                      y: '+=150',
                      scale: 1.5,
                      duration: 1,
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'jxImage-3',
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
    },
  }),
};
