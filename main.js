const colors = ['#FFCDD2', '#C8E6C9', '#BBDEFB', '#FFE082', '#D1C4E9'];

// اخفي الفورم واظهرها
const formContainer = document.getElementById('formContainer');
const addNoteButton = document.getElementById('addNoteButton');
const closeForm = document.getElementById('closeForm');

addNoteButton.addEventListener('click', () => {
    formContainer.style.display = 'block';
    document.getElementById('articleContainer').style.display = 'none';
      document.getElementById('add1').style.display ='block'
    document.getElementById('up1').style.display ='none'
});

closeForm.addEventListener('click', () => {
    formContainer.style.display = 'none';
    document.getElementById('articleContainer').style.display = 'grid';
});

// fetch api
let articles = [];
fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(responsedata => {
        articles = responsedata;
        console.log(articles);
        addArticles();
    });

// Function to add articles
let cartona = ``;
function addArticles() {
    const container = document.getElementById('articleContainer');
    
    articles.forEach((article, i) => {
        const articleElement = document.createElement('article');
        articleElement.style.backgroundColor = colors[i % colors.length];

        cartona = `
            <h1>${article.title}</h1>
            <p>${article.description}</p>
            <div class="article-actions">
                <a href="#" onclick="openUpdateForm(${article.id}, '${article.title}', '${article.description}')" class="button update"><i class="fas fa-edit"></i></a>
                <a href="#" onclick="deletenote(${article.id})" class="button delete"><i class="fas fa-trash"></i></a>
            </div>
        `;

        container.appendChild(articleElement);
        articleElement.innerHTML = cartona;
    });
}



let currentNoteId;
function openUpdateForm(noteId, noteTitle, noteDescription) {
    currentNoteId = noteId;
    formContainer.style.display = 'block';
    document.getElementById('articleContainer').style.display = 'none';
     document.getElementById('up1').style.display ='block'
    document.getElementById('add1').style.display ='none'
    document.getElementById('title').value = noteTitle;
    document.getElementById('description').value = noteDescription;
}

     

           ///update 
            
function updateNote() {
    let noteFromInput = {
        id: currentNoteId,
        title: document.getElementById("title").value,
        description: document.getElementById("description").value
    };

    fetch("http://localhost:3000/updatenote", {
        method: "PUT",
        body: JSON.stringify(noteFromInput),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then(response => response.json())
    .then(json => {
        console.log(json);
        document.getElementById("title").value = "";
        document.getElementById("description").value = "";
        
        location.reload();
    });

}
function getNoteFromInput(){
    let titleinput=document.getElementById("title").value;
    let descriptioninput=document.getElementById("description").value;
    let noteFromInput=
        {
        title:titleinput,
        description:descriptioninput
        };
        console.log(noteFromInput);

       

fetch("http:localhost:3000/addnote", { 


method: "POST", 


body: JSON.stringify(noteFromInput), 


headers: { 
    "Content-type": "application/json; charset=UTF-8"
} 
}) 

.then(response => response.json()) 


.then(json => console.log(json)); 

}
function deletenote(noteId) {
    fetch("http:localhost:3000/deletenote", { 


        method: "DELETE", 
        
    
        body: JSON.stringify({id:noteId}), 
        
    
        headers: { 
            "Content-type": "application/json; charset=UTF-8"
        } 
    }) 
    
    .then(response => response.json()) 
    
    
    .then(json => location.reload() ); 
}

