import React from 'react';
import Faker from 'faker';
import styles from './index.less';

const itemHeight = 100;
const total = 1e3;
// 可视区域高度
const containerHeight = 500;
// 可显示的列表项数
const visibleCount = Math.ceil(containerHeight / itemHeight);

export default function VirtualScrollList() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const [listData, setListData] = React.useState<any[]>([]);
  // 偏移量
  const [startOffset, setStartOffset] = React.useState(0);
  // 起始索引
  const [start, setStart] = React.useState(0);
  // 结束索引
  const end = start + visibleCount;
   // 列表总高度
   const listHeight = React.useMemo(() => {
    return listData.length * itemHeight;
  }, []);

  // 获取真实显示列表数据
  const visibleData = React.useMemo(() => {
    return listData.slice(start, Math.min(end, listData.length));
  }, [listData, start, end]);

  // 加载随机数据
  const getData: any = React.useCallback(() => {
    if (listData.length >= total) {
      return [];
    }
    return new Array(10).fill({}).map((item) => ({
      id: Faker.random.uuid(),
      avatar: Faker.image.avatar(),
      title: Faker.name.firstName(),
      content: Faker.company.companyName(),
    }));
  }, [listData]);

  // 初始化数据
  React.useEffect(() => setListData(getData()), []);

  // 回到顶部
  const onScrollToTop = () => {
    containerRef?.current?.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // 滚动事件回调
  const onScrollEvent = React.useCallback(
    (e) => {
      // 当前滚动位置
      const scrollTop = containerRef?.current?.scrollTop || 0;
      // 此时的开始索引
      const start = Math.floor(scrollTop / itemHeight);
      const end = start + visibleCount;
      setStart(start);
      if (end >= listData.length) {
        const data = listData.concat(getData());
        setListData(data);
      }
      // 此时的偏移量
      const offset = scrollTop;
      setStartOffset(offset);
    },
    [listData, getData, visibleCount]
  );

  React.useEffect(() => {
    let dom = containerRef.current;
    // onScrollEvent();
    if (dom) {
      dom.addEventListener("scroll", onScrollEvent);
    }
    return () => {
      if (dom) {
        dom.removeEventListener("scroll", onScrollEvent);
      }
    };
  }, [onScrollEvent]);

  return (
    <article className={styles.container} ref={containerRef}>
      {/* <div className="scrollTopBtn" onClick={onScrollToTop}>
        ∧
      </div> */}
      <div
        className={styles.phantom}
        style={{ height: Math.max(listHeight, containerHeight + 1) }}
      />
      <ul style={{ transform: `translate3d(0, ${startOffset}px, 0)` }}>
        {
          visibleData.map(it => {
            return <li key={it.id} style={{ height: itemHeight }}>
              {/* <img src={it.avatar} alt="" /> */}
              <h4>{it.title}</h4>
              <p>{it.content}</p>
            </li>;
          })
        }
      </ul>
    </article>
  );
}
