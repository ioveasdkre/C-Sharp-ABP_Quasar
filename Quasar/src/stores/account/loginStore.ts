import { defineStore } from 'pinia';
import { ref } from 'vue';
import { Cookies } from 'quasar';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';
import { tokenAuthService } from 'src/api/tokenAuth/tokenAuthService';
import { AuthenticateDto } from 'src/api/tokenAuth/dto/authenticateDto';
import { cookieConfig } from 'src/config/cookieConfig';
import { homeRouterPath } from 'src/router/homeRouter';
import { MessageService } from 'src/services/messageService';

/**
 * 處理登入相關的狀態和方法
 */
export const useLoginStore = defineStore('user', () => {
  const { t } = useI18n();

  const userNameOrEmailAddress = ref('');
  const password = ref('');
  const rememberClient = ref(false);
  const isPwdValid = ref(false);
  const isLoginSuccess = ref(false);
  const router = useRouter();

  const loginFail = () =>
    MessageService.error(
      t('loginFailed'),
      t('invalidUserNameOrPassword'),
      false,
      {
        confirmButtonText: t('ok'),
      },
    );

  const login = async () => {
    try {
      if (isPwdValid.value) {
        const loginDto: AuthenticateDto = {
          userNameOrEmailAddress: userNameOrEmailAddress.value,
          password: password.value,
          rememberClient: rememberClient.value,
        };
        const result = await tokenAuthService.authenticateAsync(loginDto);
        const success = result.success;
        const res = result.result;

        if (success && !!res) {
          const accessToken = res.accessToken;
          const expireInSeconds = res.expireInSeconds;
          const expires = rememberClient.value
            ? new Date(new Date().getTime() + 1000 * expireInSeconds)
            : undefined;

          Cookies.set(cookieConfig.accessToken, accessToken, {
            sameSite: 'Strict',
            expires,
          });

          router.push(homeRouterPath.homeIndex);
        } else {
          loginFail();
        }
      } else {
        loginFail();
      }
    } catch (_error) {
      loginFail();
    }
  };

  return {
    userNameOrEmailAddress,
    password,
    rememberClient,
    isPwdValid,
    isLoginSuccess,
    login,
  };
});
