var cat  = {
    name:{
        first:"fluffy",
        last:"LaBeoff"
    },
    color:"white"
}

Object.defineProperty(cat, "fullname", 
    {
        get:function(){
            return this.name.first +" "+ this.name.last
        },
        set: function(value){
            var nameParts = value.split(' ');
            this.name.first = nameParts[0];
            this.name.last = nameParts[1];
        }
    }
)
console.log(cat); //{ name: { first: 'fluffy', last: 'LaBeoff' }, color: 'white' }
cat.fullname =  'raghu Kulkarra'
console.log(cat.fullname);
console.log(cat);//{ name: { first: 'raghu', last: 'Kulkarra' }, color: 'white' }