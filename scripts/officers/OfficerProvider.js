let officers = [];

const useOfficers = () => officers.slice();

const getOfficers = () => {
  return fetch('https://criminals.glassdale.us/officers')
    .then(res => res.json())
    .then(officersData => officers = officersData);
};