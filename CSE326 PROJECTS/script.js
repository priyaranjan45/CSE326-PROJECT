
const form = document.getElementById("searchForm");
const queryInput = document.getElementById("studentQuery");
const resultSection = document.getElementById("resultSection");
const errorMessage = document.getElementById("errorMessage");

// Random student names
const names = [
    "Sapna singh",
    "Sachin kumar",
    "kaushiki",
    "Avinash singh",
    "shristy kumari",
    "Aastha singh",
    "Poornima kumari",
    "Bandana kumari",
    "Nikitaa",
    "Priyaranjan singh",
    "Harshit thakur",
    "Tarun kumar madhesiya"

];

// Random subjects
const subjects = [
    "Data Structures",
    "Object Oriented Programming",
    "Database Management System",
    "Computer Networks",
    "Python Programming",
    "Operating Systems",
    "Mathematics",
    "Web Development"
];

// Other random details
const blocks = ["Block A", "Block B", "Block C", "Block D"];

const floors = [
    "1st Floor",
    "2nd Floor",
    "3rd Floor",
    "4th Floor"
];

const examDates = [
    "12 November 2026",
    "13 November 2026",
    "14 November 2026",
    "15 November 2026",
    "16 November 2026"
];

const examTimes = [
    "09:30 AM - 12:30 PM",
    "02:00 PM - 05:00 PM",
    "10:00 AM - 01:00 PM"
];

// Function to select random item
function randomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Generate random seat number
function generateSeat() {
    const letter = randomItem(["A", "B", "C", "D"]);
    const number = Math.floor(Math.random() * 30) + 1;

    return letter + "-" + number;
}

// Search button
form.addEventListener("submit", function(event) {

    event.preventDefault();

    const registrationNumber = queryInput.value.trim();

    // Validate 8-digit number
    if (!/^\d{8}$/.test(registrationNumber)) {
        resultSection.classList.add("hidden");

        errorMessage.textContent =
            "Please enter exactly 8 digits.";

        return;
    }

    // Generate random student details
    const student = {
        name: randomItem(names),
        subject: randomItem(subjects),
        date: randomItem(examDates),
        time: randomItem(examTimes),
        block: randomItem(blocks),
        hall: "Hall " + (Math.floor(Math.random() * 300) + 100),
        floor: randomItem(floors),
        seat: generateSeat()
    };

    // Display student information
    document.getElementById("studentName").textContent = student.name;
    document.getElementById("regNo").textContent = registrationNumber;
    document.getElementById("subject").textContent = student.subject;
    document.getElementById("examDate").textContent = student.date;
    document.getElementById("examTime").textContent = student.time;
    document.getElementById("block").textContent = student.block;
    document.getElementById("hall").textContent = student.hall;
    document.getElementById("floor").textContent = student.floor;
    document.getElementById("seat").textContent = student.seat;

    errorMessage.textContent = "";

    resultSection.classList.remove("hidden");
});
