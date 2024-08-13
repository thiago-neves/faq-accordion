function action(index) {
  const paragraph = document.getElementsByClassName("paragraph")[index];
  const openIcon = document.getElementsByTagName("img")[index * 2 + 1];
  const closeIcon = document.getElementsByTagName("img")[index * 2 + 2];

  if (paragraph.classList.contains("hidden")) {
    paragraph.classList.remove("hidden");
  } else {
    paragraph.classList.add("hidden");
  }

  if (openIcon.classList.contains("hidden")) {
    closeIcon.classList.add("hidden");
    openIcon.classList.remove("hidden");
  } else {
    openIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
  }
}
