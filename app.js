const btns  = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
      btns.forEach(btn => {
        // clears active class from all buttons
        btn.classList.remove('active')
        // needs to have e because you are accessing the e object
        e.target.classList.add('active') 
        // selects the articles with text content and makes the selection text visible
        articles.forEach(article => {
          article.classList.remove('active')
          const element = document.getElementById(id)
            element.classList.add('active')
          
        })
      })
  
    } // close if statement
}) // close event listener