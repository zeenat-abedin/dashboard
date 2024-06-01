
class StorageUtils {
  public static saveToLocalStorage(key: string, data: any): void {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
    } catch (error) {
      console.error('Error saving data to localStorage:', error);
    }
  }

  public static getFromLocalStorage(key: string): any {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return undefined;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error getting data from localStorage:', error);
      return undefined;
    }
  }
}

export default StorageUtils;