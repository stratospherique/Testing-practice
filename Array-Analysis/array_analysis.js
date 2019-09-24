const arrayAnalysis = (arr) => (
  {
    average: Math.floor(arr.reduce((prev, curr) => (prev + curr), 0) / arr.length),
    min: arr.reduce((prev, curr) => {
      if (curr < prev) {
        return curr;
      }
      return prev;
    }),
    max: arr.reduce((prev, curr) => {
      if (curr > prev) {
        return curr;
      }
      return prev;
    }),
    length: arr.length,
  }
);

export default arrayAnalysis;
