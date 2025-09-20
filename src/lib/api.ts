// API configuration
const API_BASE_URL = 'https://api.rotinoo.com/api';

// Types
export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  data?: T;
  errors?: Record<string, string[]>;
}

// Contact API
export const contactApi = {
  async submitMessage(data: ContactMessage): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact-messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      
      if (!response.ok) {
        if (response.status === 422 && result.errors) {
          // Validation error - throw with errors attached
          const error = new Error(result.message || 'Validation failed') as any;
          error.errors = result.errors;
          error.status = response.status;
          throw error;
        }
        throw new Error(result.message || 'Failed to submit message');
      }

      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  },

  async getMessages(): Promise<ApiResponse> {
    try {
      const response = await fetch(`${API_BASE_URL}/contact-messages`, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.message || 'Failed to fetch messages');
      }

      return result;
    } catch (error) {
      console.error('API Error:', error);
      throw error;
    }
  }
};
