import './App.css';
import DeductionAnalysis from './custom_components/DeductionAnalysis';
import DeductionOpportunities from './custom_components/DeductionOpportunities';
import TaxVisualization from './custom_components/TaxVisualization';
import TaxAdvisorValue from './custom_components/TaxAdvisorValue';

function App() {
  return (
    <>
      <DeductionAnalysis />
      <DeductionOpportunities />
      <TaxVisualization />
      <TaxAdvisorValue />
    </>
  );
}

export default App;
