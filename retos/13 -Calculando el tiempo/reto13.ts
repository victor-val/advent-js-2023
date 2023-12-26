function calculateTime(deliveries) {
  const sevenHours = 25200000;
  let multipliers = [3600000, 60000, 1000];
  let ms =
    deliveries.reduce((acc, current) => {
      let [hours, minutes, seconds] = current
        .split(':')
        .map((n, i) => +n * multipliers[i]);

      return acc + hours + minutes + seconds;
    }, 0) - sevenHours;

  let mathSign = Math.sign(ms).toString().replace(/1|0/, '');

  ms = Math.abs(ms);

  let hours = Math.floor(ms / (3600000));
  let minutes = Math.floor((ms % (3600000)) / (60000));
  let seconds = Math.floor((ms % (60000)) / 1000);

  return `${mathSign}${hours.toString().padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}