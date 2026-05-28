export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface AuthResponse {
  success: boolean;
  token?: string;
  user: AuthUser;
  message?: string;
}

export interface AuthAPI {
  signup(userData: Record<string, string>): Promise<AuthResponse>;
  login(userData: Record<string, string>): Promise<AuthResponse>;
  getCurrentUser(token: string): Promise<{ user: AuthUser }>;
  logout(): Promise<{ success: boolean; message?: string }>;
}

export const authAPI: AuthAPI;
export const tokenStorage: {
  setToken: (token: string) => void;
  getToken: () => string | null;
  removeToken: () => void;
  isTokenValid: () => boolean;
};
