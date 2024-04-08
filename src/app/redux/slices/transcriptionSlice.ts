import { createSlice } from '@reduxjs/toolkit';

export interface TranscriptionInstance {
  id: string;
  name: string;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'FAILED';
  audioUrl: string;
  textResult: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface TranscriptionState {
  instances: TranscriptionInstance[];
}

const initialState: TranscriptionState = {
  instances: [],
};

/**
 * Redux slice for managing transcription state.
 */
export const transcriptionSlice = createSlice({
  initialState,
  name: 'transcription',
  reducers: {
    /**
     * Action for adding a transcription instance.
     * @param state - The current transcription state.
     * @param action - The payload action containing the new transcription instance.
     * @returns The updated transcription state.
     */
    addTranscriptionInstance: (state, action: { payload: TranscriptionInstance }) => {
      state.instances.push(action.payload);
    },
    /**
     * Action for updating a transcription instance.
     * @param state - The current transcription state.
     * @param action - The payload action containing the updated transcription instance.
     * @returns The updated transcription state.
     */
    updateTranscriptionInstance: (state, action: { payload: TranscriptionInstance }) => {
      const index = state.instances.findIndex(instance => instance.id === action.payload.id);
      state.instances[index] = action.payload;
    },
    /**
     * Action for removing a transcription instance.
     * @param state - The current transcription state.
     * @param action - The payload action containing the transcription instance ID.
     * @returns The updated transcription state.
     */
    removeTranscriptionInstance: (state, action: { payload: TranscriptionInstance }) => {
      state.instances = state.instances.filter(instance => instance.id !== action.payload.id);
    },
  },
});

export const { addTranscriptionInstance, updateTranscriptionInstance, removeTranscriptionInstance } =
  transcriptionSlice.actions;

export default transcriptionSlice.reducer;
