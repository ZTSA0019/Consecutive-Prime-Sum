/**
 * Created by sourabhagrawal on 14/11/18.
 *
 */

(function() {
  'use strict';

  /**
   * Function: Get all the prime number from 1 to maxNum
   * @param maxNum
   * @returns {Array}
   */
  function getPrimeNumbers(maxNum) {
    let flags = [];
    let primeNums = [];

    var n = maxNum;
    while (n--) {
      flags[maxNum - n] = true;
    }

    for (let x = 2; x < Math.sqrt(maxNum); x++) {
      if (flags[x]) {
        for (let i = x + x; i < maxNum; i += x) {
          flags[i] = false;
        }
      }
    }

    for (let i = 2; i < maxNum; i++) {
      if (flags[i]) {
        primeNums.push(i);
      }
    }

    return primeNums;
  }

  /**
   * Function: Get longest consecutive prime number
   * @param num
   * @param primes
   * @returns {number}
   */
  function longestConsecutivePrimesTerms(num, primes) {
    let longestSeq = 0;
    let seq = [];
    let curSum = 0;
    primes.forEach(function (prime) {
      if (prime > num) {
        return false;
      }
      if (curSum === num) {
        longestSeq = Math.max(seq.length, longestSeq);
      }
      curSum += prime;
      seq.push(prime);
      while (curSum > num) {
        curSum -= seq.shift();
      }
    });
    return longestSeq;
  }


  /**
   * Function: Initial Main method
   */
  function init() {
    const primes = getPrimeNumbers(1000000) // Prime number from 1 to one-million
    primes.reduce(function (max, num) {
      var terms = longestConsecutivePrimesTerms(num, primes);
      if (terms > max) {
        console.log(num, terms);
        return terms;
      }
      return max;
    }, 0);
  }

  init();
})();
