
// the Node class is the core element of the linked list
class Node{
    constructor(head){
        this.head = head;
        this.next = null;
    }
}

class LinkedList{
    constructor(head){
        if(head){
            this.head = head;
            this.next = null;
        }else{
            this.head = null;
            this.next = null;
        }
    }
    //This method helps to create a linked list from an array and the order of the links is from index 0 to index arr.length - 1 
    // therfore if the array is [1,2,3] => the linked list is 1=>2=>3
    createFromArray(arr){
       
        if(arr.length !== 0){
            let last = new Node(arr[arr.length -1]);
            let curr;
            if(arr.length >1){
                for(let i = arr.length-2 ;i>0 ; i--){
                    curr = new Node(arr[i]);
                    curr.next = last;
                    last = curr;
                }
                this.head = arr[0]
                this.next = last;
            }else{
                this.head = last.head;
                this.next = null
            }
        }else{
            console.log('Error: the array is empty there will be no modification to the linked list');
        }
    }
    //this method outputs the size of the Linked List 

    size(){
        if(this.head !== null){
            let counter = 0;
            let curr = this;
            let next;
            while(curr !== null){
                curr = curr.next;
                counter++;
            }
            return counter;
        }else{
            return 0;
        }
    }
    //this method do not change the linked list it's just returning an linked list where all the nodes are inside of an array 
    // and where the order of the links is from left to right 
    transformToAnArray(test){
        if(this.head !== null){
            let curr = this;
            let arr = [];
            try{
            for(let i = 0 ; i<this.size();i++){
                arr.push(curr.head);
                curr = curr.next;
            }
            }catch(err){
                console.log(err)
            }
            return arr;
        }
        return [];
    }
    // this method inserts a value to the end of the linked list 
    insert(value){
        if(value){
            if(!this.head){
                this.head = value;
                this.next = null;
            }else{
                let arr = this.transformToAnArray();
                arr.push(value);
                this.createFromArray(arr);
            }
        }
    }
    // this method alows you to insert a certain element at a certain index indexing of the linked list works like the indexing of an array 
    insertAt(value,index){
        if(!value || !index){
            console.log('please specify the value and the index that you want to insert your value in \n like this <LinkedList>(value,index)')
        }
        if(value && index){
            if(!this.head){
                this.head = value;
                this.next = null;
            }else{
                let arr = this.transformToAnArray();
                arr.splice(index, 0, value);
                this.createFromArray(arr);
            }
        }
    }
    // this method reverses the hole Linked List :) like the coding interview question
    reverse(){
        let curr = this;
        let prev;
        let tempNode = null;
        while(curr !== null){
            prev = new Node(curr.head);
            prev.next = tempNode;
            tempNode = prev;
            curr = curr.next;
        }
        this.head = tempNode.head;
        this.next = tempNode.next;  
    }
    //this method prints the Linked List 
    print(options){
        if(this.head == null){
            console.log('the Linked List is empty');
            return;
        }
        if(!options){
            let LinkedListString = '';
            let curr = this;
            while(curr !== null){
                LinkedListString += ` ${curr.head}`;
                curr = curr.next;
            }
            console.log(LinkedListString);
        }
        if(options.toUpperCase() === 'SCHEMA'){
            let LinkedListString = '';
            let curr = this;
            while(curr !== null){
                LinkedListString += `${curr.head} => `;
                curr = curr.next;
            }
            console.log(LinkedListString +'null');
        }

    }
    transformToAString(){
        let StringLinkedList = this.transformToAnArray();
        let final = '';
        StringLinkedList.map(item => final += `${item} => `);
        return final + 'null';
    }
    indexvalue(valueTargeted){
        let ValueArr = [];
        let counter = 0;
        let currItem = this;
        while(currItem !== null){
            if(valueTargeted == currItem.head){
                ValueArr.push(counter);
            }
            counter++;
            currItem = currItem.next;
        }
        return ValueArr;
    }
    sort(){
        let arr = this.transformToAnArray();
        arr = arr.sort((a,b) => a-b);
        if(arr.length !== 0){
            let last = new Node(arr[arr.length -1]);
            let curr;
            if(arr.length >1){
                for(let i = arr.length-2 ;i>0 ; i--){
                    curr = new Node(arr[i]);
                    curr.next = last;
                    last = curr;
                }
                this.head = arr[0]
                this.next = last;
            }else{
                this.head = last.head;
                this.next = null
            }
        }else{
            console.log('Error: the array is empty there will be no modification to the linked list');
        }
        
    }
}

// 10 methods to use in a linked list to make your life easier 
