import { FC, ReactNode } from 'react';
import styles from './listItem.module.css';

type ListItemProps = {
  children: ReactNode
}

export const ListItem: FC<ListItemProps> = ({ children }) => (
  <div className={styles.listItem}>{children}</div>
);