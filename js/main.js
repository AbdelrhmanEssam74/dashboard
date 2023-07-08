//button to go to the top of the page
//get the button element
const btn = document.querySelector(".up");
//using windo.onscroll() method
document.onscroll = () => {
  if (this.scrollY >= 250) {
    //add className to the butoon "show"
    btn.classList.add("show");
  } else {
    //remove className to the butoon "show"
    btn.classList.remove("show");
  }
};
//then click on the button to go to the top of page
btn.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// show and hide notifications list
let notification_icon = document.querySelector(".notifications");
let notification_menu = document.querySelector(".notification-menu");
notification_icon.addEventListener("click", () => {
  notification_menu.classList.toggle("show");
});


/*SECTION - show latest news summary*/


function news_model(img_src, title, paragraph, postTime) {
  const model = document.createElement('div');
  const img = document.createElement('img');
  const titleEl = document.createElement('h2');
  const paragraphEl = document.createElement('p');
  const postTimeEl = document.createElement('span');

  // set the content and attributes
  img.src = img_src;
  titleEl.textContent = title;
  paragraphEl.textContent = paragraph;
  postTimeEl.textContent = postTime;

  // add the elements to the model
  model.appendChild(img);
  model.appendChild(titleEl);
  model.appendChild(paragraphEl);
  model.appendChild(postTimeEl);

  // apply styles to the model
  let class_List = model.classList;
  class_List.add("d-flex", "align-center", "p-20", "bg-eee", "direction-col", "rad-6", "transition-3");
  img.style.width = "250px"
  return model;
}

var news_rows = document.querySelectorAll(".news-row")
news_rows.forEach((e) => {
  e.addEventListener("click", () => {
    // get image src 
    var news_image = e.querySelector("img")
    const imageSrc = news_image.getAttribute('src');

    // get title content 
    var title = e.querySelector("h4")
    const title_cont = title.textContent;

    // get paragraph  content 
    var paragraph = e.querySelector("p")
    const paragraph_cont = paragraph.textContent

    // get post time 
    var post_time = e.querySelector(".label")
    const time_cont = post_time.textContent

    const model_El = document.querySelector(".model");
    model_El.style.display = "flex";
    const myModel = news_model(imageSrc, title_cont, paragraph_cont, time_cont);
    model_El.appendChild(myModel);  // add the model to the page

    //NOTE - close model
    var close_model = document.querySelector(".close-model")
    close_model.addEventListener("click", () => {
      model_El.style.display = "none"
      model_El.removeChild(myModel); // remove the model element from the DOM
    })
  })
})
