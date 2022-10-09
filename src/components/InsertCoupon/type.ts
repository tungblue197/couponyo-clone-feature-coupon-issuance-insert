import { IssuanceInsertForm, Member } from './model';
import { Control, UseFormWatch } from 'react-hook-form';
export interface SearchBoxProps {
  onSearch?: (value: string) => void;
}

export interface SpecificMemberProps {
  members?: Member[];
  onDeleteMembers?: (members?: Member[]) => void;
}

export interface FileSelectorProps {
  onFileChange?: (files?: FileList | null) => void;
}

export interface InsertCouponMethodProps {
  control: Control<IssuanceInsertForm>;
  name: keyof IssuanceInsertForm;
  method?: string;
}
