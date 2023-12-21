function manufacture(gifts, materials){   
  return gifts.reduce((accumulator, gift) => {
      const isValid = gift.split('').every(c => materials.includes(c))
      return [accumulator, accumulator.concat(gift)] [+ isValid]
  },[])
}