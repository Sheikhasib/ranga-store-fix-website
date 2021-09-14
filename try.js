div.innerHTML = `<div class="single-product">
      <div>
      <img id="product-image" class="card-img-top" alt="..." src=${image}></img>
      </div>
      <h3>${product.title}</h3>
      <p>Category: ${product.category}</p>
      <p> <i class="fas fa-star"></i> ${product?.rating?.rate}   </p>
      <p><i class="fas fa-users"></i> ${product?.rating?.count}</p>
      <h2>Price: $ ${product.price}</h2>
      <button onclick="addToCart(${product?.id},${product.price})" id="addToCart-btn" class="buy-now btn btn-success">add to cart</button>
      <button id="details-btn" class="btn btn-danger">Details</button></div>
      `;