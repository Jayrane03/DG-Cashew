// Retrieve cart items from local storage
var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

// Display cart items
var cartContent = document.getElementById('cartItems');

// Function to display cart items with buttons for adding, removing, and deleting items
function displayCartItems() {
    cartContent.innerHTML = ''; // Clear the existing content

    cartItems.forEach(function(item) {
        var cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        // Create image element
        var image = document.createElement('img');
        image.src = item.image;
        image.alt = item.name;
        cartItem.appendChild(image);
        
        // Create product info element
        var productName = document.createElement('h3');
        productName.textContent = item.name;
        var productPrice = document.createElement('p');
        productPrice.textContent = item.price || 0; // Set default price to 0 if not provided

        // Create quantity input field
        var quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.value = item.quantity || 1; // Set default quantity to 1 if not provided
        quantityInput.min = 1; 
        quantityInput.addEventListener('change', function() {
            item.quantity = parseInt(quantityInput.value);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateTotalPrice();
        });

        // Create buttons for adding, removing, and deleting items
        var buttonsDiv = document.createElement('div');
        buttonsDiv.classList.add('cart-item-buttons');
        
        var addButton = document.createElement('button');
        addButton.textContent = '+';
        addButton.addEventListener('click', function() {
            quantityInput.value = parseInt(quantityInput.value) + 1;
            item.quantity = parseInt(quantityInput.value);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            updateTotalPrice(); // Call updateTotalPrice after increasing quantity
        });

        var removeButton = document.createElement('button');
        removeButton.textContent = '-';
        removeButton.addEventListener('click', function() {
            var currentQuantity = parseInt(quantityInput.value);
            if (currentQuantity > 1) {
                quantityInput.value = currentQuantity - 1;
                item.quantity = parseInt(quantityInput.value);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                updateTotalPrice(); // Call updateTotalPrice after decreasing quantity
            }
        });

        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-button'); 
        deleteButton.addEventListener('click', function() {
            var index = cartItems.indexOf(item);
            if (index !== -1) {
                cartItems.splice(index, 1);
                localStorage.setItem('cart', JSON.stringify(cartItems));
                displayCartItems(); // Update the cart display after deleting
                updateTotalPrice();
            }
        });

        // Append elements to cartItem
        cartItem.appendChild(productName);
        cartItem.appendChild(productPrice);
        cartItem.appendChild(quantityInput);
        cartItem.appendChild(buttonsDiv);
        buttonsDiv.appendChild(addButton);
        buttonsDiv.appendChild(removeButton);
        buttonsDiv.appendChild(deleteButton);

        cartContent.appendChild(cartItem);
    });
}

// Call the function to display cart items
displayCartItems();

// Calculate total price

function updateTotalPrice() {
    var totalPrice = 0;
    cartItems.forEach(function(item) {
        // Clean up the price string by removing non-numeric characters
        var cleanedPrice = item.price.replace(/[^0-9.]/g, '');
        var itemPrice = parseFloat(cleanedPrice) || 0; // Parse cleaned price to float
        var itemQuantity = parseInt(item.quantity) || 1;
      
        totalPrice += itemPrice * itemQuantity;
    });
    console.log('Total Price:', totalPrice);
    document.getElementById('total_price').textContent = totalPrice.toFixed(2);
}



// Display initial total price
updateTotalPrice();
