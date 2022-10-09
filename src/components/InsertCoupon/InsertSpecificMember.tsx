import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  DialogContent,
  Button,
  Box,
  Pagination,
} from '@mui/material';
import { MuiTableBase } from '@base/table';
import { makeStyles } from '@mui/styles';
import { useStyle } from './style';
import { memberColums } from './constant';
import SearchBox from './SearchBox';
import { Member } from './model';
import useMembers, { MemebersParams } from '@hooks/useMembers';

interface InsertSpecificMemberProps {
  open: boolean;
  onClose?: () => void;
  members?: Member[];
}

const DEFAULT_PARAMS: MemebersParams = {
  textSearch: '',
  page: 1,
  size: 10,
};

function InsertSpecificMember({ open, onClose }: InsertSpecificMemberProps) {
  const classes = useStyle();
  const { members, totalPage, getMembers } = useMembers();
  const [params, setParams] = useState<typeof DEFAULT_PARAMS>(DEFAULT_PARAMS);

  const handleParamsChange = (key: keyof MemebersParams, value: string | number) => {
    setParams((pre) => ({ ...pre, [key]: value }));
  };
  const onSearch = () => {
    getMembers(params);
  };

  console.log(params);

  return (
    <Dialog open={open} classes={{ paper: classes.dialogPaper }} onClose={onClose}>
      <DialogTitle>회원 검색</DialogTitle>
      <DialogContent style={{ width: '100%' }}>
        <Box className={classes.dialogContent}>
          <SearchBox onSearch={(text: string) => handleParamsChange('textSearch', text)} />
          <DialogContentText>검색 결과: 20명</DialogContentText>
          <MuiTableBase columns={memberColums} dataSource={members} selectable={true} />
          <Pagination
            page={params.page}
            count={totalPage}
            onChange={(_, number) => handleParamsChange('page', number)}
            variant="outlined"
            shape="rounded"
          />
        </Box>
      </DialogContent>
      <DialogActions>
        <Button>고르다</Button>
        <Button onClick={onClose} color="error">
          취소
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default InsertSpecificMember;
