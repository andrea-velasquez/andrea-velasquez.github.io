import React, { Component } from "react";
import './FieldBlock.scss';

class FieldBlock extends Component {
  render() {
    let { fields, singleFieldClass, groupFieldClass } = this.props;
    return (
      <React.Fragment>
      {
        fields.map ( (field, fIdx) =>
          <div key={fIdx} className={`field field__group field__${groupFieldClass}`}>
          {
            field.map( (fieldItem, fiIdx) =>
              <div key={fiIdx} className={`field field__group field__${singleFieldClass}`}>
                <div className="field">
                  <span className="field__name">{fieldItem.name}: </span>
                  <span className="field__text">{fieldItem.text}</span>
                </div>
              </div>
            )
          }
          </div>
        )
      }
      </React.Fragment>
    );
  }
}

export default FieldBlock;
