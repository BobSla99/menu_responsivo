const linkContainer = document.querySelector(".links");
const bMore = document.querySelector("button");

bMore.addEventListener("click", (e) => {
  console.log(bMore, linkContainer);
  if (linkContainer.classList.contains("show")) {
    linkContainer.classList.remove("show");
    linkContainer.classList.add("hide");
  } else {
    linkContainer.classList.remove("hide");
    linkContainer.classList.add("show");
  }
});
