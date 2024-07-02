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

let video1 = new Video("JavaScript Tutorial", "John Doe", 300);
video1.watch();

let video2 = new Video("Cooking with Amy", "Amy Smith", 600);
video2.watch();

let videosData = [
    { title: "JavaScript Basics", uploader: "Alice", time: 200 },
    { title: "Advanced CSS", uploader: "Bob", time: 400 },
    { title: "Python for Beginners", uploader: "Charlie", time: 350 },
    { title: "React Tutorial", uploader: "David", time: 500 },
    { title: "Machine Learning 101", uploader: "Eve", time: 600 }
];

let videos = [];

for (let data of videosData) {
    let video = new Video(data.title, data.uploader, data.time);
    videos.push(video);
}

videos.forEach(video => video.watch());