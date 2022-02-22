
export const arraySortByValue = (array, value) => {
  return array.sort((a, b) => {
    return a[value] - b[value];
  });
}
