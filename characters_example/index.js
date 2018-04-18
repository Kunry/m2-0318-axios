const BASE_URL = "https://ih-crud-api.herokuapp.com"


const showCharacter = (character) => {
    const newCharacterHtml = `
        <li>
          <h3>${character.name}</h3>
          <p> Id:${character.occupation}</p>
        </li>
    `;
    document.getElementById("characters-list").innerHTML += newCharacterHtml;
}

const getAllIHCharacters = () =>{
    axios.get(`${BASE_URL}/characters`)
        .then(res => res.data)
        .then(data => {
            console.log(data);
            document.getElementById("characters-list").innerHTML = '';
            data.forEach(e => {
                showCharacter(e);
            })
        })
}

const changeCharacterById = (id, newdata) =>{
    return axios.patch(`${BASE_URL}/characters/${id}`, newdata)
    .then(res => {
        console.log("RECIBIDO")
        console.log(res.data)
    })
}

document.getElementById("change-marc").addEventListener('click',() => {
    let name = document.getElementById('new-name').value
    document.getElementById('new-name').value = ''
    changeCharacterById(3,{name}).then( () => {
        getAllIHCharacters();  
    }) 
})


getAllIHCharacters();