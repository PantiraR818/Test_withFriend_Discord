//console.log("Ploy")
//console.log("Pantira")
//let n:number[]= [1,2,3];
//boolean => true | false || 1 | 0
//console.log(n)
//สร้างข้อมูลนักศึกษา ที่มีID,NAME,TEL,MID,FINAL,TOTAL
//Tuple 1 Array
let t1;
t1 = [
    [1001, "Pantira", "0918751987", 30, 60, 0],
    [1002, "Jakrit", "1236985742", 25, 60, 0]
];
//การคำนวณหาคะแนนรวม
//t1[5] = t1[3]+ t1[4]; 
// t = [1002,"Jakrit","1234569871",25,60,0];
// console.log(`ID: ${t1[0][0]} Name : ${t1[0][1]} Mid : ${t1[0][3]} Final : ${t1[0][4]} Tatal : ${t1[0][5]} `);
// console.log(`ID: ${t1[1][0]} Name : ${t1[1][1]} Mid : ${t1[1][3]} Final : ${t1[1][4]} Tatal : ${t1[1][5]} `);
// Arrow func
// t1.forEach((s)=>{
//     //คำนวณในนี้ได้เลย
//     s[5] = s[3]+s[4];
//     console.log(`ID: ${s[0]}  Name : ${s[1]} Tel : ${s[2]} Mid : ${s[3]} Final : ${s[4]} Tatal : ${s[5]} `)
// });
for (let i = 0; i < t1.length; i++) {
    console.log(i);
    console.log(`ID: ${t1[i][0]} Name: ${t1[i][1]} `);
}
;
