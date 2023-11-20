"use client";

export default function InputText(props) {
  /**
   * ? TODO: change the styling of this component to match the design on figma
   */
  return (
    <div className="form__group">
      <style>
        {`
          .form__group {
            position: relative;
            padding: 15px 0 0;
            margin-top: 10px;
          }
          
          .form__field {
            font-family: inherit;
            width: 100%;
            border: 0;
            border-bottom: 1px solid #d2d2d2;
            outline: 0;
            font-size: 16px;
            color: #212121;
            padding: 7px 0;
            background: transparent;
            transition: border-color 0.2s;
          }
          
          .form__field::placeholder {
            color: transparent;
          }
          
          .form__field:placeholder-shown ~ .form__label {
            font-size: 16px;
            cursor: text;
            top: 20px;
          }
          
          label,
          .form__field:focus ~ .form__label {
            position: absolute;
            top: 0;
            display: block;
            transition: 0.2s;
            font-size: 12px;
            color: #9b9b9b;
          }
          
          .form__field:focus ~ .form__label {
            color: #009788;
          }
          
          .form__field:focus {
            padding-bottom: 6px;
            border-bottom: 2px solid #009788;
          }
        `}
      </style>
      <label className="form__label mb-10" htmlFor={props.name}>{props.label}: </label>
      <input
        className="form__field"
        type="text"
        name={props.name}
      />
    </div>
  );
}
