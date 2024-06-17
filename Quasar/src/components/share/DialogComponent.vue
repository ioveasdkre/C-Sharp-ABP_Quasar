<!-- 客製彈跳視窗 -->
<template>
  <q-dialog v-model="localErrorDialog" @update:modelValue="closeErrDialogClick">
    <q-card class="dialog-container">
      <q-card-section class="text-center">
        <q-icon name="error" size="100px" color="negative" />
        <div class="text-h4">{{ title }}</div>
        <div class="text-h6">{{ message }}</div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="primary" :label="t('ok')" @click="closeErrDialogClick" />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

defineOptions({
  name: 'DialogComponent',
});

const { t } = useI18n();

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  errorDialog: {
    type: Boolean,
    required: true,
    default: false,
  },
});

// 本地狀態來管理 errorDialog
const localErrorDialog = ref(props.errorDialog);

/**
 * 監視 `errorDialog` 屬性並相應地更新 `localErrorDialog` 值。
 *
 * @param {boolean} newVal - `errorDialog` 屬性的新值。
 */
watch(
  () => props.errorDialog,
  (newVal) => {
    localErrorDialog.value = newVal;
  },
);

/**
 * 發出值為“false”的“closeErrDialog”事件。
 */
const emit = defineEmits(['closeErrDialog']);

/**
 * 處理用於關閉錯誤對話框的按一下事件。
 */
const closeErrDialogClick = () => {
  emit('closeErrDialog', false);
};
</script>
