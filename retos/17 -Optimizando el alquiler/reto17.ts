function optimizeIntervals(intervals) {
  return intervals
    .sort((x, y) => x[0] - y[0])
    .reduce((mergedIntervals, currentInterval) => {
      let [start, end] = currentInterval;

      let mergedInterval = mergedIntervals.at(-1);
    
      if (start <= mergedInterval?.[1]) {
        mergedIntervals.at(-1)[1] = Math.max(end, mergedInterval[1]);
      } else mergedIntervals.push(currentInterval);

      return mergedIntervals;
    }, []);
}