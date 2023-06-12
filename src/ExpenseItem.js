import React, { useState, useEffect } from 'react';

const ExpenseItem = (props) => {
  const [count, setCount] = useState(0);

  const expense = new Date('2023', '1', '10');

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const getDate = () => {
    return <h2>Sucka</h2>;
  }

  const clickit = () => {
    alert('clicked!');
  }

  return (
    <>
      <h2 onClick={ () => setCount(count + 1)}>Expense Item</h2>
      click: <button onClick={clickit}>click me</button>
      <span>exp: { expense.toISOString() }</span>
      <h3>Awsome: {props.sauce}</h3>
      { getDate() }
      <h1>Child: {props.children}</h1>
    </>
  )
}

export class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isLoggedIn: false };
  }

  componentDidMount() {
    console.log('Component mounted.');
  }
  componentDidUpdate() {
    console.log('Component updated.');
  }
  componentWillUnmount() {
    console.log('Component unmounted.');
  }

  handleClick() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    const styles = {
      backgroundColor: this.state.isLoggedIn ? 'yellow' : 'white'
    };

    return (
      <div style={styles}>
        <h1 onClick={ () => this.handleClick() }>{this.state.count} - Im a class component. Hello {this.props.name}</h1>
        {this.state.isLoggedIn?
          <p>Welcome!</p> :
          <button onClick={ () => this.setState({ isLoggedIn: true }) }>Log in</button>
        }
      </div>
    )
  }
}

export default ExpenseItem;
