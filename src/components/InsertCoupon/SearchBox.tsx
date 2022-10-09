import useMembers, { MemebersParams } from '@hooks/useMembers';
import { Box, Button, FormControl, List, ListItemButton, TextField } from '@mui/material';
import { ChangeEvent, useMemo, useState } from 'react';
import { useStyle } from './style';
import { SearchBoxProps } from './type';

export function SearchBox({ onSearch }: SearchBoxProps) {
  const classes = useStyle();
  const onTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value = '' } = e.target;
    onSearch?.(value);
  };
  const handleSearch = () => {
    return;
  };
  return (
    <Box>
      <FormControl className={classes.searchContainer}>
        <Box className={classes.searchInput}>
          <TextField
            InputProps={{
              classes: { input: classes.input },
            }}
            onChange={onTextChange}
            className={classes.searchInputFeild}
            size="small"
            placeholder="아이디 또는 회원명으로 검색해주세요."
          />
        </Box>
        <Button onClick={handleSearch} variant="contained">
          검색
        </Button>
      </FormControl>
    </Box>
  );
}

export default SearchBox;
