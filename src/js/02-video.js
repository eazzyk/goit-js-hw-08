import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  throttle(function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);

    // console.log('played the video!');
  }, 1000)
);
const currentTime = JSON.parse(localStorage.getItem(STORAGE_KEY));
if (currentTime !== null) {
  player.setCurrentTime(currentTime);
}
