import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from '@mui/material';
import React, { useCallback, useEffect, useState, useMemo, memo } from 'react';
import { genericMemo, INIT_SELECTED_DATA } from './constant';
import { useStyle } from './style';
import { TableProps } from './type';

function MuiTableBase<T extends { id: string }>({
  columns,
  dataSource,
  selectable = false,
  onSelectedRowChange,
  uniqueKey = 'id',
}: TableProps<T>) {
  const classes = useStyle();
  const [selectedList, setSelectedList] = useState<T[]>([]);
  console.log({ dataSource });
  const renderCells = useCallback(
    (row: T) => {
      return columns?.map((col) => (
        <TableCell style={col.bodyCellStyle} key={col.key.toString()} component="th" scope="row">
          {col.render ? col.render?.(row[col.key], row) : (row[col.key] as React.ReactNode)}
        </TableCell>
      ));
    },
    [columns]
  );

  const onSelecteRow = useCallback(
    (row: T) => {
      let newSelected = [...selectedList];
      const isExist = selectedList.some((sel) => sel[uniqueKey] === row[uniqueKey]);
      if (isExist) newSelected = selectedList.filter((sel) => sel[uniqueKey] !== row[uniqueKey]);
      else newSelected.push(row);
      onSelectedRowChange?.(row, newSelected);
      setSelectedList(newSelected);
    },
    [onSelectedRowChange, selectedList, uniqueKey]
  );

  const onSelectAll = () => {
    if (selectedList.length === dataSource?.length) {
      onSelectedRowChange?.(undefined, INIT_SELECTED_DATA);
      setSelectedList(INIT_SELECTED_DATA);
      return;
    }
    const selectedAllKey = dataSource?.map((item) => item);
    if (!selectedAllKey) return;
    setSelectedList(selectedAllKey);
    onSelectedRowChange?.(undefined, selectedAllKey);
  };

  const isSelectingAll = useMemo(() => {
    const selAll = selectedList.length === dataSource?.length;
    return selAll;
  }, [selectedList, dataSource]);

  useEffect(() => {
    if (!selectable && selectedList.length) {
      onSelectedRowChange?.(undefined, INIT_SELECTED_DATA);
      setSelectedList(INIT_SELECTED_DATA);
    }
  }, [selectable, selectedList, onSelectedRowChange]);

  const renderTableContents = useMemo(() => {
    if (!dataSource || !dataSource.length) return;
    return dataSource?.map((row) => (
      <TableRow key={row[uniqueKey] as string}>
        {selectable && (
          <TableCell width={10}>
            <Checkbox
              onClick={() => onSelecteRow(row)}
              size="small"
              checked={selectedList.some((sel) => sel[uniqueKey] === row[uniqueKey])}
            />
          </TableCell>
        )}
        {renderCells(row)}
      </TableRow>
    ));
  }, [dataSource, onSelecteRow, renderCells, selectable, selectedList, uniqueKey]);
  return (
    <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            {selectable && (
              <TableCell width={10}>
                <Checkbox
                  onClick={onSelectAll}
                  size="small"
                  indeterminate={selectedList.length > 0 && !isSelectingAll}
                  checked={isSelectingAll}
                />
              </TableCell>
            )}
            {columns?.map((item) => (
              <TableCell
                style={{ ...item.headerCellStyle, fontWeight: '600' }}
                key={item.key.toString()}
              >
                {item.title}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>{renderTableContents}</TableBody>
      </Table>
    </TableContainer>
  );
}

export default genericMemo(MuiTableBase);
