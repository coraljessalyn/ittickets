
function addTicket() {
  const input = document.getElementById('ticketInput');
  const ticketList = document.getElementById('ticketList');
  if (input.value.trim()) {
    const card = document.createElement('div');
    card.className = 'card';
    card.textContent = input.value;
    ticketList.appendChild(card);
    input.value = '';
  }
}
