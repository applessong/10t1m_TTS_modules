import fs from "fs";
// fs.writeFileSync("./test1.txt", "hello");
// console.log(fs.existsSync("./test1.txt", "hello"));

// function aa() {
//   for (let i = 1; i < 6; i++) {
//     (function (x) {
//       setTimeout(function () {
//         console.log(x);
//       }, 1000 * x);
//     })(i);
//   }
// }

// aa();

async function aa(num) {
  if (num == 3) {
    return await num;
  } else {
    console.log("진입하나?");
    setTimeout(function () {
      aa(num + 1);
    }, 500);
  }
}
aa(0).then((answer) => console.log(answer));

// async function aa() {
//   try {
//     let Code = await fs.readFileSync(
//       voiceData.filePath.path + voiceData.filePath.fileName + ".txt"
//     );
//     return Code;
//   } catch {
//     console.log("진입하는건가");
//     setTimeout(function () {
//       aa();
//     }, 100);
//   }
// }
