import { ColumnsType } from '@base/table';
import { generateMember } from './example-data';
import * as z from 'zod';
import { IssuanceInsertForm, Member } from './model';

export const memberSchema = z.array(z.object({
    id: z.string(),
    name: z.string(),
    email: z.string()
}))

export const ISSUED_METHOD = {
  ALL: 'all',
  SPECIFIC: 'specific',
  CSV: 'csv',
} as const;

export const FONT_SIZE = {
  SMALL: '',
  NORMAL: '0.875rem',
  LARGE: '1.25rem',
};

export const members: Member[] = generateMember(4);

export const memberColums: ColumnsType<z.infer<typeof memberSchema>[0]> = [
  {
    dataIndex: 'id',
    key: 'id',
    title: 'id'
  },
  {
    dataIndex: 'name',
    key: 'name',
    title: 'name'
  },
  {
    dataIndex: 'email',
    key:'email',
    title: 'email'
  }
];

export const TYPE_OF_COUPON = {
  INSERT: 'insert',
  DOWNLOAD: 'downloads',
};
export const ALLOW_SEARCH = false;



export const issuanceInsertFormSchema = z.object({
  couponName: z.string().min(1, { message: 'required'}).max(20, { message: '1-20 characters' }),
  typeOfCouponIssuanece: z.string(),
  couponIssuanceMethod: z.string(),
  couponIssuancePeriod: z.date(),
  issuanceImmediately: z.boolean(),
  expriationDate: z.object({
    endDate: z.date(),
    startDate: z.date()
  }),
  nDaysAfterRelease: z.boolean(),
  availableUntil: z.number(),
  allowMaximumNumberOfIssuance: z.boolean(),
  maximumNumberOfIssuanceDays: z.number(),
  noDeadline: z.boolean(),
  members: memberSchema,
})

export const defaultIssuanceInsertForm: IssuanceInsertForm =  {
  couponName: '',
  availableUntil: 0,
  couponIssuanceMethod: ISSUED_METHOD.SPECIFIC,
  couponIssuancePeriod: new Date(),
  expriationDate:{endDate: new Date(), startDate: new Date()},
  issuanceImmediately: false,
  allowMaximumNumberOfIssuance: false,
  maximumNumberOfIssuanceDays: 0,
  members: [
    {
      id: '123123',
      name: '123123123',
      email: 'dfsdf@gmail.com'
    }
  ],
  nDaysAfterRelease: false,
  typeOfCouponIssuanece: TYPE_OF_COUPON.INSERT,
  noDeadline: false,
}