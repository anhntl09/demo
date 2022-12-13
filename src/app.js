import * as React from "react";
import { TileLayout } from "@progress/kendo-react-layout";
function App(props) {
  const [data, setData] = React.useState([{
    col: 1,
    colSpan: 3,
    rowSpan: 1
  }, {
    col: 1,
    colSpan: 2,
    rowSpan: 1
  }, {
    col: 1,
    colSpan: 2,
    rowSpan: 2
  }, {
    col: 4,
    colSpan: 1,
    rowSpan: 1
  }, {
    col: 3,
    colSpan: 1,
    rowSpan: 1
  }, {
    col: 3,
    colSpan: 1,
    rowSpan: 1
  }, {
    col: 4,
    colSpan: 1,
    rowSpan: 2
  }, {
    col: 3,
    colSpan: 2,
    rowSpan: 1
  }]);
  const tiles = [{
    header: "Page Views",
    body: <div></div>
  }, {
    header: "Most Visited Pages",
    body: <div></div>
  }, {
    header: "Users by Channel",
    body: <div></div>
  }, {
    header: "Conversion Rate",
    body: <div>
    </div>
  }, {
    header: "Currently",
    body: <div></div>
  }, {
    header: "Bounce Rate",

    body: <div></div>
  }, {
    header: "Visitors",
    body: <div></div>
  }, {
    header: "Conversions This Month",
    body: <div></div>
  }];
  const handleReposition = e => {
    setData(e.value);
    console.log(e.value);
  };
  return <div>
    <TileLayout columns={4} rowHeight={255} positions={data} gap={{
      rows: 10,
      columns: 10
    }} items={tiles} onReposition={handleReposition} />
  </div>
};
export default App;