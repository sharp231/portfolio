<!-- <template>
  <div>
    <div ref="animatedElement" class="animate"></div>
  </div> -->

<template>
  <div id="mainvisual">
    <img
      src="@/assets/libray.jpg"
      alt="photo"
      width="1920"
      height="600"
      style="width: 100%; height: auto"
    />
  </div>

  <div>
    <h2 id="about" class="section-title" aria-label="About section">About</h2>
    <div class="content">
      <div class="wrapper">
        <div class="delayScroll" ref="animatedElement"></div>
        <img src="@/assets/neko.jpg" alt="neko" />
      </div>
      <div class="text">
        <h3 class="cotent-title">Lab</h3>
        <p>
          こちらはLabが運営するメディアです。<br />
          Web制作のために参考になればぜひ使ってください。
        </p>
      </div>
    </div>

    <section id="world" aria-labelledby="profile">
      <h2 id="profile" class="section-tilte">プログラミングの世界</h2>
      <ul>
        <li>
          <div class="delayScroll">
            <img src="@/assets/onair.jpg" alt="onair" />
          </div>
          <h3 class="cotent-title">Web制作</h3>
          <p>
            法人・個人向けにWebサイトを制作することです。
            ホームページ制作やサイト制作とも呼ばれます。
            Web制作を行うことで、コンテンツの発信や、自社サービス・アプリとの連携などが可能になります。
          </p>
        </li>
        <li>
          <div class="delayScroll">
            <img src="@/assets/Design.jpg" alt="Design" />
          </div>
          <h3 class="cotent-title">Webデザイン</h3>
          <p>
            ウェブサイトやウェブアプリケーションの外観やユーザーインターフェース（UI）を計画し、構築するプロセスやスキルのことを行います。
          </p>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    gsap.from(this.$refs.animatedElement, {
      duration: 0.5,
      opacity: 0,
      y: 50,
    });
  },
};
</script>
