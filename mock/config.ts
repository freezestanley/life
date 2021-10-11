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
        autoPlay: true,
        speed: 1.5,
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
                    role: '.xjImage-0', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      x: '+=50',
                      y: '+=100',
                      scale: 1.5,
                      duration: 2,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'from', // 做的动画
                    role: '.xjImage-0', // 谁
                    animateTo: {
                      width: '+=200',
                      duration: 4,
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
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-0-0', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      x: '+=50',
                      y: '+=100',
                      scale: 1.5,
                      duration: 2,
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-0',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres1.myzaker.com%2F201901%2F5c3c44e0622768ac2700a576_1024.jpg&refer=http%3A%2F%2Fzkres1.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636500825&t=e8420b9e907c97ebbf5fdc56261574f4',
                  style: {
                    top: 100,
                    left: 400,
                  },
                },
              },
              {
                role: 'xjImage-0-0',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzkres1.myzaker.com%2F201901%2F5c3c44e0622768ac2700a576_1024.jpg&refer=http%3A%2F%2Fzkres1.myzaker.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636500825&t=e8420b9e907c97ebbf5fdc56261574f4',
                  style: {
                    top: 100,
                    left: 400,
                  },
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
                    role: '.xjImage-1', // 谁
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
                role: 'xjImage-1',
                component: 'xjImage',
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
                    role: '.xjImage-3', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      x: '+=400',
                      y: '+=250',
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
                role: 'xjImage-3',
                component: 'xjImage',
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
