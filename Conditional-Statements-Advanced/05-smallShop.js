function smallShop(input) {
    let products = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    let finalSum = 0;


    if (town === "Varna") {
        switch (products) {
            case "coffee": finalSum = quantity * 0.45; break;
            case "water": finalSum = quantity * 0.70; break;
            case "beer": finalSum = quantity * 1.10; break;
            case "sweets": finalSum = quantity * 1.35; break;
            case "peanuts": finalSum = quantity * 1.55; break;
        }
    } else if (town === "Plovdiv") {
        switch (products) {
            case "coffee": finalSum = quantity * 0.40; break;
            case "water": finalSum = quantity * 0.70; break;
            case "beer": finalSum = quantity * 1.15; break;
            case "sweets": finalSum = quantity * 1.30; break;
            case "peanuts": finalSum = quantity * 1.50; break;
        }
    } else if (town === "Sofia") {
        switch (products) {
            case "coffee": finalSum = quantity * 0.50; break;
            case "water": finalSum = quantity * 0.80; break;
            case "beer": finalSum = quantity * 1.20; break;
            case "sweets": finalSum = quantity * 1.45; break;
            case "peanuts": finalSum = quantity * 1.60; break;
        }
    }
    console.log(finalSum);
}
smallShop(['coffee', 'Varna', '2']);