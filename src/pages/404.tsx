import CustomError from '@base/CustomError';

export default function Custom404() {
  return <CustomError errorCode={404} errorMessage={`Page Not Found`} />;
}
