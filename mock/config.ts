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
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F06%2F20160106111220_YuS3C.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636787120&t=9890d3286516c9c0d7b8482def21d907',
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
                  children: '张国荣',
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
                role: 'xjImage-1',
                component: 'xjImage',
                props: {
                  src:
                    'https://img1.baidu.com/it/u=2032406179,4269099464&fm=26&fmt=auto',
                  style: {
                    top: 0,
                    left: 0,
                    width: 1300,
                    height: 'auto',
                    transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-2',
                component: 'xjText',
                props: {
                  children:
                    '张国荣(1956年9月12日-2003年4月1日)出生于香港，中国香港男歌手、演员、音乐人，影视歌多栖发展的代表之一',
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
                      top: '-=50',
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
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-3',
                component: 'xjImage',
                props: {
                  src:
                    'https://img1.baidu.com/it/u=138702463,1291014238&fm=26&fmt=auto',
                  style: {
                    opacity: 0,
                    width: 1330,
                    height: 'auto',
                    top: 0,
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
            ],
            elms: [
              {
                role: 'xjImage-4',
                component: 'xjImage',
                props: {
                  src:
                    'https://img0.baidu.com/it/u=4275519337,1765155749&fm=26&fmt=auto',
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
                  children:
                    '1977年出道。1983年以《风继续吹》获得关注。1984年演唱的《Monica》是香港歌坛第一支同获十大中文金曲、十大劲歌金曲的舞曲。',
                  style: {
                    width: 400,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    bottom: 30,
                    right: 50,
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
                      scale: 1.2,
                      duration: 2,
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
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-5',
                component: 'xjImage',
                props: {
                  src:
                    'https://img1.baidu.com/it/u=3641342260,1224636251&fm=26&fmt=auto',
                  style: {
                    opacity: 0,
                    width: 1200,
                    height: 'auto',
                    top: 0,
                    transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-5-1',
                component: 'xjText',
                props: {
                  children:
                    '1986年、1987年凭《有谁共鸣》《无心睡眠》获劲歌金曲金奖 [24]  [29]  ；之后凭专辑《爱慕》《The Greatest Hits of Leslie Cheung》成为首位打入韩国音乐市场的粤语歌手，并打破华语唱片在韩国的销量纪录',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    top: 400,
                    right: 20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景6
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-6', // 谁
                    animateTo: {
                      left: 0,
                      duration: 2,
                      opacity: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-6-1', // 谁
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
                role: 'xjImage-6',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.improve-yourmemory.com%2Fpic%2F41fde7afc3fd062456b584db58ca8590-2.jpg&refer=http%3A%2F%2Fimg.improve-yourmemory.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636788829&t=2bc0b367cdee3b04a74c282921d2c165',
                  style: {
                    opacity: 0,
                    width: 1400,
                    height: 'auto',
                    top: 0,
                    left: -100,
                  },
                },
              },
              {
                role: 'xjText-6-1',
                component: 'xjText',
                props: {
                  children:
                    '1988年、1989年获十大劲歌金曲最受欢迎男歌星奖。1999年获香港乐坛最高荣誉金针奖。2000年获CCTV-MTV音乐盛典亚洲最杰出艺人奖 。2010年入选美国CNN“过去50年里全球最知名的20位歌手/乐团”。',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    top: 400,
                    right: 20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景7
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-7', // 谁
                    animateTo: {
                      left: 0,
                      duration: 2,
                      opacity: 1,
                      scale: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-7-1', // 谁
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
                role: 'xjImage-7',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F34c8f01a5928a6e260dde14c2abbee9f11cd59e2.jpg&refer=http%3A%2F%2Fi0.hdslb.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636789231&t=0082da7cf765d90c9cd9d8b92f679206',
                  style: {
                    opacity: 0,
                    width: 1400,
                    height: 'auto',
                    top: 0,
                    transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-7-1',
                component: 'xjText',
                props: {
                  children:
                    '1978年开始参演电视剧。80年代中期将事业重心移至影坛，塑造了宁采臣、旭仔、程蝶衣、欧阳锋、何宝荣等角色。1991年凭《阿飞正传》获金像奖最佳男主角奖。',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    top: 400,
                    right: 20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景8
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-8', // 谁
                    animateTo: {
                      duration: 2,
                      opacity: 1,
                      top: '+=80',
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-8-1', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                      bottom: 100,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-8',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Finews.gtimg.com%2Fnewsapp_match%2F0%2F8449283220%2F0.jpg&refer=http%3A%2F%2Finews.gtimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636788765&t=7bfc66fad72e557839ba79bb167645e3',
                  style: {
                    opacity: 0,
                    width: 1200,
                    height: 'auto',
                    top: 0,
                    // transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-8-1',
                component: 'xjText',
                props: {
                  children:
                    '1993年主演的《霸王别姬》是中国电影史上首部获得戛纳国际电影节金棕榈大奖的电影 ，并打破中国内地文艺片在美国的票房纪录  ，他凭此片受到国际影坛的关注  ，获日本影评人大奖最佳男主角  、中国电影表演艺术学会奖特别贡献奖；同年任东京国际电影节评委。',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    bottom: -100,
                    right: 20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景9
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-9', // 谁
                    animateTo: {
                      duration: 2,
                      opacity: 1,
                      top: 300,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-9', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                      top: 0,
                      width: 600,
                      right: 0,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-9-1', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                      left: 20,
                      bottom: 100,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-9',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20181021%2Faa3ad7960bb647318fe333356a5e87b2.jpeg&refer=http%3A%2F%2F5b0988e595225.cdn.sohucs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636789882&t=c661181bbaf726682b1c38db130fe1e1',
                  style: {
                    opacity: 0,
                    width: 100,
                    height: 'auto',
                    top: 0,
                    right: 400,
                    // transform: 'scale(0.25)',
                  },
                },
              },
              {
                role: 'xjText-9-1',
                component: 'xjText',
                props: {
                  children:
                    '1998年成为首位担任柏林国际电影节评委的亚洲男演员。2000年入选《日本电影旬报》20世纪百大外国男演员 [13]  。2005年入选中国电影百年百位优秀演员。2010年入选美国CNN“史上最伟大的25位亚洲演员”。',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    bottom: -100,
                    left: 20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景10
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjImage-10', // 谁
                    animateTo: {
                      duration: 3,
                      opacity: 1,
                      scale: 1,
                    },
                  },
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-10-1', // 谁
                    animateTo: {
                      duration: 1,
                      opacity: 1,
                      right: 120,
                      // bottom: 100,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjImage-10',
                component: 'xjImage',
                props: {
                  src:
                    'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb3-q.mafengwo.net%2Fs9%2FM00%2F74%2F82%2FwKgBs1gEPQSAGP2JAAxe1mr4hYo78.jpeg%3FimageView2%2F2%2Fw%2F680%2Fq%2F90%257CimageMogr2%2Fstrip%2Fquality%2F90&refer=http%3A%2F%2Fb3-q.mafengwo.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1636790195&t=3bfcf72e0043a177ef0e45c48d79f254',
                  style: {
                    opacity: 0,
                    width: 1200,
                    height: 'auto',
                    transform: 'scale(1.5)',
                  },
                },
              },
              {
                role: 'xjText-10-1',
                component: 'xjText',
                props: {
                  children:
                    '2003年4月1日18点43分，张国荣因抑郁症病情失控从香港东方文华酒店二十四楼健身中心坠下，紧急送往玛丽医院，经医生检验入院前已死亡，终年46岁',
                  style: {
                    width: 400,
                    fontWeight: 900,
                    fontSize: 22,
                    color: '#fff',
                    backgroundColor: '#5ecac0',
                    padding: '5px 10px',
                    bottom: 100,
                    right: -20,
                    textAlign: 'left',
                  },
                },
              },
            ],
          },
          {
            // 场景11
            lib: 'gsap', // 所使用的动画库, (保留字段)
            type: 'timelines', // 以时间线形式按顺序执行
            timelines: [
              {
                timeline: [
                  {
                    type: 'to', // 做的动画类型
                    role: '.xjText-11-1', // 谁
                    animateTo: {
                      duration: 2,
                      opacity: 1,
                      // right: 120,
                      // bottom: 100,
                    },
                  },
                ],
              },
            ],
            elms: [
              {
                role: 'xjText-11-1',
                component: 'xjText',
                props: {
                  children: '仅此深切缅怀，逝去的烟火',
                  style: {
                    width: 500,
                    fontWeight: 900,
                    fontSize: 40,
                    color: '#fff',
                    // backgroundColor: '#5ecac0',
                    // padding: '5px 10px',
                    top: 369,
                    left: 349,
                    // right: -20,
                    textAlign: 'left',
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
