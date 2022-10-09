import type { NextPageContext } from 'next';
import CustomError from '@base/CustomError';

interface Props {
  statusCode: number;
}

export default function Error({ statusCode }: Props) {
  return (
    <CustomError
      errorCode={statusCode}
      errorMessage={statusCode ? `An error ${statusCode} occurred on server` : 'An error occurred on client'}
    />
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err?.statusCode ?? 500 : 404;
  return { statusCode };
};
