// ⭐ PATTERN COLLECTION ⭐

// 1. Base Rectangle Pattern
let printBasePattern = (r, c) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= c; j++) {
             process.stdout.write("* ");
         }
         console.log();
     }
 }
 
 // 2. Right Angle Triangle
 let rightAngTri = (r) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= i; j++) {
             process.stdout.write("* ");
         }
         console.log();
     }
 }
 
 // 3. Right Angle Triangle with Numbers
 let rightAngTriNum = (r) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= i; j++) {
             process.stdout.write(j + "");
         }
         console.log();
     }
 }
 
 // 4. Right Angle Triangle with Alphabets
 let rightAngTriStr = (r) => {
     for (let i = 1; i <= r; i++) {
         let ascii = 65;
         for (let j = 1; j <= i; j++) {
             process.stdout.write(String.fromCharCode(ascii++));
         }
         console.log();
     }
 }
 
 // 5. Inverted Right Angle Triangle
 let rightAngTriInv = (r) => {
     for (let i = r; i > 0; i--) {
         for (let j = i; j > 0; j--) {
             process.stdout.write("* ");
         }
         console.log();
     }
 }
 
 // 6. Mirror Right Angle Triangle
 let rightAngTriMirror = (r) => {
     for (let i = 1; i <= r; i++) {
         for (let j = r - i; j > 0; j--) {
             process.stdout.write(" ");
         }
         for (let k = 1; k <= i; k++) {
             process.stdout.write("* ");
         }
         console.log();
     }
 }
 
 // 7. Hollow Rectangle
 let hollowRect = (r) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= r; j++) {
             if (i == 1 || j == 1 || i == r || j == r) {
                 process.stdout.write("*");
             } else {
                 process.stdout.write(" ");
             }
         }
         console.log();
     }
 }
 
 // 8. X Pattern
 let XPattern = (r) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= r; j++) {
             if (i == j || i + j == r + 1) {
                 process.stdout.write("*");
             } else {
                 process.stdout.write(" ");
             }
         }
         console.log();
     }
 }
 
 // 9. V Pattern
 let VPattern = (r, c) => {
     for (let i = 1; i <= r; i++) {
         for (let j = 1; j <= c; j++) {
             if (i == j || i + j == c + 1) {
                 process.stdout.write("* ");
             } else {
                 process.stdout.write("  ");
             }
         }
         console.log();
     }
 }
 
 // 🎯 Sample Function Calls
 console.log("1. Base Rectangle Pattern");
 printBasePattern(5, 5);
 
 console.log("\n2. Right Angle Triangle");
 rightAngTri(5);
 
 console.log("\n3. Right Angle Triangle with Numbers");
 rightAngTriNum(5);
 
 console.log("\n4. Right Angle Triangle with Alphabets");
 rightAngTriStr(5);
 
 console.log("\n5. Inverted Right Angle Triangle");
 rightAngTriInv(5);
 
 console.log("\n6. Mirror Right Angle Triangle");
 rightAngTriMirror(5);
 
 console.log("\n7. Hollow Rectangle");
 hollowRect(5);
 
 console.log("\n8. X Pattern");
 XPattern(5);
 
 console.log("\n9. V Pattern");
 VPattern(5, 9);
 