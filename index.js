// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = {}
  for (var i = 0; i < array.length; i++) {
    var string = array[i] + " plays " + instruments[i]
    array.push(string)
  }
  return array
}

function johnLennonFacts(facts) {
  var j = facts.length
  while (j > 0) {
    facts[j-1] = facts[j-1] + "!!!"
    j--
  }
}