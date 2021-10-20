/**
 * @description 配置组件的部分
 */
import React, { FC, useMemo } from 'react';
import { createAsyncLinkageUtils } from '@/utils/formUtils/createAsyncLinkageUtils';
import {
  SchemaForm,
  SchemaMarkupField as Field,
  FormButtonGroup,
  Submit,
  createAsyncFormActions,
  FormEffectHooks,
} from '@formily/antd';
import 'antd/dist/antd.less';
import { ConfigsTypes, SceneElmsTypes } from '@/pages/types';
import { Input, Select, DatePicker } from '@formily/antd-components';
import styles from './board.less';
const actions = createAsyncFormActions();
const linkage = createAsyncLinkageUtils(actions);
interface PropTypes {
  config: ConfigsTypes;
}
const components = {
  Input,
  Select,
  DatePicker,
};
const {
  onFieldValueChange$,
  onFormInit$,
  onFormMount$,
  onFormChange$,
  onFormReset$,
  onFormOnSubmitSuccess$,
  onFormSubmitValidateSuccess$,
  onFormSubmitEnd$,
} = FormEffectHooks;
const Board: FC<PropTypes> = function(props) {
  const elmsToSchema = useMemo(() => {
    const elms: SceneElmsTypes[] = props.config.stage.scenes
      .map(scene => {
        return scene.elms;
      })
      .flat();
  }, [props.config]);
  const chainEffects = async () => {
    try {
      await onFormSubmitValidateSuccess$().subscribe(({ values }) => {
        console.log(values);
      });
    } catch (error) {}
  };
  return (
    <div className={styles['board']}>
      <SchemaForm
        // editable={false}
        actions={actions}
        schema={{}}
        components={components}
        effects={() => {
          chainEffects();
        }}
        // expressionScope={{
        //   sendCodeBtn
        // }}
      />
    </div>
  );
};

export default Board;
