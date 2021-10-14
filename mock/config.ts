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
        speed: 3.5,
        // 舞台
        scenes: [
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
