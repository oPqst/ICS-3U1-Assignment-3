function cosineLaw(a, b, C) {
  const c = Math.sqrt(a * a + b * b - 2 * a * b * Math.cos(C * (Math.PI / 180)));
  return c.toFixed(2);
}

document.getElementById("cossine-result").addEventListener("click", function(event) {
  event.preventDefault();
  const a = (document.getElementById("side-a").value);
  const b = (document.getElementById("side-b").value);
  const C = (document.getElementById("angle-c").value);
  const result = cosineLaw(a, b, C);
  document.getElementById("side-c-result").value = result;
})

function asymptopeType(m, n) {
  if (m === n) {
    return "Asymptote is Horizontal";
  }
  else if (m < n) {
    return "The asymptote is the x-axis";
  }
  else if (m > n) {
    const asymtype = ["Linear", "Quadratic", "Cubic", "Quartic", "Quintic",
      "Sextic", "Septic", "Octic", "Nonic", "Decic"];
    return "The asymptote is " + asymtype[m - n - 1];
  }
  else {
    return "Error - Please try again!";
  }
}

document.getElementById("asym-result").addEventListener("click", function(event) {
  event.preventDefault();
  const m = (document.getElementById("value-m").value);
  const n = (document.getElementById("value-n").value);
  const result = asymptopeType(m, n);
  document.getElementById("asym-type").value = result;
})

function piApproximator(piN) {
  let pi = 0;
  for (let i = 0; i < piN; i++) {
    pi += ((Math.pow((-1), i)) / ((2 * i) + 1));
  }
  return (pi * 4);
}

document.getElementById("gregory-result").addEventListener("click", function(event) {
  event.preventDefault();
  const piN = (document.getElementById("value-n-pi").value);
  const result = piApproximator(piN);
  document.getElementById("pi-approx").value = result;
})
