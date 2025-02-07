// Xử lý transition cho category
document.querySelectorAll('.plus').forEach(button => {
    button.addEventListener('click', function () {
        // Lấy ID của phần tử cần mở/đóng
        const targetId = this.getAttribute('data-target');
        const moreDetail = document.getElementById(targetId);
        const isActive = moreDetail.classList.contains('active');

        // Đóng tất cả các box khác
        document.querySelectorAll('.more-detail').forEach(box => {
            box.classList.remove('active');
        });

        // Đổi trạng thái cho tất cả các button
        document.querySelectorAll('.plus').forEach(btn => {
            btn.classList.remove('active');
        });

        // Nếu box hiện tại không phải là box đang mở, mở box và đổi trạng thái button
        if (!isActive) {
            moreDetail.classList.add('active');
            this.classList.add('active');
        }
    });
});
