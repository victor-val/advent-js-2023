function findFirstRepeated(gifts) {
    return gifts.find((gift, i) => gifts.indexOf(gift) !== i ) ?? -1;
}