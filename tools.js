function shuffleString(str) {
  var arr = str.split("");
  for (var i = arr.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr.join("");
}
function generateId(le) {
  if(!isNaN(le) && (1 < le <= 52)) {
  var characters = "A1B2C3D4E5F6G7H8I9J0K1L2M3N4O5P6Q7R8S9T0U1V2W3X4Y5Z6";
  var shuffled = shuffleString(characters);
  var length = le;
  var start = Math.floor(Math.random() * (shuffled.length - length));
  return shuffled.substring(start, start + length) + "";
  }else{
    return NaN;
  }
}
var json = {
  read: function(path) {
    return JSON.parse(FileStream.read('sdcard/'+path));
  },
  write: function(path1, input) {
    FileStream.write('sdcard/'+path1, JSON.stringify(input));
  }
};
function rank(path2, max, type, check, score, score2, score3) {
  
    var ranking = [];
    var rp = [];
    var pF = java.io.File("sdcard/"+path2).listFiles();
    for (var i = 0; i < playerFiles.length; i++) {
        var playerData = FileStream.read(pF[i]);
        rp.push(playerData);
    }
    for (var j = 0; j < rp.length; j++) {
      try{
        var playerObj = JSON.parse(rp[j]);
        }catch(e) {}
        if(playerObj[check] == 0) {
          }else{
            var score = {};
            if(playerObj[score2] != undefined && playerObj[score3] != undefined) {
             score = {
                name: playerObj.name,
                score: playerObj[score] + playerObj[score2] + playerObj[score3]
            };
            }else if(playerObj[score2] != undefined) {
             score = {
                name: playerObj.name,
                score: playerObj[score] + playerObj[score2]
            };
            }else{
             score = {
                name: playerObj.name,
                score: playerObj[score]
            };
            }
            ranking.push(score);
    }
    }
    ranking.sort(function (a, b) {
        var scoreA = a.score;
        var scoreB = b.score;
        return scoreB - scoreA;
    });
    var result = "";
    for (var k = 0; k < max; k++) {
        if (ranking[k] !== undefined) {
            result += (k + 1) + "위 " + ranking[k].name + ": " + ranking[k].score + type+"\n\n";
        }
    }
  return result;
}
function random(str0) {
  var chv = 0;
  if(Math.random()*100 < str0) {
    chv = 'true';
  }else{
    chv = 'false';
  }
 return Boolean(chv);
}
function rv() {
  return (Math.random() * 100);
}
exports.id52 = generateId;
exports.jead = json.read;
exports.jrite = json.write;
exports.rank = rank;
exports.random = random;
exports.rv = rv;
