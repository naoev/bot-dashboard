function PredictionForm(){
    return(
        <div className="card shadow-sm">
            <div className="card-body">
                <h2 className="mb-4">
    Predicción
    </h2>
    <input 
    type="number" 
    className="form-control mb-3" 
    placeholder="Followers"/>
    <button className="btn btn-primary">
        Predecir
        </button>
        </div>
        </div>
)
}
export default PredictionForm;