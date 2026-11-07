// Replace this with the movement's real email address.
// The forms open the visitor's email app with the message filled in.
const EMAIL = 'kontakt@example.com';

document.querySelectorAll('form[data-subject]').forEach((form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const body = [...new FormData(form)].map(([key, value]) => key + ': ' + value).join('\n');
    location.href = 'mailto:' + EMAIL + '?subject=' + encodeURIComponent(form.dataset.subject) + '&body=' + encodeURIComponent(body);
  });
});
