import React from "react";
import "./music.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const songs = [
  { title: "Bloody SAMARITAN", artist: "Ayra Starr" },
  { title: "Bad INFLUENCE",artist: "Omah Lay" },
  { title: "ESSENCE", artist: "Wizkid" },
  { title: "49-99", artist: "Tiwa Savage" },
  { title: "CALM DOWN", artist: "Rema" }
];



function MusicCarousel() {
    const ayra = songs.filter(person=> person.artist === "Ayra Starr")
    const omah = songs.filter(person=> person.artist === "Omah Lay")
    const wiz = songs.filter(person=> person.artist === "Wizkid")
    const tiwa = songs.filter(person=> person.artist === "Tiwa Savage")
    const rema = songs.filter(person=> person.artist === "Rema" )

    return(
    <div style={{marginTop: "120px", padding: "20px"}} className="musicsection container-fluid d-flex " >
 <i style={{color: "blue", cursor: "pointer",  backgroundColor: "white", height: "50px" , width: "50px" , borderRadius: "50%",  marginTop:"65px", alignContent: "center"}} class="fa-solid fa-arrow-left"></i>
        <div class="card ms-3 " style={{width: "18rem"}}>
        {ayra.map(person =>
  <div  class="card-body text-white">
   
  <h5 style={{float: "left" , marginTop: "90px", fontSize: "15px"}} class="card-title">Bloody <br></br> <span style={{color: "yellow"}}>Samaritan</span></h5>
  <h6 style={{float: "right", marginTop: "130px"}}>{person.artist}</h6>
</div>
            )}
            </div>


<div class="card2" style={{width: "18rem", marginLeft: "50px"}}>
{omah.map(person=>
          <div  class="card-body text-white">
          <h5 style={{float: "left" , marginTop: "100px", fontSize: "15px"}} class="card-title">Bad <br></br> <span style={{color: "yellow"}}>Influence</span></h5>
          <h6 style={{float: "right", marginTop: "150px"}}>{person.artist}</h6>
        </div>
    )}
</div>

<div class="card3" style={{width: "18rem", marginLeft: "50px"}}>
    {rema.map(person=>
  <div  class="card-body text-white">
    <i style={{color: "yellow", marginTop: "120px", cursor: "pointer", backgroundColor: "blue" , alignContent: "center", borderRadius: "50%", height: "50px", width: "50px"}} class="fa-solid fa-play"></i>
  <h5 style={{ marginTop: "50px",  fontSize: "20px", color: "yellow"}} class="card-title">{person.title}</h5>
</div>
    )}

</div>

<div class="card4" style={{width: "18rem", marginLeft: "50px"}}>
    {tiwa.map(person=>
  <div  class="card-body text-white">
  <h5 style={{float: "left" , color: "yellow" , marginTop: "100px", fontSize: "15px"}} class="card-title">{person.title}</h5>
  <h6 style={{float: "right", marginTop: "150px"}}>{person.artist}</h6>
</div>
    )}

</div>

<div class="card5" style={{width: "18rem", marginLeft: "50px"}}>
    {wiz.map(person=>
  <div  class="card-body text-white">
  <h5 style={{float: "left" , marginTop: "100px", fontSize: "15px", color: "yellow"}} class="card-title">{person.title}</h5>
  <h6 style={{float: "right", marginTop: "150px"}}>{person.artist}</h6>
</div>

    )}

</div>
<i style={{color: "blue", cursor: "pointer", backgroundColor: "white", height: "50px" , width: "50px" , borderRadius: "50%", marginLeft: "15px", marginTop:"65px", alignContent: "center"}} class="fa-solid fa-arrow-right"></i>
    </div>
    )
}


export default MusicCarousel;
