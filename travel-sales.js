
function travellingSalesman(cost) {
    const n = cost.length;
    // assume 0 is the source and target city
    const citiesList = Array.from({length:n}, (_, id) => id );
    const result = [];
    let minCost = Infinity;
    function  travelOrder(array, index) {
        if(index === array.length) {
            
            result.push(array.map(item => item));
        }
        for(let i = index; i< array.length; i++) {
            let temp = array[index];
            array[index] = array[i];
            array[i] = temp;
            travelOrder(array, index + 1);
            temp = array[index];
            array[index] = array[i];
            array[i] = temp;
        }
    }
    travelOrder(citiesList.slice(1), 0)
    for(let order of result) {
        let routeCoust = 0;
        let prev = 0
         for(let city of order) {
            routeCoust = routeCoust + cost[prev][city];
            prev = city;
         }
         routeCoust = routeCoust + cost[prev][0];
         minCost = Math.min(routeCoust, minCost);
    }
    console.log(minCost);
}
travellingSalesman([
    [0, 10, 15, 20],
    [10, 0, 35, 25],
    [15, 35, 0, 30],
    [20, 25, 30, 0]
])