const expenseForm = document.querySelector('.expense-form');
const expenseSubmit = expenseForm.querySelector('#fin-expense-submit');
const expenseCategories = expenseForm.querySelector('#fin-expense-categories');


let finCategories = {
    expense: [
        {
            categoryID: 'finCatID_2',
            categoryName: 'Без категори'
        },
        {
            categoryID: 'finCatID_3',
            categoryName: 'Транспорт'
        },
        {
            categoryID: 'finCatID_4',
            categoryName: 'Продукты'
        },
    ],
    income: [
        {
            categoryID: 'finCatID_5',
            categoryName: 'Зарплата'
        }
    ]
}

/*****/
let documentFragment = document.createDocumentFragment();
for (let i = 0; i < finCategories.expense.length; i++) {
    const option = document.createElement('option');
    option.textContent = `${finCategories.expense[i].categoryName}`
    option.value = finCategories.expense[i].categoryID;
    documentFragment.appendChild(option);
}
expenseCategories.appendChild(documentFragment);

/*****/

let newExpense = {};
let expenseID = 1;

expenseSubmit.addEventListener('click', (evt) =>{
    evt.preventDefault();

    newExpense.id = `finExpID-${expenseID++}`;
    newExpense.type = 'expense';
    newExpense.value = expenseForm.querySelector('#fin-expense-value').value;
    newExpense.description = expenseForm.querySelector('#fin-expense-desc').value;
    newExpense.categoryID = 
    console.log(newExpense);
});

/*

     "id": "finExpID-1",
      "type": "expense",
      "value": "25",
      "category-id": "finCatID-1",
      "category-name": "Транспорт",
      "description": "Маршрутка до работы"


*/