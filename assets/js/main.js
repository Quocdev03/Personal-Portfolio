// Filters Tab
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tc => {
            tc.classList.remove('filters__active')
        })
        target.classList.add('filters__active')

        tabs.forEach(t => {
            t.classList.remove('filters-tab-active')
        })
        tab.classList.add('filters-tab-active')
    })
})

// Dark Light Theme 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// Chủ đề đã chọn trước đó (nếu người dùng đã chọn)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Chúng tôi có được chủ đề hiện tại mà giao diện có bằng cách xác thực lớp chủ đề tối
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// Chúng tôi xác thực nếu trước đó người dùng đã chọn một chủ đề
if (selectedTheme) {

    // Nếu xác thực được hoàn thành, chúng tôi sẽ hỏi vấn đề là gì nếu chúng tôi kích hoạt hoặc hủy kích hoạt bóng tối
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Kích hoạt / hủy kích hoạt chủ đề theo cách thủ công bằng nút
themeButton.addEventListener('click', () => {

    // Thêm hoặc xóa chủ đề biểu tượng / bóng tối
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // Chúng tôi lưu chủ đề và biểu tượng hiện tại mà người dùng đã chọn
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})

// SCROLL REVEAL ANIMATION 

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

ScrollReveal().reveal('.change-theme');
ScrollReveal().reveal('.profile__border');
ScrollReveal().reveal(`.profile__border`)
ScrollReveal().reveal(`.profile__name`, { delay: 500 })
ScrollReveal().reveal(`.profile__profession`, { delay: 600 })
ScrollReveal().reveal(`.profile__social`, { delay: 700 })
ScrollReveal().reveal(`.loader`, { delay: 750 })
ScrollReveal().reveal(`.profile__buttons`, { delay: 700 })
ScrollReveal().reveal(`.profile__infor-group`, { Interval: 100, delay: 700 })


// kursor
new kursor({
    type: 4,
    color: '#ff0844'
})