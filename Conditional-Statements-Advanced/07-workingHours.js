function workingHours(input) {
    let number = Number(input[0]);
    let days = input[1];
    if (number >= "10" && number <= "18") {
        switch (days) {
            case "Monday":
            case "Tuesday":
            case "Wednesday":
            case "Thursday":
            case "Friday":
            case "Saturday":
                console.log("open");
                break;
            case "Sunday":
                console.log("closed");
                break;
        }
    } else {
        console.log("closed");
    }
}
workingHours(['11', 'Sunday']);