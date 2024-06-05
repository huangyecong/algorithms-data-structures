import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;
// 一、创建型
// 1、工厂模式-简单工厂模式
function User(name, age, career, work) {
  this.name = name;
  this.age = age;
  this.career = career;
  this.work = work;
  console.log(name, age, career, work);
}

function Factory(name, age, career) {
  let work = "";
  switch (career) {
    case "coder":
      work = ["写代码", "写系分", "修复bug"];
      break;
    case "product manager":
      work = ["订会议室", "写PTD", "催更"];
      break;
    case "boss":
      work = ["喝茶", "看报", "见客户"];
      break;
    default:
      return;
  }

  return new User(name, age, career, work);
}

Factory("leaf", 28, "coder");

// 以上代码缺点：随着工种的增多，Factory会变得异常庞大，逻辑过于繁杂和混乱，难以维护，
// 修改一次可能会导致整个Factory崩溃，进而催婚整个系统，每新增一个工种，测试也不得不对整个Factory进行回归一一测试。

// 2、工厂模式-抽象工厂

// 抽象工厂是用来定规矩的， 业务逻辑由具体工厂去实现。
// 抽象工厂，不做任何修改，核心定义就是，围绕一个超级近工厂创建其他工厂。

//3、单例模式-Vuex的数据管理哲学
// 不管创建多少次，都只返回第一次所创建的那唯一的一个实例
class SingleDog {
  show() {
    console.log("我是一个单例对象~");
  }
}

const s1 = new SingleDog();
const s2 = new SingleDog();

console.log("s1是否等于s2：", s1 === s2);

// 静态方法版本：优化：具备判断自己是否已经创建过一个实例,不管调用多少次，只返回一个实例
class SingleDog2 {
  show() {
    console.log("我是一个单例对象~");
  }
  static getInstance() {
    if (!SingleDog2.instance) {
      SingleDog2.instance = new SingleDog2();
    }
    return SingleDog2.instance;
  }
}

const s3 = SingleDog2.getInstance();
const s4 = SingleDog2.getInstance();
console.log("s3是否等于s4:", s3 === s4);

// 闭包版本：再次优化，getInstance 可以使用闭包实现
SingleDog2.getInstance = (function () {
  let instance = null;
  return function () {
    if (!instance) {
      instance = new SingleDog2();
    }
    return instance;
  };
})();

// 真题：实现一个Storage
/** 
描述：实现Storage，使得该对象为单例，基于 localStorage 进行封装。
实现方法 setItem(key,value) 和 getItem(key)。
*/
// 静态方法版本
class Storage {
  static getInstance() {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }
  getItem(key) {
    return localStorage.getItem(key);
  }
  setItem(key, value) {
    return localStorage.setItem(key, value);
  }
}

const storage1 = Storage.getInstance();
const storage2 = Storage.getInstance();

storage1.setItem("name", "椰子");
console.log(storage1.getItem("name"));
console.log(storage2.getItem("name"));
console.log("storage1==storage12", storage1 === storage2);

// 二、结构型
// 三、行为型
