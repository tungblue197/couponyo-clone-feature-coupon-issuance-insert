import { Box, Button, Typography } from '@mui/material';
import FileSelector from './FileSelector';
import { useStyle } from './style';

const CSVUpload = () => {
  const classes = useStyle();
  return (
    <Box className={classes.CSVUploadContainer}>
      <Typography variant="h6">게시 개체 CSV 업로드</Typography>
      <Typography className={classes.commonLabel}>10MB / 12.80%</Typography>
      <Box className={classes.fileSelectorContainer}>
        <FileSelector />
        <Button className={classes.downloadButton} variant="contained">
          CSV 샘플 다운로드
        </Button>
      </Box>
    </Box>
  );
};

export default CSVUpload;
