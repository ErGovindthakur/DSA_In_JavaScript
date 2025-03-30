const buyAndSellStock = (arr) => {
     // you can buy and sell stock at the best time when purchasing price is minimum but selling price is maximum and you can't sell any thing without purchasing
     
     let maxProfit = 0;
     let minPrice = arr[0];
     let bestSellDay = 0;
     
     for(let i = 1; i<arr.length; i++){
        if(arr[i]<minPrice){
            minPrice = arr[i];
        }else{
            let profit = arr[i] - minPrice;
            if(maxProfit < profit){
                maxProfit = profit
                bestSellDay = i;
            }
        }
     }
     return `The best day to sell is day ${bestSellDay} (price: ${arr[bestSellDay]}), buying at ${minPrice}, with max profit = ${maxProfit}`;
 }
 console.log(buyAndSellStock([7,1,5,3,6,4]));