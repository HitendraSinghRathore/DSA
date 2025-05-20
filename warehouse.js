/**
 * Given an array of product counts, returns the maximum number of
 * strictly‐increasing batches you can form where each batch i has
 * size i (and all items in a batch are from distinct types).
 *
 * @param {number[]} products
 * @return {number}
 */
function maximiseGroups(products) {
    // 1. Sort ascending
    products.sort((a, b) => a - b);
  
    let batches = 0;
    // 2. Greedily “build” batch (batches+1) whenever we find
    //    a product type with at least (batches+1) remaining items.
    for (const count of products) {
      if (count >= batches + 1) {
        batches++;
      }
    }
  
    return batches;
  }
  
  // Example
  const products = [0,0,3,4,5];
  console.log(maximiseGroups(products));