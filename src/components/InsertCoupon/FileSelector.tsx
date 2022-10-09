import { Box, Typography } from '@mui/material';
import React, { useRef, useState } from 'react';
import { useStyle } from './style';
import { FileSelectorProps } from './type';

const FileSelector = ({ onFileChange }: FileSelectorProps) => {
  const classes = useStyle();
  const [files, setFiles] = useState<FileList | null>();
  const inputRef = useRef<HTMLInputElement>(null);
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    setFiles(files);
    onFileChange?.(files);
  };
  const onClick = () => {
    inputRef.current?.click();
  };

  return (
    <Box onClick={onClick} className={classes.fileSelector}>
      <Typography className={classes.commonLabel}>
        파일 선택 {Array.from(files || []).map((file) => file.name)}
      </Typography>
      <input onChange={onChange} ref={inputRef} multiple hidden type={'text'} />
    </Box>
  );
};
export default FileSelector;
