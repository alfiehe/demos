import { Link } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  return (
    <article className={styles.demo}>
      <h1>Demos</h1>
      <ul>
        <li><Link to='/reducer-context'>Reducer Context 全局状态管理</Link></li>
        <li><Link to='/virtual-list'>Virtual List 虚拟列表</Link></li>
      </ul>
    </article>
  );
}
