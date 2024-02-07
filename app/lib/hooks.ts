import { TypedUseSelectorHook, useDispatch, useSelector, useStore } from 'react-redux';

import type { AppDispatch, AppStore, RootState } from '@/app/lib/store';

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
