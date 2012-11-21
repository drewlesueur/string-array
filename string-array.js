poorModule("string-array", function (){
  var starts_with_star = function (str){
    return str.substr(0,1) == "*"
  }
  var starts_with_2_spaces = function (str){
    return str.substr(0,2) == "  "
  }
  var strip_front_spaces = function (str){
    return str.substr(2)
  }
  var join_multiline = function (list) {
    
    
    var i = 0
    var len = list.length
    in_multi = false
    multi_liner = []
    while (i < len) {
      line = list[i]
      if (in_multi) {
        if (starts_with_2_spaces(line)) {
          multi_liner.push(line.substr(2))
          var mlen = multi_liner.length
          var start = i - mlen + 1
          list.splice.apply(list, [start, mlen].concat(multi_liner.join("\n")))
          console.log(multi_liner)
          i -= mlen
          len -= mlen
        } else {
          
          in_multi = false
        }

      } else {
        if (starts_with_star(line)) {
          in_multi = true
          multi_liner.push(line.substr(2))
       
        }
        
      }
      i++
    }
    return list
  }
  return function (str) {
    return join_multiline(str.split("\n"))
  }
})