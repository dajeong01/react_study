import { create} from "zustand";

export const useStore = create((set) => ({
 value: true,
setValue: (callback) => set((state) => ({ value: callback(state)})),
}));

// export const useRefreshStore = create((set) => ({
//   isRefresh: true,
//   refresh: () => set((state) => ({ isRefresh: true })),
//   reset: () => set((state) => ({ isRefresh: false })),
// }));
