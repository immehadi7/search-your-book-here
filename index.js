let buttonid = () => {
   const searchInput = document.getElementById('inputSearchId');
   let searchInputValue = searchInput.value ;
   /* clear the search box */
   searchInput.value = '' ;
  /*  console.log(searchInputValue) */



    /* catch the url */
  let url = `https://openlibrary.org/search.json?q=${searchInputValue} ` ;
  fetch(url)
    .then(res => res.json())
    .then(data => showData(data.docs))
    
}

let showData = docs => {
    //  console.log( docs);

    /* total search result found */
    const totalresult = docs.length
      const resultCounts = document.getElementById('resultcount');
            resultCounts.innerHTML = `Total Result found : ${totalresult}`;
        
            // console.log(totalresult); 
   


    const result = document.getElementById('resultShow');
    /* clear the old result */
    result.textContent = '' ;
    

/*      No result found part  */
   let resultError = document.getElementById('noResult') 
    if(result !== -1){
      resultError.innerText = "No result Found" ;
    }



    /* forEach loop start */
    docs.forEach(doc => {
      

        // console.log(doc)
        let div = document.createElement('div');
        div.classList.add('col')

        /* img part */
        let imgUrl = ` https://covers.openlibrary.org/b/id/${doc.cover_i}-M.jpg` ;
        
        div.innerHTML = `        
        <div class="card h-100">
        <img src="${imgUrl}" class="card-img-top img-fluid" width="300" height="250" alt="...">
        <div class="card-body">
          <h5 class="card-title"> Author Name:${doc.author_name} </h5>
          <h6 class="card-tittle" > Book Name: ${doc.title} </h6>
          <h6 class="card-tittle" > First Publish Year: ${doc.first_publish_year} </h6>
          <p class="card-text">Publisher: ${doc.publisher}</p>
        </div>
      </div>
        ` ;
        /* append with parents */
        result.appendChild(div);
    })

}
