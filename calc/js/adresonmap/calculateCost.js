// Стоимость перевозки

export const calculateCost = (distance, carClass) => {
    if (distance.includes('км')) {
        // console.log(distance, carClass);
        const number = distance.slice(0, -3).split(',').join('.').split('').filter((item) => item.trim() !== '').join('');
        let result;
        if (carClass === 'legkovoi') {
            const cost = Number(number) <= 200 ? costs.legkovoi[0] : Number(number) <= 1000 ? costs.legkovoi[1] : costs.legkovoi[2]
            result = (cost * Number(number).toFixed(0));
        } else {
            result = (costs[`${carClass}`] * Number(number).toFixed(0));
        }
        return result;
    } return costs[`${carClass}`];
}
