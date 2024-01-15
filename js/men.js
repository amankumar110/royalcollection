const pants = [
    {
      name: "Amazing luxury pant by Kiabi",
      src: "../media/men/pants/pant1.jpg",
      price: 2000,
      colors: "blue",
      sizes: "36,38,34",
    },
    {
    name: "Regular fit jeans by Kiabi",
      src: "../media/men/pants/pant2.jpg",
      price: 2000,
      colors: "light blue",
      sizes: "36,38,40,42,44,46,48,50",
    },
    {
    name: "Skinny jeans by Kiabi",
      src: "../media/men/pants/pant3.jpg",
      price: 2000,
      colors: "black",
      sizes: "36,38,40,42,44,46,48,50",
    },
    {
    name: "Slim fit jeans by Kiabi",
      src: "../media/men/pants/pant4.jpg",
      price: 2000,
      colors: "blue",
      sizes: "36,38,40,42,44,46,48,50",
    },
    {
    name: "Straight leg jeans by Kiabi",
      src: "../media/men/pants/pant5.jpg",
      price: 2000,
      colors: "blue",
      sizes: "36,38,40,42,44,46,48,50",
    },
    {
      name: "Slim-fit stretch jeans by Kiabi",
      src: "../media/men/pants/pant6.jpg",
      price: 2000,
      colors: "black",
      sizes: "36,38,40,42,44,46,48,50",
    },

  ];

window.addEventListener("DOMContentLoaded",(e)=>{
    const products = document.querySelector(".products");

    for (let pant of pants) {

        const product = document.createElement("div");
        product.classList.add("product-card");
        product.innerHTML=
        `
        <img src="${pant.src}" alt="" class="product-image">
                    <h4 class="product-detail product-name">${pant.name}</h4>
                    <h4 class=" product-detail product-price"> price: ${pant.price}</h4>
                    <h4 class=" product-detail product-colors">Colors: ${pant.colors}</h4>
                    <h4 class=" product-detail product-size">Sizes: ${pant.sizes}</h4>
        `;
    
        products.appendChild(product);
    }
});






