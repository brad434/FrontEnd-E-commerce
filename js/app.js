const wrapper = document.querySelector(".sliderWrapper") 
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
        id:1,
        title: "Air Force",
        price: 119,
        colors: [
            {
                code: "black",
                img: "./img/air.png",
            },

            {
                code:"darkblue",
                img: "./img/air2.png"
            },
        ],
    },

    {
        id:2,
        title: "Air Jordan",
        price: 149,
        colors: [
            {
                code:"lightgray",
                img:"./img/jordan.png",
            },
            {
                code:"green",
                img:"./img/jordan2.png",
            },
        ],
    },

    {
        id:3,
        title: "Blazer",
        price: 109,
        colors:[
            {
                code:"lightgray",
                img:"./img/blazer.png",
            },
            {
                code:"green",
                img: "./img/blazer2.png",
            },
        ],
    },

    {
        id:4,
        title: "Crater",
        price: 129,
        colors:[
            {
                code:"black",
                img:"./img/crater.png",
            },
            {
                code:"lightgray",
                img:"./img/crater2.png",
            },
        ],
    },

    {
        id:5,
        title: "Hippie",
        price: 99,
        colors: [
            {
                code:"gray",
                img: "./img/hippie.png",
            },
            {
                code:"black",
                img: "./img/hippie2.png"
            },
        ],
    },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
    item.addEventListener("click", () =>{
        //this code below move the header images to the left of the X axis
        wrapper.style.transform = `translateX(${-100 * index}vw)`;

        // change the choosen product 
        choosenProduct = products[index];

        // change texts of currentProduct
        currentProductTitle.textContent = choosenProduct.title;
        currentProductPrice.textContent = "$" + choosenProduct.price;
        currentProductImg.src = choosenProduct.colors[0].img;

        // this displays the type of color to choose from
        currentProductColors.forEach((color,index) => {
            color.style.backgroundColor = choosenProduct.colors[index].code;
        });
    });
});

// this code will change the color of the sneaker that was picked. So if you click green, the sneaker will be green.
currentProductColors.forEach((color,index) => {
    color.addEventListener("click", ()=>{
        currentProductImg.src = choosenProduct.colors[index].img
    });
});

currentProductSizes.forEach((size,index)=>{
    size.addEventListener("click", ()=>{
        currentProductSizes.forEach((size)=>{
            size.style.backgroundColor= "white" //line 125 and 126 will loop to make the sizes that weren't clicked white with black text
            size.style.color= "black"
        });
        size.style.backgroundColor= "black" // this code will make what was click black with white text. All accompanied by the click function
        size.style.color= "white"
    });
});


//code below is the function to make the checkout appear and disappear
const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
});
close.addEventListener(("click"),()=>{
    payment.style.display="none"
});
