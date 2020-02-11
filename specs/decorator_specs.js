const assert=require('assert');
const Paint=require('../paint.js');
const Room=require('../room.js')
const Decorator=require('../decorator.js')

//tests go here
describe('Room', function(){
  beforeEach(function(){
    kitchen= new Room(200,0);
  })
  it('should have an area',function(){
    const actual=kitchen.area
    const expected=200
    assert.strictEqual(actual,expected);
  })
  it ('should have an unpainted area', function(){
    const actual=kitchen.painted_area;
    const expected=0;
    assert.strictEqual(actual,expected)
  })
})

describe('Paint',function(){
  beforeEach(function(){
    dulux=new Paint(20);
  })
  it('should have a volume of paint', function(){
    const actual=dulux.ltr
    const expected=20
    assert.strictEqual(actual,expected)
  });
  it('should be able to empty itself',function(){
    dulux.empty()
    const actual=dulux.ltr
    const expected=0
  })
  it('should be able to check if it is empty',function(){
    const actual=dulux.isempty();
    const expected=false;
  })

})


describe('Decorator',function(){
  beforeEach(function(){
    const paint1= new Paint(20)
    const paint2= new Paint(20)
    const paint3= new Paint(20)
    const paint4= new Paint(20)
    const paint5= new Paint(20)
    joseph=new Decorator()
    joseph.stock.push(paint1,paint2,paint3,paint4);
  })
  it('should have a stock of paint',function(){
    const actual=joseph.stock.length;
    const expected=4;
    assert.strictEqual(actual,expected);
  })
  it('should be able to add stock',function(){
    const paint6=new Paint(20)
    joseph.addStock(paint6)
    const actual=joseph.stock.length;
    const expected=5;
    assert.strictEqual(actual,expected);
  })
  it('should be able to calculate total volume of paint',function(){
    const actual=joseph.totalvolume()
    const expected=80;
    assert.strictEqual(actual,expected);
  })
})
