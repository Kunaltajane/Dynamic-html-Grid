

  

// Clothing Section......

productList.forEach((element, i) => {
    

    
const main = document.querySelector(".main");
console.log(main);
// create card

const card = document.createElement('div');
card.classList = 'card';

const shopingCard = `

<img class="card_img" src=${productList[i].photos[i]}>
<div class="info">
    <h2>${productList[i].name}</h2>
    <p>${productList[i].brand}</p>
    <h3>R.S.${productList[i].price}</h3>
</div>

`;

card.innerHTML += shopingCard;

main.appendChild(card);

});

//Accessories Section.....

productList1.forEach((element, i) => {
    

    
    const main_1 = document.querySelector(".main_1");
    console.log(main_1);
    // create card
    
    const card1 = document.createElement('div');
    card1.classList = 'card1';
    
    const shopingCard1 = `
    
    <img class="card_img1" src=${productList1[i].photos[i]}>
    <div class="info">
        <h2>${productList1[i].name}</h2>
        <p>${productList1[i].brand}</p>
        <h3>R.S.${productList1[i].price}</h3>
    </div>
    
    `;
    
    card1.innerHTML += shopingCard1;
    
    main_1.appendChild(card1);
    
    });



