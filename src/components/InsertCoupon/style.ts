import { makeStyles } from '@mui/styles';
import { FONT_SIZE } from './constant';

export const useStyle = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    background: '#FFF',
    borderBottom: '1px solid #EEE',
    paddingBottom: 18,
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    gap: 20,
  },
  searchInputResultContainer: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    zIndex: 99,
    border: '1px solid #EEE',
    boxShadow: `1px 1px 4px 1px rgba(0,0,0,.3)`,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
  },
  searchInputItem: {
    borderBottom: '1px solid #EEE',
  },
  searchInput: {
    flex: 1,
    position: 'relative',
  },
  searchInputFeild: {
    width: '100%',
  },
  fileSelectorContainer: {
    display: 'flex',
    width: '100%',
    maxWidth: 480,
  },
  fileSelector: {
    border: '1px solid #CCC',
    borderRadius: 4,
    width: '100%',
    height: 40,
    display: 'flex',
    alignItems: 'center',
    padding: '0px 12px',
  },
  downloadButton: {
    minWidth: 200,
    textTransform: 'capitalize',
  },
  CSVUploadContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 8,
  },
  commonLabel: {
    fontSize: FONT_SIZE.NORMAL,
  },
  methodContainer: {
    borderTop: '1px solid #EEE',
    paddingTop: 12,
  },
  specificMemberContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  specificMemberSubjectsTitle: {
    fontWeight: '600',
  },
  input: {
    '&::placeholder': {
      fontSize: FONT_SIZE.NORMAL,
    },
    fontSize: FONT_SIZE.NORMAL,
  },
  specificButton: {
    display: 'flex',
    gap: 8,
  },
  dialogPaper: {
    maxWidth: '860px',
    width: '98vw',
  },
  dialogContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
  },
  csContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 12,
    padding: 22,
  },
  csInputContainer: {
    display: 'flex',
    alignItems: 'flex-start',
  },
  csInputLabel: {
    width: 200,
    fontSize: '0.875rem',
    marginTop: 12,
  },
  csButtonControl: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 12,
    padding: 12,
    backgroundColor: '#EEE',
  },
  csTypeSelection: {
    maxWidth: 380,
    width: '100%',
  },
  csDatePeriod: {
    maxWidth: 250,
    width: '100%',
  },
  csMarginLeft: {
    marginLeft: 12,
  },
  csInputValiableDate: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 12,
    flex: 1,
  },
  csInputNumber: {
    maxWidth: 180,
    width: '100%',
  },
  defaultFontSize: {
    fontSize: FONT_SIZE.NORMAL,
    '&::placeholder': {
      fontSize: FONT_SIZE.NORMAL,
    },
  },
});
