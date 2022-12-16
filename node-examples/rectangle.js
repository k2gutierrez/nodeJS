module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0){
        setTimeout(() => 
            callback(new Error("Rectangle dimensions should be > 0: x = " + x + " y = " + y), null), 
            2000
        );
        console.log("Rectangle dimensions should be > 0");
    }
    else {
        setTimeout(() => 
            callback(null,
            {
                perimeter: () => (2*(x+y)),
                area: () => (x*y)
            }), 
            2000
        );
        console.log("Rectangle dimensions should be > 0");
    }

}