import { create } from 'zustand';
import Cookies from 'js-cookie';

interface AuthState {
  isAuthenticated: boolean;
  phone: string | null;
  setAuth: (phone: string, token: string) => void;
  logout: () => void;
  checkAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  phone: null,
  setAuth: (phone, token) => {
    Cookies.set('co_token', token, { expires: 7 });
    Cookies.set('co_phone', phone, { expires: 7 });
    Cookies.set('co_login', 'true', { expires: 7 });
    set({ isAuthenticated: true, phone });
  },
  logout: () => {
    Cookies.remove('co_token');
    Cookies.remove('co_phone');
    Cookies.remove('co_login');
    set({ isAuthenticated: false, phone: null });
  },
  checkAuth: () => {
    const token = Cookies.get('co_token');
    const phone = Cookies.get('co_phone');
    if (token && phone) {
      set({ isAuthenticated: true, phone });
    } else {
      set({ isAuthenticated: false, phone: null });
    }
  },
}));
