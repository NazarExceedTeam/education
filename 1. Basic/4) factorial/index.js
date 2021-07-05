function factorial(n) {
  let i=1, r=1;
  for(i=1;i<=n;i++){
      r=r*i;
  }
  return (r);
}

window.factorial = factorial;

export default factorial;
