const comments = []

const inputContainer = document.createElement('div')
const input = document. createElement('input')
const commentsContainer = document.querySelector('#comments-container')

input.classList.add('input')

input.addEventListener('keydown', e=> {
    handleEnter(e,null)
})

commentsContainer.appendChild(inputContainer)
inputContainer.appendChild(input)

function handleEnter(e, current){
    if(e.key === 'Enter' && e.target.value !==''){
        const newComment = {
            text: e.target.value,
            like: 0,
            responses: []
        }

        if (current === null){
            comments.unshift(newComment)
        }else{
            current.responses.unshift(newComment)
        }

        e.target.value =""
        commentsContainer.innerHTML = ""
        commentsContainer.appendChild(inputContainer)

        renderComments(comments, commentsContainer)
    }
}

function renderComments(arr, parent){
    arr.array.forEach(element => {
        const commentContainer = document.createElement('div')
        commentContainer.classList.add('commentContainer')

        const responsesContainer = document.createElement('div')
        responsesContainer.classList.add('responses-container')

        const replyButton = document.createElement('button')
        const likeButton = document.createElement('button')

        const textContainer = document.createElement('div')
        textContainer.text = element.text

        replyButton.textContent = 'Reply'
        likeButton.textContent = `${element.likes > 0 ? `${element.likes} likes`: 'like'}`

        replyButton.addEventListener('click', e => {})

        likeButton.addEventListener('click', e => {})

        const textContainer = document.createElement('div')
        textContainer.text = element.text
    });
}