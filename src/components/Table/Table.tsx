import React from "react";
import "./styles.css";

interface ColDef {
  label?: string;
  field: string;
}
interface TableProps {
  data: object[];
  colDefs: ColDef[];
  onViewItem?: (item: any) => void;
}

interface CellProps {
  dataCell: object;
}

const Table = ({ colDefs, data, onViewItem }: TableProps) => {
  const Headers = () => {
    return (
      <div className="row header">
        {colDefs?.map((item: any) => (
          <div key={item.id} className="cell">
            {item.label}
          </div>
        ))}
        <div className="cell">Action</div>
      </div>
    );
  };

  const Cell = ({ dataCell }: any & CellProps) => {
    return (
      <React.Fragment>
        {colDefs?.map((item: any) => {
          type ObjectKey = keyof typeof dataCell;
          const field = item.field as ObjectKey;
          return (
            <div key={"celldata" + item.id} className="cell">
              {dataCell[field]}
            </div>
          );
        })}
      </React.Fragment>
    );
  };

  const Rows = () => {
    return (
      <React.Fragment>
        {data?.map((item: any) => (
          <div key={item.id} className="row">
            <Cell key={"cell" + item.id} dataCell={item} />
            <div
              className="cell"
              onClick={() => onViewItem && onViewItem(item)}
            >
              <div className="eye"></div>
            </div>
          </div>
        ))}
      </React.Fragment>
    );
  };

  return (
    <div className="table">
      <Headers />
      <Rows />
    </div>
  );
};
export default Table;
