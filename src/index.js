import './styles.css';
class CountdownTimer {
  constructor({targetDate, onTick}) {
    this.intervalId = null;
    this.targetDate = targetDate;
    this.onTick = onTick;

    this.init();
  }

  init() {
    this.intervalId = setInterval(() => {
    const startTime = Date.now();
    const deltaTime = this.targetDate - startTime; 
    const time = this.getTimeComponents(deltaTime);

    this.onTick(time);
}, 1000);

  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

  return { days, hours, mins, secs };
};

  pad(value) {
    return String(value).padStart(2, '0');
  }
};


const countDownTimer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jan 1, 2021'),
  onTick: updateClockface,
});

const refs = {
  daysValue: document.querySelector('[data-value="days"]'),
  hoursValue: document.querySelector('[data-value="hours"]'),
  minsValue: document.querySelector('[data-value="mins"]'),
  secsValue: document.querySelector('[data-value="secs"]'),
}

function updateClockface({ days, hours, mins, secs }) {
  refs.daysValue.textContent = `${days}`;
  refs.hoursValue.textContent = `${hours}`;
  refs.minsValue.textContent = `${mins}`;
  refs.secsValue.textContent =`${secs}`;
};


  /* или */
/* const clockface = document.querySelector('#timer-1');
 function updateClockface({days, hours, mins, secs }) {
  clockface.textContent = `${days}:${hours}:${mins}:${secs}`;
}; */