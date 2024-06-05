import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// 一、反转字符串
function reverseStr(str) {
  const res = str.split("").reverse().join("");
  console.log("反转字符串", res);
  return res;
}

const str = "juejin";
reverseStr(str);

// 二、判断一个字符串是否是回文字符串
function isPalindrome(str) {
  const reverseStr = str.split("").reverse().join("");
  console.log("是否是回文字符串=", reverseStr === str);

  return reverseStr === str;
}
const str1 = "yessey";
isPalindrome(str1);

// 方法2
function isPalindrome2(str) {
  const len = str.length;
  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - i - 1]) {
      return false;
    }
  }
  return true;
}
const result = isPalindrome2(str1);
console.log("result 是否是回文字符串=", result);

// 回文字符串的衍生问题
/**
 * 真题描述：给定一个非空字符串 s，最多删除一个字符。判断是否能成为回文字符串。

示例 1: 输入: "aba"
输出: True
示例 2:
输入: "abca"
输出: True
解释: 你可以删除c字符。
注意: 字符串只包含从 a-z 的小写字母。字符串的最大长度是50000。
 */
// 对称性、双指针
var validPalindrome = function (str) {
  const len = str.length;
  let i = 0;
  let j = len - 1;
  while (i < j && str[i] === str[j]) {
    i++;
    j--;
  }
  // 判断是否是回文字符串
  function isPalindrome3(sIndex, eIndex) {
    while (sIndex < eIndex) {
      if (str[sIndex] !== str[eIndex]) {
        return false;
      }
      sIndex++;
      eIndex--;
    }
    return true;
  }

  while (isPalindrome3(i + 1, j)) {
    return true;
  }
  while (isPalindrome3(i, j--)) {
    return true;
  }

  return false;
};
console.log("回文字符串的衍生问题 validPalindrome==", validPalindrome("abca"));
