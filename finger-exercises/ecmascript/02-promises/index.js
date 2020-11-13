// Hint: use setInterval, create a new Promise and measure time with Date.now()

export function delay(time) {
  return new Promise((resolve) => {
    const startTime = Date.now();
    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      resolve(elapsedTime);
    }, time);
  });
}

export function asyncDelay() {

}
