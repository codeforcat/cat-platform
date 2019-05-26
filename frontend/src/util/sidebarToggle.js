function sidebarToggle() {
  const sidebar = document.getElementById('js-sidebar');
  const sidebarTriggerOpen = document.getElementById('js-sidebar-trigger-open');
  const sidebarTriggerClose = document.getElementById('js-sidebar-trigger-close');
  const contents = document.getElementById('js-contents');

  sidebarTriggerOpen.addEventListener('click', function() {
    sidebar.classList.add('open');
    contents.classList.add('sidebar-is-open');
  }, false);

  sidebarTriggerClose.addEventListener('click', function() {
    sidebar.classList.remove('open');
    contents.classList.remove('sidebar-is-open');
  }, false);
}

export default sidebarToggle;
