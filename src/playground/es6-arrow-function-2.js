const add = (a, b) => {
    //console.log(arguments);
    return a + b;
};

console.log(add(4, 3, 100));

const user = {
    name: 'Mike',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function () {
        const that = this;
        console.log(that.name);
        console.log(that.cities)

        that.cities.forEach(function (city) {
            console.log(that.name + ' has lived in ' + city);
        });
    }
};

const user2 = {
    name: 'Mike',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);        
    }
};

user.printPlacesLived();
console.log(user2.printPlacesLived());

const multiplier = {
    numbers: [4, 3, 5, 6, 7],
    multiplyBy: 5,
    printMultiplies() {
        return this.numbers.map((num) => this.multiplyBy * num);
    }
};

console.log(multiplier.printMultiplies());