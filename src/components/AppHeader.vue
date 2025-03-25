<template>
    <header class="header">
      <div class="container">
        <div class="header-top__container">
          <div class="header-top__one">
            <div class="logo">
              <router-link to="/">
                <img src="/images/Frame 632418.svg" alt="logo">
              </router-link>
            </div>
            <div class="header-top__one__search-busket">
              <div class="header-top__one__search-busket__search">
                <router-link to="/catalog" class="header-top__one__search-busket__search">
                  <img class="header-top__one__search-busket__search-img" src="/images/header/Group 1022697.svg" alt="search logo">
                  <h3 class="header-top__one__search-busket__search-text">ПОИСК</h3>
                </router-link>
              </div>
              <div class="header-top__one__search-busket__busket">
                <router-link to="/busket" class="header-top__one__search-busket__busket">
                  <img class="header-top__one__search-busket__busket-img" src="/images/header/Vector 214.svg" alt="busket logo">
                  <h3 class="header-top__one__search-busket__busket-text">КОРЗИНА</h3>
                </router-link>
              </div>
            </div>
          </div>
          <div class="header-top__two">
            <div v-if="sidebar" class="header-top__two-overlay" @click="toOpenSideBar"></div>
            <ul class="header-top__two-ul">
              <li class="header-top__two-li header-top__two-li-sidebar" @click="toOpenSideBar">
                <div>Каталог товаров</div>
                <div class="header-top__two__side-bar">
                  <div class="header-top__two__side-bar__line"></div>
                  <div class="header-top__two__side-bar__line"></div>
                  <div class="header-top__two__side-bar__line"></div>
                </div>
              </li>
              <transition name="header-top__two-sidebar">
                <div v-if="sidebar" class="header-top__two-sidebar">
                  <button class="header-top__two-sidebar__close-btn" @click="toOpenSideBar">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="15" y1="9" x2="9" y2="15"></line>
                      <line x1="9" y1="9" x2="15" y2="15"></line>
                    </svg>
                  </button>
                  <h2>test</h2>
                </div>
              </transition>
              <li class="header-top__two-li"><router-link class="header-top__two-li" to="/catalog">Акции</router-link></li>
              <li class="header-top__two-li" @click="$emit('scrollToFooter')">О нас</li>
              <li class="header-top__two-li" @click="$emit('scrollToFooter')">Контакты</li>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <router-view></router-view>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      sidebar:false,
    };
  },
  computed: {
    
  },
  methods: {
    toOpenSideBar(){
      this.sidebar = !this.sidebar
    }
  },
  created() {
    
  }
};
</script>