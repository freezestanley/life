# 回顾一生

## 准备工作

- [x] [gasp](https://link.juejin.cn/?target=https%3A%2F%2Fgreensock.com%2Fdocs%2F)
- [ ] 主题色
- [ ] 





## GSAP

[gsap for react](https://greensock.com/react#setup)



```
gsap.to(boxRef.current, { rotation: '+=360' });
```



### api

单点动画 

https://greensock.com/docs/v3/GSAP/Tween/vars

```js
// 从原点做动画到某处
gsap.to(boxRef.current, {
  rotation: '+=270', // string 相对于原值， number 绝对值
  duration: 2,
  delay: 1,
  x: '-=300', // string 相对于原值， number 绝对值
  opacity: 0,
});

// 从某个位置做动画回到原点
gsap.from(boxRef.current, {
  rotation: '+=270',
  duration: 2,
  delay: 1,
  x: '-=300',
});

// 从哪到哪
tweenRef.current = gsap.fromTo(
  boxRef.current,
  {
    x: -1100,
  },
  {
    rotation: '+=270',
    duration: 2,
    delay: 1,
    x: 300,
  },
);

// 返回实例，可以在任意地方做操作
tweenRef.current.pause();
tweenRef.current.seek(2); // 跳转到一个特定的时间，而不影响是否暂停或反转实例
tweenRef.current.progress(0.5); // 设置动画的状态, 0未开始 .5 走到一半 1完成
tweenRef.current.play();
```



[连续性动画](https://greensock.com/docs/v3/GSAP/Timeline)

```tsx
// 按顺序执行
const boxRef = useRef<any>();
const q = gsap.utils.selector(boxRef);
const tl = useRef<any>();
  
useEffect(() => {
  tl.current = gsap
  .timeline()
  .to(q('.ani1'), {
    rotate: 360,
    duration: 5,
  })
  .to(q('.ani2'), {
    x: 100,
    duration: 5,
  });
}, [])

<div className="box" ref={boxRef}>
  <span className="ani1">Hello1</span>
  <span className="ani2">Hello2</span>
</div>
```

