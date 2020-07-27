let officers = [];

export const useOfficers = () => officers.slice();

export const getOfficers = () => {
  return fetch('https://criminals.glassdale.us/officers')
    .then(res => res.json())
    .then(officersData => officers = officersData);
};