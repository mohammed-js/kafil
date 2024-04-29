const cards = [
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
  {
    id: "1",
    image: "../../assets/images/avatar.svg",
    rate: "4",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit... ",
    count: "300",
    price: "10",
    name: "Jane Smith",
  },
];

const cardsContainer = document.getElementById("cardsContainer");
const containerStyles = {
  display: "flex",
  ["flex-wrap"]: "wrap",
  gap: "30px",
};
for (const [key, value] of Object.entries(containerStyles)) {
  cardsContainer.style[key] = value;
}

cards.forEach((card) => {
  const cardElement = document.createElement("div");
  const styles = {
    display: "flex",
    ["flex-direction"]: "column",
    gap: "10px",
    width: "300px",
    position: "relative",
  };
  for (const [key, value] of Object.entries(styles)) {
    cardElement.style[key] = value;
  }

  cardElement.innerHTML = `
  <img src="../../assets/images/filled-heart.svg" 
  style="position:absolute;top:10px;left:10px; cursor:pointer" 
  onclick="toggleHeart(event)" />

      <img src="../../assets/images/card-image.svg" width:"100%"/>
      <div>${card.description}</div>
      <div style="margin-right:auto"><span class="fa fa-star checked"></span><span> ${card.rate} </span><img src="../../assets/images/cart.svg" style="margin-left:10px"/><span> ${cards.count}</span></div>
   <div style="display:flex;align-items:center">
   <img src="../../assets/images/avatar.svg" />
   <div style="margin-left:10px">${card.name}</div>
   <img src="../../assets/images/tag.svg" style="margin-left:auto"/>
   <div style="margin-left:10px">${card.price}$</div>
   </div>
      `;
  cardsContainer.appendChild(cardElement);
});

function toggleHeart(event) {
  var img = event.target;
  if (img.src.includes("filled-heart.svg")) {
    img.src = "../../assets/images/empty-heart.svg";
  } else {
    img.src = "../../assets/images/filled-heart.svg";
  }
}
