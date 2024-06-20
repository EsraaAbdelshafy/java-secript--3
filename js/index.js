var SiteNameInput = document.getElementById("bookMark")

var SiteUrlInput =document.getElementById("SiteURL")

 var booksContainer =[];

if ( localStorage.getItem("booksList")!==null) {
    booksContainer=JSON.parse( localStorage.getItem("booksList"))
    displaybooks();
} 
else {
   
booksContainer=[];
}



function addBook()
{

    if (validateSiteUrl() == true) {
        var booksList={
            SiteName:SiteNameInput.value,
            SiteUrl:SiteUrlInput.value
        }
        booksContainer.push(booksList);
        displaybooks()
        // clearForm()
        localStorage.setItem("booksList",JSON.stringify( booksContainer))
    }

}

function clearForm()
{
    SiteNameInput.value=null;
    SiteUrlInput.value=null;
}
function displaybooks()
{
    var books=``
    for (i  = 0; i < booksContainer.length; i++) {
        
        books+=`
        <tr>
        <th>${i}</th>
        <th>${booksContainer[i].SiteName}</th>
        <th>
          <button onclick="visit('${booksContainer[i].SiteUrl}')" class="btn btn-primary px-4 ">Visit <i class="fa-solid fa-arrow-trend-up"></i></button>
            </th>
      <th><button onclick="deletItem(${i})" class="btn btn-danger px-4">Delete <i class="fa-solid fa-trash-can"></i></button> </th>
</tr>
    `;
document.getElementById("tableBody").innerHTML=books;
        



    }
}
//  function visit(item)
//  {
//     var vistId=``
//     for (i  = 0; i < booksContainer.length; i++)
//         {
//             vistId+=
//             booksContainer[i].SiteUrl;
  
//      window.open(booksContainer[i].SiteUr)

//  }  
//  }
function deletItem(indexItem)
{
    booksContainer.splice(indexItem,1)
displaybooks()
localStorage.setItem("booksList",JSON.stringify( booksContainer))
}


function visit(url)
{
window.open(url)
}



function validateSiteUrl() {
    var regex =/^(?:(?:https?|ftp):\/\/)?(?:www\.)?[a-z0-9-]+(?:\.[a-z0-9-]+)+[^\s]*$/i;
   var text=SiteUrlInput.value;
   var msgUrlElement=document.getElementById("msgUrl")
    if(regex.test( text )==true)
    {
        SiteUrlInput.classList.add("is-valid");
        SiteUrlInput.classList.remove("is-invalid");
        msgUrlElement.classList.add("d-none");
        return true;
    }
    else
    {
        SiteUrlInput.classList.add("is-invalid");
        SiteUrlInput.classList.remove("is-valid");
     msgUrlElement.classList.remove("d-none");
     return false;
    }
}