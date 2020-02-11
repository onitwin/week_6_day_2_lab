const Paint=function(ltr){
  this.ltr=ltr;
}


Paint.prototype.empty=function(){
  this.ltr=0;
};

Paint.prototype.isempty=function(){
  if (this.ltr === 0){
    return true;
  }else{
    return false;
  }
};
module.exports=Paint;
