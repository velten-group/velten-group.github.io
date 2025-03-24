/*
  manages light/dark mode.
*/

{
<<<<<<< HEAD
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "false";
=======
<<<<<<< HEAD
  // save/load user's dark mode preference from local storage
  const loadDark = () => window.localStorage.getItem("dark-mode") === "true";
  const saveDark = (value) => window.localStorage.setItem("dark-mode", value);

  // immediately load saved mode before page renders
  document.documentElement.dataset.dark = loadDark();
=======
  // immediately load saved (or default) mode before page renders
  document.documentElement.dataset.dark =
    window.localStorage.getItem("dark-mode") ?? "false";
>>>>>>> template/main
>>>>>>> main

  const onLoad = () => {
    // update toggle button to match loaded mode
    document.querySelector(".dark-toggle").checked =
      document.documentElement.dataset.dark === "true";
  };

  // after page loads
  window.addEventListener("load", onLoad);

  // when user toggles mode button
  window.onDarkToggleChange = (event) => {
    const value = event.target.checked;
    document.documentElement.dataset.dark = value;
<<<<<<< HEAD
    window.localStorage.setItem("dark-mode", value);
=======
<<<<<<< HEAD
    saveDark(value);
=======
    window.localStorage.setItem("dark-mode", value);
>>>>>>> template/main
>>>>>>> main
  };
}
