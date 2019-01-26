function fattern(arr){
    const text = JSON.stringify(arr)
    var reg = /\d+/g
    var rest= text.match(reg)
    return rest.map(t => parseInt(t))
}


console.log(fattern( [[1,2,[2],[3]],4]))