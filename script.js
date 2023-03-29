setInterval(() => {
  let d = new Date();

  let D = d.getDay();
  DD.innerHTML = D;
  let Mon = d.getMonth();
  MM.innerHTML = Mon;
  let Y = d.getFullYear();
  YY.innerHTML = Y;

  let H = d.getHours();
  Hr.innerHTML = H;
  let M = d.getMinutes();
  mn.innerHTML = M;
  let S = d.getSeconds();
  sc.innerHTML = S;
  let AMPM = (H > 11 ? 'PM' : 'AM');
  am.innerHTML = AMPM;




}, 1000);