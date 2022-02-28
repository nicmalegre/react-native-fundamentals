export const listener = (fn = () => {}) => {
  console.log('subscribing to listener...');
  const interval = setInterval(() => {
    console.log('listener updating');
    fn();
  }, 500);

  return () => {
    if (interval) {
      console.log('unsubscribing from listener...');

      clearInterval(interval);
    }
  };
};
