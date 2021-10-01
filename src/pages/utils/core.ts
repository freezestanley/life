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
  scenesController = (scenes: Types.ScenesTypes[]) => {
    if (!Array.isArray(scenes)) return;
    scenes.forEach(scene => {
      const { lib, type } = scene;
      const animateMap: AnimateMapTypes = {
        gsaptimelines: () => this.gsapTimelinesController(scene.timelines),
      };
      animateMap[`${lib}${type}`] && animateMap[`${lib}${type}`]();
    });
  };
  /**
   * 多时间线控制
   * @param timelines
   */
  gsapTimelinesController = (timelines: Types.TimelinesTypes[]) => {
    timelines.forEach(tl => {
      this.gsapTimelineController(tl.timeline);
    });
  };
  /**
   * 单时间线控制
   * @param timeline
   */
  gsapTimelineController = (timeline: Types.TimelineTypes[]) => {
    let gsapTimeline = gsap.timeline();
    timeline.forEach(tl => {
      gsapTimeline = gsapTimeline[tl.type](
        this.selector(tl.role),
        tl.animateTo,
      );
    });
  };
}
