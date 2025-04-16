document.addEventListener('click', function (e) {
  const btn = e.target.closest('[data-bs-dismiss="alert"]');
  if (!btn) return;
  const alert = btn.closest('.alert');
  if (!alert) return;

  alert.classList.remove('show');

  if (alert.classList.contains('fade')) {
    alert.addEventListener('transitionend', () => alert.remove(), { once: true });
  } else {
    alert.remove();
  }
});