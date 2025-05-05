const productContainer = document.getElementById("productContainer");
const categorySelect = document.getElementById("categorySelect");

let allProducts = [];

async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  allProducts = data;
  renderProducts(data);
  populateCategories(data);
}

function renderProducts(products) {
  productContainer.innerHTML = "";
  products.forEach((product) => {
    const col = document.createElement("div");
    col.className = "col-md-4";
    col.innerHTML = `
      <div class="card h-100 shadow-sm">
        <img src="${product.image}" class="card-img-top p-3" alt="${
      product.title
    }" style="height: 300px; object-fit: contain;">
        <div class="card-body d-flex flex-column">
          <h5 class="card-title">${product.title}</h5>
          <p class="card-text text-muted">$${product.price}</p>
          <p class="card-text">${product.description.substring(0, 100)}...</p>
          <a href="#" class="btn btn-primary mt-auto">Buy Now</a>
        </div>
      </div>
    `;
    productContainer.appendChild(col);
  });
}

function populateCategories(products) {
  const categories = new Set(products.map((p) => p.category));
  categories.forEach((category) => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
}

categorySelect.addEventListener("change", () => {
  const selected = categorySelect.value;
  if (selected === "all") {
    renderProducts(allProducts);
  } else {
    const filtered = allProducts.filter((p) => p.category === selected);
    renderProducts(filtered);
  }
});

fetchProducts();
