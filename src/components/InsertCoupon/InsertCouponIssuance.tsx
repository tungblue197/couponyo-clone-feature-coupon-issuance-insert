import {
  Box,
  Typography,
  FormControl,
  TextField,
  Select,
  MenuItem,
  FormControlLabel,
  Checkbox,
  Switch,
  Button,
} from '@mui/material';
import MinimizeIcon from '@mui/icons-material/Minimize';
import { useStyle } from './style';
import InsertCouponMethod from './InsertCouponMethod';
import {
  defaultIssuanceInsertForm,
  FONT_SIZE,
  issuanceInsertFormSchema,
  TYPE_OF_COUPON,
} from './constant';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

type MuiInputProps = {
  label?: string;
  children?: React.ReactNode;
};

function MuiFormControl({ label, children }: MuiInputProps) {
  const classes = useStyle();

  return (
    <Box className={classes.csInputContainer}>
      <label className={classes.csInputLabel}>{label}</label>
      <FormControl size="small" fullWidth hiddenLabel>
        {children}
      </FormControl>
    </Box>
  );
}

function InsertCouponIssuance() {
  const { watch, control, handleSubmit } = useForm({
    defaultValues: defaultIssuanceInsertForm,
    shouldUnregister: false,
    resolver: zodResolver(issuanceInsertFormSchema),
  });

  const couponIssuanceMethod = watch('couponIssuanceMethod');
  const issuanceImmediately = watch('issuanceImmediately');
  const allowMaximumNumberOfIssuance = watch('allowMaximumNumberOfIssuance');

  console.log(issuanceImmediately);
  const classes = useStyle();
  return (
    <Box style={{ backgroundColor: '#FFF' }}>
      <Box className={classes.csContainer}>
        <MuiFormControl label="쿠폰명">
          <Controller
            name="couponName"
            control={control}
            render={({ field }) => (
              <TextField
                size="small"
                placeholder="쿠폰명을 입력하세요."
                InputProps={{
                  className: classes.defaultFontSize,
                  endAdornment: <Typography style={{ fontSize: '0.875rem' }}>0/20</Typography>,
                }}
                {...field}
              />
            )}
          />
        </MuiFormControl>
        <MuiFormControl label="발급유형">
          <Controller
            name="typeOfCouponIssuanece"
            control={control}
            render={({ field }) => (
              <Select
                className={`${classes.csTypeSelection} ${classes.defaultFontSize}`}
                {...field}
              >
                <MenuItem className={classes.defaultFontSize} value={TYPE_OF_COUPON.INSERT}>
                  끼워 넣다
                </MenuItem>
                <MenuItem className={classes.defaultFontSize} value={TYPE_OF_COUPON.DOWNLOAD}>
                  다운로드
                </MenuItem>
              </Select>
            )}
          />
        </MuiFormControl>
        <MuiFormControl label="발급방법">
          <InsertCouponMethod
            control={control}
            method={couponIssuanceMethod}
            name="couponIssuanceMethod"        
          />
        </MuiFormControl>
        <Box>
          <MuiFormControl label="발급기간">
            <Controller
              control={control}
              name="couponIssuancePeriod"
              render={({ field }) => (
                <TextField
                  disabled={issuanceImmediately}
                  inputProps={{ className: classes.defaultFontSize }}
                  className={classes.csDatePeriod}
                  type={'datetime-local'}
                  size="small"
                  {...field}
                />
              )}
            />
          </MuiFormControl>
          <MuiFormControl>
            <Controller
              control={control}
              name="issuanceImmediately"
              render={({ field }) => (
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label={<Typography className={classes.defaultFontSize}>즉시발급</Typography>}
                />
              )}
            />
          </MuiFormControl>
        </Box>
        <Box>
          <MuiFormControl label="유효기간">
            <Box>
              <Box>
                <Controller
                  control={control}
                  name="expriationDate.startDate"
                  render={({ field }) => (
                    <TextField
                      inputProps={{ className: classes.defaultFontSize }}
                      className={classes.csDatePeriod}
                      type={'date'}
                      size="small"
                      {...field}
                    />
                  )}
                />
                <MinimizeIcon color="action" />
                <Controller
                  control={control}
                  name="expriationDate.endDate"
                  render={({ field }) => (
                    <TextField
                      inputProps={{ className: classes.defaultFontSize }}
                      className={classes.csDatePeriod}
                      type={'date'}
                      size="small"
                      {...field}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="noDeadline"
                  render={({ field }) => (
                    <FormControlLabel
                      className={classes.csMarginLeft}
                      control={<Checkbox {...field} />}
                      label={<Typography className={classes.defaultFontSize}>기한없음</Typography>}
                    />
                  )}
                />
              </Box>
            </Box>
          </MuiFormControl>
          <MuiFormControl>
            <Box>
              <Controller
                control={control}
                name="noDeadline"
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label={<Typography className={classes.defaultFontSize}>발급후 N일</Typography>}
                  />
                )}
              />

              <Box className={classes.csInputValiableDate}>
                <Controller
                  control={control}
                  name="availableUntil"
                  render={({ field }) => (
                    <TextField
                      inputProps={{ className: classes.defaultFontSize }}
                      className={classes.csInputNumber}
                      size="small"
                      type="number"
                      {...field}
                    />
                  )}
                />

                <label className={classes.defaultFontSize}>일까지 사용가능</label>
              </Box>
            </Box>
          </MuiFormControl>
        </Box>
        <MuiFormControl label="발급개수">
          <Box className={classes.csInputValiableDate}>
            <Controller
              control={control}
              name="allowMaximumNumberOfIssuance"
              render={({ field }) => <Switch size="small" {...field} />}
            />
            최대
            <Box className={classes.csInputValiableDate}>
              <Controller
                control={control}
                name="maximumNumberOfIssuanceDays"
                render={({ field }) => (
                  <TextField
                    disabled={allowMaximumNumberOfIssuance}
                    size="small"
                    type="number"
                    inputProps={{ className: classes.defaultFontSize }}
                    className={classes.csInputNumber}
                    {...field}
                  />
                )}
              />
              <label className={classes.defaultFontSize}>개 까지 발급이 가능합니다.</label>
            </Box>
          </Box>
        </MuiFormControl>
      </Box>
      <Box className={classes.csButtonControl}>
        <Button
          onClick={handleSubmit((data) => {
            console.log('data:  ', data);
          })}
          className={classes.defaultFontSize}
          variant="contained"
        >
          발급
        </Button>
        <Button className={classes.defaultFontSize} variant="outlined" color="error">
          취소
        </Button>
      </Box>
    </Box>
  );
}

export default InsertCouponIssuance;
