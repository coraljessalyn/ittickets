// Grab elements
const ticketInput = document.getElementById('ticketInput');
const ticketList = document.getElementById('ticketList');

// Function to create a new ticket card
function addTicket() {
  const issueText = ticketInput.value.trim();
  if (issueText === '') return;

  // Create ticket card container
  const ticketCard = document.createElement('div');
  ticketCard.className = 'ticket-card';

  // Create paragraph for the ticket description
  const ticketDescription = document.createElement('p');
  ticketDescription.textContent = issueText;
  ticketCard.appendChild(ticketDescription);

  // Action buttons container
  const actions = document.createElement('div');
  actions.className = 'ticket-actions';

  // Edit button
  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit-button';
  editBtn.onclick = () => {
    const newText = prompt('Update the issue description:', ticketDescription.textContent);
    if (newText !== null && newText.trim() !== '') {
      ticketDescription.textContent = newText.trim();
    }
  };

  // Resolve button
  const resolveBtn = document.createElement('button');
  resolveBtn.textContent = 'Resolve';
  resolveBtn.className = 'resolve-button';
  resolveBtn.onclick = () => {
    ticketCard.remove();
  };

  // Append buttons
  actions.appendChild(editBtn);
  actions.appendChild(resolveBtn);
  ticketCard.appendChild(actions);

  // Add ticket to the list
  ticketList.appendChild(ticketCard);

  // Clear input
  ticketInput.value = '';
}
