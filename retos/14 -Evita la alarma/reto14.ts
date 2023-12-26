function maxGifts(houses) {
  let incl = 0;
  let excl = 0;
  let excl_new;

  for(let house of houses) {
      excl_new = [excl, incl][+(incl > excl)];
      incl = excl + house;
      excl = excl_new;
  }
  return [excl, incl][+(incl > excl)];
}
