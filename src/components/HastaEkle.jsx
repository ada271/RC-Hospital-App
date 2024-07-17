import React, { useState } from 'react'
import uuid from "react-uuid"
const HastaEkle = ({hastalar, setHastalar}) => {
const[hastaName,setHastaName]=useState("")
const[hastaTarih,setTarih]=useState("")

const handleSubmitt=(e)=>{
  e.preventDefault(); // direk submit olayını yapma önce alttaki kodlara bak

  setHastalar([
    ...hastalar,
    {
      id: uuid(),
      text: hastaName,
      day: hastaTarih,
      isDone: false,
      myDoctor: "DR İpek Bilir",
    },
  ]);

  // setHastalar a gidildiğinde hemen altta console.log varsa çalışıverir ve biz useState nin yaptığı işi göremeyiz. bunun için log bu submit fonksiyonunun dışında olmalı.

  setHastaName("");
  setTarih("");
  // submit sonrası inputlardan value temizlemek için, hem üstteki işlemler yapılır, hemde inputlarda value={isim} yazarak browser da boşluksa boşluk isimse isim gözükmesi sağlanır
}
console.log(hastalar);
  return (
    <div>
      <form onSubmit={handleSubmitt}>
        <div className="formControl">
          <label htmlFor="text">Hasta Bilgileri</label>
          <input
            type="text"
            id="text"
            onChange={(e) => setHastaName(e.target.value)}

            value={hastaName}
          />
        </div>

        <div className="formControl">
          <label htmlFor="day">Day & Time</label>
          <input
            type="datetime-local"
            id="day"
            onChange={(e) => setTarih(e.target.value)}
            value={hastaTarih}
          />
        </div>

        <button type="submit" className="kayit btn-submit">
          <span style={{ color: "#6a0707" }}> dr un adı</span> için kayıt
          oluştur
        </button>
      </form>
    </div>
  );
}

export default HastaEkle