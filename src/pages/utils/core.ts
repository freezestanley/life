import { gsap } from 'gsap';
import { AnimateMapTypes } from './core.d';
import * as Types from '../types';
export default class GsapStage {
  public root: React.RefObject<Element | undefined>;
  public selector: gsap.utils.SelectorFunc;
  public configs: Types.ConfigsTypes;
  constructor(params: any) {
    this.root = params.stage.root;
    this.selector = gsap.utils.selector(this.root);
    this.configs = params;
    this.configController();
  }
  configController = () => {
    const { stage } = this.configs;
    // const q = gsap.utils.selector(params.stage.root?.current);
    this.scenesController(stage.scenes);
  };
  /**
   * 场景控制
   * @param scenes
   */
  scenesController = async (scenes: Types.ScenesTypes[]) => {
    if (!Array.isArray(scenes)) return;
    const gsTimeout = this.gsapScenesWindow(scenes);
    let done = false;
    const gsDone = () => {
      return new Promise<boolean>(resolve => {
        const r = gsTimeout.next();
        setTimeout(() => {
          resolve(r.done);
        }, Number(r.value) * 1000);
      });
    };
    while (!done) {
      done = await gsDone();
    }
    console.log('done');
  };
  /**
   * 场景窗口滑动
   * 场景要一幕一幕的执行，执行完上一场才能继续执行下一场
   * @param timelines
   */
  *gsapScenesWindow(scenes: Types.ScenesTypes[]) {
    const that = this;
    for (let idx = 0; idx < scenes.length; idx++) {
      const scene = scenes[idx];
      const { lib, type } = scene;
      const animateMap: AnimateMapTypes = {
        gsaptimelines: () => that.gsapTimelinesController(scene.timelines),
      };
      yield animateMap[`${lib}${type}`] && animateMap[`${lib}${type}`]();
    }
  }
  /**
   * 多时间线控制
   * @param timelines
   */
  gsapTimelinesController = (timelines: Types.TimelinesTypes[]) => {
    let totalDuration = 0;
    timelines.forEach(tl => {
      totalDuration += this.gsapTimelineController(tl.timeline);
    });
    return totalDuration;
    // console.log('gsapTimelinesController', totalDuration);
  };
  /**
   * 单时间线控制
   * @param timeline
   */
  gsapTimelineController = (timeline: Types.TimelineTypes[]) => {
    let gsapTimeline = gsap.timeline();
    let totalDuration = 0;
    timeline.forEach(tl => {
      gsapTimeline = gsapTimeline[tl.type](
        this.selector(tl.role),
        tl.animateTo,
      );
      totalDuration += gsapTimeline.totalDuration();
    });
    return totalDuration;
  };
}
