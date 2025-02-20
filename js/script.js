const fileInput = document.getElementById('fileInput');
const previewImage = document.getElementById('previewImage');
const nameInput = document.getElementById('nameInput');
const roastText = document.getElementById('roastText');
const uploadIcon = document.querySelector('.upload-icon');
const uploadText = document.querySelector('.upload-container span');
const modal = document.getElementById('paymentModal');

const roasts = [
    "Bro, ini look atau eksperimen sains yang gagal?",
    "Baju lo tuh ngasih pesan kuat... 'aku butuh stylist'. 👕😵",
    "Kalau mau jadi fashion influencer, mungkin coba jalur lain dulu... 😬",
    "Aku suka kepercayaan dirimu pakai outfit begitu! 💫",
    "Plot twist: ternyata bajunya dipilih sambil tutup mata ya? 🙈",
    "Gak ada TikTok apa di rumah lo? Kok gak update soal fashion? 🤔",
    "Sepertinya kamu salah baca trend forecast deh... 📉",
    "Outfit lo bikin gue auto mikir, ini fashion statement apa fashion disaster sih? 🤯",
    "Warna-warni sih, tapi kok vibes-nya kayak balon ulang tahun? 🎈😂",
    "Ini outfit buat ke mana exactly? Ke planet lain? 🚀"
];

fileInput.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            previewImage.src = e.target.result;
            previewImage.style.display = 'block';
            uploadIcon.style.display = 'none';
            uploadText.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});

function startRoast() {
    if (!fileInput.files[0]) {
        alert('Upload foto dulu dong!');
        return;
    }
    if (!nameInput.value.trim()) {
        alert('Isi nama kamu dulu ya!');
        return;
    }

    const randomRoast = roasts[Math.floor(Math.random() * roasts.length)];
    roastText.textContent = `Hey ${nameInput.value}, ${randomRoast}`;
    roastText.style.display = 'block';
}

function resetForm() {
    fileInput.value = '';
    previewImage.style.display = 'none';
    uploadIcon.style.display = 'block';
    uploadText.style.display = 'block';
    nameInput.value = '';
    roastText.style.display = 'none';
}

function openPaymentModal() {
    modal.style.display = 'flex';
}

function closePaymentModal() {
    modal.style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target == modal) {
        closePaymentModal();
    }
}
