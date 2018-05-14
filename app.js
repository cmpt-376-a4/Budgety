// BUDGET CONTROLLER
var budgetController = (function() {
  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    }
  }
})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn:'.add__btn'
  }
  return {
    getInput() {
      return{
        type : document.querySelector(DOMstrings.inputType).value,
        description : document.querySelector(DOMstrings.inputDescription).value,
        value : document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMStrings() {
      return DOMstrings;
    },
  }})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl,UICtrl){

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMStrings();
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress',ctrlAddItem);
  }

  var ctrlAddItem = function() {
    //Get the filled input data
    var input = UICtrl.getInput();
    //Add the item to the budget CONTROLLER

    //Add the item to the UI

    //Calculate the budget

    //Display the budget on the UI
  }

  return {
    init() {
      console.log('App started');
      setupEventListeners();
    }
  }
})(budgetController,UIController);

controller.init();
