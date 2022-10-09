import { MuiTableBase } from '@base/table';
import { Box, Button, Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import { memberColums } from './constant';
import InsertSpecificMember from './InsertSpecificMember';
import { useStyle } from './style';
import { SpecificMemberProps } from './type';

export function SpecificMember({ members, onDeleteMembers }: SpecificMemberProps) {
  const classes = useStyle();
  const [openSelectMemberModal, setOpenSelectMemberModal] = useState(false);
  const toogleSelectMemberModal = () => setOpenSelectMemberModal((pre) => !pre);
  console.log(members);
  return (
    <Box className={classes.specificMemberContainer}>
      <InsertSpecificMember
        onClose={toogleSelectMemberModal}
        members={members}
        open={openSelectMemberModal}
      />
      <Box className={classes.specificButton}>
        <Button onClick={toogleSelectMemberModal} variant="contained">
          추가하다
        </Button>
        <Button variant="outlined" color="error">
          삭제
        </Button>
      </Box>
      <Box>
        <MuiTableBase columns={memberColums} dataSource={members} selectable={true} />
      </Box>
      <Box>
        <Typography className={`${classes.commonLabel} ${classes.specificMemberSubjectsTitle}`}>
          총 {members?.length ?? 0}과목을 발급대상으로 설정하였습니다..
        </Typography>
      </Box>
    </Box>
  );
}
