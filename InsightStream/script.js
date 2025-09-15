// Search Functionality
const searchInput = document.getElementById("search");
if (searchInput) {
  const newsContainer = document.getElementById("news-container");
  const newsCards = newsContainer.getElementsByClassName("news-card");

  searchInput.addEventListener("keyup", function() {
    let filter = searchInput.value.toLowerCase();
    for (let i = 0; i < newsCards.length; i++) {
      let title = newsCards[i].getElementsByClassName("news-title")[0];
      if (title.innerText.toLowerCase().includes(filter)) {
        newsCards[i].style.display = "";
      } else {
        newsCards[i].style.display = "none";
      }
    }
  });
}

// Categories Functionality
const categories = {
  tech: [
    { title: "AI revolutionizes industries", desc: "Artificial Intelligence is reshaping everything from healthcare to finance.", img: "https://picsum.photos/400/200?5" },
    { title: "Quantum Computing breakthrough", desc: "Researchers make progress in quantum systems that could change computing forever.", img: "https://picsum.photos/400/200?6" }
  ],
  sports: [
    { title: "Championship finals bring excitement", desc: "Fans worldwide tune in to witness the thrilling grand finals.", img: "https://picsum.photos/400/200?7" },
    { title: "Rising stars in football", desc: "Young athletes are making headlines with incredible performances.", img: "https://picsum.photos/400/200?8" }
  ],
  politics: [
    { title: "Global leaders meet for summit", desc: "Discussions focus on climate change and international cooperation.", img: "https://picsum.photos/400/200?9" },
    { title: "Policy reforms announced", desc: "Governments introduce new strategies for economic growth.", img: "https://picsum.photos/400/200?10" }
  ],
  health: [
    { title: "Advances in medical technology", desc: "Innovations promise better treatment and patient care.", img: "https://picsum.photos/400/200?11" },
    { title: "Tips for healthy living", desc: "Experts share advice on maintaining physical and mental well-being.", img: "https://picsum.photos/400/200?12" }
  ]
};
function showCategory(type) {
  const container = document.getElementById("category-news");
  if (!container) return;
  container.innerHTML = "";
  if (categories[type]) {
    categories[type].forEach(article => {
      const card = document.createElement("div");
      card.className = "news-card";
      card.innerHTML = `<img src="${article.img}" alt="News">
        <h3 class="news-title">${article.title}</h3>
        <p>${article.desc}</p>`;
      container.appendChild(card);
    });
  }
}