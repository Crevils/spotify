// ### Social Link
// - Portfolio - https://kisay.is-a.dev/
// - Twitter - https://x.com/kislayy__
// - Linkedin - https://www.linkedin.com/in/kislayy
// - Instagram - https://instagram.com/kislayy_


export default function convertTime(time) {

  let ret = [0, 0];
  // Do calculations if have time (also !NaN = true).
  if (time) {
    ret = [
      ~~(time % 3600 / 60), // Minutes.
      ~~(time % 60)         // Seconds.
    ];
  }
  // Add item's paddings converting to string.
  ret = ret.map(re => `${re}`.padStart(2, '0'));

  return ret.join(':');
}
