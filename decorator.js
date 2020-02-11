const Decorator=function(stock=[]){
  this.stock=stock;
}

Decorator.prototype.addStock=function(stock){
  this.stock.push(stock);
}

Decorator.prototype.totalvolume=function(){
  let total=0
  for ( let paint of this.stock){
    total +=paint.ltr;
  }
  return total
}







module.exports=Decorator;
