const ratings = [
  { id: "1", ratingTitle: "Work Quality", rate: "4" },
  { id: "2", ratingTitle: "Communication & Collaboration", rate: "3" },
];

const container = document.getElementById("ratingContainer");

ratings.forEach((rating) => {
  const ratingElement = document.createElement("div");
  const styles = {
    display: "flex",
    alignItems: "center",
    // ["justify-content"]: "space-between",
    gap: "10px",
    ["flex-wrap"]: "wrap",
  };
  for (const [key, value] of Object.entries(styles)) {
    ratingElement.style[key] = value;
  }

  ratingElement.innerHTML = `
   <div class="card" style="width:100%; margin-bottom:50px">
   <h2 style="font-size:18px; font-weight:500">${rating.ratingTitle}</h2>
   <div><span class="fa fa-star checked"></span> ${rating.rate}</div>
   <div style="margin-left:auto">${getStarRatingHTML(rating.rate)}</div>
   <progress id="file" value="32" max="100">32%</progress>
   </div>

    `;
  container.appendChild(ratingElement);
});

function getStarRatingHTML(rating) {
  const maxRating = 5;
  let starsHTML = "";
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      starsHTML += '<span class="fa fa-star checked"></span>';
    } else {
      starsHTML += '<span class="fa fa-star"></span>';
    }
  }
  return starsHTML;
}

//* ----------------------------------------------------------------

const feedbacks = [
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    name: "Jane Smith",
    rate: "4",
    time: "30m",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
  },
  {
    id: "2",
    image: "../../assets/images/avatar.svg",
    name: "Jane Smith",
    rate: "2",
    time: "20m",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
  },
  {
    id: "3",
    image: "../../assets/images/avatar.svg",
    name: "Jane Smith",
    rate: "1",
    time: "10m",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit.... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam nisi, cras neque Lorem ipsum dolor sit amet,Lorem ipsum dolor sit amet, consectetur adipiscing elit....",
  },
];

const feedbackContainer = document.getElementById("ratingContainer");

feedbacks.forEach((feedback) => {
  const feedbackElement = document.createElement("div");
  const styles = {
    display: "flex",
    gap: "10px",
  };
  for (const [key, value] of Object.entries(styles)) {
    feedbackElement.style[key] = value;
  }

  feedbackElement.innerHTML = `
  
      <img src="${feedback.image}"/>
      <div style="display:flex; flex-direction:column; justify-content:space-between">
      <div>${feedback.name}</div>
     <div>
     <span>${getStarRatingHTML(feedback.rate)}</span>
     <span style="color:var(--grey)">${feedback.time}</span>
     </div>
      </div>

    `;
  feedbackContainer.appendChild(feedbackElement);
  // *********
  const bodyElement = document.createElement("div");
  const bodtStyles = {
    ["margin-top"]: "10px",
    ["margin-bottom"]: "10px",
    ["margin-left"]: "50px",
    ["line-height"]: "1.5",
  };
  for (const [key, value] of Object.entries(bodtStyles)) {
    bodyElement.style[key] = value;
  }

  bodyElement.innerHTML = `
  <div>${feedback.body}</div>
   

  `;
  feedbackContainer.appendChild(bodyElement);
});
const reviewElement = document.createElement("div");
const styles = {
  ["margin-top"]: "20px",
  display: "flex",
  gap: "10px",
  ["align-items"]: "flex-start",
  width: "100%",
};
for (const [key, value] of Object.entries(styles)) {
  reviewElement.style[key] = value;
}

reviewElement.innerHTML = `

<div style="margin-bottom:20px; width:100%">
<img src="../../assets/images/reviewer.svg"/>
<form action="" style="width:100%">
  <textarea placeholder="Write your review in here"/ id="w3review" name="w3review" rows="10" style="background-color:var(--light-grey); border:none; padding:10px; border-radius:8px;"></textarea>
  <br>
  <input type="submit" value="Post Review" style="cursor:pointer;color:#fff;background-color:#1DBF73; border-radius:8px; padding:10px; border:none;margin-top:10px">
</form>
</div>
</div>

  `;
feedbackContainer.appendChild(reviewElement);

function getStarRatingHTML(rating) {
  const maxRating = 5;
  let starsHTML = "";
  for (let i = 1; i <= maxRating; i++) {
    if (i <= rating) {
      starsHTML += '<span class="fa fa-star checked"></span>';
    } else {
      starsHTML += '<span class="fa fa-star"></span>';
    }
  }
  return starsHTML;
}
