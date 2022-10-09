import * as z from "zod";
import { issuanceInsertFormSchema, memberSchema } from "./constant";

export type FormModel = {
    couponName: string,
    typeOfCouponIssuanece: string,
    couponIssuanceMethod: string,
    couponIssuancePeriod: Date,
    issuanceImmediately: boolean,
    expriationDate: ExpirationDate,
    noDeadline: boolean,
    nDaysAfterRelease: boolean,
    availableUntil: number,
    maximumNumberOfIssuance: number,
    members: string[],
    limitIssuance: boolean,
}
export type ExpirationDate = {
    startDate: Date,
    endDate: Date
}

export type IssuanceInsertForm = z.infer<typeof issuanceInsertFormSchema>;

export type Member = z.infer<typeof memberSchema>[0]


