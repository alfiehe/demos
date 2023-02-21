import React from 'react';
import { ContextProvider } from './context';
import Name from './components/Name';
import Age from './components/Age';
import ChildDisplay from './components/ChildDisplay';
import styles from './index.less';

export default function ReducerContext(props) {
  console.log('ContextReducerDemo...')

  return (
    <ContextProvider>
      <article className={styles.demo}>
        <Name />
        <hr />
        <Age />
        <hr />
        <ChildDisplay />
      </article>
    </ContextProvider>
  );
}
