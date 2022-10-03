import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALKEY = 'videoplayer-current-time';

player.on('timeupdate', throttle(onTimeUpdate, 1000));
function onTimeUpdate(e) {
  localStorage.setItem(LOCALKEY, e.seconds);
}

const savedTime = localStorage.getItem(LOCALKEY);
if (savedTime) {
  const currentTime = JSON.parse(savedTime);
  player.setCurrentTime(currentTime);
}