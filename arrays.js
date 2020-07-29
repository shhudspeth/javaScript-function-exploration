"use strict";


// 1. printIndices
function printIndices(items) {
  // Replace this with your code
  for (const item of items)  {
    console.log(`${item} at ${items.indexOf(item)}`);
  }

}


// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  for (let i = 0; i < items.length; i+=1) {
    if (i % 2 === 0) {
      console.log(`${items[i]}`);
    }
}
}

// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a,b) => a -b );
  const new_list = items.slice(0,n);
  new_list.sort((a,b) => b-a );
  return new_list;
}
