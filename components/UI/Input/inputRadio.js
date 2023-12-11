"use client";

export default function InputRadio(props) {
    
    return(
        <div>
            <style>
                {`
                    .radio_btn {
                        appearance: none;
                        -webkit-appearance: none;
                        -moz-appearance: none;
                        width: 15px;
                        height: 15px;
                        border: 1px solid #A5A5A5;
                        border-radius: 5px;
                        outline: none;
                        background-color: #F2F2F2;
                      }
                      
                      .radio_btn:checked {
                        background-color: #7f7f7f;
                      }

                      .radio_btn:disabled{
                        background-color: rgba(204, 204, 204, 0.2);
                        border: 1px solid rgba(0.647, 0.647, 0.647, 0.15);
                      }
                `}
            </style>
            <input name={props.name} className="radio_btn" type="radio"/>
        </div>
    );
}