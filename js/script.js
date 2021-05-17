//Begin Dom events

//Cached Element References

//Task 1
let mainEl = document.querySelector("main");
let mainBg = "var(--main-bg)";
mainEl.style.setProperty("background-color", mainBg);
mainEl.innerHTML = "<h1>SEI Rocks!</h1>";
mainEl.classList.add(`flex-ctr`);

//Task 2
let topMenuEl = document.querySelector(`#top-menu`);
topMenuEl.style.height = `100%`;
let topMenuBg = `var(--top-menu-bg)`;
topMenuEl.style.setProperty(`background-color`, topMenuBg);
topMenuEl.classList.add(`flex-around`);


//Task 3
let menuLinks = [
  {
    text: 'about',
    href: '/about'
  },
  {
    text: 'catalog',
    href: '#',
    subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders',
    href: '#',
    subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account',
    href: '#',
    subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
];

for (let link of menuLinks) {
  let a = document.createElement("a");
  a.textContent = link.text;
  a.setAttribute(`href`, link.href);
  topMenuEl.appendChild(a);
  a.subLinks = link.subLinks;
}

//Task 4
let subMenuEl = document.getElementById(`sub-menu`);
subMenuEl.style.height = `100%`;
let subMenuBgColor = `var(--sub-menu-bg)`;
subMenuEl.style.setProperty(`background-color`, subMenuBgColor);
subMenuEl.classList.add("flex-around");
subMenuEl.style.setProperty(`position`, `absolute`);
subMenuEl.style.setProperty(`top`, `0`);

//Task 5
//Array of a links
let topMenuLinks = document.querySelectorAll(`a`);
let showingSubMenu = false;

//Event Listeners
topMenuEl.addEventListener(`click`, handleTopMenuClick)
subMenuEl.addEventListener(`click`, handleSubMenuClick)

// Functions
function handleTopMenuClick(e) {
  e.preventDefault();
  if (e.target.matches(`a`)) {
    if (e.target.classList.contains(`active`)) {
      e.target.classList.remove(`active`)
      showingSubMenu = false;
      subMenuEl.style.setProperty(`top`, `0`);
    }
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove(`active`)
    }
    console.log(e.target.textContent)

  }
  e.target.classList.add(`active`);

  if (e.target.subLinks) {
    showingSubMenu = true;
    if (showingSubMenu) {
      buildSubMenu(e.target.subLinks)
      subMenuEl.style.setProperty(`top`, `100%`);
    }
    else {
      showingSubMenu = false
    }
  } else {
    showingSubMenu = false
    subMenuEl.style.setProperty(`top`, `0`)
  }
  return;
}
function handleSubMenuClick(e) {
  e.preventDefault();
  if (e.target.matches(`a`)) {
    console.log(e.target.textContent)
    showingSubMenu = false;
    subMenuEl.style.setProperty(`top`, `0`);
    for (let i = 0; i < topMenuLinks.length; i++) {
      topMenuLinks[i].classList.remove(`active`)
    }
    mainEl.innerHTML = `<h1>${e.target.textContent.toUpperCase()}</h1>`;
    
    return
  }
}
function buildSubMenu(arr) {
  subMenuEl.innerHTML = null;
  for (let link of arr) {
    let aTag = document.createElement(`a`);
    aTag.setAttribute(`href`, link.href);
    aTag.textContent = link.text;
    subMenuEl.appendChild(aTag);
  }
}








