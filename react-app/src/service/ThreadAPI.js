// APIService.js

import axios from 'axios';

const GETALLTHREADS_URL = "http://localhost:8080/thread";

export const getAllThreads = async () => {
    try {
      const response = await axios.get(GETALLTHREADS_URL);
      return response.data;
    } catch (error) {
      console.error('Error fetching data:', error);
      throw error;
    }
  };