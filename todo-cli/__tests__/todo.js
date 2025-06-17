const todoList = require('../todo');

const {all, markAsComplete, add,overdue,dueToday,dueLater,today,tomorrow,yesterday} =todoList();


describe("Todolist Test Suite ",() =>{
    beforeAll(() =>{
        add(
            {
                title:"Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0,10)
            }
        );
    });

    test("Should add new todo",() =>{
       const todoItemsCount =all.length;
       add(
            {
                title:"Test todo",
                completed: false,
                dueDate: new Date().toISOString().slice(0,10)
            }
        );
      
        expect(all.length).toBe(todoItemsCount + 1);
    });

    test("Should mark a todo as complete",() =>{
        expect(all[0].completed).toBe(false);
        markAsComplete(0);
        expect(all[0].completed).toBe(true);
    });


    test("checks retrieval of overdue items",() =>{
        add(
            {
                title:"Test todo",
                completed: false,
                dueDate: yesterday
            }
        );
        const overDueItems= overdue();
        expect(overDueItems.length).not.toBe(0);
        
    });

    test("checks retrieval of due today items",() =>{
         add(
            {
                title:"Test todo",
                completed: false,
                dueDate: today
            }
        );
        const overDueItems= dueToday();
        expect(overDueItems.length).not.toBe(0);
       
    });


    test("checks retrieval of due later items",() =>{
        add(
            {
                title:"Test todo",
                completed: false,
                dueDate: tomorrow
            }
        );
        const overDueItems= dueLater();
        expect(overDueItems.length).not.toBe(0);
    });

});