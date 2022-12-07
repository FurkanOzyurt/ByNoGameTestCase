require("/src/styles/reset.scss");
require("/src/styles/global.scss");
const Logo = require("./images/bynogame-logo.png");
const headerData = {
  socials: [
    {
      href: "https://www.instagram.com/bynogamecom/",
      icon: "fa-instagram fab",
    },
    {
      href: "https://www.tiktok.com/@bynogame?lang=tr-TR",
      icon: "fa-tiktok fab",
    },
    { href: "https://t.me/ByNoGame", icon: "fa-telegram fab" },
  ],
  topHeaderLink: [
    { name: "MAĞAZALAR" },
    { name: "PARAM" },
    { name: "KAMPANYA" },
    { name: "HABERLER" },
    { name: "KURUMSAL" },
    { name: "YORUMLAR" },
  ],
  logo: Logo,
};

function homePageRender() {
  fetch("/src/layouts/header.html")
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, headerData);
      document.getElementById("header").innerHTML = rendered;
    });
  fetch("/src/layouts/footer.html")
    .then((response) => response.text())
    .then((template) => {
      var rendered = Mustache.render(template, { name: "Luke" });
      document.getElementById("footer").innerHTML = rendered;
    });
}
module.exports = {
  homePageRender,
};
