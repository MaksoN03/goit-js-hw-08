import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const STORAGE_KEY = 'storageKey'
const STORAGE_VALUE = 'storageValue'
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

const setValueLocalStorage = throttle((STORAGE_KEY, STORAGE_VALUE) => {
  localStorage.setItem(STORAGE_KEY, STORAGE_VALUE);
}, 1000);

const getValueToLocalStorage = STORAGE_KEY => {
  return localStorage.getItem(STORAGE_KEY) ?? 0;
};

player.setCurrentTime(getValueToLocalStorage("videoplayer-current-time"));

player.on('timeupdate', STORAGE_VALUE => {
  setValueLocalStorage("videoplayer-current-time", STORAGE_VALUE.seconds);
});
