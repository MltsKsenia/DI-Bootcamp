class Video {
    constructor(title, uploader, time) {
        this.title = title;
        this.uploader = uploader;
        this.time = time;
    }

    watch() {
        console.log(`${this.uploader} watched all ${this.time} seconds of ${this.title}!`);
    }
}


// First Video instance
let video1 = new Video("JavaScript Tutorial", "John Doe", 300);
video1.watch();  // Output: John Doe watched all 300 seconds of JavaScript Tutorial!

// Second Video instance
let video2 = new Video("Cooking with Amy", "Amy Smith", 600);
video2.watch();  // Output: Amy Smith watched all 600 seconds of Cooking with Amy!
