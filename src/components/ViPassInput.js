const ViPassInput= (props) => {
    return(
         <div className="form-group">
        <label>{props.title}</label>
        <input 
          type="password"
          onChange={props.handleInputChange}
          name={props.name}
          value={props.value} 
          {...props}
          />
          { props.isSubmitted && props.value === '' &&
          <span class="label-danger"> Password is very much essential..</span>}
      </div>
  );
}


export default ViPassInput;