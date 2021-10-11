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
    this.scenesController(stage);
  };
  /**
   * 场景控制, 之后要对接别的方法，都要返回上个场景的完成时间
   * @param scenes
   */
  scenesController = async (stage: Types.StageTypes) => {
    const { scenes, speed, autoPlay } = stage;
    //TODO autoPlay 暂未实现
    if (!Array.isArray(scenes)) return;
    const gsTimeout = this.gsapScenesWindow(scenes);
    let done = false;
    const gsDone = () => {
      return new Promise<boolean>(resolve => {
        const r = gsTimeout.next();
        // @ts-ignore
        const time = Number(r.value?.totalDuration || 0) + speed;
        setTimeout(() => {
          resolve(r.done);
          console.log('时间', time);
        }, time * 1000);
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
   * 多时间线控制, 取耗时最久的一条返回时间
   * @param timelines
   */
  gsapTimelinesController = (timelines: Types.TimelinesTypes[]) => {
    let totalDuration = 0;
    timelines.forEach(tl => {
      let currTotalDuration = this.gsapTimelineController(tl.timeline);
      totalDuration =
        currTotalDuration > totalDuration ? currTotalDuration : totalDuration;
    });
    return {
      totalDuration,
    };
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
      const currDuration = gsapTimeline.totalDuration();
      totalDuration =
        currDuration > totalDuration ? currDuration : totalDuration;
    });
    return totalDuration;
  };
}
