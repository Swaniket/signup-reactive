import { FormGroup } from '@angular/forms';

export function PasswordChecker(
  controlName: string,
  CompareControlName: string
) {
  return (formGroup: FormGroup) => {
    const password = formGroup.controls[controlName];
    const confirmPassword = formGroup.controls[CompareControlName];

    password.value !== confirmPassword.value
      ? confirmPassword.setErrors({ mustmatch: true })
      : confirmPassword.setErrors(null);
  };
}

// Class way to doing things
// export class PasswordChecker extends FormGroup () {}
