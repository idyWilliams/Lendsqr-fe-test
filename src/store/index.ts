import create from "zustand";

interface ISideBarState {
  sideBarOpen: boolean;
  invitationModalOpen: boolean;
  toggleSidebar: (value?: boolean) => void;
  setInvitationModalOpen: (value: boolean) => void;
}
export const useSidebarState = create<ISideBarState>((set) => ({
  sideBarOpen: false,
  invitationModalOpen: false,
  toggleSidebar: (value?: boolean) =>
    set((state) => ({ sideBarOpen: value ?? !state.sideBarOpen })),
  setInvitationModalOpen: (isOpen: boolean) =>
    set((state) => ({ invitationModalOpen: isOpen })),
}));
