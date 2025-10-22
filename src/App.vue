<script setup>
import { ref } from 'vue';
import Logo from '@/Logo.vue';

const toggle = ref(false);
</script>

<template>
  <header>
    <div class="container">
      <router-link class="logo" to="/">
        <Logo />
      </router-link>
      <button
        class="mobile-toggle"
        @click="toggle = !toggle"
        :class="{ active: toggle }"
      >
        <span class="line line-one"></span><span class="line line-two"></span
        ><span class="line line-three"></span>
      </button>
      <nav class="header-menu" :class="{ 'nav-active': toggle }">
        <ul class="menu" @click="toggle = !toggle">
          <li class="menu__item">
            <router-link to="/about">About</router-link>
          </li>
          <li class="menu__item">
            <router-link to="/work">Work</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <transition name="component-fade" mode="out-in">
    <router-view class="content"></router-view>
  </transition>
</template>
