import formJSON from "./formInput/formInput.json";
import Element from "./components/Element";
import { useState, useEffect } from "react";

function App() {
  const [elements, setElements] = useState(null);

  useEffect(() => {
    setElements(formJSON[0]);
  }, []);
  const { fields, page_label } = elements ?? {};
  return (
    <div className="App container">
      <h3>{page_label}</h3>
      <form>
        {fields
          ? fields.map((field, i) => <Element key={i} field={field} />)
          : null}
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
