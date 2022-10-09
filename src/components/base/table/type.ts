import { CSSProperties } from 'react';

export type ColumnsType<T> = Array<{
  title?: string;
  key: keyof T;
  dataIndex: keyof T;
  render?: (value: unknown, field: T) => React.ReactNode;
  headerCellStyle?: CSSProperties;
  bodyCellStyle?: CSSProperties;
}>;

export interface TableProps<T> {
  dataSource?: Array<T>;
  columns: ColumnsType<T>;
  selectable?: boolean;
  onSelectedRowChange?: (value?: T, selected?: T[]) => void;
  uniqueKey?: keyof T;
  emptyIcon?: React.ReactNode;
}
