function orderPizza(callBack) {
    setTimeout(() => {
        console.log("Pizza is ready");
        const pizza = "Margherita";
        callBack(pizza);
    }, 2000);
}

function pizzaReady(pizza) {
    console.log(`Eat the ${pizza}`);
}

orderPizza(pizzaReady);
console.log("CAll person");