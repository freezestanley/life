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
    // debugger;
    const gsDone = () => {
      return new Promise<boolean>(resolve => {
        const r = gsTimeout.next();
        if (r.done) {
          return resolve(r.done);
        }
        const timeout = Number(r.value?.totalDuration || 0) + speed;
        setTimeout(() => {
          const roles = Array.from(r.value.roles) as string[];
          roles.forEach((role: string) => {
            if (scenes.length - 1 !== r.value.idx) {
              gsap.to(this.selector(role), {
                opacity: 0,
                duration: 0.1,
              });
            }
          });
          resolve(r.done);
        }, timeout * 1000);
      });
    };
    while (!done) {
      done = await gsDone();
    }
    console.log('isDone', done);
  };
  /**
   * 场景窗口滑动
   * 场景要一幕一幕的执行，执行完上一场才能继续执行下一场
   * @param timelines
   */
  *gsapScenesWindow(scenes: Types.ScenesTypes[]): Generator<any, any> {
    const that = this;
    for (let idx = 0; idx < scenes.length; idx++) {
      const scene = scenes[idx];
      const { lib, type } = scene;
      const animateMap: AnimateMapTypes = {
        gsaptimelines: () => that.gsapTimelinesController(scene.timelines, idx),
      };
      yield animateMap[`${lib}${type}`] && animateMap[`${lib}${type}`]();
    }
  }
  /**
   * 多时间线控制, 取耗时最久的一条返回时间
   * @param timelines
   */
  gsapTimelinesController = (
    timelines: Types.TimelinesTypes[],
    idx: number,
  ) => {
    let totalDuration = 0;
    const tls: any = [];
    let roles: Set<string> = new Set();
    timelines.forEach(tl => {
      let {
        totalDuration: currTotalDuration,
        tl: simpleTl,
      } = this.gsapTimelineController(tl.timeline);
      totalDuration =
        currTotalDuration > totalDuration ? currTotalDuration : totalDuration;
      tls.push(simpleTl);
      tl.timeline.forEach(tml => {
        roles.add(tml.role);
      });
    });
    return {
      totalDuration,
      tls,
      roles,
      idx,
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
    return { totalDuration, tl: gsapTimeline };
  };
}
