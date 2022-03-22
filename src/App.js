import categories from './categories';
import Card from './components/Card';
import './App.css';

// STYLE
const app = {
  background: '#190019'
}

// APP
const App = () => {
  return (
    <div style={app}>
      {categories.map(item => 
        <Card
          key={item.id} 
          title={item.title}
          body={item.body}
          img={item.img}
        />
      )}
    </div>
  );
}

export default App;
