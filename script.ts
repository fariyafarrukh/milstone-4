const form = document.getElementById('resume-form')as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display')as HTMLDivElement;


form.addEventListener('submit',(event:Event)=>{
    event.preventDefault();


    const name = (document.getElementById('name') as HTMLInputElement).value
    const email = (document.getElementById('email') as HTMLInputElement).value
    const phone = (document.getElementById('phone') as HTMLInputElement).value
    const education= (document.getElementById('education') as HTMLTextAreaElement).value
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value
    const skill = (document.getElementById('skill') as HTMLTextAreaElement).value

const resumeHTML= `

<h2><b>Editable Resume</b></h2>
<h3>PERSONAL INFORMATION</h3>
<p><b>Name:</b> <span contenteditable="true"> ${name}</span></p>
<p><b>Email:</b> <span contenteditable="true">${email}</span></p>
<p><b>Phone:</b> <span contenteditable="true">${phone}</span></p>

<h3>EDUCATION</h3>
<p contenteditable="true">${education}</p>

<h3>EXPERIENCE</h3>
<p contenteditable="true">${experience}</p>

<h3>SKILL</h3>
<p contenteditable="true">${skill}</p>
`
;
if(resumeDisplayElement){
    resumeDisplayElement.innerHTML = resumeHTML;
}else{
    console.error('The resume display element is missing');
}


});