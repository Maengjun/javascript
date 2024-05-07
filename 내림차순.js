// 내가 못푼거임

function solution(s) {
    return s
      .split("")
      .sort()
      .reverse()
      .join("");
  }