window.onload = (function () {

  window.addEventListener("scroll", () => {
    let header = document.querySelector('.header');
    header.classList.toggle("header--sticky", window.scrollY > 0);
  }, { passive: true })


  //dropdown-menu
  const dropdownMenus = document.querySelectorAll('.dropdown-menu');

  if (dropdownMenus.length !== 0) {

    const openDropDown = (element) => element.classList.add('dropdown-menu--active');
    const closeDropDown = (element) => element.classList.remove('dropdown-menu--active');

    const closeAllDropDowns = () => {
      dropdownMenus.forEach(el => {
        closeDropDown(el);
      })
    }

    dropdownMenus.forEach(el => {
      const head = el.querySelector('.dropdown-menu__head');
      head.addEventListener('click', (event) => {

        const isActive = el.classList.contains('dropdown-menu--active');
        closeAllDropDowns();

        isActive ? closeDropDown(el) : openDropDown(el);
      })

      document.addEventListener('click', (event) => {
        if (!event.target.closest('.dropdown-menu')) {
          closeDropDown(el);
        }
      })
    })
  }


  const burgerBtn = document.querySelector('.header__burger-btn');
  const headerNav = document.querySelector('.header__nav');
  const headerMenuListItems = document.querySelectorAll('.header__menu-list .menu-list__item');



  const toggleBurgerMenu = () => {
    burgerBtn.classList.toggle('burger-btn--active');
    headerNav.classList.toggle('header__nav--active');
  }

  burgerBtn.addEventListener('click', toggleBurgerMenu);

  headerMenuListItems.forEach(el => el.addEventListener('click', toggleBurgerMenu));




  //swiper

  let swiper = new Swiper(".mySwiper", {
    spaceBetween: 10,
    effect: "coverflow",
    navigation: {
      nextEl: ".comics__btn-next",
      prevEl: ".comics__btn-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



  




})()
