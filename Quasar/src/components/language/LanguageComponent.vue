<template>
  <q-img
    class="language-img q-mx-xs cursor-pointer"
    src="~/assets/images/language/us.png"
    alt="English"
    title="English"
    contain
    loading="lazy"
    spinner-color="blue"
    @click="changeLanguage('en-US')"
  />
  <q-img
    class="language-img q-mx-xs cursor-pointer"
    src="~/assets/images/language/tw.png"
    alt="繁體中文"
    title="繁體中文"
    contain
    loading="lazy"
    spinner-color="blue"
    @click="changeLanguage('zh-TW')"
  />
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'LanguageComponent',
});

const { locale } = useI18n();

/**
 * 改變當前語言
 */
const changeLanguage = (lang: string) => {
  locale.value = lang;
};
</script>
