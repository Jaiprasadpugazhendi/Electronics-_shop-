const qtyInputs = document.querySelectorAll('.qty');
const removeBtns = document.querySelectorAll('.remove');
const grandTotalEl = document.getElementById('grand-total');

function updateTotals() {
  let grandTotal = 0;
  document.querySelectorAll('#cart-items tr').forEach(row => {
    const price = parseInt(row.querySelector('.price').textContent.replace('₹', ''));
    const qty = parseInt(row.querySelector('.qty').value);
    const total = price * qty;
    row.querySelector('.total').textContent = `₹${total}`;
    grandTotal += total;
  });
  grandTotalEl.textContent = grandTotal;
}

qtyInputs.forEach(input => input.addEventListener('change', updateTotals));

removeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.target.closest('tr').remove();
    updateTotals();
  });
});

updateTotals();
