import Metrics from "../components/Metrics"
import PredictionForm from "../components/PredictionForm";

function Dashboard(){
   return(
   <div>
        <h1 className="md-4">
            Bot Detection Dashboard
        </h1>
        <div className="row g-4">
            <div className="col-md-6">
                <Metrics/>
            </div>
            <div className="col-md-6">
                <PredictionForm/>

            </div>
        </div>
    </div>
);
}
export default Dashboard;