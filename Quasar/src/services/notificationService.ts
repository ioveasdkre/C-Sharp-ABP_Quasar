import Swal, { SweetAlertOptions, SweetAlertCustomClass } from 'sweetalert2';

export class NotificationService {
  private static Toast = Swal.mixin({
    toast: true,
    position: 'bottom-end',
    showConfirmButton: false,
    timer: 3000,
  });

  static showNotification(
    _type: 'info' | 'success' | 'warning' | 'error',
    message: string,
    title?: string,
    options: Partial<
      SweetAlertOptions & { customClass?: SweetAlertCustomClass }
    > = {},
  ) {
    const iconHtml =
      options.customClass && typeof options.customClass !== 'string'
        ? `<i class="mr-2 text-light ${options.customClass.icon}"></i>`
        : '';

    if (title) {
      options.title = `${iconHtml}<span class="text-light">${title}</span>`;
    }

    options.html = `${title ? '' : iconHtml}<span class="text-light">${message}</span>`;
    this.Toast.fire(options as SweetAlertOptions);
  }

  static success(
    message: string,
    title?: string,
    options: Partial<SweetAlertOptions> = {},
  ) {
    this.showNotification('success', message, title, {
      background: '#34bfa3',
      customClass: { icon: 'fas fa-check-circle' },
      ...options,
    });
  }

  static info(
    message: string,
    title?: string,
    options: Partial<SweetAlertOptions> = {},
  ) {
    this.showNotification('info', message, title, {
      background: '#36a3f7',
      customClass: { icon: 'fas fa-info-circle' },
      ...options,
    });
  }

  static warn(
    message: string,
    title?: string,
    options: Partial<SweetAlertOptions> = {},
  ) {
    this.showNotification('warning', message, title, {
      background: '#ffb822',
      customClass: { icon: 'fas fa-exclamation-triangle' },
      ...options,
    });
  }

  static error(
    message: string,
    title?: string,
    options: Partial<SweetAlertOptions> = {},
  ) {
    this.showNotification('error', message, title, {
      background: '#f4516c',
      customClass: { icon: 'fas fa-exclamation-circle' },
      ...options,
    });
  }
}
