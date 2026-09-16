import { create } from 'zustand'

export const useAuthStore = create((set) => ({

    token: localStorage.getItem("token") || null,
    setToken: (token: string) => {
        localStorage.setItem("token", token)
        set({ token })
    }
}))