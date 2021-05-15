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
var menuLinks = [
  {
    text: "about",
    href: "/about",
  },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      {
        text: "all",
        href: "/catalog/all",
      },
      {
        text: "top selling",
        href: "/catalog/top",
      },
      {
        text: "search",
        href: "/catalog/search",
      },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      {
        text: "new",
        href: "/orders/new",
      },
      {
        text: "pending",
        href: "/orders/pending",
      },
      {
        text: "history",
        href: "/orders/history",
      },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      {
        text: "profile",
        href: "/account/profile",
      },
      {
        text: "sign out",
        href: "/account/signout",
      },
    ],
  },
];
for (let link of menuLinks) {
  let anchor = document.createElement("a");
  anchor.textContent = link.text;
  anchor.setAttribute(`href`, link.href);

  topMenuEl.appendChild(anchor);
  console.log(anchor);
}

//Task 4
let subMenuEl = document.querySelector(`#sub-menu`);
subMenuEl.style.height = `100%`;
let subMenuBg = `var(--sub-menu-bg)`;
subMenuEl.style.setProperty(`background-color`, subMenuBg);
subMenuEl.classList.add("flex-around");
subMenuEl.style.setProperty(`position`, `absolute`);
subMenuEl.style.setProperty(`top`, `0`);

//Event Listeners

// Functions