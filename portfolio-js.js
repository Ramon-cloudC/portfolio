

const mySkills = ["Self-Taught.", "a Web Developer.", "a Free-Lancer."]

const animation = document.querySelector(".animation-text");

console.log(mySkills);

let charIndex = 0;
let skillsIndex = 0;


const animationText = () => {
    charIndex ++;
    animation.innerHTML = `I'm ${mySkills[skillsIndex].slice(0,charIndex)}`;
    
    setTimeout (animationText, 170);
    if (charIndex === mySkills[skillsIndex].length){
        skillsIndex++;
        charIndex = 0;
    }

    if (skillsIndex === mySkills.length){
        skillsIndex = 0;
    }

}


animationText()




