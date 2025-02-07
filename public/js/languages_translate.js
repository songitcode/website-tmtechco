function changeLanguage(lang) {
    // Hiển thị thông báo
    const messageElement = document.getElementById('loader-language');
    messageElement.style.display = 'flex';

    // Ẩn thông báo và tải lại trang sau 1 giây
    setTimeout(() => {
        // Lưu lựa chọn ngôn ngữ vào localStorage
        localStorage.setItem('language', lang);

        // Hiển thị thông báo
        // const messageElement = document.getElementById('language-change-message');
        localStorage.setItem('language-changed', 'true');

        // Tải lại trang để áp dụng ngôn ngữ mới
        location.reload();

    }, 2000);
}

// Hàm khởi tạo để áp dụng ngôn ngữ mặc định
document.addEventListener('DOMContentLoaded', function () {
    const language = localStorage.getItem('language') || 'VN';
    applyLanguage(language);

    // Hiển thị thông báo sau khi tải lại trang
    const messageSuccess = document.getElementById('language-change-message');
    if (localStorage.getItem('language-changed')) {
        // Thêm lớp 'show' để kích hoạt hiệu ứng hiển thị
        messageSuccess.classList.add('show');
        setTimeout(() => {
            // Xóa lớp 'show' để kích hoạt hiệu ứng biến mất
            messageSuccess.classList.remove('show');
            localStorage.removeItem('language-changed');
        }, 2500);
    }
});

const translations = {
    EN: {

        //Slogan
        'Khẩu Hiệu': 'INSPIRE TO REACH OVER THE WORLD',
        //Name Contact
        'Anh Phong': 'Mr. Phong',
        'Anh Trà': 'Mr. Tra',
        'Anh Kiêm': 'Mr. Kiem',
        //About Translate
        'GT': 'About',
        'GP': 'Solution',
        'LH': 'Contact',
        'DT': 'TEL',
        // Menu Translate
        'SỬA CHỮA - THAY THẾ LINH KIỆN': 'REPAIR AND REPLACEMENT OF PARTS',
        'ĐỌC MÃ VẠCH': 'BARCODE READING',
        'MÁY KIỂM KHO': 'INVENTORY MACHINE',
        'IN MÃ VẠCH': 'BARCODE PRINTING',
        'LINK KIỆN MÃ VẠCH': 'LINK TO BARCODE CASE',
        'MÁY QUÉT INATECK': 'INATECK SCANNER',
        'PHẦN MỀM': 'SOFTWARE',
        // Thông báo thay đổi ngôn ngữ
        'language-change-success': 'Successfully changed the language',
        // Thêm các bản dịch khác ở đây
        'ten-cong-ty': 'TUONG MINH TECHNOLOGY CO., LTD',
        // 
        'dich-vu-cua-chung-toi': 'Our Services',
        'cate-trans2': 'ESSENCE OF THE BARCODE INDUSTRY',
        'cate-trans3': 'WARRANTY AND SHIPPING POLICY',
        'cate-trans4': 'BARCODE LABEL STAMP PRINTING SYSTEM',
        'cate-trans5': 'PDA WAREHOUSE MANAGEMENT SYSTEM - HANDHELD',
        'cate-trans6': 'SALES PROMOTION SYSTEM',
        'cate-trans7': 'AUTOMATED QUEUE MANAGEMENT SYSTEM',
        'cate-trans8': 'FOREIGN PARTNERS',
        // 
        'tai-hcm': 'In Ho Chi Minh City',
        'tai-binh-duong': 'In Binh Duong City',
        'tai-quang-ngai': 'In Quang Ngai',
        'tai-ha-noi': 'In Hanoi Capital',
        'tai-combodia': 'In Combodia',
        'cong-viec': 'Contact Us',
        'tru-so-hcm': 'Head office: 80 Ha Dec, Trung My Tay Ward, District 12',
        'chi-nhanh-1': 'Branch 1: 14/2B Dao Duy Anh, Ward 9, Phu Nhuan District, Ho Chi Minh City',
        'chi-nhanh-2': 'Branch 2: 2nd Floor, Hiep Thanh 3 Residential Area, Thu Dau 1 City, Binh Duong',
        'chi-nhanh-3': 'Branch 3 : (about to open)',
        'chi-nhanh-4': 'Branch 4: Niche 622/37, Minh Khai Street, Vinh Huy Ward, Hai Ba Trung District, Hanoi',
        'chi-nhanh-5': 'Branch 5 : 1M, street lum, Sangkat Tek Tla, Khan Sen Sok, Phnom Penh , Cambodia',


    },
    VN: {
        // Thông báo thay đổi ngôn ngữ
        'language-change-success': 'Đã Thay Đổi Ngôn Ngữ Thành Công',
        // Thêm các bản dịch khác ở đây
    },
    // Thêm ngôn ngữ khác ở đây
};

function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate-key]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate-key');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
