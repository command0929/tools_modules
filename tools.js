var _0x3e7b=["",
"\x73\x70\x6C\x69\x74",
"\x6C\x65\x6E\x67\x74\x68",
"\x72\x61\x6E\x64\x6F\x6D",
"\x66\x6C\x6F\x6F\x72",
"\x6A\x6F\x69\x6E",
"\x41\x31\x42\x32\x43\x33\x44\x34\x45\x35\x46\x36\x47\x37\x48\x38\x49\x39\x4A\x30\x4B\x31\x4C\x32\x4D\x33\x4E\x34\x4F\x35\x50\x36\x51\x37\x52\x38\x53\x39\x54\x30\x55\x31\x56\x32\x57\x33\x58\x34\x59\x35\x5A\x36","\x73\x75\x62\x73\x74\x72\x69\x6E\x67",
"\x73\x64\x63\x61\x72\x64\x2F",
"\x72\x65\x61\x64",
"\x70\x61\x72\x73\x65",
"\uBD88\uB7EC\uC62C\x20\uB370\uC774\uD130\uAC00\x20\uC633\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E\x0A\uB370\uC774\uD130\x20\x3A\x20\x73\x64\x63\x61\x72\x64\x2F","\x73\x74\x72\x69\x6E\x67\x69\x66\x79",
"\uC800\uC7A5\uD560\x20\uB370\uC774\uD130\uAC00\x20\uC62C\uBC14\uB974\uC9C0\x20\uC54A\uC2B5\uB2C8\uB2E4\x2E","\x77\x72\x69\x74\x65","\x6C\x69\x73\x74\x46\x69\x6C\x65\x73","\x69\x6F",
"\x70\x75\x73\x68",
"\uD30C\uC77C\uC744\x20\uBD88\uB7EC\uC62C\x20\uC218\x20\uC5C6\uC74C",
"\x6E\x61\x6D\x65",
"\x73\x63\x6F\x72\x65",
"\x73\x6F\x72\x74",
"\uC704\x20",
"\x3A\x20",
"\x0A\x0A",
"\x69\x64\x35\x32",
"\x6A\x65\x61\x64",
"\x6A\x72\x69\x74\x65",
"\x72\x61\x6E\x6B",
"\x72\x76"];
var _0x70b2=[_0x3e7b[0],_0x3e7b[1],_0x3e7b[2],_0x3e7b[3],_0x3e7b[4],_0x3e7b[5],_0x3e7b[6],_0x3e7b[7],_0x3e7b[8],_0x3e7b[9],_0x3e7b[10],_0x3e7b[11],_0x3e7b[12],_0x3e7b[13],_0x3e7b[14],_0x3e7b[15],_0x3e7b[16],_0x3e7b[17],_0x3e7b[18],_0x3e7b[19],_0x3e7b[20],_0x3e7b[21],_0x3e7b[22],_0x3e7b[23],_0x3e7b[24],_0x3e7b[25],_0x3e7b[26],_0x3e7b[27],_0x3e7b[28],_0x3e7b[29]];
function shuffleString(_0xd3cex3){
var _0xd3cex4=_0xd3cex3[_0x70b2[1]](_0x70b2[0]);
for(var _0xd3cex5=_0xd3cex4[_0x70b2[2]]- 1;_0xd3cex5> 0;_0xd3cex5--){
var _0xd3cex6=Math[_0x70b2[4]](Math[_0x70b2[3]]()* (_0xd3cex5+ 1));
var _0xd3cex7=_0xd3cex4[_0xd3cex5];
_0xd3cex4[_0xd3cex5]= _0xd3cex4[_0xd3cex6];
_0xd3cex4[_0xd3cex6]= _0xd3cex7};
return _0xd3cex4[_0x70b2[5]](_0x70b2[0])
}
function generateId(_0xd3cex9){
if(!isNaN(_0xd3cex9)&& (0< _0xd3cex9&& _0xd3cex9<= 52)){
var _0xd3cexa=_0x70b2[6];
var _0xd3cexb=shuffleString(_0xd3cexa)[_0x70b2[7]](0,_0xd3cex9);
return _0xd3cexb}else {
return undefined}
}
var json={
read:function(_0xd3cexd){
try{
var _0xd3cexe=JSON[_0x70b2[10]](FileStream[_0x70b2[9]](_0x70b2[8]+ _0xd3cexd))
}catch(e){throw  new TypeError(_0x70b2[11]+ _0xd3cexd)};
return _0xd3cexe},
write:function(_0xd3cexf,_0xd3cex10){
try{
var _0xd3cex11=JSON[_0x70b2[12]](_0xd3cex10)}catch(e){throw  new TypeError(_0x70b2[13])
};
FileStream[_0x70b2[14]](_0x70b2[8]+ _0xd3cexf,_0xd3cex11)}
};
function rank(_0xd3cex13,_0xd3cex14,_0xd3cex15,_0xd3cex16,_0xd3cex17,_0xd3cex18,_0xd3cex19){
var _0xd3cex1a=[];
var _0xd3cex1b=[];
var _0xd3cex1c=java[_0x70b2[16]].File(_0x70b2[8]+ _0xd3cex13)[_0x70b2[15]]();
for(var _0xd3cex5=0;_0xd3cex5< _0xd3cex1c[_0x70b2[2]];_0xd3cex5++){
var _0xd3cex1d=FileStream[_0x70b2[9]](_0xd3cex1c[_0xd3cex5]);_0xd3cex1b[_0x70b2[17]](_0xd3cex1d)};
for(var _0xd3cex6=0;_0xd3cex6< _0xd3cex1b[_0x70b2[2]];_0xd3cex6++){
try{
var _0xd3cex1e=JSON[_0x70b2[10]](_0xd3cex1b[_0xd3cex6])}catch(e){};
if(_0xd3cex1e== undefined){
throw  new TypeError(_0x70b2[18])};
if(_0xd3cex1e[_0xd3cex16]!= 0){
var _0xd3cex1f={};
if(_0xd3cex1e[_0xd3cex18]!= undefined&& _0xd3cex1e[_0xd3cex19]!= undefined){
_0xd3cex1f= {name:_0xd3cex1e[_0x70b2[19]],score:_0xd3cex1e[_0xd3cex17]+ _0xd3cex1e[_0xd3cex18]+ _0xd3cex1e[_0xd3cex19]}
}else {
if(_0xd3cex1e[_0xd3cex18]!= undefined){
_0xd3cex1f= {name:_0xd3cex1e[_0x70b2[19]],score:_0xd3cex1e[_0xd3cex17]+ _0xd3cex1e[_0xd3cex18]}
}else {
_0xd3cex1f= {name:_0xd3cex1e[_0x70b2[19]],score:_0xd3cex1e[_0xd3cex17]}}};_0xd3cex1a[_0x70b2[17]](_0xd3cex1f)}
};
_0xd3cex1a[_0x70b2[21]](function(_0xd3cex20,_0xd3cex21){
var _0xd3cex22=_0xd3cex20[_0x70b2[20]];var _0xd3cex23=_0xd3cex21[_0x70b2[20]];return _0xd3cex23- _0xd3cex22});
var _0xd3cex24=_0x70b2[0];
for(var _0xd3cex25=0;_0xd3cex25< _0xd3cex14;_0xd3cex25++){
if(_0xd3cex1a[_0xd3cex25]!== undefined){
_0xd3cex24+= (_0xd3cex25+ 1)+ _0x70b2[22]+ _0xd3cex1a[_0xd3cex25][_0x70b2[19]]+ _0x70b2[23]+ _0xd3cex1a[_0xd3cex25][_0x70b2[20]]+ _0xd3cex15+ _0x70b2[24]}};return _0xd3cex24}
function random(_0xd3cex27){return (Math[_0x70b2[3]]()* 100< Number(_0xd3cex27))}
function rv(){return (Math[_0x70b2[3]]()* 100)}
exports[_0x70b2[25]]= generateId;
exports[_0x70b2[26]]= json[_0x70b2[9]];
exports[_0x70b2[27]]= json[_0x70b2[14]];
exports[_0x70b2[28]]= rank;
exports[_0x70b2[3]]= random;
exports[_0x70b2[29]]= rv;
