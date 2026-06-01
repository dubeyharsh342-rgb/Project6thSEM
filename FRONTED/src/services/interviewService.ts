const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

export interface InterviewSetupPayload {
  candidateName: string;
  targetRole: string;
  interviewTrack: string;
  difficulty: string;
  company: string;
}

export const interviewAPI = {
  createSession: async (formData: FormData, token: string) => {
    const response = await fetch(`${API_BASE_URL}/interviews`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Interview setup failed');
    }
    return data;
  },

  getLatestSession: async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/interviews`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(data.message || 'Failed to load interview session');
    }
    return data;
  },
};
