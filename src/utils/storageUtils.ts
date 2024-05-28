import { StorageKey } from '../types'; // Assuming you have a types file for shared types

class StorageUtils {
  public static saveToLocalStorage(key: string, data: any): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }

  // Other utility functions...
}

export default StorageUtils;