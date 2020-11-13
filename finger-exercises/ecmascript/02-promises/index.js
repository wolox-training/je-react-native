// Hint: use setInterval, create a new Promise and measure time with Date.now()

// This function doesn't await if the interval is greater than 1000ms
export function delay(time) {
  return new Promise((resolve, reject) => {
    if (time > 1000) {
      reject(new Error('This time is too much !'));
    }
    const startTime = Date.now();
    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      resolve(elapsedTime);
    }, time);
  });
}

export const asyncDelay = delay;
