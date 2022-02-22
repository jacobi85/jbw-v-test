
export const getCars = async () => {
  return fetch('/api/cars.json', {
    headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
  }).then(
    (response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("Error while loading cars.");
      }
    }
  );
};
