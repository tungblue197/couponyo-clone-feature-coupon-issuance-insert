import { memo } from 'react';

export const genericMemo: <T>(component: T) => T = memo;
export const INIT_SELECTED_DATA = [];
