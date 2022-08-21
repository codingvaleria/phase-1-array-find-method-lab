// code your solution here

function superbowlWin(record) {
    const item = record.find(findYear)
    if (item) {
        return item.year;
    }
}
function findYear(record) {

    if (record.result === "W") {
        return true;
    }
    else {
        return false;
    }
}





