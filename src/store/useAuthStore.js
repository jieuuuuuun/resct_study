import { create } from "json-server";
import { combine, persist } from "zustand/middleware";


const useAuthStore = create(persist(combine(
  {
    isLogin: false,
    currentUser: null,
    previousUrl: "/"
  }, //전역상태
  (set) => ({
    setIsLogin: (status) => set((state) => ({
      isLogin: status
    })),
     setCurrentUser: (user) => set((state) => ({
      currentUser: user
    })),
     setPreviousUrl: (url) => set((state) => ({
      previousUrl: url
    }))
  }) //setter
), 
{
  name: "auth-store"
}
))

export default useAuthStore;