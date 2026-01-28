// import Form from "./Form";

// function App() {
//   return(
//     <>
//     <Form></Form>
//   </>
//   )
// }

// export default App;


import ExpenseList from "./assets/expense-tracker/components/expenseList";

const App = () => {
  const expenses = [
    {
      id: 1,
      description: "aaa",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 2,
      description: "bbb",
      amount: 200,
      category: "Utilities",
    },
    {
      id: 3,
      description: "ccc",
      amount: 300,
      category: "Utilities",
    },
    {
      id: 4,
      description: "ddd",
      amount: 400,
      category: "Utilities",
    },
  ];
  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => console.log("Deleted", id)}
      />
    </div>
  );
};

export default App;
