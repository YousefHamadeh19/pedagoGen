const USER_KEY = 'pedagogen_user';

export interface User {
    name: string;
    email: string;
    role: 'Teacher' | 'Coordinator';
}

export const authStorage = {
    saveUser: (user: User) => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(USER_KEY, JSON.stringify(user));
        }
    },

    getUser: (): User | null => {
        if (typeof window === 'undefined') return null;
        const data = localStorage.getItem(USER_KEY);
        return data ? JSON.parse(data) : null;
    },

    clearUser: () => {
        if (typeof window !== 'undefined') {
            localStorage.removeItem(USER_KEY);
        }
    }
};