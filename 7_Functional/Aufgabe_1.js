function identity_fucntion(arg) {
    return () => arg;
}

function addf(x) {
    return (y) => x + y;
}

function applyf(a) {
    return (b) => {
        return (c) => {
            return a(b,c);
        }
    }
}

function curry(func, arg1) {
    return function(arg2) {
        return func(arg1, arg2);
    } 
}

function inc(x) {
    return addf(x)(1);
}

function methodize(myFunction) {
    return function(nbr) {
        return myFunction(this.valueOf(), nbr);
    };
}

function demethodize(myFunction) {
    return function(nbr1, nbr2) {
        return nbr1.myFunction(nbr2);
    }
}

function twice(binaryFunction) {
    return (nbr1) => {
        return binaryFunction(nbr1, nbr1);
    }
}

function composeu(unaryFunc1, unaryFunc2) {
    return (nbr) => {
        return unaryFunc2(unaryFunc1(nbr));
    }
}

function composeb(binaryFunc1, binaryFunc2) {
    return (nbr1, nbr2, nbr3) => {
        return binaryFunc2(nbr3, binaryFunc1(nbr1, nbr2));
    }
}

function once(myFunction) {
    let executed = false;
    return (nbr1, nbr2) => {
        if (!executed) {
            executed = true;
            return myFunction(nbr1, nbr2);
        }
    }
}

function counterf(nbr) {
    return {
        inc() {
            return nbr + 1;
        },
        dec() {
            return nbr - 1;
        }
    }
}

function revocable(myFunction) {
    let executed = false;
    return {
        invoke(nbr) {
            if (!executed) {
                return myFunction(nbr);
            }
        },
        revoke() {
            executed = true;
            return;
        }
    }
}

function vector() {
    let myArray = new Array();
    return {
        get(position) {
            return myArray[position];
        },
        store(position, element) {
            myArray[position] = element;
        },
        append(element) {
            myArray.push(element);
        }
    }
}