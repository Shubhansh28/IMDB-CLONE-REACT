import {createRoot} from "react-dom/client"
import data from "./api";

console.log(data)
function roundUp(num, precision) {
    const factor = Math.pow(10, precision); 
    return Math.ceil(num * factor) / factor;
}
createRoot(document.getElementById('root')).render(
    <div style={{display:'grid', gridTemplateColumns:'repeat(4, 1fr)',gridAutoRows:'auto',width:'min(1100px, 100%)',gap:'20px',padding:'40px',justifyContent:'center'}}>
        {
        data.map((el,idx)=>{
        return (
            <div key={el.id} style={{borderRadius:'0 0 12px 12px',overflow:'hidden',boxShadow:'-0.7px 0.7px 4px gray'}}>
                <div>
                    <p style={{backgroundColor:'white', fontWeight:'bold',padding:'5px 7px',fontSize:'17px'}}>#{idx+1}</p>
                </div>
                <div>
                    <img style={{width:'100%', height:'80%', objectFit:'contain',display:'block'}} src={el.image} alt="guardian" />
                </div>
                <div style={{backgroundColor:'white', display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'flex-start',minHeight:'100px',padding:'10px', gap:'7px',fontFamily:'Roboto, Helvetica, Arial, sans-serif',fontWeight:'400',color:'rgba(0, 0, 0, 0.87)'}}>
                    <div style={{color:'rgba(0, 0, 0, 0.54)',minHeight:'24px',display:'flex',alignItems:'center',gap:'5px'}}>
                        <img style={{width:'20px',height:'20px',objectFit:'cover'}} src="/assets/icons8-star.gif" alt="rating"/>
                        {el.rt_score/10} ({roundUp((el.rt_score*2.9545/100),2)}M)
                    </div>
                    <p>{el.title}</p>
                    <div style={{display:'flex', gap:'13px',color:'rgba(0, 0, 0, 0.54)'}}>
                        <p>{el.release_date}</p>
                        <div style={{display:'flex',gap:'5px'}}>
                            <p>{Math.floor(el.running_time/60)}h</p>
                            <p>{el.running_time%60}m</p>
                        </div>
                    </div>
                    <button style={{border:'none',backgroundColor:'rgb(235,235,235)',padding:'10px',borderRadius:'20px', width:'150px',alignSelf:'center',fontFamily:'Roboto, Helvetica, Arial, sans-serif',fontSize:'14px',fontWeight:'600',color:'rgb(14, 99, 190)'}}>Watch Option</button>
                </div>
            </div>
        )
    })
        }
    </div>
)
