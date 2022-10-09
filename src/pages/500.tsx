import CustomError from '@base/CustomError';

export default function Custom500() {
  return <CustomError errorCode={500} errorMessage={`Server-side error occurred`} />;
}
