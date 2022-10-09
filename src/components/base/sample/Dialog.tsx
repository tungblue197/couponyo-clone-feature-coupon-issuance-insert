import { Close } from '@mui/icons-material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MaterialDialog from '@mui/material/Dialog';
import { DialogProps as MaterialDialogProps } from '@mui/material/Dialog/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import * as React from 'react';
import { FC } from 'react';
import Spacer from "@base/sample/Spacer";

type ComplexDialogProps = MaterialDialogProps & DialogProps;

interface DialogProps {
  title: string;
  onClickClose: () => void;
  closeButtonText?: string;
  actionButton?: JSX.Element;
  isDialogAction?: boolean;
}

const Dialog: FC<ComplexDialogProps> = ({
  title,
  open,
  onClickClose,
  children,
  actionButton,
  closeButtonText = '취소',
  isDialogAction = true,
  ...others
}) => {
  return (
    <React.Fragment>
      <MaterialDialog open={open} onClose={onClickClose} fullWidth {...others}>
        <DialogTitle sx={{ justifyContent: 'space-between', alignItems: 'center', display: 'flex' }}>
          {title}
          <IconButton color="secondary" onClick={onClickClose}>
            <Close />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Box>
            <Spacer vertical />
            {children}
            <Spacer vertical />
          </Box>
        </DialogContent>
        {isDialogAction && (
          <>
            <Spacer vertical />
            <DialogActions>
              {actionButton}
              <Button color="secondary" variant="outlined" onClick={onClickClose}>
                {closeButtonText}
              </Button>
            </DialogActions>
            <Spacer vertical />
          </>
        )}
      </MaterialDialog>
    </React.Fragment>
  );
};

export default Dialog;
