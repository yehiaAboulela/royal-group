import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.isSubmitting = true;
      this.showSuccessMessage = false;
      this.showErrorMessage = false;

      // Simulate API call
      setTimeout(() => {
        this.isSubmitting = false;

        // Simulate success (you can replace this with actual API call)
        const success = Math.random() > 0.2; // 80% success rate for demo

        if (success) {
          this.showSuccessMessage = true;
          form.resetForm();

          // Hide success message after 5 seconds
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        } else {
          this.showErrorMessage = true;

          // Hide error message after 5 seconds
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        }
      }, 2000); // Simulate 2 second delay
    }
  }
}
