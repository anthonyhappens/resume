import { HashRouter, Route, Switch } from 'react-router-dom';
import Portfolio from './pages/Portfolio';
// import Resume from './pages/Resume';
import Layout from './layout/Layout';

const App = () => {
  return (
    <HashRouter>
      <Switch>
        <Layout>
          <Route exact path="/" component={() => <Portfolio />} />
          <Route path="/portifolio" component={() => <Portfolio />} />
        </Layout>
      </Switch>
    </HashRouter>
  );
};

export default App;
