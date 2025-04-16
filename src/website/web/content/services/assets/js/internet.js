/* internet.js */
document.addEventListener('DOMContentLoaded', () => {
  const faqQuestions = document.querySelectorAll('.faq-question');
  const providerLogos = document.querySelectorAll('.provider-logos img');
  const hotlineSection = document.querySelector('.hotline-section');

  faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
          question.classList.toggle('active');
          const answer = question.nextElementSibling;
          if (answer) {
              answer.style.maxHeight = answer.style.maxHeight === '0px' || !answer.style.maxHeight ? answer.scrollHeight + 'px' : '0px';
          }
      });
  });

  providerLogos.forEach(img => {
      img.addEventListener('click', () => {
          const company = img.alt;
          const number = img.dataset.number;
          const message = `The hot-line number of ${company} company is copied: ${number}`;

          navigator.clipboard.writeText(number).then(() => {
              const alertDiv = document.createElement('div');
              alertDiv.classList.add('alert', 'alert-success');
              alertDiv.textContent = message;
              hotlineSection.appendChild(alertDiv);

              setTimeout(() => {
                  alertDiv.remove();
              }, 3000);
          }).catch(err => {
              console.error('Failed to copy number: ', err);
              alert(`Could not copy the number for ${company}. Please copy it manually: ${number}`);
          });
      });
  });
});