'use strict';

var Beat = function(isLongBeat) {
  var active = false;

  function isActive() {
    return active;
  }

  function activate() {
    active = true;
  }

  function deactivate() {
    active = false;
  }

  function toggle() {
    active = (active ? false : true);
  }

  function isLong() {
    return isLongBeat;
  }

  // Return public functions
  return {
    isActive: isActive,
    activate: activate,
    deactivate: deactivate,
    toggle: toggle,
    isLong: isLong
  }
};
