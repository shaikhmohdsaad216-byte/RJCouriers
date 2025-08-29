// monolithic/script.js
let parcels = [];
function showSection(id) {
  document.querySelectorAll('section').forEach(s => s.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}
function bookParcel(e) {
  e.preventDefault();
  const sender = document.getElementById('sender').value;
  const receiver = document.getElementById('receiver').value;
  const weight = document.getElementById('weight').value;
  const id = 'P' + Math.floor(Math.random() * 10000);
  parcels.push({ id, sender, receiver, weight });
  alert('Parcel Booked. ID: ' + id);
}
function trackParcel() {
  const id = document.getElementById('trackId').value;
  const parcel = parcels.find(p => p.id === id);
  document.getElementById('trackResult').innerText = parcel ? `Parcel from ${parcel.sender} to ${parcel.receiver}` : 'Not Found';
}
function showParcels() {
  const list = document.getElementById('parcelList');
  list.innerHTML = '';
  parcels.forEach(p => {
    const item = document.createElement('li');
    item.textContent = `${p.id}: ${p.sender} -> ${p.receiver} (${p.weight}kg)`;
    list.appendChild(item);
  });
}
document.querySelector("button[onclick*=admin]").addEventListener('click', showParcels);
