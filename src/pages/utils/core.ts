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
  gsapTimelinesController = (timelines: Types.TimelinesTypes[]) => {
    timelines.forEach(tl => {
      this.gsapTimelineController(tl.timeline);
    });
  };
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
/**
tl.current = gsap
  .timeline()
  .to(q('.ani1'), {
    rotate: 360,
    duration: 5,
  })
  .to(q('.ani2'), {
    x: 100,
    duration: 5,
  })
  .delay(2);
 */
