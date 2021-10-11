/**
 * dom相关操作
 */
import * as Types from '../types';
import React, { createElement } from 'react';
import * as jxComponents from '@/components/xj';
/**
 * 解析出原配置结构所有的dom配置
 */
export const parseElms = (config: Types.ConfigsTypes) => {
  return config.stage.scenes
    .map(scene => {
      return scene.elms?.map(elm => {
        return elm;
      });
    })
    .flat()
    .filter(v => v !== undefined) as Types.SceneElmsTypes[];
};
/**
 * 初始化所有的dom，最初都是隐藏
 */
export const loadElms = (elms: Types.SceneElmsTypes[]) => {
  return elms
    .map((elm, idx) => {
      if (elm.component in jxComponents) {
        // @ts-ignore
        return createElement(jxComponents[elm.component], {
          key: idx,
          className: elm.role,
          ...elm.props,
        });
      }
    })
    .filter(v => v);
};
/**
 * 初始化所有的dom，最初都是隐藏
 */
export const loadTemplate = () => {
  console.log('jxComponents', jxComponents);
};
