class HelloMessage extends React.Component {
  render() {
    return <div>Hola {this.props.name}</div>;
  }
}



// Uso de ejemplo: <ShoppingList name="Mark" />

const root = ReactDOM.createRoot(
  document.getElementById('root')
);


root.render(<HelloMessage name="Jhonatan" />);