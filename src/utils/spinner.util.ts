import cliSpinners from 'cli-spinners';
import logUpdate from 'log-update';

let intervalHandle: NodeJS.Timer;

export const showSpinner = (message: string) => {
  const { frames, interval } = cliSpinners.aesthetic;
  let index = 0;

  intervalHandle = setInterval(
    () => logUpdate(frames[(index = ++index % frames.length)] + ` ${message}`),
    interval
  );
};

export const hideSpinner = () => clearInterval(intervalHandle);
