// class MOVIE


class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the class Movie
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
console.log(casinoRoyale);

// Example usage of getPG method
const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "R"),
    new Movie("Movie3", "Studio3", "PG"),
    new Movie("Movie4", "Studio4", "PG-13")
];

const pgMovies = Movie.getPG(movies);
console.log(pgMovies);


// class person

class Person {
    constructor(name, age, address, email) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.email = email;
    }

    // Method to display person's details
    displayDetails() {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Address: ${this.address}`);
        console.log(`Email: ${this.email}`);
    }
}

// Creating an instance of the Person class
const person1 = new Person("John Doe", 30, "123 Main St, Anytown, USA", "john.doe@example.com");

// Displaying the person's details
person1.displayDetails();



// class for uber price 

class UberPriceCalculator {
    constructor(baseFare, costPerMile, costPerMinute, bookingFee, surgeMultiplier = 1) {
        this.baseFare = baseFare;
        this.costPerMile = costPerMile;
        this.costPerMinute = costPerMinute;
        this.bookingFee = bookingFee;
        this.surgeMultiplier = surgeMultiplier;
    }

    // Method to set the surge multiplier
    setSurgeMultiplier(surgeMultiplier) {
        this.surgeMultiplier = surgeMultiplier;
    }

    // Method to calculate the price
    calculatePrice(distanceInMiles, durationInMinutes) {
        const distanceCost = this.costPerMile * distanceInMiles;
        const timeCost = this.costPerMinute * durationInMinutes;
        const totalCost = (this.baseFare + distanceCost + timeCost + this.bookingFee) * this.surgeMultiplier;
        return totalCost;
    }

    // Method to display the price details
    displayPriceDetails(distanceInMiles, durationInMinutes) {
        const price = this.calculatePrice(distanceInMiles, durationInMinutes);
        console.log(`Base Fare: $${this.baseFare.toFixed(2)}`);
        console.log(`Distance Cost (${distanceInMiles} miles @ $${this.costPerMile.toFixed(2)}/mile): $${(this.costPerMile * distanceInMiles).toFixed(2)}`);
        console.log(`Time Cost (${durationInMinutes} minutes @ $${this.costPerMinute.toFixed(2)}/minute): $${(this.costPerMinute * durationInMinutes).toFixed(2)}`);
        console.log(`Booking Fee: $${this.bookingFee.toFixed(2)}`);
        console.log(`Surge Multiplier: ${this.surgeMultiplier}`);
        console.log(`Total Price: $${price.toFixed(2)}`);
    }
}

// Example usage
const uberCalculator = new UberPriceCalculator(2.50, 1.75, 0.30, 1.00);

// Set surge multiplier if needed
uberCalculator.setSurgeMultiplier(1.5);

// Calculate and display the price for a given distance and duration
const distanceInMiles = 10; 
const durationInMinutes = 15; 

uberCalculator.displayPriceDetails(distanceInMiles, durationInMinutes);

