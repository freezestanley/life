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
          {
            // 场景1
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
                      // x: '+=50',
                      top: 200,
                      // scale: 1.5,
                      duration: 6,
                      opacity: 1,
                    },
                  },
                ],
              },
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-0', // 谁
                    animateTo: {
                      // ... 做哪些动画
                      // rotate: '+=3600',
                      // left: '+=50',
                      top: 130,
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
                    'http://5b0988e595225.cdn.sohucs.com/images/20180314/f15b01a9d2ab45fd8d3777f4e1472bdd.jpeg',
                  style: {
                    top: -300,
                    left: 300,
                    width: 600,
                    height: 'auto',
                  },
                },
              },
              {
                role: 'xjText-0',
                component: 'xjText',
                props: {
                  children: 'Stephen Hawking',
                  style: {
                    width: 420,
                    top: 100,
                    left: 400,
                    fontSize: 40,
                    fontWeight: 900,
                    color: '#fff',
                  },
                },
              },
            ],
          },

          {
            // 场景2
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
                      scale: 1,
                      duration: 3,
                      opacity: 1,
                    },
                  },
                ],
              },
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-1', // 谁
                    animateTo: {
                      width: 600,
                      duration: 3,
                      opacity: 1,
                    },
                  },
                ],
              },
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-2', // 谁
                    animateTo: {
                      width: 600,
                      duration: 2,
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                // 霍金图2
                role: 'xjImage-1',
                component: 'xjImage',
                props: {
                  src:
                    'http://5b0988e595225.cdn.sohucs.com/images/20180314/b3b87d3d9a854e87b344d3ecc8888e5c.jpeg',
                  style: {
                    top: 0,
                    left: 0,
                    width: 1200,
                    height: 'auto',
                    transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-1',
                component: 'xjText',
                props: {
                  children: '霍金的子女们在声明中称',
                  style: {
                    bottom: 200,
                    left: 50,
                    width: 0,
                    height: 60,
                    fontSize: 40,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                  },
                },
              },
              {
                role: 'xjText-2',
                component: 'xjText',
                props: {
                  children:
                    '他是一位伟大的科学家...他的工作成果和遗产的影响将会持续多年',
                  style: {
                    bottom: 80,
                    left: 50,
                    width: 0,
                    height: 80,
                    fontSize: 22,
                    color: '#fff',
                    overflow: 'hidden',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                  },
                },
              },
            ],
          },

          {
            // 场景3
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
                      opacity: 1,
                      duration: 0.5,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-3', // 谁
                    animateTo: {
                      top: '-=100',
                      duration: 3,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-3-1', // 谁
                    animateTo: {
                      // top: '-=50',
                      duration: 2,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-3-1', // 谁
                    animateTo: {
                      // top: '-=50',
                      delay: 2,
                      right: -400,
                      duration: 1,
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
                    'http://5b0988e595225.cdn.sohucs.com/images/20180314/a52413ad2208476f9a5cfa9d9e66b755.jpeg',
                  style: {
                    opacity: 0,
                    width: 1200,
                    height: 'auto',
                    top: 0,
                  },
                },
              },
              {
                role: 'xjImage-3-1',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1803%2F14%2F10943884_16_thumb.png&refer=http%3A%2F%2Fimg0.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636610313&t=c819ecd1eb978a443e09b0c10f461b68',
                  style: {
                    width: 400,
                    height: 'auto',
                    top: 400,
                    right: 20,
                  },
                },
              },
            ],
          },

          {
            // 场景4
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              // 时间线sss
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-4', // 谁
                    animateTo: {
                      duration: 0.5,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-4', // 谁
                    animateTo: {
                      top: '-=200',
                      duration: 3,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-4-1', // 谁
                    animateTo: {
                      // top: '-=50',
                      duration: 1,
                      opacity: 1,
                    },
                  },
                ],
              },
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-4-2', // 谁
                    animateTo: {
                      delay: 3,
                      duration: 1,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-4-3', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-4-4', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-4',
                component: 'xjImage',
                props: {
                  src:
                    'http://5b0988e595225.cdn.sohucs.com/images/20180314/cea58c450cf444939fa0465017ccae47.png',
                  style: {
                    opacity: 0,
                    width: 600,
                    height: 'auto',
                    top: 0,
                  },
                },
              },
              {
                role: 'xjText-4-1',
                component: 'xjText',
                props: {
                  children: '斯蒂芬·威廉·霍金',
                  style: {
                    width: 400,
                    height: 60,
                    fontSize: 36,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                    top: 400,
                    right: 20,
                    textAlign: 'left',
                  },
                },
              },
              {
                role: 'xjText-4-2',
                component: 'xjText',
                props: {
                  children: '1942年1月8日出生于英国牛津',
                  style: {
                    width: 400,
                    fontSize: 24,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                    top: 500,
                    right: 20,
                  },
                },
              },
              {
                role: 'xjText-4-3',
                component: 'xjText',
                props: {
                  children: '现代最伟大的物理学家之一',
                  style: {
                    width: 400,
                    fontSize: 24,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                    top: 550,
                    right: 20,
                  },
                },
              },
              {
                role: 'xjText-4-4',
                component: 'xjText',
                props: {
                  children: '20世纪享有国际盛誉的伟人之一',
                  style: {
                    width: 400,
                    fontSize: 24,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                    top: 600,
                    right: 20,
                  },
                },
              },
            ],
          },

          {
            // 场景5
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-5', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-5-1', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-5-2', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-5', // 谁
                    animateTo: {
                      duration: 1.5,
                      opacity: 0,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-5',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fs1.trueart.com%2F20180327%2F100008953.gif&refer=http%3A%2F%2Fs1.trueart.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636612050&t=0adc747949186c08bd962007fc2048af',
                  style: {
                    opacity: 0,
                    width: 1400,
                    height: 'auto',
                    top: 0,
                  },
                },
              },
              {
                role: 'xjText-5-1',
                component: 'xjText',
                props: {
                  children: '霍金提出了',
                  style: {
                    width: 400,
                    height: 60,
                    fontSize: 36,
                    fontWeight: 900,
                    overflow: 'hidden',
                    color: '#5ecac0',
                    top: 400,
                    left: 20,
                    textAlign: 'left',
                  },
                },
              },
              {
                role: 'xjText-5-2',
                component: 'xjText',
                props: {
                  children: '奇点定理 黑洞理论 无边界宇宙理论',
                  style: {
                    width: 400,
                    fontSize: 24,
                    fontWeight: 900,
                    color: '#5ecac0',
                    top: 500,
                    left: 20,
                  },
                },
              },
            ],
          },
        ],
      },
    },
  }),
};
