import {create} from 'zustand';

// -- Address state --
type SelectedAddressState = {
    address: string,
    updateSelectedAddress: (newAddress: string) => void,
    resetSelectedAddress: () => void
}

export const useSelectedAddress = create<SelectedAddressState>((set) => ({
    address: '',
    updateSelectedAddress: (newAddress: string) => set({address: newAddress}),
    resetSelectedAddress: () => set({address: ''})
}))

// -- Loading state --
type LoadingState = {
    loading: boolean,
    updateLoadingState: (loading: boolean) => void
}

export const useLoadingState = create<LoadingState>((set) => ({
    loading: false,
    updateLoadingState: (loading: boolean) => set({loading: loading})
}))