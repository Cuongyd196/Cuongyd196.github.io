
// Ngày Giao Thừa Tết Ất Tỵ 2025 (29/01/2025, 23:59:59)
const newYearDate = new Date("2025-01-29T00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = newYearDate - now;

    if (distance <= 0) {
        // Khi đếm ngược kết thúc
        document.querySelector(".countdown").innerHTML = `
          <p style="font-size: 24px; font-weight: bold; color: #ffcc00;">
            Chúc Mừng Năm Mới Ất Tỵ 2025!
          </p>`;
        return;
    }

    // Tính toán ngày, giờ, phút, giây còn lại
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật giao diện
    document.querySelector(".red-box .number").innerText = days;
    document.querySelector(".yellow-box .number").innerText = hours;
    document.querySelector(".green-box .number").innerText = minutes;
    document.querySelector(".blue-box .number").innerText = seconds;
}

// Cập nhật countdown mỗi giây
setInterval(updateCountdown, 1000);

// Gọi hàm ngay khi tải trang
updateCountdown();
