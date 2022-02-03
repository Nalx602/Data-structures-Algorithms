class HashTable {
  constructor(size){
    this.data = new Array(size);
    //this data will hold key:value pairs in the form of subarrays
    //[ ..... ['grapes',10000] , ... ,  ['apples',9000] , ... ]
  }

  _hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    //as you can see, the hash will be from 0 to 49, as we decided to create 
    //a has table of size 50 "const myHashTable = new HashTable(50);"
    return hash;
  }

  setData(key, value) {
    //with it we will add the data to our hash table; how?
    //When we will get set ('key', value), with the key we will calculate
    //the hash; hash will be = to index position of this.data where you will
    //insert the key:value pair; so when you want to get it in the next
    //method, you will see the key -> calc hash and then return this.data[hash] 
    // !! awesome !!

    //check if inputed data is valid
    //tbd

  

    //saving the data
    const hashValue = this._hash(key);
    if( !this.data[hashValue]) {
      //in case the index is empty, add it
      this.data[hashValue]=[key,value];
      //console.log('Your hash table looks like:\n',this.data);
    } else {
      //in case the index is occupied, at that index you keep on 
      //pushing new elem as next elem of an array;
      this.data[hashValue].push([key,value]);
    }
  }

  getData(key) {
    //with it we will get the data from our hash table;
    //see explanation in setData method

    //check if the key entry exists
    //tbd

    //return the key:value pair
    const hashValue =this._hash(key);
    return this.data[hashValue];
  }

  keys(){
    //we would like it to show all the keys

    //as you can see, it will loop over 50 items in order
    //to retrieve a couple of fruits; 
    const keysArray = [];
    for (let i=0;i<this.data.length;i++){
      if(this.data[i]){
        keysArray.push(this.data[i][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(5);
//so the hash table will have 50 slots in which you can store your data

myHashTable.setData('grapes', 10000);
myHashTable.setData('apples', 9000);
myHashTable.setData('oranges', 8000);
myHashTable.setData('peaches', 5000);
myHashTable.setData('pears', 3000);
//console.log(myHashTable.getData('grapes'));
console.log(myHashTable.keys());


//Create these 2 new methods, that adds & retrieves from this.data
// myHashTable.set('grapes', 10000)
// myHashTable.get('grapes')
// myHashTable.set('apples', 9)
// myHashTable.get('apples')