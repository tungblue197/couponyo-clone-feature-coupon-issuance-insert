import { styled } from '@mui/material/styles';

const Wrapper = styled('div')({
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
});

const H1 = styled('h1')(({ theme }) => ({
  display: 'inline-block',
  borderRight: theme.palette.mode === 'dark' ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid rgba(0, 0, 0, 0.3)',
  margin: '0px 20px 0px 0px',
  padding: '10px 23px 10px 0px',
  fontSize: '24px',
  fontWeight: 500,
  verticalAlign: 'top',
}));

const MessageWrapper = styled('div')({
  display: 'inline-block',
  textAlign: 'left',
  lineHeight: '49px',
  height: '49px',
  verticalAlign: 'middle',
});

const H2 = styled('h2')({
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: 'inherit',
  margin: 0,
  padding: 0,
});

interface Props {
  errorCode: number;
  errorMessage: string;
}

export default function CustomError({ errorCode, errorMessage }: Props): JSX.Element {
  return (
    <Wrapper>
      <div>
        <H1>{errorCode}</H1>
        <MessageWrapper>
          <H2>{errorMessage}</H2>
        </MessageWrapper>
      </div>
    </Wrapper>
  );
}
