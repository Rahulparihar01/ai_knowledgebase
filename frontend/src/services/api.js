import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api/v1';

const getAuthHeader = () => ({
  headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
});

export const documentService = {
  upload: async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return axios.post(`${API_URL}/documents/upload`, formData, getAuthHeader());
  },
  list: async () => {
    return axios.get(`${API_URL}/documents/`, getAuthHeader());
  }
};

export const chatService = {
  query: async (message) => {
    // Note: This returns a stream, we handle it differently in the UI
    return fetch(`${API_URL}/chat/query`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ message })
    });
  },
  general: async (message) => {
    return fetch(`${API_URL}/chat/general`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ message })
    });
  },
  history: async () => {
    return axios.get(`${API_URL}/chat/history`, getAuthHeader());
  }
};
