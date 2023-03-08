import Player from "../../node_modules/@vimeo/player";
const throttle = require('lodash.throttle');

const STORAGE_KEY = "videoplayer-current-time";

//VIMEO PLAYER INITIALIZATION
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

//ADDING THROTTLED CURRENTTIME TO LOCALESTORAGE
const currentTime = throttle(function ({ seconds, }) {

    localStorage.setItem(STORAGE_KEY, seconds);
}, 1000);

//USING on() METHOD AND LISTEN A timeupdate EVENT
player.on('timeupdate', currentTime);

//USING setCurrentTime() METHOD
const localStorageContent = localStorage.getItem(STORAGE_KEY);

if (localStorageContent) {
    player.setCurrentTime(localStorageContent);
};

