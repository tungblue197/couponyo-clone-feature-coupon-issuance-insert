import { generateMember } from 'components/InsertCoupon/example-data';
import { Member } from 'components/InsertCoupon/model';
import { useState } from 'react';
export interface MemebersParams {
  textSearch?: string;
  size?: number;
  page?: number;
}
export default function useMembers(init: Member[] = generateMember(100)) {
  const [members, setMembers] = useState(init);
  const [totalPage, setTotalPage] = useState(1);
  function getMembers({ textSearch, size = 10, page = 1 }: MemebersParams) {
    setTotalPage(1);
    setMembers([]);
  }
  return { members, totalPage, getMembers };
}
