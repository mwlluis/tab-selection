const btns  = document.querySelectorAll('.tab-btn')
const about = document.querySelector('.about')
const articles = document.querySelectorAll('.content')

about.addEventListener('click', (e) => {
    const id = e.target.dataset.id
    if (id) {
      btns.forEach(btn => {
        // clears active class from all buttons
        btn.classList.remove('active')
        e.target.classList.add('active') // needs to have e because you are accessing the e object

        articles.forEach(article => {
          article.classList.remove('active')
          if (article.id === id) {
            article.classList.add('active')
          }
        })
      })


      
    } // close if statement
}) // close event listener