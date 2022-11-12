
function SampleNextArrow(props){
    const{className, style,onClick}=props;
    return(
        <div className={className}
        style={{...style,display: 'block',background:'#565387',borderRadius:"50%"}}
        onClick={onClick}
        />

    );
}
export default SampleNextArrow