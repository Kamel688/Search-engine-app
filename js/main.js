const input = document.querySelector('.search__input');
const persons = document.querySelectorAll('.search__list-item');


const findPerson = () => {
    persons.forEach(person => {
        if(!person.textContent.toLowerCase().includes(input.value.toLowerCase())){
            person.classList.add('search__hide');
        }else{
            person.classList.remove('search__hide');
        }
    })
}

input.addEventListener('keyup', findPerson);