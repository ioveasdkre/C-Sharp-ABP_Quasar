import Swal, { SweetAlertOptions, SweetAlertResult } from 'sweetalert2';

export class MessageService {
  static showMessage(
    type: 'info' | 'success' | 'warning' | 'error',
    message: string,
    title?: string,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    if (!title) {
      title = message;
      message = '';
    }

    options = options || {};
    options.title = title;
    options.icon = type;
    options.confirmButtonText = options.confirmButtonText || 'Ok';

    if (isHtml) {
      options.html = message;
    } else {
      options.text = message;
    }

    return Swal.fire(options as SweetAlertOptions);
  }

  static info(
    message: string,
    title?: string,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    return this.showMessage('info', message, title, isHtml, options);
  }

  static success(
    message: string,
    title?: string,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    return this.showMessage('success', message, title, isHtml, options);
  }

  static warn(
    message: string,
    title?: string,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    return this.showMessage('warning', message, title, isHtml, options);
  }

  static error(
    message: string,
    title?: string,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    return this.showMessage('error', message, title, isHtml, options);
  }

  static confirm(
    message: string,
    titleOrCallback?: string | ((value: boolean) => void),
    callback?: (value: boolean) => void,
    isHtml: boolean = false,
    options: Partial<SweetAlertOptions> = {},
  ) {
    let title: string | undefined = undefined;

    if (typeof titleOrCallback === 'function') {
      callback = titleOrCallback;
    } else if (titleOrCallback) {
      title = titleOrCallback;
    }

    options = options || {};
    options.title = title || 'Are you sure?';
    options.icon = 'warning';
    options.confirmButtonText = options.confirmButtonText || 'Yes';
    options.cancelButtonText = options.cancelButtonText || 'Cancel';
    options.showCancelButton = true;

    if (isHtml) {
      options.html = message;
    } else {
      options.text = message;
    }

    return Swal.fire(options as SweetAlertOptions).then(
      (result: SweetAlertResult) => {
        if (callback) {
          callback(result.isConfirmed);
        }
      },
    );
  }
}
