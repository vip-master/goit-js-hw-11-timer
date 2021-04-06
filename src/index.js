/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
const days = (time) => Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
const hours = (time) => Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
const mins = (time) => Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
const secs = (time) => Math.floor((time % (1000 * 60)) / 1000);



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.timer = setInterval(() => {
            let var0 = this.targetDate.getTime() - Date.now();
            if (var0 < 0) var0 = -var0;

            document.querySelector('[data-value="days"]').textContent = days(var0)
            document.querySelector('[data-value="hours"]').textContent = hours(var0)
            document.querySelector('[data-value="mins"]').textContent = mins(var0)
            document.querySelector('[data-value="secs"]').textContent = secs(var0)
        }, 900)
    }

    delete() {
        clearInterval(timer)
    }


}

const timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('Jul 17, 2029'),
});