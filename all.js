const apiPath ="https://2023-engineer-camp.zeabur.app";
let worksData = [];
let pagesData = {};

const data = {
    type:'',
    sort:0,
    page:1,
    search:'',

}

function getData(){
    const apiUrl = `${apiPath}/api/v1/works`
    axios.get(apiUrl).then(function(response){
        worksData = response.data.ai_works.data;
        Object.values(worksData);//物件轉陣列
        pagesData = response.data.ai_works.page;
        console.log('worksData', worksData);
        console.log('pagesData', pagesData);
        console.log(worksData)
        renderWorks();
    })
}
getData()

const AITable = document.querySelector(".AITable")

//一直渲染失敗因為原本worksData是物件

function renderWorks(){
    let works = '';

     worksData.forEach(function(item){
        works += 
        `<li class="AI">
        <div>
        <img src="${item.imageUrl}" alt="" class="tool"></img>
        <div class="card">

              
        <h5 style="padding:30px;font-weight:bold">${item.title}</h5>
        <div class="desArea"> 
         <p class="description">${item.description}</p>
        </div>

         <div class="sub-card-one">
             <p class="AIModel">${item.model}</p>
             <p>${item.discordId}</p>
         </div>
         <div class="sub-card-two">
             <p>${item.type}</p>
             <a href="#"><span class="material-symbols-outlined" style="color:black">
                 share
                 </span></a>
         </div>
         </div>
    </div>
    </li>`
    });

    AITable.innerHTML = works;
    
}

//處理motion部分
