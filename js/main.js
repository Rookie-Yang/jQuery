/*
window.rookie={}
rookie.getSiblings = function getSiblings(node){
  var allChildren = node.parentNode.children
  var array = {
    length:0
  }
  for(var i=0;i<allChildren.length;i++){
      if(allChildren[i]!==node){
        array[array.length]=allChildren[i]
        array.length++
      }
    }
  return array
}
rookie.addClass = function addClass(node,classes){
  for(let key in classes){
    var value = classes[key]
    var methoName = value ? 'add' :'remove'
    node.classList[methoName](key)
  }
}

console.log(rookie.getSiblings(items5))
rookie.addClass(items2,{1:true,2:false,3:true})
*/
/*
Node.prototype.getSiblings = function(){
  var allChildren = this.parentNode.children
  var array = {
    length:0
  }
  for(var i=0;i<allChildren.length;i++){
      if(allChildren[i]!==this){
        array[array.length]=allChildren[i]
        array.length++
      }
    }
  return array
}
Node.prototype.addClass = function(classes){
  for(let key in classes){
    var value = classes[key]
    var methoName = value ? 'add' :'remove'
    this.classList[methoName](key)
  }
}
console.log(items4.getSiblings.call(items4))
//等价于items4.getSiblings()
items2.addClass.call(items2,{1:false,2:true,3:true})
//等价于items2.addClass({1:false,2:true,3:true})
*/
/*
window.jQuery = function(nodeOrSelector){
  let node
  if(typeof nodeOrSelector === 'string'){
    node=document.querySelector(nodeOrSelector)
  }
  else{
    node=nodeOrSelector
  }
  return {
    getSiblings:function(){
      var allChildren = node.parentNode.children
      var array = {
        length:0
      }
      for(var i=0;i<allChildren.length;i++){
          if(allChildren[i]!==node){
            array[array.length]=allChildren[i]
            array.length++
          }
        }
      return array
    },
    addClass:function(classes){
      for(let key in classes){
        var value = classes[key]
        var methoName = value ? 'add' :'remove'
        node.classList[methoName](key)
      } 
    }
  }
}

var node2 = jQuery(items3)

console.log(node2.getSiblings())
node2.addClass({1:false,red:true,3:true})
*/

window.jQuery = function(nodeOrSelector){
  let nodes={}
  if(typeof nodeOrSelector ==='string'){
    temp = document.querySelectorAll(nodeOrSelector)
    for(let i=0;i<temp.length;i++){
      nodes[i]=temp[i]
    }
    nodes.length = temp.length
  }else if(nodeOrSelector instanceof Node){
    nodes = {
      0:nodeOrSelector,
      length:1
    }
  }
  nodes.getSiblings = function(){

  }
  nodes.addClass = function(classes){
    for(let i=0;i< nodes.length;i++){
      for(let key in classes){
        var value = classes[key]
        var methoName = value ? 'add' :'remove'
        nodes[i].classList[methoName](key)
      } 
    }
  }
  nodes.text = function(text){
    if(text===undefined){
      var texts=[]
      for(let i=0;i<nodes.length;i++){
        texts.push(nodes[i].textContent)
      }
      return texts
    }else{
      for(let i=0;i<nodes.length;i++){
        nodes[i].textContent=text
      }
    }
  }
  return nodes
}

var node2 = jQuery('ul > li')
node2.addClass({yellow:true})
console.log(node2.text('hi'))