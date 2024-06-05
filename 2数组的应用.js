import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
console.log("---------------------Map的妙用-两数求和问题--------------------");
// 一、Map的妙用-两数求和问题
/**
 *给定一个整数数组 nums 和一个目标值 target，
 请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 *你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例: 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]
 */
const arr1 = [2, 7, 11, 15];
const target = 9;

//  方法一：双层for循环
function sum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        console.log("双层for循环=", [i, j]);
        return [i, j];
      }
    }
  }
}
sum(arr1, target);

// 方法二：ES6 Map()暂存数据 （推荐写法！！！）
// 当发现自己的代码里有两层循环时，先反思一下，能不能用空间换时间，把它优化成一层循环。
// 思路:增加一个 Map 来记录已经遍历过的数字及其对应的索引值。
// 然后每遍历到一个新数字的时候，
// 都回到 Map 里去查询 targetNum 与该数的差值是否已经在前面的数字中出现过了。
// 若出现过，那么答案已然显现，我们就不必再往下走了
function towSum(nums, target) {
  let map = new Map();
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    const differ = target - nums[i];
    if (map.has(differ)) {
      console.log("使用es6 Map暂存数据=", [map.get(differ), i]);
      return [map.get(differ), i];
    }
    map.set(nums[i], i);
  }
}
towSum(arr1, target);

// 方法三:直接用对象字面量来定义
// 键值对存储我们可以用 ES6 里的 Map 来做，如果图省事，直接用对象字面量来定义也没什么问题。
function towSum1(nums, target) {
  const diffs = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    console.log("diffs[target - nums[i]]=", diffs[target - nums[i]]);
    if (diffs[target - nums[i]] !== undefined) {
      // 若有对应差值，那么答案get！
      console.log("towSum1=", [diffs[target - nums[i]], i]);
      return [diffs[target - nums[i]], i];
    }
    // 若没有对应差值，则记录当前值
    diffs[nums[i]] = i;
    console.log("diffs[nums[i]]=", diffs[nums[i]]);
  }
}
towSum1(arr1, target);

console.log(
  "--------------------------双指针法-合并两个有序数组--------------------"
);
// 二、双指针法-合并两个有序数组
/**
 *给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，
 *使 nums1 成为一个有序数组。
 *说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 * 示例: 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6], n = 3
 * 输出: [1,2,2,3,5,6]
 *
 */
// 方法一：双指针法
function merge(nums1, m, nums2, n) {
  // 初始化两个指针的指向，初始化 nums1 尾部索引k
  let i = m - 1,
    j = n - 1,
    k = m + n - 1;
  // 当两个数组都没遍历完时，指针同步移动
  while (i >= 0 && j >= 0) {
    // 取较大的值，从末尾往前填补
    if (nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i];
      i--;
      k--;
    } else {
      nums1[k] = nums2[j];
      j--;
      k--;
    }
  }

  // nums2 留下的情况，特殊处理一下
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }
  console.log("合并两个有序数组nums1=", nums1);
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3;
const nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);

// 方法二：
function merge2(nums1, m, nums2, n) {
  //splice()方法用于添加或删除数组中的元素,并以数组形式返回被修改的内容。改变原数组
  // nums1从第m个元素开始删除，删除nums1.length-m个，并合并数组
  nums1.splice(m, nums1.length - m, ...nums2);
  // 排序(升序)
  nums1.sort((a, b) => a - b);
  console.log("nums1 result=", nums1);
}

const nums11 = [1, 2, 3, 0, 0, 0],
  i = 3;
const nums22 = [2, 5, 6],
  j = 3;
merge2(nums11, i, nums22, j);

console.log("------------------------------三数求和问题--------------------");

/**
 * 三、三数求和问题
 * 
 *真题描述：给你一个包含 n 个整数的数组 nums，
 *判断 nums 中是否存在三个元素 a，b，c ，
 *使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 *注意：答案中不可以包含重复的三元组。

 *示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 *满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]
 */

const test = [-1, 0, 1, 2, -1, -4];
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
  // 用于存放结果数组
  let res = [];
  // 给 nums 排序
  nums = nums.sort((a, b) => {
    return a - b;
  });
  // 缓存数组长度
  const len = nums.length;
  // 注意我们遍历到倒数第三个数就足够了，因为左右指针会遍历后面两个数
  for (let i = 0; i < len - 2; i++) {
    // 左指针 j
    let j = i + 1;
    // 右指针k
    let k = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (j < k) {
      // 三数之和小于0，左指针前进
      if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
        // 处理左指针元素重复的情况
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] > 0) {
        // 三数之和大于0，右指针后退
        k--;

        // 处理右指针元素重复的情况
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      } else {
        // 得到目标数字组合，推入结果数组
        res.push([nums[i], nums[j], nums[k]]);

        // 左右指针一起前进
        j++;
        k--;

        // 若左指针元素重复，跳过
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }

        // 若右指针元素重复，跳过
        while (j < k && nums[k] === nums[k + 1]) {
          k--;
        }
      }
    }
  }

  // 返回结果数组
  console.log("三数求和=", res);
  return res;
}
threeSum(test);

// 方法改进
function threeSum2(nums) {
  //定义一个结果集
  let res = [];
  //数组的长度
  const len = nums.length;
  //当前数组的长度为空，或者长度小于3时，直接退出
  if (nums == null || len < 3) {
    return res;
  }

  //将数组进行排序
  nums = nums.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < len; i++) {
    //如果遍历的起始元素大于0，就直接退出
    //原因，此时数组为有序的数组，最小的数都大于0了，三数之和肯定大于0
    if (nums[i] > 0) {
      break;
    }

    let l = i + 1;
    let r = len - 1;
    //去重，当起始的值等于前一个元素，那么得到的结果将会和前一次相同
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    //当 l 不等于 r时就继续遍历
    while (l < r) {
      let sum = nums[i] + nums[l] + nums[r];
      //如果等于0，将结果对应的索引位置的值加入结果集中
      if (sum === 0) {
        res.push([nums[i], nums[l], nums[r]]);
        //在将左指针和右指针移动的时候，先对左右指针的值，进行判断
        //如果重复，直接跳过。
        //去重，因为 i 不变，当此时 l取的数的值与前一个数相同，所以不用在计算，直接跳
        while (l < r && nums[l] === nums[l + 1]) {
          l++;
        }
        //去重，因为 i不变，当此时 r 取的数的值与前一个相同，所以不用在计算
        while (l < r && nums[r] === nums[r - 1]) {
          r--;
        }
        //将 左指针右移，将右指针左移。
        l++;
        r--;
      } else if (sum < 0) {
        //如果结果小于0，将左指针右移
        l++;
      } else if (sum > 0) {
        //如果结果大于0，将右指针左移
        r--;
      }
    }
  }
  console.log("三数求和 方法改进res=", res);
  return res;
}
const test2 = [-1, 0, 1, 2, -1, -4];
threeSum2(test2);
