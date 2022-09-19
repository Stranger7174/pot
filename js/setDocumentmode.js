(function() {
  let setMode = document.getElementById('setting');

  /**
   * 유저 선호색상모드(prefers-color-scheme)
   * 
   */
   let osScheme = window.matchMedia('(prefers-color-scheme: dark)');
function load() {
  function setColorScheme(stat) {
    let dom = document.documentElement.classList;
    
    dom.toggle("darkmode", osScheme);
  }
  osScheme.addEventListener((metE) => setColorScheme(metE.matches));
  setMode.onchange = setColorScheme;
}
  
  window.addEventListener('DOMContentLoaded', load);

})();