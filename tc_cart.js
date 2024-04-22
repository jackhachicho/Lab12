"use strict";

let orderTotal = 0;
let cartHTML = `<table>
<tr>
<th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th>
</tr>`;

const items = [10582, 23015, 41807, 10041];
const itemDescriptions = [
  "1975 Green Bay Packers Football (signed), Item 10582",
  "Tom Landry 1955 Football Card (unsigned), Item 23015",
  "1916 Army-Navy Game, Framed Photo (signed), Item 41807",
  "Protective Card Sheets, Item 10041"
];
const itemPrices = [149.93, 89.98, 334.93, 22.67];
const itemQty = [1, 1, 1, 4];

for (let i = 0; i < items.length; i++) {
  const itemID = items[i];
  const description = itemDescriptions[i];
  const price = itemPrices[i];
  const quantity = itemQty[i];

  // Calculate item cost
  const itemCost = price * quantity;

  cartHTML += `
    <tr>
      <td><img src='tc_item.png' alt='item' /></td>
      <td>${description}</td>
      <td>$${price.toFixed(2)}</td>
      <td>${quantity}</td>
      <td>$${itemCost.toFixed(2)}</td>
    </tr>`;

  // Update order total
  orderTotal += itemCost;
}

// Add subtotal row
cartHTML += `
<tr>
<td colspan='4'>Subtotal</td>
<td>$${orderTotal.toFixed(2)}</td>
</tr>`;

// Close the table
cartHTML += `</table>`;

// Add the calculated HTML to the shopping cart div
document.getElementById("cart").innerHTML = cartHTML;

// Display the order total (implementation detail omitted for brevity)
document.getElementById("orderTotal").textContent = `$${orderTotal.toFixed(2)}`;
