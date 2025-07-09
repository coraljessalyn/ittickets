const input = document.getElementById("ticketInput");
const button = document.getElementById("addTicket");
const container = document.getElementById("ticketContainer");

button.addEventListener("click", () => {
  const text = input.value.trim();
  if (!text) return;

  const card = document.createElement("div");
  card.className = "ticket-card";
  card.innerHTML = `
    <div class="ticket-header">
      <span class="ticket-id">🎫 Ticket #${Date.now().toString().slice(-4)}</span>
      <button class="close-btn">✖</button>
    </div>
    <p>${text}</p>
  `;

  card.querySelector(".close-btn").onclick = () => card.remove();
  container.appendChild(card);
  input.value = "";
});
