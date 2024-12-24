describe('Simple Authentication Test', () => {
    let mockLocalStorage = {};
  
    beforeEach(() => {
      mockLocalStorage = {};
      global.localStorage = {
        getItem: (key) => mockLocalStorage[key] || null,
        setItem: (key, value) => { mockLocalStorage[key] = value; },
        removeItem: (key) => { delete mockLocalStorage[key]; }
      };
    });
  
    test('localStorage.getItem returns null if userEmail is not set', () => {
      expect(localStorage.getItem('userEmail')).toBeNull();
    });
  
    test('localStorage.getItem returns the correct value if userEmail is set', () => {
      localStorage.setItem('userEmail', 'test@example.com');
      expect(localStorage.getItem('userEmail')).toBe('test@example.com');
    });
  });
  