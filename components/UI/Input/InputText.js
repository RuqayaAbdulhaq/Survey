"use client";

export default function InputText(props) {
  /**
   * ? TODO: change the styling of this component to match the design on figma
   */
  return (
    <div className="text-gray-400 focus-within:text-green-600 mb-10 input-box">
      <label for={props.name}>{props.label}: </label>
      <input
        className="ml-2 px-4 py-2 border-b bg-gray-100 rounded"
        type="text"
        name={props.name}
      />
    </div>
  );
}
