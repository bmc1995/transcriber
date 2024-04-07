import { ColorPaletteProp, VariantProp } from '@mui/joy';
import { createSlice } from '@reduxjs/toolkit';

export interface ToastAlert {
  id: string;
  duration: number;
  msg: string;
  color: ColorPaletteProp;
  variant: VariantProp;
}

type ToastAddAction = {
  type: string;
  payload: ToastAlert;
};

type ToastRemoveAction = {
  type: string;
  payload: string;
};

export const toastSlice = createSlice({
  name: 'toast',
  initialState: {
    toastQueue: <ToastAlert[]>[],
  },
  reducers: {
    addToast: (
      state: {
        toastQueue: { id: string; duration: number; msg: string; color: ColorPaletteProp; variant: VariantProp }[];
      },
      action: ToastAddAction,
    ) => {
      state.toastQueue.push({
        ...action.payload,
      });
    },
    removeToast: (state: { toastQueue: ToastAlert[] }, action: ToastRemoveAction) => {
      return {
        ...state,
        toastQueue: state.toastQueue.filter((toast: { id: string }) => toast.id != action.payload),
      };
    },
  },
});

export const { addToast, removeToast } = toastSlice.actions;

export default toastSlice.reducer;
