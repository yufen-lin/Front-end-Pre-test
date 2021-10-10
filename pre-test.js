// ====================================
// 實作 Fibonacci number (費式數列)
// 遞迴寫法
function fibonacciRecursive(position) {
  if (position < 2) return position;
  else
    return fibonacciRecursive(position - 1) + fibonacciRecursive(position - 2);
}

// 迴圈寫法
function fibonacciLoop(position) {
  if (position < 2) return position;

  const fib = [0, 1];
  for (let i = 2; i <= position; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[position];
}

console.log(
  "Recursive : " + fibonacciRecursive(10),
  ", Loop : " + fibonacciLoop(10)
);

// ====================================
// 使用 Linked List 實作 Stack
class StackNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.stackSize = 0;
  }

  //插入節點
  push(value) {
    let newNode = new StackNode(value);

    // stack中無任何節點時
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      // stack內已有節點時
      let temp = this.top; // 先暫存原本最上面的節點
      this.top = newNode; // 新的節點會變成 top
      this.top.next = temp; // 新的節點要指向原本在最上面的節點
    }
    this.stackSize++;
  }

  //移除節點
  pop() {
    // stack中無任何節點時
    if (!this.top) return null;

    let temp = this.top; // 先暫存原本的 top
    //stack內只有一個節點時
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    this.top = temp.next; // 此時的 top 會是第二個，而原本 top 的 next 會是第二個
    this.stackSize--;
    console.log("pop up element：" + temp.value);
    return temp.value;
  }

  // 計算 stack 大小
  size() {
    console.log("stack size：" + this.stackSize);
    return this.stackSize;
  }
}

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.pop(); // pop up element：3
myStack.size(); // stack size：2

// ====================================
// 實作 Data Transformer
const userIds = ["U01", "U02", "U03"];
const orderIds = ["T01", "T02", "T03", "T04"];
const userOrders = [
  { userId: "U01", orderIds: ["T01", "T02"] },
  { userId: "U02", orderIds: [] },
  { userId: "U03", orderIds: ["T03"] },
];

const userData = { "U01": "Tom", "U02": "Sam", "U03": "John" };
const orderData = {
  "T01": { name: "A", price: 499 },
  "T02": { name: "B", price: 599 },
  "T03": { name: "C", price: 699 },
  "T04": { name: "D", price: 799 },
};

let result = [];
userIds.forEach((userId) => {
  let data = { user: {}, orders: [] };
  // 從使用者id去找使用者資料
  data.user = { id: userId, name: userData[userId] };
  // 藉由使用者id去找他的訂單
  const index = userOrders.findIndex(
    (userOrder) => userOrder.userId === userId
  );
  const ordersArray = userOrders[index].orderIds;
  ordersArray.forEach((order) => {
    const orderInfo = { id: order, ...orderData[order] };
    data.orders.push(orderInfo);
  });

  result.push(data);
});
console.log(result);

// ====================================
// 擇一實作 Debounce 或 Throttle
const debounceFunc = function debounce(func, delay) {
  let timeout = null;
  return function () {
    let context = this;
    let args = arguments;
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      func.apply(context, args);
    }, delay);
  };
};

// 應用範例 - 連續點擊 button
const clickBtn = document.querySelector(".click-btn");
const clickDebounceBtn = document.querySelector(".click-debounce-btn");
// 連續點擊時會不斷執行
clickBtn.addEventListener("click", handleClick);
// 在 delay 時間內如果重複點擊會使計數器歸零，等到計時器時限內無新的點擊時才會執行
clickDebounceBtn.addEventListener("click", debounceFunc(handleClick, 5000));

function handleClick(e) {
  console.log(e.target.value);
}

// ====================================
// 加分題的部分無作答
