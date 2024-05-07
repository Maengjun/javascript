function solution(price, money, count) {
    
    const requiredMoney = price * ((count * (count + 1)) / 2);
   
    const shortage = requiredMoney - money;
    
    return shortage > 0 ? shortage : 0;
}