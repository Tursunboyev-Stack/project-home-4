document.querySelectorAll('.tabs').forEach(tabs => {
  tabs.querySelectorAll('span').forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.querySelectorAll('span').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });
});
 
document.querySelectorAll('.veh-fav').forEach(fav => {
  fav.addEventListener('click', () => {
    const icon = fav.querySelector('i');
    const on = fav.classList.toggle('active');
    icon.classList.toggle('fa-solid', on);
    icon.classList.toggle('fa-regular', !on);
  });
});
 
const signup = document.getElementById('signup');
if (signup) {
  signup.addEventListener('submit', e => {
    e.preventDefault();
    const btn = signup.querySelector('button');
    btn.textContent = 'Done ✓';
    signup.reset();
    setTimeout(() => (btn.textContent = 'Sign Up'), 2000);
  });
}
 
