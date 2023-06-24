const btnBurger = document.querySelector('.burger-menu');
const navigation = document.querySelector('.header__navigation-block ');
const icon = document.querySelector('.icon-close');
const list = document.querySelector('.navigation__list');
const items = document.querySelectorAll('.navigation__item');

console.log(items);

const onBurgerClick = () => {
    navigation.classList.add('open');
    icon.style.display = 'block';
    list.classList.add('open-list');
    // items.forEach(el => el.classListAdd('open-item'))

    icon.addEventListener('click', () => {
        navigation.classList.remove('open');
        icon.style.display = 'none';
        list.classList.remove('open-list');
        // items.forEach(el => el.classListRemove('open-item'))

    })
}

btnBurger.addEventListener('click', onBurgerClick);