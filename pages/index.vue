<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const time = ref(0.4);
const value = ref(0.4);
let parent = null;
let childs = [];

const scrollAnimation = () => {
  const elePos = parent.offsetTop;
  const scroll = window.scrollY;
  const windowHeight = window.innerHeight;

  if (scroll > elePos - windowHeight && !parent.classList.contains("play")) {
    childs.forEach((child) => {
      if (!child.classList.contains("fadeUp")) {
        parent.classList.add("play");
        child.style.animationDelay = `${value.value}s`;
        child.classList.add("fadeUp");
        value.value += time.value;
        if (childs.indexOf(child) === childs.length - 1) {
          parent.classList.remove("play");
        }
      }
    });
  } else {
    childs.forEach((child) => {
      child.classList.remove("fadeUp");
    });
    value.value = time.value;
  }
};
onMounted(() => {
  parent = document.querySelector(".delayScroll");
  childs = Array.from(parent.children);
  scrollAnimation();
  window.addEventListener("scroll", scrollAnimation);
});

// const scrollTarget = (target) => {
//   const element =
//     target === "#index" ? document.body : document.querySelector(target);
//   element.scrollIntoView({ behavior: "smooth" });
// };

onUnmounted(() => {
  window.removeEventListener("scroll", scrollAnimation);
});
</script>
<style></style>
<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <title>Lab Official Site</title>
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="./assets/favicon.ico"
      />
      <!-- <link rel="stylesheet" type="text/css" href="/src/assets/style.css" /> -->
    </head>

    <header
      id="header"
      class="wrapper"
      style="font-size: 15px; text-align: center"
    >
      <nav class="nav-container">
        <h1 id="lab">Lab</h1>
        <ul id="nav-links">
          <li><a href="#Home" class="links">Home</a></li>
          <li><a href="#about" class="links">About</a></li>
          <li><a href="/public/contact.html" class="links">Contact</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <div id="mainvisual"><div style="" alt="photo" /></div>

      <h2 class="section-title">About</h2>
      <div class="content">
        <div class="wrapper">
          <div class="delayScroll">
          </div>
        </div>
        <div class="text">
          <h3 class="content-title">Lab</h3>
          <img :src="require('@/assets/12345.jpg')" />
          <p>
            こちらはLabが運営するメディアです。<br />
            Web制作のために参考になればぜひ使ってください。
          </p>
        </div>
      </div>
      
      <section id="world" class="headline">
        <h2 id="profile" class="section-title">プログラミングの世界</h2>
        <ul>
          <li>
            <div class="delayScroll">
              <img :src="require('@/assets/Design.jpg')" />
            </div>
            <h3 class="content-title">Web制作</h3>
            <p>
              法人・個人向けにWebサイトを制作することです。
              ホームページ制作やサイト制作とも呼ばれます。
              Web制作を行うことで、コンテンツの発信や、自社サービス・アプリとの連携などが可能になります。
            </p>
          </li>
          <li>
            <div class="delayScroll">
              <img src="https://d.kuku.lu/6ezh2bxvc" />
            </div>
            <h3 class="content-title">Webデザイン</h3>
            <p>
              ウェブサイトやウェブアプリケーションの外観やユーザーインターフェース（UI）を計画し、構築するプロセスやスキルのことを行います。
            </p>
          </li>
        </ul>
      </section>
    </main>

    <h2 class="font_2" style="font-size: 15px; text-align: center">
      <a href="#index">TOP</a>
    </h2>
    <footer id="footer">
      <p>&copy; 2024 Profile</p>
    </footer>
  </div>
</template>

<style>
body {
  color: #383e45;
  font-size: 1rem;
  position: relative;
  height: 100vh;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
  text-decoration: none;
  text-align: center;
}

nav {
  background-color: #191e24f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 50px;
  padding: 15px 50px;
  box-shadow: 10px 10px 10px;
  /* color:(128, 128, 128, 0.548); */
  color: white;
  position: relative;
}

nav ul {
  list-style-type: none;
  display: flex;
  align-items: center;
  gap: 20px;
}

a {
  text-decoration: none;
}

.delayScroll img {
  width: 250px;
  height: 250px;
  border-radius: 3%;
}

li {
  list-style: none;
  width: 70px;
  text-align: center;
}
li a {
  font-size: 1.1rem;
  cursor: pointer;
  padding: 20px 15px;
  transition: 0.4s;
  color: white;
}
li a:hover {
  /* color: #f1c40f; */
  /* border-bottom: 4px #f1c40f solid; */
  /* transition: 0.4s; */
  /* border: none; */
  font-weight: bold;
  letter-spacing: 3px;
}

.hide {
  top: 70px;
}

.headline {
  max-width: 960px;
  margin: 0 auto 100px auto;
  padding: 0 4%;
  text-align: center;
}

/*-------------------------------------------
ヘッダー
-------------------------------------------*/
.wrapper {
  justify-content: space-between;
  align-items: center;
}

#header ul {
  display: flex;
  padding: 10px 0;
}

#header li {
  margin-left: 30px;
}

#header li a {
  color: white;
  font-size: 20px;
}

#header li a:hover {
  opacity: 0.7;
}

/*-------------------------------------------
Mainvisual
-------------------------------------------*/
#mainvisual {
  margin-bottom: 80px;
}

#mainvisual img {
  width: 100%;
  max-width: 1920px;
  height: 600px;
  object-fit: cover;
}

/*-------------------------------------------
About
-------------------------------------------*/
#about .content {
  display: flex;
  justify-content: center;
  align-items: center;
}

#about img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-right: 100px;
  opacity: 0;
}

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.9s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

#about .text {
  text-align: left;
}

/*-------------------------------------------
プロフィール
-------------------------------------------*/
#world ul {
  display: flex;
  justify-content: space-between;
}

#world li {
  width: 32%;
}

/*-------------------------------------------
footer
-------------------------------------------*/
#footer {
  font-size: 10px;
  padding: 10px 0;
  text-align: center;
}

h2.font_2 a {
  color: black;
}

/*-------------------------------------------
SP
-------------------------------------------*/
/* @media screen and (max-width: 700px) { */
/*-------------------------------------------
  About
  -------------------------------------------*/
#about .content {
  flex-direction: column;
}
.section-title {
  font-size: 30px;
  border-left: 0.3em solid rgb(0, 0, 0);
  padding-bottom: 0.5em;
}

#about img {
  margin-right: 0;
}
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
  padding: 10px;
  margin-right: -10px;
}

nav {
  position: relative;
  padding: 15px 20px;
}
/* } */
</style>
