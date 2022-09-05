$(function () {
    $('.mb-news-article-items').slick({
        slidesToShow: 1,
        slidesToScroll: 1,      
        arrows: false,
        dots: true 
    });
 
   
});

const SELECTORS = {
    elements: document.querySelectorAll('.item'),
    paginationContainer: document.getElementById('pagination'),
    page: 1,
    per_page: 6,
    activeElements: []
  }
  
  const showPage = (p) => {  
    let selected = [];     
    SELECTORS.elements.forEach(el => selected.push(el));   
    selected = selected.splice((p-1) * SELECTORS.per_page, SELECTORS.per_page)
    SELECTORS.elements.forEach(el => el.style.display = "none")
    selected.forEach(el => el.style.display = "");
  console.log(selected)
    showPagination()
  }
  
  const setPage = (p) => {  
    SELECTORS.page = p;
    console.log(p)
    showPage(p)
  }
  
  const nextPage = () => {
    const pages = Math.ceil(SELECTORS.elements.length / SELECTORS.per_page)
    if(SELECTORS.page < pages){
      SELECTORS.page++
      showPage(SELECTORS.page)
    }
    $('.btn-next').addClass('active-btn');
  }
  const prevPage = () => {    
    if(SELECTORS.page > 1){
      SELECTORS.page--
      showPage(SELECTORS.page)
    }
    $('.btn-prev').addClass('active-btn');
    $('.btn-next').removeClass('active-btn');
  }
  
  const showPagination = () => {
    const pages = Math.ceil(SELECTORS.elements.length / SELECTORS.per_page);
   
    SELECTORS.paginationContainer.innerHTML = ''
    SELECTORS.paginationContainer.innerHTML += `<span class="btn-prev" onclick="prevPage()">Prev</span>`  
    for (let i = 0; i < pages; i++){
        if(i+1 === SELECTORS.page){
          SELECTORS.paginationContainer.innerHTML += `<span class="number active" onclick="setPage(${i+1})">${i+1}</span>`
        } else {      
          SELECTORS.paginationContainer.innerHTML += `<span class="number" onclick="setPage(${i+1})">${i+1}</span>`
        }       
      } 

    SELECTORS.paginationContainer.innerHTML += `<span class="btn-next" onclick="nextPage()">Next</span>`
    if(SELECTORS.page === 1){
        $('.btn-next').addClass('active-btn');
       }
  }
  
  showPage(SELECTORS.page)







