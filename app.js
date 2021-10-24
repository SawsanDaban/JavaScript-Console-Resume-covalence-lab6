let fullname = "Sawsan Daban"; //name
let career = "Full Stack Developer"; //career/field
//A short description of self
let selfdesc = "I love making websites using HTML, CSS and JavaScript";

//A list of interests
let interests = ["Anime", "Movies", "Jumping around", "Coding", "Learning"];

//A list of your past positions
let positions = [
    {
        company:"Princess Nourah University",
        job:"Programming tutor",
        description:"Tutored students in that area"
    },
    {
        company:"Princess Nourah University",
        job:"Lead Programmer for Automating nominating best PhD prof.",
        description:"Automated nominating best PhD prof. to attend courses"
    },
    {
        company:"University of Georgia",
        job:"Undergraduate Teaching Assistant",
        description:"Helped grade assignments, answer questions, held lab hours, and held office hours for Java and C++ Computer Science classes"
    }
];

//A list of skills
let skills = [
    {skill: "Java", isCool: true},
    {skill: "English", isCool: false},
    {skill: "C#", isCool: false},
    {skill: "Python", isCool: true},
    {skill: "JavaScript", isCool: true}
];

//Display list of interests
function displayInterests(interests){
    for(let interest of interests){
        console.log("* "+interest);
    }
}

//Display Previous positions
function displayPosition(company, job, description){
    console.log("* "+ job +" at "+ company +" - "+ description +".");
}

//Display list of skills
function displaySkill(skill, isCool){
    if(isCool === true){
        console.log("* "+ "BAM: "+skill);
    } else {
        console.log("* "+ skill);
    }
}

console.log("Name: "+ fullname.toUpperCase());
console.log("Career: "+career);
console.log("Description: "+selfdesc);
console.log("");

console.log("My Interests:");
displayInterests(interests);
console.log("");

console.log("My Previous Experience:");
for(let i=0; i<positions.length; i++){
    displayPosition(positions[i].company, positions[i].job, positions[i].description);
}
console.log("");

console.log("My Skills:");

for(let i=0; i<skills.length; i++){
    displaySkill(skills[i].skill, skills[i].isCool);
}
