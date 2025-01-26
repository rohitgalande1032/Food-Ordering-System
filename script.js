let close = document.querySelector(".close");
let open = document.querySelector(".open");
let sidebar = document.querySelector(".side-bar");

let data = [
    {
      "id": 1,
      "name": "Cheeseburger",
      "price": 5.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 2,
      "name": "Pizza",
      "price": 8.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 3,
      "name": "Tacos",
      "price": 3.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 4,
      "name": "Sushi",
      "price": 11.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 5,
      "name": "Pasta",
      "price": 9.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 6,
      "name": "Fried Chicken",
      "price": 7.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 7,
      "name": "Grilled Cheese Sandwich",
      "price": 4.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 8,
      "name": "Steak",
      "price": 15.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 9,
      "name": "Caesar Salad",
      "price": 6.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 10,
      "name": "Fish and Chips",
      "price": 8.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 11,
      "name": "Ramen",
      "price": 9.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 12,
      "name": "Burrito",
      "price": 7.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 13,
      "name": "Pho",
      "price": 8.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 14,
      "name": "Pad Thai",
      "price": 9.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 15,
      "name": "Gyro",
      "price": 6.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 16,
      "name": "Ice Cream",
      "price": 3.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 17,
      "name": "Smoothie",
      "price": 4.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": "18",
      "name": "Apple Pie",
      "price": 4.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 19,
      "name": "Chocolate Cake",
      "price": 5.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 20,
      "name": "Pancakes",
      "price": 4.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 21,
      "name": "Cupcake",
      "price": 2.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 22,
      "name": "Crepes",
      "price": 5.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 23,
      "name": "Club Sandwich",
      "price": 6.99,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 24,
      "name": "Falafel",
      "price": 5.49,
      "imgSrc": "./img/burger.jpg"
    },
    {
      "id": 25,
      "name": "Curry",
      "price": 9.49,
      "imgSrc": "./img/burger.jpg"
    }
  ]



open.addEventListener("click", ()=> {
    sidebar.style.display = "flex";
    close.style.display = "block";
})

close.addEventListener("click", () => {
    sidebar.style.display = "none";
    close.style.display = "none";
})


function secondScreen(){
    let hideMainImg = document.querySelector('.main_hero_img');
    hideMainImg.style.display = 'none';
};

document.addEventListener("DOMContentLoaded", function(){
    
    //1. Get Menu
    function getMenu() {
        let cardSection = document.querySelector(".card-section");
        data.map((items) => {
            cardSection.innerHTML += `
                <div class="card">
                <img src=${items.imgSrc} alt="" class="card-main-img">
                <div class="card-content">
                    <div class="card-start-content">
                        <p class="food-name">${items.name}</p>
                        <p class="cost">$${items.price}/-</p>
                    </div>
                    <div class="card-end-content">
                        <img src="img/Group 4.png" alt="">
                    </div>
                </div>
            </div>
            `
        })
    }

    getMenu();


    //2. Take Order
    function takeOrder() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let order = {
                    arr : []
                };
                for(let i=0; i<3; i++) {
                    let randomum = Math.floor(Math.random()*data.length);
                    order.arr.push(data[randomum]);
                }
                resolve(order);
            }, 2500)
        })
    }

    // 3. orderPrep() function
    function orderPrep() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let orderStatus = {order_status:true, paid:false};
                resolve(orderStatus);
            }, 1500)
        })
    }

    // 4.payOrder() function
    function payOrder() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let  paymentStatus = {order_status:true, paid:true}
                resolve(paymentStatus)
            } , 1000)
        })
    }

    // 5.Part 5: thankyouFnc() function
// Function is called once {paid:true} is received
// Alert message is properly visible on the screen

    function thankyouFnc() {
        alert("Thank you for visiting, Hope you have enjoyed your meal");
    }

    takeOrder().then((data) => {
        console.log("Your Order :", data);
        return orderPrep();
    }).then((orderStatus) => {
        console.log('Order Preparation Status:', orderStatus);
        return payOrder();
    }).then((paymentStatus)=> {
        console.log('Payment Status:', paymentStatus);
        if(paymentStatus.paid) {
            thankyouFnc();
        }
    }).catch((err)=> {
        console.log("Sorry: ", err);
    })
})