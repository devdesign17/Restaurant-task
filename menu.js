const menuItems = [
    {
        id: 1,
        name: "Crunch Burger",
        category: "burgers",
        price: "Rs. 350",
        desc: "Crispy chicken patty with premium mayo, lettuce, and fresh buns.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=500"
    },
    {
        id: 2,
        name: "Chicken Tikka Boti",
        category: "bbq",
        price: "Rs. 450",
        desc: "Traditional smoky chicken boti grilled over charcoal with native spices.",
        image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?q=80&w=500"
    },
    {
        id: 3,
        name: "Pepperoni Passion Pizza",
        category: "pizza",
        price: "Rs. 1200",
        desc: "Loaded with extra mozzarella cheese and classic pepperoni slices.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=500"
    },
    {
        id: 4,
        name: "Loaded Fries",
        category: "fast-food",
        price: "Rs. 300",
        desc: "Crispy french fries topped with melted cheese, jalapenos, and secret sauce.",
        image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=500"
    },
    {
        id: 5,
        name: "Chocolate Lava Cake",
        category: "desserts",
        price: "Rs. 280",
        desc: "Rich chocolate cake with a molten warm chocolate center served fresh.",
        image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=500"
    },
    {
        id: 6,
        name: "Mint Margarita",
        category: "drinks",
        price: "Rs. 180",
        desc: "Refreshing blend of fresh mint leaves, lime juice, and soda.",
        image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=500"
    }
];

const menuGrid = document.getElementById('menu-grid');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const noItems = document.getElementById('no-items');
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');


window.addEventListener('DOMContentLoaded', () => {
    displayMenu(menuItems);
});

function displayMenu(items) {
    if(items.length < 1) {
        noItems.classList.remove('hidden');
        menuGrid.innerHTML = '';
        return;
    }
    
    noItems.classList.add('hidden');
    let displayData = items.map((item) => {
        return `<article class="dish-card">
            <div class="dish-img">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="dish-info">
                <h3>${item.name}</h3>
                <p>${item.desc}</p>
                <div class="dish-footer">
                    <span class="price">${item.price}</span>
                    <button class="order-btn">Order Now</button>
                </div>
            </div>
        </article>`;
    }).join('');
    
    menuGrid.innerHTML = displayData;
}

searchInput.addEventListener('keyup', filterAll);

filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach((b) => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        filterAll();
    });
});

function filterAll() {
    const searchValue = searchInput.value.toLowerCase();
    const activeCategory = document.querySelector('.filter-btn.active').dataset.category;
    
    const filteredItems = menuItems.filter((item) => {
        const matchesSearch = item.name.toLowerCase().includes(searchValue) || item.desc.toLowerCase().includes(searchValue);
        const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayMenu(filteredItems);
}


if(menuToggle && navLinks) {
            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });
        }