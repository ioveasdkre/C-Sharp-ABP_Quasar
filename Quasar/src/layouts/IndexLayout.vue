<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          APS
        </q-toolbar-title>

        <!-- 使用者頭像及選單 -->
        <q-avatar>
          <img
            class="layout-img q-mx-xs q-gutter-sm cursor-pointer"
            src="~/assets/images/user.png"
            alt="使用者頭像"
            title="使用者頭像"
            loading="lazy"
          />
          <q-menu>
            <q-list>
              <q-item clickable v-ripple @click="editProfile">
                <q-item-section>Edit Profile</q-item-section>
              </q-item>
              <q-item clickable v-ripple @click="logout">
                <q-item-section>Logout</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- 左側抽屜內容 -->
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { Cookies } from 'quasar';
import { useRouter } from 'vue-router';
import { cookieConfig } from 'src/config/cookieConfig';
import { accountRouterPath } from 'src/router/accountRouter';

defineOptions({
  name: 'IndexLayout',
});

// 定義左側抽屜開關和狀態
const leftDrawerOpen = ref(false);

// 獲取路由實例
const router = useRouter();

// 切換左側抽屜狀態的方法
const toggleLeftDrawer = () => {
  console.log(leftDrawerOpen.value);

  leftDrawerOpen.value = !leftDrawerOpen.value;
};

// 登出方法
const logout = () => {
  Cookies.remove(cookieConfig.accessToken); // 移除 token
  router.push(accountRouterPath.accountLogin); // 導航至登錄頁面
};

// 編輯使用者資料方法
const editProfile = () => {
  router.push({ name: 'editProfile' }); // 導航至編輯資料頁面
};
</script>
