function numberWithCommas(x) {
    let parts = x.toString().split(".");
    console.log(parts);
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

const a = numberWithCommas("1000000.0000")
console.log(a);