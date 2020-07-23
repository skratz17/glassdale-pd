let convictions = [];

export const useConvictions = () => convictions.slice();

export const useConvictionsAlphabetical = () => {
  const sortedConvictions = convictions.slice();
  sortedConvictions.sort((a, b) => a.name.localeCompare(b.name));
  return sortedConvictions;
};

export const getConvictions = () => {
  return fetch('https://criminals.glassdale.us/crimes')
    .then(res => res.json())
    .then(convictionsData => {
      convictions = convictionsData
    });
};