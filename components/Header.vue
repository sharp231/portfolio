<template>
  <header :class="$style.header">
    <nav :class="$style.nav">
      <div :class="$style.logoContainer">
        <h1 :class="$style.logo">Lab</h1>
      </div>
      <ul :class="$style.navLinks">
        <li><a href="#Home" :class="$style.link">Home</a></li>
        <li><a href="#about" :class="style.link">About</a></li>
        <li>
          <a
            href="https://docs.google.com/forms/d/1IzHr0LJN7UERNupOW5KeWtD7Ch5lBxMZ5Bv0Z2Hmcfk/edit"
            :class="style.link"
            target="_blank"
            rel="noopener noreferrer"
            >Contact</a
          >
        </li>
      </ul>
    </nav>
  </header>
</template>

<style module>
.header {
  font-size: 15px;
  text-align: center;
  background-color: black;
  color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
}

.logoContainer {
  display: flex;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}
.navLinks {
  list-style: none;
  display: flex;
  gap: 20px;
}
.link {
  color: white;
  font-size: 1.1rem;
  cursor: pointer;
  padding: 20px 15px;
  transition: 0.4s;
  text-decoration: none;
}
.link:hover {
  color: #f1c40f;
}
</style>
