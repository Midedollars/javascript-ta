// complete the function
function prime (num) {
    if (num > 2 && num % 2 === 0) return false;
    for (var i = 3; i <= Math.sqrt(num); i += 2) {
        if (num % i === 0) return false;
    }
    return num > 1;
}


function solution (arg) {
  return prime(arg);
}

if (typeof require !== "undefined" && require.main === module) {
  if (process.argv.length <= 2) {
    throw Error("Require argument");
  }

  const arg = process.argv[2];
  console.log(solution(arg));
}

module.exports = { solution };
