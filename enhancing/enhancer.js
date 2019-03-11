module.exports = {
  succeed,
  fail,
  repair,
  get
};

function succeed(item) {
  //if successful enhancement increases by 1
  // if the enhancement level is 20, the enhancement level is not changed
  //durability remains the same

  let enhancer = item.enhancement;
  return {
    ...item,
    enhancement: enhancer + 1
  };
  /*
  item.enhancement++;
  if ((item.enhancement = 20)) return (item.enhancement = 20);

  return item;
  */
}

function fail(item) {
  //if the items enhancementis less than 15, the durabiltity of the item is decreased by 5
  // if the items enhancement is 15 or more, the durability of the item is decreased by10
  // if the items enhancement level is greater than 16 the enhancement level decreases by 1
  //if (item.enhancement < 15 item.durability-5)

  let enhancer= item.enhancement;
  if enhancer< 15
  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return item;
}

function get(item) {
  return { ...item };
}
