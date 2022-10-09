import { Member } from "./model";

export function generateMember(amount: number) {
  const members: Member[] = [];

  for (let i = 0; i < amount; i++) {
    const member: Member = {
      id: i.toString(),
      name: `회원 ${i}`,
      email: `회원 이름${i}@gmail.com`,
    };
    members.push(member);
  }
  return members;
}
