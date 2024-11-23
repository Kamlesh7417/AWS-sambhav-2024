import axios, { AxiosError } from 'axios';

export interface Order {
  order_id: string;
  order_status: string;
  order_placed_timestamp: string;
}

export interface ApiError {
  message: string;
  status?: number;
  isConnectionError?: boolean;
}

// API endpoint in US East (N. Virginia) - us-east-1
const API_URL = 'https://susowh1c2f.execute-api.us-east-1.amazonaws.com/v1/orders';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  }
});

export const fetchOrders = async (): Promise<Order[]> => {
  try {
    const response = await api.get('');
    return response.data.map((order: any) => ({
      order_id: order.order || '',
      order_status: order.status || 'Open',
      order_placed_timestamp: order.Date || new Date().toISOString(),
    }));
  } catch (error) {
    const apiError: ApiError = {
      message: 'An error occurred while fetching orders',
      isConnectionError: false
    };

    if (error instanceof AxiosError) {
      if (!error.response) {
        apiError.message = 'Unable to connect to the server. Please check your connection and try again.';
        apiError.isConnectionError = true;
      } else {
        apiError.message = error.response.data?.message || 'Failed to fetch orders';
        apiError.status = error.response.status;
      }
    }

    throw apiError;
  }
};