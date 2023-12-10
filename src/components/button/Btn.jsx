const variantClassNames = {
    "submit": "Class-Sumbit-Btn",
    "done": "Class-Done-Btn",
    "remove": "Class-Remove-Btn",
}
const Button = (props) => {
    const {variant , text, ...otherProps} = props;
    return ( <button className={variantClassNames[variant]} {...otherProps}>{text}</button> 
                

    
    
    
    
    );
}
 
export default Button;