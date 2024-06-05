import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
/**

背包容量c
物品总数量i
每件物品的体积w[i]
f(i,c)表示前i件物品恰好装入容量为c背包中所能获得的最大价值

一、用“倒推”法明确出状态转移关系

假设取出物品是i,有以下两种可能:
1. 第i件物品在背包里;
f(i,c) - value[i] = f(i-1,c-w[i])
优化:
f(i,c) = f(i-1,c-w[i]) + value[i] // 状态之前的关系
2. 第i件物品不在背包里;
取出之前和之后的背包价值总量是不会发生变化的
f(i,c) = f(i-1,c)

状态转移关系：f(i,c) = f(i-1,c-w[i]) + value[i]
自变量：物品索引i、物品总体积v
因变量：物品总价值c

因为有两个自变量，需要使用一个二维数组dp将状态关系编码化。
状态转移方程式：dp[i][v] = Math.max(dp[i-1][v],dp[i-1][v-w[i]]+c[i])

什么样的题目应该用动态规划来做？我们要抓住以下两个关键特征：
1、最优子结构（也叫后无性原则）,它指的是问题的最优解包含着子问题的最优解，不管前面的决策如何，
         此后的的状态必须是基于当前状态（由上次决策产生）的最优决策。
         即当前状态只与上一个状态有关

2、重叠子问题,它指的是在递归过程中，出现了反复计算的情况。

思考如何将这个状态转移方程式往循环里塞比较合适？

for(let i = 1; i <= n; i++){
  for(let v= w[i]; v<=c; v++){
    dp[i][v] = Math.max(dp[i-1][v],dp([i-1][v-w[i]]+value[i]))
  }
}

二、滚动数组
滚动数组，就是让数组滚动起来：固定一块存储空间，滚动更新这块内存空间的内容，
确保每个时刻空间内的数据都是当前真正会用到的最新数据，从而达到节约内存的效果。

用滚动数组优化状态转移方程
for(let i= 1;i<=n; i++){
  for(let v=c;v>=w[i];v--){
    dp[v] = Math.max(dp[v],dp([v-w[i]]+value[i]))
  }
}

后无性原则：当前状态只与上一个状态有关
 */
