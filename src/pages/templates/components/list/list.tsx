/**
 * @description 描述
 */
import React, { FC } from 'react';
import classnames from 'classnames';
import { EditOutlined } from '@ant-design/icons';
import styles from './list.less';
export interface TemplateItems {
  name: string;
  id: string;
  previewImg?: string;
}
interface PropTypes {
  selectorId: string;
  list: TemplateItems[];
  onItemClick?: (id: string) => void;
  onEdit?: (id: string) => void;
}
const List: FC<PropTypes> = function({ list, selectorId, ...props }) {
  if (!Array.isArray(list)) return <></>;
  const onItemClick = (id: string) => {
    props.onItemClick && props.onItemClick(id);
  };
  const onEdit = (id: string) => {
    props.onEdit && props.onEdit(id);
  };
  console.log(list);

  const renderItems = () => {
    return list.map((item, idx) => {
      const active = selectorId === item.id;
      return (
        <div
          key={idx}
          className={classnames(styles['list-card'], {
            [styles.active]: active,
          })}
        >
          <div
            className={styles['list-item']}
            onClick={() => onItemClick(item.id)}
          >
            <section
              className={styles['list-item-preview_img']}
              style={{
                backgroundImage: `url(${item.previewImg})`,
              }}
            ></section>
            <section className={styles['list-item-name']}>
              <span>{item.name}</span>
              {active && (
                <EditOutlined
                  style={{ marginLeft: '4px' }}
                  onClick={e => {
                    e.stopPropagation();
                    onEdit(item.id);
                  }}
                />
              )}
            </section>
          </div>
        </div>
      );
    });
  };
  return <div className={styles['list']}>{renderItems()}</div>;
};

export default List;
