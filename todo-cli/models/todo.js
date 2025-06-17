// models/todo.js
'use strict';
const { Model ,Op} = require('sequelize');

const formattedDate = d => {
    return d.toISOString().split("T")[0]
    }
const today = formattedDate(new Date());
      
module.exports = (sequelize, DataTypes) => {
  class Todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static async addTask(params) {
      return await Todo.create(params);
    }
    static async showList() {
      console.log('My Todo list \n');

      console.log('Overdue');
      const overDueItems =await Todo.overdue();
      overDueItems.forEach(todo=> console.log(todo.displayableString()));
     
      // FILL IN HERE
      console.log('\n');

      console.log('Due Today');
      const dueTodayItems = await Todo.dueToday();
      dueTodayItems.forEach(todo => console.log(todo.displayableString()));
      // FILL IN HERE
      console.log('\n');

      console.log('Due Later');
      const dueLaterItems = await Todo.dueLater();
      dueLaterItems.forEach(todo => console.log(todo.displayableString()));
      // FILL IN HERE
    }

    static async overdue() {
      return await Todo.findAll({
        where:{
          dueDate:{
            [Op.lt]:today
          }
        }
      })
      // FILL IN HERE TO RETURN OVERDUE ITEMS
    }

    static async dueToday() {
      return await Todo.findAll({
        where:{
          dueDate:{
            [Op.eq]:today
          }
        }});
      // FILL IN HERE TO RETURN ITEMS DUE tODAY
    }

    static async dueLater() {
       return await Todo.findAll({
        where:{
          dueDate:{
            [Op.gt]:today,
          }
        }});
      // FILL IN HERE TO RETURN ITEMS DUE LATER
    }

    static async markAsComplete(id) {
      const todo = await Todo.findByPk(id);
      if(todo){
        todo.completed=true;
        await todo.save();
      }
      return todo;
      // FILL IN HERE TO MARK AN ITEM AS COMPLETE
    }

    displayableString() {
      let checkbox = this.completed ? '[x]' : '[ ]';
      let dateStr = this.dueDate ===today ?"": `${this.dueDate}`;
      return `${this.id}. ${checkbox} ${this.title} ${dateStr}`;
    }
  }
  Todo.init(
    {
      title: DataTypes.STRING,
      dueDate: DataTypes.DATEONLY,
      completed: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Todo',
    },
  );
  return Todo;
};
