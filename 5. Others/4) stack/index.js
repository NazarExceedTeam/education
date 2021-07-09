/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элемент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {
    arr = new Array();

    push (val){
        this.arr.push(val);
    }
    pop (n){
        if (this.arr.length > 0){
            this.arr.pop(n);
        } else {
            return Error("Stack is empty!");
        }
    }
    print(){
        return this.arr;
    }
    size(){
        this.arr.length;
    }
    isEmpty(){
        return Boolean(this.arr.length);
    }
}

window.Stack = Stack;

export default Stack;
