/* delivery.js */
document.addEventListener('DOMContentLoaded', () => {
  const categorySelect = document.getElementById('category');
  const itemSelectionDiv = document.getElementById('item-selection');
  const productNameInput = document.getElementById('product-name');
  const addressInput = document.getElementById('address');
  const nextBtn1 = document.getElementById('nextBtn1');
  const nextBtn2 = document.getElementById('nextBtn2');
  const nextBtn3 = document.getElementById('nextBtn3');
  const prevBtn2 = document.getElementById('prevBtn2');
  const prevBtn3 = document.getElementById('prevBtn3');
  const prevBtn4 = document.getElementById('prevBtn4');
  const submitOrderBtn = document.getElementById('submitOrderBtn');
  const orderContainer = document.querySelector('.order-container');
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const step4 = document.getElementById('step4');

  let currentStep = 1;

  function showStep(stepNumber) {
      const current = document.getElementById(`step${stepNumber}`);
      if (current) {
          current.classList.add('active');
          current.classList.remove('hidden');
          currentStep = stepNumber;
          orderContainer.className = `order-container steps-${currentStep}`;
      }
  }

  function hideStep(stepNumber) {
      const current = document.getElementById(`step${stepNumber}`);
      if (current) {
          current.classList.remove('active');
          current.classList.add('hidden');
          currentStep--;
          orderContainer.className = `order-container steps-${currentStep}`;
      }
  }

  function loadItemOptions(category) {
      itemSelectionDiv.innerHTML = ''; // Clear previous options
      let element;

      switch (category) {
          case 'restaurant':
              element = document.createElement('select');
              element.innerHTML = `
                  <option value="">Select Restaurant</option>
                  <option value="pizza-pan">Pizza Pan</option>
                  <option value="chickers">Chickers</option>
                  <option value="kfc">KFC</option>
                  <option value="maxs">Max's</option>
                  <option value="khat3am">Khat3am</option>
                  <option value="stakoza">Stakoza</option>
                  <option value="other">Other</option>
              `;
              break;
          case 'supermarket':
              element = document.createElement('select');
              element.innerHTML = `
                  <option value="">Select Supermarket</option>
                  <option value="kazyon">Kazyon</option>
              `;
              break;
          case 'patisserie':
              element = document.createElement('select');
              element.innerHTML = `
                  <option value="">Select Patisserie</option>
                  <option value="kreez">Kreez</option>
                  <option value="el-saidy">El-Saidy - Gant El-Fawakeh</option>
                  <option value="bondoq">BondoQ</option>
              `;
              break;
          case 'pharmacy':
          case 'other':
              element = document.createElement('input');
              element.type = 'text';
              element.placeholder = `Enter ${category === 'pharmacy' ? 'medicine name' : 'product details'}`;
              element.id = 'custom-item';
              break;
          default:
              break;
      }

      if (element) {
          itemSelectionDiv.appendChild(element);
      }
  }

  const urlParams = new URLSearchParams(window.location.search);
  const defaultCategory = urlParams.get('category');

  // Initialize all steps as hidden except the first
  [step2, step3, step4].forEach(step => step.classList.add('hidden'));
  step1.classList.add('active');
  orderContainer.className = `order-container steps-1`;

  if (defaultCategory === 'pharmacy') {
      categorySelect.value = 'pharmacy';
      loadItemOptions('pharmacy');
      showStep(2);
  }

  nextBtn1.addEventListener('click', () => {
      if (categorySelect.value) {
          loadItemOptions(categorySelect.value);
          showStep(2);
      } else {
          alert('Please choose a category.');
      }
  });

  prevBtn2.addEventListener('click', () => {
      hideStep(2);
  });

  nextBtn2.addEventListener('click', () => {
      if (itemSelectionDiv.querySelector('select') || productNameInput.value) {
          showStep(3);
      } else {
          alert('Please choose an item or enter the product name.');
      }
  });

  prevBtn3.addEventListener('click', () => {
      hideStep(3);
  });

  nextBtn3.addEventListener('click', () => {
      if (productNameInput.value) {
          showStep(4);
      } else {
          alert('Please enter the product name.');
      }
  });

  prevBtn4.addEventListener('click', () => {
      hideStep(4);
  });

  submitOrderBtn.addEventListener('click', () => {
      if (addressInput.value) {
          const deliveryTime = Math.floor(Math.random() * (20 - 15 + 1)) + 15;
          alert(`Your order will come after ${deliveryTime} minutes.`);
          setTimeout(() => {
              window.location.reload();
          }, 100);
      } else {
          alert('Please enter your delivery address.');
      }
  });
});