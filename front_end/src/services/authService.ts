interface AuthCredentials {
  email: string;
  password: string;
}

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password: string): boolean => {
  return password.length >= 6;
};

export const authenticate = async (credentials: AuthCredentials, isRegistering: boolean): Promise<boolean> => {
  try {
    const endpoint = isRegistering ? '/api/auth/register' : '/api/auth/login';
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Authentication failed');
    }

    localStorage.setItem('token', data.token);
    return true;
  } catch (error) {
    console.error('Authentication error:', error);
    return false;
  }
};