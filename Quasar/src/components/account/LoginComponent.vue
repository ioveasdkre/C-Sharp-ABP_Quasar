<template>
  <div class="login-container row justify-center items-center">
    <q-card class="login-card">
      <q-card-section>
        <div class="text-subtitle1 text-center">
          {{ t('currentTenant') }}: {{ t('notSelected') }} (
          <a href="#">{{ t('change') }}</a
          >)
        </div>
      </q-card-section>

      <q-separator />

      <q-card-section>
        <div class="text-h5 text-center">{{ t('logIn') }}</div>
      </q-card-section>

      <q-card-section>
        <q-form @submit="loginSubmit" class="q-gutter-md">
          <q-input
            outlined
            name="userNameOrEmailAddress"
            :label="t('userNameOrEmailAddress')"
            type="text"
            maxlength="256"
            :rules="[
              (val) => (val && val.length > 0) || t('thisFieldIsRequired'),
            ]"
            v-model="userNameOrEmailAddress"
          >
            <template v-slot:append>
              <q-icon
                name="person"
                :alt="t('userNameOrEmailAddress')"
                :title="t('userNameOrEmailAddress')"
                color="grey"
                size="md"
              />
            </template>
          </q-input>
          <q-input
            outlined
            name="password"
            :label="t('password')"
            type="password"
            maxlength="32"
            :rules="[
              (val) => (val && val.length > 0) || t('thisFieldIsRequired'),
            ]"
            v-model="password"
          >
            <template v-slot:append>
              <q-icon
                name="lock"
                :alt="t('password')"
                :title="t('password')"
                color="grey"
                size="md"
              />
            </template>
          </q-input>

          <q-checkbox v-model="rememberMe" :label="t('rememberMe')" />

          <q-card-actions align="right">
            <q-btn
              color="primary"
              type="submit"
              :label="t('logIn')"
              :class="{ 'cursor-not-allowed': !isPwdValid }"
              :disable="!isPwdValid"
            />
          </q-card-actions>
        </q-form>
      </q-card-section>

      <q-card-section class="bg-grey-3 text-center">
        <language-component />
      </q-card-section>
    </q-card>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageComponent from 'components/language/LanguageComponent.vue';
import { useLoginStore } from 'src/stores/account/loginStore';

/**
 * 定義 Login Component 的選項。
 */
defineOptions({
  name: 'LoginComponent',
});

const loginStore = useLoginStore();
const { t } = useI18n();

const userNameOrEmailAddress = ref('');
const password = ref('');
const rememberMe = ref(false);

/**
 * 檢查帳號密碼是否有效的計算屬性。
 *
 * @returns {boolean} 如果使用者名稱/電子郵件地址和密碼都不為空，則為 true，否則為 false。
 */
const isPwdValid = computed(() => {
  return (
    userNameOrEmailAddress.value.trim() !== '' && password.value.trim() !== ''
  );
});

/**
 * 提交登入表單。
 * 根據輸入值設定 loginStore 屬性的值。
 * 呼叫loginStore的登入方法。
 *  */
const loginSubmit = async () => {
  loginStore.userNameOrEmailAddress = userNameOrEmailAddress.value;
  loginStore.password = password.value;
  loginStore.rememberClient = rememberMe.value;
  loginStore.isPwdValid = isPwdValid.value;
  await loginStore.login();
};
</script>
