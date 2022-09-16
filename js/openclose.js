(function() {
  let icons = document.getElementById('main');

  const colormord = document.querySelector('.setting');

  function openFolder() {
    let selecFolder = event.path[1];

    let getId = selecFolder.getAttribute('id');
    
    let windows = {
      'document': document.getElementById('document'),
      'content': document.getElementById('page'),
      'staem': document.getElementById('game'),
      'Mylog': document.getElementById('log')
    }
    // console.log(getId);

    if(getId == 'domFolder') {
      windows.document.style.display = "block";
    } else if(getId == 'pagFolder') {
      windows.content.style.display = "block";
    } else if(getId == 'gamFolder') {
      windows.staem.style.display = "block";
    } else if(getId == 'logFolder') {
      windows.Mylog.style.display = "block";
    }

    // console.log('endf');
  }
  icons.onclick = openFolder;

  // let prefersColorScheme = document.getElementById('colorScheme');

  function setColorScheme() {
    // let osScheme = 
    console.dir(window.colo);
  }

  // prefersColorScheme.onchange = setColorScheme;
})();