/**
 * 通用配置信息
 */
export const defaultTablePage = {
  total: '{{total}}',
  showQuickJumper: true,
  showSizeChanger: true,
  pageSizeOptions: ['10', '20', '30', '40'],
  defaultPageSize: 20,
  showTotal: total => `总计: ${total}条`,
  onChange: '{{onPageChange}}',
};
export const tableSelection = {
  rowSelection: {
    selections: true,
    onChange: '{{onSelectChange}}',
  },
};
