const toggleTheme = document.getElementById('toggle-theme');
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (isDarkMode) {
    document.documentElement.classList.add('dark');
    toggleTheme.classList.remove('bi-brightness-high-fill');
    toggleTheme.classList.add('bi-moon-stars-fill');
}

toggleTheme.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark');
    if (document.documentElement.classList.contains('dark')) {
        toggleTheme.classList.remove('bi-brightness-high-fill');
        toggleTheme.classList.add('bi-moon-stars-fill');
    } else {
        toggleTheme.classList.remove('bi-moon-stars-fill');
        toggleTheme.classList.add('bi-brightness-high-fill');
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#n-list a");
    const sections = document.querySelectorAll("section");

    function changeActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 180 < sections[index].offsetTop) { }

        navLinks.forEach((link) => link.classList.remove("font-bold"));
        navLinks[index].classList.add("font-bold");
    }

    changeActiveLink();
    window.addEventListener("scroll", changeActiveLink);
});
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    function showSectionsOnScroll() {
        const scrollPosition = window.scrollY + window.innerHeight; // موضع التمرير + ارتفاع النافذة

        sections.forEach((section) => {
            if (scrollPosition > section.offsetTop) {
                section.classList.add("visible"); // إضافة الفئة عند الوصول إلى القسم
            }
        });
    }

    // استدعاء الدالة عند تحميل الصفحة
    showSectionsOnScroll();
    // إضافة حدث التمرير
    window.addEventListener("scroll", showSectionsOnScroll);
});