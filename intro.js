/* Neuro Bob+ — animation d'ouverture. Script classique, chargé de façon bloquante
   dans <head> (≈1 Ko) pour poser la classe avant le premier rendu : pas de flash. */
(function () {
  var root = document.documentElement;
  var play = false;
  try {
    var seen = sessionStorage.getItem("nb-intro-seen");
    var prefs = JSON.parse(localStorage.getItem("neuro-bob-display") || "{}");
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    play = !seen && !reduce && !prefs.motion && !prefs.simple;
    if (play) sessionStorage.setItem("nb-intro-seen", "1");
  } catch (e) {
    play = false; /* stockage indisponible : on ne rejoue pas l'intro à chaque page */
  }
  if (!play) return;
  root.classList.add("nb-intro-play");

  var ended = false;
  var timer = setTimeout(end, 2100); /* + 0,3 s de fondu = 2,4 s */
  function end() {
    if (ended) return;
    ended = true;
    clearTimeout(timer);
    document.removeEventListener("keydown", end, true);
    document.removeEventListener("pointerdown", end, true);
    root.classList.add("nb-intro-out");
    setTimeout(function () {
      root.classList.remove("nb-intro-play", "nb-intro-out");
      var el = document.getElementById("nb-intro");
      if (el) el.remove();
    }, 300);
  }
  /* Toute touche (Échap, Tab, Entrée…) passe l'intro ; on n'appelle pas
     preventDefault : Tab atteint donc normalement le lien d'évitement. */
  document.addEventListener("keydown", end, true);
  /* Clic / toucher : l'overlay garde pointer-events pendant le fondu,
     le clic de saut ne déclenche donc aucun bouton situé dessous. */
  document.addEventListener("pointerdown", end, true);
})();
