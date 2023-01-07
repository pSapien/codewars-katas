/**
 * 
  * For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

  The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

  The following are some examples of how this class is used:

  @url https://www.codewars.com/kata/515bb423de843ea99400000a/train/javascript
 */

class PaginationHelper {
  constructor(collection, itemPerPage) {
    this.collection = collection;
    this.itemPerPage = itemPerPage;
    this.invalid = -1;
  }

  hasItem(itemIndex) {
    return itemIndex >= 0 && itemIndex <= this.itemCount();
  }

  itemCount() {
    return this.collection.length;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemPerPage);
  }

  pageItemCount(pageIndex) {
    const outOfBounds = pageIndex >= this.pageCount() || pageIndex < 0;
    if (outOfBounds) return this.invalid;

    const start = pageIndex * this.itemPerPage;
    const end = start + this.itemPerPage;

    if (this.hasItem(start) && this.hasItem(end)) return this.itemPerPage;

    return this.itemCount() - start;
  }

  pageIndex(itemIndex) {
    const outOfBounds = itemIndex >= this.itemCount() || itemIndex < 0 || this.collection.length === 0;
    if (outOfBounds) return this.invalid;

    return Math.floor(itemIndex / this.itemPerPage);
  }
}

const helper = new PaginationHelper(["a", "b", "c", "d", "e", "f"], 4);
// console.log(helper.pageCount()); //should == 2
// console.log(helper.pageItemCount(0)); //should == 4
// console.log(helper.pageItemCount(1)); // last page - should == 2
// console.log(helper.pageItemCount(2)); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// console.log(helper.pageIndex(5)); //should == 1 (zero based index)
// console.log(helper.pageIndex(2)); // should == 0
// console.log(helper.pageIndex(20)); //should == -1
// console.log(helper.pageIndex(-10)); //should == -1

// const empty = new PaginationHelper([], 10);
// console.log(empty.pageCount(0));
// console.log(empty.itemCount(0));
// console.log(empty.pageIndex(0));
// console.log(empty.pageIndex(0));

const nullified = new PaginationHelper(new Array(34).fill(null), 33);
console.log(nullified.pageIndex(34));
