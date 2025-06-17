/* eslint-disable no-undef */

const db = require('../models');

describe("Todolist Test Suite ",() => {
    beforeAll(async () => {
        await db.sequelize.sync({ force: true });
    });

    test("Should add new todo", async () => {
        const todoItemsCount = await db.Todo.count();
        await db.Todo.addTask({
        title: "Test todo",
        completed: false,
        dueDate: new Date(),
        });
        const newTodoItemsCount = await db.Todo.count();
        expect(newTodoItemsCount).toBe(todoItemsCount + 1);
    });

    // test("Should mark a todo as complete",() =>{
    //     expect(all[0].completed).toBe(false);
    //     markAsComplete(0);
    //     expect(all[0].completed).toBe(true);
    // });


    // test("checks retrieval of overdue items",() =>{
    //     add(
    //         {
    //             title:"Test todo",
    //             completed: false,
    //             dueDate: yesterday
    //         }
    //     );
    //     const overDueItems= overdue();
    //     expect(overDueItems.length).not.toBe(0);
        
    // });

    // test("checks retrieval of due today items",() =>{
    //      add(
    //         {
    //             title:"Test todo",
    //             completed: false,
    //             dueDate: today
    //         }
    //     );
    //     const overDueItems= dueToday();
    //     expect(overDueItems.length).not.toBe(0);
       
    // });


    // test("checks retrieval of due later items",() =>{
    //     add(
    //         {
    //             title:"Test todo",
    //             completed: false,
    //             dueDate: tomorrow
    //         }
    //     );
    //     const overDueItems= dueLater();
    //     expect(overDueItems.length).not.toBe(0);
    // });

});