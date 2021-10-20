import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index', name: '预览' },
    {
      path: '/configboard',
      component: '@/pages/configBoard/configBoard',
      name: '配置面板',
    },
  ],
  layout: {
    // 支持任何不需要 dom 的
    // https://procomponents.ant.design/components/layout#prolayout
    name: '旭匠后台管理系统',
    locale: true,
    layout: 'side',
    // logo
  },
  mfsu: {},
});
