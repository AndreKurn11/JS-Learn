function maskEmail(email) {
  let at = email.indexOf("@");
  let acc = email.slice(1, (at - 1));
  return email = email.replace(acc, "*".repeat(acc.length));
}

let email; 

email = "andre@gmail.com";
console.log(maskEmail(email));