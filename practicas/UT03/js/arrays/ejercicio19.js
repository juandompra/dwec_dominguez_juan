function  sortDates( arr ) {
    arr.sort ((a, b) => {
        if ((a.split('-').reverse().join('')) > (b.split('-').reverse().join(''))) {
            return 1;
        } else {
            return -1;
        }
    });

    return arr;
}

console.log(sortDates(['24-05-2020', '02-12-2018', '14-02-2020']));