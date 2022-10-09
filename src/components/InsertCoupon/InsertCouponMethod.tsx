import React, { useMemo, useState, memo } from 'react';
import { Box, Radio, RadioGroup, FormControl, FormControlLabel } from '@mui/material';
import { useStyle } from './style';
import { ISSUED_METHOD, memberColums, members } from './constant';
import CSVUpload from './CSVUpload';
import { SpecificMember } from './SpecificMember';
import { Controller } from 'react-hook-form';
import { InsertCouponMethodProps } from './type';

function InsertCouponMethod({ control, name, method }: InsertCouponMethodProps) {
  const classes = useStyle();

  const renderMethod = useMemo(() => {
    switch (method) {
      case ISSUED_METHOD.CSV:
        return <CSVUpload />;
      case ISSUED_METHOD.SPECIFIC:
        return (
          <Controller
            control={control}
            name="members"
            render={({ field }) => <SpecificMember members={field.value} />}
          />
        );
      default:
        return;
    }
  }, [control, method]);

  return (
    <Box className={classes.container}>
      <FormControl>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <RadioGroup row {...field}>
              <FormControlLabel
                disabled={true}
                classes={{ label: classes.commonLabel }}
                value={ISSUED_METHOD.ALL}
                control={<Radio size="small" />}
                label="전원"
              />
              <FormControlLabel
                classes={{ label: classes.commonLabel }}
                value={ISSUED_METHOD.SPECIFIC}
                control={<Radio size="small" />}
                label="특정 회원"
              />
              <FormControlLabel
                classes={{ label: classes.commonLabel }}
                value={ISSUED_METHOD.CSV}
                control={<Radio size="small" />}
                label="CSV 파일 업로드"
              />
            </RadioGroup>
          )}
        />
      </FormControl>
      <Box className={classes.methodContainer}>{renderMethod}</Box>
    </Box>
  );
}

export default memo(InsertCouponMethod);
