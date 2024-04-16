const ViTextInput= (props) => {
    return(
         <div className="form-group">
        <label>{props.title}</label>
        <input 
          type="text"
          onChange={props.handleInputChange}
          name={props.name}
          value={props.value} 
          {...props}
          />
          { props.isSubmitted && props.value === '' &&
          <span class="label-danger"> Username is required</span>}
      </div>
  );
}


export default ViTextInput;